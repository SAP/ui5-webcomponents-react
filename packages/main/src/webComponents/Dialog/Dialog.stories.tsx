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
    headerText={text('headerText', 'Dialog Header Text')}
    initialFocus={text('initialFocus', '')}
    footer={<span>Footer</span>}
    header={null}
    onAfterClose={action('onAfterClose')}
    onAfterOpen={action('onAfterOpen')}
    onBeforeClose={action('onBeforeClose')}
    onBeforeOpen={action('onBeforeOpen')}
    open={boolean('open', true)}
  >
    Some Content
  </Dialog>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
