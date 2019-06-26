import { StyleClassHelper, withStyles } from '@ui5/webcomponents-react-base';
import React, { FC, ReactNode } from 'react';
import { ClassProps } from '../../interfaces/ClassProps';
import { Fiori3CommonProps } from '../../interfaces/Fiori3CommonProps';
import { Icon } from '../../lib/Icon';
import { ValueState } from '../../lib/ValueState';
import styles from './ObjectStatus.jss';

export interface ObjectStatusPropTypes extends Fiori3CommonProps {
  children?: string | number | ReactNode;
  icon?: ReactNode;
  state?: ValueState;
  showDefaultIcon?: boolean;
}

interface ObjectStatusPropTypesInternal extends ObjectStatusPropTypes, ClassProps {}

const defaultIconStyle = {
  fontSize: '1rem'
};

const getDefaultIcon = (state) => {
  switch (state) {
    case ValueState.Error:
      return <Icon src="status-negative" style={defaultIconStyle} />;
    case ValueState.Success:
      return <Icon src="status-positive" style={defaultIconStyle} />;
    case ValueState.Warning:
      return <Icon src="status-critical" style={defaultIconStyle} />;
    case ValueState.Information:
      return <Icon src="hint" style={defaultIconStyle} />;
    default:
      return <Icon src="status-inactive" style={defaultIconStyle} />;
  }
};

export const ObjectStatus: FC<ObjectStatusPropTypes> = withStyles(styles)((props: ObjectStatusPropTypesInternal) => {
  const { state, showDefaultIcon, children, icon, classes, className, style, tooltip } = props;
  const iconToRender = !icon && showDefaultIcon ? getDefaultIcon(state) : icon;

  const objStatusClasses = StyleClassHelper.of(classes.objectStatus);

  if (className) {
    objStatusClasses.put(className);
  }

  const iconClasses = StyleClassHelper.of(classes.icon);
  iconClasses.put(classes[`icon${state}`]);

  const textClass = classes[`text${state}`];

  return (
    <div className={objStatusClasses.valueOf()} style={style} title={tooltip} data-ui5-slot={props['data-ui5-slot']}>
      {iconToRender && <div className={iconClasses.valueOf()}>{iconToRender}</div>}
      {children !== null && children !== undefined && <span className={textClass}>{children}</span>}
    </div>
  );
});

ObjectStatus.defaultProps = {
  state: ValueState.None,
  showDefaultIcon: false,
  icon: null,
  children: null
};
