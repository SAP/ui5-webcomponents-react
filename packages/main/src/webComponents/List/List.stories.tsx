import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { List } from '@ui5/webcomponents-react/lib/List';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';
import { CustomListItem } from '@ui5/webcomponents-react/lib/CustomListItem';
import React from 'react';

export default {
  title: 'UI5 Web Components / List',
  component: List,
  parameters: {
    subcomponents: { StandardListItem, CustomListItem }
  }
};

export const generatedDefaultStory = () => (
  <List
    busy={boolean('busy', false)}
    footerText={text('footerText', '')}
    headerText={text('headerText', '')}
    infiniteScroll={boolean('infiniteScroll', false)}
    inset={boolean('inset', false)}
    mode={text('mode', 'None')}
    noDataText={text('noDataText', '')}
    separators={text('separators', 'All')}
    header={null}
    onItemClick={action('onItemClick')}
    onItemDelete={action('onItemDelete')}
    onLoadMore={action('onLoadMore')}
    onSelectionChange={action('onSelectionChange')}
  >
    <StandardListItem info={'3'}>List Item 1</StandardListItem>
    <StandardListItem info={'2'}>List Item 2</StandardListItem>
    <StandardListItem>List Item 3</StandardListItem>
  </List>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
