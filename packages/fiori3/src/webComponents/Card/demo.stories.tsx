import { Card } from '../../lib/Card';
import { Text } from '../../lib/Text';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { propTablesExclude } from '../../../../docs/.storybook/config';

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
