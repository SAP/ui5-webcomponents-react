import{a as h,U as b,A as m,d as f}from"./UI5Element-78be0f3d.js";import{e as t,l as o,s as g,a as w,b as y,p as u,c as V,d as I}from"./withWebComponent-d4224c1c.js";import{V as v}from"./ValueState-2c5e5904.js";import{I as k}from"./Integer-f7f172c9.js";import{g as x}from"./AnimationMode-30bec6df.js";import{I as S}from"./Icon-70a9e5b9.js";import{o as $,p as T,V as E,n as B}from"./i18n-defaults-f002f496.js";import{o as A}from"./class-map-18f572ce.js";import{s as P}from"./style-map-54298215.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./utils-69f7a0e0.js";import"./index-ebeaab24.js";import"./jsx-runtime-5926aa06.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./Icons-26e87c01.js";function R(n,i,r){return t`<div class="ui5-progress-indicator-root ${A(this.classes.root)}" role="progressbar" aria-valuemin="0" aria-valuenow="${o(this.validatedValue)}" aria-valuemax="100" aria-valuetext="${o(this.valueStateText)}" aria-disabled="${o(this._ariaDisabled)}"><div class="ui5-progress-indicator-bar" style="${P(this.styles.bar)}">${this.showValueInRemainingBar?void 0:z.call(this,n,i,r)}</div><div class="ui5-progress-indicator-remaining-bar">${this.showValueInRemainingBar?U.call(this,n,i,r):void 0}</div></div>`}function z(n,i,r){return t`${this.showIcon?D.call(this,n,i,r):void 0}${this.hideValue?void 0:N.call(this,n,i,r)}`}function D(n,i,r){return r?t`<${g("ui5-icon",i,r)} name="${o(this.valueStateIcon)}" class="ui5-progress-indicator-icon"></${g("ui5-icon",i,r)}>`:t`<ui5-icon name="${o(this.valueStateIcon)}" class="ui5-progress-indicator-icon"></ui5-icon>`}function N(n,i,r){return t`<span class="ui5-progress-indicator-value">${this.displayValue?M.call(this,n,i,r):W.call(this,n,i,r)}</span>`}function M(n,i,r){return t`${o(this.displayValue)}`}function W(n,i,r){return t`${o(this.validatedValue)}% `}function U(n,i,r){return t`${this.showIcon?O.call(this,n,i,r):void 0}${this.hideValue?void 0:j.call(this,n,i,r)}`}function O(n,i,r){return r?t`<${g("ui5-icon",i,r)} name="${o(this.valueStateIcon)}" class="ui5-progress-indicator-icon"></${g("ui5-icon",i,r)}>`:t`<ui5-icon name="${o(this.valueStateIcon)}" class="ui5-progress-indicator-icon"></ui5-icon>`}function j(n,i,r){return t`<span class="ui5-progress-indicator-value">${this.displayValue?L.call(this,n,i,r):F.call(this,n,i,r)}</span>`}function L(n,i,r){return t`${o(this.displayValue)}`}function F(n,i,r){return t`${o(this.validatedValue)}% `}h("@ui5/webcomponents-theming","sap_fiori_3",async()=>w);h("@ui5/webcomponents","sap_fiori_3",async()=>y);const C={packageName:"@ui5/webcomponents",fileName:"themes/ProgressIndicator.css",content:`:host(:not([hidden])) {
	display: inline-block;
	min-height: var(_ui5_progress_indicator_host_min_height);
	min-width: 4rem;
	width: 100%;
	height: var(--_ui5_progress_indicator_host_height);
	overflow: hidden;
	box-sizing: var(--_ui5_progress_indicator_host_box_sizing);
	padding: var(--_ui5_progress_indicator_padding);
	padding-inline-end: var(--_ui5_progress_indicator_padding_end);
}

.ui5-progress-indicator-root {
	display: flex;
	align-items: center;
	background: var(--_ui5_progress_indicator_background_none);
	border-radius: var(--_ui5_progress_indicator_root_border_radius);
	overflow: var(--_ui5_progress_indicator_root_overflow);
	min-height: var(--_ui5_progress_indicator_root_min_height);
	height: var(--_ui5_progress_indicator_root_height);
	width: 100%;
	font-size: var(--sapProgress_FontSize);
	font-family: "72override", var(--sapFontFamily);
	position: var(--_ui5_progress_indicator_root_position);
	box-sizing: border-box;
}

.ui5-progress-indicator-bar {
	background: var(--_ui5_progress_indicator_value_state_none);
	justify-content: flex-end;
	height: var(--_ui5_progress_indicator_bar_height);
	display: flex;
	align-items: center;
	flex-direction: row;
	color: var(--_ui5_progress_indicator_bar_color);
	transition-property: width;
	transition-timing-function: linear;
	box-sizing: border-box;
	border: var(--_ui5_progress_indicator_bar_border_max);
	border-radius: var(--_ui5_progress_indicator_bar_border_radius);
	z-index: 1;
}

.ui5-progress-indicator-min-value .ui5-progress-indicator-bar,
.ui5-progress-indicator-max-value .ui5-progress-indicator-remaining-bar {
	border: none;
}

.ui5-progress-indicator-max-value .ui5-progress-indicator-bar {
	border-radius: 0.5rem;
}

.ui5-progress-indicator-min-value .ui5-progress-indicator-remaining-bar {
	border-inline-start: var(--_ui5_progress_indicator_border);
	border-radius: 0.5rem;
}

.ui5-progress-indicator-remaining-bar {
	justify-content: flex-start;
	width: var(--_ui5_progress_indicator_remaining_bar_width);
	height: 100%;
	display: flex;
	align-items: center;
    flex-direction: row;
	flex-grow: 1;
	flex-basis: 0;
	border: var(--_ui5_progress_indicator_border);
	border-inline-start: none;
	border-radius: var(--_ui5_progress_indicator_remaining_bar_border_radius);
	box-sizing: border-box;
	color: var(--_ui5_progress_indicator_color);
	overflow: var(--_ui5_progress_indicator_remaining_bar_overflow);
	position: var(--_ui5_progress_indicator_remaining_bar_position);
}

.ui5-progress-indicator-value {
	margin: var(--_ui5_progress_indicator_value_margin);
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: 100%;
	position: var(--_ui5_progress_indicator_value_position);
	top: var(--_ui5_progress_indicator_value_top_position);
	inset-inline-start: var(--_ui5_progress_indicator_value_left_position);
}

.ui5-progress-indicator-icon {
	margin-inline-start: 0.375rem;
	width: var(--_ui5_progress_indicator_icon_size);
	height: var(--_ui5_progress_indicator_icon_size);
	display: var(--_ui5_progress_indicator_icon_visibility);
	position: var(--_ui5_progress_indicator_icon_position);
	inset-inline-end: var(--_ui5_progress_indicator_icon_right_position);
}

:host([value-state="Error"]) .ui5-progress-indicator-icon {
	color: var(--_ui5_progress_indicator_value_state_error_icon_color);
}

:host([value-state="Warning"]) .ui5-progress-indicator-icon {
	color: var(--_ui5_progress_indicator_value_state_warning_icon_color);
}

:host([value-state="Success"]) .ui5-progress-indicator-icon {
	color: var(--_ui5_progress_indicator_value_state_success_icon_color);
}

:host([value-state="Information"]) .ui5-progress-indicator-icon {
	color: var(--_ui5_progress_indicator_value_state_information_icon_color);
}

:host([value-state="Error"]) .ui5-progress-indicator-bar {
	background: var(--_ui5_progress_indicator_value_state_error);
	border: 0.0625rem solid
		var(--_ui5_progress_indicator_value_state_error_border_color);
}

:host([value-state="Warning"]) .ui5-progress-indicator-bar {
	background: var(--_ui5_progress_indicator_value_state_warning);
	border: 0.0625rem solid
		var(--_ui5_progress_indicator_value_state_warning_border_color);
}

:host([value-state="Success"]) .ui5-progress-indicator-bar {
	background: var(--_ui5_progress_indicator_value_state_success);
	border: 0.0625rem solid
		var(--_ui5_progress_indicator_value_state_success_border_color);
}

:host([value-state="Information"]) .ui5-progress-indicator-bar {
	background: var(--_ui5_progress_indicator_value_state_information);
	border: 0.0625rem solid
		var(--_ui5_progress_indicator_value_state_information_border_color);
}

:host([value-state="Error"]) .ui5-progress-indicator-root {
	background: var(--_ui5_progress_indicator_background_error);
}

:host([value-state="Warning"]) .ui5-progress-indicator-root {
	background: var(--_ui5_progress_indicator_background_warning);
}

:host([value-state="Success"]) .ui5-progress-indicator-root {
	background: var(--_ui5_progress_indicator_background_success);
}

:host([value-state="Information"]) .ui5-progress-indicator-root {
	background: var(--_ui5_progress_indicator_background_information);
}

:host([value-state="Error"]) .ui5-progress-indicator-remaining-bar {
	border-color: var(--_ui5_progress_indicator_border_color_error);
}

:host([value-state="Warning"]) .ui5-progress-indicator-remaining-bar {
	border-color: var(--_ui5_progress_indicator_border_color_warning);
}

:host([value-state="Success"]) .ui5-progress-indicator-remaining-bar {
	border-color: var(--_ui5_progress_indicator_border_color_success);
}

:host([value-state="Information"]) .ui5-progress-indicator-remaining-bar {
	border-color: var(--_ui5_progress_indicator_border_color_information);
}

:host([disabled]) .ui5-progress-indicator-root {
	opacity: 0.4;
}

/* Start and End points - Horizon */

.ui5-progress-indicator-remaining-bar::before,
.ui5-progress-indicator-remaining-bar::after {
	content: "";
	display: block;
	width: 0.25rem;
	height: 0.25rem;
	position: absolute;
	border-radius: 50%;
	display: var(--_ui5_progress_indicator_side_points_visibility);
	background: var(--_ui5_progress_indicator_value_state_none);
}

.ui5-progress-indicator-remaining-bar::before {
	left: 0.0625rem;
}

.ui5-progress-indicator-remaining-bar::after {
	right: 0.0625rem;
}

:host([value-state="Error"]) .ui5-progress-indicator-remaining-bar::before,
:host([value-state="Error"]) .ui5-progress-indicator-remaining-bar::after {
	background: var(--sapProgress_Value_NegativeBackground);
}

:host([value-state="Warning"]) .ui5-progress-indicator-remaining-bar::before,
:host([value-state="Warning"]) .ui5-progress-indicator-remaining-bar::after {
	background: var(--sapProgress_Value_CriticalBackground);
}

:host([value-state="Success"]) .ui5-progress-indicator-remaining-bar::before,
:host([value-state="Success"]) .ui5-progress-indicator-remaining-bar::after {
	background: var(--sapProgress_Value_PositiveBackground);
}

:host([value-state="Information"])
	.ui5-progress-indicator-remaining-bar::before,
:host([value-state="Information"])
	.ui5-progress-indicator-remaining-bar::after {
	background: var(--sapProgress_Value_InformationBackground);
}
`};var _=globalThis&&globalThis.__decorate||function(n,i,r,c){var d=arguments.length,a=d<3?i:c===null?c=Object.getOwnPropertyDescriptor(i,r):c,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(n,i,r,c);else for(var p=n.length-1;p>=0;p--)(l=n[p])&&(a=(d<3?l(a):d>3?l(i,r,a):l(i,r))||a);return d>3&&a&&Object.defineProperty(i,r,a),a},s;let e=s=class extends b{constructor(){super(),this._previousValue=0,this._transitionDuration=0}onBeforeRendering(){this._transitionDuration=Math.abs(this._previousValue-this.validatedValue)*20,this._previousValue=this.validatedValue}valueStateTextMappings(){return{Error:s.i18nBundle.getText($),Warning:s.i18nBundle.getText(T),Success:s.i18nBundle.getText(E),Information:s.i18nBundle.getText(B)}}valueStateIconMappings(){return{Error:"status-negative",Warning:"status-critical",Success:"status-positive",Information:"information"}}get styles(){return{bar:{width:`${this.validatedValue}%`,"transition-duration":this.shouldAnimate?`${this._transitionDuration}ms`:"none"}}}get classes(){return{root:{"ui5-progress-indicator-max-value":this.validatedValue===100,"ui5-progress-indicator-min-value":this.validatedValue===0}}}get validatedValue(){return this.value<0?0:this.value>100?100:this.value}get showValueInRemainingBar(){return this.value<=50}get shouldAnimate(){return x()!==m.None}get valueStateText(){const i=`${this.validatedValue}%`,r=this.valueStateTextMappings()[this.valueState];return r?`${i} ${r}`:i}get showIcon(){return this.valueState!==v.None}get valueStateIcon(){return this.valueStateIconMappings()[this.valueState]}get _ariaDisabled(){return this.disabled||void 0}static async onDefine(){s.i18nBundle=await f("@ui5/webcomponents")}};_([u({type:Boolean})],e.prototype,"disabled",void 0);_([u({type:Boolean})],e.prototype,"hideValue",void 0);_([u({validator:k,defaultValue:0})],e.prototype,"value",void 0);_([u()],e.prototype,"displayValue",void 0);_([u({type:v,defaultValue:v.None})],e.prototype,"valueState",void 0);e=s=_([V({tag:"ui5-progress-indicator",renderer:I,styles:C,template:R,dependencies:[S]})],e);e.define();const sr=e;export{sr as default};
//# sourceMappingURL=ProgressIndicator-97c2568e.js.map
