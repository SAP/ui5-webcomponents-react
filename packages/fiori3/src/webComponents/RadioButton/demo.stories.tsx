import React from 'react';
import { storiesOf } from '@storybook/react';
import { ValueState } from '../../enums/ValueState';
import { boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { RadioButton } from './index';

// TODO We need to fix this as soon as the UI5 Web Component Content Density is writeable
storiesOf('UI5 Web Components | RadioButton', module).add(
  'Default',
  () => (
    <RadioButton
      disabled={boolean('disabled', false)}
      readOnly={boolean('readOnly', false)}
      selected={boolean('selected', false)}
      text={text('text', 'Option A')}
      valueState={select('valueState', ValueState, null)}
      group={text('group', 'GroupA')}
      onSelect={action('onSelect')}
    />
  ),
  {
    info: {
      text: `
      In order to use the Radio Button in Compact Size, please add the following snippet to your \`index.html\`:
      ~~~html
      <script data-id="sap-ui-config" type="application/json">
      { "compactSize": true }
      </script>
      ~~~
      
      This Storybook is currently only working in ContentDensity=Cozy.
      `
    }
  }
);
