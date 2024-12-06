import{m as c,k as s,p as v,a as w,s as $,q as n,v as z,S as E,A as C,M as I,N as R,B as D,z as H}from"./withWebComponent-D2290JWW.js";import{l as g}from"./event-strict-DgQLNDEV.js";import{d as S}from"./slot-_4yKMUwC.js";import{i as P}from"./i18n-DEVDpFvK.js";import{d as O,H as N,i as m,b as B}from"./Keys-CAuuEE_3.js";import{A as j}from"./AccessibilityTextsHelper-Beeze-lh.js";import{a as y,A as L,I as M}from"./Icon-DNC_Q8W5.js";import{t as F}from"./willShowContent-CZcfsNXp.js";import{l as A}from"./Tooltips-Cvj6MDOu.js";import{a5 as U,a6 as Y,a7 as V}from"./i18n-defaults-B_32hVC3.js";import{s as q}from"./parameters-bundle.css-DlWxkghp.js";var b;(function(i){i.Default="Default",i.Positive="Positive",i.Negative="Negative",i.Transparent="Transparent",i.Emphasized="Emphasized",i.Attention="Attention"})(b||(b={}));const x=b;var f;(function(i){i.Button="Button",i.Submit="Submit",i.Reset="Reset"})(f||(f={}));const T=f;function G(i,t,r){return c`<button type="button" class="ui5-button-root" ?disabled="${this.disabled}" data-sap-focus-ref  @focusout=${this._onfocusout} @click=${this._onclick} @mousedown=${this._onmousedown} @keydown=${this._onkeydown} @keyup=${this._onkeyup} @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" tabindex=${s(this.tabIndexValue)} aria-expanded="${s(this.accessibilityAttributes.expanded)}" aria-controls="${s(this.accessibilityAttributes.controls)}" aria-haspopup="${s(this._hasPopup)}" aria-label="${s(this.ariaLabelText)}" aria-describedby="${s(this.ariaDescribedbyText)}" aria-description="${s(this.ariaDescriptionText)}" title="${s(this.buttonTitle)}" part="button" role="${s(this.effectiveAccRole)}">${this.icon?J.call(this,i,t,r):void 0}<span id="${s(this._id)}-content" class="ui5-button-text"><bdi><slot></slot></bdi></span>${this.endIcon?W.call(this,i,t,r):void 0}${this.hasButtonType?Z.call(this,i,t,r):void 0}</button> `}function J(i,t,r){return r?c`<${v("ui5-icon",t,r)} class="ui5-button-icon" name="${s(this.icon)}" mode="${s(this.iconMode)}" part="icon" ?show-tooltip=${this.showIconTooltip}></${v("ui5-icon",t,r)}>`:c`<ui5-icon class="ui5-button-icon" name="${s(this.icon)}" mode="${s(this.iconMode)}" part="icon" ?show-tooltip=${this.showIconTooltip}></ui5-icon>`}function W(i,t,r){return r?c`<${v("ui5-icon",t,r)} class="ui5-button-end-icon" name="${s(this.endIcon)}" mode="${s(this.endIconMode)}" part="endIcon"></${v("ui5-icon",t,r)}>`:c`<ui5-icon class="ui5-button-end-icon" name="${s(this.endIcon)}" mode="${s(this.endIconMode)}" part="endIcon"></ui5-icon>`}function Z(i,t,r){return c`<span id="ui5-button-hiddenText-type" aria-hidden="true" class="ui5-hidden-text">${s(this.buttonTypeText)}</span>`}w("@ui5/webcomponents-theming","sap_horizon",async()=>$);w("@ui5/webcomponents","sap_horizon",async()=>q);const K={packageName:"@ui5/webcomponents",fileName:"themes/Button.css.ts",content:`:host{vertical-align:middle}.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block}:host{min-width:var(--_ui5-v2-5-0_button_base_min_width);height:var(--_ui5-v2-5-0_button_base_height);line-height:normal;font-family:var(--_ui5-v2-5-0_button_fontFamily);font-size:var(--sapFontSize);text-shadow:var(--_ui5-v2-5-0_button_text_shadow);border-radius:var(--_ui5-v2-5-0_button_border_radius);cursor:pointer;background-color:var(--sapButton_Background);border:var(--sapButton_BorderWidth) solid var(--sapButton_BorderColor);color:var(--sapButton_TextColor);box-sizing:border-box;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ui5-button-root{min-width:inherit;cursor:inherit;height:100%;width:100%;box-sizing:border-box;display:flex;justify-content:center;align-items:center;outline:none;padding:0 var(--_ui5-v2-5-0_button_base_padding);position:relative;background:transparent;border:none;color:inherit;text-shadow:inherit;font:inherit;white-space:inherit;overflow:inherit;text-overflow:inherit;letter-spacing:inherit;word-spacing:inherit;line-height:inherit;-webkit-user-select:none;-moz-user-select:none;user-select:none}:host(:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),:host(:not([hidden]):not([disabled]).ui5_hovered){background:var(--sapButton_Hover_Background);border:1px solid var(--sapButton_Hover_BorderColor);color:var(--sapButton_Hover_TextColor)}.ui5-button-icon,.ui5-button-end-icon{color:inherit;flex-shrink:0}.ui5-button-end-icon{margin-inline-start:var(--_ui5-v2-5-0_button_base_icon_margin)}:host([icon-only]:not([has-end-icon])) .ui5-button-root{min-width:auto;padding:0}:host([icon-only]) .ui5-button-text{display:none}.ui5-button-text{outline:none;position:relative;white-space:inherit;overflow:inherit;text-overflow:inherit}:host([has-icon]:not(:empty)) .ui5-button-text{margin-inline-start:var(--_ui5-v2-5-0_button_base_icon_margin)}:host([has-end-icon]:not([has-icon]):empty) .ui5-button-end-icon{margin-inline-start:0}:host([disabled]){opacity:var(--sapContent_DisabledOpacity);pointer-events:unset;cursor:default}:host([has-icon]:not([icon-only]):not([has-end-icon])) .ui5-button-text{min-width:calc(var(--_ui5-v2-5-0_button_base_min_width) - var(--_ui5-v2-5-0_button_base_icon_margin) - 1rem)}:host([disabled]:active){pointer-events:none}:host([desktop]:not([active])) .ui5-button-root:focus-within:after,:host(:not([active])) .ui5-button-root:focus-visible:after,:host([desktop][active][design="Emphasized"]) .ui5-button-root:focus-within:after,:host([active][design="Emphasized"]) .ui5-button-root:focus-visible:after,:host([desktop][active]) .ui5-button-root:focus-within:before,:host([active]) .ui5-button-root:focus-visible:before{content:"";position:absolute;box-sizing:border-box;inset:.0625rem;border:var(--_ui5-v2-5-0_button_focused_border);border-radius:var(--_ui5-v2-5-0_button_focused_border_radius)}:host([desktop][active]) .ui5-button-root:focus-within:before,:host([active]) .ui5-button-root:focus-visible:before{border-color:var(--_ui5-v2-5-0_button_pressed_focused_border_color)}:host([design="Emphasized"][desktop]) .ui5-button-root:focus-within:after,:host([design="Emphasized"]) .ui5-button-root:focus-visible:after{border-color:var(--_ui5-v2-5-0_button_emphasized_focused_border_color)}:host([design="Emphasized"][desktop]) .ui5-button-root:focus-within:before,:host([design="Emphasized"]) .ui5-button-root:focus-visible:before{content:"";position:absolute;box-sizing:border-box;inset:.0625rem;border:var(--_ui5-v2-5-0_button_emphasized_focused_border_before);border-radius:var(--_ui5-v2-5-0_button_focused_border_radius)}.ui5-button-root::-moz-focus-inner{border:0}bdi{display:block;white-space:inherit;overflow:inherit;text-overflow:inherit}:host([ui5-button][active]:not([disabled]):not([non-interactive])){background-image:none;background-color:var(--sapButton_Active_Background);border-color:var(--sapButton_Active_BorderColor);color:var(--sapButton_Active_TextColor)}:host([design="Positive"]){background-color:var(--sapButton_Accept_Background);border-color:var(--sapButton_Accept_BorderColor);color:var(--sapButton_Accept_TextColor)}:host([design="Positive"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),:host([design="Positive"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered){background-color:var(--sapButton_Accept_Hover_Background);border-color:var(--sapButton_Accept_Hover_BorderColor);color:var(--sapButton_Accept_Hover_TextColor)}:host([ui5-button][design="Positive"][active]:not([non-interactive])){background-color:var(--sapButton_Accept_Active_Background);border-color:var(--sapButton_Accept_Active_BorderColor);color:var(--sapButton_Accept_Active_TextColor)}:host([design="Negative"]){background-color:var(--sapButton_Reject_Background);border-color:var(--sapButton_Reject_BorderColor);color:var(--sapButton_Reject_TextColor)}:host([design="Negative"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),:host([design="Negative"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered){background-color:var(--sapButton_Reject_Hover_Background);border-color:var(--sapButton_Reject_Hover_BorderColor);color:var(--sapButton_Reject_Hover_TextColor)}:host([ui5-button][design="Negative"][active]:not([non-interactive])){background-color:var(--sapButton_Reject_Active_Background);border-color:var(--sapButton_Reject_Active_BorderColor);color:var(--sapButton_Reject_Active_TextColor)}:host([design="Attention"]){background-color:var(--sapButton_Attention_Background);border-color:var(--sapButton_Attention_BorderColor);color:var(--sapButton_Attention_TextColor)}:host([design="Attention"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),:host([design="Attention"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered){background-color:var(--sapButton_Attention_Hover_Background);border-color:var(--sapButton_Attention_Hover_BorderColor);color:var(--sapButton_Attention_Hover_TextColor)}:host([ui5-button][design="Attention"][active]:not([non-interactive])){background-color:var(--sapButton_Attention_Active_Background);border-color:var(--sapButton_Attention_Active_BorderColor);color:var(--sapButton_Attention_Active_TextColor)}:host([design="Emphasized"]){background-color:var(--sapButton_Emphasized_Background);border-color:var(--sapButton_Emphasized_BorderColor);border-width:var(--_ui5-v2-5-0_button_emphasized_border_width);color:var(--sapButton_Emphasized_TextColor);font-family:var(--sapFontBoldFamily )}:host([design="Emphasized"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),:host([design="Emphasized"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered){background-color:var(--sapButton_Emphasized_Hover_Background);border-color:var(--sapButton_Emphasized_Hover_BorderColor);border-width:var(--_ui5-v2-5-0_button_emphasized_border_width);color:var(--sapButton_Emphasized_Hover_TextColor)}:host([ui5-button][design="Empasized"][active]:not([non-interactive])){background-color:var(--sapButton_Emphasized_Active_Background);border-color:var(--sapButton_Emphasized_Active_BorderColor);color:var(--sapButton_Emphasized_Active_TextColor)}:host([design="Emphasized"][desktop]) .ui5-button-root:focus-within:after,:host([design="Emphasized"]) .ui5-button-root:focus-visible:after{border-color:var(--_ui5-v2-5-0_button_emphasized_focused_border_color);outline:none}:host([design="Emphasized"][desktop][active]:not([non-interactive])) .ui5-button-root:focus-within:after,:host([design="Emphasized"][active]:not([non-interactive])) .ui5-button-root:focus-visible:after{border-color:var(--_ui5-v2-5-0_button_emphasized_focused_active_border_color)}:host([design="Transparent"]){background-color:var(--sapButton_Lite_Background);color:var(--sapButton_Lite_TextColor);border-color:var(--sapButton_Lite_BorderColor)}:host([design="Transparent"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),:host([design="Transparent"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered){background-color:var(--sapButton_Lite_Hover_Background);border-color:var(--sapButton_Lite_Hover_BorderColor);color:var(--sapButton_Lite_Hover_TextColor)}:host([ui5-button][design="Transparent"][active]:not([non-interactive])){background-color:var(--sapButton_Lite_Active_Background);border-color:var(--sapButton_Lite_Active_BorderColor);color:var(--sapButton_Active_TextColor)}:host([ui5-segmented-button-item][active][desktop]) .ui5-button-root:focus-within:after,:host([ui5-segmented-button-item][active]) .ui5-button-root:focus-visible:after,:host([pressed][desktop]) .ui5-button-root:focus-within:after,:host([pressed]) .ui5-button-root:focus-visible:after{border-color:var(--_ui5-v2-5-0_button_pressed_focused_border_color);outline:none}:host([ui5-segmented-button-item][desktop]:not(:last-child)) .ui5-button-root:focus-within:after,:host([ui5-segmented-button-item]:not(:last-child)) .ui5-button-root:focus-visible:after{border-top-right-radius:var(--_ui5-v2-5-0_button_focused_inner_border_radius);border-bottom-right-radius:var(--_ui5-v2-5-0_button_focused_inner_border_radius)}:host([ui5-segmented-button-item][desktop]:not(:first-child)) .ui5-button-root:focus-within:after,:host([ui5-segmented-button-item]:not(:first-child)) .ui5-button-root:focus-visible:after{border-top-left-radius:var(--_ui5-v2-5-0_button_focused_inner_border_radius);border-bottom-left-radius:var(--_ui5-v2-5-0_button_focused_inner_border_radius)}
`};var e=function(i,t,r,d){var l=arguments.length,a=l<3?t:d===null?d=Object.getOwnPropertyDescriptor(t,r):d,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,t,r,d);else for(var p=i.length-1;p>=0;p--)(h=i[p])&&(a=(l<3?h(a):l>3?h(t,r,a):h(t,r))||a);return l>3&&a&&Object.defineProperty(t,r,a),a},_;let k=!1,u=null,o=_=class extends E{constructor(){super(),this.design="Default",this.disabled=!1,this.submits=!1,this.accessibilityAttributes={},this.type="Button",this.accessibleRole="Button",this.active=!1,this.iconOnly=!1,this.hasIcon=!1,this.hasEndIcon=!1,this.nonInteractive=!1,this._iconSettings={},this.forcedTabIndex="0",this._isTouch=!1,this._cancelAction=!1,this._deactivate=()=>{u&&u._setActiveState(!1)},k||(document.addEventListener("mouseup",this._deactivate),k=!0);const t=()=>{this.nonInteractive||this._setActiveState(!0)};this._ontouchstart={handleEvent:t,passive:!0}}onEnterDOM(){C()&&this.setAttribute("desktop","")}async onBeforeRendering(){this.hasIcon=!!this.icon,this.hasEndIcon=!!this.endIcon,this.iconOnly=this.isIconOnly,this.buttonTitle=this.tooltip||await this.getDefaultTooltip()}_onclick(){var t;this.nonInteractive||(this._isSubmit&&I(this),this._isReset&&R(this),D()&&((t=this.getDomRef())==null||t.focus()))}_onmousedown(){this.nonInteractive||(this._setActiveState(!0),u=this)}_ontouchend(t){this.disabled&&(t.preventDefault(),t.stopPropagation()),this.active&&this._setActiveState(!1),u&&u._setActiveState(!1)}_onkeydown(t){this._cancelAction=O(t)||N(t),m(t)||B(t)?this._setActiveState(!0):this._cancelAction&&this._setActiveState(!1)}_onkeyup(t){this._cancelAction&&t.preventDefault(),(m(t)||B(t))&&this.active&&this._setActiveState(!1)}_onfocusout(){this.nonInteractive||this.active&&this._setActiveState(!1)}_setActiveState(t){this.fireDecoratorEvent("_active-state-change")&&(this.active=t)}get _hasPopup(){return this.accessibilityAttributes.hasPopup}get hasButtonType(){return this.design!==x.Default&&this.design!==x.Transparent}get iconMode(){return this.icon?y.Decorative:""}get endIconMode(){return this.endIcon?y.Decorative:""}get isIconOnly(){return!F(this.text)}static typeTextMappings(){return{Positive:U,Negative:Y,Emphasized:V}}getDefaultTooltip(){if(A())return L(this.icon)}get buttonTypeText(){return _.i18nBundle.getText(_.typeTextMappings()[this.design])}get effectiveAccRole(){return this.accessibleRole.toLowerCase()}get tabIndexValue(){if(this.disabled)return;const t=this.getAttribute("tabindex");return t||(this.nonInteractive?"-1":this.forcedTabIndex)}get showIconTooltip(){return A()&&this.iconOnly&&!this.tooltip}get ariaLabelText(){return j(this)}get ariaDescribedbyText(){return this.hasButtonType?"ui5-button-hiddenText-type":void 0}get ariaDescriptionText(){return this.accessibleDescription===""?void 0:this.accessibleDescription}get _isSubmit(){return this.type===T.Submit||this.submits}get _isReset(){return this.type===T.Reset}};e([n()],o.prototype,"design",void 0);e([n({type:Boolean})],o.prototype,"disabled",void 0);e([n()],o.prototype,"icon",void 0);e([n()],o.prototype,"endIcon",void 0);e([n({type:Boolean})],o.prototype,"submits",void 0);e([n()],o.prototype,"tooltip",void 0);e([n()],o.prototype,"accessibleName",void 0);e([n()],o.prototype,"accessibleNameRef",void 0);e([n({type:Object})],o.prototype,"accessibilityAttributes",void 0);e([n()],o.prototype,"accessibleDescription",void 0);e([n()],o.prototype,"type",void 0);e([n()],o.prototype,"accessibleRole",void 0);e([n({type:Boolean})],o.prototype,"active",void 0);e([n({type:Boolean})],o.prototype,"iconOnly",void 0);e([n({type:Boolean})],o.prototype,"hasIcon",void 0);e([n({type:Boolean})],o.prototype,"hasEndIcon",void 0);e([n({type:Boolean})],o.prototype,"nonInteractive",void 0);e([n({noAttribute:!0})],o.prototype,"buttonTitle",void 0);e([n({type:Object})],o.prototype,"_iconSettings",void 0);e([n({noAttribute:!0})],o.prototype,"forcedTabIndex",void 0);e([n({type:Boolean})],o.prototype,"_isTouch",void 0);e([n({type:Boolean,noAttribute:!0})],o.prototype,"_cancelAction",void 0);e([S({type:Node,default:!0})],o.prototype,"text",void 0);e([P("@ui5/webcomponents")],o,"i18nBundle",void 0);o=_=e([z({tag:"ui5-button",formAssociated:!0,languageAware:!0,renderer:H,template:G,styles:K,dependencies:[M],shadowRootOptions:{delegatesFocus:!0}}),g("click",{bubbles:!0}),g("_active-state-change",{bubbles:!0,cancelable:!0})],o);o.define();const dt=o;export{x as B,dt as a};
