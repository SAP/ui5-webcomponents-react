import { enrichEventWithDetails } from '@ui5/webcomponents-react-base';
import { useCallback } from 'react';

export const useOnClickInternal = (onClick) =>
  useCallback(
    (payload, event) => {
      if (typeof onClick === 'function') {
        onClick(
          enrichEventWithDetails(event, {
            payload: payload?.activePayload?.[0]?.payload,
            activePayloads: payload?.activePayload,
          }),
        );
      }
    },
    [onClick],
  );
