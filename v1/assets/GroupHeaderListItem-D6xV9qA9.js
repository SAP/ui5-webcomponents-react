import{a as f,l as p,s as h,p as g,c as b}from"./withWebComponent-BCCnzL34.js";import{b as _}from"./i18nBundle-wW0MItbA.js";import{c as u}from"./List-Dul97M6h.js";import{G as v}from"./i18n-defaults-DXLPKTKT.js";import{o as x}from"./class-map-D_mD7-LZ.js";import{r as c}from"./Boot-BJoOGsKW.js";import{s as w}from"./parameters-bundle.css-DD3rGyNs.js";import"./CustomElementsScope-GSIIlBKM.js";import"./useIsomorphicLayoutEffect-CikWMOA2.js";import"./index-BP8_t0zE.js";import"./EventProvider-B3ZIXKWe.js";import"./utils-Sfm-TJlC.js";import"./UI5Element-Dvkr4ftu.js";import"./ResizeHandler-DN6_bBb8.js";import"./ItemNavigation-DCVAcX2b.js";import"./Keys-BgUkNma0.js";import"./getActiveElement-BL9Yqj8a.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./Integer-Dh6YzFpK.js";import"./AriaLabelHelper-CzOXVcye.js";import"./TabbableElements-Dk0Ler5o.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./BusyIndicator-Zm-dXa9t.js";import"./Label-BC-N-dx-.js";import"./WrappingType-CW8URInd.js";import"./style-map-DamJfpFo.js";import"./BrowserScrollbar.css-CDYHTzEN.js";import"./CheckBox-CXLD8ujV.js";import"./ValueState-Bn-H2OaL.js";import"./accept-CfG3lOZl.js";import"./Icons-N9fhreAf.js";import"./Icon-BjzhKVYQ.js";import"./RadioButton-woILkM5z.js";function y(r,t,o){return f`<ul part="native-li" tabindex="${p(this.forcedTabIndex)}" class="ui5-ghli-root ${x(this.classes.main)}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keydown="${this._onkeydown}" aria-label="${p(this.ariaLabelText)}" aria-roledescription="${p(this.groupHeaderText)}" role="group"><div id="${p(this._id)}-content" class="ui5-li-content"><span class="ui5-ghli-title"><slot></slot></span></div></ul>`}c("@ui5/webcomponents-theming","sap_horizon",async()=>h);c("@ui5/webcomponents","sap_horizon",async()=>w);const H={packageName:"@ui5/webcomponents",fileName:"themes/GroupHeaderListItem.css.ts",content:`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{height:var(--_ui5-v1-24-8_group_header_list_item_height);background:var(--ui5-v1-24-8-group-header-listitem-background-color);color:var(--sapList_TableGroupHeaderTextColor)}:host([has-border]){border-bottom:var(--sapList_BorderWidth) solid var(--sapList_GroupHeaderBorderColor)}.ui5-li-root.ui5-ghli-root{padding-top:.5rem;color:currentColor;font-size:var(--sapFontHeader6Size);font-weight:400;line-height:2rem;margin:0}.ui5-ghli-title{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:700;font-family:var(--sapFontHeaderFamily)}
`};var d=function(r,t,o,a){var s=arguments.length,e=s<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,o):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")e=Reflect.decorate(r,t,o,a);else for(var m=r.length-1;m>=0;m--)(n=r[m])&&(e=(s<3?n(e):s>3?n(t,o,e):n(t,o))||e);return s>3&&e&&Object.defineProperty(t,o,e),e},l;let i=l=class extends u{get groupItem(){return!0}get groupHeaderText(){return l.i18nBundle.getText(v)}get ariaLabelText(){return[this.textContent,this.accessibleName].filter(Boolean).join(" ")}static async onDefine(){l.i18nBundle=await _("@ui5/webcomponents")}};d([g()],i.prototype,"accessibleName",void 0);i=l=d([b({tag:"ui5-li-groupheader",languageAware:!0,template:y,styles:[u.styles,H]})],i);i.define();const se=i;export{se as default};
