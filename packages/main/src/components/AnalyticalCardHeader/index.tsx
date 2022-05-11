import { useI18nBundle } from '@ui5/webcomponents-react-base';
import { DEVIATION, TARGET } from '@ui5/webcomponents-react/dist/assets/i18n/i18n-defaults';
import clsx from 'clsx';
import React, { forwardRef, MouseEventHandler, Ref, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { DeviationIndicator } from '../../enums/DeviationIndicator';
import { FlexBoxAlignItems } from '../../enums/FlexBoxAlignItems';
import { FlexBoxDirection } from '../../enums/FlexBoxDirection';
import { FlexBoxJustifyContent } from '../../enums/FlexBoxJustifyContent';
import { FlexBoxWrap } from '../../enums/FlexBoxWrap';
import { ValueState } from '../../enums/ValueState';
import { CommonProps } from '../../interfaces/CommonProps';
import { FlexBox } from '../FlexBox';
import { ObjectStatus } from '../ObjectStatus';
import styles from './AnalyticalCardHeader.jss';

export interface AnalyticalCardHeaderPropTypes extends CommonProps {
  /**
   * Defines the title text of the `AnalyticalCardHeader`.
   */
  titleText?: string;
  /**
   * Defines the subtitle text of the `AnalyticalCardHeader`.
   */
  subtitleText?: string;
  /**
   * Defines the orientation of the deviation indicator.
   */
  arrowIndicator?: DeviationIndicator | keyof typeof DeviationIndicator;
  /**
   * Defines whether the deviation indicator should be displayed.
   */
  showIndicator?: boolean;
  /**
   * Defines the value state of the deviation indicator.
   * Available options are: <ul> <li><code>None</code></li> <li><code>Error</code></li> <li><code>Warning</code></li> <li><code>Success</code></li></ul>
   */
  indicatorState?: ValueState | keyof typeof ValueState;
  /**
   * Defines the value of the `AnalyticalCardHeader`.
   */
  value?: string;
  /**
   * Defines the unit displayed next to the value of the `AnalyticalCardHeader`.
   */
  unit?: string;
  /**
   * Defines the value state of the value.
   * Available options are: <ul> <li><code>None</code></li> <li><code>Error</code></li> <li><code>Warning</code></li> <li><code>Success</code></li></ul>
   */
  valueState?: ValueState | keyof typeof ValueState;
  /**
   * Defines the target value.
   */
  target?: string;
  /**
   * Defines the deviation value.
   */
  deviation?: string;
  /**
   * Defines the description below the value of the `AnalyticalCardHeader`.
   */
  description?: string;
  /**
   * Defines the counter in the upper right corner of the `AnalyticalCardHeader`.
   */
  counter?: string;
  /**
   * Defines the value state of the counter.
   * Available options are: <ul> <li><code>None</code></li> <li><code>Error</code></li> <li><code>Warning</code></li> <li><code>Success</code></li> <li><code>Information</code></li> </ul>
   */
  counterState?: ValueState | keyof typeof ValueState;
  /**
   * Defines the currency.
   */
  currency?: string;
  /**
   * Fired when the `AnalyticalCardHeader` is clicked.
   */
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const useStyles = createUseStyles(styles, {
  name: 'AnalyticalCardHeader'
});

export const AnalyticalCardHeader = forwardRef((props: AnalyticalCardHeaderPropTypes, ref: Ref<HTMLDivElement>) => {
  const {
    titleText,
    subtitleText,
    value,
    unit,
    target,
    deviation,
    valueState,
    onClick,
    showIndicator,
    className,
    description,
    counter,
    counterState,
    currency,
    indicatorState,
    arrowIndicator,
    style,
    ...rest
  } = props;
  const classes = useStyles();

  const indicatorIcon = useMemo(() => {
    const arrowClasses = clsx(
      classes.arrowIndicatorShape,
      arrowIndicator === DeviationIndicator.Up && classes.arrowUp,
      arrowIndicator === DeviationIndicator.Down && classes.arrowDown,
      arrowIndicator === DeviationIndicator.None && classes.arrowRight,
      !(arrowIndicator in DeviationIndicator) && classes.arrowRight,
      indicatorState === ValueState.Success && classes.good,
      indicatorState === ValueState.Error && classes.error,
      indicatorState === ValueState.Warning && classes.critical,
      indicatorState === ValueState.Information && classes.none,
      indicatorState === ValueState.None && classes.none,
      !(indicatorState in ValueState) && classes.none
    );

    return <div className={arrowClasses} />;
  }, [arrowIndicator, indicatorState, classes]);

  const headerClasses = clsx(classes.cardHeader, onClick && classes.cardHeaderClickable, className);

  const valueAndUnitClasses = clsx(
    classes.valueAndUnit,
    valueState === ValueState.Error && classes.error,
    valueState === ValueState.Warning && classes.critical,
    valueState === ValueState.Success && classes.good
  );

  const shouldRenderContent = [value, unit, deviation, target].some((v) => !!v);

  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');

  return (
    <div ref={ref} className={headerClasses} style={style} {...rest} onClick={onClick}>
      <div className={classes.headerContent}>
        <div className={classes.headerTitles}>
          <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween} wrap={FlexBoxWrap.NoWrap}>
            <div className={classes.headerText}>{titleText}</div>
            {counter && (
              <ObjectStatus className={classes.counter} state={counterState}>
                {counter}
              </ObjectStatus>
            )}
          </FlexBox>
          {(subtitleText || currency) && (
            <div className={classes.subHeaderText}>
              {subtitleText}
              {currency && ` | ${currency}`}
            </div>
          )}
        </div>
        {shouldRenderContent && (
          <FlexBox direction={FlexBoxDirection.Row} className={classes.kpiContent} alignItems={FlexBoxAlignItems.End}>
            <FlexBox direction={FlexBoxDirection.Row}>
              <div className={valueAndUnitClasses}>
                <div className={classes.value}>{value}</div>
                <div className={classes.indicatorAndUnit}>
                  {showIndicator && indicatorIcon}
                  <div className={classes.unit}>{unit}</div>
                </div>
              </div>
            </FlexBox>
            <FlexBox direction={FlexBoxDirection.Row} wrap={FlexBoxWrap.NoWrap} className={classes.targetAndDeviation}>
              {target && (
                <FlexBox
                  direction={FlexBoxDirection.Column}
                  className={classes.targetAndDeviationColumn}
                  wrap={FlexBoxWrap.NoWrap}
                >
                  <span>{i18nBundle.getText(TARGET)}</span>
                  <span className={classes.targetAndDeviationValue}>{target}</span>
                </FlexBox>
              )}
              {deviation && (
                <FlexBox
                  direction={FlexBoxDirection.Column}
                  className={classes.targetAndDeviationColumn}
                  wrap={FlexBoxWrap.NoWrap}
                >
                  <span>{i18nBundle.getText(DEVIATION)}</span>
                  <span className={classes.targetAndDeviationValue}>{deviation}</span>
                </FlexBox>
              )}
            </FlexBox>
          </FlexBox>
        )}
        {description && <div className={classes.description}>{description}</div>}
      </div>
    </div>
  );
});

AnalyticalCardHeader.displayName = 'AnalyticalCardHeader';

AnalyticalCardHeader.defaultProps = {
  arrowIndicator: DeviationIndicator.None,
  indicatorState: ValueState.None,
  valueState: ValueState.None,
  counterState: ValueState.None
};
