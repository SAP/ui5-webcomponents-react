import iconDown from '@ui5/webcomponents-icons/dist/down.js';
import iconUp from '@ui5/webcomponents-icons/dist/up.js';
import { useI18nBundle } from '@ui5/webcomponents-react-base';
import { ARIA_DESC_CARD_HEADER } from '@ui5/webcomponents-react/dist/assets/i18n/i18n-defaults';
import clsx from 'clsx';
import React, { Children, cloneElement, forwardRef, MouseEventHandler, ReactNode, Ref } from 'react';
import { createUseStyles } from 'react-jss';
import { DeviationIndicator, FlexBoxJustifyContent, FlexBoxWrap, ValueState } from '../../enums';
import { CommonProps } from '../../interfaces/CommonProps';
import { useIsomorphicId } from '../../internal/useIsomorphicId';
import { Icon } from '../../webComponents';
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

  /**
   * Additional side number indicators. For example "Deviation" and "Target". Not more than two side indicators should be used.
   */
  children?: ReactNode | ReactNode[];
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
    valueState,
    onClick,
    className,
    description,
    counter,
    counterState,
    currency,
    arrowIndicator,
    style,
    children,
    ...rest
  } = props;
  const classes = useStyles();

  const headerClasses = clsx(classes.cardHeader, onClick && classes.cardHeaderClickable, className);

  const valueAndUnitClasses = clsx(
    classes.mainIndicator,
    valueState === ValueState.Success && classes.good,
    valueState === ValueState.Error && classes.error,
    valueState === ValueState.Warning && classes.critical,
    valueState === ValueState.Information && classes.info
  );

  const shouldRenderContent = [value, unit, children].some(Boolean);

  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');

  const headerId = useIsomorphicId();

  const sideIndicatorIds = Children.toArray(children).map((child, idx) => {
    return child.props?.id ?? `${headerId}-indicator${idx}`;
  });

  return (
    <div
      ref={ref}
      className={headerClasses}
      style={style}
      id={headerId}
      data-sap-ui-fastnavgroup="true"
      tabIndex={0}
      role="group"
      aria-roledescription={i18nBundle.getText(ARIA_DESC_CARD_HEADER)}
      aria-labelledby={`${headerId}-title ${headerId}-subtitle ${headerId}-unitOfMeasurement ${headerId}-mainIndicator ${sideIndicatorIds.join(
        ' '
      )} ${headerId}-details`}
      {...rest}
      onClick={onClick}
      slot={'header'}
    >
      <div className={classes.headerTitles}>
        <FlexBox justifyContent={FlexBoxJustifyContent.SpaceBetween} wrap={FlexBoxWrap.NoWrap}>
          <div className={classes.headerText} id={`${headerId}-title`}>
            {titleText}
          </div>
          {counter && (
            <ObjectStatus className={classes.counter} state={counterState}>
              {counter}
            </ObjectStatus>
          )}
        </FlexBox>
        {(subtitleText || currency) && (
          <div className={classes.subHeaderText}>
            <span id={`${headerId}-subtitle`}>{subtitleText}</span>
            {currency && (
              <span id={`${headerId}-unitOfMeasurement`} className={classes.unitOfMeasurement}>
                {currency}
              </span>
            )}
          </div>
        )}
      </div>
      {shouldRenderContent && (
        <div className={classes.kpiContent}>
          <div className={valueAndUnitClasses} id={`${headerId}-mainIndicator`}>
            <span className={classes.value}>{value}</span>
            <div className={classes.indicatorAndUnit}>
              {arrowIndicator !== DeviationIndicator.None && (
                <Icon
                  className={clsx(classes.indicator)}
                  name={arrowIndicator === DeviationIndicator.Up ? iconUp : iconDown}
                />
              )}
              <div className={classes.unit}>{unit}</div>
            </div>
          </div>
          <div className={classes.indicatorGap} />
          <div className={classes.sideIndicators}>
            {Children.map(children, (child, index) => {
              return cloneElement(child, {
                id: child.props.id ?? `${headerId}-indicator${index}`
              });
            })}
          </div>
        </div>
      )}
      {description && (
        <div id={`${headerId}-details`} className={classes.description}>
          {description}
        </div>
      )}
    </div>
  );
});

AnalyticalCardHeader.displayName = 'AnalyticalCardHeader';

AnalyticalCardHeader.defaultProps = {
  arrowIndicator: DeviationIndicator.None,
  valueState: ValueState.None,
  counterState: ValueState.None
};
