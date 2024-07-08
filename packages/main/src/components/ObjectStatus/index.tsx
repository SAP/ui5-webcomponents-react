'use client';

import {
  VALUE_STATE_ERROR,
  VALUE_STATE_INFORMATION,
  VALUE_STATE_SUCCESS,
  VALUE_STATE_WARNING
} from '@ui5/webcomponents/dist/generated/i18n/i18n-defaults.js';
import ValueState from '@ui5/webcomponents-base/dist/types/ValueState.js';
import alertIcon from '@ui5/webcomponents-icons/dist/alert.js';
import errorIcon from '@ui5/webcomponents-icons/dist/error.js';
import informationIcon from '@ui5/webcomponents-icons/dist/information.js';
import successIcon from '@ui5/webcomponents-icons/dist/sys-enter-2.js';
import { useI18nBundle, useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { MouseEventHandler, ReactNode } from 'react';
import { forwardRef } from 'react';
import type { IndicationColor } from '../../enums/index.js';
import {
  ARIA_OBJ_STATUS_DESC,
  ARIA_OBJ_STATUS_DESC_INACTIVE,
  EMPTY_VALUE,
  INDICATION_COLOR
} from '../../i18n/i18n-defaults.js';
import type { CommonProps } from '../../types/index.js';
import { Icon } from '../../webComponents/Icon/index.js';
import { classNames, styleData } from './ObjectStatus.module.css.js';

export interface ObjectStatusPropTypes extends CommonProps {
  /**
   * Indicates if the ObjectStatus is rendered as inactive `div` or interactive `button` and therefore can be clicked/tapped by the user or not.
   *
   * **Note:** If this prop is set to `true`, you should also set the `children` or `icon` prop.
   *
   *
   * @since 0.16.6
   */
  interactive?: boolean;

  /**
   * Defines the icon in front of the `ObjectStatus` text.
   *
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
   * Defines if the component should be rendered in large design.
   *
   * @since 1.21.0
   */
  large?: boolean;

  /**
   * Defines the text of the `ObjectStatus`.
   *
   * __Note:__ Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: ReactNode;

  /**
   * Defines the value state of the `ObjectStatus`.
   *
   * Since version 0.17.0 the state property also accepts values from enum `IndicationColor`.
   *
   * @default `"None"`
   */
  state?: ValueState | keyof typeof ValueState | IndicationColor | keyof typeof IndicationColor;

  /**
   * Defines whether the default icon for each `ValueState` should be displayed.
   *
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
   * Fires when the user clicks/taps on an interactive text.
   *
   * __Note:__ This prop has no effect if `interactive` is not set to `true`.
   *
   * @since 0.16.6
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;
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
      case ValueState.Negative:
        if (renderDefaultIcon) {
          icon = <Icon name={errorIcon} data-component-name="ObjectStatusDefaultIcon" aria-hidden />;
        }
        if (!invisibleText) {
          invisibleText = errorStateText;
        }
        break;
      case ValueState.Positive:
        if (renderDefaultIcon) {
          icon = <Icon name={successIcon} data-component-name="ObjectStatusDefaultIcon" aria-hidden />;
        }
        if (!invisibleText) {
          invisibleText = successStateText;
        }
        break;
      case ValueState.Critical:
        if (renderDefaultIcon) {
          icon = <Icon name={alertIcon} data-component-name="ObjectStatusDefaultIcon" aria-hidden />;
        }
        if (!invisibleText) {
          invisibleText = warningStateText;
        }
        break;
      case ValueState.Information:
        if (renderDefaultIcon) {
          icon = <Icon name={informationIcon} data-component-name="ObjectStatusDefaultIcon" aria-hidden />;
        }
        if (!invisibleText) {
          invisibleText = informationStateText;
        }
        break;
    }
  }

  return [icon, invisibleText];
};

/**
 * Status information that can be either text with a value state, or an icon.
 */
const ObjectStatus = forwardRef<HTMLDivElement | HTMLButtonElement, ObjectStatusPropTypes>((props, ref) => {
  const {
    state = ValueState.None,
    showDefaultIcon,
    children,
    icon,
    className,
    style,
    interactive,
    inverted,
    onClick,
    emptyIndicator,
    stateAnnouncementText,
    large,
    ...rest
  } = props;
  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');
  const i18nBundleWc = useI18nBundle('@ui5/webcomponents');
  useStylesheet(styleData, ObjectStatus.displayName);

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
    <span
      aria-hidden={showEmptyIndicator}
      data-component-name="ObjectStatusEmptyIndicator"
      className={classNames.emptyIndicator}
    >
      –
    </span>
  ) : (
    children
  );

  const objStatusClasses = clsx(
    classNames.normalizeCSS,
    classNames.objectStatus,
    classNames[`${state as string}`.toLowerCase()],
    interactive && classNames.active,
    inverted && !showEmptyIndicator && classNames.inverted,
    large && classNames.large,
    className
  );

  const TagName = interactive ? 'button' : 'div';

  return (
    <TagName
      // @ts-expect-error: both refs are allowed (attributes, etc. of HTMLButtonElement should only be used if `active` is `true`)
      ref={ref}
      className={objStatusClasses}
      style={style}
      // @ts-expect-error: onClick is only registered if the event target is a HTMLButtonElement
      onClick={active ? onClick : undefined}
      tabIndex={interactive ? 0 : undefined}
      data-icon-only={!children}
      role={interactive ? 'button' : 'group'}
      {...rest}
    >
      <span className={classNames.pseudoInvisibleText} data-component-name="ObjectStatusInvisibleDescriptionContainer">
        {interactive ? i18nBundle.getText(ARIA_OBJ_STATUS_DESC) : i18nBundle.getText(ARIA_OBJ_STATUS_DESC_INACTIVE)}
      </span>
      {iconToRender && (
        <span className={classNames.icon} data-icon-only={!children} data-component-name="ObjectStatusIconContainer">
          {iconToRender}
        </span>
      )}
      {computedChildren && (
        <span className={classNames.text} data-component-name="ObjectStatusTextContainer">
          {computedChildren}
          {showEmptyIndicator && (
            <span
              className={classNames.pseudoInvisibleText}
              data-component-name="ObjectStatusInvisibleEmptyTextContainer"
            >
              {i18nBundle.getText(EMPTY_VALUE)}
            </span>
          )}
        </span>
      )}
      {!!invisibleText && (computedChildren || iconToRender) && (
        <span className={classNames.pseudoInvisibleText} data-component-name="ObjectStatusInvisibleTextContainer">
          {invisibleText}
        </span>
      )}
    </TagName>
  );
});

ObjectStatus.displayName = 'ObjectStatus';

export { ObjectStatus };
