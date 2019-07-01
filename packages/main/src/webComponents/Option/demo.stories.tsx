import React from 'react';
import { storiesOf } from '@storybook/react';

import { boolean } from '@storybook/addon-knobs';
import { Option } from './index';

storiesOf('UI5 Web Components | Option', module).add('Generated default story', () => (
  <Option selected={boolean('selected', false)} icon={'sap-icon://add'} value={'generatedString'} />
));
