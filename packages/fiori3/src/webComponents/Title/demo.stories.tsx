import React from 'react';
import { storiesOf } from '@storybook/react';
import { TitleLevel } from '../../enums/TitleLevel';
import { boolean, select } from '@storybook/addon-knobs';
import { Title } from './index';

storiesOf('UI5 Web Components | Title', module).add('Generated default story', () => (
  <Title wrap={boolean('wrap', false)} level={select('level', TitleLevel, null)}>
    Some Content
  </Title>
));
