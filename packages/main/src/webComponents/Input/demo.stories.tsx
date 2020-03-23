import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { Input } from '@ui5/webcomponents-react/lib/Input';
import { InputType } from '@ui5/webcomponents-react/lib/InputType';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import React from 'react';

export default {
  title: 'UI5 Web Components / Input',
  component: Input
};

export const generatedDefaultStory = () => (
  <Input
    disabled={boolean('disabled', false)}
    placeholder={'A placeholder text...'}
    readonly={boolean('readonly', false)}
    type={select('type', InputType, InputType.Text)}
    value={text('value', '')}
    valueState={select('valueState', ValueState, null)}
    showSuggestions={boolean('showSuggestions', false)}
    onChange={action('onChange')}
    onInput={action('onInput')}
    onSubmit={action('onSubmit')}
    onSuggestionItemSelect={action('onSuggestionItemSelect')}
    icon={<Icon name="search" />}
    name={text('name', 'html-input-name')}
  >
    Input
  </Input>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
