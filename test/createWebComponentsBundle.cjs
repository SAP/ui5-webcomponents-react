const path = require('path');
const fs = require('fs');

const webComponentsPath = path.resolve(__dirname, '..', 'node_modules', '@ui5', 'webcomponents', 'dist');
const webComponentsFioriPath = path.resolve(__dirname, '..', 'node_modules', '@ui5', 'webcomponents-fiori', 'dist');

const filesToImport = ['@ui5/webcomponents-react/dist/Assets'];

filesToImport.push(
  ...fs
    .readdirSync(webComponentsPath)
    .filter((file) => fs.statSync(`${webComponentsPath}/${file}`).isFile() && path.extname(file) === '.js')
    .map((file) => `@ui5/webcomponents/dist/${file}`)
);

filesToImport.push(
  ...fs
    .readdirSync(webComponentsFioriPath)
    .filter((file) => fs.statSync(`${webComponentsFioriPath}/${file}`).isFile() && path.extname(file) === '.js')
    .map((file) => `@ui5/webcomponents-fiori/dist/${file}`)
);

module.exports = () => {
    fs.writeFileSync(path.join(__dirname, 'WebComponentsImports.json'), JSON.stringify(filesToImport));
}
