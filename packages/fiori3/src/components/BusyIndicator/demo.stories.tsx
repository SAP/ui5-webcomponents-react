import React from 'react';

import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { BusyIndicator } from './index';

storiesOf('F4R Components | BusyIndicator', module).add('Default', () => (
  <BusyIndicator fadeIn={boolean('fadeIn', false)} />
));
