import { Option } from '@ui5/webcomponents-react/lib/Option';
import { Select } from '@ui5/webcomponents-react/lib/Select';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React from 'react';
import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';

export default {
  title: 'UI5 Web Components / Select',
  component: Select,
  parameters: {
    subcomponents: { Option }
  },
  argTypes: {
    ...createSelectArgTypes({ valueState: ValueState })
  },
  args: {
    valueState: ValueState.None
  }
};

export const generatedDefaultStory = (props) => (
  <Select disabled={props.disabled} name={props.name} valueState={props.valueState} onChange={props.onChange}>
    <Option>Option 1</Option>
    <Option>Option 2</Option>
    <Option>Option 3</Option>
    <Option>Option 4</Option>
    <Option>Option 5</Option>
  </Select>
);

generatedDefaultStory.storyName = 'Generated default story';
