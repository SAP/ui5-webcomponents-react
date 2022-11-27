import { ThemingParameters } from '@ui5/webcomponents-react-base';
import React, { CSSProperties } from 'react';
import TimeLineChartGrid from './TimeLineChartGrid';
import TimelineChartLayer from './TimelineChartLayer';
import TimelineChartRow from './TimelineChartRow';

interface TimelineChartProps {
  height?: number;
}

/**
 * A `TimelineChart` is a data visualization chart that can be used to represent
 * Gantt charts or any other timeline-based visualizations.
 */
const TimelineChart: React.FC<TimelineChartProps> = (props) => {
  const DEFAULT_HEIGHT = 150;
  const height = props.height;

  const style: CSSProperties = {
    height: `${height != null ? height : DEFAULT_HEIGHT}px`,
    width: '100%',
    position: 'relative',
    border: `1px solid ${ThemingParameters.sapList_BorderColor}`
  };

  return (
    <div style={style}>
      <TimelineChartLayer>
        <TimeLineChartGrid isDiscrete={true} numOfRows={5} numOfCols={8} />
      </TimelineChartLayer>
      <TimelineChartLayer></TimelineChartLayer>
      <TimelineChartLayer>
        <TimelineChartRow height={20} yOffset={40}></TimelineChartRow>
      </TimelineChartLayer>
      <TimelineChartLayer></TimelineChartLayer>
    </div>
  );
};

export { TimelineChart };
