import { boolean, text } from '@storybook/addon-knobs';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import React from 'react';

export default {
  title: 'UI5 Web Components / Title',
  component: Title
};

export const generatedDefaultStory = () => (
  <Title level={text('level', 'H2')} wrap={boolean('wrap', false)}>
    Some Content
  </Title>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
