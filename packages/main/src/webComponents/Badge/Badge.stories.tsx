import { text } from '@storybook/addon-knobs';
import { Badge } from '@ui5/webcomponents-react/lib/Badge';
import React from 'react';

export default {
  title: 'UI5 Web Components / Badge',
  component: Badge
};

export const generatedDefaultStory = () => (
  <Badge colorScheme={text('colorScheme', '1')} icon={null}>
    Some Content
  </Badge>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
