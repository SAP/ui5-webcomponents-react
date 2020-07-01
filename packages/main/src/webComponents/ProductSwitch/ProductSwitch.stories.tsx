import '@ui5/webcomponents-icons/dist/icons/business-objects-experience';
import '@ui5/webcomponents-icons/dist/icons/contacts';
import '@ui5/webcomponents-icons/dist/icons/flight';
import '@ui5/webcomponents-icons/dist/icons/home';
import { ProductSwitch } from '@ui5/webcomponents-react/lib/ProductSwitch';
import { ProductSwitchItem } from '@ui5/webcomponents-react/lib/ProductSwitchItem';
import React from 'react';

export default {
  title: 'UI5 Web Components / ProductSwitch',
  component: ProductSwitch,
  parameters: {
    subcomponents: { ProductSwitchItem }
  },
  args: {
    heading1: 'Home',
    subtitle1: 'Central Home',
    icon1: 'home',
    heading2: 'Analytical Cloud',
    subtitle2: 'Analytical Cloud',
    icon2: 'business-objects-experience',
    heading3: 'Catalog',
    subtitle3: 'Ariba',
    icon3: 'contacts',
    heading4: 'Travel & Expense',
    subtitle4: 'Concur',
    icon4: 'flight'
  },
  argTypes: {
    children: {
      type: null
    },
    ref: {
      type: null
    }
  }
};

export const generatedDefaultStory = (props) => (
  <ProductSwitch>
    <ProductSwitchItem heading={props.heading1} subtitle={props.subtitle1} icon={props.icon1} />
    <ProductSwitchItem heading={props.heading2} subtitle={props.subtitle2} icon={props.icon2} />
    <ProductSwitchItem heading={props.heading3} subtitle={props.subtitle3} icon={props.icon3} />
    <ProductSwitchItem heading={props.heading4} subtitle={props.subtitle4} icon={props.icon4} />
  </ProductSwitch>
);

generatedDefaultStory.storyName = 'Generated default story';
