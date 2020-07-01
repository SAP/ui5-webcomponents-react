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
    heading: 'Home',
    subtitle: 'Central Home',
    icon: 'home'
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
    <ProductSwitchItem heading={props.heading} subtitle={props.subtitle} icon={props.icon} />
    <ProductSwitchItem heading={props.heading} subtitle={props.subtitle} icon={props.icon} />
    <ProductSwitchItem heading={props.heading} subtitle={props.subtitle} icon={props.icon} />
    <ProductSwitchItem heading={props.heading} subtitle={props.subtitle} icon={props.icon} />
  </ProductSwitch>
);

generatedDefaultStory.storyName = 'Generated default story';
