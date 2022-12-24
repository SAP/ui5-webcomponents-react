import React, { CSSProperties } from 'react';

interface TimelineChartAnnotationProps {
  /**
   * The width of the annotation. If not provided it expands to fill
   * the timeline.
   */
  width?: number;

  /**
   * The height of the annotation. Preferably this should be the same height as the
   * rowHeight of the chart. If not set, the default rowHeight is used.
   */
  height?: string;

  /**
   * The rowIndex the annotation should be applied to.
   */
  rowIndex: number;

  /**
   * The row height of the chart. This should **always** be set to the same value as
   * the rowHeight of the chart in order for the top of the annotation to be aligned
   * with the top of the row. If not set, the default row height of the chart is used.
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
const TimelineChartAnnotation: React.FC<TimelineChartAnnotationProps> = ({
  width,
  height,
  rowIndex,
  rowHeight,
  figure
}) => {
  const DEFAULT_ROW_HEIGHT = 25;
  rowHeight = rowHeight ?? DEFAULT_ROW_HEIGHT;

  const style: CSSProperties = {
    width: width != null ? `${width}px` : 'auto',
    height: height != null ? height : rowHeight,
    position: 'absolute',
    top: `${rowIndex * rowHeight}px`
  };

  return (
    <div className="timeline-chart-annotation" style={style}>
      {figure}
    </div>
  );
};

export default TimelineChartAnnotation;
