import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { FileUploader } from '@ui5/webcomponents-react/lib/FileUploader';
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
    valueState={text('valueState', 'None')}
    onChange={action('onChange')}
  />
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
