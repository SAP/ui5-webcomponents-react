import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';
import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import React from 'react';

export default {
  title: 'UI5 Web Components / Button',
  component: Button,
  argTypes: {
    ...createSelectArgTypes({ design: ButtonDesign }),
    ref: {
      type: null
    }
  },
  args: {
    design: ButtonDesign.Default,
    icon: 'add',
    children: 'Button Text'
  }
};

export const generatedDefaultStory = ({ design, disabled, icon, iconEnd, submits, onClick, children }) => {
  return (
    <Button design={design} disabled={disabled} icon={icon} iconEnd={iconEnd} submits={submits} onClick={onClick}>
      {children}
    </Button>
  );
};

generatedDefaultStory.storyName = 'Generated default story';
