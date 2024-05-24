import{U as b}from"./UI5Element-C8JZhjZA.js";import{a as e,l as a,b as g,s as m,p as _,c as f,d as y}from"./withWebComponent-CpdHtqwM.js";import{r as h,A as w}from"./Boot-CehKKsjw.js";import{V as v}from"./ValueState-Bn-H2OaL.js";import{I as V}from"./Integer-Dh6YzFpK.js";import{g as I}from"./AnimationMode-DvO_y_H1.js";import{b as k}from"./i18nBundle-DoewWk5r.js";import{I as $}from"./Icon-BXh46edA.js";import{V as x,a as S,c as E,b as T}from"./i18n-defaults-cA9sdirt.js";import{o as B}from"./class-map-BSt0RHbu.js";import{s as A}from"./style-map-CrxzMbdj.js";import{s as P}from"./parameters-bundle.css-CG8awnKl.js";import"./CustomElementsScopeUtils-B6a-Hnn9.js";import"./useIsomorphicLayoutEffect-puIvDQED.js";import"./index-BP8_t0zE.js";import"./EventProvider-B3ZIXKWe.js";import"./utils-B2Z4xp5G.js";import"./event-CegLCnR0.js";import"./Icons-CCqbOxoD.js";import"./Keys-BgUkNma0.js";function R(o,i,r){return e`<div class="ui5-progress-indicator-root ${B(this.classes.root)}" role="progressbar" aria-valuemin="0" aria-valuenow="${a(this.validatedValue)}" aria-valuemax="100" aria-valuetext="${a(this.valueStateText)}" aria-disabled="${a(this._ariaDisabled)}" aria-label="${a(this.accessibleName)}"><div class="ui5-progress-indicator-bar" part="bar" style="${A(this.styles.bar)}">${this.showValueInRemainingBar?void 0:N.call(this,o,i,r)}</div><div class="ui5-progress-indicator-remaining-bar" part="remaining-bar">${this.showValueInRemainingBar?U.call(this,o,i,r):void 0}</div></div>`}function N(o,i,r){return e`${this.showIcon?z.call(this,o,i,r):void 0}${this.hideValue?void 0:D.call(this,o,i,r)}`}function z(o,i,r){return r?e`<${g("ui5-icon",i,r)} name="${a(this.valueStateIcon)}" class="ui5-progress-indicator-icon"></${g("ui5-icon",i,r)}>`:e`<ui5-icon name="${a(this.valueStateIcon)}" class="ui5-progress-indicator-icon"></ui5-icon>`}function D(o,i,r){return e`<span class="ui5-progress-indicator-value">${this.displayValue?M.call(this,o,i,r):W.call(this,o,i,r)}</span>`}function M(o,i,r){return e`${a(this.displayValue)}`}function W(o,i,r){return e`${a(this.validatedValue)}% `}function U(o,i,r){return e`${this.showIcon?O.call(this,o,i,r):void 0}${this.hideValue?void 0:j.call(this,o,i,r)}`}function O(o,i,r){return r?e`<${g("ui5-icon",i,r)} name="${a(this.valueStateIcon)}" class="ui5-progress-indicator-icon"></${g("ui5-icon",i,r)}>`:e`<ui5-icon name="${a(this.valueStateIcon)}" class="ui5-progress-indicator-icon"></ui5-icon>`}function j(o,i,r){return e`<span class="ui5-progress-indicator-value">${this.displayValue?L.call(this,o,i,r):F.call(this,o,i,r)}</span>`}function L(o,i,r){return e`${a(this.displayValue)}`}function F(o,i,r){return e`${a(this.validatedValue)}% `}h("@ui5/webcomponents-theming","sap_horizon",async()=>m);h("@ui5/webcomponents","sap_horizon",async()=>P);const C={packageName:"@ui5/webcomponents",fileName:"themes/ProgressIndicator.css.ts",content:`:host(:not([hidden])){display:inline-block;min-height:var(_ui5_progress_indicator_host_min_height);min-width:4rem;width:100%;height:var(--_ui5-v1-24-2_progress_indicator_host_height);overflow:hidden;box-sizing:var(--_ui5-v1-24-2_progress_indicator_host_box_sizing);padding:var(--_ui5-v1-24-2_progress_indicator_padding);padding-inline-end:var(--_ui5-v1-24-2_progress_indicator_padding_end)}.ui5-progress-indicator-root{display:flex;align-items:center;background:var(--_ui5-v1-24-2_progress_indicator_background_none);border-radius:var(--_ui5-v1-24-2_progress_indicator_root_border_radius);overflow:var(--_ui5-v1-24-2_progress_indicator_root_overflow);min-height:var(--_ui5-v1-24-2_progress_indicator_root_min_height);height:var(--_ui5-v1-24-2_progress_indicator_root_height);width:100%;font-size:var(--sapProgress_FontSize);font-family:"72override",var(--sapFontFamily);position:var(--_ui5-v1-24-2_progress_indicator_root_position);box-sizing:border-box}.ui5-progress-indicator-bar{background:var(--_ui5-v1-24-2_progress_indicator_value_state_none);justify-content:flex-end;height:var(--_ui5-v1-24-2_progress_indicator_bar_height);display:flex;align-items:center;flex-direction:row;color:var(--_ui5-v1-24-2_progress_indicator_bar_color);transition-property:width;transition-timing-function:linear;box-sizing:border-box;border:var(--_ui5-v1-24-2_progress_indicator_bar_border_max);border-radius:var(--_ui5-v1-24-2_progress_indicator_bar_border_radius)}.ui5-progress-indicator-min-value .ui5-progress-indicator-bar,.ui5-progress-indicator-max-value .ui5-progress-indicator-remaining-bar{border:none}.ui5-progress-indicator-max-value .ui5-progress-indicator-bar{border-radius:.5rem}.ui5-progress-indicator-min-value .ui5-progress-indicator-remaining-bar{border-inline-start:var(--_ui5-v1-24-2_progress_indicator_border);border-radius:.5rem}.ui5-progress-indicator-remaining-bar{justify-content:flex-start;width:var(--_ui5-v1-24-2_progress_indicator_remaining_bar_width);height:100%;display:flex;align-items:center;flex-direction:row;flex-grow:1;flex-basis:0;border:var(--_ui5-v1-24-2_progress_indicator_border);border-inline-start:none;border-radius:var(--_ui5-v1-24-2_progress_indicator_remaining_bar_border_radius);box-sizing:border-box;color:var(--_ui5-v1-24-2_progress_indicator_color);overflow:var(--_ui5-v1-24-2_progress_indicator_remaining_bar_overflow);position:var(--_ui5-v1-24-2_progress_indicator_remaining_bar_position)}.ui5-progress-indicator-value{margin:var(--_ui5-v1-24-2_progress_indicator_value_margin);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;position:var(--_ui5-v1-24-2_progress_indicator_value_position);top:var(--_ui5-v1-24-2_progress_indicator_value_top_position);inset-inline-start:var(--_ui5-v1-24-2_progress_indicator_value_left_position)}.ui5-progress-indicator-icon{margin-inline-start:.375rem;width:var(--_ui5-v1-24-2_progress_indicator_icon_size);height:var(--_ui5-v1-24-2_progress_indicator_icon_size);display:var(--_ui5-v1-24-2_progress_indicator_icon_visibility);position:var(--_ui5-v1-24-2_progress_indicator_icon_position);inset-inline-end:var(--_ui5-v1-24-2_progress_indicator_icon_right_position)}:host([value-state="Error"]) .ui5-progress-indicator-icon{color:var(--_ui5-v1-24-2_progress_indicator_value_state_error_icon_color)}:host([value-state="Warning"]) .ui5-progress-indicator-icon{color:var(--_ui5-v1-24-2_progress_indicator_value_state_warning_icon_color)}:host([value-state="Success"]) .ui5-progress-indicator-icon{color:var(--_ui5-v1-24-2_progress_indicator_value_state_success_icon_color)}:host([value-state="Information"]) .ui5-progress-indicator-icon{color:var(--_ui5-v1-24-2_progress_indicator_value_state_information_icon_color)}:host([value-state="Error"]) .ui5-progress-indicator-bar{background:var(--_ui5-v1-24-2_progress_indicator_value_state_error)}:host([value-state="Warning"]) .ui5-progress-indicator-bar{background:var(--_ui5-v1-24-2_progress_indicator_value_state_warning)}:host([value-state="Success"]) .ui5-progress-indicator-bar{background:var(--_ui5-v1-24-2_progress_indicator_value_state_success)}:host([value-state="Information"]) .ui5-progress-indicator-bar{background:var(--_ui5-v1-24-2_progress_indicator_value_state_information)}:host([value-state="Error"]) .ui5-progress-indicator-root{background:var(--_ui5-v1-24-2_progress_indicator_background_error)}:host([value-state="Warning"]) .ui5-progress-indicator-root{background:var(--_ui5-v1-24-2_progress_indicator_background_warning)}:host([value-state="Success"]) .ui5-progress-indicator-root{background:var(--_ui5-v1-24-2_progress_indicator_background_success)}:host([value-state="Information"]) .ui5-progress-indicator-root{background:var(--_ui5-v1-24-2_progress_indicator_background_information)}:host([value-state="Error"]) .ui5-progress-indicator-remaining-bar{border-color:var(--_ui5-v1-24-2_progress_indicator_border_color_error)}:host([value-state="Warning"]) .ui5-progress-indicator-remaining-bar{border-color:var(--_ui5-v1-24-2_progress_indicator_border_color_warning)}:host([value-state="Success"]) .ui5-progress-indicator-remaining-bar{border-color:var(--_ui5-v1-24-2_progress_indicator_border_color_success)}:host([value-state="Information"]) .ui5-progress-indicator-remaining-bar{border-color:var(--_ui5-v1-24-2_progress_indicator_border_color_information)}:host([disabled]) .ui5-progress-indicator-root{opacity:.4}.ui5-progress-indicator-remaining-bar:before,.ui5-progress-indicator-remaining-bar:after{content:"";display:block;width:.25rem;height:.25rem;position:absolute;border-radius:50%;display:var(--_ui5-v1-24-2_progress_indicator_side_points_visibility);background:var(--_ui5-v1-24-2_progress_indicator_value_state_none)}.ui5-progress-indicator-remaining-bar:before{left:.0625rem}.ui5-progress-indicator-remaining-bar:after{right:.0625rem}:host([value-state="Error"]) .ui5-progress-indicator-remaining-bar:before,:host([value-state="Error"]) .ui5-progress-indicator-remaining-bar:after{background:var(--sapProgress_Value_NegativeBackground)}:host([value-state="Warning"]) .ui5-progress-indicator-remaining-bar:before,:host([value-state="Warning"]) .ui5-progress-indicator-remaining-bar:after{background:var(--sapProgress_Value_CriticalBackground)}:host([value-state="Success"]) .ui5-progress-indicator-remaining-bar:before,:host([value-state="Success"]) .ui5-progress-indicator-remaining-bar:after{background:var(--sapProgress_Value_PositiveBackground)}:host([value-state="Information"]) .ui5-progress-indicator-remaining-bar:before,:host([value-state="Information"]) .ui5-progress-indicator-remaining-bar:after{background:var(--sapProgress_Value_InformationBackground)}
`};var u=function(o,i,r,c){var d=arguments.length,s=d<3?i:c===null?c=Object.getOwnPropertyDescriptor(i,r):c,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,i,r,c);else for(var p=o.length-1;p>=0;p--)(l=o[p])&&(s=(d<3?l(s):d>3?l(i,r,s):l(i,r))||s);return d>3&&s&&Object.defineProperty(i,r,s),s},n;let t=n=class extends b{constructor(){super(),this._previousValue=0,this._transitionDuration=0}onBeforeRendering(){this._transitionDuration=Math.abs(this._previousValue-this.validatedValue)*20,this._previousValue=this.validatedValue}valueStateTextMappings(){return{Error:n.i18nBundle.getText(x),Warning:n.i18nBundle.getText(S),Success:n.i18nBundle.getText(E),Information:n.i18nBundle.getText(T)}}valueStateIconMappings(){return{Error:"status-negative",Warning:"status-critical",Success:"status-positive",Information:"information"}}get styles(){return{bar:{width:`${this.validatedValue}%`,"transition-duration":this.shouldAnimate?`${this._transitionDuration}ms`:"none"}}}get classes(){return{root:{"ui5-progress-indicator-max-value":this.validatedValue===100,"ui5-progress-indicator-min-value":this.validatedValue===0}}}get validatedValue(){return this.value<0?0:this.value>100?100:this.value}get showValueInRemainingBar(){return this.value<=50}get shouldAnimate(){return I()!==w.None}get valueStateText(){const i=`${this.validatedValue}%`,r=this.valueStateTextMappings()[this.valueState];return r?`${i} ${r}`:i}get showIcon(){return this.valueState!==v.None}get valueStateIcon(){return this.valueStateIconMappings()[this.valueState]}get _ariaDisabled(){return this.disabled||void 0}static async onDefine(){n.i18nBundle=await k("@ui5/webcomponents")}};u([_()],t.prototype,"accessibleName",void 0);u([_({type:Boolean})],t.prototype,"disabled",void 0);u([_({type:Boolean})],t.prototype,"hideValue",void 0);u([_({validator:V,defaultValue:0})],t.prototype,"value",void 0);u([_({defaultValue:null})],t.prototype,"displayValue",void 0);u([_({type:v,defaultValue:v.None})],t.prototype,"valueState",void 0);t=n=u([f({tag:"ui5-progress-indicator",renderer:y,styles:C,template:R,dependencies:[$]})],t);t.define();const lr=t;export{lr as default};
