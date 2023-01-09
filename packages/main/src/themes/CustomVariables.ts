export enum CustomVariables {
  ActionSheetBoxShadow = '--ui5wcr_ActionSheet_BoxShadow',
  ActionSheetHeaderBoxShadow = '--ui5wcr_ActionSheet_HeaderBoxShadow',
  ActionSheetMobileHeaderBackground = '--ui5wcr_ActionSheet_MobileHeaderBackground',
  ActionSheetMobileHeaderBorderRadius = '--ui5wcr_ActionSheet_MobileHeaderBorderRadius',
  ActionSheetMobileHeaderBoxShadow = '--ui5wcr_ActionSheet_MobileHeaderBoxShadow',
  ActionSheetMobileHeaderTextColor = '--ui5wcr_ActionSheet_MobileHeaderTextColor',
  ActionSheetTopBorderRadius = '--ui5wcr_ActionSheet_TopBorderRadius',
  AnalyticalTableHeaderActiveTextColor = '--ui5wcr-AnalyticalTable-HeaderActiveTextColor',
  AnalyticalTableHeaderBorderWidth = '--ui5wcr-AnalyticalTable-HeaderBorderWidth',
  AnalyticalTableHeaderFontFamily = '--ui5wcr-AnalyticalTable-HeaderFontFamily',
  AnalyticalTableOuterBorderBlock = '--ui5wcr-AnalyticalTable-OuterBorderBlock',
  AnalyticalTableOuterBorderInline = '--ui5wcr-AnalyticalTable-OuterBorderInline',
  ObjectPageSectionBorderTop = '--ui5wcr_ObjectPage_SectionBorderTop',
  ObjectPageSectionTitleFontFamily = '--ui5wcr_ObjectPage_SectionTitleFontFamily',
  ObjectPageSectionTitleTextDecoration = '--ui5wcr_ObjectPage_SectionTitleTextDecoration',
  ObjectPageSubSectionBackgroundColor = '--ui5wcr_ObjectPage_SubSectionBackgroundColor',
  ObjectPageSubSectionBorderRadius = '--ui5wcr_ObjectPage_SubSectionBorderRadius',
  SplitterBarBorderFix = '--ui5wcr_Splitter_BarBorderHighContrastFix',
  SplitterBarBorderFocus = '--ui5wcr_Splitter_BarBorderFocus',
  SplitterBarBorderStyle = '--ui5wcr_Splitter_BarBorderStyle',
  SplitterBarOutline = '--ui5wcr_Splitter_BarOutline',
  SplitterContentBorderColor = '--ui5wcr_Splitter_ContentBorderColor',
  SplitterIconColor = '--ui5wcr_Splitter_IconColor',
  ToolbarFocusShadow = '--ui5wcr_Toolbar_FocusShadow',
  ToolbarFocusOutline = '--ui5wcr_Toolbar_FocusOutline'
}

export const CustomThemingParameters = new Proxy(CustomVariables, {
  get: (target, prop: string): string => `var(${target[prop] as string})`
});
