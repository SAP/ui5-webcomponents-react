import '@ui5/webcomponents-icons/dist/hint';
import '@ui5/webcomponents-icons/dist/status-critical';
import '@ui5/webcomponents-icons/dist/status-inactive';
import '@ui5/webcomponents-icons/dist/status-negative';
import '@ui5/webcomponents-icons/dist/status-positive';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React, { FC, forwardRef, ReactNode, Ref, useMemo } from 'react';
import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { CommonProps } from '../../interfaces/CommonProps';
import styles from './ObjectStatus.jss';

export interface ObjectStatusPropTypes extends CommonProps {
  /**
   * Defines the text of the `ObjectStatus`.<br />
   * __Note:__ Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
   */
  children?: string | number | ReactNode;
  /**
   * Defines the icon in front of the `ObjectStatus` text.<br />
   * __Note:__ Although this slot accepts HTML Elements, it is strongly recommended that you only use `Icon` in order to preserve the intended design.
   */
  icon?: ReactNode;
  /**
   * Defines the value state of the <code>ObjectStatus</code>. <br><br> Available options are: <ul> <li><code>None</code></li> <li><code>Error</code></li> <li><code>Warning</code></li> <li><code>Success</code></li> <li><code>Information</code></li> </ul>
   */
  state?: ValueState;
  /**
   * Defines whether the default icon for each `ValueState` should be displayed.<br />
   * __Note:__ If the `icon` prop was set, `showDefaultIcon` has no effect.
   */
  showDefaultIcon?: boolean;
}

const defaultIconStyle = {
  fontSize: '1rem'
};

const getDefaultIcon = (state) => {
  switch (state) {
    case ValueState.Error:
      return <Icon name="status-negative" style={defaultIconStyle} />;
    case ValueState.Success:
      return <Icon name="status-positive" style={defaultIconStyle} />;
    case ValueState.Warning:
      return <Icon name="status-critical" style={defaultIconStyle} />;
    case ValueState.Information:
      return <Icon name="hint" style={defaultIconStyle} />;
    default:
      return <Icon name="status-inactive" style={defaultIconStyle} />;
  }
};

const useStyles = createComponentStyles(styles, { name: 'ObjectStatus' });
/**
 * Status information that can be either text with a value state, or an icon.
 */
const ObjectStatus: FC<ObjectStatusPropTypes> = forwardRef((props: ObjectStatusPropTypes, ref: Ref<HTMLDivElement>) => {
  const { state, showDefaultIcon, children, icon, className, style, tooltip, slot } = props;
  const iconToRender = useMemo(() => {
    if (icon) {
      return icon;
    }
    if (showDefaultIcon) {
      return getDefaultIcon(state);
    }
    return null;
  }, [icon, showDefaultIcon, state]);

  const classes = useStyles();
  const objStatusClasses = StyleClassHelper.of(classes.objectStatus);

  if (className) {
    objStatusClasses.put(className);
  }

  const iconClasses = StyleClassHelper.of(classes.icon);
  iconClasses.put(classes[`icon${state}`]);
  const textClass = classes[`text${state}`];

  const passThroughProps = usePassThroughHtmlProps(props);

  return (
    <div
      ref={ref}
      className={objStatusClasses.valueOf()}
      style={style}
      title={tooltip}
      slot={slot}
      {...passThroughProps}
    >
      {iconToRender && <div className={iconClasses.valueOf()}>{iconToRender}</div>}
      {children !== null && children !== undefined && <span className={textClass}>{children}</span>}
    </div>
  );
});

ObjectStatus.displayName = 'ObjectStatus';

ObjectStatus.defaultProps = {
  state: ValueState.None,
  showDefaultIcon: false,
  icon: null,
  children: null
};

export { ObjectStatus };
