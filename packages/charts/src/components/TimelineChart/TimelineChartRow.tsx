import React, { useEffect, useRef } from 'react';

interface TimelineChartRowProps {
  height: number;
  yOffset: number;
}

/**
 * This represents each row of the TimelineChart. It is used to display
 * the task items and milestones.
 */
const TimelineChartRow: React.FC<TimelineChartRowProps> = ({ height, yOffset }) => {
  return (
    <svg x="0%" y={`${yOffset}%`} width="100%" height={`${height}%`}>
      <TimelineTask startPosition={5} duration={20} />
      <TimelineTask startPosition={50} duration={40} />
      <TimelineTask startPosition={30} duration={5} />
      <TimelineMilestone position={30} />
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
      rx="4"
      ry="4"
      style={{ fill: 'rgb(0,0,255)' }}
    />
  );
};

interface TimelineMilestoneProps {
  /**
   * The position of a milestone on the timeline. Can
   * also be seen as the x-offset of the milestone. It is a
   * percentage of the total rendered duration of the
   * timeline.
   */
  position: number;
}

const TimelineMilestone: React.FC<TimelineMilestoneProps> = ({ position }) => {
  const milestoneRef = useRef<SVGRectElement>();

  useEffect(() => {
    const milestone = milestoneRef.current;

    // Replace the zero-width Rect with a Rhombus.
    // Draw a rhombus shape with the length of the diagonals equal
    // to the height of the initial react. A square is drawn first
    // then that square is translated to the left and downwards so
    // that the center aligns with the initial x position and the
    // center of the row. Then it is rotated 45° about that its center.
    const { height: rhombusDiagonal } = milestone.getBoundingClientRect();
    const rhombusSideLength = Math.sqrt(Math.pow(rhombusDiagonal, 2) / 2);
    milestone.setAttribute('width', rhombusSideLength.toString());
    milestone.setAttribute('height', rhombusSideLength.toString());
    milestone.setAttribute(
      'transform',
      `translate(
        ${-rhombusSideLength / 2}, 
        ${(rhombusDiagonal - rhombusSideLength) / 2}) 
      rotate(45, ${rhombusSideLength / 2}, 
        ${rhombusSideLength / 2}
      )`
    );
  }, []);

  // The 10% y value is to create a little gap between the top grid line and the
  // rendered TimelineTask itself. The height is set to 80% to allow for an
  // equal gap at the bottom with the bottom grid line.
  return (
    <svg x={`${position}%`} y="10%" height="80%" overflow="visible">
      <rect // Zero width. Height is used to draw a rhombus after component is mounted.
        ref={milestoneRef}
        height="100%"
        rx="4"
        ry="4"
        style={{ fill: 'rgb(0,125,0)' }}
      />
    </svg>
  );
};

export default TimelineChartRow;
