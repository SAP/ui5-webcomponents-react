import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { CustomVariables } from './CustomVariables.js';

export const sapFiori3DarkParameters: Partial<Record<CustomVariables, string>> = {
  [CustomVariables.ActionSheetTopBorderRadius]: ThemingParameters.sapElement_BorderCornerRadius,
  [CustomVariables.ActionSheetBoxShadow]: ThemingParameters.sapContent_HeaderShadow,
  [CustomVariables.SplitterBarBorderFocus]: `.0625rem dotted ${ThemingParameters.sapContent_FocusColor}`,
  [CustomVariables.SplitterBarBorderFix]: `.0625rem dotted ${ThemingParameters.sapContent_FocusColor}`
};
