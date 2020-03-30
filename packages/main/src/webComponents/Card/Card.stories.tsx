import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { Card } from '@ui5/webcomponents-react/lib/Card';
import { List } from '@ui5/webcomponents-react/lib/List';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';
import React from 'react';

export default {
  title: 'UI5 Web Components / Card',
  component: Card
};

export const generatedDefaultStory = () => (
  <Card
    headerInteractive={boolean('headerInteractive', false)}
    heading={text('heading', 'Team Space')}
    status={text('status', '3 of 5')}
    subheading={text('subheading', 'Direct Reports')}
    avatar={null}
    onHeaderClick={action('onHeaderClick')}
    style={{ width: '300px' }}
  >
    <List>
      <StandardListItem description="Software Architect">Richard Wilson</StandardListItem>
      <StandardListItem description="Visual Designer">Elena Petrova</StandardListItem>
      <StandardListItem description="Quality Specialist">John Miller</StandardListItem>
    </List>
  </Card>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
