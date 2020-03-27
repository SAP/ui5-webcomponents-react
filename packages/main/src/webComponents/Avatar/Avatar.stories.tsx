import React from 'react';
import { Avatar } from '@ui5/webcomponents-react/lib/Avatar';

import { text } from '@storybook/addon-knobs';
export default {
  title: 'UI5 Web Components / Avatar',
  component: Avatar
};

export const generatedDefaultStory = () => (
  <Avatar
    backgroundColor={text('backgroundColor', 'Accent6')}
    icon={text('icon', '')}
    image={text('image', '')}
    imageFitType={text('imageFitType', 'Cover')}
    initials={text('initials', '')}
    shape={null}
    size={null}
  />
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
