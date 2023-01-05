export enum CustomVariables {
  ObjectPageSectionTitleFontFamily = '--ui5wcr_ObjectPage_SectionTitleFontFamily',
  ObjectPageSectionTitleTextDecoration = '--ui5wcr_ObjectPage_SectionTitleTextDecoration',
  ObjectPageSectionTitleLineHeight = '--ui5wcr_ObjectPage_SectionTitleLineHeight',
  ObjectPageSectionTitleHeight = '--ui5wcr_ObjectPage_SectionTitleHeight',
  ObjectPageSectionBorderTop = '--ui5wcr_ObjectPage_SectionBorderTop',
  ObjectPageSubSectionBackgroundColor = '--ui5wcr_ObjectPage_SubSectionBackgroundColor',
  ObjectPageSubSectionBorderRadius = '--ui5wcr_ObjectPage_SubSectionBorderRadius',
  ObjectPageSubSectionPaddingBlockStart = '--ui5wcr_ObjectPage_PaddingBlockStart',
  ActionSheetTopBorderRadius = '--ui5wcr_ActionSheet_TopBorderRadius',
  ActionSheetBoxShadow = '--ui5wcr_ActionSheet_BoxShadow',
  ActionSheetHeaderBoxShadow = '--ui5wcr_ActionSheet_HeaderBoxShadow',
  ActionSheetMobileHeaderBackground = '--ui5wcr_ActionSheet_MobileHeaderBackground',
  ActionSheetMobileHeaderBoxShadow = '--ui5wcr_ActionSheet_MobileHeaderBoxShadow',
  ActionSheetMobileHeaderBorderRadius = '--ui5wcr_ActionSheet_MobileHeaderBorderRadius',
  ActionSheetMobileHeaderTextColor = '--ui5wcr_ActionSheet_MobileHeaderTextColor',
  SplitterContentBorderColor = '--ui5wcr_Splitter_ContentBorderColor',
  SplitterIconColor = '--ui5wcr_Splitter_IconColor',
  SplitterBarBorderStyle = '--ui5wcr_Splitter_BarBorderStyle',
  SplitterBarBorderFocus = '--ui5wcr_Splitter_BarBorderFocus',
  SplitterBarOutline = '--ui5wcr_Splitter_BarOutline',
  SplitterBarBorderFix = '--ui5wcr_Splitter_BarBorderHighContrastFix',
  AnalyticalTableOuterBorderBlock = '--ui5wcr-AnalyticalTable-OuterBorderBlock',
  AnalyticalTableOuterBorderInline = '--ui5wcr-AnalyticalTable-OuterBorderInline',
  AnalyticalTableHeaderFontFamily = '--ui5wcr-AnalyticalTable-HeaderFontFamily',
  AnalyticalTableHeaderBorderWidth = '--ui5wcr-AnalyticalTable-HeaderBorderWidth',
  AnalyticalTableHeaderActiveTextColor = '--ui5wcr-AnalyticalTable-HeaderActiveTextColor'
}

export const CustomThemingParameters = new Proxy(CustomVariables, {
  get: (target, prop: string): string => `var(${target[prop] as string})`
});
