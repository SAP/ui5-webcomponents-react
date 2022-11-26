import React from 'react';

interface TimelineChartRowProps {
  height: number;
  yOffset: number;
}

/**
 * This represents each row of the TimelineChart. It is used to display
 * the task items.
 */
const TimelineChartRow: React.FC<TimelineChartRowProps> = ({ height, yOffset }) => {
  return (
    <svg x="0%" y={`${yOffset}%`} width="100%" height={`${height}%`}>
      <TimelineTask startPosition={5} duration={20} />
      <TimelineTask startPosition={50} duration={40} />
    </svg>
  );
};

interface TimelineTaskProps {
  /**
   * The starting point of the task on the timeline. Can
   * also be seen as the x-offset of the task. It is a
   * percentage of the total rendered duration of the
   * timeline.
   */
  startPosition: number;

  /**
   * Duration of the task. Should be less than or equal to
   * 100% of the total rendered timeline duration.
   */
  duration: number;
}

const TimelineTask: React.FC<TimelineTaskProps> = ({ startPosition, duration }) => {
  // The 10% y value is to create a little gap between the top grid line and the
  // rendered TimelineTask itself. The height is set to 80% to allow for an
  // equal gap at the bottom with the bottom grid line.
  return (
    <rect
      x={`${startPosition}%`}
      y="10%"
      width={`${duration}%`}
      height="80%"
      rx="8"
      ry="8"
      style={{ fill: 'rgb(0,0,255)' }}
    />
  );
};

export default TimelineChartRow;
