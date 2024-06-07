'use client';

import { deprecationNotice, useI18nBundle, useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import type { CSSProperties } from 'react';
import { forwardRef, useEffect, useState } from 'react';
import { LoaderType } from '../../enums/index.js';
import { PLEASE_WAIT } from '../../i18n/i18n-defaults.js';
import type { CommonProps } from '../../types/index.js';
import { classNames, styleData } from './Loader.module.css.js';

export interface LoaderPropTypes extends CommonProps {
  /**
   * Delay in ms until the Loader will be displayed
   *
   * @default `0`
   */
  delay?: number;
  /**
   * Defines the type of the `Loader`.
   *
   * __Note:__ If the process completion rate can be detected the `Determinate` type should be used.
   *
   * @default `"Indeterminate"`
   */
  type?: LoaderType | keyof typeof LoaderType;
  /**
   * Defines the progress of the Loader Bar.
   *
   * __Note:__ This prop has no effect if used with type `Indeterminate`.
   *
   * @default `"0px"`
   */
  progress?: CSSProperties['width'];
}

/**
 * The `Loader` signals that an operation is currently being executed. It uses as little space as possible to allow the user to interact with the UI.<br />
 * It can be used to signal a data update on an already existing dataset, or where an expansion will happen.
 *
 * __Note:__ This component is __deprecated__ and will be removed with our next major release (v2.0.0)! Please use the [BusyIndicator](https://sap.github.io/ui5-webcomponents-react/?path=/docs/user-feedback-busyindicator--docs) instead.
 *
 * @deprecated This component is deprecated and will be removed with our next major release (v2.0.0)! Please use the [BusyIndicator](https://sap.github.io/ui5-webcomponents-react/?path=/docs/user-feedback-busyindicator--docs) instead.
 */
const Loader = forwardRef<HTMLDivElement, LoaderPropTypes>((props, ref) => {
  const { className, type = LoaderType.Indeterminate, progress = '0px', slot, style, delay = 0, ...rest } = props;

  useStylesheet(styleData, Loader.displayName);
  const [isVisible, setIsVisible] = useState(delay === 0);

  const loaderClasses = clsx(classNames.loader, className, classNames[`loader${type}`]);
  const backgroundSize = type !== LoaderType.Determinate ? '40%' : progress;

  useEffect(() => {
    deprecationNotice('Loader', 'The `Loader` component is deprecated. Please use the `BusyIndicator` instead.');
  }, []);

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
      title={i18nBundle.getText(PLEASE_WAIT)}
      slot={slot}
      style={{
        ...style,
        backgroundSize
      }}
      {...rest}
    />
  );
});

Loader.displayName = 'Loader';

export { Loader };
