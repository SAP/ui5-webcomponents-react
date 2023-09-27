import{r as k,U as C,p as E,y as z,z as $,q as I,t as B,n as R}from"./UI5Element-fe43d284.js";import{b as v,l as a,d as y,s as S,a as N,p as r,c as H,f as O}from"./withWebComponent-40b4b429.js";import{e as P,a as j}from"./Icon-4b8e6c3e.js";import{s as D}from"./slot-76e48863.js";import{K as L,k as x,l as w}from"./Icons-1d0bcfc0.js";import{g as F}from"./AriaLabelHelper-43a261ec.js";import{g as T}from"./CustomElementsScopeUtils-7e643eaa.js";import{m as c}from"./MarkedEvents-b83081e9.js";import{a1 as V,a2 as M,a3 as U}from"./i18n-defaults-d5195a49.js";var g;(function(e){e.Default="Default",e.Positive="Positive",e.Negative="Negative",e.Transparent="Transparent",e.Emphasized="Emphasized",e.Attention="Attention"})(g||(g={}));const b=g;var m;(function(e){e.Button="Button",e.Submit="Submit",e.Reset="Reset"})(m||(m={}));const l=m,Y=e=>Array.from(e).filter(t=>t.nodeType!==Node.COMMENT_NODE&&(t.nodeType!==Node.TEXT_NODE||(t.nodeValue||"").trim().length!==0)).length>0;function q(e,t,i){return v`<button type="button" class="ui5-button-root" ?disabled="${this.disabled}" data-sap-focus-ref  @focusout=${this._onfocusout} @focusin=${this._onfocusin} @click=${this._onclick} @mousedown=${this._onmousedown} @mouseup=${this._onmouseup} @keydown=${this._onkeydown} @keyup=${this._onkeyup} @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" tabindex=${a(this.tabIndexValue)} aria-expanded="${a(this.accessibilityAttributes.expanded)}" aria-controls="${a(this.accessibilityAttributes.controls)}" aria-haspopup="${a(this.accessibilityAttributes.hasPopup)}" aria-label="${a(this.ariaLabelText)}" title="${a(this.buttonTitle)}" part="button">${this.icon?G.call(this,e,t,i):void 0}<span id="${a(this._id)}-content" class="ui5-button-text"><bdi><slot></slot></bdi></span>${this.hasButtonType?J.call(this,e,t,i):void 0}</button> `}function G(e,t,i){return i?v`<${y("ui5-icon",t,i)} class="ui5-button-icon" name="${a(this.icon)}" accessible-role="${a(this.iconRole)}" part="icon" ?show-tooltip=${this.showIconTooltip}></${y("ui5-icon",t,i)}>`:v`<ui5-icon class="ui5-button-icon" name="${a(this.icon)}" accessible-role="${a(this.iconRole)}" part="icon" ?show-tooltip=${this.showIconTooltip}></ui5-icon>`}function J(e,t,i){return v`<span class="ui5-hidden-text">${a(this.buttonTypeText)}</span>`}k("@ui5/webcomponents-theming","sap_fiori_3",async()=>S);k("@ui5/webcomponents","sap_fiori_3",async()=>N);const K={packageName:"@ui5/webcomponents",fileName:"themes/Button.css",content:':host{vertical-align:middle}.ui5-hidden-text{clip:rect(1px,1px,1px,1px);font-size:0;left:-1000px;pointer-events:none;position:absolute;top:-1000px;user-select:none}:host(:not([hidden])){display:inline-block}:host{background-color:var(--sapButton_Background);border:var(--sapButton_BorderWidth) solid var(--sapButton_BorderColor);border-radius:var(--_ui5-v1-17-2_button_border_radius);box-sizing:border-box;color:var(--sapButton_TextColor);cursor:pointer;font-family:var(--_ui5-v1-17-2_button_fontFamily);font-size:var(--sapFontSize);height:var(--_ui5-v1-17-2_button_base_height);line-height:normal;min-width:var(--_ui5-v1-17-2_button_base_min_width);overflow:hidden;text-overflow:ellipsis;text-shadow:var(--_ui5-v1-17-2_button_text_shadow);white-space:nowrap}.ui5-button-root{align-items:center;background:transparent;border:none;box-sizing:border-box;color:inherit;cursor:inherit;display:flex;font:inherit;height:100%;justify-content:center;letter-spacing:inherit;line-height:inherit;min-width:inherit;outline:none;overflow:inherit;padding:0 var(--_ui5-v1-17-2_button_base_padding);position:relative;text-overflow:inherit;text-shadow:inherit;-webkit-user-select:none;-moz-user-select:none;user-select:none;white-space:inherit;width:100%;word-spacing:inherit}:host(:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),:host(:not([hidden]):not([disabled]).ui5_hovered){background:var(--sapButton_Hover_Background);border:1px solid var(--sapButton_Hover_BorderColor);box-shadow:var(--sapContent_Interaction_Shadow);color:var(--sapButton_Hover_TextColor)}.ui5-button-icon{color:inherit;flex-shrink:0}:host([icon-end]) .ui5-button-root{flex-direction:row-reverse}:host([icon-end]) .ui5-button-icon{margin-inline-start:var(--_ui5-v1-17-2_button_base_icon_margin)}:host([icon-only]) .ui5-button-root{min-width:auto;padding:0}:host([icon-only]) .ui5-button-text{display:none}.ui5-button-text{outline:none;overflow:inherit;position:relative;text-overflow:inherit;white-space:inherit}:host([has-icon]:not([icon-end])) .ui5-button-text{margin-inline-start:var(--_ui5-v1-17-2_button_base_icon_margin)}:host([has-icon][icon-end]) .ui5-button-text{margin-inline-start:0}:host([disabled]){cursor:default;opacity:var(--sapContent_DisabledOpacity);pointer-events:unset}:host([has-icon]:not([icon-only])) .ui5-button-text{min-width:calc(var(--_ui5-v1-17-2_button_base_min_width) - var(--_ui5-v1-17-2_button_base_icon_margin) - 1rem)}:host([disabled]:active){pointer-events:none}:host([focused]) .ui5-button-root:after{border:var(--_ui5-v1-17-2_button_focused_border);border-radius:var(--_ui5-v1-17-2_button_focused_border_radius);bottom:.0625rem;box-sizing:border-box;content:"";left:.0625rem;position:absolute;right:.0625rem;top:.0625rem}:host([design=Emphasized][focused]) .ui5-button-root:after{border-color:var(--_ui5-v1-17-2_button_emphasized_focused_border_color)}:host([design=Emphasized][focused]) .ui5-button-root:before{border:var(--_ui5-v1-17-2_button_emphasized_focused_border_before);border-radius:var(--_ui5-v1-17-2_button_focused_border_radius);bottom:.0625rem;box-sizing:border-box;content:"";left:.0625rem;position:absolute;right:.0625rem;top:.0625rem}.ui5-button-root::-moz-focus-inner{border:0}bdi{display:block;overflow:inherit;text-overflow:inherit;white-space:inherit}:host([ui5-button][active]:not([disabled]):not([non-interactive])){background-color:var(--sapButton_Active_Background);background-image:none;border-color:var(--sapButton_Active_BorderColor);color:var(--sapButton_Active_TextColor)}:host([design=Positive]){background-color:var(--sapButton_Accept_Background);border-color:var(--sapButton_Accept_BorderColor);color:var(--sapButton_Accept_TextColor)}:host([design=Positive]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered),:host([design=Positive]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover){background-color:var(--sapButton_Accept_Hover_Background);border-color:var(--sapButton_Accept_Hover_BorderColor);box-shadow:var(--sapContent_Positive_Shadow);color:var(--sapButton_Accept_Hover_TextColor)}:host([ui5-button][design=Positive][active]:not([non-interactive])){background-color:var(--sapButton_Accept_Active_Background);border-color:var(--sapButton_Accept_Active_BorderColor);color:var(--sapButton_Accept_Active_TextColor)}:host([design=Negative]){background-color:var(--sapButton_Reject_Background);border-color:var(--sapButton_Reject_BorderColor);color:var(--sapButton_Reject_TextColor)}:host([design=Negative]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered),:host([design=Negative]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover){background-color:var(--sapButton_Reject_Hover_Background);border-color:var(--sapButton_Reject_Hover_BorderColor);box-shadow:var(--sapContent_Negative_Shadow);color:var(--sapButton_Reject_Hover_TextColor)}:host([ui5-button][design=Negative][active]:not([non-interactive])){background-color:var(--sapButton_Reject_Active_Background);border-color:var(--sapButton_Reject_Active_BorderColor);color:var(--sapButton_Reject_Active_TextColor)}:host([design=Attention]){background-color:var(--sapButton_Attention_Background);border-color:var(--sapButton_Attention_BorderColor);color:var(--sapButton_Attention_TextColor)}:host([design=Attention]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered),:host([design=Attention]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover){background-color:var(--sapButton_Attention_Hover_Background);border-color:var(--sapButton_Attention_Hover_BorderColor);box-shadow:var(--sapContent_Critical_Shadow);color:var(--sapButton_Attention_Hover_TextColor)}:host([ui5-button][design=Attention][active]:not([non-interactive])){background-color:var(--sapButton_Attention_Active_Background);border-color:var(--sapButton_Attention_Active_BorderColor);color:var(--sapButton_Attention_Active_TextColor)}:host([design=Emphasized]){background-color:var(--sapButton_Emphasized_Background);border-color:var(--sapButton_Emphasized_BorderColor);border-width:var(--_ui5-v1-17-2_button_emphasized_border_width);color:var(--sapButton_Emphasized_TextColor);font-weight:var(--_ui5-v1-17-2_button_emphasized_font_weight)}:host([design=Emphasized]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered),:host([design=Emphasized]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover){background-color:var(--sapButton_Emphasized_Hover_Background);border-color:var(--sapButton_Emphasized_Hover_BorderColor);border-width:var(--_ui5-v1-17-2_button_emphasized_border_width);box-shadow:none;color:var(--sapButton_Emphasized_Hover_TextColor)}:host([ui5-button][design=Empasized][active]:not([non-interactive])){background-color:var(--sapButton_Emphasized_Active_Background);border-color:var(--sapButton_Emphasized_Active_BorderColor);color:var(--sapButton_Emphasized_Active_TextColor)}:host([design=Emphasized][focused]) .ui5-button-root:after{border-color:var(--sapContent_ContrastFocusColor);outline:none}:host([design=Transparent]){background-color:var(--sapButton_Lite_Background);border-color:var(--sapButton_Lite_BorderColor);color:var(--sapButton_Lite_TextColor)}:host([design=Transparent]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered),:host([design=Transparent]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover){background-color:var(--sapButton_Lite_Hover_Background);border-color:var(--sapButton_Lite_Hover_BorderColor);box-shadow:var(--sapContent_Interaction_Shadow);color:var(--sapButton_Lite_Hover_TextColor)}:host([ui5-button][design=Transparent][active]:not([non-interactive])){background-color:var(--sapButton_Lite_Active_Background);border-color:var(--sapButton_Lite_Active_BorderColor);color:var(--sapButton_Active_TextColor)}:host([pressed][focused]) .ui5-button-root:after,:host([ui5-segmented-button-item][active][focused]) .ui5-button-root:after{border-color:var(--_ui5-v1-17-2_button_pressed_focused_border_color);outline:none}:host([ui5-segmented-button-item][focused]:not(:last-child)) .ui5-button-root:after{border-bottom-right-radius:var(--_ui5-v1-17-2_button_focused_inner_border_radius);border-top-right-radius:var(--_ui5-v1-17-2_button_focused_inner_border_radius)}:host([ui5-segmented-button-item][focused]:not(:first-child)) .ui5-button-root:after{border-bottom-left-radius:var(--_ui5-v1-17-2_button_focused_inner_border_radius);border-top-left-radius:var(--_ui5-v1-17-2_button_focused_inner_border_radius)}'};var n=globalThis&&globalThis.__decorate||function(e,t,i,u){var p=arguments.length,s=p<3?t:u===null?u=Object.getOwnPropertyDescriptor(t,i):u,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(e,t,i,u);else for(var f=e.length-1;f>=0;f--)(h=e[f])&&(s=(p<3?h(s):p>3?h(t,i,s):h(t,i))||s);return p>3&&s&&Object.defineProperty(t,i,s),s},_;let A=!1,d=null,o=_=class extends C{constructor(){super(),this._deactivate=()=>{d&&(d.active=!1)},A||(document.addEventListener("mouseup",this._deactivate),A=!0);const t=i=>{c(i,"button"),!this.nonInteractive&&(this.active=!0)};this._ontouchstart={handleEvent:t,passive:!0}}onEnterDOM(){this._isTouch=(E()||z())&&!$()}async onBeforeRendering(){const t=T("FormSupport");this.type!==l.Button&&!t&&console.warn('In order for the "type" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";'),this.submits&&!t&&console.warn('In order for the "submits" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";'),this.iconOnly=this.isIconOnly,this.hasIcon=!!this.icon,this.buttonTitle=this.tooltip||await L(this.icon)}_onclick(t){var u;if(this.nonInteractive)return;c(t,"button");const i=T("FormSupport");i&&this._isSubmit&&i.triggerFormSubmit(this),i&&this._isReset&&i.triggerFormReset(this),I()&&((u=this.getDomRef())==null||u.focus())}_onmousedown(t){this.nonInteractive||this._isTouch||(c(t,"button"),this.active=!0,d=this)}_ontouchend(t){this.disabled&&(t.preventDefault(),t.stopPropagation()),this.active=!1,d&&(d.active=!1)}_onmouseup(t){c(t,"button")}_onkeydown(t){c(t,"button"),(x(t)||w(t))&&(this.active=!0)}_onkeyup(t){(x(t)||w(t))&&(this.active=!1)}_onfocusout(){this.nonInteractive||(this.active=!1,B()&&(this.focused=!1))}_onfocusin(t){this.nonInteractive||(c(t,"button"),B()&&(this.focused=!0))}get hasButtonType(){return this.design!==b.Default&&this.design!==b.Transparent}get iconRole(){return this.icon?"presentation":""}get isIconOnly(){return!Y(this.text)}static typeTextMappings(){return{Positive:V,Negative:M,Emphasized:U}}get buttonTypeText(){return _.i18nBundle.getText(_.typeTextMappings()[this.design])}get tabIndexValue(){const t=this.getAttribute("tabindex");return t||(this.nonInteractive?"-1":this._tabIndex)}get showIconTooltip(){return this.iconOnly&&!this.tooltip}get ariaLabelText(){return F(this)}get _isSubmit(){return this.type===l.Submit||this.submits}get _isReset(){return this.type===l.Reset}static async onDefine(){_.i18nBundle=await R("@ui5/webcomponents")}};n([r({type:b,defaultValue:b.Default})],o.prototype,"design",void 0);n([r({type:Boolean})],o.prototype,"disabled",void 0);n([r()],o.prototype,"icon",void 0);n([r({type:Boolean})],o.prototype,"iconEnd",void 0);n([r({type:Boolean})],o.prototype,"submits",void 0);n([r()],o.prototype,"tooltip",void 0);n([r({defaultValue:void 0})],o.prototype,"accessibleName",void 0);n([r({defaultValue:""})],o.prototype,"accessibleNameRef",void 0);n([r({type:Object})],o.prototype,"accessibilityAttributes",void 0);n([r({type:l,defaultValue:l.Button})],o.prototype,"type",void 0);n([r({type:Boolean})],o.prototype,"active",void 0);n([r({type:Boolean})],o.prototype,"iconOnly",void 0);n([r({type:Boolean})],o.prototype,"focused",void 0);n([r({type:Boolean})],o.prototype,"hasIcon",void 0);n([r({type:Boolean})],o.prototype,"nonInteractive",void 0);n([r({noAttribute:!0})],o.prototype,"buttonTitle",void 0);n([r({type:Object})],o.prototype,"_iconSettings",void 0);n([r({defaultValue:"0",noAttribute:!0})],o.prototype,"_tabIndex",void 0);n([r({type:Boolean})],o.prototype,"_isTouch",void 0);n([D({type:Node,default:!0})],o.prototype,"text",void 0);o=_=n([H({tag:"ui5-button",languageAware:!0,renderer:O,template:q,styles:K,dependencies:[j]}),P("click")],o);o.define();const W=o,st=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));export{b as B,l as a,W as b,st as c,Y as w};
//# sourceMappingURL=Button-ca10e4c6.js.map
