import '@ui5/webcomponents-icons/dist/hint.js';
import '@ui5/webcomponents-icons/dist/status-critical.js';
import '@ui5/webcomponents-icons/dist/status-negative.js';
import '@ui5/webcomponents-icons/dist/status-positive.js';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/dist/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/dist/usePassThroughHtmlProps';
import { Icon } from '@ui5/webcomponents-react/dist/Icon';
import { ValueState } from '@ui5/webcomponents-react/dist/ValueState';
import { IndicationColor } from '@ui5/webcomponents-react/dist/IndicationColor';
import React, { forwardRef, MouseEventHandler, ReactNode, Ref } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import styles from './ObjectStatus.jss';

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
      return <Icon name="status-negative" />;
    case ValueState.Success:
      return <Icon name="status-positive" />;
    case ValueState.Warning:
      return <Icon name="status-critical" />;
    case ValueState.Information:
      return <Icon name="hint" />;
    default:
      return null;
  }
};

const useStyles = createUseStyles(styles, { name: 'ObjectStatus' });

/**
 * Status information that can be either text with a value state, or an icon.
 */
const ObjectStatus = forwardRef((props: ObjectStatusPropTypes, ref: Ref<HTMLDivElement>) => {
  const { state, showDefaultIcon, children, icon, className, style, tooltip, active, inverted, onClick } = props;

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
  const objStatusClasses = StyleClassHelper.of(classes.objectStatus, classes[`${state as string}`.toLowerCase()]);

  if (active) {
    objStatusClasses.put(classes.active);
  }

  if (inverted) {
    objStatusClasses.put(classes.inverted);
  }

  if (className) {
    objStatusClasses.put(className);
  }

  const passThroughProps = usePassThroughHtmlProps(props);

  return (
    <div
      ref={ref}
      className={objStatusClasses.valueOf()}
      style={style}
      title={tooltip}
      onClick={active ? onClick : undefined}
      {...passThroughProps}
    >
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
