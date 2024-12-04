import{a as O,g as F,D as w,s as H}from"./Gregorian-aYBR9mqU.js";import"./Persian-CjHlmpLz.js";import{o as U}from"./ValueState-Bg0UWejw.js";import{p as s,v as i,q as e,a as f,s as E,b as y,m as B,T as L,w as W}from"./withWebComponent-DpVKsRHi.js";import{f as _}from"./ResizeHandler-D2m47C26.js";import{e as z,m as Y,a as x,d as G}from"./Calendar-5OVqaufr.js";import{f as A,c as D}from"./Icon-CrKv37md.js";import{a as J}from"./Button-CzXV-qq-.js";import{T as j}from"./ToggleButton-wnicgm__.js";import{S as K}from"./SegmentedButton-CQfQC_Yd.js";import{D as g}from"./DatePicker-DV-ZEl0q.js";import{T as Q}from"./TimeSelectionClocks-CoLYMavA.js";import{b1 as X,b2 as Z,b3 as ee,b4 as te,b5 as ae,b6 as ne}from"./i18n-defaults-CMHHS2wK.js";import{s as T}from"./style-map-Bigav4TG.js";import{o as u}from"./class-map-CAgcI9af.js";import{s as R}from"./parameters-bundle.css-R51uC6BG.js";const ie="date-time",oe="M32 32h64V0h32v32h192V0h32v32h64q14 0 23 9t9 23v96h-32v-32H32v352h128v32H32q-14 0-23-9t-9-23V64q0-14 9-23t23-9zm320 64V64h-32v32h32zM96 64v32h32V64H96zm256 128q33 0 62 12.5t51 34.5 34.5 51 12.5 62-12.5 62-34.5 51-51 34.5-62 12.5-62-12.5-51-34.5-34.5-51-12.5-62 12.5-62 34.5-51 51-34.5 62-12.5zM224 352q0 27 10 50t27.5 40.5T302 470t50 10 50-10 40.5-27.5T470 402t10-50-10-50-27.5-40.5T402 234t-50-10-50 10-40.5 27.5T234 302t-10 50zm127-64q16 0 16 16v48h49q16 0 16 16 0 6-4.5 11t-11.5 5h-65q-7 0-11.5-5t-4.5-11v-64q0-16 16-16z",se=!0,re="SAP-icons-v4",le="@ui5/webcomponents-icons";A(ie,{pathData:oe,ltr:se,collection:re,packageName:le});const de="date-time",ue="M320 192q33 0 62 12.5t51 34.5 34.5 51 12.5 62-12.5 62-34.5 51-51 34.5-62 12.5-62-12.5-51-34.5-34.5-51-12.5-62 12.5-62 34.5-51 51-34.5 62-12.5zm0 269q23 0 42.5-8.5T397 429t23.5-35 8.5-42q0-23-8.5-42.5T397 275t-34.5-23.5T320 243q-22 0-42 8.5T243 275t-23.5 34.5T211 352q0 22 8.5 42t23.5 35 35 23.5 42 8.5zm55-90q9 7 9 19 0 11-7.5 18.5T358 416q-8 0-16-6l-45-39q-9-6-9-19v-46q0-11 7.5-18.5T314 280t18 7.5 7 18.5v34zM83 243v147q0 17 11 28t28 11h4q11 0 18.5 7t7.5 18-7.5 18.5T126 480h-4q-38 0-64-26t-26-64V154q0-38 26-64t64-26h6V26q0-11 7.5-18.5T154 0t18 7.5 7 18.5v38h122V26q0-11 7-18.5T326 0t18.5 7.5T352 26v38h6q38 0 64 26t26 64v4q0 11-7.5 18.5T422 184t-18-7.5-7-18.5v-4q0-17-11-28t-28-11h-6v19q0 11-7.5 18.5T326 160t-18-7.5-7-18.5v-19H179v19q0 11-7 18.5t-18 7.5-18.5-7.5T128 134v-19h-6q-17 0-28 11t-11 28v38h51q11 0 18.5 7.5T160 218t-7.5 18-18.5 7H83z",ce=!0,he="SAP-icons-v5",pe="@ui5/webcomponents-icons";A(de,{pathData:ue,ltr:ce,collection:he,packageName:pe});function me(n,a,t){return t?s`<div class="ui5-date-picker-root" style="${T(this.styles.main)}"><${i("ui5-input",a,t)} id="${e(this._id)}-inner" class="ui5-date-picker-input" placeholder="${e(this._placeholder)}" type="${e(this.type)}" value="${e(this.value)}" ?disabled="${this.disabled}" ?required="${this.required}" ?readonly="${this.readonly}" value-state="${e(this.valueState)}" data-sap-focus-ref ._inputAccInfo ="${e(this.accInfo)}" @ui5-change="${e(this._onInputChange)}" @ui5-input="${e(this._onInputInput)}" @ui5-submit="${e(this._onInputSubmit)}" @keydown="${this._onkeydown}">${this.valueStateMessage.length?k.call(this,n,a,t):void 0}${this.readonly?void 0:$.call(this,n,a,t)}</${i("ui5-input",a,t)}></div><${i("ui5-responsive-popover",a,t)} id="${e(this._id)}-responsive-popover" .opener=${e(this)} ?open="${this.open}" allow-target-overlap placement="Bottom" horizontal-align="Start" accessible-name="${e(this.pickerAccessibleName)}" hide-arrow ?_hide-header=${e(this._shouldHideHeader)} @keydown="${this._onkeydown}" @ui5-close="${e(this.onResponsivePopoverAfterClose)}" @ui5-open="${e(this.onResponsivePopoverAfterOpen)}" @ui5-before-open="${e(this.onResponsivePopoverBeforeOpen)}">${this.showHeader?P.call(this,n,a,t):void 0}<div class="ui5-dt-picker-content ${u(this.classes.picker)}"><${i("ui5-calendar",a,t)} class="ui5-dt-cal ${u(this.classes.dateTimeView)}" id="${e(this._id)}-calendar" primary-calendar-type="${e(this._primaryCalendarType)}" secondary-calendar-type="${e(this.secondaryCalendarType)}" format-pattern="${e(this._formatPattern)}" .selectionMode="${e(this._calendarSelectionMode)}" .minDate="${e(this.minDate)}" .maxDate="${e(this.maxDate)}" .calendarWeekNumbering="${e(this.calendarWeekNumbering)}" @ui5-selection-change="${e(this.onSelectedDatesChange)}" @ui5-show-month-view="${e(this.onHeaderShowMonthPress)}" @ui5-show-year-view="${e(this.onHeaderShowYearPress)}" ?hide-week-numbers="${this.hideWeekNumbers}" ._currentPicker="${e(this._calendarCurrentPicker)}">${D(this._calendarSelectedDates,(o,r)=>o._id||r,(o,r)=>S.call(this,n,a,t,o,r))}</${i("ui5-calendar",a,t)}>${this.phone?void 0:C.call(this,n,a,t)}${this.showTimeView?V.call(this,n,a,t):void 0}</div>${this.showFooter?N.call(this,n,a,t):void 0}</${i("ui5-responsive-popover",a,t)}> `:s`<div class="ui5-date-picker-root" style="${T(this.styles.main)}"><ui5-input id="${e(this._id)}-inner" class="ui5-date-picker-input" placeholder="${e(this._placeholder)}" type="${e(this.type)}" value="${e(this.value)}" ?disabled="${this.disabled}" ?required="${this.required}" ?readonly="${this.readonly}" value-state="${e(this.valueState)}" data-sap-focus-ref ._inputAccInfo ="${e(this.accInfo)}" @ui5-change="${e(this._onInputChange)}" @ui5-input="${e(this._onInputInput)}" @ui5-submit="${e(this._onInputSubmit)}" @keydown="${this._onkeydown}">${this.valueStateMessage.length?k.call(this,n,a,t):void 0}${this.readonly?void 0:$.call(this,n,a,t)}</ui5-input></div><ui5-responsive-popover id="${e(this._id)}-responsive-popover" .opener=${e(this)} ?open="${this.open}" allow-target-overlap placement="Bottom" horizontal-align="Start" accessible-name="${e(this.pickerAccessibleName)}" hide-arrow ?_hide-header=${e(this._shouldHideHeader)} @keydown="${this._onkeydown}" @ui5-close="${e(this.onResponsivePopoverAfterClose)}" @ui5-open="${e(this.onResponsivePopoverAfterOpen)}" @ui5-before-open="${e(this.onResponsivePopoverBeforeOpen)}">${this.showHeader?P.call(this,n,a,t):void 0}<div class="ui5-dt-picker-content ${u(this.classes.picker)}"><ui5-calendar class="ui5-dt-cal ${u(this.classes.dateTimeView)}" id="${e(this._id)}-calendar" primary-calendar-type="${e(this._primaryCalendarType)}" secondary-calendar-type="${e(this.secondaryCalendarType)}" format-pattern="${e(this._formatPattern)}" .selectionMode="${e(this._calendarSelectionMode)}" .minDate="${e(this.minDate)}" .maxDate="${e(this.maxDate)}" .calendarWeekNumbering="${e(this.calendarWeekNumbering)}" @ui5-selection-change="${e(this.onSelectedDatesChange)}" @ui5-show-month-view="${e(this.onHeaderShowMonthPress)}" @ui5-show-year-view="${e(this.onHeaderShowYearPress)}" ?hide-week-numbers="${this.hideWeekNumbers}" ._currentPicker="${e(this._calendarCurrentPicker)}">${D(this._calendarSelectedDates,(o,r)=>o._id||r,(o,r)=>S.call(this,n,a,t,o,r))}</ui5-calendar>${this.phone?void 0:C.call(this,n,a,t)}${this.showTimeView?V.call(this,n,a,t):void 0}</div>${this.showFooter?N.call(this,n,a,t):void 0}</ui5-responsive-popover> `}function k(n,a,t){return s`<slot name="valueStateMessage" slot="valueStateMessage"></slot>`}function $(n,a,t){return t?s`<${i("ui5-icon",a,t)} id="${e(this._id)}-value-help" slot="icon" name="${e(this.openIconName)}" tabindex="-1" accessible-name="${e(this.openIconTitle)}" mode=${e(this._iconMode)} show-tooltip @click="${this._togglePicker}" class="inputIcon" ?pressed="${this.open}"></${i("ui5-icon",a,t)}>`:s`<ui5-icon id="${e(this._id)}-value-help" slot="icon" name="${e(this.openIconName)}" tabindex="-1" accessible-name="${e(this.openIconTitle)}" mode=${e(this._iconMode)} show-tooltip @click="${this._togglePicker}" class="inputIcon" ?pressed="${this.open}"></ui5-icon>`}function P(n,a,t){return s`${this.phone?fe.call(this,n,a,t):void 0}`}function fe(n,a,t){return t?s`<div class="ui5-dt-picker-header"><${i("ui5-segmented-button",a,t)} class="ui5-dt-picker-toggle-button"><${i("ui5-toggle-button",a,t)} key="Date" ?pressed="${this.showDateView}" @click="${this._dateTimeSwitchChange}">${e(this.btnDateLabel)}</${i("ui5-toggle-button",a,t)}><${i("ui5-toggle-button",a,t)} key="Time" ?pressed="${this.showTimeView}" @click="${this._dateTimeSwitchChange}">${e(this.btnTimeLabel)}</${i("ui5-toggle-button",a,t)}></${i("ui5-segmented-button",a,t)}></div>`:s`<div class="ui5-dt-picker-header"><ui5-segmented-button class="ui5-dt-picker-toggle-button"><ui5-toggle-button key="Date" ?pressed="${this.showDateView}" @click="${this._dateTimeSwitchChange}">${e(this.btnDateLabel)}</ui5-toggle-button><ui5-toggle-button key="Time" ?pressed="${this.showTimeView}" @click="${this._dateTimeSwitchChange}">${e(this.btnTimeLabel)}</ui5-toggle-button></ui5-segmented-button></div>`}function S(n,a,t,o,r){return t?s`<${i("ui5-date",a,t)} value="${e(o)}"></${i("ui5-date",a,t)}>`:s`<ui5-date value="${e(o)}"></ui5-date>`}function C(n,a,t){return s`<span class="ui5-dt-picker-separator"></span>`}function V(n,a,t){return t?s`<${i("ui5-time-selection-clocks",a,t)} id="${e(this._id)}-time-sel" class="ui5-dt-time ${u(this.classes.dateTimeView)}" format-pattern="${e(this._formatPattern)}" value="${e(this._timeSelectionValue)}" @ui5-change="${e(this.onTimeSelectionChange)}" ._calendarType="${e(this._primaryCalendarType)}"></${i("ui5-time-selection-clocks",a,t)}>`:s`<ui5-time-selection-clocks id="${e(this._id)}-time-sel" class="ui5-dt-time ${u(this.classes.dateTimeView)}" format-pattern="${e(this._formatPattern)}" value="${e(this._timeSelectionValue)}" @ui5-change="${e(this.onTimeSelectionChange)}" ._calendarType="${e(this._primaryCalendarType)}"></ui5-time-selection-clocks>`}function N(n,a,t){return t?s`<div slot="footer" class="ui5-dt-picker-footer ${u(this.classes.footer)}"><${i("ui5-button",a,t)} id="ok" class="ui5-dt-picker-action" design="Emphasized" ?disabled="${this._submitDisabled}" @click="${this._submitClick}">${e(this.btnOKLabel)}</${i("ui5-button",a,t)}><${i("ui5-button",a,t)} id="cancel" class="ui5-dt-picker-action" design="Transparent" @click="${this._cancelClick}">${e(this.btnCancelLabel)}</${i("ui5-button",a,t)}></div>`:s`<div slot="footer" class="ui5-dt-picker-footer ${u(this.classes.footer)}"><ui5-button id="ok" class="ui5-dt-picker-action" design="Emphasized" ?disabled="${this._submitDisabled}" @click="${this._submitClick}">${e(this.btnOKLabel)}</ui5-button><ui5-button id="cancel" class="ui5-dt-picker-action" design="Transparent" @click="${this._cancelClick}">${e(this.btnCancelLabel)}</ui5-button></div>`}f("@ui5/webcomponents-theming","sap_horizon",async()=>E);f("@ui5/webcomponents","sap_horizon",async()=>R);const ve={packageName:"@ui5/webcomponents",fileName:"themes/DateTimePicker.css.ts",content:`:host{min-width:15rem;color:var(--sapField_TextColor);background-color:var(--sapField_Background)}:host .ui5-date-picker-input{min-width:inherit;color:inherit;background-color:inherit}
`};f("@ui5/webcomponents-theming","sap_horizon",async()=>E);f("@ui5/webcomponents","sap_horizon",async()=>R);const be={packageName:"@ui5/webcomponents",fileName:"themes/DateTimePickerPopover.css.ts",content:`.ui5-dt-picker-content{display:flex;flex-direction:row;height:var(--_ui5-v2-4-0_datetime_picker_height);min-width:var(--_ui5-v2-4-0_datetime_picker_width);box-sizing:border-box;justify-content:center}.ui5-dt-picker-toggle-button{width:8rem}.ui5-dt-cal{width:auto;box-sizing:border-box}.ui5-dt-time{width:100%;min-width:var(--_ui5-v2-4-0_datetime_timeview_width);box-sizing:border-box}.ui5-dt-cal.ui5-dt-cal--hidden,.ui5-dt-time.ui5-dt-time--hidden{display:none}.ui5-dt-picker-header{display:flex;justify-content:center;width:100%;margin-top:1rem;box-sizing:border-box}.ui5-dt-picker-separator{height:calc(100% - 2rem);width:0px;margin-top:1rem;margin-bottom:1rem;border-left:1px solid var(--sapGroup_ContentBorderColor);box-sizing:border-box}.ui5-dt-picker-footer{display:flex;justify-content:flex-end;align-items:center;height:2.75rem;width:100%}.ui5-dt-picker-footer.ui5-dt-picker-footer-time-hidden{padding:0}.ui5-dt-picker-action{margin:.25rem}#ok.ui5-dt-picker-action{width:4rem}.ui5-dt-picker-content--phone.ui5-dt-picker-content{min-width:20rem;height:calc(100% - 4rem)}.ui5-dt-picker-content--phone.ui5-dt-picker-content [ui5-time-selection-clocks]{height:var(--_ui5-v2-4-0_datetime_timeview_phonemode_clocks_width);width:auto}.ui5-dt-picker-content--phone.ui5-dt-picker-content [ui5-calendar]{margin-bottom:var(--_ui5-v2-4-0_datetime_dateview_phonemode_margin_bottom)}.ui5-dt-picker-content--phone .ui5-dt-cal{width:100%}.ui5-dt-picker-content--phone .ui5-dt-time{min-width:var(--_ui5-v2-4-0_datetime_timeview_phonemode_width)}
`};var v=function(n,a,t,o){var r=arguments.length,l=r<3?a:o===null?o=Object.getOwnPropertyDescriptor(a,t):o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(n,a,t,o);else for(var b=n.length-1;b>=0;b--)(c=n[b])&&(l=(r<3?c(l):r>3?c(a,t,l):c(a,t))||l);return r>3&&l&&Object.defineProperty(a,t,l),l},d;const ge=640;let h=d=class extends g{constructor(){super(),this._showTimeView=!1,this._phoneMode=!1,this._previewValues={},this._handleResizeBound=this._handleResize.bind(this)}onResponsivePopoverAfterClose(){super.onResponsivePopoverAfterClose(),this._showTimeView=!1,this._previewValues={}}onEnterDOM(){_.register(document.body,this._handleResizeBound)}onExitDOM(){_.deregister(document.body,this._handleResizeBound)}_togglePicker(){super._togglePicker(),this.open&&(this._previewValues={...this._previewValues,timeSelectionValue:this.value||this.getFormat().format(O.getInstance())})}get classes(){return{picker:{"ui5-dt-picker-content--phone":this.phone},dateTimeView:{"ui5-dt-cal--hidden":this.phone&&this.showTimeView,"ui5-dt-time--hidden":this.phone&&this.showDateView},footer:{"ui5-dt-picker-footer-time-hidden":this.phone&&this.showTimeView||this.phone&&this.showDateView}}}get _formatPattern(){const a=!!(this.formatPattern||"").match(/H/i),t=!this.formatPattern||!a,o=F(L());return t?o.getCombinedDateTimePattern("medium","medium",this._primaryCalendarType):this.formatPattern||""}get _calendarTimestamp(){return this._previewValues.calendarTimestamp?this._previewValues.calendarTimestamp:super._calendarTimestamp}get _calendarSelectedDates(){return this._previewValues.calendarValue?[this._previewValues.calendarValue]:super._calendarSelectedDates}get _timeSelectionValue(){return this._previewValues.timeSelectionValue?this._previewValues.timeSelectionValue:this.value}get openIconName(){return"date-time"}get btnOKLabel(){return d.i18nBundle.getText(X)}get btnCancelLabel(){return d.i18nBundle.getText(Z)}get btnDateLabel(){return d.i18nBundle.getText(ee)}get btnTimeLabel(){return d.i18nBundle.getText(te)}get showFooter(){return!0}get showDateView(){return this.phone?!this._showTimeView:!0}get showTimeView(){return this.phone?this._showTimeView:!0}get phone(){return super.phone||this._phoneMode}get dateAriaDescription(){return d.i18nBundle.getText(ae)}get pickerAccessibleName(){return d.i18nBundle.getText(ne)}get _shouldHideHeader(){return!0}onSelectedDatesChange(a){a.preventDefault();const t=a.path?a.path[1]:a.composedPath()[1];this._previewValues={...this._previewValues,calendarTimestamp:a.detail.timestamp,calendarValue:a.detail.selectedValues[0],timeSelectionValue:t.lastChild.value}}onTimeSelectionChange(a){this._previewValues={...this._previewValues,timeSelectionValue:a.detail.value}}_handleResize(){const t=document.body.offsetWidth<=ge;(t&&!this._phoneMode||!t&&this._phoneMode)&&(this._phoneMode=t)}get _submitDisabled(){return!this._calendarSelectedDates||!this._calendarSelectedDates.length}_submitClick(){const a=this.getSelectedDateTime(),t=this.getFormat().format(a);this.value!==t&&this._updateValueAndFireEvents(t,!0,["change","value-changed"]),this._togglePicker()}_cancelClick(){this._togglePicker()}_dateTimeSwitchChange(a){const t=a.target;this._showTimeView=t.getAttribute("key")==="Time"}_modifyDateValue(a,t,o){if(!this.dateValue)return;const l=Y(x.fromLocalJSDate(this.dateValue),a,t,o,this._minDate,this._maxDate).toLocalJSDate();l.setHours(this.dateValue.getHours()),l.setMinutes(this.dateValue.getMinutes()),l.setSeconds(this.dateValue.getSeconds());const c=this.formatValue(l);this._updateValueAndFireEvents(c,!0,["change","value-changed"])}getPicker(){return this.shadowRoot.querySelector("[ui5-responsive-popover]")}getSelectedDateTime(){const a=this.getFormat().parse(this._calendarSelectedDates[0]),t=this.getFormat().parse(this._timeSelectionValue);return t&&(a.setHours(t.getHours()),a.setMinutes(t.getMinutes()),a.setSeconds(t.getSeconds())),a}getFormat(){return this._isPattern?w.getDateTimeInstance({strictParsing:!0,pattern:this._formatPattern,calendarType:this._primaryCalendarType}):w.getDateTimeInstance({strictParsing:!0,style:this._formatPattern,calendarType:this._primaryCalendarType})}get _calendarPickersMode(){return G.DAY_MONTH_YEAR}};v([y({type:Boolean,noAttribute:!0})],h.prototype,"_showTimeView",void 0);v([y({type:Boolean})],h.prototype,"_phoneMode",void 0);v([y({type:Object})],h.prototype,"_previewValues",void 0);h=d=v([B({tag:"ui5-datetime-picker",template:me,styles:[g.styles,ve,be],dependencies:[...g.dependencies,z,J,j,K,Q]})],h);h.define();const p=W("ui5-datetime-picker",["accessibleName","accessibleNameRef","calendarWeekNumbering","formatPattern","maxDate","minDate","name","placeholder","primaryCalendarType","secondaryCalendarType","value","valueState"],["disabled","hideWeekNumbers","open","readonly","required"],["valueStateMessage"],["change","close","input","open","value-state-change"]);p.displayName="DateTimePicker";try{p.displayName="DateTimePicker",p.__docgenInfo={description:`The \`DateTimePicker\` component alows users to select both date (day, month and year) and time (hours, minutes and seconds)
and for the purpose it consists of input field and Date/Time picker.

### Usage

Use the \`DateTimePicker\` if you need a combined date and time input component.
Don't use it if you want to use either date, or time value.
In this case, use the \`DatePicker\` or the \`TimePicker\` components instead.

The user can set date/time by:

- using the calendar and the time selectors
- typing in the input field

Programmatically, to set date/time for the \`DateTimePicker\`, use the \`value\` property

### Formatting

The value entered by typing into the input field must fit to the used date/time format.

Supported format options are pattern-based on Unicode LDML Date Format notation.
For more information, see [UTS #35: Unicode Locale Data Markup Language](https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).

**Example:** the following format \`dd/MM/yyyy, hh:mm:ss aa\`
corresponds the \`13/04/2020, 03:16:16 AM\` value.

The small 'h' defines "12" hours format and the "aa" symbols - "AM/PM" time periods.

**Example:** the following format \`dd/MM/yyyy, HH:mm:ss\`
corresponds the \`13/04/2020, 15:16:16\` value.

The capital 'H' indicates "24" hours format.

**Note:** If the \`formatPattern\` does NOT include time,
the \`DateTimePicker\` will fallback to the default time format according to the locale.

**Note:** If no placeholder is set to the \`DateTimePicker\`,
the current \`formatPattern\` is displayed as a placeholder.
If another placeholder is needed, it must be set or in case no placeholder is needed - it can be set to an empty string.

**Note:** If the user input does NOT match the \`formatPattern\`,
the \`DateTimePicker\` makes an attempt to parse it based on the
locale settings.

### Responsive behavior

The \`DateTimePicker\` is responsive and fully adapts to all devices.
For larger screens, such as tablet or desktop, it is displayed as a popover, while
on phone devices, it is displayed full screen.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"DateTimePicker",props:{valueStateMessage:{defaultValue:null,description:`Defines the value state message that will be displayed as pop up under the component.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The \`valueStateMessage\` would be displayed,
when the component is in \`Information\`, \`Critical\` or \`Negative\` value state.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="valueStateMessage"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:`Fired when the input operation has finished by pressing Enter or on focusout.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<DateTimePickerDomRef, DatePickerChangeEventDetail>) => void"}},onClose:{defaultValue:null,description:`Fired after the value-help dialog of the component is closed.

**Note:** Available since [v2.4.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.4.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<DateTimePickerDomRef, never>) => void"}},onInput:{defaultValue:null,description:`Fired when the value of the component is changed at each key stroke.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<DateTimePickerDomRef, DatePickerInputEventDetail>) => void"}},onOpen:{defaultValue:null,description:`Fired after the value-help dialog of the component is opened.

**Note:** Available since [v2.4.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.4.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DateTimePickerDomRef, never>) => void"}},onValueStateChange:{defaultValue:null,description:`Fired before the value state of the component is updated internally.
The event is preventable, meaning that if it's default action is
prevented, the component will not update the value state.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onValueStateChange",required:!1,type:{name:"(event: Ui5CustomEvent<DateTimePickerDomRef, DatePickerValueStateChangeEventDetail>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the aria-label attribute for the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},calendarWeekNumbering:{defaultValue:{value:'"Default"'},description:`Defines how to calculate calendar weeks and first day of the week.
If not set, the calendar will be displayed according to the currently set global configuration.

**Note:** Available since [v2.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.2.0) of **@ui5/webcomponents**.`,name:"calendarWeekNumbering",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"ISO_8601"'},{value:'"MiddleEastern"'},{value:'"WesternTraditional"'},{value:'"ISO_8601"'},{value:'"MiddleEastern"'},{value:'"WesternTraditional"'}]}},disabled:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as disabled.",name:"disabled",required:!1,type:{name:"boolean"}},formatPattern:{defaultValue:{value:"undefined"},description:"Determines the format, displayed in the input field.",name:"formatPattern",required:!1,type:{name:"string"}},hideWeekNumbers:{defaultValue:{value:"false"},description:`Defines the visibility of the week numbers column.

**Note:** For calendars other than Gregorian,
the week numbers are not displayed regardless of what is set.`,name:"hideWeekNumbers",required:!1,type:{name:"boolean"}},maxDate:{defaultValue:null,description:`Determines the maximum date available for selection.

**Note:** If the formatPattern property is not set, the maxDate value must be provided in the ISO date format (YYYY-MM-dd).`,name:"maxDate",required:!1,type:{name:"string"}},minDate:{defaultValue:null,description:`Determines the minimum date available for selection.

**Note:** If the formatPattern property is not set, the minDate value must be provided in the ISO date format (YYYY-MM-dd).`,name:"minDate",required:!1,type:{name:"string"}},name:{defaultValue:{value:"undefined"},description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.`,name:"name",required:!1,type:{name:"string"}},open:{defaultValue:{value:"false"},description:`Defines the open or closed state of the popover.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"undefined"},description:`Defines a short hint, intended to aid the user with data entry when the
component has no value.

**Note:** When no placeholder is set, the format pattern is displayed as a placeholder.
Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.`,name:"placeholder",required:!1,type:{name:"string"}},primaryCalendarType:{defaultValue:{value:"undefined"},description:`Sets a calendar type used for display.
If not set, the calendar type of the global configuration is used.`,name:"primaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},readonly:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as read-only.",name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},secondaryCalendarType:{defaultValue:{value:"undefined"},description:`Defines the secondary calendar type.
If not set, the calendar will only show the primary calendar type.`,name:"secondaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},value:{defaultValue:null,description:"Defines a formatted date value.",name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"None"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{p.displayName="DateTimePicker",p.__docgenInfo={description:`The \`DateTimePicker\` component alows users to select both date (day, month and year) and time (hours, minutes and seconds)
and for the purpose it consists of input field and Date/Time picker.

### Usage

Use the \`DateTimePicker\` if you need a combined date and time input component.
Don't use it if you want to use either date, or time value.
In this case, use the \`DatePicker\` or the \`TimePicker\` components instead.

The user can set date/time by:

- using the calendar and the time selectors
- typing in the input field

Programmatically, to set date/time for the \`DateTimePicker\`, use the \`value\` property

### Formatting

The value entered by typing into the input field must fit to the used date/time format.

Supported format options are pattern-based on Unicode LDML Date Format notation.
For more information, see [UTS #35: Unicode Locale Data Markup Language](https://unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).

**Example:** the following format \`dd/MM/yyyy, hh:mm:ss aa\`
corresponds the \`13/04/2020, 03:16:16 AM\` value.

The small 'h' defines "12" hours format and the "aa" symbols - "AM/PM" time periods.

**Example:** the following format \`dd/MM/yyyy, HH:mm:ss\`
corresponds the \`13/04/2020, 15:16:16\` value.

The capital 'H' indicates "24" hours format.

**Note:** If the \`formatPattern\` does NOT include time,
the \`DateTimePicker\` will fallback to the default time format according to the locale.

**Note:** If no placeholder is set to the \`DateTimePicker\`,
the current \`formatPattern\` is displayed as a placeholder.
If another placeholder is needed, it must be set or in case no placeholder is needed - it can be set to an empty string.

**Note:** If the user input does NOT match the \`formatPattern\`,
the \`DateTimePicker\` makes an attempt to parse it based on the
locale settings.

### Responsive behavior

The \`DateTimePicker\` is responsive and fully adapts to all devices.
For larger screens, such as tablet or desktop, it is displayed as a popover, while
on phone devices, it is displayed full screen.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"DateTimePicker",props:{valueStateMessage:{defaultValue:null,description:`Defines the value state message that will be displayed as pop up under the component.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The \`valueStateMessage\` would be displayed,
when the component is in \`Information\`, \`Critical\` or \`Negative\` value state.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="valueStateMessage"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:`Fired when the input operation has finished by pressing Enter or on focusout.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<DateTimePickerDomRef, DatePickerChangeEventDetail>) => void"}},onClose:{defaultValue:null,description:`Fired after the value-help dialog of the component is closed.

**Note:** Available since [v2.4.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.4.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<DateTimePickerDomRef, never>) => void"}},onInput:{defaultValue:null,description:`Fired when the value of the component is changed at each key stroke.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<DateTimePickerDomRef, DatePickerInputEventDetail>) => void"}},onOpen:{defaultValue:null,description:`Fired after the value-help dialog of the component is opened.

**Note:** Available since [v2.4.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.4.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DateTimePickerDomRef, never>) => void"}},onValueStateChange:{defaultValue:null,description:`Fired before the value state of the component is updated internally.
The event is preventable, meaning that if it's default action is
prevented, the component will not update the value state.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onValueStateChange",required:!1,type:{name:"(event: Ui5CustomEvent<DateTimePickerDomRef, DatePickerValueStateChangeEventDetail>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the aria-label attribute for the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},calendarWeekNumbering:{defaultValue:{value:'"Default"'},description:`Defines how to calculate calendar weeks and first day of the week.
If not set, the calendar will be displayed according to the currently set global configuration.

**Note:** Available since [v2.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.2.0) of **@ui5/webcomponents**.`,name:"calendarWeekNumbering",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"ISO_8601"'},{value:'"MiddleEastern"'},{value:'"WesternTraditional"'},{value:'"ISO_8601"'},{value:'"MiddleEastern"'},{value:'"WesternTraditional"'}]}},disabled:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as disabled.",name:"disabled",required:!1,type:{name:"boolean"}},formatPattern:{defaultValue:{value:"undefined"},description:"Determines the format, displayed in the input field.",name:"formatPattern",required:!1,type:{name:"string"}},hideWeekNumbers:{defaultValue:{value:"false"},description:`Defines the visibility of the week numbers column.

**Note:** For calendars other than Gregorian,
the week numbers are not displayed regardless of what is set.`,name:"hideWeekNumbers",required:!1,type:{name:"boolean"}},maxDate:{defaultValue:null,description:`Determines the maximum date available for selection.

**Note:** If the formatPattern property is not set, the maxDate value must be provided in the ISO date format (YYYY-MM-dd).`,name:"maxDate",required:!1,type:{name:"string"}},minDate:{defaultValue:null,description:`Determines the minimum date available for selection.

**Note:** If the formatPattern property is not set, the minDate value must be provided in the ISO date format (YYYY-MM-dd).`,name:"minDate",required:!1,type:{name:"string"}},name:{defaultValue:{value:"undefined"},description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.`,name:"name",required:!1,type:{name:"string"}},open:{defaultValue:{value:"false"},description:`Defines the open or closed state of the popover.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"undefined"},description:`Defines a short hint, intended to aid the user with data entry when the
component has no value.

**Note:** When no placeholder is set, the format pattern is displayed as a placeholder.
Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.`,name:"placeholder",required:!1,type:{name:"string"}},primaryCalendarType:{defaultValue:{value:"undefined"},description:`Sets a calendar type used for display.
If not set, the calendar type of the global configuration is used.`,name:"primaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},readonly:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as read-only.",name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},secondaryCalendarType:{defaultValue:{value:"undefined"},description:`Defines the secondary calendar type.
If not set, the calendar will only show the primary calendar type.`,name:"secondaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},value:{defaultValue:null,description:"Defines a formatted date value.",name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"None"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const ye={title:"Inputs / DateTimePicker",component:p,argTypes:{valueStateMessage:{control:{disable:!0}}},args:{primaryCalendarType:H.Gregorian,valueState:U.None},tags:["package:@ui5/webcomponents"]},m={};var I,q,M;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:"{}",...(M=(q=m.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};const we=["Default"],Fe=Object.freeze(Object.defineProperty({__proto__:null,Default:m,__namedExportsOrder:we,default:ye},Symbol.toStringTag,{value:"Module"}));export{Fe as C,m as D};
