import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { CheckBox } from '../../lib/CheckBox';
import { ValueState } from '../../lib/ValueState';

storiesOf('UI5 Web Components | CheckBox', module).add('Default story', () => (
  <CheckBox
    disabled={boolean('disabled', false)}
    readonly={boolean('readonly', false)}
    checked={boolean('checked', false)}
    text={text('text', 'Checkbox Text')}
    valueState={select('valueState', ValueState, null)}
    wrap={boolean('wrap', false)}
    onChange={action('onChange')}
  />
));
