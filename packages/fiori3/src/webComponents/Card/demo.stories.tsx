import React from 'react';
import { storiesOf } from '@storybook/react';
import { propTablesExclude } from '../../../../docs/.storybook/config';
import { Card } from './index';
import { Text } from '@fiori-for-react/core';

storiesOf('UI5 Web Components | Card', module).add(
  'Generated default story',
  () => (
    <Card heading={'generatedString'} subtitle={'generatedString'} status={'generatedString'} avatar={'sap-icon://add'}>
      <Text>Demo Content</Text>
    </Card>
  ),
  {
    info: {
      propTablesExclude: [...propTablesExclude, Text]
    }
  }
);
