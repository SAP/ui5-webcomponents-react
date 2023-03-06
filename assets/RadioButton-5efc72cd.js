import{f as R}from"./Device-208919c6.js";import{g as I}from"./CustomElementsScopeUtils-137da8c8.js";import{r as S,U as T,d as x}from"./UI5Element-4f8793c9.js";import{e as f,l as n,f as b,g as G,s as $,a as E,p as u,c as F,b as C}from"./withWebComponent-e4481254.js";import{s as A,g as D}from"./AriaLabelHelper-c82262ef.js";import{e as O,j as W,V as L,l as V,k as B}from"./MarkedEvents-8627ed01.js";import{V as h}from"./ValueState-2c5e5904.js";import{c as g,b as U,l as z,n as m,m as k,k as P}from"./Keys-3acbae73.js";import j from"./Label-27ec0466.js";import{W as y}from"./WrappingType-b81e595a.js";import{o as M}from"./class-map-5d8e4b2b.js";import"./utils-ed90fb1b.js";import"./index-f1f749bf.js";import"./_commonjsHelpers-042e6b4d.js";import"./jsx-runtime-670450c2.js";import"./useIsomorphicLayoutEffect-a838da4a.js";class _{static hasGroup(e){return this.groups.has(e)}static getGroup(e){return this.groups.get(e)}static getCheckedRadioFromGroup(e){return this.checkedRadios.get(e)}static removeGroup(e){return this.checkedRadios.delete(e),this.groups.delete(e)}static addToGroup(e,i){this.hasGroup(i)?(this.enforceSingleSelection(e,i),this.getGroup(i)&&this.getGroup(i).push(e)):this.createGroup(e,i),this.updateTabOrder(i)}static removeFromGroup(e,i){const t=this.getGroup(i);if(!t)return;const r=this.getCheckedRadioFromGroup(i);t.forEach((a,l,v)=>{if(e._id===a._id)return v.splice(l,1)}),r===e&&this.checkedRadios.set(i,null),t.length||this.removeGroup(i),this.updateTabOrder(i)}static createGroup(e,i){e.checked&&this.checkedRadios.set(i,e),this.groups.set(i,[e])}static selectNextItem(e,i){const t=this.getGroup(i);if(!t)return;const r=t.length,a=t.indexOf(e);if(r<=1)return;const l=this._nextSelectable(a,t);l&&this.updateSelectionInGroup(l,i)}static updateTabOrder(e){const i=this.getGroup(e);if(!i)return;const t=i.some(r=>r.checked);i.filter(r=>!r.disabled).forEach((r,a)=>{t?r._tabIndex=r.checked?"0":"-1":r._tabIndex=a===0?"0":"-1"})}static selectPreviousItem(e,i){const t=this.getGroup(i);if(!t)return;const r=t.length,a=t.indexOf(e);if(r<=1)return;const l=this._previousSelectable(a,t);l&&this.updateSelectionInGroup(l,i)}static selectItem(e,i){this.updateSelectionInGroup(e,i),this.updateTabOrder(i)}static updateSelectionInGroup(e,i){const t=this.getCheckedRadioFromGroup(i);t&&this._deselectRadio(t),this._selectRadio(e),this.checkedRadios.set(i,e)}static _deselectRadio(e){e&&(e.checked=!1)}static _selectRadio(e){e&&(e.focus({focusVisible:!0}),e.checked=!0,e._checked=!0,e.fireEvent("change"))}static _nextSelectable(e,i){if(!i)return null;const t=i.length;let r=null;if(e===t-1){if(i[0].disabled||i[0].readonly)return this._nextSelectable(1,i);r=i[0]}else{if(i[e+1].disabled||i[e+1].readonly)return this._nextSelectable(e+1,i);r=i[e+1]}return r}static _previousSelectable(e,i){const t=i.length;let r=null;if(e===0){if(i[t-1].disabled||i[t-1].readonly)return this._previousSelectable(t-1,i);r=i[t-1]}else{if(i[e-1].disabled||i[e-1].readonly)return this._previousSelectable(e-1,i);r=i[e-1]}return r}static enforceSingleSelection(e,i){const t=this.getCheckedRadioFromGroup(i);e.checked?t?e!==t&&(this._deselectRadio(t),this.checkedRadios.set(i,e)):this.checkedRadios.set(i,e):e===t&&this.checkedRadios.set(i,null),this.updateTabOrder(i)}static get groups(){return this._groups||(this._groups=new Map),this._groups}static get checkedRadios(){return this._checkedRadios||(this._checkedRadios=new Map),this._checkedRadios}}const q=(o,e,i)=>f`<div class="ui5-radio-root" role="radio" aria-checked="${n(o.checked)}" aria-disabled="${n(o.effectiveAriaDisabled)}" aria-describedby="${n(o.effectiveAriaDescribedBy)}" aria-label="${n(o.ariaLabelText)}" tabindex="${n(o.effectiveTabIndex)}" @click="${o._onclick}" @keydown="${o._onkeydown}" @keyup="${o._onkeyup}" @mousedown="${o._onmousedown}" @mouseup="${o._onmouseup}" @focusout="${o._onfocusout}"><div class='ui5-radio-inner ${M(o.classes.inner)}'><svg class="ui5-radio-svg" focusable="false" aria-hidden="true">${K()}</svg><input type='radio' ?required="${o.required}" ?checked="${o.checked}" ?readonly="${o.readonly}" ?disabled="${o.effectiveAriaDisabled}" name="${n(o.name)}"  data-sap-no-tab-ref/></div>${o.text?H(o,e,i):void 0}${o.hasValueState?J(o):void 0}<slot name="formSupport"></slot></div>`,H=(o,e,i)=>i?f`<${b("ui5-label",e,i)} id="${n(o._id)}-label" class="ui5-radio-label" for="${n(o._id)}" wrapping-type="${n(o.wrappingType)}">${n(o.text)}</${b("ui5-label",e,i)}>`:f`<ui5-label id="${n(o._id)}-label" class="ui5-radio-label" for="${n(o._id)}" wrapping-type="${n(o.wrappingType)}">${n(o.text)}</ui5-label>`,J=(o,e,i)=>f`<span id="${n(o._id)}-descr" class="ui5-hidden-text">${n(o.valueStateText)}</span>`,K=(o,e,i)=>G`<circle class="ui5-radio-svg-outer" cx="50%" cy="50%" r="50%" /><circle class="ui5-radio-svg-inner" cx="50%" cy="50%" />`;S("@ui5/webcomponents-theming","sap_fiori_3",async()=>$);S("@ui5/webcomponents","sap_fiori_3",async()=>E);const Q={packageName:"@ui5/webcomponents",fileName:"themes/RadioButton.css.ts",content:'.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block}:host{min-width:var(--_ui5_radio_button_min_width);max-width:100%;text-overflow:ellipsis;overflow:hidden;color:var(--_ui5_radio_button_color);border-radius:var(--_ui5_radio_button_border_radius);transition:var(--_ui5_radio_button_transition)}:host(:not([disabled])) .ui5-radio-root{cursor:pointer}:host([checked]){color:var(--_ui5_radio_button_checked_fill)}:host([checked]) .ui5-radio-svg-inner{fill:var(--_ui5_radio_button_inner_ring_color)}:host([checked]) .ui5-radio-svg-outer{stroke:var(--_ui5_radio_button_outer_ring_color)}:host([disabled]) .ui5-radio-root{color:var(--_ui5_radio_button_color);opacity:var(--sapContent_DisabledOpacity)}:host([disabled][checked]) .ui5-radio-svg-outer{stroke:var(--_ui5_radio_button_color)}:host(:not([disabled])) .ui5-radio-root:focus-visible:before{content:"";display:var(--_ui5_radio_button_focus_outline);position:absolute;top:var(--_ui5_radio_button_focus_dist);bottom:var(--_ui5_radio_button_focus_dist);left:var(--_ui5_radio_button_focus_dist);right:var(--_ui5_radio_button_focus_dist);pointer-events:none;border:var(--_ui5_radio_button_border_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);border-radius:var(--_ui5_radio_button_border_radius)}:host(:not([disabled])[readonly]) .ui5-radio-root:focus-visible:before{border:var(--_ui5_radio_button_border_width) var(--_ui5_radio_button_border_readonly_focus_style) var(--sapContent_FocusColor)}:host(:not([disabled])) .ui5-radio-root:focus-visible{border-radius:var(--_ui5_radio_button_border_radius);border:var(--_ui5_radio_button_focus_border)}:host(:not([disabled]):hover){background:var(--_ui5_radio_button_hover_background);box-shadow:var(--_ui5_radio_button_hover_shadow)}:host(:not([value-state=Error]):not([value-state=Warning]):not([value-state=Success]):not([value-state=Information])) .ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer{stroke:var(--_ui5_radio_button_outer_ring_hover_color)}:host(:not([value-state=Error]):not([value-state=Warning]):not([value-state=Success]):not([value-state=Information])) .ui5-radio-root:hover .ui5-radio-inner--hoverable{filter:drop-shadow(var(--_ui5_radio_button_outer_ring_hover_shadow))}:host(:not([value-state=Error]):not([value-state=Warning]):not([value-state=Success]):not([value-state=Information])[checked]) .ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer{stroke:var(--_ui5_radio_button_outer_ring_checked_hover_color)}.ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer,:host([checked]) .ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer{fill:var(--_ui5_radio_button_hover_fill)}:host([active][checked]:not([value-state]):not([disabled]):not([readonly])) .ui5-radio-svg-outer{stroke:var(--_ui5_radio_button_outer_ring_checked_hover_color)}:host([active]:not([checked]):not([value-state]):not([disabled]):not([readonly])) .ui5-radio-svg-outer{stroke:var(--_ui5_radio_button_outer_ring_active_color)}:host([text]) .ui5-radio-root:focus-visible:before{inset-inline:var(--_ui5_radio_button_focus_dist) 0}:host([text]) .ui5-radio-inner{padding:var(--_ui5_radio_button_outer_ring_padding_with_label)}:host([checked][readonly]) .ui5-radio-svg-inner{fill:var(--sapContent_NonInteractiveIconColor)}:host([readonly]) .ui5-radio-root .ui5-radio-svg-outer{fill:var(--sapField_ReadOnly_Background);stroke:var(--sapField_ReadOnly_BorderColor);stroke-dasharray:var(--_ui5_radio_button_read_only_border_type);stroke-width:var(--_ui5_radio_button_read_only_border_width)}:host([value-state=Error]) .ui5-radio-svg-outer,:host([value-state=Warning]) .ui5-radio-svg-outer{stroke-width:var(--sapField_InvalidBorderWidth)}:host([value-state=Information]) .ui5-radio-svg-outer{stroke-width:var(--_ui5_radio_button_information_border_width)}:host([value-state=Error][checked]) .ui5-radio-svg-inner{fill:var(--_ui5_radio_button_checked_error_fill)}:host([value-state=Error]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer,:host([value-state=Error]) .ui5-radio-svg-outer{stroke:var(--sapField_InvalidColor);fill:var(--sapField_InvalidBackground)}:host([value-state=Error]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer{fill:var(--_ui5_radio_button_hover_fill_error)}:host([value-state=Error]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable{filter:drop-shadow(var(--_ui5_radio_button_outer_ring_hover_shadow_error))}:host([value-state=Warning][checked]) .ui5-radio-svg-inner{fill:var(--_ui5_radio_button_checked_warning_fill)}:host([value-state=Warning]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer,:host([value-state=Warning]) .ui5-radio-svg-outer{stroke:var(--sapField_WarningColor);fill:var(--sapField_WarningBackground)}:host([value-state=Warning]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer{fill:var(--_ui5_radio_button_hover_fill_warning)}:host([value-state=Warning]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable{filter:drop-shadow(var(--_ui5_radio_button_outer_ring_hover_shadow_warning))}:host([value-state=Success][checked]) .ui5-radio-svg-inner{fill:var(--_ui5_radio_button_checked_success_fill)}:host([value-state=Success]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer,:host([value-state=Success]) .ui5-radio-svg-outer{stroke:var(--sapField_SuccessColor);fill:var(--sapField_SuccessBackground)}:host([value-state=Success]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer{fill:var(--_ui5_radio_button_hover_fill_success)}:host([value-state=Success]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable{filter:drop-shadow(var(--_ui5_radio_button_outer_ring_hover_shadow_success))}:host([value-state=Information][checked]) .ui5-radio-svg-inner{fill:var(--_ui5_radio_button_checked_information_fill)}:host([value-state=Information]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer,:host([value-state=Information]) .ui5-radio-svg-outer{stroke:var(--sapField_InformationColor);fill:var(--sapField_InformationBackground)}:host([value-state=Information]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer{fill:var(--_ui5_radio_button_hover_fill_information)}:host([value-state=Information]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable{filter:drop-shadow(var(--_ui5_radio_button_outer_ring_hover_shadow_information))}:host([value-state=Error]) .ui5-radio-root,:host([value-state=Information]) .ui5-radio-root,:host([value-state=Warning]) .ui5-radio-root{stroke-dasharray:var(--_ui5_radio_button_warning_error_border_dash)}.ui5-radio-root{height:var(--_ui5_radio_button_height);position:relative;display:inline-flex;flex-wrap:nowrap;outline:none;max-width:100%;width:var(--_ui5_radio_button_inner_width);box-sizing:border-box;border:var(--_ui5_radio_button_border);border-radius:var(--_ui5_radio_button_border_radius);transition:var(--_ui5_radio_button_transition)}.ui5-radio-inner{display:flex;align-items:center;padding:var(--_ui5_radio_button_outer_ring_padding);flex-shrink:0;height:var(--_ui5_radio_button_inner_size);font-size:1rem;pointer-events:none;vertical-align:top}.ui5-radio-inner{outline:none}.ui5-radio-inner input{-webkit-appearance:none;visibility:hidden;width:0;left:0;position:absolute;font-size:inherit;margin:0}[ui5-label].ui5-radio-label{display:flex;align-items:center;padding-inline-end:var(--_ui5_radio_button_label_offset);vertical-align:top;max-width:100%;text-overflow:ellipsis;overflow:hidden;pointer-events:none;color:var(--_ui5_radio_button_label_color)}:host([wrapping-type=Normal][text]) .ui5-radio-root{height:auto}:host([wrapping-type=Normal][text]) [ui5-label].ui5-radio-label{padding:var(--_ui5_radio_button_label_side_padding) 0;overflow-wrap:break-word}.ui5-radio-svg{height:var(--_ui5_radio_button_svg_size);width:var(--_ui5_radio_button_svg_size);overflow:visible;pointer-events:none}.ui5-radio-svg-outer{fill:var(--_ui5_radio_button_outer_ring_bg);stroke:currentColor;stroke-width:var(--_ui5_radio_button_outer_ring_width)}.ui5-radio-svg-inner{fill:none;r:var(--_ui5_radio_button_inner_ring_radius)}.ui5-radio-svg-inner,.ui5-radio-svg-outer{flex-shrink:0}:host(.ui5-li-singlesel-radiobtn) .ui5-radio-root .ui5-radio-inner .ui5-radio-svg-outer{fill:var(--sapList_Background)}'};var d=globalThis&&globalThis.__decorate||function(o,e,i,t){var r=arguments.length,a=r<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,i):t,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,e,i,t);else for(var v=o.length-1;v>=0;v--)(l=o[v])&&(a=(r<3?l(a):r>3?l(e,i,a):l(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a},c;let w=!1,p,s=c=class extends T{constructor(){super(),this._deactivate=()=>{p&&(p.active=!1)},w||(document.addEventListener("mouseup",this._deactivate),w=!0)}static async onDefine(){c.i18nBundle=await x("@ui5/webcomponents")}onBeforeRendering(){this.syncGroup(),this._enableFormSupport()}onExitDOM(){this.syncGroup(!0)}syncGroup(e){const i=this._name,t=this.name,r=this._checked,a=this.checked;e&&_.removeFromGroup(this,i),t!==i?(i&&_.removeFromGroup(this,i),t&&_.addToGroup(this,t)):t&&_.enforceSingleSelection(this,t),this.name&&a!==r&&_.updateTabOrder(this.name),this._name=this.name,this._checked=this.checked}_enableFormSupport(){const e=I("FormSupport");e?e.syncNativeHiddenInput(this,(i,t)=>{t.value=i.value,t.type="radio",t.checked=i.checked}):this.value&&console.warn('In order for the "value" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";')}_onclick(){return this.toggle()}_handleDown(e){const i=this.name;i&&(e.preventDefault(),_.selectNextItem(this,i))}_handleUp(e){const i=this.name;i&&(e.preventDefault(),_.selectPreviousItem(this,i))}_onkeydown(e){if(g(e))return this.active=!0,e.preventDefault();if(U(e))return this.active=!0,this.toggle();const i=this.effectiveDir==="rtl";(z(e)||!i&&m(e)||i&&k(e))&&this._handleDown(e),(P(e)||!i&&k(e)||i&&m(e))&&this._handleUp(e)}_onkeyup(e){g(e)&&this.toggle(),this.active=!1}_onmousedown(){this.active=!0,p=this}_onmouseup(){this.active=!1}_onfocusout(){this.active=!1}toggle(){return this.canToggle()?this.name?(_.selectItem(this,this.name),this):(this.checked=!this.checked,this.fireEvent("change"),this):this}canToggle(){return!(this.disabled||this.readonly||this.checked)}get classes(){return{inner:{"ui5-radio-inner--hoverable":!this.disabled&&!this.readonly&&R()}}}get effectiveAriaDisabled(){return this.disabled?"true":null}get ariaLabelText(){return[D(this),this.text].filter(Boolean).join(" ")}get effectiveAriaDescribedBy(){return this.hasValueState?`${this._id}-descr`:void 0}get hasValueState(){return this.valueState!==h.None}get valueStateText(){switch(this.valueState){case h.Error:return c.i18nBundle.getText(B);case h.Warning:return c.i18nBundle.getText(V);case h.Success:return c.i18nBundle.getText(L);case h.Information:return c.i18nBundle.getText(W);default:return""}}get effectiveTabIndex(){const e=this.getAttribute("tabindex");return this.disabled?"-1":this.name?this._tabIndex:e||"0"}get strokeWidth(){return this.valueState==="None"?"1":"2"}};d([u({type:Boolean})],s.prototype,"disabled",void 0);d([u({type:Boolean})],s.prototype,"readonly",void 0);d([u({type:Boolean})],s.prototype,"required",void 0);d([u({type:Boolean})],s.prototype,"checked",void 0);d([u()],s.prototype,"text",void 0);d([u({type:h,defaultValue:h.None})],s.prototype,"valueState",void 0);d([u()],s.prototype,"name",void 0);d([u()],s.prototype,"value",void 0);d([u({type:y,defaultValue:y.None})],s.prototype,"wrappingType",void 0);d([u()],s.prototype,"accessibleName",void 0);d([u()],s.prototype,"accessibleNameRef",void 0);d([u({defaultValue:"-1",noAttribute:!0})],s.prototype,"_tabIndex",void 0);d([u({type:Boolean})],s.prototype,"active",void 0);d([A()],s.prototype,"formSupport",void 0);s=c=d([F({tag:"ui5-radio-button",languageAware:!0,renderer:C,template:q,styles:Q,dependencies:[j]}),O("change")],s);s.define();const he=s;export{he as default};
//# sourceMappingURL=RadioButton-5efc72cd.js.map
