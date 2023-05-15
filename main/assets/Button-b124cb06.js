import{a as w,U as A,d as k}from"./UI5Element-d19f28b4.js";import{e as h,l as a,s as g,a as C,b as E,p as r,c as z,d as $}from"./withWebComponent-d61dcbbc.js";import{e as I,I as R}from"./Icon-2e1c5474.js";import{s as N}from"./slot-76e48863.js";import{j as H,c as m,b as B}from"./Icons-d3203353.js";import{g as O}from"./AriaLabelHelper-43a261ec.js";import{g as y}from"./CustomElementsScopeUtils-137da8c8.js";import{m as c}from"./MarkedEvents-b83081e9.js";import{c as S,d as j,e as P,a as D,f as x}from"./Device-208919c6.js";import{B as L,g as F,h as M}from"./i18n-defaults-254d6b69.js";var f;(function(n){n.Default="Default",n.Positive="Positive",n.Negative="Negative",n.Transparent="Transparent",n.Emphasized="Emphasized",n.Attention="Attention"})(f||(f={}));const v=f,V=n=>Array.from(n).filter(t=>t.nodeType!==Node.COMMENT_NODE&&(t.nodeType!==Node.TEXT_NODE||(t.nodeValue||"").trim().length!==0)).length>0;function U(n,t,i){return h`<button type="button" class="ui5-button-root" ?disabled="${this.disabled}" data-sap-focus-ref  @focusout=${this._onfocusout} @focusin=${this._onfocusin} @click=${this._onclick} @mousedown=${this._onmousedown} @mouseup=${this._onmouseup} @keydown=${this._onkeydown} @keyup=${this._onkeyup} @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" tabindex=${a(this.tabIndexValue)} aria-expanded="${a(this.accessibilityAttributes.expanded)}" aria-controls="${a(this.accessibilityAttributes.controls)}" aria-haspopup="${a(this.accessibilityAttributes.hasPopup)}" aria-label="${a(this.ariaLabelText)}" title="${a(this.buttonTitle)}" part="button">${this.icon?Y.call(this,n,t,i):void 0}<span id="${a(this._id)}-content" class="ui5-button-text"><bdi><slot></slot></bdi></span>${this.hasButtonType?G.call(this,n,t,i):void 0}</button> `}function Y(n,t,i){return i?h`<${g("ui5-icon",t,i)} class="ui5-button-icon" name="${a(this.icon)}" accessible-role="${a(this.iconRole)}" part="icon" ?show-tooltip=${this.showIconTooltip}></${g("ui5-icon",t,i)}>`:h`<ui5-icon class="ui5-button-icon" name="${a(this.icon)}" accessible-role="${a(this.iconRole)}" part="icon" ?show-tooltip=${this.showIconTooltip}></ui5-icon>`}function G(n,t,i){return h`<span class="ui5-hidden-text">${a(this.buttonTypeText)}</span>`}w("@ui5/webcomponents-theming","sap_fiori_3",async()=>C);w("@ui5/webcomponents","sap_fiori_3",async()=>E);const J={packageName:"@ui5/webcomponents",fileName:"themes/Button.css",content:':host{vertical-align:middle}.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block}:host{min-width:var(--_ui5_button_base_min_width);height:var(--_ui5_button_base_height);line-height:normal;font-family:var(--_ui5_button_fontFamily);font-size:var(--sapFontSize);text-shadow:var(--_ui5_button_text_shadow);border-radius:var(--_ui5_button_border_radius);cursor:pointer;background-color:var(--sapButton_Background);border:var(--sapButton_BorderWidth) solid var(--sapButton_BorderColor);color:var(--sapButton_TextColor);box-sizing:border-box;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ui5-button-root{min-width:inherit;cursor:inherit;height:100%;width:100%;box-sizing:border-box;display:flex;justify-content:center;align-items:center;outline:none;padding:0 var(--_ui5_button_base_padding);position:relative;background:transparent;border:none;color:inherit;text-shadow:inherit;font:inherit;white-space:inherit;overflow:inherit;text-overflow:inherit;letter-spacing:inherit;word-spacing:inherit;line-height:inherit;-webkit-user-select:none;-moz-user-select:none;user-select:none}:host(:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),:host(:not([hidden]):not([disabled]).ui5_hovered){background:var(--sapButton_Hover_Background);box-shadow:var(--sapContent_Interaction_Shadow);border:1px solid var(--sapButton_Hover_BorderColor);color:var(--sapButton_Hover_TextColor)}.ui5-button-icon{color:inherit;flex-shrink:0}:host([icon-end]) .ui5-button-root{flex-direction:row-reverse}:host([icon-end]) .ui5-button-icon{margin-inline-start:var(--_ui5_button_base_icon_margin)}:host([icon-only]) .ui5-button-root{min-width:auto;padding:0}:host([icon-only]) .ui5-button-text{display:none}.ui5-button-text{outline:none;position:relative;white-space:inherit;overflow:inherit;text-overflow:inherit}:host([has-icon]:not([icon-end])) .ui5-button-text{margin-inline-start:var(--_ui5_button_base_icon_margin)}:host([has-icon][icon-end]) .ui5-button-text{margin-inline-start:0}:host([disabled]){opacity:var(--sapContent_DisabledOpacity);pointer-events:unset;cursor:default}:host([has-icon]:not([icon-only])) .ui5-button-text{min-width:calc(var(--_ui5_button_base_min_width) - var(--_ui5_button_base_icon_margin) - 1rem)}:host([disabled]:active){pointer-events:none}:host([focused]) .ui5-button-root:after{content:"";position:absolute;box-sizing:border-box;left:.0625rem;top:.0625rem;right:.0625rem;bottom:.0625rem;border:var(--_ui5_button_focused_border);border-radius:var(--_ui5_button_focused_border_radius)}:host([design=Emphasized][focused]) .ui5-button-root:after{border-color:var(--_ui5_button_emphasized_focused_border_color)}:host([design=Emphasized][focused]) .ui5-button-root:before{content:"";position:absolute;box-sizing:border-box;left:.0625rem;top:.0625rem;right:.0625rem;bottom:.0625rem;border:var(--_ui5_button_emphasized_focused_border_before);border-radius:var(--_ui5_button_focused_border_radius)}.ui5-button-root::-moz-focus-inner{border:0}bdi{display:block;white-space:inherit;overflow:inherit;text-overflow:inherit}:host([ui5-button][active]:not([disabled]):not([non-interactive])){background-image:none;background-color:var(--sapButton_Active_Background);border-color:var(--sapButton_Active_BorderColor);color:var(--sapButton_Active_TextColor)}:host([design=Positive]){background-color:var(--sapButton_Accept_Background);border-color:var(--sapButton_Accept_BorderColor);color:var(--sapButton_Accept_TextColor)}:host([design=Positive]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered),:host([design=Positive]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover){background-color:var(--sapButton_Accept_Hover_Background);border-color:var(--sapButton_Accept_Hover_BorderColor);box-shadow:var(--sapContent_Positive_Shadow);color:var(--sapButton_Accept_Hover_TextColor)}:host([ui5-button][design=Positive][active]:not([non-interactive])){background-color:var(--sapButton_Accept_Active_Background);border-color:var(--sapButton_Accept_Active_BorderColor);color:var(--sapButton_Accept_Active_TextColor)}:host([design=Negative]){background-color:var(--sapButton_Reject_Background);border-color:var(--sapButton_Reject_BorderColor);color:var(--sapButton_Reject_TextColor)}:host([design=Negative]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered),:host([design=Negative]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover){background-color:var(--sapButton_Reject_Hover_Background);border-color:var(--sapButton_Reject_Hover_BorderColor);box-shadow:var(--sapContent_Negative_Shadow);color:var(--sapButton_Reject_Hover_TextColor)}:host([ui5-button][design=Negative][active]:not([non-interactive])){background-color:var(--sapButton_Reject_Active_Background);border-color:var(--sapButton_Reject_Active_BorderColor);color:var(--sapButton_Reject_Active_TextColor)}:host([design=Attention]){background-color:var(--sapButton_Attention_Background);border-color:var(--sapButton_Attention_BorderColor);color:var(--sapButton_Attention_TextColor)}:host([design=Attention]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered),:host([design=Attention]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover){background-color:var(--sapButton_Attention_Hover_Background);border-color:var(--sapButton_Attention_Hover_BorderColor);color:var(--sapButton_Attention_Hover_TextColor);box-shadow:var(--sapContent_Critical_Shadow)}:host([ui5-button][design=Attention][active]:not([non-interactive])){background-color:var(--sapButton_Attention_Active_Background);border-color:var(--sapButton_Attention_Active_BorderColor);color:var(--sapButton_Attention_Active_TextColor)}:host([design=Emphasized]){background-color:var(--sapButton_Emphasized_Background);border-color:var(--sapButton_Emphasized_BorderColor);border-width:var(--_ui5_button_emphasized_border_width);color:var(--sapButton_Emphasized_TextColor);font-weight:var(--_ui5_button_emphasized_font_weight)}:host([design=Emphasized]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered),:host([design=Emphasized]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover){background-color:var(--sapButton_Emphasized_Hover_Background);border-color:var(--sapButton_Emphasized_Hover_BorderColor);border-width:var(--_ui5_button_emphasized_border_width);color:var(--sapButton_Emphasized_Hover_TextColor);box-shadow:none}:host([ui5-button][design=Empasized][active]:not([non-interactive])){background-color:var(--sapButton_Emphasized_Active_Background);border-color:var(--sapButton_Emphasized_Active_BorderColor);color:var(--sapButton_Emphasized_Active_TextColor)}:host([design=Emphasized][focused]) .ui5-button-root:after{border-color:var(--sapContent_ContrastFocusColor);outline:none}:host([design=Transparent]){background-color:var(--sapButton_Lite_Background);color:var(--sapButton_Lite_TextColor);border-color:var(--sapButton_Lite_BorderColor)}:host([design=Transparent]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered),:host([design=Transparent]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover){background-color:var(--sapButton_Lite_Hover_Background);border-color:var(--sapButton_Lite_Hover_BorderColor);box-shadow:var(--sapContent_Interaction_Shadow);color:var(--sapButton_Lite_Hover_TextColor)}:host([ui5-button][design=Transparent][active]:not([non-interactive])){background-color:var(--sapButton_Lite_Active_Background);border-color:var(--sapButton_Lite_Active_BorderColor);color:var(--sapButton_Active_TextColor)}:host([pressed][focused]) .ui5-button-root:after,:host([ui5-segmented-button-item][active][focused]) .ui5-button-root:after{border-color:var(--_ui5_button_pressed_focused_border_color);outline:none}:host([ui5-segmented-button-item][focused]:not(:last-child)) .ui5-button-root:after{border-top-right-radius:var(--_ui5_button_focused_inner_border_radius);border-bottom-right-radius:var(--_ui5_button_focused_inner_border_radius)}:host([ui5-segmented-button-item][focused]:not(:first-child)) .ui5-button-root:after{border-top-left-radius:var(--_ui5_button_focused_inner_border_radius);border-bottom-left-radius:var(--_ui5_button_focused_inner_border_radius)}'};var e=globalThis&&globalThis.__decorate||function(n,t,i,u){var l=arguments.length,s=l<3?t:u===null?u=Object.getOwnPropertyDescriptor(t,i):u,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,t,i,u);else for(var b=n.length-1;b>=0;b--)(p=n[b])&&(s=(l<3?p(s):l>3?p(t,i,s):p(t,i))||s);return l>3&&s&&Object.defineProperty(t,i,s),s},_;let T=!1,d=null,o=_=class extends A{constructor(){super(),this._deactivate=()=>{d&&(d.active=!1)},T||(document.addEventListener("mouseup",this._deactivate),T=!0);const t=i=>{c(i,"button"),!this.nonInteractive&&(this.active=!0)};this._ontouchstart={handleEvent:t,passive:!0}}onEnterDOM(){this._isTouch=(S()||j())&&!P()}async onBeforeRendering(){const t=y("FormSupport");this.submits&&!t&&console.warn('In order for the "submits" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";'),this.iconOnly=this.isIconOnly,this.hasIcon=!!this.icon,this.buttonTitle=this.tooltip||await H(this.icon)}_onclick(t){var u;if(this.nonInteractive)return;c(t,"button");const i=y("FormSupport");i&&this.submits&&i.triggerFormSubmit(this),D()&&((u=this.getDomRef())==null||u.focus())}_onmousedown(t){this.nonInteractive||this._isTouch||(c(t,"button"),this.active=!0,d=this)}_ontouchend(){this.active=!1,d&&(d.active=!1)}_onmouseup(t){c(t,"button")}_onkeydown(t){c(t,"button"),(m(t)||B(t))&&(this.active=!0)}_onkeyup(t){(m(t)||B(t))&&(this.active=!1)}_onfocusout(){this.nonInteractive||(this.active=!1,x()&&(this.focused=!1))}_onfocusin(t){this.nonInteractive||(c(t,"button"),x()&&(this.focused=!0))}get hasButtonType(){return this.design!==v.Default&&this.design!==v.Transparent}get iconRole(){return this.icon?"presentation":""}get isIconOnly(){return!V(this.text)}static typeTextMappings(){return{Positive:L,Negative:F,Emphasized:M}}get buttonTypeText(){return _.i18nBundle.getText(_.typeTextMappings()[this.design])}get tabIndexValue(){const t=this.getAttribute("tabindex");return t||(this.nonInteractive?"-1":this._tabIndex)}get showIconTooltip(){return this.iconOnly&&!this.tooltip}get ariaLabelText(){return O(this)}static async onDefine(){_.i18nBundle=await k("@ui5/webcomponents")}};e([r({type:v,defaultValue:v.Default})],o.prototype,"design",void 0);e([r({type:Boolean})],o.prototype,"disabled",void 0);e([r()],o.prototype,"icon",void 0);e([r({type:Boolean})],o.prototype,"iconEnd",void 0);e([r({type:Boolean})],o.prototype,"submits",void 0);e([r()],o.prototype,"tooltip",void 0);e([r({defaultValue:void 0})],o.prototype,"accessibleName",void 0);e([r({defaultValue:""})],o.prototype,"accessibleNameRef",void 0);e([r({type:Object})],o.prototype,"accessibilityAttributes",void 0);e([r({type:Boolean})],o.prototype,"active",void 0);e([r({type:Boolean})],o.prototype,"iconOnly",void 0);e([r({type:Boolean})],o.prototype,"focused",void 0);e([r({type:Boolean})],o.prototype,"hasIcon",void 0);e([r({type:Boolean})],o.prototype,"nonInteractive",void 0);e([r({noAttribute:!0})],o.prototype,"buttonTitle",void 0);e([r({type:Object})],o.prototype,"_iconSettings",void 0);e([r({defaultValue:"0",noAttribute:!0})],o.prototype,"_tabIndex",void 0);e([r({type:Boolean})],o.prototype,"_isTouch",void 0);e([N({type:Node,default:!0})],o.prototype,"text",void 0);o=_=e([z({tag:"ui5-button",languageAware:!0,renderer:$,template:U,styles:J,dependencies:[R]}),I("click")],o);o.define();const W=o,at=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));export{W as B,v as a,at as b,V as w};
//# sourceMappingURL=Button-b124cb06.js.map
