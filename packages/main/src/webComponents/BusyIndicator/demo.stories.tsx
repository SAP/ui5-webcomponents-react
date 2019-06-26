import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { BusyIndicator } from '../../lib/BusyIndicator';
import { BusyIndicatorType } from '../../lib/BusyIndicatorType';

storiesOf('UI5 Web Components | BusyIndicator', module).add('Default story', () => (
  <BusyIndicator size={select('size', BusyIndicatorType, BusyIndicatorType.Large)} active={boolean('active', true)} />
));
