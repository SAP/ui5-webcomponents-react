import { enrichEventWithDetails } from '@ui5/webcomponents-react-base';
import type { MutableRefObject } from 'react';
import { useCallback } from 'react';
import type { CategoricalChartFunc } from 'recharts/types/chart/types.js';
import type { ActivePayload, IChartBaseProps } from '../interfaces/IChartBaseProps.js';
export const useOnClickInternal = (
  onClick: IChartBaseProps['onClick'],
  dataset: IChartBaseProps['dataset'],
  activePayloadsRef: MutableRefObject<ActivePayload[]>,
): CategoricalChartFunc => {
  //todo: deprecate payload & activePayloads?
  return useCallback(
    (nextState, event) => {
      if (typeof onClick === 'function') {
        const payload = nextState.activeIndex != null ? dataset?.[nextState.activeIndex] : undefined;
        const activePayloads = activePayloadsRef.current.map((item) => ({
          ...item,
          payload,
          value: item.dataKey ? payload?.[item.dataKey] : undefined,
        }));
        console.log('click enriched');
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

//bar, bullet, column, withTrend, composed, donut, line, pie, radial, scatter
//activeCoordinate
// :
// {x: 746, y: 243.2412109375}
// activeDataKey
// :
// undefined
// activeIndex
// :
// "8"
// activeLabel
// :
// "September"
// activeTooltipIndex
// :
// "8"
// isTooltipActive
// :
// true
