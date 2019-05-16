import { Title } from '@lib/Title';
import { TitleLevel } from '@lib/TitleLevel';
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('UI5 Web Components | Title', module).add('Generated default story', () => (
  <Title wrap={boolean('wrap', false)} level={select('level', TitleLevel, null)}>
    Some Content
  </Title>
));
