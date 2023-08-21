'use client';

import {
  VALUE_STATE_ERROR,
  VALUE_STATE_WARNING,
  VALUE_STATE_INFORMATION,
  VALUE_STATE_SUCCESS
} from '@ui5/webcomponents/dist/generated/i18n/i18n-defaults.js';
import alertIcon from '@ui5/webcomponents-icons/dist/alert.js';
import errorIcon from '@ui5/webcomponents-icons/dist/error.js';
import informationIcon from '@ui5/webcomponents-icons/dist/information.js';
import successIcon from '@ui5/webcomponents-icons/dist/sys-enter-2.js';
import { useI18nBundle } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { MouseEventHandler, ReactNode } from 'react';
import React, { forwardRef } from 'react';
import { createUseStyles } from 'react-jss';
import type { IndicationColor } from '../../enums/index.js';
import { ValueState } from '../../enums/index.js';
import { ARIA_OBJ_STATUS_DESC, EMPTY_VALUE, INDICATION_COLOR } from '../../i18n/i18n-defaults.js';
import type { CommonProps } from '../../interfaces/index.js';
import { Icon } from '../../webComponents/Icon/index.js';
import styles from './ObjectStatus.jss.js';

export interface ObjectStatusPropTypes extends CommonProps {
  /**
   * Indicates if the ObjectStatus text and icon can be clicked/tapped by the user.
   *
   * **Note:** If you set this property to true, you have to also set the `children` or `icon` prop.
   *
   * @since 0.16.6
   */
  active?: boolean;

  /**
   * Defines the icon in front of the `ObjectStatus` text.<br />
   * __Note:__ Although this slot accepts HTML Elements, it is strongly recommended that you only use `Icon` in order to preserve the intended design.
   */
  icon?: ReactNode;

  /**
   * Determines whether the background color reflects the set state instead of the text
   *
   * @since 0.16.6
   */
  inverted?: boolean;

  /**
   * Defines the text of the `ObjectStatus`.<br />
   * __Note:__ Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: string | number | ReactNode;

  /**
   * Defines the value state of the <code>ObjectStatus</code>. <br><br> Available options are: <ul> <li><code>None</code></li> <li><code>Error</code></li> <li><code>Warning</code></li> <li><code>Success</code></li> <li><code>Information</code></li> </ul>
   *
   * Since version 0.17.0 the state property also accepts values from enum `IndicationColor`.
   */
  state?: ValueState | keyof typeof ValueState | IndicationColor | keyof typeof IndicationColor;

  /**
   * Defines whether the default icon for each `ValueState` should be displayed.<br />
   * __Note:__ If the `icon` prop was set, `showDefaultIcon` has no effect.
   */
  showDefaultIcon?: boolean;

  /**
   * Specifies if an empty indicator should be displayed when there is no text.
   *
   * @since 1.19.0
   */
  emptyIndicator?: boolean;

  /**
   * Enables overriding of the default state announcement read by screen readers.
   *
   * @since 1.19.0
   */
  stateAnnouncementText?: string;

  /**
   * Fires when the user clicks/taps on active text.
   *
   * @since 0.16.6
   */
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const getStateSpecifics = (state, showDefaultIcon, userIcon, stateAnnouncementText, i18nTexts) => {
  const { indicationColorText, errorStateText, warningStateText, informationStateText, successStateText } = i18nTexts;
  let icon = userIcon;
  const renderDefaultIcon = showDefaultIcon && !icon;
  let invisibleText = stateAnnouncementText;
  if (!invisibleText && state.startsWith('Indication')) {
    invisibleText = `${indicationColorText} ${state.substring(state.indexOf('0') + 1)}`;
  }
  if (!invisibleText || renderDefaultIcon) {
    switch (state) {
      case ValueState.Error:
        if (renderDefaultIcon) {
          icon = <Icon name={errorIcon} data-component-name="ObjectStatusDefaultIcon" />;
        }
        if (!invisibleText) {
          invisibleText = errorStateText;
        }
        break;
      case ValueState.Success:
        if (renderDefaultIcon) {
          icon = <Icon name={successIcon} data-component-name="ObjectStatusDefaultIcon" />;
        }
        if (!invisibleText) {
          invisibleText = successStateText;
        }
        break;
      case ValueState.Warning:
        if (renderDefaultIcon) {
          icon = <Icon name={alertIcon} data-component-name="ObjectStatusDefaultIcon" />;
        }
        if (!invisibleText) {
          invisibleText = warningStateText;
        }
        break;
      case ValueState.Information:
        if (renderDefaultIcon) {
          icon = <Icon name={informationIcon} data-component-name="ObjectStatusDefaultIcon" />;
        }
        if (!invisibleText) {
          invisibleText = informationStateText;
        }
        break;
    }
  }

  return [icon, invisibleText];
};

const useStyles = createUseStyles(styles, { name: 'ObjectStatus' });

/**
 * Status information that can be either text with a value state, or an icon.
 */
const ObjectStatus = forwardRef<HTMLDivElement, ObjectStatusPropTypes>((props, ref) => {
  const {
    state,
    showDefaultIcon,
    children,
    icon,
    className,
    style,
    active,
    inverted,
    onClick,
    emptyIndicator,
    stateAnnouncementText,
    ...rest
  } = props;
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  const i18nBundleWc = useI18nBundle('@ui5/webcomponents');
  const classes = useStyles();

  const indicationColorText = i18nBundle.getText(INDICATION_COLOR);
  const errorStateText = i18nBundleWc.getText(VALUE_STATE_ERROR);
  const warningStateText = i18nBundleWc.getText(VALUE_STATE_WARNING);
  const informationStateText = i18nBundleWc.getText(VALUE_STATE_INFORMATION);
  const successStateText = i18nBundleWc.getText(VALUE_STATE_SUCCESS);

  const [iconToRender, invisibleText] = getStateSpecifics(state, showDefaultIcon, icon, stateAnnouncementText, {
    indicationColorText,
    errorStateText,
    warningStateText,
    informationStateText,
    successStateText
  });

  const showEmptyIndicator = emptyIndicator && !children;
  const computedChildren = showEmptyIndicator ? (
    <span aria-hidden={showEmptyIndicator} data-component-name="ObjectStatusEmptyIndicator">
      –
    </span>
  ) : (
    children
  );

  const objStatusClasses = clsx(
    classes.objectStatus,
    classes[`${state as string}`.toLowerCase()],
    active && classes.active,
    inverted && !showEmptyIndicator && classes.inverted,
    className
  );

  return (
    <div
      ref={ref}
      className={objStatusClasses}
      style={style}
      onClick={active ? onClick : undefined}
      tabIndex={active ? 0 : undefined}
      data-icon-only={!children}
      role={active ? 'button' : undefined}
      aria-roledescription={active ? i18nBundle.getText(ARIA_OBJ_STATUS_DESC) : undefined}
      {...rest}
    >
      {iconToRender && (
        <span className={classes.icon} data-icon-only={!children} data-component-name="ObjectStatusIconContainer">
          {iconToRender}
        </span>
      )}
      {computedChildren && (
        <span
          className={clsx(classes.text, showEmptyIndicator && classes.emptyIndicator)}
          data-component-name="ObjectStatusTextContainer"
        >
          {computedChildren}
          {showEmptyIndicator && (
            <span className={classes.pseudoInvisibleText} data-component-name="ObjectStatusInvisibleEmptyTextContainer">
              {i18nBundle.getText(EMPTY_VALUE)}
            </span>
          )}
        </span>
      )}
      {!!invisibleText && computedChildren && (
        <span className={classes.pseudoInvisibleText} data-component-name="ObjectStatusInvisibleTextContainer">
          {invisibleText}
        </span>
      )}
    </div>
  );
});

ObjectStatus.displayName = 'ObjectStatus';

ObjectStatus.defaultProps = {
  state: ValueState.None
};

export { ObjectStatus };
