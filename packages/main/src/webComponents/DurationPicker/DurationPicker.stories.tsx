import { DurationPicker } from '@ui5/webcomponents-react/lib/DurationPicker';
import React from 'react';

export default {
  title: 'UI5 Web Components / DurationPicker',
  component: DurationPicker,
  args: {
    maxValue: '23:59:59',
    value: '00:00:00',
    valueState: 'None'
  }
};

export const generatedDefaultStory = (props) => (
  <DurationPicker
    disabled={props.disabled}
    maxValue={props.maxValue}
    readonly={props.readonly}
    showSeconds={props.showSeconds}
    value={props.value}
    valueState={props.valueState}
    onChange={props.onChange}
  />
);

generatedDefaultStory.storyName = 'Generated default story';
