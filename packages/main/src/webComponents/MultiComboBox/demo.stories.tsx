import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { MultiComboBox } from '@ui5/webcomponents-react/lib/MultiComboBox';
import { StandardListItem } from '@ui5/webcomponents-react/lib/StandardListItem';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React from 'react';

export default {
  title: 'UI5 Web Components / MultiComboBox',
  component: MultiComboBox,
  parameters: {
    subcomponents: { StandardListItem }
  }
};

export const defaultStory = () => (
  <MultiComboBox
    placeholder={text('placeholder', 'Placeholder...')}
    allowCustomValues={boolean('allowCustomValues', false)}
    disabled={boolean('disabled', false)}
    valueState={select('valueState', ValueState, ValueState.None)}
    readonly={boolean('readonly', false)}
    onChange={action('onChange')}
    onInput={action('onInput')}
    onSelectionChange={action('onSelectionChange')}
  >
    <StandardListItem selected>Selection 1</StandardListItem>
    <StandardListItem>Selection 2</StandardListItem>
    <StandardListItem>Selection 3</StandardListItem>
    <StandardListItem>Selection 4</StandardListItem>
    <StandardListItem>Selection 5</StandardListItem>
  </MultiComboBox>
);

defaultStory.story = {
  name: 'Default story'
};
