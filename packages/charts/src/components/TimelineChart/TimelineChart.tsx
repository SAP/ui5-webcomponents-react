import { ThemingParameters } from '@ui5/webcomponents-react-base';
import _ from 'lodash';
import React, { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';
import { TimelineChartBody } from './chartbody/TimelineChartBody';
import { TimelineChartPlaceholder } from './Placeholder';
import {
  TimelineChartDurationHeader,
  TimelineChartHeaderLabels,
  TimelineChartTaskHeader
} from './TimelineChartHeaders';
import { ITimelineChartRow } from './types/TimelineChartTypes';
import {
  DEFAULT_ROW_HEIGHT,
  DEFAULT_WIDTH,
  DURATION_LABEL_HEIGHT,
  ILLEGAL_CONNECTION_MESSAGE,
  INVALID_DISCRETE_LABELS_MESSAGE,
  MOUSE_CURSOR_AUTO,
  MOUSE_CURSOR_GRAB,
  MOUSE_CURSOR_GRABBING,
  TASK_LABEL_WIDTH
} from './util/constants';
import { IllegalConnectionError, InvalidDiscreteLabelError } from './util/error';

interface TimelineChartProps {
  /**
   * The data is an array of objects that is displayed on the chart.
   */
  dataset?: ITimelineChartRow[];

  /**
   * The total duration of the timeline.
   */
  totalDuration?: number;

  /**
   * The total width of the chart. If not supplied, the chart's
   * width expands to fill its conatainer.
   * @default auto
   */
  width?: number;

  /**
   * The height the row of the timeline.
   * @default 25
   */
  rowHeight?: number;

  /**
   * Whether the timeline is a continuous timeline or broken
   * into discrete sections.
   * @default false
   */
  isDiscrete?: boolean;

  /**
   * Defines the annonations to be applied on top on the chart.
   *
   * **Note:** Use the `TimelineChartAnnotation` component here.
   */
  annotations?: ReactNode | ReactNode[];

  /**
   * Toggles the visibility of the annotations applied to the chart.
   * @default false
   */
  showAnnotation?: boolean;

  /**
   * Toggles the visibility of the connections of the task and milestone
   * items in the chart.
   * @default false
   */
  showConnection?: boolean;

  /**
   * Toggles the visibility of the tooltip.
   * @default true
   */
  showTooltip?: boolean;

  /**
   * The unit of the duration of the timeline.
   */
  unit?: string;

  /**
   * The label for the activity axis.
   * @default Activity
   */
  activitiesTitle?: string;

  /**
   * The label for the title of the duration axis.
   * @default Duration
   */
  durationTitle?: string;

  /**
   * The label for the columns if the chart is separated into discrete columns
   * based on if `isDiscrete` is true. If set, the lenght of this array
   * <strong>must</strong> be equal to the `totalDuration`. If not set, an
   * array of numbers with size equal to the `totalDuration` and with values
   * starting from the value __start__ prop of the `TimelineChart` will be used.
   */
  discreteLabels?: string[];

  /**
   * The starting value of the timeline.
   * @default 0
   */
  start?: number;

  /**
   * A callback function that is applied to each value in the tick and tootltip
   * to format how it is displayed.
   */
  valueFormat?: (value: number) => string;
}

/**
 * A `TimelineChart` is a data visualization chart that can be used to represent
 * Gantt charts or any other timeline-based visualizations. The component has a
 * rich set of various properties that allows the user to:
 * * Zoom the chart body to see the visualizations clearer using the mouse wheel.
 * * Pan the zoomed chart horizonatally by holding down the left click button.
 * * Add annotations to highlight or illustrate different points on the timeline.
 * * Use annotations to create custom Timeline visualizations.
 * * Choose whether the timeline is discrete or continous.
 * * Show relationships between different items on the timeline using different
 * connections.
 */
const TimelineChart: React.FC<TimelineChartProps> = ({
  dataset,
  totalDuration,
  width,
  rowHeight,
  isDiscrete,
  annotations,
  showAnnotation,
  showConnection,
  showTooltip,
  unit,
  activitiesTitle,
  durationTitle,
  discreteLabels,
  start,
  valueFormat
}) => {
  if (dataset == null) {
    return <TimelineChartPlaceholder />;
  }

  rowHeight = rowHeight ?? DEFAULT_ROW_HEIGHT;
  isDiscrete = isDiscrete ?? false;
  showAnnotation = showAnnotation ?? false;
  showConnection = showConnection ?? false;
  showTooltip = showTooltip ?? true;
  unit = unit ?? '';
  activitiesTitle = activitiesTitle ?? 'Activities';
  durationTitle = durationTitle ?? 'Duration';
  start = start ?? 0;
  totalDuration = totalDuration ?? 10;

  const numOfRows = dataset.length;
  const height = rowHeight * numOfRows + DURATION_LABEL_HEIGHT;

  const style: CSSProperties = {
    height: `${height}px`,
    width: `${width != null ? width + 'px' : DEFAULT_WIDTH}`,
    outline: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
    backgroundColor: ThemingParameters.sapBaseColor,
    display: 'grid',
    gridTemplateColumns: `${TASK_LABEL_WIDTH}px auto`,
    gap: 0
  };

  const ref = useRef(null);
  const bodyConRef = useRef<HTMLDivElement>();
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    chartWidth: 0,
    chartHeight: 0
  });
  const [chartBodyScale, setChartBodyScale] = useState(1);
  const [isGrabbed, setIsGrabbed] = useState(false);
  const [mPos, setMPos] = useState(0);

  useEffect(() => {
    const ro = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
          chartWidth: entry.contentRect.width - TASK_LABEL_WIDTH,
          chartHeight: entry.contentRect.height - DURATION_LABEL_HEIGHT
        });
        setChartBodyScale(1);
      });
    });
    if (ref.current != null) ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  const scaleChartBody = (value: number) => setChartBodyScale(value);

  const resetScroll = () => {
    bodyConRef.current.scrollTo({ left: 0 });
  };

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (chartBodyScale > 1) {
      setIsGrabbed(true);
      setMPos(e.clientX);
    }
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isGrabbed) {
      const dx = e.clientX - mPos;
      // Make negative so that the scrolling can move in
      // same direction as the mouse
      bodyConRef.current.scrollBy({ left: -dx });
      setMPos(e.clientX);
    }
  };

  const getCursor = (): string => {
    if (isGrabbed) return MOUSE_CURSOR_GRABBING;
    if (chartBodyScale > 1) return MOUSE_CURSOR_GRAB;
    return MOUSE_CURSOR_AUTO;
  };

  if (isDiscrete && discreteLabels != null && discreteLabels.length !== totalDuration) {
    throw new InvalidDiscreteLabelError(INVALID_DISCRETE_LABELS_MESSAGE);
  }

  if (showConnection && dataset != null && dataset.length !== 0) {
    validateConnections(dataset);
  }

  const bodyWidth = (dimensions.width - TASK_LABEL_WIDTH) * chartBodyScale;

  return (
    <div className="timeline-chart" ref={ref} style={style}>
      <div style={{ width: TASK_LABEL_WIDTH, height: height }}>
        <TimelineChartHeaderLabels
          width={TASK_LABEL_WIDTH}
          height={DURATION_LABEL_HEIGHT}
          activitiesTitle={activitiesTitle}
        />
        <TimelineChartTaskHeader
          width={TASK_LABEL_WIDTH}
          height={height - DURATION_LABEL_HEIGHT}
          rowHeight={rowHeight}
          dataset={dataset}
        />
      </div>
      <div
        className="timeline-chartbody-container"
        ref={bodyConRef}
        style={{
          width: dimensions.width - TASK_LABEL_WIDTH,
          height: height,
          overflowX: 'hidden',
          overflowY: 'hidden',
          cursor: getCursor()
        }}
        onMouseDown={(e) => onMouseDown(e)}
        onMouseUp={() => {
          if (chartBodyScale > 1) setIsGrabbed(false);
        }}
        onMouseMove={_.throttle(onMouseMove, 200, { trailing: false })}
      >
        <div
          style={{
            position: 'absolute',
            width: dimensions.width - TASK_LABEL_WIDTH,
            height: DURATION_LABEL_HEIGHT / 2,
            borderBottom: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
            marginBottom: '-0.5px',
            textAlign: 'center',
            fontSize: '13px',
            lineHeight: `${DURATION_LABEL_HEIGHT / 2}px`,
            color: ThemingParameters.sapTitleColor
          }}
        >
          {durationTitle} {unit != '' ? `(${unit})` : ''}
        </div>
        <TimelineChartDurationHeader
          width={bodyWidth}
          height={DURATION_LABEL_HEIGHT}
          isDiscrete={isDiscrete}
          totalDuration={totalDuration}
          unit={unit}
          durationHeaderLabel={durationTitle}
          columnLabels={discreteLabels}
          start={start}
          scale={chartBodyScale}
          valueFormat={valueFormat}
        />
        <TimelineChartBody
          dataset={dataset}
          width={bodyWidth}
          height={height - DURATION_LABEL_HEIGHT}
          rowHeight={rowHeight}
          numOfItems={numOfRows}
          totalDuration={totalDuration}
          isDiscrete={isDiscrete}
          annotations={annotations}
          showAnnotation={showAnnotation}
          showConnection={showConnection}
          showTooltip={showTooltip}
          unit={unit}
          onScale={scaleChartBody}
          start={start}
          valueFormat={valueFormat}
          resetScroll={resetScroll}
        />
      </div>
    </div>
  );
};

const validateConnections = (dataset: ITimelineChartRow[]) => {
  for (const row of dataset) {
    if (row.tasks != null) {
      for (const item of row.tasks) {
        if (item.connections != null && item.connections.length !== 0 && item.id == null) {
          throw new IllegalConnectionError(ILLEGAL_CONNECTION_MESSAGE);
        }
      }
    }

    if (row.milestones != null) {
      for (const item of row.milestones) {
        if (item.connections != null && item.connections.length !== 0 && item.id == null) {
          throw new IllegalConnectionError(ILLEGAL_CONNECTION_MESSAGE);
        }
      }
    }
  }
};

export { TimelineChart };
