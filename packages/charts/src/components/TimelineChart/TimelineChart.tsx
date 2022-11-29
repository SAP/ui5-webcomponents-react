import { ThemingParameters } from '@ui5/webcomponents-react-base';
import React, { createContext, CSSProperties, useEffect, useRef, useState } from 'react';
import {
  TimelineChartBody,
  TimelineChartDurationHeader,
  TimelineChartHeaderLabels,
  TimelineChartTaskHeader
} from './TimelineChartParts';

export interface IDimensionCtx {
  width: number;
  height: number;
  chartWidth: number;
  chartHeight: number;
}

export const TimelineChartDimensionCtx = createContext<IDimensionCtx>({
  width: 0,
  height: 0,
  chartWidth: 0,
  chartHeight: 0
});

interface TimelineChartProps {
  height?: number;
  width?: number;
}

/**
 * A `TimelineChart` is a data visualization chart that can be used to represent
 * Gantt charts or any other timeline-based visualizations.
 */
const TimelineChart: React.FC<TimelineChartProps> = ({ height, width }) => {
  const DEFAULT_HEIGHT = 200;
  const DEFAULT_WIDTH = '100%';
  const TASK_LABEL_WIDTH = 150;
  const DURATION_LABEL_HEIGHT = 50;

  height = height != null ? height : DEFAULT_HEIGHT;

  const style: CSSProperties = {
    height: `${height}px`,
    width: `${width != null ? width + 'px' : DEFAULT_WIDTH}`,
    border: `0.5px solid ${ThemingParameters.sapList_BorderColor}`,
    backgroundColor: ThemingParameters.sapBackgroundColor,
    display: 'grid',
    gridTemplateColumns: `${TASK_LABEL_WIDTH}px auto`,
    gap: 0
  };

  const ref = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0, chartWidth: 0, chartHeight: 0 });

  useEffect(() => {
    const ro = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
          chartWidth: entry.contentRect.width - TASK_LABEL_WIDTH,
          chartHeight: entry.contentRect.height - DURATION_LABEL_HEIGHT
        });
      });
    });
    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={ref} style={style}>
      <TimelineChartDimensionCtx.Provider value={dimensions}>
        <div style={{ width: TASK_LABEL_WIDTH }}>
          <TimelineChartHeaderLabels width={TASK_LABEL_WIDTH} height={DURATION_LABEL_HEIGHT} />
          <TimelineChartTaskHeader width={TASK_LABEL_WIDTH} height={height - DURATION_LABEL_HEIGHT} />
        </div>
        <div>
          <TimelineChartDurationHeader width={width - TASK_LABEL_WIDTH} height={DURATION_LABEL_HEIGHT} />
          <TimelineChartBody width={width - TASK_LABEL_WIDTH} height={height - DURATION_LABEL_HEIGHT} />
        </div>
      </TimelineChartDimensionCtx.Provider>
    </div>
  );
};

export { TimelineChart };
