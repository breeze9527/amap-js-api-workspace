const fs = require('fs');
const path = require('path');
const CWD = process.cwd();

const SRC_DIR = path.join(CWD, './playground');
const DIST_DIR = path.join(CWD, './dist');
const VIEW_TEMPLATE = fs.readFileSync(path.join(SRC_DIR, './template.html'), { encoding: 'utf8' });
const INDEX_TEMPLATE = fs.readFileSync(path.join(SRC_DIR, './index.html'), { encoding: 'utf8' });

fs.readdir(DIST_DIR, (err, dirs) => {
    if (err) {
        throw err;
    }
    dirs.forEach(dir => {
        const extraHTMLPath = path.join(SRC_DIR, dir, 'view.html');
        var extraHTML = '';
        if (fs.existsSync(extraHTMLPath)) {
            extraHTML = fs.readFileSync(extraHTMLPath, { encoding: 'utf8' });
        }
        const htmlContent = VIEW_TEMPLATE
            .replace('%TITLE%', dir)
            .replace('%EXTRA_HTML_REPLACE%', extraHTML);

        fs.writeFile(path.join(DIST_DIR, dir, 'index.html'), htmlContent, () => { });
    });

    let indexContent = '<ul>\n';
    indexContent += dirs.map(dir => `<li><a href="./${dir}/index.html">${dir}</a></li>\n`).join('');
    indexContent += '</ul>\n'
    fs.writeFile(path.join(DIST_DIR, 'index.html'), INDEX_TEMPLATE.replace('%BODY%', indexContent), () => { });
});
