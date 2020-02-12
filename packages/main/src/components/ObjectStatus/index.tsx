import '@ui5/webcomponents-icons/dist/icons/hint';
import '@ui5/webcomponents-icons/dist/icons/status-critical';
import '@ui5/webcomponents-icons/dist/icons/status-inactive';
import '@ui5/webcomponents-icons/dist/icons/status-negative';
import '@ui5/webcomponents-icons/dist/icons/status-positive';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React, { FC, forwardRef, ReactNode, Ref, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
import styles from './ObjectStatus.jss';

export interface ObjectStatusPropTypes extends CommonProps {
  children?: string | number | ReactNode;
  icon?: ReactNode;
  state?: ValueState;
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

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles, { name: 'ObjectStatus' });

/**
 * <code>import { ObjectStatus } from '@ui5/webcomponents-react/lib/ObjectStatus';</code>
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
