import React from 'react';
import { storiesOf } from '@storybook/react';
import { ValueState } from '../../enums/ValueState';
import { CalendarType } from '@fiori-for-react/core/enums/CalendarType';
import { select, boolean } from '@storybook/addon-knobs';
import { DatePicker } from './index';

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
