import { StyleClassHelper } from '@ui5/webcomponents-react-base';
import React, { forwardRef, RefObject } from 'react';
// @ts-ignore
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { Size } from '../../lib/Size';
import { styles } from './Spinner.jss';

export interface SpinnerProps extends CommonProps {
  size?: Size;
}

const useStyles = createUseStyles(styles);

const Spinner = forwardRef((props: SpinnerProps, ref: RefObject<HTMLDivElement>) => {
  const { className, size, tooltip, slot } = props;
  const classes = useStyles();

  const spinnerClasses = StyleClassHelper.of(classes.spinner);
  if (className) {
    spinnerClasses.put(className);
  }

  spinnerClasses.put(classes[`spinner${size}`]);

  return (
    <div
      ref={ref}
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

Spinner.displayName = 'Spinner';

export { Spinner };
