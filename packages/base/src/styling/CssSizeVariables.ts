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
  sapWcrAnalyticalTableTreePaddingLevel3 = 'sapWcrAnalyticalTableTreePaddingLevel3',
  sapWcrCheckBoxWidthHeight = 'sapWcrCheckBoxWidthHeight',
  sapWcrAnalyticalTableSelectionColumnWidth = 'sapWcrAnalyticalTableSelectionColumnWidth',
  sapWcrToolbarHeight = 'sapWcrToolbarHeight',
  sapWcrToolbarPopoverContentPadding = 'sapWcrToolbarPopoverContentPadding',
  sapWcrToolbarSeparatorHeight = 'sapWcrToolbarSeparatorHeight'
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
  --${CssSizeVariablesNames.sapWcrCheckBoxWidthHeight}:2.75rem;
  --${CssSizeVariablesNames.sapWcrAnalyticalTableSelectionColumnWidth}:55px;
  --${CssSizeVariablesNames.sapWcrToolbarHeight}:2.75rem;
  --${CssSizeVariablesNames.sapWcrToolbarPopoverContentPadding}:0.25rem 0.5rem;
  --${CssSizeVariablesNames.sapWcrToolbarSeparatorHeight}: 2rem;
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
  --${CssSizeVariablesNames.sapWcrCheckBoxWidthHeight}:2rem;
  --${CssSizeVariablesNames.sapWcrAnalyticalTableSelectionColumnWidth}:40px;
  --${CssSizeVariablesNames.sapWcrToolbarHeight}:2rem;
  --${CssSizeVariablesNames.sapWcrToolbarPopoverContentPadding}:0.1875rem 0.375rem;
  --${CssSizeVariablesNames.sapWcrToolbarSeparatorHeight}: 1.5rem;
}
`;
