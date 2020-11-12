import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { useI18nText } from '@ui5/webcomponents-react-base/lib/hooks';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { deprecationNotice } from '@ui5/webcomponents-react-base/lib/Utils';
import { PLEASE_WAIT } from '@ui5/webcomponents-react/dist/assets/i18n/i18n-defaults';
import { Size } from '@ui5/webcomponents-react/lib/Size';
import React, { FC, forwardRef, RefObject, useEffect, useState } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import { styles } from './Spinner.jss';

export interface SpinnerProps extends CommonProps {
  /*
   * Delay in ms until the Spinner will be displayed
   */
  delay?: number;
  size?: Size;
}

const useStyles = createComponentStyles(styles, { name: 'Spinner' });

/**
 * ### Deprecation Notice
 *
 * The Fiori 3 specification dropped the `Spinner` concept, so this component is deprecated and will be removed in the next release.<br />
 * Please use the [BusyIndicator](https://sap.github.io/ui5-webcomponents-react/?path=/docs/ui5-web-components-busyindicator) instead.
 */
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
    deprecationNotice(
      'Spinner',
      "'@ui5/webcomponents-react/lib/Spinner' is deprecated and will be removed in the next major release.\nPlease use '@ui5/webcomponents-react/lib/BusyIndicator' instead."
    );
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
      className={spinnerClasses.valueOf()}
      data-component-name="Spinner"
      aria-busy="true"
      role="progressbar"
      tabIndex={0}
      aria-valuemin={0}
      aria-valuemax={100}
      title={tooltip || pleaseWait}
      slot={slot}
      style={style}
      {...passThroughProps}
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
