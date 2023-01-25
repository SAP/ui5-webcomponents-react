import React, { CSSProperties, forwardRef, ReactElement } from 'react';
import { DEFAULT_ROW_HEIGHT } from './util/constants';

interface TimelineChartAnnotationProps {
  /**
   * The width of the annotation. If not provided, it expands to fill
   * the timeline.
   */
  width?: CSSProperties['width'];

  /**
   * The height of the annotation. Preferably, this would be the same height as the
   * rowHeight of the chart. A different height could be set if the annotation
   * spans multiple rows. If not set, the __rowHeight__  specified for the
   * `TimelineChartAnnotation` is used.
   */
  height?: string;

  /**
   * The index of the row the annotation should be applied to. The top of the anotation is
   * aligned with the top of the row.
   */
  rowIndex?: number;

  /**
   * The row height of the chart. This should **always** be set to the same value as
   * the rowHeight of the chart in order for the top of the annotation to be aligned
   * with the top of the row the annotation is applied to. If not set, the default
   * __rowHeight__ of the `TimelineChart` is used.
   */
  rowHeight?: number;

  /**
   * The diagram, symbol or illustration that should be in the annotation. If one
   * is planning to do a lot of custom annotations on a row, it is probably
   * advised to use the HTML Canvas for drawing due to performance reasons. And
   * it is also better to draw all the annotations on one row in the same figure.
   */
  figure: JSX.Element;
}

/**
 * This is designed to be used for creating custom annotations, markers
 * or illustrations on the timeline of the chart.
 */
const TimelineChartAnnotation = forwardRef<HTMLDivElement, TimelineChartAnnotationProps>(
  ({ width = 'auto', height, rowIndex = 0, rowHeight = 25, figure }, ref): ReactElement => {
    rowHeight = rowHeight ?? DEFAULT_ROW_HEIGHT;
    rowIndex = rowIndex ?? 0;

    const style: CSSProperties = {
      width: width,
      height: height != null ? height : rowHeight,
      position: 'absolute',
      top: `${rowIndex * rowHeight}px`
    };

    return (
      <div ref={ref} className="timeline-chart-annotation" style={style}>
        {figure}
      </div>
    );
  }
);

TimelineChartAnnotation.displayName = 'TimelineChartAnnotation';

export { TimelineChartAnnotation };
