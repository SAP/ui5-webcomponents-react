import{a as f,l as p,s as h,p as g,c as b}from"./withWebComponent--kEkWNJH.js";import{a as _}from"./i18nBundle-YvxCnun_.js";import{c as u}from"./List-dEKXwq8P.js";import{G as v}from"./i18n-defaults-HIa-lgkZ.js";import{o as x}from"./class-map-Y-YjCFqX.js";import{r as c}from"./UI5Element-oLeGfnU4.js";import{s as w}from"./parameters-bundle.css-mPCp9TQx.js";import"./utils-rNFQc6Ui.js";import"./VersionInfo-AzzP9wS2.js";import"./index-OjgoNOWw.js";import"./CustomElementsScopeUtils-IpwVqUeG.js";import"./jsx-runtime-DtaoT6pD.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./Language-aesXCmkP.js";import"./ResizeHandler-pk5_zz-J.js";import"./ItemNavigation-N1_IBWr4.js";import"./Keys-ZEuNsqmZ.js";import"./getActiveElement-IIKAy3xo.js";import"./event-lM5HanI-.js";import"./slot-HSrR9XJ-.js";import"./Integer-kog98579.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./TabbableElements-L1VqloMt.js";import"./isElementHidden-d3-Fo4V6.js";import"./getEffectiveScrollbarStyle-Gz48PLeD.js";import"./debounce-8VpZswfd.js";import"./BusyIndicator-ilxF3CHS.js";import"./Label-Q5XT_dC3.js";import"./WrappingType-avPrqc94.js";import"./style-map-5njKSr-C.js";import"./BrowserScrollbar.css-nSPAj6kk.js";import"./CheckBox-Fj0rtVJO.js";import"./ValueState-zUcANXoY.js";import"./accept-8p0TeSaU.js";import"./Icons-B0Lm9Xgp.js";import"./Icon-s-QlKO5-.js";import"./RadioButton-h9kUnzLj.js";function y(r,t,o){return f`<ul part="native-li" tabindex="${p(this.forcedTabIndex)}" class="ui5-ghli-root ${x(this.classes.main)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keydown="${this._onkeydown}" aria-label="${p(this.ariaLabelText)}" aria-roledescription="${p(this.groupHeaderText)}" role="group"><div id="${p(this._id)}-content" class="ui5-li-content"><span class="ui5-ghli-title"><slot></slot></span></div></ul>`}c("@ui5/webcomponents-theming","sap_horizon",async()=>h);c("@ui5/webcomponents","sap_horizon",async()=>w);const H={packageName:"@ui5/webcomponents",fileName:"themes/GroupHeaderListItem.css.ts",content:`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{height:var(--_ui5-v1-22-0-rc-3_group_header_list_item_height);background:var(--ui5-v1-22-0-rc-3-group-header-listitem-background-color);color:var(--sapList_TableGroupHeaderTextColor)}:host([has-border]){border-bottom:var(--sapList_BorderWidth) solid var(--sapList_GroupHeaderBorderColor)}.ui5-li-root.ui5-ghli-root{padding-top:.5rem;color:currentColor;font-size:var(--sapFontHeader6Size);font-weight:400;line-height:2rem;margin:0}.ui5-ghli-title{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:700;font-family:var(--sapFontHeaderFamily)}
`};var d=function(r,t,o,a){var s=arguments.length,e=s<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,o):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,o,a);else for(var m=r.length-1;m>=0;m--)(n=r[m])&&(e=(s<3?n(e):s>3?n(t,o,e):n(t,o))||e);return s>3&&e&&Object.defineProperty(t,o,e),e},l;let i=l=class extends u{get groupItem(){return!0}get groupHeaderText(){return l.i18nBundle.getText(v)}get ariaLabelText(){return[this.textContent,this.accessibleName].filter(Boolean).join(" ")}static async onDefine(){l.i18nBundle=await _("@ui5/webcomponents")}};d([g()],i.prototype,"accessibleName",void 0);i=l=d([b({tag:"ui5-li-groupheader",languageAware:!0,template:y,styles:[u.styles,H]})],i);i.define();const pe=i;export{pe as default};
