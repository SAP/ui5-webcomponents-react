import{j as s,b as w,F as k,p as A,d as z,s as n,m as C,l as E,A as I,E as R,L as O,M as D,h as S}from"./jsx-runtime-cXES_1K3.js";import{l as H}from"./event-strict-DgQLNDEV.js";import{d as T}from"./slot-_4yKMUwC.js";import{i as N}from"./i18n-CjR4HGlq.js";import{d as F,H as L,i as f,b as g}from"./Keys-B3oBAe0t.js";import{A as $}from"./AccessibilityTextsHelper-4hgGqLyb.js";import{I as m,A as M}from"./Icon-DONP1ba8.js";import{t as V}from"./willShowContent-CZcfsNXp.js";import{l as B}from"./Tooltips-BLn7sIp1.js";import{n as U}from"./toLowercaseEnumValue-C_8o5td_.js";import{ao as Y,ap as K,aq as q}from"./i18n-defaults-Be8E4wti.js";import{d as G}from"./parameters-bundle.css-DHLNbl9v.js";var _;(function(t){t.Default="Default",t.Positive="Positive",t.Negative="Negative",t.Transparent="Transparent",t.Emphasized="Emphasized",t.Attention="Attention"})(_||(_={}));var p;(function(t){t.Button="Button",t.Submit="Submit",t.Reset="Reset"})(p||(p={}));const y=p;var c;(function(t){t.InlineText="InlineText",t.OverlayText="OverlayText",t.AttentionDot="AttentionDot"})(c||(c={}));function J(t){var o,r,u;return s(k,{children:w("button",{type:"button",class:{"ui5-button-root":!0,"ui5-button-badge-placement-end":((o=this.badge[0])==null?void 0:o.design)==="InlineText","ui5-button-badge-placement-end-top":((r=this.badge[0])==null?void 0:r.design)==="OverlayText","ui5-button-badge-dot":((u=this.badge[0])==null?void 0:u.design)==="AttentionDot"},disabled:this.disabled,"data-sap-focus-ref":!0,"aria-pressed":t==null?void 0:t.ariaPressed,"aria-valuemin":t==null?void 0:t.ariaValueMin,"aria-valuemax":t==null?void 0:t.ariaValueMax,"aria-valuenow":t==null?void 0:t.ariaValueNow,"aria-valuetext":t==null?void 0:t.ariaValueText,onFocusOut:this._onfocusout,onClick:this._onclick,onMouseDown:this._onmousedown,onKeyDown:this._onkeydown,onKeyUp:this._onkeyup,onTouchStart:this._ontouchstart,onTouchEnd:this._ontouchend,tabindex:this.tabIndexValue,"aria-expanded":this.accessibilityAttributes.expanded,"aria-controls":this.accessibilityAttributes.controls,"aria-haspopup":this._hasPopup,"aria-label":this.ariaLabelText,"aria-describedby":this.ariaDescribedbyText,"aria-description":this.ariaDescriptionText,title:this.buttonTitle,part:"button",role:this.effectiveAccRole,children:[this.icon&&s(m,{class:"ui5-button-icon",name:this.icon,mode:"Decorative",part:"icon",showTooltip:this.showIconTooltip}),s("span",{id:`${this._id}-content`,class:"ui5-button-text",children:s("bdi",{children:s("slot",{})})}),this.endIcon&&s(m,{class:"ui5-button-end-icon",name:this.endIcon,mode:"Decorative",part:"endIcon"}),this.hasButtonType&&s("span",{id:"ui5-button-hiddenText-type","aria-hidden":"true",class:"ui5-hidden-text",children:this.buttonTypeText}),this.shouldRenderBadge&&s("slot",{name:"badge"})]})})}A("@ui5/webcomponents-theming","sap_horizon",async()=>z);A("@ui5/webcomponents","sap_horizon",async()=>G);const W=`:host{vertical-align:middle}.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block}:host{min-width:var(--_ui5-v2-8-0_button_base_min_width);height:var(--_ui5-v2-8-0_button_base_height);line-height:normal;font-family:var(--_ui5-v2-8-0_button_fontFamily);font-size:var(--sapFontSize);text-shadow:var(--_ui5-v2-8-0_button_text_shadow);border-radius:var(--_ui5-v2-8-0_button_border_radius);cursor:pointer;background-color:var(--sapButton_Background);border:var(--sapButton_BorderWidth) solid var(--sapButton_BorderColor);color:var(--sapButton_TextColor);box-sizing:border-box;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;-webkit-tap-highlight-color:transparent}.ui5-button-root{min-width:inherit;cursor:inherit;height:100%;width:100%;box-sizing:border-box;display:flex;justify-content:center;align-items:center;outline:none;padding:0 var(--_ui5-v2-8-0_button_base_padding);position:relative;background:transparent;border:none;color:inherit;text-shadow:inherit;font:inherit;white-space:inherit;overflow:inherit;text-overflow:inherit;letter-spacing:inherit;word-spacing:inherit;line-height:inherit;-webkit-user-select:none;-moz-user-select:none;user-select:none}:host(:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),:host(:not([hidden]):not([disabled]).ui5_hovered){background:var(--sapButton_Hover_Background);border:1px solid var(--sapButton_Hover_BorderColor);color:var(--sapButton_Hover_TextColor)}.ui5-button-icon,.ui5-button-end-icon{color:inherit;flex-shrink:0}.ui5-button-end-icon{margin-inline-start:var(--_ui5-v2-8-0_button_base_icon_margin)}:host([icon-only]:not([has-end-icon])) .ui5-button-root{min-width:auto;padding:0}:host([icon-only]) .ui5-button-text{display:none}.ui5-button-text{outline:none;position:relative;white-space:inherit;overflow:inherit;text-overflow:inherit}:host([has-icon]:not(:empty)) .ui5-button-text{margin-inline-start:var(--_ui5-v2-8-0_button_base_icon_margin)}:host([has-end-icon]:not([has-icon]):empty) .ui5-button-end-icon{margin-inline-start:0}:host([disabled]){opacity:var(--sapContent_DisabledOpacity);pointer-events:unset;cursor:default}:host([has-icon]:not([icon-only]):not([has-end-icon])) .ui5-button-text{min-width:calc(var(--_ui5-v2-8-0_button_base_min_width) - var(--_ui5-v2-8-0_button_base_icon_margin) - 1rem)}:host([disabled]:active){pointer-events:none}:host([desktop]:not([active])) .ui5-button-root:focus-within:after,:host(:not([active])) .ui5-button-root:focus-visible:after,:host([desktop][active][design="Emphasized"]) .ui5-button-root:focus-within:after,:host([active][design="Emphasized"]) .ui5-button-root:focus-visible:after,:host([desktop][active]) .ui5-button-root:focus-within:before,:host([active]) .ui5-button-root:focus-visible:before{content:"";position:absolute;box-sizing:border-box;inset:.0625rem;border:var(--_ui5-v2-8-0_button_focused_border);border-radius:var(--_ui5-v2-8-0_button_focused_border_radius)}:host([desktop][active]) .ui5-button-root:focus-within:before,:host([active]) .ui5-button-root:focus-visible:before{border-color:var(--_ui5-v2-8-0_button_pressed_focused_border_color)}:host([design="Emphasized"][desktop]) .ui5-button-root:focus-within:after,:host([design="Emphasized"]) .ui5-button-root:focus-visible:after{border-color:var(--_ui5-v2-8-0_button_emphasized_focused_border_color)}:host([design="Emphasized"][desktop]) .ui5-button-root:focus-within:before,:host([design="Emphasized"]) .ui5-button-root:focus-visible:before{content:"";position:absolute;box-sizing:border-box;inset:.0625rem;border:var(--_ui5-v2-8-0_button_emphasized_focused_border_before);border-radius:var(--_ui5-v2-8-0_button_focused_border_radius)}.ui5-button-root::-moz-focus-inner{border:0}bdi{display:block;white-space:inherit;overflow:inherit;text-overflow:inherit}:host([ui5-button][active]:not([disabled]):not([non-interactive])){background-image:none;background-color:var(--sapButton_Active_Background);border-color:var(--sapButton_Active_BorderColor);color:var(--sapButton_Active_TextColor)}:host([design="Positive"]){background-color:var(--sapButton_Accept_Background);border-color:var(--sapButton_Accept_BorderColor);color:var(--sapButton_Accept_TextColor)}:host([design="Positive"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),:host([design="Positive"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered){background-color:var(--sapButton_Accept_Hover_Background);border-color:var(--sapButton_Accept_Hover_BorderColor);color:var(--sapButton_Accept_Hover_TextColor)}:host([ui5-button][design="Positive"][active]:not([non-interactive])){background-color:var(--sapButton_Accept_Active_Background);border-color:var(--sapButton_Accept_Active_BorderColor);color:var(--sapButton_Accept_Active_TextColor)}:host([design="Negative"]){background-color:var(--sapButton_Reject_Background);border-color:var(--sapButton_Reject_BorderColor);color:var(--sapButton_Reject_TextColor)}:host([design="Negative"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),:host([design="Negative"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered){background-color:var(--sapButton_Reject_Hover_Background);border-color:var(--sapButton_Reject_Hover_BorderColor);color:var(--sapButton_Reject_Hover_TextColor)}:host([ui5-button][design="Negative"][active]:not([non-interactive])){background-color:var(--sapButton_Reject_Active_Background);border-color:var(--sapButton_Reject_Active_BorderColor);color:var(--sapButton_Reject_Active_TextColor)}:host([design="Attention"]){background-color:var(--sapButton_Attention_Background);border-color:var(--sapButton_Attention_BorderColor);color:var(--sapButton_Attention_TextColor)}:host([design="Attention"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),:host([design="Attention"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered){background-color:var(--sapButton_Attention_Hover_Background);border-color:var(--sapButton_Attention_Hover_BorderColor);color:var(--sapButton_Attention_Hover_TextColor)}:host([ui5-button][design="Attention"][active]:not([non-interactive])){background-color:var(--sapButton_Attention_Active_Background);border-color:var(--sapButton_Attention_Active_BorderColor);color:var(--sapButton_Attention_Active_TextColor)}:host([design="Emphasized"]){background-color:var(--sapButton_Emphasized_Background);border-color:var(--sapButton_Emphasized_BorderColor);border-width:var(--_ui5-v2-8-0_button_emphasized_border_width);color:var(--sapButton_Emphasized_TextColor);font-family:var(--sapFontBoldFamily )}:host([design="Emphasized"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),:host([design="Emphasized"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered){background-color:var(--sapButton_Emphasized_Hover_Background);border-color:var(--sapButton_Emphasized_Hover_BorderColor);border-width:var(--_ui5-v2-8-0_button_emphasized_border_width);color:var(--sapButton_Emphasized_Hover_TextColor)}:host([ui5-button][design="Empasized"][active]:not([non-interactive])){background-color:var(--sapButton_Emphasized_Active_Background);border-color:var(--sapButton_Emphasized_Active_BorderColor);color:var(--sapButton_Emphasized_Active_TextColor)}:host([design="Emphasized"][desktop]) .ui5-button-root:focus-within:after,:host([design="Emphasized"]) .ui5-button-root:focus-visible:after{border-color:var(--_ui5-v2-8-0_button_emphasized_focused_border_color);outline:none}:host([design="Emphasized"][desktop][active]:not([non-interactive])) .ui5-button-root:focus-within:after,:host([design="Emphasized"][active]:not([non-interactive])) .ui5-button-root:focus-visible:after{border-color:var(--_ui5-v2-8-0_button_emphasized_focused_active_border_color)}:host([design="Transparent"]){background-color:var(--sapButton_Lite_Background);color:var(--sapButton_Lite_TextColor);border-color:var(--sapButton_Lite_BorderColor)}:host([design="Transparent"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),:host([design="Transparent"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered){background-color:var(--sapButton_Lite_Hover_Background);border-color:var(--sapButton_Lite_Hover_BorderColor);color:var(--sapButton_Lite_Hover_TextColor)}:host([ui5-button][design="Transparent"][active]:not([non-interactive])){background-color:var(--sapButton_Lite_Active_Background);border-color:var(--sapButton_Lite_Active_BorderColor);color:var(--sapButton_Active_TextColor)}:host([ui5-segmented-button-item][active][desktop]) .ui5-button-root:focus-within:after,:host([ui5-segmented-button-item][active]) .ui5-button-root:focus-visible:after,:host([pressed][desktop]) .ui5-button-root:focus-within:after,:host([pressed]) .ui5-button-root:focus-visible:after{border-color:var(--_ui5-v2-8-0_button_pressed_focused_border_color);outline:none}:host([ui5-segmented-button-item][desktop]:not(:last-child)) .ui5-button-root:focus-within:after,:host([ui5-segmented-button-item]:not(:last-child)) .ui5-button-root:focus-visible:after{border-top-right-radius:var(--_ui5-v2-8-0_button_focused_inner_border_radius);border-bottom-right-radius:var(--_ui5-v2-8-0_button_focused_inner_border_radius)}:host([ui5-segmented-button-item][desktop]:not(:first-child)) .ui5-button-root:focus-within:after,:host([ui5-segmented-button-item]:not(:first-child)) .ui5-button-root:focus-visible:after{border-top-left-radius:var(--_ui5-v2-8-0_button_focused_inner_border_radius);border-bottom-left-radius:var(--_ui5-v2-8-0_button_focused_inner_border_radius)}::slotted([slot="badge"][design="InlineText"]){pointer-events:initial;font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSmallSize);padding-inline-start:.25rem;--_ui5-v2-8-0-tag-height: .625rem}::slotted([slot="badge"][design="OverlayText"]){pointer-events:initial;position:absolute;top:0;inset-inline-end:0;margin:-.5rem;z-index:1000;font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSmallSize);--_ui5-v2-8-0-tag-height: .625rem}::slotted([slot="badge"][design="AttentionDot"]){pointer-events:initial;content:"";position:absolute;top:0;inset-inline-end:0;margin:-.25rem;z-index:1000}:host(:state(has-overlay-badge)){overflow:visible;margin-right:5px}
`;var i=function(t,o,r,u){var l=arguments.length,a=l<3?o:u===null?u=Object.getOwnPropertyDescriptor(o,r):u,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,o,r,u);else for(var b=t.length-1;b>=0;b--)(h=t[b])&&(a=(l<3?h(a):l>3?h(o,r,a):h(o,r))||a);return l>3&&a&&Object.defineProperty(o,r,a),a},v;let x=!1,d=null,e=v=class extends I{constructor(){super(),this.design="Default",this.disabled=!1,this.submits=!1,this.accessibilityAttributes={},this.type="Button",this.accessibleRole="Button",this.active=!1,this.iconOnly=!1,this.hasIcon=!1,this.hasEndIcon=!1,this.nonInteractive=!1,this._iconSettings={},this.forcedTabIndex="0",this._isTouch=!1,this._cancelAction=!1,this._deactivate=()=>{d&&d._setActiveState(!1)},x||(document.addEventListener("mouseup",this._deactivate),x=!0)}_ontouchstart(){this.nonInteractive||this._setActiveState(!0)}onEnterDOM(){R()&&this.setAttribute("desktop","")}async onBeforeRendering(){this._setBadgeOverlayStyle(),this.hasIcon=!!this.icon,this.hasEndIcon=!!this.endIcon,this.iconOnly=this.isIconOnly,this.buttonTitle=this.tooltip||await this.getDefaultTooltip()}_setBadgeOverlayStyle(){this.badge.length&&(this.badge[0].design===c.AttentionDot||this.badge[0].design===c.OverlayText)?this._internals.states.add("has-overlay-badge"):this._internals.states.delete("has-overlay-badge")}_onclick(){var o;this.nonInteractive||(this._isSubmit&&O(this),this._isReset&&D(this),S()&&((o=this.getDomRef())==null||o.focus()))}_onmousedown(){this.nonInteractive||(this._setActiveState(!0),d=this)}_ontouchend(o){this.disabled&&(o.preventDefault(),o.stopPropagation()),this.active&&this._setActiveState(!1),d&&d._setActiveState(!1)}_onkeydown(o){this._cancelAction=F(o)||L(o),f(o)||g(o)?this._setActiveState(!0):this._cancelAction&&this._setActiveState(!1)}_onkeyup(o){this._cancelAction&&o.preventDefault(),(f(o)||g(o))&&this.active&&this._setActiveState(!1)}_onfocusout(){this.nonInteractive||this.active&&this._setActiveState(!1)}_setActiveState(o){this.fireDecoratorEvent("active-state-change")&&(this.active=o)}get _hasPopup(){return this.accessibilityAttributes.hasPopup}get hasButtonType(){return this.design!==_.Default&&this.design!==_.Transparent}get isIconOnly(){return!V(this.text)}static typeTextMappings(){return{Positive:q,Negative:K,Emphasized:Y}}getDefaultTooltip(){if(B())return M(this.icon)}get buttonTypeText(){return v.i18nBundle.getText(v.typeTextMappings()[this.design])}get effectiveAccRole(){return U(this.accessibleRole)}get tabIndexValue(){if(this.disabled)return;const o=this.getAttribute("tabindex");return o?Number.parseInt(o):this.nonInteractive?-1:Number.parseInt(this.forcedTabIndex)}get showIconTooltip(){return B()&&this.iconOnly&&!this.tooltip}get ariaLabelText(){return $(this)}get ariaDescribedbyText(){return this.hasButtonType?"ui5-button-hiddenText-type":void 0}get ariaDescriptionText(){return this.accessibleDescription===""?void 0:this.accessibleDescription}get _isSubmit(){return this.type===y.Submit||this.submits}get _isReset(){return this.type===y.Reset}get shouldRenderBadge(){return!!this.badge.length&&(!!this.badge[0].text.length||this.badge[0].design===c.AttentionDot)}};i([n()],e.prototype,"design",void 0);i([n({type:Boolean})],e.prototype,"disabled",void 0);i([n()],e.prototype,"icon",void 0);i([n()],e.prototype,"endIcon",void 0);i([n({type:Boolean})],e.prototype,"submits",void 0);i([n()],e.prototype,"tooltip",void 0);i([n()],e.prototype,"accessibleName",void 0);i([n()],e.prototype,"accessibleNameRef",void 0);i([n({type:Object})],e.prototype,"accessibilityAttributes",void 0);i([n()],e.prototype,"accessibleDescription",void 0);i([n()],e.prototype,"type",void 0);i([n()],e.prototype,"accessibleRole",void 0);i([n({type:Boolean})],e.prototype,"active",void 0);i([n({type:Boolean})],e.prototype,"iconOnly",void 0);i([n({type:Boolean})],e.prototype,"hasIcon",void 0);i([n({type:Boolean})],e.prototype,"hasEndIcon",void 0);i([n({type:Boolean})],e.prototype,"nonInteractive",void 0);i([n({noAttribute:!0})],e.prototype,"buttonTitle",void 0);i([n({type:Object})],e.prototype,"_iconSettings",void 0);i([n({noAttribute:!0})],e.prototype,"forcedTabIndex",void 0);i([n({type:Boolean})],e.prototype,"_isTouch",void 0);i([n({type:Boolean,noAttribute:!0})],e.prototype,"_cancelAction",void 0);i([T({type:Node,default:!0})],e.prototype,"text",void 0);i([T({type:HTMLElement,invalidateOnChildChange:!0})],e.prototype,"badge",void 0);i([N("@ui5/webcomponents")],e,"i18nBundle",void 0);e=v=i([C({tag:"ui5-button",formAssociated:!0,languageAware:!0,renderer:E,template:J,styles:W,shadowRootOptions:{delegatesFocus:!0}}),H("active-state-change",{bubbles:!0,cancelable:!0})],e);e.define();const ut=e;export{_ as B,ut as a,J as b,c};
