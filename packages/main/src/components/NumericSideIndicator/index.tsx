'use client';

import { clsx } from 'clsx';
import { forwardRef } from 'react';
import { createUseStyles } from 'react-jss';
import { ValueColor } from '../../enums/index.js';
import type { CommonProps } from '../../interfaces/index.js';
import { Text } from '../Text/index.js';
import { NumericSideIndicatorStyles } from './NumericSideIndicator.jss.js';

export interface NumericSideIndicatorPropTypes extends CommonProps {
  /**
   * The numeric value
   */
  number: number | string;
  /**
   * The semantic color which represents the state of the side indicator.
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

const useStyles = createUseStyles(NumericSideIndicatorStyles, { name: 'NumericSideIndicator' });

/**
 * Holds a set of side indicator attributes used in the NumericHeader component.
 */
export const NumericSideIndicator = forwardRef<HTMLDivElement, NumericSideIndicatorPropTypes>((props, ref) => {
  const { number, state, titleText, unit, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div ref={ref} className={clsx(classes.numericSideIndicator, className)} {...rest}>
      <span className={classes.title}>{titleText}</span>
      <div className={clsx(classes.valueContainer, Reflect.get(classes, `state${state}`))}>
        <Text className={classes.number}>{number}</Text>
        <Text className={classes.unit}>{unit}</Text>
      </div>
    </div>
  );
});

NumericSideIndicator.displayName = 'NumericSideIndicator';

NumericSideIndicator.defaultProps = {
  state: ValueColor.None
};
