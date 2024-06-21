import type { Meta, StoryObj } from '@storybook/react';
import businessObjectsExperienceIcon from '@ui5/webcomponents-icons/dist/business-objects-experience.js';
import contactsIcon from '@ui5/webcomponents-icons/dist/contacts.js';
import flightIcon from '@ui5/webcomponents-icons/dist/flight.js';
import homeIcon from '@ui5/webcomponents-icons/dist/home.js';
import wrenchIcon from '@ui5/webcomponents-icons/dist/wrench.js';
import { ProductSwitchItem } from '../ProductSwitchItem/index.js';
import { ProductSwitch } from './index.js';

const meta = {
  title: 'Inputs / ProductSwitch',
  component: ProductSwitch,
  argTypes: {
    children: { control: { disable: true } }
  },
  tags: ['package:@ui5/webcomponents-fiori']
} satisfies Meta<typeof ProductSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return (
      <ProductSwitch {...args}>
        <ProductSwitchItem
          titleText={'ProductSwitchItem'}
          icon={wrenchIcon}
          target="_blank"
          targetSrc="https://sap.github.io/ui5-webcomponents-react/"
        />
        <ProductSwitchItem titleText="Home" subtitleText="Central Home" icon={homeIcon} />
        <ProductSwitchItem
          titleText="Analytical Cloud"
          subtitleText="Analytical Cloud"
          icon={businessObjectsExperienceIcon}
        />
        <ProductSwitchItem titleText="Catalog" subtitleText="Ariba" icon={contactsIcon} />
        <ProductSwitchItem titleText="Travel & Expense" subtitleText="Concur" icon={flightIcon} />
      </ProductSwitch>
    );
  }
};
