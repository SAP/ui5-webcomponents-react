import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { Card } from '@ui5/webcomponents-react/lib/Card';
import React from 'react';

export default {
  title: 'UI5 Web Components / Card',
  component: Card
};

export const generatedDefaultStory = () => (
  <Card
    headerInteractive={boolean('headerInteractive', false)}
    heading={text('heading', 'Heading')}
    status={text('status', '1 of 5')}
    subheading={text('subheading', 'Active Items')}
    avatar={<Avatar backgroundColor="Accent3" icon="person-placeholder" />}
    onHeaderClick={action('onHeaderClick')}
  >
    Some Content
  </Card>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
