import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { CustomVariables } from './CustomVariables';

export const sapHorizonHcwParameters: Partial<Record<CustomVariables, string>> = {
  [CustomVariables.ObjectPageSectionTitleFontFamily]: ThemingParameters.sapFontBoldFamily,
  [CustomVariables.ObjectPageSectionBorderTop]: 'none',
  [CustomVariables.ObjectPageSubSectionBackgroundColor]: ThemingParameters.sapGroup_ContentBackground,
  [CustomVariables.ObjectPageSubSectionBorderRadius]: ThemingParameters.sapElement_BorderCornerRadius
};
