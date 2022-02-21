import dedent from 'dedent';
import fs from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import rimraf from 'rimraf';

const dir = fileURLToPath(new URL('../webComponents', import.meta.url));

rimraf.sync(dir);

// copy full src dir
fs.cpSync(new URL('../dist/webComponents', import.meta.url), dir, { recursive: true });

rimraf.sync('webComponents/*/*.js.map');

fs.readdirSync(dir)
  .filter((file) => fs.statSync(resolve(dir, file)).isDirectory())
  .forEach((component) => {
    fs.writeFileSync(resolve(dir, component, 'index.d.ts'), `export * from '../../dist/webComponents/${component}';\n`);
    fs.writeFileSync(
      resolve(dir, component, 'index.js'),
      dedent`
        import { deprecationNotice } from '@ui5/webcomponents-react-base';
       
        deprecationNotice('${component}', \`importing from '@ui5/webcomponents-react/webComponents/${component}' is deprecated. Please use "import { ${component} } from '@ui5/webcomponents-react';" instead.\`);
        
        export * from '../../dist/webComponents/Avatar';\n
        `
    );
  });
