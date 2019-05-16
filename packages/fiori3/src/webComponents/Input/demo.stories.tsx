import { Input } from '../../lib/Input';
import { InputType } from '../../lib/InputType';
import { ValueState } from '../../lib/ValueState';
import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('UI5 Web Components | Input', module).add('Generated default story', () => (
  <Input
    disabled={boolean('disabled', false)}
    placeholder={'generatedString'}
    readonly={boolean('readonly', false)}
    type={select('type', InputType, null)}
    value={'generatedString'}
    valueState={select('valueState', ValueState, null)}
    showSuggestions={boolean('showSuggestions', false)}
    onChange={action('onChange')}
    onInput={action('onInput')}
    onSubmit={action('onSubmit')}
    onSuggestionItemSelect={action('onSuggestionItemSelect')}
    icon={null}
  >
    null
  </Input>
));
