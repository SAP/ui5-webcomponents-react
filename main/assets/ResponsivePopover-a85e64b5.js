import{e as a,f as n,l as i,s as y,a as D,p as b,c as w}from"./withWebComponent-e4481254.js";import{c as l}from"./Device-208919c6.js";import{a as v,d as O}from"./UI5Element-427ec721.js";import{e as k}from"./PopupsCommon.css-d3649668.js";import{R as T}from"./i18n-defaults-6bc67b6a.js";import{o as _}from"./class-map-5d8e4b2b.js";import{s as m}from"./style-map-77d201d2.js";import{c as g}from"./Popover-54e30804.js";import P from"./Dialog-7fbd90ac.js";import{B as R}from"./Button-876771f0.js";import{a as E}from"./Title-b986a4bd.js";import"./decline-f2b294b3.js";import"./utils-ed90fb1b.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./jsx-runtime-670450c2.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./event-97133b94.js";import"./slot-634e3e91.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./AriaLabelHelper-43a261ec.js";import"./BrowserScrollbar.css-615afd63.js";import"./Keys-3acbae73.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./Integer-f7f172c9.js";import"./ValueState-2c5e5904.js";import"./Icon-459702a7.js";import"./Icons-7b82f601.js";import"./information-50e1ad0f.js";import"./i18n-defaults-80781f7e.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";const B=(e,o,s)=>a`${e._isPhone?H(e,o,s):C(e)}`,H=(e,o,s)=>s?a`<${n("ui5-dialog",o,s)} accessible-name=${i(e.accessibleName)} accessible-name-ref=${i(e.accessibleNameRef)} accessible-role=${i(e.accessibleRole)} stretch _disable-initial-focus @ui5-before-open="${i(e._beforeDialogOpen)}" @ui5-after-open="${i(e._propagateDialogEvent)}" @ui5-before-close="${i(e._propagateDialogEvent)}" @ui5-after-close="${i(e._afterDialogClose)}" exportparts="content, header, footer">${e._hideHeader?void 0:$(e,o,s)}<slot></slot><slot slot="footer" name="footer"></slot></${n("ui5-dialog",o,s)}>`:a`<ui5-dialog accessible-name=${i(e.accessibleName)} accessible-name-ref=${i(e.accessibleNameRef)} accessible-role=${i(e.accessibleRole)} stretch _disable-initial-focus @ui5-before-open="${i(e._beforeDialogOpen)}" @ui5-after-open="${i(e._propagateDialogEvent)}" @ui5-before-close="${i(e._propagateDialogEvent)}" @ui5-after-close="${i(e._afterDialogClose)}" exportparts="content, header, footer">${e._hideHeader?void 0:$(e,o,s)}<slot></slot><slot slot="footer" name="footer"></slot></ui5-dialog>`,$=(e,o,s)=>a`${e.header.length?L():N(e,o,s)}`,L=(e,o,s)=>a`<slot slot="header" name="header"></slot>`,N=(e,o,s)=>a`<div class="${_(e.classes.header)}" slot="header">${e.headerText?M(e,o,s):void 0}${e._hideCloseButton?void 0:A(e,o,s)}</div>`,M=(e,o,s)=>s?a`<${n("ui5-title",o,s)} level="H2" class="ui5-popup-header-text ui5-responsive-popover-header-text">${i(e.headerText)}</${n("ui5-title",o,s)}>`:a`<ui5-title level="H2" class="ui5-popup-header-text ui5-responsive-popover-header-text">${i(e.headerText)}</ui5-title>`,A=(e,o,s)=>s?a`<${n("ui5-button",o,s)} icon="decline" design="Transparent" aria-label="${i(e._closeDialogAriaLabel)}" @click="${e.close}"></${n("ui5-button",o,s)}>`:a`<ui5-button icon="decline" design="Transparent" aria-label="${i(e._closeDialogAriaLabel)}" @click="${e.close}"></ui5-button>`,C=(e,o,s)=>a`<section style="${m(e.styles.root)}" class="${_(e.classes.root)}" role="${i(e._role)}" aria-modal="${i(e._ariaModal)}" aria-label="${i(e._ariaLabel)}" aria-labelledby="${i(e._ariaLabelledBy)}" @keydown=${e._onkeydown} @focusout=${e._onfocusout} @mouseup=${e._onmouseup} @mousedown=${e._onmousedown}><span class="first-fe" data-ui5-focus-trap tabindex="0" @focusin=${e.forwardToLast}></span><span class="ui5-popover-arrow" style="${m(e.styles.arrow)}"></span>${e._displayHeader?j(e):void 0}<div style="${m(e.styles.content)}" class="${_(e.classes.content)}"  @scroll="${e._scroll}" part="content"><slot></slot></div>${e._displayFooter?V(e):void 0}<span class="last-fe" data-ui5-focus-trap tabindex="0" @focusin=${e.forwardToFirst}></span></section>`,j=(e,o,s)=>a`<header class="ui5-popup-header-root" id="ui5-popup-header" part="header">${e.header.length?I():S(e)}</header>`,I=(e,o,s)=>a`<slot name="header"></slot>`,S=(e,o,s)=>a`<h1 class="ui5-popup-header-text">${i(e.headerText)}</h1>`,V=(e,o,s)=>a`${e.footer.length?Z():void 0}`,Z=(e,o,s)=>a`<footer class="ui5-popup-footer-root" part="footer"><slot name="footer"></slot></footer>`;v("@ui5/webcomponents-theming","sap_fiori_3",async()=>y);v("@ui5/webcomponents","sap_fiori_3",async()=>D);const q={packageName:"@ui5/webcomponents",fileName:"themes/ResponsivePopover.css.ts",content:":host{--_ui5_input_width:100%;min-width:6.25rem;min-height:2rem}:host([opened]){display:inline-block}.ui5-responsive-popover-header{height:var(--_ui5-responsive_popover_header_height);display:flex;justify-content:space-between;align-items:center;width:100%}.ui5-responsive-popover-header-text{width:calc(100% - var(--_ui5_button_base_min_width))}.ui5-responsive-popover-header-no-title{justify-content:flex-end}"};var f=globalThis&&globalThis.__decorate||function(e,o,s,t){var d=arguments.length,r=d<3?o:t===null?t=Object.getOwnPropertyDescriptor(o,s):t,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,o,s,t);else for(var h=e.length-1;h>=0;h--)(u=e[h])&&(r=(d<3?u(r):d>3?u(o,s,r):u(o,s))||r);return d>3&&r&&Object.defineProperty(o,s,r),r},c;let p=c=class extends g{constructor(){super()}async showAt(o,s=!1){if(!l())await super.showAt(o,s);else{this.style.display="contents";const t=k();if(!t)return;this.style.zIndex=t.toString(),await this._dialog.show(s)}}close(o=!1,s=!1,t=!1){l()?this._dialog.close(o,s,t):super.close(o,s,t)}toggle(o){if(this.isOpen())return this.close();this.showAt(o)}isOpen(){return l()&&this._dialog?this._dialog.isOpen():super.isOpen()}get classes(){const o=super.classes;return o.header={"ui5-responsive-popover-header":!0,"ui5-responsive-popover-header-no-title":!this.headerText},o}get _dialog(){return this.shadowRoot.querySelector("[ui5-dialog]")}get contentDOM(){return l()?this._dialog.contentDOM:super.contentDOM}get _isPhone(){return l()}get _displayHeader(){return(l()||!this.contentOnlyOnDesktop)&&super._displayHeader}get _displayFooter(){return l()||!this.contentOnlyOnDesktop}get _closeDialogAriaLabel(){return c.i18nBundle.getText(T)}_beforeDialogOpen(o){this.open=!0,this.opened=!0,this._propagateDialogEvent(o)}_afterDialogClose(o){this.open=!1,this.opened=!1,this._propagateDialogEvent(o)}_propagateDialogEvent(o){const s=o.type.replace("ui5-","");this.fireEvent(s,o.detail)}get isModal(){return l()?this._dialog.isModal:super.isModal}static async onDefine(){c.i18nBundle=await O("@ui5/webcomponents")}};f([b({type:Boolean})],p.prototype,"contentOnlyOnDesktop",void 0);f([b({type:Boolean})],p.prototype,"_hideHeader",void 0);f([b({type:Boolean})],p.prototype,"_hideCloseButton",void 0);p=c=f([w({tag:"ui5-responsive-popover",styles:[g.styles,q],template:B,dependencies:[...g.dependencies,R,P,E]})],p);p.define();const Te=p;export{Te as default};
//# sourceMappingURL=ResponsivePopover-a85e64b5.js.map
