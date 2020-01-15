import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import '@ui5/webcomponents-icons/dist/icons/add.js';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import React from 'react';
import notes from './Icon.md';

export default {
  title: 'UI5 Web Components / Icon',
  component: Icon,
  parameters: { notes }
};

export const defaultStory = () => <Icon name={text('src', 'add')} onPress={action('onPress')} />;

defaultStory.story = {
  name: 'Default story'
};
