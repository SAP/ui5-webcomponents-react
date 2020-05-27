import { select } from '@storybook/addon-knobs';
import { Bar } from '@ui5/webcomponents-react/lib/Bar';
import { BarDesign } from '@ui5/webcomponents-react/lib/BarDesign';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import React from 'react';

export const defaultStory = () => {
  return (
    <Bar
      design={select('design', BarDesign, BarDesign.Auto)}
      contentLeft={<Label>Content Left</Label>}
      contentMiddle={<Label>Content Middle</Label>}
      contentRight={<Label>Content Right</Label>}
    />
  );
};
defaultStory.storyName = 'Default';

export default {
  title: 'Components / Bar',
  component: Bar
};
