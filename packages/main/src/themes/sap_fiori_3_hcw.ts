import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { CustomVariables } from './CustomVariables.js';

export const sapFioriHcwParameters: Partial<Record<CustomVariables, string>> = {
  [CustomVariables.ActionSheetTopBorderRadius]: ThemingParameters.sapElement_BorderCornerRadius,
  [CustomVariables.ActionSheetBoxShadow]: ThemingParameters.sapContent_HeaderShadow,
  [CustomVariables.SplitterContentBorderColor]: ThemingParameters.sapGroup_ContentBorderColor,
  [CustomVariables.SplitterBarBorderStyle]: `solid ${ThemingParameters.sapGroup_ContentBorderColor} 0.0625rem`,
  [CustomVariables.SplitterBarOutline]: `0.15rem dotted ${ThemingParameters.sapGroup_ContentBorderColor}`,
  [CustomVariables.SplitterBarBorderFocus]: `solid ${ThemingParameters.sapGroup_ContentBorderColor} 0.0625rem`,
  [CustomVariables.SplitterBarBorderFix]: `none`
};
