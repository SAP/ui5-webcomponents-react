import{h as e,j as v,f as p,s as h,a as _,m as b,k as m,I as f,x as w}from"./withWebComponent-Bw_l6Ewh.js";import{o as $}from"./ValueState-Bg0UWejw.js";import{e as y}from"./AnimationMode-C75NJghZ.js";import{f as k}from"./i18nBundle-CyjtwURt.js";import{I as V}from"./Icon-Bjam5y2n.js";import{V as x,a as I,c as S,b as N}from"./i18n-defaults-BuF9xM0k.js";import{o as P}from"./class-map-DoF19r8m.js";import{l as a}from"./if-defined-mCyQq_6q.js";import{s as T}from"./style-map-Bys0Ab5G.js";import{s as B}from"./parameters-bundle.css-BFbT_feV.js";import"./utils-BHgxP_Sc.js";import"./index-ClU-Tc1p.js";import"./useIsomorphicLayoutEffect-DCJrFAVs.js";import"./event-Dq0fpeHi.js";import"./Keys-F_3Gvx0K.js";function A(o,r,i){return e`<div class="ui5-progress-indicator-root ${P(this.classes.root)}" role="progressbar" aria-valuemin="0" aria-valuenow="${a(this.validatedValue)}" aria-valuemax="100" aria-valuetext="${a(this.valueStateText)}" aria-label="${a(this.accessibleName)}"><div class="ui5-progress-indicator-bar" part="bar" style="${T(this.styles.bar)}">${this.showValueInRemainingBar?void 0:R.call(this,o,r,i)}</div><div class="ui5-progress-indicator-remaining-bar" part="remaining-bar">${this.showValueInRemainingBar?M.call(this,o,r,i):void 0}</div></div>`}function R(o,r,i){return e`${this.showIcon?z.call(this,o,r,i):void 0}${this.hideValue?void 0:C.call(this,o,r,i)}`}function z(o,r,i){return i?e`<${v("ui5-icon",r,i)} name="${a(this.valueStateIcon)}" class="ui5-progress-indicator-icon"></${v("ui5-icon",r,i)}>`:e`<ui5-icon name="${a(this.valueStateIcon)}" class="ui5-progress-indicator-icon"></ui5-icon>`}function C(o,r,i){return e`<span class="ui5-progress-indicator-value">${this.displayValue?E.call(this,o,r,i):D.call(this,o,r,i)}</span>`}function E(o,r,i){return e`${a(this.displayValue)}`}function D(o,r,i){return e`${a(this.validatedValue)}% `}function M(o,r,i){return e`${this.showIcon?j.call(this,o,r,i):void 0}${this.hideValue?void 0:O.call(this,o,r,i)}`}function j(o,r,i){return i?e`<${v("ui5-icon",r,i)} name="${a(this.valueStateIcon)}" class="ui5-progress-indicator-icon"></${v("ui5-icon",r,i)}>`:e`<ui5-icon name="${a(this.valueStateIcon)}" class="ui5-progress-indicator-icon"></ui5-icon>`}function O(o,r,i){return e`<span class="ui5-progress-indicator-value">${this.displayValue?U.call(this,o,r,i):F.call(this,o,r,i)}</span>`}function U(o,r,i){return e`${a(this.displayValue)}`}function F(o,r,i){return e`${a(this.validatedValue)}% `}p("@ui5/webcomponents-theming","sap_horizon",async()=>h);p("@ui5/webcomponents","sap_horizon",async()=>B);const L={packageName:"@ui5/webcomponents",fileName:"themes/ProgressIndicator.css.ts",content:`:host(:not([hidden])){display:inline-block;min-height:var(_ui5_progress_indicator_host_min_height);min-width:4rem;width:100%;height:var(--_ui5-v2-0-1_progress_indicator_host_height);overflow:hidden;box-sizing:var(--_ui5-v2-0-1_progress_indicator_host_box_sizing);padding:var(--_ui5-v2-0-1_progress_indicator_padding);padding-inline-end:var(--_ui5-v2-0-1_progress_indicator_padding_end)}:host(:not([hidden])[hide-value]){padding-top:var(--_ui5-v2-0-1_progress_indicator_padding_novalue);padding-bottom:var(--_ui5-v2-0-1_progress_indicator_padding_novalue)}.ui5-progress-indicator-root{display:flex;align-items:center;background:var(--_ui5-v2-0-1_progress_indicator_background_none);border-radius:var(--_ui5-v2-0-1_progress_indicator_root_border_radius);overflow:var(--_ui5-v2-0-1_progress_indicator_root_overflow);min-height:var(--_ui5-v2-0-1_progress_indicator_root_min_height);height:var(--_ui5-v2-0-1_progress_indicator_root_height);width:100%;font-size:var(--sapProgress_FontSize);font-family:"72override",var(--sapFontFamily);position:var(--_ui5-v2-0-1_progress_indicator_root_position);box-sizing:border-box}.ui5-progress-indicator-bar{background:var(--_ui5-v2-0-1_progress_indicator_value_state_none);justify-content:flex-end;height:var(--_ui5-v2-0-1_progress_indicator_bar_height);display:flex;align-items:center;flex-direction:row;color:var(--_ui5-v2-0-1_progress_indicator_bar_color);transition-property:width;transition-timing-function:linear;box-sizing:border-box;border:var(--_ui5-v2-0-1_progress_indicator_bar_border_max);border-radius:var(--_ui5-v2-0-1_progress_indicator_bar_border_radius)}.ui5-progress-indicator-min-value .ui5-progress-indicator-bar,.ui5-progress-indicator-max-value .ui5-progress-indicator-remaining-bar{border:none}.ui5-progress-indicator-max-value .ui5-progress-indicator-bar{border-radius:.5rem}.ui5-progress-indicator-min-value .ui5-progress-indicator-remaining-bar{border-inline-start:var(--_ui5-v2-0-1_progress_indicator_border);border-radius:.5rem}.ui5-progress-indicator-remaining-bar{justify-content:flex-start;width:var(--_ui5-v2-0-1_progress_indicator_remaining_bar_width);height:100%;display:flex;align-items:center;flex-direction:row;flex-grow:1;flex-basis:0;border:var(--_ui5-v2-0-1_progress_indicator_border);border-inline-start:none;border-radius:var(--_ui5-v2-0-1_progress_indicator_remaining_bar_border_radius);box-sizing:border-box;color:var(--_ui5-v2-0-1_progress_indicator_color);overflow:var(--_ui5-v2-0-1_progress_indicator_remaining_bar_overflow);position:var(--_ui5-v2-0-1_progress_indicator_remaining_bar_position)}.ui5-progress-indicator-value{margin:var(--_ui5-v2-0-1_progress_indicator_value_margin);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;position:var(--_ui5-v2-0-1_progress_indicator_value_position);top:var(--_ui5-v2-0-1_progress_indicator_value_top_position);inset-inline-start:var(--_ui5-v2-0-1_progress_indicator_value_left_position)}.ui5-progress-indicator-icon{margin-inline-start:.375rem;width:var(--_ui5-v2-0-1_progress_indicator_icon_size);height:var(--_ui5-v2-0-1_progress_indicator_icon_size);display:var(--_ui5-v2-0-1_progress_indicator_icon_visibility);position:var(--_ui5-v2-0-1_progress_indicator_icon_position);inset-inline-end:var(--_ui5-v2-0-1_progress_indicator_icon_right_position)}:host([value-state="Negative"]) .ui5-progress-indicator-icon{color:var(--_ui5-v2-0-1_progress_indicator_value_state_error_icon_color)}:host([value-state="Critical"]) .ui5-progress-indicator-icon{color:var(--_ui5-v2-0-1_progress_indicator_value_state_warning_icon_color)}:host([value-state="Positive"]) .ui5-progress-indicator-icon{color:var(--_ui5-v2-0-1_progress_indicator_value_state_success_icon_color)}:host([value-state="Information"]) .ui5-progress-indicator-icon{color:var(--_ui5-v2-0-1_progress_indicator_value_state_information_icon_color)}:host([value-state="Negative"]) .ui5-progress-indicator-bar{background:var(--_ui5-v2-0-1_progress_indicator_value_state_error)}:host([value-state="Critical"]) .ui5-progress-indicator-bar{background:var(--_ui5-v2-0-1_progress_indicator_value_state_warning)}:host([value-state="Positive"]) .ui5-progress-indicator-bar{background:var(--_ui5-v2-0-1_progress_indicator_value_state_success)}:host([value-state="Information"]) .ui5-progress-indicator-bar{background:var(--_ui5-v2-0-1_progress_indicator_value_state_information)}:host([value-state="Negative"]) .ui5-progress-indicator-root{background:var(--_ui5-v2-0-1_progress_indicator_background_error)}:host([value-state="Critical"]) .ui5-progress-indicator-root{background:var(--_ui5-v2-0-1_progress_indicator_background_warning)}:host([value-state="Positive"]) .ui5-progress-indicator-root{background:var(--_ui5-v2-0-1_progress_indicator_background_success)}:host([value-state="Information"]) .ui5-progress-indicator-root{background:var(--_ui5-v2-0-1_progress_indicator_background_information)}:host([value-state="Negative"]) .ui5-progress-indicator-remaining-bar{border-color:var(--_ui5-v2-0-1_progress_indicator_border_color_error)}:host([value-state="Critical"]) .ui5-progress-indicator-remaining-bar{border-color:var(--_ui5-v2-0-1_progress_indicator_border_color_warning)}:host([value-state="Positive"]) .ui5-progress-indicator-remaining-bar{border-color:var(--_ui5-v2-0-1_progress_indicator_border_color_success)}:host([value-state="Information"]) .ui5-progress-indicator-remaining-bar{border-color:var(--_ui5-v2-0-1_progress_indicator_border_color_information)}.ui5-progress-indicator-remaining-bar:before,.ui5-progress-indicator-remaining-bar:after{content:"";display:block;width:.25rem;height:.25rem;position:absolute;border-radius:50%;display:var(--_ui5-v2-0-1_progress_indicator_side_points_visibility);background:var(--_ui5-v2-0-1_progress_indicator_value_state_none)}.ui5-progress-indicator-remaining-bar:before{left:.0625rem}.ui5-progress-indicator-remaining-bar:after{right:.0625rem}:host([value-state="Negative"]) .ui5-progress-indicator-remaining-bar:before,:host([value-state="Negative"]) .ui5-progress-indicator-remaining-bar:after{background:var(--sapProgress_Value_NegativeBackground)}:host([value-state="Critical"]) .ui5-progress-indicator-remaining-bar:before,:host([value-state="Critical"]) .ui5-progress-indicator-remaining-bar:after{background:var(--sapProgress_Value_CriticalBackground)}:host([value-state="Positive"]) .ui5-progress-indicator-remaining-bar:before,:host([value-state="Positive"]) .ui5-progress-indicator-remaining-bar:after{background:var(--sapProgress_Value_PositiveBackground)}:host([value-state="Information"]) .ui5-progress-indicator-remaining-bar:before,:host([value-state="Information"]) .ui5-progress-indicator-remaining-bar:after{background:var(--sapProgress_Value_InformationBackground)}
`};var u=function(o,r,i,c){var d=arguments.length,s=d<3?r:c===null?c=Object.getOwnPropertyDescriptor(r,i):c,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,r,i,c);else for(var g=o.length-1;g>=0;g--)(l=o[g])&&(s=(d<3?l(s):d>3?l(r,i,s):l(r,i))||s);return d>3&&s&&Object.defineProperty(r,i,s),s},n;let t=n=class extends f{constructor(){super(),this.hideValue=!1,this.value=0,this.valueState="None",this._previousValue=0,this._transitionDuration=0}onBeforeRendering(){this._transitionDuration=Math.abs(this._previousValue-this.validatedValue)*20,this._previousValue=this.validatedValue}valueStateTextMappings(){return{Negative:n.i18nBundle.getText(x),Critical:n.i18nBundle.getText(I),Positive:n.i18nBundle.getText(S),Information:n.i18nBundle.getText(N)}}valueStateIconMappings(){return{Negative:"status-negative",Critical:"status-critical",Positive:"status-positive",Information:"information"}}get styles(){return{bar:{width:`${this.validatedValue}%`,"transition-duration":this.shouldAnimate?`${this._transitionDuration}ms`:"none"}}}get classes(){return{root:{"ui5-progress-indicator-max-value":this.validatedValue===100,"ui5-progress-indicator-min-value":this.validatedValue===0}}}get validatedValue(){return this.value<0?0:this.value>100?100:this.value}get showValueInRemainingBar(){return this.value<=50}get shouldAnimate(){return y()!==w.None}get valueStateText(){const r=`${this.validatedValue}%`,i=this.valueStateTextMappings()[this.valueState];return i?`${r} ${i}`:r}get showIcon(){return this.valueState!==$.None}get valueStateIcon(){return this.valueStateIconMappings()[this.valueState]}static async onDefine(){n.i18nBundle=await k("@ui5/webcomponents")}};u([_()],t.prototype,"accessibleName",void 0);u([_({type:Boolean})],t.prototype,"hideValue",void 0);u([_({type:Number})],t.prototype,"value",void 0);u([_()],t.prototype,"displayValue",void 0);u([_()],t.prototype,"valueState",void 0);t=n=u([b({tag:"ui5-progress-indicator",renderer:m,styles:L,template:A,dependencies:[V]})],t);t.define();const si=t;export{si as default};
