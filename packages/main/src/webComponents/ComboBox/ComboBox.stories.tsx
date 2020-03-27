import React from 'react';
import { ComboBox } from '@ui5/webcomponents-react/lib/ComboBox';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
export default {
  title: 'UI5 Web Components / ComboBox',
  component: ComboBox
};

export const generatedDefaultStory = () => (
  <ComboBox
    disabled={boolean('disabled', true)}
    filter={text('filter', 'StartsWithPerTerm')}
    filterValue={text('filterValue', '')}
    loading={null}
    placeholder={text('placeholder', '')}
    readonly={boolean('readonly', true)}
    required={boolean('required', true)}
    value={text('value', '')}
    valueState={text('valueState', 'None')}
    onChange={action('onChange')}
    onInput={action('onInput')}
  >
    Some Content
  </ComboBox>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
