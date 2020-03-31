import { action } from '@storybook/addon-actions';
import { boolean, number, text } from '@storybook/addon-knobs';
import { TextArea } from '@ui5/webcomponents-react/lib/TextArea';
import React from 'react';

export default {
  title: 'UI5 Web Components / TextArea',
  component: TextArea
};

export const generatedDefaultStory = () => (
  <TextArea
    disabled={boolean('disabled', false)}
    growing={boolean('growing', false)}
    growingMaxLines={number('growingMaxLines', 0)}
    maxlength={number('maxlength', null)}
    name={text('name', undefined)}
    placeholder={text('placeholder', '')}
    readonly={boolean('readonly', false)}
    required={boolean('required', false)}
    rows={number('rows', 0)}
    showExceededText={boolean('showExceededText', false)}
    value={text('value', '')}
    onChange={action('onChange')}
    onInput={action('onInput')}
  />
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
