import React from 'react';
import { storiesOf } from '@storybook/react';

import { boolean } from '@storybook/addon-knobs';
import { Label } from './index';

storiesOf('UI5 Web Components | Label', module).add('Generated default story', () => (
  <Label required={boolean('required', false)} wrap={boolean('wrap', false)} for={'generatedString'}>
    Some Content
  </Label>
));
