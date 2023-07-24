import{b as m}from"./Device-6afa24d0.js";import{r as g,U as y,l as w}from"./UI5Element-11982a12.js";import{s as $,a as S,b as u,l as o,d as b,p as r,c as T,f as B}from"./withWebComponent-99b005ba.js";import{s as C}from"./slot-76e48863.js";import{e as E,a as N}from"./Icon-31253496.js";import{V as d}from"./ValueState-2c5e5904.js";import{g as A}from"./CustomElementsScopeUtils-137da8c8.js";import{g as I}from"./AriaLabelHelper-43a261ec.js";import{k as p,l as F}from"./Icons-234bf59e.js";import"./accept-6c83709e.js";import R from"./Label-62dd8470.js";import{W as x}from"./WrappingType-b81e595a.js";import{V as L,a as D,b as V}from"./i18n-defaults-1a83921e.js";import{o as W}from"./class-map-b4d8f3b0.js";import"./utils-626dc1bf.js";import"./index-f1f2c4b1.js";import"./jsx-runtime-d079401a.js";import"./useIsomorphicLayoutEffect-c49de97d.js";g("@ui5/webcomponents-theming","sap_fiori_3",async()=>$);g("@ui5/webcomponents","sap_fiori_3",async()=>S);const z={packageName:"@ui5/webcomponents",fileName:"themes/CheckBox.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}
:host {
	-webkit-tap-highlight-color: rgba(0,0,0,0);
}
:host(:not([hidden])) {
	display: inline-block;
}
:host {
	overflow: hidden;
	max-width: 100%;
	outline: none;
	border-radius: var(--_ui5_checkbox_border_radius);
	transition: var(--_ui5_checkbox_transition);
	cursor: pointer;
}
/* disabled */
:host([disabled]) {
	cursor: default;
}
:host([disabled]) .ui5-checkbox-root {
	opacity: var(--_ui5_checkbox_disabled_opacity);
}
:host([disabled]) .ui5-checkbox-inner {
	border-color: var(--_ui5_checkbox_inner_disabled_border_color);
}
:host([disabled]) .ui5-checkbox-label {
	color: var(--_ui5_checkbox_disabled_label_color);
}
/* readonly */
:host([readonly]:not([value-state="Warning"]):not([value-state="Error"])) .ui5-checkbox-inner {
	background: var(--sapField_ReadOnly_Background);
	border: var(--_ui5_checkbox_inner_readonly_border);
	color: var(--sapField_TextColor);
}
/* wrap */
:host([wrapping-type="Normal"][text]) .ui5-checkbox-root {
	min-height: auto;
	box-sizing: border-box;
	align-items: flex-start;
	padding-top: var(--_ui5_checkbox_root_side_padding);
	padding-bottom: var(--_ui5_checkbox_root_side_padding);
}
:host([wrapping-type="Normal"][text]) .ui5-checkbox-root .ui5-checkbox-inner,
:host([wrapping-type="Normal"][text]) .ui5-checkbox-root .ui5-checkbox-label {
	margin-top: var(--_ui5_checkbox_wrapped_content_margin_top);
}
:host([wrapping-type="Normal"][text]) .ui5-checkbox-root .ui5-checkbox-label {
	overflow-wrap: break-word;
	align-self: center;
}
:host([wrapping-type="Normal"]) .ui5-checkbox-root:focus::before {
	bottom: var(--_ui5_checkbox_wrapped_focus_left_top_bottom_position);
}
/* value states */
:host([value-state="Error"]) .ui5-checkbox-inner,
:host([value-state="Error"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner {
	background: var(--sapField_InvalidBackground);
	border: var(--_ui5_checkbox_inner_error_border);
	color: var(--sapField_InvalidColor);
}
:host([value-state="Error"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner {
	background: var(--_ui5_checkbox_inner_error_background_hover);
}
:host([value-state="Warning"]) .ui5-checkbox-inner,
:host([value-state="Warning"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner {
	background: var(--sapField_WarningBackground);
	border: var(--_ui5_checkbox_inner_warning_border);
	color: var(--_ui5_checkbox_inner_warning_color);
}
:host([value-state="Warning"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner {
	background: var(--_ui5_checkbox_inner_warning_background_hover);
}
:host([value-state="Information"]) .ui5-checkbox-inner,
:host([value-state="Information"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner {
	background: var(--sapField_InformationBackground);
	border: var(--_ui5_checkbox_inner_information_border);
	color: var(--_ui5_checkbox_inner_information_color);
}
:host([value-state="Information"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner {
	background: var(--_ui5_checkbox_inner_information_background_hover);
}
:host([value-state="Success"]) .ui5-checkbox-inner,
:host([value-state="Success"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner  {
	background: var(--sapField_SuccessBackground);
	border: var(--_ui5_checkbox_inner_success_border);
	color: var(--sapField_SuccessColor);
}
:host([value-state="Success"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner  {
	background: var(--_ui5_checkbox_inner_success_background_hover);
}
:host([value-state="Warning"]) .ui5-checkbox-icon,
:host([value-state="Warning"][indeterminate]) .ui5-checkbox-inner::after {
	color: var(--_ui5_checkbox_checkmark_warning_color);
}
:host([text]) .ui5-checkbox-root {
	padding-inline-end: var(--_ui5_checkbox_right_focus_distance);
}
:host([text]) .ui5-checkbox-root:focus::before {
	inset-inline-end: 0;
}
.ui5-checkbox-root {
	position: relative;
	display: inline-flex;
	align-items: center;
	width: 100%;
	min-height: var(--_ui5_checkbox_width_height);
	min-width: var(--_ui5_checkbox_width_height);
	padding: 0 var(--_ui5_checkbox_wrapper_padding);
	box-sizing: border-box;
	outline: none;
	transition: var(--_ui5_checkbox_transition);
	border: var(--_ui5_checkbox_default_focus_border);
	border-radius: var(--_ui5_checkbox_border_radius);
	box-sizing: border-box;
}
/* focused */
.ui5-checkbox-root:focus::before {
	display: var(--_ui5_checkbox_focus_outline_display);
	content: "";
	position: absolute;
	inset-inline: var(--_ui5_checkbox_focus_position);
	inset-block: var(--_ui5_checkbox_focus_position);
	border: var(--_ui5_checkbox_focus_outline);
	border-radius: var(--_ui5_checkbox_focus_border_radius);
}
:host .ui5-checkbox-root:focus {
	border: var(--_ui5_checkbox_focus_border);
	border-radius: 0.5rem;
}
/* hover */
:host(:hover:not([disabled])) {
	background: var(--_ui5_checkbox_outer_hover_background);
}
.ui5-checkbox--hoverable .ui5-checkbox-label:hover {
	color: var(--_ui5_checkbox_label_color);
}
/* hover, not active, not checked */
:host(:not([active]):not([checked]):not([value-state])) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner,
:host(:not([active]):not([checked])[value-state="None"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner {
	background: var(--_ui5_checkbox_hover_background);
	border-color: var(--_ui5_checkbox_inner_hover_border_color);
}
/* hover, not active, checked */
:host(:not([active])[checked]:not([value-state])) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner,
:host(:not([active])[checked][value-state="None"]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner {
	background: var(--_ui5_checkbox_hover_background);
	border-color: var(--_ui5_checkbox_inner_hover_checked_border_color);
}
/* checked */
:host([checked]:not([value-state])) .ui5-checkbox-inner,
:host([checked][value-state="None"]) .ui5-checkbox-inner {
	border-color: var(--_ui5_checkbox_inner_selected_border_color);
}
/* active, not checked */
:host([active]:not([checked]):not([value-state]):not([disabled])) .ui5-checkbox-inner,
:host([active]:not([checked])[value-state="None"]:not([disabled])) .ui5-checkbox-inner {
	border-color: var(--_ui5_checkbox_inner_active_border_color);
	background-color: var(--_ui5_checkbox_active_background);
}
/* active, checked */
:host([active][checked]:not([value-state]):not([disabled])) .ui5-checkbox-inner,
:host([active][checked][value-state="None"]:not([disabled])) .ui5-checkbox-inner {
	border-color: var(--_ui5_checkbox_inner_selected_border_color);
	background-color: var(--_ui5_checkbox_active_background);
}
.ui5-checkbox-inner {
	min-width: var(--_ui5_checkbox_inner_width_height);
	max-width: var(--_ui5_checkbox_inner_width_height);
	height: var(--_ui5_checkbox_inner_width_height);
	max-height: var(--_ui5_checkbox_inner_width_height);
	border: var(--_ui5_checkbox_inner_border);
	border-radius: var(--_ui5_checkbox_inner_border_radius);
	background: var(--_ui5_checkbox_inner_background);
	color: var(--_ui5_checkbox_checkmark_color);
	box-sizing: border-box;
	position: relative;
	cursor: inherit;
}
:host([indeterminate][checked]) .ui5-checkbox-inner::after {
	content: "";
	background-color: currentColor;
	position: absolute;
	left:50%;
	top:50%;
	transform: translate(-50%, -50%);
	width: var(--_ui5_checkbox_partially_icon_size);
	height: var(--_ui5_checkbox_partially_icon_size);
}
.ui5-checkbox-inner input {
	-webkit-appearance: none;
	visibility: hidden;
	width: 0;
	left: 0;
	position: absolute;
	font-size: inherit;
}
.ui5-checkbox-root .ui5-checkbox-label {
	margin-inline-start: var(--_ui5_checkbox_label_offset);
	cursor: inherit;
	text-overflow: ellipsis;
	overflow: hidden;
	pointer-events: none;
	user-select: none;
	-webkit-user-select: none;
	color: var(--_ui5_checkbox_label_color);
}
.ui5-checkbox-icon {
	width: var(--_ui5_checkbox_icon_size);
	height: var(--_ui5_checkbox_icon_size);
	color: currentColor;
	cursor: inherit;
	position: absolute;
	left:50%;
	top:50%;
	transform: translate(-50%, -50%);
}


`};function U(a,e,t){return u`<div class="ui5-checkbox-root ${W(this.classes.main)}" role="checkbox" part="root" aria-checked="${o(this.effectiveAriaChecked)}" aria-readonly="${o(this.ariaReadonly)}" aria-disabled="${o(this.effectiveAriaDisabled)}" aria-label="${o(this.ariaLabelText)}" aria-labelledby="${o(this.ariaLabelledBy)}" aria-describedby="${o(this.ariaDescribedBy)}" aria-required="${o(this.required)}" tabindex="${o(this.effectiveTabIndex)}" @mousedown="${this._onmousedown}" @mouseup="${this._onmouseup}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click="${this._onclick}" @focusout="${this._onfocusout}"><div id="${o(this._id)}-CbBg" class="ui5-checkbox-inner">${this.isCompletelyChecked?O.call(this,a,e,t):void 0}<input id="${o(this._id)}-CB" type='checkbox' ?checked="${this.checked}" ?readonly="${this.readonly}" ?disabled="${this.disabled}" tabindex="-1" aria-hidden="true" data-sap-no-tab-ref /></div>${this.text?P.call(this,a,e,t):void 0}${this.hasValueState?j.call(this,a,e,t):void 0}<slot name="formSupport"></slot></div>`}function O(a,e,t){return t?u`<${b("ui5-icon",e,t)} aria-hidden="true" name="accept" class="ui5-checkbox-icon"></${b("ui5-icon",e,t)}>`:u`<ui5-icon aria-hidden="true" name="accept" class="ui5-checkbox-icon"></ui5-icon>`}function P(a,e,t){return t?u`<${b("ui5-label",e,t)} id="${o(this._id)}-label" class="ui5-checkbox-label" wrapping-type="${o(this.wrappingType)}">${o(this.text)}</${b("ui5-label",e,t)}>`:u`<ui5-label id="${o(this._id)}-label" class="ui5-checkbox-label" wrapping-type="${o(this.wrappingType)}">${o(this.text)}</ui5-label>`}function j(a,e,t){return u`<span id="${o(this._id)}-descr" class="ui5-hidden-text">${o(this.valueStateText)}</span>`}var i=globalThis&&globalThis.__decorate||function(a,e,t,c){var l=arguments.length,s=l<3?e:c===null?c=Object.getOwnPropertyDescriptor(e,t):c,_;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(a,e,t,c);else for(var k=a.length-1;k>=0;k--)(_=a[k])&&(s=(l<3?_(s):l>3?_(e,t,s):_(e,t))||s);return l>3&&s&&Object.defineProperty(e,t,s),s},h;let f=!1,v,n=h=class extends y{constructor(){super(),this._deactivate=()=>{v&&(v.active=!1)},f||(document.addEventListener("mouseup",this._deactivate),f=!0)}onBeforeRendering(){this._enableFormSupport()}_enableFormSupport(){const e=A("FormSupport");e?e.syncNativeHiddenInput(this,(t,c)=>{c.disabled=t.disabled||!t.checked,c.value=t.checked?"on":""}):this.name&&console.warn('In order for the "name" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";')}_onclick(){this.toggle()}_onmousedown(){this.readonly||this.disabled||(this.active=!0,v=this)}_onmouseup(){this.active=!1}_onfocusout(){this.active=!1}_onkeydown(e){p(e)&&(e.preventDefault(),this.active=!0),F(e)&&(this.toggle(),this.active=!0)}_onkeyup(e){p(e)&&this.toggle(),this.active=!1}toggle(){if(this.canToggle()){const e={checked:this.checked,indeterminate:this.indeterminate};this.indeterminate?(this.indeterminate=!1,this.checked=!0):this.checked=!this.checked;const t=!this.fireEvent("change",null,!0),c=!this.fireEvent("value-changed",null,!0);(t||c)&&(this.checked=e.checked,this.indeterminate=e.indeterminate)}return this}canToggle(){return!(this.disabled||this.readonly)}valueStateTextMappings(){return{Error:h.i18nBundle.getText(L),Warning:h.i18nBundle.getText(D),Success:h.i18nBundle.getText(V)}}get ariaLabelText(){return I(this)}get classes(){return{main:{"ui5-checkbox--hoverable":!this.disabled&&!this.readonly&&m()}}}get ariaReadonly(){return this.readonly?"true":void 0}get effectiveAriaDisabled(){return this.disabled?"true":void 0}get effectiveAriaChecked(){return this.indeterminate&&this.checked?"mixed":this.checked}get ariaLabelledBy(){if(!this.ariaLabelText)return this.text?`${this._id}-label`:void 0}get ariaDescribedBy(){return this.hasValueState?`${this._id}-descr`:void 0}get hasValueState(){return this.valueState!==d.None}get valueStateText(){if(this.valueState!==d.None&&this.valueState!==d.Information)return this.valueStateTextMappings()[this.valueState]}get effectiveTabIndex(){const e=this.getAttribute("tabindex");return this.disabled?void 0:e||"0"}get isCompletelyChecked(){return this.checked&&!this.indeterminate}static async onDefine(){h.i18nBundle=await w("@ui5/webcomponents")}};i([r()],n.prototype,"accessibleNameRef",void 0);i([r()],n.prototype,"accessibleName",void 0);i([r({type:Boolean})],n.prototype,"disabled",void 0);i([r({type:Boolean})],n.prototype,"readonly",void 0);i([r({type:Boolean})],n.prototype,"required",void 0);i([r({type:Boolean})],n.prototype,"indeterminate",void 0);i([r({type:Boolean})],n.prototype,"checked",void 0);i([r()],n.prototype,"text",void 0);i([r({type:d,defaultValue:d.None})],n.prototype,"valueState",void 0);i([r({type:x,defaultValue:x.None})],n.prototype,"wrappingType",void 0);i([r()],n.prototype,"name",void 0);i([r({type:Boolean})],n.prototype,"active",void 0);i([C()],n.prototype,"formSupport",void 0);n=h=i([T({tag:"ui5-checkbox",languageAware:!0,renderer:B,template:U,styles:z,dependencies:[R,N]}),E("change")],n);n.define();const he=n;export{he as default};
//# sourceMappingURL=CheckBox-6ec8bf24.js.map
