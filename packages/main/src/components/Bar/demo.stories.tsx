import React from 'react';
import { Bar } from '../../lib/Bar';
import { Label } from '../../lib/Label';

export const defaultStory = () => {
  return (
    <Bar
      renderContentLeft={() => <Label>Content Left</Label>}
      renderContentMiddle={() => <Label>Content Middle</Label>}
      renderContentRight={() => <Label>Content Right</Label>}
    />
  );
};
defaultStory.story = {
  name: 'Default'
};

export default {
  title: 'Components | Bar',
  component: Bar
};
