import React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';

export default {
  title: 'UI5 Web Components | Icon',
  component: Icon
};

export const defaultStory = () => <Icon src={text('src', 'sap-icon://add')} onPress={action('onPress')} />;

defaultStory.story = {
  name: 'Default story'
};
