import { storiesOf } from '@storybook/react';
import React from 'react';
import { Bar } from '../../lib/Bar';
import { Label } from '../../lib/Label';

function renderStory() {
  return (
    <Bar
      renderContentLeft={() => <Label>Content Left</Label>}
      renderContentMiddle={() => <Label>Content Middle</Label>}
      renderContentRight={() => <Label>Content Right</Label>}
    />
  );
}

storiesOf('Components | Bar', module).add('Default', renderStory);
