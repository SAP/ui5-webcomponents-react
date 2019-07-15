import { boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { List } from '../../lib/List';
import { ListMode } from '../../lib/ListMode';
import { ListSeparators } from '../../lib/ListSeparators';
import { StandardListItem } from '../../lib/StandardListItem';
import { ValueState } from '../../lib/ValueState';

storiesOf('UI5 Web Components | List', module).add('Generated default story', () => (
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
));
