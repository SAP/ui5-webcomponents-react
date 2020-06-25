import { Title } from '@ui5/webcomponents-react/lib/Title';
import { TitleLevel } from '@ui5/webcomponents-react/lib/TitleLevel';
import React from 'react';
import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';

export default {
  title: 'UI5 Web Components / Title',
  component: Title,
  argTypes: {
    ...createSelectArgTypes({ level: TitleLevel }),
    children: {
      type: null
    },
    ref: {
      type: null
    }
  },
  args: {
    level: TitleLevel.H2
  }
};

export const generatedDefaultStory = (props) => (
  <Title level={props.level} wrap={props.wrap}>
    Some Content
  </Title>
);

generatedDefaultStory.storyName = 'Generated default story';
