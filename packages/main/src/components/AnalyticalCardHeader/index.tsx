import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { StyleClassHelper } from '@ui5/webcomponents-react-base/lib/StyleClassHelper';
import { usePassThroughHtmlProps } from '@ui5/webcomponents-react-base/lib/usePassThroughHtmlProps';
import { DeviationIndicator } from '@ui5/webcomponents-react/lib/DeviationIndicator';
import { FlexBox } from '@ui5/webcomponents-react/lib/FlexBox';
import { FlexBoxAlignItems } from '@ui5/webcomponents-react/lib/FlexBoxAlignItems';
import { FlexBoxDirection } from '@ui5/webcomponents-react/lib/FlexBoxDirection';
import { FlexBoxJustifyContent } from '@ui5/webcomponents-react/lib/FlexBoxJustifyContent';
import { FlexBoxWrap } from '@ui5/webcomponents-react/lib/FlexBoxWrap';
import { ObjectStatus } from '@ui5/webcomponents-react/lib/ObjectStatus';
import { ValueState } from '@ui5/webcomponents-react/lib/ValueState';
import React, { FC, forwardRef, Ref, useCallback, useMemo } from 'react';
import { createUseStyles } from 'react-jss';
import { CommonProps } from '../../interfaces/CommonProps';
import { JSSTheme } from '../../interfaces/JSSTheme';
import styles from './AnalyticalCardHeader.jss';

export interface AnalyticalCardHeaderPropTypes extends CommonProps {
  title?: string;
  subTitle?: string;
  arrowIndicator?: DeviationIndicator;
  showIndicator?: boolean;
  indicatorState?: ValueState;
  value?: string;
  unit?: string;
  valueState?: ValueState;
  target?: string;
  deviation?: string;
  onHeaderPress?: (event: Event) => void;
  description?: string;
  counter?: string;
  counterState?: ValueState;
  currency?: string;
}

const useStyles = createUseStyles<JSSTheme, keyof ReturnType<typeof styles>>(styles, {
  name: 'AnalyticalCardHeader'
});

/**
 * <code>import { AnalyticalCardHeader } from '@ui5/webcomponents-react/lib/AnalyticalCardHeader';</code>
 */
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
          onHeaderPress(Event.of(null, e));
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

    const passThroughProps = usePassThroughHtmlProps(props);

    return (
      <div
        ref={ref}
        onClick={onClick}
        className={headerClasses.valueOf()}
        title={tooltip}
        style={style}
        {...passThroughProps}
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
                    <span>Target</span>
                    <span className={classes.targetAndDeviationValue}>{target}</span>
                  </FlexBox>
                )}
                {deviation !== null && (
                  <FlexBox
                    direction={FlexBoxDirection.Column}
                    className={classes.targetAndDeviationColumn}
                    wrap={FlexBoxWrap.NoWrap}
                  >
                    <span>Deviation</span>
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
