import { Label } from '@lib/Label';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('UI5 Web Components | Label', module).add('Generated default story', () => (
  <Label required={boolean('required', false)} wrap={boolean('wrap', false)} for={'generatedString'}>
    Some Content
  </Label>
));
