import React from 'react';
import { storiesOf } from '@storybook/react';
import { InputType } from '@fiori-for-react/core/enums/InputType';
import { ValueState } from '../../enums/ValueState';
import { boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Input } from './index';

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
