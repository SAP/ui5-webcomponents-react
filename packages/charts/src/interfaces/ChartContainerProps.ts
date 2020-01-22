import { ComponentType } from 'react';

export interface ChartContainerProps {
  width: string;
  height: string;
  loading?: boolean;
  dataset?: Array<Object>;
}
