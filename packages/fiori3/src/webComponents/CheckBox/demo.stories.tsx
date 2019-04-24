import React from 'react';
import { storiesOf } from '@storybook/react';
import { ValueState } from '../../enums/ValueState';
import { boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { CheckBox } from './index';

storiesOf('UI5 Web Components | CheckBox', module).add('Default story', () => (
  <CheckBox
    disabled={boolean('disabled', false)}
    readOnly={boolean('readOnly', false)}
    checked={boolean('checked', false)}
    text={text('text', 'Checkbox Text')}
    valueState={select('valueState', ValueState, null)}
    wrap={boolean('wrap', false)}
    onChange={action('onChange')}
  />
));
