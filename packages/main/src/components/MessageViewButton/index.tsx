'use client';

import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import alertIcon from '@ui5/webcomponents-icons/dist/alert.js';
import errorIcon from '@ui5/webcomponents-icons/dist/error.js';
import informationIcon from '@ui5/webcomponents-icons/dist/information.js';
import sysEnter2Icon from '@ui5/webcomponents-icons/dist/sys-enter-2.js';
import { useI18nBundle, useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import { forwardRef } from 'react';
import {
  ERROR_TYPE,
  WARNING_TYPE,
  INFORMATION_TYPE,
  SUCCESS_TYPE,
  ERROR,
  SUCCESS,
  WARNING,
  INFORMATION,
} from '../../i18n/i18n-defaults.js';
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
   * __Note:__ Numbers smaller than 1 are not displayed.
   */
  counter?: number;
}

interface Types {
  icon: string;
  i18nLabel: { key: string; defaultText: string };
  tooltip: { key: string; defaultText: string };
}

const getTypes = (type: MessageViewButtonProptypes['type']): Types => {
  switch (type) {
    case ValueState.Negative:
      return { icon: errorIcon, i18nLabel: ERROR_TYPE, tooltip: ERROR };
    case ValueState.Positive:
      return { icon: sysEnter2Icon, i18nLabel: SUCCESS_TYPE, tooltip: SUCCESS };
    case ValueState.Critical:
      return { icon: alertIcon, i18nLabel: WARNING_TYPE, tooltip: WARNING };
    default:
      return { icon: informationIcon, i18nLabel: INFORMATION_TYPE, tooltip: INFORMATION };
  }
};

/**
 * The `MessageViewButton` can be used for opening a `Popover` containing the `MessageView` component. It should always reflect the message `type` with the highest severity.
 */
const MessageViewButton = forwardRef<ButtonDomRef, MessageViewButtonProptypes>((props, ref) => {
  const { type = ValueState.Negative, counter, className, tooltip, accessibleName, ...rest } = props;
  useStylesheet(styleData, MessageViewButton.displayName);
  const classes = clsx(classNames.btn, className);
  const { icon, i18nLabel, tooltip: title } = getTypes(type);

  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  const label = i18nBundle.getText(i18nLabel);
  return (
    <Button
      ref={ref}
      className={classes}
      icon={icon}
      {...rest}
      data-type={type}
      tooltip={tooltip ?? i18nBundle.getText(title)}
      accessibleName={accessibleName ?? label}
    >
      {counter > 0 && counter}
    </Button>
  );
});

MessageViewButton.displayName = 'MessageViewButton';

export { MessageViewButton };
