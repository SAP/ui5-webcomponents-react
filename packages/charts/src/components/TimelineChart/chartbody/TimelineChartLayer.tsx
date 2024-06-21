import { useStylesheet } from '@ui5/webcomponents-react-base';
import type { ReactNode } from 'react';
import { classNames, styleData } from '../util/TimelineChart.module.css.js';

interface TimelineChartLayerProps {
  ignoreClick?: boolean;
  children?: ReactNode | ReactNode[];
  isAnnotation?: boolean;
  name?: string;
}

/**
 * The TimeLineChartLayer represents each layer of the chart rendering. This
 * is used to seperate the chart into different rendering concerns. One layer
 * can be used to render the grid lines and another can be used to render
 * annotations or tasks.
 */
const TimelineChartLayer = ({ ignoreClick = false, isAnnotation, children, name }: TimelineChartLayerProps) => {
  useStylesheet(styleData, TimelineChartLayer.displayName);
  const position = 'absolute';
  const pointerEvents = ignoreClick ? 'none' : 'auto';

  if (isAnnotation) {
    return (
      <div
        data-component-name={name}
        className={classNames.layer}
        style={{ position: position, pointerEvents: pointerEvents }}
      >
        {children}
      </div>
    );
  }
  return (
    <svg
      data-component-name={name}
      width="100%"
      height="100%"
      style={{ position: position, pointerEvents: pointerEvents }}
    >
      {children}
    </svg>
  );
};

TimelineChartLayer.displayName = 'TimelineChartLayer';

export { TimelineChartLayer };
