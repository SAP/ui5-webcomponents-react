import { ThemingParameters } from '@ui5/webcomponents-react-base';
import React, { CSSProperties, forwardRef, ReactNode, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { ITimelineChartRow } from '../types/TimelineChartTypes';
import { MAX_BODY_WIDTH, SCALE_FACTOR } from '../util/constants';
import { TimelineChartBodyCtx } from '../util/context';
import { TimelineChartGrid } from './TimelineChartGrid';
import { TimelineChartLayer } from './TimelineChartLayer';
import { TimelineChartRowGroup } from './TimelineChartRow';
import { TimelineChartConnections } from './TimelineConnections';

interface TimelineChartBodyProps {
  dataset: ITimelineChartRow[];
  width?: number;
  height?: number;
  rowHeight: number;
  numOfItems: number;
  totalDuration: number;
  isDiscrete: boolean;
  annotations?: ReactNode | ReactNode[];
  showAnnotation?: boolean;
  showConnection?: boolean;
  showTooltip?: boolean;
  unit: string;
  start: number;
  onScale: (x: number) => void;
  valueFormat?: (value: number) => string;
  resetScroll: () => void;
}

const TimelineChartBody: React.FC<TimelineChartBodyProps> = ({
  dataset,
  width,
  rowHeight,
  numOfItems,
  totalDuration,
  isDiscrete,
  annotations,
  showAnnotation,
  showConnection,
  showTooltip,
  unit,
  start,
  onScale,
  valueFormat,
  resetScroll
}) => {
  const tooltipRef = useRef<TimelineTooltipHandle>();
  const bodyRef = useRef<HTMLDivElement>();
  const scaleExpRef = useRef(0);
  const [displayArrows, setDisplayArrows] = useState(false);

  useEffect(() => {
    bodyRef.current?.addEventListener('wheel', onMouseWheelEvent);
    return () => {
      bodyRef.current?.removeEventListener('wheel', onMouseWheelEvent);
    };
  }, []);

  const style: CSSProperties = {
    width: `${width}px`,
    height: `${numOfItems * rowHeight}px`,
    position: 'relative',
    outline: `1px solid ${ThemingParameters.sapList_BorderColor}`
  };

  const showTooltipOnHover = (
    mouseX: number,
    mouseY: number,
    label: string,
    startTime: number,
    duration: number,
    color: string,
    isMilestone: boolean
  ) => {
    tooltipRef.current?.onHoverItem(mouseX, mouseY, label, startTime, duration, color, isMilestone);
  };
  const hideTooltip = () => tooltipRef.current?.onLeaveItem();

  const onMouseWheelEvent = (evt: WheelEvent) => {
    evt.preventDefault();
    if (evt.deltaY < 0) {
      // Only scale up if scaled width will not exceed MAX_BODY_WIDTH
      const msrWidth = bodyRef.current.getBoundingClientRect().width;
      if (msrWidth * SCALE_FACTOR < MAX_BODY_WIDTH) {
        scaleExpRef.current++;
      }
    } else {
      // Only scale down if scaled width will not be less than original
      // width
      if (scaleExpRef.current > 0) {
        resetScroll();
        scaleExpRef.current--;
      }
    }
    onScale(Math.pow(SCALE_FACTOR, scaleExpRef.current));
  };

  const showArrows = () => setDisplayArrows(true);

  return (
    <div className="timeline-chart-body" ref={bodyRef} style={style}>
      <TimelineChartLayer name="timeline-chart-grid-layer" ignoreClick>
        <TimelineChartGrid
          isDiscrete={isDiscrete}
          numOfRows={numOfItems}
          totalDuration={totalDuration}
          rowHeight={rowHeight}
          scale={Math.pow(SCALE_FACTOR, scaleExpRef.current)}
        />
      </TimelineChartLayer>

      {showConnection && displayArrows ? (
        <TimelineChartLayer name="timeline-chart-connection-layer" ignoreClick>
          <TimelineChartConnections
            dataSet={dataset}
            width={width}
            rowHeight={rowHeight}
            bodyRect={bodyRef.current?.getBoundingClientRect()}
          />
        </TimelineChartLayer>
      ) : null}

      <TimelineChartLayer name="timeline-chart-rows-layer" ignoreClick>
        <TimelineChartRowGroup
          dataset={dataset}
          rowHeight={rowHeight}
          totalDuration={totalDuration}
          timelineStart={start}
          showTooltip={showTooltipOnHover}
          hideTooltip={hideTooltip}
          postRender={showArrows}
        />
      </TimelineChartLayer>

      {showAnnotation && annotations != null ? (
        <TimelineChartLayer name="timeline-chart-annotation-layer" isAnnotation ignoreClick>
          <TimelineChartBodyCtx.Provider value={{ chartBodyWidth: width }}>{annotations}</TimelineChartBodyCtx.Provider>
        </TimelineChartLayer>
      ) : null}

      {showTooltip ? <TimelineChartTooltip ref={tooltipRef} unit={unit} valueFormat={valueFormat} /> : null}
    </div>
  );
};

interface TimelineTooltipHandle {
  onHoverItem: (
    mouseX: number,
    mouseY: number,
    label: string,
    startTime: number,
    duration: number,
    color: string,
    isMilestone: boolean
  ) => void;
  onLeaveItem: () => void;
}

interface TimelineTooltipChartProps {
  unit: string;
  valueFormat?: (value: number) => string;
}

const TimelineChartTooltip = forwardRef<TimelineTooltipHandle, TimelineTooltipChartProps>(function TimelineChartTooltip(
  { unit, valueFormat },
  ref
) {
  const [state, setState] = useState({
    x: 0,
    y: 0,
    label: '',
    visible: false,
    startTime: 0,
    duration: 0,
    color: 'black',
    isMilestone: false
  });
  const divRef = useRef<HTMLDivElement>();
  const popupRef = useRef<HTMLSpanElement>();

  const onHoverItem = (
    mouseX: number,
    mouseY: number,
    label: string,
    startTime: number,
    duration: number,
    color: string,
    isMilestone: boolean
  ) => {
    const { x, y, width, height } = divRef.current?.getBoundingClientRect();
    // Adjust the x and y position of the tooltip popover in order to try
    // to prevent it from being cut off by the bounds of the parent div.
    const offSetX = mouseX - x;
    const offSetY = mouseY - y;
    const xPos = offSetX < width - 80 ? offSetX : offSetX - 120;
    const yPos = offSetY < height - 70 ? offSetY : offSetY - 70;
    setState({ x: xPos, y: yPos, label, visible: true, startTime, duration, color, isMilestone });
  };

  const onLeaveItem = () => {
    setState({ ...state, visible: false });
  };

  useImperativeHandle(ref, () => ({
    onHoverItem: onHoverItem,
    onLeaveItem: onLeaveItem
  }));

  return (
    <div
      className="timeline-chart-tooltip-container"
      ref={divRef}
      style={{
        width: '100%',
        height: '100%',
        fontSize: '10px',
        position: 'absolute',
        pointerEvents: 'none'
      }}
    >
      {state.visible ? (
        <span
          className="timeline-chart-tooltip"
          ref={popupRef}
          style={{
            minWidth: 80,
            display: 'inline-grid',
            gap: 2,
            padding: 10,
            outline: `2px solid ${ThemingParameters.sapList_BorderColor}`,
            borderRadius: 8,
            color: ThemingParameters.sapTextColor,
            backgroundColor: ThemingParameters.sapBackgroundColor,
            position: 'absolute',
            left: state.x,
            top: state.y
          }}
        >
          <span style={{ textAlign: 'center' }}>
            <strong>{state.label}</strong>
          </span>
          <span style={{ width: '100%', height: '4px', backgroundColor: state.color }}></span>
          <span>
            Start: {valueFormat != null ? valueFormat(state.startTime) : state.startTime}
            {unit}
          </span>
          {state.isMilestone ? null : (
            <span>
              Duration: {valueFormat != null ? valueFormat(state.duration) : state.duration}
              {unit}
            </span>
          )}
          <span>
            End:{' '}
            {valueFormat != null ? valueFormat(state.startTime + state.duration) : state.startTime + state.duration}
            {unit}
          </span>
        </span>
      ) : null}
    </div>
  );
});

export { TimelineChartBody };
