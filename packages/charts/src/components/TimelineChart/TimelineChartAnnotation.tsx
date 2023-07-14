import type { CommonProps } from '@ui5/webcomponents-react';
import type { CSSProperties } from 'react';
import React, { forwardRef } from 'react';
import { DEFAULT_ROW_HEIGHT } from './util/constants.js';
import { useStyles } from './util/styles.js';

interface TimelineChartAnnotationProps extends CommonProps {
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
   * The index of the row the annotation should be applied to. The top of the annotation is
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
const TimelineChartAnnotation = forwardRef<HTMLDivElement, TimelineChartAnnotationProps>((props, ref) => {
  const { width = 'auto', height, rowIndex = 0, rowHeight = DEFAULT_ROW_HEIGHT, figure, ...rest } = props;
  const classes = useStyles();

  const style: CSSProperties = {
    width: width,
    height: height != null ? height : rowHeight,
    insetBlockStart: `${rowIndex * rowHeight}px`
  };

  return (
    <div ref={ref} className={classes.annotation} {...rest} style={style} data-component-name="TimelineChartAnnotation">
      {figure}
    </div>
  );
});

TimelineChartAnnotation.displayName = 'TimelineChartAnnotation';

export { TimelineChartAnnotation };
