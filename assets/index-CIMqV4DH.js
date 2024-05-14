import{j as m}from"./ManagedStyles-0Bwp9t5R.js";import{b as U,c as Y,d as K}from"./Boot-BtdVcW0c.js";import{g as J,u as Q}from"./useStylesheet-DXQOMd9Q.js";import{T as X}from"./ThemingParameters-DOkJX3Ed.js";import{g as Z,r as u,a as w}from"./index-BP8_t0zE.js";import{b as ee,a as re,d as te}from"./i18nBundle-Dx46P1iz.js";import{g as oe}from"./I18nContext-RJHUyvz-.js";import{r as ae}from"./index-BxmsGmlx.js";import{g as ie}from"./ModalsContext-LNbsEfoS.js";import{u as ne}from"./useIsomorphicLayoutEffect-CnI1knHw.js";import{u as ce}from"./useIsomorphicId-D4u2wl0X.js";var D={exports:{}},o={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=typeof Symbol=="function"&&Symbol.for,M=l?Symbol.for("react.element"):60103,I=l?Symbol.for("react.portal"):60106,C=l?Symbol.for("react.fragment"):60107,f=l?Symbol.for("react.strict_mode"):60108,T=l?Symbol.for("react.profiler"):60114,P=l?Symbol.for("react.provider"):60109,H=l?Symbol.for("react.context"):60110,R=l?Symbol.for("react.async_mode"):60111,F=l?Symbol.for("react.concurrent_mode"):60111,x=l?Symbol.for("react.forward_ref"):60112,A=l?Symbol.for("react.suspense"):60113,le=l?Symbol.for("react.suspense_list"):60120,O=l?Symbol.for("react.memo"):60115,j=l?Symbol.for("react.lazy"):60116,se=l?Symbol.for("react.block"):60121,de=l?Symbol.for("react.fundamental"):60117,_e=l?Symbol.for("react.responder"):60118,ue=l?Symbol.for("react.scope"):60119;function d(e){if(typeof e=="object"&&e!==null){var r=e.$$typeof;switch(r){case M:switch(e=e.type,e){case R:case F:case C:case T:case f:case A:return e;default:switch(e=e&&e.$$typeof,e){case H:case x:case j:case O:case P:return e;default:return r}}case I:return r}}}function G(e){return d(e)===F}o.AsyncMode=R;o.ConcurrentMode=F;o.ContextConsumer=H;o.ContextProvider=P;o.Element=M;o.ForwardRef=x;o.Fragment=C;o.Lazy=j;o.Memo=O;o.Portal=I;o.Profiler=T;o.StrictMode=f;o.Suspense=A;o.isAsyncMode=function(e){return G(e)||d(e)===R};o.isConcurrentMode=G;o.isContextConsumer=function(e){return d(e)===H};o.isContextProvider=function(e){return d(e)===P};o.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===M};o.isForwardRef=function(e){return d(e)===x};o.isFragment=function(e){return d(e)===C};o.isLazy=function(e){return d(e)===j};o.isMemo=function(e){return d(e)===O};o.isPortal=function(e){return d(e)===I};o.isProfiler=function(e){return d(e)===T};o.isStrictMode=function(e){return d(e)===f};o.isSuspense=function(e){return d(e)===A};o.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===C||e===F||e===T||e===f||e===A||e===le||typeof e=="object"&&e!==null&&(e.$$typeof===j||e.$$typeof===O||e.$$typeof===P||e.$$typeof===H||e.$$typeof===x||e.$$typeof===de||e.$$typeof===_e||e.$$typeof===ue||e.$$typeof===se)};o.typeOf=d;D.exports=o;var pe=D.exports,k=pe,he={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},me={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},we={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},z={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},E={};E[k.ForwardRef]=we;E[k.Memo]=z;function N(e){return k.isMemo(e)?z:E[e.$$typeof]||he}var ve=Object.defineProperty,Se=Object.getOwnPropertyNames,$=Object.getOwnPropertySymbols,be=Object.getOwnPropertyDescriptor,Be=Object.getPrototypeOf,W=Object.prototype;function V(e,r,a){if(typeof r!="string"){if(W){var i=Be(r);i&&i!==W&&V(e,i,a)}var s=Se(r);$&&(s=s.concat($(r)));for(var t=N(e),n=N(r),_=0;_<s.length;++_){var c=s[_];if(!me[c]&&!(a&&a[c])&&!(n&&n[c])&&!(t&&t[c])){var h=be(r,c);try{ve(e,c,h)}catch{}}}}return e}var ge=V;const ye=Z(ge);var q={};Object.defineProperty(q,"__esModule",{value:!0});q.default=Ce;function Ce(e){return e.displayName||e.name||(typeof e=="string"&&e.length>0?e:"Unknown")}function g(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function y(){return y=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},y.apply(this,arguments)}function fe(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r}function p(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Te(e){var r=function(a){fe(i,a);function i(){for(var t,n=arguments.length,_=new Array(n),c=0;c<n;c++)_[c]=arguments[c];return t=a.call.apply(a,[this].concat(_))||this,g(p(p(t)),"cachedTheme",void 0),g(p(p(t)),"lastOuterTheme",void 0),g(p(p(t)),"lastTheme",void 0),g(p(p(t)),"renderProvider",function(h){var B=t.props.children;return w.createElement(e.Provider,{value:t.getTheme(h)},B)}),t}var s=i.prototype;return s.getTheme=function(n){if(this.props.theme!==this.lastTheme||n!==this.lastOuterTheme||!this.cachedTheme)if(this.lastOuterTheme=n,this.lastTheme=this.props.theme,typeof this.lastTheme=="function"){var _=this.props.theme;this.cachedTheme=_(n)}else{var c=this.props.theme;this.cachedTheme=n?y({},n,c):c}return this.cachedTheme},s.render=function(){var n=this.props.children;return n?w.createElement(e.Consumer,null,this.renderProvider):null},i}(w.Component);return r}function Pe(e){return function(a){var i=w.forwardRef(function(s,t){return w.createElement(e.Consumer,null,function(n){return w.createElement(a,y({theme:n,ref:t},s))})});return ye(i,a),i}}function He(e){var r=function(){var i=w.useContext(e);return i};return r}function Fe(e){return{context:e,withTheme:Pe(e),useTheme:He(e),ThemeProvider:Te(e)}}var xe=u.createContext(),Ae=Fe(xe),Oe=Ae.ThemeProvider;const je=(e,r)=>({...e,...r.payload});function S({children:e}){const[r,a]=u.useReducer(je,{}),i=u.useRef({}),s=u.useRef(!1),t=u.useCallback(()=>Promise.all(Object.keys(i.current).map(c=>ee(c))).then(c=>{const h=c.reduce((B,L)=>({...B,[L.packageName]:L}),{});s.current&&a({payload:h})}),[]),n=u.useCallback((c,h)=>{i.current[c]=h,t()},[]);u.useEffect(()=>(s.current=!0,re(t),()=>{s.current=!1,te(t)}),[]);const _=oe();return m.jsx(_.Provider,{value:{i18nBundles:r,setI18nBundle:n},children:e})}try{S.displayName="I18nProvider",S.__docgenInfo={description:"",displayName:"I18nProvider",props:{}}}catch{}try{S.displayName="I18nProvider",S.__docgenInfo={description:"",displayName:"I18nProvider",props:{}}}catch{}const Me=(e,r)=>{switch(r.type){case"set":return[...e,r.payload];case"reset":return e.filter(a=>a.id!==r.payload.id);default:return e}};function b({children:e}){const[r,a]=u.useReducer(Me,[]);globalThis["@ui5/webcomponents-react"]??(globalThis["@ui5/webcomponents-react"]={}),globalThis["@ui5/webcomponents-react"].setModal=a;const i=ie(),s=u.useMemo(()=>({setModal:globalThis["@ui5/webcomponents-react"].setModal}),[]);return m.jsxs(i.Provider,{value:s,children:[r.map(t=>{if(t!=null&&t.Component)return ae.createPortal(u.createElement(t.Component,{...t.props,ref:t.ref,key:t.id,"data-id":t.id}),t.container??document.body)}),e]})}try{b.displayName="ModalsProvider",b.__docgenInfo={description:"",displayName:"ModalsProvider",props:{}}}catch{}try{b.displayName="ModalsProvider",b.__docgenInfo={description:"",displayName:"ModalsProvider",props:{}}}catch{}const Ie={packageName:"@ui5/webcomponents-react",fileName:"ThemeProvider.css",content:":root{--_ui5wcr-AnalyticalTableExpandButtonHeight:2.25rem;--_ui5wcr-AnalyticalTableExpandIconHeight:1rem;--_ui5wcr-AnalyticalTableExpandIndicatorWidth:1.875rem;--_ui5wcr-AnalyticalTableHeaderRowHeight:44px;--_ui5wcr-AnalyticalTableRowHeight:44px;--_ui5wcr-AnalyticalTableSelectionColumnWidth:44px;--_ui5wcr-AnalyticalTableTreePaddingLevel1:1rem;--_ui5wcr-AnalyticalTableTreePaddingLevel2:1.5rem;--_ui5wcr-AnalyticalTableTreePaddingLevel3:2rem;--_ui5wcr-BarHeight:2.75rem;--_ui5wcr-ButtonTopBottomPadding:0.25rem 0;--_ui5wcr-CheckBoxWidthHeight:2.75rem;--_ui5wcr-DialogHeaderHeight:2.75rem;--_ui5wcr-DialogSubHeaderHeight:3rem;--_ui5wcr-ElementHeight:var(--sapElement_Height);--_ui5wcr-FormGroupTitleHeight:2.75rem;--_ui5wcr-MessageItemTitleFontSize:var(--sapFontHeader5Size);--_ui5wcr-MessageViewListItemHeightByLine:3.325rem;--_ui5wcr-MessageViewListItemHeightSingle:2.75rem;--_ui5wcr-SplitterSize:1rem;--_ui5wcr-ToolbarHeight:2.75rem;--_ui5wcr-ToolbarPopoverContentPadding:0.25rem 0.5rem;--_ui5wcr-ToolbarSeparatorHeight:2rem}.sapUiSizeCompact,.ui5-content-density-compact,[data-ui5-compact-size]{--_ui5wcr-AnalyticalTableExpandButtonHeight:1.5rem;--_ui5wcr-AnalyticalTableExpandIconHeight:0.75rem;--_ui5wcr-AnalyticalTableExpandIndicatorWidth:1.625rem;--_ui5wcr-AnalyticalTableHeaderRowHeight:32px;--_ui5wcr-AnalyticalTableRowHeight:32px;--_ui5wcr-AnalyticalTableSelectionColumnWidth:32px;--_ui5wcr-AnalyticalTableTreePaddingLevel1:1.5rem;--_ui5wcr-AnalyticalTableTreePaddingLevel2:2.25rem;--_ui5wcr-AnalyticalTableTreePaddingLevel3:2.75rem;--_ui5wcr-BarHeight:2.5rem;--_ui5wcr-ButtonTopBottomPadding:0.1875rem 0;--_ui5wcr-CheckBoxWidthHeight:2rem;--_ui5wcr-DialogHeaderHeight:2.5rem;--_ui5wcr-DialogSubHeaderHeight:2.25rem;--_ui5wcr-ElementHeight:var(--sapElement_Compact_Height);--_ui5wcr-FormGroupTitleHeight:2rem;--_ui5wcr-MessageItemTitleFontSize:var(--sapFontHeader6Size);--_ui5wcr-MessageViewListItemHeightByLine:3.25rem;--_ui5wcr-MessageViewListItemHeightSingle:2rem;--_ui5wcr-ToolbarHeight:2rem;--_ui5wcr-ToolbarPopoverContentPadding:0.1875rem 0.375rem;--_ui5wcr-ToolbarSeparatorHeight:1.5rem}:root{--_ui5wcr_Scrollbar_Border:none;--_ui5wcr_Splitter_IconColor:var(--sapButton_Lite_TextColor);--_ui5wcr_Splitter_BarOutline:none;--_ui5wcr_Toolbar_FocusShadow:none;--_ui5wcr_Toolbar_FocusOutline:var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);--_ui5wcr_Scrollbar_BorderRadius:var(--sapElement_BorderCornerRadius);--_ui5wcr_Splitter_BarBorderFocus:var(--sapContent_FocusWidth) solid var(--sapContent_FocusColor);--_ui5wcr_Splitter_BarBorderStyle:none;--_ui5wcr_ActionSheet_HeaderBoxShadow:none;--_ui5wcr_ObjectPage_SectionBorderTop:0.0625rem solid var(--sapGroup_TitleBorderColor);--_ui5wcr_Splitter_ContentBorderColor:var(--sapHighlightColor);--_ui5wcr_ObjectPage_PaddingBlockStart:2rem;--_ui5wcr_ObjectPage_SectionTitleHeight:2.25rem;--_ui5wcr-AnalyticalTable-OuterCellBorder:1px solid var(--sapList_BorderColor);--_ui5wcr-AnalyticalTable-HeaderFontFamily:var(--sapFontFamily);--_ui5wcr-AnalyticalTable-OuterBorderBlock:1px solid var(--sapList_BorderColor);--_ui5wcr-AnalyticalTable-HeaderBorderWidth:0.0625rem;--_ui5wcr-AnalyticalTable-OuterBorderInline:1px solid var(--sapList_BorderColor);--_ui5wcr_ActionSheet_MobileHeaderBoxShadow:none;--_ui5wcr_ActionSheet_MobileHeaderTextColor:var(--sapContent_ContrastTextColor);--_ui5wcr_ObjectPage_SectionTitleFontFamily:var(--sapFontFamily);--_ui5wcr_ObjectPage_SectionTitleLineHeight:2.25rem;--_ui5wcr_ObjectPage_SubSectionBorderRadius:0;--_ui5wcr_Splitter_BarBorderHighContrastFix:var(--sapContent_FocusWidth) solid var(--sapContent_FocusColor);--_ui5wcr_ActionSheet_MobileHeaderBackground:#0000;--_ui5wcr_ActionSheet_MobileHeaderBorderRadius:0;--_ui5wcr_ObjectPage_SubSectionBackgroundColor:#0000;--_ui5wcr-AnalyticalTable-HeaderActiveTextColor:var(--sapList_HeaderTextColor);--_ui5wcr_ObjectPage_SectionTitleTextDecoration:none;--_ui5wcr_Form_HeaderBorderWidth:var(--sapList_BorderWidth)}[data-sap-theme=sap_belize]{--_ui5wcr_ActionSheet_BoxShadow:var(--sapContent_HeaderShadow);--_ui5wcr_Scrollbar_BorderRadius:0;--_ui5wcr_Splitter_BarBorderFocus:.0625rem dotted var(--sapContent_FocusColor);--_ui5wcr_ActionSheet_TopBorderRadius:var(--sapElement_BorderCornerRadius);--_ui5wcr_Splitter_BarBorderHighContrastFix:.0625rem dotted var(--sapContent_FocusColor)}[data-sap-theme=sap_belize_hcb]{--_ui5wcr_Scrollbar_Border:0.0625rem solid #999;--_ui5wcr_ActionSheet_BoxShadow:var(--sapContent_HeaderShadow);--_ui5wcr_Scrollbar_BorderRadius:0;--_ui5wcr_ActionSheet_TopBorderRadius:var(--sapElement_BorderCornerRadius)}[data-sap-theme=sap_belize_hcw]{--_ui5wcr_Scrollbar_Border:0.0625rem solid #585858;--_ui5wcr_ActionSheet_BoxShadow:var(--sapContent_HeaderShadow);--_ui5wcr_Scrollbar_BorderRadius:0;--_ui5wcr_ActionSheet_TopBorderRadius:var(--sapElement_BorderCornerRadius)}[data-sap-theme=sap_fiori_3]{--_ui5wcr_ActionSheet_BoxShadow:var(--sapContent_HeaderShadow);--_ui5wcr_Splitter_BarBorderFocus:.0625rem dotted var(--sapContent_FocusColor);--_ui5wcr_ActionSheet_TopBorderRadius:var(--sapElement_BorderCornerRadius);--_ui5wcr_Splitter_BarBorderHighContrastFix:.0625rem dotted var(--sapContent_FocusColor)}[data-sap-theme=sap_fiori_3_dark]{--_ui5wcr_ActionSheet_BoxShadow:var(--sapContent_HeaderShadow);--_ui5wcr_Splitter_BarBorderFocus:.0625rem dotted var(--sapContent_FocusColor);--_ui5wcr_ActionSheet_TopBorderRadius:var(--sapElement_BorderCornerRadius);--_ui5wcr_Splitter_BarBorderHighContrastFix:.0625rem dotted var(--sapContent_FocusColor)}[data-sap-theme=sap_fiori_3_hcb]{--_ui5wcr_Splitter_BarOutline:0.15rem dotted var(--sapGroup_ContentBorderColor);--_ui5wcr_ActionSheet_BoxShadow:var(--sapContent_HeaderShadow);--_ui5wcr_Splitter_BarBorderFocus:solid var(--sapGroup_ContentBorderColor) 0.0625rem;--_ui5wcr_Splitter_BarBorderStyle:solid var(--sapGroup_ContentBorderColor) 0.0625rem;--_ui5wcr_ActionSheet_TopBorderRadius:var(--sapElement_BorderCornerRadius);--_ui5wcr_Splitter_ContentBorderColor:var(--sapGroup_ContentBorderColor);--_ui5wcr_Splitter_BarBorderHighContrastFix:none;--_ui5wcr_Form_HeaderBorderWidth:calc(var(--sapList_BorderWidth)*3)}[data-sap-theme=sap_fiori_3_hcw]{--_ui5wcr_Splitter_BarOutline:0.15rem dotted var(--sapGroup_ContentBorderColor);--_ui5wcr_ActionSheet_BoxShadow:var(--sapContent_HeaderShadow);--_ui5wcr_Splitter_BarBorderFocus:solid var(--sapGroup_ContentBorderColor) 0.0625rem;--_ui5wcr_Splitter_BarBorderStyle:solid var(--sapGroup_ContentBorderColor) 0.0625rem;--_ui5wcr_ActionSheet_TopBorderRadius:var(--sapElement_BorderCornerRadius);--_ui5wcr_Splitter_ContentBorderColor:var(--sapGroup_ContentBorderColor);--_ui5wcr_Splitter_BarBorderHighContrastFix:none;--_ui5wcr_Form_HeaderBorderWidth:calc(var(--sapList_BorderWidth)*3)}[data-sap-theme=sap_horizon]{--_ui5wcr_Toolbar_FocusShadow:inset 0 0 0 0.125rem var(--sapContent_FocusColor);--_ui5wcr_Toolbar_FocusOutline:none;--_ui5wcr_ActionSheet_HeaderBoxShadow:var(--sapContent_HeaderShadow);--_ui5wcr_ObjectPage_SectionBorderTop:none;--_ui5wcr_Splitter_ContentBorderColor:var(--sapGroup_ContentBorderColor);--_ui5wcr_ObjectPage_PaddingBlockStart:0.5rem;--_ui5wcr_ObjectPage_SectionTitleHeight:2.75rem;--_ui5wcr-AnalyticalTable-OuterCellBorder:1px solid #0000;--_ui5wcr-AnalyticalTable-HeaderFontFamily:var(--sapFontBoldFamily);--_ui5wcr-AnalyticalTable-OuterBorderBlock:none;--_ui5wcr-AnalyticalTable-OuterBorderInline:none;--_ui5wcr_ActionSheet_MobileHeaderBoxShadow:var(--sapContent_Shadow2);--_ui5wcr_ActionSheet_MobileHeaderTextColor:var(--sapPageHeader_TextColor);--_ui5wcr_ObjectPage_SectionTitleFontFamily:var(--sapFontBoldFamily);--_ui5wcr_ObjectPage_SectionTitleLineHeight:4rem;--_ui5wcr_ObjectPage_SubSectionBorderRadius:var(--sapElement_BorderCornerRadius);--_ui5wcr_ActionSheet_MobileHeaderBackground:var(--sapPageHeader_Background);--_ui5wcr_ActionSheet_MobileHeaderBorderRadius:var(--sapPopover_BorderCornerRadius);--_ui5wcr_ObjectPage_SubSectionBackgroundColor:var(--sapGroup_ContentBackground)}[data-sap-theme=sap_horizon_dark]{--_ui5wcr_Toolbar_FocusShadow:inset 0 0 0 0.125rem var(--sapContent_FocusColor);--_ui5wcr_Toolbar_FocusOutline:none;--_ui5wcr_ActionSheet_HeaderBoxShadow:var(--sapContent_HeaderShadow);--_ui5wcr_ObjectPage_SectionBorderTop:none;--_ui5wcr_Splitter_ContentBorderColor:var(--sapGroup_ContentBorderColor);--_ui5wcr_ObjectPage_PaddingBlockStart:0.5rem;--_ui5wcr_ObjectPage_SectionTitleHeight:2.75rem;--_ui5wcr-AnalyticalTable-OuterCellBorder:1px solid #0000;--_ui5wcr-AnalyticalTable-HeaderFontFamily:var(--sapFontBoldFamily);--_ui5wcr-AnalyticalTable-OuterBorderBlock:none;--_ui5wcr-AnalyticalTable-OuterBorderInline:none;--_ui5wcr_ActionSheet_MobileHeaderBoxShadow:var(--sapContent_Shadow2);--_ui5wcr_ActionSheet_MobileHeaderTextColor:var(--sapPageHeader_TextColor);--_ui5wcr_ObjectPage_SectionTitleFontFamily:var(--sapFontBoldFamily);--_ui5wcr_ObjectPage_SectionTitleLineHeight:4rem;--_ui5wcr_ObjectPage_SubSectionBorderRadius:var(--sapElement_BorderCornerRadius);--_ui5wcr_ActionSheet_MobileHeaderBackground:var(--sapPageHeader_Background);--_ui5wcr_ActionSheet_MobileHeaderBorderRadius:var(--sapPopover_BorderCornerRadius);--_ui5wcr_ObjectPage_SubSectionBackgroundColor:var(--sapGroup_ContentBackground)}[data-sap-theme=sap_horizon_hcb]{--_ui5wcr_Splitter_BarOutline:0.15rem dotted var(--sapGroup_ContentBorderColor);--_ui5wcr_Splitter_BarBorderFocus:solid var(--sapGroup_ContentBorderColor) 0.0625rem;--_ui5wcr_Splitter_BarBorderStyle:solid var(--sapGroup_ContentBorderColor) 0.0625rem;--_ui5wcr_ActionSheet_HeaderBoxShadow:var(--sapContent_HeaderShadow);--_ui5wcr_ObjectPage_SectionBorderTop:none;--_ui5wcr_Splitter_ContentBorderColor:var(--sapGroup_ContentBorderColor);--_ui5wcr-AnalyticalTable-OuterCellBorder:1px solid #0000;--_ui5wcr-AnalyticalTable-HeaderFontFamily:var(--sapFontBoldFamily);--_ui5wcr-AnalyticalTable-HeaderBorderWidth:0.188rem;--_ui5wcr-AnalyticalTable-OuterBorderInline:none;--_ui5wcr_ActionSheet_MobileHeaderBoxShadow:var(--sapContent_Shadow2);--_ui5wcr_ActionSheet_MobileHeaderTextColor:var(--sapPageHeader_TextColor);--_ui5wcr_ObjectPage_SectionTitleFontFamily:var(--sapFontBoldFamily);--_ui5wcr_ObjectPage_SubSectionBorderRadius:var(--sapElement_BorderCornerRadius);--_ui5wcr_Splitter_BarBorderHighContrastFix:none;--_ui5wcr_ActionSheet_MobileHeaderBackground:var(--sapPageHeader_Background);--_ui5wcr_ActionSheet_MobileHeaderBorderRadius:var(--sapPopover_BorderCornerRadius);--_ui5wcr_ObjectPage_SubSectionBackgroundColor:var(--sapGroup_ContentBackground);--_ui5wcr-AnalyticalTable-HeaderActiveTextColor:var(--sapContent_ContrastTextColor);--_ui5wcr_ObjectPage_SectionTitleTextDecoration:underline var(--sapList_SelectionBorderColor);--_ui5wcr_Form_HeaderBorderWidth:calc(var(--sapList_BorderWidth)*3)}[data-sap-theme=sap_horizon_hcw]{--_ui5wcr_Splitter_BarOutline:0.15rem dotted var(--sapGroup_ContentBorderColor);--_ui5wcr_Splitter_BarBorderFocus:solid var(--sapGroup_ContentBorderColor) 0.0625rem;--_ui5wcr_Splitter_BarBorderStyle:solid var(--sapGroup_ContentBorderColor) 0.0625rem;--_ui5wcr_ActionSheet_HeaderBoxShadow:var(--sapContent_HeaderShadow);--_ui5wcr_ObjectPage_SectionBorderTop:none;--_ui5wcr_Splitter_ContentBorderColor:var(--sapGroup_ContentBorderColor);--_ui5wcr-AnalyticalTable-OuterCellBorder:1px solid #0000;--_ui5wcr-AnalyticalTable-HeaderFontFamily:var(--sapFontBoldFamily);--_ui5wcr-AnalyticalTable-HeaderBorderWidth:0.188rem;--_ui5wcr-AnalyticalTable-OuterBorderInline:none;--_ui5wcr_ActionSheet_MobileHeaderBoxShadow:var(--sapContent_Shadow2);--_ui5wcr_ActionSheet_MobileHeaderTextColor:var(--sapPageHeader_TextColor);--_ui5wcr_ObjectPage_SectionTitleFontFamily:var(--sapFontBoldFamily);--_ui5wcr_ObjectPage_SubSectionBorderRadius:var(--sapElement_BorderCornerRadius);--_ui5wcr_Splitter_BarBorderHighContrastFix:none;--_ui5wcr_ActionSheet_MobileHeaderBackground:var(--sapPageHeader_Background);--_ui5wcr_ActionSheet_MobileHeaderBorderRadius:var(--sapPopover_BorderCornerRadius);--_ui5wcr_ObjectPage_SubSectionBackgroundColor:var(--sapGroup_ContentBackground);--_ui5wcr-AnalyticalTable-HeaderActiveTextColor:var(--sapContent_ContrastTextColor);--_ui5wcr_ObjectPage_SectionTitleTextDecoration:underline var(--sapList_SelectionBorderColor);--_ui5wcr_Form_HeaderBorderWidth:calc(var(--sapList_BorderWidth)*3)}.inheritingSapScrollBar :not([data-native-scrollbar])::-webkit-scrollbar{background-color:var(--sapScrollBar_TrackColor);-webkit-border-start:var(--_ui5wcr_Scrollbar_Border)}.inheritingSapScrollBar :not([data-native-scrollbar])::-webkit-scrollbar-thumb{background-color:var(--sapScrollBar_FaceColor);border-radius:var(--_ui5wcr_Scrollbar_BorderRadius)}.inheritingSapScrollBar :not([data-native-scrollbar])::-webkit-scrollbar-thumb:hover{background-color:var(--sapScrollBar_Hover_FaceColor)}.inheritingSapScrollBar :not([data-native-scrollbar])::-webkit-scrollbar-thumb:horizontal{height:var(--sapScrollBar_Dimension)}.inheritingSapScrollBar :not([data-native-scrollbar])::-webkit-scrollbar-thumb:vertical{width:var(--sapScrollBar_Dimension)}.inheritingSapScrollBar :not([data-native-scrollbar])::-webkit-scrollbar-corner{background-color:var(--sapScrollBar_TrackColor)}.inheritingSapScrollBar :not([data-native-scrollbar])::-webkit-scrollbar:horizontal{height:var(--sapScrollBar_Dimension)}.inheritingSapScrollBar :not([data-native-scrollbar])::-webkit-scrollbar:vertical{width:var(--sapScrollBar_Dimension)}.sapScrollBar:not([data-native-scrollbar])::-webkit-scrollbar{background-color:var(--sapScrollBar_TrackColor);-webkit-border-start:var(--_ui5wcr_Scrollbar_Border)}.sapScrollBar:not([data-native-scrollbar])::-webkit-scrollbar-thumb{background-color:var(--sapScrollBar_FaceColor);border-radius:var(--_ui5wcr_Scrollbar_BorderRadius)}.sapScrollBar:not([data-native-scrollbar])::-webkit-scrollbar-corner{background-color:var(--sapScrollBar_TrackColor)}.sapScrollBar:not([data-native-scrollbar])::-webkit-scrollbar-thumb:hover{background-color:var(--sapScrollBar_Hover_FaceColor)}.sapScrollBar:not([data-native-scrollbar])::-webkit-scrollbar-thumb:horizontal{height:var(--sapScrollBar_Dimension)}.sapScrollBar:not([data-native-scrollbar])::-webkit-scrollbar-thumb:vertical{width:var(--sapScrollBar_Dimension)}.sapScrollBar:not([data-native-scrollbar])::-webkit-scrollbar:horizontal{height:var(--sapScrollBar_Dimension)}.sapScrollBar:not([data-native-scrollbar])::-webkit-scrollbar:vertical{width:var(--sapScrollBar_Dimension)}"};function Re(){const e=ce();return Q(Ie,`${v.displayName}-${e}`),null}const v=e=>{const{children:r,withoutModalsProvider:a,staticCssInjected:i}=e;ne(()=>{document.documentElement.setAttribute("data-sap-theme",U());const n=_=>{document.documentElement.setAttribute("data-sap-theme",_)};return Y(n),()=>{K(n)}},[]);const s=J(),t=u.useMemo(()=>({staticCssInjected:i??!1,componentsMap:new Map}),[i]);return m.jsxs(s.Provider,{value:t,children:[m.jsx(Re,{}),m.jsx(Oe,{theme:X,children:m.jsx(S,{children:a?r:m.jsx(b,{children:r})})})]})};v.displayName="ThemeProvider";try{v.displayName="ThemeProvider",v.__docgenInfo={description:"In order to use `@ui5/webcomponents-react` you have to wrap your application's root component into the ThemeProvider.\n\n__Note:__ Per default, the `ThemeProvider` adds another provider for the [Modals](https://sap.github.io/ui5-webcomponents-react/?path=/docs/user-feedback-modals--docs) API.\nIf you don't use this, you can omit it by setting the prop `withoutModalsProvider` to `true`. (With v2.0, the `Modals` provider will be offered separately to reduce overhead)\n\n__Note:__ Per default, the `ThemeProvider` injects the CSS for the components during runtime. If you have imported our static CSS bundle/s in your application, you can set the prop `staticCssInjected` to `true` to prevent this.",displayName:"ThemeProvider",props:{withoutModalsProvider:{defaultValue:null,description:"",name:"withoutModalsProvider",required:!1,type:{name:"boolean"}},staticCssInjected:{defaultValue:null,description:"You can set this flag to true in case you have imported our static CSS Bundle/s in your application.\nThis will prevent the ThemeProvider from injecting the CSS during runtime again.\n\n* __main:__ `import '@ui5/webcomponents-react/styles.css'`\n* __charts:__ `import '@ui5/webcomponents-react-charts/styles.css'`",name:"staticCssInjected",required:!1,type:{name:"boolean"}}}}}catch{}try{v.displayName="ThemeProvider",v.__docgenInfo={description:"In order to use `@ui5/webcomponents-react` you have to wrap your application's root component into the ThemeProvider.\n\n__Note:__ Per default, the `ThemeProvider` adds another provider for the [Modals](https://sap.github.io/ui5-webcomponents-react/?path=/docs/user-feedback-modals--docs) API.\nIf you don't use this, you can omit it by setting the prop `withoutModalsProvider` to `true`. (With v2.0, the `Modals` provider will be offered separately to reduce overhead)\n\n__Note:__ Per default, the `ThemeProvider` injects the CSS for the components during runtime. If you have imported our static CSS bundle/s in your application, you can set the prop `staticCssInjected` to `true` to prevent this.",displayName:"ThemeProvider",props:{withoutModalsProvider:{defaultValue:null,description:"",name:"withoutModalsProvider",required:!1,type:{name:"boolean"}},staticCssInjected:{defaultValue:null,description:"You can set this flag to true in case you have imported our static CSS Bundle/s in your application.\nThis will prevent the ThemeProvider from injecting the CSS during runtime again.\n\n* __main:__ `import '@ui5/webcomponents-react/styles.css'`\n* __charts:__ `import '@ui5/webcomponents-react-charts/styles.css'`",name:"staticCssInjected",required:!1,type:{name:"boolean"}}}}}catch{}export{v as T};
