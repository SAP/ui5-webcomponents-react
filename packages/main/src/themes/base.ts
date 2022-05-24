import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { CustomVariables } from './CustomVariables';

export const baseParameters: Record<CustomVariables, string> = {
  [CustomVariables.ObjectPageSectionTitleFontFamily]: ThemingParameters.sapFontFamily,
  [CustomVariables.ObjectPageSectionBorderTop]: `0.0625rem solid ${ThemingParameters.sapGroup_TitleBorderColor}`,
  [CustomVariables.ObjectPageSubSectionBackgroundColor]: `transparent`,
  [CustomVariables.ObjectPageSubSectionBorderRadius]: `0`
};
