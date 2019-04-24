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

// Semantic Colors
export const sapColorSemanticNegative = lighten(0.35, '#bb0000');
export const sapColorSemanticPositive = lighten(0.45, '#2B7D2B');
export const sapColorSemanticCritical = lighten(0.22, '#e78c07');
export const sapColorSemanticNeutral = lighten(0.44, '#5E696E');

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
 * Custom colors where the design guidelines seem weird..
 */
export const sapMessageToastBackground = sapColorPrimary1;
export const sapMessageToastTextColor = sapColorPrimary5;
export const sapDarkPageFooter = darken(0.08, sapColorPrimary1);
export const sapDarkPageFooterBorder = lighten(0.12, sapDarkPageFooter);

/*
 * Override Color Codes for Belize Deep Theme
 */
// Secondary Colors
export const sapColorSecondary1 = '#ffb914';
export const sapColorSecondary2 = '#f58c4b';
export const sapColorSecondary3 = '#d88b8b';
export const sapColorSecondary4 = '#e57bcf';
export const sapColorSecondary5 = '#8ca7d5';
export const sapColorSecondary6 = '#05b4ff';
export const sapColorSecondary7 = '#21c4c4';
export const sapColorSecondary8 = '#afd645';

/*
 * Main UI Colors
 */
export const sapUiBrand = sapColorPrimary2;
export const sapUiBaseColor = sapColorPrimary1;
export const sapUiHighlight = lighten(0.3, saturate(0.4, sapUiBrand));
// export const sapUiBaseBG = sapColorPrimary1; This was the value according to the specs, but UI5 and examples show it is primary5
export const sapUiBaseBG = sapColorPrimary5;
export const sapUiBaseBGFixed = sapColorPrimary5;
export const sapUiGlobalBackgroundColor = sapColorPrimary1;

/*
 * General Font Colors
 */
export const sapUiBaseText = sapColorPrimary5;
export const sapUiGroupTitleTextColor = sapUiBaseText;
export const sapUiContentForegroundTextColor = sapUiBaseText;
export const sapUiContentLabelColor = darken(0.115, sapUiBaseText);
export const sapUiContentMarkerTextColor = lighten(0.492, saturate(0.24, sapUiBaseColor));
export const sapUiContentContrastTextColor = darken(0.08, sapColorPrimary1);
export const sapUiContentContrastTextThreshold = 0.55;

/*
 * Foreground Elements
 */
export const sapUiContentIconColor = lighten(0.12, sapUiHighlight);
export const sapUiContentContrastIconColor = darken(0.08, sapColorPrimary1);
export const sapUiContentMarkerIconColor = lighten(0.1, sapAccentColor5);
export const sapUiContentNonInteractiveIconColor = lighten(0.35, sapUiBaseColor);
export const sapUiContentForegroundColor = lighten(0.07, sapUiBaseColor);
export const sapUiContentForegroundBorderColor = lighten(0.3, sapUiBaseColor);
export const sapUiContentImagePlaceholderBackground = lighten(0.2, sapUiBaseColor);
export const sapUiContentImagePlaceholderForegroundColor = lighten(0.05, sapUiBaseColor);

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
export const sapUiErrorBorder = sapColorSemanticNegative;
export const sapUiSuccessBorder = sapColorSemanticPositive;
export const sapUiWarningBorder = sapColorSemanticCritical;
export const sapUiNeutralBorder = sapColorSemanticNeutral;

/*
 * Semantic Background Colors
 */
export const sapUiErrorBG = darken(0.6, sapColorSemanticNegative);
export const sapUiSuccessBG = darken(0.6, sapColorSemanticPositive);
export const sapUiWarningBG = darken(0.5, sapColorSemanticCritical);
export const sapUiNeutralBG = darken(0.6, sapColorSemanticNeutral);

/*
 * Launchpad Background Colors
 */
export const sapUiShellBackground = lighten(0.203, saturate(0.04, sapUiBaseColor));
export const sapUiShellBackgroundImage = `linear-gradient(to bottom,
  ${darken(0.24, saturate(0.15, sapUiShellBackground))},
  ${lighten(0.227, saturate(0.24, sapUiShellBackground))})`;
export const sapUiShellBackgroundImageOpacity = 1.0;
export const sapUiShellBackgroundImageRepeat = false;
export const sapUiShellBackgroundPatternColor = HSLColor.of(sapColorPrimary4).setAlpha(0.08).hsl;

/*
 * Extended Launchpad Colors
 */
export const sapUiShellColor = 'transparent';
export const sapUiShellBorderColor = 'transparent';
export const sapUiShellTextColor = HSLColor.of(sapUiShellBackground).contrast(
  lighten(0.02, sapUiBaseText),
  sapUiContentContrastTextColor,
  sapUiContentContrastTextThreshold
);
export const sapUiShellGroupTextColor = HSLColor.of(sapUiShellBackground).contrast(
  sapUiShellTextColor,
  sapUiContentContrastTextColor,
  sapUiContentContrastTextThreshold
);
export const sapUiShellHoverBackground = lighten(0.49, sapUiBrand);
export const sapUiShellActiveBackground = lighten(0.49, sapUiBrand);
export const sapUiShellActiveTextColor = darken(0.14, sapUiBrand);
export const sapUiShellHoverToggleBackground = lighten(0.55, sapUiBrand);
export const sapUiShellContainerBackground = lighten(0.328, saturate(0.24, sapUiShellBackground));
export const sapUiShellAltContainerBackground = darken(0.34, saturate(0.16, sapUiShellBackground));

/*
 * Tile Colors
 */
export const sapUiTileBackground = sapUiBaseColor;
export const sapUiTileBorderColor = 'transparent';
export const sapUiTileTitleTextColor = sapUiBaseText;
export const sapUiTileTextColor = darken(0.115, sapUiTileTitleTextColor);
export const sapUiTileIconColor = darken(0.15, sapUiContentIconColor);

/*
 * Hyperlinks
 */
export const sapUiLink = '#7ed0ff';

/*
 * Selection - General Usage
 */
export const sapUiSelected = sapUiHighlight;
export const sapUiActive = sapUiHighlight;

/*
 * Page Header and Footer Colors
 */
export const sapUiPageHeaderBackground = sapUiBaseColor;
export const sapUiPageHeaderBorderColor = lighten(0.08, sapUiPageHeaderBackground);
export const sapUiPageHeaderTextColor = sapUiBaseText;
export const sapUiPageFooterBackground = darken(0.08, sapColorPrimary1);
export const sapUiPageFooterBorderColor = lighten(0.12, sapUiPageFooterBackground);
export const sapUiPageFooterTextColor = sapUiBaseText;

/*
 * List and Table Colors
 */
export const sapUiListBackground = sapUiBaseColor;
export const sapUiListBorderColor = lighten(0.07, sapUiListBackground);
export const sapUiListTextColor = sapUiBaseText;
export const sapUiListHighlightColor = darken(0.3, desaturate(0.4, sapUiHighlight));
export const sapUiListActiveBackground = sapUiListHighlightColor;
export const sapUiListActiveTextColor = lighten(0.02, sapUiBaseText);
export const sapUiListSelectionBackgroundColor = lighten(0.1, saturate(0.1, sapUiListBackground));
export const sapUiListSelectionHoverBackground = lighten(0.03, sapUiListSelectionBackgroundColor);
export const sapUiListHoverBackground = lighten(0.03, sapUiListBackground);
export const sapUiListGroupHeaderBackground = sapUiListBackground;
export const sapUiListFooterBackground = darken(0.08, sapUiBaseColor);
export const sapUiListFooterTextColor = sapUiPageFooterTextColor;
export const sapUiListTableGroupHeaderBackground = darken(0.02, sapUiListBackground);
export const sapUiListTableGroupHeaderBorderColor = lighten(0.131, sapUiListBorderColor);
export const sapUiListTableGroupHeaderTextColor = sapUiContentMarkerTextColor;
export const sapUiListTableFooterBorder = lighten(0.131, sapUiListBorderColor);
export const sapUiListTableFixedBorder = lighten(0.3, sapUiListBorderColor);
export const sapUiListVerticalBorderColor = lighten(0.03, sapUiListBorderColor);

/*
 * Title Toolbars and Headers for Control Group
 */
export const sapUiToolbarBackground = 'transparent';
export const sapUiGroupTitleBackground = 'transparent';
export const sapUiGroupTitleBorderColor = lighten(0.2, sapColorPrimary1);
export const sapUiToolbarSeparatorColor = HSLColor.of(sapColorPrimary3).setAlpha(0.2).hsl;
export const sapUiListHeaderBackground = darken(0.015, sapUiBaseColor);
export const sapUiInfobarBackground = darken(0.05, sapAccentColor7);
export const sapUiInfobarHoverBackground = darken(0.03, sapUiInfobarBackground);
export const sapUiInfobarActiveBackground = sapUiListHighlightColor;

/*
 * Main Button Colors
 */
export const sapUiButtonBackground = lighten(0.02, sapUiBaseColor);
export const sapUiButtonBorderColor = lighten(0.36, sapUiButtonBackground);
export const sapUiButtonTextColor = '#cae4fb';
export const sapUiButtonHoverBackground = lighten(0.06, sapUiButtonBackground);
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
export const sapUiButtonLiteHoverBackground = HSLColor.of(lighten(0.1, sapUiButtonHoverBackground)).setAlpha(0.5).hsl;
export const sapUiButtonLiteHoverBorderColor = sapUiButtonLiteHoverBackground;
export const sapUiButtonLiteActiveBackground = sapUiActive;
export const sapUiButtonLiteActiveBorderColor = sapUiActive;
export const sapUiButtonHeaderTextColor = sapUiButtonTextColor;
export const sapUiButtonFooterTextColor = sapUiButtonTextColor;
export const sapUiButtonFooterHoverBackground = sapUiButtonLiteHoverBackground;
export const sapUiButtonActionSelectBackground = sapUiListBackground;
export const sapUiButtonActionSelectBorderColor = sapUiListBackground;
export const sapUiButtonLiteActionSelectHoverBackground = sapUiListHoverBackground;
export const sapUiToggleButtonPressedBackground = sapUiSelected;
export const sapUiToggleButtonPressedBorderColor = sapUiButtonActiveBorderColor;
export const sapUiToggleButtonPressedTextColor = sapUiButtonActiveTextColor;
export const sapUiToggleButtonPressedHoverBackground = sapUiButtonHoverBackground;
export const sapUiToggleButtonPressedHoverBorderColor = sapUiButtonHoverBorderColor;
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
export const sapUiFieldBackground = lighten(0.05, sapUiBaseColor);
export const sapUiFieldBorderColor = lighten(0.2, sapUiFieldBackground);
export const sapUiFieldTextColor = '#ffffff';
export const sapUiFieldPlaceholderTextColor = lighten(0.525, saturate(0.24, sapUiBaseColor));
export const sapUiFieldHoverBackground = sapUiFieldBackground;
export const sapUiFieldHoverBorderColor = sapUiHighlight;
export const sapUiFieldActiveBackground = sapUiActive;
export const sapUiFieldActiveBorderColor = sapUiActive;
export const sapUiFieldFocusBackground = sapUiFieldBackground;
export const sapUiFieldFocusBorderColor = sapUiFieldBorderColor;
export const sapUiFieldReadOnlyBackground = 'transparent';
export const sapUiFieldReadOnlyBorderColor = lighten(0.25, sapColorPrimary1);
export const sapUiFieldRequiredColor = lighten(0.18, sapAccentColor3);
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
export const sapUiGroupContentBackground = sapUiBaseColor;
export const sapUiGroupContentBorderColor = lighten(0.08, sapUiGroupContentBackground);
export const sapUiObjectHeaderBackground = sapUiBaseColor;
export const sapUiObjectHeaderBorderColor = lighten(0.08, sapUiObjectHeaderBackground);
export const sapUiScrollBarFaceColor = lighten(0.02, sapColorPrimary6);
export const sapUiScrollBarTrackColor = sapUiBaseColor;
export const sapUiScrollBarBorderColor = lighten(0.03, sapUiScrollBarFaceColor);
export const sapUiScrollBarSymbolColor = sapUiContentIconColor;
export const sapUiScrollBarHoverFaceColor = lighten(0.03, sapUiScrollBarFaceColor);

/*
 * Focus Colors
 */
export const sapUIContentFocusColor = '#ffffff';
export const sapUiContentContrastFocusColor = '#000000';

/*
 * Effect Colors
 */
export const sapUiContentShadowColor = '#000000';
export const sapUiContentContrastShadowColor = '#ffffff';

/*
 * Special Colors
 */

export const sapUiBlockLayerBackground = '#000000';
export const sapUiContentSearchHighlightColor = '#058088';
export const sapUiCalendarColorToday = lighten(0.29, sapAccentColor4);

/*
 * Special Colors
 */
export const sapUiDragAndDropColor = sapUiContentNonInteractiveIconColor;
export const sapUiDragAndDropBackground = sapUiGroupContentBackground;
export const sapUiDragAndDropBorderColor = sapUiContentForegroundBorderColor;
export const sapUiDragAndDropActiveColor = sapUiLink;
export const sapUiDragAndDropActiveBackground = HSLColor.of(sapUiLink).setAlpha(0.1).hsl;
export const sapUiDragAndDropActiveBorderColor = sapUiLink;

/*
 * Shadow Concept
 */
const shadowColor = HSLColor.of(sapUiContentShadowColor).setAlpha(0.2).hsl;
export const sapUiShadowLevel0 = `0 0 0 1px ${HSLColor.of(sapUiContentContrastShadowColor).setAlpha(0.2).hsl}`;
export const sapUiShadowLevel1 = `0px 0.125rem 0.5rem 0 ${shadowColor}, ${sapUiShadowLevel0}`;
export const sapUiShadowLevel2 = `0px 0.625rem 1.875rem 0 ${shadowColor}, ${sapUiShadowLevel0}`;
export const sapUiShadowLevel3 = `0px 1.25rem 5rem 0 ${shadowColor}, ${sapUiShadowLevel0}`;
export const sapUiShadowText = `0 0 0.125rem ${sapUiContentContrastShadowColor}`;
export const sapUiShadowHeader = `0 0.125rem 0 0 ${sapUiObjectHeaderBackground}, inset 0 -0.125rem 0 0 ${sapUiObjectHeaderBorderColor}`;
