import { ThemingParameters } from './ThemingParameters.js';

export enum CssSizeVariablesNames {
  ui5WcrBarHeight = '--_ui5wcr-BarHeight',
  ui5WcrButtonTopBottomPadding = '--_ui5wcr-ButtonTopBottomPadding',
  ui5WcrAnalyticalTableExpandButtonHeight = '--_ui5wcr-AnalyticalTableExpandButtonHeight',
  ui5WcrAnalyticalTableExpandIconHeight = '--_ui5wcr-AnalyticalTableExpandIconHeight',
  ui5WcrAnalyticalTableRowHeight = '--_ui5wcr-AnalyticalTableRowHeight',
  ui5WcrAnalyticalTableHeaderRowHeight = '--_ui5wcr-AnalyticalTableHeaderRowHeight',
  ui5WcrAnalyticalTableTreePaddingLevel1 = '--_ui5wcr-AnalyticalTableTreePaddingLevel1',
  ui5WcrAnalyticalTableTreePaddingLevel2 = '--_ui5wcr-AnalyticalTableTreePaddingLevel2',
  ui5WcrAnalyticalTableTreePaddingLevel3 = '--_ui5wcr-AnalyticalTableTreePaddingLevel3',
  ui5WcrCheckBoxWidthHeight = '--_ui5wcr-CheckBoxWidthHeight',
  ui5WcrAnalyticalTableSelectionColumnWidth = '--_ui5wcr-AnalyticalTableSelectionColumnWidth',
  ui5WcrToolbarHeight = '--_ui5wcr-ToolbarHeight',
  ui5WcrToolbarPopoverContentPadding = '--_ui5wcr-ToolbarPopoverContentPadding',
  ui5WcrToolbarSeparatorHeight = '--_ui5wcr-ToolbarSeparatorHeight',
  ui5WcrFormGroupTitleHeight = '--_ui5wcr-FormGroupTitleHeight',
  ui5WcrMessageViewListItemHeightSingle = '--_ui5wcr-MessageViewListItemHeightSingle',
  ui5WcrMessageViewListItemHeightByLine = '--_ui5wcr-MessageViewListItemHeightByLine',
  ui5WcrSplitterSize = '--_ui5wcr-SplitterSize',
  ui5WcrDialogHeaderHeight = '--_ui5wcr-DialogHeaderHeight',
  ui5WcrDialogSubHeaderHeight = '--_ui5wcr-DialogSubHeaderHeight',
  ui5WcrElementHeight = '--_ui5wcr-ElementHeight'
}

/**
 * __Private__ CSS variables used for size calculation depending on content density.
 *
 * @private
 */
export const CssSizeVariables = new Proxy(CssSizeVariablesNames, {
  get: (target, prop: string): string => `var(${target[prop] as string})`
});

export const CozySizes = {
  [CssSizeVariablesNames.ui5WcrBarHeight]: `2.75rem`,
  [CssSizeVariablesNames.ui5WcrButtonTopBottomPadding]: `0.25rem 0`,
  [CssSizeVariablesNames.ui5WcrAnalyticalTableExpandButtonHeight]: `2.25rem`,
  [CssSizeVariablesNames.ui5WcrAnalyticalTableExpandIconHeight]: '1rem',
  [CssSizeVariablesNames.ui5WcrAnalyticalTableRowHeight]: `44px`,
  [CssSizeVariablesNames.ui5WcrAnalyticalTableHeaderRowHeight]: `44px`,
  [CssSizeVariablesNames.ui5WcrAnalyticalTableTreePaddingLevel1]: `1rem`,
  [CssSizeVariablesNames.ui5WcrAnalyticalTableTreePaddingLevel2]: `1.5rem`,
  [CssSizeVariablesNames.ui5WcrAnalyticalTableTreePaddingLevel3]: `2rem`,
  [CssSizeVariablesNames.ui5WcrCheckBoxWidthHeight]: `2.75rem`,
  [CssSizeVariablesNames.ui5WcrAnalyticalTableSelectionColumnWidth]: `44px`,
  [CssSizeVariablesNames.ui5WcrToolbarHeight]: `2.75rem`,
  [CssSizeVariablesNames.ui5WcrToolbarPopoverContentPadding]: `0.25rem 0.5rem`,
  [CssSizeVariablesNames.ui5WcrToolbarSeparatorHeight]: `2rem`,
  [CssSizeVariablesNames.ui5WcrFormGroupTitleHeight]: `2.75rem`,
  [CssSizeVariablesNames.ui5WcrMessageViewListItemHeightSingle]: `2.75rem`,
  [CssSizeVariablesNames.ui5WcrMessageViewListItemHeightByLine]: `3.325rem`,
  [CssSizeVariablesNames.ui5WcrSplitterSize]: `1rem`,
  [CssSizeVariablesNames.ui5WcrDialogHeaderHeight]: '2.75rem',
  [CssSizeVariablesNames.ui5WcrDialogSubHeaderHeight]: '3rem',
  [CssSizeVariablesNames.ui5WcrElementHeight]: ThemingParameters.sapElement_Height
};

export const CompactSizes = {
  [CssSizeVariablesNames.ui5WcrBarHeight]: `2.5rem`,
  [CssSizeVariablesNames.ui5WcrButtonTopBottomPadding]: `0.1875rem 0`,
  [CssSizeVariablesNames.ui5WcrAnalyticalTableExpandButtonHeight]: `1.5rem`,
  [CssSizeVariablesNames.ui5WcrAnalyticalTableExpandIconHeight]: '0.75rem',
  [CssSizeVariablesNames.ui5WcrAnalyticalTableRowHeight]: `32px`,
  [CssSizeVariablesNames.ui5WcrAnalyticalTableHeaderRowHeight]: `32px`,
  [CssSizeVariablesNames.ui5WcrAnalyticalTableTreePaddingLevel1]: `1.5rem`,
  [CssSizeVariablesNames.ui5WcrAnalyticalTableTreePaddingLevel2]: `2.25rem`,
  [CssSizeVariablesNames.ui5WcrAnalyticalTableTreePaddingLevel3]: `2.75rem`,
  [CssSizeVariablesNames.ui5WcrCheckBoxWidthHeight]: `2rem`,
  [CssSizeVariablesNames.ui5WcrAnalyticalTableSelectionColumnWidth]: `32px`,
  [CssSizeVariablesNames.ui5WcrToolbarHeight]: `2rem`,
  [CssSizeVariablesNames.ui5WcrToolbarPopoverContentPadding]: `0.1875rem 0.375rem`,
  [CssSizeVariablesNames.ui5WcrToolbarSeparatorHeight]: `1.5rem`,
  [CssSizeVariablesNames.ui5WcrFormGroupTitleHeight]: `2rem`,
  [CssSizeVariablesNames.ui5WcrMessageViewListItemHeightSingle]: `2rem`,
  [CssSizeVariablesNames.ui5WcrMessageViewListItemHeightByLine]: `3.25rem`,
  [CssSizeVariablesNames.ui5WcrDialogHeaderHeight]: '2.5rem',
  [CssSizeVariablesNames.ui5WcrDialogSubHeaderHeight]: '2.25rem',
  [CssSizeVariablesNames.ui5WcrElementHeight]: ThemingParameters.sapElement_Compact_Height
};
