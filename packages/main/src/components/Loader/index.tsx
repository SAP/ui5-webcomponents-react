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
  /*
   * Delay in ms until the Loader will be displayed
   */
  delay?: number;
  type?: LoaderType;
  progress?: CSSProperties['width'];
}

const useStyles = createComponentStyles(styles, { name: 'Loader' });

/**
 * <code>import { Loader } from '@ui5/webcomponents-react/lib/Loader';</code>
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
