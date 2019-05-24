import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { Token } from './index';

storiesOf('UI5 Web Components | Token', module).add('Generated default story', () => (
  <Token
    selected={boolean('selected', false)}
    readonly={boolean('readonly', false)}
    onDelete={action('onDelete')}
    onSelect={action('onSelect')}
  >
    Token 1
  </Token>
));
