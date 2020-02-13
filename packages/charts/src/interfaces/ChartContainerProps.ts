import { ComponentType } from 'react';

export interface ChartContainerProps {
  width: string;
  height?: string | number;
  loading?: boolean;
  dataset?: Array<Object>;
}
