import { CalendarType } from '../../lib/CalendarType';
import { DatePicker } from '../../lib/DatePicker';
import { ValueState } from '../../lib/ValueState';
import { boolean, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';

storiesOf('UI5 Web Components | DatePicker', module).add('Generated default story', () => (
  <DatePicker
    value={'generatedString'}
    valueState={select('valueState', ValueState, null)}
    formatPattern={'generatedString'}
    primaryCalendarType={select('primaryCalendarType', CalendarType, null)}
    disabled={boolean('disabled', false)}
    readonly={boolean('readonly', false)}
    placeholder={'generatedString'}
    onChange={null}
    onLiveChange={null}
  />
));
