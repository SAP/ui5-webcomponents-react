import { boolean } from '@storybook/addon-knobs';
import { Dialog } from '@ui5/webcomponents-react/lib/Dialog';
import React from 'react';

export default {
  title: 'UI5 Web Components / Dialog',
  component: Dialog
};

export const generatedDefaultStory = () => <Dialog stretch={boolean('stretch', true)} />;

generatedDefaultStory.story = {
  name: 'Generated default story'
};
