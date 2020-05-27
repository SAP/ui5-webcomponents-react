import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { Option } from '@ui5/webcomponents-react/lib/Option';
import { Select } from '@ui5/webcomponents-react/lib/Select';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React from 'react';

export default {
  title: 'UI5 Web Components / Select',
  component: Select,
  parameters: {
    subcomponents: { Option }
  }
};

export const generatedDefaultStory = () => (
  <Select
    disabled={boolean('disabled', false)}
    name={text('name', '')}
    valueState={select('valueState', ValueState, ValueState.None)}
    onChange={action('onChange')}
  >
    <Option>Option 1</Option>
    <Option>Option 2</Option>
    <Option>Option 3</Option>
    <Option>Option 4</Option>
    <Option>Option 5</Option>
  </Select>
);

generatedDefaultStory.storyName = 'Generated default story';
