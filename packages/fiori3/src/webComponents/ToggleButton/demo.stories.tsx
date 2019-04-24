import React from 'react';
import { storiesOf } from '@storybook/react';
import { ButtonType } from '../../enums/ButtonType';
import { select, boolean } from '@storybook/addon-knobs';
import { ToggleButton } from './index';

storiesOf('UI5 Web Components | ToggleButton', module).add('Generated default story', () => (
  <ToggleButton
    type={select('type', ButtonType, null)}
    disabled={boolean('disabled', false)}
    icon={'add'}
    iconEnd={boolean('iconEnd', false)}
    activeIcon={'generatedString'}
    pressed={boolean('pressed', false)}
    onPress={null}
  >
    Some Content
  </ToggleButton>
));
