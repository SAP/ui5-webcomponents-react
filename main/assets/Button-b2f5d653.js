import{a as A,U as k,d as x}from"./UI5Element-427ec721.js";import{e as v,l as a,f as g,s as C,a as E,p as i,c as z,b as $}from"./withWebComponent-e4481254.js";import{e as I,B as R,h as H,i as N}from"./i18n-defaults-ffd92f69.js";import{s as O,g as S}from"./AriaLabelHelper-c82262ef.js";import{c as m,b as B}from"./Keys-3acbae73.js";import{g as y}from"./CustomElementsScopeUtils-137da8c8.js";import{m as c}from"./MarkedEvents-b83081e9.js";import{c as P,d as j,e as D,a as L,f as w}from"./Device-208919c6.js";import{I as F}from"./Icon-ce854b74.js";var f;(function(o){o.Default="Default",o.Positive="Positive",o.Negative="Negative",o.Transparent="Transparent",o.Emphasized="Emphasized",o.Attention="Attention"})(f||(f={}));const b=f,M=o=>Array.from(o).filter(t=>t.nodeType!==Node.COMMENT_NODE&&(t.nodeType!==Node.TEXT_NODE||(t.nodeValue||"").trim().length!==0)).length>0,V=(o,t,r)=>v`<button type="button" class="ui5-button-root" ?disabled="${o.disabled}" data-sap-focus-ref  @focusout=${o._onfocusout} @focusin=${o._onfocusin} @click=${o._onclick} @mousedown=${o._onmousedown} @mouseup=${o._onmouseup} @keydown=${o._onkeydown} @keyup=${o._onkeyup} @touchstart="${o._ontouchstart}" @touchend="${o._ontouchend}" tabindex=${a(o.tabIndexValue)} aria-expanded="${a(o.accessibilityAttributes.expanded)}" aria-controls="${a(o.accessibilityAttributes.controls)}" aria-haspopup="${a(o.accessibilityAttributes.hasPopup)}" aria-label="${a(o.ariaLabelText)}" title="${a(o.tooltip)}" part="button">${o.icon?U(o,t,r):void 0}<span id="${a(o._id)}-content" class="ui5-button-text"><bdi><slot></slot></bdi></span>${o.hasButtonType?Y(o):void 0}</button> `,U=(o,t,r)=>r?v`<${g("ui5-icon",t,r)} class="ui5-button-icon" name="${a(o.icon)}" accessible-role="${a(o.iconRole)}" part="icon" ?show-tooltip=${o.showIconTooltip}></${g("ui5-icon",t,r)}>`:v`<ui5-icon class="ui5-button-icon" name="${a(o.icon)}" accessible-role="${a(o.iconRole)}" part="icon" ?show-tooltip=${o.showIconTooltip}></ui5-icon>`,Y=(o,t,r)=>v`<span class="ui5-hidden-text">${a(o.buttonTypeText)}</span>`;A("@ui5/webcomponents-theming","sap_fiori_3",async()=>C);A("@ui5/webcomponents","sap_fiori_3",async()=>E);const G={packageName:"@ui5/webcomponents",fileName:"themes/Button.css.ts",content:'.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block}:host{min-width:var(--_ui5_button_base_min_width);height:var(--_ui5_button_base_height);line-height:normal;font-family:var(--_ui5_button_fontFamily);font-size:var(--sapFontSize);text-shadow:var(--_ui5_button_text_shadow);border-radius:var(--_ui5_button_border_radius);cursor:pointer;background-color:var(--sapButton_Background);border:var(--sapButton_BorderWidth) solid var(--sapButton_BorderColor);color:var(--sapButton_TextColor);box-sizing:border-box;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ui5-button-root{min-width:inherit;cursor:inherit;height:100%;width:100%;box-sizing:border-box;display:flex;justify-content:center;align-items:center;outline:none;padding:0 var(--_ui5_button_base_padding);position:relative;background:transparent;border:none;color:inherit;text-shadow:inherit;font:inherit;white-space:inherit;overflow:inherit;text-overflow:inherit;letter-spacing:inherit;word-spacing:inherit;line-height:inherit;-webkit-user-select:none;-moz-user-select:none;user-select:none}:host(:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),:host(:not([hidden]):not([disabled]).ui5_hovered){background:var(--sapButton_Hover_Background);box-shadow:var(--sapContent_Interaction_Shadow);border:1px solid var(--sapButton_Hover_BorderColor);color:var(--sapButton_Hover_TextColor)}.ui5-button-icon{color:inherit;flex-shrink:0}:host([icon-end]) .ui5-button-root{flex-direction:row-reverse}:host([icon-end]) .ui5-button-icon{margin-inline-start:var(--_ui5_button_base_icon_margin)}:host([icon-only]) .ui5-button-root{min-width:auto;padding:0}:host([icon-only]) .ui5-button-text{display:none}.ui5-button-text{outline:none;position:relative;white-space:inherit;overflow:inherit;text-overflow:inherit}:host([has-icon]:not([icon-end])) .ui5-button-text{margin-inline-start:var(--_ui5_button_base_icon_margin)}:host([has-icon][icon-end]) .ui5-button-text{margin-inline-start:0}:host([disabled]){opacity:var(--sapContent_DisabledOpacity);pointer-events:unset;cursor:default}:host([has-icon]:not([icon-only])) .ui5-button-text{min-width:calc(var(--_ui5_button_base_min_width) - var(--_ui5_button_base_icon_margin) - 1rem)}:host([disabled]:active){pointer-events:none}:host([focused]) .ui5-button-root:after{content:"";position:absolute;box-sizing:border-box;left:.0625rem;top:.0625rem;right:.0625rem;bottom:.0625rem;border:var(--_ui5_button_focused_border);pointer-events:none;border-radius:var(--_ui5_button_focused_border_radius)}:host([design=Emphasized][focused]) .ui5-button-root:after{border-color:var(--_ui5_button_emphasized_focused_border_color)}:host([design=Emphasized][focused]) .ui5-button-root:before{content:"";position:absolute;box-sizing:border-box;left:.0625rem;top:.0625rem;right:.0625rem;bottom:.0625rem;border:var(--_ui5_button_emphasized_focused_border_before);pointer-events:none;border-radius:var(--_ui5_button_focused_border_radius)}.ui5-button-root::-moz-focus-inner{border:0}bdi{display:block;white-space:inherit;overflow:inherit;text-overflow:inherit}:host([ui5-button][active]:not([disabled]):not([non-interactive])){background-image:none;background-color:var(--sapButton_Active_Background);border-color:var(--sapButton_Active_BorderColor);color:var(--sapButton_Active_TextColor)}:host([design=Positive]){background-color:var(--sapButton_Accept_Background);border-color:var(--sapButton_Accept_BorderColor);color:var(--sapButton_Accept_TextColor)}:host([design=Positive]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered),:host([design=Positive]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover){background-color:var(--sapButton_Accept_Hover_Background);border-color:var(--sapButton_Accept_Hover_BorderColor);box-shadow:var(--sapContent_Positive_Shadow);color:var(--sapButton_Accept_Hover_TextColor)}:host([ui5-button][design=Positive][active]:not([non-interactive])){background-color:var(--sapButton_Accept_Active_Background);border-color:var(--sapButton_Accept_Active_BorderColor);color:var(--sapButton_Accept_Active_TextColor)}:host([design=Negative]){background-color:var(--sapButton_Reject_Background);border-color:var(--sapButton_Reject_BorderColor);color:var(--sapButton_Reject_TextColor)}:host([design=Negative]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered),:host([design=Negative]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover){background-color:var(--sapButton_Reject_Hover_Background);border-color:var(--sapButton_Reject_Hover_BorderColor);box-shadow:var(--sapContent_Negative_Shadow);color:var(--sapButton_Reject_Hover_TextColor)}:host([ui5-button][design=Negative][active]:not([non-interactive])){background-color:var(--sapButton_Reject_Active_Background);border-color:var(--sapButton_Reject_Active_BorderColor);color:var(--sapButton_Reject_Active_TextColor)}:host([design=Attention]){background-color:var(--sapButton_Attention_Background);border-color:var(--sapButton_Attention_BorderColor);color:var(--sapButton_Attention_TextColor)}:host([design=Attention]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered),:host([design=Attention]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover){background-color:var(--sapButton_Attention_Hover_Background);border-color:var(--sapButton_Attention_Hover_BorderColor);color:var(--sapButton_Attention_Hover_TextColor);box-shadow:var(--sapContent_Critical_Shadow)}:host([ui5-button][design=Attention][active]:not([non-interactive])){background-color:var(--sapButton_Attention_Active_Background);border-color:var(--sapButton_Attention_Active_BorderColor);color:var(--sapButton_Attention_Active_TextColor)}:host([design=Emphasized]){background-color:var(--sapButton_Emphasized_Background);border-color:var(--sapButton_Emphasized_BorderColor);border-width:var(--_ui5_button_emphasized_border_width);color:var(--sapButton_Emphasized_TextColor);font-weight:var(--_ui5_button_emphasized_font_weight)}:host([design=Emphasized]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered),:host([design=Emphasized]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover){background-color:var(--sapButton_Emphasized_Hover_Background);border-color:var(--sapButton_Emphasized_Hover_BorderColor);border-width:var(--_ui5_button_emphasized_border_width);color:var(--sapButton_Emphasized_Hover_TextColor);box-shadow:none}:host([ui5-button][design=Empasized][active]:not([non-interactive])){background-color:var(--sapButton_Emphasized_Active_Background);border-color:var(--sapButton_Emphasized_Active_BorderColor);color:var(--sapButton_Emphasized_Active_TextColor)}:host([design=Emphasized][focused]) .ui5-button-root:after{border-color:var(--sapContent_ContrastFocusColor);outline:none}:host([design=Transparent]){background-color:var(--sapButton_Lite_Background);color:var(--sapButton_Lite_TextColor);border-color:var(--sapButton_Lite_BorderColor)}:host([design=Transparent]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered),:host([design=Transparent]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover){background-color:var(--sapButton_Lite_Hover_Background);border-color:var(--sapButton_Lite_Hover_BorderColor);box-shadow:var(--sapContent_Interaction_Shadow);color:var(--sapButton_Lite_Hover_TextColor)}:host([ui5-button][design=Transparent][active]:not([non-interactive])){background-color:var(--sapButton_Lite_Active_Background);border-color:var(--sapButton_Lite_Active_BorderColor);color:var(--sapButton_Active_TextColor)}:host([pressed][focused]) .ui5-button-root:after,:host([ui5-segmented-button-item][active][focused]) .ui5-button-root:after{border-color:var(--_ui5_button_pressed_focused_border_color);outline:none}:host([ui5-segmented-button-item][focused]:not(:last-child)) .ui5-button-root:after{border-top-right-radius:var(--_ui5_button_focused_inner_border_radius);border-bottom-right-radius:var(--_ui5_button_focused_inner_border_radius)}:host([ui5-segmented-button-item][focused]:not(:first-child)) .ui5-button-root:after{border-top-left-radius:var(--_ui5_button_focused_inner_border_radius);border-bottom-left-radius:var(--_ui5_button_focused_inner_border_radius)}'};var n=globalThis&&globalThis.__decorate||function(o,t,r,u){var l=arguments.length,s=l<3?t:u===null?u=Object.getOwnPropertyDescriptor(t,r):u,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,t,r,u);else for(var h=o.length-1;h>=0;h--)(p=o[h])&&(s=(l<3?p(s):l>3?p(t,r,s):p(t,r))||s);return l>3&&s&&Object.defineProperty(t,r,s),s},_;let T=!1,d=null,e=_=class extends k{constructor(){super(),this._deactivate=()=>{d&&(d.active=!1)},T||(document.addEventListener("mouseup",this._deactivate),T=!0);const t=r=>{c(r,"button"),!this.nonInteractive&&(this.active=!0)};this._ontouchstart={handleEvent:t,passive:!0}}onEnterDOM(){this._isTouch=(P()||j())&&!D()}onBeforeRendering(){const t=y("FormSupport");this.submits&&!t&&console.warn('In order for the "submits" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";'),this.iconOnly=this.isIconOnly,this.hasIcon=!!this.icon}_onclick(t){var u;if(this.nonInteractive)return;c(t,"button");const r=y("FormSupport");r&&this.submits&&r.triggerFormSubmit(this),L()&&((u=this.getDomRef())==null||u.focus())}_onmousedown(t){this.nonInteractive||this._isTouch||(c(t,"button"),this.active=!0,d=this)}_ontouchend(){this.active=!1,d&&(d.active=!1)}_onmouseup(t){c(t,"button")}_onkeydown(t){c(t,"button"),(m(t)||B(t))&&(this.active=!0)}_onkeyup(t){(m(t)||B(t))&&(this.active=!1)}_onfocusout(){this.nonInteractive||(this.active=!1,w()&&(this.focused=!1))}_onfocusin(t){this.nonInteractive||(c(t,"button"),w()&&(this.focused=!0))}get hasButtonType(){return this.design!==b.Default&&this.design!==b.Transparent}get iconRole(){return this.icon?this.showIconTooltip?"img":"presentation":""}get isIconOnly(){return!M(this.text)}static typeTextMappings(){return{Positive:R,Negative:H,Emphasized:N}}get buttonTypeText(){return _.i18nBundle.getText(_.typeTextMappings()[this.design])}get tabIndexValue(){const t=this.getAttribute("tabindex");return t||(this.nonInteractive?"-1":this._tabIndex)}get showIconTooltip(){return this.iconOnly&&!this.tooltip}get ariaLabelText(){return S(this)}static async onDefine(){_.i18nBundle=await x("@ui5/webcomponents")}};n([i({type:b,defaultValue:b.Default})],e.prototype,"design",void 0);n([i({type:Boolean})],e.prototype,"disabled",void 0);n([i()],e.prototype,"icon",void 0);n([i({type:Boolean})],e.prototype,"iconEnd",void 0);n([i({type:Boolean})],e.prototype,"submits",void 0);n([i()],e.prototype,"tooltip",void 0);n([i({defaultValue:void 0})],e.prototype,"accessibleName",void 0);n([i({defaultValue:""})],e.prototype,"accessibleNameRef",void 0);n([i({type:Object})],e.prototype,"accessibilityAttributes",void 0);n([i({type:Boolean})],e.prototype,"active",void 0);n([i({type:Boolean})],e.prototype,"iconOnly",void 0);n([i({type:Boolean})],e.prototype,"focused",void 0);n([i({type:Boolean})],e.prototype,"hasIcon",void 0);n([i({type:Boolean})],e.prototype,"nonInteractive",void 0);n([i({type:Object})],e.prototype,"_iconSettings",void 0);n([i({defaultValue:"0",noAttribute:!0})],e.prototype,"_tabIndex",void 0);n([i({type:Boolean})],e.prototype,"_isTouch",void 0);n([O({type:Node,default:!0})],e.prototype,"text",void 0);e=_=n([z({tag:"ui5-button",languageAware:!0,renderer:$,template:V,styles:G,dependencies:[F]}),I("click")],e);e.define();const J=e,ro=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"}));export{J as B,b as a,ro as b,M as w};
//# sourceMappingURL=Button-b2f5d653.js.map
