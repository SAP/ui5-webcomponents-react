import { Event } from '@ui5/webcomponents-react-base/lib/Event';
import { useCallback } from 'react';

export const useLegendItemClick = (handler, dataKeyExtractor = (e?) => e.dataKey) => {
  return useCallback(
    (payload, index, event) => {
      if (typeof handler === 'function') {
        handler(
          Event.of(null, event, {
            dataKey: dataKeyExtractor(payload),
            value: payload.value,
            chartType: payload.type,
            color: payload.color,
            payload: payload.payload,
            index
          })
        );
      }
    },
    [useLegendItemClick]
  );
};
