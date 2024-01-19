import type { CSSProperties } from 'react';

interface ComparisonLine {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  index?: number;
  strokeWidth?: number;
  fill?: CSSProperties['fill'];
  layout: 'vertical' | 'horizontal';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ComparisonLine = (props: ComparisonLine) => {
  const { x, y, width, height, index, fill, strokeWidth, layout } = props;

  const horizontalCalc = {
    x1: strokeWidth ? x + (width - strokeWidth) / 2 - 1 : x - 3,
    x2: strokeWidth ? x + strokeWidth + (width - strokeWidth) / 2 : x + width + 3
  };

  const verticalCalc = {
    y1: strokeWidth ? y + (height - strokeWidth) / 2 - 1 : y - 3,
    y2: strokeWidth ? y + strokeWidth + (height - strokeWidth) / 2 : y + height + 3
  };

  if (layout === 'horizontal') {
    return (
      <line
        key={`target-${index}`}
        x1={horizontalCalc.x1}
        x2={horizontalCalc.x2}
        y1={y}
        y2={y}
        stroke={fill}
        strokeWidth={3}
      />
    );
  }

  return (
    <line
      key={`target-${index}`}
      x1={x + width}
      x2={x + width}
      y1={verticalCalc.y1}
      y2={verticalCalc.y2}
      stroke={fill}
      strokeWidth={3}
    />
  );
};
