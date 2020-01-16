import { select } from '@storybook/addon-knobs';
import '@ui5/webcomponents-icons/dist/icons/employee';
import { Badge } from '@ui5/webcomponents-react/lib/Badge';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import React from 'react';

export default {
  title: 'UI5 Web Components / Badge',
  component: Badge
};

export const defaultStory = () => (
  <Badge
    colorScheme={select('colorScheme', ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], '4')}
    icon={<Icon name="employee" />}
  >
    Badge
  </Badge>
);

defaultStory.story = {
  name: 'Default story'
};
