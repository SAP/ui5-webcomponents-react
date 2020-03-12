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
    initialFocus={''}
    hideHeader={boolean('hideHeader', false)}
    headerText={text('headerText', 'My Dialog Title')}
    stretch={boolean('stretch', false)}
    open={boolean('open', true)}
    onBeforeOpen={action('onBeforeOpen')}
    onAfterOpen={action('onAfterOpen')}
    onBeforeClose={action('onBeforeClose')}
    onAfterClose={action('onAfterClose')}
    footer={<div>Footer</div>}
  >
    <div style={{ width: '200px', height: '200px' }}>DialogContent</div>
  </Dialog>
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
