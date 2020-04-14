import { CSSProperties } from 'react';

export interface ChartElement {
  color?: CSSProperties['color'];
  accessor: string;
  label?: string;
  formatter: (value: any) => string;
}
