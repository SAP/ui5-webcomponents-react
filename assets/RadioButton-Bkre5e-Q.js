import{e as R}from"./ManagedStyles-DBz9b8_7.js";import{g as S}from"./EventProvider-B3ZIXKWe.js";import{U as T}from"./UI5Element-C4mSOhNA.js";import{a as p,l as s,b,g as I,s as G,p as d,c as $,d as F}from"./withWebComponent-C_dYwLuv.js";import{s as E}from"./slot-Df15G--e.js";import{e as V}from"./event-CegLCnR0.js";import{b as A}from"./i18nBundle-Dr6PGakp.js";import{V as _}from"./ValueState-Bn-H2OaL.js";import{g as D}from"./AriaLabelHelper-CzOXVcye.js";import{n as g,m as O,e as C,c as m,b as k,d as L}from"./Keys-BgUkNma0.js";import B from"./Label-CkBRSGa0.js";import{W as y}from"./WrappingType-CW8URInd.js";import{o as W}from"./class-map-Cfio9s54.js";import{b as U,c as z,a as q,V as P,l as j}from"./i18n-defaults-DyNPhf0P.js";import{r as w}from"./Boot-Biwz_Caq.js";import{s as M}from"./parameters-bundle.css-DjgCrOcY.js";import"./index-Cu9bd8lq.js";import"./CustomElementsScopeUtils-48ratPWk.js";import"./utils--_sL0meP.js";import"./useIsomorphicLayoutEffect-CDseMwwv.js";class c{static hasGroup(e){return this.groups.has(e)}static getGroup(e){return this.groups.get(e)}static getCheckedRadioFromGroup(e){return this.checkedRadios.get(e)}static removeGroup(e){return this.checkedRadios.delete(e),this.groups.delete(e)}static addToGroup(e,t){this.hasGroup(t)?(this.enforceSingleSelection(e,t),this.getGroup(t)&&this.getGroup(t).push(e)):this.createGroup(e,t),this.updateTabOrder(t)}static removeFromGroup(e,t){const i=this.getGroup(t);if(!i)return;const o=this.getCheckedRadioFromGroup(t);i.forEach((r,l,v)=>{if(e._id===r._id)return v.splice(l,1)}),o===e&&this.checkedRadios.set(t,null),i.length||this.removeGroup(t),this.updateTabOrder(t)}static createGroup(e,t){e.checked&&this.checkedRadios.set(t,e),this.groups.set(t,[e])}static selectNextItem(e,t){const i=this.getGroup(t);if(!i)return;const o=i.length,r=i.indexOf(e);if(o<=1)return;const l=this._nextSelectable(r,i);l&&this.updateSelectionInGroup(l,t)}static updateFormValidity(e){const t=this.getGroup(e);if(!t)return;t.forEach(o=>o._resetFormValidity()),t.some(o=>o.required)&&t.every(o=>!o.checked)&&t[0]._invalidateForm()}static updateTabOrder(e){const t=this.getGroup(e);if(!t)return;const i=t.some(o=>o.checked);t.filter(o=>!o.disabled).forEach((o,r)=>{i?o._tabIndex=o.checked?"0":"-1":o._tabIndex=r===0?"0":"-1"})}static selectPreviousItem(e,t){const i=this.getGroup(t);if(!i)return;const o=i.length,r=i.indexOf(e);if(o<=1)return;const l=this._previousSelectable(r,i);l&&this.updateSelectionInGroup(l,t)}static selectItem(e,t){this.updateSelectionInGroup(e,t),this.updateTabOrder(t)}static updateSelectionInGroup(e,t){const i=this.getCheckedRadioFromGroup(t);i&&this._deselectRadio(i),this._selectRadio(e),this.checkedRadios.set(t,e)}static _deselectRadio(e){e&&(e.checked=!1)}static _selectRadio(e){e&&(e.focus(),e.checked=!0,e._checked=!0,e.fireEvent("change"))}static _nextSelectable(e,t){if(!t)return null;const i=t.length;let o=null;if(e===i-1){if(t[0].disabled||t[0].readonly)return this._nextSelectable(1,t);o=t[0]}else{if(t[e+1].disabled||t[e+1].readonly)return this._nextSelectable(e+1,t);o=t[e+1]}return o}static _previousSelectable(e,t){const i=t.length;let o=null;if(e===0){if(t[i-1].disabled||t[i-1].readonly)return this._previousSelectable(i-1,t);o=t[i-1]}else{if(t[e-1].disabled||t[e-1].readonly)return this._previousSelectable(e-1,t);o=t[e-1]}return o}static enforceSingleSelection(e,t){const i=this.getCheckedRadioFromGroup(t);e.checked?i?e!==i&&(this._deselectRadio(i),this.checkedRadios.set(t,e)):this.checkedRadios.set(t,e):e===i&&this.checkedRadios.set(t,null),this.updateTabOrder(t),this.updateFormValidity(t)}static get groups(){return this._groups||(this._groups=new Map),this._groups}static get checkedRadios(){return this._checkedRadios||(this._checkedRadios=new Map),this._checkedRadios}}function H(u,e,t){return p`<div class="ui5-radio-root" role="radio" aria-checked="${s(this.checked)}" aria-disabled="${s(this.effectiveAriaDisabled)}" aria-describedby="${s(this.effectiveAriaDescribedBy)}" aria-label="${s(this.ariaLabelText)}" tabindex="${s(this.effectiveTabIndex)}" @click="${this._onclick}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @mousedown="${this._onmousedown}" @mouseup="${this._onmouseup}" @focusout="${this._onfocusout}"><div class='ui5-radio-inner ${W(this.classes.inner)}'><svg class="ui5-radio-svg" focusable="false" aria-hidden="true">${K.call(this,u,e,t)}</svg><input type='radio' ?required="${this.required}" ?checked="${this.checked}" ?readonly="${this.readonly}" ?disabled="${this.effectiveAriaDisabled}" name="${s(this.name)}"  data-sap-no-tab-ref/></div>${this.text?Q.call(this,u,e,t):void 0}${this.hasValueState?J.call(this,u,e,t):void 0}<slot name="formSupport"></slot></div>`}function Q(u,e,t){return t?p`<${b("ui5-label",e,t)} id="${s(this._id)}-label" class="ui5-radio-label" for="${s(this._id)}" wrapping-type="${s(this.wrappingType)}">${s(this.text)}</${b("ui5-label",e,t)}>`:p`<ui5-label id="${s(this._id)}-label" class="ui5-radio-label" for="${s(this._id)}" wrapping-type="${s(this.wrappingType)}">${s(this.text)}</ui5-label>`}function J(u,e,t){return p`<span id="${s(this._id)}-descr" class="ui5-hidden-text">${s(this.valueStateText)}</span>`}function K(u,e,t){return I`<circle part="outer-ring" class="ui5-radio-svg-outer" cx="50%" cy="50%" r="50%" /><circle part="inner-ring" class="ui5-radio-svg-inner" cx="50%" cy="50%" />`}w("@ui5/webcomponents-theming","sap_horizon",async()=>G);w("@ui5/webcomponents","sap_horizon",async()=>M);const X={packageName:"@ui5/webcomponents",fileName:"themes/RadioButton.css.ts",content:`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block}:host{min-width:var(--_ui5-v1-24-0_radio_button_min_width);max-width:100%;text-overflow:ellipsis;overflow:hidden;color:var(--_ui5-v1-24-0_radio_button_color);border-radius:var(--_ui5-v1-24-0_radio_button_border_radius)}:host(:not([disabled])) .ui5-radio-root{cursor:pointer}:host([checked]){color:var(--_ui5-v1-24-0_radio_button_checked_fill)}:host([checked]) .ui5-radio-svg-inner{fill:var(--_ui5-v1-24-0_radio_button_inner_ring_color)}:host([checked]) .ui5-radio-svg-outer{stroke:var(--_ui5-v1-24-0_radio_button_outer_ring_color)}:host([disabled]) .ui5-radio-root{color:var(--_ui5-v1-24-0_radio_button_color);opacity:var(--sapContent_DisabledOpacity)}:host([disabled][checked]) .ui5-radio-svg-outer{stroke:var(--_ui5-v1-24-0_radio_button_color)}:host(:not([disabled])) .ui5-radio-root:focus:before{content:"";display:var(--_ui5-v1-24-0_radio_button_focus_outline);position:absolute;inset:var(--_ui5-v1-24-0_radio_button_focus_dist);pointer-events:none;border:var(--_ui5-v1-24-0_radio_button_border_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);border-radius:var(--_ui5-v1-24-0_radio_button_border_radius)}:host(:not([disabled])) .ui5-radio-root:focus{border-radius:var(--_ui5-v1-24-0_radio_button_border_radius);border:var(--_ui5-v1-24-0_radio_button_focus_border)}:host(:not([value-state="Error"]):not([value-state="Warning"]):not([value-state="Success"]):not([value-state="Information"])) .ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer{stroke:var(--_ui5-v1-24-0_radio_button_outer_ring_hover_color)}:host(:not([value-state="Error"]):not([value-state="Warning"]):not([value-state="Success"]):not([value-state="Information"])[checked]) .ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer{stroke:var(--_ui5-v1-24-0_radio_button_outer_ring_checked_hover_color)}.ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer,:host([checked]) .ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer{fill:var(--_ui5-v1-24-0_radio_button_hover_fill)}:host([active][checked]:not([value-state]):not([disabled]):not([readonly])) .ui5-radio-svg-outer{stroke:var(--_ui5-v1-24-0_radio_button_outer_ring_checked_hover_color)}:host([active]:not([checked]):not([value-state]):not([disabled]):not([readonly])) .ui5-radio-svg-outer{stroke:var(--_ui5-v1-24-0_radio_button_outer_ring_active_color)}:host([text]) .ui5-radio-root{padding-inline-end:var(--_ui5-v1-24-0_radio_button_border_width)}:host([text]) .ui5-radio-root:focus:before{inset-inline-end:0px}:host([text]) .ui5-radio-inner{padding:var(--_ui5-v1-24-0_radio_button_outer_ring_padding_with_label)}:host([checked][readonly]) .ui5-radio-svg-inner{fill:var(--_ui5-v1-24-0_radio_button_read_only_inner_ring_color)}:host([readonly]) .ui5-radio-root .ui5-radio-svg-outer{fill:var(--sapField_ReadOnly_Background);stroke:var(--sapField_ReadOnly_BorderColor);stroke-dasharray:var(--_ui5-v1-24-0_radio_button_read_only_border_type);stroke-width:var(--_ui5-v1-24-0_radio_button_read_only_border_width)}:host([value-state="Error"]) .ui5-radio-svg-outer,:host([value-state="Warning"]) .ui5-radio-svg-outer{stroke-width:var(--sapField_InvalidBorderWidth)}:host([value-state="Information"]) .ui5-radio-svg-outer{stroke-width:var(--_ui5-v1-24-0_radio_button_information_border_width)}:host([value-state="Error"][checked]) .ui5-radio-svg-inner{fill:var(--_ui5-v1-24-0_radio_button_checked_error_fill)}:host([value-state="Error"]) .ui5-radio-svg-outer,:host([value-state="Error"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer{stroke:var(--sapField_InvalidColor);fill:var(--sapField_InvalidBackground)}:host([value-state="Error"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer{fill:var(--_ui5-v1-24-0_radio_button_hover_fill_error)}:host([value-state="Warning"][checked]) .ui5-radio-svg-inner{fill:var(--_ui5-v1-24-0_radio_button_checked_warning_fill)}:host([value-state="Warning"]) .ui5-radio-svg-outer,:host([value-state="Warning"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer{stroke:var(--sapField_WarningColor);fill:var(--sapField_WarningBackground)}:host([value-state="Warning"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer{fill:var(--_ui5-v1-24-0_radio_button_hover_fill_warning)}:host([value-state="Success"][checked]) .ui5-radio-svg-inner{fill:var(--_ui5-v1-24-0_radio_button_checked_success_fill)}:host([value-state="Success"]) .ui5-radio-svg-outer,:host([value-state="Success"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer{stroke:var(--sapField_SuccessColor);fill:var(--sapField_SuccessBackground)}:host([value-state="Success"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer{fill:var(--_ui5-v1-24-0_radio_button_hover_fill_success)}:host([value-state="Information"][checked]) .ui5-radio-svg-inner{fill:var(--_ui5-v1-24-0_radio_button_checked_information_fill)}:host([value-state="Information"]) .ui5-radio-svg-outer,:host([value-state="Information"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer{stroke:var(--sapField_InformationColor);fill:var(--sapField_InformationBackground)}:host([value-state="Information"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer{fill:var(--_ui5-v1-24-0_radio_button_hover_fill_information)}:host([value-state="Error"]) .ui5-radio-root,:host([value-state="Warning"]) .ui5-radio-root,:host([value-state="Information"]) .ui5-radio-root{stroke-dasharray:var(--_ui5-v1-24-0_radio_button_warning_error_border_dash)}.ui5-radio-root{height:var(--_ui5-v1-24-0_radio_button_height);position:relative;display:inline-flex;flex-wrap:nowrap;outline:none;max-width:100%;box-sizing:border-box;border:var(--_ui5-v1-24-0_radio_button_border);border-radius:var(--_ui5-v1-24-0_radio_button_border_radius)}.ui5-radio-inner{display:flex;align-items:center;padding:var(--_ui5-v1-24-0_radio_button_outer_ring_padding);flex-shrink:0;height:var(--_ui5-v1-24-0_radio_button_inner_size);font-size:1rem;pointer-events:none;vertical-align:top}.ui5-radio-inner{outline:none}.ui5-radio-inner input{-webkit-appearance:none;visibility:hidden;width:0;left:0;position:absolute;font-size:inherit;margin:0}[ui5-label].ui5-radio-label{display:flex;align-items:center;padding-inline-end:var(--_ui5-v1-24-0_radio_button_label_offset);vertical-align:top;max-width:100%;text-overflow:ellipsis;overflow:hidden;pointer-events:none;color:var(--_ui5-v1-24-0_radio_button_label_color)}:host([wrapping-type="Normal"][text]) .ui5-radio-root{height:auto}:host([wrapping-type="Normal"][text]) [ui5-label].ui5-radio-label{padding:var(--_ui5-v1-24-0_radio_button_label_side_padding) 0;overflow-wrap:break-word}.ui5-radio-svg{height:var(--_ui5-v1-24-0_radio_button_svg_size);width:var(--_ui5-v1-24-0_radio_button_svg_size);overflow:visible;pointer-events:none}.ui5-radio-svg-outer{fill:var(--_ui5-v1-24-0_radio_button_outer_ring_bg);stroke:currentColor;stroke-width:var(--_ui5-v1-24-0_radio_button_outer_ring_width)}.ui5-radio-svg-inner{fill:none;r:var(--_ui5-v1-24-0_radio_button_inner_ring_radius)}.ui5-radio-svg-outer,.ui5-radio-svg-inner{flex-shrink:0}:host(.ui5-li-singlesel-radiobtn) .ui5-radio-root .ui5-radio-inner .ui5-radio-svg-outer{fill:var(--sapList_Background)}
`};var n=function(u,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(u,e,t,i);else for(var v=u.length-1;v>=0;v--)(l=u[v])&&(r=(o<3?l(r):o>3?l(e,t,r):l(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r},h;let x=!1,f,a=h=class extends T{static get formAssociated(){return!0}constructor(){super(),this._internals=this.attachInternals(),this._deactivate=()=>{f&&(f.active=!1)},x||(document.addEventListener("mouseup",this._deactivate),x=!0)}static async onDefine(){h.i18nBundle=await A("@ui5/webcomponents")}onBeforeRendering(){this.syncGroup(),this._enableFormSupport()}onExitDOM(){this.syncGroup(!0)}syncGroup(e){const t=this._name,i=this.name,o=this._checked,r=this.checked;e&&c.removeFromGroup(this,t),i!==t?(t&&c.removeFromGroup(this,t),i&&c.addToGroup(this,i)):i&&c.enforceSingleSelection(this,i),this.name&&r!==o&&c.updateTabOrder(this.name),this._name=this.name,this._checked=this.checked}_enableFormSupport(){S("FormSupport")?this._setFormValue():this.value&&console.warn('In order for the "value" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";')}_setFormValue(){this._internals.setFormValue(this.checked?this.value:null)}_resetFormValidity(){this._internals.setValidity({})}_invalidateForm(){this._internals.setValidity({valueMissing:!0},this.radioButtonGroupRequiredText,this.shadowRoot.firstElementChild)}_onclick(){return this.toggle()}_handleDown(e){const t=this.name;t&&(e.preventDefault(),c.selectNextItem(this,t))}_handleUp(e){const t=this.name;t&&(e.preventDefault(),c.selectPreviousItem(this,t))}_onkeydown(e){if(g(e))return this.active=!0,e.preventDefault();if(O(e))return this.active=!0,this.toggle();const t=this.effectiveDir==="rtl";(C(e)||!t&&m(e)||t&&k(e))&&this._handleDown(e),(L(e)||!t&&k(e)||t&&m(e))&&this._handleUp(e)}_onkeyup(e){g(e)&&this.toggle(),this.active=!1}_onmousedown(){this.active=!0,f=this}_onmouseup(){this.active=!1}_onfocusout(){this.active=!1}toggle(){return this.canToggle()?this.name?(c.selectItem(this,this.name),this):(this.checked=!this.checked,this.fireEvent("change"),this):this}canToggle(){return!(this.disabled||this.readonly||this.checked)}get classes(){return{inner:{"ui5-radio-inner--hoverable":!this.disabled&&!this.readonly&&R()}}}get effectiveAriaDisabled(){return this.disabled?"true":null}get ariaLabelText(){return[D(this),this.text].filter(Boolean).join(" ")}get effectiveAriaDescribedBy(){return this.hasValueState?`${this._id}-descr`:void 0}get hasValueState(){return this.valueState!==_.None}get valueStateText(){switch(this.valueState){case _.Error:return h.i18nBundle.getText(P);case _.Warning:return h.i18nBundle.getText(q);case _.Success:return h.i18nBundle.getText(z);case _.Information:return h.i18nBundle.getText(U);default:return""}}get radioButtonGroupRequiredText(){return h.i18nBundle.getText(j)}get effectiveTabIndex(){const e=this.getAttribute("tabindex");return this.disabled?"-1":this.name?this._tabIndex:e||"0"}};n([d({type:Boolean})],a.prototype,"disabled",void 0);n([d({type:Boolean})],a.prototype,"readonly",void 0);n([d({type:Boolean})],a.prototype,"required",void 0);n([d({type:Boolean})],a.prototype,"checked",void 0);n([d()],a.prototype,"text",void 0);n([d({type:_,defaultValue:_.None})],a.prototype,"valueState",void 0);n([d()],a.prototype,"name",void 0);n([d()],a.prototype,"value",void 0);n([d({type:y,defaultValue:y.None})],a.prototype,"wrappingType",void 0);n([d()],a.prototype,"accessibleName",void 0);n([d()],a.prototype,"accessibleNameRef",void 0);n([d({defaultValue:"-1",noAttribute:!0})],a.prototype,"_tabIndex",void 0);n([d({type:Boolean})],a.prototype,"active",void 0);n([E()],a.prototype,"formSupport",void 0);a=h=n([$({tag:"ui5-radio-button",languageAware:!0,renderer:F,template:H,styles:X,dependencies:[B]}),V("change")],a);a.define();const ge=a;export{ge as default};
