import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';
import { InfoLabel } from './index';

const flavours = [];
for (let i = 1; i <= 9; i++) {
  flavours.push(i);
}

function renderStory() {
  return (
    <div>
      <InfoLabel flavour={select('flavour', flavours, 1)} displayOnly={boolean('displayOnly', true)}>
        text
      </InfoLabel>
      <InfoLabel flavour={6}>13345345</InfoLabel>
    </div>
  );
}

storiesOf('F4R Components | InfoLabel', module).add('Default', renderStory);
