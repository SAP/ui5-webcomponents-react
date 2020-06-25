import { Switch } from '@ui5/webcomponents-react/lib/Switch';
import React from 'react';

export default {
  title: 'UI5 Web Components / Switch',
  component: Switch,
  argTypes: {
    ref: {
      type: null
    }
  }
};

export const generatedDefaultStory = (props) => (
  <Switch
    checked={props.checked}
    disabled={props.disabled}
    graphical={props.graphical}
    textOff={props.textOff}
    textOn={props.textOn}
    onChange={props.onChange}
  />
);

generatedDefaultStory.storyName = 'Generated default story';
