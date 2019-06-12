import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';
import { BusyIndicator } from './index';
import { BusyIndicatorType } from '../../lib/BusyIndicatorType';

storiesOf('UI5 Web Components | BusyIndicator', module).add('Generated default story', () => (
  <BusyIndicator size={select('size', BusyIndicatorType, BusyIndicatorType.Large)} active={boolean('active', true)} />
));
