import{c as h,d as D,b as _,s as g,m as w,bS as V,bT as T,bU as P,w as S}from"./iframe-C-EBr6B5.js";import{p as y,t as f}from"./i18n-DCXZOGva.js";import{C,a as N,g as k,b as m,m as v}from"./Calendar-DomvNFd7.js";import{U as p}from"./Gregorian-D1uUvksM.js";import{D as R,a as I,b}from"./DatePicker-3WM3WFA6.js";function F(){return[R.call(this),I.call(this,{content:q})]}function q(){return h(N,{id:`${this._id}-calendar`,primaryCalendarType:this._primaryCalendarType,secondaryCalendarType:this.secondaryCalendarType,formatPattern:this._formatPattern,selectionMode:this._calendarSelectionMode,minDate:this.minDate,maxDate:this.maxDate,calendarWeekNumbering:this.calendarWeekNumbering,onSelectionChange:this.onSelectedDatesChange,onShowMonthView:this.onHeaderShowMonthPress,onShowYearView:this.onHeaderShowYearPress,hideWeekNumbers:this.hideWeekNumbers,_currentPicker:this._calendarCurrentPicker,_pickersMode:this._calendarPickersMode,children:h(C,{startValue:this.startValue,endValue:this.endValue})})}y("@ui5/webcomponents-theming","sap_horizon",async()=>D);y("@ui5/webcomponents","sap_horizon",async()=>_);const A=`:host(:not([hidden])){display:inline-block}:host{min-width:15rem;color:var(--sapField_TextColor);background-color:var(--sapField_Background)}:host .ui5-date-picker-input{width:100%;min-width:inherit;color:inherit;background-color:inherit}
`;var c=function(r,a,t,e){var n=arguments.length,i=n<3?a:e===null?e=Object.getOwnPropertyDescriptor(a,t):e,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(r,a,t,e);else for(var s=r.length-1;s>=0;s--)(l=r[s])&&(i=(n<3?l(i):n>3?l(a,t,i):l(a,t))||i);return n>3&&i&&Object.defineProperty(a,t,i),i},o;const E="-";let u=o=class extends b{get formFormattedValue(){const a=this._splitValueByDelimiter(this.value||"").filter(Boolean);if(a.length&&this.name){const t=new FormData;for(let e=0;e<a.length;e++)t.append(this.name,a[e]);return t}return this.value}constructor(){super(),this.delimiter="-",this._prevDelimiter=null}get dateValue(){return null}get dateValueUTC(){return null}get _startDateTimestamp(){return this._extractFirstTimestamp(this.value)}get _endDateTimestamp(){return this._extractLastTimestamp(this.value)}get _tempTimestamp(){return this._tempValue&&this.getValueFormat().parse(this._tempValue,!0).getTime()/1e3}get _calendarSelectionMode(){return"Range"}get _calendarTimestamp(){return this._tempTimestamp||this._startDateTimestamp||k(this._primaryCalendarType)}get _calendarSelectedDates(){return this._tempValue?[this._tempValue]:this.value&&this._checkValueValidity(this.value)?this._splitValueByDelimiter(this.value):[]}get startDateValue(){return m.fromTimestamp(this._startDateTimestamp*1e3).toLocalJSDate()}get endDateValue(){return m.fromTimestamp(this._endDateTimestamp*1e3).toLocalJSDate()}get startValue(){return this._calendarSelectedDates[0]||""}get endValue(){return this._calendarSelectedDates[1]||""}get _lastDateRangeForTheCurrentYear(){const a=p.getInstance().getFullYear(),t=p.getInstance(a,11,31,23,59,59),e=p.getInstance(a,11,24,23,59,59);return`${this.getFormat().format(e)} ${this._effectiveDelimiter} ${this.getFormat().format(t)}`}get _placeholder(){return this.placeholder?this.placeholder:`${o.i18nBundle.getText(V)} ${this._lastDateRangeForTheCurrentYear}`}get roleDescription(){return o.i18nBundle.getText(T)}get pickerAccessibleName(){return o.i18nBundle.getText(P,this.ariaLabelText)}async _onInputSubmit(){const a=this._dateTimeInput.getCaretPosition();await f(),this._dateTimeInput.setCaretPosition(a)}onResponsivePopoverAfterClose(){this._tempValue="",super.onResponsivePopoverAfterClose()}isValid(a){let t=this._splitValueByDelimiter(a).filter(e=>e!=="");return t=t.filter(e=>e!==" "),t.length<=2&&t.every(e=>super.isValid(e))}isValidValue(a){let t=this._splitValueByDelimiter(a).filter(e=>e!=="");return t=t.filter(e=>e!==" "),t.length<=2&&t.every(e=>super.isValidValue(e))}isValidDisplayValue(a){let t=this._splitValueByDelimiter(a).filter(e=>e!=="");return t=t.filter(e=>e!==" "),t.length<=2&&t.every(e=>super.isValidDisplayValue(e))}isInValidRange(a){let t=this._splitValueByDelimiter(a).filter(e=>e!=="");return t=t.filter(e=>e!==" "),t.length<=2&&t.every(e=>super.isInValidRange(e))}normalizeValue(a){const t=this._extractFirstTimestamp(a),e=this._extractLastTimestamp(a);return t&&e&&t>e?this._buildValue(e,t):this._buildValue(t,e)}normalizeDisplayValue(a){const t=this._splitValueByDelimiter(a),e=this._exctractDisplayTimestamp(t[0]),n=this._exctractDisplayTimestamp(t[1]);return e&&n&&e>n?this._buildDisplayValue(n,e):this._buildDisplayValue(e,n)}getValueFromDisplayValue(a){const t=this._splitValueByDelimiter(a);let e="",n="";return e=this._getValueStringFromTimestamp(this._exctractDisplayTimestamp(t[0])*1e3),n=this._getValueStringFromTimestamp(this._exctractDisplayTimestamp(t[1])*1e3),!e&&!n?a:`${e} ${this._effectiveDelimiter} ${n}`}onSelectedDatesChange(a){a.preventDefault();const t=a.detail.selectedValues;if(t.length===0)return;if(t.length===1){this._tempValue=t[0];return}const e=this._buildValue(a.detail.selectedDates[0],a.detail.selectedDates[1]);this._updateValueAndFireEvents(e,!0,["change","value-changed"]),this._togglePicker()}async _modifyDateValue(a,t,e){if(!this._endDateTimestamp)return super._modifyDateValue(a,t,e);let n=this._dateTimeInput.getCaretPosition(),i;if(n<=this.value.indexOf(this._effectiveDelimiter)){const s=v(m.fromTimestamp(this._startDateTimestamp*1e3),a,t,e,this._minDate,this._maxDate).valueOf()/1e3;s>this._endDateTimestamp&&(n+=Math.ceil(this.value.length/2)),i=this._buildValue(s,this._endDateTimestamp)}else{const s=v(m.fromTimestamp(this._endDateTimestamp*1e3),a,t,e,this._minDate,this._maxDate).valueOf()/1e3;i=this._buildValue(this._startDateTimestamp,s),s<this._startDateTimestamp&&(n-=Math.ceil(this.value.length/2))}this._updateValueAndFireEvents(i,!0,["change","value-changed"]),await f(),this._dateTimeInput.setCaretPosition(n)}get _effectiveDelimiter(){return this.delimiter||E}_splitValueByDelimiter(a){const t=[],e=a.split(this._prevDelimiter||this._effectiveDelimiter);return this.getValueFormat().parse(a)?(t[0]=e.join(this._effectiveDelimiter),t[1]=""):(t[0]=e.slice(0,e.length/2).join(this._effectiveDelimiter),t[1]=e.slice(e.length/2).join(this._effectiveDelimiter)),t}normalizeFormattedValue(a){if(a==="")return a;let t="",e="";return t=this._getValueStringFromTimestamp(this._extractFirstTimestamp(a)*1e3),e=this._getValueStringFromTimestamp(this._extractLastTimestamp(a)*1e3),!t&&!e?a:`${t} ${this._effectiveDelimiter} ${e}`}_extractFirstTimestamp(a){if(!a||!this._checkValueValidity(a))return;const t=this._splitValueByDelimiter(a);return this.getValueFormat().parse(t[0],!0).getTime()/1e3}_extractLastTimestamp(a){if(!a||!this._checkValueValidity(a))return;let t=this._splitValueByDelimiter(a);if(t=t.filter(e=>e!==" "),t[1])return this.getValueFormat().parse(t[1],!0).getTime()/1e3}_exctractDisplayTimestamp(a){if(!(!a||!this._checkDisplayValueValidity(a))&&a)return this.getDisplayFormat().parse(a,!0).getTime()/1e3}_buildValue(a,t){if(this._prevDelimiter=this._effectiveDelimiter,a){const e=this._getValueStringFromTimestamp(a*1e3);if(!t)return e;const n=this._getValueStringFromTimestamp(t*1e3);return`${e} ${this._effectiveDelimiter} ${n}`}return""}_buildDisplayValue(a,t){if(this._prevDelimiter=this._effectiveDelimiter,a){const e=this._getDisplayStringFromTimestamp(a*1e3);if(!t)return e;const n=this._getDisplayStringFromTimestamp(t*1e3);return`${e} ${this._effectiveDelimiter} ${n}`}return""}getDisplayValueFromValue(a){let t="",e="";return t=this._getDisplayStringFromTimestamp(this._extractFirstTimestamp(a)*1e3),e=this._getDisplayStringFromTimestamp(this._extractLastTimestamp(a)*1e3),!t&&!e?a:`${t} ${this._effectiveDelimiter} ${e}`}get displayValue(){return this.value?this.getDisplayValueFromValue(this.value):""}};c([g()],u.prototype,"delimiter",void 0);c([g()],u.prototype,"_tempValue",void 0);u=o=c([w({tag:"ui5-daterange-picker",styles:[b.styles,A],template:F})],u);u.define();const d=S("ui5-daterange-picker",["accessibleDescription","accessibleDescriptionRef","accessibleName","accessibleNameRef","calendarWeekNumbering","delimiter","displayFormat","formatPattern","maxDate","minDate","name","placeholder","primaryCalendarType","secondaryCalendarType","value","valueFormat","valueState"],["disabled","hideWeekNumbers","open","readonly","required"],["valueStateMessage"],["change","close","input","open","value-state-change"]);d.displayName="DateRangePicker";try{d.displayName="DateRangePicker",d.__docgenInfo={description:`The DateRangePicker enables the users to enter a localized date range using touch, mouse, keyboard input, or by selecting a date range in the calendar.

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
| ✅|✅|`,name:"onValueStateChange",required:!1,type:{name:"(event: Ui5CustomEvent<DateRangePickerDomRef, DatePickerValueStateChangeEventDetail>) => void"}},accessibleDescription:{defaultValue:{value:"undefined"},description:`Defines the accessible description of the component.

**Note:** Available since [v2.14.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.14.0) of **@ui5/webcomponents**.`,name:"accessibleDescription",required:!1,type:{name:"string"}},accessibleDescriptionRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that describe the input.

**Note:** Available since [v2.14.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.14.0) of **@ui5/webcomponents**.`,name:"accessibleDescriptionRef",required:!1,type:{name:"string"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the aria-label attribute for the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},calendarWeekNumbering:{defaultValue:{value:'"Default"'},description:`Defines how to calculate calendar weeks and first day of the week.
If not set, the calendar will be displayed according to the currently set global configuration.

**Note:** Available since [v2.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.2.0) of **@ui5/webcomponents**.`,name:"calendarWeekNumbering",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"ISO_8601"'},{value:'"MiddleEastern"'},{value:'"WesternTraditional"'},{value:'"ISO_8601"'},{value:'"MiddleEastern"'},{value:'"WesternTraditional"'}]}},delimiter:{defaultValue:{value:'"-"'},description:`Determines the symbol which separates the dates.
If not supplied, the default time interval delimiter for the current locale will be used.`,name:"delimiter",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as disabled.",name:"disabled",required:!1,type:{name:"boolean"}},displayFormat:{defaultValue:{value:"undefined"},description:`Determines the format, displayed in the input field.

**Note:** Available since [v2.14.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.14.0) of **@ui5/webcomponents**.`,name:"displayFormat",required:!1,type:{name:"string"}},formatPattern:{defaultValue:{value:"undefined"},description:`Determines the format, displayed in the input field.
@deprecated Use displayFormat and valueFormat instead`,name:"formatPattern",required:!1,type:{name:"string"}},hideWeekNumbers:{defaultValue:{value:"false"},description:`Defines the visibility of the week numbers column.

**Note:** For calendars other than Gregorian,
the week numbers are not displayed regardless of what is set.`,name:"hideWeekNumbers",required:!1,type:{name:"boolean"}},maxDate:{defaultValue:null,description:`Determines the maximum date available for selection.

**Note:** If the formatPattern property is not set, the maxDate value must be provided in the ISO date format (yyyy-MM-dd).`,name:"maxDate",required:!1,type:{name:"string"}},minDate:{defaultValue:null,description:`Determines the minimum date available for selection.

**Note:** If the formatPattern property is not set, the minDate value must be provided in the ISO date format (yyyy-MM-dd).`,name:"minDate",required:!1,type:{name:"string"}},name:{defaultValue:{value:"undefined"},description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.`,name:"name",required:!1,type:{name:"string"}},open:{defaultValue:{value:"false"},description:`Defines the open or closed state of the popover.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"undefined"},description:`Defines a short hint, intended to aid the user with data entry when the
component has no value.

**Note:** When no placeholder is set, the format pattern is displayed as a placeholder.
Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.`,name:"placeholder",required:!1,type:{name:"string"}},primaryCalendarType:{defaultValue:{value:"undefined"},description:`Sets a calendar type used for display.
If not set, the calendar type of the global configuration is used.`,name:"primaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},readonly:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as read-only.",name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},secondaryCalendarType:{defaultValue:{value:"undefined"},description:`Defines the secondary calendar type.
If not set, the calendar will only show the primary calendar type.`,name:"secondaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},value:{defaultValue:null,description:"Defines a formatted date value.",name:"value",required:!1,type:{name:"string"}},valueFormat:{defaultValue:{value:"undefined"},description:`Determines the format, used for the value attribute.

**Note:** Available since [v2.14.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.14.0) of **@ui5/webcomponents**.`,name:"valueFormat",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Critical"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Information"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{d.displayName="DateRangePicker",d.__docgenInfo={description:`The DateRangePicker enables the users to enter a localized date range using touch, mouse, keyboard input, or by selecting a date range in the calendar.

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
| ✅|✅|`,name:"onValueStateChange",required:!1,type:{name:"(event: Ui5CustomEvent<DateRangePickerDomRef, DatePickerValueStateChangeEventDetail>) => void"}},accessibleDescription:{defaultValue:{value:"undefined"},description:`Defines the accessible description of the component.

**Note:** Available since [v2.14.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.14.0) of **@ui5/webcomponents**.`,name:"accessibleDescription",required:!1,type:{name:"string"}},accessibleDescriptionRef:{defaultValue:{value:"undefined"},description:`Receives id(or many ids) of the elements that describe the input.

**Note:** Available since [v2.14.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.14.0) of **@ui5/webcomponents**.`,name:"accessibleDescriptionRef",required:!1,type:{name:"string"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the aria-label attribute for the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},calendarWeekNumbering:{defaultValue:{value:'"Default"'},description:`Defines how to calculate calendar weeks and first day of the week.
If not set, the calendar will be displayed according to the currently set global configuration.

**Note:** Available since [v2.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.2.0) of **@ui5/webcomponents**.`,name:"calendarWeekNumbering",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"ISO_8601"'},{value:'"MiddleEastern"'},{value:'"WesternTraditional"'},{value:'"ISO_8601"'},{value:'"MiddleEastern"'},{value:'"WesternTraditional"'}]}},delimiter:{defaultValue:{value:'"-"'},description:`Determines the symbol which separates the dates.
If not supplied, the default time interval delimiter for the current locale will be used.`,name:"delimiter",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as disabled.",name:"disabled",required:!1,type:{name:"boolean"}},displayFormat:{defaultValue:{value:"undefined"},description:`Determines the format, displayed in the input field.

**Note:** Available since [v2.14.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.14.0) of **@ui5/webcomponents**.`,name:"displayFormat",required:!1,type:{name:"string"}},formatPattern:{defaultValue:{value:"undefined"},description:`Determines the format, displayed in the input field.
@deprecated Use displayFormat and valueFormat instead`,name:"formatPattern",required:!1,type:{name:"string"}},hideWeekNumbers:{defaultValue:{value:"false"},description:`Defines the visibility of the week numbers column.

**Note:** For calendars other than Gregorian,
the week numbers are not displayed regardless of what is set.`,name:"hideWeekNumbers",required:!1,type:{name:"boolean"}},maxDate:{defaultValue:null,description:`Determines the maximum date available for selection.

**Note:** If the formatPattern property is not set, the maxDate value must be provided in the ISO date format (yyyy-MM-dd).`,name:"maxDate",required:!1,type:{name:"string"}},minDate:{defaultValue:null,description:`Determines the minimum date available for selection.

**Note:** If the formatPattern property is not set, the minDate value must be provided in the ISO date format (yyyy-MM-dd).`,name:"minDate",required:!1,type:{name:"string"}},name:{defaultValue:{value:"undefined"},description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.`,name:"name",required:!1,type:{name:"string"}},open:{defaultValue:{value:"false"},description:`Defines the open or closed state of the popover.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"open",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:{value:"undefined"},description:`Defines a short hint, intended to aid the user with data entry when the
component has no value.

**Note:** When no placeholder is set, the format pattern is displayed as a placeholder.
Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.`,name:"placeholder",required:!1,type:{name:"string"}},primaryCalendarType:{defaultValue:{value:"undefined"},description:`Sets a calendar type used for display.
If not set, the calendar type of the global configuration is used.`,name:"primaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},readonly:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as read-only.",name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},secondaryCalendarType:{defaultValue:{value:"undefined"},description:`Defines the secondary calendar type.
If not set, the calendar will only show the primary calendar type.`,name:"secondaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},value:{defaultValue:null,description:"Defines a formatted date value.",name:"value",required:!1,type:{name:"string"}},valueFormat:{defaultValue:{value:"undefined"},description:`Determines the format, used for the value attribute.

**Note:** Available since [v2.14.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.14.0) of **@ui5/webcomponents**.`,name:"valueFormat",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Critical"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Information"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{d as D};
