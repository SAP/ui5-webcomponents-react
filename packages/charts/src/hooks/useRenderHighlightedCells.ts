import { getValueByDataKey } from 'recharts/lib/util/ChartUtils';

export const renderHighlightedElements = (
  element: Record<string, any>,
  data: Record<string, any>,
  index: number
): string => {
  return (
    element.highlightColor?.(getValueByDataKey(data, element.accessor), element, data) ??
    element.color ??
    `var(--sapChart_OrderedColor_${(index % 11) + 1})`
  );
};
