import{e as d,l as t,s as p,a as h,b as g,p as B,c as b}from"./withWebComponent-65cd39a0.js";import{F as f}from"./Icons-fe6e657a.js";import{a as m}from"./Device-208919c6.js";import{B as l}from"./Button-bc3a11a1.js";import{a as u}from"./UI5Element-427ec721.js";import"./utils-ed90fb1b.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./jsx-runtime-670450c2.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./Icon-7987c836.js";import"./slot-634e3e91.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-254d6b69.js";const S=(o,e,r)=>d`<button type="button" class="ui5-button-root" ?disabled="${o.disabled}" data-sap-focus-ref  aria-pressed="${t(o.pressed)}"  @focusout=${o._onfocusout} @focusin=${o._onfocusin} @click=${o._onclick} @mousedown=${o._onmousedown} @mouseup=${o._onmouseup} @keydown=${o._onkeydown} @keyup=${o._onkeyup} @touchstart="${o._ontouchstart}" @touchend="${o._ontouchend}" tabindex=${t(o.tabIndexValue)} aria-expanded="${t(o.accessibilityAttributes.expanded)}" aria-controls="${t(o.accessibilityAttributes.controls)}" aria-haspopup="${t(o.accessibilityAttributes.hasPopup)}" aria-label="${t(o.ariaLabelText)}" title="${t(o.tooltip)}" part="button">${o.icon?k(o,e,r):void 0}<span id="${t(o._id)}-content" class="ui5-button-text"><bdi><slot></slot></bdi></span>${o.hasButtonType?A(o):void 0}</button> `,k=(o,e,r)=>r?d`<${p("ui5-icon",e,r)} class="ui5-button-icon" name="${t(o.icon)}" accessible-role="${t(o.iconRole)}" part="icon" ?show-tooltip=${o.showIconTooltip}></${p("ui5-icon",e,r)}>`:d`<ui5-icon class="ui5-button-icon" name="${t(o.icon)}" accessible-role="${t(o.iconRole)}" part="icon" ?show-tooltip=${o.showIconTooltip}></ui5-icon>`,A=(o,e,r)=>d`<span class="ui5-hidden-text">${t(o.buttonTypeText)}</span>`;u("@ui5/webcomponents-theming","sap_fiori_3",async()=>h);u("@ui5/webcomponents","sap_fiori_3",async()=>g);const C={packageName:"@ui5/webcomponents",fileName:"themes/ToggleButton.css.ts",content:":host(:not([hidden])){display:inline-block}:host([design=Emphasized]:not([pressed])){text-shadow:var(--_ui5_toggle_button_emphasized_text_shadow)}:host([design=Default][pressed]),:host([design=Emphasized][pressed]),:host([design=Transparent][pressed]),:host([pressed]){background:var(--sapButton_Selected_Background);border-color:var(--sapButton_Selected_BorderColor);color:var(--sapButton_Selected_TextColor);text-shadow:none}:host([design=Default][pressed]:hover),:host([design=Default][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover),:host([design=Emphasized][pressed]:hover),:host([design=Emphasized][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover),:host([design=Transparent][pressed]:hover),:host([design=Transparent][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover),:host([pressed]:hover),:host([pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover){background:var(--sapButton_Selected_Hover_Background);border-color:var(--sapButton_Selected_Hover_BorderColor);color:var(--sapButton_Selected_TextColor);box-shadow:var(--sapContent_Interaction_Shadow)}:host([active][focused]),:host([design=Default][active][focused]),:host([design=Emphasized][active][focused]),:host([design=Transparent][active][focused]){background:var(--sapButton_Active_Background);border-color:var(--sapButton_Active_BorderColor);color:var(--sapButton_Selected_TextColor);box-shadow:var(--sapContent_Interaction_Shadow)}:host([design=Default][pressed]:not([active]):not([non-interactive]):not([_is-touch])),:host([design=Emphasized][pressed]:not([active]):not([non-interactive]):not([_is-touch])),:host([design=Transparent][pressed]:not([active]):not([non-interactive]):not([_is-touch])),:host([pressed]:not([active]):not([non-interactive]):not([_is-touch])){background:var(--sapButton_Selected_Background);border-color:var(--sapButton_Selected_BorderColor);color:var(--sapButton_Selected_TextColor)}:host([design=Negative][pressed]){background:var(--sapButton_Reject_Selected_Background);border-color:var(--sapButton_Reject_Selected_BorderColor);color:var(--sapButton_Reject_Selected_TextColor)}:host([design=Negative][active][focused]){background:var(--sapButton_Reject_Active_Background);border-color:var(--sapButton_Reject_Active_BorderColor);color:var(--sapButton_Reject_Active_TextColor)}:host([design=Negative][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover),:host([design=Negative][pressed][active]:hover){background:var(--sapButton_Reject_Selected_Hover_Background);border-color:var(--sapButton_Reject_Selected_Hover_BorderColor);color:var(--sapButton_Reject_Selected_TextColor);box-shadow:var(--sapContent_Negative_Shadow)}:host([design=Negative][pressed]:not([active]):not([non-interactive]):not([_is-touch])){background:var(--sapButton_Reject_Selected_Background);border-color:var(--sapButton_Reject_Selected_BorderColor);color:var(--sapButton_Reject_Selected_TextColor)}:host([design=Positive][pressed]){background:var(--sapButton_Accept_Selected_Background);border-color:var(--sapButton_Accept_Selected_BorderColor);color:var(--sapButton_Accept_Selected_TextColor)}:host([design=Positive][active][focused]){background:var(--sapButton_Accept_Active_Background);border-color:var(--sapButton_Accept_Active_BorderColor);color:var(--sapButton_Accept_Selected_TextColor)}:host([design=Positive][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover),:host([design=Positive][pressed][active]:hover){background:var(--sapButton_Accept_Selected_Hover_Background);border-color:var(--sapButton_Accept_Selected_Hover_BorderColor);color:var(--sapButton_Accept_Selected_TextColor);box-shadow:var(--sapContent_Positive_Shadow)}:host([design=Positive][pressed]:not([active]):not([non-interactive]):not([_is-touch])){background:var(--sapButton_Accept_Selected_Background);border-color:var(--sapButton_Accept_Selected_BorderColor);color:var(--sapButton_Accept_Selected_TextColor)}:host([design=Attention][pressed]){background:var(--sapButton_Attention_Selected_Background);border-color:var(--sapButton_Attention_Selected_BorderColor);color:var(--sapButton_Attention_Selected_TextColor)}:host([design=Attention][active][focused]){background:var(--sapButton_Attention_Active_Background);border-color:var(--sapButton_Attention_Active_BorderColor);color:var(--sapButton_Attention_Active_TextColor)}:host([design=Attention][pressed]:not([active]):not([non-interactive]):not([_is-touch]):hover),:host([design=Attention][pressed][active]:hover){background:var(--sapButton_Attention_Selected_Hover_Background);border-color:var(--sapButton_Attention_Selected_Hover_BorderColor);color:var(--sapButton_Attention_Selected_TextColor);box-shadow:var(--sapContent_Critical_Shadow)}:host([design=Attention][pressed]:not([active]):not([non-interactive]):not([_is-touch])){background:var(--sapButton_Attention_Selected_Background);border-color:var(--sapButton_Attention_Selected_BorderColor);color:var(--sapButton_Attention_Selected_TextColor)}"};var v=globalThis&&globalThis.__decorate||function(o,e,r,a){var i=arguments.length,n=i<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,r):a,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,e,r,a);else for(var _=o.length-1;_>=0;_--)(c=o[_])&&(n=(i<3?c(n):i>3?c(e,r,n):c(e,r))||n);return i>3&&n&&Object.defineProperty(e,r,n),n};let s=class extends l{_onclick(){this.pressed=!this.pressed,m()&&this.getDomRef().focus()}_onkeyup(e){if(f(e)){e.preventDefault();return}super._onkeyup(e)}};v([B({type:Boolean})],s.prototype,"pressed",void 0);s=v([b({tag:"ui5-toggle-button",template:S,styles:[l.styles,C]})],s);s.define();const V=s;export{V as default};
//# sourceMappingURL=ToggleButton-4790913b.js.map
