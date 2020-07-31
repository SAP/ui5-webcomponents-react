import { ThemingParameters } from '@ui5/webcomponents-react-base/lib/ThemingParameters';

export const tickLineConfig = { stroke: 'transparent' };
export const tooltipContentStyle = { backgroundColor: ThemingParameters.sapBackgroundColor };
export const tooltipFillOpacity: any = { fillOpacity: 0.3 }; // we need type any due to recharts typing error
export const xAxisPadding = { left: 25, right: 25 };
