import{r as z,U as j,o as q,l as Z}from"./UI5Element-11982a12.js";import{b as r,l as o,o as S,d as c,s as Y,a as K,p as l,c as X,f as J}from"./withWebComponent-99b005ba.js";import{s as T}from"./slot-76e48863.js";import{c as I,e as y,a as Q}from"./Icon-31253496.js";import{R as E}from"./ResizeHandler-9ebe913c.js";import{f as tt,i as m}from"./Device-6afa24d0.js";import{V as p}from"./ValueState-2c5e5904.js";import{g as w}from"./CustomElementsScopeUtils-137da8c8.js";import{L as et,M as P,i as A,d as nt,e as it,k as ot,m as st,l as at,h as rt,j as ut,f as lt,g as ct}from"./Icons-234bf59e.js";import{I as x}from"./Integer-f7f172c9.js";import{r as ht,d as dt,a as pt,b as _t}from"./AriaLabelHelper-43a261ec.js";import"./decline-c1cc2557.js";import{S as gt,s as vt}from"./Suggestions.css-a2899748.js";import"./information-2644a02f.js";import{c as ft}from"./Popover-f3103b78.js";import{s as _}from"./style-map-56038137.js";import{o as b}from"./class-map-b4d8f3b0.js";import{W as bt,X as mt,Y as St,Z as yt,b as It,e as wt,V as $t,a as Tt,a2 as xt,a3 as Ct,a4 as kt,a5 as Et,a6 as Pt}from"./i18n-defaults-1a83921e.js";import{s as At}from"./ResponsivePopoverCommon.css-c96ec8b5.js";import{s as Vt}from"./ValueStateMessage.css-e53cdf31.js";var C;(function(n){n.Text="Text",n.Email="Email",n.Number="Number",n.Password="Password",n.Tel="Tel",n.URL="URL"})(C||(C={}));const k=C,Bt=n=>{let t=0;return(n.selectionStart||n.selectionStart===0)&&(t=n.selectionDirection==="backward"?n.selectionStart:n.selectionEnd),t},Mt=(n,t)=>{n.selectionStart?(n.focus(),n.setSelectionRange(t,t)):n.focus()};function Ot(n,t,e){return r`<div class="ui5-input-root ui5-input-focusable-element" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}"><div class="ui5-input-content"><input id="${o(this._id)}-inner" class="ui5-input-inner" style="${_(this.styles.innerInput)}" type="${o(this.inputType)}" inner-input ?inner-input-with-icon="${this.icon.length}" ?disabled="${this.disabled}" ?readonly="${this._readonly}" .value="${o(this._innerValue)}" placeholder="${o(this._placeholder)}" maxlength="${o(this.maxlength)}" role="${o(this.accInfo.input.role)}" aria-controls="${o(this.accInfo.input.ariaControls)}" aria-invalid="${o(this.accInfo.input.ariaInvalid)}" aria-haspopup="${o(this.accInfo.input.ariaHasPopup)}" aria-describedby="${o(this.accInfo.input.ariaDescribedBy)}" aria-roledescription="${o(this.accInfo.input.ariaRoledescription)}" aria-autocomplete="${o(this.accInfo.input.ariaAutoComplete)}" aria-expanded="${o(this.accInfo.input.ariaExpanded)}" aria-label="${o(this.accInfo.input.ariaLabel)}" aria-required="${o(this.required)}" @input="${this._handleInput}" @change="${this._handleChange}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click=${this._click} @focusin=${this.innerFocusIn} data-sap-focus-ref step="${o(this.nativeInputAttributes.step)}" min="${o(this.nativeInputAttributes.min)}" max="${o(this.nativeInputAttributes.max)}" />${this.effectiveShowClearIcon?Rt.call(this,n,t,e):void 0}${this.icon.length?Dt.call(this,n,t,e):void 0}<div class="ui5-input-value-state-icon">${S(this._valueStateInputIcon)}</div>${this.showSuggestions?Ft.call(this,n,t,e):void 0}${this.accInfo.input.ariaDescription?Nt.call(this,n,t,e):void 0}${this.hasValueState?Lt.call(this,n,t,e):void 0}</div><slot name="formSupport"></slot></div>`}function Rt(n,t,e){return e?r`<div @click=${this._clear} @mousedown=${this._iconMouseDown} class="ui5-input-clear-icon-wrapper" input-icon tabindex="-1"><${c("ui5-icon",t,e)} tabindex="-1" class="ui5-input-clear-icon" name="decline"></${c("ui5-icon",t,e)}></div>`:r`<div @click=${this._clear} @mousedown=${this._iconMouseDown} class="ui5-input-clear-icon-wrapper" input-icon tabindex="-1"><ui5-icon tabindex="-1" class="ui5-input-clear-icon" name="decline"></ui5-icon></div>`}function Dt(n,t,e){return r`<div class="ui5-input-icon-root"><slot name="icon"></slot></div>`}function Ft(n,t,e){return r`<span id="${o(this._id)}-suggestionsText" class="ui5-hidden-text">${o(this.suggestionsText)}</span><span id="${o(this._id)}-selectionText" class="ui5-hidden-text" aria-live="polite" role="status"></span><span id="${o(this._id)}-suggestionsCount" class="ui5-hidden-text" aria-live="polite">${o(this.availableSuggestionsCount)}</span>`}function Nt(n,t,e){return r`<span id="${o(this._id)}-descr" class="ui5-hidden-text">${o(this.accInfo.input.ariaDescription)}</span>`}function Lt(n,t,e){return r`<span id="${o(this._id)}-valueStateDesc" class="ui5-hidden-text">${o(this.ariaValueStateHiddenText)}</span>`}function Wt(n,t,e){return r`${this.showSuggestions?Ht.call(this,n,t,e):void 0}${this.hasValueStateMessage?Zt.call(this,n,t,e):void 0} `}function Ht(n,t,e){return e?r`<${c("ui5-responsive-popover",t,e)} class="${b(this.classes.popover)}" hide-arrow _disable-initial-focus placement-type="Bottom" horizontal-align="Left" style="${_(this.styles.suggestionsPopover)}" @ui5-after-open="${o(this._afterOpenPopover)}" @ui5-after-close="${o(this._afterClosePopover)}" @ui5-scroll="${o(this._scroll)}">${this._isPhone?V.call(this,n,t,e):void 0}${this._isPhone?void 0:R.call(this,n,t,e)}<${c("ui5-list",t,e)} separators="${o(this.suggestionSeparators)}" @mousedown="${this.onItemMouseDown}" mode="SingleSelect">${I(this.suggestionsTexts,(i,s)=>i._id||s,(i,s)=>N.call(this,n,t,e,i,s))}</${c("ui5-list",t,e)}>${this._isPhone?W.call(this,n,t,e):void 0}</${c("ui5-responsive-popover",t,e)}>`:r`<ui5-responsive-popover class="${b(this.classes.popover)}" hide-arrow _disable-initial-focus placement-type="Bottom" horizontal-align="Left" style="${_(this.styles.suggestionsPopover)}" @ui5-after-open="${o(this._afterOpenPopover)}" @ui5-after-close="${o(this._afterClosePopover)}" @ui5-scroll="${o(this._scroll)}">${this._isPhone?V.call(this,n,t,e):void 0}${this._isPhone?void 0:R.call(this,n,t,e)}<ui5-list separators="${o(this.suggestionSeparators)}" @mousedown="${this.onItemMouseDown}" mode="SingleSelect">${I(this.suggestionsTexts,(i,s)=>i._id||s,(i,s)=>N.call(this,n,t,e,i,s))}</ui5-list>${this._isPhone?W.call(this,n,t,e):void 0}</ui5-responsive-popover>`}function V(n,t,e){return e?r`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${o(this._headerTitleText)}</span><${c("ui5-button",t,e)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._closeRespPopover}"></${c("ui5-button",t,e)}></div><div class="row"><div class="input-root-phone native-input-wrapper"><${c("ui5-input",t,e)} class="ui5-input-inner-phone" type="${o(this.inputType)}" .value="${o(this.value)}" ?show-clear-icon=${this.showClearIcon} placeholder="${o(this.placeholder)}" @ui5-input="${o(this._handleInput)}" @ui5-change="${o(this._handleChange)}"></${c("ui5-input",t,e)}></div></div>${this.hasValueStateMessage?B.call(this,n,t,e):void 0}</div>`:r`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${o(this._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._closeRespPopover}"></ui5-button></div><div class="row"><div class="input-root-phone native-input-wrapper"><ui5-input class="ui5-input-inner-phone" type="${o(this.inputType)}" .value="${o(this.value)}" ?show-clear-icon=${this.showClearIcon} placeholder="${o(this.placeholder)}" @ui5-input="${o(this._handleInput)}" @ui5-change="${o(this._handleChange)}"></ui5-input></div></div>${this.hasValueStateMessage?B.call(this,n,t,e):void 0}</div>`}function B(n,t,e){return e?r`<div class="${b(this.classes.popoverValueState)}" style="${_(this.styles.suggestionPopoverHeader)}"><${c("ui5-icon",t,e)} class="ui5-input-value-state-message-icon" name="${o(this._valueStateMessageInputIcon)}"></${c("ui5-icon",t,e)}>${this.shouldDisplayDefaultValueStateMessage?M.call(this,n,t,e):O.call(this,n,t,e)}</div>`:r`<div class="${b(this.classes.popoverValueState)}" style="${_(this.styles.suggestionPopoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${o(this._valueStateMessageInputIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage?M.call(this,n,t,e):O.call(this,n,t,e)}</div>`}function M(n,t,e){return r`${o(this.valueStateText)}`}function O(n,t,e){return r`${I(this.valueStateMessageText,(i,s)=>i._id||s,(i,s)=>Ut.call(this,n,t,e,i,s))}`}function Ut(n,t,e,i,s){return r`${o(i)}`}function R(n,t,e){return r`${this.hasValueStateMessage?zt.call(this,n,t,e):void 0}`}function zt(n,t,e){return e?r`<div slot="header" ?focused=${this._isValueStateFocused} class="ui5-responsive-popover-header ${b(this.classes.popoverValueState)}" style=${_(this.styles.suggestionPopoverHeader)}><${c("ui5-icon",t,e)} class="ui5-input-value-state-message-icon" name="${o(this._valueStateMessageInputIcon)}"></${c("ui5-icon",t,e)}>${this.shouldDisplayDefaultValueStateMessage?D.call(this,n,t,e):F.call(this,n,t,e)}</div>`:r`<div slot="header" ?focused=${this._isValueStateFocused} class="ui5-responsive-popover-header ${b(this.classes.popoverValueState)}" style=${_(this.styles.suggestionPopoverHeader)}><ui5-icon class="ui5-input-value-state-message-icon" name="${o(this._valueStateMessageInputIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage?D.call(this,n,t,e):F.call(this,n,t,e)}</div>`}function D(n,t,e){return r`${o(this.valueStateText)}`}function F(n,t,e){return r`${I(this.valueStateMessageText,(i,s)=>i._id||s,(i,s)=>Gt.call(this,n,t,e,i,s))}`}function Gt(n,t,e,i,s){return r`${o(i)}`}function N(n,t,e,i,s){return r`${i.groupItem?jt.call(this,n,t,e,i,s):qt.call(this,n,t,e,i,s)}`}function jt(n,t,e,i,s){return e?r`<${c("ui5-li-groupheader",t,e)} data-ui5-key="${o(i.key)}">${S(i.text)}</${c("ui5-li-groupheader",t,e)}>`:r`<ui5-li-groupheader data-ui5-key="${o(i.key)}">${S(i.text)}</ui5-li-groupheader>`}function qt(n,t,e,i,s){return e?r`<${c("ui5-li-suggestion-item",t,e)} image="${o(i.image)}" icon="${o(i.icon)}" additional-text="${o(i.additionalText)}" type="${o(i.type)}" additional-text-state="${o(i.additionalTextState)}" data-ui5-key="${o(i.key)}">${S(i.text)}${i.description?L.call(this,n,t,e,i,s):void 0}</${c("ui5-li-suggestion-item",t,e)}>`:r`<ui5-li-suggestion-item image="${o(i.image)}" icon="${o(i.icon)}" additional-text="${o(i.additionalText)}" type="${o(i.type)}" additional-text-state="${o(i.additionalTextState)}" data-ui5-key="${o(i.key)}">${S(i.text)}${i.description?L.call(this,n,t,e,i,s):void 0}</ui5-li-suggestion-item>`}function L(n,t,e,i,s){return r`<span slot="richDescription">${S(i.description)}</span>`}function W(n,t,e){return e?r`<div slot="footer" class="ui5-responsive-popover-footer"><${c("ui5-button",t,e)} design="Transparent" @click="${this._closeRespPopover}">OK</${c("ui5-button",t,e)}></div>`:r`<div slot="footer" class="ui5-responsive-popover-footer"><ui5-button design="Transparent" @click="${this._closeRespPopover}">OK</ui5-button></div>`}function Zt(n,t,e){return e?r`<${c("ui5-popover",t,e)} skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="${o(this._valueStatePopoverHorizontalAlign)}"><div slot="header" class="${b(this.classes.popoverValueState)}" style="${_(this.styles.popoverHeader)}"><${c("ui5-icon",t,e)} class="ui5-input-value-state-message-icon" name="${o(this._valueStateMessageInputIcon)}"></${c("ui5-icon",t,e)}>${this.shouldDisplayDefaultValueStateMessage?H.call(this,n,t,e):U.call(this,n,t,e)}</div></${c("ui5-popover",t,e)}>`:r`<ui5-popover skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="${o(this._valueStatePopoverHorizontalAlign)}"><div slot="header" class="${b(this.classes.popoverValueState)}" style="${_(this.styles.popoverHeader)}"><ui5-icon class="ui5-input-value-state-message-icon" name="${o(this._valueStateMessageInputIcon)}"></ui5-icon>${this.shouldDisplayDefaultValueStateMessage?H.call(this,n,t,e):U.call(this,n,t,e)}</div></ui5-popover>`}function H(n,t,e){return r`${o(this.valueStateText)}`}function U(n,t,e){return r`${I(this.valueStateMessageText,(i,s)=>i._id||s,(i,s)=>Yt.call(this,n,t,e,i,s))}`}function Yt(n,t,e,i,s){return r`${o(i)}`}z("@ui5/webcomponents-theming","sap_fiori_3",async()=>Y);z("@ui5/webcomponents","sap_fiori_3",async()=>K);const Kt={packageName:"@ui5/webcomponents",fileName:"themes/Input.css",content:`:host {
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
`};var u=globalThis&&globalThis.__decorate||function(n,t,e,i){var s=arguments.length,h=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,g;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")h=Reflect.decorate(n,t,e,i);else for(var v=n.length-1;v>=0;v--)(g=n[v])&&(h=(s<3?g(h):s>3?g(t,e,h):g(t,e))||h);return s>3&&h&&Object.defineProperty(t,e,h),h},d,f;(function(n){n.CHANGE="change",n.INPUT="input",n.SUGGESTION_ITEM_SELECT="suggestion-item-select"})(f||(f={}));var $;(function(n){n.ACTION_ENTER="enter",n.ACTION_USER_INPUT="input"})($||($={}));let a=d=class extends j{constructor(){super(),this.hasSuggestionItemSelected=!1,this.valueBeforeItemSelection="",this.valueBeforeItemPreview="",this.suggestionSelectionCanceled=!1,this.previousValue="",this.firstRendering=!0,this.typedInValue="",this.lastConfirmedValue="",this.isTyping=!1,this.suggestionsTexts=[],this._handleResizeBound=this._handleResize.bind(this),this._keepInnerValue=!1,this._focusedAfterClear=!1}onEnterDOM(){E.register(this,this._handleResizeBound),ht(this,this._updateAssociatedLabelsTexts.bind(this))}onExitDOM(){E.deregister(this,this._handleResizeBound),dt(this)}onBeforeRendering(){this._keepInnerValue||(this._innerValue=this.value),this.showSuggestions&&(this.enableSuggestions(),this.suggestionsTexts=this.Suggestions.defaultSlotProperties(this.typedInValue)),this.effectiveShowClearIcon=this.showClearIcon&&!!this.value&&!this.readonly&&!this.disabled,this.style.setProperty("--_ui5-input-icons-count",`${this.iconsCount}`),this.FormSupport=w("FormSupport");const t=!!this.suggestionItems.length,e=!!this.value,i=this.shadowRoot.querySelector("input")===q();this._isPhone?this.open=this.openOnMobile:this._forceOpen?this.open=!0:this.open=e&&t&&i&&this.isTyping,this.FormSupport?this.FormSupport.syncNativeHiddenInput(this):this.name&&console.warn('In order for the "name" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";');const s=this.value,h=this.getInputDOMRefSync();if(!h||!s)return;const g=h.selectionEnd-h.selectionStart;if(this._shouldAutocomplete&&!tt()&&!g&&!this._isKeyNavigation){const v=this._getFirstMatchingItem(s);v&&this._handleTypeAhead(v)}}async onAfterRendering(){const t=this.getInputDOMRefSync();this.Suggestions&&this.showSuggestions&&(this.Suggestions.toggle(this.open,{preventFocusRestore:!0}),this._listWidth=await this.Suggestions._getListWidth()),this.shouldDisplayOnlyValueStateMessage?this.openPopover():this.closePopover(),this._performTextSelection&&(t.value!==this._innerValue&&(t.value=this._innerValue),this.typedInValue.length&&this.value.length&&t.setSelectionRange(this.typedInValue.length,this.value.length)),this._performTextSelection=!1}_onkeydown(t){if(this._isKeyNavigation=!0,this._shouldAutocomplete=!this.noTypeahead&&!(et(t)||P(t)||A(t)),nt(t))return this._handleUp(t);if(it(t))return this._handleDown(t);if(ot(t))return this._handleSpace(t);if(st(t))return this._handleTab();if(at(t))return this._handleEnter(t);if(rt(t))return this._handlePageUp(t);if(ut(t))return this._handlePageDown(t);if(lt(t))return this._handleHome(t);if(ct(t))return this._handleEnd(t);if(A(t))return this._handleEscape();this.showSuggestions&&this._clearPopoverFocusAndSelection(),this._keyDown=!0,this._isKeyNavigation=!1}_onkeyup(t){P(t)&&(this.value=t.target.value),this._keyDown=!1}_handleUp(t){this.Suggestions&&this.Suggestions.isOpened()&&this.Suggestions.onUp(t)}_handleDown(t){this.Suggestions&&this.Suggestions.isOpened()&&this.Suggestions.onDown(t)}_handleSpace(t){this.Suggestions&&this.Suggestions.onSpace(t)}_handleTab(){this.Suggestions&&this.previousValue!==this.value&&this.Suggestions.onTab()}_handleEnter(t){const e=!!(this.Suggestions&&this.Suggestions.onEnter(t)),i=this.getInputDOMRefSync(),s=this.suggestionItems.find(h=>h.text&&h.text===this.value||h.textContent===this.value);if(s){const h=s.text?s.text:s.textContent||"";i.setSelectionRange(h.length,h.length),e||(this.selectSuggestion(s,!0),this.open=!1)}if(this._isPhone&&!this.suggestionItems.length&&!this.isTypeNumber&&i.setSelectionRange(this.value.length,this.value.length),!e){this.lastConfirmedValue=this.value,this.FormSupport&&this.FormSupport.triggerFormSubmit(this);return}this.focused=!0}_handlePageUp(t){this._isSuggestionsFocused?this.Suggestions.onPageUp(t):t.preventDefault()}_handlePageDown(t){this._isSuggestionsFocused?this.Suggestions.onPageDown(t):t.preventDefault()}_handleHome(t){this._isSuggestionsFocused&&this.Suggestions.onHome(t)}_handleEnd(t){this._isSuggestionsFocused&&this.Suggestions.onEnd(t)}_handleEscape(){const e=this.showSuggestions&&!!this.Suggestions&&this.open,i=this.getInputDOMRefSync(),s=i.selectionEnd-i.selectionStart>0;if(this.isTyping=!1,!e){this.value=this.lastConfirmedValue?this.lastConfirmedValue:this.previousValue;return}if(e&&this.Suggestions._isItemOnTarget()){this.value=this.typedInValue||this.valueBeforeItemPreview,this.suggestionSelectionCanceled=!0,this.focused=!0;return}s&&(this.value=this.typedInValue),this._isValueStateFocused&&(this._isValueStateFocused=!1,this.focused=!0)}async _onfocusin(t){await this.getInputDOMRef(),this.focused=!0,this._focusedAfterClear||(this.previousValue=this.value),this.valueBeforeItemPreview=this.value,this._inputIconFocused=!!t.target&&t.target===this.querySelector("[ui5-icon]"),this._focusedAfterClear=!1}innerFocusIn(){}_onfocusout(t){const e=t.relatedTarget,i=this.Suggestions&&e&&e.shadowRoot&&e.shadowRoot.contains(this.Suggestions.responsivePopover),s=e&&e.shadowRoot&&e.shadowRoot.querySelector(".ui5-valuestatemessage-root");if(this._keepInnerValue=!1,this.showClearIcon&&!this.effectiveShowClearIcon&&(this._clearIconClicked=!1,this._handleChange()),i||s){t.stopImmediatePropagation();return}e&&e.classList.contains(this._id)||(this.open=!1,this._clearPopoverFocusAndSelection(),this._clearIconClicked||(this.previousValue=""),this.lastConfirmedValue="",this.focused=!1,this.isTyping=!1,this._forceOpen=!1)}_clearPopoverFocusAndSelection(){!this.showSuggestions||!this.Suggestions||(this._isValueStateFocused=!1,this.hasSuggestionItemSelected=!1,this.Suggestions._deselectItems(),this.Suggestions._clearItemFocus())}_click(){m()&&!this.readonly&&this.Suggestions&&(this.blur(),this.openOnMobile=!0)}_handleChange(){if(this._clearIconClicked){this._clearIconClicked=!1;return}this.previousValue!==this.getInputDOMRefSync().value&&(this.fireEvent(f.CHANGE),this.previousValue=this.value,this.typedInValue=this.value)}_clear(){this.value="",this.fireEvent(f.INPUT),this._isPhone||(this.focus(),this._focusedAfterClear=!0)}_iconMouseDown(){this._clearIconClicked=!0}_scroll(t){this.fireEvent("suggestion-scroll",{scrollTop:t.detail.scrollTop,scrollContainer:t.detail.targetRef})}_handleInput(t){const e=this.getInputDOMRefSync(),i=this.value&&this.isTypeNumber&&!e.value,s=t.inputType||t.detail&&t.detail.inputType||"";this._keepInnerValue=!1;const h=["deleteWordBackward","deleteWordForward","deleteSoftLineBackward","deleteSoftLineForward","deleteEntireSoftLine","deleteHardLineBackward","deleteHardLineForward","deleteByDrag","deleteByCut","deleteContent","deleteContentBackward","deleteContentForward","historyUndo"];if(this._shouldAutocomplete=!h.includes(s)&&!this.noTypeahead,this.suggestionSelectionCanceled=!1,t instanceof InputEvent){const g=this.isTypeNumber&&(t.inputType==="deleteContentForward"||t.inputType==="deleteContentBackward")&&!t.target.value.includes(".")&&this.value.includes("."),v=i&&t.data==="e",G=i&&this.value.startsWith("-")&&this.value.length===2&&(t.inputType==="deleteContentForward"||t.inputType==="deleteContentBackward");(g||v||G)&&(this.value=t.target.value,this._keepInnerValue=!0)}t.target===e&&(this.focused=!0,t.stopImmediatePropagation()),this.fireEventByAction($.ACTION_ENTER,t),this.hasSuggestionItemSelected=!1,this._isValueStateFocused=!1,this.Suggestions&&this.Suggestions.updateSelectedItemPosition(-1),this.isTyping=!0}_startsWithMatchingItems(t){const e=this.suggestionItems[0].text?"text":"textContent";return gt(t,this.suggestionItems,e)}_getFirstMatchingItem(t){if(!this.suggestionItems.length)return;const e=this._startsWithMatchingItems(t).filter(i=>!i.groupItem);if(e.length)return e[0]}_handleTypeAhead(t){const e=t.text?t.text:t.textContent||"";this._innerValue=e,this.value=e,this._performTextSelection=!0,this._shouldAutocomplete=!1}_handleResize(){this._inputWidth=this.offsetWidth}_updateAssociatedLabelsTexts(){this._associatedLabelsTexts=pt(this),this._accessibleLabelsRefTexts=_t(this)}_closeRespPopover(){this.Suggestions.close(!0)}async _afterOpenPopover(){m()&&(await this.getInputDOMRef()).focus()}_afterClosePopover(){this.announceSelectedItem(),m()&&(this.blur(),this.focused=!1),this.openOnMobile=!1,this.open=!1,this._forceOpen=!1,this.hasSuggestionItemSelected&&this.focus()}isValueStateOpened(){return!!this._isPopoverOpen}async openPopover(){const t=await this._getPopover();t&&(this._isPopoverOpen=!0,t.showAt(this))}async closePopover(){const t=await this._getPopover();t&&t.close()}async _getPopover(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-popover]")}openPicker(){!this.suggestionItems.length||this.disabled||this.readonly||(this._forceOpen=!0)}enableSuggestions(){if(this.Suggestions)return;const t=w("InputSuggestions");if(t)this.Suggestions=new t(this,"suggestionItems",!0,!1);else throw new Error('You have to import "@ui5/webcomponents/dist/features/InputSuggestions.js" module to use ui5-input suggestions')}selectSuggestion(t,e){if(t.groupItem)return;const i=this.typedInValue||this.value,s=t.text||t.textContent||"",h=e?this.valueBeforeItemSelection!==s:i!==s;this.hasSuggestionItemSelected=!0,h&&(this.value=s,this.valueBeforeItemSelection=s,this.lastConfirmedValue=s,this._performTextSelection=!0,this.hasSuggestionItemSelected=!0,this.value=s,this.fireEvent(f.CHANGE),m()&&this.fireEvent(f.INPUT),this.typedInValue=this.value,this.previousValue=this.value),this.valueBeforeItemPreview="",this.suggestionSelectionCanceled=!1,this.fireEvent(f.SUGGESTION_ITEM_SELECT,{item:t}),this.isTyping=!1,this.openOnMobile=!1,this._forceOpen=!1}previewSuggestion(t){this.valueBeforeItemSelection=this.value,this.updateValueOnPreview(t),this.announceSelectedItem(),this._previewItem=t}updateValueOnPreview(t){const i=t.type==="Inactive"||t.groupItem?this.valueBeforeItemPreview:t.effectiveTitle||t.textContent||"";this.value=i,this._performTextSelection=!0}get previewItem(){return this._previewItem?this.getSuggestionByListItem(this._previewItem):null}async fireEventByAction(t,e){if(this.disabled||this.readonly)return;const i=await this.getInputValue(),s=t===$.ACTION_ENTER;this.value=i,this.typedInValue=i,this.valueBeforeItemPreview=i,s&&(this.fireEvent(f.INPUT,{inputType:e.inputType}),this.fireEvent("value-changed"))}async getInputValue(){return this.getDomRef()?(await this.getInputDOMRef()).value:""}async getInputDOMRef(){return m()&&this.Suggestions?(await this.Suggestions._getSuggestionPopover(),this.Suggestions.responsivePopover.querySelector(".ui5-input-inner-phone")):this.nativeInput}getInputDOMRefSync(){return m()&&this.Suggestions&&this.Suggestions.responsivePopover?this.Suggestions.responsivePopover.querySelector(".ui5-input-inner-phone").shadowRoot.querySelector("input"):this.nativeInput}get nativeInput(){const t=this.getDomRef();return t?t.querySelector("input"):null}get nativeInputWidth(){return this.nativeInput?this.nativeInput.offsetWidth:0}getLabelableElementId(){return this.getInputId()}getSuggestionByListItem(t){const e=parseInt(t.getAttribute("data-ui5-key"));return this.suggestionItems[e]}isSuggestionsScrollable(){return this.Suggestions?this.Suggestions._isScrollable():Promise.resolve(!1)}getInputId(){return`${this._id}-inner`}onItemMouseOver(t){const e=t.target,i=this.getSuggestionByListItem(e);i&&i.fireEvent("mouseover",{item:i,targetRef:e})}onItemMouseOut(t){const e=t.target,i=this.getSuggestionByListItem(e);i&&i.fireEvent("mouseout",{item:i,targetRef:e})}onItemMouseDown(t){t.preventDefault()}onItemSelected(t,e){this.selectSuggestion(t,e)}onItemPreviewed(t){this.previewSuggestion(t),this.fireEvent("suggestion-item-preview",{item:this.getSuggestionByListItem(t),targetRef:t})}get valueStateTypeMappings(){return{Success:d.i18nBundle.getText(bt),Information:d.i18nBundle.getText(mt),Error:d.i18nBundle.getText(St),Warning:d.i18nBundle.getText(yt)}}valueStateTextMappings(){return{Success:d.i18nBundle.getText(It),Information:d.i18nBundle.getText(wt),Error:d.i18nBundle.getText($t),Warning:d.i18nBundle.getText(Tt)}}announceSelectedItem(){const t=this.shadowRoot.querySelector(`#${this._id}-selectionText`);this.Suggestions&&this.Suggestions._isItemOnTarget()?t.textContent=this.itemSelectionAnnounce:t.textContent=""}get _readonly(){return this.readonly&&!this.disabled}get _headerTitleText(){return d.i18nBundle.getText(xt)}get inputType(){return this.type.toLowerCase()}get isTypeNumber(){return this.type===k.Number}get suggestionsTextId(){return this.showSuggestions?`${this._id}-suggestionsText`:""}get valueStateTextId(){return this.hasValueState?`${this._id}-valueStateDesc`:""}get accInfo(){const t=this.showSuggestions?"true":void 0,e=this.showSuggestions?"list":void 0,i=this._inputAccInfo.ariaDescribedBy?`${this.suggestionsTextId} ${this.valueStateTextId} ${this._inputAccInfo.ariaDescribedBy}`.trim():`${this.suggestionsTextId} ${this.valueStateTextId}`.trim();return{input:{ariaRoledescription:this._inputAccInfo&&(this._inputAccInfo.ariaRoledescription||void 0),ariaDescribedBy:i||void 0,ariaInvalid:this.valueState===p.Error?"true":void 0,ariaHasPopup:this._inputAccInfo.ariaHasPopup?this._inputAccInfo.ariaHasPopup:t,ariaAutoComplete:this._inputAccInfo.ariaAutoComplete?this._inputAccInfo.ariaAutoComplete:e,role:this._inputAccInfo&&this._inputAccInfo.role,ariaControls:this._inputAccInfo&&this._inputAccInfo.ariaControls,ariaExpanded:this._inputAccInfo&&this._inputAccInfo.ariaExpanded,ariaDescription:this._inputAccInfo&&this._inputAccInfo.ariaDescription,ariaLabel:this._inputAccInfo&&this._inputAccInfo.ariaLabel||this._accessibleLabelsRefTexts||this.accessibleName||this._associatedLabelsTexts||void 0}}}get nativeInputAttributes(){return{min:this.isTypeNumber?this._nativeInputAttributes.min:void 0,max:this.isTypeNumber?this._nativeInputAttributes.max:void 0,step:this.isTypeNumber?this._nativeInputAttributes.step||"any":void 0}}get ariaValueStateHiddenText(){if(!this.hasValueState)return;const t=this.valueState!==p.None?this.valueStateTypeMappings[this.valueState]:"";return this.shouldDisplayDefaultValueStateMessage?this.valueStateText?`${t} ${this.valueStateText}`:t:`${t}`.concat(" ",this.valueStateMessageText.map(e=>e.textContent).join(" "))}get itemSelectionAnnounce(){return this.Suggestions?this.Suggestions.itemSelectionAnnounce:""}get iconsCount(){const t=this.icon?this.icon.length:0,e=Number(this.effectiveShowClearIcon)??0;return t+e}get classes(){return{popover:{"ui5-suggestions-popover":!this._isPhone&&this.showSuggestions,"ui5-suggestions-popover-with-value-state-header":!this._isPhone&&this.showSuggestions&&this.hasValueStateMessage},popoverValueState:{"ui5-valuestatemessage-root":!0,"ui5-valuestatemessage-header":!0,"ui5-valuestatemessage--success":this.valueState===p.Success,"ui5-valuestatemessage--error":this.valueState===p.Error,"ui5-valuestatemessage--warning":this.valueState===p.Warning,"ui5-valuestatemessage--information":this.valueState===p.Information}}}get styles(){const t=parseInt(getComputedStyle(document.documentElement).fontSize);return{popoverHeader:{"max-width":this._inputWidth?`${this._inputWidth}px`:""},suggestionPopoverHeader:{display:this._listWidth===0?"none":"inline-block",width:this._listWidth?`${this._listWidth}px`:""},suggestionsPopover:{"min-width":this._inputWidth?`${this._inputWidth}px`:"","max-width":this._inputWidth&&this._inputWidth/t>40?`${this._inputWidth}px`:"40rem"},innerInput:{padding:""}}}get suggestionSeparators(){return"None"}get valueStateMessageText(){return this.getSlottedNodes("valueStateMessage").map(t=>t.cloneNode(!0))}get shouldDisplayOnlyValueStateMessage(){return this.hasValueStateMessage&&!this.readonly&&!this.open&&this.focused}get shouldDisplayDefaultValueStateMessage(){return!this.valueStateMessage.length&&this.hasValueStateMessage}get hasValueState(){return this.valueState!==p.None}get hasValueStateMessage(){return this.hasValueState&&this.valueState!==p.Success&&(!this._inputIconFocused||!!(this._isPhone&&this.Suggestions))}get valueStateText(){return this.valueState!==p.None?this.valueStateTextMappings()[this.valueState]:void 0}get suggestionsText(){return d.i18nBundle.getText(Ct)}get availableSuggestionsCount(){if(this.showSuggestions&&(this.value||this.Suggestions.isOpened()))switch(this.suggestionsTexts.length){case 0:return d.i18nBundle.getText(Pt);case 1:return d.i18nBundle.getText(Et);default:return d.i18nBundle.getText(kt,this.suggestionsTexts.length)}}get step(){return this.isTypeNumber?"any":void 0}get _isPhone(){return m()}get _isSuggestionsFocused(){return!this.focused&&this.Suggestions&&this.Suggestions.isOpened()}get _placeholder(){return this.placeholder}get _valueStateInputIcon(){const t={Error:'<path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20ZM7.70711 13.7071C7.31658 14.0976 6.68342 14.0976 6.29289 13.7071C5.90237 13.3166 5.90237 12.6834 6.29289 12.2929L8.58579 10L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L10 8.58579L12.2929 6.29289C12.6834 5.90237 13.3166 5.90237 13.7071 6.29289C14.0976 6.68342 14.0976 7.31658 13.7071 7.70711L11.4142 10L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L10 11.4142L7.70711 13.7071Z" fill="#EE3939"/>',Warning:'<path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M11.8619 0.49298C11.6823 0.187541 11.3544 0 11 0C10.6456 0 10.3177 0.187541 10.1381 0.49298L0.138066 17.493C-0.0438112 17.8022 -0.0461447 18.1851 0.13195 18.4965C0.310046 18.8079 0.641283 19 1 19H21C21.3587 19 21.69 18.8079 21.868 18.4965C22.0461 18.1851 22.0438 17.8022 21.8619 17.493L11.8619 0.49298ZM11 6C11.5523 6 12 6.44772 12 7V10C12 10.5523 11.5523 11 11 11C10.4477 11 10 10.5523 10 10V7C10 6.44772 10.4477 6 11 6ZM11 16C11.8284 16 12.5 15.3284 12.5 14.5C12.5 13.6716 11.8284 13 11 13C10.1716 13 9.5 13.6716 9.5 14.5C9.5 15.3284 10.1716 16 11 16Z" fill="#F58B00"/>',Success:'<path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 15.5228 4.47715 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10ZM14.7071 6.29289C14.3166 5.90237 13.6834 5.90237 13.2929 6.29289L8 11.5858L6.70711 10.2929C6.31658 9.90237 5.68342 9.90237 5.29289 10.2929C4.90237 10.6834 4.90237 11.3166 5.29289 11.7071L7.29289 13.7071C7.68342 14.0976 8.31658 14.0976 8.70711 13.7071L14.7071 7.70711C15.0976 7.31658 15.0976 6.68342 14.7071 6.29289Z" fill="#36A41D"/>',Information:'<path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M3 0C1.34315 0 0 1.34315 0 3V15C0 16.6569 1.34315 18 3 18H15C16.6569 18 18 16.6569 18 15V3C18 1.34315 16.6569 0 15 0H3ZM9 6.5C9.82843 6.5 10.5 5.82843 10.5 5C10.5 4.17157 9.82843 3.5 9 3.5C8.17157 3.5 7.5 4.17157 7.5 5C7.5 5.82843 8.17157 6.5 9 6.5ZM9 8.5C9.55228 8.5 10 8.94772 10 9.5V13.5C10 14.0523 9.55228 14.5 9 14.5C8.44771 14.5 8 14.0523 8 13.5V9.5C8 8.94772 8.44771 8.5 9 8.5Z" fill="#1B90FF"/>'};return this.valueState!==p.None?`
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 20 20" fill="none">
				${t[this.valueState]};
			</svg>
			`:""}get _valueStatePopoverHorizontalAlign(){return this.effectiveDir!=="rtl"?"Left":"Right"}get _valueStateMessageInputIcon(){const t={Error:"error",Warning:"alert",Success:"sys-enter-2",Information:"information"};return this.valueState!==p.None?t[this.valueState]:""}getCaretPosition(){return Bt(this.nativeInput)}setCaretPosition(t){Mt(this.nativeInput,t)}removeFractionalPart(t){return t.includes(".")?t.slice(0,t.indexOf(".")):t.includes(",")?t.slice(0,t.indexOf(",")):t}static async onDefine(){const t=w("InputSuggestions");[d.i18nBundle]=await Promise.all([Z("@ui5/webcomponents"),t?t.init():Promise.resolve()])}};u([l({type:Boolean})],a.prototype,"disabled",void 0);u([l({type:Boolean})],a.prototype,"highlight",void 0);u([l()],a.prototype,"placeholder",void 0);u([l({type:Boolean})],a.prototype,"readonly",void 0);u([l({type:Boolean})],a.prototype,"required",void 0);u([l({type:Boolean})],a.prototype,"noTypeahead",void 0);u([l({type:k,defaultValue:k.Text})],a.prototype,"type",void 0);u([l()],a.prototype,"value",void 0);u([l({noAttribute:!0})],a.prototype,"_innerValue",void 0);u([l({type:p,defaultValue:p.None})],a.prototype,"valueState",void 0);u([l()],a.prototype,"name",void 0);u([l({type:Boolean})],a.prototype,"showSuggestions",void 0);u([l({validator:x})],a.prototype,"maxlength",void 0);u([l()],a.prototype,"accessibleName",void 0);u([l({defaultValue:""})],a.prototype,"accessibleNameRef",void 0);u([l({type:Boolean})],a.prototype,"showClearIcon",void 0);u([l({type:Boolean})],a.prototype,"effectiveShowClearIcon",void 0);u([l({type:Boolean})],a.prototype,"focused",void 0);u([l({type:Boolean})],a.prototype,"openOnMobile",void 0);u([l({type:Boolean})],a.prototype,"open",void 0);u([l({type:Boolean})],a.prototype,"_forceOpen",void 0);u([l({type:Boolean})],a.prototype,"_isValueStateFocused",void 0);u([l({type:Object,noAttribute:!0})],a.prototype,"_inputAccInfo",void 0);u([l({type:Object,noAttribute:!0})],a.prototype,"_nativeInputAttributes",void 0);u([l({validator:x})],a.prototype,"_inputWidth",void 0);u([l({validator:x})],a.prototype,"_listWidth",void 0);u([l({type:Boolean,noAttribute:!0})],a.prototype,"_isPopoverOpen",void 0);u([l({type:Boolean,noAttribute:!0})],a.prototype,"_inputIconFocused",void 0);u([l({type:String,noAttribute:!0,defaultValue:void 0})],a.prototype,"_associatedLabelsTexts",void 0);u([l({type:String,noAttribute:!0,defaultValue:void 0})],a.prototype,"_accessibleLabelsRefTexts",void 0);u([T({type:HTMLElement,default:!0})],a.prototype,"suggestionItems",void 0);u([T()],a.prototype,"icon",void 0);u([T()],a.prototype,"formSupport",void 0);u([T()],a.prototype,"valueStateMessage",void 0);a=d=u([X({tag:"ui5-input",languageAware:!0,renderer:J,template:Ot,staticAreaTemplate:Wt,styles:Kt,staticAreaStyles:[At,Vt,vt],get dependencies(){const n=w("InputSuggestions");return[ft,Q].concat(n?n.dependencies:[])}}),y("change"),y("input"),y("suggestion-item-select",{detail:{item:{type:HTMLElement}}}),y("suggestion-item-preview",{detail:{item:{type:HTMLElement},targetRef:{type:HTMLElement}}}),y("suggestion-scroll",{detail:{scrollTop:{type:x},scrollContainer:{type:HTMLElement}}})],a);a.define();const Xt=a,me=Object.freeze(Object.defineProperty({__proto__:null,default:Xt},Symbol.toStringTag,{value:"Module"}));export{k as I,Xt as a,me as b};
//# sourceMappingURL=Input-91cde929.js.map
