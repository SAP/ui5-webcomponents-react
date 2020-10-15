import { createComponentStyles } from '@ui5/webcomponents-react-base/lib/createComponentStyles';
import { useI18nText, usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/hooks';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { enrichEventWithDetails } from '@ui5/webcomponents-react-base/lib/Utils';
import { DEVIATION, TARGET } from '@ui5/webcomponents-react/dist/assets/i18n/i18n-defaults';
import { DeviationIndicator } from '@ui5/webcomponents-react/lib/DeviationIndicator';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/lib/FlexBoxAlignItems';
import { FlexBoxDirection } from '@ui5/webcomponents-react/lib/FlexBoxDirection';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/lib/FlexBoxJustifyContent';
import { FlexBoxWrap } from '@ui5/webcomponents-react/lib/FlexBoxWrap';
import { ObjectStatus } from '@ui5/webcomponents-react/lib/ObjectStatus';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React, { FC, forwardRef, Ref, useCallback, useMemo } from 'react';
import { CommonProps } from '../../interfaces/CommonProps';
import styles from './AnalyticalCardHeader.jss';

export interface AnalyticalCardHeaderPropTypes extends CommonProps {
  /**
   * Defines the title of the `AnalyticalCardHeader`.
   */
  title?: string;
  /**
   * Defines the subtitle of the `AnalyticalCardHeader`.
   */
  subTitle?: string;
  /**
   * Defines the orientation of the deviation indicator.
   */
  arrowIndicator?: DeviationIndicator;
  /**
   * Defines whether the deviation indicator should be displayed.
   */
  showIndicator?: boolean;
  /**
   * Defines the value state of the deviation indicator.
   * Available options are: <ul> <li><code>None</code></li> <li><code>Error</code></li> <li><code>Warning</code></li> <li><code>Success</code></li> <li><code>Information</code></li> </ul>
   */
  indicatorState?: ValueState;
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
   * Available options are: <ul> <li><code>None</code></li> <li><code>Error</code></li> <li><code>Warning</code></li> <li><code>Success</code></li> <li><code>Information</code></li> </ul>
   */
  valueState?: ValueState;
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
  counterState?: ValueState;
  /**
   * Defines the currency.
   */
  currency?: string;
  /**
   * Fired when the `AnalyticalCardHeader` header is clicked.
   */
  onHeaderPress?: (event: CustomEvent<{}>) => void;
}

const useStyles = createComponentStyles(styles, {
  name: 'AnalyticalCardHeader'
});

export const AnalyticalCardHeader: FC<AnalyticalCardHeaderPropTypes> = forwardRef(
  (props: AnalyticalCardHeaderPropTypes, ref: Ref<HTMLDivElement>) => {
    const {
      title,
      subTitle,
      value,
      unit,
      target,
      deviation,
      valueState,
      onHeaderPress,
      showIndicator,
      tooltip,
      className,
      description,
      counter,
      counterState,
      currency,
      indicatorState,
      arrowIndicator,
      style
    } = props;
    const classes = useStyles(props);
    const onClick = useCallback(
      (e) => {
        if (onHeaderPress) {
          onHeaderPress(enrichEventWithDetails(e));
        }
      },
      [onHeaderPress]
    );
    const indicatorIcon = useMemo(() => {
      const arrowClasses = StyleClassHelper.of(classes.arrowIndicatorShape);
      switch (arrowIndicator) {
        case DeviationIndicator.Up:
          arrowClasses.put(classes.arrowUp);
          break;
        case DeviationIndicator.Down:
          arrowClasses.put(classes.arrowDown);
          break;
        default:
          arrowClasses.put(classes.arrowRight);
          break;
      }

      switch (indicatorState) {
        case ValueState.Success:
          arrowClasses.put(classes.good);
          break;
        case ValueState.Error:
          arrowClasses.put(classes.error);
          break;
        case ValueState.Warning:
          arrowClasses.put(classes.critical);
          break;
        default:
          arrowClasses.put(classes.none);

          break;
      }
      return <div className={arrowClasses.valueOf()} />;
    }, [arrowIndicator, indicatorState, classes]);

    const headerClasses = StyleClassHelper.of(classes.cardHeader);
    if (onHeaderPress) {
      headerClasses.put(classes.cardHeaderClickable);
    }

    const valueAndUnitClasses = StyleClassHelper.of(classes.valueAndUnit);
    if (valueState === ValueState.Error) {
      valueAndUnitClasses.put(classes.error);
    }
    if (valueState === ValueState.Warning) {
      valueAndUnitClasses.put(classes.critical);
    }
    if (valueState === ValueState.Success) {
      valueAndUnitClasses.put(classes.good);
    }

    if (className) {
      headerClasses.put(className);
    }
    const shouldRenderContent = [value, unit, deviation, target].some((v) => v !== null);

    const passThroughProps = usePassThroughHtmlProps(props, ['onHeaderPress']);

    const [targetText, deviationText] = useI18nText('@ui5/webcomponents-react', TARGET, DEVIATION);

    return (
      <div
        ref={ref}
        className={headerClasses.valueOf()}
        title={tooltip}
        style={style}
        {...passThroughProps}
        onClick={onClick}
      >
        <div className={classes.headerContent}>
          <div className={classes.headerTitles}>
            <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween} wrap={FlexBoxWrap.NoWrap}>
              <div className={classes.headerText}>{title}</div>
              <ObjectStatus className={classes.counter} state={counterState}>
                {counter}
              </ObjectStatus>
            </FlexBox>
            <div className={classes.subHeaderText}>
              {subTitle}
              {currency && ` | ${currency}`}
            </div>
          </div>
          {shouldRenderContent && (
            <FlexBox direction={FlexBoxDirection.Row} className={classes.kpiContent} alignItems={FlexBoxAlignItems.End}>
              <FlexBox direction={FlexBoxDirection.Row}>
                <div className={valueAndUnitClasses.valueOf()}>
                  <div className={classes.value}>{value}</div>
                  <div className={classes.indicatorAndUnit}>
                    {showIndicator && indicatorIcon}
                    <div className={classes.unit}>{unit}</div>
                  </div>
                </div>
              </FlexBox>
              <FlexBox
                direction={FlexBoxDirection.Row}
                wrap={FlexBoxWrap.NoWrap}
                className={classes.targetAndDeviation}
              >
                {target !== null && (
                  <FlexBox
                    direction={FlexBoxDirection.Column}
                    className={classes.targetAndDeviationColumn}
                    wrap={FlexBoxWrap.NoWrap}
                  >
                    <span>{targetText}</span>
                    <span className={classes.targetAndDeviationValue}>{target}</span>
                  </FlexBox>
                )}
                {deviation !== null && (
                  <FlexBox
                    direction={FlexBoxDirection.Column}
                    className={classes.targetAndDeviationColumn}
                    wrap={FlexBoxWrap.NoWrap}
                  >
                    <span>{deviationText}</span>
                    <span className={classes.targetAndDeviationValue}>{deviation}</span>
                  </FlexBox>
                )}
              </FlexBox>
            </FlexBox>
          )}
          <div className={classes.description}>{description}</div>
        </div>
      </div>
    );
  }
);

AnalyticalCardHeader.displayName = 'AnalyticalCardHeader';

AnalyticalCardHeader.defaultProps = {
  title: null,
  subTitle: null,
  arrowIndicator: DeviationIndicator.None,
  showIndicator: true,
  indicatorState: ValueState.None,
  value: null,
  unit: null,
  valueState: ValueState.None,
  target: null,
  deviation: null,
  onHeaderPress: null,
  description: null,
  counter: null,
  counterState: ValueState.None,
  currency: null
};
