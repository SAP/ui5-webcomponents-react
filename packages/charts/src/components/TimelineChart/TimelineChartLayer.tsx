import React, { ReactNode } from 'react';

interface TimelineChartLayerProps {
  ignoreClick?: boolean;
  children?: ReactNode | ReactNode[];
  isAnnotation?: boolean;
}

/**
 * The TimeLineChartLayer represents each layer of the chart rendering. This
 * is used to seperate the chart into different rendering concerns. One layer
 * can be used to render the grid lines and another can be used to render
 * annotations or tasks.
 */
const TimelineChartLayer: React.FC<TimelineChartLayerProps> = ({ ignoreClick = false, isAnnotation, children }) => {
  if (isAnnotation) {
    return (
      <div
        style={{ width: '100%', height: '100%', position: 'absolute', pointerEvents: ignoreClick ? 'none' : 'auto' }}
      >
        {children}
      </div>
    );
  }
  return (
    <svg width="100%" height="100%" style={{ position: 'absolute', pointerEvents: ignoreClick ? 'none' : 'auto' }}>
      {children}
    </svg>
  );
};

export default TimelineChartLayer;
