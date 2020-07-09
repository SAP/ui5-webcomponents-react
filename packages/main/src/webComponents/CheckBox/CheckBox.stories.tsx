import { CheckBox } from '@ui5/webcomponents-react/lib/CheckBox';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React from 'react';
import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';

export default {
  title: 'UI5 Web Components / CheckBox',
  component: CheckBox,
  argTypes: {
    ...createSelectArgTypes({ valueState: ValueState }),
    ref: {
      type: null
    }
  },
  args: {
    text: 'My CheckBox Text',
    valueState: ValueState.None
  }
};

export const generatedDefaultStory = (props) => (
  <CheckBox
    checked={props.checked}
    disabled={props.disabled}
    name={props.name}
    readonly={props.readonly}
    text={props.text}
    valueState={props.valueState}
    wrap={props.wrap}
    onChange={props.onChange}
  />
);

generatedDefaultStory.storyName = 'Generated default story';
