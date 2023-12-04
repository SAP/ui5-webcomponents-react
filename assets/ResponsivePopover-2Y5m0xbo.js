import{b as s,d as p,l as i,s as y,a as D,p as g,c as w}from"./withWebComponent-I1wSIv4y.js";import{r as v,j as n}from"./UI5Element-Jt3C0_FN.js";import{d as O}from"./i18nBundle-ZoJ37UJR.js";import{g as k}from"./PopupUtils-QCyiTOMI.js";import{R as x}from"./i18n-defaults-zEJ36VRV.js";import{o as _}from"./class-map-CHDPODen.js";import{s as m}from"./style-map-xQ1SPtMO.js";import{c as b}from"./Popover-5ANP4Jn7.js";import T from"./Dialog-ki1YSo8q.js";import{b as P}from"./Button-CV8gKi73.js";import{a as R}from"./Title-xXK6MFOu.js";import"./decline-4Ez_2Sev.js";import"./utils-KU8RGjGn.js";import"./VersionInfo-LCCO4Ig5.js";import"./index-OjgoNOWw.js";import"./CustomElementsScopeUtils-M7hMRmEH.js";import"./jsx-runtime-DtaoT6pD.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./getActiveElement-IIKAy3xo.js";import"./slot-HSrR9XJ-.js";import"./Integer-kog98579.js";import"./PopupsCommon.css-NvRre6vc.js";import"./Icon-G6aW2FRW.js";import"./Icons-Nr5kgAbF.js";import"./FocusableElements-sOHKyey_.js";import"./isElementHidden-d3-Fo4V6.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./ResizeHandler-mTFvwsyT.js";import"./MediaRange-sEMt71Ve.js";import"./BrowserScrollbar.css-R_PDLCAQ.js";import"./ValueState-zUcANXoY.js";import"./information-bkjyqQzA.js";import"./i18n-defaults-CPLPRuO1.js";import"./alert-7Etxrsap.js";import"./MarkedEvents-aYv14vsS.js";import"./WrappingType-avPrqc94.js";function E(o,e,t){return s`${this._isPhone?B.call(this,o,e,t):A.call(this,o,e,t)}`}function B(o,e,t){return t?s`<${p("ui5-dialog",e,t)} accessible-name=${i(this.accessibleName)} accessible-name-ref=${i(this.accessibleNameRef)} accessible-role=${i(this.accessibleRole)} stretch _disable-initial-focus @ui5-before-open="${i(this._beforeDialogOpen)}" @ui5-after-open="${i(this._propagateDialogEvent)}" @ui5-before-close="${i(this._propagateDialogEvent)}" @ui5-after-close="${i(this._afterDialogClose)}" exportparts="content, header, footer">${this._hideHeader?void 0:$.call(this,o,e,t)}<slot></slot><slot slot="footer" name="footer"></slot></${p("ui5-dialog",e,t)}>`:s`<ui5-dialog accessible-name=${i(this.accessibleName)} accessible-name-ref=${i(this.accessibleNameRef)} accessible-role=${i(this.accessibleRole)} stretch _disable-initial-focus @ui5-before-open="${i(this._beforeDialogOpen)}" @ui5-after-open="${i(this._propagateDialogEvent)}" @ui5-before-close="${i(this._propagateDialogEvent)}" @ui5-after-close="${i(this._afterDialogClose)}" exportparts="content, header, footer">${this._hideHeader?void 0:$.call(this,o,e,t)}<slot></slot><slot slot="footer" name="footer"></slot></ui5-dialog>`}function $(o,e,t){return s`${this.header.length?H.call(this,o,e,t):L.call(this,o,e,t)}`}function H(o,e,t){return s`<slot slot="header" name="header"></slot>`}function L(o,e,t){return s`<div class="${_(this.classes.header)}" slot="header">${this.headerText?N.call(this,o,e,t):void 0}${this._hideCloseButton?void 0:M.call(this,o,e,t)}</div>`}function N(o,e,t){return t?s`<${p("ui5-title",e,t)} level="H2" class="ui5-popup-header-text ui5-responsive-popover-header-text">${i(this.headerText)}</${p("ui5-title",e,t)}>`:s`<ui5-title level="H2" class="ui5-popup-header-text ui5-responsive-popover-header-text">${i(this.headerText)}</ui5-title>`}function M(o,e,t){return t?s`<${p("ui5-button",e,t)} icon="decline" design="Transparent" aria-label="${i(this._closeDialogAriaLabel)}" @click="${this.close}"></${p("ui5-button",e,t)}>`:s`<ui5-button icon="decline" design="Transparent" aria-label="${i(this._closeDialogAriaLabel)}" @click="${this.close}"></ui5-button>`}function A(o,e,t){return s`<section style="${m(this.styles.root)}" class="${_(this.classes.root)}" role="${i(this._role)}" aria-modal="${i(this._ariaModal)}" aria-label="${i(this._ariaLabel)}" aria-labelledby="${i(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToLast}></span><span class="ui5-popover-arrow" style="${m(this.styles.arrow)}"></span>${this._displayHeader?C.call(this,o,e,t):void 0}<div style="${m(this.styles.content)}" class="${_(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div>${this._displayFooter?S.call(this,o,e,t):void 0}<span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToFirst}></span></section>`}function C(o,e,t){return s`<header class="ui5-popup-header-root" id="ui5-popup-header" part="header">${this.header.length?j.call(this,o,e,t):I.call(this,o,e,t)}</header>`}function j(o,e,t){return s`<slot name="header"></slot>`}function I(o,e,t){return s`<h1 class="ui5-popup-header-text">${i(this.headerText)}</h1>`}function S(o,e,t){return s`${this.footer.length?z.call(this,o,e,t):void 0}`}function z(o,e,t){return s`<footer class="ui5-popup-footer-root" part="footer"><slot name="footer"></slot></footer>`}v("@ui5/webcomponents-theming","sap_horizon",async()=>y);v("@ui5/webcomponents","sap_horizon",async()=>D);const V={packageName:"@ui5/webcomponents",fileName:"themes/ResponsivePopover.css",content:":host{--_ui5-v1-20-0_input_width:100%;min-height:2rem;min-width:6.25rem}:host([opened]){display:inline-block}.ui5-responsive-popover-header{align-items:center;display:flex;height:var(--_ui5-v1-20-0-responsive_popover_header_height);justify-content:space-between;width:100%}.ui5-responsive-popover-header-text{width:calc(100% - var(--_ui5-v1-20-0_button_base_min_width))}.ui5-responsive-popover-header-no-title{justify-content:flex-end}"};var d=function(o,e,t,r){var c=arguments.length,a=c<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,e,t,r);else for(var f=o.length-1;f>=0;f--)(h=o[f])&&(a=(c<3?h(a):c>3?h(e,t,a):h(e,t))||a);return c>3&&a&&Object.defineProperty(e,t,a),a},u;let l=u=class extends b{constructor(){super()}async showAt(e,t=!1){if(!n())await super.showAt(e,t);else{this.style.display="contents";const r=k();if(!r)return;this.style.zIndex=r.toString(),await this._dialog.show(t)}}close(e=!1,t=!1,r=!1){n()?this._dialog.close(e,t,r):super.close(e,t,r)}toggle(e){if(this.isOpen())return this.close();this.showAt(e)}isOpen(){return n()&&this._dialog?this._dialog.isOpen():super.isOpen()}get classes(){const e=super.classes;return e.header={"ui5-responsive-popover-header":!0,"ui5-responsive-popover-header-no-title":!this.headerText},e}get _dialog(){return this.shadowRoot.querySelector("[ui5-dialog]")}get contentDOM(){return n()?this._dialog.contentDOM:super.contentDOM}get _isPhone(){return n()}get _displayHeader(){return(n()||!this.contentOnlyOnDesktop)&&super._displayHeader}get _displayFooter(){return n()||!this.contentOnlyOnDesktop}get _closeDialogAriaLabel(){return u.i18nBundle.getText(x)}_beforeDialogOpen(e){this.open=!0,this.opened=!0,this._propagateDialogEvent(e)}_afterDialogClose(e){this.open=!1,this.opened=!1,this._propagateDialogEvent(e)}_propagateDialogEvent(e){const t=e.type.replace("ui5-","");this.fireEvent(t,e.detail)}get isModal(){return n()?this._dialog.isModal:super.isModal}static async onDefine(){u.i18nBundle=await O("@ui5/webcomponents")}};d([g({type:Boolean})],l.prototype,"contentOnlyOnDesktop",void 0);d([g({type:Boolean})],l.prototype,"_hideHeader",void 0);d([g({type:Boolean})],l.prototype,"_hideCloseButton",void 0);l=u=d([w({tag:"ui5-responsive-popover",styles:[b.styles,V],template:E,dependencies:[...b.dependencies,P,T,R]})],l);l.define();const xe=l;export{xe as default};
