import { useCallback } from 'react';
import type { TooltipLabelFormatter } from '../interfaces/index.js';

export const useLabelFormatter = (formatter: TooltipLabelFormatter) => {
  return useCallback<TooltipLabelFormatter>(
    (label: string | number, payload) => {
      if (typeof formatter === 'function') {
        return formatter(label, payload);
      }
      return label;
    },
    [formatter],
  );
};
