import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { CustomVariables } from './CustomVariables';

export const sapFiori3Parameters: Partial<Record<CustomVariables, string>> = {
  [CustomVariables.ActionSheetTopBorderRadius]: ThemingParameters.sapElement_BorderCornerRadius,
  [CustomVariables.ActionSheetBoxShadow]: ThemingParameters.sapContent_HeaderShadow
};
