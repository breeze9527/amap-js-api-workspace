require('dotenv').config();
const fse = require('fs-extra');
const fs = require('fs');
const fsp = fs.promises;
const path = require('path');

const cwd = process.cwd();
const env = process.env;
const typeDistPath = path.join(cwd, env.TYPE_DIST_DIR);
const typesDir = path.join(cwd, env.TYPES_DIR);
const coreTypeName = env.CORE_TYPE_NAME;
const definitionName = env.TYPE_NAME;
const REG_TYPE_REF = /^\s*\/\/\/<reference types="(\w+)"\s* \/>\s$/g;

const getHeaders = (version, authors, projectUrl) => {
    const versionStr = version.split('.').slice(0, 2).join('.');
    const headers = [
        `// Type definitions for non-npm package amap-js-sdk 1.4`,
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

function validateSrc(srcPath) {
    const checkFileExist = fileName => {
        const filePath = path.join(srcPath, fileName);
        if (!fs.existsSync(filePath)) {
            throw new Error(`${filePath} not found`);
        }
    }
    checkFileExist('tsconfig.json');
    checkFileExist('tslint.json');
    checkFileExist('index.d.ts');
    checkFileExist('meta.json');
}

function getDistTypeName(typeName) {
    return typeName === coreTypeName ? definitionName : `${definitionName}-${typeName}`;
}

// async function updateTsConfig(tsconfigPath) {
//     const tsconfigContent = await fse.readJSON(tsconfigPath);
//     const compileOption = tsconfigContent.compilerOptions;
//     delete compileOption.baseUrl;
//     delete compileOption.typeRoots;
//     delete compileOption.types;
//     await fse.writeJson(tsconfigPath, tsconfigContent, {
//         spaces: '    '
//     });
// }

async function updateDefIndex(indexPath, meta) {
    const indexContent = await fsp.readFile(indexPath, 'utf8');
    const header = getHeaders(
        meta.amapVersion || env.AMAP_VERSION,
        meta.authors,
        meta.project || env.DEFAULT_PROJECT_ADDRESS
    );
    const newContent = indexContent.replace(REG_TYPE_REF, (matchedStr, typeName) => {
        return getDistTypeName(typeName);
    });
    await fsp.writeFile(indexPath, `${header}\n${newContent}`);
}

async function updateTslintConfig(tslintConfigPath) {
    const tslintConfig = await fse.readJSON(tslintConfigPath);
    tslintConfig.extends = 'dtslint/dt.json';
    await fse.writeJSON(tslintConfigPath, tslintConfig, {spaces: '    '});
}

async function distType(typeName) {
    const srcPath = path.join(typesDir, typeName);
    const distPath = path.join(typeDistPath, getDistTypeName(typeName));
    // validate
    validateSrc(srcPath);
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
        // updateTsConfig(path.join(distPath, 'tsconfig.json')),
        updateDefIndex(path.join(distPath, 'index.d.ts'), meta),
        updateTslintConfig(path.join(distPath, 'tslint.json'))
    ])
}

const [typeName] = process.argv.slice(2);

distType(typeName);
