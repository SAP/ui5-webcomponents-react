import{h as s,j as a,f as g,s as y,a as v,m as D}from"./withWebComponent-CPW0iYAf.js";import{d as n}from"./Keys-F_3Gvx0K.js";import{f as w}from"./i18nBundle-shm5Q6c6.js";import{R as O}from"./i18n-defaults-DRoh8QZU.js";import{l as i}from"./if-defined-BCPYWAh1.js";import{o as _}from"./class-map-CQfLTfub.js";import{s as m}from"./style-map-Do0KrzH5.js";import{c as $}from"./Popover-C804Stt9.js";import k from"./Dialog-BhrO_1Jd.js";import{b as P}from"./Button-BsDFAdhY.js";import"./useIsomorphicLayoutEffect-BDy32gDd.js";import"./decline-P6ltvR0I.js";import{s as R}from"./parameters-bundle.css-DJWIHzS2.js";import"./utils-B4B9qFe5.js";import"./index-ClU-Tc1p.js";import"./slot-_4yKMUwC.js";import"./PopupsCommon.css-C-wswpgh.js";import"./event-Dq0fpeHi.js";import"./getEffectiveScrollbarStyle-BsLHc2Qj.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./AriaLabelHelper-C5uDZewF.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-TnLd8hOy.js";import"./MediaRange-Bnzt26Xb.js";import"./Title-qjobRWCv.js";import"./BrowserScrollbar.css-Cvy61GCB.js";import"./ValueState-Bg0UWejw.js";import"./Icon-BIxZr4TA.js";import"./information-B1l_cM6v.js";import"./i18n-defaults-CEQaAj6E.js";import"./alert-C2BbHj1C.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";function B(o,e,t){return s`${this._isPhone?T.call(this,o,e,t):N.call(this,o,e,t)}`}function T(o,e,t){return t?s`<${a("ui5-dialog",e,t)} root-element accessible-name=${i(this.accessibleName)} accessible-name-ref=${i(this.accessibleNameRef)} accessible-role=${i(this.accessibleRole)} stretch ?prevent-initial-focus="${this.preventInitialFocus}" initial-focus="${i(this.initialFocus)}" @ui5-before-open="${i(this._beforeDialogOpen)}" @ui5-open="${i(this._propagateDialogEvent)}" @ui5-before-close="${i(this._propagateDialogEvent)}" @ui5-close="${i(this._afterDialogClose)}" exportparts="content, header, footer" .open=${i(this.open)}>${this._hideHeader?void 0:b.call(this,o,e,t)}<slot></slot><slot slot="footer" name="footer"></slot></${a("ui5-dialog",e,t)}>`:s`<ui5-dialog root-element accessible-name=${i(this.accessibleName)} accessible-name-ref=${i(this.accessibleNameRef)} accessible-role=${i(this.accessibleRole)} stretch ?prevent-initial-focus="${this.preventInitialFocus}" initial-focus="${i(this.initialFocus)}" @ui5-before-open="${i(this._beforeDialogOpen)}" @ui5-open="${i(this._propagateDialogEvent)}" @ui5-before-close="${i(this._propagateDialogEvent)}" @ui5-close="${i(this._afterDialogClose)}" exportparts="content, header, footer" .open=${i(this.open)}>${this._hideHeader?void 0:b.call(this,o,e,t)}<slot></slot><slot slot="footer" name="footer"></slot></ui5-dialog>`}function b(o,e,t){return s`${this.header.length?E.call(this,o,e,t):x.call(this,o,e,t)}`}function E(o,e,t){return s`<slot slot="header" name="header"></slot>`}function x(o,e,t){return s`<div class="${_(this.classes.header)}" slot="header">${this.headerText?H.call(this,o,e,t):void 0}${this._hideCloseButton?void 0:L.call(this,o,e,t)}</div>`}function H(o,e,t){return t?s`<${a("ui5-title",e,t)} level="H1" wrapping-type="None" class="ui5-popup-header-text ui5-responsive-popover-header-text">${i(this.headerText)}</${a("ui5-title",e,t)}>`:s`<ui5-title level="H1" wrapping-type="None" class="ui5-popup-header-text ui5-responsive-popover-header-text">${i(this.headerText)}</ui5-title>`}function L(o,e,t){return t?s`<${a("ui5-button",e,t)} icon="decline" design="Transparent" accessible-name="${i(this._closeDialogAriaLabel)}" @click="${this.closePopup}"></${a("ui5-button",e,t)}>`:s`<ui5-button icon="decline" design="Transparent" accessible-name="${i(this._closeDialogAriaLabel)}" @click="${this.closePopup}"></ui5-button>`}function N(o,e,t){return s`<div class="ui5-block-layer" @keydown="${this._preventBlockLayerFocus}" @mousedown="${this._preventBlockLayerFocus}"></div><section root-element style="${m(this.styles.root)}" class="${_(this.classes.root)}" role="${i(this._role)}" aria-modal="${i(this._ariaModal)}" aria-label="${i(this._ariaLabel)}" aria-labelledby="${i(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToLast}></span><span class="ui5-popover-arrow" style="${m(this.styles.arrow)}"></span>${this._displayHeader?C.call(this,o,e,t):void 0}<div style="${m(this.styles.content)}" class="${_(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div>${this._displayFooter?j.call(this,o,e,t):void 0}<span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToFirst}></span></section>`}function C(o,e,t){return s`<header class="ui5-popup-header-root" id="ui5-popup-header" part="header">${this.header.length?F.call(this,o,e,t):M.call(this,o,e,t)}</header>`}function F(o,e,t){return s`<slot name="header"></slot>`}function M(o,e,t){return t?s`<${a("ui5-title",e,t)} level="H1" class="ui5-popup-header-text">${i(this.headerText)}</${a("ui5-title",e,t)}>`:s`<ui5-title level="H1" class="ui5-popup-header-text">${i(this.headerText)}</ui5-title>`}function j(o,e,t){return s`${this.footer.length?A.call(this,o,e,t):void 0}`}function A(o,e,t){return s`<footer class="ui5-popup-footer-root" part="footer"><slot name="footer"></slot></footer>`}g("@ui5/webcomponents-theming","sap_horizon",async()=>y);g("@ui5/webcomponents","sap_horizon",async()=>R);const I={packageName:"@ui5/webcomponents",fileName:"themes/ResponsivePopover.css.ts",content:`:host{--_ui5-v2-1-1_input_width: 100%;min-width:6.25rem;min-height:2rem}:host([on-phone]){display:contents}.ui5-responsive-popover-header{height:var(--_ui5-v2-1-1-responsive_popover_header_height);display:flex;justify-content:var(--_ui5-v2-1-1_popup_header_prop_header_text_alignment);align-items:center;width:100%}.ui5-responsive-popover-header-text{width:calc(100% - var(--_ui5-v2-1-1_button_base_min_width))}.ui5-responsive-popover-header-no-title{justify-content:flex-end}
`};var d=function(o,e,t,l){var p=arguments.length,r=p<3?e:l===null?l=Object.getOwnPropertyDescriptor(e,t):l,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,t,l);else for(var f=o.length-1;f>=0;f--)(h=o[f])&&(r=(p<3?h(r):p>3?h(e,t,r):h(e,t))||r);return p>3&&r&&Object.defineProperty(e,t,r),r},u;let c=u=class extends ${constructor(){super(),this.contentOnlyOnDesktop=!1,this._hideHeader=!1,this._hideCloseButton=!1}async openPopup(){n()?this._dialog&&(this._dialog.open=!0):await super.openPopup()}async _show(){if(!n())return super._show()}closePopup(e=!1,t=!1,l=!1){var p;n()?(p=this._dialog)==null||p.closePopup(e,t,l):super.closePopup(e,t,l)}toggle(e){if(this.open){this.closePopup();return}this.opener=e,this.open=!0}get classes(){const e=super.classes;return e.header={"ui5-responsive-popover-header":!0,"ui5-responsive-popover-header-no-title":!this.headerText},e}get _dialog(){return this.shadowRoot.querySelector("[ui5-dialog]")}get contentDOM(){return n()?this._dialog.contentDOM:super.contentDOM}get _isPhone(){return n()}get _displayHeader(){return(n()||!this.contentOnlyOnDesktop)&&super._displayHeader}get _displayFooter(){return n()||!this.contentOnlyOnDesktop}get _closeDialogAriaLabel(){return u.i18nBundle.getText(O)}_beforeDialogOpen(e){this._opened=!0,this.open=!0,this._propagateDialogEvent(e)}_afterDialogClose(e){this._opened=!1,this.open=!1,this._propagateDialogEvent(e)}_propagateDialogEvent(e){const t=e.type.replace("ui5-","");this.fireEvent(t,e.detail)}get isModal(){return n()?this._dialog.isModal:super.isModal}static async onDefine(){u.i18nBundle=await w("@ui5/webcomponents")}};d([v({type:Boolean})],c.prototype,"contentOnlyOnDesktop",void 0);d([v({type:Boolean})],c.prototype,"_hideHeader",void 0);d([v({type:Boolean})],c.prototype,"_hideCloseButton",void 0);c=u=d([D({tag:"ui5-responsive-popover",styles:[$.styles,I],template:B,dependencies:[...$.dependencies,P,k]})],c);c.define();const De=c;export{De as default};
