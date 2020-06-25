import { ComboBox } from '@ui5/webcomponents-react/lib/ComboBox';
import { ComboBoxItem } from '@ui5/webcomponents-react/lib/ComboBoxItem';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React from 'react';
import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';

export default {
  title: 'UI5 Web Components / ComboBox',
  component: ComboBox,
  parameters: {
    subcomponents: { ComboBoxItem }
  },
  argTypes: {
    ...createSelectArgTypes({ valueState: ValueState }),
    children: {
      type: null
    }
  },
  args: {
    filter: 'StartsWithPerTerm',
    valueState: ValueState.None
  }
};

export const generatedDefaultStory = (props) => (
  <ComboBox
    disabled={props.disabled}
    filter={props.filter}
    filterValue={props.filterValue}
    loading={props.loading}
    placeholder={props.placeHolder}
    readonly={props.readonly}
    required={props.required}
    value={props.value}
    valueState={props.valueState}
    onChange={props.onChange}
    onInput={props.onInput}
  >
    <ComboBoxItem text="ComboBox Entry 1" />
    <ComboBoxItem text="ComboBox Entry 2" />
    <ComboBoxItem text="ComboBox Entry 3" />
    <ComboBoxItem text="ComboBox Entry 4" />
    <ComboBoxItem text="ComboBox Entry 5" />
  </ComboBox>
);

generatedDefaultStory.storyName = 'Generated default story';
