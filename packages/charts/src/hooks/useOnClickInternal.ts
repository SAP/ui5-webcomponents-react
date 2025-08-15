import { enrichEventWithDetails } from '@ui5/webcomponents-react-base';
import type { MutableRefObject } from 'react';
import { useCallback } from 'react';
import type { CategoricalChartFunc } from 'recharts/types/chart/types.js';
import type { ActivePayload, IChartBaseProps } from '../interfaces/IChartBaseProps.js';
export const useOnClickInternal = (
  onClick: IChartBaseProps['onClick'],
  dataset: IChartBaseProps['dataset'],
  activePayloadsRef: MutableRefObject<ActivePayload[]> | MutableRefObject<ActivePayload>,
): CategoricalChartFunc => {
  //todo: deprecate payload & activePayloads?
  return useCallback(
    (nextState, event) => {
      if (typeof onClick === 'function') {
        const payload = nextState.activeIndex != null ? dataset?.[nextState.activeIndex] : undefined;
        const activePayloads = (
          Array.isArray(activePayloadsRef.current) ? activePayloadsRef.current : [activePayloadsRef.current]
        ).map((item) => ({
          ...item,
          payload,
          value: item.dataKey ? payload?.[item.dataKey] : undefined,
        }));
        onClick(
          //todo: check ts-error
          // @ts-expect-error: check
          enrichEventWithDetails(event, {
            payload,
            activePayloads,
            //todo: add nextState?
            ...nextState,
          }),
        );
      }
    },
    [onClick, dataset, activePayloadsRef],
  );
};

//todo: integrate LineChart, RadarChart click here as well?
