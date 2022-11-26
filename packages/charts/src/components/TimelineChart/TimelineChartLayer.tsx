import React from 'react';

interface TimelineChartLayerProps {
  children?: JSX.Element | JSX.Element[];
}

/**
 * The TimeLineChartLayer represents each layer of the chart rendering. This
 * is used to seperate the chart into different rendering concerns. One layer
 * can be used to render the grid lines and another can be used to render
 * annotations or tasks.
 */
const TimelineChartLayer: React.FC<TimelineChartLayerProps> = ({ children }) => {
  return (
    <svg color="red" width="100%" height="100%" style={{ position: 'absolute' }}>
      {children}
    </svg>
  );
};

export default TimelineChartLayer;
