import { StyleClassHelper, withStyles } from '@ui5/webcomponents-react-base';
import React, { FC } from 'react';
import { ClassProps } from '../../interfaces/ClassProps';
import { CommonProps } from '../../interfaces/CommonProps';
import { Size } from '../../lib/Size';
import { styles } from './Spinner.jss';

export interface SpinnerProps extends CommonProps {
  size?: Size;
}

interface SpinnerInternalProps extends SpinnerProps, ClassProps {}

export const Spinner: FC<SpinnerProps> = withStyles(styles)((props: SpinnerProps) => {
  const { classes, className, size, tooltip, innerRef, slot } = props as SpinnerInternalProps;

  const spinnerClasses = StyleClassHelper.of(classes.spinner);
  if (className) {
    spinnerClasses.put(className);
  }

  spinnerClasses.put(classes[`spinner${size}`]);

  return (
    <div
      ref={innerRef}
      className={spinnerClasses.valueOf()}
      data-component-name="BusyIndicator"
      aria-busy="true"
      role="progressbar"
      tabIndex={0}
      aria-valuemin={0}
      aria-valuemax={100}
      title={tooltip || 'Please wait'}
      slot={slot}
    >
      Loading...
    </div>
  );
});

Spinner.defaultProps = {
  size: Size.Medium
};
