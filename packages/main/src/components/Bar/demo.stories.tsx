import { Bar } from '@ui5/webcomponents-react/lib/Bar';
import { BarDesign } from '@ui5/webcomponents-react/lib/BarDesign';
import { Label } from '@ui5/webcomponents-react/lib/Label';
import React from 'react';
import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';

export const defaultStory = (props) => {
  return (
    <Bar
      design={props.design}
      contentLeft={<Label>Content Left</Label>}
      contentMiddle={<Label>Content Middle</Label>}
      contentRight={<Label>Content Right</Label>}
    />
  );
};
defaultStory.storyName = 'Default';

export default {
  title: 'Components / Bar',
  component: Bar,
  argTypes: {
    ...createSelectArgTypes({ design: BarDesign }),
    ref: {
      type: null
    },
    contentMiddle: {
      type: null
    },
    contentLeft: {
      type: null
    },
    contentRight: {
      type: null
    }
  },
  args: {
    design: BarDesign.Auto
  }
};
