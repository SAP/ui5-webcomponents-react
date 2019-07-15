import { boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { ButtonDesign } from '../../lib/ButtonDesign';
import { ToggleButton } from '../../lib/ToggleButton';

storiesOf('UI5 Web Components | ToggleButton', module).add('Generated default story', () => (
  <ToggleButton
    design={select('design', ButtonDesign, null)}
    disabled={boolean('disabled', false)}
    icon="sap-icon://add"
    iconEnd={boolean('iconEnd', false)}
    pressed={boolean('pressed', false)}
    onClick={action('onClick')}
  >
    Some Content
  </ToggleButton>
));
