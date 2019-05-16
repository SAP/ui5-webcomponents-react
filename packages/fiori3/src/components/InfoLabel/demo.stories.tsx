import { InfoLabel } from '../../lib/InfoLabel';
import { Label } from '../../lib/Label';
import { boolean, text, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { propTablesExclude } from '../../../../docs/.storybook/config';

const flavours = [];
for (let i = 1; i <= 10; i++) {
  flavours.push(i);
}

function renderStory() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '150px' }}>
      <Label>With Knobs</Label>
      <InfoLabel flavour={select('flavour', flavours, 1)} displayOnly={boolean('displayOnly', true)}>
        {text('children', 'Text')}
      </InfoLabel>
      <Label style={{ marginTop: '1rem' }}>Different Flavours</Label>
      <InfoLabel flavour={1}>Flavour 1</InfoLabel>
      <InfoLabel flavour={2}>Flavour 2</InfoLabel>
      <InfoLabel flavour={3}>Flavour 3</InfoLabel>
      <InfoLabel flavour={4}>Flavour 4</InfoLabel>
      <InfoLabel flavour={5}>Flavour 5</InfoLabel>
      <InfoLabel flavour={6}>Flavour 6</InfoLabel>
      <InfoLabel flavour={7}>Flavour 7</InfoLabel>
      <InfoLabel flavour={8}>Flavour 8</InfoLabel>
      <InfoLabel flavour={9}>Flavour 9</InfoLabel>
      <InfoLabel flavour={10}>Flavour 10</InfoLabel>
      <Label style={{ marginTop: '1rem' }}>Numeric</Label>
      <InfoLabel flavour={6}>13345345</InfoLabel>
    </div>
  );
}

storiesOf('F4R Components | InfoLabel', module)
  .addParameters({
    info: {
      propTablesExclude: [...propTablesExclude, Label]
    }
  })
  .add('Default', renderStory);
