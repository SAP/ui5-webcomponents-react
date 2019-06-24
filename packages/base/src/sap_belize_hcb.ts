import { HSLColor } from './HSLColor';

const darken = (amount, color) => HSLColor.of(color).darken(amount * 100).hsl;
const lighten = (amount, color) => HSLColor.of(color).lighten(amount * 100).hsl;

// High Contrast Colors
// Background Color
export const sapHC_StandardBackground = '#000000';
export const sapHC_HighlightBackground = '#7A5100';
export const sapHC_HighlightAltBackground = '#0F5D94';
export const sapHC_ReducedBackground = '#585858';
export const sapHC_ReducedAltBackground = '#A2A39F';

// Foreground Colors
export const sapHC_StandardForeground = '#ffffff';
export const sapHC_EnhancedForeground = '#03B803';
export const sapHC_ReducedForeground = '#666666';
export const sapHC_ReducedAltForeground = '#999999';

// Semantic Colors
export const sapHC_NegativeColor = '#ff5e5e';
export const sapHC_CriticalColor = '#ffab1d';
export const sapHC_PositiveColor = '#99cc99';
export const sapHC_NeutralColor = '#ffffff';

/*
 * Main UI Colors
 */
export const sapUiBrand = sapHC_HighlightBackground;
export const sapUiBaseColor = sapHC_StandardBackground;
export const sapUiHighlight = sapUiBrand;
export const sapUiBaseBG = sapHC_StandardBackground;
export const sapUiBaseBGFixed = sapHC_StandardBackground;
export const sapUiGlobalBackgroundColor = sapHC_StandardBackground;

/*
 * General Font Colors
 */
export const sapUiBaseText = sapHC_StandardForeground;
export const sapUiGroupTitleTextColor = sapUiBaseText;
export const sapUiContentForegroundTextColor = sapUiBaseText;
export const sapUiContentLabelColor = sapUiBaseText;
export const sapUiContentMarkerTextColor = sapUiBaseText;
export const sapUiContentContrastTextColor = sapUiBaseText;
export const sapContent_DisabledTextColor = sapHC_ReducedForeground;
export const sapUiContentContrastTextThreshold = 0.35;

/*
 * Foreground Elements
 */
export const sapUiContentIconColor = sapHC_StandardForeground;
export const sapUiContentContrastIconColor = sapUiContentIconColor;
export const sapUiContentMarkerIconColor = sapUiContentIconColor;
export const sapUiContentNonInteractiveIconColor = sapUiContentIconColor;
export const sapUiContentForegroundColor = sapUiBaseBG;
export const sapUiContentForegroundBorderColor = sapHC_StandardForeground;
export const sapUiContentImagePlaceholderBackground = sapUiBaseBG;
export const sapUiContentImagePlaceholderForegroundColor = sapUiContentIconColor;

/*
 * Selection - General Usage
 */
export const sapUiSelected = sapHC_HighlightAltBackground;
export const sapUiActive = sapUiHighlight;

/*
 * Semantic Text Colors
 */
export const sapUiNegativeText = sapHC_NegativeColor;
export const sapUiPositiveText = sapHC_PositiveColor;
export const sapUiCriticalText = sapHC_CriticalColor;
export const sapUiNeutralText = sapHC_NeutralColor;

/*
 * Semantic Element Colors
 */
export const sapUiNegativeElement = sapHC_NegativeColor;
export const sapUiPositiveElement = sapHC_PositiveColor;
export const sapUiCriticalElement = sapHC_CriticalColor;
export const sapUiNeutralElement = sapHC_NeutralColor;

/*
 * Semantic Border Colors
 */
export const sapUiErrorBorder = sapHC_NegativeColor;
export const sapUiSuccessBorder = sapHC_PositiveColor;
export const sapUiWarningBorder = sapHC_CriticalColor;
export const sapUiNeutralBorder = sapHC_NeutralColor;

/*
 * Semantic Background Colors
 */
export const sapUiErrorBG = sapHC_StandardBackground;
export const sapUiSuccessBG = sapHC_StandardBackground;
export const sapUiWarningBG = sapHC_StandardBackground;
export const sapUiNeutralBG = sapHC_StandardBackground;

/*
 * Launchpad Background Colors
 */
export const sapUiShellBackground = sapUiBaseBG;
export const sapUiShellBackgroundImage = sapUiBaseBG;
export const sapUiShellBackgroundImageOpacity = 1.0;
export const sapUiShellBackgroundImageRepeat = false;
export const sapUiShellBackgroundPatternColor = sapUiBaseBG;

/*
 * Extended Launchpad Colors
 */
export const sapUiShellColor = sapUiBaseBG;
export const sapUiShellBorderColor = sapHC_StandardForeground;
export const sapUiShellTextColor = sapUiBaseText;
export const sapUiShellGroupTextColor = HSLColor.of(sapUiShellBackground).contrast(
  sapUiShellTextColor,
  sapUiContentContrastTextColor,
  sapUiContentContrastTextThreshold
);
export const sapUiShellHoverBackground = sapUiBrand;
export const sapUiShellActiveBackground = sapUiBrand;
export const sapUiShellActiveTextColor = sapUiBaseText;
export const sapUiShellHoverToggleBackground = sapUiSelected;
export const sapUiShellContainerBackground = sapUiShellBackground;
export const sapUiShellAltContainerBackground = sapUiShellBackground;

/*
 * Tile Colors
 */
export const sapUiTileBackground = sapUiBaseBG;
export const sapUiTileBorderColor = sapHC_StandardForeground;
export const sapUiTileTitleTextColor = sapUiBaseText;
export const sapUiTileTextColor = sapUiBaseText;
export const sapUiTileIconColor = sapUiContentIconColor;

/*
 * Hyperlinks
 */
export const sapUiLink = '#ffffff';

/*
 * Page Header and Footer Colors
 */
export const sapUiPageHeaderBackground = sapUiBaseColor;
export const sapUiPageHeaderBorderColor = sapHC_StandardForeground;
export const sapUiPageHeaderTextColor = sapUiBaseText;
export const sapUiPageFooterBackground = sapUiBaseBG;
export const sapUiPageFooterBorderColor = sapHC_StandardForeground;
export const sapUiPageFooterTextColor = sapUiBaseText;

/*
 * Title Toolbars and Headers for Control Group
 */
export const sapUiToolbarBackground = sapUiBaseBG;
export const sapUiGroupTitleBackground = sapUiBaseBG;
export const sapUiGroupTitleBorderColor = sapHC_StandardForeground;
export const sapUiToolbarSeparatorColor = sapHC_StandardForeground;
export const sapUiListHeaderBackground = sapUiBaseBG;
export const sapUiInfobarBackground = sapUiBaseBG;
export const sapUiInfobarHoverBackground = sapUiHighlight;
export const sapUiInfobarActiveBackground = sapUiHighlight;

/*
 * List and Table Colors
 */
export const sapUiListBackground = sapUiBaseBG;
export const sapUiListBorderColor = sapHC_ReducedAltForeground;
export const sapUiListTextColor = sapUiBaseText;
export const sapUiListHighlightColor = sapUiHighlight;
export const sapUiListActiveBackground = sapUiListHighlightColor;
export const sapUiListActiveTextColor = sapUiBaseText;
export const sapUiListSelectionBackgroundColor = sapUiSelected;
export const sapUiListHoverBackground = sapUiHighlight;
export const sapUiListSelectionHoverBackground = sapUiListHoverBackground;
export const sapUiListGroupHeaderBackground = sapHC_ReducedBackground;
export const sapUiListFooterBackground = sapUiListBackground;
export const sapUiListFooterTextColor = sapUiPageFooterTextColor;
export const sapUiListTableGroupHeaderBackground = sapUiListBackground;
export const sapUiListTableGroupHeaderBorderColor = sapHC_StandardForeground;
export const sapUiListTableGroupHeaderTextColor = sapUiBaseText;
export const sapUiListTableFooterBorder = sapHC_StandardForeground;
export const sapUiListTableFixedBorder = sapHC_StandardForeground;
export const sapUiListVerticalBorderColor = sapHC_StandardForeground;

/*
 * Main Button Colors
 */
export const sapUiButtonBackground = sapUiBaseBG;
export const sapUiButtonBorderColor = sapHC_StandardForeground;
export const sapUiButtonTextColor = sapUiBaseText;
export const sapUiButtonHoverBackground = sapUiHighlight;
export const sapUiButtonHoverBorderColor = sapUiButtonBorderColor;
export const sapUiButtonEmphasizedBackground = sapUiButtonBackground;
export const sapUiButtonEmphasizedBorderColor = sapUiButtonBorderColor;
export const sapUiButtonEmphasizedTextColor = sapUiButtonTextColor;
export const sapUiButtonRejectBackground = sapUiButtonBackground;
export const sapUiButtonAcceptBackground = sapUiButtonBackground;

/*
 * Extended Button Colors
 */
export const sapUiButtonIconColor = sapUiContentIconColor;
export const sapUiButtonActiveBackground = sapUiActive;
export const sapUiButtonActiveBorderColor = sapUiButtonBorderColor;
export const sapUiButtonActiveTextColor = sapUiContentContrastTextColor;
export const sapUiButtonEmphasizedHoverBackground = sapUiButtonHoverBackground;
export const sapUiButtonEmphasizedHoverBorderColor = sapUiButtonHoverBorderColor;
export const sapUiButtonEmphasizedActiveBackground = sapUiActive;
export const sapUiButtonEmphasizedActiveBorderColor = sapUiButtonBorderColor;
export const sapUiButtonEmphasizedTextShadow = 'none';
export const sapUiButtonAcceptBorderColor = sapUiButtonBorderColor;
export const sapUiButtonAcceptHoverBackground = sapUiButtonHoverBackground;
export const sapUiButtonAcceptHoverBorderColor = sapUiButtonHoverBorderColor;
export const sapUiButtonAcceptActiveBackground = sapUiActive;
export const sapUiButtonAcceptActiveBorderColor = sapUiButtonBorderColor;
export const sapUiButtonAcceptTextColor = sapUiButtonTextColor;
export const sapUiButtonRejectBorderColor = sapUiButtonBorderColor;
export const sapUiButtonRejectHoverBackground = sapUiButtonHoverBackground;
export const sapUiButtonRejectHoverBorderColor = sapUiButtonHoverBackground;
export const sapUiButtonRejectActiveBackground = sapUiActive;
export const sapUiButtonRejectActiveBorderColor = sapUiButtonBorderColor;
export const sapUiButtonRejectTextColor = sapUiButtonTextColor;
export const sapUiButtonLiteBackground = sapUiButtonBackground;
export const sapUiButtonLiteBorderColor = sapUiButtonBorderColor;
export const sapUiButtonLiteTextColor = sapUiButtonTextColor;
export const sapUiButtonLiteHoverBackground = sapUiButtonHoverBackground;
export const sapUiButtonLiteHoverBorderColor = sapUiButtonHoverBorderColor;
export const sapUiButtonLiteActiveBackground = sapUiActive;
export const sapUiButtonLiteActiveBorderColor = sapUiButtonBorderColor;
export const sapUiButtonHeaderTextColor = sapUiButtonTextColor;
export const sapUiButtonFooterTextColor = sapUiButtonTextColor;
export const sapUiButtonFooterHoverBackground = sapUiButtonHoverBackground;
export const sapUiButtonActionSelectBackground = sapUiListBackground;
export const sapUiButtonActionSelectBorderColor = sapUiListBorderColor;
export const sapUiButtonLiteActionSelectHoverBackground = sapUiListHoverBackground;
export const sapUiToggleButtonPressedBackground = darken(0.1, sapUiSelected);
export const sapUiToggleButtonPressedBorderColor = darken(0.5, sapUiToggleButtonPressedBackground);
export const sapUiToggleButtonPressedTextColor = sapUiContentContrastTextColor;
export const sapUiToggleButtonPressedHoverBackground = lighten(0.1, sapUiToggleButtonPressedBackground);
export const sapUiToggleButtonPressedHoverBorderColor = sapUiToggleButtonPressedHoverBackground;
export const sapUiSegmentedButtonBackground = sapUiButtonBackground;
export const sapUiSegmentedButtonBorderColor = sapUiButtonBorderColor;
export const sapUiSegmentedButtonTextColor = sapUiButtonTextColor;
export const sapUiSegmentedButtonHoverBackground = sapUiButtonHoverBackground;
export const sapUiSegmentedButtonActiveBackground = sapUiActive;
export const sapUiSegmentedButtonActiveTextColor = sapUiContentContrastTextColor;
export const sapUiSegmentedButtonSelectedBackground = sapUiSelected;
export const sapUiSegmentedButtonSelectedTextColor = sapUiContentContrastTextColor;
export const sapUiSegmentedButtonSelectedHoverBackground = sapUiButtonHoverBackground;
export const sapUiSegmentedButtonSelectedHoverBorderColor = sapUiButtonHoverBorderColor;
export const sapUiSegmentedButtonIconColor = sapUiContentIconColor;
export const sapUiSegmentedButtonActiveIconColor = sapUiContentContrastIconColor;
export const sapUiSegmentedButtonSelectedIconColor = sapUiContentContrastIconColor;
export const sapUiSegmentedButtonFooterBorderColor = sapUiButtonBorderColor;
export const sapUiSegmentedButtonFooterHoverBackground = sapUiButtonHoverBackground;

/*
 * Input Controls
 */
export const sapUiFieldBackground = sapUiBaseBG;
export const sapUiFieldBorderColor = sapHC_StandardForeground;
export const sapUiFieldTextColor = sapUiBaseText;
export const sapUiFieldPlaceholderTextColor = sapHC_ReducedAltForeground;
export const sapUiFieldHoverBackground = sapUiFieldBackground;
export const sapUiFieldHoverBorderColor = sapUiFieldBorderColor;
export const sapUiFieldActiveBackground = sapUiHighlight;
export const sapUiFieldActiveBorderColor = sapUiFieldBorderColor;
export const sapUiFieldFocusBackground = sapUiFieldBackground;
export const sapUiFieldFocusBorderColor = sapUiFieldBorderColor;
export const sapField_Focus_BorderColor = sapUiFieldBorderColor;
export const sapUiFieldReadOnlyBackground = sapHC_ReducedBackground;
export const sapUiFieldReadOnlyBorderColor = sapHC_ReducedAltForeground;
export const sapUiFieldRequiredColor = sapUiBaseText;
export const sapUiFieldWarningColor = sapUiFieldBorderColor;
export const sapUiFieldWarningBackground = sapUiFieldBackground;
export const sapUiFieldInvalidColor = sapUiFieldBorderColor;
export const sapUiFieldInvalidBackground = sapUiHighlight;
export const sapUiFieldSuccessColor = sapUiFieldBackground;
export const sapUiFieldSuccessBackground = sapUiFieldBackground;
export const sapUiFieldHelpBackground = sapUiFieldBackground;
export const sapUiFieldHoverHelpBackground = sapUiHighlight;
export const sapUiFieldFocusHelpBackground = sapUiFieldFocusBackground;
export const sapUiFieldReadOnlyHelpBackground = sapUiFieldReadOnlyBackground;

/*
 * Container Colors
 */
export const sapUiGroupContentBackground = sapUiBaseBG;
export const sapUiGroupContentBorderColor = sapHC_StandardForeground;
export const sapUiObjectHeaderBackground = sapUiBaseColor;
export const sapUiObjectHeaderBorderColor = sapUiPageHeaderBorderColor;
export const sapUiScrollBarFaceColor = sapHC_ReducedAltForeground;
export const sapUiScrollBarTrackColor = sapUiBaseBG;
export const sapUiScrollBarBorderColor = sapUiScrollBarFaceColor;
export const sapUiScrollBarSymbolColor = sapUiContentIconColor;
export const sapUiScrollBarHoverFaceColor = sapHC_StandardForeground;

/*
 * Focus Colors
 */
export const sapUIContentFocusColor = sapHC_StandardForeground;
export const sapUiContentContrastFocusColor = sapHC_StandardForeground;

/*
 * Effect Colors
 */
export const sapUiContentShadowColor = '#000000';
export const sapUiContentContrastShadowColor = '#ffffff';

/*
 * Special Colors
 */

export const sapUiBlockLayerBackground = sapUiBaseBG;
export const sapUiContentSearchHighlightColor = sapUiHighlight;
export const sapUiContentHelpColor = sapHC_EnhancedForeground;

/*
 * Drag and Drop Colors
 */
export const sapUiDragAndDropColor = sapUiContentNonInteractiveIconColor;
export const sapUiDragAndDropBackground = sapUiGroupContentBackground;
export const sapUiDragAndDropBorderColor = sapUiContentForegroundBorderColor;
export const sapUiDragAndDropActiveColor = sapUiContentHelpColor;
export const sapUiDragAndDropActiveBackground = sapUiGroupContentBackground;
export const sapUiDragAndDropActiveBorderColor = sapUiContentHelpColor;

/*
 * Shadow Concept
 */
export const sapUiShadowLevel0 = `0 0 0 1px ${sapUiContentShadowColor}`;
export const sapUiShadowLevel1 = `	0 0 1rem 0 ${
  HSLColor.of(sapUiContentContrastShadowColor).setAlpha(0.5).hsl
}, 0 0 0 2px ${sapUiContentShadowColor}`;
export const sapUiShadowLevel2 = `0 0.25rem 2rem 0 ${
  HSLColor.of(sapUiContentContrastShadowColor).setAlpha(0.6).hsl
}, 0 0 0 2px ${sapUiContentShadowColor}`;
export const sapUiShadowLevel3 = `0 0.625rem 4rem 0 ${
  HSLColor.of(sapUiContentContrastShadowColor).setAlpha(0.8).hsl
}, 0 0 0 2px ${sapUiContentShadowColor}`;
export const sapUiShadowText = `none`;
export const sapUiShadowHeader = `	inset 0 -0.125rem 0 0 ${sapUiObjectHeaderBorderColor}`;
