import { ThemingParameters } from '@ui5/webcomponents-react-base';
import React, {
  createContext,
  CSSProperties,
  forwardRef,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react';
import TimeLineChartGrid from './TimeLineChartGrid';
import TimelineChartLayer from './TimelineChartLayer';
import TimelineChartRowGroup from './TimelineChartRow';
import { ITimelineChartRow } from './TimelineChartTypes';
import TimelineChartConnections from './TimelineConnections';

const SCALE_FACTOR = 1.1;
export const TimelineChartBodyCtx = createContext({ chartBodyWidth: 0 });

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
  showRelationship?: boolean;
  showTooltip?: boolean;
  unit: string;
  start: number;
  scaleChart: (x: number) => void;
  valueFormat?: (value: number) => string;
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
  showRelationship,
  showTooltip,
  unit,
  start,
  scaleChart,
  valueFormat
}) => {
  const tooltipRef = useRef<TimelineTooltipHandle>();
  const bodyRef = useRef<HTMLDivElement>();
  const scaleExpRef = useRef(0);
  const [displayArrows, setDisplayArrows] = useState(false);

  useEffect(() => {
    bodyRef.current?.addEventListener('wheel', onMouseWheelEvent);
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
      scaleExpRef.current++;
    } else {
      if (scaleExpRef.current > 0) scaleExpRef.current--;
    }
    scaleChart(Math.pow(SCALE_FACTOR, scaleExpRef.current));
  };

  const showArrows = () => setDisplayArrows(true);

  return (
    <div id="yyy" ref={bodyRef} style={style}>
      <TimelineChartLayer ignoreClick>
        <TimeLineChartGrid
          isDiscrete={isDiscrete}
          numOfRows={numOfItems}
          numOfCols={totalDuration}
          rowHeight={rowHeight}
          scale={Math.pow(SCALE_FACTOR, scaleExpRef.current)}
        />
      </TimelineChartLayer>

      {showRelationship && displayArrows ? (
        <TimelineChartLayer ignoreClick>
          <TimelineChartConnections
            dataSet={dataset}
            width={width}
            rowHeight={rowHeight}
            bodyRect={bodyRef.current?.getBoundingClientRect()}
          />
        </TimelineChartLayer>
      ) : null}

      <TimelineChartLayer ignoreClick>
        <TimelineChartRowGroup
          dataset={dataset}
          rowHeight={rowHeight}
          totalDuration={totalDuration}
          start={start}
          showTooltip={showTooltipOnHover}
          hideTooltip={hideTooltip}
          postRender={showArrows}
        />
      </TimelineChartLayer>

      {showAnnotation && annotations != null ? (
        <TimelineChartLayer isAnnotation ignoreClick>
          <TimelineChartBodyCtx.Provider value={{ chartBodyWidth: width }}>{annotations}</TimelineChartBodyCtx.Provider>
        </TimelineChartLayer>
      ) : null}

      {showTooltip ? <TimelineChartTooltip ref={tooltipRef} unit={unit} valueFormat={valueFormat} /> : null}
    </div>
  );
};

interface TimelineChartTaskHeaderProps {
  width: number;
  height: number;
  rowHeight: number;
  dataset: ITimelineChartRow[];
}

const TimelineChartTaskHeader: React.FC<TimelineChartTaskHeaderProps> = ({ width, height, rowHeight, dataset }) => {
  const rowLabels = dataset.map((data) => data.label);
  const style: CSSProperties = {
    width: width,
    height: `${rowLabels.length * rowHeight}px`,
    outline: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
    color: ThemingParameters.sapTitleColor
  };

  const itemStyle: CSSProperties = {
    width: '100%',
    height: `${rowHeight}px`,
    outline: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
    fontSize: '10px',
    lineHeight: `${rowHeight}px`,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  };

  return (
    <div style={{ height: height }}>
      <div style={style}>
        {rowLabels.map((label, index) => {
          return (
            <div key={index} style={itemStyle}>
              <span style={{ paddingLeft: '10px', paddingRight: '10px' }} title={`Item ${label}`}>
                {label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface TimelineChartDurationHeaderProps {
  width: number;
  height: number;
  isDiscrete: boolean;
  totalDuration: number;
  unit: string;
  durationHeaderLabel: string;
  columnLabels?: string[];
  start: number;
  scale: number;
  valueFormat?: (value: number) => string;
}

const TimelineChartDurationHeader: React.FC<TimelineChartDurationHeaderProps> = ({
  width,
  height,
  isDiscrete,
  totalDuration,
  columnLabels,
  start,
  scale,
  valueFormat
}) => {
  const tickRef = useRef<HTMLCanvasElement>();

  const style: CSSProperties = {
    width: width,
    height: height,
    outline: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
    color: ThemingParameters.sapTitleColor
  };

  const halfHeaderHeight = 0.5 * height;
  let labelArray: string[];
  if (isDiscrete) {
    labelArray = columnLabels ? columnLabels : Array.from(Array(totalDuration).keys()).map((num) => `${num + start}`);
  }

  useEffect(() => {
    if (tickRef.current != null) {
      const canvas = tickRef.current;
      canvas.width = canvas.getBoundingClientRect().width;
      canvas.height = canvas.getBoundingClientRect().height;

      const ctx = canvas.getContext('2d');

      const width = canvas.width;
      const height = canvas.height;
      const tickLength = 5;
      const spacing = 2;

      ctx.lineWidth = 4;
      const textColor = getComputedStyle(document.documentElement).getPropertyValue('--sapTextColor');
      const lineColor = getComputedStyle(document.documentElement).getPropertyValue('--sapList_BorderColor');
      ctx.strokeStyle = lineColor;
      ctx.fillStyle = textColor;
      ctx.moveTo(0, height);
      ctx.lineTo(0, height - tickLength);
      ctx.font = '8px Helvetica';
      ctx.textBaseline = 'bottom';
      const startText = valueFormat != null ? valueFormat(start) : start.toString();
      ctx.fillText(startText, spacing, height - tickLength - spacing);

      ctx.moveTo(width, height);
      ctx.lineTo(width, height - tickLength);
      const endText = valueFormat != null ? valueFormat(totalDuration + start) : (totalDuration + start).toString();
      const endMsr = ctx.measureText(endText);
      ctx.fillText(endText, width - endMsr.width - spacing, height - tickLength - spacing);
      ctx.stroke();

      ctx.beginPath();
      ctx.lineWidth = 2;
      const segments = Math.floor(5 * scale);
      for (let i = 1; i < segments; i++) {
        const xPos = (width / segments) * i;
        ctx.moveTo(xPos, height);
        ctx.lineTo(xPos, height - tickLength);
        const val = (totalDuration / segments) * i + start;
        const text = valueFormat != null ? valueFormat(val) : val.toString();
        const msr = ctx.measureText(text);
        ctx.fillText(text, xPos - msr.width / spacing, height - tickLength - spacing);
      }

      ctx.stroke();
    }
  }, [width]);

  return (
    <div style={style}>
      <div
        style={{
          height: `${halfHeaderHeight}px`,
          textAlign: 'center',
          borderBottom: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
          fontSize: '13px',
          lineHeight: `${halfHeaderHeight}px`
        }}
      ></div>
      {isDiscrete ? (
        <div
          style={{
            height: `${halfHeaderHeight}px`,
            fontSize: '10px',
            display: 'grid',
            gridTemplateColumns: `repeat(${totalDuration}, 1fr)`,
            textAlign: 'center',
            lineHeight: `${halfHeaderHeight}px`
          }}
        >
          {labelArray.map((label, index) => {
            return (
              <span
                key={index}
                style={{ outline: `0.5px solid ${ThemingParameters.sapList_BorderColor}` }}
                title={`${label}`}
              >
                {label}
              </span>
            );
          })}
        </div>
      ) : (
        <canvas
          ref={tickRef}
          style={{ height: `${halfHeaderHeight}px`, width: '100%' }}
          width={width}
          height={halfHeaderHeight}
        ></canvas>
      )}
    </div>
  );
};

interface TimelineChartHeaderLabelsProps {
  width: number;
  height: number;
  activitiesTitle: string;
}

const TimelineChartHeaderLabels: React.FC<TimelineChartHeaderLabelsProps> = ({ width, height, activitiesTitle }) => {
  const style: CSSProperties = {
    width: width,
    height: height,
    outline: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
    color: ThemingParameters.sapTitleColor
  };
  return (
    <div style={style}>
      <div style={{ height: '50%' }}></div>
      <div style={{ height: '50%', textAlign: 'center', fontSize: '13px' }}>{activitiesTitle}</div>
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

export { TimelineChartBody, TimelineChartDurationHeader, TimelineChartHeaderLabels, TimelineChartTaskHeader };
