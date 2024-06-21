'use client';

import { useStylesheet } from '@ui5/webcomponents-react-base';
import { clsx } from 'clsx';
import { forwardRef } from 'react';
import { ValueColor } from '../../enums/index.js';
import type { CommonProps } from '../../types/index.js';
import { Text } from '../Text/index.js';
import { classNames, styleData } from './NumericSideIndicator.module.css.js';

export interface NumericSideIndicatorPropTypes extends CommonProps {
  /**
   * The numeric value
   */
  number: number | string;
  /**
   * The semantic color which represents the state of the side indicator.
   *
   * @default `"None"`
   */
  state?: ValueColor;
  /**
   * The title of the indicator
   */
  titleText: string;
  /**
   * Defines the unit of measurement (scaling prefix) for the numeric value
   */
  unit?: string;
}

/**
 * Holds a set of side indicator attributes used in the AnalyticalCardHeader component.
 */
export const NumericSideIndicator = forwardRef<HTMLDivElement, NumericSideIndicatorPropTypes>((props, ref) => {
  const { number, state = ValueColor.None, titleText, unit, className, ...rest } = props;

  useStylesheet(styleData, NumericSideIndicator.displayName);

  return (
    <div ref={ref} className={clsx(classNames.numericSideIndicator, className)} {...rest}>
      <span className={classNames.title}>{titleText}</span>
      <div className={clsx(classNames.valueContainer, Reflect.get(classNames, `state${state}`))}>
        <Text className={classNames.number}>{number}</Text>
        <Text className={classNames.unit}>{unit}</Text>
      </div>
    </div>
  );
});

NumericSideIndicator.displayName = 'NumericSideIndicator';
