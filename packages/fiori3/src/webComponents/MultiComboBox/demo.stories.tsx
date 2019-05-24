import React from 'react';
import { storiesOf } from '@storybook/react';
import { StandardListItem } from '../../lib/StandardListItem';
import { ValueState } from '../../lib/ValueState';
import { boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { MultiComboBox } from './index';

storiesOf('UI5 Web Components | MultiComboBox', module).add('Default story', () => (
  <MultiComboBox
    placeholder={text('placeholder', 'Placeholder...')}
    validateInput={boolean('validateInput', false)}
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
));
