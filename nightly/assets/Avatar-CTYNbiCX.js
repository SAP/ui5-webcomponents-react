import{h as n,j as u,f as p,s as g,a as r,m as k,I as z,p as y,k as A}from"./withWebComponent-DykTwaBJ.js";import{d as f}from"./slot-_4yKMUwC.js";import{s as w}from"./event-Dq0fpeHi.js";import{f as I}from"./i18nBundle-CEPDwMcb.js";import{f as m}from"./ResizeHandler-CwA30WlK.js";import{f as S,b as $,a as b}from"./Keys-F_3Gvx0K.js";import{l as s}from"./if-defined-Pg2MF6OO.js";import{A as L}from"./i18n-defaults-Ddp6Qu_n.js";import{s as B}from"./parameters-bundle.css-BFbT_feV.js";import{I as C}from"./Icon-C1aVUqaK.js";import"./useIsomorphicLayoutEffect-Cwmfti2R.js";import"./employee-CVOZDo5u.js";import"./alert-B5x9ZRdn.js";import"./utils-BXNPXA0w.js";import"./index-BQ1WsyJB.js";function X(o,a,t){return n`<div class="ui5-avatar-root" tabindex="${s(this.tabindex)}" data-sap-focus-ref @keyup=${this._onkeyup} @keydown=${this._onkeydown} @click=${this._onclick} role="${s(this._role)}" aria-haspopup="${s(this._ariaHasPopup)}" aria-label="${s(this.accessibleNameText)}" fallback-icon="${s(this.fallbackIcon)}">${this.hasImage?R.call(this,o,a,t):D.call(this,o,a,t)}<slot name="badge"></slot></div>`}function R(o,a,t){return n`<slot></slot>`}function D(o,a,t){return n`${this.icon?x.call(this,o,a,t):void 0}${this.initials?P.call(this,o,a,t):void 0}`}function x(o,a,t){return t?n`<${u("ui5-icon",a,t)} class="ui5-avatar-icon" name="${s(this.icon)}"></${u("ui5-icon",a,t)}>`:n`<ui5-icon class="ui5-avatar-icon" name="${s(this.icon)}"></ui5-icon>`}function P(o,a,t){return t?n`<span class="ui5-avatar-initials ui5-avatar-initials-hidden">${s(this.validInitials)}</span><${u("ui5-icon",a,t)} class="ui5-avatar-icon ui5-avatar-icon-fallback ui5-avatar-fallback-icon-hidden" name="${s(this.fallbackIcon)}"></${u("ui5-icon",a,t)}>`:n`<span class="ui5-avatar-initials ui5-avatar-initials-hidden">${s(this.validInitials)}</span><ui5-icon class="ui5-avatar-icon ui5-avatar-icon-fallback ui5-avatar-fallback-icon-hidden" name="${s(this.fallbackIcon)}"></ui5-icon>`}p("@ui5/webcomponents-theming","sap_horizon",async()=>g);p("@ui5/webcomponents","sap_horizon",async()=>B);const q={packageName:"@ui5/webcomponents",fileName:"themes/Avatar.css.ts",content:`:host(:not([hidden])){display:inline-block;box-sizing:border-box;position:relative;font-family:"72override",var(--sapFontFamily)}:host(:not([hidden]).ui5_hovered){opacity:.7}:host([interactive]:not([disabled])){cursor:pointer}:host([interactive]:not([hidden]):active){background-color:var(--sapButton_Active_Background);border-color:var(--sapButton_Active_BorderColor);color:var(--sapButton_Active_TextColor)}:host([interactive]:not([hidden]):not([disabled]):not(:active):hover){box-shadow:var(--ui5-v2-0-1-avatar-hover-box-shadow-offset)}:host([interactive][desktop]:not([hidden])) .ui5-avatar-root:focus,:host([interactive]:not([hidden])) .ui5-avatar-root:focus-visible{outline:var(--_ui5-v2-0-1_avatar_outline);outline-offset:var(--_ui5-v2-0-1_avatar_focus_offset)}:host([disabled]){opacity:var(--sapContent_DisabledOpacity)}:host{height:3rem;width:3rem;border-radius:50%;border:var(--ui5-v2-0-1-avatar-initials-border);outline:none;color:var(--ui5-v2-0-1-avatar-initials-color)}.ui5-avatar-root{display:flex;align-items:center;justify-content:center;outline:none;height:100%;width:100%;border-radius:inherit}:host([_size="XS"]),:host([size="XS"]){height:2rem;width:2rem;min-height:2rem;min-width:2rem;font-size:var(--_ui5-v2-0-1_avatar_fontsize_XS)}:host(:not([size])),:host([_size="S"]),:host([size="S"]){min-height:3rem;min-width:3rem;font-size:var(--_ui5-v2-0-1_avatar_fontsize_S)}:host([_size="M"]),:host([size="M"]){min-height:4rem;min-width:4rem;font-size:var(--_ui5-v2-0-1_avatar_fontsize_M)}:host([_size="L"]),:host([size="L"]){min-height:5rem;min-width:5rem;font-size:var(--_ui5-v2-0-1_avatar_fontsize_L)}:host([_size="XL"]),:host([size="XL"]){min-height:7rem;min-width:7rem;font-size:var(--_ui5-v2-0-1_avatar_fontsize_XL)}:host .ui5-avatar-icon{height:var(--_ui5-v2-0-1_avatar_fontsize_S);width:var(--_ui5-v2-0-1_avatar_fontsize_S);color:inherit}:host([_size="XS"]) .ui5-avatar-icon,:host([size="XS"]) .ui5-avatar-icon{height:var(--_ui5-v2-0-1_avatar_icon_XS);width:var(--_ui5-v2-0-1_avatar_icon_XS)}:host([_size="S"]) .ui5-avatar-icon,:host([size="S"]) .ui5-avatar-icon{height:var(--_ui5-v2-0-1_avatar_icon_S);width:var(--_ui5-v2-0-1_avatar_icon_S)}:host([_size="M"]) .ui5-avatar-icon,:host([size="M"]) .ui5-avatar-icon{height:var(--_ui5-v2-0-1_avatar_icon_M);width:var(--_ui5-v2-0-1_avatar_icon_M)}:host([_size="L"]) .ui5-avatar-icon,:host([size="L"]) .ui5-avatar-icon{height:var(--_ui5-v2-0-1_avatar_icon_L);width:var(--_ui5-v2-0-1_avatar_icon_L)}:host([_size="XL"]) .ui5-avatar-icon,:host([size="XL"]) .ui5-avatar-icon{height:var(--_ui5-v2-0-1_avatar_icon_XL);width:var(--_ui5-v2-0-1_avatar_icon_XL)}::slotted(*){border-radius:50%;width:100%;height:100%;pointer-events:none}:host([shape="Square"]){border-radius:var(--ui5-v2-0-1-avatar-border-radius)}:host([shape="Square"]) ::slotted(*){border-radius:calc(var(--ui5-v2-0-1-avatar-border-radius) - var(--ui5-v2-0-1-avatar-border-radius-img-deduction))}:host(:not([color-scheme])),:host(:not([_has-image])),:host([_color-scheme="Accent6"]),:host([ui5-avatar][color-scheme="Accent6"]){background-color:var(--ui5-v2-0-1-avatar-accent6);color:var(--ui5-v2-0-1-avatar-accent6-color);border-color:var(--ui5-v2-0-1-avatar-accent6-border-color)}:host([_color-scheme="Accent1"]),:host([ui5-avatar][color-scheme="Accent1"]){background-color:var(--ui5-v2-0-1-avatar-accent1);color:var(--ui5-v2-0-1-avatar-accent1-color);border-color:var(--ui5-v2-0-1-avatar-accent1-border-color)}:host([_color-scheme="Accent2"]),:host([ui5-avatar][color-scheme="Accent2"]){background-color:var(--ui5-v2-0-1-avatar-accent2);color:var(--ui5-v2-0-1-avatar-accent2-color);border-color:var(--ui5-v2-0-1-avatar-accent2-border-color)}:host([_color-scheme="Accent3"]),:host([ui5-avatar][color-scheme="Accent3"]){background-color:var(--ui5-v2-0-1-avatar-accent3);color:var(--ui5-v2-0-1-avatar-accent3-color);border-color:var(--ui5-v2-0-1-avatar-accent3-border-color)}:host([_color-scheme="Accent4"]),:host([ui5-avatar][color-scheme="Accent4"]){background-color:var(--ui5-v2-0-1-avatar-accent4);color:var(--ui5-v2-0-1-avatar-accent4-color);border-color:var(--ui5-v2-0-1-avatar-accent4-border-color)}:host([_color-scheme="Accent5"]),:host([ui5-avatar][color-scheme="Accent5"]){background-color:var(--ui5-v2-0-1-avatar-accent5);color:var(--ui5-v2-0-1-avatar-accent5-color);border-color:var(--ui5-v2-0-1-avatar-accent5-border-color)}:host([_color-scheme="Accent7"]),:host([ui5-avatar][color-scheme="Accent7"]){background-color:var(--ui5-v2-0-1-avatar-accent7);color:var(--ui5-v2-0-1-avatar-accent7-color);border-color:var(--ui5-v2-0-1-avatar-accent7-border-color)}:host([_color-scheme="Accent8"]),:host([ui5-avatar][color-scheme="Accent8"]){background-color:var(--ui5-v2-0-1-avatar-accent8);color:var(--ui5-v2-0-1-avatar-accent8-color);border-color:var(--ui5-v2-0-1-avatar-accent8-border-color)}:host([_color-scheme="Accent9"]),:host([ui5-avatar][color-scheme="Accent9"]){background-color:var(--ui5-v2-0-1-avatar-accent9);color:var(--ui5-v2-0-1-avatar-accent9-color);border-color:var(--ui5-v2-0-1-avatar-accent9-border-color)}:host([_color-scheme="Accent10"]),:host([ui5-avatar][color-scheme="Accent10"]){background-color:var(--ui5-v2-0-1-avatar-accent10);color:var(--ui5-v2-0-1-avatar-accent10-color);border-color:var(--ui5-v2-0-1-avatar-accent10-border-color)}:host([_color-scheme="Placeholder"]),:host([ui5-avatar][color-scheme="Placeholder"]){background-color:var(--ui5-v2-0-1-avatar-placeholder);color:var(--ui5-v2-0-1-avatar-placeholder-color);border-color:var(--ui5-v2-0-1-avatar-placeholder-border-color)}:host([_has-image]){color:var(--ui5-v2-0-1-avatar-accent10-color);background-color:transparent;vertical-align:middle}.ui5-avatar-initials{color:inherit}.ui5-avatar-icon~.ui5-avatar-initials,.ui5-avatar-icon~.ui5-avatar-icon-fallback{display:none}.ui5-avatar-fallback-icon-hidden{display:none}.ui5-avatar-initials-hidden{position:absolute;visibility:hidden;z-index:0;pointer-events:none}::slotted([slot="badge"]){position:absolute;bottom:0;right:0;width:1.125rem;height:1.125rem;font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSmallSize);color:var(--sapBackgroundColor);--_ui5-v2-0-1-tag-height: 1.125rem;--_ui5-v2-0-1-tag-border-radius: 50%}:host([_size="L"]) ::slotted([slot="badge"]),:host([size="L"]) ::slotted([slot="badge"]){width:1.25rem;height:1.25rem;--_ui5-v2-0-1-tag-height: 1.25rem;--_ui5-v2-0-1-tag-icon-width: .875rem}:host([_size="XL"]) ::slotted([slot="badge"]),:host([size="XL"]) ::slotted([slot="badge"]){width:1.75rem;height:1.75rem;--_ui5-v2-0-1-tag-height: 1.75rem;--_ui5-v2-0-1-tag-icon-width: 1rem}:host([shape="Square"]) ::slotted([slot="badge"]){bottom:-.125rem;right:-.125rem}:host([_size="L"][shape="Square"]) ::slotted([slot="badge"]),:host([size="L"][shape="Square"]) ::slotted([slot="badge"]){bottom:-.1875rem;right:-.1875rem}:host([_size="XL"][shape="Square"]) ::slotted([slot="badge"]),:host([size="XL"][shape="Square"]) ::slotted([slot="badge"]){bottom:-.25rem;right:-.25rem}
`};var e=function(o,a,t,l){var h=arguments.length,c=h<3?a:l===null?l=Object.getOwnPropertyDescriptor(a,t):l,v;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(o,a,t,l);else for(var _=o.length-1;_>=0;_--)(v=o[_])&&(c=(h<3?v(c):h>3?v(a,t,c):v(a,t))||c);return h>3&&c&&Object.defineProperty(a,t,c),c},d;let i=d=class extends z{constructor(){super(),this.disabled=!1,this.interactive=!1,this.fallbackIcon="employee",this.shape="Circle",this.size="S",this.colorScheme="Accent6",this._colorScheme="Accent6",this.accessibilityAttributes={},this._hasImage=!1,this._handleResizeBound=this.handleResize.bind(this)}static async onDefine(){d.i18nBundle=await I("@ui5/webcomponents")}get tabindex(){return this.forcedTabIndex||(this._interactive?"0":"-1")}get effectiveSize(){return this.getAttribute("size")}get еffectiveBackgroundColor(){return this.getAttribute("color-scheme")||this._colorScheme}get _role(){return this._interactive?"button":"img"}get _ariaHasPopup(){return this._getAriaHasPopup()}get _interactive(){return this.interactive&&!this.disabled}get validInitials(){const a=/^[a-zA-Zà-üÀ-Ü]{1,3}$/;return this.initials&&a.test(this.initials)?this.initials:null}get accessibleNameText(){return this.accessibleName?this.accessibleName:d.i18nBundle.getText(L)||void 0}get hasImage(){return this._hasImage=!!this.image.length,this._hasImage}get initialsContainer(){return this.getDomRef().querySelector(".ui5-avatar-initials")}get fallBackIconDomRef(){return this.getDomRef().querySelector(".ui5-avatar-icon-fallback")}onBeforeRendering(){this._onclick=this._interactive?this._onClickHandler.bind(this):void 0}async onAfterRendering(){await y(),this.initials&&!this.icon&&this._checkInitials()}onEnterDOM(){S()&&this.setAttribute("desktop",""),this.initialsContainer&&m.register(this.initialsContainer,this._handleResizeBound)}onExitDOM(){this.initialsContainer&&m.deregister(this.initialsContainer,this._handleResizeBound)}handleResize(){this.initials&&!this.icon&&this._checkInitials()}_checkInitials(){const a=this.getDomRef(),t=a.querySelector(".ui5-avatar-initials");if(this.validInitials&&t&&t.scrollWidth<=a.scrollWidth){this.showInitials();return}this.showFallbackIcon()}showFallbackIcon(){var a,t;(a=this.initialsContainer)==null||a.classList.add("ui5-avatar-initials-hidden"),(t=this.fallBackIconDomRef)==null||t.classList.remove("ui5-avatar-fallback-icon-hidden")}showInitials(){var a,t;(a=this.initialsContainer)==null||a.classList.remove("ui5-avatar-initials-hidden"),(t=this.fallBackIconDomRef)==null||t.classList.add("ui5-avatar-fallback-icon-hidden")}_onClickHandler(a){a.stopPropagation(),this._fireClick()}_onkeydown(a){this._interactive&&($(a)&&this._fireClick(),b(a)&&a.preventDefault())}_onkeyup(a){this._interactive&&!a.shiftKey&&b(a)&&this._fireClick()}_fireClick(){this.fireEvent("click")}_getAriaHasPopup(){const a=this.accessibilityAttributes.hasPopup;if(!(!this._interactive||!a))return a}};e([r({type:Boolean})],i.prototype,"disabled",void 0);e([r({type:Boolean})],i.prototype,"interactive",void 0);e([r()],i.prototype,"icon",void 0);e([r()],i.prototype,"fallbackIcon",void 0);e([r()],i.prototype,"initials",void 0);e([r()],i.prototype,"shape",void 0);e([r()],i.prototype,"size",void 0);e([r()],i.prototype,"colorScheme",void 0);e([r()],i.prototype,"_colorScheme",void 0);e([r()],i.prototype,"accessibleName",void 0);e([r({type:Object})],i.prototype,"accessibilityAttributes",void 0);e([r({noAttribute:!0})],i.prototype,"forcedTabIndex",void 0);e([r({type:Boolean})],i.prototype,"_hasImage",void 0);e([f({type:HTMLElement,default:!0})],i.prototype,"image",void 0);e([f()],i.prototype,"badge",void 0);i=d=e([k({tag:"ui5-avatar",languageAware:!0,renderer:A,styles:q,template:X,dependencies:[C]}),w("click")],i);i.define();const Y=i;export{Y as default};
