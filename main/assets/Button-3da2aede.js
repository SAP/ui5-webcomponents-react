import{r as k,U as C,l as E}from"./UI5Element-11982a12.js";import{b as v,l as a,d as B,s as z,a as $,p as r,c as I,f as R}from"./withWebComponent-03662f7f.js";import{e as S,a as N}from"./Icon-3498e12d.js";import{s as H}from"./slot-76e48863.js";import{K as O,k as y,l as x}from"./Icons-234bf59e.js";import{g as P}from"./AriaLabelHelper-43a261ec.js";import{g as T}from"./CustomElementsScopeUtils-137da8c8.js";import{m as c}from"./MarkedEvents-b83081e9.js";import{i as j,d as F,e as D,a as L,b as w}from"./Device-6afa24d0.js";import{$ as U,a0 as V,a1 as M}from"./i18n-defaults-1a83921e.js";var m;(function(n){n.Default="Default",n.Positive="Positive",n.Negative="Negative",n.Transparent="Transparent",n.Emphasized="Emphasized",n.Attention="Attention"})(m||(m={}));const b=m;var g;(function(n){n.Button="Button",n.Submit="Submit",n.Reset="Reset"})(g||(g={}));const _=g,Y=n=>Array.from(n).filter(t=>t.nodeType!==Node.COMMENT_NODE&&(t.nodeType!==Node.TEXT_NODE||(t.nodeValue||"").trim().length!==0)).length>0;function G(n,t,i){return v`<button type="button" class="ui5-button-root" ?disabled="${this.disabled}" data-sap-focus-ref  @focusout=${this._onfocusout} @focusin=${this._onfocusin} @click=${this._onclick} @mousedown=${this._onmousedown} @mouseup=${this._onmouseup} @keydown=${this._onkeydown} @keyup=${this._onkeyup} @touchstart="${this._ontouchstart}" @touchend="${this._ontouchend}" tabindex=${a(this.tabIndexValue)} aria-expanded="${a(this.accessibilityAttributes.expanded)}" aria-controls="${a(this.accessibilityAttributes.controls)}" aria-haspopup="${a(this.accessibilityAttributes.hasPopup)}" aria-label="${a(this.ariaLabelText)}" title="${a(this.buttonTitle)}" part="button">${this.icon?J.call(this,n,t,i):void 0}<span id="${a(this._id)}-content" class="ui5-button-text"><bdi><slot></slot></bdi></span>${this.hasButtonType?K.call(this,n,t,i):void 0}</button> `}function J(n,t,i){return i?v`<${B("ui5-icon",t,i)} class="ui5-button-icon" name="${a(this.icon)}" accessible-role="${a(this.iconRole)}" part="icon" ?show-tooltip=${this.showIconTooltip}></${B("ui5-icon",t,i)}>`:v`<ui5-icon class="ui5-button-icon" name="${a(this.icon)}" accessible-role="${a(this.iconRole)}" part="icon" ?show-tooltip=${this.showIconTooltip}></ui5-icon>`}function K(n,t,i){return v`<span class="ui5-hidden-text">${a(this.buttonTypeText)}</span>`}k("@ui5/webcomponents-theming","sap_fiori_3",async()=>z);k("@ui5/webcomponents","sap_fiori_3",async()=>$);const W={packageName:"@ui5/webcomponents",fileName:"themes/Button.css",content:`:host {
	vertical-align: middle;
}
.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}
:host(:not([hidden])) {
	display: inline-block;
}
:host {
	min-width: var(--_ui5_button_base_min_width);
	height: var(--_ui5_button_base_height);
	line-height: normal;
	font-family: var(--_ui5_button_fontFamily);
	font-size: var(--sapFontSize);
	text-shadow: var(--_ui5_button_text_shadow);
	border-radius: var(--_ui5_button_border_radius);
	cursor: pointer;
	background-color: var(--sapButton_Background);
	border: var(--sapButton_BorderWidth) solid var(--sapButton_BorderColor);
	color: var(--sapButton_TextColor);
	box-sizing: border-box;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.ui5-button-root {
	min-width: inherit;
	cursor: inherit;
	height: 100%;
	width: 100%;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	outline: none;
	padding: 0 var(--_ui5_button_base_padding);
	position: relative;
	background: transparent;
	border: none;
	color: inherit;
	text-shadow: inherit;
	font: inherit;
	white-space: inherit;
	overflow: inherit;
	text-overflow: inherit;
	letter-spacing: inherit;
	word-spacing: inherit;
	line-height: inherit;
	-webkit-user-select: none;
	-moz-user-select: none;
	user-select: none;
}
:host(:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),
:host(:not([hidden]):not([disabled]).ui5_hovered) {
	background: var(--sapButton_Hover_Background);
	box-shadow: var(--sapContent_Interaction_Shadow);
	border: 1px solid var(--sapButton_Hover_BorderColor);
	color: var(--sapButton_Hover_TextColor);
}
.ui5-button-icon {
	color: inherit;
	flex-shrink: 0;
}
:host([icon-end]) .ui5-button-root {
	flex-direction: row-reverse;
}
:host([icon-end]) .ui5-button-icon {
	margin-inline-start: var(--_ui5_button_base_icon_margin);
}
:host([icon-only]) .ui5-button-root {
	min-width: auto;
	padding: 0;
}
:host([icon-only]) .ui5-button-text {
	display: none;
}
.ui5-button-text {
	outline: none;
	position: relative;
	white-space: inherit;
	overflow: inherit;
	text-overflow: inherit;
}
:host([has-icon]:not([icon-end])) .ui5-button-text {
	margin-inline-start: var(--_ui5_button_base_icon_margin);
}
:host([has-icon][icon-end]) .ui5-button-text {
	margin-inline-start: 0;
}
:host([disabled]) {
	opacity: var(--sapContent_DisabledOpacity);
	pointer-events: unset;
	cursor: default;
}
:host([has-icon]:not([icon-only])) .ui5-button-text{
	/* calculating the minimum width by removing the icon size  */
	min-width: calc(var(--_ui5_button_base_min_width) - var(--_ui5_button_base_icon_margin) - 1rem);
}
:host([disabled]:active) {
	pointer-events: none;
}
:host([focused]) .ui5-button-root:after {
	content: "";
	position: absolute;
	box-sizing: border-box;
	left: 0.0625rem;
	top: 0.0625rem;
	right: 0.0625rem;
	bottom: 0.0625rem;
	border: var(--_ui5_button_focused_border);
	border-radius: var(--_ui5_button_focused_border_radius);
}
:host([design="Emphasized"][focused]) .ui5-button-root:after {
	border-color: var(--_ui5_button_emphasized_focused_border_color);
}
:host([design="Emphasized"][focused]) .ui5-button-root:before {
	content: "";
	position: absolute;
	box-sizing: border-box;
	left: 0.0625rem;
	top: 0.0625rem;
	right: 0.0625rem;
	bottom: 0.0625rem;
	border: var(--_ui5_button_emphasized_focused_border_before);
	border-radius: var(--_ui5_button_focused_border_radius);
}
.ui5-button-root::-moz-focus-inner {
	border: 0;
}
bdi {
	display: block;
	white-space: inherit;
	overflow: inherit;
	text-overflow: inherit;
}
:host([ui5-button][active]:not([disabled]):not([non-interactive])) {
	background-image: none;
	background-color: var(--sapButton_Active_Background);
	border-color: var(--sapButton_Active_BorderColor);
	color: var(--sapButton_Active_TextColor);
}
:host([design="Positive"]) {
	background-color: var(--sapButton_Accept_Background);
	border-color: var(--sapButton_Accept_BorderColor);
	color: var(--sapButton_Accept_TextColor);
}
/*The ui5_hovered class is set by FileUploader to indicate hover state of the control*/
:host([design="Positive"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),
:host([design="Positive"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered) {
	background-color: var(--sapButton_Accept_Hover_Background);
	border-color: var(--sapButton_Accept_Hover_BorderColor);
	box-shadow: var(--sapContent_Positive_Shadow);
	color: var(--sapButton_Accept_Hover_TextColor);
}
:host([ui5-button][design="Positive"][active]:not([non-interactive])) {
	background-color: var(--sapButton_Accept_Active_Background);
	border-color: var(--sapButton_Accept_Active_BorderColor);
	color: var(--sapButton_Accept_Active_TextColor);
}
:host([design="Negative"]) {
	background-color: var(--sapButton_Reject_Background);
	border-color: var(--sapButton_Reject_BorderColor);
	color: var(--sapButton_Reject_TextColor);
}
/*The ui5_hovered class is set by FileUploader to indicate hover state of the control*/
:host([design="Negative"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),
:host([design="Negative"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered) {
	background-color: var(--sapButton_Reject_Hover_Background);
	border-color: var(--sapButton_Reject_Hover_BorderColor);
	box-shadow: var(--sapContent_Negative_Shadow);
	color: var(--sapButton_Reject_Hover_TextColor);
}
:host([ui5-button][design="Negative"][active]:not([non-interactive])) {
	background-color: var(--sapButton_Reject_Active_Background);
	border-color: var(--sapButton_Reject_Active_BorderColor);
	color: var(--sapButton_Reject_Active_TextColor);
}
:host([design="Attention"]) {
	background-color: var(--sapButton_Attention_Background);
	border-color: var(--sapButton_Attention_BorderColor);
	color: var(--sapButton_Attention_TextColor);
}
/*The ui5_hovered class is set by FileUploader to indicate hover state of the control*/
:host([design="Attention"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),
:host([design="Attention"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered) {
	background-color: var(--sapButton_Attention_Hover_Background);
	border-color: var(--sapButton_Attention_Hover_BorderColor);
	color: var(--sapButton_Attention_Hover_TextColor);
	box-shadow: var(--sapContent_Critical_Shadow)
}
:host([ui5-button][design="Attention"][active]:not([non-interactive])) {
	background-color: var(--sapButton_Attention_Active_Background);
	border-color: var(--sapButton_Attention_Active_BorderColor);
	color: var(--sapButton_Attention_Active_TextColor);
}
:host([design="Emphasized"]) {
	background-color: var(--sapButton_Emphasized_Background);
	border-color: var(--sapButton_Emphasized_BorderColor);
	border-width: var(--_ui5_button_emphasized_border_width);
	color: var(--sapButton_Emphasized_TextColor);
	font-weight: var(--_ui5_button_emphasized_font_weight);
}
/*The ui5_hovered class is set by FileUploader to indicate hover state of the control*/
:host([design="Emphasized"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),
:host([design="Emphasized"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered) {
	background-color: var(--sapButton_Emphasized_Hover_Background);
	border-color: var(--sapButton_Emphasized_Hover_BorderColor);
	border-width: var(--_ui5_button_emphasized_border_width);
	color: var(--sapButton_Emphasized_Hover_TextColor);
	box-shadow: none;
}
:host([ui5-button][design="Empasized"][active]:not([non-interactive])) {
	background-color: var(--sapButton_Emphasized_Active_Background);
	border-color: var(--sapButton_Emphasized_Active_BorderColor);
	color: var(--sapButton_Emphasized_Active_TextColor);
}
:host([design="Emphasized"][focused]) .ui5-button-root:after {
	border-color: var(--sapContent_ContrastFocusColor);
	outline: none;
}
:host([design="Transparent"]) {
	background-color: var(--sapButton_Lite_Background);
	color: var(--sapButton_Lite_TextColor);
	border-color: var(--sapButton_Lite_BorderColor);
}
/*The ui5_hovered class is set by FileUploader to indicate hover state of the control*/
:host([design="Transparent"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]):hover),
:host([design="Transparent"]:not([active]):not([non-interactive]):not([_is-touch]):not([disabled]).ui5_hovered) {
	background-color: var(--sapButton_Lite_Hover_Background);
	border-color: var(--sapButton_Lite_Hover_BorderColor);
	box-shadow: var(--sapContent_Interaction_Shadow);
	color: var(--sapButton_Lite_Hover_TextColor);
}
:host([ui5-button][design="Transparent"][active]:not([non-interactive])) {
	background-color: var(--sapButton_Lite_Active_Background);
	border-color: var(--sapButton_Lite_Active_BorderColor);
	color: var(--sapButton_Active_TextColor);
}
/* SegmentedButton and ToggleButton */
:host([ui5-segmented-button-item][active][focused]) .ui5-button-root:after,
:host([pressed][focused]) .ui5-button-root:after {
	border-color: var(--_ui5_button_pressed_focused_border_color);
	outline: none;
}
:host([ui5-segmented-button-item][focused]:not(:last-child)) .ui5-button-root:after {
	border-top-right-radius: var(--_ui5_button_focused_inner_border_radius);
	border-bottom-right-radius: var(--_ui5_button_focused_inner_border_radius);
}
:host([ui5-segmented-button-item][focused]:not(:first-child)) .ui5-button-root:after {
	border-top-left-radius: var(--_ui5_button_focused_inner_border_radius);
	border-bottom-left-radius: var(--_ui5_button_focused_inner_border_radius);
}
`};var e=globalThis&&globalThis.__decorate||function(n,t,i,u){var p=arguments.length,s=p<3?t:u===null?u=Object.getOwnPropertyDescriptor(t,i):u,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,t,i,u);else for(var f=n.length-1;f>=0;f--)(h=n[f])&&(s=(p<3?h(s):p>3?h(t,i,s):h(t,i))||s);return p>3&&s&&Object.defineProperty(t,i,s),s},l;let A=!1,d=null,o=l=class extends C{constructor(){super(),this._deactivate=()=>{d&&(d.active=!1)},A||(document.addEventListener("mouseup",this._deactivate),A=!0);const t=i=>{c(i,"button"),!this.nonInteractive&&(this.active=!0)};this._ontouchstart={handleEvent:t,passive:!0}}onEnterDOM(){this._isTouch=(j()||F())&&!D()}async onBeforeRendering(){const t=T("FormSupport");this.type!==_.Button&&!t&&console.warn('In order for the "type" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";'),this.submits&&!t&&console.warn('In order for the "submits" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";'),this.iconOnly=this.isIconOnly,this.hasIcon=!!this.icon,this.buttonTitle=this.tooltip||await O(this.icon)}_onclick(t){var u;if(this.nonInteractive)return;c(t,"button");const i=T("FormSupport");i&&this._isSubmit&&i.triggerFormSubmit(this),i&&this._isReset&&i.triggerFormReset(this),L()&&((u=this.getDomRef())==null||u.focus())}_onmousedown(t){this.nonInteractive||this._isTouch||(c(t,"button"),this.active=!0,d=this)}_ontouchend(t){this.disabled&&(t.preventDefault(),t.stopPropagation()),this.active=!1,d&&(d.active=!1)}_onmouseup(t){c(t,"button")}_onkeydown(t){c(t,"button"),(y(t)||x(t))&&(this.active=!0)}_onkeyup(t){(y(t)||x(t))&&(this.active=!1)}_onfocusout(){this.nonInteractive||(this.active=!1,w()&&(this.focused=!1))}_onfocusin(t){this.nonInteractive||(c(t,"button"),w()&&(this.focused=!0))}get hasButtonType(){return this.design!==b.Default&&this.design!==b.Transparent}get iconRole(){return this.icon?"presentation":""}get isIconOnly(){return!Y(this.text)}static typeTextMappings(){return{Positive:U,Negative:V,Emphasized:M}}get buttonTypeText(){return l.i18nBundle.getText(l.typeTextMappings()[this.design])}get tabIndexValue(){const t=this.getAttribute("tabindex");return t||(this.nonInteractive?"-1":this._tabIndex)}get showIconTooltip(){return this.iconOnly&&!this.tooltip}get ariaLabelText(){return P(this)}get _isSubmit(){return this.type===_.Submit||this.submits}get _isReset(){return this.type===_.Reset}static async onDefine(){l.i18nBundle=await E("@ui5/webcomponents")}};e([r({type:b,defaultValue:b.Default})],o.prototype,"design",void 0);e([r({type:Boolean})],o.prototype,"disabled",void 0);e([r()],o.prototype,"icon",void 0);e([r({type:Boolean})],o.prototype,"iconEnd",void 0);e([r({type:Boolean})],o.prototype,"submits",void 0);e([r()],o.prototype,"tooltip",void 0);e([r({defaultValue:void 0})],o.prototype,"accessibleName",void 0);e([r({defaultValue:""})],o.prototype,"accessibleNameRef",void 0);e([r({type:Object})],o.prototype,"accessibilityAttributes",void 0);e([r({type:_,defaultValue:_.Button})],o.prototype,"type",void 0);e([r({type:Boolean})],o.prototype,"active",void 0);e([r({type:Boolean})],o.prototype,"iconOnly",void 0);e([r({type:Boolean})],o.prototype,"focused",void 0);e([r({type:Boolean})],o.prototype,"hasIcon",void 0);e([r({type:Boolean})],o.prototype,"nonInteractive",void 0);e([r({noAttribute:!0})],o.prototype,"buttonTitle",void 0);e([r({type:Object})],o.prototype,"_iconSettings",void 0);e([r({defaultValue:"0",noAttribute:!0})],o.prototype,"_tabIndex",void 0);e([r({type:Boolean})],o.prototype,"_isTouch",void 0);e([H({type:Node,default:!0})],o.prototype,"text",void 0);o=l=e([I({tag:"ui5-button",languageAware:!0,renderer:R,template:G,styles:W,dependencies:[N]}),S("click")],o);o.define();const X=o,ut=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"}));export{b as B,_ as a,X as b,ut as c,Y as w};
//# sourceMappingURL=Button-3da2aede.js.map
