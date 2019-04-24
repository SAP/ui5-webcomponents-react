import { HSLColor } from './HSLColor';

const darken = (amount, color) => HSLColor.of(color).darken(amount * 100).hsl;
const lighten = (amount, color) => HSLColor.of(color).lighten(amount * 100).hsl;
const desaturate = (amount, color) => HSLColor.of(color).desaturate(amount * 100).hsl;
const saturate = (amount, color) => HSLColor.of(color).saturate(amount * 100).hsl;

// Primary Colors
export const sapColorPrimary1 = '#3f5161';
export const sapColorPrimary2 = '#427cac';
export const sapColorPrimary3 = '#eff4f9';
export const sapColorPrimary4 = '#ffffff';
export const sapColorPrimary5 = '#fafafa';
export const sapColorPrimary6 = '#bfbfbf';
export const sapColorPrimary7 = '#333333';

// Secondary Colors
export const sapColorSecondary1 = '#e09d00';
export const sapColorSecondary2 = '#e6600d';
export const sapColorSecondary3 = '#c14646';
export const sapColorSecondary4 = '#ab218e';
export const sapColorSecondary5 = '#678bc7';
export const sapColorSecondary6 = '#0092d1';
export const sapColorSecondary7 = '#1a9898';
export const sapColorSecondary8 = '#759421';

// Semantic Colors
export const sapColorSemanticNegative = '#bb0000';
export const sapColorSemanticPositive = '#2B7D2B';
export const sapColorSemanticCritical = '#e78c07';
export const sapColorSemanticNeutral = '#5E696E';

// Effect Colors
export const sapContent_ShadowColor = '#000000';
export const sapContent_ContrastShadowColor = '#ffffff';

// Accent Colors
export const sapAccentColor1 = '#e09d00';
export const sapAccentColor2 = '#e6600d';
export const sapAccentColor3 = '#c14646';
export const sapAccentColor4 = '#ab218e';
export const sapAccentColor5 = '#678bc7';
export const sapAccentColor6 = '#0092d1';
export const sapAccentColor7 = '#1a9898';
export const sapAccentColor8 = '#759421';

/*
 * Custom colors where the design guidelines seem weird
 */
export const sapMessageToastBackground = sapColorPrimary1;
export const sapMessageToastTextColor = sapColorPrimary5;
export const sapDarkPageFooter = HSLColor.of(sapColorPrimary1).darken(8).hsl;
export const sapDarkPageFooterBorder = HSLColor.of(sapDarkPageFooter).lighten(12).hsl;

/*
 * Main UI Colors
 */
export const sapUiBrand = sapColorPrimary2;
export const sapUiBaseColor = sapColorPrimary3;
export const sapUiHighlight = sapUiBrand;
export const sapUiBaseBG = sapColorPrimary5;
export const sapUiGlobalBackgroundColor = sapColorPrimary5;

/*
 * General Font Colors
 */
export const sapUiBaseText = sapColorPrimary7;
export const sapUiGroupTitleTextColor = sapUiBaseText;
export const sapUiContentForegroundTextColor = sapUiBaseText;
export const sapUiContentLabelColor = HSLColor.of(sapUiBaseText).lighten(20).hsl;
export const sapUiContentMarkerTextColor = HSLColor.of(sapAccentColor7).darken(8).hsl;
export const sapUiContentContrastTextColor = sapColorPrimary4;
export const sapUiContentContrastTextThreshold = 0.65;

/*
 * Semantic Text Colors
 */
export const sapUiNegativeText = sapColorSemanticNegative;
export const sapUiPositiveText = sapColorSemanticPositive;
export const sapUiCriticalText = sapColorSemanticCritical;
export const sapUiNeutralText = sapColorSemanticNeutral;

/*
 * Semantic Element Colors
 */
export const sapUiNegativeElement = sapColorSemanticNegative;
export const sapUiPositiveElement = sapColorSemanticPositive;
export const sapUiCriticalElement = sapColorSemanticCritical;
export const sapUiNeutralElement = sapColorSemanticNeutral;

/*
 * Semantic Border Colors
 */
export const sapUiErrorBorder = HSLColor.of(sapColorSemanticNegative).lighten(10).hsl;
export const sapUiSuccessBorder = HSLColor.of(sapColorSemanticPositive).lighten(10).hsl;
export const sapUiWarningBorder = HSLColor.of(sapColorSemanticCritical).lighten(10).hsl;
export const sapUiNeutralBorder = sapColorSemanticNeutral;

/*
 * Semantic Background Colors
 */
export const sapUiErrorBG = HSLColor.of(sapColorSemanticNegative).lighten(58).hsl;
export const sapUiSuccessBG = HSLColor.of(sapColorSemanticPositive).lighten(60).hsl;
export const sapUiWarningBG = HSLColor.of(sapColorSemanticCritical).lighten(46).hsl;
export const sapUiNeutralBG = HSLColor.of(sapColorSemanticNeutral).lighten(56).hsl;

/*
 * Hyperlinks
 */
export const sapUiLink = '#0070b1';

/*
 * Selection - General Usage
 */
export const sapUiSelected = sapUiHighlight;
export const sapUiActive = sapUiHighlight;

/*
 * Foreground Elements
 */
export const sapUiContentIconColor = HSLColor.of(sapUiHighlight).darken(10).hsl;
export const sapUiContentContrastIconColor = sapColorPrimary4;
export const sapUiContentMarkerIconColor = sapAccentColor5;
export const sapUiContentNonInteractiveIconColor = HSLColor.of(sapColorPrimary6).darken(22).hsl;
export const sapUiContentForegroundColor = HSLColor.of(sapColorPrimary6).lighten(15).hsl;
export const sapUiContentForegroundBorderColor = sapColorPrimary6;
export const sapUiContentImagePlaceholderBackground = HSLColor.of(sapUiBaseColor).darken(9).hsl;
export const sapUiContentImagePlaceholderForegroundColor = HSLColor.of(sapUiBaseColor).lighten(5).hsl;

/*
 * Page Header and Footer Colors
 */
export const sapUiPageHeaderBackground = sapUiBaseColor;
export const sapUiPageHeaderBorderColor = darken(0.08, sapUiPageHeaderBackground);
export const sapUiPageHeaderTextColor = lighten(0.2, sapUiBaseText);
export const sapUiPageFooterBackground = sapColorPrimary4;
export const sapUiPageFooterBorderColor = darken(0.08, sapUiPageFooterBackground);
export const sapUiPageFooterTextColor = sapUiBaseText;

/*
 * List and Table Colors
 */
export const sapUiListBackground = sapColorPrimary4;
export const sapUiListBorderColor = darken(0.1015, sapUiListBackground);
export const sapUiListTextColor = sapUiBaseText;
export const sapUiListHighlightColor = sapUiHighlight;
export const sapUiListActiveBackground = sapUiListHighlightColor;
export const sapUiListActiveTextColor = sapUiContentContrastTextColor;
export const sapUiListSelectionBackgroundColor = lighten(0.47, desaturate(0.02, sapUiSelected));
export const sapUiListSelectionHoverBackground = darken(0.03, sapUiListSelectionBackgroundColor);
export const sapUiListHoverBackground = darken(0.06, sapUiListBackground);
export const sapUiListGroupHeaderBackground = sapUiListBackground;
export const sapUiListFooterBackground = darken(0.09, sapUiBaseColor);
export const sapUiListFooterTextColor = sapUiPageFooterTextColor;
export const sapUiListTableGroupHeaderBackground = darken(0.05, sapUiListBackground);
export const sapUiListTableGroupHeaderBorderColor = darken(0.1, sapUiListBorderColor);
export const sapUiListTableGroupHeaderTextColor = sapUiContentMarkerTextColor;
export const sapUiListTableFooterBorder = darken(0.1, sapUiListBorderColor);
export const sapUiListTableFixedBorder = darken(0.3, sapUiListBorderColor);
export const sapUiListVerticalBorderColor = darken(0.03, sapUiListBorderColor);

/*
 * Title Toolbars and Headers for Control Group
 */
export const sapUiToolbarBackground = 'transparent';
export const sapUiGroupTitleBackground = 'transparent';
export const sapUiGroupTitleBorderColor = lighten(0.05, sapColorPrimary6);
export const sapUiToolbarSeparatorColor = HSLColor.of(sapColorPrimary1).setAlpha(0.2).hsl;
export const sapUiListHeaderBackground = darken(0.03, sapColorPrimary4);
export const sapUiInfobarBackground = darken(0.05, sapAccentColor7);
export const sapUiInfobarHoverBackground = darken(0.03, sapUiInfobarBackground);
export const sapUiInfobarActiveBackground = sapUiListHighlightColor;

/*
 * Main Button Colors
 */
export const sapUiButtonBackground = darken(0.03, sapColorPrimary4);
export const sapUiButtonBorderColor = darken(0.3, sapUiButtonBackground);
export const sapUiButtonTextColor = darken(0.1, sapUiHighlight);
export const sapUiButtonHoverBackground = darken(0.05, sapUiButtonBackground);
export const sapUiButtonHoverBorderColor = sapUiButtonBorderColor;
export const sapUiButtonEmphasizedBackground = lighten(0.1, saturate(0.1, sapUiHighlight));
export const sapUiButtonEmphasizedBorderColor = darken(0.05, sapUiButtonEmphasizedBackground);
export const sapUiButtonEmphasizedTextColor = sapColorPrimary4;
export const sapUiButtonRejectBackground = sapUiButtonBackground;
export const sapUiButtonAcceptBackground = sapUiButtonBackground;

/*
 * Extended Button Colors
 */
export const sapUiButtonIconColor = sapUiContentIconColor;
export const sapUiButtonActiveBackground = sapUiActive;
export const sapUiButtonActiveBorderColor = sapUiActive;
export const sapUiButtonActiveTextColor = sapUiContentContrastTextColor;
export const sapUiButtonEmphasizedHoverBackground = darken(0.05, sapUiButtonEmphasizedBackground);
export const sapUiButtonEmphasizedHoverBorderColor = darken(0.05, sapUiButtonEmphasizedBackground);
export const sapUiButtonEmphasizedActiveBackground = sapUiActive;
export const sapUiButtonEmphasizedActiveBorderColor = sapUiActive;
export const sapUiButtonEmphasizedTextShadow = sapContent_ShadowColor;
export const sapUiButtonAcceptBorderColor = sapColorSemanticPositive;
export const sapUiButtonAcceptHoverBackground = sapUiButtonHoverBackground;
export const sapUiButtonAcceptHoverBorderColor = sapColorSemanticPositive;
export const sapUiButtonAcceptActiveBackground = sapColorSemanticPositive;
export const sapUiButtonAcceptActiveBorderColor = sapColorSemanticPositive;
export const sapUiButtonAcceptTextColor = sapColorSemanticPositive;
export const sapUiButtonRejectBorderColor = sapColorSemanticNegative;
export const sapUiButtonRejectHoverBackground = sapUiButtonHoverBackground;
export const sapUiButtonRejectHoverBorderColor = sapColorSemanticNegative;
export const sapUiButtonRejectActiveBackground = sapColorSemanticNegative;
export const sapUiButtonRejectActiveBorderColor = sapColorSemanticNegative;
export const sapUiButtonRejectTextColor = sapColorSemanticNegative;
export const sapUiButtonLiteBackground = 'transparent';
export const sapUiButtonLiteBorderColor = 'transparent';
export const sapUiButtonLiteTextColor = sapUiButtonTextColor;
export const sapUiButtonLiteHoverBackground = HSLColor.of(darken(0.22, sapUiButtonHoverBackground)).setAlpha(0.5).hsl;
export const sapUiButtonLiteHoverBorderColor = sapUiButtonLiteHoverBackground;
export const sapUiButtonLiteActiveBackground = sapUiActive;
export const sapUiButtonLiteActiveBorderColor = sapUiActive;
export const sapUiButtonHeaderTextColor = sapUiButtonTextColor;
export const sapUiButtonFooterTextColor = sapUiButtonTextColor;
export const sapUiButtonFooterHoverBackground = sapUiButtonLiteHoverBackground;
export const sapUiButtonActionSelectBackground = sapUiListBackground;
export const sapUiButtonActionSelectBorderColor = sapUiListBackground;
export const sapUiButtonLiteActionSelectHoverBackground = sapUiListHoverBackground;
export const sapUiToggleButtonPressedBackground = darken(0.1, sapUiSelected);
export const sapUiToggleButtonPressedBorderColor = darken(0.05, sapUiToggleButtonPressedBackground);
export const sapUiToggleButtonPressedTextColor = sapUiContentContrastTextColor;
export const sapUiToggleButtonPressedHoverBackground = lighten(0.1, sapUiToggleButtonPressedBackground);
export const sapUiToggleButtonPressedHoverBorderColor = sapUiToggleButtonPressedHoverBackground;
export const sapUiSegmentedButtonBackground = lighten(0.03, sapUiButtonBackground);
export const sapUiSegmentedButtonBorderColor = lighten(0.08, sapUiButtonBorderColor);
export const sapUiSegmentedButtonTextColor = sapUiButtonTextColor;
export const sapUiSegmentedButtonHoverBackground = sapUiButtonHoverBackground;
export const sapUiSegmentedButtonActiveBackground = sapUiActive;
export const sapUiSegmentedButtonActiveTextColor = sapUiContentContrastTextColor;
export const sapUiSegmentedButtonSelectedBackground = darken(0.1, sapUiSelected);
export const sapUiSegmentedButtonSelectedTextColor = sapUiContentContrastTextColor;
export const sapUiSegmentedButtonSelectedHoverBackground = sapUiSelected;
export const sapUiSegmentedButtonSelectedHoverBorderColor = sapUiSelected;
export const sapUiSegmentedButtonIconColor = sapUiContentIconColor;
export const sapUiSegmentedButtonActiveIconColor = sapUiContentContrastIconColor;
export const sapUiSegmentedButtonSelectedIconColor = sapUiContentContrastIconColor;
export const sapUiSegmentedButtonFooterBorderColor = lighten(0.08, sapUiButtonBorderColor);
export const sapUiSegmentedButtonFooterHoverBackground = sapUiButtonHoverBackground;

/*
 * Input Controls
 */
export const sapUiFieldBackground = sapColorPrimary4;
export const sapUiFieldBorderColor = sapColorPrimary6;
export const sapUiFieldTextColor = '#000000';
export const sapUiFieldPlaceholderTextColor = lighten(0.46, sapUiFieldTextColor);
export const sapUiFieldHoverBackground = sapUiFieldBackground;
export const sapUiFieldHoverBorderColor = sapUiHighlight;
export const sapUiFieldActiveBackground = sapUiActive;
export const sapUiFieldActiveBorderColor = sapUiActive;
export const sapUiFieldFocusBackground = sapUiFieldBackground;
export const sapUiFieldFocusBorderColor = sapUiFieldBorderColor;
export const sapUiFieldReadOnlyBackground = HSLColor.of(darken(0.05, sapUiFieldBackground)).setAlpha(0.5).hsl;
export const sapUiFieldReadOnlyBorderColor = lighten(0.05, sapUiFieldBorderColor);
export const sapUiFieldRequiredColor = sapAccentColor3;
export const sapUiFieldWarningColor = sapUiWarningBorder;
export const sapUiFieldWarningBackground = sapUiFieldBackground;
export const sapUiFieldInvalidColor = sapUiErrorBorder;
export const sapUiFieldInvalidBackground = sapUiFieldBackground;
export const sapUiFieldSuccessColor = sapUiSuccessBorder;
export const sapUiFieldSuccessBackground = sapUiFieldBackground;
export const sapUiFieldHelpBackground = sapUiFieldBackground;
export const sapUiFieldHoverHelpBackground = sapUiHighlight;
export const sapUiFieldFocusHelpBackground = sapUiFieldFocusBackground;
export const sapUiFieldReadOnlyHelpBackground = sapUiFieldReadOnlyBackground;

/*
 * Container Colors
 */
export const sapUiGroupContentBackground = lighten(0.02, sapUiBaseBG);
export const sapUiGroupContentBorderColor = darken(0.08, sapUiGroupContentBackground);
export const sapUiObjectHeaderBackground = sapUiBaseColor;
export const sapUiObjectHeaderBorderColor = darken(0.08, sapUiObjectHeaderBackground);
export const sapUiScrollBarFaceColor = darken(0.05, sapColorPrimary6);
export const sapUiScrollBarTrackColor = lighten(0.3, sapUiScrollBarFaceColor);
export const sapUiScrollBarBorderColor = sapUiScrollBarFaceColor;
export const sapUiScrollBarSymbolColor = sapUiContentIconColor;
export const sapUiScrollBarHoverFaceColor = darken(0.03, sapUiScrollBarFaceColor);

/*
 * Launchpad Background Colors
 */
export const sapUiShellBackground = darken(0.11, desaturate(0.06, sapUiBaseColor));
export const sapUiShellBackgroundImage = `linear-gradient(to bottom,
  ${darken(0.078, saturate(0.06, sapUiShellBackground))},
  ${lighten(0.078, desaturate(0.16, sapUiShellBackground))})`;
export const sapUiShellBackgroundImageOpacity = 1.0;
export const sapUiShellBackgroundImageRepeat = false;
export const sapUiShellBackgroundPatternColor = HSLColor.of(sapColorPrimary4).setAlpha(0.08).hsl;

/*
 * Extended Launchpad Colors
 */
export const sapUiShellColor = 'transparent';
export const sapUiShellBorderColor = 'transparent';
export const sapUiShellTextColor = HSLColor.of(sapUiShellBackground).contrast(
  darken(0.1, sapUiBrand),
  sapUiContentContrastTextColor,
  sapUiContentContrastTextThreshold
);
export const sapUiShellGroupTextColor = HSLColor.of(sapUiShellBackground).contrast(
  darken(0.165, desaturate(1, sapUiShellTextColor)),
  sapUiContentContrastTextColor,
  sapUiContentContrastTextThreshold
);
export const sapUiShellHoverBackground = darken(0.1, sapUiBrand);
export const sapUiShellActiveBackground = darken(0.17, sapUiBrand);
export const sapUiShellActiveTextColor = lighten(0.55, sapUiBrand);
export const sapUiShellHoverToggleBackground = darken(0.32, sapUiBrand);
export const sapUiShellContainerBackground = lighten(0.16, sapUiShellBackground);
export const sapUiShellAltContainerBackground = darken(0.28, saturate(0.06, sapUiShellBackground));

/*
 * Tile Colors
 */
export const sapUiTileBackground = sapColorPrimary4;
export const sapUiTileBorderColor = 'transparent';
export const sapUiTileTitleTextColor = sapUiBaseText;
export const sapUiTileTextColor = lighten(0.2, sapUiTileTitleTextColor);
export const sapUiTileIconColor = lighten(0.34, sapUiContentIconColor);

/*
 * Focus Colors
 */
export const sapUIContentFocusColor = '#000000';
export const sapUiContentContrastFocusColor = '#ffffff';

/*
 * Effect Colors
 */
export const sapUiContentShadowColor = '#000000';
export const sapUiContentContrastShadowColor = '#ffffff';

/*
 * Special Colors
 */
export const sapUiContentHelpColor = '#3f8600';
export const sapUiBlockLayerBackground = '#000000';
export const sapUiContentSearchHighlightColor = '#d4f7db';
export const sapUiCalendarColorToday = sapAccentColor4;
export const sapUiHCReducedForeground = '#666666';

/*
 * Special Colors
 */
export const sapUiDragAndDropColor = sapUiContentNonInteractiveIconColor;
export const sapUiDragAndDropBackground = sapUiGroupContentBackground;
export const sapUiDragAndDropBorderColor = sapUiContentForegroundBorderColor;
export const sapUiDragAndDropActiveColor = sapUiLink;
export const sapUiDragAndDropActiveBackground = HSLColor.of(sapUiLink).setAlpha(0.05).hsl;
export const sapUiDragAndDropActiveBorderColor = sapUiLink;

/*
 * Shadow Concept
 */
export const sapUiShadowLevel0 = `0 0 0 1px ${HSLColor.of(sapUiContentShadowColor).setAlpha(0.15).hsl}`;
export const sapUiShadowLevel1 = `0px 0.125rem 0.5rem 0 ${
  HSLColor.of(sapUiContentShadowColor).setAlpha(0.15).hsl
}, ${sapUiShadowLevel0}`;
export const sapUiShadowLevel2 = `0px 0.625rem 1.875rem 0 ${
  HSLColor.of(sapUiContentShadowColor).setAlpha(0.15).hsl
}, ${sapUiShadowLevel0}`;
export const sapUiShadowLevel3 = `0px 1.25rem 5rem 0 ${
  HSLColor.of(sapUiContentShadowColor).setAlpha(0.15).hsl
}, ${sapUiShadowLevel0}`;
export const sapUiShadowText = `0 0 0.125rem ${sapUiContentContrastShadowColor}`;
export const sapUiShadowHeader = `0 0.125rem 0 0 ${sapUiObjectHeaderBackground}, inset 0 -0.125rem 0 0 ${sapUiObjectHeaderBorderColor}`;

// needed for typings
export const sapUiInformativeElement = '#0a6ed1';
