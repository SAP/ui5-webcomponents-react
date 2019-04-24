import { HSLColor } from './HSLColor';

// Primary Colors
export const sapColorPrimary2 = 'hsl(210, 91%, 43%)';
export const sapColorPrimary1 = `hsl(${HSLColor.of(sapColorPrimary2).getHue()}, 28%, 29%)`;
export const sapColorPrimary3 = `hsl(${HSLColor.of(sapColorPrimary2).getHue()}, 0%, 100%)`;
export const sapColorPrimary4 = `hsl(${HSLColor.of(sapColorPrimary2).getHue()}, 9%, 93.7%`;
export const sapColorPrimary5 = `hsl(${HSLColor.of(sapColorPrimary2).getHue()}, 8%, 57%`;
export const sapColorPrimary6 = `hsl(${HSLColor.of(sapColorPrimary2).getHue()}, 7.5%, 21%`;

// Accent Colors
export const sapAccentColor1 = 'hsl(34, 82%, 49%)';
export const sapAccentColor2 = 'hsl(0, 60%, 66%)';
export const sapAccentColor3 = 'hsl(332, 75%, 49%)';
export const sapAccentColor4 = 'hsl(315, 54%, 49%)';
export const sapAccentColor5 = 'hsl(238, 65%, 63%)';
export const sapAccentColor6 = 'hsl(210, 64%, 60%)';
export const sapAccentColor7 = 'hsl(186, 81%, 39%)';
export const sapAccentColor8 = 'hsl(75, 86%, 34%)';
export const sapAccentColor9 = 'hsl(269, 54%, 58%)';
export const sapAccentColor10 = 'hsl(205, 15%, 58%)';

// Semantic Colors
export const sapColorSemanticPositive = 'hsl(145, 77%, 28%)';
export const sapColorSemanticCritical = 'hsl(28, 90%, 48%)';
export const sapColorSemanticNegative = 'hsl(0, 100%, 36.7%)';
export const sapColorSemanticNeutral = 'hsl(210, 3%, 42.7%)';

// Effect Colors
export const sapContent_ShadowColor = 'hsl(0, 0%, 0%)';
export const sapContent_ContrastShadowColor = 'hsl(0, 0%, 100%)';

/*
 * Custom colors where the design guidelines seem weird
 */
export const sapMessageToastBackground = sapColorPrimary1;
export const sapMessageToastTextColor = sapColorPrimary5;
export const sapDarkPageFooter = HSLColor.darken(sapColorPrimary1, 8).toString();
export const sapDarkPageFooterBorder = HSLColor.lighten(sapDarkPageFooter, 12).toString();

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
export const sapUiBaseText = sapColorPrimary6;
export const sapUiGroupTitleTextColor = sapUiBaseText;
export const sapUiContentForegroundTextColor = sapUiBaseText;
export const sapUiContentLabelColor = `hsl(${HSLColor.of(sapColorPrimary6).getHue()}, 3%, 42.7%)`;
export const sapUiContentMarkerTextColor = HSLColor.darken(sapAccentColor7, 8).toString();
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
export const sapUiErrorBorder = HSLColor.lighten(sapColorSemanticNegative, 10).toString();
export const sapUiSuccessBorder = HSLColor.lighten(sapColorSemanticPositive, 10).toString();
export const sapUiWarningBorder = HSLColor.lighten(sapColorSemanticCritical, 10).toString();
export const sapUiNeutralBorder = sapColorSemanticNeutral;

/*
 * Semantic Background Colors
 */
export const sapUiErrorBG = HSLColor.lighten(sapColorSemanticNegative, 58).toString();
export const sapUiSuccessBG = HSLColor.lighten(sapColorSemanticPositive, 60).toString();
export const sapUiWarningBG = HSLColor.lighten(sapColorSemanticCritical, 46).toString();
export const sapUiNeutralBG = HSLColor.lighten(sapColorSemanticNeutral, 56).toString();

/*
 * Hyperlinks
 */
export const sapUiLink = 'hsl(202, 100%, 34.7%)';

/*
 * Selection - General Usage
 */
export const sapUiSelected = sapUiHighlight;
export const sapUiActive = sapUiHighlight;

/*
 * Foreground Elements
 */
export const sapUiContentIconColor = HSLColor.darken(sapUiHighlight, 10).toString();
export const sapUiContentContrastIconColor = sapColorPrimary4;
export const sapUiContentMarkerIconColor = sapAccentColor5;
export const sapUiContentNonInteractiveIconColor = HSLColor.darken(sapColorPrimary6, 22).toString();
export const sapUiContentForegroundColor = sapColorPrimary5;
export const sapUiContentForegroundBorderColor = sapColorPrimary6;
export const sapUiContentImagePlaceholderBackground = HSLColor.darken(sapUiBaseColor, 9).toString();
export const sapUiContentImagePlaceholderForegroundColor = HSLColor.darken(sapUiBaseColor, 5).toString();

/*
 * Page Header and Footer Colors
 */
export const sapUiPageHeaderBackground = sapUiBaseColor;
export const sapUiPageHeaderBorderColor = HSLColor.darken(sapUiPageHeaderBackground, 8).toString();
export const sapUiPageHeaderTextColor = HSLColor.lighten(sapUiBaseText, 20).toString();
export const sapUiPageFooterBackground = sapColorPrimary4;
export const sapUiPageFooterBorderColor = HSLColor.darken(sapUiPageFooterBackground, 8).toString();
export const sapUiPageFooterTextColor = sapUiBaseText;

/*
 * List and Table Colors
 */
export const sapUiListBackground = sapColorPrimary4;
export const sapUiListBorderColor = HSLColor.darken(sapUiListBackground, 10.15).toString();
export const sapUiListTextColor = sapUiBaseText;
export const sapUiListHighlightColor = sapUiHighlight;
export const sapUiListActiveBackground = sapUiListHighlightColor;
export const sapUiListActiveTextColor = sapUiContentContrastTextColor;
export const sapUiListSelectionBackgroundColor = HSLColor.lighten(HSLColor.desaturate(sapUiSelected, 2), 47).toString();
export const sapUiListSelectionHoverBackground = HSLColor.darken(sapUiListSelectionBackgroundColor, 3).toString();
export const sapUiListHoverBackground = HSLColor.darken(sapUiListBackground, 6);
export const sapUiListGroupHeaderBackground = sapUiListBackground;
export const sapUiListFooterBackground = HSLColor.darken(sapUiBaseColor, 9);
export const sapUiListFooterTextColor = sapUiPageFooterTextColor;
export const sapUiListTableGroupHeaderBackground = HSLColor.darken(sapUiListBackground, 5).toString();
export const sapUiListTableGroupHeaderBorderColor = HSLColor.darken(sapUiListBorderColor, 10).toString();
export const sapUiListTableGroupHeaderTextColor = sapUiContentMarkerTextColor;
export const sapUiListTableFooterBorder = HSLColor.darken(sapUiListBorderColor, 10).toString();
export const sapUiListTableFixedBorder = HSLColor.darken(sapUiListBorderColor, 30).toString();
export const sapUiListVerticalBorderColor = HSLColor.darken(sapUiListBorderColor, 3).toString();

/*
 * Title Toolbars and Headers for Control Group
 */
export const sapUiToolbarBackground = 'transparent';
export const sapUiGroupTitleBackground = 'transparent';
export const sapUiGroupTitleBorderColor = `hsl(${HSLColor.of(sapColorPrimary5).getHue()}, 3%, 93.5%)`;
export const sapUiToolbarSeparatorColor = HSLColor.hsla(sapColorPrimary1, 0.2).toString();
export const sapUiListHeaderBackground = HSLColor.darken(sapColorPrimary4, 3).toString();
export const sapUiInfobarBackground = HSLColor.darken(sapAccentColor7, 5);
export const sapUiInfobarHoverBackground = HSLColor.darken(sapUiInfobarBackground, 3);
export const sapUiInfobarActiveBackground = sapUiListHighlightColor;

/*
 * Main Button Colors
 */
export const sapUiButtonBackground = HSLColor.darken(sapColorPrimary4, 3).toString();
export const sapUiButtonBorderColor = HSLColor.darken(sapUiButtonBackground, 30).toString();
export const sapUiButtonTextColor = HSLColor.darken(sapUiHighlight, 10).toString();
export const sapUiButtonHoverBackground = HSLColor.darken(sapUiButtonBackground, 5).toString();
export const sapUiButtonHoverBorderColor = sapUiButtonBorderColor;
export const sapUiButtonEmphasizedBackground = HSLColor.lighten(HSLColor.saturate(sapUiHighlight, 10), 10).toString();
export const sapUiButtonEmphasizedBorderColor = HSLColor.darken(sapUiButtonEmphasizedBackground, 5).toString();
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
export const sapUiButtonEmphasizedHoverBackground = HSLColor.darken(sapUiButtonEmphasizedBackground, 5).toString();
export const sapUiButtonEmphasizedHoverBorderColor = HSLColor.darken(sapUiButtonEmphasizedBackground, 5).toString();
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
export const sapUiButtonLiteHoverBackground = HSLColor.hsla(
  HSLColor.darken(sapUiButtonHoverBackground, 22),
  0.5
).toString();
export const sapUiButtonLiteHoverBorderColor = sapUiButtonLiteHoverBackground;
export const sapUiButtonLiteActiveBackground = sapUiActive;
export const sapUiButtonLiteActiveBorderColor = sapUiActive;
export const sapUiButtonHeaderTextColor = sapUiButtonTextColor;
export const sapUiButtonFooterTextColor = sapUiButtonTextColor;
export const sapUiButtonFooterHoverBackground = sapUiButtonLiteHoverBackground;
export const sapUiButtonActionSelectBackground = sapUiListBackground;
export const sapUiButtonActionSelectBorderColor = sapUiListBackground;
export const sapUiButtonLiteActionSelectHoverBackground = sapUiListHoverBackground;
export const sapUiToggleButtonPressedBackground = HSLColor.darken(sapUiSelected, 10).toString();
export const sapUiToggleButtonPressedBorderColor = HSLColor.darken(sapUiToggleButtonPressedBackground, 5).toString();
export const sapUiToggleButtonPressedTextColor = sapUiContentContrastTextColor;
export const sapUiToggleButtonPressedHoverBackground = HSLColor.lighten(
  sapUiToggleButtonPressedBackground,
  10
).toString();
export const sapUiToggleButtonPressedHoverBorderColor = sapUiToggleButtonPressedHoverBackground;
export const sapUiSegmentedButtonBackground = HSLColor.lighten(sapUiButtonBackground, 3).toString();
export const sapUiSegmentedButtonBorderColor = HSLColor.lighten(sapUiButtonBorderColor, 8).toString();
export const sapUiSegmentedButtonTextColor = sapUiButtonTextColor;
export const sapUiSegmentedButtonHoverBackground = sapUiButtonHoverBackground;
export const sapUiSegmentedButtonActiveBackground = sapUiActive;
export const sapUiSegmentedButtonActiveTextColor = sapUiContentContrastTextColor;
export const sapUiSegmentedButtonSelectedBackground = HSLColor.darken(sapUiSelected, 10).toString();
export const sapUiSegmentedButtonSelectedTextColor = sapUiContentContrastTextColor;
export const sapUiSegmentedButtonSelectedHoverBackground = sapUiSelected;
export const sapUiSegmentedButtonSelectedHoverBorderColor = sapUiSelected;
export const sapUiSegmentedButtonIconColor = sapUiContentIconColor;
export const sapUiSegmentedButtonActiveIconColor = sapUiContentContrastIconColor;
export const sapUiSegmentedButtonSelectedIconColor = sapUiContentContrastIconColor;
export const sapUiSegmentedButtonFooterBorderColor = HSLColor.lighten(sapUiButtonBorderColor, 8).toString();
export const sapUiSegmentedButtonFooterHoverBackground = sapUiButtonHoverBackground;

/*
 * Input Controls
 */
export const sapUiFieldBackground = sapColorPrimary4;
export const sapUiFieldBorderColor = sapColorPrimary6;
export const sapUiFieldTextColor = 'hsl(0, 0%, 0%)';
export const sapUiFieldPlaceholderTextColor = HSLColor.lighten(sapUiFieldTextColor, 46).toString();
export const sapUiFieldHoverBackground = sapUiFieldBackground;
export const sapUiFieldHoverBorderColor = sapUiHighlight;
export const sapUiFieldActiveBackground = sapUiActive;
export const sapUiFieldActiveBorderColor = sapUiActive;
export const sapUiFieldFocusBackground = sapUiFieldBackground;
export const sapUiFieldFocusBorderColor = sapUiFieldBorderColor;
export const sapUiFieldReadOnlyBackground = HSLColor.hsla(HSLColor.darken(sapUiFieldBackground, 5), 0.5).toString();
export const sapUiFieldReadOnlyBorderColor = HSLColor.lighten(sapUiFieldBorderColor, 5).toString();
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
export const sapUiGroupContentBackground = HSLColor.lighten(sapUiBaseBG, 2).toString();
export const sapUiGroupContentBorderColor = HSLColor.darken(sapUiGroupContentBackground, 8).toString();
export const sapUiObjectHeaderBackground = sapUiBaseColor;
export const sapUiObjectHeaderBorderColor = HSLColor.darken(sapUiObjectHeaderBackground, 8).toString();
export const sapUiScrollBarFaceColor = HSLColor.darken(sapColorPrimary6, 5).toString();
export const sapUiScrollBarTrackColor = HSLColor.lighten(sapUiScrollBarFaceColor, 30).toString();
export const sapUiScrollBarBorderColor = sapUiScrollBarFaceColor;
export const sapUiScrollBarSymbolColor = sapUiContentIconColor;
export const sapUiScrollBarHoverFaceColor = HSLColor.darken(sapUiScrollBarFaceColor, 30).toString();

/*
 * Launchpad Background Colors
 */
export const sapUiShellBackground = sapColorPrimary4;
export const sapUiShellBackgroundImage = `linear-gradient(to bottom,
  ${HSLColor.darken(HSLColor.saturate(sapUiShellBackground, 6), 7.8).toString()},
  ${HSLColor.lighten(HSLColor.desaturate(sapUiShellBackground, 16), 7.8).toString()})`;
export const sapUiShellBackgroundImageOpacity = 1.0;
export const sapUiShellBackgroundImageRepeat = false;
export const sapUiShellBackgroundPatternColor = HSLColor.hsla(sapColorPrimary4, 0.08).toString();

/*
 * Extended Launchpad Colors
 */
export const sapUiShellColor = `hsl(${HSLColor.of(sapUiBrand).getHue()}, 28%, 29%)`;
export const sapUiShellBorderColor = 'transparent';
export const sapUiShellTextColor = HSLColor.of(sapUiShellBackground).contrast(
  HSLColor.darken(sapUiBrand, 10),
  sapUiContentContrastTextColor,
  sapUiContentContrastTextThreshold
);
export const sapUiShellGroupTextColor = HSLColor.of(sapUiShellBackground).contrast(
  HSLColor.darken(HSLColor.desaturate(sapUiShellTextColor, 100), 16.5),
  sapUiContentContrastTextColor,
  sapUiContentContrastTextThreshold
);
export const sapUiShellHoverBackground = HSLColor.darken(sapUiBrand, 10).toString();
export const sapUiShellActiveBackground = HSLColor.darken(sapUiBrand, 17).toString();
export const sapUiShellActiveTextColor = HSLColor.lighten(sapUiBrand, 55).toString();
export const sapUiShellHoverToggleBackground = HSLColor.darken(sapUiBrand, 32).toString();
export const sapUiShellContainerBackground = HSLColor.lighten(sapUiShellBackground, 16).toString();
export const sapUiShellAltContainerBackground = HSLColor.darken(
  HSLColor.saturate(sapUiShellBackground, 6),
  28
).toString();

/*
 * Tile Colors
 */
export const sapUiTileBackground = sapColorPrimary4;
export const sapUiTileBorderColor = 'transparent';
export const sapUiTileTitleTextColor = sapUiBaseText;
export const sapUiTileTextColor = HSLColor.lighten(sapUiTileTitleTextColor, 20).toString();
export const sapUiTileIconColor = HSLColor.lighten(sapUiContentIconColor, 34).toString();

/*
 * Focus Colors
 */
export const sapUIContentFocusColor = 'hsl(0, 0%, 0%)';
export const sapUiContentContrastFocusColor = 'hsl(0, 0%, 100%)';

/*
 * Effect Colors
 */
export const sapUiContentShadowColor = 'hsl(0, 0%, 0%)';
export const sapUiContentContrastShadowColor = 'hsl(0, 0%, 100%)';

/*
 * Special Colors
 */
export const sapUiContentHelpColor = 'hsl(91.8, 100%, 26.3%)';
export const sapUiBlockLayerBackground = 'hsl(0, 0%, 0%)';
export const sapUiContentSearchHighlightColor = 'hsl(132, 68.6%, 90%)';
export const sapUiCalendarColorToday = sapAccentColor4;
export const sapUiHCReducedForeground = 'hsl(0, 0%, 40%)';

/*
 * Special Colors
 */
export const sapUiDragAndDropColor = sapUiContentNonInteractiveIconColor;
export const sapUiDragAndDropBackground = sapUiGroupContentBackground;
export const sapUiDragAndDropBorderColor = sapUiContentForegroundBorderColor;
export const sapUiDragAndDropActiveColor = sapUiLink;
export const sapUiDragAndDropActiveBackground = HSLColor.hsla(sapUiLink, 0.05).toString();
export const sapUiDragAndDropActiveBorderColor = sapUiLink;

/*
 * Shadow Concept
 */
export const sapUiShadowLevel0 = `0 0 0 1px ${HSLColor.hsla(sapUiContentShadowColor, 0.15).toString()}`;
export const sapUiShadowLevel1 = `0px 0.125rem 0.5rem 0 ${HSLColor.hsla(
  sapUiContentShadowColor,
  0.15
).toString()}, ${sapUiShadowLevel0}`;
export const sapUiShadowLevel2 = `0px 0.625rem 1.875rem 0 ${HSLColor.hsla(
  sapUiContentShadowColor,
  0.15
).toString()}, ${sapUiShadowLevel0}`;
export const sapUiShadowLevel3 = `0px 1.25rem 5rem 0 ${HSLColor.hsla(
  sapUiContentShadowColor,
  0.15
).toString()}, ${sapUiShadowLevel0}`;
export const sapUiShadowText = `0 0 0.125rem ${sapUiContentContrastShadowColor}`;
export const sapUiShadowHeader = `0 0.125rem 0 0 ${sapUiObjectHeaderBackground},
inset 0 -0.125rem 0 0 ${sapUiObjectHeaderBorderColor}`;
