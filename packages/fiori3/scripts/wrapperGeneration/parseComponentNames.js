const fs = require('fs');
const path = require('path');
const PATHS = require(path.resolve(__dirname, '../', '../', 'config', 'paths.js'));

// create list of modules
const webComponentsModulePath = path.resolve(PATHS.rootNodeModules, '@ui5', 'webcomponents', 'dist');
const files = fs
  .readdirSync(webComponentsModulePath)
  .filter((file) => file.endsWith('.js'))
  .map((file) => path.basename(file, '.js'));

const appDirectory = fs.realpathSync(process.cwd());
const folderName = path.resolve(appDirectory, 'scripts', 'wrapperGeneration', 'json');

if (!fs.existsSync(folderName)) {
  fs.mkdirSync(folderName);
}

console.log(files);

fs.writeFileSync(path.resolve(folderName, 'modules.json'), JSON.stringify(files));
