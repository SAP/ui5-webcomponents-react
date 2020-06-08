import { action } from '@storybook/addon-actions';
import { select, text } from '@storybook/addon-knobs';
import { ListMode } from '@ui5/webcomponents-react/lib/ListMode';
import { Tree } from '@ui5/webcomponents-react/lib/Tree';
import { TreeItem } from '@ui5/webcomponents-react/lib/TreeItem';
import React from 'react';

export default {
  title: 'UI5 Web Components / Tree',
  component: Tree,
  parameters: {
    subcomponents: { TreeItem }
  }
};

export const generatedDefaultStory = () => (
  <Tree
    footerText={text('footerText', '')}
    headerText={text('headerText', '')}
    mode={select('mode', ListMode, ListMode.None)}
    noDataText={text('noDataText', '')}
    header={null}
    onItemClick={action('onItemClick')}
    onItemDelete={action('onItemDelete')}
    onItemToggle={action('onItemToggle')}
    onSelectionChange={action('onSelectionChange')}
  >
    Some Content
  </Tree>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
