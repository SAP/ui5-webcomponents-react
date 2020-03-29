import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { Dialog } from '@ui5/webcomponents-react/lib/Dialog';
import React from 'react';

export default {
  title: 'UI5 Web Components / Dialog',
  component: Dialog
};

export const generatedDefaultStory = () => (
  <Dialog
    stretch={boolean('stretch', false)}
    headerText={text('headerText', '')}
    initialFocus={text('initialFocus', '')}
    footer={null}
    header={null}
    onAfterClose={action('onAfterClose')}
    onAfterOpen={action('onAfterOpen')}
    onBeforeClose={action('onBeforeClose')}
    onBeforeOpen={action('onBeforeOpen')}
  >
    Some Content
  </Dialog>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
