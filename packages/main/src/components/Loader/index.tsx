import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { useI18nText } from '@ui5/webcomponents-react-base/lib/hooks';
import { PLEASE_WAIT } from '@ui5/webcomponents-react/dist/assets/i18n/i18n-defaults';
import { LoaderType } from '@ui5/webcomponents-react/lib/LoaderType';
import React, { CSSProperties, FC, forwardRef, RefObject, useEffect, useMemo, useState } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { styles } from './Loader.jss';

export interface LoaderProps extends CommonProps {
  /**
   * Delay in ms until the Loader will be displayed
   */
  delay?: number;
  /**
   * Defines the type of the `Loader`.
   * __Note:__ If the process completion rate can be detected the `Determinate` type should be used.
   */
  type?: LoaderType;
  /**
   * Defines the progress of the Loader Bar. <br />
   * __Note:__ This prop has no effect if used with type `Indeterminate`.
   */
  progress?: CSSProperties['width'];
}

const useStyles = createComponentStyles(styles, { name: 'Loader' });
/**
 * The `Loader` signals that an operation is currently being executed. It uses as little space as possible to allow the user to interact with the UI.<br />
 * It can be used to signal a data update on an already existing dataset, or where an expansion will happen.
 */
const Loader: FC<LoaderProps> = forwardRef((props: LoaderProps, ref: RefObject<HTMLDivElement>) => {
  const { className, type, progress, tooltip, slot, style, delay } = props;
  const classes = useStyles(props);
  const [isVisible, setIsVisible] = useState(delay === 0);

  const loaderClasses = StyleClassHelper.of(classes.loader);
  if (className) {
    loaderClasses.put(className);
  }
  loaderClasses.put(classes[`loader${type}`]);

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

  const passThroughProps = usePassThroughHtmlProps(props);

  const [pleaseWait] = useI18nText('@ui5/webcomponents-react', PLEASE_WAIT);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={loaderClasses.valueOf()}
      data-component-name="Loader"
      aria-busy="true"
      role="progressbar"
      title={tooltip || pleaseWait}
      slot={slot}
      style={inlineStyles}
      {...passThroughProps}
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
