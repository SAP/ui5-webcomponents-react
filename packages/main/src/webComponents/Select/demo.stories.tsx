import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Select } from '../../lib/Select';
import { ValueState } from '../../lib/ValueState';
import { Option } from '../../lib/Option';

storiesOf('UI5 Web Components | Select', module).add('Generated default story', () => (
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
));
