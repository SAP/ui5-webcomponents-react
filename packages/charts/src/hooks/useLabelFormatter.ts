import { useCallback } from 'react';
import type { TooltipProps } from 'recharts';
import type { NameType, TooltipLabelFormatter, ValueType } from '../interfaces/index.js';

export const useLabelFormatter = (formatter: TooltipLabelFormatter) => {
  return useCallback<TooltipLabelFormatter>(
    (label: TooltipProps<ValueType, NameType>['label'], payload) => {
      if (typeof formatter === 'function') {
        return formatter(label, payload);
      }
      return label;
    },
    [formatter],
  );
};
