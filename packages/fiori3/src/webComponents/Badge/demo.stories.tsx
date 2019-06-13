import { select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Badge } from '../../lib/Badge';
import { Icon } from '../../lib/Icon';

storiesOf('UI5 Web Components | Badge', module).add('Default story', () => (
  <Badge
    colorScheme={select('colorScheme', ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], '4')}
    icon={<Icon src="sap-icon://employee" />}
  >
    Badge
  </Badge>
));
