import { CommonProps } from '@ui5/webcomponents-react/interfaces/CommonProps';

export interface ChartContainerProps extends CommonProps {
  width: string;
  height?: string | number;
  loading?: boolean;
  dataset?: Record<string, any>[];
}
