import{C as b}from"./UI5Element-BSD7m3Nn.js";import{b as a,l as e,f as v,s as m,a as u,m as f,c as w}from"./withWebComponent-DbBZwVV6.js";import{f as h,c as y}from"./Boot-Bi0-wsLc.js";import{o as p}from"./ValueState-Bg0UWejw.js";import{t as V}from"./Integer-WDQzHAdZ.js";import{e as $}from"./AnimationMode-Ckv007At.js";import{f as k}from"./i18nBundle-D-vhNEte.js";import{I as x}from"./Icon-CxSx41s_.js";import{V as I,a as S,c as P,b as N}from"./i18n-defaults-Dk6PQJ4F.js";import{o as T}from"./class-map-CgjcvVes.js";import{s as B}from"./style-map-D9IWnstk.js";import{s as A}from"./parameters-bundle.css-B_nLitlw.js";import"./CustomElementsScopeUtils-DQm3oQ75.js";import"./useIsomorphicLayoutEffect-CZEdMYkS.js";import"./index-gJgmXzrm.js";import"./EventProvider-CVfkyUHo.js";import"./utils-D-LpYKBL.js";import"./event-Dq0fpeHi.js";import"./Icons-DNVx3qDv.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";function C(o,i,r){return a`<div class="ui5-progress-indicator-root ${T(this.classes.root)}" role="progressbar" aria-valuemin="0" aria-valuenow="${e(this.validatedValue)}" aria-valuemax="100" aria-valuetext="${e(this.valueStateText)}" aria-label="${e(this.accessibleName)}"><div class="ui5-progress-indicator-bar" part="bar" style="${B(this.styles.bar)}">${this.showValueInRemainingBar?void 0:R.call(this,o,i,r)}</div><div class="ui5-progress-indicator-remaining-bar" part="remaining-bar">${this.showValueInRemainingBar?O.call(this,o,i,r):void 0}</div></div>`}function R(o,i,r){return a`${this.showIcon?z.call(this,o,i,r):void 0}${this.hideValue?void 0:E.call(this,o,i,r)}`}function z(o,i,r){return r?a`<${v("ui5-icon",i,r)} name="${e(this.valueStateIcon)}" class="ui5-progress-indicator-icon"></${v("ui5-icon",i,r)}>`:a`<ui5-icon name="${e(this.valueStateIcon)}" class="ui5-progress-indicator-icon"></ui5-icon>`}function E(o,i,r){return a`<span class="ui5-progress-indicator-value">${this.displayValue?D.call(this,o,i,r):M.call(this,o,i,r)}</span>`}function D(o,i,r){return a`${e(this.displayValue)}`}function M(o,i,r){return a`${e(this.validatedValue)}% `}function O(o,i,r){return a`${this.showIcon?j.call(this,o,i,r):void 0}${this.hideValue?void 0:U.call(this,o,i,r)}`}function j(o,i,r){return r?a`<${v("ui5-icon",i,r)} name="${e(this.valueStateIcon)}" class="ui5-progress-indicator-icon"></${v("ui5-icon",i,r)}>`:a`<ui5-icon name="${e(this.valueStateIcon)}" class="ui5-progress-indicator-icon"></ui5-icon>`}function U(o,i,r){return a`<span class="ui5-progress-indicator-value">${this.displayValue?F.call(this,o,i,r):L.call(this,o,i,r)}</span>`}function F(o,i,r){return a`${e(this.displayValue)}`}function L(o,i,r){return a`${e(this.validatedValue)}% `}h("@ui5/webcomponents-theming","sap_horizon",async()=>m);h("@ui5/webcomponents","sap_horizon",async()=>A);const G={packageName:"@ui5/webcomponents",fileName:"themes/ProgressIndicator.css.ts",content:`:host(:not([hidden])){display:inline-block;min-height:var(_ui5_progress_indicator_host_min_height);min-width:4rem;width:100%;height:var(--_ui5-v2-0-0-rc-5_progress_indicator_host_height);overflow:hidden;box-sizing:var(--_ui5-v2-0-0-rc-5_progress_indicator_host_box_sizing);padding:var(--_ui5-v2-0-0-rc-5_progress_indicator_padding);padding-inline-end:var(--_ui5-v2-0-0-rc-5_progress_indicator_padding_end)}:host(:not([hidden])[hide-value]){padding-top:var(--_ui5-v2-0-0-rc-5_progress_indicator_padding_novalue);padding-bottom:var(--_ui5-v2-0-0-rc-5_progress_indicator_padding_novalue)}.ui5-progress-indicator-root{display:flex;align-items:center;background:var(--_ui5-v2-0-0-rc-5_progress_indicator_background_none);border-radius:var(--_ui5-v2-0-0-rc-5_progress_indicator_root_border_radius);overflow:var(--_ui5-v2-0-0-rc-5_progress_indicator_root_overflow);min-height:var(--_ui5-v2-0-0-rc-5_progress_indicator_root_min_height);height:var(--_ui5-v2-0-0-rc-5_progress_indicator_root_height);width:100%;font-size:var(--sapProgress_FontSize);font-family:"72override",var(--sapFontFamily);position:var(--_ui5-v2-0-0-rc-5_progress_indicator_root_position);box-sizing:border-box}.ui5-progress-indicator-bar{background:var(--_ui5-v2-0-0-rc-5_progress_indicator_value_state_none);justify-content:flex-end;height:var(--_ui5-v2-0-0-rc-5_progress_indicator_bar_height);display:flex;align-items:center;flex-direction:row;color:var(--_ui5-v2-0-0-rc-5_progress_indicator_bar_color);transition-property:width;transition-timing-function:linear;box-sizing:border-box;border:var(--_ui5-v2-0-0-rc-5_progress_indicator_bar_border_max);border-radius:var(--_ui5-v2-0-0-rc-5_progress_indicator_bar_border_radius)}.ui5-progress-indicator-min-value .ui5-progress-indicator-bar,.ui5-progress-indicator-max-value .ui5-progress-indicator-remaining-bar{border:none}.ui5-progress-indicator-max-value .ui5-progress-indicator-bar{border-radius:.5rem}.ui5-progress-indicator-min-value .ui5-progress-indicator-remaining-bar{border-inline-start:var(--_ui5-v2-0-0-rc-5_progress_indicator_border);border-radius:.5rem}.ui5-progress-indicator-remaining-bar{justify-content:flex-start;width:var(--_ui5-v2-0-0-rc-5_progress_indicator_remaining_bar_width);height:100%;display:flex;align-items:center;flex-direction:row;flex-grow:1;flex-basis:0;border:var(--_ui5-v2-0-0-rc-5_progress_indicator_border);border-inline-start:none;border-radius:var(--_ui5-v2-0-0-rc-5_progress_indicator_remaining_bar_border_radius);box-sizing:border-box;color:var(--_ui5-v2-0-0-rc-5_progress_indicator_color);overflow:var(--_ui5-v2-0-0-rc-5_progress_indicator_remaining_bar_overflow);position:var(--_ui5-v2-0-0-rc-5_progress_indicator_remaining_bar_position)}.ui5-progress-indicator-value{margin:var(--_ui5-v2-0-0-rc-5_progress_indicator_value_margin);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;position:var(--_ui5-v2-0-0-rc-5_progress_indicator_value_position);top:var(--_ui5-v2-0-0-rc-5_progress_indicator_value_top_position);inset-inline-start:var(--_ui5-v2-0-0-rc-5_progress_indicator_value_left_position)}.ui5-progress-indicator-icon{margin-inline-start:.375rem;width:var(--_ui5-v2-0-0-rc-5_progress_indicator_icon_size);height:var(--_ui5-v2-0-0-rc-5_progress_indicator_icon_size);display:var(--_ui5-v2-0-0-rc-5_progress_indicator_icon_visibility);position:var(--_ui5-v2-0-0-rc-5_progress_indicator_icon_position);inset-inline-end:var(--_ui5-v2-0-0-rc-5_progress_indicator_icon_right_position)}:host([value-state="Negative"]) .ui5-progress-indicator-icon{color:var(--_ui5-v2-0-0-rc-5_progress_indicator_value_state_error_icon_color)}:host([value-state="Critical"]) .ui5-progress-indicator-icon{color:var(--_ui5-v2-0-0-rc-5_progress_indicator_value_state_warning_icon_color)}:host([value-state="Positive"]) .ui5-progress-indicator-icon{color:var(--_ui5-v2-0-0-rc-5_progress_indicator_value_state_success_icon_color)}:host([value-state="Information"]) .ui5-progress-indicator-icon{color:var(--_ui5-v2-0-0-rc-5_progress_indicator_value_state_information_icon_color)}:host([value-state="Negative"]) .ui5-progress-indicator-bar{background:var(--_ui5-v2-0-0-rc-5_progress_indicator_value_state_error)}:host([value-state="Critical"]) .ui5-progress-indicator-bar{background:var(--_ui5-v2-0-0-rc-5_progress_indicator_value_state_warning)}:host([value-state="Positive"]) .ui5-progress-indicator-bar{background:var(--_ui5-v2-0-0-rc-5_progress_indicator_value_state_success)}:host([value-state="Information"]) .ui5-progress-indicator-bar{background:var(--_ui5-v2-0-0-rc-5_progress_indicator_value_state_information)}:host([value-state="Negative"]) .ui5-progress-indicator-root{background:var(--_ui5-v2-0-0-rc-5_progress_indicator_background_error)}:host([value-state="Critical"]) .ui5-progress-indicator-root{background:var(--_ui5-v2-0-0-rc-5_progress_indicator_background_warning)}:host([value-state="Positive"]) .ui5-progress-indicator-root{background:var(--_ui5-v2-0-0-rc-5_progress_indicator_background_success)}:host([value-state="Information"]) .ui5-progress-indicator-root{background:var(--_ui5-v2-0-0-rc-5_progress_indicator_background_information)}:host([value-state="Negative"]) .ui5-progress-indicator-remaining-bar{border-color:var(--_ui5-v2-0-0-rc-5_progress_indicator_border_color_error)}:host([value-state="Critical"]) .ui5-progress-indicator-remaining-bar{border-color:var(--_ui5-v2-0-0-rc-5_progress_indicator_border_color_warning)}:host([value-state="Positive"]) .ui5-progress-indicator-remaining-bar{border-color:var(--_ui5-v2-0-0-rc-5_progress_indicator_border_color_success)}:host([value-state="Information"]) .ui5-progress-indicator-remaining-bar{border-color:var(--_ui5-v2-0-0-rc-5_progress_indicator_border_color_information)}.ui5-progress-indicator-remaining-bar:before,.ui5-progress-indicator-remaining-bar:after{content:"";display:block;width:.25rem;height:.25rem;position:absolute;border-radius:50%;display:var(--_ui5-v2-0-0-rc-5_progress_indicator_side_points_visibility);background:var(--_ui5-v2-0-0-rc-5_progress_indicator_value_state_none)}.ui5-progress-indicator-remaining-bar:before{left:.0625rem}.ui5-progress-indicator-remaining-bar:after{right:.0625rem}:host([value-state="Negative"]) .ui5-progress-indicator-remaining-bar:before,:host([value-state="Negative"]) .ui5-progress-indicator-remaining-bar:after{background:var(--sapProgress_Value_NegativeBackground)}:host([value-state="Critical"]) .ui5-progress-indicator-remaining-bar:before,:host([value-state="Critical"]) .ui5-progress-indicator-remaining-bar:after{background:var(--sapProgress_Value_CriticalBackground)}:host([value-state="Positive"]) .ui5-progress-indicator-remaining-bar:before,:host([value-state="Positive"]) .ui5-progress-indicator-remaining-bar:after{background:var(--sapProgress_Value_PositiveBackground)}:host([value-state="Information"]) .ui5-progress-indicator-remaining-bar:before,:host([value-state="Information"]) .ui5-progress-indicator-remaining-bar:after{background:var(--sapProgress_Value_InformationBackground)}
`};var c=function(o,i,r,_){var d=arguments.length,s=d<3?i:_===null?_=Object.getOwnPropertyDescriptor(i,r):_,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(o,i,r,_);else for(var g=o.length-1;g>=0;g--)(l=o[g])&&(s=(d<3?l(s):d>3?l(i,r,s):l(i,r))||s);return d>3&&s&&Object.defineProperty(i,r,s),s},n;let t=n=class extends b{constructor(){super(),this._previousValue=0,this._transitionDuration=0}onBeforeRendering(){this._transitionDuration=Math.abs(this._previousValue-this.validatedValue)*20,this._previousValue=this.validatedValue}valueStateTextMappings(){return{Negative:n.i18nBundle.getText(I),Critical:n.i18nBundle.getText(S),Positive:n.i18nBundle.getText(P),Information:n.i18nBundle.getText(N)}}valueStateIconMappings(){return{Negative:"status-negative",Critical:"status-critical",Positive:"status-positive",Information:"information"}}get styles(){return{bar:{width:`${this.validatedValue}%`,"transition-duration":this.shouldAnimate?`${this._transitionDuration}ms`:"none"}}}get classes(){return{root:{"ui5-progress-indicator-max-value":this.validatedValue===100,"ui5-progress-indicator-min-value":this.validatedValue===0}}}get validatedValue(){return this.value<0?0:this.value>100?100:this.value}get showValueInRemainingBar(){return this.value<=50}get shouldAnimate(){return $()!==y.None}get valueStateText(){const i=`${this.validatedValue}%`,r=this.valueStateTextMappings()[this.valueState];return r?`${i} ${r}`:i}get showIcon(){return this.valueState!==p.None}get valueStateIcon(){return this.valueStateIconMappings()[this.valueState]}static async onDefine(){n.i18nBundle=await k("@ui5/webcomponents")}};c([u()],t.prototype,"accessibleName",void 0);c([u({type:Boolean})],t.prototype,"hideValue",void 0);c([u({validator:V,defaultValue:0})],t.prototype,"value",void 0);c([u({defaultValue:null})],t.prototype,"displayValue",void 0);c([u({type:p,defaultValue:p.None})],t.prototype,"valueState",void 0);t=n=c([f({tag:"ui5-progress-indicator",renderer:w,styles:G,template:C,dependencies:[x]})],t);t.define();const vr=t;export{vr as default};
