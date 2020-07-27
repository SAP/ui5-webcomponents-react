import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';
import { MultiComboBox } from '@ui5/webcomponents-react/lib/MultiComboBox';
import { MultiComboBoxItem } from '@ui5/webcomponents-react/lib/MultiComboBoxItem';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React from 'react';

export default {
  title: 'UI5 Web Components / MultiComboBox',
  component: MultiComboBox,
  parameters: {
    subcomponents: { MultiComboBoxItem }
  },
  argTypes: {
    ...createSelectArgTypes({ valueState: ValueState }),
    children: {
      type: null
    },
    ref: {
      type: null
    }
  },
  arg: {
    valueState: ValueState.None
  }
};

export const generatedDefaultStory = (props) => (
  <MultiComboBox
    allowCustomValues={props.allowCustomValues}
    disabled={props.disabled}
    open={props.open}
    placeholder={props.placeholder}
    readonly={props.readonly}
    required={props.required}
    value={props.value}
    valueState={props.valueState}
    onChange={props.onChange}
    onInput={props.onInput}
    onOpenChange={props.onOpenChange}
    onSelectionChange={props.onSelectionChange}
  >
    <MultiComboBoxItem text="Item 1" />
    <MultiComboBoxItem text="Item 2" />
    <MultiComboBoxItem text="Item 3" />
    <MultiComboBoxItem text="Item 4" />
    <MultiComboBoxItem text="Item 5" />
  </MultiComboBox>
);

generatedDefaultStory.storyName = 'Generated default story';
