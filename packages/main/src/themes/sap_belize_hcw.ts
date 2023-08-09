import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { CustomVariables } from './CustomVariables.js';

export const sapBelizeHcwParameters: Partial<Record<CustomVariables, string | number>> = {
  [CustomVariables.ActionSheetTopBorderRadius]: ThemingParameters.sapElement_BorderCornerRadius,
  [CustomVariables.ActionSheetBoxShadow]: ThemingParameters.sapContent_HeaderShadow,
  [CustomVariables.ScrollbarBorder]: '0.0625rem solid #585858',
  [CustomVariables.ScrollbarBorderRadius]: 0
};
