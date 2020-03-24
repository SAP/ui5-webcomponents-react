export enum CssSizeVariablesNames {
  sapWcrBarHeight = 'sapWcrBarHeight',
  sapWcrSubHeaderBarHeight = 'sapWcrSubHeaderBarHeight',
  sapWcrProgressIndicatorHeight = 'sapWcrProgressIndicatorHeight',
  sapWcrProgressIndicatorMargin = 'sapWcrProgressIndicatorMargin',
  sapWcrSegmentedButtonPadding = 'sapWcrSegmentedButtonPadding',
  sapWcrSegmentedButtonHeight = 'sapWcrSegmentedButtonHeight',
  sapWcrSegmentedButtonItemHeight = 'sapWcrSegmentedButtonItemHeight',
  sapWcrSegmentedButtonItemLineHeight = 'sapWcrSegmentedButtonItemLineHeight',
  sapWcrSideNavigationItemIconSize = 'sapWcrSideNavigationItemIconSize',
  sapWcrSideNavigationItemIconPadding = 'sapWcrSideNavigationItemIconPadding',
  sapWcrSideNavigationItemExpandedArrowPadding = 'sapWcrSideNavigationItemExpandedArrowPadding',
  sapWcrAnalyticalTableRowHeight = 'sapWcrAnalyticalTableRowHeight',
  sapWcrAnalyticalTableTreePaddingLevel1 = 'sapWcrAnalyticalTableTreePaddingLevel1',
  sapWcrAnalyticalTableTreePaddingLevel2 = 'sapWcrAnalyticalTableTreePaddingLevel2',
  sapWcrAnalyticalTableTreePaddingLevel3 = 'sapWcrAnalyticalTableTreePaddingLevel3'
}

export const CssSizeVariables: Record<CssSizeVariablesNames, string> = Object.values(CssSizeVariablesNames).reduce(
  (acc, variable) => ({
    ...acc,
    [variable]: `var(--${variable})`
  }),
  {} as Record<CssSizeVariablesNames, string>
);

export const cssVariablesStyles = `
:root {
  --${CssSizeVariablesNames.sapWcrBarHeight}:2.75rem;
  --${CssSizeVariablesNames.sapWcrSubHeaderBarHeight}:3rem;
  --${CssSizeVariablesNames.sapWcrProgressIndicatorHeight}:1rem;
  --${CssSizeVariablesNames.sapWcrProgressIndicatorMargin}:0.5rem 0;
  --${CssSizeVariablesNames.sapWcrSegmentedButtonPadding}:0.250rem 0;
  --${CssSizeVariablesNames.sapWcrSegmentedButtonHeight}:3rem;
  --${CssSizeVariablesNames.sapWcrSegmentedButtonItemHeight}:2.25rem;
  --${CssSizeVariablesNames.sapWcrSegmentedButtonItemLineHeight}:2.25rem;
  --${CssSizeVariablesNames.sapWcrSideNavigationItemIconSize}:1.125rem;
  --${CssSizeVariablesNames.sapWcrSideNavigationItemIconPadding}:0.9375rem;
  --${CssSizeVariablesNames.sapWcrSideNavigationItemExpandedArrowPadding}:0.8125rem;
  --${CssSizeVariablesNames.sapWcrAnalyticalTableRowHeight}:44px;
  --${CssSizeVariablesNames.sapWcrAnalyticalTableTreePaddingLevel1}:1.5rem;
  --${CssSizeVariablesNames.sapWcrAnalyticalTableTreePaddingLevel2}:2.25rem;
  --${CssSizeVariablesNames.sapWcrAnalyticalTableTreePaddingLevel3}:2.75rem;
  
  // TODO Remove those mappers after Web Components Update rc.6
  --sapFontHeaderFamily:var(--sapUiFontFamily);
  --sapFontSmallSize:var(--sapMFontSmallSize);
  --sapFontLargeSize:var(--sapMFontLargeSize);
  --sapFontHeader1Size:var(--sapMFontHeader1Size);
  --sapFontHeader2Size:var(--sapMFontHeader2Size);
  --sapFontHeader3Size:var(--sapMFontHeader3Size);
  --sapFontHeader4Size:var(--sapMFontHeader4Size);
  --sapFontHeader5Size:var(--sapMFontHeader5Size);
  --sapFontHeader6Size:var(--sapMFontHeader6Size);
  --sapContent_Shadow0:var(--sapUiShadowLevel0);
  --sapContent_Shadow1:var(--sapUiShadowLevel1);
  --sapContent_Shadow2:var(--sapUiShadowLevel2);
  --sapContent_Shadow3:var(--sapUiShadowLevel3);
  --sapElement_BorderCornerRadius:0.25rem;
  --sapLink_Visited_Color:var(--sapUiLinkVisited);
  --sapLink_Hover_Color:var(--sapUiLinkHover);
  --sapLink_InvertedColor:var(--sapUiLinkInverted);
  --sapLink_Active_Color:var(--sapUiLinkActive);
  --sapButton_Selected_Background:var(--sapUiSegmentedButtonSelectedBackground);
  --sapButton_Selected_TextColor:var(--sapUiSegmentedButtonSelectedTextColor);
  --sapButton_Selected_BorderColor:var(--sapUiSegmentedButtonSelectedHoverBorderColor);
  --sapContent_ContrastIconColor:var(--sapUiContentContrastIconColor);
  --sapButton_Active_Background:var(--sapUiSegmentedButtonActiveBackground);
  --sapButton_Active_TextColor:var(--sapUiButtonActiveColor);

}

[data-ui5-compact-size],
.ui5-content-density-compact,
.sapUiSizeCompact {
  --${CssSizeVariablesNames.sapWcrBarHeight}:2.5rem;
  --${CssSizeVariablesNames.sapWcrSubHeaderBarHeight}:2.25rem;
  --${CssSizeVariablesNames.sapWcrProgressIndicatorHeight}:1.125rem;
  --${CssSizeVariablesNames.sapWcrSegmentedButtonPadding}:0.1875rem 0;
  --${CssSizeVariablesNames.sapWcrSegmentedButtonHeight}:2rem;
  --${CssSizeVariablesNames.sapWcrSegmentedButtonItemHeight}:1.625rem;
  --${CssSizeVariablesNames.sapWcrSegmentedButtonItemLineHeight}:1.5rem;
  --${CssSizeVariablesNames.sapWcrSideNavigationItemIconSize}:1rem;
  --${CssSizeVariablesNames.sapWcrSideNavigationItemIconPadding}:0.5rem 0.9375rem 0.5rem 0.9375rem;
  --${CssSizeVariablesNames.sapWcrSideNavigationItemExpandedArrowPadding}:0.125rem 0.8125rem 0.125rem 0.8125rem;
  --${CssSizeVariablesNames.sapWcrAnalyticalTableRowHeight}:32px;
  --${CssSizeVariablesNames.sapWcrAnalyticalTableTreePaddingLevel1}:1rem;
  --${CssSizeVariablesNames.sapWcrAnalyticalTableTreePaddingLevel2}:1.5rem;
  --${CssSizeVariablesNames.sapWcrAnalyticalTableTreePaddingLevel3}:2rem;
}
`;
