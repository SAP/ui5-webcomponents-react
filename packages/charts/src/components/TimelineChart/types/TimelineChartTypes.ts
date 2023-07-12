import type { CSSProperties } from 'react';

/**
 * This is the data representing a single row on the Timeline chart.
 */
export interface ITimelineChartRow {
  /**
   * An array of tasks to be displayed on the row.
   */
  tasks?: ITimelineChartTask[];

  /**
   * An array of milestones to be displayed on the row.
   */
  milestones?: ITimelineChartMileStone[];

  /**
   * The label for the row.
   */
  label: string;

  /**
   * The number of the row on the chart. It is a zero-indexed number so
   * the first row is number 0.
   */
  rowNumber?: number;

  /**
   * The color for the tasks on the row. This can be overridden by the
   * task or milestone component if a value is specified for them. Any
   * valid CSS color will do. If not specified, a random color is used.
   */
  color?: CSSProperties['color'];
}

/**
 * This is the data representing each task on the row.
 */
export interface ITimelineChartTask {
  /**
   * A unique id for identifying the task or milestone in the timeline.
   * This id must be provided if this task or milestone is connected to
   * another task or milestone because it will be used to render the
   * connection arrow between the two tasks. Without it, no arrow will
   * be drawn.
   */
  id?: string;

  /**
   * The start time of the task or milestone. This is used to determine the
   * proportional starting point of the task or milestone on the timeline.
   */
  start: number;

  /**
   * The duration of the task. This is used to determine the proportional
   * ending point of the task on the timeline.
   */
  duration: number;

  /**
   * The label of the task in the row. If not provided, the label of the
   * `ITimelineChartRow` is used.
   */
  label?: string;

  /**
   * The color of the task in the row. If not provided, the color
   * of the `ITimelineChartRow` is used. Any valid CSS color will do.
   */
  color?: CSSProperties['color'];

  /**
   * A list of relationships between the task and other tasks on
   * the timeline.
   */
  connections?: ITimelineChartConn[];
}

/**
 * The data representing the connection between two tasks on the timeline.
 * The tasks can be on the same row or on different rows.
 */
export interface ITimelineChartConn {
  /**
   * The type of connection between a task and another task whose Id is
   * specified by `itemId`.
   */
  type?: TimelineChartConnection;

  /**
   * The id of the task to be connected to. If the id does not exist, no
   * connection is made.
   */
  itemId: string;
}

export enum TimelineChartConnection {
  Finish_To_Start = 'F2S',
  Start_To_Finish = 'S2F',
  Start_To_Start = 'S2S',
  Finish_To_Finish = 'F2F'
}

export type ITimelineChartMileStone = Omit<ITimelineChartTask, 'duration'>;
