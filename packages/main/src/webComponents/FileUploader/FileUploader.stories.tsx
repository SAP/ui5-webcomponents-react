import React from 'react';
import { FileUploader } from '@ui5/webcomponents-react/lib/FileUploader';
import { action } from '@storybook/addon-actions';
import { text, boolean } from '@storybook/addon-knobs';
export default {
  title: 'UI5 Web Components / FileUploader',
  component: FileUploader
};

export const generatedDefaultStory = () => (
  <FileUploader
    accept={text('accept', undefined)}
    disabled={boolean('disabled', true)}
    hideInput={boolean('hideInput', true)}
    multiple={boolean('multiple', true)}
    name={text('name', '')}
    placeholder={text('placeholder', '')}
    value={text('value', '')}
    valueState={text('valueState', 'None')}
    onChange={action('onChange')}
  >
    Some Content
  </FileUploader>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
