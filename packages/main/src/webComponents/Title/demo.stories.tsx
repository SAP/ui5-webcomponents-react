import { boolean, select } from '@storybook/addon-knobs';
import React from 'react';
import { Title } from '@ui5/webcomponents-react/lib/Title';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import notes from './Title.md';

export default {
  title: 'UI5 Web Components / Title',
  component: Title,
  parameters: { notes }
};

export const generatedDefaultStory = () => (
  <Title wrap={boolean('wrap', false)} level={select('level', TitleLevel, null)}>
    Some Content
  </Title>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
