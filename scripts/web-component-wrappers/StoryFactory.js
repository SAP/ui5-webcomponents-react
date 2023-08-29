import fs from 'node:fs';
import path from 'node:path';
import PATHS from '../../config/paths.js';
import { renderCsf, renderStory } from './templates/index.js';
import versionInfo from './version-info.json' assert { type: 'json' };

const webComponentsFolderPath = path.join(PATHS.packages, 'main', 'src', 'webComponents');

export async function createStory(componentSpec, componentProps) {
  const componentName = componentSpec.module;
  const enumImports = [];
  const args = [];
  const customArgTypes = [];

  componentProps.forEach((prop) => {
    if (prop.importStatement && prop.importStatement !== `import { ReactNode } from 'react';`) {
      enumImports.push(prop.importStatement);
    }
    if (componentSpec.module === 'Icon' && prop.name === 'name') {
      enumImports.push(`import employeeIcon from "@ui5/webcomponents-icons/dist/employee.js";`);
      args.push(`name: employeeIcon`);
    }
    if (prop.name === 'primaryCalendarType') {
      enumImports.push(`import "@ui5/webcomponents-localization/dist/features/calendar/Gregorian.js";`);
      enumImports.push(`import "@ui5/webcomponents-localization/dist/features/calendar/Buddhist.js";`);
      enumImports.push(`import "@ui5/webcomponents-localization/dist/features/calendar/Islamic.js";`);
      enumImports.push(`import "@ui5/webcomponents-localization/dist/features/calendar/Japanese.js";`);
      enumImports.push(`import "@ui5/webcomponents-localization/dist/features/calendar/Persian.js";`);
    }
    if (prop.name === 'moreColors') {
      enumImports.push(`import '@ui5/webcomponents/dist/features/ColorPaletteMoreColors.js';`);
    }
    if (prop.name === 'children') {
      if (
        prop.description.includes(
          'Аlthough this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.'
        )
      ) {
        args.push(`children: "${componentName} Text"`);
        customArgTypes.push(`children: {control: 'text'}`);
      } else {
        customArgTypes.push(`children: {control: {disable:true}}`);
      }
    } else if (prop.name === 'icon') {
      enumImports.push(`import employeeIcon from "@ui5/webcomponents-icons/dist/employee.js";`);
      enumImports.push(`import { Icon } from '../Icon/index.js';`);
      if (prop.tsType === 'string') {
        args.push(`icon: employeeIcon`);
      }
      if (prop.tsType.includes('ReactNode')) {
        customArgTypes.push(`icon: {control: {disable: true}}`);
        args.push(`icon: <Icon name={employeeIcon} />`);
      }
    } else if (prop.tsType.includes('ReactNode') || prop.tsType === 'unknown') {
      customArgTypes.push(`${prop.name}: {control: {disable:true}}`);
    }
    if (prop.isEnum) {
      const type = prop.tsType.split(' ')[0];
      const defaultValue = prop.defaultValue ? `.${prop.defaultValue.replace(/['"]/g, '')}` : '';
      args.push(`${prop.name}: ${type}${defaultValue}`);
    }
  });

  fs.writeFileSync(
    path.join(webComponentsFolderPath, componentName, `${componentName}.stories.tsx`),
    await renderCsf({
      name: componentName,
      imports: enumImports,
      customArgTypes,
      args
    })
  );
}

export async function createDocumentation(componentSpec, componentProps, hasDescription) {
  const componentName = componentSpec.module;
  const importStatements = [];

  console.warn(`Story created for ${componentName}!\nPlease remember to add the story to an existing group.`);

  const additionalComponents = componentSpec.hasOwnProperty('appenddocs')
    ? componentSpec.appenddocs
        .split(' ')
        .map((namespacedComponent) => namespacedComponent.replace(/sap\.ui\.webc\.(base|main|fiori)\./, ''))
    : [];

  if (additionalComponents.length > 0) {
    importStatements.push(`import { ${additionalComponents.join(', ')} } from '../index.js';`);
  }

  fs.writeFileSync(
    path.join(webComponentsFolderPath, componentName, `${componentName}.mdx`),
    await renderStory({
      name: componentName,
      since: versionInfo[componentSpec.since],
      imports: importStatements,
      additionalComponentDocs: additionalComponents,
      hasDescription,
      hasDomRef: fs.existsSync(path.join(webComponentsFolderPath, componentName, `${componentName}DomRef.json`))
    })
  );
}
