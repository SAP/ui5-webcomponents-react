import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { CheckBox } from '@ui5/webcomponents-react/lib/CheckBox';
import React from 'react';

export default {
  title: 'UI5 Web Components / CheckBox',
  component: CheckBox
};

export const generatedDefaultStory = () => (
  <CheckBox
    checked={boolean('checked', false)}
    disabled={boolean('disabled', false)}
    name={text('name', '')}
    readonly={boolean('readonly', false)}
    text={text('text', 'My CheckBox Text')}
    valueState={select('valueState', ['None', 'Warning', 'Error'], 'None')}
    wrap={boolean('wrap', false)}
    onChange={action('onChange')}
  />
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
