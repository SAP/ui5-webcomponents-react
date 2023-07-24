import{b as S}from"./Device-6afa24d0.js";import{g as R}from"./CustomElementsScopeUtils-137da8c8.js";import{r as x,U as I,l as T}from"./UI5Element-11982a12.js";import{b as f,l as a,d as p,g as G,s as $,a as E,p as d,c as F,f as C}from"./withWebComponent-99b005ba.js";import{s as A}from"./slot-76e48863.js";import{e as D}from"./Icon-31253496.js";import{V as h}from"./ValueState-2c5e5904.js";import{g as L}from"./AriaLabelHelper-43a261ec.js";import{k as g,l as W,e as O,c as m,b as k,d as V}from"./Icons-234bf59e.js";import B from"./Label-62dd8470.js";import{W as y}from"./WrappingType-b81e595a.js";import{o as U}from"./class-map-b4d8f3b0.js";import{e as z,b as P,a as j,V as M}from"./i18n-defaults-1a83921e.js";import"./utils-626dc1bf.js";import"./index-f1f2c4b1.js";import"./jsx-runtime-d079401a.js";import"./useIsomorphicLayoutEffect-c49de97d.js";class _{static hasGroup(e){return this.groups.has(e)}static getGroup(e){return this.groups.get(e)}static getCheckedRadioFromGroup(e){return this.checkedRadios.get(e)}static removeGroup(e){return this.checkedRadios.delete(e),this.groups.delete(e)}static addToGroup(e,t){this.hasGroup(t)?(this.enforceSingleSelection(e,t),this.getGroup(t)&&this.getGroup(t).push(e)):this.createGroup(e,t),this.updateTabOrder(t)}static removeFromGroup(e,t){const i=this.getGroup(t);if(!i)return;const o=this.getCheckedRadioFromGroup(t);i.forEach((r,l,v)=>{if(e._id===r._id)return v.splice(l,1)}),o===e&&this.checkedRadios.set(t,null),i.length||this.removeGroup(t),this.updateTabOrder(t)}static createGroup(e,t){e.checked&&this.checkedRadios.set(t,e),this.groups.set(t,[e])}static selectNextItem(e,t){const i=this.getGroup(t);if(!i)return;const o=i.length,r=i.indexOf(e);if(o<=1)return;const l=this._nextSelectable(r,i);l&&this.updateSelectionInGroup(l,t)}static updateTabOrder(e){const t=this.getGroup(e);if(!t)return;const i=t.some(o=>o.checked);t.filter(o=>!o.disabled).forEach((o,r)=>{i?o._tabIndex=o.checked?"0":"-1":o._tabIndex=r===0?"0":"-1"})}static selectPreviousItem(e,t){const i=this.getGroup(t);if(!i)return;const o=i.length,r=i.indexOf(e);if(o<=1)return;const l=this._previousSelectable(r,i);l&&this.updateSelectionInGroup(l,t)}static selectItem(e,t){this.updateSelectionInGroup(e,t),this.updateTabOrder(t)}static updateSelectionInGroup(e,t){const i=this.getCheckedRadioFromGroup(t);i&&this._deselectRadio(i),this._selectRadio(e),this.checkedRadios.set(t,e)}static _deselectRadio(e){e&&(e.checked=!1)}static _selectRadio(e){e&&(e.focus({focusVisible:!0}),e.checked=!0,e._checked=!0,e.fireEvent("change"))}static _nextSelectable(e,t){if(!t)return null;const i=t.length;let o=null;if(e===i-1){if(t[0].disabled||t[0].readonly)return this._nextSelectable(1,t);o=t[0]}else{if(t[e+1].disabled||t[e+1].readonly)return this._nextSelectable(e+1,t);o=t[e+1]}return o}static _previousSelectable(e,t){const i=t.length;let o=null;if(e===0){if(t[i-1].disabled||t[i-1].readonly)return this._previousSelectable(i-1,t);o=t[i-1]}else{if(t[e-1].disabled||t[e-1].readonly)return this._previousSelectable(e-1,t);o=t[e-1]}return o}static enforceSingleSelection(e,t){const i=this.getCheckedRadioFromGroup(t);e.checked?i?e!==i&&(this._deselectRadio(i),this.checkedRadios.set(t,e)):this.checkedRadios.set(t,e):e===i&&this.checkedRadios.set(t,null),this.updateTabOrder(t)}static get groups(){return this._groups||(this._groups=new Map),this._groups}static get checkedRadios(){return this._checkedRadios||(this._checkedRadios=new Map),this._checkedRadios}}function q(u,e,t){return f`<div class="ui5-radio-root" role="radio" aria-checked="${a(this.checked)}" aria-disabled="${a(this.effectiveAriaDisabled)}" aria-describedby="${a(this.effectiveAriaDescribedBy)}" aria-label="${a(this.ariaLabelText)}" tabindex="${a(this.effectiveTabIndex)}" @click="${this._onclick}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @mousedown="${this._onmousedown}" @mouseup="${this._onmouseup}" @focusout="${this._onfocusout}"><div class='ui5-radio-inner ${U(this.classes.inner)}'><svg class="ui5-radio-svg" focusable="false" aria-hidden="true">${K.call(this,u,e,t)}</svg><input type='radio' ?required="${this.required}" ?checked="${this.checked}" ?readonly="${this.readonly}" ?disabled="${this.effectiveAriaDisabled}" name="${a(this.name)}"  data-sap-no-tab-ref/></div>${this.text?H.call(this,u,e,t):void 0}${this.hasValueState?J.call(this,u,e,t):void 0}<slot name="formSupport"></slot></div>`}function H(u,e,t){return t?f`<${p("ui5-label",e,t)} id="${a(this._id)}-label" class="ui5-radio-label" for="${a(this._id)}" wrapping-type="${a(this.wrappingType)}">${a(this.text)}</${p("ui5-label",e,t)}>`:f`<ui5-label id="${a(this._id)}-label" class="ui5-radio-label" for="${a(this._id)}" wrapping-type="${a(this.wrappingType)}">${a(this.text)}</ui5-label>`}function J(u,e,t){return f`<span id="${a(this._id)}-descr" class="ui5-hidden-text">${a(this.valueStateText)}</span>`}function K(u,e,t){return G`<circle class="ui5-radio-svg-outer" cx="50%" cy="50%" r="50%" /><circle class="ui5-radio-svg-inner" cx="50%" cy="50%" />`}x("@ui5/webcomponents-theming","sap_fiori_3",async()=>$);x("@ui5/webcomponents","sap_fiori_3",async()=>E);const Q={packageName:"@ui5/webcomponents",fileName:"themes/RadioButton.css",content:`.ui5-hidden-text {
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
	min-width: var(--_ui5_radio_button_min_width);
	max-width: 100%;
	text-overflow: ellipsis;
	overflow: hidden;
	color: var(--_ui5_radio_button_color);
	border-radius: var(--_ui5_radio_button_border_radius);
	transition: var(--_ui5_radio_button_transition);
}

:host(:not([disabled])) .ui5-radio-root {
	cursor: pointer;
}

/* checked */

:host([checked]) {
	color: var(--_ui5_radio_button_checked_fill);
}

:host([checked]) .ui5-radio-svg-inner {
	fill: var(--_ui5_radio_button_inner_ring_color);
}

:host([checked]) .ui5-radio-svg-outer {
	stroke: var(--_ui5_radio_button_outer_ring_color);
}

/* disabled */

:host([disabled]) .ui5-radio-root {
	color: var(--_ui5_radio_button_color);
	opacity: var(--sapContent_DisabledOpacity);
}

:host([disabled][checked]) .ui5-radio-svg-outer {
	stroke: var(--_ui5_radio_button_color);
}

/* focused */

:host(:not([disabled])) .ui5-radio-root:focus-visible:before {
	content: "";
	display: var(--_ui5_radio_button_focus_outline);
	position: absolute;
	top: var(--_ui5_radio_button_focus_dist);
	bottom: var(--_ui5_radio_button_focus_dist);
	left: var(--_ui5_radio_button_focus_dist);
	right: var(--_ui5_radio_button_focus_dist);
	pointer-events: none;
	border: var(--_ui5_radio_button_border_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);
	border-radius: var(--_ui5_radio_button_border_radius);
}

/* horizon readonly focus */

:host(:not([disabled])[readonly]) .ui5-radio-root:focus-visible:before {
	border: var(--_ui5_radio_button_border_width) var(--_ui5_radio_button_border_readonly_focus_style) var(--sapContent_FocusColor);
}

:host(:not([disabled])) .ui5-radio-root:focus-visible {
	border-radius: var(--_ui5_radio_button_border_radius);
	border: var(--_ui5_radio_button_focus_border);
}

/* hovered */

:host(:not([disabled]):hover) {
	background: var(--_ui5_radio_button_hover_background);
	box-shadow: var(--_ui5_radio_button_hover_shadow);
}

/* hovered and value-state */

:host(:not([value-state="Error"]):not([value-state="Warning"]):not([value-state="Success"]):not([value-state="Information"])) .ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer {
	stroke: var(--_ui5_radio_button_outer_ring_hover_color);
}

:host(:not([value-state="Error"]):not([value-state="Warning"]):not([value-state="Success"]):not([value-state="Information"])) .ui5-radio-root:hover .ui5-radio-inner--hoverable {
	filter: drop-shadow(var(--_ui5_radio_button_outer_ring_hover_shadow));
}

:host(:not([value-state="Error"]):not([value-state="Warning"]):not([value-state="Success"]):not([value-state="Information"])[checked]) .ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer {
	stroke: var(--_ui5_radio_button_outer_ring_checked_hover_color);
}

.ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer,
:host([checked]) .ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer {
	fill: var(--_ui5_radio_button_hover_fill);
}

/* active, checked */

:host([active][checked]:not([value-state]):not([disabled]):not([readonly])) .ui5-radio-svg-outer {
	stroke: var(--_ui5_radio_button_outer_ring_checked_hover_color);
}

/* active, not checked */

:host([active]:not([checked]):not([value-state]):not([disabled]):not([readonly])) .ui5-radio-svg-outer {
	stroke: var(--_ui5_radio_button_outer_ring_active_color);
}

/* with label */

:host([text]) .ui5-radio-root:focus-visible:before {
	inset-inline: var(--_ui5_radio_button_focus_dist) 0;
}

:host([text]) .ui5-radio-inner {
	padding: var(--_ui5_radio_button_outer_ring_padding_with_label);
}

/* readonly */

:host([checked][readonly]) .ui5-radio-svg-inner {
	fill: var(--_ui5_radio_button_read_only_inner_ring_color);
}

:host([readonly]) .ui5-radio-root .ui5-radio-svg-outer {
	fill: var(--sapField_ReadOnly_Background);
	stroke: var(--sapField_ReadOnly_BorderColor);
	stroke-dasharray: var(--_ui5_radio_button_read_only_border_type);
	stroke-width: var(--_ui5_radio_button_read_only_border_width);
}

/* value states */

:host([value-state="Error"]) .ui5-radio-svg-outer,
:host([value-state="Warning"]) .ui5-radio-svg-outer {
	stroke-width: var(--sapField_InvalidBorderWidth);
}

:host([value-state="Information"]) .ui5-radio-svg-outer {
	stroke-width: var(--_ui5_radio_button_information_border_width);
}

/* Error state */

:host([value-state="Error"][checked]) .ui5-radio-svg-inner {
	fill: var(--_ui5_radio_button_checked_error_fill);
}

:host([value-state="Error"]) .ui5-radio-svg-outer,
:host([value-state="Error"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer {
	stroke: var(--sapField_InvalidColor);
	fill: var(--sapField_InvalidBackground);
}

:host([value-state="Error"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer {
	fill: var(--_ui5_radio_button_hover_fill_error);
}

:host([value-state="Error"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable {
	filter: drop-shadow(var(--_ui5_radio_button_outer_ring_hover_shadow_error));
}

/* Warning state */

:host([value-state="Warning"][checked]) .ui5-radio-svg-inner {
	fill: var(--_ui5_radio_button_checked_warning_fill);
}

:host([value-state="Warning"]) .ui5-radio-svg-outer,
:host([value-state="Warning"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer {
	stroke: var(--sapField_WarningColor);
	fill: var(--sapField_WarningBackground);
}

:host([value-state="Warning"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer {
	fill: var(--_ui5_radio_button_hover_fill_warning);
}

:host([value-state="Warning"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable {
	filter: drop-shadow(var(--_ui5_radio_button_outer_ring_hover_shadow_warning));
}

/* Success state */

:host([value-state="Success"][checked]) .ui5-radio-svg-inner {
	fill: var(--_ui5_radio_button_checked_success_fill);
}

:host([value-state="Success"]) .ui5-radio-svg-outer,
:host([value-state="Success"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer {
	stroke: var(--sapField_SuccessColor);
	fill: var(--sapField_SuccessBackground);
}

:host([value-state="Success"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer {
	fill: var(--_ui5_radio_button_hover_fill_success);
}

:host([value-state="Success"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable {
	filter: drop-shadow(var(--_ui5_radio_button_outer_ring_hover_shadow_success));
}

/* Information state */

:host([value-state="Information"][checked]) .ui5-radio-svg-inner {
	fill: var(--_ui5_radio_button_checked_information_fill);
}

:host([value-state="Information"]) .ui5-radio-svg-outer,
:host([value-state="Information"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer {
	stroke: var(--sapField_InformationColor);
	fill: var(--sapField_InformationBackground);
}

:host([value-state="Information"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer {
	fill: var(--_ui5_radio_button_hover_fill_information);
}

:host([value-state="Information"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable {
	filter: drop-shadow(var(--_ui5_radio_button_outer_ring_hover_shadow_information));
}

:host([value-state="Error"]) .ui5-radio-root,
:host([value-state="Warning"]) .ui5-radio-root,
:host([value-state="Information"]) .ui5-radio-root {
	stroke-dasharray: var(--_ui5_radio_button_warning_error_border_dash);
}

.ui5-radio-root {
	height: var(--_ui5_radio_button_height);
	position: relative;
	display: inline-flex;
	flex-wrap: nowrap;
	outline: none;
	max-width: 100%;
	width: var(--_ui5_radio_button_inner_width);
	box-sizing: border-box;
	border: var(--_ui5_radio_button_border);
	border-radius: var(--_ui5_radio_button_border_radius);
	transition: var(--_ui5_radio_button_transition);
}

/* Inner */

.ui5-radio-inner {
	display: flex;
	align-items: center;
	padding: var(--_ui5_radio_button_outer_ring_padding);
	flex-shrink: 0;
	height: var(--_ui5_radio_button_inner_size);
	font-size: 1rem; /* override font size of the message dialog */
	pointer-events: none;
	vertical-align: top;
}

.ui5-radio-inner {
	outline: none;
}

.ui5-radio-inner input {
	-webkit-appearance: none;
	visibility: hidden;
	width: 0;
	left: 0;
	position: absolute;
	font-size: inherit;
	margin: 0; /* FF puts margin */
}

/* Label */

[ui5-label].ui5-radio-label {
	display: flex;
	align-items: center;
	padding-inline-end: var(--_ui5_radio_button_label_offset);
	vertical-align: top;
	max-width: 100%;
	text-overflow: ellipsis;
	overflow: hidden;
	pointer-events: none;
	color: var(--_ui5_radio_button_label_color);
}

:host([wrapping-type="Normal"][text]) .ui5-radio-root {
	height: auto;
}

:host([wrapping-type="Normal"][text]) [ui5-label].ui5-radio-label {
	padding: var(--_ui5_radio_button_label_side_padding) 0;
	overflow-wrap: break-word;
}

/* SVG */

.ui5-radio-svg {
	height: var(--_ui5_radio_button_svg_size);
	width: var(--_ui5_radio_button_svg_size);
	overflow: visible;
	pointer-events: none;
}

.ui5-radio-svg-outer {
	fill: var(--_ui5_radio_button_outer_ring_bg);
	stroke: currentColor;
	stroke-width: var(--_ui5_radio_button_outer_ring_width);
}

.ui5-radio-svg-inner {
	fill: none;
	r: var(--_ui5_radio_button_inner_ring_radius);
}

.ui5-radio-svg-outer,
.ui5-radio-svg-inner {
	flex-shrink: 0;
}

/* ListItem Context */

:host(.ui5-li-singlesel-radiobtn) .ui5-radio-root .ui5-radio-inner .ui5-radio-svg-outer {
	fill: var(--sapList_Background);
}
`};var s=globalThis&&globalThis.__decorate||function(u,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(u,e,t,i);else for(var v=u.length-1;v>=0;v--)(l=u[v])&&(r=(o<3?l(r):o>3?l(e,t,r):l(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r},c;let w=!1,b,n=c=class extends I{constructor(){super(),this._deactivate=()=>{b&&(b.active=!1)},w||(document.addEventListener("mouseup",this._deactivate),w=!0)}static async onDefine(){c.i18nBundle=await T("@ui5/webcomponents")}onBeforeRendering(){this.syncGroup(),this._enableFormSupport()}onExitDOM(){this.syncGroup(!0)}syncGroup(e){const t=this._name,i=this.name,o=this._checked,r=this.checked;e&&_.removeFromGroup(this,t),i!==t?(t&&_.removeFromGroup(this,t),i&&_.addToGroup(this,i)):i&&_.enforceSingleSelection(this,i),this.name&&r!==o&&_.updateTabOrder(this.name),this._name=this.name,this._checked=this.checked}_enableFormSupport(){const e=R("FormSupport");e?e.syncNativeHiddenInput(this,(t,i)=>{i.value=t.value,i.type="radio",i.checked=t.checked}):this.value&&console.warn('In order for the "value" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";')}_onclick(){return this.toggle()}_handleDown(e){const t=this.name;t&&(e.preventDefault(),_.selectNextItem(this,t))}_handleUp(e){const t=this.name;t&&(e.preventDefault(),_.selectPreviousItem(this,t))}_onkeydown(e){if(g(e))return this.active=!0,e.preventDefault();if(W(e))return this.active=!0,this.toggle();const t=this.effectiveDir==="rtl";(O(e)||!t&&m(e)||t&&k(e))&&this._handleDown(e),(V(e)||!t&&k(e)||t&&m(e))&&this._handleUp(e)}_onkeyup(e){g(e)&&this.toggle(),this.active=!1}_onmousedown(){this.active=!0,b=this}_onmouseup(){this.active=!1}_onfocusout(){this.active=!1}toggle(){return this.canToggle()?this.name?(_.selectItem(this,this.name),this):(this.checked=!this.checked,this.fireEvent("change"),this):this}canToggle(){return!(this.disabled||this.readonly||this.checked)}get classes(){return{inner:{"ui5-radio-inner--hoverable":!this.disabled&&!this.readonly&&S()}}}get effectiveAriaDisabled(){return this.disabled?"true":null}get ariaLabelText(){return[L(this),this.text].filter(Boolean).join(" ")}get effectiveAriaDescribedBy(){return this.hasValueState?`${this._id}-descr`:void 0}get hasValueState(){return this.valueState!==h.None}get valueStateText(){switch(this.valueState){case h.Error:return c.i18nBundle.getText(M);case h.Warning:return c.i18nBundle.getText(j);case h.Success:return c.i18nBundle.getText(P);case h.Information:return c.i18nBundle.getText(z);default:return""}}get effectiveTabIndex(){const e=this.getAttribute("tabindex");return this.disabled?"-1":this.name?this._tabIndex:e||"0"}get strokeWidth(){return this.valueState==="None"?"1":"2"}};s([d({type:Boolean})],n.prototype,"disabled",void 0);s([d({type:Boolean})],n.prototype,"readonly",void 0);s([d({type:Boolean})],n.prototype,"required",void 0);s([d({type:Boolean})],n.prototype,"checked",void 0);s([d()],n.prototype,"text",void 0);s([d({type:h,defaultValue:h.None})],n.prototype,"valueState",void 0);s([d()],n.prototype,"name",void 0);s([d()],n.prototype,"value",void 0);s([d({type:y,defaultValue:y.None})],n.prototype,"wrappingType",void 0);s([d()],n.prototype,"accessibleName",void 0);s([d()],n.prototype,"accessibleNameRef",void 0);s([d({defaultValue:"-1",noAttribute:!0})],n.prototype,"_tabIndex",void 0);s([d({type:Boolean})],n.prototype,"active",void 0);s([A()],n.prototype,"formSupport",void 0);n=c=s([F({tag:"ui5-radio-button",languageAware:!0,renderer:C,template:q,styles:Q,dependencies:[B]}),D("change")],n);n.define();const ve=n;export{ve as default};
//# sourceMappingURL=RadioButton-80f32cef.js.map
