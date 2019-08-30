import { boolean } from '@storybook/addon-knobs';
import React from 'react';
import { Dialog } from '@ui5/webcomponents-react/lib/Dialog';

export default {
  title: 'UI5 Web Components | Dialog',
  component: Dialog
};

export const generatedDefaultStory = () => (
  <Dialog
    initialFocus={''}
    hideHeader={boolean('hideHeader', false)}
    headerText={'generatedString'}
    stretch={boolean('stretch', false)}
    open={boolean('open', true)}
    onBeforeOpen={null}
    onAfterOpen={null}
    onBeforeClose={null}
    onAfterClose={null}
    content={<div>DialogContent</div>}
    header={null}
    footer={<div>Footer</div>}
  />
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
