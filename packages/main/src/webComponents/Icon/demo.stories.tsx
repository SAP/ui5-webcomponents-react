import { text } from '@storybook/addon-knobs';
import '@ui5/webcomponents-icons/dist/icons/add.js';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import React from 'react';

export default {
  title: '4 UI5 Web Components / Icon',
  component: Icon
};

export const defaultStory = () => <Icon name={text('src', 'add')} />;

defaultStory.story = {
  name: 'Default story'
};
