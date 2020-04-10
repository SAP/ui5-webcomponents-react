import { CSSProperties } from 'react';

export interface ChartElement {
  color?: CSSProperties['color'];
  accessor: string;
  label?: string;
  labelFormatter: (value: any) => string;
  valueFormatter: (value: any) => string;
}
