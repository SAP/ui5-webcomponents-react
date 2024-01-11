import{j as c}from"./jsx-runtime-DtaoT6pD.js";import{c as T,d as y,e as F}from"./UI5Element-N46uHiF6.js";import{T as o}from"./ThemingParameters-UghqSl-x.js";import{c as P,T as H}from"./react-jss.esm-tmBtHfec.js";import{d as A,a as x,h as w}from"./i18nBundle-1uTNzT_G.js";import{g as O}from"./I18nContext-VUOpdMoH.js";import{r as n}from"./index-OjgoNOWw.js";import{r as k}from"./index-QYh6idnL.js";import{g as R}from"./ModalsContext-T9gUbaXC.js";import{a as v,b as f}from"./CssSizeVariables-loCRUewX.js";import{a as e,C as p}from"./CustomVariables-jcpx1a4M.js";import{G as m}from"./GlobalStyleClasses-kWTEndz_.js";import{u as j}from"./useIsomorphicLayoutEffect-s31TYDr7.js";const M=(r,a)=>({...r,...a.payload});function B({children:r}){const[a,l]=n.useReducer(M,{}),i=n.useRef({}),d=n.useRef(!1),t=n.useCallback(()=>Promise.all(Object.keys(i.current).map(s=>A(s))).then(s=>{const u=s.reduce((g,h)=>({...g,[h.packageName]:h}),{});d.current&&l({payload:u})}),[]),b=n.useCallback((s,u)=>{i.current[s]=u,t()},[]);n.useEffect(()=>(d.current=!0,x(t),()=>{d.current=!1,w(t)}),[]);const _=O();return c.jsx(_.Provider,{value:{i18nBundles:a,setI18nBundle:b},children:r})}try{B.displayName="I18nProvider",B.__docgenInfo={description:"",displayName:"I18nProvider",props:{}}}catch{}const $=(r,a)=>{switch(a.type){case"set":return[...r,a.payload];case"reset":return r.filter(l=>l.id!==a.payload.id);default:return r}};function S({children:r}){const[a,l]=n.useReducer($,[]);globalThis["@ui5/webcomponents-react"]??(globalThis["@ui5/webcomponents-react"]={}),globalThis["@ui5/webcomponents-react"].setModal=l;const i=R(),d=n.useMemo(()=>({setModal:globalThis["@ui5/webcomponents-react"].setModal}),[]);return c.jsxs(i.Provider,{value:d,children:[a.map(t=>{if(t!=null&&t.Component)return k.createPortal(n.createElement(t.Component,{...t.props,ref:t.ref,key:t.id,"data-id":t.id}),t.container??document.body)}),r]})}try{S.displayName="ModalsProvider",S.__docgenInfo={description:"",displayName:"ModalsProvider",props:{}}}catch{}const G={[e.ActionSheetHeaderBoxShadow]:"none",[e.ActionSheetMobileHeaderBackground]:"transparent",[e.ActionSheetMobileHeaderBorderRadius]:"0",[e.ActionSheetMobileHeaderBoxShadow]:"none",[e.ActionSheetMobileHeaderTextColor]:o.sapContent_ContrastTextColor,[e.AnalyticalTableHeaderActiveTextColor]:o.sapList_HeaderTextColor,[e.AnalyticalTableHeaderBorderWidth]:"0.0625rem",[e.AnalyticalTableHeaderFontFamily]:o.sapFontFamily,[e.AnalyticalTableOuterBorderBlock]:`1px solid ${o.sapList_BorderColor}`,[e.AnalyticalTableOuterBorderInline]:`1px solid ${o.sapList_BorderColor}`,[e.AnalyticalTableOuterCellBorder]:`1px solid ${o.sapList_BorderColor}`,[e.ObjectPageSectionBorderTop]:`0.0625rem solid ${o.sapGroup_TitleBorderColor}`,[e.ObjectPageSectionTitleFontFamily]:o.sapFontFamily,[e.ObjectPageSectionTitleHeight]:"2.25rem",[e.ObjectPageSectionTitleLineHeight]:"2.25rem",[e.ObjectPageSectionTitleTextDecoration]:"none",[e.ObjectPageSubSectionBackgroundColor]:"transparent",[e.ObjectPageSubSectionBorderRadius]:"0",[e.ObjectPageSubSectionPaddingBlockStart]:"2rem",[e.SplitterBarBorderFix]:`${o.sapContent_FocusWidth} solid ${o.sapContent_FocusColor}`,[e.SplitterBarBorderFocus]:`${o.sapContent_FocusWidth} solid ${o.sapContent_FocusColor}`,[e.SplitterBarBorderStyle]:"none",[e.SplitterBarOutline]:"none",[e.SplitterContentBorderColor]:o.sapHighlightColor,[e.SplitterIconColor]:o.sapButton_Lite_TextColor,[e.ToolbarFocusOutline]:`${o.sapContent_FocusWidth} ${o.sapContent_FocusStyle} ${o.sapContent_FocusColor}`,[e.ToolbarFocusShadow]:"none",[e.ScrollbarBorder]:"none",[e.ScrollbarBorderRadius]:o.sapElement_BorderCornerRadius},z={[e.ActionSheetTopBorderRadius]:o.sapElement_BorderCornerRadius,[e.ActionSheetBoxShadow]:o.sapContent_HeaderShadow,[e.SplitterBarBorderFocus]:`.0625rem dotted ${o.sapContent_FocusColor}`,[e.SplitterBarBorderFix]:`.0625rem dotted ${o.sapContent_FocusColor}`,[e.ScrollbarBorderRadius]:0},I={[e.ActionSheetTopBorderRadius]:o.sapElement_BorderCornerRadius,[e.ActionSheetBoxShadow]:o.sapContent_HeaderShadow,[e.ScrollbarBorder]:"0.0625rem solid #999",[e.ScrollbarBorderRadius]:0},E={[e.ActionSheetTopBorderRadius]:o.sapElement_BorderCornerRadius,[e.ActionSheetBoxShadow]:o.sapContent_HeaderShadow,[e.ScrollbarBorder]:"0.0625rem solid #585858",[e.ScrollbarBorderRadius]:0},L={[e.ActionSheetTopBorderRadius]:o.sapElement_BorderCornerRadius,[e.ActionSheetBoxShadow]:o.sapContent_HeaderShadow,[e.SplitterBarBorderFocus]:`.0625rem dotted ${o.sapContent_FocusColor}`,[e.SplitterBarBorderFix]:`.0625rem dotted ${o.sapContent_FocusColor}`},D={[e.ActionSheetTopBorderRadius]:o.sapElement_BorderCornerRadius,[e.ActionSheetBoxShadow]:o.sapContent_HeaderShadow,[e.SplitterBarBorderFocus]:`.0625rem dotted ${o.sapContent_FocusColor}`,[e.SplitterBarBorderFix]:`.0625rem dotted ${o.sapContent_FocusColor}`},N={[e.ActionSheetTopBorderRadius]:o.sapElement_BorderCornerRadius,[e.ActionSheetBoxShadow]:o.sapContent_HeaderShadow,[e.SplitterContentBorderColor]:o.sapGroup_ContentBorderColor,[e.SplitterBarBorderStyle]:`solid ${o.sapGroup_ContentBorderColor} 0.0625rem`,[e.SplitterBarOutline]:`0.15rem dotted ${o.sapGroup_ContentBorderColor}`,[e.SplitterBarBorderFocus]:`solid ${o.sapGroup_ContentBorderColor} 0.0625rem`,[e.SplitterBarBorderFix]:"none"},W={[e.ActionSheetTopBorderRadius]:o.sapElement_BorderCornerRadius,[e.ActionSheetBoxShadow]:o.sapContent_HeaderShadow,[e.SplitterContentBorderColor]:o.sapGroup_ContentBorderColor,[e.SplitterBarBorderStyle]:`solid ${o.sapGroup_ContentBorderColor} 0.0625rem`,[e.SplitterBarOutline]:`0.15rem dotted ${o.sapGroup_ContentBorderColor}`,[e.SplitterBarBorderFocus]:`solid ${o.sapGroup_ContentBorderColor} 0.0625rem`,[e.SplitterBarBorderFix]:"none"},V={[e.ActionSheetHeaderBoxShadow]:o.sapContent_HeaderShadow,[e.ActionSheetMobileHeaderBackground]:o.sapPageHeader_Background,[e.ActionSheetMobileHeaderBorderRadius]:o.sapPopover_BorderCornerRadius,[e.ActionSheetMobileHeaderBoxShadow]:o.sapContent_Shadow2,[e.ActionSheetMobileHeaderTextColor]:o.sapPageHeader_TextColor,[e.AnalyticalTableHeaderFontFamily]:o.sapFontBoldFamily,[e.AnalyticalTableOuterBorderBlock]:"none",[e.AnalyticalTableOuterBorderInline]:"none",[e.AnalyticalTableOuterCellBorder]:"1px solid transparent",[e.ObjectPageSectionBorderTop]:"none",[e.ObjectPageSectionTitleFontFamily]:o.sapFontBoldFamily,[e.ObjectPageSectionTitleHeight]:"2.75rem",[e.ObjectPageSectionTitleLineHeight]:"4rem",[e.ObjectPageSubSectionBackgroundColor]:o.sapGroup_ContentBackground,[e.ObjectPageSubSectionBorderRadius]:o.sapElement_BorderCornerRadius,[e.ObjectPageSubSectionPaddingBlockStart]:"0.5rem",[e.SplitterContentBorderColor]:o.sapGroup_ContentBorderColor,[e.ToolbarFocusOutline]:"none",[e.ToolbarFocusShadow]:`inset 0 0 0 0.125rem ${o.sapContent_FocusColor}`},U={[e.ActionSheetHeaderBoxShadow]:o.sapContent_HeaderShadow,[e.ActionSheetMobileHeaderBackground]:o.sapPageHeader_Background,[e.ActionSheetMobileHeaderBorderRadius]:o.sapPopover_BorderCornerRadius,[e.ActionSheetMobileHeaderBoxShadow]:o.sapContent_Shadow2,[e.ActionSheetMobileHeaderTextColor]:o.sapPageHeader_TextColor,[e.AnalyticalTableHeaderFontFamily]:o.sapFontBoldFamily,[e.AnalyticalTableOuterBorderBlock]:"none",[e.AnalyticalTableOuterBorderInline]:"none",[e.AnalyticalTableOuterCellBorder]:"1px solid transparent",[e.ObjectPageSectionTitleFontFamily]:o.sapFontBoldFamily,[e.ObjectPageSectionTitleLineHeight]:"4rem",[e.ObjectPageSectionTitleHeight]:"2.75rem",[e.ObjectPageSectionBorderTop]:"none",[e.ObjectPageSubSectionBackgroundColor]:o.sapGroup_ContentBackground,[e.ObjectPageSubSectionBorderRadius]:o.sapElement_BorderCornerRadius,[e.ObjectPageSubSectionPaddingBlockStart]:"0.5rem",[e.SplitterContentBorderColor]:o.sapGroup_ContentBorderColor,[e.ToolbarFocusOutline]:"none",[e.ToolbarFocusShadow]:`inset 0 0 0 0.125rem ${o.sapContent_FocusColor}`},q={[e.ObjectPageSectionTitleFontFamily]:o.sapFontBoldFamily,[e.ObjectPageSectionTitleTextDecoration]:`underline ${o.sapList_SelectionBorderColor}`,[e.ObjectPageSectionBorderTop]:"none",[e.ObjectPageSubSectionBackgroundColor]:o.sapGroup_ContentBackground,[e.ObjectPageSubSectionBorderRadius]:o.sapElement_BorderCornerRadius,[e.ActionSheetHeaderBoxShadow]:o.sapContent_HeaderShadow,[e.ActionSheetMobileHeaderBackground]:o.sapPageHeader_Background,[e.ActionSheetMobileHeaderBorderRadius]:o.sapPopover_BorderCornerRadius,[e.ActionSheetMobileHeaderBoxShadow]:o.sapContent_Shadow2,[e.ActionSheetMobileHeaderTextColor]:o.sapPageHeader_TextColor,[e.SplitterContentBorderColor]:o.sapGroup_ContentBorderColor,[e.SplitterBarBorderStyle]:`solid ${o.sapGroup_ContentBorderColor} 0.0625rem`,[e.SplitterBarOutline]:`0.15rem dotted ${o.sapGroup_ContentBorderColor}`,[e.SplitterBarBorderFocus]:`solid ${o.sapGroup_ContentBorderColor} 0.0625rem`,[e.SplitterBarBorderFix]:"none",[e.AnalyticalTableHeaderFontFamily]:o.sapFontBoldFamily,[e.AnalyticalTableHeaderActiveTextColor]:o.sapContent_ContrastTextColor,[e.AnalyticalTableHeaderBorderWidth]:"0.188rem",[e.AnalyticalTableOuterBorderInline]:"none",[e.AnalyticalTableOuterCellBorder]:"1px solid transparent"},J={[e.ObjectPageSectionTitleFontFamily]:o.sapFontBoldFamily,[e.ObjectPageSectionTitleTextDecoration]:`underline ${o.sapList_SelectionBorderColor}`,[e.ObjectPageSectionBorderTop]:"none",[e.ObjectPageSubSectionBackgroundColor]:o.sapGroup_ContentBackground,[e.ObjectPageSubSectionBorderRadius]:o.sapElement_BorderCornerRadius,[e.ActionSheetHeaderBoxShadow]:o.sapContent_HeaderShadow,[e.ActionSheetMobileHeaderBackground]:o.sapPageHeader_Background,[e.ActionSheetMobileHeaderBorderRadius]:o.sapPopover_BorderCornerRadius,[e.ActionSheetMobileHeaderBoxShadow]:o.sapContent_Shadow2,[e.ActionSheetMobileHeaderTextColor]:o.sapPageHeader_TextColor,[e.SplitterContentBorderColor]:o.sapGroup_ContentBorderColor,[e.SplitterBarBorderStyle]:`solid ${o.sapGroup_ContentBorderColor} 0.0625rem`,[e.SplitterBarOutline]:`0.15rem dotted ${o.sapGroup_ContentBorderColor}`,[e.SplitterBarBorderFocus]:`solid ${o.sapGroup_ContentBorderColor} 0.0625rem`,[e.SplitterBarBorderFix]:"none",[e.AnalyticalTableHeaderFontFamily]:o.sapFontBoldFamily,[e.AnalyticalTableHeaderActiveTextColor]:o.sapContent_ContrastTextColor,[e.AnalyticalTableHeaderBorderWidth]:"0.188rem",[e.AnalyticalTableOuterBorderInline]:"none",[e.AnalyticalTableOuterCellBorder]:"1px solid transparent"},K={"@global":{[`.${m.inheritingSapScrollBar} *:not([data-native-scrollbar])`]:{"&::-webkit-scrollbar":{backgroundColor:o.sapScrollBar_TrackColor,borderInlineStart:p.ScrollbarBorder,"&:horizontal":{height:o.sapScrollBar_Dimension},"&:vertical":{width:o.sapScrollBar_Dimension}},"&::-webkit-scrollbar-thumb":{backgroundColor:o.sapScrollBar_FaceColor,borderRadius:p.ScrollbarBorderRadius,"&:hover":{backgroundColor:o.sapScrollBar_Hover_FaceColor},"&:horizontal":{height:o.sapScrollBar_Dimension},"&:vertical":{width:o.sapScrollBar_Dimension}},"&::-webkit-scrollbar-corner":{backgroundColor:o.sapScrollBar_TrackColor}},[`.${m.sapScrollBar}:not([data-native-scrollbar])`]:{"&::-webkit-scrollbar":{backgroundColor:o.sapScrollBar_TrackColor,borderInlineStart:p.ScrollbarBorder,"&:horizontal":{height:o.sapScrollBar_Dimension},"&:vertical":{width:o.sapScrollBar_Dimension}},"&::-webkit-scrollbar-thumb":{backgroundColor:o.sapScrollBar_FaceColor,borderRadius:p.ScrollbarBorderRadius,"&:hover":{backgroundColor:o.sapScrollBar_Hover_FaceColor},"&:horizontal":{height:o.sapScrollBar_Dimension},"&:vertical":{width:o.sapScrollBar_Dimension}},"&::-webkit-scrollbar-corner":{backgroundColor:o.sapScrollBar_TrackColor}},":root":{extend:[v,G]},"[data-ui5-compact-size], .ui5-content-density-compact, .sapUiSizeCompact":{extend:f},'[data-sap-theme="sap_belize"]':z,'[data-sap-theme="sap_belize_hcb"]':I,'[data-sap-theme="sap_belize_hcw"]':E,'[data-sap-theme="sap_fiori_3"]':L,'[data-sap-theme="sap_fiori_3_dark"]':D,'[data-sap-theme="sap_fiori_3_hcb"]':N,'[data-sap-theme="sap_fiori_3_hcw"]':W,'[data-sap-theme="sap_horizon"]':V,'[data-sap-theme="sap_horizon_dark"]':U,'[data-sap-theme="sap_horizon_hcb"]':q,'[data-sap-theme="sap_horizon_hcw"]':J}},Q=P(K,{name:"ThemeProvider"}),C=r=>{const{children:a,withoutModalsProvider:l}=r;return Q(),j(()=>{document.documentElement.setAttribute("data-sap-theme",T());const i=d=>{document.documentElement.setAttribute("data-sap-theme",d)};return y(i),()=>{F(i)}},[]),c.jsx(H,{theme:o,children:c.jsx(B,{children:l?a:c.jsx(S,{children:a})})})};C.displayName="ThemeProvider";try{C.displayName="ThemeProvider",C.__docgenInfo={description:"In order to use `@ui5/webcomponents-react` you have to wrap your application's root component into the ThemeProvider.\n\n__Note:__ Per default, the `ThemeProvider` adds another provider for the [Modals](https://sap.github.io/ui5-webcomponents-react/?path=/docs/user-feedback-modals--docs) API.\nIf you don't use this, you can omit it by setting the prop `withoutModalsProvider` to `true`. (With v2.0, the `Modals` provider will be offered separately to reduce overhead)",displayName:"ThemeProvider",props:{withoutModalsProvider:{defaultValue:null,description:"",name:"withoutModalsProvider",required:!1,type:{name:"boolean"}}}}}catch{}export{C as T};
