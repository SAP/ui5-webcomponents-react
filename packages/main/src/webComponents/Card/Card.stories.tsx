import '@ui5/webcomponents-icons/dist/icons/person-placeholder.js';
import { Avatar } from '@ui5/webcomponents-react/lib/Avatar';
import { AvatarBackgroundColor } from '@ui5/webcomponents-react/lib/AvatarBackgroundColor';
import { Card } from '@ui5/webcomponents-react/lib/Card';
import { List } from '@ui5/webcomponents-react/lib/List';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';
import React from 'react';

export default {
  title: 'UI5 Web Components / Card',
  component: Card,
  args: {
    heading: 'Team Space',
    status: '3 of 5',
    subheading: 'Direct Reports'
  },
  argTypes: {
    children: {
      type: null
    },
    ref: {
      type: null
    }
  }
};

export const generatedDefaultStory = (props) => (
  <Card
    avatar={<Avatar backgroundColor={AvatarBackgroundColor.Accent3} icon="person-placeholder" />}
    style={{ width: '300px' }}
    headerInteractive={props.headerInteractive}
    heading={props.heading}
    status={props.status}
    subheading={props.subheading}
    onHeaderClick={props.onHeaderClick}
  >
    <List>
      <StandardListItem description="Software Architect">Richard Wilson</StandardListItem>
      <StandardListItem description="Visual Designer">Elena Petrova</StandardListItem>
      <StandardListItem description="Quality Specialist">John Miller</StandardListItem>
    </List>
  </Card>
);

generatedDefaultStory.storyName = 'Generated default story';
