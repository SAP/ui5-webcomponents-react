import { CustomVariables } from './CustomVariables';
import { ThemingParameters } from '@ui5/webcomponents-react-base';

export const sapFiori3DarkParameters: Partial<Record<CustomVariables, string>> = {
  [CustomVariables.ActionSheetTopBorderRadius]: ThemingParameters.sapElement_BorderCornerRadius,
  [CustomVariables.ActionSheetBoxShadow]: ThemingParameters.sapContent_HeaderShadow
};
