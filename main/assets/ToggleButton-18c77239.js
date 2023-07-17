import{b as d,l as o,d as l,s as h,a as g,p as B,c as b}from"./withWebComponent-03662f7f.js";import{a as f}from"./Icons-234bf59e.js";import{a as m}from"./Device-6afa24d0.js";import{b as u}from"./Button-3da2aede.js";import{r as p}from"./UI5Element-11982a12.js";import"./utils-f515de3e.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./index-ccf6a75d.js";import"./jsx-runtime-6b79a019.js";import"./useIsomorphicLayoutEffect-0a189966.js";import"./Icon-3498e12d.js";import"./slot-76e48863.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-1a83921e.js";function S(n,t,e){return d`<button type="button" class="ui5-button-root" ?disabled="${this.disabled}" data-sap-focus-ref  aria-pressed="${o(this.pressed)}"  @focusout=${this._onfocusout} @focusin=${this._onfocusin} @click=${this._onclick} @mousedown=${this._onmousedown} @mouseup=${this._onmouseup} @keydown=${this._onkeydown} @keyup=${this._onkeyup} @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" tabindex=${o(this.tabIndexValue)} aria-expanded="${o(this.accessibilityAttributes.expanded)}" aria-controls="${o(this.accessibilityAttributes.controls)}" aria-haspopup="${o(this.accessibilityAttributes.hasPopup)}" aria-label="${o(this.ariaLabelText)}" title="${o(this.buttonTitle)}" part="button">${this.icon?k.call(this,n,t,e):void 0}<span id="${o(this._id)}-content" class="ui5-button-text"><bdi><slot></slot></bdi></span>${this.hasButtonType?A.call(this,n,t,e):void 0}</button> `}function k(n,t,e){return e?d`<${l("ui5-icon",t,e)} class="ui5-button-icon" name="${o(this.icon)}" accessible-role="${o(this.iconRole)}" part="icon" ?show-tooltip=${this.showIconTooltip}></${l("ui5-icon",t,e)}>`:d`<ui5-icon class="ui5-button-icon" name="${o(this.icon)}" accessible-role="${o(this.iconRole)}" part="icon" ?show-tooltip=${this.showIconTooltip}></ui5-icon>`}function A(n,t,e){return d`<span class="ui5-hidden-text">${o(this.buttonTypeText)}</span>`}p("@ui5/webcomponents-theming","sap_fiori_3",async()=>h);p("@ui5/webcomponents","sap_fiori_3",async()=>g);const C={packageName:"@ui5/webcomponents",fileName:"themes/ToggleButton.css",content:`:host(:not([hidden])) {
	display: inline-block;
}

:host([design="Emphasized"]:not([pressed])) {
	text-shadow: var(--_ui5_toggle_button_emphasized_text_shadow);
}

:host([pressed]),
:host([design="Default"][pressed]),
:host([design="Transparent"][pressed]),
:host([design="Emphasized"][pressed]) {
	background: var(--sapButton_Selected_Background);
	border-color: var(--sapButton_Selected_BorderColor);
	color: var(--sapButton_Selected_TextColor);
	text-shadow: none;
}

:host([pressed]:hover),
:host([pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover),
:host([design="Default"][pressed]:hover),
:host([design="Default"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover),
:host([design="Transparent"][pressed]:hover),
:host([design="Transparent"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover),
:host([design="Emphasized"][pressed]:hover),
:host([design="Emphasized"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover) {
	background: var(--sapButton_Selected_Hover_Background);
	border-color: var(--sapButton_Selected_Hover_BorderColor);
	color: var(--sapButton_Selected_TextColor);
	box-shadow: var(--sapContent_Interaction_Shadow);
}

:host([active][focused]),
:host([design="Default"][active][focused]),
:host([design="Transparent"][active][focused]),
:host([design="Emphasized"][active][focused]) {
	background: var(--sapButton_Active_Background);
	border-color: var(--sapButton_Active_BorderColor);
	color: var(--sapButton_Selected_TextColor);
	box-shadow: var(--sapContent_Interaction_Shadow);
}

:host([pressed]:not([active]):not([non-interactive]):not([_is-touch])),
:host([design="Default"][pressed]:not([active]):not([non-interactive]):not([_is-touch])),
:host([design="Transparent"][pressed]:not([active]):not([non-interactive]):not([_is-touch])),
:host([design="Emphasized"][pressed]:not([active]):not([non-interactive]):not([_is-touch])) {
	background: var(--sapButton_Selected_Background);
	border-color: var(--sapButton_Selected_BorderColor);
	color: var(--sapButton_Selected_TextColor);
}

:host([design="Negative"][pressed]) {
	background: var(--sapButton_Reject_Selected_Background);
	border-color: var(--sapButton_Reject_Selected_BorderColor);
	color: var(--sapButton_Reject_Selected_TextColor);
}

:host([design="Negative"][active][focused]) {
	background: var(--sapButton_Reject_Active_Background);
	border-color: var(--sapButton_Reject_Active_BorderColor);
	color: var(--sapButton_Reject_Active_TextColor);
}

:host([design="Negative"][pressed][active]:hover),
:host([design="Negative"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover) {
	background: var(--sapButton_Reject_Selected_Hover_Background);
	border-color: var(--sapButton_Reject_Selected_Hover_BorderColor);
	color: var(--sapButton_Reject_Selected_TextColor);
	box-shadow: var(--sapContent_Negative_Shadow);
}

:host([design="Negative"][pressed]:not([active]):not([non-interactive]):not([_is-touch])) {
	background: var(--sapButton_Reject_Selected_Background);
	border-color: var(--sapButton_Reject_Selected_BorderColor);
	color: var(--sapButton_Reject_Selected_TextColor);
}

:host([design="Positive"][pressed]) {
	background: var(--sapButton_Accept_Selected_Background);
	border-color: var(--sapButton_Accept_Selected_BorderColor);
	color: var(--sapButton_Accept_Selected_TextColor);
}

:host([design="Positive"][active][focused]) {
	background: var(--sapButton_Accept_Active_Background);
	border-color: var(--sapButton_Accept_Active_BorderColor);
	color: var(--sapButton_Accept_Selected_TextColor);
}

:host([design="Positive"][pressed][active]:hover),
:host([design="Positive"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover) {
	background: var(--sapButton_Accept_Selected_Hover_Background);
	border-color: var(--sapButton_Accept_Selected_Hover_BorderColor);
	color: var(--sapButton_Accept_Selected_TextColor);
	box-shadow: var(--sapContent_Positive_Shadow);
}

:host([design="Positive"][pressed]:not([active]):not([non-interactive]):not([_is-touch])) {
	background: var(--sapButton_Accept_Selected_Background);
	border-color: var(--sapButton_Accept_Selected_BorderColor);
	color: var(--sapButton_Accept_Selected_TextColor);
}

:host([design="Attention"][pressed]) {
	background: var(--sapButton_Attention_Selected_Background);
	border-color: var(--sapButton_Attention_Selected_BorderColor);
	color: var(--sapButton_Attention_Selected_TextColor);
}

:host([design="Attention"][active][focused]) {
	background: var(--sapButton_Attention_Active_Background);
	border-color: var(--sapButton_Attention_Active_BorderColor);
	color: var(--sapButton_Attention_Active_TextColor);
}

:host([design="Attention"][pressed][active]:hover),
:host([design="Attention"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover) {
	background: var(--sapButton_Attention_Selected_Hover_Background);
	border-color: var(--sapButton_Attention_Selected_Hover_BorderColor);
	color: var(--sapButton_Attention_Selected_TextColor);
	box-shadow: var(--sapContent_Critical_Shadow);
}

:host([design="Attention"][pressed]:not([active]):not([non-interactive]):not([_is-touch])) {
	background: var(--sapButton_Attention_Selected_Background);
	border-color: var(--sapButton_Attention_Selected_BorderColor);
	color: var(--sapButton_Attention_Selected_TextColor);
}
`};var v=globalThis&&globalThis.__decorate||function(n,t,e,a){var i=arguments.length,r=i<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,e):a,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,t,e,a);else for(var _=n.length-1;_>=0;_--)(c=n[_])&&(r=(i<3?c(r):i>3?c(t,e,r):c(t,e))||r);return i>3&&r&&Object.defineProperty(t,e,r),r};let s=class extends u{_onclick(){this.pressed=!this.pressed,m()&&this.getDomRef().focus()}_onkeyup(t){if(f(t)){t.preventDefault();return}super._onkeyup(t)}};v([B({type:Boolean})],s.prototype,"pressed",void 0);s=v([b({tag:"ui5-toggle-button",template:S,styles:[u.styles,C]})],s);s.define();const V=s;export{V as default};
//# sourceMappingURL=ToggleButton-18c77239.js.map
