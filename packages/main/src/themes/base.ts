import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { CustomVariables } from './CustomVariables.js';

export const baseParameters: Partial<Record<CustomVariables, string>> = {
  [CustomVariables.ActionSheetHeaderBoxShadow]: `none`,
  [CustomVariables.ActionSheetMobileHeaderBackground]: `transparent`,
  [CustomVariables.ActionSheetMobileHeaderBorderRadius]: `0`,
  [CustomVariables.ActionSheetMobileHeaderBoxShadow]: `none`,
  [CustomVariables.ActionSheetMobileHeaderTextColor]: ThemingParameters.sapContent_ContrastTextColor,
  [CustomVariables.AnalyticalTableHeaderActiveTextColor]: ThemingParameters.sapList_HeaderTextColor,
  [CustomVariables.AnalyticalTableHeaderBorderWidth]: '0.0625rem',
  [CustomVariables.AnalyticalTableHeaderFontFamily]: ThemingParameters.sapFontFamily,
  [CustomVariables.AnalyticalTableOuterBorderBlock]: `1px solid ${ThemingParameters.sapList_BorderColor}`,
  [CustomVariables.AnalyticalTableOuterBorderInline]: `1px solid ${ThemingParameters.sapList_BorderColor}`,
  [CustomVariables.ObjectPageSectionBorderTop]: `0.0625rem solid ${ThemingParameters.sapGroup_TitleBorderColor}`,
  [CustomVariables.ObjectPageSectionTitleFontFamily]: ThemingParameters.sapFontFamily,
  [CustomVariables.ObjectPageSectionTitleHeight]: '2.25rem',
  [CustomVariables.ObjectPageSectionTitleLineHeight]: '2.25rem',
  [CustomVariables.ObjectPageSectionTitleTextDecoration]: 'none',
  [CustomVariables.ObjectPageSubSectionBackgroundColor]: `transparent`,
  [CustomVariables.ObjectPageSubSectionBorderRadius]: `0`,
  [CustomVariables.ObjectPageSubSectionPaddingBlockStart]: `2rem`,
  [CustomVariables.SplitterBarBorderFix]: `${ThemingParameters.sapContent_FocusWidth} solid ${ThemingParameters.sapContent_FocusColor}`,
  [CustomVariables.SplitterBarBorderFocus]: `${ThemingParameters.sapContent_FocusWidth} solid ${ThemingParameters.sapContent_FocusColor}`,
  [CustomVariables.SplitterBarBorderStyle]: `none`,
  [CustomVariables.SplitterBarOutline]: `none`,
  [CustomVariables.SplitterContentBorderColor]: ThemingParameters.sapHighlightColor,
  [CustomVariables.SplitterIconColor]: ThemingParameters.sapButton_Lite_TextColor,
  [CustomVariables.ToolbarFocusOutline]: `${ThemingParameters.sapContent_FocusWidth} ${ThemingParameters.sapContent_FocusStyle} ${ThemingParameters.sapContent_FocusColor}`,
  [CustomVariables.ToolbarFocusShadow]: 'none'
};
