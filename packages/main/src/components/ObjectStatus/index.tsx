import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { Icon } from '@ui5/webcomponents-react/lib/Icon';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React, { FC, forwardRef, ReactNode, Ref, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
import styles from './ObjectStatus.jss';
import '@ui5/webcomponents/dist/icons/status-negative';
import '@ui5/webcomponents/dist/icons/status-positive';
import '@ui5/webcomponents/dist/icons/status-critical';
import '@ui5/webcomponents/dist/icons/status-inactive';
import '@ui5/webcomponents/dist/icons/hint';

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
      return <Icon src="sap-icon://status-negative" style={defaultIconStyle} />;
    case ValueState.Success:
      return <Icon src="sap-icon://status-positive" style={defaultIconStyle} />;
    case ValueState.Warning:
      return <Icon src="sap-icon://status-critical" style={defaultIconStyle} />;
    case ValueState.Information:
      return <Icon src="sap-icon://hint" style={defaultIconStyle} />;
    default:
      return <Icon src="sap-icon://status-inactive" style={defaultIconStyle} />;
  }
};

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles, { name: 'ObjectStatus' });

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

  return (
    <div ref={ref} className={objStatusClasses.valueOf()} style={style} title={tooltip} slot={slot}>
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
