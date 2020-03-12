import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
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
    valueState={select('valueState', ValueState, null)}
    onChange={action('onChange')}
  >
    <Option selected icon="add">
      Test 1
    </Option>
    <Option icon="add">Test 2</Option>
    <Option icon="add">Test 3</Option>
    <Option icon="add">Test 4</Option>
    <Option icon="add">Test 5</Option>
  </Select>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
