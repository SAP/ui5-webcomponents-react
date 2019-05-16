import { BackgroundDesign } from '@lib/BackgroundDesign';
import { List } from '@lib/List';
import { ListMode } from '@lib/ListMode';
import { ListSeparators } from '@lib/ListSeparators';
import { StandardListItem } from '@lib/StandardListItem';
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('UI5 Web Components | List', module).add('Generated default story', () => (
  <List
    backgroundDesign={select('backgroundDesign', BackgroundDesign, null)}
    headerText={'generatedString'}
    footerText={'generatedString'}
    inset={boolean('inset', false)}
    mode={select('mode', ListMode, null)}
    noDataText={'generatedString'}
    separators={select('separators', ListSeparators, null)}
    onItemPress={null}
    onItemDelete={null}
    onSelectionChange={null}
    header={null}
  >
    <StandardListItem>Item 1</StandardListItem>
    <StandardListItem>Item 2</StandardListItem>
    <StandardListItem>Item 3</StandardListItem>
  </List>
));
