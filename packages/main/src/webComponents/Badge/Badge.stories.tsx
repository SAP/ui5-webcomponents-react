import { Badge } from '@ui5/webcomponents-react/lib/Badge';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import React from 'react';

export default {
  title: 'UI5 Web Components / Badge',
  component: Badge,
  argTypes: {
    colorScheme: {
      control: {
        type: 'number',
        min: 1,
        max: 10
      }
    },
    children: {
      type: null
    }
  },
  args: {
    colorScheme: 1,
    children: 'Some Content'
  }
};

export const generatedDefaultStory = (props) => (
  <Badge colorScheme={props.colorScheme} icon={<Icon name="add" />}>
    {props.children}
  </Badge>
);

generatedDefaultStory.storyName = 'Generated default story';
