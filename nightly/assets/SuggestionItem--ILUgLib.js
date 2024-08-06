import{h as c,q as h,f as d,s as g,a as u,m as _}from"./withWebComponent-CPW0iYAf.js";import{f as b}from"./Keys-F_3Gvx0K.js";import{d as f}from"./List-BIG_Eyud.js";import{l}from"./if-defined-BCPYWAh1.js";import{o as x}from"./class-map-CQfLTfub.js";import{s as v}from"./parameters-bundle.css-DJWIHzS2.js";import"./utils-B4B9qFe5.js";import"./index-ClU-Tc1p.js";import"./useIsomorphicLayoutEffect-BDy32gDd.js";import"./ResizeHandler-TnLd8hOy.js";import"./ItemNavigation-CIi6TzBH.js";import"./getActiveElement-kltGt_DR.js";import"./event-Dq0fpeHi.js";import"./slot-_4yKMUwC.js";import"./AriaLabelHelper-C5uDZewF.js";import"./isElementInView-CjfjvN8v.js";import"./getEffectiveScrollbarStyle-BsLHc2Qj.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./i18nBundle-shm5Q6c6.js";import"./debounce-TTkz9ISH.js";import"./BusyIndicator-C9Q0CDgp.js";import"./Label-BcgafC0L.js";import"./i18n-defaults-DRoh8QZU.js";import"./BrowserScrollbar.css-Cvy61GCB.js";import"./MarkedEvents-CAur0wxK.js";import"./decline-P6ltvR0I.js";import"./Icon-BIxZr4TA.js";import"./i18n-defaults-CEQaAj6E.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-8nT8kXhO.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-BL1miepq.js";import"./accept-B_wtZvcq.js";import"./Button-BsDFAdhY.js";import"./willShowContent-CZcfsNXp.js";import"./slim-arrow-right-5rp1rFN9.js";import"./Avatar-DrCFK53V.js";import"./employee-Bjf4oLVT.js";import"./alert-C2BbHj1C.js";function $(e,t,i){return c`<li part="native-li" data-sap-focus-ref tabindex="${l(this._effectiveTabIndex)}" class="${x(this.classes.main)}" @focusin="${this._onfocusin}" @keyup="${this._onkeyup}" @keydown="${this._onkeydown}" draggable="${l(this.movable)}" @click="${this._onclick}" ><div part="content" id="content" class="ui5-li-content"><div class="ui5-li-text-wrapper"><span part="title" class="ui5-li-title">${h(this.markupText)}</span>${this.additionalText?y.call(this,e,t,i):void 0}</div></div></li>`}function y(e,t,i){return c`<span part="additional-text" class="ui5-li-additional-text">${l(this.additionalText)}</span>`}d("@ui5/webcomponents-theming","sap_horizon",async()=>g);d("@ui5/webcomponents","sap_horizon",async()=>v);const k={packageName:"@ui5/webcomponents",fileName:"themes/SuggestionItem.css.ts",content:`:host([ui5-suggestion-item]){height:auto;min-height:var(--_ui5-v2-1-1_list_item_base_height)}:host([ui5-suggestion-item]) .ui5-li-root{min-height:var(--_ui5-v2-1-1_list_item_base_height)}:host([ui5-suggestion-item]) .ui5-li-content{padding-bottom:.875rem;padding-top:.875rem;box-sizing:border-box}
`};var p=function(e,t,i,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(m=e[a])&&(o=(n<3?m(o):n>3?m(t,i,o):m(t,i))||o);return n>3&&o&&Object.defineProperty(t,i,o),o};let s=class extends f{constructor(){super(...arguments),this.markupText=""}onEnterDOM(){b()&&this.setAttribute("desktop","")}};p([u()],s.prototype,"text",void 0);p([u()],s.prototype,"additionalText",void 0);p([u()],s.prototype,"markupText",void 0);s=p([_({tag:"ui5-suggestion-item",template:$,styles:[f.styles,k]})],s);s.define();const ut=s;export{ut as default};
