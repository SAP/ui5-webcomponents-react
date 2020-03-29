import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { ComboBox } from '@ui5/webcomponents-react/lib/ComboBox';
import { ComboBoxItem } from '@ui5/webcomponents-react/lib/ComboBoxItem';
import React from 'react';

export default {
  title: 'UI5 Web Components / ComboBox',
  component: ComboBox,
  parameters: {
    subcomponents: { ComboBoxItem }
  }
};

export const generatedDefaultStory = () => (
  <ComboBox
    disabled={boolean('disabled', false)}
    filter={text('filter', 'StartsWithPerTerm')}
    filterValue={text('filterValue', '')}
    loading={boolean('loading', false)}
    placeholder={text('placeholder', '')}
    readonly={boolean('readonly', false)}
    required={boolean('required', false)}
    value={text('value', '')}
    valueState={text('valueState', 'None')}
    onChange={action('onChange')}
    onInput={action('onInput')}
  >
    <ComboBoxItem text="ComboBox Entry 1" />
    <ComboBoxItem text="ComboBox Entry 2" />
    <ComboBoxItem text="ComboBox Entry 3" />
    <ComboBoxItem text="ComboBox Entry 4" />
    <ComboBoxItem text="ComboBox Entry 5" />
  </ComboBox>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
