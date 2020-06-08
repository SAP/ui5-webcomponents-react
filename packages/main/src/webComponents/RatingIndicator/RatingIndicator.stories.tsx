import { action } from '@storybook/addon-actions';
import { boolean, number } from '@storybook/addon-knobs';
import { RatingIndicator } from '@ui5/webcomponents-react/lib/RatingIndicator';
import React from 'react';

export default {
  title: 'UI5 Web Components / RatingIndicator',
  component: RatingIndicator
};

export const generatedDefaultStory = () => (
  <RatingIndicator
    disabled={boolean('disabled', false)}
    maxValue={number('maxValue', 5)}
    readonly={boolean('readonly', false)}
    value={number('value', 0)}
    onChange={action('onChange')}
  />
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
