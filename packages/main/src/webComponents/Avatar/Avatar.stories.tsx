import { text } from '@storybook/addon-knobs';
import { Avatar } from '@ui5/webcomponents-react/lib/Avatar';
import React from 'react';

export default {
  title: 'UI5 Web Components / Avatar',
  component: Avatar
};

export const generatedDefaultStory = () => (
  <Avatar
    backgroundColor={text('backgroundColor', 'Accent6')}
    icon={text('icon', 'employee')}
    image={text('image', '')}
    imageFitType={text('imageFitType', 'Cover')}
    initials={text('initials', '')}
    shape={text('shape', 'Circle')}
    size={text('size', 'S')}
  />
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
