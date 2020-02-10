import { CSSProperties } from 'react';

export interface ComposedLineProps {
  dataKey: string;
  color?: string;
  colors?: Array<CSSProperties['color']>;
  type?: string;
  stroke?: string;
  strokeWidth?: number;
  dataPointClickHandler?: (object) => void;
}
