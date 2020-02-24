import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';
import { ComponentType } from 'react';

export interface ChartContainerProps extends CommonProps {
  width: string;
  height?: string | number;
  loading?: boolean;
  dataset?: Object[];
}
