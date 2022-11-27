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
      <TimelineDepsArrow startX={10} startY={20} finishX={20} finishY={80} depType={DependencyTypes.Finish_To_Finish} />
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

const CURVE_HANDLE_ALLOWANCE = 50;
const ARROWHEAD_WIDTH = 8;
const ARROWHEAD_HEIGHT = 10;

const TimelineDepsArrow: React.FC<TimelineDepsArrowProps> = ({ startX, startY, finishX, finishY, depType }) => {
  const dimensions = useContext(TimelineChartDimensionCtx);
  startX *= dimensions.width / 100;
  finishX *= dimensions.width / 100;
  startY *= dimensions.height / 100;
  finishY *= dimensions.height / 100;

  const arrowColor = 'black';
  if (startX === finishX && startY === finishY) {
    // render nothing if the points overlap
    return null;
  }

  if (depType === DependencyTypes.Finish_To_Start) {
    return generateF2SArrow(startX, startY, finishX, finishY, arrowColor);
  }

  if (depType === DependencyTypes.Start_To_Finish) {
    return generateS2FArrow(startX, startY, finishX, finishY, arrowColor);
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
  color: string
): JSX.Element => {
  return (
    <>
      <path
        d={`M ${startX} ${startY}
          C ${startX + CURVE_HANDLE_ALLOWANCE} ${startY},
          ${startX + CURVE_HANDLE_ALLOWANCE} ${startY + (finishY - startY) / 6},
          ${startX + (finishX - startX) / 2} ${startY + (finishY - startY) / 2}
          S ${finishX - CURVE_HANDLE_ALLOWANCE} ${finishY},
          ${finishX} ${finishY}`}
        stroke={color}
        fill="transparent"
      />
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
  color: string
): JSX.Element => {
  return (
    <>
      <path
        d={`M ${startX} ${startY}
            C ${startX - CURVE_HANDLE_ALLOWANCE} ${startY},
            ${startX - CURVE_HANDLE_ALLOWANCE} ${startY + (finishY - startY) / 6},
            ${startX + (finishX - startX) / 2} ${startY + (finishY - startY) / 2}
            S ${finishX + CURVE_HANDLE_ALLOWANCE} ${finishY},
            ${finishX} ${finishY}`}
        stroke={color}
        fill="transparent"
      />
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
      <path
        d={`M ${startX} ${startY}
              C ${startX - CURVE_HANDLE_ALLOWANCE} ${startY},
              ${finishX - CURVE_HANDLE_ALLOWANCE} ${finishY},
              ${finishX} ${finishY}`}
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
      <path
        d={`M ${startX} ${startY}
              C ${startX + CURVE_HANDLE_ALLOWANCE} ${startY},
              ${finishX + CURVE_HANDLE_ALLOWANCE} ${finishY},
              ${finishX} ${finishY}`}
        stroke={color}
        fill="transparent"
      />
      {generateEndFacingHead(finishX, finishY, color)}
    </>
  );
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
