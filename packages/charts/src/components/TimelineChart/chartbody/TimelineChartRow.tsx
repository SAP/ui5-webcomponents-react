import _ from 'lodash';
import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { ITimelineChartRow } from '../types/TimelineChartTypes';
import { HOVER_OPACITY, NORMAL_OPACITY, THROTTLE_INTERVAL } from '../util/constants';

interface TimelineChartRowProps {
  rowData: ITimelineChartRow;
  rowHeight: number;
  rowIndex: number;
  totalDuration: number;
  start: number;
  showTooltip: (...x: unknown[]) => void;
  hideTooltip: () => void;
}

/**
 * This represents each row of the TimelineChart. It is used to display
 * the task items and milestones.
 */
const TimelineChartRow: React.FC<TimelineChartRowProps> = ({
  rowData,
  rowHeight,
  rowIndex,
  totalDuration,
  start,
  showTooltip,
  hideTooltip
}) => {
  if (rowIndex < 0) {
    throw new Error('Invalid row index');
  }

  rowData.color = rowData.color ?? `var(--sapChart_OrderedColor_${(rowIndex % 11) + 1})`;

  return (
    <svg x="0" y={`${rowIndex * rowHeight}`} width="100%" height={`${rowHeight}`} style={{ pointerEvents: 'none' }}>
      {rowData.tasks?.map((task, index) => {
        return (
          <TimelineTask
            key={index}
            id={task.id}
            label={task.label ?? rowData.label}
            startTime={task.start}
            duration={task.end - task.start}
            totalDuration={totalDuration}
            color={task.color ?? rowData.color}
            timelineStart={start}
            showTooltip={showTooltip}
            hideTooltip={hideTooltip}
          />
        );
      })}
      {rowData.milestones?.map((mStone, index) => {
        return (
          <TimelineMilestone
            key={index}
            id={mStone.id}
            label={mStone.label}
            time={mStone.start}
            color={mStone.color}
            totalDuration={totalDuration}
            timelineStart={start}
            showTooltip={showTooltip}
            hideTooltip={hideTooltip}
          />
        );
      })}
    </svg>
  );
};

interface TimelineTaskProps {
  /**
   * The unique id of the task. This is used to get the position
   * in the DOM and draw any connection arrows pointing to or away
   * from it.
   */
  id?: string;

  /**
   * The task item label. If not set, the label of the row is used.
   */
  label?: string;

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

  /**
   * The total duration of the timeline. This helps in knowing
   * where to position the milestone.
   */
  totalDuration: number;

  color: CSSProperties['color'];

  timelineStart: number;

  showTooltip: (
    mouseX: number,
    mouseY: number,
    name: string,
    startTime: number,
    duration: number,
    color: string,
    isMilestone: boolean
  ) => void;

  hideTooltip: () => void;
}

const TimelineTask: React.FC<TimelineTaskProps> = ({
  id,
  label,
  startTime,
  duration,
  totalDuration,
  color,
  timelineStart,
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
    showTooltip(evt.clientX, evt.clientY, label, startTime, duration, color, false);
  };

  // The 10% y value is to create a little gap between the top grid line and the
  // rendered TimelineTask itself. The height is set to 80% to allow for an
  // equal gap at the bottom with the bottom grid line.
  return (
    <rect
      id={id}
      x={`${((startTime - timelineStart) / totalDuration) * 100}%`}
      y="10%"
      width={`${(duration / totalDuration) * 100}%`}
      height="80%"
      rx="4"
      ry="4"
      style={{ fill: color, pointerEvents: 'auto', cursor: 'pointer', opacity: opacity }}
      onMouseLeave={(e) => onMouseLeave(e)}
      onMouseMove={_.throttle(onMouseMove, THROTTLE_INTERVAL, { trailing: false })}
    />
  );
};

interface TimelineMilestoneProps {
  /**
   * The unique id of the milestone. This is used to get the position
   * in the DOM and draw any connection arrows pointing to or away
   * from it.
   */
  id?: string;

  /**
   * The milestone label. If not set, the label is just 'Milestone'.
   */
  label?: string;

  /**
   * The position of a milestone on the timeline. Can
   * also be seen as the x-offset of the milestone. It is a
   * percentage of the total rendered duration of the
   * timeline.
   */
  time: number;

  /**
   * The total duration of the timeline. This helps in knowing
   * where to position the milestone.
   */
  totalDuration: number;

  color?: CSSProperties['color'];

  timelineStart: number;

  showTooltip: (
    mouseX: number,
    mouseY: number,
    label: string,
    startTime: number,
    duration: number,
    color: string,
    isMilestone: boolean
  ) => void;

  hideTooltip: () => void;
}

const TimelineMilestone: React.FC<TimelineMilestoneProps> = ({
  id,
  label,
  time,
  totalDuration,
  color,
  timelineStart,
  showTooltip,
  hideTooltip
}) => {
  color = color ?? '#007D00';
  label = label ?? 'Milestone';
  const milestoneRef = useRef<SVGRectElement>();

  useEffect(() => {
    const milestone = milestoneRef.current;

    // Replace the zero-width Rect with a Rhombus.
    // Draw a rhombus shape with the length of the diagonals equal
    // to the height of the initial rect. A square is drawn first
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
    showTooltip(evt.clientX, evt.clientY, label, time, 0, color, true);
  };

  // The 10% y value is to create a little gap between the top grid line and the
  // rendered Milestone itself. The height is set to 80% to allow for an
  // equal gap at the bottom with the bottom grid line.
  return (
    <svg x={`${((time - timelineStart) / totalDuration) * 100}%`} y="10%" height="80%" overflow="visible">
      <rect // Zero-width rect. 1px width is used as a place-holder. Height is used to draw a rhombus after component is mounted.
        id={id}
        ref={milestoneRef}
        width="1"
        height="100%"
        rx="3"
        ry="3"
        style={{ fill: color, pointerEvents: 'auto', cursor: 'pointer', opacity: opacity }}
        onMouseLeave={(e) => onMouseLeave(e)}
        onMouseMove={_.throttle(onMouseMove, THROTTLE_INTERVAL, { trailing: false })}
      />
    </svg>
  );
};

interface TimelineChartRowGroupProps {
  dataset: ITimelineChartRow[];
  rowHeight: number;
  totalDuration: number;
  start: number;
  showTooltip: (...x: unknown[]) => void;
  hideTooltip: () => void;
  postRender: () => void;
}
const TimelineChartRowGroup: React.FC<TimelineChartRowGroupProps> = ({
  dataset,
  rowHeight,
  totalDuration,
  start,
  showTooltip,
  hideTooltip,
  postRender
}) => {
  useEffect(() => {
    postRender();
  }, []);

  return (
    <svg width="100%" height="100%">
      {dataset.map((data, index) => {
        return (
          <TimelineChartRow
            key={index}
            rowData={data}
            rowHeight={rowHeight}
            rowIndex={index}
            totalDuration={totalDuration}
            start={start}
            showTooltip={showTooltip}
            hideTooltip={hideTooltip}
          />
        );
      })}
    </svg>
  );
};

export default TimelineChartRowGroup;
