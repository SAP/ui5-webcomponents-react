import{_ as v}from"./iframe-3ab1de1e.js";import{s as D,a as b,p as g,c as V,w as T}from"./withWebComponent-f146e44d.js";import{r as y,u as c}from"./UI5Element-d089e658.js";import{g as w,a as m,m as f,b as P}from"./Calendar-a5d4a90f.js";import{D as S}from"./i18n-defaults-a1ecaff4.js";import _ from"./DatePicker-bbb2d4e5.js";import{V as k}from"./ValueState-ab6838cc.js";y("@ui5/webcomponents-theming","sap_horizon",async()=>D);y("@ui5/webcomponents","sap_horizon",async()=>b);const N={packageName:"@ui5/webcomponents",fileName:"themes/DateRangePicker.css",content:":host(:not([hidden])){display:inline-block}:host{background-color:var(--sapField_Background);color:var(--sapField_TextColor);min-width:15rem}:host .ui5-date-picker-input{background-color:inherit;color:inherit;min-width:inherit;width:100%}"};var h=globalThis&&globalThis.__decorate||function(l,e,t,a){var n=arguments.length,i=n<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(l,e,t,a);else for(var o=l.length-1;o>=0;o--)(r=l[o])&&(i=(n<3?r(i):n>3?r(e,t,i):r(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i},p;let s=p=class extends _{constructor(){super(),this._prevDelimiter=null}get dateValue(){return null}get dateValueUTC(){return null}get _startDateTimestamp(){return this._extractFirstTimestamp(this.value)}get _endDateTimestamp(){return this._extractLastTimestamp(this.value)}get _tempTimestamp(){return this._tempValue&&this.getFormat().parse(this._tempValue,!0).getTime()/1e3}get _calendarSelectionMode(){return"Range"}get _calendarTimestamp(){return this._tempTimestamp||this._startDateTimestamp||w(this._primaryCalendarType)}get _calendarSelectedDates(){return this._tempValue?[this._tempValue]:this.value&&this._checkValueValidity(this.value)?this._splitValueByDelimiter(this.value):[]}get startDateValue(){return m.fromTimestamp(this._startDateTimestamp*1e3).toLocalJSDate()}get endDateValue(){return m.fromTimestamp(this._endDateTimestamp*1e3).toLocalJSDate()}get _placeholder(){return this.placeholder!==void 0?this.placeholder:`${this._displayFormat} ${this._effectiveDelimiter} ${this._displayFormat}`}get dateAriaDescription(){return p.i18nBundle.getText(S)}async _onInputSubmit(){const e=this._getInput(),t=e.getCaretPosition();await c(),e.setCaretPosition(t)}onResponsivePopoverAfterClose(){this._tempValue="",super.onResponsivePopoverAfterClose()}isValid(e){const t=this._splitValueByDelimiter(e);return t.length<=2&&t.every(a=>super.isValid(a))}isInValidRange(e){return this._splitValueByDelimiter(e).every(t=>super.isInValidRange(t))}normalizeValue(e){const t=this._extractFirstTimestamp(e),a=this._extractLastTimestamp(e);return t&&a&&t>a?this._buildValue(a,t):this._buildValue(t,a)}onSelectedDatesChange(e){e.preventDefault();const t=e.detail.values;if(t.length===0)return;if(t.length===1){this._tempValue=t[0];return}const a=this._buildValue(e.detail.dates[0],e.detail.dates[1]);this._updateValueAndFireEvents(a,!0,["change","value-changed"]),this.closePicker()}async _modifyDateValue(e,t,a){if(!this._endDateTimestamp)return super._modifyDateValue(e,t,a);const n=this._getInput();let i=n.getCaretPosition(),r;if(i<=this.value.indexOf(this._effectiveDelimiter)){const u=f(m.fromTimestamp(this._startDateTimestamp*1e3),e,t,a,this._minDate,this._maxDate).valueOf()/1e3;u>this._endDateTimestamp&&(i+=Math.ceil(this.value.length/2)),r=this._buildValue(u,this._endDateTimestamp)}else{const u=f(m.fromTimestamp(this._endDateTimestamp*1e3),e,t,a,this._minDate,this._maxDate).valueOf()/1e3;r=this._buildValue(this._startDateTimestamp,u),u<this._startDateTimestamp&&(i-=Math.ceil(this.value.length/2))}this._updateValueAndFireEvents(r,!0,["change","value-changed"]),await c(),n.setCaretPosition(i)}get _effectiveDelimiter(){const e=this.constructor;return this.delimiter||e.getMetadata().getProperties().delimiter.defaultValue}_splitValueByDelimiter(e){const t=[],a=e.split(this._prevDelimiter||this._effectiveDelimiter);return this.getFormat().parse(e)?(t[0]=a.join(this._effectiveDelimiter),t[1]=""):(t[0]=a.slice(0,a.length/2).join(this._effectiveDelimiter),t[1]=a.slice(a.length/2).join(this._effectiveDelimiter)),t}_extractFirstTimestamp(e){if(!e||!this._checkValueValidity(e))return;const t=this._splitValueByDelimiter(e);return this.getFormat().parse(t[0],!0).getTime()/1e3}_extractLastTimestamp(e){if(!e||!this._checkValueValidity(e))return;const t=this._splitValueByDelimiter(e);if(t[1])return this.getFormat().parse(t[1],!0).getTime()/1e3}_buildValue(e,t){if(this._prevDelimiter=this._effectiveDelimiter,e){const a=this._getStringFromTimestamp(e*1e3);if(!t)return a;const n=this._getStringFromTimestamp(t*1e3);return`${a} ${this._effectiveDelimiter} ${n}`}return""}get _calendarPickersMode(){return P.DAY_MONTH_YEAR}};h([g({defaultValue:"-"})],s.prototype,"delimiter",void 0);h([g()],s.prototype,"_tempValue",void 0);s=p=h([V({tag:"ui5-daterange-picker",styles:[_.styles,N]})],s);s.define();const C=s,I=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"})),d=T("ui5-daterange-picker",["delimiter","accessibleName","accessibleNameRef","name","placeholder","value","valueState","formatPattern","maxDate","minDate","primaryCalendarType","secondaryCalendarType"],["disabled","hideWeekNumbers","readonly","required"],["valueStateMessage"],["change","input"],()=>v(()=>Promise.resolve().then(()=>I),void 0,import.meta.url));d.displayName="DateRangePicker";d.defaultProps={delimiter:"-",valueState:k.None};try{d.displayName="DateRangePicker",d.__docgenInfo={description:`The DateRangePicker enables the users to enter a localized date range using touch, mouse, keyboard input, or by selecting a date range in the calendar.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-DateRangePicker)`,displayName:"DateRangePicker",props:{valueStateMessage:{defaultValue:null,description:"Defines the value state message that will be displayed as pop up under the component.\n\n**Note:** If not specified, a default text (in the respective language) will be displayed.\n**Note:** The `valueStateMessage` would be displayed, when the component is in `Information`, `Warning` or `Error` value state.\n\n__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot=\"valueStateMessage\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).",name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:"Fired when the input operation has finished by pressing Enter or on focusout.\n\n__Note:__ This event is NOT the same as the native `onChange` [event of React](https://reactjs.org/docs/dom-elements.html#onchange). If you want to simulate that behavior, please use `onInput` instead.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<DateRangePickerDomRef, DatePickerChangeEventDetail>) => void"}},onInput:{defaultValue:null,description:"Fired when the value of the component is changed at each key stroke.",name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<DateRangePickerDomRef, DatePickerInputEventDetail>) => void"}},delimiter:{defaultValue:{value:"-"},description:"Determines the symbol which separates the dates. If not supplied, the default time interval delimiter for the current locale will be used.",name:"delimiter",required:!1,type:{name:"string"}},accessibleName:{defaultValue:null,description:"Defines the aria-label attribute for the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Determines whether the component is displayed as disabled.",name:"disabled",required:!1,type:{name:"boolean"}},hideWeekNumbers:{defaultValue:null,description:`Defines the visibility of the week numbers column.

**Note:** For calendars other than Gregorian, the week numbers are not displayed regardless of what is set.`,name:"hideWeekNumbers",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:'Determines the name with which the component will be submitted in an HTML form.\n\n**Important:** For the `name` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`\n\n**Note:** When set, a native `input` HTML element will be created inside the component so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.',name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:`Defines a short hint, intended to aid the user with data entry when the component has no value.

**Note:** When no placeholder is set, the format pattern is displayed as a placeholder. Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.`,name:"placeholder",required:!1,type:{name:"string"}},readonly:{defaultValue:null,description:"Determines whether the component is displayed as read-only.",name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"Defines a formatted date value.",name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:"ValueState.None"},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Error"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'}]}},formatPattern:{defaultValue:null,description:"Determines the format, displayed in the input field.",name:"formatPattern",required:!1,type:{name:"string"}},maxDate:{defaultValue:null,description:"Determines the maximum date available for selection. **Note:** If the formatPattern property is not set, the maxDate value must be provided in the ISO date format (YYYY-MM-dd).",name:"maxDate",required:!1,type:{name:"string"}},minDate:{defaultValue:null,description:"Determines the minimum date available for selection. **Note:** If the formatPattern property is not set, the minDate value must be provided in the ISO date format (YYYY-MM-dd).",name:"minDate",required:!1,type:{name:"string"}},primaryCalendarType:{defaultValue:null,description:'Sets a calendar type used for display. If not set, the calendar type of the global configuration is used.<br/>__Note:__ Calendar types other than Gregorian must be imported manually:<br />`import "@ui5/webcomponents-localization/dist/features/calendar/{primaryCalendarType}.js";`',name:"primaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},secondaryCalendarType:{defaultValue:null,description:"Defines the secondary calendar type. If not set, the calendar will only show the primary calendar type.",name:"secondaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{d as D};
//# sourceMappingURL=index-35730d62.js.map
