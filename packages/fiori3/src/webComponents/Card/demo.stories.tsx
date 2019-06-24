import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { propTablesExclude } from '../../../../docs/.storybook/config';
import { Card } from '../../lib/Card';
import { List } from '../../lib/List';
import { StandardListItem } from '../../lib/StandardListItem';
import { Text } from '../../lib/Text';

storiesOf('UI5 Web Components | Card', module).add(
  'Default story',
  () => (
    <Card
      heading={text('heading', 'My Orders')}
      subtitle={text('subtitle', 'Open')}
      status={text('status', '5 of 22')}
      avatar={text('avatar', 'sap-icon://order-status')}
      headerInteractive={boolean('headerInteractive', false)}
      onHeaderPress={action('onHeaderPress')}
    >
      <List>
        <StandardListItem info="100€">Keyboard</StandardListItem>
        <StandardListItem info="30€">Mouse</StandardListItem>
        <StandardListItem info="299€">Display</StandardListItem>
        <StandardListItem info="999€">Notebook</StandardListItem>
        <StandardListItem info="1499€">Desktop</StandardListItem>
      </List>
    </Card>
  ),
  {
    info: {
      propTablesExclude: [...propTablesExclude, Text]
    }
  }
);
