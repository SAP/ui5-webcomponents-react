import{e as d,s as p,l as t,a as S,b as T,p as l,c as E}from"./withWebComponent-d61dcbbc.js";import{s as I}from"./slot-76e48863.js";import{c as y,I as M,e as b}from"./Icon-2e1c5474.js";import{g as H}from"./CustomElementsScopeUtils-137da8c8.js";import{b as O,c as N,D as R,g as z,m as B,C as x,a as g}from"./Calendar-5ba7dea6.js";import{V as m}from"./ValueState-2c5e5904.js";import{g as L}from"./AriaLabelHelper-43a261ec.js";import{h as q,l as U,Z as Y,k as j,e as G,i as W,a as J,b as K,_ as X,V as Z,t as Q,$ as ee,X as te,u as ie}from"./Icons-d3203353.js";import{c as f,f as ae}from"./Device-208919c6.js";import{k as re,a as v}from"./UI5Element-d19f28b4.js";import"./decline-e129c312.js";import{H as oe}from"./HasPopup-47461347.js";import{I as ne,ae as se,af as le}from"./i18n-defaults-254d6b69.js";import{B as pe}from"./Button-b124cb06.js";import de from"./ResponsivePopover-5796c25c.js";import{a as ue,I as he}from"./Input-51927e2b.js";import{s as $}from"./style-map-33b353d0.js";import"./Gregorian-2afa52fe.js";import{s as ce}from"./ResponsivePopoverCommon.css-4f3232f2.js";import"./utils-69f7a0e0.js";import"./index-ebeaab24.js";import"./jsx-runtime-5926aa06.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./Integer-f7f172c9.js";import"./LocaleData-0783076d.js";import"./slim-arrow-left-cee4c43c.js";import"./slim-arrow-right-44a405c5.js";import"./class-map-519e9c6d.js";import"./i18n-defaults-80781f7e.js";import"./MarkedEvents-b83081e9.js";import"./PopupUtils-565f6d6c.js";import"./getActiveElement-bcae01ed.js";import"./Popover-fe68fced.js";import"./PopupsCommon.css-8109da93.js";import"./FocusableElements-59b9e9bf.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-388120e7.js";import"./ResizeHandler-d7af0733.js";import"./MediaRange-25b98f31.js";import"./Dialog-77a1ac4d.js";import"./information-b0c94f16.js";import"./Title-64b66bf0.js";import"./WrappingType-b81e595a.js";import"./Suggestions.css-2743800e.js";import"./ValueStateMessage.css-7a219042.js";const _e=a=>(a||(a=new Date().getTime()),(a-a%(24*60*60*1e3))/1e3),me="appointment-2",F="M32 481V65q0-14 9.5-23T64 33h64V1h32v32h192V1h32v32h64q14 0 23 9t9 23v416q0 14-9 23t-23 9H64q-13 0-22.5-9T32 481zm416 0V129H64v352h384zM256 193q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zM128 321q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm256-128q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm0 128q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm-128 0q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zM96 225q0-14 9-23t23-9 23 9 9 23-9 23-23 9-23-9-9-23zM384 97V65h-32v32h32zM128 65v32h32V65h-32z",ve=!1,ge="SAP-icons-v4",fe="@ui5/webcomponents-icons";q(me,{pathData:F,ltr:ve,collection:ge,packageName:fe});const ye="appointment-2",C="M409.5 52q32 0 54.5 22t22.5 54v307q0 32-22.5 54t-54.5 22h-307q-32 0-54-22t-22-54V128q0-32 22-54t54-22h52V26q0-11 7-18.5t18-7.5T198 7.5t7.5 18.5v26h102V26q0-11 7-18.5t18-7.5q12 0 19 7.5t7 18.5v26h51zm-307 51q-25 0-25 25v77h358v-77q0-11-7.5-18t-18.5-7h-51v25q0 11-7 18.5t-19 7.5q-11 0-18-7.5t-7-18.5v-25h-102v25q0 11-7.5 18.5t-18.5 7.5-18-7.5-7-18.5v-25h-52zm307 357q11 0 18.5-7t7.5-18V256h-358v179q0 25 25 25h307zm-153-166q16 0 27 11t11 28q0 16-11 27t-27 11-27.5-11-11.5-27q0-17 11.5-28t27.5-11zm102 0q16 0 27 11t11 28q0 16-11 27t-27 11-27-11-11-27q0-17 11-28t27-11zm-204 0q16 0 27 11t11 28q0 16-11 27t-27 11q-17 0-28-11t-11-27q0-17 11-28t28-11z",be=!1,$e="SAP-icons-v5",ke="@ui5/webcomponents-icons";q(ye,{pathData:C,ltr:be,collection:$e,packageName:ke});re();function we(a,e,i){return i?d`<div class="ui5-date-picker-root" style="${$(this.styles.main)}"><${p("ui5-input",e,i)} id="${t(this._id)}-inner" class="ui5-date-picker-input" placeholder="${t(this._placeholder)}" type="${t(this.type)}" value="${t(this.value)}" ?disabled="${this.disabled}" ?required="${this.required}" ?readonly="${this.readonly}" value-state="${t(this.valueState)}" data-sap-focus-ref ._inputAccInfo ="${t(this.accInfo)}" @ui5-change="${t(this._onInputChange)}" @ui5-input="${t(this._onInputInput)}" @ui5-submit="${t(this._onInputSubmit)}" @keydown="${this._onkeydown}">${this.valueStateMessage.length?k.call(this,a,e,i):void 0}${this.readonly?void 0:w.call(this,a,e,i)}</${p("ui5-input",e,i)}><slot name="formSupport"></slot></div>`:d`<div class="ui5-date-picker-root" style="${$(this.styles.main)}"><ui5-input id="${t(this._id)}-inner" class="ui5-date-picker-input" placeholder="${t(this._placeholder)}" type="${t(this.type)}" value="${t(this.value)}" ?disabled="${this.disabled}" ?required="${this.required}" ?readonly="${this.readonly}" value-state="${t(this.valueState)}" data-sap-focus-ref ._inputAccInfo ="${t(this.accInfo)}" @ui5-change="${t(this._onInputChange)}" @ui5-input="${t(this._onInputInput)}" @ui5-submit="${t(this._onInputSubmit)}" @keydown="${this._onkeydown}">${this.valueStateMessage.length?k.call(this,a,e,i):void 0}${this.readonly?void 0:w.call(this,a,e,i)}</ui5-input><slot name="formSupport"></slot></div>`}function k(a,e,i){return d`<slot name="valueStateMessage" slot="valueStateMessage"></slot>`}function w(a,e,i){return i?d`<${p("ui5-icon",e,i)} slot="icon" name="${t(this.openIconName)}" tabindex="-1" accessible-name="${t(this.openIconTitle)}" accessible-role="button" aria-hidden="${t(this._ariaHidden)}" show-tooltip @click="${this.togglePicker}" input-icon ?pressed="${this._isPickerOpen}"></${p("ui5-icon",e,i)}>`:d`<ui5-icon slot="icon" name="${t(this.openIconName)}" tabindex="-1" accessible-name="${t(this.openIconTitle)}" accessible-role="button" aria-hidden="${t(this._ariaHidden)}" show-tooltip @click="${this.togglePicker}" input-icon ?pressed="${this._isPickerOpen}"></ui5-icon>`}function Pe(a,e,i){return i?d`<${p("ui5-responsive-popover",e,i)} id="${t(this._id)}-responsive-popover" allow-target-overlap placement-type="Bottom" horizontal-align="Left" hide-arrow ?_hide-header=${t(this._shouldHideHeader)} @keydown="${this._onkeydown}" @ui5-after-close="${t(this.onResponsivePopoverAfterClose)}">${this.showHeader?P.call(this,a,e,i):void 0}<${p("ui5-calendar",e,i)} id="${t(this._id)}-calendar" primary-calendar-type="${t(this._primaryCalendarType)}" secondary-calendar-type="${t(this.secondaryCalendarType)}" format-pattern="${t(this._formatPattern)}" timestamp="${t(this._calendarTimestamp)}" .selectionMode="${t(this._calendarSelectionMode)}" .minDate="${t(this.minDate)}" .maxDate="${t(this.maxDate)}" @ui5-selected-dates-change="${t(this.onSelectedDatesChange)}" @ui5-show-month-press="${t(this.onHeaderShowMonthPress)}" @ui5-show-year-press="${t(this.onHeaderShowYearPress)}" ?hide-week-numbers="${this.hideWeekNumbers}" ._currentPicker="${t(this._calendarCurrentPicker)}" ._pickersMode="${t(this._calendarPickersMode)}">${y(this._calendarSelectedDates,(r,n)=>r._id||n,(r,n)=>D.call(this,a,e,i,r,n))}</${p("ui5-calendar",e,i)}>${this.showFooter?V.call(this,a,e,i):void 0}</${p("ui5-responsive-popover",e,i)}> `:d`<ui5-responsive-popover id="${t(this._id)}-responsive-popover" allow-target-overlap placement-type="Bottom" horizontal-align="Left" hide-arrow ?_hide-header=${t(this._shouldHideHeader)} @keydown="${this._onkeydown}" @ui5-after-close="${t(this.onResponsivePopoverAfterClose)}">${this.showHeader?P.call(this,a,e,i):void 0}<ui5-calendar id="${t(this._id)}-calendar" primary-calendar-type="${t(this._primaryCalendarType)}" secondary-calendar-type="${t(this.secondaryCalendarType)}" format-pattern="${t(this._formatPattern)}" timestamp="${t(this._calendarTimestamp)}" .selectionMode="${t(this._calendarSelectionMode)}" .minDate="${t(this.minDate)}" .maxDate="${t(this.maxDate)}" @ui5-selected-dates-change="${t(this.onSelectedDatesChange)}" @ui5-show-month-press="${t(this.onHeaderShowMonthPress)}" @ui5-show-year-press="${t(this.onHeaderShowYearPress)}" ?hide-week-numbers="${this.hideWeekNumbers}" ._currentPicker="${t(this._calendarCurrentPicker)}" ._pickersMode="${t(this._calendarPickersMode)}">${y(this._calendarSelectedDates,(r,n)=>r._id||n,(r,n)=>D.call(this,a,e,i,r,n))}</ui5-calendar>${this.showFooter?V.call(this,a,e,i):void 0}</ui5-responsive-popover> `}function P(a,e,i){return i?d`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${t(this._headerTitleText)}</span><${p("ui5-button",e,i)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this.closePicker}"></${p("ui5-button",e,i)}></div></div>`:d`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${t(this._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this.closePicker}"></ui5-button></div></div>`}function D(a,e,i,r,n){return i?d`<${p("ui5-date",e,i)} value="${t(r)}"></${p("ui5-date",e,i)}>`:d`<ui5-date value="${t(r)}"></ui5-date>`}function V(a,e,i){return d``}v("@ui5/webcomponents-theming","sap_fiori_3",async()=>S);v("@ui5/webcomponents","sap_fiori_3",async()=>T);const De={packageName:"@ui5/webcomponents",fileName:"themes/DatePicker.css",content:".ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}[input-icon]{color:var(--_ui5_input_icon_color);cursor:pointer;outline:none;padding:var(--_ui5_input_icon_padding);border-inline-start:var(--_ui5_input_icon_border);min-width:1rem;min-height:1rem;border-radius:var(--_ui5_input_icon_border_radius)}[input-icon][pressed]{background:var(--_ui5_input_icon_pressed_bg);box-shadow:var(--_ui5_input_icon_box_shadow);border-inline-start:var(--_ui5_select_hover_icon_left_border);color:var(--_ui5_input_icon_pressed_color)}[input-icon]:active{background-color:var(--sapButton_Active_Background);box-shadow:var(--_ui5_input_icon_box_shadow);border-inline-start:var(--_ui5_select_hover_icon_left_border);color:var(--_ui5_input_icon_pressed_color)}[input-icon]:not([pressed]):not(:active):hover{background:var(--_ui5_input_icon_hover_bg);box-shadow:var(--_ui5_input_icon_box_shadow)}[input-icon]:hover{border-inline-start:var(--_ui5_select_hover_icon_left_border);box-shadow:var(--_ui5_input_icon_box_shadow)}:host(:not([hidden])){display:inline-block;line-height:normal;letter-spacing:normal;word-spacing:normal;height:var(--_ui5_input_height);border-radius:var(--_ui5_input_border_radius)}:host{min-width:calc(var(--_ui5_input_min_width) + var(--_ui5_input_icon_width));color:var(--sapField_TextColor);background-color:var(--sapField_Background);border-radius:var(--_ui5-datepicker_border_radius)}:host([value-state=Error]:not([readonly]):not([disabled])){background-color:var(--sapField_InvalidBackground)}:host(:not([disabled]):not([readonly]):active){background:var(--_ui5-datepicker-hover-background)}:host(:not([disabled]):not([readonly]):hover){background:var(--_ui5-datepicker-hover-background)}.ui5-date-picker-root{border-radius:inherit;height:inherit;line-height:inherit;letter-spacing:inherit;word-spacing:inherit}:host .ui5-date-picker-input{width:100%;min-width:12.5625rem;color:inherit;background-color:inherit;border-radius:inherit;height:inherit;line-height:inherit;letter-spacing:inherit;word-spacing:inherit}:host(:not([disabled]):not([readonly])) .ui5-date-picker-input[focused]{background-color:var(--_ui5-datepicker-hover-background)}:host([readonly]){border-color:var(--_ui5_input_readonly_border_color);background:var(--sapField_ReadOnly_BackgroundStyle);background-color:var(--_ui5_input_readonly_background)}[slot=icon]{border-top-right-radius:var(--_ui5-datepicker_icon_border_radius);border-bottom-right-radius:var(--_ui5-datepicker_icon_border_radius)}"};v("@ui5/webcomponents-theming","sap_fiori_3",async()=>S);v("@ui5/webcomponents","sap_fiori_3",async()=>T);const Ve={packageName:"@ui5/webcomponents",fileName:"themes/DatePickerPopover.css",content:"[ui5-calendar]{width:100%;display:flex;justify-content:center}[ui5-responsive-popover]::part(content){padding:0}"};var s=globalThis&&globalThis.__decorate||function(a,e,i,r){var n=arguments.length,u=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,i):r,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")u=Reflect.decorate(a,e,i,r);else for(var c=a.length-1;c>=0;c--)(h=a[c])&&(u=(n<3?h(u):n>3?h(e,i,u):h(e,i))||u);return n>3&&u&&Object.defineProperty(e,i,u),u},_;let o=_=class extends R{onResponsivePopoverAfterClose(){var e;this._isPickerOpen=!1,f()?this.blur():(e=this._getInput())==null||e.focus()}onBeforeRendering(){this.FormSupport=H("FormSupport"),["minDate","maxDate"].forEach(e=>{const i=this[e];this.isValid(i)||console.warn(`Invalid value for property "${e}": ${i} is not compatible with the configured format pattern: "${this._displayFormat}"`)}),this.FormSupport?this.FormSupport.syncNativeHiddenInput(this):this.name&&console.warn('In order for the "name" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";'),this.value=this.normalizeValue(this.value)||this.value,this.liveValue=this.value}get _calendarSelectionMode(){return"Single"}get _calendarTimestamp(){if(this.value&&this.dateValueUTC&&this._checkValueValidity(this.value)){const e=this.dateValueUTC.getTime();return _e(e)}return z(this._primaryCalendarType)}get _calendarSelectedDates(){return this.value&&this._checkValueValidity(this.value)?[this.value]:[]}_onkeydown(e){U(e)&&(e.preventDefault(),this.isOpen()?Y(e)||this._toggleAndFocusInput():this._toggleAndFocusInput()),this._getInput().isEqualNode(e.target)&&this.isOpen()&&(j(e)||G(e)||W(e)||J(e))&&this.closePicker(),!this.isOpen()&&(K(e)?this.FormSupport&&this.FormSupport.triggerFormSubmit(this):X(e)?(e.preventDefault(),this._modifyDateValue(1,"year")):Z(e)?(e.preventDefault(),this._modifyDateValue(1,"month")):Q(e)?(e.preventDefault(),this._modifyDateValue(1,"day")):ee(e)?(e.preventDefault(),this._modifyDateValue(-1,"year")):te(e)?(e.preventDefault(),this._modifyDateValue(-1,"month")):ie(e)&&(e.preventDefault(),this._modifyDateValue(-1,"day")))}_modifyDateValue(e,i){if(!this.dateValue)return;const r=B(x.fromLocalJSDate(this.dateValue),e,i,this._minDate,this._maxDate),n=this.formatValue(r.toUTCJSDate());this._updateValueAndFireEvents(n,!0,["change","value-changed"])}_updateValueAndFireEvents(e,i,r,n=!0){const u=this._checkValueValidity(e);u&&i&&(e=this.normalizeValue(e));let h=!0;this.liveValue=e;const c=this.value;n&&(this._getInput().value=e,this.value=e,this._updateValueState()),r.forEach(A=>{this.fireEvent(A,{value:e,valid:u},!0)||(h=!1)}),!h&&n&&(this._getInput().value=c,this.value=c,this._updateValueState())}_updateValueState(){const e=this._checkValueValidity(this.value);e?e&&this.valueState===m.Error&&(this.valueState=m.None):this.valueState=m.Error}_toggleAndFocusInput(){this.togglePicker(),this._getInput().focus()}_getInput(){return this.shadowRoot.querySelector("[ui5-input]")}_onInputSubmit(){}_onInputChange(e){this._updateValueAndFireEvents(e.target.value,!0,["change","value-changed"])}_onInputInput(e){this._updateValueAndFireEvents(e.target.value,!1,["input"],!1)}_checkValueValidity(e){return e===""?!0:this.isValid(e)&&this.isInValidRange(e)}_click(e){f()&&(this.responsivePopover.showAt(this),e.preventDefault())}isValid(e=""){return e===""?!0:!!this.getFormat().parse(e)}isInValidRange(e=""){if(e==="")return!0;const i=this._getCalendarDateFromString(e);return!i||!this._minDate||!this._maxDate?!1:i.valueOf()>=this._minDate.valueOf()&&i.valueOf()<=this._maxDate.valueOf()}normalizeValue(e){return e===""?e:this.getFormat().format(this.getFormat().parse(e,!0),!0)}get _displayFormat(){return this.getFormat().oFormatOptions.pattern}get _placeholder(){return this.placeholder!==void 0?this.placeholder:this._displayFormat}get _headerTitleText(){return _.i18nBundle.getText(ne)}get phone(){return f()}get showHeader(){return this.phone}get showFooter(){return this.phone}get accInfo(){return{ariaRoledescription:this.dateAriaDescription,ariaHasPopup:oe.Grid,ariaAutoComplete:"none",ariaRequired:this.required,ariaLabel:L(this)}}get openIconTitle(){return _.i18nBundle.getText(se)}get openIconName(){return"appointment-2"}get dateAriaDescription(){return _.i18nBundle.getText(le)}get _shouldHideHeader(){return!1}get _ariaHidden(){return ae()}async _respPopover(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-responsive-popover]")}_canOpenPicker(){return!this.disabled&&!this.readonly}get _calendarPickersMode(){const i=this.getFormat().aFormatArray.map(r=>r.type.toLowerCase());return i.includes("day")?g.DAY_MONTH_YEAR:i.includes("month")||i.includes("monthstandalone")?g.MONTH_YEAR:g.YEAR}onSelectedDatesChange(e){e.preventDefault();const i=e.detail.values&&e.detail.values[0];this._updateValueAndFireEvents(i,!0,["change","value-changed"]),this.closePicker()}onHeaderShowMonthPress(){this._calendarCurrentPicker="month"}onHeaderShowYearPress(){this._calendarCurrentPicker="year"}formatValue(e){return this.getFormat().format(e)}closePicker(){this.responsivePopover.close()}async openPicker(){this._isPickerOpen=!0,this._calendarCurrentPicker="day",this.responsivePopover=await this._respPopover(),this.responsivePopover.showAt(this)}togglePicker(){this.isOpen()?this.closePicker():this._canOpenPicker()&&this.openPicker()}isOpen(){return!!this._isPickerOpen}get dateValue(){return this.liveValue?this.getFormat().parse(this.liveValue):this.getFormat().parse(this.value)}get dateValueUTC(){return this.liveValue?this.getFormat().parse(this.liveValue,!0):this.getFormat().parse(this.value)}get styles(){return{main:{width:"100%"}}}get type(){return he.Text}};s([l()],o.prototype,"value",void 0);s([l({type:m,defaultValue:m.None})],o.prototype,"valueState",void 0);s([l({type:Boolean})],o.prototype,"required",void 0);s([l({type:Boolean})],o.prototype,"disabled",void 0);s([l({type:Boolean})],o.prototype,"readonly",void 0);s([l({defaultValue:void 0})],o.prototype,"placeholder",void 0);s([l()],o.prototype,"name",void 0);s([l({type:Boolean})],o.prototype,"hideWeekNumbers",void 0);s([l()],o.prototype,"accessibleName",void 0);s([l({defaultValue:""})],o.prototype,"accessibleNameRef",void 0);s([l({type:Boolean,noAttribute:!0})],o.prototype,"_isPickerOpen",void 0);s([l({type:Object})],o.prototype,"_respPopoverConfig",void 0);s([l({defaultValue:"day"})],o.prototype,"_calendarCurrentPicker",void 0);s([I({type:HTMLElement})],o.prototype,"valueStateMessage",void 0);s([I({type:HTMLElement})],o.prototype,"formSupport",void 0);o=_=s([E({tag:"ui5-date-picker",languageAware:!0,template:we,staticAreaTemplate:Pe,styles:De,staticAreaStyles:[ce,Ve],dependencies:[M,de,O,N,ue,pe]}),b("change",{detail:{value:{type:String},valid:{type:Boolean}}}),b("input",{detail:{value:{type:String},valid:{type:Boolean}}})],o);o.define();const yt=o;export{yt as default};
//# sourceMappingURL=DatePicker-c01cce97.js.map
