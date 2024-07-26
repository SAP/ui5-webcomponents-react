import{g as L}from"./Gregorian-wm9OeSNI.js";import{C as R}from"./Persian-pITT_iP5.js";import{V as H}from"./ValueState-gQDshf3o.js";import{_ as A}from"./iframe-0t0bluh7.js";import{a as l,b as o,l as a,s as N,p as b,c as F,w as O}from"./withWebComponent-CFCcsgaR.js";import{R as _}from"./ResizeHandler-SVe57yR2.js";import{g as z}from"./i18nBundle-VKnKJfRd.js";import{d as B,m as U,C as W,a as Y}from"./Calendar-Nd1r2wuy.js";import{i as x,r as f}from"./Boot-DdVREbXE.js";import{r as M}from"./Icons-Ce4pu5im.js";import{b as j}from"./Button-C7MkX4Mc.js";import G from"./ToggleButton-CkaIlpdt.js";import{S as J}from"./SegmentedButton-D3oGNrgp.js";import g from"./DatePicker-DaKK3IiL.js";import{T as K}from"./TimeSelectionClocks-BjFW7MxP.js";import{aW as X,aX as Z,aY as Q,aZ as ee,a_ as te,a$ as ae}from"./i18n-defaults-B3SMwW1O.js";import{o as u}from"./class-map-BVs8Mnz-.js";import{c as w}from"./Icon-5sSxuG1B.js";import{s as q}from"./parameters-bundle.css-BZWwXjHP.js";const ne="date-time",I="M352 192q33 0 62 12.5t51 34.5 34.5 51 12.5 62-12.5 62-34.5 51-51 34.5-62 12.5-62-12.5-51-34.5-34.5-51-12.5-62 12.5-62 34.5-51 51-34.5 62-12.5zM32 32h64V0h32v32h192V0h32v32h64q14 0 23 9t9 23v96h-32v-32H32v352h128v32H32q-14 0-23-9t-9-23V64q0-14 9-23t23-9zm192 320q0 27 10 50t27.5 40.5T302 470t50 10 50-10 40.5-27.5T470 402t10-50-10-50-27.5-40.5T402 234t-50-10-50 10-40.5 27.5T234 302t-10 50zm127-64q16 0 16 16v48h49q16 0 16 16 0 6-4.5 11t-11.5 5h-65q-7 0-11.5-5t-4.5-11v-64q0-16 16-16zm1-192V64h-32v32h32zM96 64v32h32V64H96z",ie=!0,oe="SAP-icons-v4",se="@ui5/webcomponents-icons";M(ne,{pathData:I,ltr:ie,collection:oe,packageName:se});const re="date-time",E="M83 243v147q0 17 11 28t28 11h4q11 0 18.5 7t7.5 18-7.5 18.5T126 480h-4q-38 0-64-26t-26-64V154q0-38 26-64t64-26h6V26q0-11 7.5-18.5T154 0t18 7.5 7 18.5v38h122V26q0-11 7-18.5T326 0t18.5 7.5T352 26v38h6q38 0 64 26t26 64v4q0 11-7.5 18.5T422 184t-18-7.5-7-18.5v-4q0-17-11-28t-28-11h-6v19q0 11-7.5 18.5T326 160t-18-7.5-7-18.5v-19H179v19q0 11-7 18.5t-18 7.5-18.5-7.5T128 134v-19h-6q-17 0-28 11t-11 28v38h51q11 0 18.5 7.5T160 218t-7.5 18-18.5 7H83zm237-51q33 0 62 12.5t51 34.5 34.5 51 12.5 62-12.5 62-34.5 51-51 34.5-62 12.5-62-12.5-51-34.5-34.5-51-12.5-62 12.5-62 34.5-51 51-34.5 62-12.5zm0 269q23 0 42.5-8.5T397 429t23.5-35 8.5-42q0-23-8.5-42.5T397 275t-34.5-23.5T320 243q-22 0-42 8.5T243 275t-23.5 34.5T211 352q0 22 8.5 42t23.5 35 35 23.5 42 8.5zm55-90q9 7 9 19 0 11-7.5 18.5T358 416q-8 0-16-6l-45-39q-9-8-9-19v-46q0-11 7.5-18.5T314 280t18 7.5 7 18.5v34z",le=!0,de="SAP-icons-v5",ue="@ui5/webcomponents-icons";M(re,{pathData:E,ltr:le,collection:de,packageName:ue});x();function ce(n,e,t){return t?l`<${o("ui5-responsive-popover",e,t)} id="${a(this._id)}-responsive-popover" allow-target-overlap placement-type="Bottom" horizontal-align="Left" accessible-name="${a(this.pickerAccessibleName)}" hide-arrow ?_hide-header=${a(this._shouldHideHeader)} @keydown="${this._onkeydown}" @ui5-after-close="${a(this.onResponsivePopoverAfterClose)}">${this.showHeader?T.call(this,n,e,t):void 0}<div class="ui5-dt-picker-content ${u(this.classes.picker)}"><${o("ui5-calendar",e,t)} class="ui5-dt-cal ${u(this.classes.dateTimeView)}" id="${a(this._id)}-calendar" primary-calendar-type="${a(this._primaryCalendarType)}" secondary-calendar-type="${a(this.secondaryCalendarType)}" format-pattern="${a(this._formatPattern)}" timestamp="${a(this._calendarTimestamp)}" .selectionMode="${a(this._calendarSelectionMode)}" .minDate="${a(this.minDate)}" .maxDate="${a(this.maxDate)}" @ui5-selected-dates-change="${a(this.onSelectedDatesChange)}" @ui5-show-month-view="${a(this.onHeaderShowMonthPress)}" @ui5-show-year-view="${a(this.onHeaderShowYearPress)}" ?hide-week-numbers="${this.hideWeekNumbers}" ._currentPicker="${a(this._calendarCurrentPicker)}">${w(this._calendarSelectedDates,(i,s)=>i._id||s,(i,s)=>D.call(this,n,e,t,i,s))}</${o("ui5-calendar",e,t)}>${this.phone?void 0:k.call(this,n,e,t)}${this.showTimeView?P.call(this,n,e,t):void 0}</div>${this.showFooter?S.call(this,n,e,t):void 0}</${o("ui5-responsive-popover",e,t)}> `:l`<ui5-responsive-popover id="${a(this._id)}-responsive-popover" allow-target-overlap placement-type="Bottom" horizontal-align="Left" accessible-name="${a(this.pickerAccessibleName)}" hide-arrow ?_hide-header=${a(this._shouldHideHeader)} @keydown="${this._onkeydown}" @ui5-after-close="${a(this.onResponsivePopoverAfterClose)}">${this.showHeader?T.call(this,n,e,t):void 0}<div class="ui5-dt-picker-content ${u(this.classes.picker)}"><ui5-calendar class="ui5-dt-cal ${u(this.classes.dateTimeView)}" id="${a(this._id)}-calendar" primary-calendar-type="${a(this._primaryCalendarType)}" secondary-calendar-type="${a(this.secondaryCalendarType)}" format-pattern="${a(this._formatPattern)}" timestamp="${a(this._calendarTimestamp)}" .selectionMode="${a(this._calendarSelectionMode)}" .minDate="${a(this.minDate)}" .maxDate="${a(this.maxDate)}" @ui5-selected-dates-change="${a(this.onSelectedDatesChange)}" @ui5-show-month-view="${a(this.onHeaderShowMonthPress)}" @ui5-show-year-view="${a(this.onHeaderShowYearPress)}" ?hide-week-numbers="${this.hideWeekNumbers}" ._currentPicker="${a(this._calendarCurrentPicker)}">${w(this._calendarSelectedDates,(i,s)=>i._id||s,(i,s)=>D.call(this,n,e,t,i,s))}</ui5-calendar>${this.phone?void 0:k.call(this,n,e,t)}${this.showTimeView?P.call(this,n,e,t):void 0}</div>${this.showFooter?S.call(this,n,e,t):void 0}</ui5-responsive-popover> `}function T(n,e,t){return l`${this.phone?me.call(this,n,e,t):void 0}`}function me(n,e,t){return t?l`<div class="ui5-dt-picker-header"><${o("ui5-segmented-button",e,t)} class="ui5-dt-picker-toggle-button"><${o("ui5-toggle-button",e,t)} key="Date" ?pressed="${this.showDateView}" @click="${this._dateTimeSwitchChange}">${a(this.btnDateLabel)}</${o("ui5-toggle-button",e,t)}><${o("ui5-toggle-button",e,t)} key="Time" ?pressed="${this.showTimeView}" @click="${this._dateTimeSwitchChange}">${a(this.btnTimeLabel)}</${o("ui5-toggle-button",e,t)}></${o("ui5-segmented-button",e,t)}></div>`:l`<div class="ui5-dt-picker-header"><ui5-segmented-button class="ui5-dt-picker-toggle-button"><ui5-toggle-button key="Date" ?pressed="${this.showDateView}" @click="${this._dateTimeSwitchChange}">${a(this.btnDateLabel)}</ui5-toggle-button><ui5-toggle-button key="Time" ?pressed="${this.showTimeView}" @click="${this._dateTimeSwitchChange}">${a(this.btnTimeLabel)}</ui5-toggle-button></ui5-segmented-button></div>`}function D(n,e,t,i,s){return t?l`<${o("ui5-date",e,t)} value="${a(i)}"></${o("ui5-date",e,t)}>`:l`<ui5-date value="${a(i)}"></ui5-date>`}function k(n,e,t){return l`<span class="ui5-dt-picker-separator"></span>`}function P(n,e,t){return t?l`<${o("ui5-time-selection-clocks",e,t)} id="${a(this._id)}-time-sel" class="ui5-dt-time ${u(this.classes.dateTimeView)}" format-pattern="${a(this._formatPattern)}" value="${a(this._timeSelectionValue)}" @ui5-change="${a(this.onTimeSelectionChange)}" ._calendarType="${a(this._primaryCalendarType)}"></${o("ui5-time-selection-clocks",e,t)}>`:l`<ui5-time-selection-clocks id="${a(this._id)}-time-sel" class="ui5-dt-time ${u(this.classes.dateTimeView)}" format-pattern="${a(this._formatPattern)}" value="${a(this._timeSelectionValue)}" @ui5-change="${a(this.onTimeSelectionChange)}" ._calendarType="${a(this._primaryCalendarType)}"></ui5-time-selection-clocks>`}function S(n,e,t){return t?l`<div slot="footer" class="ui5-dt-picker-footer ${u(this.classes.footer)}"><${o("ui5-button",e,t)} id="ok" class="ui5-dt-picker-action" design="Emphasized" ?disabled="${this._submitDisabled}" @click="${this._submitClick}">${a(this.btnOKLabel)}</${o("ui5-button",e,t)}><${o("ui5-button",e,t)} id="cancel" class="ui5-dt-picker-action" design="Transparent" @click="${this._cancelClick}">${a(this.btnCancelLabel)}</${o("ui5-button",e,t)}></div>`:l`<div slot="footer" class="ui5-dt-picker-footer ${u(this.classes.footer)}"><ui5-button id="ok" class="ui5-dt-picker-action" design="Emphasized" ?disabled="${this._submitDisabled}" @click="${this._submitClick}">${a(this.btnOKLabel)}</ui5-button><ui5-button id="cancel" class="ui5-dt-picker-action" design="Transparent" @click="${this._cancelClick}">${a(this.btnCancelLabel)}</ui5-button></div>`}f("@ui5/webcomponents-theming","sap_horizon",async()=>N);f("@ui5/webcomponents","sap_horizon",async()=>q);const he={packageName:"@ui5/webcomponents",fileName:"themes/DateTimePicker.css.ts",content:`:host{min-width:15rem;color:var(--sapField_TextColor);background-color:var(--sapField_Background)}:host .ui5-date-picker-input{min-width:inherit;color:inherit;background-color:inherit}
`};f("@ui5/webcomponents-theming","sap_horizon",async()=>N);f("@ui5/webcomponents","sap_horizon",async()=>q);const pe={packageName:"@ui5/webcomponents",fileName:"themes/DateTimePickerPopover.css.ts",content:`.ui5-dt-picker-content{display:flex;flex-direction:row;height:var(--_ui5-v1-24-7_datetime_picker_height);min-width:var(--_ui5-v1-24-7_datetime_picker_width);box-sizing:border-box;justify-content:center}.ui5-dt-picker-toggle-button{width:8rem}.ui5-dt-cal{width:auto;box-sizing:border-box}.ui5-dt-time{width:100%;min-width:var(--_ui5-v1-24-7_datetime_timeview_width);box-sizing:border-box}.ui5-dt-cal.ui5-dt-cal--hidden,.ui5-dt-time.ui5-dt-time--hidden{display:none}.ui5-dt-picker-header{display:flex;justify-content:center;width:100%;margin-top:1rem;box-sizing:border-box}.ui5-dt-picker-separator{height:calc(100% - 2rem);width:0px;margin-top:1rem;margin-bottom:1rem;border-left:1px solid var(--sapGroup_ContentBorderColor);box-sizing:border-box}.ui5-dt-picker-footer{display:flex;justify-content:flex-end;align-items:center;height:2.75rem;width:100%}.ui5-dt-picker-footer.ui5-dt-picker-footer-time-hidden{padding:0}.ui5-dt-picker-action{margin:.25rem}#ok.ui5-dt-picker-action{width:4rem}.ui5-dt-picker-content--phone.ui5-dt-picker-content{min-width:20rem;height:calc(100% - 4rem)}.ui5-dt-picker-content--phone.ui5-dt-picker-content [ui5-time-selection-clocks]{height:var(--_ui5-v1-24-7_datetime_timeview_phonemode_clocks_width);width:auto}.ui5-dt-picker-content--phone.ui5-dt-picker-content [ui5-calendar]{margin-bottom:var(--_ui5-v1-24-7_datetime_dateview_phonemode_margin_bottom)}.ui5-dt-picker-content--phone .ui5-dt-cal{width:100%}.ui5-dt-picker-content--phone .ui5-dt-time{min-width:var(--_ui5-v1-24-7_datetime_timeview_phonemode_width)}
`};var v=function(n,e,t,i){var s=arguments.length,r=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,i);else for(var y=n.length-1;y>=0;y--)(m=n[y])&&(r=(s<3?m(r):s>3?m(e,t,r):m(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},d;const fe=640;let c=d=class extends g{constructor(){super(),this._handleResizeBound=this._handleResize.bind(this)}onResponsivePopoverAfterClose(){super.onResponsivePopoverAfterClose(),this._showTimeView=!1,this._previewValues={}}onEnterDOM(){_.register(document.body,this._handleResizeBound)}onExitDOM(){_.deregister(document.body,this._handleResizeBound)}async openPicker(){await super.openPicker(),this._previewValues={...this._previewValues,timeSelectionValue:this.value||this.getFormat().format(new Date)}}get classes(){return{picker:{"ui5-dt-picker-content--phone":this.phone},dateTimeView:{"ui5-dt-cal--hidden":this.phone&&this.showTimeView,"ui5-dt-time--hidden":this.phone&&this.showDateView},footer:{"ui5-dt-picker-footer-time-hidden":this.phone&&this.showTimeView||this.phone&&this.showDateView}}}get _formatPattern(){const e=!!this.formatPattern.match(/H/i),t=!this.formatPattern||!e,i=L(z());return t?i.getCombinedDateTimePattern("medium","medium",this._primaryCalendarType):this.formatPattern}get _calendarTimestamp(){return this._previewValues.calendarTimestamp?this._previewValues.calendarTimestamp:super._calendarTimestamp}get _calendarSelectedDates(){return this._previewValues.calendarValue?[this._previewValues.calendarValue]:super._calendarSelectedDates}get _timeSelectionValue(){return this._previewValues.timeSelectionValue?this._previewValues.timeSelectionValue:this.value}get openIconName(){return"date-time"}get btnOKLabel(){return d.i18nBundle.getText(X)}get btnCancelLabel(){return d.i18nBundle.getText(Z)}get btnDateLabel(){return d.i18nBundle.getText(Q)}get btnTimeLabel(){return d.i18nBundle.getText(ee)}get showFooter(){return!0}get showDateView(){return this.phone?!this._showTimeView:!0}get showTimeView(){return this.phone?this._showTimeView:!0}get phone(){return super.phone||this._phoneMode}get dateAriaDescription(){return d.i18nBundle.getText(te)}get pickerAccessibleName(){return d.i18nBundle.getText(ae)}get _shouldHideHeader(){return!0}onSelectedDatesChange(e){e.preventDefault();const t=e.path?e.path[1]:e.composedPath()[1];this._previewValues={...this._previewValues,calendarTimestamp:e.detail.timestamp,calendarValue:e.detail.values[0],timeSelectionValue:t.lastChild.value}}onTimeSelectionChange(e){this._previewValues={...this._previewValues,timeSelectionValue:e.detail.value}}_handleResize(){const t=document.body.offsetWidth<=fe;(t&&!this._phoneMode||!t&&this._phoneMode)&&(this._phoneMode=t)}get _submitDisabled(){return!this._calendarSelectedDates||!this._calendarSelectedDates.length}_submitClick(){const e=this.getSelectedDateTime(),t=this.getFormat().format(e);this.value!==t&&this._updateValueAndFireEvents(t,!0,["change","value-changed"]),this.closePicker()}_cancelClick(){this.closePicker()}_dateTimeSwitchChange(e){const t=e.target;this._showTimeView=t.getAttribute("key")==="Time"}_modifyDateValue(e,t,i){if(!this.dateValue)return;const r=U(W.fromLocalJSDate(this.dateValue),e,t,i,this._minDate,this._maxDate).toLocalJSDate();r.setHours(this.dateValue.getHours()),r.setMinutes(this.dateValue.getMinutes()),r.setSeconds(this.dateValue.getSeconds());const m=this.formatValue(r);this._updateValueAndFireEvents(m,!0,["change","value-changed"])}async getPicker(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-responsive-popover]")}getSelectedDateTime(){const e=this.getFormat().parse(this._calendarSelectedDates[0]),t=this.getFormat().parse(this._timeSelectionValue);return t&&(e.setHours(t.getHours()),e.setMinutes(t.getMinutes()),e.setSeconds(t.getSeconds())),e}get _calendarPickersMode(){return Y.DAY_MONTH_YEAR}};v([b({type:Boolean,noAttribute:!0})],c.prototype,"_showTimeView",void 0);v([b({type:Boolean})],c.prototype,"_phoneMode",void 0);v([b({type:Object})],c.prototype,"_previewValues",void 0);c=d=v([F({tag:"ui5-datetime-picker",staticAreaTemplate:ce,styles:[c.styles,he],staticAreaStyles:[g.staticAreaStyles,pe],dependencies:[...g.dependencies,B,j,G,J,K]})],c);c.define();const ve=c,ye=Object.freeze(Object.defineProperty({__proto__:null,default:ve},Symbol.toStringTag,{value:"Module"})),h=O("ui5-datetime-picker",["accessibleName","accessibleNameRef","formatPattern","maxDate","minDate","name","placeholder","primaryCalendarType","secondaryCalendarType","value","valueState"],["disabled","hideWeekNumbers","readonly","required"],["valueStateMessage"],["change","input","value-state-change"],()=>A(()=>Promise.resolve().then(()=>ye),void 0,import.meta.url));h.displayName="DateTimePicker";try{h.displayName="DateTimePicker",h.__docgenInfo={description:`The \`DateTimePicker\` component alows users to select both date (day, month and year) and time (hours, minutes and seconds)
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
when the component is in \`Information\`, \`Warning\` or \`Error\` value state.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="valueStateMessage"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:"Fired when the input operation has finished by pressing Enter or on focusout.\n\n**Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<DateTimePickerDomRef, DatePickerChangeEventDetail>) => void"}},onInput:{defaultValue:null,description:"Fired when the value of the component is changed at each key stroke.\n\n**Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.",name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<DateTimePickerDomRef, DatePickerInputEventDetail>) => void"}},onValueStateChange:{defaultValue:null,description:`Fired before the value state of the component is updated internally.
The event is preventable, meaning that if it's default action is
prevented, the component will not update the value state.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.`,name:"onValueStateChange",required:!1,type:{name:"(event: Ui5CustomEvent<DateTimePickerDomRef, DatePickerValueStateChangeEventDetail>) => void"}},accessibleName:{defaultValue:null,description:"Defines the aria-label attribute for the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as disabled.",name:"disabled",required:!1,type:{name:"boolean"}},formatPattern:{defaultValue:null,description:"Determines the format, displayed in the input field.",name:"formatPattern",required:!1,type:{name:"string"}},hideWeekNumbers:{defaultValue:{value:"false"},description:`Defines the visibility of the week numbers column.

**Note:** For calendars other than Gregorian,
the week numbers are not displayed regardless of what is set.`,name:"hideWeekNumbers",required:!1,type:{name:"boolean"}},maxDate:{defaultValue:null,description:`Determines the maximum date available for selection.

**Note:** If the formatPattern property is not set, the maxDate value must be provided in the ISO date format (YYYY-MM-dd).`,name:"maxDate",required:!1,type:{name:"string"}},minDate:{defaultValue:null,description:`Determines the minimum date available for selection.

**Note:** If the formatPattern property is not set, the minDate value must be provided in the ISO date format (YYYY-MM-dd).`,name:"minDate",required:!1,type:{name:"string"}},name:{defaultValue:null,description:`Determines the name with which the component will be submitted in an HTML form.

**Important:** For the \`name\` property to have effect, you must add the following import to your project:
\`import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";\`

**Note:** When set, a native \`input\` HTML element
will be created inside the component so that it can be submitted as
part of an HTML form. Do not use this property unless you need to submit a form.`,name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"undefined"},description:`Defines a short hint, intended to aid the user with data entry when the
component has no value.

**Note:** When no placeholder is set, the format pattern is displayed as a placeholder.
Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.`,name:"placeholder",required:!1,type:{name:"string"}},primaryCalendarType:{defaultValue:{value:"undefined"},description:`Sets a calendar type used for display.
If not set, the calendar type of the global configuration is used.`,name:"primaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},readonly:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as read-only.",name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},secondaryCalendarType:{defaultValue:{value:"undefined"},description:`Defines the secondary calendar type.
If not set, the calendar will only show the primary calendar type.`,name:"secondaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},value:{defaultValue:null,description:"Defines a formatted date value.",name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Warning"'},{value:'"None"'},{value:'"Error"'},{value:'"Success"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Error"'},{value:'"Information"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{h.displayName="DateTimePicker",h.__docgenInfo={description:`The \`DateTimePicker\` component alows users to select both date (day, month and year) and time (hours, minutes and seconds)
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
when the component is in \`Information\`, \`Warning\` or \`Error\` value state.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="valueStateMessage"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:"Fired when the input operation has finished by pressing Enter or on focusout.\n\n**Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<DateTimePickerDomRef, DatePickerChangeEventDetail>) => void"}},onInput:{defaultValue:null,description:"Fired when the value of the component is changed at each key stroke.\n\n**Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.",name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<DateTimePickerDomRef, DatePickerInputEventDetail>) => void"}},onValueStateChange:{defaultValue:null,description:`Fired before the value state of the component is updated internally.
The event is preventable, meaning that if it's default action is
prevented, the component will not update the value state.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.`,name:"onValueStateChange",required:!1,type:{name:"(event: Ui5CustomEvent<DateTimePickerDomRef, DatePickerValueStateChangeEventDetail>) => void"}},accessibleName:{defaultValue:null,description:"Defines the aria-label attribute for the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as disabled.",name:"disabled",required:!1,type:{name:"boolean"}},formatPattern:{defaultValue:null,description:"Determines the format, displayed in the input field.",name:"formatPattern",required:!1,type:{name:"string"}},hideWeekNumbers:{defaultValue:{value:"false"},description:`Defines the visibility of the week numbers column.

**Note:** For calendars other than Gregorian,
the week numbers are not displayed regardless of what is set.`,name:"hideWeekNumbers",required:!1,type:{name:"boolean"}},maxDate:{defaultValue:null,description:`Determines the maximum date available for selection.

**Note:** If the formatPattern property is not set, the maxDate value must be provided in the ISO date format (YYYY-MM-dd).`,name:"maxDate",required:!1,type:{name:"string"}},minDate:{defaultValue:null,description:`Determines the minimum date available for selection.

**Note:** If the formatPattern property is not set, the minDate value must be provided in the ISO date format (YYYY-MM-dd).`,name:"minDate",required:!1,type:{name:"string"}},name:{defaultValue:null,description:`Determines the name with which the component will be submitted in an HTML form.

**Important:** For the \`name\` property to have effect, you must add the following import to your project:
\`import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";\`

**Note:** When set, a native \`input\` HTML element
will be created inside the component so that it can be submitted as
part of an HTML form. Do not use this property unless you need to submit a form.`,name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"undefined"},description:`Defines a short hint, intended to aid the user with data entry when the
component has no value.

**Note:** When no placeholder is set, the format pattern is displayed as a placeholder.
Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.`,name:"placeholder",required:!1,type:{name:"string"}},primaryCalendarType:{defaultValue:{value:"undefined"},description:`Sets a calendar type used for display.
If not set, the calendar type of the global configuration is used.`,name:"primaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},readonly:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as read-only.",name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},secondaryCalendarType:{defaultValue:{value:"undefined"},description:`Defines the secondary calendar type.
If not set, the calendar will only show the primary calendar type.`,name:"secondaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},value:{defaultValue:null,description:"Defines a formatted date value.",name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Warning"'},{value:'"None"'},{value:'"Error"'},{value:'"Success"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Error"'},{value:'"Information"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const ge={title:"Inputs / DateTimePicker",component:h,argTypes:{valueStateMessage:{control:{disable:!0}}},args:{primaryCalendarType:R.Gregorian,valueState:H.None},tags:["package:@ui5/webcomponents"]},p={};var V,$,C;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:"{}",...(C=($=p.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};const be=["Default"],Oe=Object.freeze(Object.defineProperty({__proto__:null,Default:p,__namedExportsOrder:be,default:ge},Symbol.toStringTag,{value:"Module"}));export{Oe as C,p as D};
