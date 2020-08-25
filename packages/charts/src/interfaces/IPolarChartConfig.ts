import { CSSProperties } from 'react';

export interface IPolarChartConfig {
  paddingAngle?: number;

  innerRadius?: string;
  outerRadius?: string;

  polarGridType?: string;

  tooltipItemStyle?: CSSProperties;
  tooltipLabelStyle?: CSSProperties;

  activeSegment?: number;
  showActiveSegmentDataLabel?: boolean;
}
