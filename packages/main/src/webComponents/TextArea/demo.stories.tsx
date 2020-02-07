import { boolean } from '@storybook/addon-knobs';
import { TextArea } from '@ui5/webcomponents-react/lib/TextArea';
import React from 'react';

export default {
  title: 'UI5 Web Components / TextArea',
  component: TextArea
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
