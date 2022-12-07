import { ThemingParameters } from '@ui5/webcomponents-react-base';
import React, {
  CSSProperties,
  forwardRef,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState
} from 'react';
import TimelineChartAnnotation from './TimelineChartAnnotation';
import TimeLineChartGrid from './TimeLineChartGrid';
import TimelineChartLayer from './TimelineChartLayer';
import TimelineChartRow from './TimelineChartRow';
import { ITimelineChartRow } from './TimelineChartTypes';
import TimelineChartConnections from './TimelineConnections';

const SCALE_FACTOR = 1.1;

interface TimelineChartBodyProps {
  dataset: ITimelineChartRow[];
  width?: number;
  height?: number;
  rowHeight: number;
  numOfItems: number;
  totalDuration: number;
  isDiscrete: boolean;
  totalDiscreteDuration?: number;
  annotations?: ReactNode | ReactNode[];
  showAnnotation?: boolean;
  showRelationship?: boolean;
  showTooltip?: boolean;
  unit: string;
  scaleChart: (x: number) => void;
}

const TimelineChartBody: React.FC<TimelineChartBodyProps> = ({
  dataset,
  width,
  //   height,
  rowHeight,
  numOfItems,
  totalDuration,
  isDiscrete,
  totalDiscreteDuration,
  annotations,
  showAnnotation,
  showRelationship,
  showTooltip,
  unit,
  scaleChart
}) => {
  const tooltipRef = useRef<TimelineTooltipHandle>();
  const bodyRef = useRef<HTMLDivElement>();
  const scaleRef = useRef(0);

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
      scaleRef.current++;
    } else {
      if (scaleRef.current > 0) scaleRef.current--;
    }
    scaleChart(Math.pow(SCALE_FACTOR, scaleRef.current));
  };

  return (
    <div id="yyy" ref={bodyRef} style={style}>
      <TimelineChartLayer ignoreClick>
        <TimeLineChartGrid
          isDiscrete={isDiscrete}
          numOfRows={numOfItems}
          numOfCols={totalDiscreteDuration}
          rowHeight={rowHeight}
        />
      </TimelineChartLayer>

      {showRelationship ? (
        <TimelineChartLayer ignoreClick>
          <TimelineChartConnections width={width} rowHeight={rowHeight} totalDuration={totalDuration} />
        </TimelineChartLayer>
      ) : null}

      <TimelineChartLayer ignoreClick>
        {dataset.map((data, index) => {
          return (
            <TimelineChartRow
              key={index}
              rowData={data}
              rowHeight={rowHeight}
              rowIndex={index}
              totalDuration={totalDuration}
              showTooltip={showTooltipOnHover}
              hideTooltip={hideTooltip}
            />
          );
        })}
      </TimelineChartLayer>

      {showAnnotation && annotations != null ? (
        <TimelineChartLayer isAnnotation ignoreClick>
          <TimelineChartAnnotation rowHeight={rowHeight} rowIndex={0} figure={<Figure />} />
        </TimelineChartLayer>
      ) : null}

      {showTooltip ? <TimelineChartTooltip ref={tooltipRef} unit={unit} /> : null}
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
  totalDiscreteDuration?: number;
  unit: string;
  durationHeaderLabel: string;
}

const TimelineChartDurationHeader: React.FC<TimelineChartDurationHeaderProps> = ({
  width,
  height,
  isDiscrete,
  totalDiscreteDuration,
  unit,
  durationHeaderLabel
}) => {
  const style: CSSProperties = {
    width: width,
    height: height,
    outline: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
    color: ThemingParameters.sapTitleColor
  };

  const halfHeaderHeight = 0.5 * height;

  return (
    <div style={style}>
      <div
        style={{
          height: `${isDiscrete ? halfHeaderHeight : height}px`,
          textAlign: 'center',
          borderBottom: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
          fontSize: '13px',
          lineHeight: `${isDiscrete ? halfHeaderHeight : height}px`
        }}
      >
        {durationHeaderLabel} {unit != '' ? `(${unit})` : ''}
      </div>
      {isDiscrete ? (
        <div
          style={{
            height: `${halfHeaderHeight}px`,
            fontSize: '10px',
            display: 'grid',
            gridTemplateColumns: `repeat(${totalDiscreteDuration}, 1fr)`,
            textAlign: 'center',
            lineHeight: `${halfHeaderHeight}px`
          }}
        >
          {Array.from(Array(totalDiscreteDuration).keys()).map((num, index) => {
            return (
              <span
                key={index}
                style={{ outline: `0.5px solid ${ThemingParameters.sapList_BorderColor}` }}
                title={`${num}`}
              >
                {num}
              </span>
            );
          })}
        </div>
      ) : null}
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
}

const TimelineChartTooltip = forwardRef<TimelineTooltipHandle, TimelineTooltipChartProps>(function TimelineChartTooltip(
  { unit },
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
            Start: {state.startTime}
            {unit}
          </span>
          {state.isMilestone ? null : (
            <span>
              Duration: {state.duration}
              {unit}
            </span>
          )}
          <span>
            End: {state.startTime + state.duration}
            {unit}
          </span>
        </span>
      ) : null}
    </div>
  );
});

// A custom figure for testing out the TimelineChartAnnotation.
const Figure = () => {
  const ref = useRef<HTMLCanvasElement>();
  useLayoutEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    canvas.width = ref.current.getBoundingClientRect().width;
    canvas.height = ref.current.getBoundingClientRect().height;
    const width = canvas.width;
    const height = canvas.height;

    const interval = (5 / 100) * width;
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'red';
    ctx.clearRect(0, 0, width, height);
    for (let index = 1; index < 5; index++) {
      const offset = index * interval;
      ctx.moveTo(offset, 0);
      ctx.lineTo(offset, height);
      ctx.moveTo(offset, 0);
      ctx.lineTo(offset - 4, height / 5);
      ctx.moveTo(offset, 0);
      ctx.lineTo(offset + 4, height / 5);
    }
    ctx.stroke();
  });

  return <canvas ref={ref} style={{ width: '100%', height: '100%' }}></canvas>;
};

export { TimelineChartBody, TimelineChartDurationHeader, TimelineChartHeaderLabels, TimelineChartTaskHeader };
