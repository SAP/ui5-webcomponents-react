import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { FileUploader } from '@ui5/webcomponents-react/lib/FileUploader';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import '@ui5/webcomponents/dist/features/InputElementsFormSupport';
import React from 'react';

export default {
  title: 'UI5 Web Components / FileUploader',
  component: FileUploader
};

export const generatedDefaultStory = () => (
  <FileUploader
    accept={text('accept', undefined)}
    disabled={boolean('disabled', false)}
    hideInput={boolean('hideInput', false)}
    multiple={boolean('multiple', false)}
    name={text('name', '')}
    placeholder={text('placeholder', '')}
    value={text('value', '')}
    valueState={select('valueState', ValueState, ValueState.None)}
    onChange={action('onChange')}
  />
);

generatedDefaultStory.storyName = 'Generated default story';
