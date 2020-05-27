import { select, text } from '@storybook/addon-knobs';
import { Avatar } from '@ui5/webcomponents-react/lib/Avatar';
import { AvatarBackgroundColor } from '@ui5/webcomponents-react/lib/AvatarBackgroundColor';
import { AvatarFitType } from '@ui5/webcomponents-react/lib/AvatarFitType';
import { AvatarShape } from '@ui5/webcomponents-react/lib/AvatarShape';
import { AvatarSize } from '@ui5/webcomponents-react/lib/AvatarSize';
import React from 'react';
import { createSelectArgTypes } from '@shared/stories/createSelectArgTypes';

export default {
  title: 'UI5 Web Components / Avatar',
  component: Avatar,
  argTypes: {
    ...createSelectArgTypes({
      backgroundColor: AvatarBackgroundColor,
      imageFitType: AvatarFitType,
      shape: AvatarShape,
      size: AvatarSize
    })
  },
  args: {
    backgroundColor: AvatarBackgroundColor.Accent6,
    icon: 'employee',
    imageFitType: AvatarFitType.Cover,
    shape: AvatarShape.Circle,
    size: AvatarSize.S
  }
};

export const generatedDefaultStory = (props) => (
  <Avatar
    backgroundColor={props.backgroundColor}
    icon={props.icon}
    image={props.image}
    imageFitType={props.imageFitType}
    initials={props.initials}
    shape={props.shape}
    size={props.size}
    accessibleName={props.accessibleName}
  />
);

generatedDefaultStory.storyName = 'Generated default story';
