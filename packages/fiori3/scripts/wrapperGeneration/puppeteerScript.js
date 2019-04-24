import { generateTypings } from './generateTypingsWeb';
const modules = require('./json/modules');

modules.forEach((moduleName) => {
  import(
    /* webpackMode: "eager" */
    '@ui5/webcomponents/dist/' + moduleName
  ).then((module) => {
    const WebComponent = module.default;
    if (WebComponent && WebComponent.getMetadata) {
      const metadata = WebComponent.getMetadata().metadata;
      const dto = {
        componentName: moduleName,
        metadata,
        typings: generateTypings(metadata)
      };
      console.log(JSON.stringify(dto));
    }
  });
});

console.log(modules);
