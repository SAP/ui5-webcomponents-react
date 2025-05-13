import { enrichEventWithDetails } from '@ui5/webcomponents-react-base';
import { useCallback } from 'react';

export const useLegendItemClick = (handler, dataKeyExtractor?) => {
  return useCallback(
    (payload, index, event) => {
      if (typeof handler === 'function') {
        const dataKeyExtractorInternal = typeof dataKeyExtractor === 'function' ? dataKeyExtractor : (e?) => e?.dataKey;
        handler(
          enrichEventWithDetails(event, {
            dataKey: dataKeyExtractorInternal(payload),
            value: payload.value,
            chartType: payload.type,
            color: payload.color,
            payload: payload.payload,
            index,
          }),
        );
      }
    },
    [handler, dataKeyExtractor],
  );
};
