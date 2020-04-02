import { select, text } from '@storybook/addon-knobs';
import { Avatar } from '@ui5/webcomponents-react/lib/Avatar';
import { AvatarBackgroundColor } from '@ui5/webcomponents-react/lib/AvatarBackgroundColor';
import { AvatarFitType } from '@ui5/webcomponents-react/lib/AvatarFitType';
import { AvatarShape } from '@ui5/webcomponents-react/lib/AvatarShape';
import { AvatarSize } from '@ui5/webcomponents-react/lib/AvatarSize';
import React from 'react';

export default {
  title: 'UI5 Web Components / Avatar',
  component: Avatar
};

export const generatedDefaultStory = () => (
  <Avatar
    backgroundColor={select('backgroundColor', AvatarBackgroundColor, AvatarBackgroundColor.Accent6)}
    icon={text('icon', 'employee')}
    image={text('image', '')}
    imageFitType={select('imageFitType', AvatarFitType, AvatarFitType.Cover)}
    initials={text('initials', '')}
    shape={select('shape', AvatarShape, AvatarShape.Circle)}
    size={select('size', AvatarSize, AvatarSize.S)}
  />
);

generatedDefaultStory.story = {
  name: 'Generated default story'
};
