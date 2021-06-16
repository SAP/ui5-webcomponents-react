import { useMemo } from 'react';
import { ICartesianChartConfig } from '../interfaces/ICartesianChartConfig';
import { IChartMeasure } from '../interfaces/IChartMeasure';

type LinePlacement = 'inside' | 'outside';

export const useRenderLineAbove = (
  lineChartPlacement: LinePlacement,
  measures: IChartMeasure[],
  chartConfig: ICartesianChartConfig,
  renderedLine: HTMLDivElement
) => {
  return useMemo(() => {
    if (lineChartPlacement === 'outside') {
      try {
        let secondAxisAbove = false;
        const newRechartsSurface =
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          Number(document.querySelector('g.recharts-line')?.getBBox().height) +
          Number(document.querySelector('svg.recharts-surface')?.getAttribute('height')) +
          20;
        document.querySelector('svg.recharts-surface')?.setAttribute('height', newRechartsSurface.toString());
        document.querySelector('svg.recharts-surface')?.childNodes.forEach((child) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          if (child.childNodes[0].id !== 'secondaryYAxis') {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            child.style.transform = `translate(0, ${
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              Number(document.querySelector('g.recharts-line')?.getBBox().height) / 2 + 20
            }px)`;
          } else {
            const direction =
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              measures?.find((measure) => measure.type === 'line').accessor === chartConfig.secondYAxis.dataKey
                ? '-'
                : '+';
            if (direction === '-') {
              secondAxisAbove = true;
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            child.style.transform = `translate(0, ${direction}${
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              Number(document.querySelector('g.recharts-line')?.getBBox().height) / 2 + 20
            }px)`;
          }
        });
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        document.querySelector('g.recharts-line').style.transform = `translate(0, -${
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          Number(document.querySelector('g.recharts-line')?.getBBox().height) / 2 +
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          Number(document.querySelector('g.recharts-cartesian-axis-ticks')?.getBBox().height) / 2
        }px`;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        document.querySelector('ul.recharts-default-legend').style.transform = `translate(0, ${
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          Number(document.querySelector('g.recharts-line')?.getBBox().height) + 30
        }px)`;
        return secondAxisAbove;
      } catch (err) {
        return false;
      }
    }
  }, [lineChartPlacement, measures, chartConfig, renderedLine]);
};
