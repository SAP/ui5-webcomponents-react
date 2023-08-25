import{r as k,U as L,l as w,p as B}from"./UI5Element-6dcea8dd.js";import{b as c,l as s,d as v,s as $,a as I,p as o,c as X,f as x}from"./withWebComponent-7d7e5133.js";import{s as S}from"./slot-76e48863.js";import{e as R,a as T}from"./Icon-b7f7d9e7.js";import{R as y}from"./ResizeHandler-e83234a4.js";import{l as C,k as z}from"./Icons-e937042c.js";import{g as H}from"./i18n-defaults-d675a36d.js";import"./employee-f0b5ef8f.js";var b;(function(t){t.Accent1="Accent1",t.Accent2="Accent2",t.Accent3="Accent3",t.Accent4="Accent4",t.Accent5="Accent5",t.Accent6="Accent6",t.Accent7="Accent7",t.Accent8="Accent8",t.Accent9="Accent9",t.Accent10="Accent10",t.Placeholder="Placeholder"})(b||(b={}));const _=b;var f;(function(t){t.Circle="Circle",t.Square="Square"})(f||(f={}));const A=f;var g;(function(t){t.XS="XS",t.S="S",t.M="M",t.L="L",t.XL="XL"})(g||(g={}));const p=g;function P(t,n,a){return c`<div class="ui5-avatar-root" tabindex="${s(this.tabindex)}" data-sap-focus-ref @keyup=${this._onkeyup} @keydown=${this._onkeydown} @focusout=${this._onfocusout} @focusin=${this._onfocusin} @click=${this._onclick} role="${s(this._role)}" aria-haspopup="${s(this._ariaHasPopup)}" aria-label="${s(this.accessibleNameText)}">${this.hasImage?M.call(this,t,n,a):q.call(this,t,n,a)}<slot name="badge"></slot></div>`}function M(t,n,a){return c`<slot></slot>`}function q(t,n,a){return c`${this.icon?D.call(this,t,n,a):void 0}${this.initials?O.call(this,t,n,a):void 0}`}function D(t,n,a){return a?c`<${v("ui5-icon",n,a)} class="ui5-avatar-icon" name="${s(this.icon)}"></${v("ui5-icon",n,a)}>`:c`<ui5-icon class="ui5-avatar-icon" name="${s(this.icon)}"></ui5-icon>`}function O(t,n,a){return a?c`<span class="ui5-avatar-initials">${s(this.validInitials)}</span><${v("ui5-icon",n,a)} class="ui5-avatar-icon ui5-avatar-icon-fallback" name="employee"></${v("ui5-icon",n,a)}>`:c`<span class="ui5-avatar-initials">${s(this.validInitials)}</span><ui5-icon class="ui5-avatar-icon ui5-avatar-icon-fallback" name="employee"></ui5-icon>`}k("@ui5/webcomponents-theming","sap_fiori_3",async()=>$);k("@ui5/webcomponents","sap_fiori_3",async()=>I);const E={packageName:"@ui5/webcomponents",fileName:"themes/Avatar.css",content:`:host(:not([hidden])) {
	display: inline-block;
	box-sizing: border-box;
	position: relative;
}

/*The ui5_hovered class is set by FileUploader to indicate hover state of the control*/

:host(:not([hidden]).ui5_hovered) {
	opacity: .7;
}

:host(:not([hidden]):not([pressed]):hover) {
	box-shadow: var(--ui5-avatar-hover-box-shadow-offset);
}

:host(:not([hidden])[focused]:not([pressed])) {
	outline: var(--_ui5_avatar_outline);
	outline-offset: var(--_ui5_avatar_focus_offset);
}

:host(:not([disabled])[interactive]) {
	cursor: pointer;
}

:host([disabled]) {
	opacity: var(--sapContent_DisabledOpacity);
}

:host(:not([hidden])[pressed]) {
	background: var(--sapButton_Active_Background);
	border-color: var(--sapButton_Active_BorderColor);
	color: var(--sapButton_Active_TextColor);
}

:host(:not([hidden])[pressed]:hover) {
	background: var(--sapButton_Selected_Hover_Background);
	border-color: var(--sapButton_Selected_Hover_BorderColor);
	color: var(--sapButton_Selected_TextColor);
}

:host {
	height: 3rem;
	width: 3rem;
	border-radius: 50%;
	border: var(--ui5-avatar-initials-border);
	outline: none;
	color: var(--ui5-avatar-initials-color);
}

.ui5-avatar-root {
	display: flex;
	align-items: center;
	justify-content: center;
	outline: none;
	height: 100%;
	width: 100%;
}

/* Sizes */

:host([_size="XS"]),
:host([size="XS"]) {
	height: 2rem;
	width: 2rem;
	min-height: 2rem;
	min-width: 2rem;
	font-size: var(--_ui5_avatar_fontsize_XS);
}

:host([_size="S"]),
:host([size="S"]) {
	min-height: 3rem;
	min-width: 3rem;
	font-size: var(--_ui5_avatar_fontsize_S);
}

:host([_size="M"]),
:host([size="M"]) {
	min-height: 4rem;
	min-width: 4rem;
	font-size: var(--_ui5_avatar_fontsize_M);
}

:host([_size="L"]),
:host([size="L"]) {
	min-height: 5rem;
	min-width: 5rem;
	font-size: var(--_ui5_avatar_fontsize_L);
}

:host([_size="XL"]),
:host([size="XL"]) {
	min-height: 7rem;
	min-width: 7rem;
	font-size: var(--_ui5_avatar_fontsize_XL);
}

/* Icon */

:host .ui5-avatar-icon {
	height: var(--_ui5_avatar_fontsize_S);
	width: var(--_ui5_avatar_fontsize_S);
	color: inherit;
}

:host([_size="XS"]) .ui5-avatar-icon,
:host([size="XS"]) .ui5-avatar-icon {
	height: var(--_ui5_avatar_icon_XS);
	width: var(--_ui5_avatar_icon_XS);
}

:host([_size="S"]) .ui5-avatar-icon,
:host([size="S"]) .ui5-avatar-icon {
	height: var(--_ui5_avatar_icon_S);
	width: var(--_ui5_avatar_icon_S);
}

:host([_size="M"]) .ui5-avatar-icon,
:host([size="M"]) .ui5-avatar-icon {
	height: var(--_ui5_avatar_icon_M);
	width: var(--_ui5_avatar_icon_M);
}

:host([_size="L"]) .ui5-avatar-icon,
:host([size="L"]) .ui5-avatar-icon {
	height: var(--_ui5_avatar_icon_L);
	width: var(--_ui5_avatar_icon_L);
}

:host([_size="XL"]) .ui5-avatar-icon,
:host([size="XL"]) .ui5-avatar-icon {
	height: var(--_ui5_avatar_icon_XL);
	width: var(--_ui5_avatar_icon_XL);
}

::slotted(*) {
	border-radius: 50%;
    width: 100%;
    height: 100%;
	pointer-events: none;
}

/* Shapes */

:host([shape="Square"]) {
	border-radius: var(--ui5-avatar-border-radius);
}

:host([shape="Square"]) ::slotted(*) {
	border-radius: calc(var(--ui5-avatar-border-radius) - var(--ui5-avatar-border-radius-img-deduction));
}

:host(:not([color-scheme])),
:host(:not([_has-image])),
:host([_color-scheme="Accent6"]),
:host([ui5-avatar][color-scheme="Accent6"]) {
	background-color: var(--ui5-avatar-accent6);
	color: var(--ui5-avatar-accent6-color);
	border-color: var(--ui5-avatar-accent6-border-color);
}

:host([_color-scheme="Accent1"]),
:host([ui5-avatar][color-scheme="Accent1"]) {
	background-color: var(--ui5-avatar-accent1);
	color: var(--ui5-avatar-accent1-color);
	border-color: var(--ui5-avatar-accent1-border-color);
}

:host([_color-scheme="Accent2"]),
:host([ui5-avatar][color-scheme="Accent2"]) {
	background-color: var(--ui5-avatar-accent2);
	color: var(--ui5-avatar-accent2-color);
	border-color: var(--ui5-avatar-accent2-border-color);
}

:host([_color-scheme="Accent3"]),
:host([ui5-avatar][color-scheme="Accent3"]) {
	background-color: var(--ui5-avatar-accent3);
	color: var(--ui5-avatar-accent3-color);
	border-color: var(--ui5-avatar-accent3-border-color);
}

:host([_color-scheme="Accent4"]),
:host([ui5-avatar][color-scheme="Accent4"]) {
	background-color: var(--ui5-avatar-accent4);
	color: var(--ui5-avatar-accent4-color);
	border-color: var(--ui5-avatar-accent4-border-color);
}

:host([_color-scheme="Accent5"]),
:host([ui5-avatar][color-scheme="Accent5"]) {
	background-color: var(--ui5-avatar-accent5);
	color: var(--ui5-avatar-accent5-color);
	border-color: var(--ui5-avatar-accent5-border-color);
}

:host([_color-scheme="Accent7"]),
:host([ui5-avatar][color-scheme="Accent7"]) {
	background-color: var(--ui5-avatar-accent7);
	color: var(--ui5-avatar-accent7-color);
	border-color: var(--ui5-avatar-accent7-border-color);
}

:host([_color-scheme="Accent8"]),
:host([ui5-avatar][color-scheme="Accent8"]) {
	background-color: var(--ui5-avatar-accent8);
	color: var(--ui5-avatar-accent8-color);
	border-color: var(--ui5-avatar-accent8-border-color);
}

:host([_color-scheme="Accent9"]),
:host([ui5-avatar][color-scheme="Accent9"]) {
	background-color: var(--ui5-avatar-accent9);
	color: var(--ui5-avatar-accent9-color);
	border-color: var(--ui5-avatar-accent9-border-color);
}

:host([_color-scheme="Accent10"]),
:host([ui5-avatar][color-scheme="Accent10"]) {
	background-color: var(--ui5-avatar-accent10);
	color: var(--ui5-avatar-accent10-color);
	border-color: var(--ui5-avatar-accent10-border-color);
}

:host([_color-scheme="Placeholder"]),
:host([ui5-avatar][color-scheme="Placeholder"]) {
	background-color: var(--ui5-avatar-placeholder);
	color: var(--ui5-avatar-placeholder-color);
	border-color: var(--ui5-avatar-placeholder-border-color);
}

:host([_has-image]) {
	color: var(--ui5-avatar-accent10-color);
	background-color: transparent;
	vertical-align: middle;
}

.ui5-avatar-initials {
	color: inherit;
}

.ui5-avatar-icon ~ .ui5-avatar-initials,
.ui5-avatar-icon ~ .ui5-avatar-icon-fallback {
	display: none;
}

.ui5-avatar-initials:not(.ui5-avatar-initials-hidden) + .ui5-avatar-icon-fallback {
	display: none;
}

.ui5-avatar-initials-hidden {
	position: absolute;
	visibility: hidden;
	z-index: 0;
	pointer-events: none;
}

/* Slotted Badge */

::slotted([slot="badge"]) {
	position: absolute;
	bottom: 0;
	right: 0;
	width: 1.125rem;
	height: 1.125rem;
	background: var(--sapButton_Emphasized_Background);
	border: var(--sapButton_Emphasized_Background);
	border-radius: 1rem;
	color: var(--sapContent_BadgeTextColor);
	justify-content: center;
	font-family: "72override", var(--sapFontFamily);
	font-size: var(--sapFontSmallSize);
}

::slotted([ui5-badge][slot="badge"]) {
	padding: 0.1875rem;
}

:host([_size="L"]) ::slotted([slot="badge"]),
:host([size="L"]) ::slotted([slot="badge"]) {
	width: 1.25rem;
	height: 1.25rem;
}

:host([_size="XL"]) ::slotted([slot="badge"]),
:host([size="XL"]) ::slotted([slot="badge"]) {
	padding: 0.375rem;
	width: 1.75rem;
	height: 1.75rem;
}

:host([shape="Square"]) ::slotted([slot="badge"]) {
	bottom: -0.125rem;
	right: -0.125rem;
}

:host([_size="L"][shape="Square"]) ::slotted([slot="badge"]),
:host([size="L"][shape="Square"]) ::slotted([slot="badge"]) {
	bottom: -0.1875rem;
	right: -0.1875rem;
}

:host([_size="XL"][shape="Square"]) ::slotted([slot="badge"]),
:host([size="XL"][shape="Square"]) ::slotted([slot="badge"]) {
	bottom: -0.25rem;
	right: -0.25rem;
}`};var i=globalThis&&globalThis.__decorate||function(t,n,a,l){var h=arguments.length,r=h<3?n:l===null?l=Object.getOwnPropertyDescriptor(n,a):l,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(t,n,a,l);else for(var m=t.length-1;m>=0;m--)(d=t[m])&&(r=(h<3?d(r):h>3?d(n,a,r):d(n,a))||r);return h>3&&r&&Object.defineProperty(n,a,r),r},u;let e=u=class extends L{constructor(){super(),this._handleResizeBound=this.handleResize.bind(this)}static async onDefine(){u.i18nBundle=await w("@ui5/webcomponents")}get tabindex(){return this._tabIndex||(this._interactive?"0":"-1")}get _effectiveSize(){return this.getAttribute("size")||this._size}get _effectiveBackgroundColor(){return this.getAttribute("color-scheme")||this._colorScheme}get _role(){return this._interactive?"button":void 0}get _ariaHasPopup(){return this._getAriaHasPopup()}get _interactive(){return this.interactive&&!this.disabled}get validInitials(){const n=/^[a-zA-Zà-üÀ-Ü]{1,3}$/;return this.initials&&n.test(this.initials)?this.initials:null}get accessibleNameText(){return this.accessibleName?this.accessibleName:u.i18nBundle.getText(H)||void 0}get hasImage(){return this._hasImage=!!this.image.length,this._hasImage}get initialsContainer(){return this.getDomRef().querySelector(".ui5-avatar-initials")}onBeforeRendering(){this._onclick=this._interactive?this._onClickHandler.bind(this):void 0}async onAfterRendering(){await B(),this.initials&&!this.icon&&this._checkInitials()}onEnterDOM(){this.initialsContainer&&y.register(this.initialsContainer,this._handleResizeBound)}onExitDOM(){this.initialsContainer&&y.deregister(this.initialsContainer,this._handleResizeBound)}handleResize(){this.initials&&!this.icon&&this._checkInitials()}_checkInitials(){const n=this.getDomRef(),a=n.querySelector(".ui5-avatar-initials");if(!this.validInitials){a.classList.add("ui5-avatar-initials-hidden");return}a&&a.classList.remove("ui5-avatar-initials-hidden"),this.initials&&this.initials.length===3&&a&&a.scrollWidth>n.scrollWidth&&a.classList.add("ui5-avatar-initials-hidden")}_onClickHandler(n){n.stopPropagation(),this._fireClick()}_onkeydown(n){this._interactive&&(C(n)&&this._fireClick(),z(n)&&n.preventDefault())}_onkeyup(n){this._interactive&&!n.shiftKey&&z(n)&&this._fireClick()}_fireClick(){this.fireEvent("click"),this.pressed=!this.pressed}_onfocusout(){this.focused=!1}_onfocusin(){this._interactive&&(this.focused=!0)}_getAriaHasPopup(){if(!(!this._interactive||this.ariaHaspopup===""))return this.ariaHaspopup}};i([o({type:Boolean})],e.prototype,"disabled",void 0);i([o({type:Boolean})],e.prototype,"interactive",void 0);i([o({type:Boolean})],e.prototype,"focused",void 0);i([o({type:Boolean})],e.prototype,"pressed",void 0);i([o()],e.prototype,"icon",void 0);i([o()],e.prototype,"initials",void 0);i([o({type:A,defaultValue:A.Circle})],e.prototype,"shape",void 0);i([o({type:p,defaultValue:p.S})],e.prototype,"size",void 0);i([o({type:p,defaultValue:p.S})],e.prototype,"_size",void 0);i([o({type:_,defaultValue:_.Accent6})],e.prototype,"colorScheme",void 0);i([o({type:_,defaultValue:_.Accent6})],e.prototype,"_colorScheme",void 0);i([o()],e.prototype,"accessibleName",void 0);i([o()],e.prototype,"ariaHaspopup",void 0);i([o({noAttribute:!0})],e.prototype,"_tabIndex",void 0);i([o({type:Boolean})],e.prototype,"_hasImage",void 0);i([S({type:HTMLElement,default:!0})],e.prototype,"image",void 0);i([S()],e.prototype,"badge",void 0);e=u=i([X({tag:"ui5-avatar",languageAware:!0,renderer:x,styles:E,template:P,dependencies:[T]}),R("click")],e);e.define();const V=e,Q=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"}));export{p as A,_ as a,V as b,A as c,Q as d};
//# sourceMappingURL=Avatar-faa225d6.js.map
