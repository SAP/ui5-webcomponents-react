const fs = require('fs');
const path = require('path');
const PATHS = require('../../../../config/paths');

const PRIVATE_COMPONENTS = [
  'CalendarHeader',
  'DefaultTheme',
  'DayPicker',
  'ListItem',
  'ListItemBase',
  'MessageBundleAssets',
  'MonthPicker',
  'Popup',
  'TabBase',
  'ThemePropertiesProvider',
  'YearPicker'
];

const appDirectory = fs.realpathSync(process.cwd());
const folderName = path.resolve(appDirectory, 'scripts', 'wrapperGeneration', 'json');

if (!fs.existsSync(folderName)) {
  fs.mkdirSync(folderName);
}

// create list of modules
const webComponentsModulePath = path.resolve(PATHS.nodeModules, '@ui5', 'webcomponents', 'dist');
const standardWebComponents = fs
  .readdirSync(webComponentsModulePath)
  .filter((file) => file.endsWith('.js'))
  .map((file) => path.basename(file, '.js'))
  .filter((file) => !PRIVATE_COMPONENTS.includes(file));
fs.writeFileSync(path.resolve(folderName, 'webcomponents.json'), JSON.stringify(standardWebComponents));

const fioriWebComponentsFolder = path.resolve(PATHS.nodeModules, '@ui5', 'webcomponents-fiori', 'dist');
const fioriWebComponents = fs
  .readdirSync(fioriWebComponentsFolder)
  .filter((file) => file.endsWith('.js'))
  .map((file) => path.basename(file, '.js'))
  .filter((file) => !PRIVATE_COMPONENTS.includes(file));
fs.writeFileSync(path.resolve(folderName, 'webcomponents-fiori.json'), JSON.stringify(fioriWebComponents));
