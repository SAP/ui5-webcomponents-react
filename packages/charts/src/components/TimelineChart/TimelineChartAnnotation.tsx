import React, { CSSProperties } from 'react';

interface TimelineChartAnnotationProps {
  /**
   * The width of the annotation.
   * @default '100%'
   */
  width?: string;

  /**
   * The height of the annotation. Preferably this should be the same height as the
   * rowHeight of the chart. If not set, the rowHeight is used.
   */
  height?: string;

  /**
   * The rowIndex the annotation should be applied to.
   */
  rowIndex: number;

  /**
   * The row height of the chart. This should **always** be set to the same value as
   * the rowHeight of the chart. If not set, the default row height of the chart is
   * used.
   * @default 25
   */
  rowHeight?: number;

  /**
   * The diagram, symbol or illustration that should be in the annotation. It is
   * advised to use the HTML Canvas for drawing due to performance reasons. And
   * it is also better to draw all the annotations on one row in the same figure.
   */
  figure: JSX.Element;
}

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
    width: width != null ? width : '100%',
    height: height != null ? height : rowHeight,
    position: 'relative',
    top: `${rowIndex * rowHeight}px`
  };

  return (
    <div id="zzz" style={style}>
      {figure}
    </div>
  );
};

export default TimelineChartAnnotation;
