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
  scale: number;
}

/**
 * This component represents the grid lines on the chart. The `isDiscrete` prop is
 * used to decided whether to render the vertical grid lines.
 */
const TimeLineChartGrid: React.FC<TimeLineChartGridProps> = ({
  isDiscrete,
  numOfRows,
  rowHeight,
  numOfCols,
  scale
}) => {
  return (
    <g style={{ stroke: ThemingParameters.sapList_BorderColor }}>
      {generateHGridLines(numOfRows, rowHeight)}
      {isDiscrete ? generateVGridLines(numOfCols) : generateVGridLines(Math.floor(5 * scale))}
    </g>
  );
};

/**
 * This function generates the grid lines using the number of segments provided.
 * Each segment is calculated as a fractional percentage of the overall width
 * or height.
 * @param numOfSegments The number of rows or columns the grid should have.
 * @returns An array of grid lines in SVG.
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

export default TimeLineChartGrid;
