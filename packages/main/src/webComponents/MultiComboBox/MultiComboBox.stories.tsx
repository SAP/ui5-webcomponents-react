import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { MultiComboBox } from '@ui5/webcomponents-react/lib/MultiComboBox';
import { MultiComboBoxItem } from '@ui5/webcomponents-react/lib/MultiComboBoxItem';
import React from 'react';

export default {
  title: 'UI5 Web Components / MultiComboBox',
  component: MultiComboBox
};

export const generatedDefaultStory = () => (
  <MultiComboBox
    allowCustomValues={boolean('allowCustomValues', false)}
    disabled={boolean('disabled', false)}
    open={boolean('open', false)}
    placeholder={text('placeholder', '')}
    readonly={boolean('readonly', false)}
    required={boolean('required', false)}
    value={text('value', '')}
    valueState={text('valueState', 'None')}
    onChange={action('onChange')}
    onInput={action('onInput')}
    onOpenChange={action('onOpenChange')}
    onSelectionChange={action('onSelectionChange')}
  >
    <MultiComboBoxItem text="Item 1" />
    <MultiComboBoxItem text="Item 2" />
    <MultiComboBoxItem text="Item 3" />
    <MultiComboBoxItem text="Item 4" />
    <MultiComboBoxItem text="Item 5" />
  </MultiComboBox>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
