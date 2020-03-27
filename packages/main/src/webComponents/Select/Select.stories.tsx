import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { Select } from '@ui5/webcomponents-react/lib/Select';
import { Option } from '@ui5/webcomponents-react/lib/Option';
import React from 'react';

export default {
  title: 'UI5 Web Components / Select',
  component: Select
};

export const generatedDefaultStory = () => (
  <Select
    disabled={boolean('disabled', false)}
    name={text('name', '')}
    valueState={text('valueState', 'None')}
    onChange={action('onChange')}
  >
    <Option>Option 1</Option>
    <Option>Option 2</Option>
    <Option>Option 3</Option>
    <Option>Option 4</Option>
    <Option>Option 5</Option>
  </Select>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
