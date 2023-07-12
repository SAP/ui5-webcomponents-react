import{_ as Q}from"./iframe-8b32191a.js";import{a as $,U as X,d as se}from"./UI5Element-78be0f3d.js";import{e as r,l as s,s as l,a as ee,b as te,p,c as oe,d as ae,w as ne}from"./withWebComponent-d4224c1c.js";import{c as w,I as re,e as x}from"./Icon-70a9e5b9.js";import{s as V}from"./slot-76e48863.js";import{V as d}from"./ValueState-2c5e5904.js";import{i as m,c as le,h as ue}from"./Device-99b8bbf4.js";import{I as ce}from"./Integer-f7f172c9.js";import{a as F,I as N}from"./InvisibleMessage-0c1781f1.js";import{g as de}from"./AriaLabelHelper-43a261ec.js";import"./slim-arrow-down-59731cbb.js";import"./decline-09ce3004.js";import{s as pe,a as he,F as _e,S as ve}from"./Suggestions.css-0bf90e55.js";import"./information-872f55da.js";import{g as me}from"./CustomElementsScopeUtils-137da8c8.js";import{m as E,n as B,o as D,t as R,u as A,p as M,P as fe,z as ge,c as be,d as ye,k as we,e as Se,l as Ie}from"./Icons-26e87c01.js";import{u as $e,al as xe,I as Te,Y as ke,V as Pe,o as Ve,p as Ce,n as Fe,q as Ne,r as Ee,s as Be,t as De}from"./i18n-defaults-f002f496.js";import{o as f}from"./class-map-18f572ce.js";import{s as g}from"./style-map-54298215.js";import{s as Re}from"./ResponsivePopoverCommon.css-f39aca2a.js";import{s as Ae}from"./ValueStateMessage.css-998b8922.js";import{a as T,C as Me}from"./ComboBoxItem-d87d1077.js";import{c as We,a as W}from"./Popover-a03c4c52.js";import Le from"./ResponsivePopover-5ed17489.js";import{L as qe}from"./ListItemBase-d5e2b9fa.js";import{B as ze}from"./BusyIndicator-4ada5b66.js";import{a as Ue}from"./Button-427cd4bb.js";import He from"./StandardListItem-4f4de76a.js";import Oe from"./GroupHeaderListItem-514e58f4.js";import{V as Ge}from"./ValueState-ab6838cc.js";function je(i,e,t){return r`<div class="ui5-combobox-root ui5-input-focusable-element">${this.hasValueState?Ke.call(this,i,e,t):void 0}<input id="ui5-combobox-input" .value="${s(this.value)}" inner-input placeholder="${s(this.placeholder)}" ?disabled=${this.disabled} ?readonly=${this.readonly} value-state="${s(this.valueState)}" @keydown="${this._keydown}" @input="${this._input}" @change="${this._inputChange}" @click=${this._click} @keyup="${this._keyup}" @focusin="${this._focusin}" @focusout="${this._focusout}" aria-expanded="${s(this.open)}" role="combobox" aria-haspopup="listbox" aria-autocomplete="both" aria-describedby="value-state-description" aria-label="${s(this.ariaLabelText)}" aria-required="${s(this.required)}" data-sap-focus-ref />${this.icon?Ye.call(this,i,e,t):void 0}${this.readonly?void 0:Ze.call(this,i,e,t)}</div>`}function Ke(i,e,t){return r`<span id="value-state-description" class="ui5-hidden-text">${s(this.ariaValueStateHiddenText)}</span>`}function Ye(i,e,t){return r`<slot name="icon"></slot>`}function Ze(i,e,t){return t?r`<${l("ui5-icon",e,t)} name="slim-arrow-down" slot="icon" tabindex="-1" input-icon ?pressed="${this._iconPressed}" @click="${this._arrowClick}" accessible-name="${s(this._iconAccessibleNameText)}"></${l("ui5-icon",e,t)}>`:r`<ui5-icon name="slim-arrow-down" slot="icon" tabindex="-1" input-icon ?pressed="${this._iconPressed}" @click="${this._arrowClick}" accessible-name="${s(this._iconAccessibleNameText)}"></ui5-icon>`}function Je(i,e,t){return t?r`<${l("ui5-responsive-popover",e,t)} class="${f(this.classes.popover)}" hide-arrow _disable-initial-focus placement-type="Bottom" horizontal-align="Left" style="${g(this.styles.suggestionsPopover)}" @ui5-after-open=${s(this._afterOpenPopover)} @ui5-after-close=${s(this._afterClosePopover)}><${l("ui5-busy-indicator",e,t)} ?active=${this.loading} size="Medium" class="ui5-combobox-busy"></${l("ui5-busy-indicator",e,t)}>${this._isPhone?L.call(this,i,e,t):void 0}${this._isPhone?void 0:H.call(this,i,e,t)}<${l("ui5-list",e,t)} separators="None" @ui5-item-click=${s(this._selectItem)} @ui5-item-focused=${s(this._onItemFocus)} @mousedown=${this._itemMousedown} mode="SingleSelect">${w(this._filteredItems,(o,n)=>o._id||n,(o,n)=>j.call(this,i,e,t,o,n))}</${l("ui5-list",e,t)}>${this._isPhone?K.call(this,i,e,t):void 0}</${l("ui5-responsive-popover",e,t)}>${this.shouldOpenValueStateMessagePopover?Y.call(this,i,e,t):void 0} `:r`<ui5-responsive-popover class="${f(this.classes.popover)}" hide-arrow _disable-initial-focus placement-type="Bottom" horizontal-align="Left" style="${g(this.styles.suggestionsPopover)}" @ui5-after-open=${s(this._afterOpenPopover)} @ui5-after-close=${s(this._afterClosePopover)}><ui5-busy-indicator ?active=${this.loading} size="Medium" class="ui5-combobox-busy"></ui5-busy-indicator>${this._isPhone?L.call(this,i,e,t):void 0}${this._isPhone?void 0:H.call(this,i,e,t)}<ui5-list separators="None" @ui5-item-click=${s(this._selectItem)} @ui5-item-focused=${s(this._onItemFocus)} @mousedown=${this._itemMousedown} mode="SingleSelect">${w(this._filteredItems,(o,n)=>o._id||n,(o,n)=>j.call(this,i,e,t,o,n))}</ui5-list>${this._isPhone?K.call(this,i,e,t):void 0}</ui5-responsive-popover>${this.shouldOpenValueStateMessagePopover?Y.call(this,i,e,t):void 0} `}function L(i,e,t){return t?r`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${s(this._headerTitleText)}</span><${l("ui5-button",e,t)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._closeRespPopover}"></${l("ui5-button",e,t)}></div><div class="row"><div class="input-root-phone" value-state="${s(this.valueState)}"><input class="ui5-input-inner-phone" .value="${s(this.value)}" inner-input placeholder="${s(this.placeholder)}" value-state="${s(this.valueState)}" @input="${this._input}" @change="${this._inputChange}" @keydown="${this._keydown}" aria-autocomplete="both" /></div></div>${this.hasValueStateText?q.call(this,i,e,t):void 0}</div>`:r`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${s(this._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._closeRespPopover}"></ui5-button></div><div class="row"><div class="input-root-phone" value-state="${s(this.valueState)}"><input class="ui5-input-inner-phone" .value="${s(this.value)}" inner-input placeholder="${s(this.placeholder)}" value-state="${s(this.valueState)}" @input="${this._input}" @change="${this._inputChange}" @keydown="${this._keydown}" aria-autocomplete="both" /></div></div>${this.hasValueStateText?q.call(this,i,e,t):void 0}</div>`}function q(i,e,t){return t?r`<div class="${f(this.classes.popoverValueState)}" style="${g(this.styles.popoverValueStateMessage)}"><${l("ui5-icon",e,t)} class="ui5-input-value-state-message-icon" name="${s(this._valueStateMessageIcon)}"></${l("ui5-icon",e,t)}>${this.shouldDisplayDefaultValueStateMessage?z.call(this,i,e,t):U.call(this,i,e,t)}</div>`:r`<div class="${f(this.classes.popoverValueState)}" style="${g(this.styles.popoverValueStateMessage)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${s(this._valueStateMessageIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage?z.call(this,i,e,t):U.call(this,i,e,t)}</div>`}function z(i,e,t){return r`${s(this.valueStateDefaultText)}`}function U(i,e,t){return r`${w(this.valueStateMessageText,(o,n)=>o._id||n,(o,n)=>Qe.call(this,i,e,t,o,n))}`}function Qe(i,e,t,o,n){return r`${s(o)}`}function H(i,e,t){return r`${this.hasValueStateText?Xe.call(this,i,e,t):void 0}`}function Xe(i,e,t){return t?r`<div slot="header" class="ui5-responsive-popover-header ${f(this.classes.popoverValueState)}" ?focused=${this._isValueStateFocused} tabindex="0" style="${g(this.styles.suggestionPopoverHeader)}"><${l("ui5-icon",e,t)} class="ui5-input-value-state-message-icon" name="${s(this._valueStateMessageIcon)}"></${l("ui5-icon",e,t)}>${this.shouldDisplayDefaultValueStateMessage?O.call(this,i,e,t):G.call(this,i,e,t)}</div>`:r`<div slot="header" class="ui5-responsive-popover-header ${f(this.classes.popoverValueState)}" ?focused=${this._isValueStateFocused} tabindex="0" style="${g(this.styles.suggestionPopoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${s(this._valueStateMessageIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage?O.call(this,i,e,t):G.call(this,i,e,t)}</div>`}function O(i,e,t){return r`${s(this.valueStateDefaultText)}`}function G(i,e,t){return r`${w(this.valueStateMessageText,(o,n)=>o._id||n,(o,n)=>et.call(this,i,e,t,o,n))}`}function et(i,e,t,o,n){return r`${s(o)}`}function j(i,e,t,o,n){return r`${o.isGroupItem?tt.call(this,i,e,t,o,n):ot.call(this,i,e,t,o,n)}`}function tt(i,e,t,o,n){return t?r`<${l("ui5-li-groupheader",e,t)} ?focused=${o.focused}>${s(o.text)}</${l("ui5-li-groupheader",e,t)}>`:r`<ui5-li-groupheader ?focused=${o.focused}>${s(o.text)}</ui5-li-groupheader>`}function ot(i,e,t,o,n){return t?r`<${l("ui5-li",e,t)} type="Active" additional-text=${s(o.additionalText)} group-name=${s(o.groupName)} ._tabIndex=${s(o.itemTabIndex)} .mappedItem=${s(o)} ?selected=${o.selected} ?focused=${o.focused}>${s(o.text)}</${l("ui5-li",e,t)}>`:r`<ui5-li type="Active" additional-text=${s(o.additionalText)} group-name=${s(o.groupName)} ._tabIndex=${s(o.itemTabIndex)} .mappedItem=${s(o)} ?selected=${o.selected} ?focused=${o.focused}>${s(o.text)}</ui5-li>`}function K(i,e,t){return t?r`<div slot="footer" class="ui5-responsive-popover-footer"><${l("ui5-button",e,t)} design="Transparent" @click="${this._closeRespPopover}">OK</${l("ui5-button",e,t)}></div>`:r`<div slot="footer" class="ui5-responsive-popover-footer"><ui5-button design="Transparent" @click="${this._closeRespPopover}">OK</ui5-button></div>`}function Y(i,e,t){return t?r`<${l("ui5-popover",e,t)} skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" horizontal-align="${s(this._valueStatePopoverHorizontalAlign)}" placement-type="Bottom"><div slot="header" class="${f(this.classes.popoverValueState)}" style="${g(this.styles.popoverHeader)}"><${l("ui5-icon",e,t)} class="ui5-input-value-state-message-icon" name="${s(this._valueStateMessageIcon)}"></${l("ui5-icon",e,t)}>${this.shouldDisplayDefaultValueStateMessage?Z.call(this,i,e,t):J.call(this,i,e,t)}</div></${l("ui5-popover",e,t)}>`:r`<ui5-popover skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" horizontal-align="${s(this._valueStatePopoverHorizontalAlign)}" placement-type="Bottom"><div slot="header" class="${f(this.classes.popoverValueState)}" style="${g(this.styles.popoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${s(this._valueStateMessageIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage?Z.call(this,i,e,t):J.call(this,i,e,t)}</div></ui5-popover>`}function Z(i,e,t){return r`${s(this.valueStateDefaultText)}`}function J(i,e,t){return r`${w(this.valueStateMessageText,(o,n)=>o._id||n,(o,n)=>nt.call(this,i,e,t,o,n))}`}function nt(i,e,t,o,n){return r`${s(o)}`}$("@ui5/webcomponents-theming","sap_fiori_3",async()=>ee);$("@ui5/webcomponents","sap_fiori_3",async()=>te);const it={packageName:"@ui5/webcomponents",fileName:"themes/ComboBox.css",content:`:host {
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
.ui5-combobox-root {
	display: flex;
	overflow: hidden;
	width: 100%;
	height: 100%;
	border-radius: var(--_ui5_input_border_radius);
}`};$("@ui5/webcomponents-theming","sap_fiori_3",async()=>ee);$("@ui5/webcomponents","sap_fiori_3",async()=>te);const st={packageName:"@ui5/webcomponents",fileName:"themes/ComboBoxPopover.css",content:`.ui5-combobox-busy {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
	z-index: 42;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	pointer-events: all;
}

.ui5-combobox-busy:not([active]) {
	display: none;
}`};var C=globalThis&&globalThis.__decorate||function(i,e,t,o){var n=arguments.length,a=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,e,t,o);else for(var v=i.length-1;v>=0;v--)(h=i[v])&&(a=(n<3?h(a):n>3?h(e,t,a):h(e,t))||a);return n>3&&a&&Object.defineProperty(e,t,a),a};let b=class extends X{get isGroupItem(){return!0}};C([p()],b.prototype,"text",void 0);C([p({type:Boolean})],b.prototype,"focused",void 0);b=C([oe("ui5-cb-group-item")],b);b.define();const ie=b,Wt=Object.freeze(Object.defineProperty({__proto__:null,default:ie},Symbol.toStringTag,{value:"Module"}));var c=globalThis&&globalThis.__decorate||function(i,e,t,o){var n=arguments.length,a=n<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,e,t,o);else for(var v=i.length-1;v>=0;v--)(h=i[v])&&(a=(n<3?h(a):n>3?h(e,t,a):h(e,t))||a);return n>3&&a&&Object.defineProperty(e,t,a),a},_;const S=10;var k;(function(i){i.Error="error",i.Warning="alert",i.Success="sys-enter-2",i.Information="information"})(k||(k={}));let u=_=class extends X{constructor(){super(),this._filteredItems=[],this._initialRendering=!0,this._itemFocused=!1,this._autocomplete=!1,this._isKeyNavigation=!1,this._lastValue="",this._selectionPerformed=!1,this._selectedItemText="",this._userTypedValue=""}onBeforeRendering(){const e=this.valueStatePopover;this.FormSupport=me("FormSupport"),(this._initialRendering||this.filter==="None")&&(this._filteredItems=this.items),!this._initialRendering&&document.activeElement===this&&!this._filteredItems.length&&(e==null||e.close()),this._selectMatchingItem(),this._initialRendering=!1;const t=this.icon.length||0,o=this.readonly?0:1;this.style.setProperty("--_ui5-input-icons-count",`${t+o}`)}async onAfterRendering(){const e=await this._getPicker();m()&&e.opened&&this.inner.focus(),await this.shouldClosePopover()&&!m()&&(e.close(!1,!1,!0),this._clearFocus(),this._itemFocused=!1),this.toggleValueStatePopover(this.shouldOpenValueStateMessagePopover),this.storeResponsivePopoverWidth(),le()&&this._autocomplete&&this.filterValue!==this.value&&this.inner.setSelectionRange(this._isKeyNavigation?0:this.filterValue.length,this.value.length)}async shouldClosePopover(){return(await this._getPicker()).opened&&!this.focused&&!this._itemFocused&&!this._isValueStateFocused}_focusin(e){this.focused=!0,this._lastValue=this.value,this._autocomplete=!1,!m()&&e.target.setSelectionRange(0,this.value.length)}_focusout(e){var n;const t=e.relatedTarget,o=(n=t==null?void 0:t.shadowRoot)==null?void 0:n.querySelector(".ui5-valuestatemessage-root");if(this._fireChangeEvent(),o){e.stopImmediatePropagation();return}!this.shadowRoot.contains(t)&&this.staticAreaItem!==e.relatedTarget&&(this.focused=!1,!m()&&this._closeRespPopover(e))}_afterOpenPopover(){this._iconPressed=!0}_afterClosePopover(){this._iconPressed=!1,this._filteredItems=this.items,m()&&this.blur(),this._selectionPerformed&&(this._lastValue=this.value,this._selectionPerformed=!1)}async _toggleRespPopover(){(await this._getPicker()).opened?this._closeRespPopover():this._openRespPopover()}async storeResponsivePopoverWidth(){this.open&&!this._listWidth&&(this._listWidth=(await this._getPicker()).offsetWidth)}toggleValueStatePopover(e){e?this.openValueStatePopover():this.closeValueStatePopover()}async openValueStatePopover(){var e;(e=await this._getValueStatePopover())==null||e.showAt(this)}async closeValueStatePopover(){var e;(e=await this._getValueStatePopover())==null||e.close()}async _getValueStatePopover(){const t=(await this.getStaticAreaItemDomRef()).querySelector(".ui5-valuestatemessage-popover");return this.valueStatePopover=t,t}_resetFilter(){this._userTypedValue="",this.inner.setSelectionRange(0,this.value.length),this._filteredItems=this._filterItems(""),this._selectMatchingItem()}_arrowClick(){this.inner.focus(),this._resetFilter(),m()&&this.value&&!this._lastValue&&(this._lastValue=this.value),this._toggleRespPopover()}_input(e){const{value:t}=e.target,o=this.shouldAutocomplete(e);if(e.target===this.inner&&(e.stopImmediatePropagation(),this.focused=!0,this._isValueStateFocused=!1),this._filteredItems=this._filterItems(t),this.value=t,this.filterValue=t,this._clearFocus(),o&&!ue()){const n=this._getFirstMatchingItem(t);n&&this._applyAtomicValueAndSelection(n,t,!0),t!==""&&n&&!n.selected&&!n.isGroupItem&&this.fireEvent("selection-change",{item:n})}this.fireEvent("input"),!m()&&(!this._filteredItems.length||t===""?this._closeRespPopover():this._openRespPopover())}shouldAutocomplete(e){const t=e.inputType;return!["deleteWordBackward","deleteWordForward","deleteSoftLineBackward","deleteSoftLineForward","deleteEntireSoftLine","deleteHardLineBackward","deleteHardLineForward","deleteByDrag","deleteByCut","deleteContent","deleteContentBackward","deleteContentForward","historyUndo"].includes(t)}_startsWithMatchingItems(e){return he(e,this._filteredItems,"text")}_clearFocus(){this._filteredItems.map(e=>(e.focused=!1,e))}handleNavKeyPress(e){if(this.focused&&(E(e)||B(e))&&this.value)return;const t=this.open,o=this._filteredItems.find(a=>t?a.focused:a.selected),n=o?this._filteredItems.indexOf(o):-1;e.preventDefault(),!(this.focused&&t&&(D(e)||R(e)||A(e)))&&(this._filteredItems.length-1===n&&M(e)||(this._isKeyNavigation=!0,(e.key==="ArrowDown"||e.key==="ArrowUp"||e.key==="PageUp"||e.key==="PageDown"||e.key==="Home"||e.key==="End")&&this[`_handle${e.key}`](e,n)))}_handleItemNavigation(e,t,o){const n=this.open,a=this._filteredItems[t],h=o?this._filteredItems[t+1]:this._filteredItems[t-1],v=a&&a.isGroupItem;if(!n&&(v&&!h||!v&&!a)||(this._clearFocus(),n?(this._itemFocused=!0,this.value=v?"":a.text,this.focused=!1,a.focused=!0):(this.focused=!0,this.value=v?h.text:a.text,a.focused=!1),this._isValueStateFocused=!1,this._announceSelectedItem(t),v&&n))return;const y=this._getFirstMatchingItem(this.value);y&&this._applyAtomicValueAndSelection(y,this.open?this._userTypedValue:"",!0),y&&!y.selected&&this.fireEvent("selection-change",{item:y}),this.fireEvent("input"),this._fireChangeEvent()}_handleArrowDown(e,t){const o=this.open;if(this.focused&&t===-1&&this.hasValueStateText&&o){this._isValueStateFocused=!0,this.focused=!1;return}t=!o&&this.hasValueState&&t===-1?0:t,this._handleItemNavigation(e,++t,!0)}_handleArrowUp(e,t){const o=this.open;if(t===0&&!this.hasValueStateText){this._clearFocus(),this.focused=!0,this._itemFocused=!1;return}if(t===0&&this.hasValueStateText&&o){this._clearFocus(),this._itemFocused=!1,this._isValueStateFocused=!0,this._filteredItems[0].selected=!1;return}if(this._isValueStateFocused){this.focused=!0,this._isValueStateFocused=!1;return}t=!o&&this.hasValueState&&t===-1?0:t,this._handleItemNavigation(e,--t,!1)}_handlePageUp(e,t){const o=t-S>-1;t=o?t-S:0;const n=this._filteredItems[t].isGroupItem&&!this.open;if(!o&&this.hasValueStateText&&this.open){this._clearFocus(),this._itemFocused=!1,this._isValueStateFocused=!0;return}this._handleItemNavigation(e,t,n)}_handlePageDown(e,t){const o=this._filteredItems.length;t=t+S<o?t+S:o-1;const a=this._filteredItems[t].isGroupItem&&!this.open;this._handleItemNavigation(e,t,a)}_handleHome(e){const t=this._filteredItems[0].isGroupItem&&!this.open;if(this.hasValueStateText&&this.open){this._clearFocus(),this._itemFocused=!1,this._isValueStateFocused=!0;return}this._handleItemNavigation(e,0,t)}_handleEnd(e){this._handleItemNavigation(e,this._filteredItems.length-1,!0)}_keyup(){this._userTypedValue=this.value.substring(0,this.inner.selectionStart||0)}_keydown(e){const t=M(e)||D(e)||R(e)||A(e)||E(e)||B(e),o=this.responsivePopover;if(this._autocomplete=!(fe(e)||ge(e)),this._isKeyNavigation=!1,t&&!this.readonly&&this._filteredItems.length&&this.handleNavKeyPress(e),be(e)&&(this._fireChangeEvent(),o!=null&&o.opened?(this._closeRespPopover(),this.focused=!0):this.FormSupport&&this.FormSupport.triggerFormSubmit(this)),ye(e)&&(this.focused=!0,this.value=this.open?this.value:this._lastValue,this._isValueStateFocused=!1),(we(e)||Se(e))&&this.open&&this._closeRespPopover(),Ie(e)&&!this.readonly&&!this.disabled){e.preventDefault(),this._resetFilter(),this._toggleRespPopover();const n=this._filteredItems.find(a=>a.selected);n&&this.open?(this._itemFocused=!0,n.focused=!0,this.focused=!1):this.open&&this._filteredItems.length?this._handleItemNavigation(e,0,!0):this.focused=!0}}_click(){m()&&!this.readonly&&this._openRespPopover()}_closeRespPopover(e){const t=this.responsivePopover;e&&e.target.classList.contains("ui5-responsive-popover-close-btn")&&this._selectedItemText&&(this.value=this._selectedItemText,this.filterValue=this._selectedItemText),e&&e.target.classList.contains("ui5-responsive-popover-close-btn")&&(this.value=this._lastValue||"",this.filterValue=this._lastValue||""),m()&&this._fireChangeEvent(),this._isValueStateFocused=!1,this._clearFocus(),t==null||t.close()}async _openRespPopover(){(await this._getPicker()).showAt(this)}_filterItems(e){const t=this.items.filter(n=>!n.isGroupItem),o=(_e[this.filter]||ve)(e,t,"text");return this.items.filter((n,a,h)=>_._groupItemFilter(n,++a,h,o)||o.indexOf(n)!==-1)}static _groupItemFilter(e,t,o,n){if(e.isGroupItem){let a;for(;o[t]&&!o[t].isGroupItem&&!a;)a=n.indexOf(o[t])!==-1,t++;return a}}_getFirstMatchingItem(e){const t=this.items.find(n=>n.focused===!0);if(t!=null&&t.isGroupItem){this.value=this.filterValue;return}const o=this._startsWithMatchingItems(e).filter(n=>!n.isGroupItem);if(o.length)return o[0]}_applyAtomicValueAndSelection(e,t,o){const n=e&&e.text||"";this.inner.value=n,o&&this.inner.setSelectionRange(t.length,n.length),this.value=n}_selectMatchingItem(){const e=this.items.find(n=>n.focused),t=e&&e.isGroupItem,o=this._filteredItems.find(n=>!n.isGroupItem&&n.text===this.value&&!t);this._filteredItems=this._filteredItems.map(n=>(n.selected=n===o,n))}_fireChangeEvent(){this.value!==this._lastValue&&(this.fireEvent("change"),this._lastValue=this.value)}_inputChange(e){e.preventDefault()}_itemMousedown(e){e.preventDefault()}_selectItem(e){const t=e.detail.item;this._selectedItemText=t.mappedItem.text,this._selectionPerformed=!0;const o=this.value===this._selectedItemText,n=this.value.toLowerCase()===this.filterValue.toLowerCase();if(o&&n)return this._fireChangeEvent(),this._closeRespPopover();this.value=this._selectedItemText,t.mappedItem.selected||this.fireEvent("selection-change",{item:t.mappedItem}),this._filteredItems.map(a=>(a.selected=a===t.mappedItem&&!a.isGroupItem,a)),this._fireChangeEvent(),this._closeRespPopover(),this.inner.setSelectionRange(this.value.length,this.value.length)}_onItemFocus(){this._itemFocused=!0}_announceSelectedItem(e){const t=this._filteredItems[e],o=t.additionalText||"",n=t==null?void 0:t.isGroupItem,a=_.i18nBundle.getText($e,e+1,this._filteredItems.length),h=_.i18nBundle.getText(xe);n?F(`${h} ${t.text}`,N.Polite):F(`${o} ${a}`.trim(),N.Polite)}get _headerTitleText(){return _.i18nBundle.getText(Te)}get _iconAccessibleNameText(){return _.i18nBundle.getText(ke)}get inner(){return m()?this.responsivePopover.querySelector(".ui5-input-inner-phone"):this.shadowRoot.querySelector("[inner-input]")}async _getPicker(){const t=(await this.getStaticAreaItemDomRef()).querySelector("[ui5-responsive-popover]");return this.responsivePopover=t,t}get hasValueState(){return this.valueState!==d.None}get hasValueStateText(){return this.hasValueState&&this.valueState!==d.Success}get ariaValueStateHiddenText(){if(!this.hasValueState)return"";let e="";return this.valueState!==d.None&&(e=this.valueStateTypeMappings[this.valueState]),this.shouldDisplayDefaultValueStateMessage?`${e} ${this.valueStateDefaultText||""}`:`${e}`.concat(" ",this.valueStateMessageText.map(t=>t.textContent).join(" "))}get valueStateDefaultText(){if(this.valueState!==d.None)return this.valueStateTextMappings[this.valueState]}get valueStateMessageText(){return this.getSlottedNodes("valueStateMessage").map(e=>e.cloneNode(!0))}get valueStateTextMappings(){return{[d.Success]:_.i18nBundle.getText(Pe),[d.Error]:_.i18nBundle.getText(Ve),[d.Warning]:_.i18nBundle.getText(Ce),[d.Information]:_.i18nBundle.getText(Fe)}}get valueStateTypeMappings(){return{[d.Success]:_.i18nBundle.getText(Ne),[d.Information]:_.i18nBundle.getText(Ee),[d.Error]:_.i18nBundle.getText(Be),[d.Warning]:_.i18nBundle.getText(De)}}get shouldOpenValueStateMessagePopover(){return this.focused&&!this.readonly&&this.hasValueStateText&&!this._iconPressed&&!this.open&&!this._isPhone}get shouldDisplayDefaultValueStateMessage(){return!this.valueStateMessage.length&&this.hasValueStateText}get _valueStatePopoverHorizontalAlign(){return this.effectiveDir!=="rtl"?W.Left:W.Right}get _valueStateMessageIcon(){return this.valueState!==d.None?k[this.valueState]:""}get open(){var e;return((e=this==null?void 0:this.responsivePopover)==null?void 0:e.opened)||!1}get _isPhone(){return m()}get itemTabIndex(){}get ariaLabelText(){return de(this)}static async onDefine(){_.i18nBundle=await se("@ui5/webcomponents")}get styles(){const e=parseInt(getComputedStyle(document.documentElement).fontSize);return{popoverHeader:{width:`${this.offsetWidth}px`},suggestionPopoverHeader:{display:this._listWidth===0?"none":"inline-block",width:`${this._listWidth||""}px`},suggestionsPopover:{"min-width":`${this.offsetWidth||0}px`,"max-width":this.offsetWidth/e>40?`${this.offsetWidth}px`:"40rem"}}}get classes(){return{popover:{"ui5-suggestions-popover":!this._isPhone,"ui5-suggestions-popover-with-value-state-header":!this._isPhone&&this.hasValueStateText},popoverValueState:{"ui5-valuestatemessage-header":!0,"ui5-valuestatemessage-root":!0,"ui5-valuestatemessage--success":this.valueState===d.Success,"ui5-valuestatemessage--error":this.valueState===d.Error,"ui5-valuestatemessage--warning":this.valueState===d.Warning,"ui5-valuestatemessage--information":this.valueState===d.Information}}}};c([p()],u.prototype,"value",void 0);c([p()],u.prototype,"filterValue",void 0);c([p()],u.prototype,"placeholder",void 0);c([p({type:Boolean})],u.prototype,"disabled",void 0);c([p({type:d,defaultValue:d.None})],u.prototype,"valueState",void 0);c([p({type:Boolean})],u.prototype,"readonly",void 0);c([p({type:Boolean})],u.prototype,"required",void 0);c([p({type:Boolean})],u.prototype,"loading",void 0);c([p({type:T,defaultValue:T.StartsWithPerTerm})],u.prototype,"filter",void 0);c([p({type:Boolean})],u.prototype,"focused",void 0);c([p({type:Boolean})],u.prototype,"_isValueStateFocused",void 0);c([p()],u.prototype,"accessibleName",void 0);c([p()],u.prototype,"accessibleNameRef",void 0);c([p({type:Boolean,noAttribute:!0})],u.prototype,"_iconPressed",void 0);c([p({type:Object,noAttribute:!0,multiple:!0})],u.prototype,"_filteredItems",void 0);c([p({validator:ce,noAttribute:!0})],u.prototype,"_listWidth",void 0);c([V({type:HTMLElement,default:!0,invalidateOnChildChange:!0})],u.prototype,"items",void 0);c([V()],u.prototype,"valueStateMessage",void 0);c([V()],u.prototype,"icon",void 0);u=_=c([oe({tag:"ui5-combobox",languageAware:!0,renderer:ae,styles:it,staticAreaStyles:[Re,Ae,st,pe],template:je,staticAreaTemplate:Je,dependencies:[Me,re,Le,qe,ze,Ue,He,Oe,We,ie]}),x("change"),x("input"),x("selection-change",{detail:{item:{type:HTMLElement}}})],u);u.define();const at=u,rt=Object.freeze(Object.defineProperty({__proto__:null,default:at},Symbol.toStringTag,{value:"Module"})),I=ne("ui5-combobox",["accessibleName","accessibleNameRef","filter","placeholder","value","valueState"],["disabled","loading","readonly","required"],["icon","valueStateMessage"],["change","input","selection-change"],()=>Q(()=>Promise.resolve().then(()=>rt),void 0,import.meta.url));I.displayName="ComboBox";I.defaultProps={filter:T.StartsWithPerTerm,valueState:Ge.None};try{I.displayName="ComboBox",I.__docgenInfo={description:`The \`ComboBox\` component represents a drop-down menu with a list of the available options and a text input field to narrow down the options. It is commonly used to enable users to select an option from a predefined list.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-ComboBox)`,displayName:"ComboBox",props:{children:{defaultValue:null,description:"Defines the component items.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed in the input field.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="icon"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"icon",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},valueStateMessage:{defaultValue:null,description:"Defines the value state message that will be displayed as pop up under the component.\n\n**Note:** If not specified, a default text (in the respective language) will be displayed.\n**Note:** The `valueStateMessage` would be displayed, when the `ComboBox` is in `Information`, `Warning` or `Error` value state.\n\n__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot=\"valueStateMessage\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).",name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode | UI5WCSlotsNode[]"}},onChange:{defaultValue:null,description:"Fired when the input operation has finished by pressing Enter, focusout or an item is selected.\n\n__Note:__ This event is NOT the same as the native `onChange` [event of React](https://reactjs.org/docs/dom-elements.html#onchange). If you want to simulate that behavior, please use `onInput` instead.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<ComboBoxDomRef, never>) => void"}},onInput:{defaultValue:null,description:`Fired when typing in input.

**Note:** filterValue property is updated, input is changed.`,name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<ComboBoxDomRef, never>) => void"}},onSelectionChange:{defaultValue:null,description:"Fired when selection is changed by user interaction",name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<ComboBoxDomRef, ComboBoxSelectionChangeEventDetail>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:`Defines whether the component is in disabled state.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},filter:{defaultValue:{value:"ComboBoxFilter.StartsWithPerTerm"},description:"Defines the filter type of the component. Available options are: `StartsWithPerTerm`, `StartsWith`, `Contains` and `None`.",name:"filter",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"StartsWithPerTerm"'},{value:'"StartsWith"'},{value:'"Contains"'},{value:'"None"'},{value:'"StartsWithPerTerm"'},{value:'"StartsWith"'},{value:'"Contains"'}]}},loading:{defaultValue:null,description:"Indicates whether a loading indicator should be shown in the picker.",name:"loading",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"Defines a short hint intended to aid the user with data entry when the component has no value.",name:"placeholder",required:!1,type:{name:"string"}},readonly:{defaultValue:null,description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable, but still provides visual feedback upon user interaction.`,name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"Defines the value of the component.",name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:"ValueState.None"},description:"Defines the value state of the component.\n\nAvailable options are:\n\n*   `None`\n*   `Error`\n*   `Warning`\n*   `Success`\n*   `Information`",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Error"'},{value:'"Information"'},{value:'"Warning"'},{value:'"Success"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const P=ne("ui5-cb-item",["additionalText","text"],[],[],[],()=>Q(()=>import("./ComboBoxItem-d87d1077.js").then(i=>i.b),["./ComboBoxItem-d87d1077.js","./withWebComponent-d4224c1c.js","./utils-69f7a0e0.js","./CustomElementsScopeUtils-137da8c8.js","./index-ebeaab24.js","./jsx-runtime-5926aa06.js","./useIsomorphicLayoutEffect-38a48652.js","./UI5Element-78be0f3d.js"],import.meta.url));P.displayName="ComboBoxItem";try{P.displayName="ComboBoxItem",P.__docgenInfo={description:"The `ComboBoxItem` represents the item for a `ComboBox`",displayName:"ComboBoxItem",props:{additionalText:{defaultValue:null,description:"Defines the additional text of the component.",name:"additionalText",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{I as C,P as a,Wt as b};
//# sourceMappingURL=index-fb9c3b05.js.map
