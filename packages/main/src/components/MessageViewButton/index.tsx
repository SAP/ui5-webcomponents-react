'use client';

import alertIcon from '@ui5/webcomponents-icons/dist/alert.js';
import errorIcon from '@ui5/webcomponents-icons/dist/error.js';
import informationIcon from '@ui5/webcomponents-icons/dist/information.js';
import sysEnter2Icon from '@ui5/webcomponents-icons/dist/sys-enter-2.js';
import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import React, { forwardRef } from 'react';
import { createUseStyles } from 'react-jss';
import { ValueState } from '../../enums/index.js';
import type { ButtonDomRef, ButtonPropTypes } from '../../webComponents/index.js';
import { Button } from '../../webComponents/index.js';

const buttonStyles = Object.values(ValueState).reduce((acc, cur) => {
  let cssType;
  switch (cur) {
    case ValueState.Error:
      cssType = 'Negative';
      break;
    case ValueState.Success:
      cssType = 'Success';
      break;
    case ValueState.Warning:
      cssType = 'Critical';
      break;
    default:
      cssType = 'Neutral';
  }
  const standard = `&[data-type="${cur}"]`;
  const hover = `&[data-type="${cur}"]:hover`;
  const active = `&[data-type="${cur}"]:active`;
  return {
    ...acc,
    [standard]: {
      color: ThemingParameters[`sapButton_${cssType}_TextColor`],
      background: ThemingParameters[`sapButton_${cssType}_Background`],
      borderColor: ThemingParameters[`sapButton_${cssType}_BorderColor`]
    },
    [hover]: {
      color: ThemingParameters[`sapButton_${cssType}_Hover_TextColor`],
      background: ThemingParameters[`sapButton_${cssType}_Hover_Background`],
      borderColor: ThemingParameters[`sapButton_${cssType}_Hover_BorderColor`]
    },
    [active]: {
      color: ThemingParameters[`sapButton_${cssType}_Active_TextColor`],
      background: ThemingParameters[`sapButton_${cssType}_Active_Background`],
      borderColor: ThemingParameters[`sapButton_${cssType}_Active_BorderColor`]
    }
  };
}, {});

const useStyles = createUseStyles(
  {
    btn: {
      ...buttonStyles
    }
  },
  { name: 'MessageViewButtonStyles' }
);

export interface MessageViewButtonProptypes
  extends Omit<ButtonPropTypes, 'design' | 'icon' | 'iconEnd' | 'children' | 'type' | 'submits'> {
  /**
   * Specifies the type of the button.
   */
  type?: ValueState | keyof typeof ValueState;
  /**
   * Defines the number of messages for a given message type.
   *
   * __Note:__ Numbers smaller than 2 are not displayed.
   */
  counter?: number;
}

const getIcon = (type) => {
  switch (type) {
    case ValueState.Error:
      return errorIcon;
    case ValueState.Success:
      return sysEnter2Icon;
    case ValueState.Warning:
      return alertIcon;
    default:
      return informationIcon;
  }
};

/**
 * The `MessageViewButton` can be used for opening a `Popover` containing the `MessageView` component. It should always reflect the message `type` with the highest severity.
 */
const MessageViewButton = forwardRef<ButtonDomRef, MessageViewButtonProptypes>((props, ref) => {
  const { type = ValueState.Error, counter, className, ...rest } = props;
  const classes = useStyles();
  const classNames = clsx(classes.btn, className);
  const icon = getIcon(type);

  return (
    <Button ref={ref} className={classNames} icon={icon} {...rest} data-type={type}>
      {counter > 1 && counter}
    </Button>
  );
});

MessageViewButton.displayName = 'MessageViewButton';

export { MessageViewButton };
