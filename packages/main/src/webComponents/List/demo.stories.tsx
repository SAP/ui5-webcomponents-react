import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { CustomListItem } from '@ui5/webcomponents-react/lib/CustomListItem';
import { List } from '@ui5/webcomponents-react/lib/List';
import { ListMode } from '@ui5/webcomponents-react/lib/ListMode';
import { ListSeparators } from '@ui5/webcomponents-react/lib/ListSeparators';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
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
    headerText={text('headerText', 'My List Header')}
    footerText={text('footerText', 'My Footer Test')}
    inset={boolean('inset', false)}
    mode={select('mode', ListMode, null)}
    noDataText={text('footerText', 'No Data available')}
    separators={select('separators', ListSeparators, null)}
    onItemClick={action('onItemClick')}
    onItemDelete={action('onItemDelete')}
    onSelectionChange={action('onSelectionChange')}
    header={null}
  >
    <StandardListItem info="3" infoState={ValueState.Warning}>
      Item 1
    </StandardListItem>
    <StandardListItem>Item 2</StandardListItem>
    <StandardListItem>Item 3</StandardListItem>
  </List>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
