import { select } from '@storybook/addon-knobs';
import React from 'react';
import { Badge } from '../../lib/Badge';
import { Icon } from '../../lib/Icon';

export default {
  title: 'UI5 Web Components | Badge',
  component: Badge
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
