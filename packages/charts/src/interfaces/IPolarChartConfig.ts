import type { CSSProperties } from 'react';

export interface IPolarChartConfig {
  paddingAngle?: number;

  innerRadius?: string;
  outerRadius?: string;

  polarGridType?: string;

  tooltipItemStyle?: CSSProperties;
  tooltipLabelStyle?: CSSProperties;

  /**
   * Index of the segment where an additional outer border should be applied as highlight.
   */
  activeSegment?: number;
  /**
   * Flag whether the highlighted segment should display its data label.
   */
  showActiveSegmentDataLabel?: boolean;
}
