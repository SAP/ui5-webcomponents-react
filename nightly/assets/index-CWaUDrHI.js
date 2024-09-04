import{d as t,u as n,j as _}from"./useIsomorphicLayoutEffect-Dhma_bjk.js";import{c as w,o as h,d as m}from"./withWebComponent-YgbOdVTg.js";import"./utils-C_Hfx9mc.js";import{t as B,r as S}from"./i18nBundle-CRmnyxU0.js";import{I as d}from"./I18nStore-5-32Wrgv.js";import{S as b,u}from"./useStylesheet-DcbwKAeb.js";import{r as p}from"./index-RYns6xqu.js";import{V as s}from"./index-2YUQW0GG.js";const C={packageName:"@ui5/webcomponents-react",fileName:"ThemeProvider.css",content:"@layer ui5-webcomponents-react{:root{--_ui5wcr-AnalyticalTableExpandButtonHeight:2.25rem;--_ui5wcr-AnalyticalTableExpandIconHeight:1rem;--_ui5wcr-AnalyticalTableExpandIndicatorWidth:1.875rem;--_ui5wcr-AnalyticalTableHeaderRowHeight:44px;--_ui5wcr-AnalyticalTableRowHeight:44px;--_ui5wcr-AnalyticalTableSelectionColumnWidth:44px;--_ui5wcr-AnalyticalTableTreePaddingLevel1:1rem;--_ui5wcr-AnalyticalTableTreePaddingLevel2:1.5rem;--_ui5wcr-AnalyticalTableTreePaddingLevel3:2rem;--_ui5wcr-BarHeight:2.75rem;--_ui5wcr-ButtonTopBottomPadding:0.25rem 0;--_ui5wcr-CheckBoxPaddingInline:0.6875rem;--_ui5wcr-CheckBoxWidthHeight:2.75rem;--_ui5wcr-DialogHeaderHeight:2.75rem;--_ui5wcr-DialogSubHeaderHeight:3rem;--_ui5wcr-ElementHeight:var(--sapElement_Height);--_ui5wcr-FormGroupTitleHeight:2.75rem;--_ui5wcr-MessageItemTitleFontSize:var(--sapFontHeader5Size);--_ui5wcr-MessageViewListItemHeightByLine:3.325rem;--_ui5wcr-MessageViewListItemHeightSingle:2.75rem;--_ui5wcr-SplitterSize:1rem;--_ui5wcr-ToolbarHeight:2.75rem;--_ui5wcr-ToolbarPopoverContentPadding:0.25rem 0.5rem;--_ui5wcr-ToolbarSeparatorHeight:2rem}.sapUiSizeCompact,.ui5-content-density-compact,[data-ui5-compact-size]{--_ui5wcr-AnalyticalTableExpandButtonHeight:1.5rem;--_ui5wcr-AnalyticalTableExpandIconHeight:0.75rem;--_ui5wcr-AnalyticalTableExpandIndicatorWidth:1.625rem;--_ui5wcr-AnalyticalTableHeaderRowHeight:32px;--_ui5wcr-AnalyticalTableRowHeight:32px;--_ui5wcr-AnalyticalTableSelectionColumnWidth:32px;--_ui5wcr-AnalyticalTableTreePaddingLevel1:1.5rem;--_ui5wcr-AnalyticalTableTreePaddingLevel2:2.25rem;--_ui5wcr-AnalyticalTableTreePaddingLevel3:2.75rem;--_ui5wcr-BarHeight:2.5rem;--_ui5wcr-ButtonTopBottomPadding:0.1875rem 0;--_ui5wcr-CheckBoxPaddingInline:0.5rem;--_ui5wcr-CheckBoxWidthHeight:2rem;--_ui5wcr-DialogHeaderHeight:2.5rem;--_ui5wcr-DialogSubHeaderHeight:2.25rem;--_ui5wcr-ElementHeight:var(--sapElement_Compact_Height);--_ui5wcr-FormGroupTitleHeight:2rem;--_ui5wcr-MessageItemTitleFontSize:var(--sapFontHeader6Size);--_ui5wcr-MessageViewListItemHeightByLine:3.25rem;--_ui5wcr-MessageViewListItemHeightSingle:2rem;--_ui5wcr-ToolbarHeight:2rem;--_ui5wcr-ToolbarPopoverContentPadding:0.1875rem 0.375rem;--_ui5wcr-ToolbarSeparatorHeight:1.5rem}:root{--_ui5wcr_Scrollbar_Border:none;--_ui5wcr_Splitter_IconColor:var(--sapButton_Lite_TextColor);--_ui5wcr_Splitter_BarOutline:none;--_ui5wcr_Toolbar_FocusShadow:none;--_ui5wcr_Toolbar_FocusOutline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);--_ui5wcr_Scrollbar_BorderRadius:var(--sapElement_BorderCornerRadius);--_ui5wcr_Splitter_BarBorderFocus:var(--sapContent_FocusWidth) solid var(--sapContent_FocusColor);--_ui5wcr_Splitter_BarBorderStyle:none;--_ui5wcr_ActionSheet_HeaderBoxShadow:none;--_ui5wcr_ObjectPage_SectionBorderTop:0.0625rem solid var(--sapGroup_TitleBorderColor);--_ui5wcr_Splitter_ContentBorderColor:var(--sapHighlightColor);--_ui5wcr_ObjectPage_PaddingBlockStart:2rem;--_ui5wcr_ObjectPage_SectionTitleHeight:2.25rem;--_ui5wcr-AnalyticalTable-OuterCellBorder:1px solid var(--sapList_BorderColor);--_ui5wcr-AnalyticalTable-HeaderFontFamily:var(--sapFontFamily);--_ui5wcr-AnalyticalTable-OuterBorderBlock:1px solid var(--sapList_BorderColor);--_ui5wcr-AnalyticalTable-HeaderBorderWidth:0.0625rem;--_ui5wcr-AnalyticalTable-OuterBorderInline:1px solid var(--sapList_BorderColor);--_ui5wcr_ActionSheet_MobileHeaderBoxShadow:none;--_ui5wcr_ActionSheet_MobileHeaderTextColor:var(--sapContent_ContrastTextColor);--_ui5wcr_ObjectPage_SectionTitleFontFamily:var(--sapFontFamily);--_ui5wcr_ObjectPage_SectionTitleLineHeight:2.25rem;--_ui5wcr_ObjectPage_SubSectionBorderRadius:0;--_ui5wcr_Splitter_BarBorderHighContrastFix:var(--sapContent_FocusWidth) solid var(--sapContent_FocusColor);--_ui5wcr_ActionSheet_MobileHeaderBackground:#0000;--_ui5wcr_ActionSheet_MobileHeaderBorderRadius:0;--_ui5wcr_ObjectPage_SubSectionBackgroundColor:#0000;--_ui5wcr-AnalyticalTable-HeaderActiveTextColor:var(--sapList_HeaderTextColor);--_ui5wcr_ObjectPage_SectionTitleTextDecoration:none;--_ui5wcr_Form_HeaderBorderWidth:var(--sapList_BorderWidth)}[data-sap-theme=sap_belize]{--_ui5wcr_ActionSheet_BoxShadow:var(--sapContent_HeaderShadow);--_ui5wcr_Scrollbar_BorderRadius:0;--_ui5wcr_Splitter_BarBorderFocus:.0625rem dotted var(--sapContent_FocusColor);--_ui5wcr_ActionSheet_TopBorderRadius:var(--sapElement_BorderCornerRadius);--_ui5wcr_Splitter_BarBorderHighContrastFix:.0625rem dotted var(--sapContent_FocusColor)}[data-sap-theme=sap_belize_hcb]{--_ui5wcr_Scrollbar_Border:0.0625rem solid #999;--_ui5wcr_ActionSheet_BoxShadow:var(--sapContent_HeaderShadow);--_ui5wcr_Scrollbar_BorderRadius:0;--_ui5wcr_ActionSheet_TopBorderRadius:var(--sapElement_BorderCornerRadius)}[data-sap-theme=sap_belize_hcw]{--_ui5wcr_Scrollbar_Border:0.0625rem solid #585858;--_ui5wcr_ActionSheet_BoxShadow:var(--sapContent_HeaderShadow);--_ui5wcr_Scrollbar_BorderRadius:0;--_ui5wcr_ActionSheet_TopBorderRadius:var(--sapElement_BorderCornerRadius)}[data-sap-theme=sap_fiori_3]{--_ui5wcr_ActionSheet_BoxShadow:var(--sapContent_HeaderShadow);--_ui5wcr_Splitter_BarBorderFocus:.0625rem dotted var(--sapContent_FocusColor);--_ui5wcr_ActionSheet_TopBorderRadius:var(--sapElement_BorderCornerRadius);--_ui5wcr_Splitter_BarBorderHighContrastFix:.0625rem dotted var(--sapContent_FocusColor)}[data-sap-theme=sap_fiori_3_dark]{--_ui5wcr_ActionSheet_BoxShadow:var(--sapContent_HeaderShadow);--_ui5wcr_Splitter_BarBorderFocus:.0625rem dotted var(--sapContent_FocusColor);--_ui5wcr_ActionSheet_TopBorderRadius:var(--sapElement_BorderCornerRadius);--_ui5wcr_Splitter_BarBorderHighContrastFix:.0625rem dotted var(--sapContent_FocusColor)}[data-sap-theme=sap_fiori_3_hcb]{--_ui5wcr_Splitter_BarOutline:0.15rem dotted var(--sapGroup_ContentBorderColor);--_ui5wcr_ActionSheet_BoxShadow:var(--sapContent_HeaderShadow);--_ui5wcr_Splitter_BarBorderFocus:solid var(--sapGroup_ContentBorderColor) 0.0625rem;--_ui5wcr_Splitter_BarBorderStyle:solid var(--sapGroup_ContentBorderColor) 0.0625rem;--_ui5wcr_ActionSheet_TopBorderRadius:var(--sapElement_BorderCornerRadius);--_ui5wcr_Splitter_ContentBorderColor:var(--sapGroup_ContentBorderColor);--_ui5wcr_Splitter_BarBorderHighContrastFix:none;--_ui5wcr_Form_HeaderBorderWidth:calc(var(--sapList_BorderWidth)*3)}[data-sap-theme=sap_fiori_3_hcw]{--_ui5wcr_Splitter_BarOutline:0.15rem dotted var(--sapGroup_ContentBorderColor);--_ui5wcr_ActionSheet_BoxShadow:var(--sapContent_HeaderShadow);--_ui5wcr_Splitter_BarBorderFocus:solid var(--sapGroup_ContentBorderColor) 0.0625rem;--_ui5wcr_Splitter_BarBorderStyle:solid var(--sapGroup_ContentBorderColor) 0.0625rem;--_ui5wcr_ActionSheet_TopBorderRadius:var(--sapElement_BorderCornerRadius);--_ui5wcr_Splitter_ContentBorderColor:var(--sapGroup_ContentBorderColor);--_ui5wcr_Splitter_BarBorderHighContrastFix:none;--_ui5wcr_Form_HeaderBorderWidth:calc(var(--sapList_BorderWidth)*3)}[data-sap-theme=sap_horizon]{--_ui5wcr_Toolbar_FocusShadow:inset 0 0 0 0.125rem var(--sapContent_FocusColor);--_ui5wcr_Toolbar_FocusOutline:none;--_ui5wcr_ActionSheet_HeaderBoxShadow:var(--sapContent_HeaderShadow);--_ui5wcr_ObjectPage_SectionBorderTop:none;--_ui5wcr_Splitter_ContentBorderColor:var(--sapGroup_ContentBorderColor);--_ui5wcr_ObjectPage_PaddingBlockStart:0.5rem;--_ui5wcr_ObjectPage_SectionTitleHeight:2.75rem;--_ui5wcr-AnalyticalTable-OuterCellBorder:1px solid #0000;--_ui5wcr-AnalyticalTable-HeaderFontFamily:var(--sapFontBoldFamily);--_ui5wcr-AnalyticalTable-OuterBorderBlock:none;--_ui5wcr-AnalyticalTable-OuterBorderInline:none;--_ui5wcr_ActionSheet_MobileHeaderBoxShadow:var(--sapContent_Shadow2);--_ui5wcr_ActionSheet_MobileHeaderTextColor:var(--sapPageHeader_TextColor);--_ui5wcr_ObjectPage_SectionTitleFontFamily:var(--sapFontBoldFamily);--_ui5wcr_ObjectPage_SectionTitleLineHeight:4rem;--_ui5wcr_ObjectPage_SubSectionBorderRadius:var(--sapElement_BorderCornerRadius);--_ui5wcr_ActionSheet_MobileHeaderBackground:var(--sapPageHeader_Background);--_ui5wcr_ActionSheet_MobileHeaderBorderRadius:var(--sapPopover_BorderCornerRadius);--_ui5wcr_ObjectPage_SubSectionBackgroundColor:var(--sapGroup_ContentBackground)}[data-sap-theme=sap_horizon_dark]{--_ui5wcr_Toolbar_FocusShadow:inset 0 0 0 0.125rem var(--sapContent_FocusColor);--_ui5wcr_Toolbar_FocusOutline:none;--_ui5wcr_ActionSheet_HeaderBoxShadow:var(--sapContent_HeaderShadow);--_ui5wcr_ObjectPage_SectionBorderTop:none;--_ui5wcr_Splitter_ContentBorderColor:var(--sapGroup_ContentBorderColor);--_ui5wcr_ObjectPage_PaddingBlockStart:0.5rem;--_ui5wcr_ObjectPage_SectionTitleHeight:2.75rem;--_ui5wcr-AnalyticalTable-OuterCellBorder:1px solid #0000;--_ui5wcr-AnalyticalTable-HeaderFontFamily:var(--sapFontBoldFamily);--_ui5wcr-AnalyticalTable-OuterBorderBlock:none;--_ui5wcr-AnalyticalTable-OuterBorderInline:none;--_ui5wcr_ActionSheet_MobileHeaderBoxShadow:var(--sapContent_Shadow2);--_ui5wcr_ActionSheet_MobileHeaderTextColor:var(--sapPageHeader_TextColor);--_ui5wcr_ObjectPage_SectionTitleFontFamily:var(--sapFontBoldFamily);--_ui5wcr_ObjectPage_SectionTitleLineHeight:4rem;--_ui5wcr_ObjectPage_SubSectionBorderRadius:var(--sapElement_BorderCornerRadius);--_ui5wcr_ActionSheet_MobileHeaderBackground:var(--sapPageHeader_Background);--_ui5wcr_ActionSheet_MobileHeaderBorderRadius:var(--sapPopover_BorderCornerRadius);--_ui5wcr_ObjectPage_SubSectionBackgroundColor:var(--sapGroup_ContentBackground)}[data-sap-theme=sap_horizon_hcb]{--_ui5wcr_Splitter_BarOutline:0.15rem dotted var(--sapGroup_ContentBorderColor);--_ui5wcr_Splitter_BarBorderFocus:solid var(--sapGroup_ContentBorderColor) 0.0625rem;--_ui5wcr_Splitter_BarBorderStyle:solid var(--sapGroup_ContentBorderColor) 0.0625rem;--_ui5wcr_ActionSheet_HeaderBoxShadow:var(--sapContent_HeaderShadow);--_ui5wcr_ObjectPage_SectionBorderTop:none;--_ui5wcr_Splitter_ContentBorderColor:var(--sapGroup_ContentBorderColor);--_ui5wcr-AnalyticalTable-OuterCellBorder:1px solid #0000;--_ui5wcr-AnalyticalTable-HeaderFontFamily:var(--sapFontBoldFamily);--_ui5wcr-AnalyticalTable-HeaderBorderWidth:0.188rem;--_ui5wcr-AnalyticalTable-OuterBorderInline:none;--_ui5wcr_ActionSheet_MobileHeaderBoxShadow:var(--sapContent_Shadow2);--_ui5wcr_ActionSheet_MobileHeaderTextColor:var(--sapPageHeader_TextColor);--_ui5wcr_ObjectPage_SectionTitleFontFamily:var(--sapFontBoldFamily);--_ui5wcr_ObjectPage_SubSectionBorderRadius:var(--sapElement_BorderCornerRadius);--_ui5wcr_Splitter_BarBorderHighContrastFix:none;--_ui5wcr_ActionSheet_MobileHeaderBackground:var(--sapPageHeader_Background);--_ui5wcr_ActionSheet_MobileHeaderBorderRadius:var(--sapPopover_BorderCornerRadius);--_ui5wcr_ObjectPage_SubSectionBackgroundColor:var(--sapGroup_ContentBackground);--_ui5wcr-AnalyticalTable-HeaderActiveTextColor:var(--sapContent_ContrastTextColor);--_ui5wcr_ObjectPage_SectionTitleTextDecoration:underline var(--sapList_SelectionBorderColor);--_ui5wcr_Form_HeaderBorderWidth:calc(var(--sapList_BorderWidth)*3)}[data-sap-theme=sap_horizon_hcw]{--_ui5wcr_Splitter_BarOutline:0.15rem dotted var(--sapGroup_ContentBorderColor);--_ui5wcr_Splitter_BarBorderFocus:solid var(--sapGroup_ContentBorderColor) 0.0625rem;--_ui5wcr_Splitter_BarBorderStyle:solid var(--sapGroup_ContentBorderColor) 0.0625rem;--_ui5wcr_ActionSheet_HeaderBoxShadow:var(--sapContent_HeaderShadow);--_ui5wcr_ObjectPage_SectionBorderTop:none;--_ui5wcr_Splitter_ContentBorderColor:var(--sapGroup_ContentBorderColor);--_ui5wcr-AnalyticalTable-OuterCellBorder:1px solid #0000;--_ui5wcr-AnalyticalTable-HeaderFontFamily:var(--sapFontBoldFamily);--_ui5wcr-AnalyticalTable-HeaderBorderWidth:0.188rem;--_ui5wcr-AnalyticalTable-OuterBorderInline:none;--_ui5wcr_ActionSheet_MobileHeaderBoxShadow:var(--sapContent_Shadow2);--_ui5wcr_ActionSheet_MobileHeaderTextColor:var(--sapPageHeader_TextColor);--_ui5wcr_ObjectPage_SectionTitleFontFamily:var(--sapFontBoldFamily);--_ui5wcr_ObjectPage_SubSectionBorderRadius:var(--sapElement_BorderCornerRadius);--_ui5wcr_Splitter_BarBorderHighContrastFix:none;--_ui5wcr_ActionSheet_MobileHeaderBackground:var(--sapPageHeader_Background);--_ui5wcr_ActionSheet_MobileHeaderBorderRadius:var(--sapPopover_BorderCornerRadius);--_ui5wcr_ObjectPage_SubSectionBackgroundColor:var(--sapGroup_ContentBackground);--_ui5wcr-AnalyticalTable-HeaderActiveTextColor:var(--sapContent_ContrastTextColor);--_ui5wcr_ObjectPage_SectionTitleTextDecoration:underline var(--sapList_SelectionBorderColor);--_ui5wcr_Form_HeaderBorderWidth:calc(var(--sapList_BorderWidth)*3)}:not(.ui5-content-native-scrollbars)::-webkit-scrollbar{background-color:var(--sapScrollBar_TrackColor);-webkit-border-start:var(--_ui5wcr_Scrollbar_Border)}:not(.ui5-content-native-scrollbars)::-webkit-scrollbar-thumb{background-color:var(--sapScrollBar_FaceColor);border-radius:var(--_ui5wcr_Scrollbar_BorderRadius)}:is(:not(.ui5-content-native-scrollbars)::-webkit-scrollbar-thumb):hover{background-color:var(--sapScrollBar_Hover_FaceColor)}:is(:not(.ui5-content-native-scrollbars)::-webkit-scrollbar-thumb):horizontal{height:var(--sapScrollBar_Dimension)}:is(:not(.ui5-content-native-scrollbars)::-webkit-scrollbar-thumb):vertical{width:var(--sapScrollBar_Dimension)}:not(.ui5-content-native-scrollbars)::-webkit-scrollbar-corner{background-color:var(--sapScrollBar_TrackColor)}:not(.ui5-content-native-scrollbars)::-webkit-scrollbar:horizontal{height:var(--sapScrollBar_Dimension)}:not(.ui5-content-native-scrollbars)::-webkit-scrollbar:vertical{width:var(--sapScrollBar_Dimension)}}"};let c=!1;function v(){const e=p.useId();return u(C,`${r.displayName}-${e}`),u(T,`${r.displayName}-css-vars-${e}`),null}const g={"--_ui5wcr_card_header_focus_offset":`var(${t("--_ui5_card_header_focus_offset")})`,"--_ui5wcr_card_header_focus_border":`var(${t("--_ui5_card_header_focus_border")})`,"--_ui5wcr_card_header_focus_radius":`var(${t("--_ui5_card_header_focus_radius")})`,"--_ui5wcr_card_header_focus_bottom_radius":`var(${t("--_ui5_card_header_focus_bottom_radius")})`,"--_ui5wcr_popup_header_font_family":`var(${t("--_ui5_popup_header_font_family")})`},T={content:`:root {${Object.entries(g).map(([e,a])=>`${e}: ${a};`).join(" ")}}`,packageName:"@ui5/webcomponents-react",fileName:"ThemeProvider"},r=e=>{const{children:a,staticCssInjected:l=!1}=e;return n(()=>{document.documentElement.setAttribute("data-sap-theme",w());const o=i=>{document.documentElement.setAttribute("data-sap-theme",i)};return h(o),()=>{m(o)}},[]),n(()=>{b.setStaticCssInjected(l)},[l]),n(()=>(B(d.handleLanguageChange),()=>{S(d.handleLanguageChange)}),[]),p.useEffect(()=>{var o;if(!c)return globalThis["@ui5/webcomponents-react"]??(globalThis["@ui5/webcomponents-react"]={}),(o=globalThis["@ui5/webcomponents-react"]).Runtimes??(o.Runtimes=[]),globalThis["@ui5/webcomponents-react"].Runtimes.push(s),c=!0,()=>{globalThis["@ui5/webcomponents-react"].Runtimes=globalThis["@ui5/webcomponents-react"].Runtimes.filter(i=>i!==s),c=!1}},[]),_.jsxs(_.Fragment,{children:[_.jsx(v,{}),a]})};r.displayName="ThemeProvider";try{r.displayName="ThemeProvider",r.__docgenInfo={description:"In order to use `@ui5/webcomponents-react` you have to wrap your application's root component into the ThemeProvider.\n\n__Note:__ Per default, the `ThemeProvider` injects the CSS for the components during runtime. If you have imported our static CSS bundle/s in your application, you can set the prop `staticCssInjected` to `true` to prevent this.",displayName:"ThemeProvider",props:{staticCssInjected:{defaultValue:null,description:"You can set this flag to true in case you have imported our static CSS Bundle/s in your application.\nThis will prevent the ThemeProvider from injecting the CSS during runtime again.\n\n* __main:__ `import '@ui5/webcomponents-react/styles.css'`\n* __charts:__ `import '@ui5/webcomponents-react-charts/styles.css'`",name:"staticCssInjected",required:!1,type:{name:"boolean"}}}}}catch{}try{r.displayName="ThemeProvider",r.__docgenInfo={description:"In order to use `@ui5/webcomponents-react` you have to wrap your application's root component into the ThemeProvider.\n\n__Note:__ Per default, the `ThemeProvider` injects the CSS for the components during runtime. If you have imported our static CSS bundle/s in your application, you can set the prop `staticCssInjected` to `true` to prevent this.",displayName:"ThemeProvider",props:{staticCssInjected:{defaultValue:null,description:"You can set this flag to true in case you have imported our static CSS Bundle/s in your application.\nThis will prevent the ThemeProvider from injecting the CSS during runtime again.\n\n* __main:__ `import '@ui5/webcomponents-react/styles.css'`\n* __charts:__ `import '@ui5/webcomponents-react-charts/styles.css'`",name:"staticCssInjected",required:!1,type:{name:"boolean"}}}}}catch{}export{r as T};
