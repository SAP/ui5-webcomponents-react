import { ThemingParameters, useIsomorphicLayoutEffect } from '@ui5/webcomponents-react-base';
import type { ReactElement } from 'react';
import { useState } from 'react';
import type { ITimelineChartMileStone, ITimelineChartRow, ITimelineChartTask } from '../types/TimelineChartTypes.js';
import { TimelineChartConnection } from '../types/TimelineChartTypes.js';
import { ARROWHEAD_HEIGHT, ARROWHEAD_WIDTH, ARROW_CLEARANCE } from '../util/constants.js';

interface TimelineChartConnectionsProps {
  dataSet: ITimelineChartRow[];

  /**
   * The row height. This is used to calculate drawing the
   * connection arrows.
   */
  rowHeight: number;

  /**
   * The width of the chart body.
   * This is required to help rerender the arrows when the size
   * of the chart body changes.
   */
  width: number;

  /**
   * This is required to get the bounding box of the chart body
   * and to be able to calculate the relative positions of the
   * start and end points of the connection arrows based on the
   * bounding box parameters of the chart body.
   */
  bodyRect: DOMRect;
}

interface ConnectionData {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  connection: TimelineChartConnection;
}

/**
 * This holds all the arrows that show the connections between different tasks.
 */
const TimelineChartConnections = ({ dataSet, width, rowHeight, bodyRect }: TimelineChartConnectionsProps) => {
  const [connectionDataState, setConnectionDataState] = useState<ConnectionData[]>([]);
  useIsomorphicLayoutEffect(() => {
    const connectionDataArray: ConnectionData[] = [];

    for (let index = 0; index < dataSet.length; index++) {
      const row = dataSet[index];
      if (row.tasks) generateConnectionData(row.tasks, bodyRect, connectionDataArray);
      if (row.milestones) generateConnectionData(row.milestones, bodyRect, connectionDataArray);
    }

    setConnectionDataState(connectionDataArray);
  }, [width]);

  return (
    <svg width="100%" height="100%">
      {connectionDataState.map((data, index) => {
        return (
          <ConnectionArrow
            startX={data.startX}
            endX={data.endX}
            startY={data.startY}
            endY={data.endY}
            key={index}
            rowHeight={rowHeight}
            depType={data.connection}
          />
        );
      })}
    </svg>
  );
};

interface ConnectionArrowProps {
  depType: TimelineChartConnection;
  rowHeight: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

/**
 * This component represents the physical arrow that indicates
 * the type of connection between two tasks or items on the
 * chart.
 */
const ConnectionArrow = ({ depType, rowHeight, startX, startY, endX, endY }: ConnectionArrowProps) => {
  const halfRowHeight = 0.5 * rowHeight;
  const finishX = endX;

  const finishY = endY;

  const arrowColor = ThemingParameters.sapTextColor;
  if (startX === finishX && startY === finishY) {
    // render nothing if the points overlap
    return null;
  }

  if (depType === TimelineChartConnection.Finish_To_Start) {
    return generateF2SArrow(startX, startY, finishX, finishY, arrowColor, halfRowHeight);
  }

  if (depType === TimelineChartConnection.Start_To_Finish) {
    return generateS2FArrow(startX, startY, finishX, finishY, arrowColor, halfRowHeight);
  }

  if (depType === TimelineChartConnection.Start_To_Start) {
    return generateS2SArrow(startX, startY, finishX, finishY, arrowColor);
  }

  if (depType === TimelineChartConnection.Finish_To_Finish) {
    return generateF2FArrow(startX, startY, finishX, finishY, arrowColor);
  }
};

// Generates the finish-to-start arrow
const generateF2SArrow = (
  startX: number,
  startY: number,
  finishX: number,
  finishY: number,
  color: string,
  halfRowHeight: number
): ReactElement => {
  return (
    <>
      {generateStartingPoint(startX, startY, color)}
      {startX >= finishX || finishX - startX < 2 * ARROW_CLEARANCE ? (
        <path
          d={`M ${startX} ${startY}
            h ${ARROW_CLEARANCE}
            v ${finishY > startY ? halfRowHeight : -halfRowHeight}
            H ${finishX - ARROW_CLEARANCE}
            V ${finishY}
            H ${finishX}`}
          stroke={color}
          fill="transparent"
        />
      ) : (
        <path
          d={`M ${startX} ${startY}
            h ${ARROW_CLEARANCE}
            V ${finishY}
            H ${finishX}`}
          stroke={color}
          fill="transparent"
        />
      )}
      {generateStartFacingHead(finishX, finishY, color)}
    </>
  );
};

// Generate start-to-finish arrow
const generateS2FArrow = (
  startX: number,
  startY: number,
  finishX: number,
  finishY: number,
  color: string,
  halfRowHeight: number
): ReactElement => {
  return (
    <>
      {generateStartingPoint(startX, startY, color)}
      {startX <= finishX || startX - finishX < 2 * ARROW_CLEARANCE ? (
        <path
          d={`M ${startX} ${startY}
            h ${-ARROW_CLEARANCE}
            v ${finishY > startY ? halfRowHeight : -halfRowHeight}
            H ${finishX + ARROW_CLEARANCE}
            V ${finishY}
            H ${finishX}`}
          stroke={color}
          fill="transparent"
        />
      ) : (
        <path
          d={`M ${startX} ${startY}
            h ${-ARROW_CLEARANCE}
            V ${finishY}
            H ${finishX}`}
          stroke={color}
          fill="transparent"
        />
      )}
      {generateEndFacingHead(finishX, finishY, color)}
    </>
  );
};

// Generate start-to-start arrow
const generateS2SArrow = (
  startX: number,
  startY: number,
  finishX: number,
  finishY: number,
  color: string
): ReactElement => {
  return (
    <>
      {generateStartingPoint(startX, startY, color)}
      <path
        d={`M ${startX} ${startY}
          h ${startX <= finishX ? -ARROW_CLEARANCE : finishX - startX - ARROW_CLEARANCE}
          V ${finishY}
          H ${finishX}`}
        stroke={color}
        fill="transparent"
      />
      {generateStartFacingHead(finishX, finishY, color)}
    </>
  );
};

// Generate finish-to-finish arrow
const generateF2FArrow = (
  startX: number,
  startY: number,
  finishX: number,
  finishY: number,
  color: string
): ReactElement => {
  return (
    <>
      {generateStartingPoint(startX, startY, color)}
      <path
        d={`M ${startX} ${startY}
          h ${startX >= finishX ? ARROW_CLEARANCE : finishX - startX + ARROW_CLEARANCE}
          V ${finishY}
          H ${finishX}`}
        stroke={color}
        fill="transparent"
      />
      {generateEndFacingHead(finishX, finishY, color)}
    </>
  );
};

// Create the starting point indicator
const generateStartingPoint = (x: number, y: number, color: string): ReactElement => {
  return <circle cx={`${x}`} cy={`${y}`} r="1" fill={color} />;
};

// Create an arrowhead pointing to a task start.
const generateStartFacingHead = (finishX: number, finishY: number, color: string): ReactElement => {
  return (
    <polygon
      points={`${finishX}, ${finishY} 
        ${finishX - ARROWHEAD_HEIGHT}, ${finishY - ARROWHEAD_WIDTH / 2} 
        ${finishX - ARROWHEAD_HEIGHT}, ${finishY + ARROWHEAD_WIDTH / 2}`}
      fill={color}
    />
  );
};

// Create an arrowhead pointing to a task end.
const generateEndFacingHead = (finishX: number, finishY: number, color: string): ReactElement => {
  return (
    <polygon
      points={`${finishX}, ${finishY} 
        ${finishX + ARROWHEAD_HEIGHT}, ${finishY - ARROWHEAD_WIDTH / 2} 
        ${finishX + ARROWHEAD_HEIGHT}, ${finishY + ARROWHEAD_WIDTH / 2}`}
      fill={color}
    />
  );
};

const generateConnectionData = (
  activities: ITimelineChartTask[] | ITimelineChartMileStone[],
  bodyRect: DOMRect,
  connectionDataArray: ConnectionData[]
) => {
  for (let i = 0; i < activities.length; i++) {
    const activity = activities[i];
    if (activity.connections == null) continue;
    const startItem = document.getElementById(activity.id);
    if (startItem == null) continue;

    // Get the start points based on the type of connection
    const { x, y, right, height } = startItem.getBoundingClientRect();
    const startY = y + height / 2 - bodyRect.y; // Always same no matter the connection type.

    let startX: number;
    activity.connections.forEach((item) => {
      if (item.type == null) {
        item.type = TimelineChartConnection.Finish_To_Start;
      }
      const endItem = document.getElementById(item.itemId);
      if (endItem == null) return;

      if (
        item.type === TimelineChartConnection.Finish_To_Finish ||
        item.type === TimelineChartConnection.Finish_To_Start
      ) {
        startX = right - bodyRect.x;
      } else {
        startX = x - bodyRect.x;
      }

      // Get the end points based on the type of connection
      const { x: otherX, y: otherY, right: otherR } = endItem.getBoundingClientRect();
      const endY = otherY + height / 2 - bodyRect.y; // Always same no matter the connection type.
      let endX: number;

      if (
        item.type === TimelineChartConnection.Start_To_Start ||
        item.type === TimelineChartConnection.Finish_To_Start
      ) {
        endX = otherX - bodyRect.x;
      } else {
        endX = otherR - bodyRect.x;
      }

      connectionDataArray.push({
        startX,
        startY,
        endX,
        endY,
        connection: item.type
      });
    });
  }
};

export { TimelineChartConnections };
