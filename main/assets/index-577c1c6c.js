import{_ as q}from"./iframe-accc13a2.js";import{U as F,r as w,l as H}from"./UI5Element-6dcea8dd.js";import{p as c,c as M,b as r,l as i,d as u,s as W,a as L,f as U,w as j}from"./withWebComponent-7d7e5133.js";import{c as y,a as K,e as x}from"./Icon-b7f7d9e7.js";import{s as I}from"./slot-76e48863.js";import{m as Y,n as G,T as X,k as $,i as Z,f as J,g as Q,l as T,d as ee,e as k}from"./Icons-e937042c.js";import{a as te,I as ne}from"./InvisibleMessage-b8889f2b.js";import{g as oe}from"./CustomElementsScopeUtils-137da8c8.js";import{g as ie}from"./AriaLabelHelper-43a261ec.js";import{V as l}from"./ValueState-2c5e5904.js";import"./slim-arrow-down-fd4d5a7b.js";import"./information-a40f0e71.js";import{i as se}from"./Device-6afa24d0.js";import"./decline-d1fe7fdd.js";import{I as ae}from"./Integer-f7f172c9.js";import{d as re}from"./ListItemBase-c655abbb.js";import{c as le,b as ue,V as de,a as ce,X as pe,Y as _e,Z as he,_ as ve,a3 as fe,as as me,at as be}from"./i18n-defaults-d675a36d.js";import ge from"./Label-c4db564a.js";import ye from"./ResponsivePopover-b745dfe5.js";import{c as Se}from"./Popover-8ece70a3.js";import we from"./StandardListItem-17582cb4.js";import{b as xe}from"./Button-6bb9ed58.js";import{o as b}from"./class-map-0ab40ab9.js";import{s as g}from"./style-map-132a30d8.js";import{s as Ie}from"./ResponsivePopoverCommon.css-32174dbe.js";import{s as $e}from"./ValueStateMessage.css-ee317505.js";import{V as Te}from"./ValueState-ab6838cc.js";var f=globalThis&&globalThis.__decorate||function(o,e,t,n){var s=arguments.length,a=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,e,t,n);else for(var m=o.length-1;m>=0;m--)(h=o[m])&&(a=(s<3?h(a):s>3?h(e,t,a):h(e,t))||a);return s>3&&a&&Object.defineProperty(e,t,a),a};let v=class extends F{get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}};f([c({type:Boolean})],v.prototype,"selected",void 0);f([c({type:Boolean})],v.prototype,"disabled",void 0);f([c()],v.prototype,"title",void 0);f([c({defaultValue:null})],v.prototype,"icon",void 0);f([c()],v.prototype,"value",void 0);f([c()],v.prototype,"additionalText",void 0);f([c({type:Boolean})],v.prototype,"_focused",void 0);v=f([M("ui5-option")],v);v.define();const z=v,vt=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"}));function ke(o,e,t){return t?r`<div class="ui5-select-root ui5-input-focusable-element" id="${i(this._id)}-select" @click="${this._onclick}">${this.selectedOptionIcon?P.call(this,o,e,t):void 0}<div class="ui5-select-label-root" data-sap-focus-ref tabindex="${i(this._effectiveTabIndex)}" role="combobox" aria-haspopup="listbox" aria-label="${i(this.ariaLabelText)}" aria-describedby="${i(this.valueStateTextId)}" aria-disabled="${i(this.isDisabled)}" aria-required="${i(this.required)}" aria-expanded="${i(this._isPickerOpen)}" aria-roledescription="${i(this._ariaRoleDescription)}" @keydown="${this._onkeydown}" @keypress="${this._handleKeyboardNavigation}" @keyup="${this._onkeyup}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}">${i(this._text)}</div><${u("ui5-icon",e,t)} name="slim-arrow-down" input-icon ?pressed="${this._iconPressed}"></${u("ui5-icon",e,t)}>${this.hasValueState?O.call(this,o,e,t):void 0}<slot name="formSupport"></slot></div>`:r`<div class="ui5-select-root ui5-input-focusable-element" id="${i(this._id)}-select" @click="${this._onclick}">${this.selectedOptionIcon?P.call(this,o,e,t):void 0}<div class="ui5-select-label-root" data-sap-focus-ref tabindex="${i(this._effectiveTabIndex)}" role="combobox" aria-haspopup="listbox" aria-label="${i(this.ariaLabelText)}" aria-describedby="${i(this.valueStateTextId)}" aria-disabled="${i(this.isDisabled)}" aria-required="${i(this.required)}" aria-expanded="${i(this._isPickerOpen)}" aria-roledescription="${i(this._ariaRoleDescription)}" @keydown="${this._onkeydown}" @keypress="${this._handleKeyboardNavigation}" @keyup="${this._onkeyup}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}">${i(this._text)}</div><ui5-icon name="slim-arrow-down" input-icon ?pressed="${this._iconPressed}"></ui5-icon>${this.hasValueState?O.call(this,o,e,t):void 0}<slot name="formSupport"></slot></div>`}function P(o,e,t){return t?r`<${u("ui5-icon",e,t)} aria-hidden="true" class="ui5-select-option-icon" name="${i(this.selectedOptionIcon)}"></${u("ui5-icon",e,t)}>`:r`<ui5-icon aria-hidden="true" class="ui5-select-option-icon" name="${i(this.selectedOptionIcon)}"></ui5-icon>`}function O(o,e,t){return r`<span id="${i(this._id)}-valueStateDesc" class="ui5-hidden-text">${i(this.valueStateText)}</span>`}function Pe(o,e,t){return r`${this.options?Oe.call(this,o,e,t):void 0}${this.shouldOpenValueStateMessagePopover?Re.call(this,o,e,t):void 0}`}function Oe(o,e,t){return t?r`<${u("ui5-responsive-popover",e,t)} hide-arrow _disable-initial-focus placement-type="Bottom" class="ui5-select-popover ${b(this.classes.popover)}" horizontal-align="Left" @ui5-after-open="${i(this._afterOpen)}" @ui5-before-open="${i(this._beforeOpen)}" @ui5-after-close="${i(this._afterClose)}" @keydown="${this._onkeydown}" style=${g(this.styles.responsivePopover)}>${this._isPhone?E.call(this,o,e,t):void 0}${this._isPhone?void 0:N.call(this,o,e,t)}<${u("ui5-list",e,t)} mode="SingleSelectAuto" separators="None" @mousedown="${this._itemMousedown}" @ui5-item-click="${i(this._handleItemPress)}">${y(this._syncedOptions,(n,s)=>n._id||s,(n,s)=>R.call(this,o,e,t,n,s))}</${u("ui5-list",e,t)}></${u("ui5-responsive-popover",e,t)}>`:r`<ui5-responsive-popover hide-arrow _disable-initial-focus placement-type="Bottom" class="ui5-select-popover ${b(this.classes.popover)}" horizontal-align="Left" @ui5-after-open="${i(this._afterOpen)}" @ui5-before-open="${i(this._beforeOpen)}" @ui5-after-close="${i(this._afterClose)}" @keydown="${this._onkeydown}" style=${g(this.styles.responsivePopover)}>${this._isPhone?E.call(this,o,e,t):void 0}${this._isPhone?void 0:N.call(this,o,e,t)}<ui5-list mode="SingleSelectAuto" separators="None" @mousedown="${this._itemMousedown}" @ui5-item-click="${i(this._handleItemPress)}">${y(this._syncedOptions,(n,s)=>n._id||s,(n,s)=>R.call(this,o,e,t,n,s))}</ui5-list></ui5-responsive-popover>`}function E(o,e,t){return t?r`<div class="ui5-responsive-popover-header"><div class="row"><span>${i(this._headerTitleText)}</span><${u("ui5-button",e,t)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._toggleRespPopover}"></${u("ui5-button",e,t)}></div>${this.hasValueStateText?D.call(this,o,e,t):void 0}</div>`:r`<div class="ui5-responsive-popover-header"><div class="row"><span>${i(this._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._toggleRespPopover}"></ui5-button></div>${this.hasValueStateText?D.call(this,o,e,t):void 0}</div>`}function D(o,e,t){return r`<div class="${b(this.classes.popoverValueState)} row ui5-select-value-state-dialog-header">${this.shouldDisplayDefaultValueStateMessage?Ee.call(this,o,e,t):De.call(this,o,e,t)}</div>`}function Ee(o,e,t){return r`${i(this.valueStateText)}`}function De(o,e,t){return r`${y(this.valueStateMessageText,(n,s)=>n._id||s,(n,s)=>Ne.call(this,o,e,t,n,s))}`}function Ne(o,e,t,n,s){return r`${i(n)}`}function N(o,e,t){return r`${this.hasValueStateText?Ce.call(this,o,e,t):void 0}`}function Ce(o,e,t){return t?r`<div class="${b(this.classes.popoverValueState)}" style=${g(this.styles.responsivePopoverHeader)}><${u("ui5-icon",e,t)} class="ui5-input-value-state-message-icon" name="${i(this._valueStateMessageInputIcon)}"></${u("ui5-icon",e,t)}>${this.shouldDisplayDefaultValueStateMessage?C.call(this,o,e,t):V.call(this,o,e,t)}</div>`:r`<div class="${b(this.classes.popoverValueState)}" style=${g(this.styles.responsivePopoverHeader)}><ui5-icon class="ui5-input-value-state-message-icon" name="${i(this._valueStateMessageInputIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage?C.call(this,o,e,t):V.call(this,o,e,t)}</div>`}function C(o,e,t){return r`${i(this.valueStateText)}`}function V(o,e,t){return r`${y(this.valueStateMessageText,(n,s)=>n._id||s,(n,s)=>Ve.call(this,o,e,t,n,s))}`}function Ve(o,e,t,n,s){return r`${i(n)}`}function R(o,e,t,n,s){return t?r`<${u("ui5-li",e,t)} id="${i(n.id)}-li" icon="${i(n.icon)}" ?selected="${n.selected}" ?focused="${n._focused}" title="${i(n.title)}" additional-text="${i(n.additionalText)}" ?aria-selected="${n.selected}" data-ui5-stable="${i(n.stableDomRef)}">${i(n.textContent)}</${u("ui5-li",e,t)}>`:r`<ui5-li id="${i(n.id)}-li" icon="${i(n.icon)}" ?selected="${n.selected}" ?focused="${n._focused}" title="${i(n.title)}" additional-text="${i(n.additionalText)}" ?aria-selected="${n.selected}" data-ui5-stable="${i(n.stableDomRef)}">${i(n.textContent)}</ui5-li>`}function Re(o,e,t){return t?r`<${u("ui5-popover",e,t)} skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="Left"><div class="${b(this.classes.popoverValueState)}" style="${g(this.styles.popoverHeader)}"><${u("ui5-icon",e,t)} class="ui5-input-value-state-message-icon" name="${i(this._valueStateMessageInputIcon)}"></${u("ui5-icon",e,t)}>${this.shouldDisplayDefaultValueStateMessage?A.call(this,o,e,t):B.call(this,o,e,t)}</div></${u("ui5-popover",e,t)}>`:r`<ui5-popover skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="Left"><div class="${b(this.classes.popoverValueState)}" style="${g(this.styles.popoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${i(this._valueStateMessageInputIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage?A.call(this,o,e,t):B.call(this,o,e,t)}</div></ui5-popover>`}function A(o,e,t){return r`${i(this.valueStateText)}`}function B(o,e,t){return r`${y(this.valueStateMessageText,(n,s)=>n._id||s,(n,s)=>Ae.call(this,o,e,t,n,s))}`}function Ae(o,e,t,n,s){return r`${i(n)}`}w("@ui5/webcomponents-theming","sap_fiori_3",async()=>W);w("@ui5/webcomponents","sap_fiori_3",async()=>L);const Be={packageName:"@ui5/webcomponents",fileName:"themes/Select.css",content:`:host {
	vertical-align: middle;
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
	width: var(--_ui5_input_width);
	min-width: calc(var(--_ui5_input_min_width) + (var(--_ui5-input-icons-count)*var(--_ui5_input_icon_width)));
	margin: var(--_ui5_input_margin_top_bottom) 0;
	height: var(--_ui5_input_height);
	color: var(--sapField_TextColor);
	font-size: var(--sapFontSize);
	font-family: "72override", var(--sapFontFamily);
	font-style: normal;
	border: var(--_ui5-input-border);
	border-radius: var(--_ui5_input_border_radius);
	box-sizing: border-box;
	text-align: start;
	transition: var(--_ui5_input_transition);
	background: var(--sapField_BackgroundStyle);
	background-color: var(--_ui5_input_background_color);
}
:host(:not([readonly])) {
	box-shadow: var(--sapField_Shadow);
}
:host([focused]:not([opened])) {
	border-color: var(--_ui5_input_focused_border_color);
	background-color: var(--sapField_Focus_Background);
}
.ui5-input-focusable-element {
	position: relative;
}
:host([focused]:not([opened])) .ui5-input-focusable-element::after {
	content: var(--ui5_input_focus_pseudo_element_content);
	position: absolute;
	pointer-events: none;
	z-index: 2;
	border: var(--sapContent_FocusWidth) var(--sapContent_FocusStyle) var(--_ui5_input_focus_outline_color);
	border-radius: var(--_ui5_input_focus_border_radius);
	top: var(--_ui5_input_focus_offset);
	bottom: var(--_ui5_input_focus_offset);
	left: var(--_ui5_input_focus_offset);
	right: var(--_ui5_input_focus_offset);
}
.ui5-input-root::before {
	content: "";
	position: absolute;
	width: calc(100% - 2px);
	left: 1px;
	bottom: -2px;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	height: var(--_ui5_input_bottom_border_height);
	transition: var(--_ui5_input_transition);
	background-color: var(--_ui5_input_bottom_border_color);
}
.ui5-input-root {
	width: 100%;
	height: 100%;
	position: relative;
	background: transparent;
	display: inline-block;
	outline: none;
	box-sizing: border-box;
	color: inherit;
	transition: border-color .2s ease-in-out;
	border-radius: var(--_ui5_input_border_radius);
	overflow: hidden;
}
:host([disabled]) {
	opacity: var(--_ui5_input_disabled_opacity);
	cursor: default;
	pointer-events: none;
	background-color: var(--_ui5-input_disabled_background);
	border-color: var(--_ui5_input_disabled_border_color);
}
:host([disabled]) .ui5-input-root::before,
:host([readonly]) .ui5-input-root::before {
	content: none;
}
[inner-input] {
	background: transparent;
	color: inherit;
	border: none;
	font-style: inherit;
	-webkit-appearance: none;
	-moz-appearance: textfield;
	padding: var(--_ui5_input_inner_padding);
	box-sizing: border-box;
	min-width: var(--_ui5_input_min_width);
	width: 100%;
	text-align: inherit;
	text-overflow: ellipsis;
	flex: 1;
	outline: none;
	font-size: inherit;
	font-family: inherit;
	line-height: inherit;
	letter-spacing: inherit;
	word-spacing: inherit;
	text-align: inherit;
}
[inner-input][inner-input-with-icon] {
	padding: var(--_ui5_input_inner_padding_with_icon);
}
.ui5-input-value-state-icon {
	height: 100%;
	display: var(--_ui5-input-value-state-icon-display);
	align-items: center;
}
.ui5-input-value-state-icon > svg {
	margin-right: 8px;
}
[inner-input]::selection {
	background: var(--sapSelectedColor);
	color: var(--sapContent_ContrastTextColor);
}
/* Input placeholder */
:host([disabled]) [inner-input]::-webkit-input-placeholder {
	visibility: hidden;
}
:host([readonly]) [inner-input]::-webkit-input-placeholder {
	visibility: hidden;
}
:host([disabled]) [inner-input]::-moz-placeholder {
	visibility: hidden;
}
:host([readonly]) [inner-input]::-moz-placeholder {
	visibility: hidden;
}
[inner-input]::-webkit-input-placeholder {
	font-weight: normal;
	font-style: var(--_ui5_input_placeholder_style);
	color: var(--_ui5_input_placeholder_color);
	padding-right: 0.125rem;
}
[inner-input]::-moz-placeholder {
	font-weight: normal;
	font-style: var(--_ui5_input_placeholder_style);
	color: var(--_ui5_input_placeholder_color);
	padding-right: 0.125rem;
}
:host([value-state="Error"]) [inner-input]::-webkit-input-placeholder {
	color: var(--_ui5-input_error_placeholder_color);
	font-weight: var(--_ui5_input_value_state_error_warning_placeholder_font_weight);
}
:host([value-state="Error"]) [inner-input]::-moz-placeholder {
	color: var(--_ui5-input_error_placeholder_color);
	font-weight: var(--_ui5_input_value_state_error_warning_placeholder_font_weight);
}
:host([value-state="Warning"]) [inner-input]::-webkit-input-placeholder {
	font-weight: var(--_ui5_input_value_state_error_warning_placeholder_font_weight);
}
:host([value-state="Warning"]) [inner-input]::-moz-placeholder {
	font-weight: var(--_ui5_input_value_state_error_warning_placeholder_font_weight);
}
:host([value-state="Success"]) [inner-input]::-webkit-input-placeholder {
	color: var(--_ui5_input_placeholder_color);
}
:host([value-state="Success"]) [inner-input]::-moz-placeholder {
	color: var(--_ui5_input_placeholder_color);
}
:host([value-state="Information"]) [inner-input]::-webkit-input-placeholder {
	color: var(--_ui5_input_placeholder_color);
}
:host([value-state="Information"]) [inner-input]::-moz-placeholder {
	color: var(--_ui5_input_placeholder_color);
}
.ui5-input-content {
	height: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	overflow: hidden;
	outline: none;
	background: transparent;
	color: inherit;
	border-radius: var(--_ui5_input_border_radius);
}
:host([readonly]) {
	border-color: var(--_ui5_input_readonly_border_color);
	background: var(--sapField_ReadOnly_BackgroundStyle);
	background-color: var(--_ui5_input_readonly_background);
}
:host([value-state="None"]:not([readonly]):hover),
:host(:not([value-state]):not([readonly]):hover) {
	border: var(--_ui5_input_hover_border);
	border-color: var(--_ui5_input_focused_border_color);
	box-shadow: var(--sapField_Hover_Shadow);
	background: var(--sapField_Hover_BackgroundStyle);
	background-color: var(--sapField_Hover_Background);
}
:host(:not([value-state]):not([readonly])[focused]:not([opened]):hover),
:host([value-state="None"]:not([readonly])[focused]:not([opened]):hover) {
	box-shadow: none;
}
:host([focused]):not([opened]) .ui5-input-root::before {
	content: none;
}
:host(:not([readonly]):not([disabled])[value-state]:not([value-state="None"])) {
	border-width: var(--_ui5_input_state_border_width);
}
:host([value-state="Error"]) [inner-input],
:host([value-state="Warning"]) [inner-input] {
	font-style: var(--_ui5_input_error_warning_font_style);
	text-indent: var(--_ui5_input_error_warning_text_indent);
}
:host([value-state="Error"]) [inner-input] {
	font-weight: var(--_ui5_input_error_font_weight);
}
:host([value-state="Warning"]) [inner-input] {
	font-weight: var(--_ui5_input_warning_font_weight);
}
:host([value-state="Error"]:not([readonly]):not([disabled])) {
	background: var(--sapField_InvalidBackgroundStyle);
	background-color: var(--sapField_InvalidBackground);
	border-color: var(--_ui5_input_value_state_error_border_color);
	box-shadow: var(--sapField_InvalidShadow);
}
:host([value-state="Error"][focused]:not([opened]):not([readonly])) {
	background-color: var(--_ui5_input_focused_value_state_error_background);
	border-color: var(--_ui5_input_focused_value_state_error_border_color);
}
:host([value-state="Error"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after {
	border-color: var(--_ui5_input_focused_value_state_error_focus_outline_color);
}
:host([value-state="Error"]:not([readonly])) .ui5-input-root::before{
	background-color: var(--_ui5-input-value-state-error-border-botom-color);
}
:host([value-state="Error"]:not([readonly]):not([focused]):hover),
:host([value-state="Error"]:not([readonly])[focused][opened]:hover) {
	background-color: var(--_ui5_input_value_state_error_hover_background);
	box-shadow: var(--sapField_Hover_InvalidShadow);
}
:host([value-state="Error"]:not([readonly]):not([disabled])),
:host([value-state="Warning"]:not([readonly]):not([disabled])),
:host([value-state="Information"]:not([readonly]):not([disabled])) {
	border-style: var(--_ui5_input_error_warning_border_style);
}
:host([value-state="Warning"]:not([readonly]):not([disabled])) {
	background: var(--sapField_WarningBackgroundStyle);
	background-color: var(--sapField_WarningBackground);
	border-color: var(--_ui5_input_value_state_warning_border_color);
	box-shadow: var(--sapField_WarningShadow);
}
:host([value-state="Warning"][focused]:not([opened]):not([readonly])) {
	background-color: var(--_ui5_input_focused_value_state_warning_background);
	border-color: var(--_ui5_input_focused_value_state_warning_border_color);
}
:host([value-state="Warning"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after {
	border-color: var(--_ui5_input_focused_value_state_warning_focus_outline_color);
}
:host([value-state="Warning"]:not([readonly])) .ui5-input-root::before{
	background-color: var(--_ui5_input_value_state_warning_border_botom_color);
}
:host([value-state="Warning"]:not([readonly]):not([focused]):hover),
:host([value-state="Warning"]:not([readonly])[focused][opened]:hover)  {
	background-color: var(--sapField_Hover_Background);
	box-shadow: var(--sapField_Hover_WarningShadow);
}
:host([value-state="Success"]:not([readonly]):not([disabled])) {
	background: var(--sapField_SuccessBackgroundStyle);
	background-color: var(--sapField_SuccessBackground);
	border-color: var(--_ui5_input_value_state_success_border_color);
	border-width: var(--_ui5_input_value_state_success_border_width);
	box-shadow: var(--sapField_SuccessShadow);
}
:host([value-state="Success"][focused]:not([opened]):not([readonly])) {
	background-color: var(--_ui5_input_focused_value_state_success_background);
	border-color: var(--_ui5_input_focused_value_state_success_border_color);
}
:host([value-state="Success"][focused]:not([opened]):not([readonly])) .ui5-input-focusable-element:after {
	border-color: var(--_ui5_input_focused_value_state_success_focus_outline_color);
}
:host([value-state="Success"]:not([readonly])) .ui5-input-root::before{
	background-color: var(--_ui5_input_value_state_success_border_botom_color);
}
:host([value-state="Success"]:not([readonly]):not([focused]):hover),
:host([value-state="Success"]:not([readonly])[focused][opened]:hover) {
	background-color: var(--sapField_Hover_Background);
	box-shadow: var(--sapField_Hover_SuccessShadow);
}
:host([value-state="Information"]:not([readonly]):not([disabled])) {
	background: var(--sapField_InformationBackgroundStyle);
	background-color: var(--sapField_InformationBackground);
	border-color: var(--_ui5_input_value_state_information_border_color);
	border-width: var(--_ui5_input_information_border_width);
	box-shadow: var(--sapField_InformationShadow);
}
:host([value-state="Information"][focused]:not([opened]):not([readonly])) {
	background-color: var(--_ui5_input_focused_value_state_information_background);
	border-color: var(--_ui5_input_focused_value_state_information_border_color);
}
:host([value-state="Information"]:not([readonly])) .ui5-input-root::before{
	background-color: var(--_ui5_input_value_success_information_border_botom_color);
}
:host([value-state="Information"]:not([readonly]):not([focused]):hover),
:host([value-state="Information"]:not([readonly])[focused][opened]:hover) {
	background-color: var(--sapField_Hover_Background);
	box-shadow: var(--sapField_Hover_InformationShadow);
}
/* Input Icon */
.ui5-input-icon-root {
	min-width: var(--_ui5_input_icon_min_width);
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
/* TODO: Remove this after parser is fixed
	-	this statement is transformed to [ui5-multi-combobox] [ui5-icon] which
	affects all icons in the combobox incuding these in the list items
*/
::slotted([ui5-icon][slot="icon"]) {
	align-self: start;
	padding: var(--_ui5_input_custom_icon_padding);
	/* Normalize like libraries overrule the selector, thefore we need !important */
	box-sizing: content-box !important;
}
:host([value-state="Error"]) [input-icon],
:host([value-state="Warning"]) [input-icon]{
	padding: var(--_ui5_input_error_warning_icon_padding);
}
:host([value-state="Information"]) [input-icon] {
	padding: var(--_ui5_input_information_icon_padding);
}
:host([value-state="Error"]) ::slotted([input-icon][ui5-icon]),
:host([value-state="Error"]) ::slotted([ui5-icon][slot="icon"]),
:host([value-state="Warning"]) ::slotted([ui5-icon][slot="icon"]) {
	padding: var(--_ui5_input_error_warning_custom_icon_padding);
}
:host([value-state="Information"]) ::slotted([ui5-icon][slot="icon"]) {
	padding: var(--_ui5_input_information_custom_icon_padding);
}
:host([value-state="Error"]) [input-icon]:active,
:host([value-state="Error"]) [input-icon][pressed] {
	box-shadow: var(--_ui5_input_error_icon_box_shadow);
	color: var(--_ui5_input_icon_error_pressed_color);
}
:host([value-state="Error"]) [input-icon]:not([pressed]):not(:active):hover {
	box-shadow: var(--_ui5_input_error_icon_box_shadow);
}
:host([value-state="Warning"]) [input-icon]:active,
:host([value-state="Warning"]) [input-icon][pressed] {
	box-shadow: var(--_ui5_input_warning_icon_box_shadow);
	color: var(--_ui5_input_icon_warning_pressed_color);
}
:host([value-state="Warning"]) [input-icon]:not([pressed]):not(:active):hover {
	box-shadow: var(--_ui5_input_warning_icon_box_shadow);
}
:host([value-state="Information"]) [input-icon]:active,
:host([value-state="Information"]) [input-icon][pressed] {
	box-shadow: var(--_ui5_input_information_icon_box_shadow);
	color: var(--_ui5_input_icon_information_pressed_color);
}
:host([value-state="Information"]) [input-icon]:not([pressed]):not(:active):hover {
	box-shadow: var(--_ui5_input_information_icon_box_shadow);
}
:host([value-state="Success"]) [input-icon]:active,
:host([value-state="Success"]) [input-icon][pressed] {
	box-shadow: var(--_ui5_input_success_icon_box_shadow);
	color: var(--_ui5_input_icon_success_pressed_color);
}
:host([value-state="Success"]) [input-icon]:not([pressed]):not(:active):hover {
	box-shadow: var(--_ui5_input_success_icon_box_shadow);
}
.ui5-input-clear-icon-wrapper {
	height: var(--_ui5_input_icon_wrapper_height);
	padding: 0;
	width: var(--_ui5_input_icon_width);
	min-width: var(--_ui5_input_icon_width);
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
}
:host([value-state]:not([value-state="None"]):not([value-state="Success"])) .ui5-input-clear-icon-wrapper {
	height: var(--_ui5_input_icon_wrapper_state_height);
	vertical-align: top;
}
:host([value-state="Success"]) .ui5-input-clear-icon-wrapper {
	height: var(--_ui5_input_icon_wrapper_success_state_height);
}
[ui5-icon].ui5-input-clear-icon {
	padding: 0;
	color: inherit;
}
/* Chrome, Safari, Edge, Opera */
[inner-input]::-webkit-outer-spin-button,
[inner-input]::-webkit-inner-spin-button {
	-webkit-appearance: inherit;
	margin: inherit;
}
.ui5-select-root {
	min-width: calc(var(--_ui5_input_min_width) + (var(--_ui5-input-icons-count)*var(--_ui5_input_icon_width)));
	width: 100%;
	height: 100%;
	display: flex;
	outline: none;
	cursor: pointer;
	overflow: hidden;
	border-radius: var(--_ui5_input_border_radius);
}
.ui5-select-label-root {
	flex-shrink: 1;
	flex-grow: 1;
	align-self: center;
	min-width: 1rem;
	padding-inline-start: 0.5rem;
	cursor: pointer;
	outline: none;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	color: var(--_ui5_select_label_color);
	font-family: "72override", var(--sapFontFamily);
	font-size: var(--sapFontSize);
	font-weight: normal;
}
.ui5-select-option-icon {
	padding-inline-start: 0.5rem;
	color: var(--sapField_TextColor);
	align-self: center;
}
:host(:not([disabled])) {
	cursor: pointer;
}
`};w("@ui5/webcomponents-theming","sap_fiori_3",async()=>W);w("@ui5/webcomponents","sap_fiori_3",async()=>L);const Fe={packageName:"@ui5/webcomponents",fileName:"themes/SelectPopover.css",content:`.ui5-select-popover::part(content),
.ui5-select-popover::part(header) {
	padding: 0;
}

.ui5-select-popover [ui5-li] {
	height: var(--_ui5_list_item_dropdown_base_height);
}

.ui5-select-popover [ui5-li]::part(icon) {
	color: var(--sapList_TextColor);
}
`};var p=globalThis&&globalThis.__decorate||function(o,e,t,n){var s=arguments.length,a=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,e,t,n);else for(var m=o.length-1;m>=0;m--)(h=o[m])&&(a=(s<3?h(a):s>3?h(e,t,a):h(e,t))||a);return s>3&&a&&Object.defineProperty(e,t,a),a},_;let d=_=class extends F{constructor(){super(),this._syncedOptions=[],this._selectedIndex=-1,this._selectedIndexBeforeOpen=-1,this._escapePressed=!1,this._lastSelectedOption=null,this._typedChars=""}onBeforeRendering(){this._syncSelection(),this._enableFormSupport(),this.style.setProperty("--_ui5-input-icons-count",`${this.iconsCount}`)}onAfterRendering(){this.toggleValueStatePopover(this.shouldOpenValueStateMessagePopover),this._isPickerOpen&&(this._listWidth||(this._listWidth=this.responsivePopover.offsetWidth)),this._attachRealDomRefs()}_onfocusin(){this.focused=!0}_onfocusout(){this.focused=!1}get _isPickerOpen(){return!!this.responsivePopover&&this.responsivePopover.opened}async _respPopover(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-responsive-popover]")}get selectedOption(){return this._filteredItems.find(e=>e.selected)}async _toggleRespPopover(){this._iconPressed=!0,this.responsivePopover=await this._respPopover(),!this.disabled&&(this._isPickerOpen?this.responsivePopover.close():this.responsivePopover.showAt(this))}async _attachRealDomRefs(){this.responsivePopover=await this._respPopover(),this.options.forEach(e=>{e._getRealDomRef=()=>this.responsivePopover.querySelector(`*[data-ui5-stable=${e.stableDomRef}]`)})}_syncSelection(){let e=-1,t=-1;const n=this._filteredItems,s=n.map((a,h)=>((a.selected||a.textContent===this.value)&&(e=h),t===-1&&(t=h),a.selected=!1,a._focused=!1,{selected:!1,_focused:!1,icon:a.icon,value:a.value,textContent:a.textContent,title:a.title,additionalText:a.additionalText,id:a._id,stableDomRef:a.stableDomRef}));e>-1?(s[e].selected=!0,s[e]._focused=!0,n[e].selected=!0,n[e]._focused=!0,this._text=s[e].textContent,this._selectedIndex=e):(this._text="",this._selectedIndex=-1,s[t]&&(s[t].selected=!0,s[t]._focused=!0,n[t].selected=!0,n[t]._focused=!0,this._selectedIndex=t,this._text=n[t].textContent)),this._syncedOptions=s}_enableFormSupport(){const e=oe("FormSupport");e?e.syncNativeHiddenInput(this,(t,n)=>{const s=t;n.disabled=!!t.disabled,n.value=s._currentlySelectedOption?s._currentlySelectedOption.value:""}):this.name&&console.warn('In order for the "name" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";')}_onkeydown(e){(Y(e)||G(e))&&this.responsivePopover&&this.responsivePopover.opened&&this.responsivePopover.close(),X(e)?(e.preventDefault(),this._toggleRespPopover()):$(e)?e.preventDefault():Z(e)&&this._isPickerOpen?this._escapePressed=!0:J(e)?this._handleHomeKey(e):Q(e)?this._handleEndKey(e):T(e)?this._handleSelectionChange():(ee(e)||k(e))&&this._handleArrowNavigation(e)}_handleKeyboardNavigation(e){if(T(e))return;const t=e.key.toLowerCase();this._typedChars+=t;const n=/^(.)\1+$/i.test(this._typedChars)?t:this._typedChars;clearTimeout(this._typingTimeoutID),this._typingTimeoutID=setTimeout(()=>{this._typedChars="",this._typingTimeoutID=-1},1e3),this._selectTypedItem(n)}_selectTypedItem(e){const t=this._selectedIndex,n=this._searchNextItemByText(e);if(n){const s=this._filteredItems.indexOf(n);this._changeSelectedItem(this._selectedIndex,s),t!==this._selectedIndex&&this.itemSelectionAnnounce()}}_searchNextItemByText(e){let t=this._filteredItems.slice(0);const n=t.splice(this._selectedIndex+1,t.length-this._selectedIndex),s=t.splice(0,t.length-1);return t=n.concat(s),t.find(a=>(a.textContent||"").toLowerCase().startsWith(e))}_handleHomeKey(e){e.preventDefault(),this._changeSelectedItem(this._selectedIndex,0)}_handleEndKey(e){const t=this._filteredItems.length-1;e.preventDefault(),this._changeSelectedItem(this._selectedIndex,t)}_onkeyup(e){$(e)&&(this._isPickerOpen?this._handleSelectionChange():this._toggleRespPopover())}_getSelectedItemIndex(e){return this._filteredItems.findIndex(t=>`${t._id}-li`===e.id)}_select(e){this._filteredItems[this._selectedIndex].selected=!1,this._selectedIndex=e,this._filteredItems[e].selected=!0}_handleItemPress(e){const t=e.detail.item,n=this._getSelectedItemIndex(t);this._handleSelectionChange(n)}_itemMousedown(e){e.preventDefault()}_onclick(){this.getFocusDomRef().focus(),this._toggleRespPopover()}_handleSelectionChange(e=this._selectedIndex){this._select(e),this._toggleRespPopover()}_handleArrowNavigation(e){let t=-1;const n=this._selectedIndex,s=k(e);e.preventDefault(),s?t=this._getNextOptionIndex():t=this._getPreviousOptionIndex(),this._changeSelectedItem(this._selectedIndex,t),n!==this._selectedIndex&&this.itemSelectionAnnounce()}_changeSelectedItem(e,t){const n=this._filteredItems;n[e].selected=!1,n[e]._focused=!1,n[t].selected=!0,n[t]._focused=!0,this._selectedIndex=t,this._isPickerOpen||this._fireChangeEvent(n[t])}_getNextOptionIndex(){return this._selectedIndex===this.options.length-1?this._selectedIndex:this._selectedIndex+1}_getPreviousOptionIndex(){return this._selectedIndex===0?this._selectedIndex:this._selectedIndex-1}_beforeOpen(){this._selectedIndexBeforeOpen=this._selectedIndex,this._lastSelectedOption=this._filteredItems[this._selectedIndex]}_afterOpen(){this.opened=!0,this.fireEvent("open"),this.itemSelectionAnnounce()}_afterClose(){this.opened=!1,this._iconPressed=!1,this._listWidth=0,this._escapePressed?(this._select(this._selectedIndexBeforeOpen),this._escapePressed=!1):this._lastSelectedOption!==this._filteredItems[this._selectedIndex]&&(this._fireChangeEvent(this._filteredItems[this._selectedIndex]),this._lastSelectedOption=this._filteredItems[this._selectedIndex]),this.fireEvent("close")}_fireChangeEvent(e){const t=!this.fireEvent("change",{selectedOption:e},!0);this.selectedItem=e.textContent,this.fireEvent("selected-item-changed"),t&&(this.selectedItem=this._lastSelectedOption.textContent,this._select(this._selectedIndexBeforeOpen))}get valueStateTextMappings(){return{[l.Success]:_.i18nBundle.getText(le),[l.Information]:_.i18nBundle.getText(ue),[l.Error]:_.i18nBundle.getText(de),[l.Warning]:_.i18nBundle.getText(ce)}}get valueStateTypeMappings(){return{[l.Success]:_.i18nBundle.getText(pe),[l.Information]:_.i18nBundle.getText(_e),[l.Error]:_.i18nBundle.getText(he),[l.Warning]:_.i18nBundle.getText(ve)}}get valueStateText(){let e;return this.shouldDisplayDefaultValueStateMessage?e=this.valueStateDefaultText:e=this.valueStateMessageText.map(t=>t.textContent).join(" "),`${this.valueStateTypeText} ${e}`}get valueStateDefaultText(){return this.valueState!==l.None?this.valueStateTextMappings[this.valueState]:""}get valueStateTypeText(){return this.valueState!==l.None?this.valueStateTypeMappings[this.valueState]:""}get hasValueState(){return this.valueState!==l.None}get valueStateTextId(){return this.hasValueState?`${this._id}-valueStateDesc`:void 0}get isDisabled(){return this.disabled||void 0}get _headerTitleText(){return _.i18nBundle.getText(fe)}get _currentlySelectedOption(){return this._filteredItems[this._selectedIndex]}get _effectiveTabIndex(){return this.disabled||this.responsivePopover&&this.responsivePopover.opened?"-1":"0"}get _valueStateMessageInputIcon(){const e={Error:"error",Warning:"alert",Success:"sys-enter-2",Information:"information"};return this.valueState!==l.None?e[this.valueState]:""}get iconsCount(){return this.selectedOptionIcon?2:1}get classes(){return{popoverValueState:{"ui5-valuestatemessage-root":!0,"ui5-valuestatemessage--success":this.valueState===l.Success,"ui5-valuestatemessage--error":this.valueState===l.Error,"ui5-valuestatemessage--warning":this.valueState===l.Warning,"ui5-valuestatemessage--information":this.valueState===l.Information},popover:{"ui5-select-popover-valuestate":this.hasValueState}}}get styles(){return{popoverHeader:{"max-width":`${this.offsetWidth}px`},responsivePopoverHeader:{display:this._filteredItems.length&&this._listWidth===0?"none":"inline-block",width:`${this._filteredItems.length?this._listWidth:this.offsetWidth}px`},responsivePopover:{"min-width":`${this.offsetWidth}px`}}}get ariaLabelText(){return ie(this)}get valueStateMessageText(){return this.getSlottedNodes("valueStateMessage").map(e=>e.cloneNode(!0))}get shouldDisplayDefaultValueStateMessage(){return!this.valueStateMessageText.length&&this.hasValueStateText}get hasValueStateText(){return this.hasValueState&&this.valueState!==l.Success}get shouldOpenValueStateMessagePopover(){return this.focused&&this.hasValueStateText&&!this._iconPressed&&!this._isPickerOpen&&!this._isPhone}get _ariaRoleDescription(){return _.i18nBundle.getText(me)}get _isPhone(){return se()}get _filteredItems(){return this.options.filter(e=>!e.disabled)}itemSelectionAnnounce(){let e;const t=this._filteredItems.length,n=_.i18nBundle.getText(be,this._selectedIndex+1,t);this.focused&&this._currentlySelectedOption&&(e=`${this._currentlySelectedOption.textContent} ${this._isPickerOpen?n:""}`,te(e,ne.Polite))}async openValueStatePopover(){this.valueStatePopover=await this._getPopover(),this.valueStatePopover&&this.valueStatePopover.showAt(this)}closeValueStatePopover(){this.valueStatePopover&&this.valueStatePopover.close()}toggleValueStatePopover(e){e?this.openValueStatePopover():this.closeValueStatePopover()}get selectedOptionIcon(){return this.selectedOption&&this.selectedOption.icon}async _getPopover(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-popover]")}static async onDefine(){_.i18nBundle=await H("@ui5/webcomponents")}};p([c({type:Boolean})],d.prototype,"disabled",void 0);p([c()],d.prototype,"name",void 0);p([c({type:l,defaultValue:l.None})],d.prototype,"valueState",void 0);p([c({type:Boolean})],d.prototype,"required",void 0);p([c()],d.prototype,"accessibleName",void 0);p([c()],d.prototype,"accessibleNameRef",void 0);p([c({type:String,noAttribute:!0})],d.prototype,"_text",void 0);p([c({type:Boolean,noAttribute:!0})],d.prototype,"_iconPressed",void 0);p([c({type:Boolean})],d.prototype,"opened",void 0);p([c({validator:ae,defaultValue:0,noAttribute:!0})],d.prototype,"_listWidth",void 0);p([c({type:Boolean})],d.prototype,"focused",void 0);p([I({default:!0,type:HTMLElement,invalidateOnChildChange:!0})],d.prototype,"options",void 0);p([I()],d.prototype,"formSupport",void 0);p([I()],d.prototype,"valueStateMessage",void 0);d=_=p([M({tag:"ui5-select",languageAware:!0,renderer:U,template:ke,staticAreaTemplate:Pe,styles:Be,staticAreaStyles:[Ie,$e,Fe],dependencies:[z,ge,ye,Se,re,we,K,xe]}),x("change",{detail:{selectedOption:{type:HTMLElement}}}),x("open"),x("close")],d);d.define();const Me=d,We=Object.freeze(Object.defineProperty({__proto__:null,default:Me},Symbol.toStringTag,{value:"Module"})),S=j("ui5-select",["accessibleName","accessibleNameRef","name","valueState"],["disabled","required"],["valueStateMessage"],["change","close","open"],()=>q(()=>Promise.resolve().then(()=>We),void 0,import.meta.url));S.displayName="Select";S.defaultProps={valueState:Te.None};try{S.displayName="Select",S.__docgenInfo={description:"The `Select` component is used to create a drop-down list. The items inside the `Select` define the available options by using the `Option` component.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Select)",displayName:"Select",props:{children:{defaultValue:null,description:`Defines the component options.

**Note:** Only one selected option is allowed. If more than one option is defined as selected, the last one would be considered as the selected one.

**Note:** Use the \`Option\` component to define the desired options.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},valueStateMessage:{defaultValue:null,description:"Defines the value state message that will be displayed as pop up under the component.\n\n**Note:** If not specified, a default text (in the respective language) will be displayed.\n\n**Note:** The `valueStateMessage` would be displayed, when the component is in `Information`, `Warning` or `Error` value state.\n\n**Note:** If the component has `suggestionItems`, the `valueStateMessage` would be displayed as part of the same popover, if used on desktop, or dialog - on phone.\n\n__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot=\"valueStateMessage\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).",name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},onChange:{defaultValue:null,description:"Fired when the selected option changes.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<SelectDomRef, SelectChangeEventDetail>) => void"}},onClose:{defaultValue:null,description:"Fired after the component's dropdown menu closes.",name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<SelectDomRef, never>) => void"}},onOpen:{defaultValue:null,description:"Fired after the component's dropdown menu opens.",name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<SelectDomRef, never>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the select.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:`Defines whether the component is in disabled state.

**Note:** A disabled component is noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:'Determines the name with which the component will be submitted in an HTML form. The value of the component will be the value of the currently selected `Option`.\n\n**Important:** For the `name` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`\n\n**Note:** When set, a native `input` HTML element will be created inside the `Select` so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.',name:"name",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},valueState:{defaultValue:{value:"ValueState.None"},description:"Defines the value state of the component.\n\nAvailable options are:\n\n*   `None`\n*   `Error`\n*   `Warning`\n*   `Success`\n*   `Information`",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Error"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{vt as O,S};
//# sourceMappingURL=index-577c1c6c.js.map
