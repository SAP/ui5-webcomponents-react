import { generateTypings } from './generateTypingsWeb';

const modules = require('./json/webcomponents');
const fioriWebComponents = require('./json/webcomponents-fiori');

const createAndLogDto = (componentName, module) => {
  const WebComponent = module.default;
  if (WebComponent && WebComponent.getMetadata) {
    const metadata = WebComponent.getMetadata().metadata;
    const dto = {
      componentName,
      metadata,
      typings: generateTypings(metadata)
    };
    console.log(JSON.stringify(dto));
  }
};

modules.forEach((moduleName) => {
  import(
    /* webpackMode: "eager" */
    '@ui5/webcomponents/dist/' + moduleName
  ).then((module) => {
    createAndLogDto(moduleName, module);
  });
});
fioriWebComponents.forEach((moduleName) => {
  import(
    /* webpackMode: "eager" */
    '@ui5/webcomponents-fiori/dist/' + moduleName
  ).then((module) => {
    createAndLogDto(moduleName, module);
  });
});
