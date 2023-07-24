import{b as k,x as W,y as O,Z as M,w as D,c as T,a as V,k as $}from"./utils-626dc1bf.js";import{g as v,a as G}from"./CustomElementsScopeUtils-137da8c8.js";import{j as X}from"./jsx-runtime-d079401a.js";import{u as q}from"./useIsomorphicLayoutEffect-c49de97d.js";import{r as d}from"./index-f1f2c4b1.js";function Y(e){const _=d.useRef(null);return[d.useCallback(r=>{e&&(typeof e=="function"&&e(r),{}.hasOwnProperty.call(e,"current")&&(e.current=r)),_.current=r},[e]),_]}const n_=e=>_=>{if(Object.prototype.hasOwnProperty.call(_,"metadata")||(_.metadata={}),typeof e=="string"){_.metadata.tag=e;return}const{tag:o,languageAware:r,themeAware:i,fastNavigation:s}=e;_.metadata.tag=o,r&&(_.metadata.languageAware=r),i&&(_.metadata.themeAware=i),s&&(_.metadata.fastNavigation=s),["render","renderer","template","staticAreaTemplate","styles","staticAreaStyles","dependencies"].forEach(u=>{const g=e[u==="render"?"renderer":u];g&&Object.defineProperty(_,u,{get:()=>g})})},a_=e=>(_,o)=>{const r=_.constructor;Object.prototype.hasOwnProperty.call(r,"metadata")||(r.metadata={});const i=r.metadata;i.properties||(i.properties={});const s=i.properties;s[o]||(s[o]=e||{type:String})};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},J=e=>(..._)=>({_$litDirective$:e,values:_});class K{constructor(_){}get _$AU(){return this._$AM._$AU}_$AT(_,o,r){this._$Ct=_,this._$AM=o,this._$Ci=r}_$AS(_,o){return this.update(_,o)}update(_,o){return this.render(...o)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const i_=e=>e??k;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class w extends K{constructor(_){if(super(_),this.it=k,_.type!==Z.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(_){if(_===k||_==null)return this._t=void 0,this.it=_;if(_===W)return _;if(typeof _!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(_===this.it)return this._t;this.it=_;const o=[_];return o.raw=o,this._t={_$litType$:this.constructor.resultType,strings:o,values:[]}}}w.directiveName="unsafeHTML",w.resultType=1;const d_=J(w),b=(e,..._)=>{const o=v("LitStatic");return(o?o.html:O)(e,..._)},s_=(e,..._)=>{const o=v("LitStatic");return(o?o.svg:D)(e,..._)},l_=(e,_,o,r,i)=>{const s=v("OpenUI5Enablement");s&&!r&&(e=s.wrapTemplateResultInBusyMarkup(b,i.host,e)),typeof o=="string"?e=b`<style>${o}</style>${e}`:Array.isArray(o)&&o.length&&(e=b`${o.map(u=>b`<link type="text/css" rel="stylesheet" href="${u}">`)}${e}`),M(e,_,i)},u_=(e,_,o)=>{const r=v("LitStatic");if(r)return r.unsafeStatic((_||[]).includes(e)?`${e}-${o}`:e)},c_={packageName:"@ui5/webcomponents-theming",fileName:"themes/sap_fiori_3/parameters-bundle.css",content:`/**
* Copyright (c) 2012-2020 SAP SE or an SAP affiliate company and Theming Base Content contributors. Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
*
* Theming Engine 1.23050.0-20230615114838+48b41017daabe3369028edc8539a00c12a880d68
* data:{"Path": "Base.baseLib.sap_fiori_3.css_variables", "PathPattern": "/%frameworkId%/%libId%/%themeId%/%fileId%.css", "Extends": ["sap_base_fiori","baseTheme"], "Tags": ["Fiori_3","LightColorScheme"], "FallbackThemeId": "sap_belize", "Engine": {"Name": "theming-engine", "Version": "1.23050.0-20230615114838+48b41017daabe3369028edc8539a00c12a880d68"}, "Version": { "Build": "11.5.0.20230619095805", "Source": "11.5.0"}}
*/

:root{--sapThemeMetaData-Base-baseLib:{"Path": "Base.baseLib.sap_fiori_3.css_variables", "PathPattern": "/%frameworkId%/%libId%/%themeId%/%fileId%.css", "Extends": ["sap_base_fiori","baseTheme"], "Tags": ["Fiori_3","LightColorScheme"], "FallbackThemeId": "sap_belize", "Engine": {"Name": "theming-engine", "Version": "1.23050.0-20230615114838+48b41017daabe3369028edc8539a00c12a880d68"}, "Version": { "Build": "11.5.0.20230619095805", "Source": "11.5.0"}};}

/**
* Base.baseLib.baseTheme.base (Version 11.5.0)
*/

/**
* Base.baseLib.baseTheme.css_variables (Version 11.5.0)
*/

:root {
  --sapBrandColor: #0a6ed1;
  --sapHighlightColor: #0854a0;
  --sapBaseColor: #fff;
  --sapShellColor: #354a5f;
  --sapBackgroundColor: #f7f7f7;
  --sapFontFamily: "72", "72full", Arial, Helvetica, sans-serif;
  --sapFontSize: .875rem;
  --sapTextColor: #32363a;
  --sapLinkColor: #0a6ed1;
  --sapCompanyLogo: none;
  --sapBackgroundImage: none;
  --sapBackgroundImageOpacity: 1.0;
  --sapBackgroundImageRepeat: false;
  --sapSelectedColor: #0854a0;
  --sapHoverColor: #ededed;
  --sapActiveColor: #0854a0;
  --sapHighlightTextColor: #fff;
  --sapTitleColor: #32363a;
  --sapNegativeColor: #bb0000;
  --sapCriticalColor: #df6e0c;
  --sapPositiveColor: #107e3e;
  --sapInformativeColor: #0a6ed1;
  --sapNeutralColor: #6a6d70;
  --sapNegativeElementColor: #bb0000;
  --sapCriticalElementColor: #df6e0c;
  --sapPositiveElementColor: #107e3e;
  --sapInformativeElementColor: #0a6ed1;
  --sapNeutralElementColor: #6a6d70;
  --sapNegativeTextColor: #bb0000;
  --sapCriticalTextColor: #b3590a;
  --sapPositiveTextColor: #107e3e;
  --sapInformativeTextColor: #0a6ed1;
  --sapNeutralTextColor: #6a6d70;
  --sapErrorColor: #bb0000;
  --sapWarningColor: #df6e0c;
  --sapSuccessColor: #107e3e;
  --sapInformationColor: #0a6ed1;
  --sapErrorBackground: #ffebeb;
  --sapWarningBackground: #fef7f1;
  --sapSuccessBackground: #f1fdf6;
  --sapInformationBackground: #f5faff;
  --sapNeutralBackground: #f4f4f4;
  --sapErrorBorderColor: #bb0000;
  --sapWarningBorderColor: #df6e0c;
  --sapSuccessBorderColor: #107e3e;
  --sapInformationBorderColor: #0a6ed1;
  --sapNeutralBorderColor: #6a6d70;
  --sapElement_LineHeight: 2.75rem;
  --sapElement_Height: 2.25rem;
  --sapElement_BorderWidth: .0625rem;
  --sapElement_BorderCornerRadius: .25rem;
  --sapElement_Compact_LineHeight: 2rem;
  --sapElement_Compact_Height: 1.625rem;
  --sapElement_Condensed_LineHeight: 1.5rem;
  --sapElement_Condensed_Height: 1.375rem;
  --sapContent_LineHeight: 1.4;
  --sapContent_IconHeight: 1rem;
  --sapContent_IconColor: #0854a0;
  --sapContent_ContrastIconColor: #fff;
  --sapContent_NonInteractiveIconColor: #6a6d70;
  --sapContent_MarkerIconColor: #286eb4;
  --sapContent_MarkerTextColor: #0e7581;
  --sapContent_MeasureIndicatorColor: #89919a;
  --sapContent_Selected_MeasureIndicatorColor: #89919a;
  --sapContent_Placeholderloading_Background: #ccc;
  --sapContent_Placeholderloading_Gradient: linear-gradient(to right, #ccc 0%, #ccc 20%, #999 50%, #ccc 80%, #ccc 100%);
  --sapContent_ImagePlaceholderBackground: #ccc;
  --sapContent_ImagePlaceholderForegroundColor: #fff;
  --sapContent_RatedColor: #d08014;
  --sapContent_UnratedColor: #89919a;
  --sapContent_BusyColor: #0854a0;
  --sapContent_FocusColor: #000;
  --sapContent_FocusStyle: dotted;
  --sapContent_FocusWidth: .0625rem;
  --sapContent_ContrastFocusColor: #fff;
  --sapContent_ShadowColor: #000;
  --sapContent_ContrastShadowColor: #fff;
  --sapContent_Shadow0: 0 0 0 0.0625rem rgba(0,0,0,0.1), 0 0.125rem 0.5rem 0 rgba(0,0,0,0.1);
  --sapContent_Shadow1: 0 0 0 0.0625rem rgba(0,0,0,0.42), 0 0.125rem 0.5rem 0 rgba(0,0,0,0.3);
  --sapContent_Shadow2: 0 0 0 0.0625rem rgba(0,0,0,0.42), 0 0.625rem 1.875rem 0 rgba(0,0,0,0.3);
  --sapContent_Shadow3: 0 0 0 0.0625rem rgba(0,0,0,0.42), 0 1.25rem 5rem 0 rgba(0,0,0,0.3);
  --sapContent_TextShadow: 0 0 0.125rem #fff;
  --sapContent_ContrastTextShadow: 0 0 0.0625rem rgba(0,0,0,0.7);
  --sapContent_HeaderShadow: 0 0.125rem 0.125rem 0 rgba(0,0,0,0.05), inset 0 -0.0625rem 0 0 #d9d9d9;
  --sapContent_Interaction_Shadow: none;
  --sapContent_Selected_Shadow: none;
  --sapContent_Negative_Shadow: none;
  --sapContent_Critical_Shadow: none;
  --sapContent_Positive_Shadow: none;
  --sapContent_Informative_Shadow: none;
  --sapContent_Neutral_Shadow: none;
  --sapContent_SearchHighlightColor: #d4f7db;
  --sapContent_HelpColor: #3f8600;
  --sapContent_LabelColor: #6a6d70;
  --sapContent_MonospaceFontFamily: "72Mono", "72Monofull", lucida console, monospace;
  --sapContent_MonospaceBoldFontFamily: "72Mono-Bold", "72Mono-Boldfull", lucida console, monospace;
  --sapContent_IconFontFamily: "SAP-icons";
  --sapContent_DisabledTextColor: rgba(50,54,58,0.6);
  --sapContent_DisabledOpacity: 0.4;
  --sapContent_ContrastTextThreshold: 0.65;
  --sapContent_ContrastTextColor: #fff;
  --sapContent_ForegroundColor: #efefef;
  --sapContent_ForegroundBorderColor: #89919a;
  --sapContent_ForegroundTextColor: #32363a;
  --sapContent_BadgeBackground: #d04343;
  --sapContent_BadgeTextColor: #fff;
  --sapContent_DragAndDropActiveColor: #0854a0;
  --sapContent_Selected_TextColor: #fff;
  --sapContent_Selected_Background: #0854a0;
  --sapContent_Selected_Hover_Background: #095caf;
  --sapContent_Selected_ForegroundColor: #0854a0;
  --sapContent_ForcedColorAdjust: none;
  --sapContent_Illustrative_Color1: #0a6ed1;
  --sapContent_Illustrative_Color2: #72b5f8;
  --sapContent_Illustrative_Color3: #ffba10;
  --sapContent_Illustrative_Color4: #4a5055;
  --sapContent_Illustrative_Color5: #9da4aa;
  --sapContent_Illustrative_Color6: #c6cace;
  --sapContent_Illustrative_Color7: #e7e9ea;
  --sapContent_Illustrative_Color8: #fff;
  --sapContent_Illustrative_Color9: #64edd2;
  --sapContent_Illustrative_Color10: #e7e9ea;
  --sapContent_Illustrative_Color11: #f31ded;
  --sapContent_Illustrative_Color12: #5dc122;
  --sapContent_Illustrative_Color13: #4ba1f6;
  --sapContent_Illustrative_Color14: #298ff4;
  --sapContent_Illustrative_Color15: #e6a400;
  --sapContent_Illustrative_Color16: #085aaa;
  --sapContent_Illustrative_Color17: #00a5a8;
  --sapContent_Illustrative_Color18: #d9ddde;
  --sapContent_Illustrative_Color19: #ccd0d2;
  --sapContent_Illustrative_Color20: #bec4c6;
  --sapFontLightFamily: "72-Light", "72-Lightfull", "72", "72full", Arial, Helvetica, sans-serif;
  --sapFontBoldFamily: "72-Bold", "72-Boldfull", "72", "72full", Arial, Helvetica, sans-serif;
  --sapFontSemiboldFamily: "72-Semibold", "72-Semiboldfull", "72", "72full", Arial, Helvetica, sans-serif;
  --sapFontSemiboldDuplexFamily: "72-SemiboldDuplex", "72-SemiboldDuplexfull", "72", "72full", Arial, Helvetica, sans-serif;
  --sapFontBlackFamily: "72Black", "72Blackfull","72", "72full", Arial, Helvetica, sans-serif;
  --sapFontHeaderFamily: "72", "72full", Arial, Helvetica, sans-serif;
  --sapFontSmallSize: .75rem;
  --sapFontLargeSize: 1rem;
  --sapFontHeader1Size: 2.25rem;
  --sapFontHeader2Size: 1.5rem;
  --sapFontHeader3Size: 1.25rem;
  --sapFontHeader4Size: 1.125rem;
  --sapFontHeader5Size: 1rem;
  --sapFontHeader6Size: .875rem;
  --sapLink_TextDecoration: none;
  --sapLink_Hover_Color: #0854a0;
  --sapLink_Hover_TextDecoration: underline;
  --sapLink_Active_Color: #0a6ed1;
  --sapLink_Active_TextDecoration: underline;
  --sapLink_Visited_Color: #0a6ed1;
  --sapLink_InvertedColor: #d3e8fd;
  --sapLink_SubtleColor: #074888;
  --sapShell_Background: #edeff0;
  --sapShell_BackgroundImage: linear-gradient(to bottom, #dfe3e4, #f3f4f5);
  --sapShell_BackgroundImageOpacity: 1.0;
  --sapShell_BackgroundImageRepeat: false;
  --sapShell_BorderColor: #354a5f;
  --sapShell_TextColor: #fff;
  --sapShell_InteractiveBackground: #354a5f;
  --sapShell_InteractiveTextColor: #d1e8ff;
  --sapShell_InteractiveBorderColor: #7996b4;
  --sapShell_GroupTitleTextColor: #32363a;
  --sapShell_GroupTitleTextShadow: 0 0 0.125rem #fff;
  --sapShell_Hover_Background: #283848;
  --sapShell_Active_Background: #23303e;
  --sapShell_Active_TextColor: #fff;
  --sapShell_Selected_Background: #23303e;
  --sapShell_Selected_TextColor: #fff;
  --sapShell_Selected_Hover_Background: #23303e;
  --sapShell_Favicon: none;
  --sapShell_Navigation_Background: #354a5f;
  --sapShell_Navigation_Hover_Background: #283848;
  --sapShell_Navigation_SelectedColor: #d1e8ff;
  --sapShell_Navigation_Selected_TextColor: #d1e8ff;
  --sapShell_Navigation_TextColor: #fff;
  --sapShell_Navigation_Active_TextColor: #fff;
  --sapShell_Navigation_Active_Background: #23303e;
  --sapShell_Shadow: 0 0.125rem 0.125rem 0 rgba(0,0,0,0.08), inset 0 -0.0625rem 0 0 rgba(0,0,0,0.18);
  --sapShell_NegativeColor: #f88;
  --sapShell_CriticalColor: #f8b67d;
  --sapShell_PositiveColor: #abe2c2;
  --sapShell_InformativeColor: #b1d6fb;
  --sapShell_NeutralColor: #d4d6d7;
  --sapShell_Category_1_Background: #286eb4;
  --sapShell_Category_1_BorderColor: #286eb4;
  --sapShell_Category_1_TextColor: #fff;
  --sapShell_Category_1_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_2_Background: #db1f77;
  --sapShell_Category_2_BorderColor: #db1f77;
  --sapShell_Category_2_TextColor: #fff;
  --sapShell_Category_2_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_3_Background: #d58215;
  --sapShell_Category_3_BorderColor: #d58215;
  --sapShell_Category_3_TextColor: #fff;
  --sapShell_Category_3_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_4_Background: #892971;
  --sapShell_Category_4_BorderColor: #892971;
  --sapShell_Category_4_TextColor: #fff;
  --sapShell_Category_4_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_5_Background: #bb2f2f;
  --sapShell_Category_5_BorderColor: #bb2f2f;
  --sapShell_Category_5_TextColor: #fff;
  --sapShell_Category_5_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_6_Background: #1193a2;
  --sapShell_Category_6_BorderColor: #1193a2;
  --sapShell_Category_6_TextColor: #fff;
  --sapShell_Category_6_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_7_Background: #cf5db3;
  --sapShell_Category_7_BorderColor: #cf5db3;
  --sapShell_Category_7_TextColor: #fff;
  --sapShell_Category_7_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_8_Background: #8b9668;
  --sapShell_Category_8_BorderColor: #8b9668;
  --sapShell_Category_8_TextColor: #fff;
  --sapShell_Category_8_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_9_Background: #597da1;
  --sapShell_Category_9_BorderColor: #597da1;
  --sapShell_Category_9_TextColor: #fff;
  --sapShell_Category_9_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_10_Background: #647987;
  --sapShell_Category_10_BorderColor: #647987;
  --sapShell_Category_10_TextColor: #fff;
  --sapShell_Category_10_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_11_Background: #dc5b5b;
  --sapShell_Category_11_BorderColor: #dc5b5b;
  --sapShell_Category_11_TextColor: #fff;
  --sapShell_Category_11_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_12_Background: #5154bd;
  --sapShell_Category_12_BorderColor: #5154bd;
  --sapShell_Category_12_TextColor: #fff;
  --sapShell_Category_12_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_13_Background: #bc1b66;
  --sapShell_Category_13_BorderColor: #bc1b66;
  --sapShell_Category_13_TextColor: #fff;
  --sapShell_Category_13_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_14_Background: #49797e;
  --sapShell_Category_14_BorderColor: #49797e;
  --sapShell_Category_14_TextColor: #fff;
  --sapShell_Category_14_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_15_Background: #476380;
  --sapShell_Category_15_BorderColor: #476380;
  --sapShell_Category_15_TextColor: #fff;
  --sapShell_Category_15_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapShell_Category_16_Background: #687a33;
  --sapShell_Category_16_BorderColor: #687a33;
  --sapShell_Category_16_TextColor: #fff;
  --sapShell_Category_16_TextShadow: 0 0 .0625rem rgba(0,0,0,0.7);
  --sapAvatar_1_Background: #d08014;
  --sapAvatar_1_BorderColor: #d08014;
  --sapAvatar_1_TextColor: #fff;
  --sapAvatar_2_Background: #d04343;
  --sapAvatar_2_BorderColor: #d04343;
  --sapAvatar_2_TextColor: #fff;
  --sapAvatar_3_Background: #db1f77;
  --sapAvatar_3_BorderColor: #db1f77;
  --sapAvatar_3_TextColor: #fff;
  --sapAvatar_4_Background: #c0399f;
  --sapAvatar_4_BorderColor: #c0399f;
  --sapAvatar_4_TextColor: #fff;
  --sapAvatar_5_Background: #6367de;
  --sapAvatar_5_BorderColor: #6367de;
  --sapAvatar_5_TextColor: #fff;
  --sapAvatar_6_Background: #286eb4;
  --sapAvatar_6_BorderColor: #286eb4;
  --sapAvatar_6_TextColor: #fff;
  --sapAvatar_7_Background: #0f828f;
  --sapAvatar_7_BorderColor: #0f828f;
  --sapAvatar_7_TextColor: #fff;
  --sapAvatar_8_Background: #7ca10c;
  --sapAvatar_8_BorderColor: #7ca10c;
  --sapAvatar_8_TextColor: #fff;
  --sapAvatar_9_Background: #925ace;
  --sapAvatar_9_BorderColor: #925ace;
  --sapAvatar_9_TextColor: #fff;
  --sapAvatar_10_Background: #647987;
  --sapAvatar_10_BorderColor: #647987;
  --sapAvatar_10_TextColor: #fff;
  --sapButton_Background: #fff;
  --sapButton_BorderColor: #0854a0;
  --sapButton_BorderWidth: .0625rem;
  --sapButton_BorderCornerRadius: .25rem;
  --sapButton_TextColor: #0854a0;
  --sapButton_Hover_Background: #ebf5fe;
  --sapButton_Hover_BorderColor: #0854a0;
  --sapButton_Hover_TextColor: #0854a0;
  --sapButton_IconColor: #0854a0;
  --sapButton_Active_Background: #0854a0;
  --sapButton_Active_BorderColor: #0854a0;
  --sapButton_Active_TextColor: #fff;
  --sapButton_Emphasized_Background: #0a6ed1;
  --sapButton_Emphasized_BorderColor: #0a6ed1;
  --sapButton_Emphasized_TextColor: #fff;
  --sapButton_Emphasized_Hover_Background: #085caf;
  --sapButton_Emphasized_Hover_BorderColor: #085caf;
  --sapButton_Emphasized_Hover_TextColor: #fff;
  --sapButton_Emphasized_Active_Background: #0854a0;
  --sapButton_Emphasized_Active_BorderColor: #0854a0;
  --sapButton_Emphasized_Active_TextColor: #fff;
  --sapButton_Emphasized_TextShadow: transparent;
  --sapButton_Emphasized_FontWeight: bold;
  --sapButton_Reject_Background: #fff;
  --sapButton_Reject_BorderColor: #bb0000;
  --sapButton_Reject_TextColor: #b00;
  --sapButton_Reject_Hover_Background: #ffebeb;
  --sapButton_Reject_Hover_BorderColor: #bb0000;
  --sapButton_Reject_Hover_TextColor: #b00;
  --sapButton_Reject_Active_Background: #a20000;
  --sapButton_Reject_Active_BorderColor: #a20000;
  --sapButton_Reject_Active_TextColor: #fff;
  --sapButton_Reject_Selected_Background: #a20000;
  --sapButton_Reject_Selected_BorderColor: #a20000;
  --sapButton_Reject_Selected_TextColor: #fff;
  --sapButton_Reject_Selected_Hover_Background: #b00;
  --sapButton_Reject_Selected_Hover_BorderColor: #b00;
  --sapButton_Accept_Background: #fff;
  --sapButton_Accept_BorderColor: #107e3e;
  --sapButton_Accept_TextColor: #107e3e;
  --sapButton_Accept_Hover_Background: #f1fdf6;
  --sapButton_Accept_Hover_BorderColor: #107e3e;
  --sapButton_Accept_Hover_TextColor: #107e3e;
  --sapButton_Accept_Active_Background: #0d6733;
  --sapButton_Accept_Active_BorderColor: #0d6733;
  --sapButton_Accept_Active_TextColor: #fff;
  --sapButton_Accept_Selected_Background: #0d6733;
  --sapButton_Accept_Selected_BorderColor: #0d6733;
  --sapButton_Accept_Selected_TextColor: #fff;
  --sapButton_Accept_Selected_Hover_Background: #107e3e;
  --sapButton_Accept_Selected_Hover_BorderColor: #107e3e;
  --sapButton_Lite_Background: transparent;
  --sapButton_Lite_BorderColor: transparent;
  --sapButton_Lite_TextColor: #0854a0;
  --sapButton_Lite_Hover_Background: #ebf5fe;
  --sapButton_Lite_Hover_BorderColor: #0854a0;
  --sapButton_Lite_Hover_TextColor: #0854a0;
  --sapButton_Lite_Active_Background: #0854a0;
  --sapButton_Lite_Active_BorderColor: #0854a0;
  --sapButton_Selected_Background: #0854a0;
  --sapButton_Selected_BorderColor: #0854a0;
  --sapButton_Selected_TextColor: #fff;
  --sapButton_Selected_Hover_Background: #095caf;
  --sapButton_Selected_Hover_BorderColor: #095caf;
  --sapButton_Attention_Background: #fff;
  --sapButton_Attention_BorderColor: #df6e0c;
  --sapButton_Attention_TextColor: #32363a;
  --sapButton_Attention_Hover_Background: #fef7f1;
  --sapButton_Attention_Hover_BorderColor: #df6e0c;
  --sapButton_Attention_Hover_TextColor: #32363a;
  --sapButton_Attention_Active_Background: #f3801c;
  --sapButton_Attention_Active_BorderColor: #f3801c;
  --sapButton_Attention_Active_TextColor: #fff;
  --sapButton_Attention_Selected_Background: #f3801c;
  --sapButton_Attention_Selected_BorderColor: #f3801c;
  --sapButton_Attention_Selected_TextColor: #fff;
  --sapButton_Attention_Selected_Hover_Background: #f48e34;
  --sapButton_Attention_Selected_Hover_BorderColor: #f48e34;
  --sapButton_Negative_Background: #bb0000;
  --sapButton_Negative_BorderColor: #bb0000;
  --sapButton_Negative_TextColor: #fff;
  --sapButton_Negative_Hover_Background: #970000;
  --sapButton_Negative_Hover_BorderColor: #970000;
  --sapButton_Negative_Hover_TextColor: #fff;
  --sapButton_Negative_Active_Background: #800;
  --sapButton_Negative_Active_BorderColor: #800;
  --sapButton_Negative_Active_TextColor: #fff;
  --sapButton_Critical_Background: #df6e0c;
  --sapButton_Critical_BorderColor: #df6e0c;
  --sapButton_Critical_TextColor: #fff;
  --sapButton_Critical_Hover_Background: #f3801c;
  --sapButton_Critical_Hover_BorderColor: #f3801c;
  --sapButton_Critical_Hover_TextColor: #fff;
  --sapButton_Critical_Active_Background: #f5933e;
  --sapButton_Critical_Active_BorderColor: #f5933e;
  --sapButton_Critical_Active_TextColor: #fff;
  --sapButton_Success_Background: #107e3e;
  --sapButton_Success_BorderColor: #107e3e;
  --sapButton_Success_TextColor: #fff;
  --sapButton_Success_Hover_Background: #0c5e2e;
  --sapButton_Success_Hover_BorderColor: #0c5e2e;
  --sapButton_Success_Hover_TextColor: #fff;
  --sapButton_Success_Active_Background: #0a5128;
  --sapButton_Success_Active_BorderColor: #0a5128;
  --sapButton_Success_Active_TextColor: #fff;
  --sapButton_Information_Background: #0a6ed1;
  --sapButton_Information_BorderColor: #0a6ed1;
  --sapButton_Information_TextColor: #fff;
  --sapButton_Information_Hover_Background: #0961b9;
  --sapButton_Information_Hover_BorderColor: #0961b9;
  --sapButton_Information_Hover_TextColor: #fff;
  --sapButton_Information_Active_Background: #0854a0;
  --sapButton_Information_Active_BorderColor: #0854a0;
  --sapButton_Information_Active_TextColor: #fff;
  --sapButton_Neutral_Background: #6a6d70;
  --sapButton_Neutral_BorderColor: #6a6d70;
  --sapButton_Neutral_TextColor: #fff;
  --sapButton_Neutral_Hover_Background: #595b5e;
  --sapButton_Neutral_Hover_BorderColor: #595b5e;
  --sapButton_Neutral_Hover_TextColor: #fff;
  --sapButton_Neutral_Active_Background: #515456;
  --sapButton_Neutral_Active_BorderColor: #515456;
  --sapButton_Neutral_Active_TextColor: #fff;
  --sapButton_Track_Background: #ededed;
  --sapButton_Track_BorderColor: #89919a;
  --sapButton_Track_TextColor: #32363a;
  --sapButton_Track_Hover_Background: #ededed;
  --sapButton_Track_Hover_BorderColor: #0854a0;
  --sapButton_Track_Selected_Background: #ebf5fe;
  --sapButton_Track_Selected_BorderColor: #0854a0;
  --sapButton_Track_Selected_TextColor: #32363a;
  --sapButton_Track_Selected_Hover_Background: #ebf5fe;
  --sapButton_Track_Selected_Hover_BorderColor: #095caf;
  --sapButton_Handle_Background: #fff;
  --sapButton_Handle_BorderColor: #89919a;
  --sapButton_Handle_TextColor: #32363a;
  --sapButton_Handle_Hover_Background: #ebf5fe;
  --sapButton_Handle_Hover_BorderColor: #0854a0;
  --sapButton_Handle_Selected_Background: #0854a0;
  --sapButton_Handle_Selected_BorderColor: #0854a0;
  --sapButton_Handle_Selected_TextColor: #fff;
  --sapButton_Handle_Selected_Hover_Background: #095caf;
  --sapButton_Handle_Selected_Hover_BorderColor: #095caf;
  --sapButton_Track_Negative_Background: #ffebeb;
  --sapButton_Track_Negative_BorderColor: #bb0000;
  --sapButton_Track_Negative_TextColor: #b00;
  --sapButton_Track_Negative_Hover_Background: #ffebeb;
  --sapButton_Track_Negative_Hover_BorderColor: #bb0000;
  --sapButton_Handle_Negative_Background: #fff;
  --sapButton_Handle_Negative_BorderColor: #bb0000;
  --sapButton_Handle_Negative_TextColor: #b00;
  --sapButton_Handle_Negative_Hover_Background: #ffebeb;
  --sapButton_Handle_Negative_Hover_BorderColor: #bb0000;
  --sapButton_Track_Positive_Background: #f1fdf6;
  --sapButton_Track_Positive_BorderColor: #107e3e;
  --sapButton_Track_Positive_TextColor: #107e3e;
  --sapButton_Track_Positive_Hover_Background: #f1fdf6;
  --sapButton_Track_Positive_Hover_BorderColor: #107e3e;
  --sapButton_Handle_Positive_Background: #fff;
  --sapButton_Handle_Positive_BorderColor: #107e3e;
  --sapButton_Handle_Positive_TextColor: #107e3e;
  --sapButton_Handle_Positive_Hover_Background: #f1fdf6;
  --sapButton_Handle_Positive_Hover_BorderColor: #107e3e;
  --sapButton_TokenBackground: #fafafa;
  --sapButton_TokenBorderColor: #c2c2c2;
  --sapField_Background: #fff;
  --sapField_BackgroundStyle: none;
  --sapField_TextColor: #32363a;
  --sapField_PlaceholderTextColor: #74777a;
  --sapField_BorderColor: #89919a;
  --sapField_HelpBackground: #fff;
  --sapField_BorderWidth: .0625rem;
  --sapField_BorderStyle: solid;
  --sapField_BorderCornerRadius: .125rem;
  --sapField_Shadow: none;
  --sapField_Hover_Background: #fff;
  --sapField_Hover_BackgroundStyle: none;
  --sapField_Hover_BorderColor: #0854a0;
  --sapField_Hover_HelpBackground: #ebf5fe;
  --sapField_Hover_Shadow: none;
  --sapField_Hover_InvalidShadow: none;
  --sapField_Hover_WarningShadow: none;
  --sapField_Hover_SuccessShadow: none;
  --sapField_Hover_InformationShadow: none;
  --sapField_Active_BorderColor: #0854a0;
  --sapField_Focus_Background: #fff;
  --sapField_Focus_BorderColor: #89919a;
  --sapField_Focus_HelpBackground: #fff;
  --sapField_ReadOnly_Background: rgba(242,242,242,0.5);
  --sapField_ReadOnly_BackgroundStyle: none;
  --sapField_ReadOnly_BorderColor: #89919a;
  --sapField_ReadOnly_BorderStyle: solid;
  --sapField_ReadOnly_HelpBackground: rgba(242,242,242,0.5);
  --sapField_RequiredColor: #ce3b3b;
  --sapField_InvalidColor: #bb0000;
  --sapField_InvalidBackground: #fff;
  --sapField_InvalidBackgroundStyle: none;
  --sapField_InvalidBorderWidth: .125rem;
  --sapField_InvalidBorderStyle: solid;
  --sapField_InvalidShadow: none;
  --sapField_WarningColor: #df6e0c;
  --sapField_WarningBackground: #fff;
  --sapField_WarningBackgroundStyle: none;
  --sapField_WarningBorderWidth: .125rem;
  --sapField_WarningBorderStyle: solid;
  --sapField_WarningShadow: none;
  --sapField_SuccessColor: #107e3e;
  --sapField_SuccessBackground: #fff;
  --sapField_SuccessBackgroundStyle: none;
  --sapField_SuccessBorderWidth: .0625rem;
  --sapField_SuccessBorderStyle: solid;
  --sapField_SuccessShadow: none;
  --sapField_InformationColor: #0a6ed1;
  --sapField_InformationBackground: #fff;
  --sapField_InformationBackgroundStyle: none;
  --sapField_InformationBorderWidth: .125rem;
  --sapField_InformationBorderStyle: solid;
  --sapField_InformationShadow: none;
  --sapGroup_TitleBackground: transparent;
  --sapGroup_TitleBorderColor: #d9d9d9;
  --sapGroup_TitleTextColor: #32363a;
  --sapGroup_Title_FontSize: 1.125rem;
  --sapGroup_ContentBackground: #fff;
  --sapGroup_ContentBorderColor: #d9d9d9;
  --sapGroup_BorderWidth: .0625rem;
  --sapGroup_BorderCornerRadius: 0;
  --sapGroup_FooterBackground: transparent;
  --sapToolbar_Background: transparent;
  --sapToolbar_SeparatorColor: #d9d9d9;
  --sapList_HeaderBackground: #f2f2f2;
  --sapList_HeaderBorderColor: #e5e5e5;
  --sapList_HeaderTextColor: #32363a;
  --sapList_BorderColor: #e5e5e5;
  --sapList_BorderWidth: .0625rem;
  --sapList_TextColor: #32363a;
  --sapList_Active_TextColor: #fff;
  --sapList_Active_Background: #0854a0;
  --sapList_SelectionBackgroundColor: #e5f0fa;
  --sapList_SelectionBorderColor: #0854a0;
  --sapList_Hover_SelectionBackground: #d8e9f8;
  --sapList_Background: #fff;
  --sapList_Hover_Background: #f5f5f5;
  --sapList_AlternatingBackground: #f2f2f2;
  --sapList_GroupHeaderBackground: #fff;
  --sapList_GroupHeaderBorderColor: #d9d9d9;
  --sapList_GroupHeaderTextColor: #32363a;
  --sapList_TableGroupHeaderBackground: #efefef;
  --sapList_TableGroupHeaderBorderColor: #d9d9d9;
  --sapList_TableGroupHeaderTextColor: #32363a;
  --sapList_FooterBackground: #fafafa;
  --sapList_FooterTextColor: #32363a;
  --sapList_TableFooterBorder: #d9d9d9;
  --sapList_TableFixedBorderColor: #8c8c8c;
  --sapMessage_ErrorBorderColor: #bb0000;
  --sapMessage_WarningBorderColor: #df6e0c;
  --sapMessage_SuccessBorderColor: #107e3e;
  --sapMessage_InformationBorderColor: #0a6ed1;
  --sapPopover_BorderCornerRadius: .25rem;
  --sapProgress_Background: #fff;
  --sapProgress_BorderColor: #89919a;
  --sapProgress_TextColor: #32363a;
  --sapProgress_FontSize: .75rem;
  --sapProgress_NegativeBackground: #fff;
  --sapProgress_NegativeBorderColor: #89919a;
  --sapProgress_NegativeTextColor: #32363a;
  --sapProgress_CriticalBackground: #fff;
  --sapProgress_CriticalBorderColor: #89919a;
  --sapProgress_CriticalTextColor: #32363a;
  --sapProgress_PositiveBackground: #fff;
  --sapProgress_PositiveBorderColor: #89919a;
  --sapProgress_PositiveTextColor: #32363a;
  --sapProgress_InformationBackground: #fff;
  --sapProgress_InformationBorderColor: #89919a;
  --sapProgress_InformationTextColor: #32363a;
  --sapProgress_Value_Background: #6a6d70;
  --sapProgress_Value_BorderColor: #89919a;
  --sapProgress_Value_TextColor: #32363a;
  --sapProgress_Value_NegativeBackground: #bb0000;
  --sapProgress_Value_NegativeBorderColor: #fff;
  --sapProgress_Value_NegativeTextColor: #32363a;
  --sapProgress_Value_CriticalBackground: #df6e0c;
  --sapProgress_Value_CriticalBorderColor: #fff;
  --sapProgress_Value_CriticalTextColor: #32363a;
  --sapProgress_Value_PositiveBackground: #107e3e;
  --sapProgress_Value_PositiveBorderColor: #fff;
  --sapProgress_Value_PositiveTextColor: #32363a;
  --sapProgress_Value_InformationBackground: #0a6ed1;
  --sapProgress_Value_InformationBorderColor: #fff;
  --sapProgress_Value_InformationTextColor: #32363a;
  --sapScrollBar_FaceColor: #949494;
  --sapScrollBar_TrackColor: #fff;
  --sapScrollBar_BorderColor: #949494;
  --sapScrollBar_SymbolColor: #0854a0;
  --sapScrollBar_Dimension: .75rem;
  --sapScrollBar_Hover_FaceColor: #8c8c8c;
  --sapSlider_Background: #89919a;
  --sapSlider_BorderColor: #89919a;
  --sapSlider_Selected_Background: #0854a0;
  --sapSlider_Selected_BorderColor: #0854a0;
  --sapSlider_HandleBackground: #fff;
  --sapSlider_HandleBorderColor: #89919a;
  --sapSlider_RangeHandleBackground: transparent;
  --sapSlider_Hover_HandleBackground: #ebf5fe;
  --sapSlider_Hover_HandleBorderColor: #0854a0;
  --sapSlider_Hover_RangeHandleBackground: #ebf5fe;
  --sapSlider_Active_HandleBackground: #0854a0;
  --sapSlider_Active_HandleBorderColor: #0854a0;
  --sapSlider_Active_RangeHandleBackground: transparent;
  --sapPageHeader_Background: #fff;
  --sapPageHeader_BorderColor: #d9d9d9;
  --sapPageHeader_TextColor: #32363a;
  --sapPageFooter_Background: #fff;
  --sapPageFooter_BorderColor: #d9d9d9;
  --sapPageFooter_TextColor: #32363a;
  --sapInfobar_Background: #0f828f;
  --sapInfobar_Hover_Background: #0e7581;
  --sapInfobar_Active_Background: #0a545c;
  --sapInfobar_NonInteractive_Background: #e6e6e6;
  --sapInfobar_TextColor: #fff;
  --sapObjectHeader_Background: #fff;
  --sapObjectHeader_Hover_Background: #f5f5f5;
  --sapObjectHeader_BorderColor: #d9d9d9;
  --sapObjectHeader_Title_TextColor: #32363a;
  --sapObjectHeader_Title_FontSize: 1.25rem;
  --sapObjectHeader_Title_SnappedFontSize: 1.25rem;
  --sapObjectHeader_Title_FontFamily: "72", "72full", Arial, Helvetica, sans-serif;
  --sapObjectHeader_Subtitle_TextColor: #6a6d70;
  --sapBlockLayer_Background: #000;
  --sapTile_Background: #fff;
  --sapTile_Hover_Background: #f5f5f5;
  --sapTile_Active_Background: #f5f5f5;
  --sapTile_BorderColor: transparent;
  --sapTile_BorderCornerRadius: .25rem;
  --sapTile_TitleTextColor: #32363a;
  --sapTile_TextColor: #6a6d70;
  --sapTile_IconColor: #5a7da0;
  --sapTile_SeparatorColor: #ccc;
  --sapTile_Interactive_BorderColor: #b3b3b3;
  --sapTile_OverlayBackground: rgba(0,0,0,0.8);
  --sapTile_OverlayForegroundColor: #fff;
  --sapAccentColor1: #d08014;
  --sapAccentColor2: #d04343;
  --sapAccentColor3: #db1f77;
  --sapAccentColor4: #c0399f;
  --sapAccentColor5: #6367de;
  --sapAccentColor6: #286eb4;
  --sapAccentColor7: #0f828f;
  --sapAccentColor8: #7ca10c;
  --sapAccentColor9: #925ace;
  --sapAccentColor10: #647987;
  --sapAccentBackgroundColor1: #fff3b8;
  --sapAccentBackgroundColor2: #ffd0e7;
  --sapAccentBackgroundColor3: #fff0fa;
  --sapAccentBackgroundColor4: #ffdcf3;
  --sapAccentBackgroundColor5: #ded3ff;
  --sapAccentBackgroundColor6: #d1efff;
  --sapAccentBackgroundColor7: #c2fcee;
  --sapAccentBackgroundColor8: #ebf5cb;
  --sapAccentBackgroundColor9: #dafdf5;
  --sapAccentBackgroundColor10: #eaecee;
  --sapIndicationColor_1: #880000;
  --sapIndicationColor_1_Background: #880000;
  --sapIndicationColor_1_BorderColor: #880000;
  --sapIndicationColor_1_TextColor: #fff;
  --sapIndicationColor_1_Hover_Background: #6f0000;
  --sapIndicationColor_1_Active_Background: #500;
  --sapIndicationColor_1_Active_BorderColor: #880000;
  --sapIndicationColor_1_Active_TextColor: #fff;
  --sapIndicationColor_1_Selected_Background: #500;
  --sapIndicationColor_1_Selected_BorderColor: #880000;
  --sapIndicationColor_1_Selected_TextColor: #fff;
  --sapIndicationColor_1b: #fb9d9d;
  --sapIndicationColor_1b_BorderColor: #fb9d9d;
  --sapIndicationColor_1b_Hover_Background: #fa8585;
  --sapIndicationColor_2: #bb0000;
  --sapIndicationColor_2_Background: #bb0000;
  --sapIndicationColor_2_BorderColor: #bb0000;
  --sapIndicationColor_2_TextColor: #fff;
  --sapIndicationColor_2_Hover_Background: #a20000;
  --sapIndicationColor_2_Active_Background: #800;
  --sapIndicationColor_2_Active_BorderColor: #bb0000;
  --sapIndicationColor_2_Active_TextColor: #fff;
  --sapIndicationColor_2_Selected_Background: #800;
  --sapIndicationColor_2_Selected_BorderColor: #bb0000;
  --sapIndicationColor_2_Selected_TextColor: #fff;
  --sapIndicationColor_2b: #fcc4c4;
  --sapIndicationColor_2b_BorderColor: #fcc4c4;
  --sapIndicationColor_2b_Hover_Background: #fbacac;
  --sapIndicationColor_3: #df6e0c;
  --sapIndicationColor_3_Background: #df6e0c;
  --sapIndicationColor_3_BorderColor: #df6e0c;
  --sapIndicationColor_3_TextColor: #fff;
  --sapIndicationColor_3_Hover_Background: #d0670b;
  --sapIndicationColor_3_Active_Background: #c2600a;
  --sapIndicationColor_3_Active_BorderColor: #df6e0c;
  --sapIndicationColor_3_Active_TextColor: #fff;
  --sapIndicationColor_3_Selected_Background: #c2600a;
  --sapIndicationColor_3_Selected_BorderColor: #df6e0c;
  --sapIndicationColor_3_Selected_TextColor: #fff;
  --sapIndicationColor_3b: #fff2c0;
  --sapIndicationColor_3b_BorderColor: #fff2c0;
  --sapIndicationColor_3b_Hover_Background: #ffeda6;
  --sapIndicationColor_4: #107e3e;
  --sapIndicationColor_4_Background: #107e3e;
  --sapIndicationColor_4_BorderColor: #107e3e;
  --sapIndicationColor_4_TextColor: #fff;
  --sapIndicationColor_4_Hover_Background: #0d6733;
  --sapIndicationColor_4_Active_Background: #0a5128;
  --sapIndicationColor_4_Active_BorderColor: #107e3e;
  --sapIndicationColor_4_Active_TextColor: #fff;
  --sapIndicationColor_4_Selected_Background: #0a5128;
  --sapIndicationColor_4_Selected_BorderColor: #107e3e;
  --sapIndicationColor_4_Selected_TextColor: #fff;
  --sapIndicationColor_4b: #bae8bc;
  --sapIndicationColor_4b_BorderColor: #bae8bc;
  --sapIndicationColor_4b_Hover_Background: #a7e2a9;
  --sapIndicationColor_5: #0a6ed1;
  --sapIndicationColor_5_Background: #0a6ed1;
  --sapIndicationColor_5_BorderColor: #0a6ed1;
  --sapIndicationColor_5_TextColor: #fff;
  --sapIndicationColor_5_Hover_Background: #0961b9;
  --sapIndicationColor_5_Active_Background: #0854a0;
  --sapIndicationColor_5_Active_BorderColor: #0a6ed1;
  --sapIndicationColor_5_Active_TextColor: #fff;
  --sapIndicationColor_5_Selected_Background: #0854a0;
  --sapIndicationColor_5_Selected_BorderColor: #0a6ed1;
  --sapIndicationColor_5_Selected_TextColor: #fff;
  --sapIndicationColor_5b: #d3effd;
  --sapIndicationColor_5b_BorderColor: #d3effd;
  --sapIndicationColor_5b_Hover_Background: #bbe6fc;
  --sapIndicationColor_6: #0f828f;
  --sapIndicationColor_6_Background: #0f828f;
  --sapIndicationColor_6_BorderColor: #0f828f;
  --sapIndicationColor_6_TextColor: #fff;
  --sapIndicationColor_6_Hover_Background: #0d6d78;
  --sapIndicationColor_6_Active_Background: #0a5861;
  --sapIndicationColor_6_Active_BorderColor: #0f828f;
  --sapIndicationColor_6_Active_TextColor: #fff;
  --sapIndicationColor_6_Selected_Background: #0a5861;
  --sapIndicationColor_6_Selected_BorderColor: #0f828f;
  --sapIndicationColor_6_Selected_TextColor: #fff;
  --sapIndicationColor_6b: #cdf5ec;
  --sapIndicationColor_6b_BorderColor: #cdf5ec;
  --sapIndicationColor_6b_Hover_Background: #b8f1e4;
  --sapIndicationColor_7: #925ace;
  --sapIndicationColor_7_Background: #925ace;
  --sapIndicationColor_7_BorderColor: #925ace;
  --sapIndicationColor_7_TextColor: #fff;
  --sapIndicationColor_7_Hover_Background: #8546c8;
  --sapIndicationColor_7_Active_Background: #7838bd;
  --sapIndicationColor_7_Active_BorderColor: #925ace;
  --sapIndicationColor_7_Active_TextColor: #fff;
  --sapIndicationColor_7_Selected_Background: #7838bd;
  --sapIndicationColor_7_Selected_BorderColor: #925ace;
  --sapIndicationColor_7_Selected_TextColor: #fff;
  --sapIndicationColor_7b: #e2dbff;
  --sapIndicationColor_7b_BorderColor: #e2dbff;
  --sapIndicationColor_7b_Hover_Background: #cdc2ff;
  --sapIndicationColor_8: #c0399f;
  --sapIndicationColor_8_Background: #c0399f;
  --sapIndicationColor_8_BorderColor: #c0399f;
  --sapIndicationColor_8_TextColor: #fff;
  --sapIndicationColor_8_Hover_Background: #ac338f;
  --sapIndicationColor_8_Active_Background: #992d7e;
  --sapIndicationColor_8_Active_BorderColor: #c0399f;
  --sapIndicationColor_8_Active_TextColor: #fff;
  --sapIndicationColor_8_Selected_Background: #992d7e;
  --sapIndicationColor_8_Selected_BorderColor: #c0399f;
  --sapIndicationColor_8_Selected_TextColor: #fff;
  --sapIndicationColor_8b: #f8d6ff;
  --sapIndicationColor_8b_BorderColor: #f8d6ff;
  --sapIndicationColor_8b_Hover_Background: #f4bdff;
  --sapIndicationColor_9: #1d2d3e;
  --sapIndicationColor_9_Background: #1d2d3e;
  --sapIndicationColor_9_BorderColor: #1d2d3e;
  --sapIndicationColor_9_TextColor: #fff;
  --sapIndicationColor_9_Hover_Background: #15202d;
  --sapIndicationColor_9_Active_Background: #0d141b;
  --sapIndicationColor_9_Active_BorderColor: #1d2d3e;
  --sapIndicationColor_9_Active_TextColor: #fff;
  --sapIndicationColor_9_Selected_Background: #0d141b;
  --sapIndicationColor_9_Selected_BorderColor: #1d2d3e;
  --sapIndicationColor_9_Selected_TextColor: #fff;
  --sapIndicationColor_9b: #fff;
  --sapIndicationColor_9b_BorderColor: #d9d9d9;
  --sapIndicationColor_9b_Hover_Background: #f2f2f2;
  --sapIndicationColor_10: #45484a;
  --sapIndicationColor_10_Background: #45484a;
  --sapIndicationColor_10_BorderColor: #45484a;
  --sapIndicationColor_10_TextColor: #fff;
  --sapIndicationColor_10_Hover_Background: #393b3d;
  --sapIndicationColor_10_Active_Background: #2c2e30;
  --sapIndicationColor_10_Active_BorderColor: #45484a;
  --sapIndicationColor_10_Active_TextColor: #fff;
  --sapIndicationColor_10_Selected_Background: #2c2e30;
  --sapIndicationColor_10_Selected_BorderColor: #45484a;
  --sapIndicationColor_10_Selected_TextColor: #fff;
  --sapIndicationColor_10b: #eaecee;
  --sapIndicationColor_10b_BorderColor: #eaecee;
  --sapIndicationColor_10b_Hover_Background: #dcdfe3;
  --sapLegend_WorkingBackground: #fafafa;
  --sapLegend_NonWorkingBackground: #dedede;
  --sapLegend_CurrentDateTime: #c0399f;
  --sapLegendColor1: #d58215;
  --sapLegendColor2: #dc5b5b;
  --sapLegendColor3: #db1f77;
  --sapLegendColor4: #9b3b3b;
  --sapLegendColor5: #cf5db3;
  --sapLegendColor6: #286eb4;
  --sapLegendColor7: #1193a2;
  --sapLegendColor8: #8b9668;
  --sapLegendColor9: #647987;
  --sapLegendColor10: #892971;
  --sapLegendColor11: #725a3a;
  --sapLegendColor12: #bb2f2f;
  --sapLegendColor13: #bc1b66;
  --sapLegendColor14: #8b714f;
  --sapLegendColor15: #606190;
  --sapLegendColor16: #597da1;
  --sapLegendColor17: #49797e;
  --sapLegendColor18: #687a33;
  --sapLegendColor19: #295989;
  --sapLegendColor20: #5154bd;
  --sapLegendBackgroundColor1: #fdf3e7;
  --sapLegendBackgroundColor2: #faeaea;
  --sapLegendBackgroundColor3: #fce9f2;
  --sapLegendBackgroundColor4: #f8ecec;
  --sapLegendBackgroundColor5: #f9ebf5;
  --sapLegendBackgroundColor6: #ebf3fa;
  --sapLegendBackgroundColor7: #e8fbfd;
  --sapLegendBackgroundColor8: #f3f4ef;
  --sapLegendBackgroundColor9: #f1f3f4;
  --sapLegendBackgroundColor10: #f9ebf6;
  --sapLegendBackgroundColor11: #f6f2ed;
  --sapLegendBackgroundColor12: #faeaea;
  --sapLegendBackgroundColor13: #fce9f2;
  --sapLegendBackgroundColor14: #f5f2ee;
  --sapLegendBackgroundColor15: #f0f0f5;
  --sapLegendBackgroundColor16: #eff2f6;
  --sapLegendBackgroundColor17: #eff5f6;
  --sapLegendBackgroundColor18: #f5f7ed;
  --sapLegendBackgroundColor19: #ebf2f9;
  --sapLegendBackgroundColor20: #ecedf8;
  --sapChart_OrderedColor_1: #438cd5;
  --sapChart_OrderedColor_2: #e66729;
  --sapChart_OrderedColor_3: #16976c;
  --sapChart_OrderedColor_4: #ed4a7b;
  --sapChart_OrderedColor_5: #945ecf;
  --sapChart_OrderedColor_6: #1193a2;
  --sapChart_OrderedColor_7: #525df4;
  --sapChart_OrderedColor_8: #bf399e;
  --sapChart_OrderedColor_9: #6c8893;
  --sapChart_OrderedColor_10: #ed5f5f;
  --sapChart_OrderedColor_11: #2f6497;
  --sapChart_Bad: #dc0d0e;
  --sapChart_Critical: #cb7d0c;
  --sapChart_Good: #3c9d57;
  --sapChart_Neutral: #848f94;
  --sapChart_Sequence_1: #438cd5;
  --sapChart_Sequence_2: #e66729;
  --sapChart_Sequence_3: #16976c;
  --sapChart_Sequence_4: #ed4a7b;
  --sapChart_Sequence_5: #945ecf;
  --sapChart_Sequence_6: #1193a2;
  --sapChart_Sequence_7: #525df4;
  --sapChart_Sequence_8: #bf399e;
  --sapChart_Sequence_9: #6c8893;
  --sapChart_Sequence_10: #ed5f5f;
  --sapChart_Sequence_11: #2f6497;
  --sapChart_Sequence_Neutral: #848f94;
  
  --sapFontUrl_SAP-icons_woff: url('../../../Base/baseLib/baseTheme/fonts/SAP-icons.woff');
  --sapFontUrl_SAP-icons_woff2: url('../../../Base/baseLib/baseTheme/fonts/SAP-icons.woff2');
  --sapFontUrl_SAP-icons-TNT_ttf: url('../../../Base/baseLib/baseTheme/fonts/SAP-icons-TNT.ttf');
  --sapFontUrl_SAP-icons-TNT_woff: url('../../../Base/baseLib/baseTheme/fonts/SAP-icons-TNT.woff');
  --sapFontUrl_SAP-icons-TNT_woff2: url('../../../Base/baseLib/baseTheme/fonts/SAP-icons-TNT.woff2');
  --sapFontUrl_SAP-icons-Business-Suite_ttf: url('../../../Base/baseLib/baseTheme/fonts/BusinessSuiteInAppSymbols.ttf');
  --sapFontUrl_SAP-icons-Business-Suite_woff: url('../../../Base/baseLib/baseTheme/fonts/BusinessSuiteInAppSymbols.woff');
  --sapFontUrl_SAP-icons-Business-Suite_woff2: url('../../../Base/baseLib/baseTheme/fonts/BusinessSuiteInAppSymbols.woff2');
  --sapFontUrl_72_Regular_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Regular.woff2');
  --sapFontUrl_72_Regular_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Regular.woff');
  --sapFontUrl_72_Regular_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Regular-full.woff2');
  --sapFontUrl_72_Regular_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Regular-full.woff');
  --sapFontUrl_72_Bold_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Bold.woff2');
  --sapFontUrl_72_Bold_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Bold.woff');
  --sapFontUrl_72_Bold_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Bold-full.woff2');
  --sapFontUrl_72_Bold_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Bold-full.woff');
  --sapFontUrl_72_Semibold_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Semibold.woff2');
  --sapFontUrl_72_Semibold_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Semibold.woff');
  --sapFontUrl_72_Semibold_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Semibold-full.woff2');
  --sapFontUrl_72_Semibold_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Semibold-full.woff');
  --sapFontUrl_72_SemiboldDuplex_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-SemiboldDuplex.woff2');
  --sapFontUrl_72_SemiboldDuplex_woff: url('../../../Base/baseLib/baseTheme/fonts/72-SemiboldDuplex.woff');
  --sapFontUrl_72_SemiboldDuplex_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-SemiboldDuplex-full.woff2');
  --sapFontUrl_72_SemiboldDuplex_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72-SemiboldDuplex-full.woff');
  --sapFontUrl_72_Light_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Light.woff2');
  --sapFontUrl_72_Light_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Light.woff');
  --sapFontUrl_72_Light_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Light-full.woff2');
  --sapFontUrl_72_Light_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Light-full.woff');
  --sapFontUrl_72_Black_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Black.woff2');
  --sapFontUrl_72_Black_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Black.woff');
  --sapFontUrl_72_Black_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Black-full.woff2');
  --sapFontUrl_72_Black_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Black-full.woff');
  --sapFontUrl_72_BoldItalic_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-BoldItalic.woff2');
  --sapFontUrl_72_BoldItalic_woff: url('../../../Base/baseLib/baseTheme/fonts/72-BoldItalic.woff');
  --sapFontUrl_72_BoldItalic_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-BoldItalic-full.woff2');
  --sapFontUrl_72_BoldItalic_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72-BoldItalic-full.woff');
  --sapFontUrl_72_Condensed_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Condensed.woff2');
  --sapFontUrl_72_Condensed_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Condensed.woff');
  --sapFontUrl_72_Condensed_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Condensed-full.woff2');
  --sapFontUrl_72_Condensed_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Condensed-full.woff');
  --sapFontUrl_72_CondensedBold_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-CondensedBold.woff2');
  --sapFontUrl_72_CondensedBold_woff: url('../../../Base/baseLib/baseTheme/fonts/72-CondensedBold.woff');
  --sapFontUrl_72_CondensedBold_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-CondensedBold-full.woff2');
  --sapFontUrl_72_CondensedBold_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72-CondensedBold-full.woff');
  --sapFontUrl_72_Italic_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Italic.woff2');
  --sapFontUrl_72_Italic_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Italic.woff');
  --sapFontUrl_72_Italic_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72-Italic-full.woff2');
  --sapFontUrl_72_Italic_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72-Italic-full.woff');
  --sapFontUrl_72Mono_Regular_woff2: url('../../../Base/baseLib/baseTheme/fonts/72Mono-Regular.woff2');
  --sapFontUrl_72Mono_Regular_woff: url('../../../Base/baseLib/baseTheme/fonts/72Mono-Regular.woff');
  --sapFontUrl_72Mono_Regular_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72Mono-Regular-full.woff2');
  --sapFontUrl_72Mono_Regular_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72Mono-Regular-full.woff');
  --sapFontUrl_72Mono_Bold_woff2: url('../../../Base/baseLib/baseTheme/fonts/72Mono-Bold.woff2');
  --sapFontUrl_72Mono_Bold_woff: url('../../../Base/baseLib/baseTheme/fonts/72Mono-Bold.woff');
  --sapFontUrl_72Mono_Bold_full_woff2: url('../../../Base/baseLib/baseTheme/fonts/72Mono-Bold-full.woff2');
  --sapFontUrl_72Mono_Bold_full_woff: url('../../../Base/baseLib/baseTheme/fonts/72Mono-Bold-full.woff');
}

.background-image--sapCompanyLogo {
  background-image: var(--sapCompanyLogo);
}

.background-image--sapBackgroundImage {
  background-image: var(--sapBackgroundImage);
}

.background-image--sapShell_BackgroundImage {
  background-image: var(--sapShell_BackgroundImage);
}

/**
* Base.baseLib.sap_base_fiori.base (Version 11.5.0)
*/

/**
* Base.baseLib.sap_base_fiori.css_variables (Version 11.5.0)
*/

/**
* Base.baseLib.sap_fiori_3.base (Version 11.5.0)
*/

/**
* Base.baseLib.sap_fiori_3.css_variables (Version 11.5.0)
*/
`},p_={packageName:"@ui5/webcomponents",fileName:"themes/sap_fiori_3/parameters-bundle.css",content:`:root [_ui5host] {
	--ui5-avatar-initials-color: var(--sapContent_ImagePlaceholderForegroundColor);
	--ui5-avatar-border-radius: .25rem;
	--ui5-avatar-border-radius-img-deduction: 0.0625rem;
	--ui5-avatar-initials-border: none;
	--ui5-avatar-accent1: var(--sapAccentColor1);
	--ui5-avatar-accent2: var(--sapAccentColor2);
	--ui5-avatar-accent3: var(--sapAccentColor3);
	--ui5-avatar-accent4: var(--sapAccentColor4);
	--ui5-avatar-accent5: var(--sapAccentColor5);
	--ui5-avatar-accent6: var(--sapAccentColor6);
	--ui5-avatar-accent7: var(--sapAccentColor7);
	--ui5-avatar-accent8: var(--sapAccentColor8);
	--ui5-avatar-accent9: var(--sapAccentColor9);
	--ui5-avatar-accent10: var(--sapAccentColor10);
	--ui5-avatar-placeholder: var(--sapContent_ImagePlaceholderBackground);

	--ui5-avatar-accent1-color: var(--ui5-avatar-initials-color);
	--ui5-avatar-accent2-color: var(--ui5-avatar-initials-color);
	--ui5-avatar-accent3-color: var(--ui5-avatar-initials-color);
	--ui5-avatar-accent4-color: var(--ui5-avatar-initials-color);
	--ui5-avatar-accent5-color: var(--ui5-avatar-initials-color);
	--ui5-avatar-accent6-color: var(--ui5-avatar-initials-color);
	--ui5-avatar-accent7-color: var(--ui5-avatar-initials-color);
	--ui5-avatar-accent8-color: var(--ui5-avatar-initials-color);
	--ui5-avatar-accent9-color: var(--ui5-avatar-initials-color);
	--ui5-avatar-accent10-color: var(--ui5-avatar-initials-color);
	--ui5-avatar-placeholder-color: var(--ui5-avatar-initials-color);

	--ui5-avatar-accent1-border-color: var(--sapField_BorderColor);
	--ui5-avatar-accent2-border-color: var(--sapField_BorderColor);
	--ui5-avatar-accent3-border-color: var(--sapField_BorderColor);
	--ui5-avatar-accent4-border-color: var(--sapField_BorderColor);
	--ui5-avatar-accent5-border-color: var(--sapField_BorderColor);
	--ui5-avatar-accent6-border-color: var(--sapField_BorderColor);
	--ui5-avatar-accent7-border-color: var(--sapField_BorderColor);
	--ui5-avatar-accent8-border-color: var(--sapField_BorderColor);
	--ui5-avatar-accent9-border-color: var(--sapField_BorderColor);
	--ui5-avatar-accent10-border-color: var(--sapField_BorderColor);
	--ui5-avatar-placeholder-border-color: var(--sapField_BorderColor);

	--_ui5_avatar_outline: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	--_ui5_avatar_focus_offset: 1px;
	--_ui5_avatar_focus_width: 1px;
	--_ui5_avatar_focus_color: var(--sapContent_FocusColor);

	--_ui5_avatar_fontsize_XS: 0.75rem;
	--_ui5_avatar_fontsize_S: 1.125rem;
	--_ui5_avatar_fontsize_M: 1.625rem;
	--_ui5_avatar_fontsize_L: 2rem;
	--_ui5_avatar_fontsize_XL: 2.75rem;

	--_ui5_avatar_icon_XS: 1rem;
	--_ui5_avatar_icon_S: 1.5rem;
	--_ui5_avatar_icon_M: 2rem;
	--_ui5_avatar_icon_L: 2.5rem;
	--_ui5_avatar_icon_XL: 3rem;
}

:root [_ui5host] {
	--_ui5_avatar_fontsize_XS: 1rem;
	--_ui5_avatar_fontsize_S: 1.125rem;
	--_ui5_avatar_fontsize_M: 1.5rem;
	--_ui5_avatar_fontsize_L: 2.25rem;
	--_ui5_avatar_fontsize_XL: 3rem;
}

:root [_ui5host] {
	--_ui5_avatar_group_button_focus_border: none;
}

:root [_ui5host] {
	--_ui5-badge-cursor: default;

	--ui5-badge-color-scheme-1-background: var(--sapLegendBackgroundColor1);
	--ui5-badge-color-scheme-1-border: var(--sapAccentColor1);
	--ui5-badge-color-scheme-1-color: var(--sapTextColor);

	--ui5-badge-color-scheme-2-background: var(--sapLegendBackgroundColor2);
	--ui5-badge-color-scheme-2-border: var(--sapAccentColor2);
	--ui5-badge-color-scheme-2-color: var(--sapTextColor);

	--ui5-badge-color-scheme-3-background: var(--sapLegendBackgroundColor3);
	--ui5-badge-color-scheme-3-border: var(--sapAccentColor3);
	--ui5-badge-color-scheme-3-color: var(--sapTextColor);

	--ui5-badge-color-scheme-4-background: var(--sapLegendBackgroundColor5);
	--ui5-badge-color-scheme-4-border: var(--sapAccentColor4);
	--ui5-badge-color-scheme-4-color: var(--sapTextColor);

	--ui5-badge-color-scheme-5-background: var(--sapLegendBackgroundColor20);
	--ui5-badge-color-scheme-5-border: var(--sapAccentColor5);
	--ui5-badge-color-scheme-5-color: var(--sapTextColor);

	--ui5-badge-color-scheme-6-background: var(--sapLegendBackgroundColor6);
	--ui5-badge-color-scheme-6-border: var(--sapAccentColor6);
	--ui5-badge-color-scheme-6-color: var(--sapTextColor);

	--ui5-badge-color-scheme-7-background: var(--sapLegendBackgroundColor7);
	--ui5-badge-color-scheme-7-border: var(--sapAccentColor7);
	--ui5-badge-color-scheme-7-color: var(--sapTextColor);

	--ui5-badge-color-scheme-8-background: var(--sapLegendBackgroundColor18);
	--ui5-badge-color-scheme-8-border: var(--sapLegendColor18);
	--ui5-badge-color-scheme-8-color: var(--sapTextColor);

	--ui5-badge-color-scheme-9-background: var(--sapLegendBackgroundColor10);
	--ui5-badge-color-scheme-9-border: var(--sapAccentColor10);
	--ui5-badge-color-scheme-9-color: var(--sapTextColor);

	--ui5-badge-color-scheme-10-background: var(--sapLegendBackgroundColor9);
	--ui5-badge-color-scheme-10-border: var(--sapAccentColor9);
	--ui5-badge-color-scheme-10-color: var(--sapTextColor);
}

:root [_ui5host] {
	--browser_scrollbar_border_radius: var(--sapElement_BorderCornerRadius);
	--browser_scrollbar_border: none;
}

:root [_ui5host] {
	--_ui5_busy_indicator_color: var(--sapContent_IconColor);
	--_ui5_busy_indicator_focus_outline:  var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	--_ui5_busy_indicator_focus_border_radius: 0px;
}

:root [_ui5host] {
	--_ui5_button_focused_border: 0.0625rem dotted var(--sapContent_FocusColor);
	--_ui5_button_focused_border_radius: 0.25rem;
	--_ui5_button_focused_inner_border_radius: 0;
	--_ui5_button_base_min_width: 2.5rem;
	--_ui5_button_base_min_compact_width: 2rem;
	--_ui5_button_base_height: 2.5rem;
	--_ui5_button_compact_height: 1.625rem;
	--_ui5_button_border_radius: var(--sapButton_BorderCornerRadius);
	--_ui5_button_base_padding: 0.6875rem;
	--_ui5_button_compact_padding: 0.4375rem;
	--_ui5_button_base_icon_only_padding: 0.5625rem;
	--_ui5_button_base_icon_margin: 0.563rem;
	--_ui5_button_icon_font_size: 1.375rem;
	--_ui5_button_outline: 1px dotted var(--sapContent_FocusColor);
	--_ui5_button_emphasized_outline: 1px dotted var(--sapContent_FocusColor);
	--_ui5_button_outline_offset: calc(-1 * .1875rem);
	--_ui5_button_emphasized_font_weight: normal;
	--_ui5_button_text_shadow: var(--sapContent_TextShadow);
	--_ui5_button_focus_offset: 1px;
	--_ui5_button_focus_width: 1px;
	--_ui5_button_focus_color: var(--sapContent_FocusColor);
	--_ui5_button_focus_outline_focus_color: var(--sapContent_ContrastFocusColor);
	--_ui5_button_pressed_focused_border_color: var(--sapContent_ContrastFocusColor);

	--_ui5_button_positive_border_focus_hover_color: var(--sapContent_FocusColor);
	--_ui5_button_positive_focus_border_color: var(--sapButton_Accept_BorderColor);
	--_ui5_button_negative_focus_border_color: var(--sapButton_Reject_BorderColor);
	--_ui5_button_attention_focus_border_color: var(--sapButton_Negative_BorderColor);
	--_ui5_button_emphasized_focused_border_color: var(--sapButton_Emphasized_BorderColor);
	--_ui5_button_fontFamily:  "72override", var(--sapFontFamily);
	--_ui5_button_emphasized_focused_border_before: none;
	--_ui5_button_emphasized_focused_border_radius: 0;
	--_ui5_button_transparent_hover: transparent;
}

:root [_ui5host] {
	--_ui5_button_base_min_width: 2.25rem;
	--_ui5_button_base_height: 2.25rem;
	--_ui5_button_base_padding: 0.5625rem;
	--_ui5_button_base_icon_only_padding: 0.5625rem;
	--_ui5_button_base_icon_margin: 0.375rem;
	--_ui5_button_icon_font_size: 1rem;
	--_ui5_button_emphasized_font_weight: bold;
	--_ui5_button_text_shadow: none;
	--_ui5_button_emphasized_focused_border: 0.0625rem dotted var(--sapContent_ContrastFocusColor);
	--_ui5_button_emphasized_focused_border_before: 0.0625rem solid var(--sapContent_FocusColor);
	--_ui5_button_emphasized_outline: 1px solid var(--sapContent_FocusColor);
}

:root [_ui5host] {
	--_ui5_card_box_shadow: var(--sapContent_Shadow0);
	--_ui5_card_hover_box_shadow: var(--_ui5_card_box_shadow);
	--_ui5_card_border: 1px solid var(--sapTile_BorderColor);
	--_ui5_card_border-radius: var(--sapElement_BorderCornerRadius);
	--_ui5_card_header_padding: 1rem;
	--_ui5_card_header_hover_bg: var(--sapList_Hover_Background);
	--_ui5_card_header_active_bg: var(--_ui5_card_header_hover_bg);
	--_ui5_card_header_border: 1px solid var(--_ui5_card_header_border_color);
	--_ui5_card_header_border_color: var(--sapTile_SeparatorColor);
	--_ui5_card_header_focus_border: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	--_ui5_card_header_focus_radius: 0px;
	--_ui5_card_header_focus_bottom_radius: 0px;
	--_ui5_card_header_focus_offset: 1px;
	--_ui5_card_header_title_font_family: "72override", var(--sapFontFamily);
	--_ui5_card_header_title_font_size: var(--sapFontHeader5Size);
	--_ui5_card_header_title_font_weight: normal;
	--_ui5_card_header_subtitle_margin_top: .25rem;
}

:root [_ui5host] {
    --ui5_carousel_background_color_solid: var(--sapGroup_ContentBackground);
    --ui5_carousel_background_color_translucent: var(--sapBackgroundColor);
    --ui5_carousel_button_size: 2.5rem;
    --ui5_carousel_inactive_dot_size: 0.25rem;
    --ui5_carousel_inactive_dot_margin: 0 0.375rem;
    --ui5_carousel_inactive_dot_border: 1px solid var(--sapContent_ForegroundBorderColor);
    --ui5_carousel_inactive_dot_background: var(--sapContent_ForegroundBorderColor);
    --ui5_carousel_active_dot_border: 1px solid var(--sapContent_Selected_ForegroundColor);
    --ui5_carousel_active_dot_background: var(--sapContent_Selected_ForegroundColor);
}

:root [_ui5host] {
--_ui5_checkbox_wrapper_padding: .8125rem;
--_ui5_checkbox_width_height: 3rem;
--_ui5_checkbox_box_shadow: none;
--_ui5_checkbox_transition: unset;
--_ui5_checkbox_focus_border: none;
--_ui5_checkbox_disabled_opacity: .5;
--_ui5_checkbox_border_radius: 0;
--_ui5_checkbox_hover_background: var(--sapField_Hover_Background);
--_ui5_checkbox_active_background: var(--sapField_Hover_Background);
--_ui5_checkbox_checkmark_warning_color: var(--sapField_TextColor);
--_ui5_checkbox_inner_warning_color: var(--sapField_WarningColor);
--_ui5_checkbox_inner_information_color: currentColor;
--_ui5_checkbox_checkmark_color: var(--sapSelectedColor);
--_ui5_checkbox_focus_position: .6875rem;
--_ui5_checkbox_focus_outline: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
--_ui5_checkbox_focus_border_radius: 0;
--_ui5_checkbox_outer_hover_background: transparent;
--_ui5_checkbox_inner_width_height: 1.375rem;
--_ui5_checkbox_inner_border: solid .125rem var(--sapField_BorderColor);
--_ui5_checkbox_inner_hover_border_color: var(--sapField_HoverBorderColor);
--_ui5_checkbox_inner_hover_checked_border_color: var(--sapField_HoverBorderColor);
--_ui5_checkbox_inner_selected_border_color: var(--sapField_BorderColor);
--_ui5_checkbox_inner_disabled_border_color: var(--sapField_BorderColor);
--_ui5_checkbox_inner_active_border_color: var(--sapField_BorderColor);
--_ui5_checkbox_inner_border_radius: 0;
--_ui5_checkbox_inner_error_border: 0.125rem solid var(--sapField_InvalidColor);
--_ui5_checkbox_inner_warning_border: 0.125rem solid var(--sapField_WarningColor);
--_ui5_checkbox_inner_information_border: 0.125rem solid var(--sapField_InformationColor);
--_ui5_checkbox_inner_information_box_shadow: none;
--_ui5_checkbox_inner_warning_box_shadow: none;
--_ui5_checkbox_inner_error_box_shadow: none;
--_ui5_checkbox_inner_success_box_shadow: none;
--_ui5_checkbox_inner_default_box_shadow: none;
--_ui5_checkbox_inner_warning_background_hover: var(--sapField_WarningBackground);
--_ui5_checkbox_inner_error_background_hover: var(--sapField_InvalidBackground);
--_ui5_checkbox_inner_success_background_hover: var(--sapField_SuccessBackground);
--_ui5_checkbox_inner_information_background_hover: var(--sapField_InformationBackground);
--_ui5_checkbox_inner_success_border: var(--sapField_BorderWidth) solid var(--sapField_SuccessColor);
--_ui5_checkbox_inner_readonly_border: 0.125rem solid var(--sapField_ReadOnly_BorderColor);
--_ui5_checkbox_inner_background: var(--sapField_Background);
--_ui5_checkbox_wrapped_focus_padding: .375rem;
--_ui5_checkbox_wrapped_content_margin_top: .125rem;
--_ui5_checkbox_wrapped_focus_left_top_bottom_position: .5625rem;
--_ui5_checkbox_compact_wrapper_padding: .5rem;
--_ui5_checkbox_compact_width_height: 2rem;
--_ui5_checkbox_compact_inner_size: 1rem;
--_ui5_checkbox_compact_focus_position: .375rem;
--_ui5_checkbox_compact_wrapped_label_margin_top: -1px;
--_ui5_checkbox_label_color: var(--sapContent_LabelColor);
--_ui5_checkbox_label_offset: var(--_ui5_checkbox_wrapper_padding);
--_ui5_checkbox_disabled_label_color: var(--sapContent_LabelColor);
--_ui5_checkbox_default_focus_border: none;
--_ui5_checkbox_focus_outline_display: block;
--_ui5_checkbox_right_focus_distance: 0;
}

:root [_ui5host] {
	--_ui5_checkbox_wrapper_padding: .6875rem;
	--_ui5_checkbox_width_height: 2.75rem;
	--_ui5_checkbox_inner_border: .0625rem solid var(--sapField_BorderColor);
	--_ui5_checkbox_focus_position: 0.5625rem;
	--_ui5_checkbox_inner_border_radius: .125rem;
	--_ui5_checkbox_wrapped_content_margin_top: 0;
	--_ui5_checkbox_wrapped_focus_padding: .5rem;
	--_ui5_checkbox_inner_readonly_border: 1px solid var(--sapField_ReadOnly_BorderColor);
	--_ui5_checkbox_compact_wrapped_label_margin_top: -0.125rem;
}

:root [_ui5host] {
	--_ui5_color-palette-item-container-sides-padding: 0.3125rem;
	--_ui5_color-palette-item-container-rows-padding: 0.6875rem;
	--_ui5_color-palette-item-focus-height: 1.5rem;
	--_ui5_color-palette-item-container-padding: var(--_ui5_color-palette-item-container-sides-padding) var(--_ui5_color-palette-item-container-rows-padding);
	--_ui5_color-palette-item-hover-margin: 0;
	--_ui5_color-palette-row-height: 9.5rem;
	--_ui5_color-palette-button-height: 3rem;
	--_ui5_color-palette-item-before-focus-color: 0.0625rem solid white;
	--_ui5_color-palette-item-before-focus-offset: 0.0625rem;
	--_ui5_color-palette-item-before-focus-hover-offset: 0.0625rem;
	--_ui5_color-palette-item-after-focus-color: 0.0625rem dotted black;
	--_ui5_color-palette-item-after-focus-offset: 0.0625rem;
	--_ui5_color-palette-item-after-focus-hover-offset: 0.0625rem;
	--_ui5_color-palette-item-before-focus-border-radius: 0;
	--_ui5_color-palette-item-before-focus-border-radius: 0;
	--_ui5_color-palette-item-outer-border-radius: 0.25rem;
	--_ui5_color-palette-item-inner-border-radius: 0.1875rem;
	--_ui5_color-palette-item-hover-outer-border-radius: 0.25rem;
	--_ui5_color-palette-item-hover-inner-border-radius: 0.1875rem;
}

:root [_ui5host] {
    --_ui5_color_picker_slider_handle_box_shadow: 0.0625rem solid var(--sapField_BorderColor);
    --_ui5_color_picker_slider_handle_border: 0.125rem solid var(--sapField_BorderColor);
    --_ui5_color_picker_slider_handle_outline_hover: 0.125rem solid var(--sapButton_Hover_BorderColor);
    --_ui5_color_picker_slider_handle_outline_focus: 0.0625rem dotted var(--sapContent_FocusColor);
    --_ui5_color_picker_slider_handle_margin_top: 0.125rem;
    --_ui5_color_picker_slider_handle_focus_margin_top: 0.125rem;
    --_ui5_color_picker_circle_outer_border: 0.0625rem solid var(--sapContent_ContrastShadowColor);
    --_ui5_color_picker_circle_inner_border: 0.0625rem solid var(--sapField_BorderColor);
    --_ui5_color_picker_circle_inner_circle_size: 0.5625rem;
    --_ui5_color_picker_slider_container_margin_top: -10px;
    --_ui5_color_picker_slider_handle_inline_focus: none;
}

:root [_ui5host] {
	--_ui5_datepicker_icon_border: none;
	--_ui5-datepicker_border_radius: 0;
	--_ui5-datepicker-hover-background: var(--sapField_Hover_Background);
	--_ui5-datepicker_icon_border_radius: 0;
    
}

:root [_ui5host] {
	--_ui5_daypicker_item_box_shadow: inset 0 0 0 0.0625rem var(--sapContent_Selected_ForegroundColor);
	--_ui5_daypicker_item_margin: 2px;
	--_ui5_daypicker_item_border: none;
	--_ui5_daypicker_item_selected_border_color: var(--sapList_Background);
	--_ui5_daypicker_daynames_container_height: 2rem;
	--_ui5_daypicker_weeknumbers_container_padding_top: 2rem;
	--_ui5_daypicker_item_othermonth_background_color: var(--sapList_Background);
	--_ui5_daypicker_item_othermonth_color: var(--sapContent_LabelColor);
	--_ui5_daypicker_item_othermonth_hover_color: var(--sapContent_LabelColor);
	--_ui5_daypicker_item_border_radius: 0;
	--_ui5_daypicker_item_now_inner_border_radius: 0;
	--_ui5_daypicker_dayname_color: var(--sapTextColor);
	--_ui5_daypicker_weekname_color: var(--sapTextColor);
	--_ui5_daypicker_item_outline_width: 1px;
	--_ui5_daypicker_item_outline_offset: 1px;
	--_ui5_daypicker_item_now_selected_outline_offset: 2px;
	--_ui5_daypicker_item_now_focus_after_width: calc(100% - .25rem);
	--_ui5_daypicker_item_now_focus_after_height: calc(100% - .25rem);
	--_ui5_daypicker_item_now_selected_focus_after_width: calc(100% - .375rem);
	--_ui5_daypicker_item_now_selected_focus_after_height: calc(100% - .375rem);
	--_ui5_daypicker_item_selected_background: transparent;
	--_ui5_daypicker_item_selected_box_shadow: var(--_ui5_daypicker_item_box_shadow), var(--_ui5_daypicker_item_box_shadow);
	--_ui5_daypicker_item_selected_daytext_hover_background: transparent;
	--_ui5_daypicker_item_outline_focus_after: none;
	--_ui5_daypicker_item_border_radius_focus_after: none;
	--_ui5_daypicker_item_border_focus_after: var(--_ui5_daypicker_item_outline_width) dotted var(--sapContent_FocusColor);
	--_ui5_daypicker_item_width_focus_after: calc(100% - 0.25rem);
	--_ui5_daypicker_item_height_focus_after: calc(100% - 0.25rem);
	--_ui5_daypicker_item_now_border: 0.125rem solid var(--sapLegend_CurrentDateTime);
	--_ui5_daypicker_item_now_outline: none;
	--_ui5_daypicker_item_now_outline_offset: none;
	--_ui5_daypicker_item_now_outline_offset_focus_after: var(--_ui5_daypicker_item_now_outline_offset);
	--_ui5_daypicker_item_selected_between_border: 5%;
	--_ui5_daypicker_item_selected_between_background: transparent;
	--_ui5_daypicker_item_selected_between_text_background: var(--sapList_SelectionBackgroundColor);
	--_ui5_daypicker_item_selected_between_text_font: inherit;
	--_ui5_daypicker_item_selected_between_hover_background: inherit;
	--_ui5_daypicker_item_now_box_shadow: inset 0 0 0 0.0625rem var(--_ui5_daypicker_item_selected_border_color);
	--_ui5_daypicker_item_selected_text_outline: none;
	--_ui5_daypicker_item_now_not_selected_inset: 0;
	--_ui5_daypicker_item_now_inset: 0.1875rem;
	--_ui5_daypicker_item_now_border_color: var(--sapLegend_CurrentDateTime);
	--_ui5_daypicker_item_weeekend_filter: brightness(100%);
	--_ui5_daypicker_item_selected_hover: var(--sapContent_Selected_Hover_Background);
	--_ui5_daypicker_item_border_radius_item: none;
	--_ui5_daypicker_item_now_selected_outline_offset: -0.3125rem;
	--_ui5_daypicker_two_calendar_item_now_inset: 0.1875rem;
	--_ui5_daypicker_item_selected__secondary_type_text_outline: none;
	--_ui5_daypicker_two_calendar_item_now_day_text_content: none;
	--_ui5_daypicker_two_calendar_item_now_selected_border_width: 0.0625rem;
	--_ui5_daypicker_two_calendar_item_border_radius: 0.3125rem;
	--_ui5_daypicker_two_calendar_item_border_focus_border_radius: 0rem;
	--_ui5_daypicker_two_calendar_item_no_selected_inset: 0.125rem;
	--_ui5_daypicker_two_calendar_item_selected_now_border_radius_focus: 0.0625rem;
	--_ui5_daypicker_two_calendar_item_no_selected_focus_inset: 0.125rem;
	--_ui5_daypicker_two_calendar_item_no_select_focus_border_radius: 0.0625rem;
	--_ui5_dp_two_calendar_item_secondary_text_border_radios: 0.25rem;
	--_ui5_daypicker_two_calendar_item_now_selected_border_inset: 0.125rem;
}

:root [_ui5host] {
	--_ui5_daypicker_item_selected_background: var(--sapContent_Selected_Background);
	--_ui5_daypicker_dayname_color: var(--sapContent_LabelColor);
	--_ui5_daypicker_weekname_color: var(--sapContent_LabelColor);
	--_ui5_daypicker_item_border_radius_focus_after: 0.0625rem;
	--_ui5_daypicker_item_border_radius_item: 0.0625rem;
	--_ui5_daypicker_item_selected_border: none;
	--_ui5_daypicker_item_not_selected_focus_border: 0.0625rem dotted var(--sapContent_FocusColor);
	--_ui5_daypicker_item_selected_focus_color: var(--sapContent_ContrastFocusColor);
	--_ui5_daypicker_item_selected_focus_width: 0.0625rem;
	--_ui5_daypicker_item_no_selected_inset: 0.125rem;
	--_ui5_daypicker_item_now_border_focus_after: 0.0625rem dotted var(--sapList_SelectionBorderColor);
	--_ui5_daypicker_item_now_border_radius_focus_after: 0.0625rem;
	--_ui5_day_picker_item_selected_now_border: 0.1875rem solid var(--sapList_Background);
	--_ui5_day_picker_item_selected_now_border_focus: 0.0625rem dotted var(--sapContent_ContrastFocusColor);
	--_ui5_day_picker_item_selected_now_border_radius_focus: 0.0625rem;
	--_ui5-dp-item_withsecondtype_border: 0.1875rem;
	--_ui5_daypicker_item_border_radius: 0.25rem;
	--_ui5_daypicker_item_selected_text_border: none;
	--_ui5_daypicker_item_selected_between_text_border_radios: 0.25rem;
	--_ui5_daypicker_item_select_between_border: 1px solid var(--sapContent_Selected_ForegroundColor);
	--_ui5_daypicker_item_now_selected_outline_offset: -0.3125rem;
}

:root [_ui5host] {
	--_ui5_file_uploader_hover_border: 1px solid var(--sapField_Hover_BorderColor);
	--_ui5_file_uploader_value_state_error_hover_background_color: var(--sapField_Hover_Background);
}

:root [_ui5host] {
	--_ui5_dialog_resize_handle_color: var(--sapButton_Lite_TextColor);
	--_ui5_dialog_resize_handle_right: -0.25rem;
	--_ui5_dialog_resize_handle_bottom: -0.0625rem;
	--_ui5_dialog_header_focus_bottom_offset: 3px;
	--_ui5_dialog_header_focus_top_offset: 2px;
	--_ui5_dialog_header_focus_left_offset: 2px;
	--_ui5_dialog_header_focus_right_offset: 2px;
	--_ui5_dialog_header_border_radius: 0px;
	--_ui5_dialog_header_error_state_box_shadow: inset 0 -0.0625rem var(--sapErrorBorderColor), var(--sapContent_HeaderShadow);
	--_ui5_dialog_header_information_state_box_shadow: inset 0 -0.0625rem var(--sapInformationBorderColor), var(--sapContent_HeaderShadow);
	--_ui5_dialog_header_success_state_box_shadow: inset 0 -0.0625rem var(--sapSuccessBorderColor), var(--sapContent_HeaderShadow);
	--_ui5_dialog_header_warning_state_box_shadow: inset 0 -0.0625rem var(--sapWarningBorderColor), var(--sapContent_HeaderShadow);
	--_ui5_dialog_header_error_state_icon_color: var(--sapNegativeElementColor);
	--_ui5_dialog_header_information_state_icon_color: var(--sapInformativeElementColor);
	--_ui5_dialog_header_success_state_icon_color: var(--sapPositiveElementColor);
	--_ui5_dialog_header_warning_state_icon_color: var(--sapCriticalElementColor);
}

:root [_ui5host] {
	--ui5-group-header-listitem-background-color: var(--sapList_GroupHeaderBackground);
}

:root [_ui5host] {
	--_ui5_input_width: 13.125rem;
	--_ui5_input_min_width: 2.75rem;
	--_ui5_input_height: var(--sapElement_Height);
	--_ui5_input_compact_height: 1.625rem;
	--_ui5_input_margin_top_bottom: 0.25rem;
	--_ui5_input_hover_border: var(--sapField_BorderWidth) var(--sapField_BorderStyle) var(--sapField_Hover_BorderColor);
	--_ui5_input_value_state_error_hover_background: var(--sapField_Hover_Background);
	--_ui5_input_background_color: var(--sapField_Background);
	--_ui5_input_border_radius: var(--sapField_BorderCornerRadius);
	--_ui5_input_focus_border_radius: 0;
	--_ui5-input-border: 2px solid transparent; /* The value of this variable defaults to sap_horizon theme, because if it defaults to fiori, then a flickering of the border is present*/
	--_ui5_input_placeholder_style: italic;
	--_ui5_input_placeholder_color: var(--sapField_PlaceholderTextColor);
	--_ui5_input_bottom_border_height: 0;
	--_ui5_input_bottom_border_color: transparent;
	--_ui5_input_focused_border_color: var(--sapField_Hover_BorderColor);
	--_ui5_input_state_border_width: 0.125rem;
	--_ui5_input_information_border_width: 0.125rem;
	--_ui5_input_error_font_weight: normal;
	--_ui5_input_warning_font_weight: normal;
	--_ui5_input_focus_border_width: 1px;
	--_ui5_input_error_warning_border_style: solid;
	--_ui5_input_error_warning_font_style: inherit;
	--_ui5_input_error_warning_text_indent: 0;
	--_ui5_input_disabled_color: var(--sapContent_DisabledTextColor);
	--_ui5_input_disabled_font_weight: normal;
	--_ui5_input_disabled_border_color: var(--sapField_BorderColor);
	--_ui5-input_disabled_background: var(--sapField_Background);
	--_ui5_input_readonly_border_color: var(--sapField_ReadOnly_BorderColor);
	--_ui5_input_readonly_background: var(--sapField_ReadOnly_Background);
	--_ui5_input_custom_icon_padding: .5625rem .625rem;
	--_ui5_input_error_warning_custom_icon_padding: .5rem .625rem;
	--_ui5_input_information_custom_icon_padding: .5rem .625rem;
	--_ui5_input_error_warning_icon_padding: .5rem .5rem .5rem .5625rem;
	--_ui5_input_information_icon_padding: .5rem .5rem .5rem .5625rem;
	--_ui5_input_disabled_opacity: var(--sapContent_DisabledOpacity);
	--_ui5_input_icon_min_width: 2.25rem;
	--_ui5_input_compact_min_width: 2rem;
	--_ui5_input_transition: none;
	--_ui5-input-value-state-icon-display: none;
	--_ui5_input_focused_value_state_error_background: var(--sapField_InvalidBackground);
	--_ui5_input_focused_value_state_warning_background: var(--sapField_WarningBackground);
	--_ui5_input_focused_value_state_success_background: var(--sapField_SuccessBackground);
	--_ui5_input_focused_value_state_information_background: var(--sapField_InformationBackground);
	--_ui5_input_value_state_error_border_color: var(--sapField_InvalidColor);
	--_ui5_input_focused_value_state_error_border_color: var(--sapField_InvalidColor);
	--_ui5_input_focused_value_state_error_focus_outline_color: var(--sapContent_FocusColor);
	--_ui5_input_focused_value_state_warning_focus_outline_color: var(--sapContent_FocusColor);
	--_ui5_input_focused_value_state_success_focus_outline_color: var(--sapContent_FocusColor);
	--_ui5_input_value_state_warning_border_color: var(--sapField_WarningColor);
	--_ui5_input_focused_value_state_warning_border_color: var(--sapField_WarningColor);
	--_ui5_input_value_state_success_border_color: var(--sapField_SuccessColor);
	--_ui5_input_focused_value_state_success_border_color: var(--sapField_SuccessColor);
	--_ui5_input_value_state_success_border_width: 1px;
	--_ui5_input_value_state_information_border_color: var(--sapField_InformationColor);
	--_ui5_input_focused_value_state_information_border_color: var(--sapField_InformationColor);
	--_ui5-input-value-state-information-border-width: 1px;
	--_ui5-input-background-image: none;
	--_ui5_input_focus_offset: 1px;
	--ui5_input_focus_pseudo_element_content: '';
	--_ui5_input_value_state_error_warning_placeholder_font_weight: normal;
	--_ui5_input_focus_outline_color: var(--sapContent_FocusColor);
	--_ui5-input_error_placeholder_color: var(--sapField_PlaceholderTextColor);
	--_ui5_input_icon_width: 2.25rem;
	--_ui5_input_icon_wrapper_height: 100%;
	--_ui5_input_icon_wrapper_state_height: 100%;
	--_ui5_input_icon_wrapper_success_state_height: 100%;
	--_ui5-input-icons-count: 0;
	--_ui5_input_margin_top_bottom: 0.1875rem;
	--_ui5_input_tokenizer_min_width: 3.25rem;
}

[data-ui5-compact-size][_ui5host], [data-ui5-compact-size] [_ui5host],
.ui5-content-density-compact[_ui5host], .ui5-content-density-compact [_ui5host],
.sapUiSizeCompact[_ui5host], .sapUiSizeCompact [_ui5host] {
	--_ui5_input_min_width: 2rem;
	--_ui5_input_icon_width: 2rem;
}

:root [_ui5host] {
	--_ui5-input-border: 1px solid var(--sapField_BorderColor);
}

:root [_ui5host] {
	--_ui5_input_icon_padding: .5625rem;
	--_ui5_input_icon_color: var(--sapContent_IconColor);
	--_ui5_input_icon_pressed_color: var(--sapButton_Active_TextColor);
	--_ui5_input_icon_pressed_bg: var(--sapButton_Selected_Background);
	--_ui5_input_icon_hover_bg: var(--sapButton_Lite_Hover_Background);
	--_ui5_input_icon_border_radius: 0;
	--_ui5_input_icon_box_shadow: none;
	--_ui5_input_icon_border: 1px solid transparent;
	--_ui5_input_error_icon_box_shadow: var(--_ui5_input_icon_box_shadow);
	--_ui5_input_warning_icon_box_shadow: var(--_ui5_input_icon_box_shadow);
	--_ui5_input_information_icon_box_shadow: var(--_ui5_input_icon_box_shadow);
	--_ui5_input_success_icon_box_shadow: var(--_ui5_input_icon_box_shadow);
	--_ui5_input_icon_error_pressed_color: var(--sapButton_Active_TextColor);
	--_ui5_input_icon_warning_pressed_color: var(--sapButton_Active_TextColor);
	--_ui5_input_icon_information_pressed_color: var(--sapButton_Active_TextColor);
	--_ui5_input_icon_success_pressed_color: var(--sapButton_Active_TextColor);

}

:root [_ui5host] {
	--_ui5_link_text_decoration: none;
	--_ui5_link_hover_text_decoration: underline;
	--_ui5_link_focused_hover_text_decoration: underline;
	--_ui5_link_focused_hover_text_color: var(--sapLinkColor);
	--_ui5_link_active_text_decoration: underline;
	--_ui5_link_border: 0.0625rem dotted transparent;
	--_ui5_link_border_focus: 0.0625rem dotted var(--sapContent_FocusColor);
	--_ui5_link_focus_border-radius: 0;
	--_ui5_link_focus_background_color: transparent;
	--_ui5_link_focus_color: var(--sapLinkColor);
	--_ui5_link_focus_text_decoration: underline;
	--_ui5_link_subtle_text_decoration: none;
	--_ui5_link_subtle_text_decoration_hover: underline;

}

:root [_ui5host] {
	--_ui5_link_text_decoration: none;
	--_ui5_link_hover_text_decoration: underline;
}

:root [_ui5host] {
	--ui5_list_footer_text_color: var(--sapPageFooter_TextColor);
}

:root [_ui5host] {
	--ui5_list_footer_text_color: var(--sapTextColor);
}

:root [_ui5host] {
	--ui5-listitem-background-color: var(--sapList_Background);
	--ui5-listitem-border-bottom: 1px solid var(--sapList_BorderColor);
	--ui5-listitem-selected-border-bottom: 1px solid var(--sapList_SelectionBorderColor);
	--ui5-listitem-focused-selected-border-bottom: 1px solid var(--sapList_SelectionBorderColor);
	--ui5-listitem-active-border-color: var(--sapContent_ContrastFocusColor);
	--ui5-listitem-padding: 0 1rem;
	--ui5-listitem-focus-border-radius: 0;
	--ui5-listitem-focus-offset: 0.125rem;
	--_ui5_listitembase_focus_width: 1px;
	--_ui5-listitembase_disabled_opacity: 0.5;
	--_ui5_product_switch_item_border: none;
}

:root [_ui5host] {
	--_ui5_menu_popover_border_radius: var(--sapElement_BorderCornerRadius);
	--_ui5_menu_item_padding: 0 1rem 0 0.75rem;
	--_ui5_menu_item_submenu_icon_right: 1rem;
	--_ui5_menu_item_additional_text_start_margin: 1rem;
}

:root [_ui5host] {
	--_ui5_monthpicker_item_border_radius: 0;
	--_ui5_monthpicker_item_border: none;
	--_ui5_monthpicker_item_margin: 1px;
	--_ui5_monthpicker_item_focus_after_width: calc(100% - 0.375rem);
	--_ui5_monthpicker_item_focus_after_height: calc(100% - 0.375rem);
	--_ui5_monthpicker_item_focus_after_border: 1px dotted var(--sapContent_FocusColor);
	--_ui5_monthpicker_item_focus_after_offset: 2px;
	--_ui5_monthpicker_item_focus_after_border_radius: 0;
	--_ui5_monthpicker_item_selected_text_color: var(--sapContent_ContrastTextColor);
	--_ui5_monthpicker_item_selected_background_color: var(--sapSelectedColor);
	--_ui5_monthpicker_item_selected_hover_color: var(--sapContent_Selected_Background);
	--_ui5_monthpicker_item_selected_box_shadow: none;
	--_ui5_monthpicker_item_focus_after_outline: none;
	--_ui5_monthpicker_item_selected_font_wieght: inherit;
}

:root [_ui5host] {
	--_ui5_monthpicker_item_border_radius: 0.25rem;
}

:root [_ui5host]{
	--_ui5_message_strip_icon_width: 2.5rem;
	--_ui5_message_strip_button_border_width: 0;
	--_ui5_message_strip_button_border_style: none;
	--_ui5_message_strip_button_border_color: transparent;
	--_ui5_message_strip_button_border_radius: 0;
	--_ui5_message_strip_padding: 0.4375rem 2.5rem 0.4375rem 2.5rem;
	--_ui5_message_strip_padding_block_no_icon: 0.4375rem 0.4375rem;
	--_ui5_message_strip_padding_inline_no_icon: 1rem 2.5rem;
	--_ui5_message_strip_button_height: 1.625rem;
	--_ui5_message_strip_border_width: 1px;
	--_ui5_message_strip_close_button_border: none;
	--_ui5_message_strip_icon_top: 0.4375rem;
	--_ui5_message_strip_focus_width: 1px;
	--_ui5_message_strip_focus_offset: -2px;
	--_ui5_message_strip_close_button_top: 0.125rem;
	--_ui5_message_strip_close_button_right: 0.125rem;
}

:root [_ui5host] {
	--_ui5_panel_focus_border:   var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	--_ui5_panel_button_root_width: 3rem;
	--_ui5_panel_border_radius: 0px;
	--_ui5_panel_border_radius_expanded: 0;
	--_ui5_panel_default_header_border: none;
	--_ui5_panel_border_bottom: 0.0625rem solid var(--sapGroup_TitleBorderColor);
	--_ui5_panel_outline_offset: -3px;
	--_ui5_panel_icon_color: var(--sapContent_IconColor);
	--_ui5_panel_header_padding_right: 0.5rem;
	--_ui5_panel_header_button_wrapper_padding: .25rem;
	--_ui5_panel_focus_offset: 1px;
	--_ui5_panel_content_padding: 0.625rem 1rem 1.375rem 1rem
}

[data-ui5-compact-size][_ui5host], [data-ui5-compact-size] [_ui5host],
.ui5-content-density-compact[_ui5host], .ui5-content-density-compact [_ui5host],
.sapUiSizeCompact[_ui5host], .sapUiSizeCompact [_ui5host] {
	--_ui5_panel_header_button_wrapper_padding: .5625rem .375rem;
}

:root [_ui5host] {
	--_ui5_panel_button_root_width: 2.75rem;
}

:root [_ui5host] {
	--_ui5_popover_background: var(--sapGroup_ContentBackground);
	--_ui5_popover_box_shadow: var(--sapContent_Shadow2);
	--_ui5_popover_no_arrow_box_shadow: var(--sapContent_Shadow1);
}

:root [_ui5host] {
	--_ui5_popup_content_padding_s: 1rem;
	--_ui5_popup_content_padding_m_l: 2rem;
	--_ui5_popup_content_padding_xl: 3rem;
	--_ui5_popup_header_footer_padding_s: 1rem;
	--_ui5_popup_header_footer_padding_m_l: 2rem;
	--_ui5_popup_header_footer_padding_xl: 3rem;
	--_ui5_popup_viewport_margin: 10px;
	--_ui5_popup_header_font_weight: 400;
	--_ui5_popup_header_font_family: var(--sapFontFamily);
	--_ui5_popup_header_prop_header_text_alignment: flex-start;
	--_ui5_popup_border_radius: var(--sapElement_BorderCornerRadius);
}

:root [_ui5host] {
    --_ui5_progress_indicator_background_none: var(--sapField_Background);
    --_ui5_progress_indicator_background_error: var(--sapField_Background);
    --_ui5_progress_indicator_background_warning: var(--sapField_Background);
    --_ui5_progress_indicator_background_success: var(--sapField_Background);
    --_ui5_progress_indicator_background_information: var(--sapField_Background);
    --_ui5_progress_indicator_value_state_none: var(--sapNeutralElementColor);
    --_ui5_progress_indicator_value_state_error: var(--sapNegativeElementColor);
    --_ui5_progress_indicator_value_state_warning: var(--sapCriticalElementColor);
    --_ui5_progress_indicator_value_state_success: var(--sapPositiveElementColor);
    --_ui5_progress_indicator_value_state_information: var(--sapInformativeElementColor);
    --_ui5_progress_indicator_border_color_error: var(--sapField_BorderColor);
    --_ui5_progress_indicator_border_color_warning: var(--sapField_BorderColor);
    --_ui5_progress_indicator_border_color_success: var(--sapField_BorderColor);
    --_ui5_progress_indicator_border_color_information: var(--sapField_BorderColor);
    --_ui5_progress_indicator_color: var(--sapTextColor);
    --_ui5_progress_indicator_bar_color: var(--sapContent_ContrastTextColor);
    --_ui5_progress_indicator_border: 0.0625rem solid var(--sapField_BorderColor);
    --_ui5_progress_indicator_bar_border_max: none;
    --_ui5_progress_indicator_icon_visibility: none;

    --_ui5_progress_indicator_side_points_visibility: none;

    --_ui5_progress_indicator_host_height: 1rem;
    --_ui5_progress_indicator_host_min_height: 1rem;
    --_ui5_progress_indicator_root_border_radius: 0.5rem;
    --_ui5_progress_indicator_root_height: 100%;
    --_ui5_progress_indicator_root_overflow: hidden;
    
    --_ui5_progress_indicator_bar_height: 100%;
    --_ui5_progress_indicator_bar_border_radius: 0.5rem 0 0 0.5rem;

    --_ui5_progress_indicator_remaining_bar_overflow: hidden;

    --_ui5_progress_indicator_icon_size: var(--sapFontSmallSize);

    --_ui5_progress_indicator_value_margin: 0 0.375rem;
}

:root [_ui5host] {
	--_ui5_radio_button_min_width: 2.75rem;
	--_ui5_radio_button_min_width_compact: 2rem;
	--_ui5_radio_button_hover_fill: var(--sapField_Hover_Background);
	--_ui5_radio_button_hover_fill_error: var(--sapField_Hover_Background);
	--_ui5_radio_button_hover_fill_warning: var(--sapField_Hover_Background);
	--_ui5_radio_button_hover_fill_success: var(--sapField_Hover_Background);
	--_ui5_radio_button_hover_fill_information: var(--sapField_Hover_Background);
	--_ui5_radio_button_border_width: 1px;
	--_ui5_radio_button_checked_fill: var(--sapSelectedColor);
	--_ui5_radio_button_checked_error_fill: var(--sapField_InvalidColor);
	--_ui5_radio_button_checked_warning_fill: var(--sapField_TextColor);
	--_ui5_radio_button_checked_success_fill: var(--sapField_SuccessColor);
	--_ui5_radio_button_checked_information_fill: var(--sapField_InformationColor);
	--_ui5_radio_button_warning_error_border_dash: 0;
	--_ui5_radio_button_outer_ring_color: var(--sapField_BorderColor);
	--_ui5_radio_button_outer_ring_width: var(--sapField_BorderWidth);
	--_ui5_radio_button_outer_ring_bg: var(--sapField_Background);
	--_ui5_radio_button_outer_ring_hover_color: var(--sapField_Hover_BorderColor);
	--_ui5_radio_button_outer_ring_active_color: var(--sapField_Hover_BorderColor);
	--_ui5_radio_button_outer_ring_checked_hover_color: var(--sapField_Hover_BorderColor);
	--_ui5_radio_button_outer_ring_padding: 0 0.625rem;
	--_ui5_radio_button_border_radius: 0;
	--_ui5_radio_button_border: none;
	--_ui5_radio_button_focus_border: none;
	--_ui5_radio_button_focus_outline: block;
	--_ui5_radio_button_hover_shadow: none;
	--_ui5_radio_button_transition: none;
	--_ui5_radio_button_hover_background: inherit;
	--_ui5_radio_button_color: var(--sapField_BorderColor);
	--_ui5_radio_button_label_offset: 1px;
	--_ui5_radio_button_label_color: var(--sapContent_LabelColor);
	--_ui5_radio_button_items_align: unset;
	--_ui5_radio_button_inner_width: initial;
	--_ui5_radio_button_border_readonly_focus_style: var(--sapContent_FocusStyle);
	--_ui5_radio_button_inner_ring_radius: 22%;
	--_ui5_radio_button_outer_ring_hover_shadow: none;
	--_ui5_radio_button_outer_ring_hover_shadow_error: none;
	--_ui5_radio_button_outer_ring_hover_shadow_warning: none;
	--_ui5_radio_button_outer_ring_hover_shadow_success: none;
	--_ui5_radio_button_outer_ring_hover_shadow_information: none;
	--_ui5_radio_button_read_only_border_type: none;
	--_ui5_radio_button_inner_ring_color: var(--sapSelectedColor);
	--_ui5_radio_button_information_border_width: var(--sapField_InformationBorderWidth);
	--_ui5_radio_button_read_only_border_width: var(--sapField_BorderWidth);
	--_ui5_radio_button_read_only_inner_ring_color: var(--sapContent_NonInteractiveIconColor);
}

:root [_ui5host] {
	--_ui5_rating_indicator_border_radius: 0px;
	--_ui5_rating_indicator_outline_offset: 0px;
	--_ui5_rating_indicator_item_height: 1em;
	--_ui5_rating_indicator_item_width: 1em;
	--_ui5_rating_indicator_readonly_item_height: 1em;
	--_ui5_rating_indicator_readonly_item_width: 1em;
	--_ui5_rating_indicator_readonly_item_spacing: 0px;
	--_ui5_rating_indicator_component_spacing: 0.5rem 0px;
}

[data-ui5-compact-size][_ui5host], [data-ui5-compact-size] [_ui5host],
.ui5-content-density-compact[_ui5host], .ui5-content-density-compact [_ui5host],
.sapUiSizeCompact[_ui5host], .sapUiSizeCompact [_ui5host] {
	--_ui5_rating_indicator_item_height: 0.67em;
	--_ui5_rating_indicator_item_width: 0.67em;
	--_ui5_rating_indicator_readonly_item_height: 0.67em;
	--_ui5_rating_indicator_readonly_item_width: 0.67em;
	--_ui5_rating_indicator_component_spacing: 0.8125rem 0px;
}

:root [_ui5host] {
	--_ui5_segmented_btn_inner_border: 0.0625rem solid var(--sapButton_BorderColor);
	--_ui5_segmented_btn_inner_border_odd_child: 0;
	--_ui5_segmented_btn_inner_pressed_border_odd_child: 0;
	--_ui5_segmented_btn_border_radius: 0.375rem;
	--_ui5_segmented_btn_inner_border_radius: 0;
	--_ui5_segmented_btn_outer_border_radius: 0.375rem;
	--_ui5_segmented_btn_background_color: transparent;
}

:root [_ui5host] {
	--_ui5_select_disabled_background: var(--sapField_Background);
	--_ui5_select_disabled_border_color: var(--sapField_BorderColor);
	--_ui5_select_state_error_warning_border_style: solid;
	--_ui5_select_state_error_warning_border_width: 0.125rem;
	--_ui5_select_hover_icon_left_border: 1px solid transparent;
	--_ui5_select_focus_width: 1px;
	--_ui5_select_label_color: var(--sapField_TextColor);
}

:root [_ui5host] {
	--_ui5_split_button_focused_border: 0.0625rem dotted var(--sapContent_FocusColor);
	--_ui5_split_button_focused_border_radius: 0.125rem;
	--_ui5_split_button_hover_border_radius: 0;
	--_ui5_split_button_hover_border_radius: 0;
	--_ui5_split_button_attention_separator_color: var(--sapButton_Attention_BorderColor);
	--_ui5_split_button_middle_separator_width: 0;
	--_ui5_split_button_middle_separator_left: 0;
	--_ui5_split_button_middle_separator_hover_display: block;
	--_ui5_split_button_text_button_width: 2.25rem;
	--_ui5_split_button_text_button_right_border_width: 0;
	--_ui5_split_button_transparent_hover_background: var(--sapButton_Lite_Background);
	--_ui5_split_button_transparent_hover_color: var(--sapButton_Lite_TextColor);
	--_ui5_split_button_transparent_disabled_background: transparent;
	--_ui5_split_button_inner_focused_border_radius_outer: 0.25rem;
	--_ui5_split_button_inner_focused_border_radius_inner: 0;
}

:root [_ui5host] {
	/* switch */
	--_ui5_switch_height: 2.75rem;
	--_ui5_switch_width: 3.25rem;

	--_ui5_switch_min_width: 3.875rem;

	--_ui5_switch_with_label_width: 100%;

	--_ui5_switch_focus_outline: var(--_ui5_switch_foucs_border_size) dotted var(--sapContent_FocusColor);

	--_ui5_switch_root_outline_top: 0.25rem;
	--_ui5_switch_root_outline_bottom: 0.25rem;
	--_ui5_switch_root_outline_left: 0;
	--_ui5_switch_root_outline_right: 0;

	--_ui5_switch_foucs_border_size: 1px;

	--_ui5-switch-root-border-radius: 0;
	--_ui5-switch-root-box-shadow: none;
	--_ui5_switch_root_after_outline: none;

	--_ui5-switch-focus: "";
	--_ui5_switch_disabled_opacity: .4;

	--_ui5_switch_transform: translateX(100%) translateX(-1.875rem);
	--_ui5_switch_transform_with_label: translateX(100%) translateX(-1.875rem);

	--_ui5_switch_rtl_transform: translateX(-100%) translateX(1.875rem);
	--_ui5_switch_rtl_transform_with_label: translateX(-100%) translateX(1.875rem);

	/* switch track */
	--_ui5_switch_track_with_label_width: 100%;
	--_ui5_switch_track_with_label_height: 1.375rem;

	--_ui5_switch_track_width: 100%;
	--_ui5_switch_track_height: 1.375rem;

	--_ui5_switch_track_border_radius: 0.75rem;
	--_ui5-switch-track-border: 1px solid;

	--_ui5_switch_track_active_background_color: var(--sapButton_Track_Selected_Background);
	--_ui5_switch_track_inactive_background_color: var(--sapButton_Track_Background);
	--_ui5_switch_track_hover_active_background_color: var(--sapButton_Track_Selected_Background);
	--_ui5_switch_track_hover_inactive_background_color: var(--sapButton_Track_Background);

	--_ui5_switch_track_active_border_color: var(--sapContent_ForegroundBorderColor);
	--_ui5_switch_track_inactive_border_color: var(--sapContent_ForegroundBorderColor);
	--_ui5_switch_track_hover_active_border_color: var(--sapButton_Hover_BorderColor);
	--_ui5_switch_track_hover_inactive_border_color: var(--sapButton_Hover_BorderColor);

	--_ui5_switch_track_semantic_accept_background_color: var(--sapSuccessBackground);
	--_ui5_switch_track_semantic_reject_background_color: var(--sapErrorBackground);
	--_ui5_switch_track_semantic_hover_accept_background_color: var(--sapSuccessBackground);
	--_ui5_switch_track_semantic_hover_reject_background_color: var(--sapErrorBackground);

	--_ui5_switch_track_semantic_accept_border_color: var(--sapSuccessBorderColor);
	--_ui5_switch_track_semantic_reject_border_color: var(--sapErrorBorderColor);
	--_ui5_switch_track_semantic_hover_accept_border_color: var(--sapSuccessBorderColor);
	--_ui5_switch_track_semantic_hover_reject_border_color: var(--sapErrorBorderColor);
	
	--_ui5_switch_track_transition: none;
	--_ui5_switch_track_icon_display: none;

	/* switch handle */
	--_ui5_switch_handle_width: 2rem;

	--_ui5_switch_handle_height: 2rem;

	--_ui5_switch_handle_with_label_width: 2rem;

	--_ui5_switch_handle_with_label_height: 2rem;

	--_ui5_switch_handle_border: var(--_ui5_switch_handle_border_width) solid var(--sapButton_Handle_BorderColor);
	--_ui5_switch_handle_border_width: 0.0625rem;
	--_ui5_switch_handle_border_radius: 1rem;

	--_ui5_switch_handle_active_background_color: var(--sapButton_Selected_Background);
	--_ui5_switch_handle_inactive_background_color: var(--sapButton_TokenBackground);
	--_ui5_switch_handle_hover_active_background_color: var(--sapButton_Selected_Hover_Background);
	--_ui5_switch_handle_hover_inactive_background_color: var(--sapButton_Handle_Hover_Background);

	--_ui5_switch_handle_active_border_color: var(--sapButton_Selected_BorderColor);
	--_ui5_switch_handle_inactive_border_color: var(--sapContent_ForegroundBorderColor);
	--_ui5_switch_handle_hover_active_border_color: var(--sapButton_Selected_BorderColor);
	--_ui5_switch_handle_hover_inactive_border_color: var(--sapButton_Hover_BorderColor);

	--_ui5_switch_handle_semantic_accept_background_color: var(--sapButton_Background);
	--_ui5_switch_handle_semantic_reject_background_color: var(--sapButton_Background);
	--_ui5_switch_handle_semantic_hover_accept_background_color: var(--sapSuccessBackground);
	--_ui5_switch_handle_semantic_hover_reject_background_color: var(--sapErrorBackground);

	--_ui5_switch_handle_semantic_accept_border_color: var(--sapSuccessBorderColor);
	--_ui5_switch_handle_semantic_reject_border_color: var(--sapErrorBorderColor);
	--_ui5_switch_handle_semantic_hover_accept_border_color: var(--sapSuccessBorderColor);
	--_ui5_switch_handle_semantic_hover_reject_border_color: var(--sapErrorBorderColor);

	--_ui5_switch_handle_on_hover_box_shadow: none;
	--_ui5_switch_handle_off_hover_box_shadow: none;
	--_ui5_switch_handle_semantic_on_hover_box_shadow: var(--sapContent_Informative_Shadow);
	--_ui5_switch_handle_semantic_off_hover_box_shadow: var(--sapContent_Negative_Shadow);

	--_ui5-switch-handle-icon-display: none;
	--_ui5_switch_handle_left: -0.0625rem;
	--_ui5-switch-slider-texts-display: inline;

	/* switch text */
	--_ui5_switch_text_font_family: "72override", var(--sapFontFamily);
	--_ui5_switch_text_font_size: var(--sapFontSmallSize);

	--_ui5_switch_text_with_label_font_family: "72override", var(--sapFontFamily);
	--_ui5_switch_text_with_label_font_size: var(--sapFontSmallSize);

	--_ui5_switch_text_with_label_width: none;

	--_ui5_switch_text_width: none;

	--_ui5_switch_text_inactive_left: auto;
	--_ui5_switch_text_inactive_right: 0.125rem;
	--_ui5_switch_text_active_left: calc(-100% + 2rem);
	--_ui5_switch_text_active_right: auto;

	--_ui5_switch_text_active_color: var(--sapButton_Track_Selected_TextColor);
	--_ui5_switch_text_inactive_color: var(--sapTextColor);

	--_ui5_switch_text_semantic_accept_color: var(--sapPositiveElementColor);
	--_ui5_switch_text_semantic_reject_color: var(--sapNegativeElementColor);

	--_ui5_switch_text_overflow: none;
	--_ui5_switch_text_z_index: inherit;
	--_ui5_switch_text_hidden: hidden;
	--_ui5_switch_text_min_width: 1.625rem;

	--_ui5_switch_icon_width: 0.75rem;
	--_ui5_switch_icon_height: 0.75rem;
}

[data-ui5-compact-size][_ui5host], [data-ui5-compact-size] [_ui5host],
.ui5-content-density-compact[_ui5host], .ui5-content-density-compact [_ui5host],
.sapUiSizeCompact[_ui5host], .sapUiSizeCompact [_ui5host] {
	--_ui5_switch_height: 2rem;
	--_ui5_switch_width: 2.5rem;
	--_ui5_switch_with_label_width: 100%;
	--_ui5_switch_root_outline_top: 0;
	--_ui5_switch_root_outline_bottom: 0;
	--_ui5_switch_transform: translateX(100%) translateX(-1.5rem);
	--_ui5_switch_transform_with_label: translateX(100%) translateX( -1.5rem);
	--_ui5_switch_rtl_transform: translateX(1.5rem) translateX(-100%);
	--_ui5_switch_rtl_transform_with_label: translateX(1.5rem) translateX(-100%);
	--_ui5_switch_track_with_label_width: 100%;
	--_ui5_switch_track_with_label_height: 1.375rem;
	--_ui5_switch_track_width: 100%;
	--_ui5_switch_track_height: 1.375rem;
	--_ui5_switch_handle_width: 1.625rem;
	--_ui5_switch_handle_height: 1.625rem;
	--_ui5_switch_handle_with_label_width: 1.625rem;
	--_ui5_switch_handle_with_label_height: 1.625rem;
	--_ui5_switch_text_font_size: var(--sapFontSmallSize);
	--_ui5_switch_text_width: none;
	--_ui5_switch_text_active_left: calc(-100% + 1.625rem);
}

:root [_ui5host] {
	/* Header */
	--_ui5_tc_header_height: var(--_ui5_tc_item_height);
	--_ui5_tc_header_height_text_only: var(--_ui5_tc_item_text_only_height);
	--_ui5_tc_header_height_text_with_additional_text: var(--_ui5_tc_item_text_only_with_additional_text_height);
	--_ui5_tc_header_box_shadow: var(--sapContent_HeaderShadow);
	--_ui5_tc_header_border_bottom: 0.125rem solid var(--sapObjectHeader_Background);
	--_ui5_tc_header_background: var(--sapObjectHeader_Background);
	--_ui5_tc_header_background_translucent: var(--sapObjectHeader_Background);
	--_ui5_tc_content_background: var(--sapBackgroundColor);
	--_ui5_tc_content_background_translucent: var(--sapGroup_ContentBackground);

	/* Header Item */
	--_ui5_tc_headeritem_padding: 0 1rem;
	--_ui5_tc_headerItem_color: var(--sapContent_LabelColor);
	--_ui5_tc_headerItem_additional_text_color: var(--sapContent_LabelColor);
	--_ui5_tc_headerItem_text_hover_color: var(--_ui5_tc_headerItem_color);
	--_ui5_tc_headerItem_text_selected_color: var(--sapSelectedColor);
	--_ui5_tc_headerItem_text_selected_hover_color: var(--sapSelectedColor);
	--_ui5_tc_headeritem_text_font_weight: normal;
	--_ui5_tc_headerItem_additional_text_font_weight: normal;
	--_ui5_tc_headerItem_neutral_color: var(--sapNeutralColor);
	--_ui5_tc_headerItem_positive_color: var(--sapPositiveColor);
	--_ui5_tc_headerItem_negative_color: var(--sapNegativeColor);
	--_ui5_tc_headerItem_critical_color: var(--sapCriticalColor);
	--_ui5_tc_headerItem_neutral_border_color: var(--_ui5_tc_headerItem_neutral_color);
	--_ui5_tc_headerItem_positive_border_color: var(--_ui5_tc_headerItem_positive_color);
	--_ui5_tc_headerItem_negative_border_color: var(--_ui5_tc_headerItem_negative_color);
	--_ui5_tc_headerItem_critical_border_color: var(--_ui5_tc_headerItem_critical_color);
	--_ui5_tc_headerItem_neutral_selected_border_color: var(--_ui5_tc_headerItem_neutral_color);
	--_ui5_tc_headerItem_positive_selected_border_color: var(--_ui5_tc_headerItem_positive_color);
	--_ui5_tc_headerItem_negative_selected_border_color: var(--_ui5_tc_headerItem_negative_color);
	--_ui5_tc_headerItem_critical_selected_border_color: var(--_ui5_tc_headerItem_critical_color);
	--_ui5_tc_headerItem_transition: none;
	--_ui5_tc_headerItem_hover_border_visibility: hidden;
	--_ui5_tc_headerItem_focus_offset: 0px;

	--_ui5_tc_headerItemContent_border_radius: 0.125rem 0.125rem 0 0;
	--_ui5_tc_headerItemContent_border_bottom: 0.125rem solid var(--sapSelectedColor);
	--_ui5_tc_headerItemContent_border_bg: transparent;
	--_ui5_tc_headerItem_neutral_border_bg: transparent;
	--_ui5_tc_headerItem_positive_border_bg: transparent;
	--_ui5_tc_headerItem_negative_border_bg: transparent;
	--_ui5_tc_headerItem_critical_border_bg: transparent;
	--_ui5_tc_headerItem_hover_border_bg: transparent;
	--_ui5_tc_headerItem_hover_selected_hover_border_bg: transparent;
	--_ui5_tc_headerItemContent_border_height: 0;
	--_ui5_tc_headerItemContent_offset: 1rem;
	--_ui5_tc_headerItemContent_focus_offset: 1rem;
	--_ui5_tc_headerItem_focus_border: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	--_ui5_tc_headerItem_text_focus_border_offset_left: 0px;
	--_ui5_tc_headerItem_text_focus_border_offset_right: 0px;
	--_ui5_tc_headerItem_text_focus_border_offset_top: 0px;
	--_ui5_tc_headerItem_text_focus_border_offset_bottom: 0px;
	--_ui5_tc_headerItem_mixed_mode_focus_border_offset_left: 0.75rem;
	--_ui5_tc_headerItem_mixed_mode_focus_border_offset_right: 	0.625rem;
	--_ui5_tc_headerItem_mixed_mode_focus_border_offset_top: 0.75rem;
	--_ui5_tc_headerItem_mixed_mode_focus_border_offset_bottom: 0.75rem;
	--_ui5_tc_headerItemContent_padding: 0;
	--_ui5_tc_headerItemContent_focus_border: none;
	--_ui5_tc_headerItemContent_default_focus_border: none;
	--_ui5_tc_headerItemContent_focus_border_radius: 0;
	--_ui5_tc_headerItemSemanticIcon_display: none;
	--_ui5_tc_headerItemSemanticIcon_size: 0.75rem;
	--_ui5_tc_headerItem_focus_border_radius: 0px;
	--_ui5_tc_mixedMode_itemText_color: var(--sapContent_LabelColor);
	--_ui5_tc_mixedMode_itemText_font_family: var(--sapFontFamily);
	--_ui5_tc_mixedMode_itemText_font_size:  var(--sapFontSmallSize);
	--_ui5_tc_mixedMode_itemText_font_weight: normal;

	/* Overflow Item */

	--_ui5_tc_overflowItem_neutral_color: var(--sapNeutralColor);
	--_ui5_tc_overflowItem_positive_color: var(--sapPositiveColor);
	--_ui5_tc_overflowItem_negative_color: var(--sapNegativeColor);
	--_ui5_tc_overflowItem_critical_color: var(--sapCriticalColor);
	--_ui5_tc_overflowItem_focus_offset: 0.125rem;
	--_ui5_tc_overflowItem_extraIndent: 0rem;

	/* Header Item icons */
	--_ui5_tc_headerItemIcon_border: 1px solid var(--sapHighlightColor);
	--_ui5_tc_headerItemIcon_color: var(--sapHighlightColor);
	--_ui5_tc_headerItemIcon_selected_background: var(--sapHighlightColor);
	--_ui5_tc_headerItemIcon_selected_color: var(--sapGroup_ContentBackground);
	--_ui5_tc_headerItemIcon_positive_selected_background: var(--sapPositiveColor);
	--_ui5_tc_headerItemIcon_negative_selected_background: var(--sapNegativeColor);
	--_ui5_tc_headerItemIcon_critical_selected_background: var(--sapCriticalColor);
	--_ui5_tc_headerItemIcon_neutral_selected_background: var(--sapNeutralColor);
	--_ui5_tc_headerItemIcon_semantic_selected_color: var(--sapGroup_ContentBackground);
	--_ui5_tc_headerItemIcon_background_color: transparent;

	--_ui5_tc_overflowItem_default_color: var(--sapNeutralTextColor);
	--_ui5_tc_overflowItem_current_color: CurrentColor;
	--_ui5_tc_content_border_bottom: 0.125rem solid var(--sapObjectHeader_BorderColor);

	--_ui5_tc_headerItem_focus_border_offset: -2px;
	--_ui5_tc_headerItemIcon_focus_border_radius: 0;
}

[data-ui5-compact-size][_ui5host], [data-ui5-compact-size] [_ui5host],
.ui5-content-density-compact[_ui5host], .ui5-content-density-compact [_ui5host],
.sapUiSizeCompact[_ui5host], .sapUiSizeCompact [_ui5host] {
	--_ui5_tc_header_height: var(--_ui5_tc_item_height);
}

:root [_ui5host] {
	--_ui5_tc_header_border_bottom: 0.0625rem solid var(--sapObjectHeader_Background);

	/* Header Item */
	--_ui5_tc_headerItemContent_border_bottom: 0.1875rem solid var(--sapSelectedColor);

	--_ui5_tc_overflowItem_default_color: var(--sapNeutralTextColor);
	--_ui5_tc_overflowItem_current_color: CurrentColor;
	--_ui5_tc_content_border_bottom: 0.0625rem solid var(--sapObjectHeader_BorderColor);
	--_ui5_tc_headerItem_text_hover_color: #1a1c1f;
}

:root [_ui5host] {
	--_ui5_textarea_state_border_width: 0.125rem;
	--_ui5_textarea_information_border_width: 0.125rem;
	--_ui5_textarea_placeholder_font_style: italic;
	--_ui5_textarea_value_state_error_warning_placeholder_font_weight: normal;
	--_ui5_textarea_error_placeholder_font_style: italic;
	--_ui5_textarea_error_placeholder_color: var(--sapField_PlaceholderTextColor);
	--_ui5_textarea_error_hover_background_color: var(--sapField_Hover_Background);
	--_ui5_textarea_hover_border: var(--sapField_BorderWidth) var(--sapField_BorderStyle) var(--sapField_Hover_BorderColor);
	--_ui5_textarea_error_warning_border_style: solid;
	--_ui5_textarea_disabled_opacity: 0.4;
	--_ui5_textarea_line_height: 1.4;
	--_ui5_textarea_focus_pseudo_element_content: '';
	--_ui5_textarea_focused_value_state_error_background: var(--sapField_InvalidBackground);
	--_ui5_textarea_focused_value_state_warning_background: var(--sapField_WarningBackground);
	--_ui5_textarea_focused_value_state_success_background: var(--sapField_SuccessBackground);
	--_ui5_textarea_focused_value_state_information_background: var(--sapField_InformationBackground);
	--_ui5_textarea_focused_value_state_error_focus_outline_color: var(--sapContent_FocusColor);
	--_ui5_textarea_focused_value_state_warning_focus_outline_color: var(--sapContent_FocusColor);
	--_ui5_textarea_focused_value_state_success_focus_outline_color: var(--sapContent_FocusColor);
	--_ui5_textarea_focus_offset: 1px;
	--_ui5_textarea_readonly_focus_offset: 1px;
	--_ui5_textarea_value_state_focus_offset: 1px;
	--_ui5_textarea_focus_outline_color: var(--sapContent_FocusColor);
	--__ui5_textarea_min_height: 2.25rem;
	--_ui5_textarea_padding_right_and_left: 0.5625rem;
	--_ui5_textarea_padding_right_and_left_error_warning: 0.5rem;
	--_ui5_textarea_padding_right_and_left_information: 0.5rem;
	--_ui5_textarea_padding_right_and_left_readonly: 0.5625rem;
	--_ui5_textarea_padding_top: 0.4375rem;
	--_ui5_textarea_padding_bottom: 0.4375rem;
	--_ui5_textarea_padding_top_readonly: 0.4375rem;
	--_ui5_textarea_padding_bottom_readonly:0.4375rem;
	--_ui5_textarea_padding_top_error_warning: 0.375rem;
	--_ui5_textarea_padding_bottom_error_warning: 0.375rem;
	--_ui5_textarea_padding_top_information: 0.375rem;
	--_ui5_textarea_padding_bottom_information: 0.375rem;
	--_ui5_textarea_margin: 0.25rem 0;
	--_ui5_textarea_exceeded_text_height: 1rem;
	--_ui5_textarea_readonly_border_style: var(--sapField_BorderStyle);
}

[data-ui5-compact-size][_ui5host], [data-ui5-compact-size] [_ui5host],
.ui5-content-density-compact[_ui5host], .ui5-content-density-compact [_ui5host],
.sapUiSizeCompact[_ui5host], .sapUiSizeCompact [_ui5host] {
	--_ui5_textarea_padding_right_and_left: 0.4375rem;
	--_ui5_textarea_padding_right_and_left_error_warning: 0.375rem;
	--_ui5_textarea_padding_right_and_left_information: 0.375rem;
	--_ui5_textarea_padding_right_and_left_readonly: 0.4375rem;
	--_ui5_textarea_padding_top: 0.125rem;
	--_ui5_textarea_padding_bottom: 0.125rem;
	--_ui5_textarea_padding_top_readonly: 0.125rem;
	--_ui5_textarea_padding_bottom_readonly: 0.125rem;
	--_ui5_textarea_padding_top_error_warning: 0.0625rem;
	--_ui5_textarea_padding_bottom_error_warning: 0.0625rem;
	--_ui5_textarea_padding_top_information: 0.0625rem;
	--_ui5_textarea_padding_bottom_information: 0.0625rem;
	--_ui5_textarea_exceeded_text_height: 0.375rem;
	--_ui5_textarea_margin: 0.1875rem 0;
	--__ui5_textarea_min_height: 1.625rem;
}

:root [_ui5host] {
	--_ui5_time_picker_border: 0.0625rem solid transparent;
	--_ui5-time_picker_border_radius: 0;
}

:root [_ui5host] {
	--_ui5_time_picker_border: 0.0625rem solid transparent;
}

:root [_ui5host] {
	--_ui5_toast_vertical_offset: 3rem;
	--_ui5_toast_horizontal_offset: 2rem;
	--_ui5_toast_background: var(--sapList_Background);
	--_ui5_toast_shadow: var(--sapContent_Shadow2);
}

:root [_ui5host]{
	--_ui5_wheelslider_item_text_size: var(--sapFontSize);
	--_ui5_wheelslider_selected_item_hover_background_color: var(--sapList_BorderColor);
	--_ui5_wheelslider_label_text_size: var(--sapFontSmallSize);
	--_ui5_wheelslider_selection_frame_margin_top: calc(var(--_ui5_wheelslider_item_height) * 2);
	--_ui5_wheelslider_mobile_selection_frame_margin_top: calc(var(--_ui5_wheelslider_item_height) * 4);
	--_ui5_wheelslider_label_text_color: var(--sapContent_LabelColor);
	--_ui5_wheelslider_height: 240px;
	--_ui5_wheelslider_mobile_height: 432px;
	--_ui5_wheelslider_item_width: 48px;
	--_ui5_wheelslider_item_height: 46px;
	--_ui5_wheelslider_arrows_visibility: hidden;
	--_ui_wheelslider_item_hover_color: var(--sapButton_Emphasized_Hover_BorderColor);
	--_ui_wheelslider_item_expanded_hover_color: var(--sapList_Hover_Background);
}

:root [_ui5host]{
	--_ui5_wheelslider_item_background_color: var(--sapLegend_WorkingBackground);
	--_ui5_wheelslider_item_text_color: var(--sapTextColor);
	--_ui_wheelslider_item_hover_color: var(--sapButton_Emphasized_Hover_BorderColor);
	--_ui5_wheelslider_item_border_color: var(--sapList_Background);
	--_ui5_wheelslider_item_hovered_border_color: var(--sapList_Background);
	--_ui5_wheelslider_collapsed_item_text_color: var(--_ui5_wheelslider_item_border_color);
	--_ui5_wheelslider_selected_item_background_color: var(--sapContent_Selected_Background);
	--_ui5_wheelslider_selected_item_hover_background_color: var(--sapButton_Emphasized_Hover_BorderColor);
	--_ui5_wheelslider_active_item_background_color:var(--sapContent_Selected_Background);
	--_ui5_wheelslider_active_item_text_color: var(--sapContent_Selected_TextColor);
	--_ui5_wheelslider_selection_frame_color: var(--sapList_SelectionBorderColor);
	--_ui_wheelslider_item_border_radius: var(--_ui5_button_border_radius);
}

:root [_ui5host] {
	--_ui5_toggle_button_pressed_focussed: var(--sapButton_Selected_BorderColor);
	--_ui5_toggle_button_pressed_focussed_hovered: var(--sapButton_Selected_BorderColor);
	--_ui5_toggle_button_selected_positive_text_color: var(--sapButton_Selected_TextColor);
	--_ui5_toggle_button_selected_negative_text_color: var(--sapButton_Selected_TextColor);
	--_ui5_toggle_button_selected_attention_text_color: var(--sapButton_Selected_TextColor);
	--_ui5_toggle_button_emphasized_pressed_focussed_hovered: var(--sapContent_FocusColor);
	--_ui5_toggle_button_emphasized_text_shadow: none;
}

:root [_ui5host] {
	--_ui5_yearpicker_item_selected_focus: var(--sapContent_Selected_Background);
	--_ui5_yearpicker_item_selected_hover_color: var(--sapContent_Selected_Background);
	--_ui5_yearpicker_item_border: none;
	--_ui5_yearpicker_item_border_radius: 0;
	--_ui5_yearpicker_item_margin: 1px;
	--_ui5_yearpicker_item_focus_after_width: calc(100% - 0.375rem);
	--_ui5_yearpicker_item_focus_after_height: calc(100% - 0.375rem);
	--_ui5_yearpicker_item_focus_after_border: 1px dotted var(--sapContent_FocusColor);
	--_ui5_yearpicker_item_focus_after_offset: 2px;
	--_ui5_yearpicker_item_focus_after_border_radius: 0;
	--_ui5_yearpicker_item_selected_background_color: var(--sapSelectedColor);
	--_ui5_yearpicker_item_selected_text_color: var(--sapContent_ContrastTextColor);
	--_ui5_yearpicker_item_selected_box_shadow: none;
	--_ui5_yearpicker_item_focus_after_outline: none;
}

:root [_ui5host] {
	--_ui5_yearpicker_item_border_radius: 0.25rem;
}

:root [_ui5host] {
	--_ui5_calendar_header_arrow_button_border: none;
	--_ui5_calendar_header_arrow_button_border_radius: 0.25rem;
	--_ui5_calendar_header_middle_button_width: 6.25rem;
	--_ui5_calendar_header_middle_button_flex: 1 1 auto;
	--_ui5_calendar_header_middle_button_focus_border_radius: 0.25rem;
	--_ui5_calendar_header_middle_button_focus_border: none;
	--_ui5_calendar_header_middle_button_focus_after_display: block;
	--_ui5_calendar_header_middle_button_focus_after_width: calc(100% - 0.25rem);
	--_ui5_calendar_header_middle_button_focus_after_height: calc(100% - 0.25rem);
	--_ui5_calendar_header_middle_button_focus_after_top_offset: 1px;
	--_ui5_calendar_header_middle_button_focus_after_left_offset: 1px;
	--_ui5_calendar_header_button_background_color: none;
	--_ui5_calendar_header_arrow_button_box_shadow: none;
	--_ui5_calendar_header_middle_button_focus_background: transparent;
	--_ui5_calendar_header_middle_button_focus_outline: none;
	--_ui5_calendar_header_middle_button_focus_active_outline: none;
	--_ui5_calendar_header_middle_button_focus_active_background: var(--sapButton_Active_Background);
	--_ui5_calendar_header_middle_button_focus_after_border: 1px dotted var(--sapContent_FocusColor);
}

:root [_ui5host] {
	--_ui5_calendar_header_middle_button_focus_after_width: calc(100% - 0.375rem);
	--_ui5_calendar_header_middle_button_focus_after_height: calc(100% - 0.375rem);
	--_ui5_calendar_header_middle_button_focus_after_top_offset: 0.125rem;
	--_ui5_calendar_header_middle_button_focus_after_left_offset: 0.125rem;
}

:root [_ui5host] {
	--ui5_table_bottom_border: 1px solid var(--sapList_BorderColor);
	--ui5_table_header_row_outline_width: 1px;
	--ui5_table_multiselect_column_width: 2.75rem;
	--ui5_table_header_row_font_weight: normal;
	--ui5_table_header_row_border_bottom_color: var(--sapList_BorderColor);
	--ui5_table_header_row_border_width: 1px;
	--_ui5_table_load_more_border-bottom: none;
}

:root [_ui5host] {
	--ui5_table_header_row_font_weight: normal;
}

:root [_ui5host] {
	--ui5_table_row_outline_width: 1px;
}

:root [_ui5host] {
	--ui5_table_group_row_font-weight: normal;
	--ui5_table_border_width: 0 0 1px 0;
}

:root [_ui5host] {
	--_ui5_load_more_padding: 0;
	--_ui5_load_more_border: 1px top solid transparent;
	--_ui5_load_more_border_radius: none;
	--_ui5_load_more_outline_width: 1px;
}

:root [_ui5host] {
	--_ui5_token_background: var(--sapButton_TokenBackground);
	--_ui5_token_readonly_background: var(--sapButton_TokenBackground);
	--_ui5_token_readonly_color: var(--sapContent_LabelColor);
	--_ui5_token_border_radius: var(--sapButton_BorderCornerRadius);
	--_ui5_token_focus_outline_width: 0.0625rem;
	--_ui5_token_outline_offset: -0.125rem;
	--_ui5_token_text_color: var(--sapButton_TextColor);
	--_ui5_token_hover_border_color: var(--sapButton_Hover_BorderColor);
	--_ui5_token_right_margin: 0.3125rem;
	--_ui5_token_padding: 0.25rem 0;
	--_ui5_token_left_padding: 0.3125rem;
	--_ui5_token_readonly_padding: 0.375rem;
	--_ui5_token_selected_focus_outline: var(--_ui5_token_focus_outline_width) dotted var(--sapContent_ContrastFocusColor);
	--_ui5_token_focus_outline: var(--_ui5_token_focus_outline_width) dotted var(--sapContent_FocusColor);
	--_ui5_token_selected_hover_background: var(--sapButton_Selected_Hover_Background);
	--_ui5_token_selected_hover_border_color: var(--sapButton_Selected_Hover_BorderColor);
	--_ui5_token_focused_selected_border: 1px solid var(--sapButton_Selected_BorderColor);
	--ui5_token_focus_pseudo_element_content: none;
	--_ui5_token_focus_offset: -0.25rem;
	--_ui5_token_selected_text_font_family: "72override", var(--sapFontFamily);
	--_ui5_token_selected_internal_border_bottom: none;
	--_ui5_token_selected_internal_border_bottom_radius: 0;
	--_ui5_token_selected_box_shadow: none;
	--_ui5_token_text_icon_top: 0;
	--_ui5_token_selected_focused_offset_bottom: var(--_ui5_token_focus_offset);
}

:root [_ui5host] {
	--_ui5_token_focus_outline_width: 0.0625rem;
	--_ui5_token_text_color: var(--sapTextColor);
}

:root [_ui5host] {
	--_ui5_tokenizer_padding: 0.3125rem;
	--_ui5_tokenizer_n_more_text_color: var(--sapField_TextColor);
	--_ui5_tokenizer-popover_offset: .3125rem;
}

[data-ui5-compact-size][_ui5host], [data-ui5-compact-size] [_ui5host],
.ui5-content-density-compact[_ui5host], .ui5-content-density-compact [_ui5host],
.sapUiSizeCompact[_ui5host], .sapUiSizeCompact [_ui5host] {
	--_ui5_tokenizer-popover_offset: .1875rem;
}

:root [_ui5host] {
	--_ui5-tree-item-minimal-background: var(--sapList_SelectionBackgroundColor);
	--_ui5-tree-item-minimal-children-indicator-display: initial;
}

:root [_ui5host] {
	--_ui5_value_state_message_border: none;
	--_ui5_value_state_header_border: none;
	--_ui5_input_value_state_icon_display: none;
	--_ui5_value_state_message_padding: 0.5rem;
	--_ui5_value_state_header_padding: .5625rem 1rem;
	--_ui5_value_state_message_popover_box_shadow: none;
	--_ui5_value_state_message_icon_width: .875rem;
	--_ui5_value_state_message_icon_height: .875rem;
	--_ui5_input_value_state_icon_offset: .5rem;
	--_ui5_value_state_header_offset: -0.125rem;
	--_ui5_value_state_message_popover_border_radius: 0;
}

:root [_ui5host] {
	--_ui5-multi_combobox_token_margin_top: 3px;
}

:root [_ui5host] {
	--_ui5-multi_combobox_token_margin_top: 1px;
}

:root [_ui5host] {\r
	--_ui5_slider_progress_container_background: var(--sapField_BorderColor);\r
	--_ui5_slider_progress_container_dot_display: none;\r
	--_ui5_slider_progress_container_dot_background: var(--sapField_BorderColor);\r
	--_ui5_slider_progress_border: none;\r
	--_ui5_slider_padding: 1.406rem 1.0625rem;\r
	--_ui5_slider_inner_height: 0.25rem;\r
	--_ui5_slider_outer_height: 1.6875rem;\r
	--_ui5_slider_progress_border_radius: 0.25rem;\r
	--_ui5_slider_progress_background: var(--sapActiveColor);\r
	--_ui5_slider_handle_icon_display: none;\r
	--_ui5_range_slider_root_hover_handle_icon_display: none;\r
	--_ui5_slider_handle_height: 1.625rem;\r
	--_ui5_slider_handle_width: 1.625rem;\r
	--_ui5_slider_handle_border: solid 0.125rem var(--sapField_BorderColor);\r
	--_ui5_slider_handle_border_radius: 1rem;\r
	--_ui5_slider_handle_box_shadow: none;\r
	--_ui5_slider_handle_box_shadow_focus: none;\r
	--_ui5_slider_handle_background: var(--sapButton_Background);\r
	--_ui5_range_slider_handle_background: #FFF;\r
	--_ui5_slider_handle_top: -0.825rem;\r
	--_ui5_slider_tickmark_bg: var(--sapField_BorderColor);\r
	--_ui5_slider_tickmark_in_range_bg: var(--sapButton_Active_Background);\r
	--_ui5_slider_handle_margin_left: calc(-1 * (var(--_ui5_slider_handle_width) / 2));\r
	--_ui5_slider_handle_hover_background: var(--sapButton_Hover_Background);\r
	--_ui5_slider_handle_hover_border: 0.125rem solid var(--sapButton_Hover_BorderColor);\r
	--_ui5_slider_handle_outline: 0.0625rem dotted var(--sapContent_FocusColor);\r
	--_ui5_slider_handle_focus_border: var(--_ui5_slider_handle_hover_border);\r
	--_ui5_slider_handle_active_border: var(--_ui5_slider_handle_hover_border);\r
	--_ui5_slider_handle_focused_top: var(--_ui5_slider_handle_top);\r
	--_ui5_slider_handle_focused_margin_left: var(--_ui5_slider_handle_margin_left);\r
	--_ui5_slider_handle_outline_offset: 0.075rem;\r
	--_ui5_slider_icon_left: 0.5rem;\r
	--_ui5_slider_icon_top: 0.125rem;\r
	--_ui5_range_slider_handle_hover_background: rgba(var(--sapButton_Background), 0.25);\r
	--_ui5_range_slider_handle_hover_icon_display: none;\r
	--_ui5_slider_progress_outline: 0.0625rem dotted var(--sapContent_FocusColor);\r
	--_ui5_slider_progress_outline_offset: -0.8125rem;\r
	--_ui5_slider_tickmark_top: -0.375rem;\r
	--_ui5_slider_disabled_opacity: 0.4;\r
	--_ui5_slider_tooltip_fontsize: var(--sapFontSmallSize);\r
	--_ui5_slider_tooltip_color: var(--sapContent_LabelColor);\r
	--_ui5_slider_tooltip_background: var(--sapField_Background);\r
	--_ui5_slider_tooltip_border_radius: var(--sapElement_BorderCornerRadius);\r
	--_ui5_slider_tooltip_border_color: var(--sapField_BorderColor);\r
	--_ui5_slider_tooltip_border: 0.0625rem solid var(--_ui5_slider_tooltip_border_color);\r
	--_ui5_slider_tooltip_box_shadow: none;\r
	--_ui5_slider_tooltip_padding: 0.4125rem;\r
	--_ui5_slider_tooltip_height: 1rem;\r
	--_ui5_slider_tooltip_min_width: 2rem;\r
	--_ui5_slider_tooltip_bottom: 2rem;\r
	--_ui5_slider_label_fontsize: var(--sapFontSmallSize);\r
	--_ui5_slider_label_color: var(--sapContent_LabelColor);\r
	--_ui5_range_slider_progress_focus_display: none;\r
	--_ui5_range_slider_progress_focus_top: -1.063rem;\r
	--_ui5_range_slider_progress_focus_left: -1.438rem;\r
	--_ui5_range_slider_progress_focus_padding: 0 1.375rem 0 1.438rem;\r
	--_ui5_range_slider_progress_focus_height: 2rem;\r
	--_ui5_range_slider_legacy_progress_focus_display: block;\r
	--_ui5_slider_handle_focus_width: 0;\r
	--_ui5_slider_start_end_point_size: .375rem;\r
	--_ui5_slider_start_end_point_left: -0.875rem;\r
	--_ui5_slider_start_end_point_top: -.1875rem;\r
	--_ui5_slider_handle_hover_box_shadow: none;\r
	--_ui5_slider_handle_background_focus: var(--_ui5_slider_handle_background);\r
	--_ui5_slider_handle_active_box_shadow: none;\r
	--_ui5_slider_handle_focused_tooltip_distance: var(--_ui5_slider_tooltip_bottom);\r
	--_ui5_slider_handle_box_sizing: content-box;\r
	--_ui5_slider_tooltip_border_box: content-box;\r
	--_ui5_range_slider_handle_active_background: var(--_ui5_range_slider_handle_background);\r
	--_ui5_range_slider_active_handle_icon_display: none;\r
	--_ui5_range_slider_handle_background_focus: transparent;\r
	--_ui5_range_slider_progress_focus_width: 100%;\r
	--_ui5_range_slider_root_active_handle_icon_display: none;\r
	--_ui5_slider_tickmark_height: 1rem;\r
	--_ui5_slider_tickmark_top: -.3125rem;\r
	--_ui5_slider_progress_box_sizing: content-box;\r
	--_ui5_slider_tickmark_in_range_bg: var(--sapField_BorderColor);\r
	--_ui5_range_slider_focus_outline_width: 100%;\r
	--_ui5_slider_progress_outline_offset_left: 0;\r
	--_ui5_range_slider_focus_outline_radius: 0;\r
\r
	--_ui5_slider_progress_container_top: 0;\r
	--_ui5_slider_progress_height: 100%;\r
	--_ui5_slider_active_progress_border: none;\r
	--_ui5_slider_active_progress_left: 0;\r
	--_ui5_slider_active_progress_top: 0;\r
\r
	--_ui5_slider_no_tickmarks_progress_container_top: var(--_ui5_slider_progress_container_top);\r
	--_ui5_slider_no_tickmarks_progress_height: var(--_ui5_slider_progress_height);\r
	--_ui5_slider_no_tickmarks_active_progress_border: var(--_ui5_slider_active_progress_border);\r
	--_ui5_slider_no_tickmarks_active_progress_left: var(--_ui5_slider_active_progress_left);\r
	--_ui5_slider_no_tickmarks_active_progress_top: var(--_ui5_slider_active_progress_top);\r
	--_ui5_slider_handle_focus_visibility: none;\r
	--_ui5_slider_handle_icon_size: 1rem;\r
}

[data-ui5-compact-size][_ui5host], [data-ui5-compact-size] [_ui5host],\r
.ui5-content-density-compact[_ui5host], .ui5-content-density-compact [_ui5host],\r
.sapUiSizeCompact[_ui5host], .sapUiSizeCompact [_ui5host] {\r
	--_ui5_slider_handle_focused_top: -0.625rem;\r
	--_ui5_slider_handle_focused_margin_left: -0.75rem;\r
	--_ui5_slider_handle_icon_size: .875rem;\r
	--_ui5_slider_padding: 1rem 1.0625rem;\r
}

:root [_ui5host] {
	--_ui5_slider_inner_min_width: 4rem;
	--_ui5_slider_handle_background_focus: var(--sapButton_Background);
	--_ui5_range_slider_handle_background_focus: transparent;
	--_ui5_slider_handle_top: -.875rem;
	--_ui5_range_slider_handle_background: transparent;
	--_ui5_range_slider_handle_active_background: transparent;
	--_ui5_slider_handle_background: var(--sapButton_Background);
	--_ui5_slider_handle_hover_background: var(--sapButton_Hover_Background);
	--_ui5_range_slider_root_hover_handle_bg: transparent;
	--_ui5_range_slider_root_active_handle_icon_display: none;
	--_ui5_slider_handle_width: 1.875rem;
	--_ui5_slider_handle_height: 1.875rem;
	--_ui5_slider_handle_box_sizing: border-box;
	--_ui5_slider_tickmark_top: -.34375rem;
}

:root [_ui5host] {
	--_ui5_step_input_input_error_background_color: var(--sapField_InvalidBackground);
	--_ui5-step_input_button_state_hover_background_color: var(--sapField_Background);
	--_ui5_step_input_border_style: 1px solid var(--sapField_BorderColor);
	--_ui5_step_input_border_style_hover: 1px solid var(--sapField_Hover_BorderColor);
	--_ui5_step_input_button_background_color:var(--sapField_Background);
	--_ui5_step_input_input_border: 1px solid transparent;
	--_ui5_step_input_input_margin_top: -0.0625rem;
	--_ui5_step_input_button_display: inline-block;
	--_ui5_step_input_button_left: 0;
	--_ui5_step_input_button_right: 0;
	--_ui5_step_input_input_border_focused_after: var(--_ui5_input_focus_border_width) dotted var(--sapContent_FocusColor);
	--_ui5_step_input_input_border_top_bottom_focused_after: 0.0625rem;
	--_ui5_step_input_input_border_radius_focused_after: 0;
	--_ui5_step_input_input_information_border_color_focused_after: var(--sapField_BorderColor);
	--_ui5_step_input_input_warning_border_color_focused_after: var(--sapField_BorderColor);
	--_ui5_step_input_input_success_border_color_focused_after: var(--sapField_BorderColor);
	--_ui5_step_input_input_error_border_color_focused_after: var(--sapField_BorderColor);
	--_ui5_step_input_disabled_button_background: var(--sapField_ReadOnly_Background);
	--_ui5_step_input_border_color_hover: var(--sapField_Hover_Background);
	--_ui5_step_input_border_hover: 1px solid var(--sapField_Hover_BorderColor);
	--_ui5_input_input_background_color: var(--sapField_InvalidBackground);
	--_ui5_step_input_min_width: 7.25rem;
	--_ui5_step_input_padding: 2.5rem;
}

:root [_ui5host] {
	/* Calendar */
	--_ui5_calendar_height: 24.5rem;
	--_ui5_calendar_width: 20rem;
	--_ui5_calendar_padding: 1rem;
	--_ui5_calendar_left_right_padding:  0.5rem;
	--_ui5_calendar_top_bottom_padding: 1rem;
	--_ui5_calendar_header_height: 3rem;
	--_ui5_calendar_header_arrow_button_width: 2.5rem;
	--_ui5_calendar_header_padding: 0.25rem 0;

	--_ui5_checkbox_root_side_padding: .6875rem;
	--_ui5_checkbox_icon_size: 1rem;
	--_ui5_checkbox_partially_icon_size: .75rem;
	--_ui5_custom_list_item_rb_min_width: 2.75rem;
	--_ui5_day_picker_item_width: 2.25rem;
	--_ui5_day_picker_item_height: 2.875rem;
	--_ui5_day_picker_empty_height: 3rem;
	--_ui5_day_picker_item_justify_content: space-between;
	--_ui5_dp_two_calendar_item_now_text_padding_top: 0.387rem;
    --_ui5_dp_two_calendar_item_primary_text_height: 1.8125rem;
    --_ui5_dp_two_calendar_item_secondary_text_height: 1rem;
	--_ui5_dp_two_calendar_item_text_padding_top: 0.575rem;

	/* ColorPalette */
	 --_ui5_color-palette-item-height: 1.75rem;
	 --_ui5_color-palette-item-hover-height: 2.375rem;
	 --_ui5_color-palette-item-margin: calc((var(--_ui5_color-palette-item-hover-height) - var(--_ui5_color-palette-item-height)) / 2);
	 --_ui5_color-palette-row-width: 12rem;
	 --_ui5_color-palette-swatch-container-padding: 0.3125rem 0.6875rem;

	 /* DateTimePicker */
	--_ui5_datetime_picker_width: 40.0625rem;
	--_ui5_datetime_picker_height: 25rem;
	--_ui5_datetime_timeview_width: 17rem;
	--_ui5_datetime_timeview_phonemode_width: 19.5rem;
	--_ui5_datetime_timeview_padding: 1rem;

	/* Dialog */
	--_ui5_dialog_content_min_height: 2.75rem;
	--_ui5_dialog_footer_height: 2.75rem;

	--_ui5_input_inner_padding: 0 0.625rem;
	--_ui5_input_inner_padding_with_icon: 0 0.25rem 0 0.625rem;
	--_ui5_input_inner_space_to_tokenizer: 0.125rem;
	--_ui5_input_inner_space_to_n_more_text: 0.1875rem;
	--_ui5_input_value_state_icon_padding: var(--_ui5-input-icon-padding);
	--_ui5_list_no_data_height: 3rem;
	--_ui5_list_item_cb_margin_right: 0;
	--_ui5_list_item_title_size: var(--sapFontLargeSize);
	--_ui5_list_no_data_font_size: var(--sapFontLargeSize);
	--_ui5_list_item_img_size: 3rem;
	--_ui5_list_item_img_top_margin: 0.5rem;
	--_ui5_list_item_img_bottom_margin: 0.5rem;
	--_ui5_list_item_img_hn_margin: 0.75rem;
	--_ui5_list_item_dropdown_base_height: 2.5rem;
	--_ui5_list_item_base_height: 2.75rem;
	--_ui5_list_item_icon_size: 1.125rem;
	--_ui5_list_item_icon_padding-inline-end: 0.5rem;
	--_ui5_list_item_selection_btn_margin_top: calc(-1 * var(--_ui5_checkbox_wrapper_padding));
	--_ui5_list_item_content_vertical_offset: calc((var(--_ui5_list_item_base_height) - var(--_ui5_list_item_title_size)) / 2);
	--_ui5_group_header_list_item_height: 2.75rem;
	--_ui5_list_busy_row_height: 3rem;
	--_ui5_month_picker_item_height: 3rem;
	--_ui5_list_buttons_left_space: 0.125rem;

	/* Popup subclasses */
	--_ui5_popup_default_header_height: 2.75rem;

	/* Notifications */
	--_ui5-notification-overflow-popover-padding: 0.25rem 0.5rem;

	--_ui5_year_picker_item_height: 3rem;
	--_ui5_tokenizer_padding: 0.25rem;
	--_ui5_token_height: 1.625rem;
	--_ui5_token_icon_size: .75rem;
	--_ui5_token_icon_padding: 0.25rem 0.5rem;
	--_ui5_token_wrapper_right_padding: 0.3125rem;
	--_ui5_token_wrapper_left_padding: 0;
	--_ui5_tl_bubble_padding: 1rem;
	--_ui5_tl_indicator_before_bottom: -1.625rem;
	--_ui5_tl_padding: 1rem 1rem 1rem .5rem;
	--_ui5_tl_li_margin_bottom: 1.625rem;

	/*switch*/
	--_ui5_switch_focus_width_size_horizon_exp: calc(100% + 4px);
	--_ui5_switch_focus_height_size_horizon_exp: calc(100% + 4px);

	--_ui5_tc_item_text: 3rem;
	--_ui5_tc_item_height: 4.75rem;
	--_ui5_tc_item_text_only_height: 2.75rem;
	--_ui5_tc_item_text_only_with_additional_text_height: 3.75rem;
	--_ui5_tc_item_text_line_height: 1.325rem;
	--_ui5_tc_item_icon_circle_size: 2.75rem;
	--_ui5_tc_item_icon_size: 1.25rem;
	--_ui5_tc_item_add_text_margin_top: 0.375rem;

	/* TextArea */
	--_ui5_textarea_margin: .25rem 0;

	/* Panel */
	--_ui5_panel_header_height: 2.75rem;

	/* Radio Button */
	--_ui5_radio_button_height: 2.75rem;
	--_ui5_radio_button_label_side_padding: .875rem;
	--_ui5_radio_button_focus_dist: .5rem;
	--_ui5_radio_button_inner_size: 2.75rem;
	--_ui5_radio_button_svg_size: 1.375rem;
	--_ui5_radio_button_label_width: calc(100% - 2.75rem);
	--_ui5_radio_button_outer_ring_padding_with_label: 0 0.6875rem;

	/* Responsive Popover */
	--_ui5-responsive_popover_header_height: 2.75rem;

	/* Side Navigation */
	--ui5_side_navigation_item_height: 2.75rem;

	/* Table */

	--_ui5_load_more_text_height: 2.75rem;
	--_ui5_load_more_text_font_size: var(--sapFontMediumSize);
	--_ui5_load_more_desc_padding:  0.375rem 2rem 0.875rem 2rem;
	--ui5_table_header_row_height: 2.75rem;
	--ui5_table_row_height: 2.75rem;
	--ui5_table_focus_outline_offset: -0.125rem;
	--ui5_table_group_row_height: 2rem;

	/* Tree */
	--_ui5-tree-indent-step: 1.5rem;
	--_ui5-tree-toggle-box-width: 2.75rem;
	--_ui5-tree-toggle-box-height: 2.25rem;
	--_ui5-tree-toggle-icon-size: 1.0625rem;

	/* Timeline */
	--_ui5_timeline_tli_indicator_before_bottom: -1.625rem;
	--_ui5_timeline_tli_indicator_before_right: -1.625rem;
	--_ui5_timeline_tli_indicator_before_without_icon_bottom: -1.875rem;
	--_ui5_timeline_tli_indicator_before_without_icon_right: -1.9375rem;

	/* SegmentedButton */
	--_ui5_segmented_btn_border_radius: 0.375rem;

	/* SplitButton */
	--_ui5_split_button_middle_separator_top: 0;
	--_ui5_split_button_middle_separator_height: 2.25rem;
}

[data-ui5-compact-size][_ui5host], [data-ui5-compact-size] [_ui5host],
.ui5-content-density-compact[_ui5host], .ui5-content-density-compact [_ui5host],
.sapUiSizeCompact[_ui5host], .sapUiSizeCompact [_ui5host] {
	--_ui5_button_base_height: 1.625rem;
	--_ui5_button_base_padding: 0.4375rem;
	--_ui5_button_base_min_width: 2rem;
	--_ui5_button_icon_font_size: 1rem;

	/* Calendar */
	--_ui5_calendar_height: 18rem;
	--_ui5_calendar_width: 17.75rem;
	--_ui5_calendar_left_right_padding: 0.25rem;
	--_ui5_calendar_top_bottom_padding: 0.5rem;
	--_ui5_calendar_header_height: 2rem;
	--_ui5_calendar_header_arrow_button_width: 2rem;
	--_ui5_calendar_header_padding: 0;

	/* CheckBox */
	--_ui5_checkbox_root_side_padding: var(--_ui5_checkbox_wrapped_focus_padding);
	--_ui5_checkbox_wrapped_content_margin_top: var(--_ui5_checkbox_compact_wrapped_label_margin_top);
	--_ui5_checkbox_wrapped_focus_left_top_bottom_position: var(--_ui5_checkbox_compact_focus_position);
	--_ui5_checkbox_width_height: var(--_ui5_checkbox_compact_width_height);
	--_ui5_checkbox_wrapper_padding: var(--_ui5_checkbox_compact_wrapper_padding);
	--_ui5_checkbox_focus_position: var(--_ui5_checkbox_compact_focus_position);
	--_ui5_checkbox_inner_width_height: var(--_ui5_checkbox_compact_inner_size);
	--_ui5_checkbox_icon_size: .75rem;
	--_ui5_checkbox_partially_icon_size: .5rem;

	/* ColorPalette */
	--_ui5_color-palette-item-height: 1.25rem;
	--_ui5_color-palette-item-focus-height: 1rem;
	--_ui5_color-palette-item-container-sides-padding: 0.1875rem;
	--_ui5_color-palette-item-container-rows-padding: 0.8125rem;
	--_ui5_color-palette-item-hover-height: 1.625rem;
	--_ui5_color-palette-item-margin: calc((var(--_ui5_color-palette-item-hover-height) - var(--_ui5_color-palette-item-height)) / 2);
	--_ui5_color-palette-row-width: 8.125rem;
	--_ui5_color-palette-swatch-container-padding: 0.1875rem 0.8125rem;
	--_ui5_color-palette-item-hover-margin: 0;
	--_ui5_color-palette-row-height: 7.5rem;
	--_ui5_color-palette-button-height: 2rem;
	--_ui5_color_picker_slider_container_margin_top: -4px;

	/* Custom List Item */
	--_ui5_custom_list_item_rb_min_width: 2rem;

	/* DayPicker */
	--_ui5_daypicker_weeknumbers_container_padding_top: 2rem;
	--_ui5_day_picker_item_width: 2rem;
	--_ui5_day_picker_item_height: 2rem;
	--_ui5_day_picker_empty_height: 2.125rem;
	--_ui5_day_picker_item_justify_content: flex-end;
	--_ui5_dp_two_calendar_item_now_text_padding_top: 0rem;
    --_ui5_dp_two_calendar_item_primary_text_height: 1rem;
    --_ui5_dp_two_calendar_item_secondary_text_height: 0.75rem;
	--_ui5_dp_two_calendar_item_text_padding_top: 0;

	/* DateTimePicker */
	--_ui5_datetime_picker_height: 17rem;
	--_ui5_datetime_picker_width: 34.0625rem;
	--_ui5_datetime_timeview_width: 17rem;
	--_ui5_datetime_timeview_phonemode_width: 18.5rem;
	--_ui5_datetime_timeview_padding: 0.5rem;

	/* Dialog */
	--_ui5_dialog_content_min_height: 2.5rem;
	--_ui5_dialog_footer_height: 2.5rem;

	/* Input */
	--_ui5_input_height: var(--sapElement_Compact_Height);
	--_ui5_input_inner_padding: 0 0.5rem;
	--_ui5_input_inner_padding_with_icon: 0 0.2rem 0 0.5rem;
	--_ui5_input_inner_space_to_tokenizer: 0.125rem;
	--_ui5_input_inner_space_to_n_more_text: 0.125rem;
	--_ui5_input_icon_min_width: var(--_ui5_input_compact_min_width);
	--_ui5_input_icon_padding: .25rem .4375rem;
	--_ui5_input_error_warning_icon_padding: .1875rem .375rem .1875rem .4375rem;
	--_ui5_input_information_icon_padding: .1875rem .375rem .1875rem .4375rem;
	--_ui5_input_custom_icon_padding: .25rem .5rem;
	--_ui5_input_error_warning_custom_icon_padding: .1875rem .5rem;
	--_ui5_input_information_custom_icon_padding: .1875rem .5rem;
	--_ui5_input_value_state_icon_padding: .1875rem .5rem;

	/* Menu */
	--_ui5_menu_item_padding: 0 0.75rem 0 0.5rem;
	--_ui5_menu_item_submenu_icon_right: 0.75rem;

	/* Notifications */
	--_ui5-notification-overflow-popover-padding: 0.25rem 0.5rem;

	/* Popup subclasses */
	--_ui5_popup_default_header_height: 2.5rem;

	/* TextArea */
	--_ui5_textarea_margin: .1875rem 0;

	/* List */
	--_ui5_list_no_data_height: 2rem;
	--_ui5_list_item_cb_margin_right: .5rem;
	--_ui5_list_item_title_size: var(--sapFontSize);
	--_ui5_list_item_img_top_margin: 0.55rem;
	--_ui5_list_no_data_font_size: var(--sapFontSize);
	--_ui5_list_item_dropdown_base_height: 2rem;
	--_ui5_list_item_base_height: 2rem;
	--_ui5_list_item_icon_size: 1rem;
	--_ui5_list_item_selection_btn_margin_top: calc(-1 * var(--_ui5_checkbox_wrapper_padding));
	--_ui5_list_item_content_vertical_offset: calc((var(--_ui5_list_item_base_height) - var(--_ui5_list_item_title_size)) / 2);
	--_ui5_list_busy_row_height: 2rem;
	--_ui5_list_buttons_left_space: 0.125rem;

	--_ui5_month_picker_item_height: 2rem;
	--_ui5_year_picker_item_height: 2rem;
	--_ui5_panel_header_height: 2.5rem;

	--_ui5_token_height: 1.25rem;
	--_ui5_token_right_margin: 0.25rem;
	--_ui5_token_left_padding: 0.25rem;
	--_ui5_token_readonly_padding: 0.25rem;
	--_ui5_token_focus_offset: -0.125rem;
	--_ui5_token_icon_size: .75rem;
	--_ui5_token_icon_padding: 0.125rem 0.25rem;
	--_ui5_token_wrapper_right_padding: 0.25rem;
	--_ui5_token_wrapper_left_padding: 0;
	--_ui5_token_outline_offset: -0.125rem;

	--_ui5_tl_bubble_padding: .5rem;
	--_ui5_tl_indicator_before_bottom: -.5rem;
	--_ui5_tl_padding: .5rem;
	--_ui5_tl_li_margin_bottom: .5rem;

	--_ui5_wheelslider_item_width: 64px;
	--_ui5_wheelslider_item_height: 32px;
	--_ui5_wheelslider_height: 224px;
	--_ui5_wheelslider_selection_frame_margin_top: calc(var(--_ui5_wheelslider_item_height) * 2);
	--_ui5_wheelslider_arrows_visibility: visible;
	--_ui5_wheelslider_mobile_selection_frame_margin_top: 128px;

	--_ui5_tc_item_text: 2rem;
	--_ui5_tc_item_text_line_height: 1.325rem;
	--_ui5_tc_item_icon_size: 1rem;
	--_ui5_tc_item_add_text_margin_top: 0.3125rem;
	--_ui5_tc_item_height: 4rem;
	--_ui5_tc_header_height: var(--_ui5_tc_item_height);
	--_ui5_tc_item_icon_circle_size: 2rem;
	--_ui5_tc_item_icon_size: 1rem;

	/* Radio Button */
	--_ui5_radio_button_min_width: var(--_ui5_radio_button_min_width_compact);
	--_ui5_radio_button_height: 2rem;
	--_ui5_radio_button_label_side_padding: .5rem;
	--_ui5_radio_button_focus_dist: .375rem;
	--_ui5_radio_button_inner_size: 2rem;
	--_ui5_radio_button_svg_size: 1rem;
	--_ui5_radio_button_label_width: calc(100% - 2rem + 1px);
	--_ui5_radio_button_outer_ring_padding_with_label: 0 0.5rem;

	/* Responsive Popover */
	--_ui5-responsive_popover_header_height: 2.5rem;

	/* Side Navigation */
	--ui5_side_navigation_item_height: 2rem;

	/* Slider */
	--_ui5_slider_handle_height: 1.25rem;
	--_ui5_slider_handle_width: 1.25rem;
	--_ui5_slider_handle_top: -.5rem;
	--_ui5_slider_tooltip_height: 1rem;
	--_ui5_slider_tooltip_padding: 0.25rem;
	/* --_ui5_slider_tooltip_bottom: 1.875rem; */
	--_ui5_slider_progress_outline_offset: -0.625rem;
	--_ui5_slider_outer_height: 1.3125rem;

	/* SplitButton */
	--_ui5_split_button_middle_separator_top: 0;
	--_ui5_split_button_middle_separator_height: 1.625rem;

	/* StepInput */
	--_ui5_step_input_min_width: 6rem;
	--_ui5_step_input_padding: 2rem;

	/* Table */
	--_ui5_load_more_text_height: 2.625rem;
	--_ui5_load_more_text_font_size: var(--sapFontSize);
	--_ui5_load_more_desc_padding: 0 2rem 0.875rem 2rem;
	--ui5_table_header_row_height: 2rem;
	--ui5_table_row_height: 2rem;

	/* Tree */
	--_ui5-tree-indent-step: 0.5rem;
	--_ui5-tree-toggle-box-width: 2rem;
	--_ui5-tree-toggle-box-height: 1.5rem;
	--_ui5-tree-toggle-icon-size: 0.8125rem;

	/* Timeline */
	--_ui5_timeline_tli_indicator_before_bottom: -0.5rem;
	--_ui5_timeline_tli_indicator_before_right: -0.5rem;
	--_ui5_timeline_tli_indicator_before_without_icon_bottom: -0.75rem;
	--_ui5_timeline_tli_indicator_before_without_icon_right: -0.8125rem;

	/* ViewSettingsDialog */
	--_ui5_vsd_header_container: 2.5rem;
	--_ui5_vsd_sub_header_container_height: 2rem;
	--_ui5_vsd_header_height: 4rem;
	--_ui5_vsd_expand_content_height: 25.4375rem;
}

:root [_ui5host], [dir="ltr"][_ui5host], [dir="ltr"] [_ui5host] {
	--_ui5_rotation_90deg: rotate(90deg);
	--_ui5_rotation_minus_90deg: rotate(-90deg);

	--_ui5_icon_transform_scale: none;
	--_ui5_panel_toggle_btn_rotation: var(--_ui5_rotation_90deg);
	--_ui5_li_notification_group_toggle_btn_rotation: var(--_ui5_rotation_90deg);
	--_ui5_timeline_scroll_container_offset: 0.5rem;

	--_ui5_popover_upward_arrow_margin: 0.1875rem 0 0 0.1875rem;
	--_ui5_popover_right_arrow_margin: 0.1875rem 0 0 -0.375rem;
	--_ui5_popover_downward_arrow_margin: -0.375rem 0 0 0.125rem;
	--_ui5_popover_left_arrow_margin: 0.125rem 0 0 0.25rem;
	--_ui5_dialog_resize_cursor: se-resize;

	--_ui5_progress_indicator_bar_border_radius: 0.5rem 0 0 0.5rem;
	--_ui5_progress_indicator_remaining_bar_border_radius: 0 0.5rem 0.5rem 0;
	--_ui5_menu_submenu_margin_offset: -0.25rem 0;
	--_ui5_menu_submenu_placement_type_left_margin_offset: 0.25rem 0;
	--_ui5-menu_item_icon_float: right;

	--_ui5-shellbar-notification-btn-count-offset: -0.125rem;
}

[dir="rtl"][_ui5host], [dir="rtl"] [_ui5host] {
	--_ui5_icon_transform_scale: scale(-1, 1);
	--_ui5_panel_toggle_btn_rotation: var(--_ui5_rotation_minus_90deg);
	--_ui5_li_notification_group_toggle_btn_rotation: var(--_ui5_rotation_minus_90deg);
	--_ui5_timeline_scroll_container_offset: -0.5rem;

	--_ui5_popover_upward_arrow_margin: .1875rem .125rem 0 0;
	--_ui5_popover_right_arrow_margin: .1875rem .25rem 0 0;
	--_ui5_popover_downward_arrow_margin: -0.4375rem .125rem 0 0;
	--_ui5_popover_left_arrow_margin: .1875rem -.375rem 0 0;
	--_ui5_dialog_resize_cursor:sw-resize;

	--_ui5_progress_indicator_bar_border_radius: 0 0.5rem 0.5rem 0;
	--_ui5_progress_indicator_remaining_bar_border_radius: 0.5rem 0 0 0.5rem;

	--_ui5_menu_submenu_margin_offset: 0 -0.25rem;
	--_ui5_menu_submenu_placement_type_left_margin_offset: 0 0.25rem;
	--_ui5-menu_item_icon_float: left;

	--_ui5-shellbar-notification-btn-count-offset: unset;
}`};function Q(e){d.useEffect(e,[])}function m_(){const[e,_]=d.useState(!1);return d.useEffect(()=>{_(!0)},[]),e}const B=e=>`on${V($(e))}`,L=new Set([]),f_=(e,_,o,r,i,s)=>d.forwardRef((u,x)=>{const{className:g,children:H,waitForDefine:p,...l}=u,[A,z]=Y(x),S=G(e),m=S?`${e}-${S}`:e,[f,P]=d.useState(L.has(m));Q(()=>{s()});const E=_.reduce((t,n)=>l.hasOwnProperty(n)?{...t,[T(n)]:l[n]}:t,{}),N=o.reduce((t,n)=>l[n]===!0||l[n]==="true"?{...t,[T(n)]:!0}:t,{}),U=r.reduce((t,n)=>{var y;const a=l[n];if(!a)return t;if(((y=l[n])==null?void 0:y.$$typeof)===Symbol.for("react.portal"))return console.warn("ReactPortal is not supported for slot props."),t;const h=[];let F=0;const C=c=>{var I;c&&(c.type===d.Fragment?d.Children.toArray((I=c.props)==null?void 0:I.children).filter(Boolean).forEach(j=>{C(j)}):(h.push(d.cloneElement(c,{key:`${n}-${F}`,slot:n})),F++))};return Array.isArray(a)?a.forEach(c=>{C(c)}):C(a),[...t,...h]},[]);q(()=>{const t=z.current,n={};if(!p||f)return i.forEach(a=>{const h=l[B(a)];typeof h=="function"&&(n[a]=h,t==null||t.addEventListener(a,n[a]))}),()=>{for(const a in n)t==null||t.removeEventListener(a,n[a])}},[...i.map(t=>l[B(t)]),f,p]);const R=Object.entries(l).filter(([t])=>!_.includes(t)).filter(([t])=>!r.includes(t)).filter(([t])=>!o.includes(t)).filter(([t])=>!i.map(n=>B(n)).includes(t)).reduce((t,[n,a])=>({...t,[n]:a}),{});return d.useEffect(()=>{p&&!f&&customElements.whenDefined(m).then(()=>{P(!0),L.add(m)})},[m,p,f]),p&&!f?null:X.jsxs(m,{ref:A,...N,...E,...R,class:g,children:[U,H]})});export{p_ as a,b,n_ as c,u_ as d,J as e,l_ as f,s_ as g,m_ as h,K as i,i_ as l,d_ as o,a_ as p,c_ as s,Z as t,Y as u,f_ as w};
//# sourceMappingURL=withWebComponent-99b005ba.js.map
