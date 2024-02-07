import { ThemingParameters } from '@ui5/webcomponents-react-base';
import type { CSSProperties, ReactElement } from 'react';
import React, { useEffect, useState } from 'react';
import type { ITimelineChartRow } from './types/TimelineChartTypes.js';
import { DEFAULT_CHART_VERTICAL_COLS, SPACING, TICK_LENGTH, TOLERANCE } from './util/constants.js';
import { useStyles } from './util/styles.js';

interface TimelineChartRowLabelsProps {
  width: number;
  height: number;
  rowHeight: number;
  dataset: ITimelineChartRow[];
}

const TimelineChartRowLabels = ({ width, height, rowHeight, dataset }: TimelineChartRowLabelsProps) => {
  const classes = useStyles();
  const rowLabels = dataset.map((data) => data.label);
  const style: CSSProperties = {
    width: width,
    height: `${rowLabels.length * rowHeight}px`
  };

  const itemStyle: CSSProperties = {
    height: `${rowHeight}px`,
    lineHeight: `${rowHeight}px`
  };

  return (
    <div style={{ height: height }}>
      <div className={classes.rowLabels} style={style}>
        {rowLabels.map((label, index) => {
          return (
            <div key={index} className={classes.rowLabelsItem} style={itemStyle}>
              <span style={{ paddingInline: '10px' }} title={`Item ${label}`}>
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface TimelineChartColumnLabelProps {
  width: number;
  height: number;
  isDiscrete: boolean;
  totalDuration: number;
  unit: string;
  columnLabels?: string[];
  start: number;
  unscaledWidth: number;
  valueFormat?: (value: number) => string;
}

const TimelineChartColumnLabel = ({
  width,
  height,
  isDiscrete,
  totalDuration,
  columnLabels,
  start,
  unscaledWidth,
  valueFormat
}: TimelineChartColumnLabelProps) => {
  const classes = useStyles();
  const [labelArray, setLabelArray] = useState<string[]>([]);
  useEffect(() => {
    if (isDiscrete) {
      const newLabelArray = columnLabels
        ? columnLabels
        : Array.from(Array(totalDuration).keys()).map((num) => `${num + start}`);
      setLabelArray(newLabelArray);
    }
  }, [isDiscrete, columnLabels, start, totalDuration]);

  const style: CSSProperties = {
    width: width,
    height: height
  };

  const halfHeaderHeight = 0.5 * height;
  const verticalSegmentWidth = unscaledWidth / DEFAULT_CHART_VERTICAL_COLS;

  return (
    <div className={classes.columnLabel} style={style} data-component-name="TimeLineChartColumnLabel">
      <div
        className={classes.columnTitlePlaceHolder}
        style={{
          height: `${halfHeaderHeight}px`,
          lineHeight: `${halfHeaderHeight}px`
        }}
      ></div>
      {isDiscrete ? (
        <div
          className={classes.columnLabelItems}
          style={{
            height: `${halfHeaderHeight}px`,
            gridTemplateColumns: `repeat(${totalDuration}, 1fr)`,
            lineHeight: `${halfHeaderHeight}px`
          }}
        >
          {labelArray.map((label, index) => {
            return (
              <span
                data-component-name="TimelineChartColumnLabel"
                className={classes.onlyOutline}
                key={index}
                title={`${label}`}
              >
                {label}
              </span>
            );
          })}
        </div>
      ) : (
        <svg height={halfHeaderHeight} width="100%" fontFamily="Helvetica" fontSize="9">
          <>
            <g stroke={ThemingParameters.sapList_BorderColor} strokeWidth="4">
              <line x1={0} x2={0} y1="100%" y2={halfHeaderHeight - TICK_LENGTH} />
              <line x1="100%" x2="100%" y1="100%" y2={halfHeaderHeight - TICK_LENGTH} />
            </g>
            <g fill={ThemingParameters.sapTextColor}>
              <text x={0} dx={SPACING} y={halfHeaderHeight - TICK_LENGTH} dy={-SPACING}>
                {valueFormat != null ? valueFormat(start) : start}
              </text>
              <text x="100%" dx={-SPACING} y={halfHeaderHeight - TICK_LENGTH} dy={-SPACING} textAnchor="end">
                {valueFormat != null ? valueFormat(start + totalDuration) : start + totalDuration}
              </text>
            </g>
            {generateIntermediateTicks(
              start,
              totalDuration,
              width,
              halfHeaderHeight,
              TICK_LENGTH,
              verticalSegmentWidth,
              SPACING,
              valueFormat
            )}
          </>
        </svg>
      )}
    </div>
  );
};

const generateIntermediateTicks = (
  start: number,
  totalDuration: number,
  width: number,
  halfHeaderHeight: number,
  tickLength: number,
  verticalSegmentWidth: number,
  spacing: number,
  valueFormat?: (value: number) => string
): ReactElement => {
  let covered = verticalSegmentWidth;
  let remaining = width;
  const lineArray: ReactElement[] = [];
  const textArray: ReactElement[] = [];
  if (verticalSegmentWidth <= 0) return null;
  while (remaining >= 2 * verticalSegmentWidth - TOLERANCE) {
    lineArray.push(
      <line
        x1={covered}
        x2={covered}
        y1="100%"
        y2={halfHeaderHeight - tickLength}
        stroke={ThemingParameters.sapList_BorderColor}
        strokeWidth="2"
        key={`${covered}tickline`}
      />
    );
    const val = (covered / width) * totalDuration;
    textArray.push(
      <text
        x={covered}
        y={halfHeaderHeight - tickLength}
        dy={-spacing}
        fill={ThemingParameters.sapTextColor}
        textAnchor="middle"
        key={`${covered}tickval`}
      >
        {valueFormat != null ? valueFormat(start + val) : start + val}
      </text>
    );
    covered += verticalSegmentWidth;
    remaining -= verticalSegmentWidth;
  }
  return (
    <>
      {lineArray}
      {textArray}
    </>
  );
};

interface TimelineChartRowTitleProps {
  width: number;
  height: number;
  rowTitle: string;
}

const TimelineChartRowTitle = ({ width, height, rowTitle }: TimelineChartRowTitleProps) => {
  const classes = useStyles();
  const style: CSSProperties = {
    width: width,
    height: height,
    color: ThemingParameters.sapTitleColor
  };
  return (
    <div className={classes.onlyOutline} style={style}>
      <div className={classes.rowTitleTop}></div>
      <div className={classes.rowTitleBottom}>{rowTitle}</div>
    </div>
  );
};

export { TimelineChartColumnLabel, TimelineChartRowTitle, TimelineChartRowLabels };
