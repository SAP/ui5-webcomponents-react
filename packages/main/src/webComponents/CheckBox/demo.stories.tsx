import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import React from 'react';
import { CheckBox } from '@ui5/webcomponents-react/lib/CheckBox';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import notes from './CheckBox.md';

export default {
  title: 'UI5 Web Components | CheckBox',
  component: CheckBox,
  parameters: { notes }
};

export const defaultStory = () => (
  <CheckBox
    disabled={boolean('disabled', false)}
    readonly={boolean('readonly', false)}
    checked={boolean('checked', false)}
    text={text('text', 'Checkbox Text')}
    valueState={select('valueState', ValueState, null)}
    wrap={boolean('wrap', false)}
    onChange={action('onChange')}
  />
);

defaultStory.story = {
  name: 'Default story'
};
