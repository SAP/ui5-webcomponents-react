import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { Size } from '@ui5/webcomponents-react/lib/Size';
import React, { FC, forwardRef, RefObject, useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { styles } from './Spinner.jss';

export interface SpinnerProps extends CommonProps {
  /*
   * Delay in ms until the Spinner will be displayed
   */
  delay?: number;
  size?: Size;
}

const useStyles = createUseStyles(styles, { name: 'Spinner' });

const Spinner: FC<SpinnerProps> = forwardRef((props: SpinnerProps, ref: RefObject<HTMLDivElement>) => {
  const { className, size, tooltip, slot, style, delay } = props;
  const classes = useStyles();
  const [isVisible, setIsVisible] = useState(delay === 0);

  const spinnerClasses = StyleClassHelper.of(classes.spinner);
  if (className) {
    spinnerClasses.put(className);
  }

  spinnerClasses.put(classes[`spinner${size}`]);

  useEffect(() => {
    if (delay > 0) {
      setTimeout(() => {
        setIsVisible(true);
      }, delay);
    }
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={spinnerClasses.valueOf()}
      data-component-name="Spinner"
      aria-busy="true"
      role="progressbar"
      tabIndex={0}
      aria-valuemin={0}
      aria-valuemax={100}
      title={tooltip || 'Please wait'}
      slot={slot}
      style={style}
    >
      Loading...
    </div>
  );
});

Spinner.defaultProps = {
  delay: 0,
  size: Size.Medium
};

Spinner.displayName = 'Spinner';

export { Spinner };
