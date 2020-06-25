import { Input } from '@ui5/webcomponents-react/lib/Input';
import { InputType } from '@ui5/webcomponents-react/lib/InputType';
import { SuggestionItem } from '@ui5/webcomponents-react/lib/SuggestionItem';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React from 'react';
import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';

export default {
  title: 'UI5 Web Components / Input',
  component: Input,
  parameters: {
    subcomponents: { SuggestionItem }
  },
  argTypes: {
    ...createSelectArgTypes({ type: InputType, valueState: ValueState }),
    children: {
      type: null
    },
    ref: {
      type: null
    }
  },
  args: {
    placeholder: 'Placeholder...',
    type: InputType.Text,
    valueState: ValueState.None
  }
};

export const generatedDefaultStory = (props) => (
  <Input
    disabled={props.disabled}
    maxlength={props.maxlength}
    name={props.name}
    placeholder={props.placeholder}
    readonly={props.readonly}
    required={props.required}
    showSuggestions={props.showSuggestions}
    type={props.type}
    value={props.value}
    valueState={props.valueState}
    onChange={props.onChange}
    onInput={props.onInput}
    onSubmit={props.onSubmit}
    onSuggestionItemSelect={props.onSuggestionItemSelect}
    icon={null}
    valueStateMessage={null}
  >
    Some Content
  </Input>
);

generatedDefaultStory.storyName = 'Generated default story';
