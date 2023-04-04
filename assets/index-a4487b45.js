import{_ as y}from"./iframe-838ff653.js";import{a as v,b as D,p as f,c as b,w as V}from"./withWebComponent-d280b5c2.js";import{a as g,p as c}from"./UI5Element-d1d93200.js";import{g as w,C as u,m as h,a as T}from"./Calendar-6255860f.js";import{ad as P}from"./i18n-defaults-254d6b69.js";import _ from"./DatePicker-1bdbff01.js";import{V as k}from"./ValueState-ab6838cc.js";g("@ui5/webcomponents-theming","sap_fiori_3",async()=>v);g("@ui5/webcomponents","sap_fiori_3",async()=>D);const S={packageName:"@ui5/webcomponents",fileName:"themes/DateRangePicker.css.ts",content:":host(:not([hidden])){display:inline-block}:host{min-width:15rem;color:var(--sapField_TextColor);background-color:var(--sapField_Background)}:host .ui5-date-picker-input{width:100%;min-width:inherit;color:inherit;background-color:inherit}"};var p=globalThis&&globalThis.__decorate||function(o,e,t,a){var n=arguments.length,i=n<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(o,e,t,a);else for(var r=o.length-1;r>=0;r--)(s=o[r])&&(i=(n<3?s(i):n>3?s(e,t,i):s(e,t))||i);return n>3&&i&&Object.defineProperty(e,t,i),i},d;let l=d=class extends _{constructor(){super(),this._prevDelimiter=null}get dateValue(){return null}get dateValueUTC(){return null}get _startDateTimestamp(){return this._extractFirstTimestamp(this.value)}get _endDateTimestamp(){return this._extractLastTimestamp(this.value)}get _tempTimestamp(){return this._tempValue&&this.getFormat().parse(this._tempValue,!0,void 0).getTime()/1e3}get _calendarSelectionMode(){return"Range"}get _calendarTimestamp(){return this._tempTimestamp||this._startDateTimestamp||w(this._primaryCalendarType)}get _calendarSelectedDates(){return this._tempValue?[this._tempValue]:this.value&&this._checkValueValidity(this.value)?this._splitValueByDelimiter(this.value):[]}get startDateValue(){return u.fromTimestamp(this._startDateTimestamp*1e3).toLocalJSDate()}get endDateValue(){return u.fromTimestamp(this._endDateTimestamp*1e3).toLocalJSDate()}get _placeholder(){return this.placeholder!==void 0?this.placeholder:`${this._displayFormat} ${this._effectiveDelimiter} ${this._displayFormat}`}get dateAriaDescription(){return d.i18nBundle.getText(P)}async _onInputSubmit(){const e=this._getInput(),t=e.getCaretPosition();await c(),e.setCaretPosition(t)}onResponsivePopoverAfterClose(){this._tempValue="",super.onResponsivePopoverAfterClose()}isValid(e){const t=this._splitValueByDelimiter(e);return t.length<=2&&t.every(a=>super.isValid(a))}isInValidRange(e){return this._splitValueByDelimiter(e).every(t=>super.isInValidRange(t))}normalizeValue(e){const t=this._extractFirstTimestamp(e),a=this._extractLastTimestamp(e);return t&&a&&t>a?this._buildValue(a,t):this._buildValue(t,a)}onSelectedDatesChange(e){e.preventDefault();const t=e.detail.values;if(t.length===0)return;if(t.length===1){this._tempValue=t[0];return}const a=this._buildValue(e.detail.dates[0],e.detail.dates[1]);this._updateValueAndFireEvents(a,!0,["change","value-changed"]),this.closePicker()}async _modifyDateValue(e,t){if(!this._endDateTimestamp)return super._modifyDateValue(e,t);const a=this._getInput();let n=a.getCaretPosition(),i;if(n<=this.value.indexOf(this._effectiveDelimiter)){const r=h(u.fromTimestamp(this._startDateTimestamp*1e3),e,t,this._minDate,this._maxDate).valueOf()/1e3;r>this._endDateTimestamp&&(n+=Math.ceil(this.value.length/2)),i=this._buildValue(r,this._endDateTimestamp)}else{const r=h(u.fromTimestamp(this._endDateTimestamp*1e3),e,t,this._minDate,this._maxDate).valueOf()/1e3;i=this._buildValue(this._startDateTimestamp,r),r<this._startDateTimestamp&&(n-=Math.ceil(this.value.length/2))}this._updateValueAndFireEvents(i,!0,["change","value-changed"]),await c(),a.setCaretPosition(n)}get _effectiveDelimiter(){const e=this.constructor;return this.delimiter||e.getMetadata().getProperties().delimiter.defaultValue}_splitValueByDelimiter(e){const t=[],a=e.split(this._prevDelimiter||this._effectiveDelimiter);return this.getFormat().parse(e,void 0,void 0)?(t[0]=a.join(this._effectiveDelimiter),t[1]=""):(t[0]=a.slice(0,a.length/2).join(this._effectiveDelimiter),t[1]=a.slice(a.length/2).join(this._effectiveDelimiter)),t}_extractFirstTimestamp(e){if(!e||!this._checkValueValidity(e))return;const t=this._splitValueByDelimiter(e);return this.getFormat().parse(t[0],!0,void 0).getTime()/1e3}_extractLastTimestamp(e){if(!e||!this._checkValueValidity(e))return;const t=this._splitValueByDelimiter(e);if(t[1])return this.getFormat().parse(t[1],!0,void 0).getTime()/1e3}_buildValue(e,t){if(this._prevDelimiter=this._effectiveDelimiter,e){const a=this._getStringFromTimestamp(e*1e3);if(!t)return a;const n=this._getStringFromTimestamp(t*1e3);return`${a} ${this._effectiveDelimiter} ${n}`}return""}get _calendarPickersMode(){return T.DAY_MONTH_YEAR}};p([f({defaultValue:"-"})],l.prototype,"delimiter",void 0);p([f()],l.prototype,"_tempValue",void 0);l=d=p([b({tag:"ui5-daterange-picker",styles:[_.styles,S]})],l);l.define();const N=l,C=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"})),m=V("ui5-daterange-picker",["delimiter","accessibleName","accessibleNameRef","name","placeholder","value","valueState","formatPattern","maxDate","minDate","primaryCalendarType","secondaryCalendarType"],["disabled","hideWeekNumbers","readonly","required"],["valueStateMessage"],["change","input"],()=>y(()=>Promise.resolve().then(()=>C),void 0,import.meta.url));m.displayName="DateRangePicker";m.defaultProps={delimiter:"-",valueState:k.None};try{m.displayName="DateRangePicker",m.__docgenInfo={description:`The DateRangePicker enables the users to enter a localized date range using touch, mouse, keyboard input, or by selecting a date range in the calendar.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/DateRangePicker" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"DateRangePicker",props:{valueStateMessage:{defaultValue:null,description:"Defines the value state message that will be displayed as pop up under the component.\n\n**Note:** If not specified, a default text (in the respective language) will be displayed.\n**Note:** The `valueStateMessage` would be displayed, when the component is in `Information`, `Warning` or `Error` value state.\n\n__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot=\"valueStateMessage\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).",name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:"Fired when the input operation has finished by pressing Enter or on focusout.\n\n__Note:__ This event is NOT the same as the native `onChange` [event of React](https://reactjs.org/docs/dom-elements.html#onchange). If you want to simulate that behavior, please use `onInput` instead.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<DateRangePickerDomRef, { value: string; valid: boolean; }>) => void"}},onInput:{defaultValue:null,description:"Fired when the value of the component is changed at each key stroke.",name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<DateRangePickerDomRef, { value: string; valid: boolean; }>) => void"}},delimiter:{defaultValue:{value:"-"},description:"Determines the symbol which separates the dates. If not supplied, the default time interval delimiter for the current locale will be used.",name:"delimiter",required:!1,type:{name:"string"}},accessibleName:{defaultValue:null,description:"Defines the aria-label attribute for the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Determines whether the component is displayed as disabled.",name:"disabled",required:!1,type:{name:"boolean"}},hideWeekNumbers:{defaultValue:null,description:`Defines the visibility of the week numbers column.

**Note:** For calendars other than Gregorian, the week numbers are not displayed regardless of what is set.`,name:"hideWeekNumbers",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:'Determines the name with which the component will be submitted in an HTML form.\n\n**Important:** For the `name` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`\n\n**Note:** When set, a native `input` HTML element will be created inside the component so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.',name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:`Defines a short hint, intended to aid the user with data entry when the component has no value.

**Note:** When no placeholder is set, the format pattern is displayed as a placeholder. Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.`,name:"placeholder",required:!1,type:{name:"string"}},readonly:{defaultValue:null,description:"Determines whether the component is displayed as read-only.",name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"Defines a formatted date value.",name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:"ValueState.None"},description:"Defines the value state of the component.\n\nAvailable options are:\n\n*   `None`\n*   `Error`\n*   `Warning`\n*   `Success`\n*   `Information`",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Error"'},{value:'"Information"'},{value:'"Warning"'},{value:'"Success"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'}]}},formatPattern:{defaultValue:null,description:"Determines the format, displayed in the input field.",name:"formatPattern",required:!1,type:{name:"string"}},maxDate:{defaultValue:null,description:"Determines the maximum date available for selection.",name:"maxDate",required:!1,type:{name:"string"}},minDate:{defaultValue:null,description:"Determines the minimum date available for selection.",name:"minDate",required:!1,type:{name:"string"}},primaryCalendarType:{defaultValue:null,description:'Sets a calendar type used for display. If not set, the calendar type of the global configuration is used.<br/>__Note:__ Calendar types other than Gregorian must be imported manually:<br />`import "@ui5/webcomponents-localization/dist/features/calendar/{primaryCalendarType}.js";`',name:"primaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},secondaryCalendarType:{defaultValue:null,description:"Defines the secondary calendar type. If not set, the calendar will only show the primary calendar type.",name:"secondaryCalendarType",required:!1,type:{name:"enum",value:[{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'},{value:'"Gregorian"'},{value:'"Islamic"'},{value:'"Japanese"'},{value:'"Buddhist"'},{value:'"Persian"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{m as D};
//# sourceMappingURL=index-a4487b45.js.map
