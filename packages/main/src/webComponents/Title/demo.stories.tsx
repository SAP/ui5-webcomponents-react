import { boolean, select } from '@storybook/addon-knobs';
import React from 'react';
import { Title } from '../../lib/Title';
import { TitleLevel } from '../../lib/TitleLevel';

export default {
  title: 'UI5 Web Components | Title',
  component: Title
};

export const generatedDefaultStory = () => (
  <Title wrap={boolean('wrap', false)} level={select('level', TitleLevel, null)}>
    Some Content
  </Title>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
