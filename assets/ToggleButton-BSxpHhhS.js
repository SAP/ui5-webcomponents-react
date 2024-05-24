import{a as d,l as e,b as l,s as h,p as B,c as g}from"./withWebComponent-CpdHtqwM.js";import{a as b}from"./Keys-BgUkNma0.js";import{b as m}from"./useIsomorphicLayoutEffect-puIvDQED.js";import{b as p}from"./Button-wye3yEeO.js";import{r as _}from"./Boot-CehKKsjw.js";import{s as f}from"./parameters-bundle.css-CG8awnKl.js";import"./utils-B2Z4xp5G.js";import"./EventProvider-B3ZIXKWe.js";import"./index-BP8_t0zE.js";import"./CustomElementsScopeUtils-B6a-Hnn9.js";import"./UI5Element-C8JZhjZA.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./AriaLabelHelper-CzOXVcye.js";import"./i18nBundle-DoewWk5r.js";import"./MarkedEvents-BPv6Lv4o.js";import"./Icons-CCqbOxoD.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-BXh46edA.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-cA9sdirt.js";function k(r,t,o){return d`<button type="button" class="ui5-button-root" ?disabled="${this.disabled}" data-sap-focus-ref  aria-pressed="${e(this.pressed)}"  @focusout=${this._onfocusout} @focusin=${this._onfocusin} @click=${this._onclick} @mousedown=${this._onmousedown} @mouseup=${this._onmouseup} @keydown=${this._onkeydown} @keyup=${this._onkeyup} @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" tabindex=${e(this.tabIndexValue)} aria-expanded="${e(this.accessibilityAttributes.expanded)}" aria-controls="${e(this.accessibilityAttributes.controls)}" aria-haspopup="${e(this._hasPopup)}" aria-label="${e(this.ariaLabelText)}" title="${e(this.buttonTitle)}" part="button" role="${e(this.buttonAccessibleRole)}">${this.icon?A.call(this,r,t,o):void 0}<span id="${e(this._id)}-content" class="ui5-button-text"><bdi><slot></slot></bdi></span>${this.hasButtonType?S.call(this,r,t,o):void 0}</button> `}function A(r,t,o){return o?d`<${l("ui5-icon",t,o)} class="ui5-button-icon" name="${e(this.icon)}" accessible-role="${e(this.iconRole)}" part="icon" ?show-tooltip=${this.showIconTooltip}></${l("ui5-icon",t,o)}>`:d`<ui5-icon class="ui5-button-icon" name="${e(this.icon)}" accessible-role="${e(this.iconRole)}" part="icon" ?show-tooltip=${this.showIconTooltip}></ui5-icon>`}function S(r,t,o){return d`<span class="ui5-hidden-text">${e(this.buttonTypeText)}</span>`}_("@ui5/webcomponents-theming","sap_horizon",async()=>h);_("@ui5/webcomponents","sap_horizon",async()=>f);const T={packageName:"@ui5/webcomponents",fileName:"themes/ToggleButton.css.ts",content:`:host(:not([hidden])){display:inline-block}:host([design="Emphasized"]:not([pressed])){text-shadow:var(--_ui5-v1-24-2_toggle_button_emphasized_text_shadow)}:host([pressed]),:host([design="Default"][pressed]),:host([design="Transparent"][pressed]),:host([design="Emphasized"][pressed]){background:var(--sapButton_Selected_Background);border-color:var(--sapButton_Selected_BorderColor);color:var(--sapButton_Selected_TextColor);text-shadow:none}:host([pressed]:hover),:host([pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover),:host([design="Default"][pressed]:hover),:host([design="Default"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover),:host([design="Transparent"][pressed]:hover),:host([design="Transparent"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover),:host([design="Emphasized"][pressed]:hover),:host([design="Emphasized"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover){background:var(--sapButton_Selected_Hover_Background);border-color:var(--sapButton_Selected_Hover_BorderColor);color:var(--sapButton_Selected_TextColor)}:host([active][focused]),:host([design="Default"][active][focused]),:host([design="Transparent"][active][focused]),:host([design="Emphasized"][active][focused]){background:var(--sapButton_Active_Background);border-color:var(--sapButton_Active_BorderColor);color:var(--sapButton_Selected_TextColor)}:host([pressed]:not([active]):not([non-interactive]):not([_is-touch])),:host([design="Default"][pressed]:not([active]):not([non-interactive]):not([_is-touch])),:host([design="Transparent"][pressed]:not([active]):not([non-interactive]):not([_is-touch])),:host([design="Emphasized"][pressed]:not([active]):not([non-interactive]):not([_is-touch])){background:var(--sapButton_Selected_Background);border-color:var(--sapButton_Selected_BorderColor);color:var(--sapButton_Selected_TextColor)}:host([design="Negative"][pressed]){background:var(--sapButton_Reject_Selected_Background);border-color:var(--sapButton_Reject_Selected_BorderColor);color:var(--sapButton_Reject_Selected_TextColor)}:host([design="Negative"][active][focused]){background:var(--sapButton_Reject_Active_Background);border-color:var(--sapButton_Reject_Active_BorderColor);color:var(--sapButton_Reject_Active_TextColor)}:host([design="Negative"][pressed][active]:hover),:host([design="Negative"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover){background:var(--sapButton_Reject_Selected_Hover_Background);border-color:var(--sapButton_Reject_Selected_Hover_BorderColor);color:var(--sapButton_Reject_Selected_TextColor)}:host([design="Negative"][pressed]:not([active]):not([non-interactive]):not([_is-touch])){background:var(--sapButton_Reject_Selected_Background);border-color:var(--sapButton_Reject_Selected_BorderColor);color:var(--sapButton_Reject_Selected_TextColor)}:host([design="Positive"][pressed]){background:var(--sapButton_Accept_Selected_Background);border-color:var(--sapButton_Accept_Selected_BorderColor);color:var(--sapButton_Accept_Selected_TextColor)}:host([design="Positive"][active][focused]){background:var(--sapButton_Accept_Active_Background);border-color:var(--sapButton_Accept_Active_BorderColor);color:var(--sapButton_Accept_Selected_TextColor)}:host([design="Positive"][pressed][active]:hover),:host([design="Positive"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover){background:var(--sapButton_Accept_Selected_Hover_Background);border-color:var(--sapButton_Accept_Selected_Hover_BorderColor);color:var(--sapButton_Accept_Selected_TextColor)}:host([design="Positive"][pressed]:not([active]):not([non-interactive]):not([_is-touch])){background:var(--sapButton_Accept_Selected_Background);border-color:var(--sapButton_Accept_Selected_BorderColor);color:var(--sapButton_Accept_Selected_TextColor)}:host([design="Attention"][pressed]){background:var(--sapButton_Attention_Selected_Background);border-color:var(--sapButton_Attention_Selected_BorderColor);color:var(--sapButton_Attention_Selected_TextColor)}:host([design="Attention"][active][focused]){background:var(--sapButton_Attention_Active_Background);border-color:var(--sapButton_Attention_Active_BorderColor);color:var(--sapButton_Attention_Active_TextColor)}:host([design="Attention"][pressed][active]:hover),:host([design="Attention"][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover){background:var(--sapButton_Attention_Selected_Hover_Background);border-color:var(--sapButton_Attention_Selected_Hover_BorderColor);color:var(--sapButton_Attention_Selected_TextColor)}:host([design="Attention"][pressed]:not([active]):not([non-interactive]):not([_is-touch])){background:var(--sapButton_Attention_Selected_Background);border-color:var(--sapButton_Attention_Selected_BorderColor);color:var(--sapButton_Attention_Selected_TextColor)}
`};var v=function(r,t,o,c){var i=arguments.length,n=i<3?t:c===null?c=Object.getOwnPropertyDescriptor(t,o):c,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,t,o,c);else for(var u=r.length-1;u>=0;u--)(a=r[u])&&(n=(i<3?a(n):i>3?a(t,o,n):a(t,o))||n);return i>3&&n&&Object.defineProperty(t,o,n),n};let s=class extends p{_onclick(){this.pressed=!this.pressed,m()&&this.getDomRef().focus()}_onkeyup(t){if(b(t)){t.preventDefault();return}super._onkeyup(t)}};v([B({type:Boolean})],s.prototype,"pressed",void 0);s=v([g({tag:"ui5-toggle-button",template:k,styles:[p.styles,T]})],s);s.define();const M=s;export{M as default};
