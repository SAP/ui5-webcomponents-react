import{r as g,U as m,l as y}from"./UI5Element-66_7Xn_3.js";import{s as w,a as $,b as u,l as i,d as b,p as a,c as S,f as B}from"./withWebComponent-2sjwM42G.js";import{s as T}from"./slot-HSrR9XJ-.js";import{e as C,a as E}from"./Icon-Pjew2RCR.js";import{d as N}from"./i18nBundle-Q0g0h3jg.js";import{V as d}from"./ValueState-zUcANXoY.js";import{g as A}from"./VersionInfo-pP_ltRZs.js";import{g as I}from"./AriaLabelHelper-RbKlVwzD.js";import{k as p,l as F}from"./Icons-nm0Q71Sx.js";import"./accept-mkX15jfz.js";import R from"./Label-h0RP0plm.js";import{W as x}from"./WrappingType-avPrqc94.js";import{V as z,a as L,c as D}from"./i18n-defaults-RBzcmDt8.js";import{o as V}from"./class-map--IQ_mtyb.js";import"./CustomElementsScopeUtils-EW5YHFd4.js";import"./utils-QJOW-WwB.js";import"./index-OjgoNOWw.js";import"./jsx-runtime-DtaoT6pD.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";g("@ui5/webcomponents-theming","sap_horizon",async()=>w);g("@ui5/webcomponents","sap_horizon",async()=>$);const W={packageName:"@ui5/webcomponents",fileName:"themes/CheckBox.css",content:'.ui5-hidden-text{clip:rect(1px,1px,1px,1px);font-size:0;left:-1000px;pointer-events:none;position:absolute;top:-1000px;user-select:none}:host{-webkit-tap-highlight-color:rgba(0,0,0,0)}:host(:not([hidden])){display:inline-block}:host{border-radius:var(--_ui5-v1-19-0_checkbox_border_radius);cursor:pointer;max-width:100%;outline:none;overflow:hidden;transition:var(--_ui5-v1-19-0_checkbox_transition);user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}:host([disabled]){cursor:default}:host([disabled]) .ui5-checkbox-root{opacity:var(--_ui5-v1-19-0_checkbox_disabled_opacity)}:host([disabled]) .ui5-checkbox-inner{border-color:var(--_ui5-v1-19-0_checkbox_inner_disabled_border_color)}:host([disabled]) .ui5-checkbox-label{color:var(--_ui5-v1-19-0_checkbox_disabled_label_color)}:host([readonly]:not([value-state=Warning]):not([value-state=Error])) .ui5-checkbox-inner{background:var(--sapField_ReadOnly_Background);border:var(--_ui5-v1-19-0_checkbox_inner_readonly_border);color:var(--sapField_TextColor)}:host([wrapping-type=Normal][text]) .ui5-checkbox-root{align-items:flex-start;box-sizing:border-box;min-height:auto;padding-bottom:var(--_ui5-v1-19-0_checkbox_root_side_padding);padding-top:var(--_ui5-v1-19-0_checkbox_root_side_padding)}:host([wrapping-type=Normal][text]) .ui5-checkbox-root .ui5-checkbox-inner,:host([wrapping-type=Normal][text]) .ui5-checkbox-root .ui5-checkbox-label{margin-top:var(--_ui5-v1-19-0_checkbox_wrapped_content_margin_top)}:host([wrapping-type=Normal][text]) .ui5-checkbox-root .ui5-checkbox-label{align-self:center;overflow-wrap:break-word}:host([wrapping-type=Normal]) .ui5-checkbox-root:focus:before{bottom:var(--_ui5-v1-19-0_checkbox_wrapped_focus_left_top_bottom_position)}:host([value-state=Error]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner,:host([value-state=Error]) .ui5-checkbox-inner{background:var(--sapField_InvalidBackground);border:var(--_ui5-v1-19-0_checkbox_inner_error_border);color:var(--sapField_InvalidColor)}:host([value-state=Error]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner{background:var(--_ui5-v1-19-0_checkbox_inner_error_background_hover)}:host([value-state=Warning]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner,:host([value-state=Warning]) .ui5-checkbox-inner{background:var(--sapField_WarningBackground);border:var(--_ui5-v1-19-0_checkbox_inner_warning_border);color:var(--_ui5-v1-19-0_checkbox_inner_warning_color)}:host([value-state=Warning]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner{background:var(--_ui5-v1-19-0_checkbox_inner_warning_background_hover)}:host([value-state=Information]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner,:host([value-state=Information]) .ui5-checkbox-inner{background:var(--sapField_InformationBackground);border:var(--_ui5-v1-19-0_checkbox_inner_information_border);color:var(--_ui5-v1-19-0_checkbox_inner_information_color)}:host([value-state=Information]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner{background:var(--_ui5-v1-19-0_checkbox_inner_information_background_hover)}:host([value-state=Success]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner,:host([value-state=Success]) .ui5-checkbox-inner{background:var(--sapField_SuccessBackground);border:var(--_ui5-v1-19-0_checkbox_inner_success_border);color:var(--sapField_SuccessColor)}:host([value-state=Success]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner{background:var(--_ui5-v1-19-0_checkbox_inner_success_background_hover)}:host([value-state=Warning]) .ui5-checkbox-icon,:host([value-state=Warning][indeterminate]) .ui5-checkbox-inner:after{color:var(--_ui5-v1-19-0_checkbox_checkmark_warning_color)}:host([text]) .ui5-checkbox-root{padding-inline-end:var(--_ui5-v1-19-0_checkbox_right_focus_distance)}:host([text]) .ui5-checkbox-root:focus:before{inset-inline-end:0}.ui5-checkbox-root{align-items:center;border:var(--_ui5-v1-19-0_checkbox_default_focus_border);border-radius:var(--_ui5-v1-19-0_checkbox_border_radius);box-sizing:border-box;display:inline-flex;min-height:var(--_ui5-v1-19-0_checkbox_width_height);min-width:var(--_ui5-v1-19-0_checkbox_width_height);outline:none;padding:0 var(--_ui5-v1-19-0_checkbox_wrapper_padding);position:relative;transition:var(--_ui5-v1-19-0_checkbox_transition);width:100%}.ui5-checkbox-root:focus:before{border:var(--_ui5-v1-19-0_checkbox_focus_outline);border-radius:var(--_ui5-v1-19-0_checkbox_focus_border_radius);content:"";display:var(--_ui5-v1-19-0_checkbox_focus_outline_display);inset-block:var(--_ui5-v1-19-0_checkbox_focus_position);inset-inline:var(--_ui5-v1-19-0_checkbox_focus_position);position:absolute}:host .ui5-checkbox-root:focus{border:var(--_ui5-v1-19-0_checkbox_focus_border);border-radius:.5rem}:host(:hover:not([disabled])){background:var(--_ui5-v1-19-0_checkbox_outer_hover_background)}.ui5-checkbox--hoverable .ui5-checkbox-label:hover{color:var(--_ui5-v1-19-0_checkbox_label_color)}:host(:not([active]):not([checked]):not([value-state])) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner,:host(:not([active]):not([checked])[value-state=None]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner{background:var(--_ui5-v1-19-0_checkbox_hover_background);border-color:var(--_ui5-v1-19-0_checkbox_inner_hover_border_color)}:host(:not([active])[checked]:not([value-state])) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner,:host(:not([active])[checked][value-state=None]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner{background:var(--_ui5-v1-19-0_checkbox_hover_background);border-color:var(--_ui5-v1-19-0_checkbox_inner_hover_checked_border_color)}:host([checked]:not([value-state])) .ui5-checkbox-inner,:host([checked][value-state=None]) .ui5-checkbox-inner{border-color:var(--_ui5-v1-19-0_checkbox_inner_selected_border_color)}:host([active]:not([checked]):not([value-state]):not([disabled])) .ui5-checkbox-inner,:host([active]:not([checked])[value-state=None]:not([disabled])) .ui5-checkbox-inner{background-color:var(--_ui5-v1-19-0_checkbox_active_background);border-color:var(--_ui5-v1-19-0_checkbox_inner_active_border_color)}:host([active][checked]:not([value-state]):not([disabled])) .ui5-checkbox-inner,:host([active][checked][value-state=None]:not([disabled])) .ui5-checkbox-inner{background-color:var(--_ui5-v1-19-0_checkbox_active_background);border-color:var(--_ui5-v1-19-0_checkbox_inner_selected_border_color)}.ui5-checkbox-inner{background:var(--_ui5-v1-19-0_checkbox_inner_background);border:var(--_ui5-v1-19-0_checkbox_inner_border);border-radius:var(--_ui5-v1-19-0_checkbox_inner_border_radius);box-sizing:border-box;color:var(--_ui5-v1-19-0_checkbox_checkmark_color);cursor:inherit;height:var(--_ui5-v1-19-0_checkbox_inner_width_height);max-height:var(--_ui5-v1-19-0_checkbox_inner_width_height);max-width:var(--_ui5-v1-19-0_checkbox_inner_width_height);min-width:var(--_ui5-v1-19-0_checkbox_inner_width_height);position:relative}:host([indeterminate][checked]) .ui5-checkbox-inner:after{background-color:currentColor;content:"";height:var(--_ui5-v1-19-0_checkbox_partially_icon_size);left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:var(--_ui5-v1-19-0_checkbox_partially_icon_size)}.ui5-checkbox-inner input{-webkit-appearance:none;font-size:inherit;left:0;position:absolute;visibility:hidden;width:0}.ui5-checkbox-root .ui5-checkbox-label{color:var(--_ui5-v1-19-0_checkbox_label_color);cursor:inherit;margin-inline-start:var(--_ui5-v1-19-0_checkbox_label_offset);overflow:hidden;pointer-events:none;text-overflow:ellipsis}.ui5-checkbox-icon{color:currentColor;cursor:inherit;height:var(--_ui5-v1-19-0_checkbox_icon_size);left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:var(--_ui5-v1-19-0_checkbox_icon_size)}'};function U(c,e,o){return u`<div class="ui5-checkbox-root ${V(this.classes.main)}" role="checkbox" part="root" aria-checked="${i(this.effectiveAriaChecked)}" aria-readonly="${i(this.ariaReadonly)}" aria-disabled="${i(this.effectiveAriaDisabled)}" aria-label="${i(this.ariaLabelText)}" aria-labelledby="${i(this.ariaLabelledBy)}" aria-describedby="${i(this.ariaDescribedBy)}" aria-required="${i(this.required)}" tabindex="${i(this.effectiveTabIndex)}" @mousedown="${this._onmousedown}" @mouseup="${this._onmouseup}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click="${this._onclick}" @focusout="${this._onfocusout}"><div id="${i(this._id)}-CbBg" class="ui5-checkbox-inner">${this.isCompletelyChecked?O.call(this,c,e,o):void 0}<input id="${i(this._id)}-CB" type='checkbox' ?checked="${this.checked}" ?readonly="${this.readonly}" ?disabled="${this.disabled}" tabindex="-1" aria-hidden="true" data-sap-no-tab-ref /></div>${this.text?P.call(this,c,e,o):void 0}${this.hasValueState?j.call(this,c,e,o):void 0}<slot name="formSupport"></slot></div>`}function O(c,e,o){return o?u`<${b("ui5-icon",e,o)} aria-hidden="true" name="accept" class="ui5-checkbox-icon"></${b("ui5-icon",e,o)}>`:u`<ui5-icon aria-hidden="true" name="accept" class="ui5-checkbox-icon"></ui5-icon>`}function P(c,e,o){return o?u`<${b("ui5-label",e,o)} id="${i(this._id)}-label" class="ui5-checkbox-label" wrapping-type="${i(this.wrappingType)}">${i(this.text)}</${b("ui5-label",e,o)}>`:u`<ui5-label id="${i(this._id)}-label" class="ui5-checkbox-label" wrapping-type="${i(this.wrappingType)}">${i(this.text)}</ui5-label>`}function j(c,e,o){return u`<span id="${i(this._id)}-descr" class="ui5-hidden-text">${i(this.valueStateText)}</span>`}var r=function(c,e,o,n){var l=arguments.length,s=l<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,_;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(c,e,o,n);else for(var v=c.length-1;v>=0;v--)(_=c[v])&&(s=(l<3?_(s):l>3?_(e,o,s):_(e,o))||s);return l>3&&s&&Object.defineProperty(e,o,s),s},h;let f=!1,k,t=h=class extends m{constructor(){super(),this._deactivate=()=>{k&&(k.active=!1)},f||(document.addEventListener("mouseup",this._deactivate),f=!0)}onBeforeRendering(){this._enableFormSupport()}_enableFormSupport(){const e=A("FormSupport");e?e.syncNativeHiddenInput(this,(o,n)=>{n.disabled=!!o.disabled,n.checked=!!o.checked,n.value=o.checked?"on":""}):this.name&&console.warn('In order for the "name" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";')}_onclick(){this.toggle()}_onmousedown(){this.readonly||this.disabled||(this.active=!0,k=this)}_onmouseup(){this.active=!1}_onfocusout(){this.active=!1}_onkeydown(e){p(e)&&(e.preventDefault(),this.active=!0),F(e)&&(this.toggle(),this.active=!0)}_onkeyup(e){p(e)&&this.toggle(),this.active=!1}toggle(){if(this.canToggle()){const e={checked:this.checked,indeterminate:this.indeterminate};this.indeterminate?(this.indeterminate=!1,this.checked=!0):this.checked=!this.checked;const o=!this.fireEvent("change",null,!0),n=!this.fireEvent("value-changed",null,!0);(o||n)&&(this.checked=e.checked,this.indeterminate=e.indeterminate)}return this}canToggle(){return!(this.disabled||this.readonly)}valueStateTextMappings(){return{Error:h.i18nBundle.getText(z),Warning:h.i18nBundle.getText(L),Success:h.i18nBundle.getText(D)}}get ariaLabelText(){return I(this)}get classes(){return{main:{"ui5-checkbox--hoverable":!this.disabled&&!this.readonly&&y()}}}get ariaReadonly(){return this.readonly?"true":void 0}get effectiveAriaDisabled(){return this.disabled?"true":void 0}get effectiveAriaChecked(){return this.indeterminate&&this.checked?"mixed":this.checked}get ariaLabelledBy(){if(!this.ariaLabelText)return this.text?`${this._id}-label`:void 0}get ariaDescribedBy(){return this.hasValueState?`${this._id}-descr`:void 0}get hasValueState(){return this.valueState!==d.None}get valueStateText(){if(this.valueState!==d.None&&this.valueState!==d.Information)return this.valueStateTextMappings()[this.valueState]}get effectiveTabIndex(){const e=this.getAttribute("tabindex");return this.disabled?void 0:e||"0"}get isCompletelyChecked(){return this.checked&&!this.indeterminate}static async onDefine(){h.i18nBundle=await N("@ui5/webcomponents")}};r([a()],t.prototype,"accessibleNameRef",void 0);r([a()],t.prototype,"accessibleName",void 0);r([a({type:Boolean})],t.prototype,"disabled",void 0);r([a({type:Boolean})],t.prototype,"readonly",void 0);r([a({type:Boolean})],t.prototype,"required",void 0);r([a({type:Boolean})],t.prototype,"indeterminate",void 0);r([a({type:Boolean})],t.prototype,"checked",void 0);r([a()],t.prototype,"text",void 0);r([a({type:d,defaultValue:d.None})],t.prototype,"valueState",void 0);r([a({type:x,defaultValue:x.None})],t.prototype,"wrappingType",void 0);r([a()],t.prototype,"name",void 0);r([a({type:Boolean})],t.prototype,"active",void 0);r([T()],t.prototype,"formSupport",void 0);t=h=r([S({tag:"ui5-checkbox",languageAware:!0,renderer:B,template:U,styles:W,dependencies:[R,E]}),C("change")],t);t.define();const ue=t;export{ue as default};
//# sourceMappingURL=CheckBox-aQkbgIUH.js.map
