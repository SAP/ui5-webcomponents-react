import { ThemingParameters } from '@ui5/webcomponents-react-base';
import React, { createContext, CSSProperties, useEffect, useRef, useState } from 'react';
import TimeLineChartGrid from './TimeLineChartGrid';
import TimelineChartLayer from './TimelineChartLayer';
import TimelineChartRow from './TimelineChartRow';
import TimelineDepsContainer from './TimelineDependency';

interface TimelineChartProps {
  height?: number;
}

export const TimelineChartDimensionCtx = createContext({ width: 0, height: 0 });

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

  const ref = useRef(null);
  const [rect, setRect] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const ro = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setRect({ width: entry.contentRect.width, height: entry.contentRect.height });
      });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return (
    <div style={style} ref={ref}>
      <TimelineChartDimensionCtx.Provider value={rect}>
        <TimelineChartLayer>
          <TimeLineChartGrid isDiscrete={true} numOfRows={5} numOfCols={8} />
        </TimelineChartLayer>
        <TimelineChartLayer>
          <TimelineDepsContainer />
        </TimelineChartLayer>
        <TimelineChartLayer>
          <TimelineChartRow height={20} yOffset={40}></TimelineChartRow>
        </TimelineChartLayer>
        <TimelineChartLayer></TimelineChartLayer>
      </TimelineChartDimensionCtx.Provider>
    </div>
  );
};

export { TimelineChart };
