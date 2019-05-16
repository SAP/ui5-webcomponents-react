import { ButtonType } from '../../lib/ButtonType';
import { ToggleButton } from '../../lib/ToggleButton';
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('UI5 Web Components | ToggleButton', module).add('Generated default story', () => (
  <ToggleButton
    type={select('type', ButtonType, null)}
    disabled={boolean('disabled', false)}
    icon="sap-icon://add"
    iconEnd={boolean('iconEnd', false)}
    activeIcon="sap-icon://add"
    pressed={boolean('pressed', false)}
    onPress={null}
  >
    Some Content
  </ToggleButton>
));
