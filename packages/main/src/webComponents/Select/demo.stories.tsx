import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import React from 'react';
import { Select } from '../../lib/Select';
import { ValueState } from '../../lib/ValueState';
import { Option } from '../../lib/Option';

export default {
  title: 'UI5 Web Components | Select'
};

export const generatedDefaultStory = () => (
  <Select
    disabled={boolean('disabled', false)}
    valueState={select('valueState', ValueState, null)}
    onChange={action('onChange')}
  >
    <Option selected icon="sap-icon://add">
      Test 1
    </Option>
    <Option icon="sap-icon://add">Test 2</Option>
    <Option icon="sap-icon://add">Test 3</Option>
    <Option icon="sap-icon://add">Test 4</Option>
    <Option icon="sap-icon://add">Test 5</Option>
  </Select>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
