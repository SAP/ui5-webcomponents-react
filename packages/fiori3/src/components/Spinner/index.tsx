import { ClassProps } from '@fiori-for-react/core/types';
import { withStyles } from '@fiori-for-react/core/utils/withStyles';
import { StyleClassHelper } from '@fiori-for-react/utils';
import React, { FC } from 'react';
import { Size } from '../../enums/Size';
import { Fiori3CommonProps } from '../../interfaces/Fiori3CommonProps';
import { styles } from './Spinner.jss';

export interface SpinnerProps extends Fiori3CommonProps {
  size?: Size;
}

interface SpinnerInternalProps extends SpinnerProps, ClassProps {}

export const Spinner: FC<SpinnerProps> = withStyles(styles)((props: SpinnerInternalProps) => {
  const { classes, className, size, tooltip } = props;

  const spinnerClasses = StyleClassHelper.of(classes.spinner);
  if (className) {
    spinnerClasses.put(className);
  }

  spinnerClasses.put(classes[`spinner${size}`]);

  return (
    <div
      className={spinnerClasses.valueOf()}
      data-component-name="BusyIndicator"
      aria-busy="true"
      role="progressbar"
      tabIndex={0}
      aria-valuemin={0}
      aria-valuemax={100}
      title={tooltip || 'Please wait'}
      data-ui5-slot={props['data-ui5-slot']}
    >
      Loading...
    </div>
  );
});

Spinner.defaultProps = {
  size: Size.Medium
};
