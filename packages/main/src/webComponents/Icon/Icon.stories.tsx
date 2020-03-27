import { boolean, text } from '@storybook/addon-knobs';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import React from 'react';
import '@ui5/webcomponents-icons/dist/icons/add';

export default {
  title: 'UI5 Web Components / Icon',
  component: Icon
};

export const generatedDefaultStory = () => (
  <Icon
    accessibleName={text('accessibleName', '')}
    name={text('name', 'add')}
    showTooltip={boolean('showTooltip', false)}
  />
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
