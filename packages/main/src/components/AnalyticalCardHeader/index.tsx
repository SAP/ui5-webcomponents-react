import iconDown from '@ui5/webcomponents-icons/dist/down.js';
import iconUp from '@ui5/webcomponents-icons/dist/up.js';
import { useI18nBundle } from '@ui5/webcomponents-react-base';
import {
  ARIA_DESC_CARD_HEADER,
  NUMERICCONTENT_DEVIATION_DOWN,
  NUMERICCONTENT_DEVIATION_UP,
  SEMANTIC_COLOR_CRITICAL,
  SEMANTIC_COLOR_ERROR,
  SEMANTIC_COLOR_GOOD,
  SEMANTIC_COLOR_NEUTRAL
} from '@ui5/webcomponents-react/dist/assets/i18n/i18n-defaults';
import clsx from 'clsx';
import React, { Children, cloneElement, forwardRef, MouseEventHandler, ReactNode, Ref } from 'react';
import { createUseStyles } from 'react-jss';
import { DeviationIndicator, ValueColor } from '../../enums';
import { CommonProps } from '../../interfaces/CommonProps';
import { useIsomorphicId } from '../../internal/useIsomorphicId';
import { Icon } from '../../webComponents';
import styles from './AnalyticalCardHeader.jss';

export interface AnalyticalCardHeaderPropTypes extends CommonProps {
  /**
   * The title of the card
   */
  titleText?: string;
  /**
   * The subtitle of the card
   */
  subtitleText?: string;
  /**
   * The direction of the trend arrow. Shows deviation for the value of the main number indicator.
   */
  trend?: DeviationIndicator | keyof typeof DeviationIndicator;
  /**
   * The numeric value of the main number indicator.
   */
  value?: string;
  /**
   * Defines the unit of measurement (scaling prefix) for the main indicator.
   * Financial characters can be used for currencies and counters. The International System of Units (SI) prefixes can be used.
   */
  scale?: string;
  /**
   * The semantic color which represents the state of the main number indicator.
   * Available options are: <ul> <li><code>None</code></li> <li><code>Error</code></li> <li><code>Critical</code></li> <li><code>Good</code></li> <li><code>Neutral</code></li></ul>
   */
  state?: ValueColor | keyof typeof ValueColor;
  /**
   * Additional text which adds more details to what is shown in the numeric header.
   */
  description?: string;
  /**
   * Defines the status text.
   */
  status?: string;
  /**
   * General unit of measurement for the header. Displayed as side information to the subtitle.
   */
  unitOfMeasurement?: string;
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

const semanticColorMap = new Map<AnalyticalCardHeaderPropTypes['state'], any>([
  [ValueColor.Neutral, SEMANTIC_COLOR_NEUTRAL],
  [ValueColor.Good, SEMANTIC_COLOR_GOOD],
  [ValueColor.Critical, SEMANTIC_COLOR_CRITICAL],
  [ValueColor.Error, SEMANTIC_COLOR_ERROR]
]);

const deviationMap = new Map<AnalyticalCardHeaderPropTypes['trend'], any>([
  [DeviationIndicator.Up, NUMERICCONTENT_DEVIATION_UP],
  [DeviationIndicator.Down, NUMERICCONTENT_DEVIATION_DOWN]
]);

export const AnalyticalCardHeader = forwardRef((props: AnalyticalCardHeaderPropTypes, ref: Ref<HTMLDivElement>) => {
  const {
    titleText,
    subtitleText,
    value,
    scale,
    state,
    onClick,
    className,
    description,
    status,
    unitOfMeasurement,
    trend,
    style,
    children,
    ...rest
  } = props;
  const classes = useStyles();

  const headerClasses = clsx(classes.cardHeader, onClick && classes.cardHeaderClickable, className);

  const valueAndUnitClasses = clsx(
    classes.mainIndicator,
    state === ValueColor.Good && classes.good,
    state === ValueColor.Error && classes.error,
    state === ValueColor.Critical && classes.critical,
    state === ValueColor.Neutral && classes.info
  );

  const shouldRenderContent = [value, scale, children].some(Boolean);

  const i18nBundle = useI18nBundle('@ui5/webcomponents-react');

  const headerId = useIsomorphicId();

  const sideIndicatorIds = Children.toArray(children).map((child, idx) => {
    return child.props?.id ?? `${headerId}-indicator${idx}`;
  });

  let kpiAriaLabel = `${value}${scale}\n`;

  if (trend && trend !== DeviationIndicator.None) {
    kpiAriaLabel += i18nBundle.getText(deviationMap.get(trend) ?? '');
    kpiAriaLabel += '\n';
  }

  if (state && state !== ValueColor.None) {
    kpiAriaLabel += i18nBundle.getText(semanticColorMap.get(state) ?? '');
  }

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
        <div className={classes.headerFirstLine}>
          <span role="heading" className={classes.headerText} id={`${headerId}-title`}>
            {titleText}
          </span>
          {status && <span className={classes.status}>{status}</span>}
        </div>
        {(subtitleText || unitOfMeasurement) && (
          <div className={classes.headerSecondLine}>
            <span id={`${headerId}-subtitle`}>{subtitleText}</span>
            {unitOfMeasurement && (
              <span id={`${headerId}-unitOfMeasurement`} className={classes.unitOfMeasurement}>
                {unitOfMeasurement}
              </span>
            )}
          </div>
        )}
      </div>
      {shouldRenderContent && (
        <div className={classes.kpiContent}>
          <div className={valueAndUnitClasses} id={`${headerId}-mainIndicator`} aria-label={kpiAriaLabel}>
            <span className={classes.value}>{value}</span>
            <div className={classes.indicatorAndUnit}>
              {trend !== DeviationIndicator.None && (
                <Icon className={clsx(classes.indicator)} name={trend === DeviationIndicator.Up ? iconUp : iconDown} />
              )}
              <div className={classes.unit}>{scale}</div>
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
  trend: DeviationIndicator.None,
  state: ValueColor.None
};
