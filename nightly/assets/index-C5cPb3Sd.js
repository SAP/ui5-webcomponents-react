import{m as d,p as o,k as e,a as P,s as S,q as V,v as C,y,w as T}from"./withWebComponent-B0663feL.js";import{C as N,g as I,a as m,m as b}from"./Calendar--BR6mv0g.js";import{Q as R,U as q}from"./i18n-defaults-B_32hVC3.js";import{s as D}from"./style-map-uCTHCAWY.js";import{s as M}from"./parameters-bundle.css-DlWxkghp.js";import{D as v}from"./DatePicker-SV20uRot.js";function E(i,a,t){return t?d`<div class="ui5-date-picker-root" style="${D(this.styles.main)}"><${o("ui5-input",a,t)} id="${e(this._id)}-inner" class="ui5-date-picker-input" placeholder="${e(this._placeholder)}" type="${e(this.type)}" value="${e(this.value)}" ?disabled="${this.disabled}" ?required="${this.required}" ?readonly="${this.readonly}" value-state="${e(this.valueState)}" data-sap-focus-ref ._inputAccInfo ="${e(this.accInfo)}" @ui5-change="${e(this._onInputChange)}" @ui5-input="${e(this._onInputInput)}" @ui5-submit="${e(this._onInputSubmit)}" @keydown="${this._onkeydown}">${this.valueStateMessage.length?_.call(this,i,a,t):void 0}${this.readonly?void 0:w.call(this,i,a,t)}</${o("ui5-input",a,t)}></div><${o("ui5-responsive-popover",a,t)} id="${e(this._id)}-responsive-popover" .opener=${e(this)} ?open="${this.open}" allow-target-overlap placement="Bottom" horizontal-align="Start" accessible-name="${e(this.pickerAccessibleName)}" hide-arrow ?_hide-header=${e(this._shouldHideHeader)} @keydown="${this._onkeydown}" @ui5-close="${e(this.onResponsivePopoverAfterClose)}" @ui5-open="${e(this.onResponsivePopoverAfterOpen)}" @ui5-before-open="${e(this.onResponsivePopoverBeforeOpen)}">${this.showHeader?k.call(this,i,a,t):void 0}<${o("ui5-calendar",a,t)} id="${e(this._id)}-calendar" primary-calendar-type="${e(this._primaryCalendarType)}" secondary-calendar-type="${e(this.secondaryCalendarType)}" format-pattern="${e(this._formatPattern)}" .selectionMode="${e(this._calendarSelectionMode)}" .minDate="${e(this.minDate)}" .maxDate="${e(this.maxDate)}" .calendarWeekNumbering="${e(this.calendarWeekNumbering)}" @ui5-selection-change="${e(this.onSelectedDatesChange)}" @ui5-show-month-view="${e(this.onHeaderShowMonthPress)}" @ui5-show-year-view="${e(this.onHeaderShowYearPress)}" ?hide-week-numbers="${this.hideWeekNumbers}" ._currentPicker="${e(this._calendarCurrentPicker)}" ._pickersMode="${e(this._calendarPickersMode)}"><${o("ui5-date-range",a,t)} start-value="${e(this.startValue)}" end-value="${e(this.endValue)}"></${o("ui5-date-range",a,t)}></${o("ui5-calendar",a,t)}>${this.showFooter?$.call(this,i,a,t):void 0}</${o("ui5-responsive-popover",a,t)}>`:d`<div class="ui5-date-picker-root" style="${D(this.styles.main)}"><ui5-input id="${e(this._id)}-inner" class="ui5-date-picker-input" placeholder="${e(this._placeholder)}" type="${e(this.type)}" value="${e(this.value)}" ?disabled="${this.disabled}" ?required="${this.required}" ?readonly="${this.readonly}" value-state="${e(this.valueState)}" data-sap-focus-ref ._inputAccInfo ="${e(this.accInfo)}" @ui5-change="${e(this._onInputChange)}" @ui5-input="${e(this._onInputInput)}" @ui5-submit="${e(this._onInputSubmit)}" @keydown="${this._onkeydown}">${this.valueStateMessage.length?_.call(this,i,a,t):void 0}${this.readonly?void 0:w.call(this,i,a,t)}</ui5-input></div><ui5-responsive-popover id="${e(this._id)}-responsive-popover" .opener=${e(this)} ?open="${this.open}" allow-target-overlap placement="Bottom" horizontal-align="Start" accessible-name="${e(this.pickerAccessibleName)}" hide-arrow ?_hide-header=${e(this._shouldHideHeader)} @keydown="${this._onkeydown}" @ui5-close="${e(this.onResponsivePopoverAfterClose)}" @ui5-open="${e(this.onResponsivePopoverAfterOpen)}" @ui5-before-open="${e(this.onResponsivePopoverBeforeOpen)}">${this.showHeader?k.call(this,i,a,t):void 0}<ui5-calendar id="${e(this._id)}-calendar" primary-calendar-type="${e(this._primaryCalendarType)}" secondary-calendar-type="${e(this.secondaryCalendarType)}" format-pattern="${e(this._formatPattern)}" .selectionMode="${e(this._calendarSelectionMode)}" .minDate="${e(this.minDate)}" .maxDate="${e(this.maxDate)}" .calendarWeekNumbering="${e(this.calendarWeekNumbering)}" @ui5-selection-change="${e(this.onSelectedDatesChange)}" @ui5-show-month-view="${e(this.onHeaderShowMonthPress)}" @ui5-show-year-view="${e(this.onHeaderShowYearPress)}" ?hide-week-numbers="${this.hideWeekNumbers}" ._currentPicker="${e(this._calendarCurrentPicker)}" ._pickersMode="${e(this._calendarPickersMode)}"><ui5-date-range start-value="${e(this.startValue)}" end-value="${e(this.endValue)}"></ui5-date-range></ui5-calendar>${this.showFooter?$.call(this,i,a,t):void 0}</ui5-responsive-popover>`}function _(i,a,t){return d`<slot name="valueStateMessage" slot="valueStateMessage"></slot>`}function w(i,a,t){return t?d`<${o("ui5-icon",a,t)} id="${e(this._id)}-value-help" slot="icon" name="${e(this.openIconName)}" tabindex="-1" accessible-name="${e(this.openIconTitle)}" mode=${e(this._iconMode)} show-tooltip @click="${this._togglePicker}" class="inputIcon" ?pressed="${this.open}"></${o("ui5-icon",a,t)}>`:d`<ui5-icon id="${e(this._id)}-value-help" slot="icon" name="${e(this.openIconName)}" tabindex="-1" accessible-name="${e(this.openIconTitle)}" mode=${e(this._iconMode)} show-tooltip @click="${this._togglePicker}" class="inputIcon" ?pressed="${this.open}"></ui5-icon>`}function k(i,a,t){return t?d`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${e(this._headerTitleText)}</span><${o("ui5-button",a,t)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._togglePicker}"></${o("ui5-button",a,t)}></div></div>`:d`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${e(this._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this._togglePicker}"></ui5-button></div></div>`}function $(i,a,t){return d``}P("@ui5/webcomponents-theming","sap_horizon",async()=>S);P("@ui5/webcomponents","sap_horizon",async()=>M);const A={packageName:"@ui5/webcomponents",fileName:"themes/DateRangePicker.css.ts",content:`:host(:not([hidden])){display:inline-block}:host{min-width:15rem;color:var(--sapField_TextColor);background-color:var(--sapField_Background)}:host .ui5-date-picker-input{width:100%;min-width:inherit;color:inherit;background-color:inherit}
`};var g=function(i,a,t,n){var r=arguments.length,s=r<3?a:n===null?n=Object.getOwnPropertyDescriptor(a,t):n,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,a,t,n);else for(var u=i.length-1;u>=0;u--)(l=i[u])&&(s=(r<3?l(s):r>3?l(a,t,s):l(a,t))||s);return r>3&&s&&Object.defineProperty(a,t,s),s},f;const F="-";let c=f=class extends v{get formFormattedValue(){const a=this._splitValueByDelimiter(this.value||"").filter(Boolean);if(a.length&&this.name){const t=new FormData;for(let n=0;n<a.length;n++)t.append(this.name,a[n]);return t}return this.value}constructor(){super(),this.delimiter="-",this._prevDelimiter=null}get dateValue(){return null}get dateValueUTC(){return null}get _startDateTimestamp(){return this._extractFirstTimestamp(this.value)}get _endDateTimestamp(){return this._extractLastTimestamp(this.value)}get _tempTimestamp(){return this._tempValue&&this.getFormat().parse(this._tempValue,!0).getTime()/1e3}get _calendarSelectionMode(){return"Range"}get _calendarTimestamp(){return this._tempTimestamp||this._startDateTimestamp||I(this._primaryCalendarType)}get _calendarSelectedDates(){return this._tempValue?[this._tempValue]:this.value&&this._checkValueValidity(this.value)?this._splitValueByDelimiter(this.value):[]}get startDateValue(){return m.fromTimestamp(this._startDateTimestamp*1e3).toLocalJSDate()}get endDateValue(){return m.fromTimestamp(this._endDateTimestamp*1e3).toLocalJSDate()}get startValue(){return this._calendarSelectedDates[0]||""}get endValue(){return this._calendarSelectedDates[1]||""}get _placeholder(){return this.placeholder!==void 0?this.placeholder:`${this._displayFormat} ${this._effectiveDelimiter} ${this._displayFormat}`}get dateAriaDescription(){return f.i18nBundle.getText(R)}get pickerAccessibleName(){return f.i18nBundle.getText(q)}async _onInputSubmit(){const a=this._getInput(),t=a.getCaretPosition();await y(),a.setCaretPosition(t)}onResponsivePopoverAfterClose(){this._tempValue="",super.onResponsivePopoverAfterClose()}isValid(a){const t=this._splitValueByDelimiter(a);return t.length<=2&&t.every(n=>super.isValid(n))}isInValidRange(a){return this._splitValueByDelimiter(a).every(t=>super.isInValidRange(t))}normalizeValue(a){const t=this._extractFirstTimestamp(a),n=this._extractLastTimestamp(a);return t&&n&&t>n?this._buildValue(n,t):this._buildValue(t,n)}onSelectedDatesChange(a){a.preventDefault();const t=a.detail.selectedValues;if(t.length===0)return;if(t.length===1){this._tempValue=t[0];return}const n=this._buildValue(a.detail.selectedDates[0],a.detail.selectedDates[1]);this._updateValueAndFireEvents(n,!0,["change","value-changed"]),this._togglePicker()}async _modifyDateValue(a,t,n){if(!this._endDateTimestamp)return super._modifyDateValue(a,t,n);const r=this._getInput();let s=r.getCaretPosition(),l;if(s<=this.value.indexOf(this._effectiveDelimiter)){const p=b(m.fromTimestamp(this._startDateTimestamp*1e3),a,t,n,this._minDate,this._maxDate).valueOf()/1e3;p>this._endDateTimestamp&&(s+=Math.ceil(this.value.length/2)),l=this._buildValue(p,this._endDateTimestamp)}else{const p=b(m.fromTimestamp(this._endDateTimestamp*1e3),a,t,n,this._minDate,this._maxDate).valueOf()/1e3;l=this._buildValue(this._startDateTimestamp,p),p<this._startDateTimestamp&&(s-=Math.ceil(this.value.length/2))}this._updateValueAndFireEvents(l,!0,["change","value-changed"]),await y(),r.setCaretPosition(s)}get _effectiveDelimiter(){return this.delimiter||F}_splitValueByDelimiter(a){const t=[],n=a.split(this._prevDelimiter||this._effectiveDelimiter);return this.getFormat().parse(a)?(t[0]=n.join(this._effectiveDelimiter),t[1]=""):(t[0]=n.slice(0,n.length/2).join(this._effectiveDelimiter),t[1]=n.slice(n.length/2).join(this._effectiveDelimiter)),t}_extractFirstTimestamp(a){if(!a||!this._checkValueValidity(a))return;const t=this._splitValueByDelimiter(a);return this.getFormat().parse(t[0],!0).getTime()/1e3}_extractLastTimestamp(a){if(!a||!this._checkValueValidity(a))return;const t=this._splitValueByDelimiter(a);if(t[1])return this.getFormat().parse(t[1],!0).getTime()/1e3}_buildValue(a,t){if(this._prevDelimiter=this._effectiveDelimiter,a){const n=this._getStringFromTimestamp(a*1e3);if(!t)return n;const r=this._getStringFromTimestamp(t*1e3);return`${n} ${this._effectiveDelimiter} ${r}`}return""}};g([V()],c.prototype,"delimiter",void 0);g([V()],c.prototype,"_tempValue",void 0);c=f=g([C({tag:"ui5-daterange-picker",styles:[v.styles,A],template:E,dependencies:[...v.dependencies,N]})],c);c.define();const h=T("ui5-daterange-picker",["accessibleName","accessibleNameRef","calendarWeekNumbering","delimiter","formatPattern","maxDate","minDate","name","placeholder","primaryCalendarType","secondaryCalendarType","value","valueState"],["disabled","hideWeekNumbers","open","readonly","required"],["valueStateMessage"],["change","close","input","open","value-state-change"]);h.displayName="DateRangePicker";try{h.displayName="DateRangePicker",h.__docgenInfo={description:`The DateRangePicker enables the users to enter a localized date range using touch, mouse, keyboard input, or by selecting a date range in the calendar.

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

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{h.displayName="DateRangePicker",h.__docgenInfo={description:`The DateRangePicker enables the users to enter a localized date range using touch, mouse, keyboard input, or by selecting a date range in the calendar.

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

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{h as D};
