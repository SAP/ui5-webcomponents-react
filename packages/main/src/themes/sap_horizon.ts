import { ThemingParameters } from '@ui5/webcomponents-react-base';
import { CustomVariables } from './CustomVariables.js';

export const sapHorizonParameters: Partial<Record<CustomVariables, string>> = {
  [CustomVariables.ActionSheetHeaderBoxShadow]: ThemingParameters.sapContent_HeaderShadow,
  [CustomVariables.ActionSheetMobileHeaderBackground]: ThemingParameters.sapPageHeader_Background,
  [CustomVariables.ActionSheetMobileHeaderBorderRadius]: ThemingParameters.sapPopover_BorderCornerRadius,
  [CustomVariables.ActionSheetMobileHeaderBoxShadow]: ThemingParameters.sapContent_Shadow2,
  [CustomVariables.ActionSheetMobileHeaderTextColor]: ThemingParameters.sapPageHeader_TextColor,
  [CustomVariables.AnalyticalTableHeaderFontFamily]: ThemingParameters.sapFontBoldFamily,
  [CustomVariables.AnalyticalTableOuterBorderBlock]: 'none',
  [CustomVariables.AnalyticalTableOuterBorderInline]: 'none',
  [CustomVariables.ObjectPageSectionBorderTop]: 'none',
  [CustomVariables.ObjectPageSectionTitleFontFamily]: ThemingParameters.sapFontBoldFamily,
  [CustomVariables.ObjectPageSectionTitleHeight]: '2.75rem',
  [CustomVariables.ObjectPageSectionTitleLineHeight]: '4rem',
  [CustomVariables.ObjectPageSubSectionBackgroundColor]: ThemingParameters.sapGroup_ContentBackground,
  [CustomVariables.ObjectPageSubSectionBorderRadius]: ThemingParameters.sapElement_BorderCornerRadius,
  [CustomVariables.ObjectPageSubSectionPaddingBlockStart]: `0.5rem`,
  [CustomVariables.SplitterContentBorderColor]: ThemingParameters.sapGroup_ContentBorderColor,
  [CustomVariables.ToolbarFocusOutline]: 'none',
  [CustomVariables.ToolbarFocusShadow]: `inset 0 0 0 0.125rem ${ThemingParameters.sapContent_FocusColor}`
};
