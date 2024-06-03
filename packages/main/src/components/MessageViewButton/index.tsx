'use client';

import alertIcon from '@ui5/webcomponents-icons/dist/alert.js';
import errorIcon from '@ui5/webcomponents-icons/dist/error.js';
import informationIcon from '@ui5/webcomponents-icons/dist/information.js';
import sysEnter2Icon from '@ui5/webcomponents-icons/dist/sys-enter-2.js';
import { useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import { forwardRef } from 'react';
import { ValueState } from '../../enums/index.js';
import type { ButtonDomRef, ButtonPropTypes } from '../../webComponents/index.js';
import { Button } from '../../webComponents/index.js';
import { classNames, styleData } from './MessageViewButton.module.css.js';

export interface MessageViewButtonProptypes
  extends Omit<ButtonPropTypes, 'design' | 'icon' | 'iconEnd' | 'children' | 'type' | 'submits'> {
  /**
   * Specifies the type of the button.
   *
   * __Note:__ `"None"` is displayed as `"Information"`.
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
  useStylesheet(styleData, MessageViewButton.displayName);
  const classes = clsx(classNames.btn, className);
  const icon = getIcon(type);

  return (
    <Button ref={ref} className={classes} icon={icon} {...rest} data-type={type}>
      {counter > 1 && counter}
    </Button>
  );
});

MessageViewButton.displayName = 'MessageViewButton';

export { MessageViewButton };
