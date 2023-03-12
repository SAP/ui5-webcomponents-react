import React, { CSSProperties, forwardRef, ReactNode, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { ITimelineChartRow } from '../types/TimelineChartTypes';
import { MAX_BODY_WIDTH, SCALE_FACTOR } from '../util/constants';
import { TimelineChartBodyCtx } from '../util/context';
import { useStyles } from '../util/styles';
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
  unscaledWidth?: number;
  onScale: (x: number) => void;
  valueFormat?: (value: number) => string;
  resetScroll: () => void;
}

const TimelineChartBody = ({
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
  unscaledWidth,
  onScale,
  valueFormat,
  resetScroll
}: TimelineChartBodyProps) => {
  const classes = useStyles();
  const tooltipRef = useRef<TimelineTooltipHandle>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
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
    height: `${numOfItems * rowHeight}px`
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
    <div data-component-name="TimelineChartBody" ref={bodyRef} className={classes.chartBody} style={style}>
      <TimelineChartLayer name="TimelineChartGridLayer" ignoreClick>
        <TimelineChartGrid
          isDiscrete={isDiscrete}
          numOfRows={numOfItems}
          totalDuration={totalDuration}
          rowHeight={rowHeight}
          width={width}
          unscaledWidth={unscaledWidth}
        />
      </TimelineChartLayer>

      {showConnection && displayArrows ? (
        <TimelineChartLayer name="TimelineChartConnectionLayer" ignoreClick>
          <TimelineChartConnections
            dataSet={dataset}
            width={width}
            rowHeight={rowHeight}
            bodyRect={bodyRef.current?.getBoundingClientRect()}
          />
        </TimelineChartLayer>
      ) : null}

      <TimelineChartLayer name="TimelineChartRowsLayer" ignoreClick>
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
        <TimelineChartLayer name="TimelineChartAnnotationLayer" isAnnotation ignoreClick>
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
  const divRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLSpanElement>(null);
  const classes = useStyles();

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
    <div data-component-name="TimelineChartTooltipContainer" className={classes.tooltipContainer} ref={divRef}>
      {state.visible ? (
        <span
          data-component-name="TimelineChartTooltip"
          className={classes.tooltip}
          ref={popupRef}
          style={{
            insetInlineStart: state.x,
            insetBlockStart: state.y
          }}
        >
          <span className={classes.tooltipLabel}>
            <strong>{state.label}</strong>
          </span>
          <span className={classes.tooltipColorBar} style={{ backgroundColor: state.color }}></span>
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
