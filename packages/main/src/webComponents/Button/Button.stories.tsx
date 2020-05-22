import { Button } from '@ui5/webcomponents-react/lib/Button';
import { ButtonDesign } from '@ui5/webcomponents-react/lib/ButtonDesign';
import React from 'react';

export default {
  title: 'UI5 Web Components / Button',
  component: Button,
  argTypes: {
    design: {
      defaultValue: ButtonDesign.Default,
      control: { type: 'options', controlType: 'select', options: ButtonDesign }
    },
    icon: { defaultValue: 'add' },
    children: { defaultValue: 'Button Text' },
    onClick: { control: { type: 'function' } }
  }
};

export const generatedDefaultStory = ({ design, disabled, icon, iconEnd, submits, onClick, children }) => {
  return (
    <Button design={design} disabled={disabled} icon={icon} iconEnd={iconEnd} submits={submits} onClick={onClick}>
      {children}
    </Button>
  );
};

generatedDefaultStory.story = {
  name: 'Generated default story'
};
