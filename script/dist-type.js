require('dotenv').config();
const fse = require('fs-extra');
const fs = require('fs');
const fsp = fs.promises;
const path = require('path');

const cwd = process.cwd();
const env = process.env;
const typeDistPath = path.join(cwd, env.TYPE_DIST_DIR);
const typesDir = path.join(cwd, env.TYPES_DIR);
const {
    CORE_TYPE_NAME,
    DEFINITION_NAME,
    AMAP_VERSION,
    DEFAULT_PROJECT_ADDRESS,
    TEST_DIR,
    TEST_PRESET_FILENAME
} = env;
const REG_TYPE_REF = /^\/\/\/\s*<reference types="([^"]+)"\s* \/>/gm;

const getHeaders = (typeName, version, authors, projectUrl) => {
    const versionStr = version.split('.').slice(0, 2).join('.');
    const headers = [
        `// Type definitions for non-npm package ${typeName} ${versionStr}`,
        `// Project: ${projectUrl}`,
        ...authors.map((author, index) => {
            const prefix = '// Definitions by: ';
            const spacePrefix = ' '.repeat(prefix.length);
            return `${index === 0 ? prefix : spacePrefix}${author.name} <${author.github}>`;
        }),
        '// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped'
    ]
    return headers.join('\n');
}

function validateSrc(srcPath, typeName) {
    const checkFound = fileName => {
        const filePath = path.join(srcPath, fileName);
        return fs.existsSync(filePath);
    }
    const validateFileExist = fileName => {
        if (Array.isArray(fileName)) {
            if (fileName.every(name => !checkFound(name))) {
                throw new Error(`${fileName.join(',')} not found`);
            }
        } else {
            if (!checkFound(fileName)) {
                throw new Error(`${fileName} not found`);
            }
        }
    }
    validateFileExist('tsconfig.json');
    validateFileExist(['test', `${typeName}-tests.ts`]);
    validateFileExist('tslint.json');
    validateFileExist('index.d.ts');
    validateFileExist('meta.json');
}

function getDistTypeName(typeName) {
    return typeName === CORE_TYPE_NAME ? DEFINITION_NAME : `${DEFINITION_NAME}-${typeName}`;
}

async function walkFiles(basePath, fileTest) {
    const result = [];
    const walk = async (subPath) => {
        const targetPath = path.join(basePath, subPath);
        const dirents = fs.readdirSync(targetPath, { withFileTypes: true });
        const subDirs = [];
        dirents.forEach(dirent => {
            const name = dirent.name;
            const typePath = subPath ? `${subPath}/${name}` : name;
            if (dirent.isFile() && fileTest.test(name)) {
                result.push(typePath);
            }
            if (dirent.isDirectory()) {
                subDirs.push(typePath);
            }
        });
        return Promise.all(subDirs.map(subDir => walk(subDir)));
    }
    await walk('');
    return result;
}

async function updateTsConfig(typeDistPath, distTypeName) {
    const basePath = path.join(typeDistPath, distTypeName);
    const tsconfigPath = path.join(basePath, 'tsconfig.json');
    const tsconfigContent = await fse.readJSON(tsconfigPath);
    const files = await walkFiles(basePath, /\.d\.ts$/);
    tsconfigContent.files = files.sort().concat(`${distTypeName}-tests.ts`);
    await fse.writeJson(tsconfigPath, tsconfigContent, {
        spaces: '    '
    });
}

async function updateDefIndex(typeDistPath, distTypeName, meta) {
    const distPath = path.join(typeDistPath, distTypeName);
    const indexPath = path.join(distPath, 'index.d.ts');
    const indexContent = await fsp.readFile(indexPath, 'utf8');
    const header = getHeaders(
        distTypeName,
        meta.amapVersion || AMAP_VERSION,
        meta.authors,
        meta.project || DEFAULT_PROJECT_ADDRESS
    );
    const newContent = indexContent.replace(REG_TYPE_REF, (matchedStr, depTypeName) => {
        return `/// <reference types="${getDistTypeName(depTypeName)}" />`;
    });
    await fsp.writeFile(indexPath, `${header}\n${newContent}`);
}

async function updateTslintConfig(distPath) {
    const tslintConfigPath = path.join(distPath, 'tslint.json');
    const tslintConfig = await fse.readJSON(tslintConfigPath);
    tslintConfig.extends = 'dtslint/dt.json';
    await fse.writeJSON(tslintConfigPath, tslintConfig, { spaces: '    ' });
}

async function mergeTestFiles(distPath, distTypeName) {
    const basePath = path.join(distPath, TEST_DIR);
    const testFiles = await walkFiles(basePath, /^[^.]+\.ts$/);
    const presetFileIndex = testFiles.indexOf(TEST_PRESET_FILENAME);
    if (presetFileIndex !== -1) {
        testFiles.splice(presetFileIndex, 1);
        testFiles.unshift(TEST_PRESET_FILENAME);
    }
    const testContents = await Promise.all(testFiles.map(async (filePath) => {
        const fileContent = await fsp.readFile(path.join(basePath, filePath), 'utf8');
        return [
            '/**',
            ` * ${filePath}`,
            ' */',
            '',
            fileContent
        ].join('\n');
    }));
    await fse.emptyDir(basePath);
    await Promise.all([
        fsp.rmdir(basePath),
        fsp.writeFile(path.join(basePath, `../${distTypeName}-tests.ts`), testContents.join('\n'))
    ]);
}

async function distTestFile(distPath, typeName, distTypeName) {
    if (typeName === distTypeName) {
        return Promise.resolve();
    } else {
        return fsp.rename(path.join(distPath, `${typeName}-tests.ts`), path.join(distPath, `${distTypeName}-tests.ts`))
    }
}

async function distType(typeName) {
    const srcPath = path.join(typesDir, typeName);
    const distTypeName = getDistTypeName(typeName);
    const distPath = path.join(typeDistPath, distTypeName);
    // validate
    validateSrc(srcPath, typeName);
    // clean
    if (fs.existsSync(distPath)) {
        await fse.emptyDir(distPath);
        await fsp.rmdir(distPath);
    }
    await fse.ensureDir(distPath);

    await fse.copy(srcPath, distPath);
    // meta.json
    const metaPath = path.join(distPath, 'meta.json');
    const meta = await fse.readJSON(metaPath);
    await fsp.unlink(metaPath);

    await Promise.all([
        updateTsConfig(typeDistPath, distTypeName),
        updateDefIndex(typeDistPath, distTypeName, meta),
        updateTslintConfig(distPath),
        fs.existsSync(path.join(distPath, TEST_DIR)) ? mergeTestFiles(distPath, distTypeName) : distTestFile(distPath, typeName, distTypeName)
    ])
}

const [typeName] = process.argv.slice(2);

distType(typeName);
