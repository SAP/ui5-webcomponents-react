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
  }
};

export const generatedDefaultStory = () => (
  <ProductSwitch>
    <ProductSwitchItem heading="Home" subtitle="Central Home" icon="home" />
    <ProductSwitchItem heading="Analytics Cloud" subtitle="Analytics Cloud" icon="business-objects-experience" />
    <ProductSwitchItem heading="Catalog" subtitle="Ariba" icon="contacts" />
    <ProductSwitchItem heading="Travel & Expense" subtitle="Concur" icon="flight" />
  </ProductSwitch>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
