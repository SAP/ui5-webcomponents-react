import { CSSProperties } from 'react';

export interface RechartBaseProps {
  labelKey?: string;
  width?: string;
  height?: string;
  dataset: Array<Object>;
  loading?: boolean;
  noLegend?: boolean;
  colors?: Array<CSSProperties['color']>;
  valueAxisFormatter?: (value: any, currentDataset?: object, currentContext?: object) => string | number;
  categoryAxisFormatter?: (value: any, currentDataset?: object, currentContext?: object) => string | number;
}
