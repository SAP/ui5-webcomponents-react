import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import React from 'react';
import { Switch } from '@ui5/webcomponents-react/lib/Switch';
import notes from './Switch.md';

export default {
  title: 'UI5 Web Components / Switch',
  component: Switch,
  parameters: { notes }
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
