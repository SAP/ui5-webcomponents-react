import{j as l,b as g,p as v,d as y,s,m as D,y as m,L as T,E as P}from"./jsx-runtime-cXES_1K3.js";import{d as V}from"./slot-_4yKMUwC.js";import{l as h}from"./event-strict-DgQLNDEV.js";import{i as S}from"./i18n-CjR4HGlq.js";import{c as x,a as C,D as F,g as E,m as A,b as R,d as _}from"./Calendar-DlaPN-qH.js";import{o as f}from"./ValueState-Bg0UWejw.js";import{A as q}from"./AccessibilityTextsHelper-4hgGqLyb.js";import{e as M,a as B,B as N,m as O,o as z,E as H,b as $,v as Y,j,Y as L,q as W,z as U,Z as K}from"./Keys-B3oBAe0t.js";import{f as w,I as G,a as b}from"./Icon-DONP1ba8.js";import{ai as J,a9 as Q,bv as X,bw as Z,bx as ee}from"./i18n-defaults-Be8E4wti.js";import{a as te,I as ie}from"./Input-ZHQAR7RL.js";import{a as oe}from"./Button-3tgFGa2X.js";import{R as ae}from"./ResponsivePopover-DkVgEbSU.js";import{d as re}from"./decline-CR10Cnxn.js";import"./Gregorian-BnpWUUJp.js";import{d as I}from"./parameters-bundle.css-DHLNbl9v.js";import{R as ne}from"./ResponsivePopoverCommon.css-Dy2SMJmW.js";const se=i=>(i||(i=new Date().getTime()),(i-i%(24*60*60*1e3))/1e3),ue="appointment-2",le="M32 481V65q0-14 9.5-23T64 33h64V1h32v32h192V1h32v32h64q14 0 23 9t9 23v416q0 14-9 23t-23 9H64q-13 0-22.5-9T32 481zm416 0V129H64v352h384zM256 193q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zM128 321q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm256-128q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm0 128q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm-128 0q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zM96 225q0-14 9-23t23-9 23 9 9 23-9 23-23 9-23-9-9-23zM384 97V65h-32v32h32zM128 65v32h32V65h-32z",de=!1,ce="SAP-icons-v4",pe="@ui5/webcomponents-icons";w(ue,{pathData:le,ltr:de,collection:ce,packageName:pe});const he="appointment-2",_e="M403 64q32 0 54.5 22.5T480 141v294q0 32-22.5 54.5T403 512H109q-32 0-54.5-22.5T32 435V141q0-32 22.5-54.5T109 64h25V26q0-11 7.5-18.5T160 0t18.5 7.5T186 26v38h140V26q0-11 7.5-18.5T352 0t18.5 7.5T378 26v38h25zm-294 51q-11 0-18.5 7.5T83 141v64h346v-64q0-11-7.5-18.5T403 115h-25v19q0 11-7.5 18.5T352 160t-18.5-7.5T326 134v-19H186v19q0 11-7.5 18.5T160 160t-18.5-7.5T134 134v-19h-25zm294 346q11 0 18.5-7.5T429 435V256H83v179q0 11 7.5 18.5T109 461h294zM160 320q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm96 0q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm96 0q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9z",ve=!1,me="SAP-icons-v5",ge="@ui5/webcomponents-icons";w(he,{pathData:_e,ltr:ve,collection:me,packageName:ge});function fe(){return l("div",{class:"ui5-date-picker-root",style:{width:"100%"},children:g(te,{"data-sap-focus-ref":!0,id:`${this._id}-inner`,class:"ui5-date-picker-input",placeholder:this._placeholder,type:this.type,value:this.value,disabled:this.disabled,required:this.required,readonly:this.readonly,valueState:this.valueState,_inputAccInfo:this.accInfo,onChange:this._onInputChange,onInput:this._onInputInput,onSubmit:this._onInputSubmit,onKeyDown:this._onkeydown,children:[this.valueStateMessage.length>0&&l("slot",{name:"valueStateMessage",slot:"valueStateMessage"}),!this.readonly&&l(G,{id:`${this._id}-value-help`,slot:"icon",name:this.openIconName,tabindex:-1,accessibleName:this.openIconTitle,mode:this._iconMode,showTooltip:!0,class:{inputIcon:!0,"inputIcon--pressed":this.open},onClick:this._togglePicker})]})})}function be(i){const e=(i==null?void 0:i.header)||ye,t=(i==null?void 0:i.content)||we,r=(i==null?void 0:i.footer)||Ie;return g(ae,{id:`${this._id}-responsive-popover`,opener:this,open:this.open,allowTargetOverlap:!0,placement:"Bottom",horizontalAlign:"Start",accessibleName:this.pickerAccessibleName,hideArrow:!0,_hideHeader:this._shouldHideHeader,onKeyDown:this._onkeydown,onClose:this.onResponsivePopoverAfterClose,onOpen:this.onResponsivePopoverAfterOpen,onBeforeOpen:this.onResponsivePopoverBeforeOpen,children:[this.showHeader&&e.call(this),t.call(this),this.showFooter&&r.call(this)]})}function ye(){return l("div",{slot:"header",class:"ui5-responsive-popover-header",children:g("div",{class:"row",children:[l("span",{children:this._headerTitleText}),l(oe,{class:"ui5-responsive-popover-close-btn",icon:re,design:"Transparent",onClick:this._togglePicker})]})})}function we(){return l(C,{id:`${this._id}-calendar`,primaryCalendarType:this._primaryCalendarType,secondaryCalendarType:this.secondaryCalendarType,formatPattern:this._formatPattern,selectionMode:this._calendarSelectionMode,minDate:this.minDate,maxDate:this.maxDate,calendarWeekNumbering:this.calendarWeekNumbering,onSelectionChange:this.onSelectedDatesChange,onShowMonthView:this.onHeaderShowMonthPress,onShowYearView:this.onHeaderShowYearPress,hideWeekNumbers:this.hideWeekNumbers,_currentPicker:this._calendarCurrentPicker,_pickersMode:this._calendarPickersMode,children:this._calendarSelectedDates.map(i=>l(x,{value:i}))})}function Ie(){}function ke(){return[fe.call(this),be.call(this)]}v("@ui5/webcomponents-theming","sap_horizon",async()=>y);v("@ui5/webcomponents","sap_horizon",async()=>I);const De=`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}.inputIcon{color:var(--_ui5-v2-8-0_input_icon_color);cursor:pointer;outline:none;padding:var(--_ui5-v2-8-0_input_icon_padding);border-inline-start:var(--_ui5-v2-8-0_input_icon_border);min-width:1rem;min-height:1rem;border-radius:var(--_ui5-v2-8-0_input_icon_border_radius)}.inputIcon.inputIcon--pressed{background:var(--_ui5-v2-8-0_input_icon_pressed_bg);box-shadow:var(--_ui5-v2-8-0_input_icon_box_shadow);border-inline-start:var(--_ui5-v2-8-0_select_hover_icon_left_border);color:var(--_ui5-v2-8-0_input_icon_pressed_color)}.inputIcon:active{background-color:var(--sapButton_Active_Background);box-shadow:var(--_ui5-v2-8-0_input_icon_box_shadow);border-inline-start:var(--_ui5-v2-8-0_select_hover_icon_left_border);color:var(--_ui5-v2-8-0_input_icon_pressed_color)}.inputIcon:not(.inputIcon--pressed):not(:active):hover{background:var(--_ui5-v2-8-0_input_icon_hover_bg);box-shadow:var(--_ui5-v2-8-0_input_icon_box_shadow)}.inputIcon:hover{border-inline-start:var(--_ui5-v2-8-0_select_hover_icon_left_border);box-shadow:var(--_ui5-v2-8-0_input_icon_box_shadow)}:host([readonly]:not([disabled])){border-color:var(--_ui5-v2-8-0_input_readonly_border_color);background:var(--sapField_ReadOnly_BackgroundStyle);background-color:var(--_ui5-v2-8-0_input_readonly_background)}:host([disabled]){opacity:var(--_ui5-v2-8-0_input_disabled_opacity);cursor:default;pointer-events:none;background-color:var(--_ui5-v2-8-0-input_disabled_background);border-color:var(--_ui5-v2-8-0_input_disabled_border_color)}:host([value-state="Negative"]) .inputIcon:not(.inputIcon--pressed):not(:active):hover{box-shadow:var(--_ui5-v2-8-0_input_error_icon_box_shadow)}:host([value-state="Critical"]) .inputIcon:not(.inputIcon--pressed):not(:active):hover{box-shadow:var(--_ui5-v2-8-0_input_warning_icon_box_shadow)}:host([value-state="Information"]) .inputIcon:not(.inputIcon--pressed):not(:active):hover{box-shadow:var(--_ui5-v2-8-0_input_information_icon_box_shadow)}:host([value-state="Positive"]) .inputIcon:not(.inputIcon--pressed):not(:active):hover{box-shadow:var(--_ui5-v2-8-0_input_success_icon_box_shadow)}:host([value-state="Negative"]:not([readonly]):not([disabled])){background:var(--sapField_InvalidBackgroundStyle);background-color:var(--sapField_InvalidBackground);border-color:var(--_ui5-v2-8-0_input_value_state_error_border_color);box-shadow:var(--sapField_InvalidShadow)}:host([value-state="Critical"]:not([readonly]):not([disabled])){background:var(--sapField_WarningBackgroundStyle);background-color:var(--sapField_WarningBackground);border-color:var(--_ui5-v2-8-0_input_value_state_warning_border_color);box-shadow:var(--sapField_WarningShadow)}:host([value-state="Positive"]:not([readonly]):not([disabled])){background:var(--sapField_SuccessBackgroundStyle);background-color:var(--sapField_SuccessBackground);border-color:var(--_ui5-v2-8-0_input_value_state_success_border_color);border-width:var(--_ui5-v2-8-0_input_value_state_success_border_width);box-shadow:var(--sapField_SuccessShadow)}:host([value-state="Information"]:not([readonly]):not([disabled])){background:var(--sapField_InformationBackgroundStyle);background-color:var(--sapField_InformationBackground);border-color:var(--_ui5-v2-8-0_input_value_state_information_border_color);border-width:var(--_ui5-v2-8-0_input_information_border_width);box-shadow:var(--sapField_InformationShadow)}:host([value-state="Negative"]) .inputIcon:active,:host([value-state="Negative"]) .inputIcon.inputIcon--pressed{box-shadow:var(--_ui5-v2-8-0_input_error_icon_box_shadow);color:var(--_ui5-v2-8-0_input_icon_error_pressed_color)}:host([value-state="Critical"]) .inputIcon:active,:host([value-state="Critical"]) .inputIcon.inputIcon--pressed{box-shadow:var(--_ui5-v2-8-0_input_warning_icon_box_shadow);color:var(--_ui5-v2-8-0_input_icon_warning_pressed_color)}:host([value-state="Information"]) .inputIcon:active,:host([value-state="Information"]) .inputIcon.inputIcon--pressed{box-shadow:var(--_ui5-v2-8-0_input_information_icon_box_shadow);color:var(--_ui5-v2-8-0_input_icon_information_pressed_color)}:host([value-state="Positive"]) .inputIcon:active,:host([value-state="Positive"]) .inputIcon.inputIcon--pressed{box-shadow:var(--_ui5-v2-8-0_input_success_icon_box_shadow);color:var(--_ui5-v2-8-0_input_icon_success_pressed_color)}:host([value-state="Negative"]) .inputIcon,:host([value-state="Critical"]) .inputIcon{padding:var(--_ui5-v2-8-0_input_error_warning_icon_padding)}:host([value-state="Information"]) .inputIcon{padding:var(--_ui5-v2-8-0_input_information_icon_padding)}:host(:not([hidden])){display:inline-block;line-height:normal;letter-spacing:normal;word-spacing:normal;height:var(--_ui5-v2-8-0_input_height);border-radius:var(--_ui5-v2-8-0_input_border_radius)}:host{min-width:calc(var(--_ui5-v2-8-0_input_min_width) + var(--_ui5-v2-8-0_input_icon_width));color:var(--sapField_TextColor);background-color:var(--sapField_Background);border-radius:var(--_ui5-v2-8-0-datepicker_border_radius);margin:var(--_ui5-v2-8-0_input_margin_top_bottom) 0;user-select:none;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none}:host(:not([disabled]):not([readonly]):active){background:var(--_ui5-v2-8-0-datepicker-hover-background)}:host(:not([disabled]):not([readonly]):hover){background:var(--_ui5-v2-8-0-datepicker-hover-background)}.ui5-date-picker-root{border-radius:inherit;height:inherit;line-height:inherit;letter-spacing:inherit;word-spacing:inherit}:host .ui5-date-picker-input{width:100%;min-width:12.5625rem;color:inherit;background-color:inherit;border-radius:inherit;height:inherit;line-height:inherit;letter-spacing:inherit;word-spacing:inherit;margin:inherit}:host(:not([disabled]):not([readonly])) .ui5-date-picker-input[focused]{background-color:var(--_ui5-v2-8-0-datepicker-hover-background)}
`;v("@ui5/webcomponents-theming","sap_horizon",async()=>y);v("@ui5/webcomponents","sap_horizon",async()=>I);const Te=`[ui5-calendar]{width:100%;display:flex;justify-content:center}[ui5-responsive-popover]::part(content){padding:0}
`;var a=function(i,e,t,r){var u=arguments.length,n=u<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,e,t,r);else for(var c=i.length-1;c>=0;c--)(d=i[c])&&(n=(u<3?d(n):u>3?d(e,t,n):d(e,t))||n);return u>3&&n&&Object.defineProperty(e,t,n),n},p;let o=p=class extends F{constructor(){super(...arguments),this.value="",this.valueState="None",this.required=!1,this.disabled=!1,this.readonly=!1,this.hideWeekNumbers=!1,this.open=!1,this._calendarCurrentPicker="day"}get formValidityMessage(){return p.i18nBundle.getText(J)}get formValidity(){return{valueMissing:this.required&&!this.value}}async formElementAnchor(){var e;return(e=await this.getFocusDomRefAsync())==null?void 0:e.getFocusDomRefAsync()}get formFormattedValue(){return this.value}onResponsivePopoverAfterClose(){var e;this.open=!1,m()?this.blur():(e=this._getInput())==null||e.focus(),this.fireDecoratorEvent("close")}onResponsivePopoverAfterOpen(){this.fireDecoratorEvent("open")}onResponsivePopoverBeforeOpen(){this._calendar.timestamp=this._calendarTimestamp,this._calendarCurrentPicker=this.firstPicker}onBeforeRendering(){["minDate","maxDate"].forEach(e=>{const t=this[e];this.isValid(t)||console.warn(`Invalid value for property "${e}": ${t} is not compatible with the configured format pattern: "${this._displayFormat}"`)}),this.value=this.normalizeValue(this.value)||this.value,this.liveValue=this.value}get _calendar(){return this.shadowRoot.querySelector("[ui5-responsive-popover]").querySelector("[ui5-calendar]")}get _calendarSelectionMode(){return"Single"}get _calendarTimestamp(){if(this.value&&this.dateValueUTC&&this._checkValueValidity(this.value)){const e=this.dateValueUTC.getTime();return se(e)}return E(this._primaryCalendarType)}get _calendarSelectedDates(){return this.value&&this._checkValueValidity(this.value)?[this.value]:[]}_onkeydown(e){M(e)&&(e.preventDefault(),this.open?B(e)||this._toggleAndFocusInput():this._toggleAndFocusInput());const t=e.target;t&&this.open&&this._getInput().id===t.id&&(N(e)||O(e)||z(e)||H(e))&&this._togglePicker(),!this.open&&($(e)?this._internals.form&&T(this):Y(e)?(e.preventDefault(),this._modifyDateValue(1,"year")):j(e)?(e.preventDefault(),this._modifyDateValue(1,"month")):L(e)?(e.preventDefault(),this._modifyDateValue(1,"day")):W(e)?(e.preventDefault(),this._modifyDateValue(-1,"year")):U(e)?(e.preventDefault(),this._modifyDateValue(-1,"month")):K(e)&&(e.preventDefault(),this._modifyDateValue(-1,"day")))}_modifyDateValue(e,t,r){if(!this.dateValue)return;const u=A(R.fromLocalJSDate(this.dateValue),e,t,r,this._minDate,this._maxDate),n=this.formatValue(u.toUTCJSDate());this._updateValueAndFireEvents(n,!0,["change","value-changed"])}_updateValueAndFireEvents(e,t,r,u=!0){const n=this._checkValueValidity(e);n&&t&&(e=this.normalizeValue(e));let d=!0;this.liveValue=e;const c=this.value;if(u&&(this._getInput().value=e,this.value=e,this._updateValueState()),r.forEach(k=>{this.fireDecoratorEvent(k,{value:e,valid:n})||(d=!1)}),!d&&u){if(this.value!==c&&this.value!==this._getInput().value)return;this._getInput().value=c,this.value=c}}_updateValueState(){const e=this._checkValueValidity(this.value),t=this.valueState;this.valueState=e?f.None:f.Negative,!this.fireDecoratorEvent("value-state-change",{valueState:this.valueState,valid:e})&&(this.valueState=t)}_getInput(){return this.shadowRoot.querySelector("[ui5-input]")}_onInputSubmit(){}_onInputChange(e){this._updateValueAndFireEvents(e.target.value,!0,["change","value-changed"])}_onInputInput(e){this._updateValueAndFireEvents(e.target.value,!1,["input"],!1)}_checkValueValidity(e){return e===""?!0:this.isValid(e)&&this.isInValidRange(e)}_click(e){m()&&(this.responsivePopover.opener=this,this.responsivePopover.open=!0,e.preventDefault())}isValid(e){return e===""||e===void 0?!0:!!this.getFormat().parse(e)}isInValidRange(e){if(e===""||e===void 0)return!0;const t=this._getCalendarDateFromString(e);return!t||!this._minDate||!this._maxDate?!1:t.valueOf()>=this._minDate.valueOf()&&t.valueOf()<=this._maxDate.valueOf()}normalizeValue(e){return e===""?e:this.getFormat().format(this.getFormat().parse(e,!0),!0)}get _displayFormat(){return this.getFormat().oFormatOptions.pattern}get _placeholder(){return this.placeholder!==void 0?this.placeholder:this._displayFormat}get _headerTitleText(){return p.i18nBundle.getText(Q)}get phone(){return m()}get showHeader(){return this.phone}get showFooter(){return this.phone}get accInfo(){return{ariaRoledescription:this.dateAriaDescription,ariaHasPopup:"grid",ariaRequired:this.required,ariaLabel:q(this)}}get openIconTitle(){return p.i18nBundle.getText(X)}get openIconName(){return"appointment-2"}get dateAriaDescription(){return p.i18nBundle.getText(Z)}get pickerAccessibleName(){return p.i18nBundle.getText(ee)}get _shouldHideHeader(){return!1}get firstPicker(){const e=this._calendarPickersMode;let t="day";return e===_.YEAR?t="year":e===_.MONTH_YEAR&&(t="month"),t}get _iconMode(){return P()?b.Decorative:b.Interactive}_respPopover(){return this.shadowRoot.querySelector("[ui5-responsive-popover]")}_canOpenPicker(){return!this.disabled&&!this.readonly}get _calendarPickersMode(){const t=this.getFormat().aFormatArray.map(r=>r.type.toLowerCase());return t.includes("day")?_.DAY_MONTH_YEAR:t.includes("month")||t.includes("monthstandalone")?_.MONTH_YEAR:_.YEAR}onSelectedDatesChange(e){e.preventDefault();const t=e.detail.selectedValues&&e.detail.selectedValues[0];this._updateValueAndFireEvents(t,!0,["change","value-changed"]),this._togglePicker()}onHeaderShowMonthPress(){this._calendarCurrentPicker="month"}onHeaderShowYearPress(){this._calendarCurrentPicker="year"}formatValue(e){return this.getFormat().format(e)}_togglePicker(){this.open=!this.open}_toggleAndFocusInput(){this._togglePicker(),this._getInput().focus()}get dateValue(){return this.liveValue?this.getFormat().parse(this.liveValue):this.getFormat().parse(this.value)}get dateValueUTC(){return this.liveValue?this.getFormat().parse(this.liveValue,!0):this.getFormat().parse(this.value)}get styles(){return{main:{width:"100%"}}}get type(){return ie.Text}};a([s()],o.prototype,"value",void 0);a([s()],o.prototype,"valueState",void 0);a([s({type:Boolean})],o.prototype,"required",void 0);a([s({type:Boolean})],o.prototype,"disabled",void 0);a([s({type:Boolean})],o.prototype,"readonly",void 0);a([s()],o.prototype,"placeholder",void 0);a([s()],o.prototype,"name",void 0);a([s({type:Boolean})],o.prototype,"hideWeekNumbers",void 0);a([s({type:Boolean})],o.prototype,"open",void 0);a([s()],o.prototype,"accessibleName",void 0);a([s()],o.prototype,"accessibleNameRef",void 0);a([s({type:Object})],o.prototype,"_respPopoverConfig",void 0);a([s()],o.prototype,"_calendarCurrentPicker",void 0);a([V({type:HTMLElement})],o.prototype,"valueStateMessage",void 0);a([S("@ui5/webcomponents")],o,"i18nBundle",void 0);o=p=a([D({tag:"ui5-date-picker",languageAware:!0,formAssociated:!0,template:ke,styles:[De,ne,Te]}),h("change",{bubbles:!0,cancelable:!0}),h("input",{bubbles:!0,cancelable:!0}),h("value-state-change",{bubbles:!0,cancelable:!0}),h("open"),h("close")],o);o.define();const je=o;export{fe as D,be as a,je as b};
