import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import { ToggleButton } from '@ui5/webcomponents-react/lib/ToggleButton';
import React from 'react';
import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';

export default {
  title: 'UI5 Web Components / ToggleButton',
  component: ToggleButton,
  argTypes: {
    ...createSelectArgTypes({ design: ButtonDesign }),
    ref: {
      type: null
    }
  },
  args: {
    design: ButtonDesign.Default
  }
};

export const generatedDefaultStory = (props) => (
  <ToggleButton
    pressed={props.pressed}
    design={props.design}
    disabled={props.disabled}
    icon={props.icon}
    iconEnd={props.iconEnd}
    submits={props.submits}
    onClick={props.onClick}
  >
    Some Content
  </ToggleButton>
);

generatedDefaultStory.storyName = 'Generated default story';
