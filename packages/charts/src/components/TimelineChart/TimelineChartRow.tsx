import React, { useEffect, useRef, useState } from 'react';

const THROTTLE_INTERVAL = 300;
const NORMAL_OPACITY = 1.0;
const HOVER_OPACITY = 0.7;

function throttle(callback: (x: unknown[] | unknown) => void, interval: number) {
  let callFunction = true;

  return function (...args: unknown[]) {
    if (!callFunction) return;

    callFunction = false;
    callback.apply(this, args);
    setTimeout(() => (callFunction = true), interval);
  };
}

interface TimelineChartRowProps {
  rowHeight: number;
  rowNumber: number;
  totalDuration: number;
  showTooltip: (
    mouseX: number,
    mouseY: number,
    startTime: number,
    duration: number,
    color: string,
    isMilestone: boolean
  ) => void;
  hideTooltip: () => void;
}

/**
 * This represents each row of the TimelineChart. It is used to display
 * the task items and milestones.
 */
const TimelineChartRow: React.FC<TimelineChartRowProps> = ({
  rowHeight,
  rowNumber,
  totalDuration,
  showTooltip,
  hideTooltip
}) => {
  return (
    <svg x="0" y={`${rowNumber * rowHeight}`} width="100%" height={`${rowHeight}`} style={{ pointerEvents: 'none' }}>
      <TimelineTask
        startTime={5}
        duration={20}
        totalDuration={totalDuration}
        showTooltip={showTooltip}
        hideTooltip={hideTooltip}
      />
      <TimelineTask
        startTime={50}
        duration={40}
        totalDuration={totalDuration}
        showTooltip={showTooltip}
        hideTooltip={hideTooltip}
      />
      <TimelineTask
        startTime={30}
        duration={5}
        totalDuration={totalDuration}
        showTooltip={showTooltip}
        hideTooltip={hideTooltip}
      />
      <TimelineMilestone time={30} totalDuration={totalDuration} showTooltip={showTooltip} hideTooltip={hideTooltip} />
    </svg>
  );
};

interface TimelineTaskProps {
  /**
   * The starting time of the task on the timeline. Can
   * also be seen as the x-offset of the task. It is a
   * percentage of the total rendered duration of the
   * timeline.
   */
  startTime: number;

  /**
   * Duration of the task.
   */
  duration: number;

  totalDuration: number;
  showTooltip: (
    mouseX: number,
    mouseY: number,
    startTime: number,
    duration: number,
    color: string,
    isMilestone: boolean
  ) => void;
  hideTooltip: () => void;
}

const TimelineTask: React.FC<TimelineTaskProps> = ({
  startTime,
  duration,
  totalDuration,
  showTooltip,
  hideTooltip
}) => {
  const [opacity, setOpacity] = useState(NORMAL_OPACITY);
  const onMouseLeave = (evt: React.MouseEvent<SVGRectElement, MouseEvent>) => {
    evt.stopPropagation();
    hideTooltip();
    setOpacity(NORMAL_OPACITY);
  };

  const onMouseMove = (evt: React.MouseEvent<SVGRectElement, MouseEvent>) => {
    evt.stopPropagation();
    setOpacity(HOVER_OPACITY);
    showTooltip(evt.clientX, evt.clientY, startTime, duration, 'blue', false);
  };

  // The 10% y value is to create a little gap between the top grid line and the
  // rendered TimelineTask itself. The height is set to 80% to allow for an
  // equal gap at the bottom with the bottom grid line.
  return (
    <rect
      x={`${(startTime / totalDuration) * 100}%`}
      y="10%"
      width={`${(duration / totalDuration) * 100}%`}
      height="80%"
      rx="4"
      ry="4"
      style={{ fill: 'rgb(0,0,255)', pointerEvents: 'auto', cursor: 'pointer', opacity: opacity }}
      onMouseLeave={(e) => onMouseLeave(e)}
      onMouseMove={throttle(onMouseMove, THROTTLE_INTERVAL)}
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
  time: number;

  totalDuration: number;

  showTooltip: (
    mouseX: number,
    mouseY: number,
    startTime: number,
    duration: number,
    color: string,
    isMilestone: boolean
  ) => void;
  hideTooltip: () => void;
}

const TimelineMilestone: React.FC<TimelineMilestoneProps> = ({ time, totalDuration, showTooltip, hideTooltip }) => {
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

  const [opacity, setOpacity] = useState(NORMAL_OPACITY);

  const onMouseLeave = (evt: React.MouseEvent<SVGRectElement, MouseEvent>) => {
    evt.stopPropagation();
    hideTooltip();
    setOpacity(NORMAL_OPACITY);
  };

  const onMouseMove = (evt: React.MouseEvent<SVGRectElement, MouseEvent>) => {
    evt.stopPropagation();
    setOpacity(HOVER_OPACITY);
    showTooltip(evt.clientX, evt.clientY, time, 0, 'rgb(0,125,0)', true);
  };

  // The 10% y value is to create a little gap between the top grid line and the
  // rendered TimelineTask itself. The height is set to 80% to allow for an
  // equal gap at the bottom with the bottom grid line.
  return (
    <svg x={`${(time / totalDuration) * 100}%`} y="10%" height="80%" overflow="visible">
      <rect // Zero width. Height is used to draw a rhombus after component is mounted.
        ref={milestoneRef}
        height="100%"
        rx="4"
        ry="4"
        style={{ fill: 'rgb(0,125,0)', pointerEvents: 'auto', cursor: 'pointer', opacity: opacity }}
        onMouseLeave={(e) => onMouseLeave(e)}
        onMouseMove={throttle(onMouseMove, THROTTLE_INTERVAL)}
      />
    </svg>
  );
};

export default TimelineChartRow;
