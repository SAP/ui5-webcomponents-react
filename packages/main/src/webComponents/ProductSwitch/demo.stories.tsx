import { text } from '@storybook/addon-knobs';
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
    <ProductSwitchItem
      heading={text('heading', 'SAP')}
      subtitle={text('subtitle', 'Website')}
      icon="add"
      targetSrc={text('targetSrc', 'https://sap.com')}
      target={text('target', '_blank')}
    />
    <ProductSwitchItem
      heading="UI5 Web Components"
      targetSrc="https://github.com/SAP/ui5-webcomponents"
      target="_blank"
      icon="add"
    />
    <ProductSwitchItem
      heading="UI5 Web Components"
      subtitle="for React"
      targetSrc="https://github.com/SAP/ui5-webcomponents-react"
      target="_blank"
      icon="add"
    />
  </ProductSwitch>
);

generatedDefaultStory.story = {
  name: 'Generated Default Story'
};
