import{_ as k}from"./iframe-8e2d93d4.js";import{a as I,U as V,d as x}from"./UI5Element-2e105c8a.js";import{e as l,l as n,s as p,a as T,b as C,p as a,c as F,d as N,w as D}from"./withWebComponent-7b9bd1ee.js";import{s as S}from"./slot-76e48863.js";import{I as E,e as B}from"./Icon-1927e688.js";import{b as O,o as q,p as A,d as P,V as W,W as R,X as M,Y as U,J as L,I as H,v as j,w as z}from"./Icons-fe8ad928.js";import{V as f}from"./ValueState-2c5e5904.js";import{g as J}from"./AriaLabelHelper-43a261ec.js";import{g as X}from"./CustomElementsScopeUtils-137da8c8.js";import{F as d}from"./Float-99d99064.js";import{I as $}from"./Integer-f7f172c9.js";import{ad as Y,ae as G}from"./i18n-defaults-2f9956dc.js";import"./less-a26d8070.js";import"./add-0c2def80.js";import{a as K,I as Q}from"./Input-e10c5626.js";import{V as Z}from"./ValueState-ab6838cc.js";function ee(s,e,t){return t?l`<div id="${n(this._id)}" class="ui5-step-input-root" @keydown="${this._onkeydown}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}">${this.readonly?void 0:b.call(this,s,e,t)}<${p("ui5-input",e,t)} id="${n(this._id)}-inner" class="ui5-step-input-input" placeholder="${n(this.placeholder)}" type="${n(this.type)}" value="${n(this._valuePrecisioned)}" ?disabled="${this.disabled}" ?required="${this.required}" ?readonly="${this.readonly}" value-state="${n(this.valueState)}" data-sap-focus-ref ._inputAccInfo ="${n(this.accInfo)}" ._nativeInputAttributes="${n(this.inputAttributes)}" @ui5-change="${n(this._onInputChange)}" @focusout="${this._onInputFocusOut}" @focusin="${this._onInputFocusIn}">${this.valueStateMessage.length?y.call(this,s,e,t):void 0}</${p("ui5-input",e,t)}>${this.readonly?void 0:g.call(this,s,e,t)}<slot name="formSupport"></slot></div>`:l`<div id="${n(this._id)}" class="ui5-step-input-root" @keydown="${this._onkeydown}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}">${this.readonly?void 0:b.call(this,s,e,t)}<ui5-input id="${n(this._id)}-inner" class="ui5-step-input-input" placeholder="${n(this.placeholder)}" type="${n(this.type)}" value="${n(this._valuePrecisioned)}" ?disabled="${this.disabled}" ?required="${this.required}" ?readonly="${this.readonly}" value-state="${n(this.valueState)}" data-sap-focus-ref ._inputAccInfo ="${n(this.accInfo)}" ._nativeInputAttributes="${n(this.inputAttributes)}" @ui5-change="${n(this._onInputChange)}" @focusout="${this._onInputFocusOut}" @focusin="${this._onInputFocusIn}">${this.valueStateMessage.length?y.call(this,s,e,t):void 0}</ui5-input>${this.readonly?void 0:g.call(this,s,e,t)}<slot name="formSupport"></slot></div>`}function b(s,e,t){return t?l`<div class="ui5-step-icon ui5-step-dec" title="${n(this.decIconTitle)}"><${p("ui5-icon",e,t)} id="${n(this._id)}-dec" name="${n(this.decIconName)}" tabindex="-1" accessible-name="${n(this.decIconTitle)}" @click="${this._decValue}" @focusout="${this._onButtonFocusOut}" @mousedown="${this._decSpin}" @mouseup="${this._resetSpin}" @mouseout="${this._resetSpinOut}" input-icon show-tooltip ?clickable="${this._decIconClickable}"></${p("ui5-icon",e,t)}></div>`:l`<div class="ui5-step-icon ui5-step-dec" title="${n(this.decIconTitle)}"><ui5-icon id="${n(this._id)}-dec" name="${n(this.decIconName)}" tabindex="-1" accessible-name="${n(this.decIconTitle)}" @click="${this._decValue}" @focusout="${this._onButtonFocusOut}" @mousedown="${this._decSpin}" @mouseup="${this._resetSpin}" @mouseout="${this._resetSpinOut}" input-icon show-tooltip ?clickable="${this._decIconClickable}"></ui5-icon></div>`}function y(s,e,t){return l`<slot name="valueStateMessage" slot="valueStateMessage"></slot>`}function g(s,e,t){return t?l`<div class="ui5-step-icon ui5-step-inc" title="${n(this.incIconTitle)}"><${p("ui5-icon",e,t)} id="${n(this._id)}-inc" name="${n(this.incIconName)}" tabindex="-1" accessible-name="${n(this.incIconTitle)}" @click="${this._incValue}" @focusout="${this._onButtonFocusOut}" @mousedown="${this._incSpin}" @mouseup="${this._resetSpin}" @mouseout="${this._resetSpinOut}" input-icon show-tooltip ?clickable="${this._incIconClickable}"></${p("ui5-icon",e,t)}></div>`:l`<div class="ui5-step-icon ui5-step-inc" title="${n(this.incIconTitle)}"><ui5-icon id="${n(this._id)}-inc" name="${n(this.incIconName)}" tabindex="-1" accessible-name="${n(this.incIconTitle)}" @click="${this._incValue}" @focusout="${this._onButtonFocusOut}" @mousedown="${this._incSpin}" @mouseup="${this._resetSpin}" @mouseout="${this._resetSpinOut}" input-icon show-tooltip ?clickable="${this._incIconClickable}"></ui5-icon></div>`}I("@ui5/webcomponents-theming","sap_fiori_3",async()=>T);I("@ui5/webcomponents","sap_fiori_3",async()=>C);const te={packageName:"@ui5/webcomponents",fileName:"themes/StepInput.css",content:`:host {
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
/*
	This CSS file enables visual alignment of all icons within input elements.
	API:
	- add input-icon attribute to an icon
	- [Optional] pressed attribute set to the icon will enable additional styling (check MultiComboBox, Select, etc.)
*/
[input-icon] {
	color: var(--_ui5_input_icon_color);
	cursor: pointer;
	outline: none;
	padding: var(--_ui5_input_icon_padding);
	border-inline-start: var(--_ui5_input_icon_border);
	min-width: 1rem;
	min-height: 1rem;
	border-radius: var(--_ui5_input_icon_border_radius);
}
[input-icon][pressed] {
	background: var(--_ui5_input_icon_pressed_bg);
	box-shadow: var(--_ui5_input_icon_box_shadow);
	border-inline-start: var(--_ui5_select_hover_icon_left_border);
	color: var(--_ui5_input_icon_pressed_color);
}
[input-icon]:active {
	background-color: var(--sapButton_Active_Background);
	box-shadow: var(--_ui5_input_icon_box_shadow);
	border-inline-start: var(--_ui5_select_hover_icon_left_border);
	color: var(--_ui5_input_icon_pressed_color);
}
[input-icon]:not([pressed]):not(:active):hover {
	background: var(--_ui5_input_icon_hover_bg);
	box-shadow: var(--_ui5_input_icon_box_shadow);
}
[input-icon]:hover {
	border-inline-start: var(--_ui5_select_hover_icon_left_border);
	box-shadow: var(--_ui5_input_icon_box_shadow);
}
:host(:not([hidden])) {
	display: inline-block;
	width: 100%;
	line-height: normal;
	letter-spacing: normal;
	word-spacing: normal;
}
:host {
	--ui5_input_focus_pseudo_element_content: none;
	color: var(--sapField_TextColor);
	background-color: var(--sapField_Background);
	border: var(--_ui5_step_input_border_style);
	border-radius: var(--sapField_BorderCornerRadius);
	box-sizing: border-box;
	height: var(--_ui5_input_height);
	position: relative;
	min-width: var(--_ui5_step_input_min_width);
	text-align: right;
}
:host .ui5-step-input-input {
	text-align: inherit;
}
:host(:not([value-state]):not([readonly]):not([disabled])){
	box-shadow: none;
}
:host([value-state="Success"]:not([readonly]):not([disabled])) {
	background-color: var(--sapField_SuccessBackground);
}
:host([value-state="Error"]:not([readonly]):not([disabled])) {
	background-color: var(--sapField_InvalidBackground);
}
:host([value-state="Information"]:not([readonly]):not([disabled])) {
	background-color: var(--sapField_InformationBackground);
}
:host([value-state="Warning"]:not([readonly]):not([disabled])) {
	background-color: var(--sapField_WarningBackground);
}
:host(:not([value-state]):not([readonly]):not([disabled]):hover),
:host([value-state="None"]:not([readonly]):not([disabled]):hover) {
	background-color: var(--_ui5_step_input_border_color_hover);
	border: var(--_ui5_step_input_border_hover);
}
:host(:not([value-state]):not([readonly]):not([disabled]):not([focused]):hover),
:host([value-state="None"]:not([readonly]):not([disabled]):not([focused]):hover) {
	background-color: var(--sapField_Hover_Background);
	border: var(--_ui5_step_input_border_style_hover);
	box-shadow: var(--sapField_Hover_Shadow);
}
:host([value-state="Success"]:not([readonly]):not([disabled]):not([focused]):hover) {
	box-shadow: var(--sapField_Hover_SuccessShadow);
}
:host([value-state="Information"]:not([readonly]):not([disabled]):not([focused]):hover) {
	box-shadow: var(--sapField_Hover_InformationShadow);
}
:host([value-state="Warning"]:not([readonly]):not([disabled]):not([focused]):hover) {
	box-shadow: var(--sapField_Hover_WarningShadow);
}
:host([value-state="Error"]:not([readonly]):not([disabled]):not([focused]):hover) {
	box-shadow: var(--sapField_Hover_InvalidShadow);
}
:host([value-state="Success"]:not([readonly]):not([disabled]):hover),
:host([value-state="Error"]:not([readonly]):not([disabled]):hover),
:host([value-state="Information"]:not([readonly]):not([disabled]):hover),
:host([value-state="Warning"]:not([readonly]):not([disabled]):hover) {
	background-color: var(--_ui5-step_input_button_state_hover_background_color);
}
:host(:not([value-state]):not([readonly]):not([disabled])[focused]),
:host([value-state="None"]:not([readonly]):not([disabled])[focused]),
:host([value-state="Success"]:not([readonly]):not([disabled])[focused]),
:host([value-state="Error"]:not([readonly]):not([disabled])[focused]),
:host([value-state="Information"]:not([readonly]):not([disabled])[focused]),
:host([value-state="Warning"]:not([readonly]):not([disabled])[focused]){
	background-color: var(--sapField_Focus_Background);
}
:host([value-state="Success"]:not([readonly]):not([disabled]))::after,
:host([value-state="Error"]:not([readonly]):not([disabled]))::after,
:host([value-state="None"]:not([readonly]):not([disabled]))::after,
:host([value-state="Information"]:not([readonly]):not([disabled]))::after,
:host([value-state="Warning"]:not([readonly]):not([disabled]))::after {
	position: absolute;
	content: "";
	top: -1px;
	right: -1px;
	bottom: -1px;
	left: -1px;
	outline: none;
	pointer-events: none;
	border-radius: var(--sapField_BorderCornerRadius);
	border-style: var(--_ui5_input_error_warning_border_style);
	z-index: 3;
	border-width: 0px;
}
:host([value-state="Information"]:not([readonly]):not([disabled]))::after {
	border-color: var(--sapField_InformationColor);
	border-width: var(--_ui5_input_information_border_width);
}
:host([value-state="Warning"]:not([readonly]):not([disabled]))::after {
	border-color: var(--sapField_WarningColor);
	border-width: 2px;
}
:host([value-state="Success"]:not([readonly]):not([disabled]))::after {
	border-color: var(--sapField_SuccessColor);
	border-width: 1px;
}
:host([value-state="Error"]:not([readonly]):not([disabled]))::after {
	border-color: var(--sapField_InvalidColor);
	border-width: var(--_ui5_input_information_border_width);
}
:host([value-state])::after {
	border-width: var(--_ui5_input_state_border_width);
}
:host([value-state="Error"]:not([readonly]):not([disabled])) .ui5-step-input-input {
	background-color: var(--_ui5_input_input_background_color);
}
:host([value-state="Error"]:not([readonly]):not([disabled])) .ui5-step-input-input:hover {
	background-color: var(--_ui5_step_input_input_error_background_color);
}
:host([value-state]:not([value-state="None"]) .ui5-step-input-input[focused]) {
		outline: none;
}
:host .ui5-step-input-input {
	width: 100%;
	color: inherit;
	background-color: inherit;
	border: var(--_ui5_step_input_input_border);
	box-sizing: border-box;
	vertical-align: top;
	margin-top: var(--_ui5_step_input_input_margin_top);
	min-width: var(--_ui5_step_input_min_width);
	padding-inline-start: var(--_ui5_step_input_padding);
	padding-inline-end: var(--_ui5_step_input_padding);
	position: relative;
	outline: none;
	line-height: inherit;
	letter-spacing: inherit;
	word-spacing: inherit;
}
:host .ui5-step-input-input[readonly] {
	padding: 0;
}
:host .ui5-step-input-input:hover,
:host .ui5-step-input-input[focused]{
	box-shadow: none;
}
:host .ui5-step-input-root {
	white-space: nowrap;
	line-height: inherit;
	letter-spacing: inherit;
	word-spacing: inherit;
}
:host .ui5-step-input-input[text-align=left] {
	text-align: left;
}
:host .ui5-step-input-input[text-align=center] {
	text-align: center;
}
:host .ui5-step-input-input[text-align=right] {
	text-align: right;
}
:host .ui5-step-icon {
	position: absolute;
	display: var(--_ui5_step_input_button_display);
	height: 2rem;
	height: 100%;
	background-color: var(--_ui5_step_input_button_background_color);
	z-index: 2;
}
:host .ui5-step-icon[focused] {
	border: none;
	outline: none;
}
:host .ui5-step-icon.ui5-step-dec {
	left: var(--_ui5_step_input_button_left);
}
:host .ui5-step-icon.ui5-step-inc {
	right: var(--_ui5_step_input_button_right);
}
:host .ui5-step-icon *:not([clickable]),
:host .ui5-step-icon *:not([clickable]):active,
:host .ui5-step-icon *:not([clickable]):hover {
	opacity: 0.5;
	background-color: transparent;
	color: var(--sapContent_IconColor);
}
:host .ui5-step-icon :not([clickable]) *:hover,
:host .ui5-step-icon :not([clickable]) *:active {
	background-color: var(--sapField_Background);
	color: var(--sapContent_IconColor);
}
:host .ui5-step-input-input[focused]::after {
	position: absolute;
	content: "";
	border: var(--_ui5_step_input_input_border_focused_after);
	top: var(--_ui5_step_input_input_border_top_bottom_focused_after);
	right: 0px;
	bottom: var(--_ui5_step_input_input_border_top_bottom_focused_after);
	border-radius: var(--_ui5_step_input_input_border_radius_focused_after);
	left: 0px;
	outline: none;
	pointer-events: none;
	z-index: 3;
}
:host .ui5-step-input-input[focused] {
	outline: none;
}
:host([value-state="Information"]:not([readonly]):not([disabled])) .ui5-step-input-input[focused]::after {
	border-color: var(--_ui5_step_input_input_information_border_color_focused_after);
}
:host([value-state="Warning"]:not([readonly]):not([disabled])) .ui5-step-input-input[focused]::after {
	border-color: var(--_ui5_step_input_input_warning_border_color_focused_after);
}
:host([value-state="Success"]:not([readonly]):not([disabled])) .ui5-step-input-input[focused]::after {
	border-color: var(--_ui5_step_input_input_success_border_color_focused_after);
}
:host([value-state="Error"]:not([readonly]):not([disabled])) .ui5-step-input-input[focused]::after {
	border-color: var(--_ui5_step_input_input_error_border_color_focused_after);
}
/* Disable spin buttons in Chrome, Safari, Edge, Opera */
:host .ui5-step-input-input::-webkit-outer-spin-button,
:host .ui5-step-input-input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}
:host([disabled]) {
	opacity: var(--_ui5_input_disabled_opacity);
	cursor: default;
	pointer-events: none;
	background: var(--sapField_ReadOnly_Background);
	border-color: var(--sapField_ReadOnly_BorderColor);
}
:host([disabled]) .ui5-step-icon {
	background-color: var(--_ui5_step_input_disabled_button_background);
}
:host([disabled]) .ui5-step-icon [ui5-icon] {
	color: var(--sapField_ReadOnly_BorderColor);
}
`};var o=globalThis&&globalThis.__decorate||function(s,e,t,r){var h=arguments.length,u=h<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,_;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")u=Reflect.decorate(s,e,t,r);else for(var m=s.length-1;m>=0;m--)(_=s[m])&&(u=(h<3?_(u):h>3?_(e,t,u):_(e,t))||u);return h>3&&u&&Object.defineProperty(e,t,u),u},c;const ne=500,ie=.8,w=50,oe=120;let i=c=class extends V{static async onDefine(){c.i18nBundle=await x("@ui5/webcomponents")}get type(){return Q.Number}get decIconTitle(){return c.i18nBundle.getText(Y)}get decIconName(){return"less"}get incIconTitle(){return c.i18nBundle.getText(G)}get incIconName(){return"add"}get _decIconClickable(){return!this._decIconDisabled&&!this.readonly&&!this.disabled}get _incIconClickable(){return!this._incIconDisabled&&!this.readonly&&!this.disabled}get _isFocused(){return this.focused}get _valuePrecisioned(){return this.value.toFixed(this.valuePrecision)}get accInfo(){return{ariaRequired:this.required,ariaLabel:J(this)}}get inputAttributes(){return{min:this.min===void 0?void 0:this.min,max:this.max===void 0?void 0:this.max,step:this.step}}onBeforeRendering(){this._setButtonState(),this._previousValue===void 0&&(this._previousValue=this.value);const e=X("FormSupport");e?e.syncNativeHiddenInput(this):this.name&&console.warn('In order for the "name" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";')}get input(){return this.shadowRoot.querySelector("[ui5-input]")}get inputOuter(){return this.shadowRoot.querySelector(".ui5-step-input-input")}_onButtonFocusOut(){setTimeout(()=>{this._inputFocused||this.inputOuter.removeAttribute("focused")},0)}_onInputFocusIn(){this._inputFocused=!0,this.value!==this._previousValue&&(this._previousValue=this.value)}_onInputFocusOut(){this._inputFocused=!1,this._onInputChange()}_setButtonState(){this._decIconDisabled=this.min!==void 0&&this.value<=this.min,this._incIconDisabled=this.max!==void 0&&this.value>=this.max}_validate(){this._initialValueState===void 0&&(this._initialValueState=this.valueState),this.valueState=this.min!==void 0&&this.value<this.min||this.max!==void 0&&this.value>this.max?f.Error:this._initialValueState}_preciseValue(e){const t=10**this.valuePrecision;return Math.round(e*t)/t}_fireChangeEvent(){this._previousValue!==this.value&&(this._previousValue=this.value,this.fireEvent("change",{value:this.value}))}_modifyValue(e,t=!1){let r;this.value=this._preciseValue(parseFloat(this.input.value)),r=this.value+e,this.min!==void 0&&r<this.min&&(r=this.min),this.max!==void 0&&r>this.max&&(r=this.max),r=this._preciseValue(r),r!==this.value&&(this.value=r,this._validate(),this._setButtonState(),this.focused=!0,this.inputOuter.setAttribute("focused",""),t?this._fireChangeEvent():this.input.focus())}_incValue(e){this._incIconClickable&&e.isTrusted&&!this.disabled&&!this.readonly&&(this._modifyValue(this.step,!0),this._previousValue=this.value)}_decValue(e){this._decIconClickable&&e.isTrusted&&!this.disabled&&!this.readonly&&(this._modifyValue(-this.step,!0),this._previousValue=this.value)}_onInputChange(){this.input.value===""&&(this.input.value=this.min||0);const e=this._preciseValue(parseFloat(this.input.value));(this.value!==this._previousValue||this.value!==e)&&(this.value=e,this._validate(),this._setButtonState(),this._fireChangeEvent())}_onfocusin(){this.focused=!0}_onfocusout(){this.focused=!1}_onkeydown(e){let t=!0;if(!(this.disabled||this.readonly)){if(O(e)){this._onInputChange();return}q(e)?this._modifyValue(this.step):A(e)?this._modifyValue(-this.step):P(e)?(this.value=this._previousValue,this.input.value=this.value.toFixed(this.valuePrecision)):this.max!==void 0&&(W(e)||R(e))?this._modifyValue(this.max-this.value):this.min!==void 0&&(M(e)||U(e))?this._modifyValue(this.min-this.value):!L(e)&&!H(e)&&!j(e)&&!z(e)&&(t=!1),t&&e.preventDefault()}}_decSpin(){this._decIconDisabled||this._spinValue(!1,!0)}_incSpin(){this._incIconDisabled||this._spinValue(!0,!0)}_calcWaitTimeout(){return this._speed*=ie,this._waitTimeout=this._waitTimeout-this._speed<w?w:this._waitTimeout-this._speed,this._waitTimeout}_spinValue(e,t=!1){t&&(this._waitTimeout=ne,this._speed=oe,this._btnDown=!0),this._spinTimeoutId=setTimeout(()=>{this._btnDown&&(this._spinStarted=!0,this._modifyValue(e?this.step:-this.step),this._setButtonState(),!this._incIconDisabled&&e||!this._decIconDisabled&&!e?this._spinValue(e):(this._resetSpin(),this._fireChangeEvent()))},this._calcWaitTimeout())}_resetSpin(){clearTimeout(this._spinTimeoutId),this._btnDown=!1,this._spinStarted=!1}_resetSpinOut(){this._btnDown&&(this._resetSpin(),this._fireChangeEvent())}};o([a({validator:d,defaultValue:0})],i.prototype,"value",void 0);o([a({validator:d})],i.prototype,"min",void 0);o([a({validator:d})],i.prototype,"max",void 0);o([a({validator:d,defaultValue:1})],i.prototype,"step",void 0);o([a({type:f,defaultValue:f.None})],i.prototype,"valueState",void 0);o([a({type:Boolean})],i.prototype,"required",void 0);o([a({type:Boolean})],i.prototype,"disabled",void 0);o([a({type:Boolean})],i.prototype,"readonly",void 0);o([a({defaultValue:void 0})],i.prototype,"placeholder",void 0);o([a()],i.prototype,"name",void 0);o([a({validator:$,defaultValue:0})],i.prototype,"valuePrecision",void 0);o([a()],i.prototype,"accessibleName",void 0);o([a({defaultValue:""})],i.prototype,"accessibleNameRef",void 0);o([a({type:Boolean,noAttribute:!0})],i.prototype,"_decIconDisabled",void 0);o([a({type:Boolean,noAttribute:!0})],i.prototype,"_incIconDisabled",void 0);o([a({type:Boolean})],i.prototype,"focused",void 0);o([a({type:Boolean,noAttribute:!0})],i.prototype,"_inputFocused",void 0);o([a({validator:d,noAttribute:!0})],i.prototype,"_previousValue",void 0);o([a({validator:d,noAttribute:!0})],i.prototype,"_waitTimeout",void 0);o([a({validator:d,noAttribute:!0})],i.prototype,"_speed",void 0);o([a({type:Boolean,noAttribute:!0})],i.prototype,"_btnDown",void 0);o([a({validator:$,noAttribute:!0})],i.prototype,"_spinTimeoutId",void 0);o([a({type:Boolean,noAttribute:!0})],i.prototype,"_spinStarted",void 0);o([S()],i.prototype,"valueStateMessage",void 0);o([S()],i.prototype,"formSupport",void 0);i=c=o([F({tag:"ui5-step-input",renderer:N,styles:te,template:ee,dependencies:[E,K]}),B("change")],i);i.define();const ae=i,se=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"})),v=D("ui5-step-input",["accessibleName","accessibleNameRef","max","min","name","placeholder","step","value","valuePrecision","valueState"],["disabled","readonly","required"],["valueStateMessage"],["change"],()=>k(()=>Promise.resolve().then(()=>se),void 0,import.meta.url));v.displayName="StepInput";v.defaultProps={step:1,value:0,valuePrecision:0,valueState:Z.None};try{v.displayName="StepInput",v.__docgenInfo={description:`The \`StepInput\` consists of an input field and buttons with icons to increase/decrease the value with the predefined step.

The user can change the value of the component by pressing the increase/decrease buttons, by typing a number directly, by using the keyboard up/down and page up/down, or by using the mouse scroll wheel. Decimal values are supported.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/StepInput" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"StepInput",props:{valueStateMessage:{defaultValue:null,description:"Defines the value state message that will be displayed as pop up under the component.\n\n**Note:** If not specified, a default text (in the respective language) will be displayed.\n**Note:** The `valueStateMessage` would be displayed, when the component is in `Information`, `Warning` or `Error` value state.\n\n__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot=\"valueStateMessage\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).",name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:"Fired when the input operation has finished by pressing Enter or on focusout.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<StepInputDomRef, never>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Determines whether the component is displayed as disabled.",name:"disabled",required:!1,type:{name:"boolean"}},max:{defaultValue:null,description:"Defines a maximum value of the component.",name:"max",required:!1,type:{name:"number"}},min:{defaultValue:null,description:"Defines a minimum value of the component.",name:"min",required:!1,type:{name:"number"}},name:{defaultValue:null,description:'Determines the name with which the component will be submitted in an HTML form.\n\n**Important:** For the `name` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`\n\n**Note:** When set, a native `input` HTML element will be created inside the component so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.',name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:`Defines a short hint, intended to aid the user with data entry when the component has no value.

**Note:** When no placeholder is set, the format pattern is displayed as a placeholder. Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.`,name:"placeholder",required:!1,type:{name:"string"}},readonly:{defaultValue:null,description:"Determines whether the component is displayed as read-only.",name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},step:{defaultValue:{value:"1"},description:"Defines a step of increasing/decreasing the value of the component.",name:"step",required:!1,type:{name:"number"}},value:{defaultValue:{value:"0"},description:"Defines a value of the component.",name:"value",required:!1,type:{name:"number"}},valuePrecision:{defaultValue:{value:"0"},description:"Determines the number of digits after the decimal point of the component.",name:"valuePrecision",required:!1,type:{name:"number"}},valueState:{defaultValue:{value:"ValueState.None"},description:"Defines the value state of the component.\n\nAvailable options are:\n\n*   `None`\n*   `Error`\n*   `Warning`\n*   `Success`\n*   `Information`",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Error"'},{value:'"Information"'},{value:'"Warning"'},{value:'"Success"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{v as S};
//# sourceMappingURL=index-0f1334cf.js.map
