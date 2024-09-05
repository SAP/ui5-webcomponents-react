import{a as s,b as p,l as i,s as y,p as $,c as D}from"./withWebComponent-iwEMLCwM.js";import{i as n}from"./useIsomorphicLayoutEffect-DxKEogMX.js";import{b as w}from"./i18nBundle-DAKTKoOS.js";import{g as O}from"./PopupUtils-BSU3X0q-.js";import{R as k}from"./i18n-defaults-bByU6Tgp.js";import{o as _}from"./class-map-BOjq1HnK.js";import{s as m}from"./style-map-lexY8e40.js";import{c as b}from"./Popover-AhBPjl_E.js";import x from"./Dialog-CMIFxXp5.js";import{b as T}from"./Button-VSTwXR50.js";import{a as P}from"./Title-BBSMWZjZ.js";import"./decline-2wLd8OXz.js";import{r as v}from"./Boot-HIcYreCJ.js";import{s as R}from"./parameters-bundle.css-Dq8i2jqa.js";import"./CustomElementsScope-OuufJIgt.js";import"./EventProvider-B3ZIXKWe.js";import"./index-BP8_t0zE.js";import"./utils-BWz0JEZ6.js";import"./getActiveElement-BL9Yqj8a.js";import"./slot-Df15G--e.js";import"./Integer-Dh6YzFpK.js";import"./PopupsCommon.css-82AGaEWQ.js";import"./event-CegLCnR0.js";import"./UI5Element-CTUeyjn-.js";import"./FocusableElements-j-RSUQUA.js";import"./isElementHidden-Bpu2V8BK.js";import"./AriaLabelHelper-CzOXVcye.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./Keys-BgUkNma0.js";import"./ResizeHandler-DXT2JxMm.js";import"./MediaRange-CQ-a3KRn.js";import"./BrowserScrollbar.css-CW1dP_e5.js";import"./ValueState-Bn-H2OaL.js";import"./Icon-4o6dsg6U.js";import"./Icons-Cd2oYa75.js";import"./information-ByKCPUae.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-DgMNwF9A.js";import"./MarkedEvents-BPv6Lv4o.js";import"./willShowContent-BOkh0bwj.js";import"./Tooltips-BagSeUK-.js";import"./HasPopup-Cecjtg2t.js";import"./WrappingType-CW8URInd.js";function E(o,e,t){return s`${this._isPhone?B.call(this,o,e,t):A.call(this,o,e,t)}`}function B(o,e,t){return t?s`<${p("ui5-dialog",e,t)} accessible-name=${i(this.accessibleName)} accessible-name-ref=${i(this.accessibleNameRef)} accessible-role=${i(this.accessibleRole)} stretch ?_disable-initial-focus="${i(this._disableInitialFocus)}" initial-focus="${i(this.initialFocus)}" @ui5-before-open="${i(this._beforeDialogOpen)}" @ui5-after-open="${i(this._propagateDialogEvent)}" @ui5-before-close="${i(this._propagateDialogEvent)}" @ui5-after-close="${i(this._afterDialogClose)}" exportparts="content, header, footer">${this._hideHeader?void 0:g.call(this,o,e,t)}<slot></slot><slot slot="footer" name="footer"></slot></${p("ui5-dialog",e,t)}>`:s`<ui5-dialog accessible-name=${i(this.accessibleName)} accessible-name-ref=${i(this.accessibleNameRef)} accessible-role=${i(this.accessibleRole)} stretch ?_disable-initial-focus="${i(this._disableInitialFocus)}" initial-focus="${i(this.initialFocus)}" @ui5-before-open="${i(this._beforeDialogOpen)}" @ui5-after-open="${i(this._propagateDialogEvent)}" @ui5-before-close="${i(this._propagateDialogEvent)}" @ui5-after-close="${i(this._afterDialogClose)}" exportparts="content, header, footer">${this._hideHeader?void 0:g.call(this,o,e,t)}<slot></slot><slot slot="footer" name="footer"></slot></ui5-dialog>`}function g(o,e,t){return s`${this.header.length?H.call(this,o,e,t):L.call(this,o,e,t)}`}function H(o,e,t){return s`<slot slot="header" name="header"></slot>`}function L(o,e,t){return s`<div class="${_(this.classes.header)}" slot="header">${this.headerText?N.call(this,o,e,t):void 0}${this._hideCloseButton?void 0:M.call(this,o,e,t)}</div>`}function N(o,e,t){return t?s`<${p("ui5-title",e,t)} level="H2" class="ui5-popup-header-text ui5-responsive-popover-header-text">${i(this.headerText)}</${p("ui5-title",e,t)}>`:s`<ui5-title level="H2" class="ui5-popup-header-text ui5-responsive-popover-header-text">${i(this.headerText)}</ui5-title>`}function M(o,e,t){return t?s`<${p("ui5-button",e,t)} icon="decline" design="Transparent" aria-label="${i(this._closeDialogAriaLabel)}" @click="${this.close}"></${p("ui5-button",e,t)}>`:s`<ui5-button icon="decline" design="Transparent" aria-label="${i(this._closeDialogAriaLabel)}" @click="${this.close}"></ui5-button>`}function A(o,e,t){return s`<section style="${m(this.styles.root)}" class="${_(this.classes.root)}" role="${i(this._role)}" aria-modal="${i(this._ariaModal)}" aria-label="${i(this._ariaLabel)}" aria-labelledby="${i(this._ariaLabelledBy)}" @keydown=${this._onkeydown} @focusout=${this._onfocusout} @mouseup=${this._onmouseup} @mousedown=${this._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToLast}></span><span class="ui5-popover-arrow" style="${m(this.styles.arrow)}"></span>${this._displayHeader?C.call(this,o,e,t):void 0}<div style="${m(this.styles.content)}" class="${_(this.classes.content)}"  @scroll="${this._scroll}" part="content"><slot></slot></div>${this._displayFooter?F.call(this,o,e,t):void 0}<span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${this.forwardToFirst}></span></section>`}function C(o,e,t){return s`<header class="ui5-popup-header-root" id="ui5-popup-header" part="header">${this.header.length?I.call(this,o,e,t):j.call(this,o,e,t)}</header>`}function I(o,e,t){return s`<slot name="header"></slot>`}function j(o,e,t){return s`<h1 class="ui5-popup-header-text">${i(this.headerText)}</h1>`}function F(o,e,t){return s`${this.footer.length?S.call(this,o,e,t):void 0}`}function S(o,e,t){return s`<footer class="ui5-popup-footer-root" part="footer"><slot name="footer"></slot></footer>`}v("@ui5/webcomponents-theming","sap_horizon",async()=>y);v("@ui5/webcomponents","sap_horizon",async()=>R);const z={packageName:"@ui5/webcomponents",fileName:"themes/ResponsivePopover.css.ts",content:`:host{--_ui5-v1-24-9_input_width: 100%;min-width:6.25rem;min-height:2rem}:host([opened]){display:inline-block}.ui5-responsive-popover-header{height:var(--_ui5-v1-24-9-responsive_popover_header_height);display:flex;justify-content:space-between;align-items:center;width:100%}.ui5-responsive-popover-header-text{width:calc(100% - var(--_ui5-v1-24-9_button_base_min_width))}.ui5-responsive-popover-header-no-title{justify-content:flex-end}
`};var d=function(o,e,t,r){var c=arguments.length,a=c<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,e,t,r);else for(var f=o.length-1;f>=0;f--)(h=o[f])&&(a=(c<3?h(a):c>3?h(e,t,a):h(e,t))||a);return c>3&&a&&Object.defineProperty(e,t,a),a},u;let l=u=class extends b{constructor(){super()}async showAt(e,t=!1){if(!n())await super.showAt(e,t);else{this.style.display="contents";const r=O();if(!r)return;this.style.zIndex=r.toString(),await this._dialog.show(t)}}close(e=!1,t=!1,r=!1){n()?this._dialog.close(e,t,r):super.close(e,t,r)}toggle(e){if(this.isOpen())return this.close();this.showAt(e)}isOpen(){return n()&&this._dialog?this._dialog.isOpen():super.isOpen()}get classes(){const e=super.classes;return e.header={"ui5-responsive-popover-header":!0,"ui5-responsive-popover-header-no-title":!this.headerText},e}get _dialog(){return this.shadowRoot.querySelector("[ui5-dialog]")}get contentDOM(){return n()?this._dialog.contentDOM:super.contentDOM}get _isPhone(){return n()}get _displayHeader(){return(n()||!this.contentOnlyOnDesktop)&&super._displayHeader}get _displayFooter(){return n()||!this.contentOnlyOnDesktop}get _closeDialogAriaLabel(){return u.i18nBundle.getText(k)}_beforeDialogOpen(e){this.open=!0,this.opened=!0,this._propagateDialogEvent(e)}_afterDialogClose(e){this.open=!1,this.opened=!1,this._propagateDialogEvent(e)}_propagateDialogEvent(e){const t=e.type.replace("ui5-","");this.fireEvent(t,e.detail)}get isModal(){return n()?this._dialog.isModal:super.isModal}static async onDefine(){u.i18nBundle=await w("@ui5/webcomponents")}};d([$({type:Boolean})],l.prototype,"contentOnlyOnDesktop",void 0);d([$({type:Boolean})],l.prototype,"_hideHeader",void 0);d([$({type:Boolean})],l.prototype,"_hideCloseButton",void 0);l=u=d([D({tag:"ui5-responsive-popover",styles:[b.styles,z],template:E,dependencies:[...b.dependencies,T,x,P]})],l);l.define();const Le=l;export{Le as default};
