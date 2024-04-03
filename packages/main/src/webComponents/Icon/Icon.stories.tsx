import cem from '@sb/custom-element-manifests/main.json';
import type { Meta, StoryObj } from '@storybook/react';
import employeeIcon from '@ui5/webcomponents-icons/dist/employee.js';
import { Icon } from './index.js';

//todo: remove custom description once JSDoc transforming is fixed
const description = cem.modules
  .find((item) => item.path === 'dist/Icon.js')
  .declarations.find((item) => item.kind === 'class').description;

function iconSummaryFormatter(htmlDesc: string) {
  const summary = htmlDesc.replace(/###\s?Overview\n*/, '').replace(/### ES6 Module Import\n*`.+`/, '');
  return summary.replaceAll('ui5-icon', 'Icon');
}

const meta = {
  title: 'Data Display / Icon',
  component: Icon,
  argTypes: {},
  args: {
    name: employeeIcon
  },
  parameters: {
    docs: {
      description: {
        component:
          iconSummaryFormatter(description) +
          '\n__Note:__ This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)'
      }
    }
  },
  tags: ['package:@ui5/webcomponents']
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
