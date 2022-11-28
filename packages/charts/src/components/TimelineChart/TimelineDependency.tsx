import React, { useContext } from 'react';
import { TimelineChartDimensionCtx } from './TimelineChart';

const TimelineDepsContainer = () => {
  return (
    <svg width="100%" height="100%">
      {/* <TimelineDepsArrow
        startX={50}
        startY={120}
        finishX={250}
        finishY={20}
        depType={DependencyTypes.Start_To_Finish}
      /> */}
      <TimelineDepsArrow startX={50} startY={60} finishX={80} finishY={100} depType={DependencyTypes.Start_To_Finish} />
    </svg>
  );
};

enum DependencyTypes {
  Finish_To_Start = 'Finish_To_Start',
  Start_To_Finish = 'Start_To_Finish',
  Start_To_Start = 'Start_To_Start',
  Finish_To_Finish = 'Finish_To_Finish'
}

interface TimelineDepsArrowProps {
  depType: DependencyTypes;
  startX: number;
  startY: number;
  finishX: number;
  finishY: number;
  parentWidth?: number;
  parentHeight?: number;
}

const ARROWHEAD_WIDTH = 8; // base of the arrow head triangle. Where the line joins the head
const ARROWHEAD_HEIGHT = 5; // Distance from the pointy tip to where the arrow line joins the head
const ARROW_CLEARANCE = ARROWHEAD_HEIGHT + 3;

const TimelineDepsArrow: React.FC<TimelineDepsArrowProps> = ({ startX, startY, finishX, finishY, depType }) => {
  const dimensions = useContext(TimelineChartDimensionCtx);
  const halfRowHeight = 0.1 * dimensions.height; // assume row height = 20% for now

  startX *= dimensions.width / 100;
  finishX *= dimensions.width / 100;

  // Scale Y points and put them in the middle of the row
  startY = (startY * dimensions.height) / 100 - halfRowHeight;
  finishY = (finishY * dimensions.height) / 100 - halfRowHeight;

  const arrowColor = 'black';
  if (startX === finishX && startY === finishY) {
    // render nothing if the points overlap
    return null;
  }

  if (depType === DependencyTypes.Finish_To_Start) {
    return generateF2SArrow(startX, startY, finishX, finishY, arrowColor, halfRowHeight);
  }

  if (depType === DependencyTypes.Start_To_Finish) {
    return generateS2FArrow(startX, startY, finishX, finishY, arrowColor, halfRowHeight);
  }

  if (depType === DependencyTypes.Start_To_Start) {
    return generateS2SArrow(startX, startY, finishX, finishY, arrowColor);
  }

  if (depType === DependencyTypes.Finish_To_Finish) {
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
): JSX.Element => {
  return (
    <>
      {generateStartingPoint(startX, startY, color)}
      {startX >= finishX || finishX - startX < 2 * ARROW_CLEARANCE ? (
        <path
          d={`M ${startX} ${startY}
            h ${ARROW_CLEARANCE}
            v ${halfRowHeight}
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
): JSX.Element => {
  return (
    <>
      {generateStartingPoint(startX, startY, color)}
      {startX <= finishX || startX - finishX < 2 * ARROW_CLEARANCE ? (
        <path
          d={`M ${startX} ${startY}
            h ${-ARROW_CLEARANCE}
            v ${halfRowHeight}
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
): JSX.Element => {
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
): JSX.Element => {
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
const generateStartingPoint = (x: number, y: number, color: string): JSX.Element => {
  return <circle cx={`${x}`} cy={`${y}`} r="1" fill={color} />;
};

// Create an arrowhead pointing to a task start.
const generateStartFacingHead = (finishX: number, finishY: number, color: string): JSX.Element => {
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
const generateEndFacingHead = (finishX: number, finishY: number, color: string): JSX.Element => {
  return (
    <polygon
      points={`${finishX}, ${finishY} 
        ${finishX + ARROWHEAD_HEIGHT}, ${finishY - ARROWHEAD_WIDTH / 2} 
        ${finishX + ARROWHEAD_HEIGHT}, ${finishY + ARROWHEAD_WIDTH / 2}`}
      fill={color}
    />
  );
};

export default TimelineDepsContainer;
