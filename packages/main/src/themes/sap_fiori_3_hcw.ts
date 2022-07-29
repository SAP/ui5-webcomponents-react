import { CustomVariables } from './CustomVariables';
// eslint-disable-next-line import/order
import { ThemingParameters } from '@ui5/webcomponents-react-base';

export const sapFioriHcwParameters: Partial<Record<CustomVariables, string>> = {
  [CustomVariables.ActionSheetTopBorderRadius]: ThemingParameters.sapElement_BorderCornerRadius,
  [CustomVariables.ActionSheetBoxShadow]: ThemingParameters.sapContent_HeaderShadow
};
