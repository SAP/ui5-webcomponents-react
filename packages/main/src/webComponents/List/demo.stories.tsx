import { boolean, select } from '@storybook/addon-knobs';
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
    headerText={'generatedString'}
    footerText={'generatedString'}
    inset={boolean('inset', false)}
    mode={select('mode', ListMode, null)}
    noDataText={'generatedString'}
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
