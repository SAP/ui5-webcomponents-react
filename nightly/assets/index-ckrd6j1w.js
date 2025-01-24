import{c as w,j as l,p as y,d as I,s as o,m as S,e as x,I as N,w as V}from"./withWebComponent-DfVDXLfc.js";import{d as C}from"./slot-_4yKMUwC.js";import{l as _}from"./event-strict-DgQLNDEV.js";import{b as T,D,P as k,H as F,j as q,L as P,z as A,p as B,U as R,S as E,O as M,u as W}from"./Keys-Df3IBHp2.js";import{i as O}from"./i18n-DEVDpFvK.js";import{o as v}from"./ValueState-Bg0UWejw.js";import{A as U}from"./AccessibilityTextsHelper-CSnJP9TL.js";import{I as m}from"./Icon-DVzRT9Bg.js";import{a as L,I as z}from"./Input-CdGIkdwS.js";import"./less-XDjnx22T.js";import{a as H}from"./add-APypkyXZ.js";import{ad as j,ae as $}from"./i18n-defaults-Cyg2J0QB.js";import{d as G}from"./parameters-bundle.css-BzaqQttB.js";const K="less";function J(){return w("div",{id:`${this._id}`,class:"ui5-step-input-root",onKeyDown:this._onkeydown,onFocusIn:this._onfocusin,onFocusOut:this._onfocusout,children:[!this.readonly&&l("div",{class:"ui5-step-icon ui5-step-dec",title:this.decIconTitle,children:l(m,{id:`${this._id}-dec`,name:K,tabindex:-1,accessibleName:this.decIconTitle,onClick:this._decValue,onFocusOut:this._onButtonFocusOut,onMouseDown:this._decSpin,onMouseUp:this._resetSpin,onMouseOut:this._resetSpinOut,class:{inputIcon:!0,"ui5-step-input-icon--clickable":this._decIconClickable},showTooltip:!0})}),l(L,{id:`${this._id}-inner`,"data-sap-focus-ref":!0,class:"ui5-step-input-input",placeholder:this.placeholder,type:this.type,value:this._displayValue,disabled:this.disabled,required:this.required,readonly:this.readonly,valueState:this.valueState,_inputAccInfo:this.accInfo,_nativeInputAttributes:this.inputAttributes,onChange:this._onInputChange,onFocusOut:this._onInputFocusOut,onFocusIn:this._onInputFocusIn,onInput:this._onInput,children:this.valueStateMessage.length>0&&l("slot",{name:"valueStateMessage",slot:"valueStateMessage"})}),!this.readonly&&l("div",{class:"ui5-step-icon ui5-step-inc",title:this.incIconTitle,children:l(m,{id:`${this._id}-inc`,class:{inputIcon:!0,"ui5-step-input-icon--clickable":this._incIconClickable},name:H,tabindex:-1,accessibleName:this.incIconTitle,onClick:this._incValue,onFocusOut:this._onButtonFocusOut,onMouseDown:this._incSpin,onMouseUp:this._resetSpin,onMouseOut:this._resetSpinOut,showTooltip:!0})})]})}y("@ui5/webcomponents-theming","sap_horizon",async()=>I);y("@ui5/webcomponents","sap_horizon",async()=>G);const Q=`:host{vertical-align:middle}.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}.inputIcon{color:var(--_ui5-v2-6-2_input_icon_color);cursor:pointer;outline:none;padding:var(--_ui5-v2-6-2_input_icon_padding);border-inline-start:var(--_ui5-v2-6-2_input_icon_border);min-width:1rem;min-height:1rem;border-radius:var(--_ui5-v2-6-2_input_icon_border_radius)}.inputIcon.inputIcon--pressed{background:var(--_ui5-v2-6-2_input_icon_pressed_bg);box-shadow:var(--_ui5-v2-6-2_input_icon_box_shadow);border-inline-start:var(--_ui5-v2-6-2_select_hover_icon_left_border);color:var(--_ui5-v2-6-2_input_icon_pressed_color)}.inputIcon:active{background-color:var(--sapButton_Active_Background);box-shadow:var(--_ui5-v2-6-2_input_icon_box_shadow);border-inline-start:var(--_ui5-v2-6-2_select_hover_icon_left_border);color:var(--_ui5-v2-6-2_input_icon_pressed_color)}.inputIcon:not(.inputIcon--pressed):not(:active):hover{background:var(--_ui5-v2-6-2_input_icon_hover_bg);box-shadow:var(--_ui5-v2-6-2_input_icon_box_shadow)}.inputIcon:hover{border-inline-start:var(--_ui5-v2-6-2_select_hover_icon_left_border);box-shadow:var(--_ui5-v2-6-2_input_icon_box_shadow)}:host([readonly]:not([disabled])){border-color:var(--_ui5-v2-6-2_input_readonly_border_color);background:var(--sapField_ReadOnly_BackgroundStyle);background-color:var(--_ui5-v2-6-2_input_readonly_background)}:host([disabled]){opacity:var(--_ui5-v2-6-2_input_disabled_opacity);cursor:default;pointer-events:none;background-color:var(--_ui5-v2-6-2-input_disabled_background);border-color:var(--_ui5-v2-6-2_input_disabled_border_color)}:host([value-state="Negative"]) .inputIcon:not(.inputIcon--pressed):not(:active):hover{box-shadow:var(--_ui5-v2-6-2_input_error_icon_box_shadow)}:host([value-state="Critical"]) .inputIcon:not(.inputIcon--pressed):not(:active):hover{box-shadow:var(--_ui5-v2-6-2_input_warning_icon_box_shadow)}:host([value-state="Information"]) .inputIcon:not(.inputIcon--pressed):not(:active):hover{box-shadow:var(--_ui5-v2-6-2_input_information_icon_box_shadow)}:host([value-state="Positive"]) .inputIcon:not(.inputIcon--pressed):not(:active):hover{box-shadow:var(--_ui5-v2-6-2_input_success_icon_box_shadow)}:host([value-state="Negative"]:not([readonly]):not([disabled])){background:var(--sapField_InvalidBackgroundStyle);background-color:var(--sapField_InvalidBackground);border-color:var(--_ui5-v2-6-2_input_value_state_error_border_color);box-shadow:var(--sapField_InvalidShadow)}:host([value-state="Critical"]:not([readonly]):not([disabled])){background:var(--sapField_WarningBackgroundStyle);background-color:var(--sapField_WarningBackground);border-color:var(--_ui5-v2-6-2_input_value_state_warning_border_color);box-shadow:var(--sapField_WarningShadow)}:host([value-state="Positive"]:not([readonly]):not([disabled])){background:var(--sapField_SuccessBackgroundStyle);background-color:var(--sapField_SuccessBackground);border-color:var(--_ui5-v2-6-2_input_value_state_success_border_color);border-width:var(--_ui5-v2-6-2_input_value_state_success_border_width);box-shadow:var(--sapField_SuccessShadow)}:host([value-state="Information"]:not([readonly]):not([disabled])){background:var(--sapField_InformationBackgroundStyle);background-color:var(--sapField_InformationBackground);border-color:var(--_ui5-v2-6-2_input_value_state_information_border_color);border-width:var(--_ui5-v2-6-2_input_information_border_width);box-shadow:var(--sapField_InformationShadow)}:host([value-state="Negative"]) .inputIcon:active,:host([value-state="Negative"]) .inputIcon.inputIcon--pressed{box-shadow:var(--_ui5-v2-6-2_input_error_icon_box_shadow);color:var(--_ui5-v2-6-2_input_icon_error_pressed_color)}:host([value-state="Critical"]) .inputIcon:active,:host([value-state="Critical"]) .inputIcon.inputIcon--pressed{box-shadow:var(--_ui5-v2-6-2_input_warning_icon_box_shadow);color:var(--_ui5-v2-6-2_input_icon_warning_pressed_color)}:host([value-state="Information"]) .inputIcon:active,:host([value-state="Information"]) .inputIcon.inputIcon--pressed{box-shadow:var(--_ui5-v2-6-2_input_information_icon_box_shadow);color:var(--_ui5-v2-6-2_input_icon_information_pressed_color)}:host([value-state="Positive"]) .inputIcon:active,:host([value-state="Positive"]) .inputIcon.inputIcon--pressed{box-shadow:var(--_ui5-v2-6-2_input_success_icon_box_shadow);color:var(--_ui5-v2-6-2_input_icon_success_pressed_color)}:host([value-state="Negative"]) .inputIcon,:host([value-state="Critical"]) .inputIcon{padding:var(--_ui5-v2-6-2_input_error_warning_icon_padding)}:host([value-state="Information"]) .inputIcon{padding:var(--_ui5-v2-6-2_input_information_icon_padding)}:host(:not([hidden])){display:inline-block;width:100%;line-height:normal;letter-spacing:normal;word-spacing:normal}:host{--ui5-v2-6-2_input_focus_pseudo_element_content: none;color:var(--sapField_TextColor);background-color:var(--sapField_Background);border:var(--_ui5-v2-6-2_step_input_border_style);border-radius:var(--sapField_BorderCornerRadius);box-sizing:border-box;height:var(--_ui5-v2-6-2_input_height);position:relative;margin:var(--_ui5-v2-6-2_input_margin_top_bottom) 0;min-width:var(--_ui5-v2-6-2_step_input_min_width);text-align:right;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}:host .ui5-step-input-input{text-align:inherit;height:inherit}:host(:not([value-state]):not([readonly]):not([disabled])){box-shadow:none}:host(:not([value-state]):not([readonly]):not([disabled]):hover),:host([value-state="None"]:not([readonly]):not([disabled]):hover){background-color:var(--_ui5-v2-6-2_step_input_border_color_hover);border:var(--_ui5-v2-6-2_step_input_border_hover)}:host(:not([value-state]):not([readonly]):not([disabled]):not([focused]):hover),:host([value-state="None"]:not([readonly]):not([disabled]):not([focused]):hover){background-color:var(--sapField_Hover_Background);border:var(--_ui5-v2-6-2_step_input_border_style_hover);box-shadow:var(--sapField_Hover_Shadow)}:host([value-state="Positive"]:not([readonly]):not([disabled]):not([focused]):hover){box-shadow:var(--sapField_Hover_SuccessShadow)}:host([value-state="Information"]:not([readonly]):not([disabled]):not([focused]):hover){box-shadow:var(--sapField_Hover_InformationShadow)}:host([value-state="Critical"]:not([readonly]):not([disabled]):not([focused]):hover){box-shadow:var(--sapField_Hover_WarningShadow)}:host([value-state="Negative"]:not([readonly]):not([disabled]):not([focused]):hover){box-shadow:var(--sapField_Hover_InvalidShadow)}:host([value-state="Positive"]:not([readonly]):not([disabled]):hover),:host([value-state="Negative"]:not([readonly]):not([disabled]):hover),:host([value-state="Information"]:not([readonly]):not([disabled]):hover),:host([value-state="Critical"]:not([readonly]):not([disabled]):hover){background-color:var(--_ui5-v2-6-2-step_input_button_state_hover_background_color)}:host(:not([value-state]):not([readonly]):not([disabled])[focused]),:host([value-state="None"]:not([readonly]):not([disabled])[focused]),:host([value-state="Positive"]:not([readonly]):not([disabled])[focused]),:host([value-state="Negative"]:not([readonly]):not([disabled])[focused]),:host([value-state="Information"]:not([readonly]):not([disabled])[focused]),:host([value-state="Critical"]:not([readonly]):not([disabled])[focused]){background-color:var(--sapField_Focus_Background)}:host([value-state="Positive"]:not([readonly]):not([disabled])):after,:host([value-state="Negative"]:not([readonly]):not([disabled])):after,:host([value-state="None"]:not([readonly]):not([disabled])):after,:host([value-state="Information"]:not([readonly]):not([disabled])):after,:host([value-state="Critical"]:not([readonly]):not([disabled])):after{position:absolute;content:"";inset:-1px;outline:none;pointer-events:none;border-radius:var(--sapField_BorderCornerRadius);border-style:var(--_ui5-v2-6-2_input_error_warning_border_style);z-index:1;border-width:0px}:host([value-state="Information"]:not([readonly]):not([disabled])):after{border-color:var(--sapField_InformationColor);border-width:var(--_ui5-v2-6-2_input_information_border_width)}:host([value-state="Critical"]:not([readonly]):not([disabled])):after{border-color:var(--sapField_WarningColor);border-width:2px}:host([value-state="Positive"]:not([readonly]):not([disabled])):after{border-color:var(--sapField_SuccessColor);border-width:1px}:host([value-state="Negative"]:not([readonly]):not([disabled])):after{border-color:var(--sapField_InvalidColor);border-width:var(--_ui5-v2-6-2_input_information_border_width)}:host([value-state]):after{border-width:var(--_ui5-v2-6-2_input_state_border_width)}:host([value-state="Negative"]:not([readonly]):not([disabled])) .ui5-step-input-input{background-color:var(--_ui5-v2-6-2_input_input_background_color)}:host([value-state="Negative"]:not([readonly]):not([disabled])) .ui5-step-input-input:hover{background-color:var(--_ui5-v2-6-2_step_input_input_error_background_color)}:host([value-state]:not([value-state="None"]) .ui5-step-input-input[focused]){outline:none}:host .ui5-step-input-input{width:100%;color:inherit;background-color:inherit;border:var(--_ui5-v2-6-2_step_input_input_border);box-sizing:border-box;vertical-align:top;margin-top:var(--_ui5-v2-6-2_step_input_input_margin_top);min-width:var(--_ui5-v2-6-2_step_input_min_width);padding-inline-start:var(--_ui5-v2-6-2_step_input_padding);padding-inline-end:var(--_ui5-v2-6-2_step_input_padding);position:relative;outline:none;line-height:inherit;letter-spacing:inherit;word-spacing:inherit}:host .ui5-step-input-input[readonly]{padding:0}:host .ui5-step-input-input:hover,:host .ui5-step-input-input[focused]{box-shadow:none}:host .ui5-step-input-root{white-space:nowrap;line-height:inherit;letter-spacing:inherit;word-spacing:inherit;height:inherit}:host .ui5-step-input-input[text-align=left]{text-align:left}:host .ui5-step-input-input[text-align=center]{text-align:center}:host .ui5-step-input-input[text-align=right]{text-align:right}:host .ui5-step-icon{position:absolute;display:var(--_ui5-v2-6-2_step_input_button_display);height:2rem;height:100%;background-color:var(--_ui5-v2-6-2_step_input_button_background_color);z-index:0}:host .ui5-step-icon[focused]{border:none;outline:none}:host .ui5-step-icon.ui5-step-dec{left:var(--_ui5-v2-6-2_step_input_button_left);z-index:1}:host .ui5-step-icon.ui5-step-inc{right:var(--_ui5-v2-6-2_step_input_button_right)}:host .ui5-step-icon *:not(.ui5-step-input-icon--clickable),:host .ui5-step-icon *:not(.ui5-step-input-icon--clickable):active,:host .ui5-step-icon *:not(.ui5-step-input-icon--clickable):hover{opacity:.5;background-color:transparent;color:var(--sapContent_IconColor)}:host .ui5-step-icon :not(.ui5-step-input-icon--clickable) *:hover,:host .ui5-step-icon :not(.ui5-step-input-icon--clickable) *:active{background-color:var(--sapField_Background);color:var(--sapContent_IconColor)}:host .ui5-step-input-input[focused]:after{position:absolute;content:"";border:var(--_ui5-v2-6-2_step_input_input_border_focused_after);top:var(--_ui5-v2-6-2_step_input_input_border_top_bottom_focused_after);right:0;bottom:var(--_ui5-v2-6-2_step_input_input_border_top_bottom_focused_after);border-radius:var(--_ui5-v2-6-2_step_input_input_border_radius_focused_after);left:0;outline:none;pointer-events:none;z-index:1}:host .ui5-step-input-input[focused]{outline:none}:host([value-state="Information"]:not([readonly]):not([disabled])) .ui5-step-input-input[focused]:after{border-color:var(--_ui5-v2-6-2_step_input_input_information_border_color_focused_after)}:host([value-state="Critical"]:not([readonly]):not([disabled])) .ui5-step-input-input[focused]:after{border-color:var(--_ui5-v2-6-2_step_input_input_warning_border_color_focused_after)}:host([value-state="Positive"]:not([readonly]):not([disabled])) .ui5-step-input-input[focused]:after{border-color:var(--_ui5-v2-6-2_step_input_input_success_border_color_focused_after)}:host([value-state="Negative"]:not([readonly]):not([disabled])) .ui5-step-input-input[focused]:after{border-color:var(--_ui5-v2-6-2_step_input_input_error_border_color_focused_after)}:host .ui5-step-input-input::-webkit-outer-spin-button,:host .ui5-step-input-input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}:host([disabled]) .ui5-step-icon{background-color:var(--_ui5-v2-6-2_step_input_disabled_button_background)}:host([disabled]) .ui5-step-icon [ui5-icon]{color:var(--sapField_ReadOnly_BorderColor)}
`;var n=function(u,e,i,a){var r=arguments.length,s=r<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,i):a,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(u,e,i,a);else for(var h=u.length-1;h>=0;h--)(p=u[h])&&(s=(r<3?p(s):r>3?p(e,i,s):p(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s},c;const f=500,X=.8,b=50,g=120;let t=c=class extends N{constructor(){super(...arguments),this.value=0,this.step=1,this.valueState="None",this.required=!1,this.disabled=!1,this.readonly=!1,this.valuePrecision=0,this._decIconDisabled=!1,this._incIconDisabled=!1,this.focused=!1,this._inputFocused=!1,this._previousValue=this.value,this._waitTimeout=f,this._speed=g,this._spinStarted=!1}async formElementAnchor(){var e;return(e=await this.getFocusDomRefAsync())==null?void 0:e.getFocusDomRefAsync()}get formFormattedValue(){return this.value.toString()}get type(){return z.Number}get decIconTitle(){return c.i18nBundle.getText(j)}get incIconTitle(){return c.i18nBundle.getText($)}get _decIconClickable(){return!this._decIconDisabled&&!this.readonly&&!this.disabled}get _incIconClickable(){return!this._incIconDisabled&&!this.readonly&&!this.disabled}get _isFocused(){return this.focused}get _displayValue(){return this.value===0||Number.isInteger(this.value)?this.value.toFixed(this.valuePrecision):this.input&&this.value===Number(this.input.value)?this.input.value:this.value.toString()}get accInfo(){return{ariaRequired:this.required,ariaLabel:U(this)}}get inputAttributes(){return{min:this.min===void 0?void 0:this.min,max:this.max===void 0?void 0:this.max,step:this.step}}onBeforeRendering(){this._setButtonState(),this._previousValue===void 0&&(this._previousValue=this.value)}get input(){return this.shadowRoot.querySelector("[ui5-input]")}get innerInput(){return this.input.shadowRoot.querySelector("input")}get inputOuter(){return this.shadowRoot.querySelector(".ui5-step-input-input")}_onButtonFocusOut(){setTimeout(()=>{this._inputFocused||this.inputOuter.removeAttribute("focused")},0)}_onInput(e){!this.fireDecoratorEvent("input",{inputType:e.detail.inputType})&&e.preventDefault()}_onInputFocusIn(){this._inputFocused=!0,this.value!==this._previousValue&&(this._previousValue=this.value)}_onInputFocusOut(){this._inputFocused=!1,this._onInputChange()}_setButtonState(){this._decIconDisabled=this.min!==void 0&&this.value<=this.min,this._incIconDisabled=this.max!==void 0&&this.value>=this.max}_validate(){this._initialValueState===void 0&&(this._initialValueState=this.valueState),this._updateValueState()}_updateValueState(){const e=(this.min===void 0||Number(this.input.value)>=this.min)&&(this.max===void 0||Number(this.input.value)<=this.max),i=this._isValueWithCorrectPrecision,a=this.valueState,r=e&&i;this.valueState=r?v.None:v.Negative,!this.fireDecoratorEvent("value-state-change",{valueState:this.valueState,valid:r})&&(this.valueState=a)}_preciseValue(e){const i=10**this.valuePrecision;return Math.round(e*i)/i}_fireChangeEvent(){this._previousValue!==this.value&&(this._previousValue=this.value,this.fireDecoratorEvent("change"))}_modifyValue(e,i=!1){let a;a=this.value+e,this.min!==void 0&&a<this.min&&(a=this.min),this.max!==void 0&&a>this.max&&(a=this.max),a=this._preciseValue(a),a!==this.value&&(this.value=a,this.input.value=a.toFixed(this.valuePrecision),this._validate(),this._setButtonState(),this.focused=!0,this.inputOuter.setAttribute("focused",""),i?this._fireChangeEvent():this.input.focus())}_incValue(){this._incIconClickable&&!this.disabled&&!this.readonly&&(this._modifyValue(this.step,!0),this._previousValue=this.value)}_decValue(){this._decIconClickable&&!this.disabled&&!this.readonly&&(this._modifyValue(-this.step,!0),this._previousValue=this.value)}get _isValueWithCorrectPrecision(){const e=this.input.value.includes(".")?".":",",i=this.input.value.split(e);return(i.length>1?i[1].length:0)===this.valuePrecision}_onInputChange(){this._setDefaultInputValueIfNeeded();const e=Number(this.input.value);this._isValueChanged(e)&&this._updateValueAndValidate(e)}_setDefaultInputValueIfNeeded(){if(this.input.value===""){const e=(this.min||0).toFixed(this.valuePrecision);this.input.value=e,this.innerInput.value=e}}_isValueChanged(e){const i=this._isValueWithCorrectPrecision,a=i&&this.valueState===v.Negative;return this.value!==this._previousValue||this.value!==e||e===0||!i||a}_updateValueAndValidate(e){this.value=e,this._validate(),this._setButtonState(),this._fireChangeEvent()}_onfocusin(){this.focused=!0}_onfocusout(){this.focused=!1}_onkeydown(e){let i=!0;if(!(this.disabled||this.readonly)){if(T(e)){this._onInputChange();return}D(e)?this._modifyValue(this.step):k(e)?this._modifyValue(-this.step):F(e)?(this.value=this._previousValue,this.input.value=this.value.toFixed(this.valuePrecision)):this.max!==void 0&&(q(e)||P(e))?this._modifyValue(this.max-this.value):this.min!==void 0&&(A(e)||B(e))?this._modifyValue(this.min-this.value):!R(e)&&!E(e)&&!M(e)&&!W(e)&&(i=!1),i&&e.preventDefault()}}_decSpin(){this._decIconDisabled||this._spinValue(!1,!0)}_incSpin(){this._incIconDisabled||this._spinValue(!0,!0)}_calcWaitTimeout(){return this._speed*=X,this._waitTimeout=this._waitTimeout-this._speed<b?b:this._waitTimeout-this._speed,this._waitTimeout}_spinValue(e,i=!1){i&&(this._waitTimeout=f,this._speed=g,this._btnDown=!0),this._spinTimeoutId=setTimeout(()=>{this._btnDown&&(this._spinStarted=!0,this._modifyValue(e?this.step:-this.step),this._setButtonState(),!this._incIconDisabled&&e||!this._decIconDisabled&&!e?this._spinValue(e):(this._resetSpin(),this._fireChangeEvent()))},this._calcWaitTimeout())}_resetSpin(){clearTimeout(this._spinTimeoutId),this._btnDown=!1,this._spinStarted=!1}_resetSpinOut(){this._btnDown&&(this._resetSpin(),this._fireChangeEvent())}};n([o({type:Number})],t.prototype,"value",void 0);n([o({type:Number})],t.prototype,"min",void 0);n([o({type:Number})],t.prototype,"max",void 0);n([o({type:Number})],t.prototype,"step",void 0);n([o()],t.prototype,"valueState",void 0);n([o({type:Boolean})],t.prototype,"required",void 0);n([o({type:Boolean})],t.prototype,"disabled",void 0);n([o({type:Boolean})],t.prototype,"readonly",void 0);n([o()],t.prototype,"placeholder",void 0);n([o()],t.prototype,"name",void 0);n([o({type:Number})],t.prototype,"valuePrecision",void 0);n([o()],t.prototype,"accessibleName",void 0);n([o()],t.prototype,"accessibleNameRef",void 0);n([o({noAttribute:!0})],t.prototype,"_decIconDisabled",void 0);n([o({noAttribute:!0})],t.prototype,"_incIconDisabled",void 0);n([o({type:Boolean})],t.prototype,"focused",void 0);n([o({noAttribute:!0})],t.prototype,"_inputFocused",void 0);n([o({noAttribute:!0})],t.prototype,"_previousValue",void 0);n([o({noAttribute:!0})],t.prototype,"_waitTimeout",void 0);n([o({noAttribute:!0})],t.prototype,"_speed",void 0);n([o({noAttribute:!0})],t.prototype,"_btnDown",void 0);n([o({noAttribute:!0})],t.prototype,"_spinTimeoutId",void 0);n([o({noAttribute:!0})],t.prototype,"_spinStarted",void 0);n([C()],t.prototype,"valueStateMessage",void 0);n([O("@ui5/webcomponents")],t,"i18nBundle",void 0);t=c=n([S({tag:"ui5-step-input",formAssociated:!0,renderer:x,styles:Q,template:J}),_("change",{bubbles:!0}),_("input",{cancelable:!0,bubbles:!0}),_("value-state-change",{bubbles:!0,cancelable:!0})],t);t.define();const d=V("ui5-step-input",["accessibleName","accessibleNameRef","max","min","name","placeholder","step","value","valuePrecision","valueState"],["disabled","readonly","required"],["valueStateMessage"],["change","input","value-state-change"]);d.displayName="StepInput";try{d.displayName="StepInput",d.__docgenInfo={description:`The \`StepInput\` consists of an input field and buttons with icons to increase/decrease the value
with the predefined step.

The user can change the value of the component by pressing the increase/decrease buttons,
by typing a number directly, by using the keyboard up/down and page up/down,
or by using the mouse scroll wheel. Decimal values are supported.

### Usage

The default step is 1 but the app developer can set a different one.

App developers can set a maximum and minimum value for the \`StepInput\`.
The increase/decrease button and the up/down keyboard navigation become disabled when
the value reaches the max/min or a new value is entered from the input which is greater/less than the max/min.

#### When to use:

- To adjust amounts, quantities, or other values quickly.
- To adjust values for a specific step.

#### When not to use:

- To enter a static number (for example, postal code, phone number, or ID). In this case,
use the regular \`Input\` instead.
- To display a value that rarely needs to be adjusted and does not pertain to a particular step.
In this case, use the regular \`Input\` instead.
- To enter dates and times. In this case, use date/time related components instead.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"StepInput",props:{valueStateMessage:{defaultValue:null,description:`Defines the value state message that will be displayed as pop up under the component.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The \`valueStateMessage\` would be displayed,
when the component is in \`Information\`, \`Critical\` or \`Negative\` value state.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="valueStateMessage"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:`Fired when the input operation has finished by pressing Enter or on focusout.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<StepInputDomRef, never>) => void"}},onInput:{defaultValue:null,description:`Fired when the value of the component changes at each keystroke.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v2.6.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.6.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<StepInputDomRef, never>) => void"}},onValueStateChange:{defaultValue:null,description:`Fired before the value state of the component is updated internally.
The event is preventable, meaning that if it's default action is
prevented, the component will not update the value state.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v1.23.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onValueStateChange",required:!1,type:{name:"(event: Ui5CustomEvent<StepInputDomRef, StepInputValueStateChangeEventDetail>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as disabled.",name:"disabled",required:!1,type:{name:"boolean"}},max:{defaultValue:{value:"undefined"},description:"Defines a maximum value of the component.",name:"max",required:!1,type:{name:"number"}},min:{defaultValue:{value:"undefined"},description:"Defines a minimum value of the component.",name:"min",required:!1,type:{name:"number"}},name:{defaultValue:{value:"undefined"},description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.`,name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"undefined"},description:`Defines a short hint, intended to aid the user with data entry when the
component has no value.

**Note:** When no placeholder is set, the format pattern is displayed as a placeholder.
Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.`,name:"placeholder",required:!1,type:{name:"string"}},readonly:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as read-only.",name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},step:{defaultValue:{value:"1"},description:"Defines a step of increasing/decreasing the value of the component.",name:"step",required:!1,type:{name:"number"}},value:{defaultValue:{value:"0"},description:"Defines a value of the component.",name:"value",required:!1,type:{name:"number"}},valuePrecision:{defaultValue:{value:"0"},description:"Determines the number of digits after the decimal point of the component.",name:"valuePrecision",required:!1,type:{name:"number"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"None"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{d.displayName="StepInput",d.__docgenInfo={description:`The \`StepInput\` consists of an input field and buttons with icons to increase/decrease the value
with the predefined step.

The user can change the value of the component by pressing the increase/decrease buttons,
by typing a number directly, by using the keyboard up/down and page up/down,
or by using the mouse scroll wheel. Decimal values are supported.

### Usage

The default step is 1 but the app developer can set a different one.

App developers can set a maximum and minimum value for the \`StepInput\`.
The increase/decrease button and the up/down keyboard navigation become disabled when
the value reaches the max/min or a new value is entered from the input which is greater/less than the max/min.

#### When to use:

- To adjust amounts, quantities, or other values quickly.
- To adjust values for a specific step.

#### When not to use:

- To enter a static number (for example, postal code, phone number, or ID). In this case,
use the regular \`Input\` instead.
- To display a value that rarely needs to be adjusted and does not pertain to a particular step.
In this case, use the regular \`Input\` instead.
- To enter dates and times. In this case, use date/time related components instead.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"StepInput",props:{valueStateMessage:{defaultValue:null,description:`Defines the value state message that will be displayed as pop up under the component.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The \`valueStateMessage\` would be displayed,
when the component is in \`Information\`, \`Critical\` or \`Negative\` value state.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="valueStateMessage"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:`Fired when the input operation has finished by pressing Enter or on focusout.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<StepInputDomRef, never>) => void"}},onInput:{defaultValue:null,description:`Fired when the value of the component changes at each keystroke.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v2.6.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.6.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<StepInputDomRef, never>) => void"}},onValueStateChange:{defaultValue:null,description:`Fired before the value state of the component is updated internally.
The event is preventable, meaning that if it's default action is
prevented, the component will not update the value state.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v1.23.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onValueStateChange",required:!1,type:{name:"(event: Ui5CustomEvent<StepInputDomRef, StepInputValueStateChangeEventDetail>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as disabled.",name:"disabled",required:!1,type:{name:"boolean"}},max:{defaultValue:{value:"undefined"},description:"Defines a maximum value of the component.",name:"max",required:!1,type:{name:"number"}},min:{defaultValue:{value:"undefined"},description:"Defines a minimum value of the component.",name:"min",required:!1,type:{name:"number"}},name:{defaultValue:{value:"undefined"},description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.`,name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"undefined"},description:`Defines a short hint, intended to aid the user with data entry when the
component has no value.

**Note:** When no placeholder is set, the format pattern is displayed as a placeholder.
Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.`,name:"placeholder",required:!1,type:{name:"string"}},readonly:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as read-only.",name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},step:{defaultValue:{value:"1"},description:"Defines a step of increasing/decreasing the value of the component.",name:"step",required:!1,type:{name:"number"}},value:{defaultValue:{value:"0"},description:"Defines a value of the component.",name:"value",required:!1,type:{name:"number"}},valuePrecision:{defaultValue:{value:"0"},description:"Determines the number of digits after the decimal point of the component.",name:"valuePrecision",required:!1,type:{name:"number"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"None"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{d as S};
