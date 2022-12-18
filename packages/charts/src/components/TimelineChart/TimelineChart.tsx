import { ThemingParameters } from '@ui5/webcomponents-react-base';
import _ from 'lodash';
import React, { CSSProperties, ReactNode, useEffect, useRef, useState } from 'react';
import {
  TimelineChartBody,
  TimelineChartDurationHeader,
  TimelineChartHeaderLabels,
  TimelineChartTaskHeader
} from './TimelineChartParts';
import { ITimelineChartRow } from './TimelineChartTypes';
import './timelinestyle.css';

interface TimelineChartProps {
  /**
   * The data is an array of objects that is displayed on the chart.
   */
  dataset: ITimelineChartRow[];

  /**
   * The total duration of the timeline.
   */
  totalDuration: number;

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
   * Toggles the visibility of the relations of the task items in the chart.
   * @default false
   */
  showRelationship?: boolean;

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
   * The label for the columns if the chart is separated into
   * discrete columns based on if `isDiscrete` is true. If set,
   * the lenght of this array must be equal to the `totalDuration`.
   */
  columnLabels?: string[];

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
 * Gantt charts or any other timeline-based visualizations.
 */
const TimelineChart: React.FC<TimelineChartProps> = ({
  dataset,
  totalDuration,
  width,
  rowHeight,
  isDiscrete,
  annotations,
  showAnnotation,
  showRelationship,
  showTooltip,
  unit,
  activitiesTitle,
  durationTitle,
  columnLabels,
  start,
  valueFormat
}) => {
  const DEFAULT_WIDTH = 'auto';
  const TASK_LABEL_WIDTH = 150;
  const DURATION_LABEL_HEIGHT = 50;
  const DEFAULT_ROW_HEIGHT = 25;

  rowHeight = rowHeight ?? DEFAULT_ROW_HEIGHT;
  isDiscrete = isDiscrete ?? false;
  showAnnotation = showAnnotation ?? false;
  showRelationship = showRelationship ?? false;
  showTooltip = showTooltip ?? true;
  unit = unit ?? '';
  activitiesTitle = activitiesTitle ?? 'Activities';
  durationTitle = durationTitle ?? 'Duration';
  start = start ?? 0;

  const numOfRows = dataset.length;
  const height = rowHeight * numOfRows + DURATION_LABEL_HEIGHT;

  const style: CSSProperties = {
    height: `${height}px`,
    width: `${width != null ? width + 'px' : DEFAULT_WIDTH}`,
    outline: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
    backgroundColor: ThemingParameters.sapBackgroundColor,
    display: 'grid',
    gridTemplateColumns: `${TASK_LABEL_WIDTH}px auto`,
    gap: 0
  };

  const ref = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    chartWidth: 0,
    chartHeight: 0
  });
  const [chartScale, setChartScale] = useState(1);
  const [isScrollVisible, setScrollVisible] = useState(false);

  useEffect(() => {
    const ro = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
          chartWidth: entry.contentRect.width - TASK_LABEL_WIDTH,
          chartHeight: entry.contentRect.height - DURATION_LABEL_HEIGHT
        });
        setChartScale(1);
      });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  const scaleChartBody = (value: number) => setChartScale(value);

  const onMouseMove = () => {
    setScrollVisible(true);
  };

  const onMouseLeave = () => setScrollVisible(false);

  return (
    <div id="timeline-chart" ref={ref} style={style}>
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
        style={{
          width: dimensions.width - TASK_LABEL_WIDTH,
          height: height,
          overflowX: `${isScrollVisible ? 'auto' : 'hidden'}`,
          overflowY: 'hidden'
        }}
        onMouseMove={_.throttle(onMouseMove, 200, { trailing: false })}
        onMouseLeave={onMouseLeave}
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
          width={(dimensions.width - TASK_LABEL_WIDTH) * chartScale}
          height={DURATION_LABEL_HEIGHT}
          isDiscrete={isDiscrete}
          totalDuration={totalDuration}
          unit={unit}
          durationHeaderLabel={durationTitle}
          columnLabels={columnLabels}
          start={start}
          scale={chartScale}
          valueFormat={valueFormat}
        />
        <TimelineChartBody
          dataset={dataset}
          width={(dimensions.width - TASK_LABEL_WIDTH) * chartScale}
          height={height - DURATION_LABEL_HEIGHT}
          rowHeight={rowHeight}
          numOfItems={numOfRows}
          totalDuration={totalDuration}
          isDiscrete={isDiscrete}
          annotations={annotations}
          showAnnotation={showAnnotation}
          showRelationship={showRelationship}
          showTooltip={showTooltip}
          unit={unit}
          scaleChart={scaleChartBody}
          start={start}
          valueFormat={valueFormat}
        />
      </div>
    </div>
  );
};

export { TimelineChart };
