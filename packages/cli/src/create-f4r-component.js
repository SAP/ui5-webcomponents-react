/**
 * Created by d059190 at 14.03.18
 */
const commander = require('commander');
const dedent = require('dedent');
const fs = require('fs');
const chalk = require('chalk');
const path = require('path');
const pkg = require('../package.json');
const ora = require('ora');

let componentName = null;

const program = new commander.Command('create-f4r-component')
  .version(pkg.version)
  .arguments('<Component-Name>')
  .action((name) => {
    componentName = name;
  })
  .parse(process.argv);

if (!componentName) {
  console.error('Please specify a component Name');
  console.log(`  ${chalk.cyan(program.name())} ${chalk.green('<Component-Name>')}`);
  process.exit(1);
}

const appDirectory = fs.realpathSync(process.cwd());
const folderName = path.resolve(appDirectory, 'src', 'components', componentName);

if (fs.existsSync(folderName)) {
  console.error('Component already exists');
  process.exit(1);
}

fs.mkdirSync(folderName);

const jsxSpinner = ora('Creating index.tsx').start();
// create jsx
const jsxContent = `
import React, { Component, ComponentClass } from 'react';
import { withStyles } from '@ui5/webcomponents-react-base';
import styles from './${componentName}.jss';
import { ClassProps } from '../../types/ClassProps';

export interface ${componentName}PropTypes {
  // TODO Add Prop Types
}

interface ${componentName}InternalProps extends ${componentName}PropTypes, ClassProps {}

export interface ${componentName}Component extends ComponentClass<${componentName}PropTypes> {}

@withStyles(styles)
class ${componentName} extends Component<${componentName}InternalProps> {
  
  static defaultProps = {
    // TODO Add Default Props
  };
  
  render() {
    return (
      <div>Your component implementation</div>
    );
  }
}


export default ${componentName} as ${componentName}Component;

`;
fs.writeFileSync(`${folderName}/index.tsx`, jsxContent);
jsxSpinner.succeed();

// Create JSS Stylesheet
const stylesheetSpinner = ora('Creating Stylesheets').start();

const stylesheetContent = dedent`
/**
 * Style Class Generator Function
 *
 * @param {Object} themeContext - Current Theme Context by JSS Provider.
 * @param {string} obj.theme - Current Theme (sap_belize, sap_belize_plus, etc.)
 * @param {string} obj.contentDensity - Current Content Density (Cozy, Compact)
 * @param {object} obj.parameters - Theming parameters (e.g. LabelColor)
 */
const styles = ({theme, contentDensity, parameters}) => ({
  // TODO Add your style classes here
});

export default styles;

`;

fs.writeFileSync(`${folderName}/${componentName}.jss.ts`, stylesheetContent);
stylesheetSpinner.succeed();

const demoSpinner = ora('Creating Demo').start();
// create demo story
const demoContent = dedent`
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import themr from '../../../stories/decorators/Themr';
import ${componentName} from './index.tsx';

function renderStory() {
  return (
    <${componentName} />
  );
}

storiesOf('${componentName}', module)
  .addDecorator(themr)
  .add('Default', withInfo()(renderStory));

`;
fs.writeFileSync(`${folderName}/demo.stories.jsx`, demoContent);
demoSpinner.succeed();

// create test
const testSpinner = ora('Creating Test').start();
const testContent = `
import React from 'react';
import { shallow } from 'enzyme';
import ${componentName} from './index.tsx';

test('Render without Crashing', () => {
  shallow(<${componentName} />);
});

`;
fs.writeFileSync(`${folderName}/${componentName}.test.js`, testContent);
testSpinner.succeed();

console.log(chalk.green(`Successfully created ${componentName}`));
process.exit(0);
