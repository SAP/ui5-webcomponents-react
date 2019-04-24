import React from 'react';
import { storiesOf } from '@storybook/react';
import { BackgroundDesign } from '@fiori-for-react/core/enums/BackgroundDesign';
import { ListMode } from '../../enums/ListMode';
import { ListSeparators } from '@fiori-for-react/core/enums/ListSeparators';
import { select, boolean } from '@storybook/addon-knobs';
import { List } from './index';
import { StandardListItem } from '../StandardListItem';

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
