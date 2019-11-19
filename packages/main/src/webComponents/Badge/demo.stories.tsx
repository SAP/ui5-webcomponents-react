import { select } from '@storybook/addon-knobs';
import { Badge } from '@ui5/webcomponents-react/lib/Badge';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import '@ui5/webcomponents/dist/icons/employee';
import React from 'react';
import notes from './Badge.md';

export default {
  title: 'UI5 Web Components | Badge',
  component: Badge,
  parameters: {
    notes
  }
};

export const defaultStory = () => (
  <Badge
    colorScheme={select('colorScheme', ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], '4')}
    icon={<Icon src="sap-icon://employee" />}
  >
    Badge
  </Badge>
);

defaultStory.story = {
  name: 'Default story'
};
