import { boolean } from '@storybook/addon-knobs';
import React from 'react';
import { TextArea } from '@ui5/webcomponents-react/lib/TextArea';
import notes from './TextArea.md';

export default {
  title: 'UI5 Web Components / TextArea',
  component: TextArea,
  parameters: { notes }
};

export const generatedDefaultStory = () => (
  <TextArea
    value={'generatedString'}
    disabled={boolean('disabled', false)}
    readonly={boolean('readonly', false)}
    placeholder={'generatedString'}
    rows={42}
    maxLength={42}
    showExceededText={boolean('showExceededText', false)}
    growing={boolean('growing', false)}
    growingMaxLines={42}
    onChange={null}
  />
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
