import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { Switch } from '@ui5/webcomponents-react/lib/Switch';
import React from 'react';

export default {
  title: 'UI5 Web Components / Switch',
  component: Switch
};

export const generatedDefaultStory = () => (
  <Switch
    checked={boolean('checked', false)}
    disabled={boolean('disabled', false)}
    textOn={text('textOn', 'Yes')}
    textOff={text('textOff', 'No')}
    graphical={boolean('graphical', false)}
    onChange={action('onChange')}
  />
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
