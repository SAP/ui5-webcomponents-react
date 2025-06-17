import{j as c,p as v,d as b,s as g,m as D,B as h,w as _}from"./jsx-runtime-CTdjW1dy.js";import{C as w,a as V,g as P,b as d,m as f}from"./Calendar-Cj-WQBa5.js";import{D as T,G as C}from"./i18n-defaults-Bwpyempw.js";import{D as k,a as S,b as y}from"./DatePicker-D2tcWBGz.js";import{d as N}from"./parameters-bundle.css-CKhNLE8L.js";function I(){return[k.call(this),S.call(this,{content:R})]}function R(){return c(V,{id:`${this._id}-calendar`,primaryCalendarType:this._primaryCalendarType,secondaryCalendarType:this.secondaryCalendarType,formatPattern:this._formatPattern,selectionMode:this._calendarSelectionMode,minDate:this.minDate,maxDate:this.maxDate,calendarWeekNumbering:this.calendarWeekNumbering,onSelectionChange:this.onSelectedDatesChange,onShowMonthView:this.onHeaderShowMonthPress,onShowYearView:this.onHeaderShowYearPress,hideWeekNumbers:this.hideWeekNumbers,_currentPicker:this._calendarCurrentPicker,_pickersMode:this._calendarPickersMode,children:c(w,{startValue:this.startValue,endValue:this.endValue})})}v("@ui5/webcomponents-theming","sap_horizon",async()=>b);v("@ui5/webcomponents","sap_horizon",async()=>N);const q=`:host(:not([hidden])){display:inline-block}:host{min-width:15rem;color:var(--sapField_TextColor);background-color:var(--sapField_Background)}:host .ui5-date-picker-input{width:100%;min-width:inherit;color:inherit;background-color:inherit}
`;var p=function(l,e,t,a){var i=arguments.length,n=i<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(l,e,t,a);else for(var r=l.length-1;r>=0;r--)(s=l[r])&&(n=(i<3?s(n):i>3?s(e,t,n):s(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n},m;const M="-";let o=m=class extends y{get formFormattedValue(){const e=this._splitValueByDelimiter(this.value||"").filter(Boolean);if(e.length&&this.name){const t=new FormData;for(let a=0;a<e.length;a++)t.append(this.name,e[a]);return t}return this.value}constructor(){super(),this.delimiter="-",this._prevDelimiter=null}get dateValue(){return null}get dateValueUTC(){return null}get _startDateTimestamp(){return this._extractFirstTimestamp(this.value)}get _endDateTimestamp(){return this._extractLastTimestamp(this.value)}get _tempTimestamp(){return this._tempValue&&this.getFormat().parse(this._tempValue,!0).getTime()/1e3}get _calendarSelectionMode(){return"Range"}get _calendarTimestamp(){return this._tempTimestamp||this._startDateTimestamp||P(this._primaryCalendarType)}get _calendarSelectedDates(){return this._tempValue?[this._tempValue]:this.value&&this._checkValueValidity(this.value)?this._splitValueByDelimiter(this.value):[]}get startDateValue(){return d.fromTimestamp(this._startDateTimestamp*1e3).toLocalJSDate()}get endDateValue(){return d.fromTimestamp(this._endDateTimestamp*1e3).toLocalJSDate()}get startValue(){return this._calendarSelectedDates[0]||""}get endValue(){return this._calendarSelectedDates[1]||""}get _placeholder(){return this.placeholder!==void 0?this.placeholder:`${this._displayFormat} ${this._effectiveDelimiter} ${this._displayFormat}`}get dateAriaDescription(){return m.i18nBundle.getText(T)}get pickerAccessibleName(){return m.i18nBundle.getText(C)}async _onInputSubmit(){const e=this._dateTimeInput.getCaretPosition();await h(),this._dateTimeInput.setCaretPosition(e)}onResponsivePopoverAfterClose(){this._tempValue="",super.onResponsivePopoverAfterClose()}isValid(e){const t=this._splitValueByDelimiter(e);return t.length<=2&&t.every(a=>super.isValid(a))}isInValidRange(e){return this._splitValueByDelimiter(e).every(t=>super.isInValidRange(t))}normalizeValue(e){const t=this._extractFirstTimestamp(e),a=this._extractLastTimestamp(e);return t&&a&&t>a?this._buildValue(a,t):this._buildValue(t,a)}onSelectedDatesChange(e){e.preventDefault();const t=e.detail.selectedValues;if(t.length===0)return;if(t.length===1){this._tempValue=t[0];return}const a=this._buildValue(e.detail.selectedDates[0],e.detail.selectedDates[1]);this._updateValueAndFireEvents(a,!0,["change","value-changed"]),this._togglePicker()}async _modifyDateValue(e,t,a){if(!this._endDateTimestamp)return super._modifyDateValue(e,t,a);let i=this._dateTimeInput.getCaretPosition(),n;if(i<=this.value.indexOf(this._effectiveDelimiter)){const r=f(d.fromTimestamp(this._startDateTimestamp*1e3),e,t,a,this._minDate,this._maxDate).valueOf()/1e3;r>this._endDateTimestamp&&(i+=Math.ceil(this.value.length/2)),n=this._buildValue(r,this._endDateTimestamp)}else{const r=f(d.fromTimestamp(this._endDateTimestamp*1e3),e,t,a,this._minDate,this._maxDate).valueOf()/1e3;n=this._buildValue(this._startDateTimestamp,r),r<this._startDateTimestamp&&(i-=Math.ceil(this.value.length/2))}this._updateValueAndFireEvents(n,!0,["change","value-changed"]),await h(),this._dateTimeInput.setCaretPosition(i)}get _effectiveDelimiter(){return this.delimiter||M}_splitValueByDelimiter(e){const t=[],a=e.split(this._prevDelimiter||this._effectiveDelimiter);return this.getFormat().parse(e)?(t[0]=a.join(this._effectiveDelimiter),t[1]=""):(t[0]=a.slice(0,a.length/2).join(this._effectiveDelimiter),t[1]=a.slice(a.length/2).join(this._effectiveDelimiter)),t}_extractFirstTimestamp(e){if(!e||!this._checkValueValidity(e))return;const t=this._splitValueByDelimiter(e);return this.getFormat().parse(t[0],!0).getTime()/1e3}_extractLastTimestamp(e){if(!e||!this._checkValueValidity(e))return;const t=this._splitValueByDelimiter(e);if(t[1])return this.getFormat().parse(t[1],!0).getTime()/1e3}_buildValue(e,t){if(this._prevDelimiter=this._effectiveDelimiter,e){const a=this._getStringFromTimestamp(e*1e3);if(!t)return a;const i=this._getStringFromTimestamp(t*1e3);return`${a} ${this._effectiveDelimiter} ${i}`}return""}};p([g()],o.prototype,"delimiter",void 0);p([g()],o.prototype,"_tempValue",void 0);o=m=p([D({tag:"ui5-daterange-picker",styles:[y.styles,q],template:I})],o);o.define();const u=_("ui5-daterange-picker",["accessibleName","accessibleNameRef","calendarWeekNumbering","delimiter","formatPattern","maxDate","minDate","name","placeholder","primaryCalendarType","secondaryCalendarType","value","valueState"],["disabled","hideWeekNumbers","open","readonly","required"],["valueStateMessage"],["change","close","input","open","value-state-change"]);u.displayName="DateRangePicker";try{u.displayName="DateRangePicker",u.__docgenInfo={description:`The DateRangePicker enables the users to enter a localized date range using touch, mouse, keyboard input, or by selecting a date range in the calendar.

### Usage
The user can enter a date by:
Using the calendar that opens in a popup or typing it in directly in the input field (not available for mobile devices).
For the \`DateRangePicker\`


### Keyboard Handling
The \`DateRangePicker\` provides advanced keyboard handling.

When the \`DateRangePicker\` input field is focused the user can
increment or decrement respectively the range start or end date, depending on where the cursor is.
The following shortcuts are available:

- [Page Down] - Decrements the corresponding day of the month by one
- [Shift] + [Page Down] - Decrements the corresponding month by one
- [Shift] + [Ctrl] + [Page Down] - Decrements the corresponding year by one
- [Page Up] - Increments the corresponding day of the month by one
- [Shift] + [Page Up] - Increments the corresponding month by one
- [Shift] + [Ctrl] + [Page Up] - Increments the corresponding year by one

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"DateRangePicker",props:{valueStateMessage:{defaultValue:null,description:`Defines the value state message that will be displayed as pop up under the component.

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
| ✅|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<DateRangePickerDomRef, DatePickerChangeEventDetail>) => void"}},onClose:{defaultValue:null,description:`Fired after the component's picker is closed.

**Note:** Available since [v2.4.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.4.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<DateRangePickerDomRef, never>) => void"}},onInput:{defaultValue:null,description:`Fired when the value of the component is changed at each key stroke.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<DateRangePickerDomRef, DatePickerInputEventDetail>) => void"}},onOpen:{defaultValue:null,description:`Fired after the component's picker is opened.

**Note:** Available since [v2.4.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.4.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DateRangePickerDomRef, never>) => void"}},onValueStateChange:{defaultValue:null,description:`Fired before the value state of the component is updated internally.
The event is preventable, meaning that if it's default action is
prevented, the component will not update the value state.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onValueStateChange",required:!1,type:{name:"(event: Ui5CustomEvent<DateRangePickerDomRef, DatePickerValueStateChangeEventDetail>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the aria-label attribute for the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},calendarWeekNumbering:{defaultValue:{value:'"Default"'},description:`Defines how to calculate calendar weeks and first day of the week.
If not set, the calendar will be displayed according to the currently set global configuration.

**Note:** Available since [v2.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.2.0) of **@ui5/webcomponents**.`,name:"calendarWeekNumbering",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"ISO_8601"'},{value:'"MiddleEastern"'},{value:'"WesternTraditional"'},{value:'"ISO_8601"'},{value:'"MiddleEastern"'},{value:'"WesternTraditional"'}]}},delimiter:{defaultValue:{value:'"-"'},description:`Determines the symbol which separates the dates.
If not supplied, the default time interval delimiter for the current locale will be used.`,name:"delimiter",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as disabled.",name:"disabled",required:!1,type:{name:"boolean"}},formatPattern:{defaultValue:{value:"undefined"},description:"Determines the format, displayed in the input field.",name:"formatPattern",required:!1,type:{name:"string"}},hideWeekNumbers:{defaultValue:{value:"false"},description:`Defines the visibility of the week numbers column.

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

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{u.displayName="DateRangePicker",u.__docgenInfo={description:`The DateRangePicker enables the users to enter a localized date range using touch, mouse, keyboard input, or by selecting a date range in the calendar.

### Usage
The user can enter a date by:
Using the calendar that opens in a popup or typing it in directly in the input field (not available for mobile devices).
For the \`DateRangePicker\`


### Keyboard Handling
The \`DateRangePicker\` provides advanced keyboard handling.

When the \`DateRangePicker\` input field is focused the user can
increment or decrement respectively the range start or end date, depending on where the cursor is.
The following shortcuts are available:

- [Page Down] - Decrements the corresponding day of the month by one
- [Shift] + [Page Down] - Decrements the corresponding month by one
- [Shift] + [Ctrl] + [Page Down] - Decrements the corresponding year by one
- [Page Up] - Increments the corresponding day of the month by one
- [Shift] + [Page Up] - Increments the corresponding month by one
- [Shift] + [Ctrl] + [Page Up] - Increments the corresponding year by one

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"DateRangePicker",props:{valueStateMessage:{defaultValue:null,description:`Defines the value state message that will be displayed as pop up under the component.

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
| ✅|✅|`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<DateRangePickerDomRef, DatePickerChangeEventDetail>) => void"}},onClose:{defaultValue:null,description:`Fired after the component's picker is closed.

**Note:** Available since [v2.4.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.4.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<DateRangePickerDomRef, never>) => void"}},onInput:{defaultValue:null,description:`Fired when the value of the component is changed at each key stroke.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<DateRangePickerDomRef, DatePickerInputEventDetail>) => void"}},onOpen:{defaultValue:null,description:`Fired after the component's picker is opened.

**Note:** Available since [v2.4.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.4.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|❌|`,name:"onOpen",required:!1,type:{name:"(event: Ui5CustomEvent<DateRangePickerDomRef, never>) => void"}},onValueStateChange:{defaultValue:null,description:`Fired before the value state of the component is updated internally.
The event is preventable, meaning that if it's default action is
prevented, the component will not update the value state.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onValueStateChange",required:!1,type:{name:"(event: Ui5CustomEvent<DateRangePickerDomRef, DatePickerValueStateChangeEventDetail>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the aria-label attribute for the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},calendarWeekNumbering:{defaultValue:{value:'"Default"'},description:`Defines how to calculate calendar weeks and first day of the week.
If not set, the calendar will be displayed according to the currently set global configuration.

**Note:** Available since [v2.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.2.0) of **@ui5/webcomponents**.`,name:"calendarWeekNumbering",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"ISO_8601"'},{value:'"MiddleEastern"'},{value:'"WesternTraditional"'},{value:'"ISO_8601"'},{value:'"MiddleEastern"'},{value:'"WesternTraditional"'}]}},delimiter:{defaultValue:{value:'"-"'},description:`Determines the symbol which separates the dates.
If not supplied, the default time interval delimiter for the current locale will be used.`,name:"delimiter",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as disabled.",name:"disabled",required:!1,type:{name:"boolean"}},formatPattern:{defaultValue:{value:"undefined"},description:"Determines the format, displayed in the input field.",name:"formatPattern",required:!1,type:{name:"string"}},hideWeekNumbers:{defaultValue:{value:"false"},description:`Defines the visibility of the week numbers column.

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

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{u as D};
