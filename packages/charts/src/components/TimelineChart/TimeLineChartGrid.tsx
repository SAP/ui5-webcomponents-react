import { ThemingParameters } from '@ui5/webcomponents-react-base';
import React from 'react';

interface TimeLineChartGridProps {
  /**
   * Whether to render the vertical grid lines for a TimelineChart
   * with discrete segments.
   * @default false
   */
  isDiscrete: boolean;
  numOfRows: number;
  rowHeight: number;
  numOfCols?: number;
}

/**
 * This component represents the grid lines on the chart. The `isDiscrete` prop is
 * used to decided whether to render the vertical grid lines.
 */
const TimeLineChartGrid: React.FC<TimeLineChartGridProps> = ({ isDiscrete, numOfRows, rowHeight, numOfCols }) => {
  return (
    <g style={{ stroke: ThemingParameters.sapList_BorderColor }}>
      {generateHGridLines(numOfRows, rowHeight)}
      {isDiscrete && generateVGridLines(numOfCols)}
    </g>
  );
};

/**
 * This function generates the grid lines using the number of segments provided.
 * Each segment is calculated as a fractional percentage of the overall width
 * or height.
 * @param numOfsegment The number of rows or columns the grid should have.
 * @param isHorizontal Whether the line created is horizontal or vertical.
 * @returns An array of grid lines in SVG.
 */
const generateHGridLines = (numOfsegment: number, rowHeight: number): JSX.Element[] => {
  // const segmentSizePercent = 100 / numOfsegment;
  const gridLineArray: JSX.Element[] = [];
  for (let i = 1; i < numOfsegment; i++) {
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

const generateVGridLines = (numOfsegment: number): JSX.Element[] => {
  const segmentSizePercent = 100 / numOfsegment;
  const gridLineArray: JSX.Element[] = [];
  for (let i = 1; i < numOfsegment; i++) {
    const segmentOffset = segmentSizePercent * i;
    gridLineArray.push(
      <line x1={`${segmentOffset}%`} y1="0" x2={`${segmentOffset}%`} y2="100%" key={`${segmentOffset}gridv`} />
    );
  }
  return gridLineArray;
};

export default TimeLineChartGrid;
