import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import { Input } from '@ui5/webcomponents-react/lib/Input';
import { InputType } from '@ui5/webcomponents-react/lib/InputType';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React from 'react';

export default {
  title: 'UI5 Web Components / Input',
  component: Input
};

export const generatedDefaultStory = () => (
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
    Input
  </Input>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
