import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { CustomVariables } from './CustomVariables.js';

export const sapHorizonHcbParameters: Partial<Record<CustomVariables, string>> = {
  [CustomVariables.ObjectPageSectionTitleFontFamily]: ThemingParameters.sapFontBoldFamily,
  [CustomVariables.ObjectPageSectionTitleTextDecoration]: `underline ${ThemingParameters.sapList_SelectionBorderColor}`,
  [CustomVariables.ObjectPageSectionBorderTop]: 'none',
  [CustomVariables.ObjectPageSubSectionBackgroundColor]: ThemingParameters.sapGroup_ContentBackground,
  [CustomVariables.ObjectPageSubSectionBorderRadius]: ThemingParameters.sapElement_BorderCornerRadius,
  [CustomVariables.ActionSheetHeaderBoxShadow]: ThemingParameters.sapContent_HeaderShadow,
  [CustomVariables.ActionSheetMobileHeaderBackground]: ThemingParameters.sapPageHeader_Background,
  [CustomVariables.ActionSheetMobileHeaderBorderRadius]: ThemingParameters.sapPopover_BorderCornerRadius,
  [CustomVariables.ActionSheetMobileHeaderBoxShadow]: ThemingParameters.sapContent_Shadow2,
  [CustomVariables.ActionSheetMobileHeaderTextColor]: ThemingParameters.sapPageHeader_TextColor,
  [CustomVariables.SplitterContentBorderColor]: ThemingParameters.sapGroup_ContentBorderColor,
  [CustomVariables.SplitterBarBorderStyle]: `solid ${ThemingParameters.sapGroup_ContentBorderColor} 0.0625rem`,
  [CustomVariables.SplitterBarOutline]: `0.15rem dotted ${ThemingParameters.sapGroup_ContentBorderColor}`,
  [CustomVariables.SplitterBarBorderFocus]: `solid ${ThemingParameters.sapGroup_ContentBorderColor} 0.0625rem`,
  [CustomVariables.SplitterBarBorderFix]: `none`,
  [CustomVariables.AnalyticalTableHeaderFontFamily]: ThemingParameters.sapFontBoldFamily,
  [CustomVariables.AnalyticalTableHeaderActiveTextColor]: ThemingParameters.sapContent_ContrastTextColor,
  [CustomVariables.AnalyticalTableHeaderBorderWidth]: '0.188rem',
  [CustomVariables.AnalyticalTableOuterBorderInline]: 'none'
};
