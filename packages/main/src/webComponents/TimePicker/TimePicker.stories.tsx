import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';
import { TimePicker } from '@ui5/webcomponents-react/lib/TimePicker';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React from 'react';

export default {
  title: 'UI5 Web Components / TimePicker',
  component: TimePicker,
  argTypes: {
    ...createSelectArgTypes({ valueState: ValueState }),
    ref: {
      type: null
    }
  },
  args: {
    formatPattern: 'hh:mm:ss a',
    valueState: ValueState.None
  }
};

export const generatedDefaultStory = (props) => (
  <TimePicker
    disabled={props.disabled}
    formatPattern={props.formatPattern}
    placeholder={props.placeholder}
    readonly={props.readonly}
    value={props.value}
    valueState={props.valueState}
    onChange={props.onChange}
    onInput={props.onInput}
  />
);

generatedDefaultStory.storyName = 'Generated default story';
