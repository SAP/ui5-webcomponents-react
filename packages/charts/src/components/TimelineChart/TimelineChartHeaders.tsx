import { ThemingParameters } from '@ui5/webcomponents-react-base';
import React, { CSSProperties } from 'react';
import { ITimelineChartRow } from './types/TimelineChartTypes';
import { DEFAULT_CHART_VERTICAL_COLS, TOLERANCE } from './util/constants';

interface TimelineChartRowLabelsProps {
  width: number;
  height: number;
  rowHeight: number;
  dataset: ITimelineChartRow[];
}

const TimelineChartRowLabels: React.FC<TimelineChartRowLabelsProps> = ({ width, height, rowHeight, dataset }) => {
  const rowLabels = dataset.map((data) => data.label);
  const style: CSSProperties = {
    width: width,
    height: `${rowLabels.length * rowHeight}px`,
    outline: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
    color: ThemingParameters.sapTitleColor
  };

  const itemStyle: CSSProperties = {
    width: '100%',
    height: `${rowHeight}px`,
    outline: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
    fontSize: '10px',
    lineHeight: `${rowHeight}px`,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  };

  return (
    <div style={{ height: height }}>
      <div style={style}>
        {rowLabels.map((label, index) => {
          return (
            <div key={index} style={itemStyle}>
              <span style={{ paddingLeft: '10px', paddingRight: '10px' }} title={`Item ${label}`}>
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

const TimelineChartColumnLabel: React.FC<TimelineChartColumnLabelProps> = ({
  width,
  height,
  isDiscrete,
  totalDuration,
  columnLabels,
  start,
  unscaledWidth,
  valueFormat
}) => {
  const style: CSSProperties = {
    width: width,
    height: height,
    outline: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
    color: ThemingParameters.sapTitleColor
  };

  const halfHeaderHeight = 0.5 * height;
  let labelArray: string[];
  if (isDiscrete) {
    labelArray = columnLabels ? columnLabels : Array.from(Array(totalDuration).keys()).map((num) => `${num + start}`);
  }

  const tickLength = 5;
  const spacing = 2;
  const verticalSegmentWidth = unscaledWidth / DEFAULT_CHART_VERTICAL_COLS;

  return (
    <div style={style}>
      <div
        style={{
          height: `${halfHeaderHeight}px`,
          textAlign: 'center',
          borderBottom: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
          fontSize: '13px',
          lineHeight: `${halfHeaderHeight}px`
        }}
      ></div>
      {isDiscrete ? (
        <div
          style={{
            height: `${halfHeaderHeight}px`,
            fontSize: '10px',
            display: 'grid',
            gridTemplateColumns: `repeat(${totalDuration}, 1fr)`,
            textAlign: 'center',
            lineHeight: `${halfHeaderHeight}px`
          }}
        >
          {labelArray.map((label, index) => {
            return (
              <span
                className="timeline-chart-column-label"
                key={index}
                style={{ outline: `0.5px solid ${ThemingParameters.sapList_BorderColor}` }}
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
              <line x1={0} x2={0} y1="100%" y2={halfHeaderHeight - tickLength} />
              <line x1="100%" x2="100%" y1="100%" y2={halfHeaderHeight - tickLength} />
            </g>
            <g fill={ThemingParameters.sapTextColor}>
              <text x={0} dx={spacing} y={halfHeaderHeight - tickLength} dy={-spacing}>
                {valueFormat != null ? valueFormat(start) : start}
              </text>
              <text x="100%" dx={-spacing} y={halfHeaderHeight - tickLength} dy={-spacing} textAnchor="end">
                {valueFormat != null ? valueFormat(start + totalDuration) : start + totalDuration}
              </text>
            </g>
            {generateIntermediateTicks(
              start,
              totalDuration,
              width,
              halfHeaderHeight,
              tickLength,
              verticalSegmentWidth,
              spacing,
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
): JSX.Element => {
  let covered = verticalSegmentWidth;
  let remaining = width;
  const lineArray: JSX.Element[] = [];
  const textArray: JSX.Element[] = [];
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

const TimelineChartRowTitle: React.FC<TimelineChartRowTitleProps> = ({ width, height, rowTitle }) => {
  const style: CSSProperties = {
    width: width,
    height: height,
    outline: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
    color: ThemingParameters.sapTitleColor
  };
  return (
    <div style={style}>
      <div style={{ height: '50%' }}></div>
      <div style={{ height: '50%', textAlign: 'center', fontSize: '13px' }}>{rowTitle}</div>
    </div>
  );
};

export { TimelineChartColumnLabel, TimelineChartRowTitle, TimelineChartRowLabels };
