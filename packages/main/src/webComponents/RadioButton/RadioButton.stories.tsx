import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';
import { RadioButton } from '@ui5/webcomponents-react/lib/RadioButton';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React from 'react';

export default {
  title: 'UI5 Web Components / RadioButton',
  component: RadioButton,
  argTypes: {
    ...createSelectArgTypes({ value: ValueState }),
    ref: {
      type: null
    }
  },
  args: {
    text: 'Radio Button Text',
    value: ValueState.None,
    valueState: 'None'
  }
};

export const generatedDefaultStory = (props) => (
  <RadioButton
    disabled={props.disabled}
    name={props.name}
    readonly={props.readonly}
    selected={props.selected}
    text={props.text}
    value={props.value}
    valueState={props.valueState}
    wrap={props.wrap}
    onSelect={props.onSelect}
  />
);

generatedDefaultStory.storyName = 'Generated default story';
