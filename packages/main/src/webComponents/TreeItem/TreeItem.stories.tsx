import { boolean, text } from '@storybook/addon-knobs';
import { TreeItem } from '@ui5/webcomponents-react/lib/TreeItem';
import React from 'react';

export default {
  title: 'UI5 Web Components / TreeItem',
  component: TreeItem
};

export const generatedDefaultStory = () => (
  <TreeItem
    expanded={boolean('expanded', false)}
    hasChildren={boolean('hasChildren', false)}
    icon={text('icon', '')}
    selected={boolean('selected', false)}
    text={text('text', '')}
  >
    Some Content
  </TreeItem>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
