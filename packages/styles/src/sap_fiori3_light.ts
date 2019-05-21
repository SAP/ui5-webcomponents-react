import { HSLColor } from './HSLColor';

// Primary Colors
export const sapColorPrimary2 = 'hsl(210, 91%, 43%)';
export const sapColorPrimary1 = `hsl(${HSLColor.of(sapColorPrimary2).getHue()}, 28%, 29%)`;
export const sapColorPrimary3 = `hsl(${HSLColor.of(sapColorPrimary2).getHue()}, 0%, 100%)`;
export const sapColorPrimary4 = `hsl(${HSLColor.of(sapColorPrimary2).getHue()}, 9%, 93.7%`;
export const sapColorPrimary5 = `hsl(${HSLColor.of(sapColorPrimary2).getHue()}, 8%, 57%`;
export const sapColorPrimary6 = `hsl(${HSLColor.of(sapColorPrimary2).getHue()}, 7.5%, 21%`;

// Accent Colors
export const sapAccentColor1 = '#d08014'; //'hsl(34, 82%, 49%)';
export const sapAccentColor2 = '#d04343'; //'hsl(0, 60%, 66%)';
export const sapAccentColor3 = '#db1f77'; //'hsl(332, 75%, 49%)';
export const sapAccentColor4 = '#c0399f'; //'hsl(315, 54%, 49%)';
export const sapAccentColor5 = '#6367de'; //'hsl(238, 65%, 63%)';
export const sapAccentColor6 = '#286eb4'; //'hsl(210, 64%, 60%)';
export const sapAccentColor7 = '#0f828f'; //'hsl(186, 81%, 39%)';
export const sapAccentColor8 = '#7ca10c'; //'hsl(75, 86%, 34%)';
export const sapAccentColor9 = '#925ace'; //'hsl(269, 54%, 58%)';
export const sapAccentColor10 = '#647987'; //'hsl(205, 15%, 58%)';

// Semantic Colors
export const sapColorSemanticPositive = 'hsl(145, 77%, 28%)';
export const sapColorSemanticCritical = 'hsl(28, 90%, 48%)';
export const sapColorSemanticNegative = 'hsl(0, 100%, 36.7%)';
export const sapColorSemanticNeutral = 'hsl(210, 3%, 42.7%)';

/** The color which builds your brand */
export const sapUiBrand = '#0a6ed1';
/** The color which is used to highlight screen elements */
export const sapUiHighlight = '#0a6ed1';
/** The color which is used to derive the most dominant background colors */
export const sapUiBaseColor = '#ffffff';
/** The color of the shell header bar */
export const sapUiShellColor = '#354a5f';
/** The main background color of the screen */
export const sapUiBaseBG = '#fafafa';
/** The main background color of the screen */
export const sapUiGlobalBackgroundColor = '#fafafa';
/** The preferred text color */
export const sapUiBaseText = '#32363a';
/** The color of the link text */
export const sapUiLink = '#0a6ed1';
/** The URI to the logo of your company */
export const sapUiGlobalLogo = 'none';
/** The URI to the image which is shown as background */
export const sapUiGlobalBackgroundImage = 'none';
/** The URI to the image which is shown as background */
export const sapUiBackgroundImage = 'none';
/** The URI to the image which is shown as background */
export const sapUiUx3ShellBackgroundImageURL = 'none';
/** A value between 0.0 and 1.0 to control the opacity of the background image */
export const sapUiGlobalBackgroundImageOpacity = '1';
/** The switch to turn on/off the repetition of the background image. Chose 'true' or 'false' as value. */
export const sapUiGlobalBackgroundRepeat = 'false';
/** The color of selected elements */
export const sapUiSelected = '#0a6ed1';
/** The color of activated elements */
export const sapUiActive = '#0854a0';
/** The text color of highlighted screen elements */
export const sapUiHighlightTextColor = '#ffffff';
/** The text color of the application title */
export const sapUiTextTitle = '#32363a';
/** The color of icons. */
export const sapUiContentIconColor = '#0a6ed1';
/** The alternative icon color switched to by a threshold to keep contrast for icons. */
export const sapUiContentContrastIconColor = '#ffffff';
/** The color of noninteractive icons. */
export const sapUiContentNonInteractiveIconColor = '#6a6d70';
/** The color of marker icons. */
export const sapUiContentMarkerIconColor = '#2b78c4';
/** The color of Marker Texts. */
export const sapUiContentMarkerTextColor = '#0f828f';
/** The background color of Image Placeholders. */
export const sapUiContentImagePlaceholderBackground = '#cccccc';
/** The foreground color of Image Placeholders. */
export const sapUiContentImagePlaceholderForegroundColor = '#ffffff';
/** The color of the focus. */
export const sapUIContentFocusColor = '#000000';
/** The alternative focus color. */
export const sapUiContentContrastFocusColor = '#ffffff';
/** The shadow color. */
export const sapUiContentShadowColor = '#000000';
/** The alternative shadow color. */
export const sapUiContentContrastShadowColor = '#ffffff';
/** The color of found search results in the content. */
export const sapUiContentSearchHighlightColor = '#ebf5fe';
/** The color which indicates that the element has help content. */
export const sapUiContentHelpColor = '#3f8600';
/** The color of labels in the content area. */
export const sapUiContentLabelColor = '#6a6d70';
/** The color of texts on disabled screen elements in the content area. */
export const sapUiContentDisabledTextColor = 'rgba(50, 54, 58, 0.5)';
/** The color of texts on disabled screen elements in the content area. */
export const sapUiContentDisabledOpacity = '0.5';
/** The threshold to switch to alternative text color to keep contrast for texts */
export const sapUiContentContrastTextThreshold = '0.65';
/** The alternative text color switched to by a threshold to keep contrast for texts */
export const sapUiContentContrastTextColor = '#ffffff';
/** The foreground color of the content area. */
export const sapUiContentForegroundColor = '#6a6d70';
/** The foreground color of the borders of the content area. */
export const sapUiContentForegroundBorderColor = '#89919a';
/** The foreground color of texts in the content area. */
export const sapUiContentForegroundTextColor = '#ffffff';
/** The background color of the shell. */
export const sapUiShellBackground = '#edeff0';
/** The background image or gradient of the shell. */
export const sapUiShellBackgroundImage = 'none';
/** A value between 0.0 and 1.0 to control the opacity of the shell background image */
export const sapUiShellBackgroundImageOpacity = '1';
/** The switch to turn on/off the repetition of the shell background image. Chose 'true' or 'false' as value. */
export const sapUiShellBackgroundImageRepeat = 'false';
/** The background gradient of the shell. */
export const sapUiShellBackgroundGradient = 'none';
/** The color of the borders of the shell. */
export const sapUiShellBorderColor = '#354a5f';
/** The color of texts in the shell. */
export const sapUiShellTextColor = '#ffffff';
/** The URI to the favorite or shortcut icon displayed for the shell. */
export const sapUiShellFavicon = 'none';
/** The background color of buttons. */
export const sapUiButtonBackground = '#ffffff';
/** The color of a button's borders. */
export const sapUiButtonBorderColor = '#0a6ed1';
/** The color of texts on buttons. */
export const sapUiButtonTextColor = '#0a6ed1';
/** The color of texts on buttons. */
export const sapUiButtonDisabledBackground = '#ffffff';
/** The color of texts on buttons. */
export const sapUiButtonDisabledBorderColor = '#666666';
/** The color of texts on buttons. */
export const sapUiButtonDisabledTextColor = '#666666';
/** The background color of buttons on hover. */
export const sapUiButtonHoverBackground = '#fafafa';
/** The color of a button's borders on hover. */
export const sapUiButtonHoverBorderColor = '#0a6ed1';
/** The color of texts on buttons on hover. */
export const sapUiButtonHoverTextColor = '#0a6ed1';
/** The background color of emphasized buttons. */
export const sapUiButtonEmphasizedBackground = '#0a6ed1';
/** The border color of emphasized buttons. */
export const sapUiButtonEmphasizedBorderColor = '#0a6ed1';
/** The color of texts on emphasized buttons. */
export const sapUiButtonEmphasizedTextColor = '#ffffff';
/** The background color of "Reject" buttons. */
export const sapUiButtonRejectBackground = '#ffffff';
/** The background color of "Accept" buttons. */
export const sapUiButtonAcceptBackground = '#ffffff';
/** The background color of input fields. */
export const sapUiFieldBackground = '#ffffff';
/** The color of an input field's borders. */
export const sapUiFieldBorderColor = '#89919a';
/** The text color of input fields. */
export const sapUiFieldTextColor = '#32363a';
/** The color of the value help icon. */
export const sapUiFieldHelpBackground = '#ffffff';
/** The background color of input fields on hover. */
export const sapUiFieldHoverBackground = '#ffffff';
/** The color of an input field's borders on hover. */
export const sapUiFieldHoverBorderColor = '#0854a0';
/** The color of the value help icon on hover. */
export const sapUiFieldHoverHelpBackground = '#fafafa';
/** The background color of focused input fields. */
export const sapUiFieldFocusBackground = '#ffffff';
/** The color of a focused input field's borders. */
export const sapUiFieldFocusBorderColor = '#89919a';
/** The background color of a focused input field's value help icon. */
export const sapUiFieldFocusHelpBackground = '#ffffff';
/** The background color of a read-only input field. */
export const sapUiFieldReadOnlyBackground = 'rgba(242, 242, 242, 0.5)';
/** The color of a read-only input field's borders. */
export const sapUiFieldReadOnlyBorderColor = '#979ea6';
/** The background color of a read-only input field's value help icon. */
export const sapUiFieldReadOnlyHelpBackground = 'rgba(242, 242, 242, 0.5)';
/** The background color of a read-only input field's value help icon. */
export const sapUiFieldDisabledBackground = '#959595';
/** The background color of a read-only input field's value help icon. */
export const sapUiFieldDisabledBorderColor = '#4f4f4f';
/** The background color of a read-only input field's value help icon. */
export const sapUiFieldDisabledTextColor = 'rgba(50, 54, 58, 0.5)';
/** The background color of a read-only input field's value help icon. */
export const sapUiFieldDisabledHelpBackground = '#959595';
/** The color of the asterisk next to required input fields. */
export const sapUiFieldRequiredColor = '#a5175a';
/** The base color of input fields with an invalid value. */
export const sapUiFieldInvalidColor = '#bb0000';
/** The background color of input fields with an invalid value. */
export const sapUiFieldInvalidBackground = '#ffffff';
/** The base color of an input field indicating a warning. */
export const sapUiFieldWarningColor = '#e9730c';
/** The background color of an input field indicating a warning. */
export const sapUiFieldWarningBackground = '#ffffff';
/** The base color an input field indicating a successful user action. */
export const sapUiFieldSuccessColor = '#107e3e';
/** The background color of an input field indicating a successful user action. */
export const sapUiFieldSuccessBackground = '#ffffff';
/** The background color of the group header area. */
export const sapUiGroupTitleBackground = 'transparent';
/** The color of the borders of the group header area. */
export const sapUiGroupTitleBorderColor = '#d9d9d9';
/** The text color of the group title. The text color of the title of a group. */
export const sapUiGroupTitleTextColor = '#32363a';
/** The background color of the content area of a group. */
export const sapUiGroupContentBackground = '#ffffff';
/** The color of the borders of a group's content area. */
export const sapUiGroupContentBorderColor = '#ededed';
/** The background color of the footer area of a group. */
export const sapUiGroupFooterBackground = 'transparent';
/** The background color of the toolbar. */
export const sapUiToolbarBackground = 'transparent';
/** The color of a toolbar's separators. */
export const sapUiToolbarSeparatorColor = '#ededed';
/** The color of the borders of the list column header area. */
export const sapUiListHeaderBorderColor = '#ededed';
/** The color of texts on the list column header area. */
export const sapUiListHeaderTextColor = '#32363a';
/** The color of the border in a list separating the entries. */
export const sapUiListBorderColor = '#ededed';
/** The color of highlighted elements in lists. */
export const sapUiListHighlightColor = '#0854a0';
/** The background color of selected elements in lists. */
export const sapUiListSelectionBackgroundColor = '#e5f0fa';
/** The background color of lists. */
export const sapUiListBackground = '#ffffff';
/** The background color of the column header area of lists. */
export const sapUiListHeaderBackground = HSLColor.of(sapUiListBackground).darken(5);
/** The background color of lists on hover. */
export const sapUiListHoverBackground = '#fafafa';
/** The color of the surface of a scrollbar. */
export const sapUiScrollBarFaceColor = '#b3b3b3';
/** The color of the track of a scrollbar. */
export const sapUiScrollBarTrackColor = '#ffffff';
/** The color of the borders of a scrollbar. */
export const sapUiScrollBarBorderColor = '#b3b3b3';
/** The color of the scroll arrows in a scrollbar. */
export const sapUiScrollBarSymbolColor = '#0a6ed1';
/** The hover color of the surface of a scrollbar. */
export const sapUiScrollBarHoverFaceColor = '#ababab';
/** The background color of page headers. */
export const sapUiPageHeaderBackground = '#ffffff';
/** The border color of page headers. */
export const sapUiPageHeaderBorderColor = '#c4c4c4';
/** The color of texts on page headers. */
export const sapUiPageHeaderTextColor = '#505559';
/** The background color of page footers. */
export const sapUiPageFooterBackground = '#ffffff';
/** The color of texts on page footers. */
export const sapUiPageFooterTextColor = '#505559';
/** The background color of infobars. */
export const sapUiInfobarBackground = '#0f828f';
/** The background color of object headers. */
export const sapUiObjectHeaderBackground = '#ffffff';
/** The background color of blocklayers. */
export const sapUiBlockLayerBackground = '#000000';
/** The background color of tiles. */
export const sapUiTileBackground = '#ffffff';
/** The border color of tiles. */
export const sapUiTileBorderColor = 'transparent';
/** The color of title texts on tiles. */
export const sapUiTileTitleTextColor = '#32363a';
/** The color of texts on tiles. */
export const sapUiTileTextColor = '#6a6d70';
/** The color of icons on tiles. */
export const sapUiTileIconColor = '#6a6d70';
/** This color is used as a ordered color of a sequence of 11 chart colors. It has a defined contrast to its predecessor and successor. */
export const sapUiChart1 = '#5899da';
/** This color is used as a ordered color of a sequence of 11 chart colors. It has a defined contrast to its predecessor and successor. */
export const sapUiChart2 = '#e8743b';
/** This color is used as a ordered color of a sequence of 11 chart colors. It has a defined contrast to its predecessor and successor. */
export const sapUiChart3 = '#19a979';
/** This color is used as a ordered color of a sequence of 11 chart colors. It has a defined contrast to its predecessor and successor. */
export const sapUiChart4 = '#ed4a7b';
/** This color is used as a ordered color of a sequence of 11 chart colors. It has a defined contrast to its predecessor and successor. */
export const sapUiChart5 = '#945ecf';
/** This color is used as a ordered color of a sequence of 11 chart colors. It has a defined contrast to its predecessor and successor. */
export const sapUiChart6 = '#13a4b4';
/** This color is used as a ordered color of a sequence of 11 chart colors. It has a defined contrast to its predecessor and successor. */
export const sapUiChart7 = '#525df4';
/** This color is used as a ordered color of a sequence of 11 chart colors. It has a defined contrast to its predecessor and successor. */
export const sapUiChart8 = '#bf399e';
/** This color is used as a ordered color of a sequence of 11 chart colors. It has a defined contrast to its predecessor and successor. */
export const sapUiChart9 = '#6c8893';
/** This color is used as a ordered color of a sequence of 11 chart colors. It has a defined contrast to its predecessor and successor. */
export const sapUiChart10 = '#ee6868';
/** This color is used as a ordered color of a sequence of 11 chart colors. It has a defined contrast to its predecessor and successor. */
export const sapUiChart11 = '#2f6497';
/** This color is to visualize a 'Bad' value. */
export const sapUiChartBad = '#dc0d0e';
/** This color is to visualize a 'Critical' value. */
export const sapUiChartCritical = '#de890d';
/** This color is to visualize a 'Good' value. */
export const sapUiChartGood = '#3fa45b';
/** This color is to visualize a 'Neutral' value. */
export const sapUiChartNeutral = '#848f94';
/** This color is the base chart color of the sequence 1 */
export const sapUiChartSequence1 = '#5899da';
/** This color is the base chart color of the sequence 2 */
export const sapUiChartSequence2 = '#e8743b';
/** This color is the base chart color of the sequence 3 */
export const sapUiChartSequence3 = '#19a979';
/** This color is the base chart color of the sequence 4 */
export const sapUiChartSequence4 = '#ed4a7b';
/** This color is the base chart color of the sequence 5 */
export const sapUiChartSequence5 = '#945ecf';
/** This color is the base chart color of the sequence 6 */
export const sapUiChartSequence6 = '#13a4b4';
/** This color is the base chart color of the sequence 7 */
export const sapUiChartSequence7 = '#525df4';
/** This color is the base chart color of the sequence 8 */
export const sapUiChartSequence8 = '#bf399e';
/** This color is the base chart color of the sequence 9 */
export const sapUiChartSequence9 = '#6c8893';
/** This color is the base chart color of the sequence 10 */
export const sapUiChartSequence10 = '#ee6868';
/** This color is the base chart color of the sequence 11 */
export const sapUiChartSequence11 = '#2f6497';
/** This color is the base chart color of the sequence 11 */
export const sapUiChartSequenceNeutral = '#848f94';
/** This color is the base chart color of the sequence 11 */
export const sapUiAccent1 = '#e38b16';
/** This color is the base chart color of the sequence 11 */
export const sapUiAccent2 = '#dc7474';
/** This color is the base chart color of the sequence 11 */
export const sapUiAccent3 = '#db1f77';
/** This color is the base chart color of the sequence 11 */
export const sapUiAccent4 = '#c0399f';
/** This color is the base chart color of the sequence 11 */
export const sapUiAccent5 = '#6367de';
/** This color is the base chart color of the sequence 11 */
export const sapUiAccent6 = '#5899da';
/** This color is the base chart color of the sequence 11 */
export const sapUiAccent7 = '#13a4b4';
/** This color is the base chart color of the sequence 11 */
export const sapUiAccent8 = '#7ca10c';
/** This color is the base chart color of the sequence 11 */
export const sapUiErrorBG = '#ffebeb';
/** This color is the base chart color of the sequence 11 */
export const sapUiWarningBG = '#fef7f1';
/** This color is the base chart color of the sequence 11 */
export const sapUiSuccessBG = '#f1fdf6';
/** This color is the base chart color of the sequence 11 */
export const sapUiInformationBG = '#f5faff';
/** This color is the base chart color of the sequence 11 */
export const sapUiNeutralBG = '#f4f4f4';
/** This color is the base chart color of the sequence 11 */
export const sapUiErrorBorder = '#bb0000';
/** This color is the base chart color of the sequence 11 */
export const sapUiWarningBorder = '#e9730c';
/** This color is the base chart color of the sequence 11 */
export const sapUiSuccessBorder = '#107e3e';
/** This color is the base chart color of the sequence 11 */
export const sapUiInformationBorder = '#0a6ed1';
/** The color for elements showing neutral state */
export const sapUiNeutralBorder = '#6a6d70';
/** The color for elements showing neutral state */
export const sapUiNegativeElement = '#bb0000';
/** The color for elements showing neutral state */
export const sapUiCriticalElement = '#e9730c';
/** The color for elements showing neutral state */
export const sapUiPositiveElement = '#107e3e';
/** The color for elements showing neutral state */
export const sapUiInformativeElement = '#0a6ed1';
/** The color for elements showing neutral state */
export const sapUiNeutralElement = '#6a6d70';
/** The color for elements showing neutral state */
export const sapUiNegativeText = '#bb0000';
/** The color for elements showing neutral state */
export const sapUiCriticalText = '#e9730c';
/** The color for elements showing neutral state */
export const sapUiPositiveText = '#107e3e';
/** The color for elements showing neutral state */
export const sapUiInformativeText = '#0a6ed1';
/** The color for elements showing neutral state */
export const sapUiNeutralText = '#6a6d70';
/** The color for elements showing negative state */
export const sapUiNegative = '#bb0000';
/** The color for elements showing critical state */
export const sapUiCritical = '#e9730c';
/** The color for elements showing positive state */
export const sapUiPositive = '#107e3e';
/** The color for elements showing informative state */
export const sapUiInformative = '#0a6ed1';
/** The color for elements showing informative state */
export const sapUiNeutral = '#6a6d70';
/** The color for elements showing informative state */
export const sapUiErrorColor = '#ee0000';
/** The color for elements showing informative state */
export const sapUiWarningColor = '#f58d33';
/** The color for elements showing informative state */
export const sapUiSuccessColor = '#16ab54';
/** undefined */
export const sapUiIndication1 = '#880000';
/** undefined */
export const sapUiIndication2 = '#bb0000';
/** undefined */
export const sapUiIndication3 = '#e9730c';
/** undefined */
export const sapUiIndication4 = '#107e3e';
/** undefined */
export const sapUiIndication5 = '#0a6ed1';
/** The preferred font family */
export const sapUiFontFamily = '72", Arial, Helvetica, sans-serif';
/** The preferred font family */
export const sapUiFontSize = '16px';
/** The preferred font family */
export const sapUiFontCondensedFamily =
  '"72 Condensed", \'Arial Narrow\', HelveticaNeue-CondensedBold, Arial, sans-serif';
/** The preferred font family */
export const sapUiFontHeaderFamily = '"72", Arial, Helvetica, sans-serif';
/** The preferred font family */
export const sapUiFontHeaderWeight = 'normal';
/** The preferred font family */
export const sapUiTranslucentBGOpacity = '0';
/** The preferred font family */
export const sapUiDesktopFontFamily = '"72", Arial, Helvetica, sans-serif';
/** The preferred font family */
export const sapUiDesktopFontSize = '12px';
/** The preferred font family */
export const sapUiFontLargeSize = '13px';
/** The preferred font family */
export const sapUiFontSmallSize = '11px';
/** The preferred font family */
export const sapUiFontHeader1Size = '26px';
/** The preferred font family */
export const sapUiFontHeader2Size = '20px';
/** The preferred font family */
export const sapUiFontHeader3Size = '18px';
/** The preferred font family */
export const sapUiFontHeader4Size = '16px';
/** The preferred font family */
export const sapUiFontHeader5Size = '14px';
/** The preferred font family */
export const sapUiFontHeader6Size = '13px';
/** The preferred font family */
export const sapUiLineHeight = '18px';
/** The preferred font family */
export const sapUiChartLabelHoverColor = '#fafafa';
/** The preferred font family */
export const sapUiChartLabelPressedColor = '#d4d4d4';
/** The preferred font family */
export const sapUiChartCategoryAxisLabelFontColor = '#ffffff';
/** The preferred font family */
export const sapUiChartValueAxisLabelFontColor = '#ffffff';
/** The preferred font family */
export const sapUiChartCategoryAxisLabelFontSize = '0.75rem';
/** The preferred font family */
export const sapUiChartValueAxisLabelFontSize = '0.75rem';
/** The preferred font family */
export const sapUiChartCategoryAxisLineColor = '#979ea6';
/** The preferred font family */
export const sapUiChartValueAxisLineColor = '#979ea6';
/** The preferred font family */
export const sapUiChartCategoryAxisTickColor = '#979ea6';
/** The preferred font family */
export const sapUiChartValueAxisTickColor = '#979ea6';
/** The preferred font family */
export const sapUiChartBackgroundColor = 'transparent';
/** The preferred font family */
export const sapUiChartLabelFontWeight = 'normal';
/** The preferred font family */
export const sapUiChartLegendLabelFontColor = '#ffffff';
/** The preferred font family */
export const sapUiChartLegendTitleFontColor = '#32363a';
/** The preferred font family */
export const sapUiChartLegendTitleFontSize = '0.875rem';
/** The preferred font family */
export const sapUiChartLegendLabelFontSize = '0.75rem';
/** The preferred font family */
export const sapUiChartPaletteUndefinedColor = '#030303';
/** The preferred font family */
export const sapUiChartGridlineColor = '#b2b7bd';
/** The preferred font family */
export const sapUiChartReferenceLineColor = '#050506';
/** The preferred font family */
export const sapUiChartDataLabelFontColor = '#030303';
/** The preferred font family */
export const sapUiChartReferenceLineLabelColor = '#ffffff';
/** The preferred font family */
export const sapUiChartDataLabelFontSize = '0.75rem';
/** The preferred font family */
export const sapUiChartPopoverDataItemFontColor = '#030303';
/** The preferred font family */
export const sapUiChartPopoverGroupFontColor = '#ffffff';
/** The preferred font family */
export const sapUiChartPopoverDataItemFontSize = '0.875rem';
/** The preferred font family */
export const sapUiChartPopoverGroupFontSize = '0.875rem';
/** The preferred font family */
export const sapUiChartPopoverGroupFontWeight = 'bold';
/** The preferred font family */
export const sapUiChartScrollBarThumbColor = '#b3b3b3';
/** The preferred font family */
export const sapUiChartScrollBarTrackColor = '#ffffff';
/** The preferred font family */
export const sapUiChartScrollBarThumbHoverColor = '#ababab';
/** The preferred font family */
export const sapUiChartMainTitleFontColor = '#32363a';
/** The preferred font family */
export const sapUiChartAxisTitleFontColor = '#32363a';
/** The preferred font family */
export const sapUiChartMainTitleFontSize = '1rem';
/** The preferred font family */
export const sapUiChartAxisTitleFontSize = '0.75rem';
/** The preferred font family */
export const sapUiChartTitleFontWeight = 'bold';
/** The preferred font family */
export const sapUiChartAxisTitleFontWeight = 'regular';
/** The preferred font family */
export const sapUiChartLightText = '#ffffff';
/** The preferred font family */
export const sapUiChartZeroAxisColor = '#34383d';
/** The preferred font family */
export const sapUiChartDataPointBorderColor = '#ffffff';
/** The preferred font family */
export const sapUiChartDataPointBorderHoverSelectedColor = '#34383d';
/** The preferred font family */
export const sapUiChartDataPointNotSelectedBackgroundOpacity = '0.6';
/** The preferred font family */
export const sapUiChartValueAxisLineOpacity = '0';
/** The preferred font family */
export const sapUiChartCategoryAxisLabelFontHoverColor = '#ffffff';
/** The preferred font family */
export const sapUiChartCategoryAxisLabelFontPressedColor = '#ffffff';
/** The preferred font family */
export const sapUiChartTargetColor = '#050506';
/** The preferred font family */
export const sapUiChartTargetShadowColor = '#ffffff';
/** The preferred font family */
export const sapUiChartBubbleBGOpacity = '0.8';
/** The preferred font family */
export const sapUiChartScrollbarBorderColor = '#f2f2f2';
/** The preferred font family */
export const sapUiChartScrollbarBorderSize = '0';
/** The preferred font family */
export const sapUiChartScrollbarThumbPadding = '0';
/** The preferred font family */
export const sapUiChartNegativeLargeText = '#dc0d0e';
/** The preferred font family */
export const sapUiChartCriticalLargeText = '#de890d';
/** The preferred font family */
export const sapUiChartPositiveLargeText = '#3fa45b';
/** The preferred font family */
export const sapUiChartNeutralLargeText = '#69767c';
/** The preferred font family */
export const sapUiChartDataPointBG = '#d5dadc';
/** The preferred font family */
export const sapUiChartDataPointBGBorderColor = '#d5dadc';
/** The preferred font family */
export const sapUiChartDataLineColorWithBG = '#050506';
/** The preferred font family */
export const sapUiChartDataLineColor = '#050506';
/** The preferred font family */
export const sapUiChartRadialRemainingCircle = '#e3e6e7';
/** The preferred font family */
export const sapUiChartRadialRemainingCircleBorderColor = '#e3e6e7';
/** The preferred font family */
export const sapUiChartRadialBG = '#ffffff';
/** The preferred font family */
export const sapUiChartLegendHoverBackground = '#fafafa';
/** The preferred font family */
export const sapUiChartLegendSelectionBackground = '#e5f0fa';
/** The preferred font family */
export const sapUiChartLegendSelectionHoverBackground = '#d8e8f7';
/** The preferred font family */
export const sapUiChartPaletteQualitativeHue1 = '#5899da';
/** The preferred font family */
export const sapUiChartPaletteQualitativeHue2 = '#e8743b';
/** The preferred font family */
export const sapUiChartPaletteQualitativeHue3 = '#19a979';
/** The preferred font family */
export const sapUiChartPaletteQualitativeHue4 = '#ed4a7b';
/** The preferred font family */
export const sapUiChartPaletteQualitativeHue5 = '#945ecf';
/** The preferred font family */
export const sapUiChartPaletteQualitativeHue6 = '#13a4b4';
/** The preferred font family */
export const sapUiChartPaletteQualitativeHue7 = '#525df4';
/** The preferred font family */
export const sapUiChartPaletteQualitativeHue8 = '#bf399e';
/** The preferred font family */
export const sapUiChartPaletteQualitativeHue9 = '#6c8893';
/** The preferred font family */
export const sapUiChartPaletteQualitativeHue10 = '#ee6868';
/** The preferred font family */
export const sapUiChartPaletteQualitativeHue11 = '#2f6497';
/** The preferred font family */
export const sapUiChartPaletteQualitativeHue12 = '#1866b4';
/** The preferred font family */
export const sapUiChartPaletteQualitativeHue13 = '#cc4300';
/** The preferred font family */
export const sapUiChartPaletteQualitativeHue14 = '#03734d';
/** The preferred font family */
export const sapUiChartPaletteQualitativeHue15 = '#d70947';
/** The preferred font family */
export const sapUiChartPaletteQualitativeHue16 = '#772acb';
/** The preferred font family */
export const sapUiChartPaletteQualitativeHue17 = '#087682';
/** The preferred font family */
export const sapUiChartPaletteQualitativeHue18 = '#2531d4';
/** The preferred font family */
export const sapUiChartPaletteQualitativeHue19 = '#921473';
/** The preferred font family */
export const sapUiChartPaletteQualitativeHue20 = '#3c6372';
/** The preferred font family */
export const sapUiChartPaletteQualitativeHue21 = '#d62f2f';
/** The preferred font family */
export const sapUiChartPaletteQualitativeHue22 = '#144b7f';
/** The preferred font family */
export const sapUiChartPaletteSemanticBadLight3 = '#f99494';
/** The preferred font family */
export const sapUiChartPaletteSemanticBadLight2 = '#f66364';
/** The preferred font family */
export const sapUiChartPaletteSemanticBadLight1 = '#f33334';
/** The preferred font family */
export const sapUiChartPaletteSemanticBad = '#dc0d0e';
/** The preferred font family */
export const sapUiChartPaletteSemanticBadDark1 = '#b90c0d';
/** The preferred font family */
export const sapUiChartPaletteSemanticBadDark2 = '#930a0a';
/** The preferred font family */
export const sapUiChartPaletteSemanticCriticalLight3 = '#f8cc8c';
/** The preferred font family */
export const sapUiChartPaletteSemanticCriticalLight2 = '#f5b04d';
/** The preferred font family */
export const sapUiChartPaletteSemanticCriticalLight1 = '#f29b1d';
/** The preferred font family */
export const sapUiChartPaletteSemanticCritical = '#de890d';
/** The preferred font family */
export const sapUiChartPaletteSemanticCriticalDark1 = '#c67a0c';
/** The preferred font family */
export const sapUiChartPaletteSemanticCriticalDark2 = '#a4650a';
/** The preferred font family */
export const sapUiChartPaletteSemanticGoodLight3 = '#a1dbb1';
/** The preferred font family */
export const sapUiChartPaletteSemanticGoodLight2 = '#71c989';
/** The preferred font family */
export const sapUiChartPaletteSemanticGoodLight1 = '#4cba6b';
/** The preferred font family */
export const sapUiChartPaletteSemanticGood = '#3fa45b';
/** The preferred font family */
export const sapUiChartPaletteSemanticGoodDark1 = '#358a4d';
/** The preferred font family */
export const sapUiChartPaletteSemanticGoodDark2 = '#2a6d3c';
/** The preferred font family */
export const sapUiChartPaletteSemanticNeutralLight3 = '#d5dadc';
/** The preferred font family */
export const sapUiChartPaletteSemanticNeutralLight2 = '#bac1c4';
/** The preferred font family */
export const sapUiChartPaletteSemanticNeutralLight1 = '#9ea8ad';
/** The preferred font family */
export const sapUiChartPaletteSemanticNeutral = '#848f94';
/** The preferred font family */
export const sapUiChartPaletteSemanticNeutralDark1 = '#69767c';
/** The preferred font family */
export const sapUiChartPaletteSemanticNeutralDark2 = '#596468';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue1Light3 = '#b2d4f5';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue1Light2 = '#93bfeb';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue1Light1 = '#74abe2';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue1 = '#5899da';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue1Dark1 = '#367dc4';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue1Dark2 = '#1866b4';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue2Light3 = '#ffb18a';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue2Light2 = '#f3b89b';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue2Light1 = '#f08956';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue2 = '#e8743b';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue2Dark1 = '#da5a1b';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue2Dark2 = '#cc4300';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue3Light3 = '#8fd1bb';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue3Light2 = '#66c2a3';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue3Light1 = '#3fb68e';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue3 = '#19a979';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue3Dark1 = '#0e8c62';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue3Dark2 = '#03734d';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue4Light3 = '#f8b4c9';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue4Light2 = '#f490ae';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue4Light1 = '#f06a93';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue4 = '#ed4a7b';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue4Dark1 = '#e32b62';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue4Dark2 = '#d70947';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue5Light3 = '#d3bdeb';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue5Light2 = '#be9de2';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue5Light1 = '#a97dd8';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue5 = '#945ecf';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue5Dark1 = '#8746ce';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue5Dark2 = '#772acb';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue6Light3 = '#81d1da';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue6Light2 = '#5ac2ce';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue6Light1 = '#38b4c2';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue6 = '#13a4b4';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue6Dark1 = '#0d8d9c';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue6Dark2 = '#087682';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue7Light3 = '#99a0f9';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue7Light2 = '#828af7';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue7Light1 = '#6973f6';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue7 = '#525df4';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue7Dark1 = '#3945e4';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue7Dark2 = '#2531d4';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue8Light3 = '#e597d2';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue8Light2 = '#d876c0';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue8Light1 = '#cd59b1';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue8 = '#bf399e';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue8Dark1 = '#a92689';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue8Dark2 = '#921473';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue9Light3 = '#d1d9dc';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue9Light2 = '#adbcc3';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue9Light1 = '#8ca2ab';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue9 = '#6c8893';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue9Dark1 = '#547582';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue9Dark2 = '#3c6372';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue10Light3 = '#fccaca';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue10Light2 = '#f8a6a6';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue10Light1 = '#f38787';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue10 = '#ee6868';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue10Dark1 = '#e24c4c';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue10Dark2 = '#d62f2f';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue11Light3 = '#85a1bb';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue11Light2 = '#698caf';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue11Light1 = '#4d78a2';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue11 = '#2f6497';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue11Dark1 = '#245a8e';
/** The preferred font family */
export const sapUiChartPaletteSequentialHue11Dark2 = '#144b7f';
/** The preferred font family */
export const sapUiChartPaletteSequentialNeutralLight3 = '#d5dadc';
/** The preferred font family */
export const sapUiChartPaletteSequentialNeutralLight2 = '#bac1c4';
/** The preferred font family */
export const sapUiChartPaletteSequentialNeutralLight1 = '#9ea8ad';
/** The preferred font family */
export const sapUiChartPaletteSequentialNeutral = '#848f94';
/** The preferred font family */
export const sapUiChartPaletteSequentialNeutralDark1 = '#69767c';
/** The preferred font family */
export const sapUiChartPaletteSequentialNeutralDark2 = '#596468';
/** The preferred font family */
export const sapUiChartPaletteNoSemDiv1Light3 = '#f3dec9';
/** The preferred font family */
export const sapUiChartPaletteNoSemDiv1Light2 = '#e3cbb3';
/** The preferred font family */
export const sapUiChartPaletteNoSemDiv1Light1 = '#c8ab8e';
/** The preferred font family */
export const sapUiChartPaletteNoSemDiv1 = '#b08e6d';
/** The preferred font family */
export const sapUiChartPaletteNoSemDiv1Dark1 = '#8e6c4b';
/** The preferred font family */
export const sapUiChartPaletteNoSemDiv1Dark2 = '#754f2a';
/** The preferred font family */
export const sapUiChartPaletteMidArea = '#f2f2f2';
/** The preferred font family */
export const sapUiChoroplethBG = '#f7f7f8';
/** The preferred font family */
export const sapUiChoroplethRegionBorder = '#ced1d5';
/** The preferred font family */
export const sapUiChoroplethRegionBG = '#bac1c4';
/** The preferred font family */
export const sapUiMapLegendBG = '#ffffff';
/** The preferred font family */
export const sapUiMapLegendBorderColor = '#979ea6';
/** The preferred font family */
export const sapUiShellHoverBackground = '#0854a0';
/** The preferred font family */
export const sapUiShellActiveBackground = '#06427e';
/** The preferred font family */
export const sapUiShellActiveTextColor = '#f5faff';
/** The preferred font family */
export const sapUiShellHoverToggleBackground = '#031c35';
/** The preferred font family */
export const sapUiShellContainerBackground = '#ffffff';
/** The preferred font family */
export const sapUiShellAltContainerBackground = '#9aacb4';
/** The preferred font family */
export const sapUiShellGroupTextColor = '#d5d5d5';
/** The preferred font family */
export const sapUiUx3ShellHeaderColor = '#354a5f';
/** The preferred font family */
export const sapUiUx3ShellBackgroundColor = '#ffffff';
/** The preferred font family */
export const sapUiUx3ShellHoverColor = '#b0b2b4';
/** The preferred font family */
export const sapUiUx3ShellGradientBottom = '#557698';
/** The preferred font family */
export const sapUiUx3ShellGradientTop = '#93a5c5';
/** The preferred font family */
export const sapUiUx3ShellToolPaletteIconFontColor = '#7996b4';
/** The preferred font family */
export const sapUiUx3ExactLstExpandOffset = '-1 -2';
/** The preferred font family */
export const sapUiUx3ExactLstRootExpandOffset = '0 3';
/** The preferred font family */
export const sapUiUx3ExactLstContentTop = '25px';
/** The preferred font family */
export const sapUiLinkActive = '#0a6ed1';
/** The preferred font family */
export const sapUiLinkVisited = '#925ace';
/** The preferred font family */
export const sapUiLinkHover = '#0854a0';
/** The preferred font family */
export const sapUiLinkInverted = '#acd4fb';
/** The preferred font family */
export const sapUiNotificationBarBG = 'rgba(106, 109, 112, 0.98)';
/** The preferred font family */
export const sapUiNotifierSeparator = '#383a3c';
/** The preferred font family */
export const sapUiNotifierSeparatorWidth = '1px';
/** The preferred font family */
export const sapUiNotificationBarBorder = '#9da0a3';
/** The preferred font family */
export const sapUiUx3ToolPopupInverted = 'false';
/** The preferred font family */
export const sapUiUx3ToolPopupArrowRightMarginCorrection = '-1px';
/** The preferred font family */
export const sapUiUx3ToolPopupShadow = '0px 6px 12px 0px rgba(0, 0, 0, 0.3)';
/** The preferred font family */
export const sapUiCalloutShadow = '0px 6px 12px 0px rgba(0, 0, 0, 0.3)';
/** The preferred font family */
export const sapUiButtonIconColor = '#0a6ed1';
/** The preferred font family */
export const sapUiButtonActiveBackground = '#0854a0';
/** The preferred font family */
export const sapUiButtonActiveBorderColor = '#0854a0';
/** The preferred font family */
export const sapUiButtonActiveTextColor = '#ffffff';
/** The preferred font family */
export const sapUiButtonEmphasizedHoverBackground = '#085caf';
/** The preferred font family */
export const sapUiButtonEmphasizedHoverBorderColor = '#085caf';
/** The preferred font family */
export const sapUiButtonEmphasizedActiveBackground = '#0854a0';
/** The preferred font family */
export const sapUiButtonEmphasizedActiveBorderColor = '#0854a0';
/** The preferred font family */
export const sapUiButtonEmphasizedTextShadow = 'transparent';
/** The preferred font family */
export const sapUiButtonAcceptBorderColor = '#107e3e';
/** The preferred font family */
export const sapUiButtonAcceptHoverBackground = '#fafafa';
/** The preferred font family */
export const sapUiButtonAcceptHoverBorderColor = '#107e3e';
/** The preferred font family */
export const sapUiButtonAcceptActiveBackground = '#0d6733';
/** The preferred font family */
export const sapUiButtonAcceptActiveBorderColor = '#0d6733';
/** The preferred font family */
export const sapUiButtonAcceptTextColor = '#107e3e';
/** The preferred font family */
export const sapUiButtonRejectBorderColor = '#bb0000';
/** The preferred font family */
export const sapUiButtonRejectHoverBackground = '#fafafa';
/** The preferred font family */
export const sapUiButtonRejectHoverBorderColor = '#bb0000';
/** The preferred font family */
export const sapUiButtonRejectActiveBackground = '#a20000';
/** The preferred font family */
export const sapUiButtonRejectActiveBorderColor = '#a20000';
/** The preferred font family */
export const sapUiButtonRejectTextColor = '#bb0000';
/** The preferred font family */
export const sapUiButtonLiteBackground = 'transparent';
/** The preferred font family */
export const sapUiButtonLiteBorderColor = 'transparent';
/** The preferred font family */
export const sapUiButtonLiteTextColor = '#0a6ed1';
/** The preferred font family */
export const sapUiButtonLiteHoverBackground = 'rgba(224, 224, 224, 0.5)';
/** The preferred font family */
export const sapUiButtonLiteHoverBorderColor = 'rgba(224, 224, 224, 0.5)';
/** The preferred font family */
export const sapUiButtonLiteActiveBackground = '#0854a0';
/** The preferred font family */
export const sapUiButtonLiteActiveBorderColor = '#0854a0';
/** The preferred font family */
export const sapUiButtonHeaderTextColor = '#0a6ed1';
/** The preferred font family */
export const sapUiButtonHeaderDisabledTextColor = '#0a6ed1';
/** The preferred font family */
export const sapUiButtonFooterTextColor = '#0a6ed1';
/** The preferred font family */
export const sapUiButtonFooterHoverBackground = 'rgba(224, 224, 224, 0.5)';
/** The preferred font family */
export const sapUiButtonActionSelectBackground = '#ffffff';
/** The preferred font family */
export const sapUiButtonActionSelectBorderColor = '#ededed';
/** The preferred font family */
export const sapUiButtonLiteActionSelectHoverBackground = '#fafafa';
/** The preferred font family */
export const sapUiToggleButtonPressedBackground = '#0854a0';
/** The preferred font family */
export const sapUiToggleButtonPressedBorderColor = '#0854a0';
/** The preferred font family */
export const sapUiToggleButtonPressedTextColor = '#ffffff';
/** The preferred font family */
export const sapUiToggleButtonPressedHoverBackground = '#085caf';
/** The preferred font family */
export const sapUiToggleButtonPressedHoverBorderColor = '#085caf';
/** The preferred font family */
export const sapUiSegmentedButtonBackground = '#ffffff';
/** The preferred font family */
export const sapUiSegmentedButtonBorderColor = '#0a6ed1';
/** The preferred font family */
export const sapUiSegmentedButtonTextColor = '#0a6ed1';
/** The preferred font family */
export const sapUiSegmentedButtonHoverBackground = '#fafafa';
/** The preferred font family */
export const sapUiSegmentedButtonActiveBackground = '#0854a0';
/** The preferred font family */
export const sapUiSegmentedButtonActiveTextColor = '#ffffff';
/** The preferred font family */
export const sapUiSegmentedButtonSelectedBackground = '#0854a0';
/** The preferred font family */
export const sapUiSegmentedButtonSelectedTextColor = '#ffffff';
/** The preferred font family */
export const sapUiSegmentedButtonSelectedHoverBackground = '#085caf';
/** The preferred font family */
export const sapUiSegmentedButtonSelectedHoverBorderColor = '#085caf';
/** The preferred font family */
export const sapUiSegmentedButtonIconColor = '#0a6ed1';
/** The preferred font family */
export const sapUiSegmentedButtonActiveIconColor = '#ffffff';
/** The preferred font family */
export const sapUiSegmentedButtonSelectedIconColor = '#ffffff';
/** The preferred font family */
export const sapUiSegmentedButtonFooterBorderColor = '#0a6ed1';
/** The preferred font family */
export const sapUiSegmentedButtonFooterHoverBackground = '#fafafa';
/** The preferred font family */
export const sapUiFieldActiveBackground = '#0854a0';
/** The preferred font family */
export const sapUiFieldActiveBorderColor = '#0854a0';
/** The preferred font family */
export const sapUiFieldActiveTextColor = '#ffffff';
/** The preferred font family */
export const sapUiFieldPlaceholderTextColor = '#74777a';
/** The preferred font family */
export const sapUiListTextColor = '#32363a';
/** The preferred font family */
export const sapUiListVerticalBorderColor = '#ededed';
/** The preferred font family */
export const sapUiListActiveBackground = '#0854a0';
/** The preferred font family */
export const sapUiListActiveTextColor = '#ffffff';
/** The preferred font family */
export const sapUiListSelectionHoverBackground = '#d8e8f7';
/** The preferred font family */
export const sapUiListFooterBackground = '#fafafa';
/** The preferred font family */
export const sapUiListFooterTextColor = '#32363a';
/** The preferred font family */
export const sapUiListGroupHeaderBackground = '#ffffff';
/** The preferred font family */
export const sapUiListTableGroupHeaderBackground = '#f7f7f7';
/** The preferred font family */
export const sapUiListTableGroupHeaderBorderColor = '#ededed';
/** The preferred font family */
export const sapUiListTableGroupHeaderTextColor = '#32363a';
/** The preferred font family */
export const sapUiListTableFooterBorder = '#ededed';
/** The preferred font family */
export const sapUiListTableFixedBorder = '#d9d9d9';
/** The preferred font family */
export const sapUiListTableTextSize = '0.875rem';
/** The preferred font family */
export const sapUiListTableIconSize = '1rem';
/** The preferred font family */
export const sapUiPageFooterBorderColor = '#ebebeb';
/** The preferred font family */
export const sapUiInfobarHoverBackground = '#0e7681';
/** The preferred font family */
export const sapUiInfobarActiveBackground = '#0854a0';
/** The preferred font family */
export const sapUiObjectHeaderBorderColor = '#969696';
/** The preferred font family */
export const sapUiCalendarColorToday = '#c0399f';
/** The preferred font family */
export const sapUiDragAndDropColor = '#6a6d70';
/** The preferred font family */
export const sapUiDragAndDropBackground = '#ffffff';
/** The preferred font family */
export const sapUiDragAndDropBorderColor = '#89919a';
/** The preferred font family */
export const sapUiDragAndDropActiveColor = '#0a6ed1';
/** The preferred font family */
export const sapUiDragAndDropActiveBackground = 'rgba(10, 110, 209, 0.05)';
/** The preferred font family */
export const sapUiDragAndDropActiveBorderColor = '#0a6ed1';
/** The preferred font family */
export const sapUiShadowLevel0 = '0 0 0 1px rgba(0, 0, 0, 0.15)';
/** The preferred font family */
export const sapUiShadowLevel1 = '0 0.125rem 0.5rem 0 rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.15)';
/** The preferred font family */
export const sapUiShadowLevel2 = '0 0.625rem 1.875rem 0 rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.15)';
/** The preferred font family */
export const sapUiShadowLevel3 = '0 1.25rem 5rem 0 rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.15)';
/** The preferred font family */
export const sapUiShadowText = '0 0 0.125rem #ffffff';
/** The preferred font family */
export const sapUiShadowHeader = '0 1px 0.5rem 0 rgba(0, 0, 0, 0.05), inset 0 -1px 0 0 #969696';
/** The preferred font family */
export const sapUiUx3ShellHeaderImageURL = '';
/** The preferred font family */
export const sapUiUx3ShellApplicationImageURL = 'none';
/** The preferred font family */
export const sapUiPurple = '#800080';
/** The preferred font family */
export const sapUiOrange = '#ffa500';
/** The preferred font family */
export const sapUiGreen = '#008000';
/** The preferred font family */
export const sapUiBlue = '#0000ff';
/** The preferred font family */
export const sapUiRed = '#ff0000';
/** The preferred font family */
export const sapUiYellow = '#ffff00';
/** The preferred font family */
export const sapUiBase = '#000000';
/** The preferred font family */
export const sapUiBaseBorder = '#000000';
/** The preferred font family */
export const sapUiBaseLine = '#000000';
/** The preferred font family */
export const sapUiWhite = '#ffffff';
/** The preferred font family */
export const sapUiWhiteBG = '#ffffff';
/** The preferred font family */
export const sapUiExtraLightBG = '#fafafa';
/** The preferred font family */
export const sapUiLightBG = '#d3d3d3';
/** The preferred font family */
export const sapUiMediumBG = '#808080';
/** The preferred font family */
export const sapUiDarkBG = '#a9a9a9';
/** The preferred font family */
export const sapUiDeepBG = '#000000';
/** The preferred font family */
export const sapUiBlackBG = '#000000';
/** The preferred font family */
export const sapUiHoverBG = '#808080';
/** The preferred font family */
export const sapUiMediumAltBG = '#808080';
/** The preferred font family */
export const sapUiDarkAltBG = '#a9a9a9';
/** The preferred font family */
export const sapUiButtonStandardBG = '#fafafa';
/** The preferred font family */
export const sapUiButtonEmphasizedBG = '#ffff00';
/** The preferred font family */
export const sapUiButtonNegativeBG = '#ff0000';
/** The preferred font family */
export const sapUiButtonPositiveBG = '#008000';
/** The preferred font family */
export const sapUiReadOnlyBG = '#808080';
/** The preferred font family */
export const sapUiExtraLightText = '#d3d3d3';
/** The preferred font family */
export const sapUiLightText = '#d3d3d3';
/** The preferred font family */
export const sapUiMediumText = '#808080';
/** The preferred font family */
export const sapUiDarkText = '#a9a9a9';
/** The preferred font family */
export const sapUiDeepText = '#000000';
/** The preferred font family */
export const sapUiText = '#32363a';
/** The preferred font family */
export const sapUiTextInverted = '#ffffff';
/** The preferred font family */
export const sapUiWhiteBorder = '#ffffff';
/** The preferred font family */
export const sapUiExtraLightBorder = '#d3d3d3';
/** The preferred font family */
export const sapUiLightBorder = '#808080';
/** The preferred font family */
export const sapUiMediumBorder = '#000000';
/** The preferred font family */
export const sapUiDarkBorder = '#000000';
/** The preferred font family */
export const sapUiBlackBorder = '#000000';
/** The preferred font family */
export const sapUiElement = '#d3d3d3';
/** The preferred font family */
export const sapUiInvertedElement = '#ffffff';
/** The preferred font family */
export const sapUiLightLine = '#d3d3d3';
/** The preferred font family */
export const sapUiMediumLine = '#808080';
/** The preferred font family */
export const sapUiEmphasizedLine = '#0a6ed1';
/** The preferred font family */
export const sapUiDarkLine = '#a9a9a9';
/** The preferred font family */
export const sapUiLightShadowTint = '#ffffff';
/** The preferred font family */
export const sapUiDarkShadowTint = '#000000';
/** The preferred font family */
export const sapUiFocus = '#000000';
/** The preferred font family */
export const sapUiInvertedFocus = '#ffffff';
/** The preferred font family */
export const sapUiTableRowBG = '#ffffff';
/** The preferred font family */
export const sapUiTableRowAlternatingBG = '#ffffff';
/** The preferred font family */
export const sapUiTableRowSelectionBG = '#0a6ed1';
/** The preferred font family */
export const sapUiTableRowSelectionReadOnlyBG = '#0a6ed1';
/** The preferred font family */
export const sapUiTableRowHoverBG = '#808080';
/** The preferred font family */
export const sapUiListBG = '#f7f7f7';
/** The preferred font family */
export const sapUiTextColor = '#008000';
/** The preferred font family */
export const sapUiTextTitleColor = '#008000';
/** The preferred font family */
export const sapUiTextSelectionColor = '#008000';
/** The preferred font family */
export const sapUiTextDisabled = '#cbcfd3';
/** The preferred font family */
export const sapUiTextSelection = '#ffffff';
/** The preferred font family */
export const sapUiTextfieldBackground = '#ffffff';
/** The preferred font family */
export const sapUiFontMonospaceFamily = 'Lucida Console';
/** The preferred font family */
export const sapUiUx3ShellSideBarBaseWidth = '40px';
/** The preferred font family */
export const sapUiUx3ShellPaneOverflowButtonHeight = '120px';
/** The preferred font family */
export const sapUiUx3ExactLstCollapseWidth = '24px';
/** The preferred font family */
export const sapUiUx3ExactLstHeaderHeight = '25px';
/** The preferred font family */
export const sapUiNotificationBarBG_IE = '#808080';
/** The preferred font family */
export const sapUiNotifierHoverColor = '#0a6ed1';
/** The preferred font family */
export const sapUiNotificationText = '#ffffff';
/** The preferred font family */
export const sapUiNotificationTimestamp = '#ffff57';
/** The preferred font family */
export const sapUiNotificationBarCalloutBorder = 'rgba(128, 128, 128, 0)';
/** The preferred font family */
export const sapUiNotificationBarCalloutBorder_IE = '#808080';
/** The preferred font family */
export const sapUiNotificationBarCalloutArr = 'rgba(106, 109, 112, 0.98)';
/** The preferred font family */
export const sapUiNotificationBarHeight = '40px';
/** The preferred font family */
export const sapUiNotificationBarHeightMinimized = '0px';
/** The preferred font family */
export const sapUiNotificationBarHeightMaximized = '40%';
/** The preferred font family */
export const sapUiNotifierWidth = '40px';
/** The preferred font family */
export const sapUiRIIconPaddingXS = '1px';
/** The preferred font family */
export const sapUiRIIconPaddingS = '0.125rem';
/** The preferred font family */
export const sapUiRIIconPaddingM = '0.1875rem';
/** The preferred font family */
export const sapUiRIIconPaddingL = '0.25rem';
/** The preferred font family */
export const sapUiRIIconPaddingCozy = '0.1875rem';
/** The preferred font family */
export const sapUiRIIconPaddingCompact = '0.125rem';
/** The preferred font family */
export const sapUiRIIconPaddingCondensed = '0.125rem';
/** The preferred font family */
export const sapUiRIIconPaddingDisplayOnly = '0.125rem';
/** The preferred font family */
export const sapUiRIIconSizeCozy = '1.375rem';
/** The preferred font family */
export const sapUiRIIconSizeCompact = '1rem';
/** The preferred font family */
export const sapUiRIIconSizeCondensed = '1rem';
/** The preferred font family */
export const sapUiRIIconSizeDisplayOnly = '1rem';
/** The preferred font family */
export const sapUiUx3ToolPopupArrowWidth = '13px';
/** The preferred font family */
export const sapUiUx3ToolPopupArrowHeight = '24px';
/** The preferred font family */
export const sapUiUx3ToolPopupArrowRightMarginCorrectionInverted = '-7px';
/** The preferred font family */
export const sapUiUx3TPPaddingBottom = '50px';
/** The preferred font family */
export const sapUiButtonEmphasizedDisabledBorderColor = '#0a6ed1';
/** The preferred font family */
export const sapUiButtonEmphasizedDisabledBackground = '#0a6ed1';
/** The preferred font family */
export const sapUiButtonAcceptDisabledBorderColor = '#107e3e';
/** The preferred font family */
export const sapUiButtonAcceptDisabledBackground = '#ffffff';
/** The preferred font family */
export const sapUiButtonRejectDisabledBorderColor = '#bb0000';
/** The preferred font family */
export const sapUiButtonRejectDisabledBackground = '#ffffff';
/** The preferred font family */
export const sapUiToggleButtonPressedDisabledBackground = '#0854a0';
/** The preferred font family */
export const sapUiToggleButtonPressedDisabledBorderColor = '#0854a0';
/** The preferred font family */
export const sapUiToggleButtonPressedDisabledTextColor = '#c2dbf4';
/** The preferred font family */
export const sapUiPositiveBG = '#107e3e';
/** The preferred font family */
export const sapUiShadowTint = '#000000';
/** The preferred font family */
export const sapUiShadow = '5px 5px 10px rgba(0, 0, 0, 0.5)';
/** The preferred font family */
export const sapUiThemeDesignerCustomCss = 'false';
/** The preferred font family */
export const sapUiMarginTiny = '0.5rem';
/** The preferred font family */
export const sapUiMarginSmall = '1rem';
/** The preferred font family */
export const sapUiMarginMedium = '2rem';
/** The preferred font family */
export const sapUiMarginLarge = '3rem';
/** The preferred font family */
export const sapUiEscapedEmptyString = '';
/** The preferred font family */
export const sapUiLightBoxMagnifyingGlassBorder = 'none';
/** The preferred font family */
export const sapUiLightBoxMagnifyingGlassBackgroundColor = '#0a6ed1';
/** The background pattern color of the shell. To turn off the pattern set the value to 'transparent' */
export const sapUiShellBackgroundPatternColor = 'transparent';

/** The background pattern color of the shell. To turn off the pattern set the value to 'transparent' */
export const sapUiPrimary1 = '#354a5f';
/** The background pattern color of the shell. To turn off the pattern set the value to 'transparent' */
export const sapUiPrimary2 = '#0a6ed1';
/** The background pattern color of the shell. To turn off the pattern set the value to 'transparent' */
export const sapUiPrimary3 = '#ffffff';
/** The background pattern color of the shell. To turn off the pattern set the value to 'transparent' */
export const sapUiPrimary4 = '#edeff0';
/** The background pattern color of the shell. To turn off the pattern set the value to 'transparent' */
export const sapUiPrimary5 = '#89919a';
/** The background pattern color of the shell. To turn off the pattern set the value to 'transparent' */
export const sapUiPrimary6 = '#32363a';
/** The background pattern color of the shell. To turn off the pattern set the value to 'transparent' */
export const sapUiPrimary7 = '#6a6d70';
/** The background pattern color of the shell. To turn off the pattern set the value to 'transparent' */
export const sapUiAccent9 = '#925ace';
/** The background pattern color of the shell. To turn off the pattern set the value to 'transparent' */
export const sapUiAccent10 = '#8497a4';
