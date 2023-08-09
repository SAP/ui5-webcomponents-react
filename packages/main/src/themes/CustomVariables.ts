export enum CustomVariables {
  ActionSheetBoxShadow = '--_ui5wcr_ActionSheet_BoxShadow',
  ActionSheetHeaderBoxShadow = '--_ui5wcr_ActionSheet_HeaderBoxShadow',
  ActionSheetMobileHeaderBackground = '--_ui5wcr_ActionSheet_MobileHeaderBackground',
  ActionSheetMobileHeaderBorderRadius = '--_ui5wcr_ActionSheet_MobileHeaderBorderRadius',
  ActionSheetMobileHeaderBoxShadow = '--_ui5wcr_ActionSheet_MobileHeaderBoxShadow',
  ActionSheetMobileHeaderTextColor = '--_ui5wcr_ActionSheet_MobileHeaderTextColor',
  ActionSheetTopBorderRadius = '--_ui5wcr_ActionSheet_TopBorderRadius',
  AnalyticalTableHeaderActiveTextColor = '--_ui5wcr-AnalyticalTable-HeaderActiveTextColor',
  AnalyticalTableHeaderBorderWidth = '--_ui5wcr-AnalyticalTable-HeaderBorderWidth',
  AnalyticalTableHeaderFontFamily = '--_ui5wcr-AnalyticalTable-HeaderFontFamily',
  AnalyticalTableOuterBorderBlock = '--_ui5wcr-AnalyticalTable-OuterBorderBlock',
  AnalyticalTableOuterBorderInline = '--_ui5wcr-AnalyticalTable-OuterBorderInline',
  ObjectPageSectionBorderTop = '--_ui5wcr_ObjectPage_SectionBorderTop',
  ObjectPageSectionTitleFontFamily = '--_ui5wcr_ObjectPage_SectionTitleFontFamily',
  ObjectPageSectionTitleHeight = '--_ui5wcr_ObjectPage_SectionTitleHeight',
  ObjectPageSectionTitleLineHeight = '--_ui5wcr_ObjectPage_SectionTitleLineHeight',
  ObjectPageSectionTitleTextDecoration = '--_ui5wcr_ObjectPage_SectionTitleTextDecoration',
  ObjectPageSubSectionBackgroundColor = '--_ui5wcr_ObjectPage_SubSectionBackgroundColor',
  ObjectPageSubSectionBorderRadius = '--_ui5wcr_ObjectPage_SubSectionBorderRadius',
  ObjectPageSubSectionPaddingBlockStart = '--_ui5wcr_ObjectPage_PaddingBlockStart',
  SplitterBarBorderFix = '--_ui5wcr_Splitter_BarBorderHighContrastFix',
  SplitterBarBorderFocus = '--_ui5wcr_Splitter_BarBorderFocus',
  SplitterBarBorderStyle = '--_ui5wcr_Splitter_BarBorderStyle',
  SplitterBarOutline = '--_ui5wcr_Splitter_BarOutline',
  SplitterContentBorderColor = '--_ui5wcr_Splitter_ContentBorderColor',
  SplitterIconColor = '--_ui5wcr_Splitter_IconColor',
  ToolbarFocusOutline = '--_ui5wcr_Toolbar_FocusOutline',
  ToolbarFocusShadow = '--_ui5wcr_Toolbar_FocusShadow',
  ScrollbarBorder = '--_ui5wcr_scrollbar_Border',
  ScrollbarBorderRadius = '--_ui5wcr_Scrollbar_BorderRadius'
}

export const CustomThemingParameters = new Proxy(CustomVariables, {
  get: (target, prop: string): string => `var(${target[prop] as string})`
});
