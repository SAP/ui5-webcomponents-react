import { action } from '@storybook/addon-actions';
import { number, text } from '@storybook/addon-knobs';
import { Calendar } from '@ui5/webcomponents-react/lib/Calendar';
import React from 'react';

export default {
  title: 'UI5 Web Components / Calendar',
  component: Calendar
};

export const generatedDefaultStory = () => (
  <Calendar
    maxDate={text('maxDate', '')}
    minDate={text('minDate', '')}
    primaryCalendarType={text('primaryCalendarType', undefined)}
    selectedDates={null}
    timestamp={number('timestamp', undefined)}
    onSelectedDatesChange={action('onSelectedDatesChange')}
  />
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
