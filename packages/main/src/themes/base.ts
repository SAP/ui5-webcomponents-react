import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { CustomVariables } from './CustomVariables';

export const baseParameters: Partial<Record<CustomVariables, string>> = {
  [CustomVariables.ObjectPageSectionTitleFontFamily]: ThemingParameters.sapFontFamily,
  [CustomVariables.ObjectPageSectionBorderTop]: `0.0625rem solid ${ThemingParameters.sapGroup_TitleBorderColor}`,
  [CustomVariables.ObjectPageSubSectionBackgroundColor]: `transparent`,
  [CustomVariables.ObjectPageSubSectionBorderRadius]: `0`,
  [CustomVariables.ActionSheetHeaderBoxShadow]: `none`,
  [CustomVariables.ActionSheetMobileHeaderBackground]: `transparent`,
  [CustomVariables.ActionSheetMobileHeaderBorderRadius]: `0`,
  [CustomVariables.ActionSheetMobileHeaderBoxShadow]: `none`,
  [CustomVariables.ActionSheetMobileHeaderTextColor]: ThemingParameters.sapContent_ContrastTextColor,
  [CustomVariables.SplitterContentBorderColor]: ThemingParameters.sapHighlightColor,
  [CustomVariables.SplitterIconColor]: ThemingParameters.sapButton_Lite_TextColor,
  [CustomVariables.SplitterBarOutline]: `none`,
  [CustomVariables.SplitterBarBorderStyle]: `none`,
  [CustomVariables.SplitterBarBorderFocus]: `${ThemingParameters.sapContent_FocusWidth} solid ${ThemingParameters.sapContent_FocusColor}`
};
