import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Token } from '@lib/Token';

function renderStory() {
  return (
    <Token
      selected={boolean('selected', false)}
      editable={boolean('editable', true)}
      onDeleteClick={action('deleted')}
      onClick={action('clicked')}
      onSelect={action('select')}
      onDeSelect={action('deSelect')}
    >
      Wayne Enterprises
    </Token>
  );
}

storiesOf('F4R Components | Token', module).add('Default', renderStory);
