'use client';

import alertIcon from '@ui5/webcomponents-icons/dist/alert.js';
import errorIcon from '@ui5/webcomponents-icons/dist/error.js';
import informationIcon from '@ui5/webcomponents-icons/dist/information.js';
import successIcon from '@ui5/webcomponents-icons/dist/sys-enter-2.js';
import { clsx } from 'clsx';
import type { MouseEventHandler, ReactNode } from 'react';
import React, { forwardRef } from 'react';
import { createUseStyles } from 'react-jss';
import type { IndicationColor } from '../../enums/index.js';
import { ValueState } from '../../enums/index.js';
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
   * Fires when the user clicks/taps on active text.
   *
   * @since 0.16.6
   */
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const getDefaultIcon = (state) => {
  switch (state) {
    case ValueState.Error:
      return <Icon name={errorIcon} data-component-name="ObjectStatusDefaultIcon" />;
    case ValueState.Success:
      return <Icon name={successIcon} data-component-name="ObjectStatusDefaultIcon" />;
    case ValueState.Warning:
      return <Icon name={alertIcon} data-component-name="ObjectStatusDefaultIcon" />;
    case ValueState.Information:
      return <Icon name={informationIcon} data-component-name="ObjectStatusDefaultIcon" />;
    default:
      return null;
  }
};

const useStyles = createUseStyles(styles, { name: 'ObjectStatus' });

/**
 * Status information that can be either text with a value state, or an icon.
 */
const ObjectStatus = forwardRef<HTMLDivElement, ObjectStatusPropTypes>((props, ref) => {
  const { state, showDefaultIcon, children, icon, className, style, active, inverted, onClick, ...rest } = props;

  const iconToRender = (() => {
    if (icon) {
      return icon;
    }
    if (showDefaultIcon) {
      return getDefaultIcon(state);
    }
    return null;
  })();

  const classes = useStyles();
  const objStatusClasses = clsx(
    classes.objectStatus,
    classes[`${state as string}`.toLowerCase()],
    active && classes.active,
    inverted && classes.inverted,
    className
  );

  return (
    <div ref={ref} className={objStatusClasses} style={style} onClick={active ? onClick : undefined} {...rest}>
      {iconToRender && <span className={classes.icon}>{iconToRender}</span>}
      {children && <span className={classes.text}>{children}</span>}
    </div>
  );
});

ObjectStatus.displayName = 'ObjectStatus';

ObjectStatus.defaultProps = {
  state: ValueState.None
};

export { ObjectStatus };
