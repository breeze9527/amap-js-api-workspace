const fs = require('fs');
const path = require('path');

const CWD = process.cwd();
const typesDir = path.join(CWD, 'types');
const typeExclude = ['test', 'index.d.ts', 'util.d.ts'];
const REG_WIN_SEP = /\\/g;
const REG_DEFINITION_EXT = /\.d\.ts$/;

function getFilePath(relatePath = '') {
    let excludePath = typeExclude.map(name => path.join(relatePath, name));
    let targetPath = path.join(typesDir, relatePath);
    return new Promise((resolve, reject) => {
        fs.readdir(targetPath, { withFileTypes: true }, (err, dirents) => {
            if (err) {
                reject(err);
            } else {
                let result = [];
                let subDirs = [];
                dirents.forEach(dirent => {
                    let name = path.join(relatePath, dirent.name);
                    if (excludePath.includes(name)) {
                        return;
                    }
                    name = name.replace(REG_WIN_SEP, '/');
                    if (dirent.isFile()) {
                        if (REG_DEFINITION_EXT.test(name)) {
                            result.push(name);
                        }
                    } else if (dirent.isDirectory()) {
                        subDirs.push(name);
                    }
                });
                if (subDirs.length !== 0) {
                    resolve(Promise.all(subDirs.map(subDir => getFilePath(subDir))).then(item => result = result.concat.apply(result, item)));
                } else {
                    resolve(result);
                }
            }
        });
    });
}

function writeIndexFile(paths, version) {
    let content = [`// TypeScript Version: ${version}`];
    content.push('');
    paths.map(path => {
        content.push(`/// <reference path="${path}" />`);
    });
    content.push('');
    fs.writeFileSync(path.join(typesDir, 'index.d.ts'), content.join('\n'));
}


getFilePath('').then(dirs => {
    writeIndexFile(dirs, '2.9');
});
