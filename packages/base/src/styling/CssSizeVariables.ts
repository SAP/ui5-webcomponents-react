import { ThemingParameters } from './ThemingParameters.js';

export enum CssSizeVariablesNames {
  sapWcrBarHeight = '--sapWcrBarHeight',
  sapWcrButtonTopBottomPadding = '--sapWcrButtonTopBottomPadding',
  sapWcrAnalyticalTableExpandButtonHeight = '--sapWcrAnalyticalTableExpandButtonHeight',
  sapWcrAnalyticalTableExpandIconHeight = '--sapWcrAnalyticalTableExpandIconHeight',
  sapWcrAnalyticalTableRowHeight = '--sapWcrAnalyticalTableRowHeight',
  sapWcrAnalyticalTableHeaderRowHeight = '--sapWcrAnalyticalTableHeaderRowHeight',
  sapWcrAnalyticalTableTreePaddingLevel1 = '--sapWcrAnalyticalTableTreePaddingLevel1',
  sapWcrAnalyticalTableTreePaddingLevel2 = '--sapWcrAnalyticalTableTreePaddingLevel2',
  sapWcrAnalyticalTableTreePaddingLevel3 = '--sapWcrAnalyticalTableTreePaddingLevel3',
  sapWcrCheckBoxWidthHeight = '--sapWcrCheckBoxWidthHeight',
  sapWcrAnalyticalTableSelectionColumnWidth = '--sapWcrAnalyticalTableSelectionColumnWidth',
  sapWcrToolbarHeight = '--sapWcrToolbarHeight',
  sapWcrToolbarPopoverContentPadding = '--sapWcrToolbarPopoverContentPadding',
  sapWcrToolbarSeparatorHeight = '--sapWcrToolbarSeparatorHeight',
  sapWcrFormGroupTitleHeight = '--sapWcrFormGroupTitleHeight',
  sapWcrMessageViewListItemHeightSingle = '--sapWcrMessageViewListItemHeightSingle',
  sapWcrMessageViewListItemHeightByLine = '--sapWcrMessageViewListItemHeightByLine',
  sapWcrSplitterSize = '--sapWcrSplitterSize',
  sapWcrDialogHeaderHeight = '--sapWcrDialogHeaderHeight',
  sapWcrDialogSubHeaderHeight = '--sapWcrDialogSubHeaderHeight',
  sawWcrElementHeight = '--sawWcrElementHeight'
}

export const CssSizeVariables = new Proxy(CssSizeVariablesNames, {
  get: (target, prop: string): string => `var(${target[prop] as string})`
});

export const CozySizes = {
  [CssSizeVariablesNames.sapWcrBarHeight]: `2.75rem`,
  [CssSizeVariablesNames.sapWcrButtonTopBottomPadding]: `0.25rem 0`,
  [CssSizeVariablesNames.sapWcrAnalyticalTableExpandButtonHeight]: `var(--_ui5_button_base_height)`,
  [CssSizeVariablesNames.sapWcrAnalyticalTableExpandIconHeight]: '1rem',
  [CssSizeVariablesNames.sapWcrAnalyticalTableRowHeight]: `44px`,
  [CssSizeVariablesNames.sapWcrAnalyticalTableHeaderRowHeight]: `44px`,
  [CssSizeVariablesNames.sapWcrAnalyticalTableTreePaddingLevel1]: `1.5rem`,
  [CssSizeVariablesNames.sapWcrAnalyticalTableTreePaddingLevel2]: `2.25rem`,
  [CssSizeVariablesNames.sapWcrAnalyticalTableTreePaddingLevel3]: `2.75rem`,
  [CssSizeVariablesNames.sapWcrCheckBoxWidthHeight]: `2.75rem`,
  [CssSizeVariablesNames.sapWcrAnalyticalTableSelectionColumnWidth]: `44px`,
  [CssSizeVariablesNames.sapWcrToolbarHeight]: `2.75rem`,
  [CssSizeVariablesNames.sapWcrToolbarPopoverContentPadding]: `0.25rem 0.5rem`,
  [CssSizeVariablesNames.sapWcrToolbarSeparatorHeight]: `2rem`,
  [CssSizeVariablesNames.sapWcrFormGroupTitleHeight]: `2.75rem`,
  [CssSizeVariablesNames.sapWcrMessageViewListItemHeightSingle]: `2.75rem`,
  [CssSizeVariablesNames.sapWcrMessageViewListItemHeightByLine]: `3.325rem`,
  [CssSizeVariablesNames.sapWcrSplitterSize]: `1rem`,
  [CssSizeVariablesNames.sapWcrDialogHeaderHeight]: '2.75rem',
  [CssSizeVariablesNames.sapWcrDialogSubHeaderHeight]: '3rem',
  [CssSizeVariablesNames.sawWcrElementHeight]: ThemingParameters.sapElement_Height
};

export const CompactSizes = {
  [CssSizeVariablesNames.sapWcrBarHeight]: `2.5rem`,
  [CssSizeVariablesNames.sapWcrButtonTopBottomPadding]: `0.1875rem 0`,
  [CssSizeVariablesNames.sapWcrAnalyticalTableExpandButtonHeight]: `1.5rem`,
  [CssSizeVariablesNames.sapWcrAnalyticalTableExpandIconHeight]: '0.75rem',
  [CssSizeVariablesNames.sapWcrAnalyticalTableRowHeight]: `32px`,
  [CssSizeVariablesNames.sapWcrAnalyticalTableHeaderRowHeight]: `32px`,
  [CssSizeVariablesNames.sapWcrAnalyticalTableTreePaddingLevel1]: `1rem`,
  [CssSizeVariablesNames.sapWcrAnalyticalTableTreePaddingLevel2]: `1.5rem`,
  [CssSizeVariablesNames.sapWcrAnalyticalTableTreePaddingLevel3]: `2rem`,
  [CssSizeVariablesNames.sapWcrCheckBoxWidthHeight]: `2rem`,
  [CssSizeVariablesNames.sapWcrAnalyticalTableSelectionColumnWidth]: `32px`,
  [CssSizeVariablesNames.sapWcrToolbarHeight]: `2rem`,
  [CssSizeVariablesNames.sapWcrToolbarPopoverContentPadding]: `0.1875rem 0.375rem`,
  [CssSizeVariablesNames.sapWcrToolbarSeparatorHeight]: `1.5rem`,
  [CssSizeVariablesNames.sapWcrFormGroupTitleHeight]: `2rem`,
  [CssSizeVariablesNames.sapWcrMessageViewListItemHeightSingle]: `2rem`,
  [CssSizeVariablesNames.sapWcrMessageViewListItemHeightByLine]: `3.25rem`,
  [CssSizeVariablesNames.sapWcrDialogHeaderHeight]: '2.5rem',
  [CssSizeVariablesNames.sapWcrDialogSubHeaderHeight]: '2.25rem',
  [CssSizeVariablesNames.sawWcrElementHeight]: ThemingParameters.sapElement_Compact_Height
};
