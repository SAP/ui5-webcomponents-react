import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';
import { TextArea } from '@ui5/webcomponents-react/lib/TextArea';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React from 'react';

export default {
  title: 'UI5 Web Components / TextArea',
  component: TextArea,
  argTypes: {
    ...createSelectArgTypes({ valueState: ValueState }),
    ref: {
      type: null
    }
  },
  args: {
    growingMaxLines: 0,
    rows: 0,
    valueState: ValueState.None
  }
};

export const generatedDefaultStory = (props) => (
  <TextArea
    disabled={props.disabled}
    growing={props.growing}
    growingMaxLines={props.growingMaxLines}
    maxlength={props.maxlength}
    name={props.name}
    placeholder={props.placeholder}
    readonly={props.readonly}
    required={props.required}
    rows={props.rows}
    showExceededText={props.showExceededText}
    value={props.value}
    valueState={props.valueState}
    onChange={props.onChange}
    onInput={props.onInput}
    valueStateMessage={<span>Value State Message</span>}
  />
);

generatedDefaultStory.storyName = 'Generated default story';
