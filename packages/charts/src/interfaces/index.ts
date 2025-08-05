import type { TooltipProps } from 'recharts';

export type TooltipLabelFormatter = TooltipProps<
  number | string | Array<number | string>,
  number | string
>['labelFormatter'];

export type ValueType = number | string | Array<number | string>;
export type NameType = number | string;
