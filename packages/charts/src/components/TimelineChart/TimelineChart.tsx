import { ThemingParameters, throttle } from '@ui5/webcomponents-react-base';
import React, { CSSProperties, forwardRef, ReactNode, useEffect, useRef, useState } from 'react';
import { TimelineChartBody } from './chartbody/TimelineChartBody';
import { TimelineChartPlaceholder } from './Placeholder';
import { TimelineChartColumnLabel, TimelineChartRowTitle, TimelineChartRowLabels } from './TimelineChartHeaders';
import { ITimelineChartRow } from './types/TimelineChartTypes';
import {
  DEFAULT_ROW_HEIGHT,
  DEFAULT_WIDTH,
  COLUMN_HEADER_HEIGHT,
  ILLEGAL_CONNECTION_MESSAGE,
  INVALID_DISCRETE_LABELS_MESSAGE,
  MOUSE_CURSOR_AUTO,
  MOUSE_CURSOR_GRAB,
  MOUSE_CURSOR_GRABBING,
  ROW_TITLE_WIDTH
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
   */
  width?: CSSProperties['width'];

  /**
   * The height the row of the timeline.
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
   */
  showAnnotation?: boolean;

  /**
   * Toggles the visibility of the connections of the task and milestone
   * items in the chart.
   */
  showConnection?: boolean;

  /**
   * Toggles the visibility of the tooltip.
   */
  showTooltip?: boolean;

  /**
   * The unit of the duration of the timeline.
   */
  unit?: string;

  /**
   * The label for the activity axis.
   */
  rowTitle?: string;

  /**
   * The label for the title of the duration axis.
   */
  columnTitle?: string;

  /**
   * The label for the columns if the chart is separated into discrete columns
   * based on if `isDiscrete` is true. If set, the lenght of this array
   * <strong>must</strong> be equal to the `totalDuration`. If not set, an
   * array of numbers with size equal to the `totalDuration` and with values
   * starting from the value __start__ prop of the `TimelineChart` will be used.
   */
  discreteLabels?: string[];

  /**
   * The starting value of the timeline duration.
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
const TimelineChart = forwardRef<HTMLDivElement, TimelineChartProps>(
  (
    {
      dataset,
      totalDuration = 10,
      width = DEFAULT_WIDTH,
      rowHeight = DEFAULT_ROW_HEIGHT,
      isDiscrete,
      annotations,
      showAnnotation,
      showConnection,
      showTooltip,
      unit = '',
      rowTitle = 'Activities',
      columnTitle = 'Duration',
      discreteLabels,
      start = 0,
      valueFormat = (x: number) => x.toFixed(1)
    }: TimelineChartProps,
    fRef
  ) => {
    if (!dataset || dataset?.length === 0) {
      return <TimelineChartPlaceholder />;
    }

    const numOfRows = dataset.length;
    const height = rowHeight * numOfRows + COLUMN_HEADER_HEIGHT;

    const style: CSSProperties = {
      height: `${height}px`,
      width: width,
      outline: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
      backgroundColor: ThemingParameters.sapBaseColor,
      display: 'grid',
      gridTemplateColumns: `${ROW_TITLE_WIDTH}px auto`,
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
            chartWidth: entry.contentRect.width - ROW_TITLE_WIDTH,
            chartHeight: entry.contentRect.height - COLUMN_HEADER_HEIGHT
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

    const onMouseUp = () => {
      if (chartBodyScale > 1) setIsGrabbed(false);
    };

    const mouseMoveHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (isGrabbed) {
        const dx = e.clientX - mPos;
        // Make negative so that the scrolling can move in
        // same direction as the mouse
        bodyConRef.current.scrollBy({ left: -dx });
        setMPos(e.clientX);
      }
    };

    const onMouseMove = throttle(mouseMoveHandler, 200, { trailing: false });

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

    const unscaledBodyWidth = dimensions.width - ROW_TITLE_WIDTH;
    const bodyWidth = unscaledBodyWidth * chartBodyScale;

    return (
      <div ref={fRef}>
        <div className="timeline-chart" ref={ref} style={style}>
          <div style={{ width: ROW_TITLE_WIDTH, height: height }}>
            <TimelineChartRowTitle width={ROW_TITLE_WIDTH} height={COLUMN_HEADER_HEIGHT} rowTitle={rowTitle} />
            <TimelineChartRowLabels
              width={ROW_TITLE_WIDTH}
              height={height - COLUMN_HEADER_HEIGHT}
              rowHeight={rowHeight}
              dataset={dataset}
            />
          </div>
          <div
            className="timeline-chartbody-container"
            ref={bodyConRef}
            style={{
              width: unscaledBodyWidth,
              height: height,
              overflow: 'hidden',
              cursor: getCursor()
            }}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseMove={onMouseMove}
          >
            <div
              style={{
                position: 'absolute',
                width: unscaledBodyWidth,
                height: COLUMN_HEADER_HEIGHT / 2,
                borderBottom: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
                marginBottom: '-0.5px',
                textAlign: 'center',
                fontSize: '13px',
                lineHeight: `${COLUMN_HEADER_HEIGHT / 2}px`,
                color: ThemingParameters.sapTitleColor
              }}
            >
              {columnTitle} {unit != '' ? `(${unit})` : ''}
            </div>
            <TimelineChartColumnLabel
              width={bodyWidth}
              height={COLUMN_HEADER_HEIGHT}
              isDiscrete={isDiscrete}
              totalDuration={totalDuration}
              unit={unit}
              columnLabels={discreteLabels}
              start={start}
              unscaledWidth={unscaledBodyWidth}
              valueFormat={valueFormat}
            />
            <TimelineChartBody
              dataset={dataset}
              width={bodyWidth}
              height={height - COLUMN_HEADER_HEIGHT}
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
              unscaledWidth={unscaledBodyWidth}
            />
          </div>
        </div>
      </div>
    );
  }
);

TimelineChart.displayName = 'TimelineChart';

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
