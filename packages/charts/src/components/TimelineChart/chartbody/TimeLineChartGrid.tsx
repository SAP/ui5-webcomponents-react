import { ThemingParameters } from '@ui5/webcomponents-react-base';
import React from 'react';
import { DEFAULT_CHART_VERTICAL_COLS } from '../util/constants';

interface TimelineChartGridProps {
  /**
   * Whether to render the vertical grid lines for a TimelineChart
   * with discrete segments.
   */
  isDiscrete: boolean;
  numOfRows: number;
  rowHeight: number;
  totalDuration: number;
  scale: number;
}

/**
 * This component represents the grid lines on the chart. The `isDiscrete` prop is
 * used to decided whether to render the vertical grid lines.
 */
const TimelineChartGrid: React.FC<TimelineChartGridProps> = ({
  isDiscrete,
  numOfRows,
  rowHeight,
  totalDuration,
  scale
}) => {
  return (
    <g style={{ stroke: ThemingParameters.sapList_BorderColor }}>
      {generateHGridLines(numOfRows, rowHeight)}
      {isDiscrete
        ? generateVGridLines(totalDuration)
        : generateVGridLines(Math.floor(DEFAULT_CHART_VERTICAL_COLS * scale))}
    </g>
  );
};

/**
 * This function generates the grid lines using the number of segments provided.
 * Each segment is calculated as a fraction of the overall height.
 * @param numOfSegments The number of rows the grid should have.
 * @param rowHeight The height of each row.
 * @returns An array of horizontal grid lines in SVG.
 */
const generateHGridLines = (numOfSegments: number, rowHeight: number): JSX.Element[] => {
  const gridLineArray: JSX.Element[] = [];
  for (let i = 1; i < numOfSegments; i++) {
    const segmentOffset = rowHeight * i;
    gridLineArray.push(
      <line
        x1="0"
        y1={`${segmentOffset}`}
        x2="100%"
        y2={`${segmentOffset}`}
        key={`${segmentOffset}gridh`}
        strokeWidth="1px"
      />
    );
  }
  return gridLineArray;
};

/**
 * This function generates the grid lines using the number of segments provided.
 * Each segment is calculated as a fraction of the overall width.
 * @param numOfSegments The number of columns the grid should have.
 * @returns An array of vertical grid lines in SVG.
 */
const generateVGridLines = (numOfSegments: number): JSX.Element[] => {
  const segmentSizePercent = 100 / numOfSegments;
  const gridLineArray: JSX.Element[] = [];
  for (let i = 1; i < numOfSegments; i++) {
    const segmentOffset = segmentSizePercent * i;
    gridLineArray.push(
      <line x1={`${segmentOffset}%`} y1="0" x2={`${segmentOffset}%`} y2="100%" key={`${segmentOffset}gridv`} />
    );
  }
  return gridLineArray;
};

export { TimelineChartGrid };
