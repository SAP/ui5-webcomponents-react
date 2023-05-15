import{f as m}from"./Device-208919c6.js";import{a as g,U as y,d as w}from"./UI5Element-d19f28b4.js";import{a as $,b as S,e as u,l as i,s as b,p as a,c as T,d as B}from"./withWebComponent-d61dcbbc.js";import{s as C}from"./slot-76e48863.js";import{e as E,I as N}from"./Icon-2e1c5474.js";import{V as d}from"./ValueState-2c5e5904.js";import{g as I}from"./CustomElementsScopeUtils-137da8c8.js";import{g as A}from"./AriaLabelHelper-43a261ec.js";import{c as p,b as F}from"./Icons-d3203353.js";import"./accept-6bd35a89.js";import R from"./Label-855a552c.js";import{W as x}from"./WrappingType-b81e595a.js";import{j as L,k as D,V}from"./i18n-defaults-254d6b69.js";import{o as W}from"./class-map-519e9c6d.js";import"./utils-69f7a0e0.js";import"./index-ebeaab24.js";import"./jsx-runtime-5926aa06.js";import"./useIsomorphicLayoutEffect-38a48652.js";g("@ui5/webcomponents-theming","sap_fiori_3",async()=>$);g("@ui5/webcomponents","sap_fiori_3",async()=>S);const z={packageName:"@ui5/webcomponents",fileName:"themes/CheckBox.css",content:'.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{-webkit-tap-highlight-color:rgba(0,0,0,0)}:host(:not([hidden])){display:inline-block}:host{overflow:hidden;max-width:100%;outline:none;border-radius:var(--_ui5_checkbox_border_radius);transition:var(--_ui5_checkbox_transition);cursor:pointer}:host([disabled]){cursor:default}:host([disabled]) .ui5-checkbox-root{opacity:var(--_ui5_checkbox_disabled_opacity)}:host([disabled]) .ui5-checkbox-inner{border-color:var(--_ui5_checkbox_inner_disabled_border_color)}:host([disabled]) .ui5-checkbox-label{color:var(--_ui5_checkbox_disabled_label_color)}:host([readonly]:not([value-state=Warning]):not([value-state=Error])) .ui5-checkbox-inner{background:var(--sapField_ReadOnly_Background);border:var(--_ui5_checkbox_inner_readonly_border);color:var(--sapField_TextColor)}:host([wrapping-type=Normal][text]) .ui5-checkbox-root{min-height:auto;box-sizing:border-box;align-items:flex-start;padding-top:var(--_ui5_checkbox_root_side_padding);padding-bottom:var(--_ui5_checkbox_root_side_padding)}:host([wrapping-type=Normal][text]) .ui5-checkbox-root .ui5-checkbox-inner,:host([wrapping-type=Normal][text]) .ui5-checkbox-root .ui5-checkbox-label{margin-top:var(--_ui5_checkbox_wrapped_content_margin_top)}:host([wrapping-type=Normal][text]) .ui5-checkbox-root .ui5-checkbox-label{overflow-wrap:break-word;align-self:center}:host([wrapping-type=Normal]) .ui5-checkbox-root:focus:before{bottom:var(--_ui5_checkbox_wrapped_focus_left_top_bottom_position)}:host([value-state=Error]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner,:host([value-state=Error]) .ui5-checkbox-inner{background:var(--sapField_InvalidBackground);border:var(--_ui5_checkbox_inner_error_border);color:var(--sapField_InvalidColor)}:host([value-state=Error]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner{background:var(--_ui5_checkbox_inner_error_background_hover)}:host([value-state=Warning]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner,:host([value-state=Warning]) .ui5-checkbox-inner{background:var(--sapField_WarningBackground);border:var(--_ui5_checkbox_inner_warning_border);color:var(--_ui5_checkbox_inner_warning_color)}:host([value-state=Warning]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner{background:var(--_ui5_checkbox_inner_warning_background_hover)}:host([value-state=Information]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner,:host([value-state=Information]) .ui5-checkbox-inner{background:var(--sapField_InformationBackground);border:var(--_ui5_checkbox_inner_information_border);color:var(--_ui5_checkbox_inner_information_color)}:host([value-state=Information]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner{background:var(--_ui5_checkbox_inner_information_background_hover)}:host([value-state=Success]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner,:host([value-state=Success]) .ui5-checkbox-inner{background:var(--sapField_SuccessBackground);border:var(--_ui5_checkbox_inner_success_border);color:var(--sapField_SuccessColor)}:host([value-state=Success]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner{background:var(--_ui5_checkbox_inner_success_background_hover)}:host([value-state=Warning]) .ui5-checkbox-icon,:host([value-state=Warning][indeterminate]) .ui5-checkbox-inner:after{color:var(--_ui5_checkbox_checkmark_warning_color)}:host([text]) .ui5-checkbox-root{padding-inline-end:var(--_ui5_checkbox_right_focus_distance)}:host([text]) .ui5-checkbox-root:focus:before{inset-inline-end:0}.ui5-checkbox-root{position:relative;display:inline-flex;align-items:center;width:100%;min-height:var(--_ui5_checkbox_width_height);min-width:var(--_ui5_checkbox_width_height);padding:0 var(--_ui5_checkbox_wrapper_padding);outline:none;transition:var(--_ui5_checkbox_transition);border:var(--_ui5_checkbox_default_focus_border);border-radius:var(--_ui5_checkbox_border_radius);box-sizing:border-box}.ui5-checkbox-root:focus:before{display:var(--_ui5_checkbox_focus_outline_display);content:"";position:absolute;inset-inline:var(--_ui5_checkbox_focus_position);inset-block:var(--_ui5_checkbox_focus_position);border:var(--_ui5_checkbox_focus_outline);border-radius:var(--_ui5_checkbox_focus_border_radius)}:host .ui5-checkbox-root:focus{border:var(--_ui5_checkbox_focus_border);border-radius:.5rem}:host(:hover:not([disabled])){background:var(--_ui5_checkbox_outer_hover_background)}.ui5-checkbox--hoverable .ui5-checkbox-label:hover{color:var(--_ui5_checkbox_label_color)}:host(:not([active]):not([checked]):not([value-state])) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner,:host(:not([active]):not([checked])[value-state=None]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner{background:var(--_ui5_checkbox_hover_background);border-color:var(--_ui5_checkbox_inner_hover_border_color)}:host(:not([active])[checked]:not([value-state])) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner,:host(:not([active])[checked][value-state=None]) .ui5-checkbox--hoverable:hover .ui5-checkbox-inner{background:var(--_ui5_checkbox_hover_background);border-color:var(--_ui5_checkbox_inner_hover_checked_border_color)}:host([checked]:not([value-state])) .ui5-checkbox-inner,:host([checked][value-state=None]) .ui5-checkbox-inner{border-color:var(--_ui5_checkbox_inner_selected_border_color)}:host([active]:not([checked]):not([value-state]):not([disabled])) .ui5-checkbox-inner,:host([active]:not([checked])[value-state=None]:not([disabled])) .ui5-checkbox-inner{border-color:var(--_ui5_checkbox_inner_active_border_color);background-color:var(--_ui5_checkbox_active_background)}:host([active][checked]:not([value-state]):not([disabled])) .ui5-checkbox-inner,:host([active][checked][value-state=None]:not([disabled])) .ui5-checkbox-inner{border-color:var(--_ui5_checkbox_inner_selected_border_color);background-color:var(--_ui5_checkbox_active_background)}.ui5-checkbox-inner{min-width:var(--_ui5_checkbox_inner_width_height);max-width:var(--_ui5_checkbox_inner_width_height);height:var(--_ui5_checkbox_inner_width_height);max-height:var(--_ui5_checkbox_inner_width_height);border:var(--_ui5_checkbox_inner_border);border-radius:var(--_ui5_checkbox_inner_border_radius);background:var(--_ui5_checkbox_inner_background);color:var(--_ui5_checkbox_checkmark_color);box-sizing:border-box;position:relative;cursor:inherit}:host([indeterminate][checked]) .ui5-checkbox-inner:after{content:"";background-color:currentColor;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:var(--_ui5_checkbox_partially_icon_size);height:var(--_ui5_checkbox_partially_icon_size)}.ui5-checkbox-inner input{-webkit-appearance:none;visibility:hidden;width:0;left:0;position:absolute;font-size:inherit}.ui5-checkbox-root .ui5-checkbox-label{margin-inline-start:var(--_ui5_checkbox_label_offset);cursor:inherit;text-overflow:ellipsis;overflow:hidden;pointer-events:none;user-select:none;-webkit-user-select:none;color:var(--_ui5_checkbox_label_color)}.ui5-checkbox-icon{width:var(--_ui5_checkbox_icon_size);height:var(--_ui5_checkbox_icon_size);color:currentColor;cursor:inherit;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}'};function U(c,e,o){return u`<div class="ui5-checkbox-root ${W(this.classes.main)}" role="checkbox" part="root" aria-checked="${i(this.effectiveAriaChecked)}" aria-readonly="${i(this.ariaReadonly)}" aria-disabled="${i(this.effectiveAriaDisabled)}" aria-label="${i(this.ariaLabelText)}" aria-labelledby="${i(this.ariaLabelledBy)}" aria-describedby="${i(this.ariaDescribedBy)}" aria-required="${i(this.required)}" tabindex="${i(this.effectiveTabIndex)}" @mousedown="${this._onmousedown}" @mouseup="${this._onmouseup}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click="${this._onclick}" @focusout="${this._onfocusout}"><div id="${i(this._id)}-CbBg" class="ui5-checkbox-inner">${this.isCompletelyChecked?j.call(this,c,e,o):void 0}<input id="${i(this._id)}-CB" type='checkbox' ?checked="${this.checked}" ?readonly="${this.readonly}" ?disabled="${this.disabled}" tabindex="-1" aria-hidden="true" data-sap-no-tab-ref /></div>${this.text?O.call(this,c,e,o):void 0}${this.hasValueState?P.call(this,c,e,o):void 0}<slot name="formSupport"></slot></div>`}function j(c,e,o){return o?u`<${b("ui5-icon",e,o)} aria-hidden="true" name="accept" class="ui5-checkbox-icon"></${b("ui5-icon",e,o)}>`:u`<ui5-icon aria-hidden="true" name="accept" class="ui5-checkbox-icon"></ui5-icon>`}function O(c,e,o){return o?u`<${b("ui5-label",e,o)} id="${i(this._id)}-label" class="ui5-checkbox-label" wrapping-type="${i(this.wrappingType)}">${i(this.text)}</${b("ui5-label",e,o)}>`:u`<ui5-label id="${i(this._id)}-label" class="ui5-checkbox-label" wrapping-type="${i(this.wrappingType)}">${i(this.text)}</ui5-label>`}function P(c,e,o){return u`<span id="${i(this._id)}-descr" class="ui5-hidden-text">${i(this.valueStateText)}</span>`}var r=globalThis&&globalThis.__decorate||function(c,e,o,n){var l=arguments.length,s=l<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,o):n,_;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(c,e,o,n);else for(var k=c.length-1;k>=0;k--)(_=c[k])&&(s=(l<3?_(s):l>3?_(e,o,s):_(e,o))||s);return l>3&&s&&Object.defineProperty(e,o,s),s},h;let f=!1,v,t=h=class extends y{constructor(){super(),this._deactivate=()=>{v&&(v.active=!1)},f||(document.addEventListener("mouseup",this._deactivate),f=!0)}onBeforeRendering(){this._enableFormSupport()}_enableFormSupport(){const e=I("FormSupport");e?e.syncNativeHiddenInput(this,(o,n)=>{n.disabled=o.disabled||!o.checked,n.value=o.checked?"on":""}):this.name&&console.warn('In order for the "name" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";')}_onclick(){this.toggle()}_onmousedown(){this.readonly||this.disabled||(this.active=!0,v=this)}_onmouseup(){this.active=!1}_onfocusout(){this.active=!1}_onkeydown(e){p(e)&&(e.preventDefault(),this.active=!0),F(e)&&(this.toggle(),this.active=!0)}_onkeyup(e){p(e)&&this.toggle(),this.active=!1}toggle(){if(this.canToggle()){const e={checked:this.checked,indeterminate:this.indeterminate};this.indeterminate?(this.indeterminate=!1,this.checked=!0):this.checked=!this.checked;const o=!this.fireEvent("change",null,!0),n=!this.fireEvent("value-changed",null,!0);(o||n)&&(this.checked=e.checked,this.indeterminate=e.indeterminate)}return this}canToggle(){return!(this.disabled||this.readonly)}valueStateTextMappings(){return{Error:h.i18nBundle.getText(L),Warning:h.i18nBundle.getText(D),Success:h.i18nBundle.getText(V)}}get ariaLabelText(){return A(this)}get classes(){return{main:{"ui5-checkbox--hoverable":!this.disabled&&!this.readonly&&m()}}}get ariaReadonly(){return this.readonly?"true":void 0}get effectiveAriaDisabled(){return this.disabled?"true":void 0}get effectiveAriaChecked(){return this.indeterminate&&this.checked?"mixed":this.checked}get ariaLabelledBy(){if(!this.ariaLabelText)return this.text?`${this._id}-label`:void 0}get ariaDescribedBy(){return this.hasValueState?`${this._id}-descr`:void 0}get hasValueState(){return this.valueState!==d.None}get valueStateText(){if(this.valueState!==d.None&&this.valueState!==d.Information)return this.valueStateTextMappings()[this.valueState]}get effectiveTabIndex(){const e=this.getAttribute("tabindex");return this.disabled?void 0:e||"0"}get isCompletelyChecked(){return this.checked&&!this.indeterminate}static async onDefine(){h.i18nBundle=await w("@ui5/webcomponents")}};r([a()],t.prototype,"accessibleNameRef",void 0);r([a()],t.prototype,"accessibleName",void 0);r([a({type:Boolean})],t.prototype,"disabled",void 0);r([a({type:Boolean})],t.prototype,"readonly",void 0);r([a({type:Boolean})],t.prototype,"required",void 0);r([a({type:Boolean})],t.prototype,"indeterminate",void 0);r([a({type:Boolean})],t.prototype,"checked",void 0);r([a()],t.prototype,"text",void 0);r([a({type:d,defaultValue:d.None})],t.prototype,"valueState",void 0);r([a({type:x,defaultValue:x.None})],t.prototype,"wrappingType",void 0);r([a()],t.prototype,"name",void 0);r([a({type:Boolean})],t.prototype,"active",void 0);r([C()],t.prototype,"formSupport",void 0);t=h=r([T({tag:"ui5-checkbox",languageAware:!0,renderer:B,template:U,styles:z,dependencies:[R,N]}),E("change")],t);t.define();const he=t;export{he as default};
//# sourceMappingURL=CheckBox-95047ef2.js.map
