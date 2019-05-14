import { BusyIndicator } from '@lib/BusyIndicator';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('F4R Components | BusyIndicator', module).add('Default', () => (
  <BusyIndicator fadeIn={boolean('fadeIn', false)} />
));
