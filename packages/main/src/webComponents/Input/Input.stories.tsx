import { action } from '@storybook/addon-actions';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { Input } from '@ui5/webcomponents-react/lib/Input';
import { InputType } from '@ui5/webcomponents-react/lib/InputType';
import { SuggestionItem } from '@ui5/webcomponents-react/lib/SuggestionItem';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React from 'react';

export default {
  title: 'UI5 Web Components / Input',
  component: Input,
  parameters: {
    subcomponents: { SuggestionItem }
  }
};

export const generatedDefaultStory = () => (
  <Input
    disabled={boolean('disabled', false)}
    maxlength={number('maxlength', undefined)}
    name={text('name', '')}
    placeholder={text('placeholder', '')}
    readonly={boolean('readonly', false)}
    required={boolean('required', false)}
    showSuggestions={boolean('showSuggestions', false)}
    type={select('type', InputType, InputType.Text)}
    value={text('value', '')}
    valueState={select('valueState', ValueState, ValueState.None)}
    icon={null}
    valueStateMessage={null}
    onChange={action('onChange')}
    onInput={action('onInput')}
    onSubmit={action('onSubmit')}
    onSuggestionItemSelect={action('onSuggestionItemSelect')}
  >
    Some Content
  </Input>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
