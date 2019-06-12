import React from 'react';
import { storiesOf } from '@storybook/react';

import { boolean } from '@storybook/addon-knobs';
import { BusyIndicator } from './index';

storiesOf('UI5 Web Components | BusyIndicator', module).add('Generated default story', () => (
  <BusyIndicator size={null} active={boolean('active', false)} />
));
