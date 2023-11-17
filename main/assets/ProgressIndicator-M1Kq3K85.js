import{r as b,U as h,A as m,n as f}from"./UI5Element-51XrG2PJ.js";import{b as e,l as a,d as g,s as y,a as w,p as u,c as V,f as I}from"./withWebComponent-ceo0jn6D.js";import{V as p}from"./ValueState-zUcANXoY.js";import{I as k}from"./Integer-kog98579.js";import{g as $}from"./AnimationMode-nonsDQUP.js";import{a as x}from"./Icon-HNXZSIOG.js";import{V as S,a as E,c as T,b as B}from"./i18n-defaults-RBzcmDt8.js";import{o as A}from"./class-map-JXa0-u4l.js";import{s as P}from"./style-map-uWW-8QIe.js";import"./CustomElementsScopeUtils-FvbtGFoH.js";import"./utils-CrDMzPRG.js";import"./index-OjgoNOWw.js";import"./jsx-runtime-DtaoT6pD.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./Icons-3pbvVZUr.js";function R(o,i,r){return e`<div class="ui5-progress-indicator-root ${A(this.classes.root)}" role="progressbar" aria-valuemin="0" aria-valuenow="${a(this.validatedValue)}" aria-valuemax="100" aria-valuetext="${a(this.valueStateText)}" aria-disabled="${a(this._ariaDisabled)}" aria-label="${a(this.accessibleName)}"><div class="ui5-progress-indicator-bar" style="${P(this.styles.bar)}">${this.showValueInRemainingBar?void 0:z.call(this,o,i,r)}</div><div class="ui5-progress-indicator-remaining-bar">${this.showValueInRemainingBar?U.call(this,o,i,r):void 0}</div></div>`}function z(o,i,r){return e`${this.showIcon?N.call(this,o,i,r):void 0}${this.hideValue?void 0:D.call(this,o,i,r)}`}function N(o,i,r){return r?e`<${g("ui5-icon",i,r)} name="${a(this.valueStateIcon)}" class="ui5-progress-indicator-icon"></${g("ui5-icon",i,r)}>`:e`<ui5-icon name="${a(this.valueStateIcon)}" class="ui5-progress-indicator-icon"></ui5-icon>`}function D(o,i,r){return e`<span class="ui5-progress-indicator-value">${this.displayValue?M.call(this,o,i,r):W.call(this,o,i,r)}</span>`}function M(o,i,r){return e`${a(this.displayValue)}`}function W(o,i,r){return e`${a(this.validatedValue)}% `}function U(o,i,r){return e`${this.showIcon?O.call(this,o,i,r):void 0}${this.hideValue?void 0:j.call(this,o,i,r)}`}function O(o,i,r){return r?e`<${g("ui5-icon",i,r)} name="${a(this.valueStateIcon)}" class="ui5-progress-indicator-icon"></${g("ui5-icon",i,r)}>`:e`<ui5-icon name="${a(this.valueStateIcon)}" class="ui5-progress-indicator-icon"></ui5-icon>`}function j(o,i,r){return e`<span class="ui5-progress-indicator-value">${this.displayValue?L.call(this,o,i,r):F.call(this,o,i,r)}</span>`}function L(o,i,r){return e`${a(this.displayValue)}`}function F(o,i,r){return e`${a(this.validatedValue)}% `}b("@ui5/webcomponents-theming","sap_horizon",async()=>y);b("@ui5/webcomponents","sap_horizon",async()=>w);const C={packageName:"@ui5/webcomponents",fileName:"themes/ProgressIndicator.css",content:`:host(:not([hidden])){box-sizing:var(--_ui5-v1-19-0_progress_indicator_host_box_sizing);display:inline-block;height:var(--_ui5-v1-19-0_progress_indicator_host_height);min-height:var(_ui5_progress_indicator_host_min_height);min-width:4rem;overflow:hidden;padding:var(--_ui5-v1-19-0_progress_indicator_padding);padding-inline-end:var(--_ui5-v1-19-0_progress_indicator_padding_end);width:100%}.ui5-progress-indicator-root{align-items:center;background:var(--_ui5-v1-19-0_progress_indicator_background_none);border-radius:var(--_ui5-v1-19-0_progress_indicator_root_border_radius);box-sizing:border-box;display:flex;font-family:"72override",var(--sapFontFamily);font-size:var(--sapProgress_FontSize);height:var(--_ui5-v1-19-0_progress_indicator_root_height);min-height:var(--_ui5-v1-19-0_progress_indicator_root_min_height);overflow:var(--_ui5-v1-19-0_progress_indicator_root_overflow);position:var(--_ui5-v1-19-0_progress_indicator_root_position);width:100%}.ui5-progress-indicator-bar{align-items:center;background:var(--_ui5-v1-19-0_progress_indicator_value_state_none);border:var(--_ui5-v1-19-0_progress_indicator_bar_border_max);border-radius:var(--_ui5-v1-19-0_progress_indicator_bar_border_radius);box-sizing:border-box;color:var(--_ui5-v1-19-0_progress_indicator_bar_color);display:flex;flex-direction:row;height:var(--_ui5-v1-19-0_progress_indicator_bar_height);justify-content:flex-end;transition-property:width;transition-timing-function:linear;z-index:1}.ui5-progress-indicator-max-value .ui5-progress-indicator-remaining-bar,.ui5-progress-indicator-min-value .ui5-progress-indicator-bar{border:none}.ui5-progress-indicator-max-value .ui5-progress-indicator-bar{border-radius:.5rem}.ui5-progress-indicator-min-value .ui5-progress-indicator-remaining-bar{border-inline-start:var(--_ui5-v1-19-0_progress_indicator_border);border-radius:.5rem}.ui5-progress-indicator-remaining-bar{align-items:center;border:var(--_ui5-v1-19-0_progress_indicator_border);border-inline-start:none;border-radius:var(--_ui5-v1-19-0_progress_indicator_remaining_bar_border_radius);box-sizing:border-box;color:var(--_ui5-v1-19-0_progress_indicator_color);display:flex;flex-basis:0;flex-direction:row;flex-grow:1;height:100%;justify-content:flex-start;overflow:var(--_ui5-v1-19-0_progress_indicator_remaining_bar_overflow);position:var(--_ui5-v1-19-0_progress_indicator_remaining_bar_position);width:var(--_ui5-v1-19-0_progress_indicator_remaining_bar_width)}.ui5-progress-indicator-value{inset-inline-start:var(--_ui5-v1-19-0_progress_indicator_value_left_position);margin:var(--_ui5-v1-19-0_progress_indicator_value_margin);max-width:100%;overflow:hidden;position:var(--_ui5-v1-19-0_progress_indicator_value_position);text-overflow:ellipsis;top:var(--_ui5-v1-19-0_progress_indicator_value_top_position);white-space:nowrap}.ui5-progress-indicator-icon{display:var(--_ui5-v1-19-0_progress_indicator_icon_visibility);height:var(--_ui5-v1-19-0_progress_indicator_icon_size);inset-inline-end:var(--_ui5-v1-19-0_progress_indicator_icon_right_position);margin-inline-start:.375rem;position:var(--_ui5-v1-19-0_progress_indicator_icon_position);width:var(--_ui5-v1-19-0_progress_indicator_icon_size)}:host([value-state=Error]) .ui5-progress-indicator-icon{color:var(--_ui5-v1-19-0_progress_indicator_value_state_error_icon_color)}:host([value-state=Warning]) .ui5-progress-indicator-icon{color:var(--_ui5-v1-19-0_progress_indicator_value_state_warning_icon_color)}:host([value-state=Success]) .ui5-progress-indicator-icon{color:var(--_ui5-v1-19-0_progress_indicator_value_state_success_icon_color)}:host([value-state=Information]) .ui5-progress-indicator-icon{color:var(--_ui5-v1-19-0_progress_indicator_value_state_information_icon_color)}:host([value-state=Error]) .ui5-progress-indicator-bar{background:var(--_ui5-v1-19-0_progress_indicator_value_state_error);border:.0625rem solid var(--_ui5-v1-19-0_progress_indicator_value_state_error_border_color)}:host([value-state=Warning]) .ui5-progress-indicator-bar{background:var(--_ui5-v1-19-0_progress_indicator_value_state_warning);border:.0625rem solid var(--_ui5-v1-19-0_progress_indicator_value_state_warning_border_color)}:host([value-state=Success]) .ui5-progress-indicator-bar{background:var(--_ui5-v1-19-0_progress_indicator_value_state_success);border:.0625rem solid var(--_ui5-v1-19-0_progress_indicator_value_state_success_border_color)}:host([value-state=Information]) .ui5-progress-indicator-bar{background:var(--_ui5-v1-19-0_progress_indicator_value_state_information);border:.0625rem solid var(--_ui5-v1-19-0_progress_indicator_value_state_information_border_color)}:host([value-state=Error]) .ui5-progress-indicator-root{background:var(--_ui5-v1-19-0_progress_indicator_background_error)}:host([value-state=Warning]) .ui5-progress-indicator-root{background:var(--_ui5-v1-19-0_progress_indicator_background_warning)}:host([value-state=Success]) .ui5-progress-indicator-root{background:var(--_ui5-v1-19-0_progress_indicator_background_success)}:host([value-state=Information]) .ui5-progress-indicator-root{background:var(--_ui5-v1-19-0_progress_indicator_background_information)}:host([value-state=Error]) .ui5-progress-indicator-remaining-bar{border-color:var(--_ui5-v1-19-0_progress_indicator_border_color_error)}:host([value-state=Warning]) .ui5-progress-indicator-remaining-bar{border-color:var(--_ui5-v1-19-0_progress_indicator_border_color_warning)}:host([value-state=Success]) .ui5-progress-indicator-remaining-bar{border-color:var(--_ui5-v1-19-0_progress_indicator_border_color_success)}:host([value-state=Information]) .ui5-progress-indicator-remaining-bar{border-color:var(--_ui5-v1-19-0_progress_indicator_border_color_information)}:host([disabled]) .ui5-progress-indicator-root{opacity:.4}.ui5-progress-indicator-remaining-bar:after,.ui5-progress-indicator-remaining-bar:before{background:var(--_ui5-v1-19-0_progress_indicator_value_state_none);border-radius:50%;content:"";display:block;display:var(--_ui5-v1-19-0_progress_indicator_side_points_visibility);height:.25rem;position:absolute;width:.25rem}.ui5-progress-indicator-remaining-bar:before{left:.0625rem}.ui5-progress-indicator-remaining-bar:after{right:.0625rem}:host([value-state=Error]) .ui5-progress-indicator-remaining-bar:after,:host([value-state=Error]) .ui5-progress-indicator-remaining-bar:before{background:var(--sapProgress_Value_NegativeBackground)}:host([value-state=Warning]) .ui5-progress-indicator-remaining-bar:after,:host([value-state=Warning]) .ui5-progress-indicator-remaining-bar:before{background:var(--sapProgress_Value_CriticalBackground)}:host([value-state=Success]) .ui5-progress-indicator-remaining-bar:after,:host([value-state=Success]) .ui5-progress-indicator-remaining-bar:before{background:var(--sapProgress_Value_PositiveBackground)}:host([value-state=Information])
	.ui5-progress-indicator-remaining-bar:after,:host([value-state=Information])
	.ui5-progress-indicator-remaining-bar:before{background:var(--sapProgress_Value_InformationBackground)}`};var _=function(o,i,r,c){var d=arguments.length,s=d<3?i:c===null?c=Object.getOwnPropertyDescriptor(i,r):c,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,i,r,c);else for(var v=o.length-1;v>=0;v--)(l=o[v])&&(s=(d<3?l(s):d>3?l(i,r,s):l(i,r))||s);return d>3&&s&&Object.defineProperty(i,r,s),s},n;let t=n=class extends h{constructor(){super(),this._previousValue=0,this._transitionDuration=0}onBeforeRendering(){this._transitionDuration=Math.abs(this._previousValue-this.validatedValue)*20,this._previousValue=this.validatedValue}valueStateTextMappings(){return{Error:n.i18nBundle.getText(S),Warning:n.i18nBundle.getText(E),Success:n.i18nBundle.getText(T),Information:n.i18nBundle.getText(B)}}valueStateIconMappings(){return{Error:"status-negative",Warning:"status-critical",Success:"status-positive",Information:"information"}}get styles(){return{bar:{width:`${this.validatedValue}%`,"transition-duration":this.shouldAnimate?`${this._transitionDuration}ms`:"none"}}}get classes(){return{root:{"ui5-progress-indicator-max-value":this.validatedValue===100,"ui5-progress-indicator-min-value":this.validatedValue===0}}}get validatedValue(){return this.value<0?0:this.value>100?100:this.value}get showValueInRemainingBar(){return this.value<=50}get shouldAnimate(){return $()!==m.None}get valueStateText(){const i=`${this.validatedValue}%`,r=this.valueStateTextMappings()[this.valueState];return r?`${i} ${r}`:i}get showIcon(){return this.valueState!==p.None}get valueStateIcon(){return this.valueStateIconMappings()[this.valueState]}get _ariaDisabled(){return this.disabled||void 0}static async onDefine(){n.i18nBundle=await f("@ui5/webcomponents")}};_([u()],t.prototype,"accessibleName",void 0);_([u({type:Boolean})],t.prototype,"disabled",void 0);_([u({type:Boolean})],t.prototype,"hideValue",void 0);_([u({validator:k,defaultValue:0})],t.prototype,"value",void 0);_([u()],t.prototype,"displayValue",void 0);_([u({type:p,defaultValue:p.None})],t.prototype,"valueState",void 0);t=n=_([V({tag:"ui5-progress-indicator",renderer:I,styles:C,template:R,dependencies:[x]})],t);t.define();const nr=t;export{nr as default};
//# sourceMappingURL=ProgressIndicator-M1Kq3K85.js.map
