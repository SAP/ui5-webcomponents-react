import{c as f,x as y,j as _,p as x,d as R,s as d,m as w,I,e as F}from"./withWebComponent-CT6sGXpP.js";import{l as T}from"./event-strict-DgQLNDEV.js";import{i as C}from"./i18n-DEVDpFvK.js";import{o as v}from"./ValueState-Bg0UWejw.js";import{A as G}from"./AccessibilityTextsHelper-Beeze-lh.js";import{i as b,b as A,P as S,c as g,K as k,D as E}from"./Keys-D3vKxxqj.js";import{t as O}from"./getActiveElement-kltGt_DR.js";import{L as D}from"./Label-DxVZab8w.js";import{F as L,d as P,e as V,c as B,V as q}from"./i18n-defaults-Do22Zz-4.js";import{d as M}from"./parameters-bundle.css-BzaqQttB.js";class u{static hasGroup(e){return this.groups.has(e)}static getGroup(e){return this.groups.get(e)}static getCheckedRadioFromGroup(e){return this.checkedRadios.get(e)}static removeGroup(e){return this.checkedRadios.delete(e),this.groups.delete(e)}static addToGroup(e,t){this.hasGroup(t)?(this.enforceSingleSelection(e,t),this.getGroup(t)&&this.getGroup(t).push(e)):this.createGroup(e,t),this.updateTabOrder(t)}static removeFromGroup(e,t){const i=this.getGroup(t);if(!i)return;const o=this.getCheckedRadioFromGroup(t);i.forEach((r,a,c)=>{if(e._id===r._id)return c.splice(a,1)}),o===e&&this.checkedRadios.set(t,null),i.length||this.removeGroup(t),this.updateTabOrder(t)}static createGroup(e,t){e.checked&&this.checkedRadios.set(t,e),this.groups.set(t,[e])}static selectNextItem(e,t){const i=this.getGroup(t);if(!i)return;const o=i.length,r=i.indexOf(e);if(o<=1)return;const a=this._nextFocusable(r,i);a&&this.updateSelectionInGroup(a,t)}static updateFormValidity(e){const t=this.getGroup(e);if(!t)return;const i=t.some(r=>r.required),o=t.some(r=>r.checked);t.forEach(r=>{r._groupChecked=o,r._groupRequired=i})}static updateTabOrder(e){const t=this.getGroup(e);if(!t)return;const i=t.some(o=>o.checked);t.filter(o=>!o.disabled).forEach((o,r)=>{let a=O();a.classList.contains("ui5-radio-root")&&(a=a.getRootNode(),a instanceof ShadowRoot&&(a=a.host)),i?a.hasAttribute("ui5-radio-button")&&a.readonly?o._tabIndex=a===o&&o.readonly?0:-1:o._tabIndex=o.checked?0:-1:o._tabIndex=r===0?0:-1})}static selectPreviousItem(e,t){const i=this.getGroup(t);if(!i)return;const o=i.length,r=i.indexOf(e);if(o<=1)return;const a=this._previousFocusable(r,i);a&&this.updateSelectionInGroup(a,t)}static selectItem(e,t){this.updateSelectionInGroup(e,t),this.updateTabOrder(t)}static updateSelectionInGroup(e,t){const i=this.getCheckedRadioFromGroup(t);i&&!e.readonly&&(this._deselectRadio(i),this.checkedRadios.set(t,e)),e&&(e.focus(),e.readonly?setTimeout(()=>{this.updateTabOrder(t)},0):this._selectRadio(e))}static _deselectRadio(e){e&&(e.checked=!1)}static _selectRadio(e){e.checked=!0,e._checked=!0,e.fireDecoratorEvent("change")}static _nextFocusable(e,t){if(!t)return null;const i=t.length;let o=null;if(e===i-1){if(t[0].disabled)return this._nextFocusable(1,t);o=t[0]}else{if(t[e+1].disabled)return this._nextFocusable(e+1,t);o=t[e+1]}return o}static _previousFocusable(e,t){const i=t.length;let o=null;if(e===0){if(t[i-1].disabled)return this._previousFocusable(i-1,t);o=t[i-1]}else{if(t[e-1].disabled)return this._previousFocusable(e-1,t);o=t[e-1]}return o}static enforceSingleSelection(e,t){const i=this.getCheckedRadioFromGroup(t);e.checked?i?e!==i&&(this._deselectRadio(i),this.checkedRadios.set(t,e)):this.checkedRadios.set(t,e):e===i&&this.checkedRadios.set(t,null),this.updateTabOrder(t),this.updateFormValidity(t)}static get groups(){return this._groups||(this._groups=new Map),this._groups}static get checkedRadios(){return this._checkedRadios||(this._checkedRadios=new Map),this._checkedRadios}}function U(){return f("div",{role:"radio",class:"ui5-radio-root","aria-checked":this.checked,"aria-disabled":this.effectiveAriaDisabled,"aria-describedby":this.effectiveAriaDescribedBy,"aria-label":this.ariaLabelText,tabindex:this.effectiveTabIndex,onClick:this._onclick,onKeyDown:this._onkeydown,onKeyUp:this._onkeyup,onMouseDown:this._onmousedown,onMouseUp:this._onmouseup,onFocusOut:this._onfocusout,children:[f("div",{class:{"ui5-radio-inner":!0,"ui5-radio-inner--hoverable":!this.disabled&&!this.readonly&&y()},children:[f("svg",{class:"ui5-radio-svg",focusable:"false","aria-hidden":"true",children:[_("circle",{part:"outer-ring",class:"ui5-radio-svg-outer",cx:"50%",cy:"50%",r:"50%"}),_("circle",{part:"inner-ring",class:"ui5-radio-svg-inner",cx:"50%",cy:"50%"})]}),_("input",{type:"radio",required:this.required,checked:this.checked,readonly:this.readonly,disabled:this.disabled,name:this.name,"data-sap-no-tab-ref":!0})]}),this.text&&_(D,{id:`${this._id}-label`,class:"ui5-radio-label",for:this._id,wrappingType:this.wrappingType,children:this.text}),this.hasValueState&&_("span",{id:`${this._id}-descr`,class:"ui5-hidden-text",children:this.valueStateText})]})}x("@ui5/webcomponents-theming","sap_horizon",async()=>R);x("@ui5/webcomponents","sap_horizon",async()=>M);const z=`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block}:host{min-width:var(--_ui5-v2-6-2_radio_button_min_width);max-width:100%;text-overflow:ellipsis;overflow:hidden;color:var(--_ui5-v2-6-2_radio_button_color);border-radius:var(--_ui5-v2-6-2_radio_button_border_radius)}:host(:not([disabled])) .ui5-radio-root{cursor:pointer}:host([checked]){color:var(--_ui5-v2-6-2_radio_button_checked_fill)}:host([checked]) .ui5-radio-svg-inner{fill:var(--_ui5-v2-6-2_radio_button_inner_ring_color)}:host([checked]) .ui5-radio-svg-outer{stroke:var(--_ui5-v2-6-2_radio_button_outer_ring_color)}:host([disabled]) .ui5-radio-root{color:var(--_ui5-v2-6-2_radio_button_color);opacity:var(--sapContent_DisabledOpacity)}:host([disabled][checked]) .ui5-radio-svg-outer{stroke:var(--_ui5-v2-6-2_radio_button_color)}:host(:not([disabled])[desktop]) .ui5-radio-root:focus:before,:host(:not([disabled])) .ui5-radio-root:focus-visible:before{content:"";display:var(--_ui5-v2-6-2_radio_button_focus_outline);position:absolute;inset:var(--_ui5-v2-6-2_radio_button_focus_dist);pointer-events:none;border:var(--_ui5-v2-6-2_radio_button_border_width) var(--sapContent_FocusStyle) var(--sapContent_FocusColor);border-radius:var(--_ui5-v2-6-2_radio_button_border_radius)}:host(:not([value-state="Negative"]):not([value-state="Critical"]):not([value-state="Positive"]):not([value-state="Information"])) .ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer{stroke:var(--_ui5-v2-6-2_radio_button_outer_ring_hover_color)}:host(:not([value-state="Negative"]):not([value-state="Critical"]):not([value-state="Positive"]):not([value-state="Information"])[checked]) .ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer{stroke:var(--_ui5-v2-6-2_radio_button_outer_ring_checked_hover_color)}.ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer,:host([checked]) .ui5-radio-root:hover .ui5-radio-inner--hoverable .ui5-radio-svg-outer{fill:var(--_ui5-v2-6-2_radio_button_hover_fill)}:host([active][checked]:not([value-state]):not([disabled]):not([readonly])) .ui5-radio-svg-outer{stroke:var(--_ui5-v2-6-2_radio_button_outer_ring_checked_hover_color)}:host([active]:not([checked]):not([value-state]):not([disabled]):not([readonly])) .ui5-radio-svg-outer{stroke:var(--_ui5-v2-6-2_radio_button_outer_ring_active_color)}:host([text]) .ui5-radio-root{padding-inline-end:var(--_ui5-v2-6-2_radio_button_border_width)}:host([text][desktop]) .ui5-radio-root:focus:before,:host([text]) .ui5-radio-root:focus-visible:before{inset-inline-end:0px}:host([text]) .ui5-radio-inner{padding:var(--_ui5-v2-6-2_radio_button_outer_ring_padding_with_label)}:host([checked][readonly]) .ui5-radio-svg-inner{fill:var(--_ui5-v2-6-2_radio_button_read_only_inner_ring_color)}:host([readonly]) .ui5-radio-root .ui5-radio-svg-outer{fill:var(--sapField_ReadOnly_Background);stroke:var(--sapField_ReadOnly_BorderColor);stroke-dasharray:var(--_ui5-v2-6-2_radio_button_read_only_border_type);stroke-width:var(--_ui5-v2-6-2_radio_button_read_only_border_width)}:host([value-state="Negative"]) .ui5-radio-svg-outer,:host([value-state="Critical"]) .ui5-radio-svg-outer{stroke-width:var(--sapField_InvalidBorderWidth)}:host([value-state="Information"]) .ui5-radio-svg-outer{stroke-width:var(--_ui5-v2-6-2_radio_button_information_border_width)}:host([value-state="Negative"][checked]) .ui5-radio-svg-inner{fill:var(--_ui5-v2-6-2_radio_button_checked_error_fill)}:host([value-state="Negative"]) .ui5-radio-svg-outer,:host([value-state="Negative"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer{stroke:var(--sapField_InvalidColor);fill:var(--sapField_InvalidBackground)}:host([value-state="Negative"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer{fill:var(--_ui5-v2-6-2_radio_button_hover_fill_error)}:host([value-state="Critical"][checked]) .ui5-radio-svg-inner{fill:var(--_ui5-v2-6-2_radio_button_checked_warning_fill)}:host([value-state="Critical"]) .ui5-radio-svg-outer,:host([value-state="Critical"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer{stroke:var(--sapField_WarningColor);fill:var(--sapField_WarningBackground)}:host([value-state="Critical"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer{fill:var(--_ui5-v2-6-2_radio_button_hover_fill_warning)}:host([value-state="Positive"][checked]) .ui5-radio-svg-inner{fill:var(--_ui5-v2-6-2_radio_button_checked_success_fill)}:host([value-state="Positive"]) .ui5-radio-svg-outer,:host([value-state="Positive"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer{stroke:var(--sapField_SuccessColor);fill:var(--sapField_SuccessBackground)}:host([value-state="Positive"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer{fill:var(--_ui5-v2-6-2_radio_button_hover_fill_success)}:host([value-state="Information"][checked]) .ui5-radio-svg-inner{fill:var(--_ui5-v2-6-2_radio_button_checked_information_fill)}:host([value-state="Information"]) .ui5-radio-svg-outer,:host([value-state="Information"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable:hover .ui5-radio-svg-outer{stroke:var(--sapField_InformationColor);fill:var(--sapField_InformationBackground)}:host([value-state="Information"]) .ui5-radio-root:hover .ui5-radio-inner.ui5-radio-inner--hoverable .ui5-radio-svg-outer{fill:var(--_ui5-v2-6-2_radio_button_hover_fill_information)}:host([value-state="Negative"]) .ui5-radio-root,:host([value-state="Critical"]) .ui5-radio-root,:host([value-state="Information"]) .ui5-radio-root{stroke-dasharray:var(--_ui5-v2-6-2_radio_button_warning_error_border_dash)}.ui5-radio-root{height:auto;position:relative;display:inline-flex;flex-wrap:nowrap;outline:none;max-width:100%;box-sizing:border-box;border:var(--_ui5-v2-6-2_radio_button_border);border-radius:var(--_ui5-v2-6-2_radio_button_border_radius)}.ui5-radio-inner{display:flex;align-items:center;padding:var(--_ui5-v2-6-2_radio_button_outer_ring_padding);flex-shrink:0;height:var(--_ui5-v2-6-2_radio_button_inner_size);font-size:1rem;pointer-events:none;vertical-align:top}.ui5-radio-inner{outline:none}.ui5-radio-inner input{-webkit-appearance:none;visibility:hidden;width:0;left:0;position:absolute;font-size:inherit;margin:0}[ui5-label].ui5-radio-label{display:flex;align-items:center;padding-inline-end:var(--_ui5-v2-6-2_radio_button_label_offset);padding-block:var(--_ui5-v2-6-2_radio_button_label_side_padding);vertical-align:top;max-width:100%;pointer-events:none;color:var(--_ui5-v2-6-2_radio_button_label_color);overflow-wrap:break-word}:host([wrapping-type="None"][text]) .ui5-radio-root{height:var(--_ui5-v2-6-2_radio_button_height)}:host([wrapping-type="None"][text]) [ui5-label].ui5-radio-label{text-overflow:ellipsis;overflow:hidden}.ui5-radio-svg{height:var(--_ui5-v2-6-2_radio_button_svg_size);width:var(--_ui5-v2-6-2_radio_button_svg_size);overflow:visible;pointer-events:none}.ui5-radio-svg-outer{fill:var(--_ui5-v2-6-2_radio_button_outer_ring_bg);stroke:currentColor;stroke-width:var(--_ui5-v2-6-2_radio_button_outer_ring_width)}.ui5-radio-svg-inner{fill:none;r:var(--_ui5-v2-6-2_radio_button_inner_ring_radius)}.ui5-radio-svg-outer,.ui5-radio-svg-inner{flex-shrink:0}:host(.ui5-li-singlesel-radiobtn) .ui5-radio-root .ui5-radio-inner .ui5-radio-svg-outer{fill:var(--sapList_Background)}
`;var n=function(h,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(h,e,t,i);else for(var c=h.length-1;c>=0;c--)(a=h[c])&&(r=(o<3?a(r):o>3?a(e,t,r):a(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r},l;let m=!1,p,s=l=class extends I{get formValidityMessage(){return l.i18nBundle.getText(L)}get formValidity(){return{valueMissing:this._groupRequired&&!this._groupChecked}}async formElementAnchor(){return this.getFocusDomRefAsync()}get formFormattedValue(){return this.checked?this.value||"on":null}constructor(){super(),this.disabled=!1,this.readonly=!1,this.required=!1,this.checked=!1,this.valueState="None",this.value="",this.wrappingType="Normal",this.active=!1,this._groupChecked=!1,this._groupRequired=!1,this._name="",this._checked=!1,this._deactivate=()=>{p&&(p.active=!1)},m||(document.addEventListener("mouseup",this._deactivate),m=!0)}onAfterRendering(){this.syncGroup()}onEnterDOM(){y()&&this.setAttribute("desktop","")}onExitDOM(){this.syncGroup(!0)}syncGroup(e){const t=this._name,i=this.name,o=this._checked,r=this.checked;e&&u.removeFromGroup(this,t),i!==t?(t&&u.removeFromGroup(this,t),i&&u.addToGroup(this,i)):i&&this.isConnected&&u.enforceSingleSelection(this,i),this.name&&r!==o&&u.updateTabOrder(this.name),this._name=this.name||"",this._checked=this.checked}_onclick(){return this.toggle()}_handleDown(e){const t=this.name;t&&(e.preventDefault(),u.selectNextItem(this,t))}_handleUp(e){const t=this.name;t&&(e.preventDefault(),u.selectPreviousItem(this,t))}_onkeydown(e){if(b(e))return this.active=!0,e.preventDefault();if(A(e))return this.active=!0,this.toggle();const t=this.effectiveDir==="rtl";(S(e)||!t&&g(e)||t&&k(e))&&this._handleDown(e),(E(e)||!t&&k(e)||t&&g(e))&&this._handleUp(e)}_onkeyup(e){b(e)&&this.toggle(),this.active=!1}_onmousedown(){this.active=!0,p=this}_onmouseup(){this.active=!1}_onfocusout(){this.active=!1}toggle(){return this.canToggle()?this.name?(u.selectItem(this,this.name),this):(this.checked=!this.checked,this.fireDecoratorEvent("change"),this):this}canToggle(){return!(this.disabled||this.readonly||this.checked)}get effectiveAriaDisabled(){return this.disabled||this.readonly?!0:void 0}get ariaLabelText(){return[G(this),this.text].filter(Boolean).join(" ")}get effectiveAriaDescribedBy(){return this.hasValueState?`${this._id}-descr`:void 0}get hasValueState(){return this.valueState!==v.None}get valueStateText(){switch(this.valueState){case v.Negative:return l.i18nBundle.getText(q);case v.Critical:return l.i18nBundle.getText(B);case v.Positive:return l.i18nBundle.getText(V);case v.Information:return l.i18nBundle.getText(P);default:return""}}get effectiveTabIndex(){const e=this.getAttribute("tabindex");return this.disabled?-1:this.name?this._tabIndex:e?parseInt(e):0}};n([d({type:Boolean})],s.prototype,"disabled",void 0);n([d({type:Boolean})],s.prototype,"readonly",void 0);n([d({type:Boolean})],s.prototype,"required",void 0);n([d({type:Boolean})],s.prototype,"checked",void 0);n([d()],s.prototype,"text",void 0);n([d()],s.prototype,"valueState",void 0);n([d()],s.prototype,"name",void 0);n([d()],s.prototype,"value",void 0);n([d()],s.prototype,"wrappingType",void 0);n([d()],s.prototype,"accessibleName",void 0);n([d()],s.prototype,"accessibleNameRef",void 0);n([d({type:Number})],s.prototype,"_tabIndex",void 0);n([d({type:Boolean})],s.prototype,"active",void 0);n([d({type:Boolean,noAttribute:!0})],s.prototype,"_groupChecked",void 0);n([d({type:Boolean,noAttribute:!0})],s.prototype,"_groupRequired",void 0);n([C("@ui5/webcomponents")],s,"i18nBundle",void 0);s=l=n([w({tag:"ui5-radio-button",languageAware:!0,formAssociated:!0,renderer:F,template:U,styles:z}),T("change",{bubbles:!0})],s);s.define();const ee=s;export{ee as R};
