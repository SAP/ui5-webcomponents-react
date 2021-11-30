import { useI18nBundle } from '@ui5/webcomponents-react-base/dist/hooks';
import { PLEASE_WAIT } from '@ui5/webcomponents-react/dist/assets/i18n/i18n-defaults';
import { LoaderType } from '@ui5/webcomponents-react/dist/LoaderType';
import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import clsx from 'clsx';
import React, { CSSProperties, forwardRef, RefObject, useEffect, useMemo, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { styles } from './Loader.jss';

export interface LoaderPropTypes extends CommonProps {
  /**
   * Delay in ms until the Loader will be displayed
   */
  delay?: number;
  /**
   * Defines the type of the `Loader`.
   * __Note:__ If the process completion rate can be detected the `Determinate` type should be used.
   */
  type?: LoaderType | keyof typeof LoaderType;
  /**
   * Defines the progress of the Loader Bar. <br />
   * __Note:__ This prop has no effect if used with type `Indeterminate`.
   */
  progress?: CSSProperties['width'];
}

const useStyles = createUseStyles(styles, { name: 'Loader' });
/**
 * The `Loader` signals that an operation is currently being executed. It uses as little space as possible to allow the user to interact with the UI.<br />
 * It can be used to signal a data update on an already existing dataset, or where an expansion will happen.
 */
const Loader = forwardRef((props: LoaderPropTypes, ref: RefObject<HTMLDivElement>) => {
  const { className, type, progress, tooltip, slot, style, delay, ...rest } = props;
  const classes = useStyles();
  const [isVisible, setIsVisible] = useState(delay === 0);

  const loaderClasses = clsx(classes.loader, className, classes[`loader${type}`]);

  const inlineStyles = useMemo(() => {
    const backgroundSize = type !== LoaderType.Determinate ? '40%' : progress;
    return {
      ...style,
      backgroundSize
    };
  }, [progress, style, type]);

  useEffect(() => {
    let timeout;
    if (delay > 0) {
      timeout = setTimeout(() => {
        setIsVisible(true);
      }, delay);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');

  if (!isVisible) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={loaderClasses}
      data-component-name="Loader"
      aria-busy="true"
      role="progressbar"
      title={tooltip || i18nBundle.getText(PLEASE_WAIT)}
      slot={slot}
      style={inlineStyles}
      {...rest}
    />
  );
});

Loader.defaultProps = {
  type: LoaderType.Indeterminate,
  progress: '0px',
  delay: 0
};

Loader.displayName = 'Loader';

export { Loader };
