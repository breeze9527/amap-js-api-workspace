require('dotenv').config();
const fs = require('fs');
const path = require('path');
const fsp = fs.promises;
const env = process.env;
const REG_WIN_SEP = /\\/g;
const REG_DEFINITION_EXT = /\.d\.ts$/;

const cwd = process.cwd();
const exclueDir = ['test', 'index.d.ts'];

async function getTypePaths(basePath) {
    const result = [];
    const walk = async (subPath) => {
        const targetPath = path.join(basePath, subPath);
        const dirents = fs.readdirSync(targetPath, { withFileTypes: true });
        const subDirs = [];
        dirents.forEach(dirent => {
            const name = dirent.name;
            if (exclueDir.includes(name)) {
                return;
            }
            const typeRelatePath = subPath ? `${subPath}/${name}` : name;
            if (dirent.isFile() && REG_DEFINITION_EXT.test(name)) {
                result.push(typeRelatePath);
            }
            if (dirent.isDirectory()) {
                subDirs.push(typeRelatePath);
            }
        });
        return Promise.all(subDirs.map(subDir => walk(subDir)));
    }
    await walk('');
    return result;
}

async function writeIndexFile(basePath, typePaths, version) {
    let content = [`// TypeScript Version: ${version}`];
    content.push('');
    typePaths.map(path => {
        content.push(`/// <reference path="${path}" />`);
    });
    content.push('');
    return fsp.writeFile(path.join(basePath, 'index.d.ts'), content.join('\n'));
}

async function updateAMapIndex(typeName) {
    const baeePath = path.join(cwd, env.TYPES_DIR, typeName);
    const version = env.TYPESCRIPT_VERSION;
    const paths = await getTypePaths(baeePath);
    await writeIndexFile(baeePath, paths, version);
}

const [argTypeName] = process.argv.slice(2);

updateAMapIndex(argTypeName);
