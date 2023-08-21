import{b as u,d,l as t,s as S,a as V,p,c as M}from"./withWebComponent-7d7e5133.js";import{s as I}from"./slot-76e48863.js";import{c as y,a as E,e as b}from"./Icon-42236945.js";import{g as H}from"./CustomElementsScopeUtils-137da8c8.js";import{c as O,d as N,D as R,g as z,m as B,a as x,b as g}from"./Calendar-e467a0b6.js";import{V as m}from"./ValueState-2c5e5904.js";import{g as L}from"./AriaLabelHelper-43a261ec.js";import{r as F,T as U,P as Y,m as j,n as G,V as W,W as J,l as K,X,o as Q,h as Z,Y as ee,q as te,j as ie}from"./Icons-74c917eb.js";import{i as f,b as ne}from"./Device-6afa24d0.js";import{m as ae,r as v}from"./UI5Element-a4bd3d38.js";import"./decline-3cb804de.js";import{H as re}from"./HasPopup-47461347.js";import{a3 as oe,aF as se,aG as le}from"./i18n-defaults-d675a36d.js";import{b as pe}from"./Button-7043cfcf.js";import de from"./ResponsivePopover-5c74b7f5.js";import{a as ue,I as ce}from"./Input-e218b89d.js";import{s as $}from"./style-map-132a30d8.js";import"./Gregorian-e62abc1d.js";import{s as he}from"./ResponsivePopoverCommon.css-870f7136.js";import"./utils-626dc1bf.js";import"./index-f1f2c4b1.js";import"./jsx-runtime-d079401a.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./Integer-f7f172c9.js";import"./LocaleData-e8db12a1.js";import"./slim-arrow-left-cd18fc92.js";import"./slim-arrow-right-b5a9fe30.js";import"./class-map-0ab40ab9.js";import"./i18n-defaults-2d2bf0b6.js";import"./MarkedEvents-b83081e9.js";import"./Popover-26ef4370.js";import"./PopupsCommon.css-f12c9479.js";import"./FocusableElements-66623361.js";import"./isElementHidden-01c07146.js";import"./ResizeHandler-0af4416f.js";import"./MediaRange-25b98f31.js";import"./BrowserScrollbar.css-309143b9.js";import"./Dialog-4aad3648.js";import"./information-dbbb1c9a.js";import"./Title-f7b3e876.js";import"./WrappingType-b81e595a.js";import"./Suggestions.css-8d6efd26.js";import"./ValueStateMessage.css-044f6113.js";const _e=n=>(n||(n=new Date().getTime()),(n-n%(24*60*60*1e3))/1e3),me="appointment-2",C="M32 481V65q0-14 9.5-23T64 33h64V1h32v32h192V1h32v32h64q14 0 23 9t9 23v416q0 14-9 23t-23 9H64q-13 0-22.5-9T32 481zm416 0V129H64v352h384zM256 193q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zM128 321q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm256-128q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm0 128q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm-128 0q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zM96 225q0-14 9-23t23-9 23 9 9 23-9 23-23 9-23-9-9-23zM384 97V65h-32v32h32zM128 65v32h32V65h-32z",ve=!1,ge="SAP-icons-v4",fe="@ui5/webcomponents-icons";F(me,{pathData:C,ltr:ve,collection:ge,packageName:fe});const ye="appointment-2",A="M403 64q32 0 54.5 22.5T480 141v294q0 32-22.5 54.5T403 512H109q-32 0-54.5-22.5T32 435V141q0-32 22.5-54.5T109 64h25V26q0-11 7.5-18.5T160 0t18.5 7.5T186 26v38h140V26q0-11 7.5-18.5T352 0t18.5 7.5T378 26v38h25zm-294 51q-11 0-18.5 7.5T83 141v64h346v-64q0-11-7.5-18.5T403 115h-25v19q0 11-7.5 18.5T352 160t-18.5-7.5T326 134v-19H186v19q0 11-7.5 18.5T160 160t-18.5-7.5T134 134v-19h-25zm294 346q11 0 18.5-7.5T429 435V256H83v179q0 11 7.5 18.5T109 461h294zM160 320q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm96 0q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm96 0q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9z",be=!1,$e="SAP-icons-v5",ke="@ui5/webcomponents-icons";F(ye,{pathData:A,ltr:be,collection:$e,packageName:ke});ae();function we(n,e,i){return i?u`<div class="ui5-date-picker-root" style="${$(this.styles.main)}"><${d("ui5-input",e,i)} id="${t(this._id)}-inner" class="ui5-date-picker-input" placeholder="${t(this._placeholder)}" type="${t(this.type)}" value="${t(this.value)}" ?disabled="${this.disabled}" ?required="${this.required}" ?readonly="${this.readonly}" value-state="${t(this.valueState)}" data-sap-focus-ref ._inputAccInfo ="${t(this.accInfo)}" @ui5-change="${t(this._onInputChange)}" @ui5-input="${t(this._onInputInput)}" @ui5-submit="${t(this._onInputSubmit)}" @keydown="${this._onkeydown}">${this.valueStateMessage.length?k.call(this,n,e,i):void 0}${this.readonly?void 0:w.call(this,n,e,i)}</${d("ui5-input",e,i)}><slot name="formSupport"></slot></div>`:u`<div class="ui5-date-picker-root" style="${$(this.styles.main)}"><ui5-input id="${t(this._id)}-inner" class="ui5-date-picker-input" placeholder="${t(this._placeholder)}" type="${t(this.type)}" value="${t(this.value)}" ?disabled="${this.disabled}" ?required="${this.required}" ?readonly="${this.readonly}" value-state="${t(this.valueState)}" data-sap-focus-ref ._inputAccInfo ="${t(this.accInfo)}" @ui5-change="${t(this._onInputChange)}" @ui5-input="${t(this._onInputInput)}" @ui5-submit="${t(this._onInputSubmit)}" @keydown="${this._onkeydown}">${this.valueStateMessage.length?k.call(this,n,e,i):void 0}${this.readonly?void 0:w.call(this,n,e,i)}</ui5-input><slot name="formSupport"></slot></div>`}function k(n,e,i){return u`<slot name="valueStateMessage" slot="valueStateMessage"></slot>`}function w(n,e,i){return i?u`<${d("ui5-icon",e,i)} slot="icon" name="${t(this.openIconName)}" tabindex="-1" accessible-name="${t(this.openIconTitle)}" accessible-role="button" aria-hidden="${t(this._ariaHidden)}" show-tooltip @click="${this.togglePicker}" input-icon ?pressed="${this._isPickerOpen}"></${d("ui5-icon",e,i)}>`:u`<ui5-icon slot="icon" name="${t(this.openIconName)}" tabindex="-1" accessible-name="${t(this.openIconTitle)}" accessible-role="button" aria-hidden="${t(this._ariaHidden)}" show-tooltip @click="${this.togglePicker}" input-icon ?pressed="${this._isPickerOpen}"></ui5-icon>`}function Pe(n,e,i){return i?u`<${d("ui5-responsive-popover",e,i)} id="${t(this._id)}-responsive-popover" allow-target-overlap placement-type="Bottom" horizontal-align="Left" hide-arrow ?_hide-header=${t(this._shouldHideHeader)} @keydown="${this._onkeydown}" @ui5-after-close="${t(this.onResponsivePopoverAfterClose)}">${this.showHeader?P.call(this,n,e,i):void 0}<${d("ui5-calendar",e,i)} id="${t(this._id)}-calendar" primary-calendar-type="${t(this._primaryCalendarType)}" secondary-calendar-type="${t(this.secondaryCalendarType)}" format-pattern="${t(this._formatPattern)}" timestamp="${t(this._calendarTimestamp)}" .selectionMode="${t(this._calendarSelectionMode)}" .minDate="${t(this.minDate)}" .maxDate="${t(this.maxDate)}" @ui5-selected-dates-change="${t(this.onSelectedDatesChange)}" @ui5-show-month-press="${t(this.onHeaderShowMonthPress)}" @ui5-show-year-press="${t(this.onHeaderShowYearPress)}" ?hide-week-numbers="${this.hideWeekNumbers}" ._currentPicker="${t(this._calendarCurrentPicker)}" ._pickersMode="${t(this._calendarPickersMode)}">${y(this._calendarSelectedDates,(a,o)=>a._id||o,(a,o)=>T.call(this,n,e,i,a,o))}</${d("ui5-calendar",e,i)}>${this.showFooter?D.call(this,n,e,i):void 0}</${d("ui5-responsive-popover",e,i)}> `:u`<ui5-responsive-popover id="${t(this._id)}-responsive-popover" allow-target-overlap placement-type="Bottom" horizontal-align="Left" hide-arrow ?_hide-header=${t(this._shouldHideHeader)} @keydown="${this._onkeydown}" @ui5-after-close="${t(this.onResponsivePopoverAfterClose)}">${this.showHeader?P.call(this,n,e,i):void 0}<ui5-calendar id="${t(this._id)}-calendar" primary-calendar-type="${t(this._primaryCalendarType)}" secondary-calendar-type="${t(this.secondaryCalendarType)}" format-pattern="${t(this._formatPattern)}" timestamp="${t(this._calendarTimestamp)}" .selectionMode="${t(this._calendarSelectionMode)}" .minDate="${t(this.minDate)}" .maxDate="${t(this.maxDate)}" @ui5-selected-dates-change="${t(this.onSelectedDatesChange)}" @ui5-show-month-press="${t(this.onHeaderShowMonthPress)}" @ui5-show-year-press="${t(this.onHeaderShowYearPress)}" ?hide-week-numbers="${this.hideWeekNumbers}" ._currentPicker="${t(this._calendarCurrentPicker)}" ._pickersMode="${t(this._calendarPickersMode)}">${y(this._calendarSelectedDates,(a,o)=>a._id||o,(a,o)=>T.call(this,n,e,i,a,o))}</ui5-calendar>${this.showFooter?D.call(this,n,e,i):void 0}</ui5-responsive-popover> `}function P(n,e,i){return i?u`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${t(this._headerTitleText)}</span><${d("ui5-button",e,i)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this.closePicker}"></${d("ui5-button",e,i)}></div></div>`:u`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${t(this._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this.closePicker}"></ui5-button></div></div>`}function T(n,e,i,a,o){return i?u`<${d("ui5-date",e,i)} value="${t(a)}"></${d("ui5-date",e,i)}>`:u`<ui5-date value="${t(a)}"></ui5-date>`}function D(n,e,i){return u``}v("@ui5/webcomponents-theming","sap_fiori_3",async()=>S);v("@ui5/webcomponents","sap_fiori_3",async()=>V);const Te={packageName:"@ui5/webcomponents",fileName:"themes/DatePicker.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}
/*
	This CSS file enables visual alignment of all icons within input elements.
	API:
	- add input-icon attribute to an icon
	- [Optional] pressed attribute set to the icon will enable additional styling (check MultiComboBox, Select, etc.)
*/
[input-icon] {
	color: var(--_ui5_input_icon_color);
	cursor: pointer;
	outline: none;
	padding: var(--_ui5_input_icon_padding);
	border-inline-start: var(--_ui5_input_icon_border);
	min-width: 1rem;
	min-height: 1rem;
	border-radius: var(--_ui5_input_icon_border_radius);
}
[input-icon][pressed] {
	background: var(--_ui5_input_icon_pressed_bg);
	box-shadow: var(--_ui5_input_icon_box_shadow);
	border-inline-start: var(--_ui5_select_hover_icon_left_border);
	color: var(--_ui5_input_icon_pressed_color);
}
[input-icon]:active {
	background-color: var(--sapButton_Active_Background);
	box-shadow: var(--_ui5_input_icon_box_shadow);
	border-inline-start: var(--_ui5_select_hover_icon_left_border);
	color: var(--_ui5_input_icon_pressed_color);
}
[input-icon]:not([pressed]):not(:active):hover {
	background: var(--_ui5_input_icon_hover_bg);
	box-shadow: var(--_ui5_input_icon_box_shadow);
}
[input-icon]:hover {
	border-inline-start: var(--_ui5_select_hover_icon_left_border);
	box-shadow: var(--_ui5_input_icon_box_shadow);
}
:host(:not([hidden])) {
	display: inline-block;
	line-height: normal;
	letter-spacing: normal;
	word-spacing: normal;
	height: var(--_ui5_input_height);
	border-radius: var(--_ui5_input_border_radius);
}
:host {
	min-width: calc(var(--_ui5_input_min_width) + var(--_ui5_input_icon_width));
	color: var(--sapField_TextColor);
	background-color: var(--sapField_Background);
	border-radius: var(--_ui5-datepicker_border_radius);
	margin: var(--_ui5_input_margin_top_bottom) 0;
}
:host([value-state="Error"]:not([readonly]):not([disabled])) {
	background-color: var(--sapField_InvalidBackground);
}
:host(:not([disabled]):not([readonly]):active) {
	background: var(--_ui5-datepicker-hover-background);
}
:host(:not([disabled]):not([readonly]):hover) {
	background: var(--_ui5-datepicker-hover-background);
}
.ui5-date-picker-root {
	border-radius: inherit;
	height: inherit;
	line-height: inherit;
	letter-spacing: inherit;
	word-spacing: inherit;
}
:host .ui5-date-picker-input {
	width: 100%;
	min-width: 12.5625rem;
	color: inherit;
	background-color: inherit;
	border-radius: inherit;
	height: inherit;
	line-height: inherit;
	letter-spacing: inherit;
	word-spacing: inherit;
	margin: inherit;
}
:host(:not([disabled]):not([readonly])) .ui5-date-picker-input[focused] {
	background-color: var(--_ui5-datepicker-hover-background);
}
:host([readonly]) {
	border-color: var(--_ui5_input_readonly_border_color);
	background: var(--sapField_ReadOnly_BackgroundStyle);
	background-color: var(--_ui5_input_readonly_background);
}
[slot="icon"] {
	border-top-right-radius: var(--_ui5-datepicker_icon_border_radius);
    border-bottom-right-radius: var(--_ui5-datepicker_icon_border_radius);
}
`};v("@ui5/webcomponents-theming","sap_fiori_3",async()=>S);v("@ui5/webcomponents","sap_fiori_3",async()=>V);const De={packageName:"@ui5/webcomponents",fileName:"themes/DatePickerPopover.css",content:`[ui5-calendar] {
	width: 100%;
	display: flex;
	justify-content: center;
}

[ui5-responsive-popover]::part(content) {
    padding: 0;
}
`};var s=globalThis&&globalThis.__decorate||function(n,e,i,a){var o=arguments.length,l=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,i):a,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(n,e,i,a);else for(var h=n.length-1;h>=0;h--)(c=n[h])&&(l=(o<3?c(l):o>3?c(e,i,l):c(e,i))||l);return o>3&&l&&Object.defineProperty(e,i,l),l},_;let r=_=class extends R{onResponsivePopoverAfterClose(){var e;this._isPickerOpen=!1,f()?this.blur():(e=this._getInput())==null||e.focus()}onBeforeRendering(){this.FormSupport=H("FormSupport"),["minDate","maxDate"].forEach(e=>{const i=this[e];this.isValid(i)||console.warn(`Invalid value for property "${e}": ${i} is not compatible with the configured format pattern: "${this._displayFormat}"`)}),this.FormSupport?this.FormSupport.syncNativeHiddenInput(this):this.name&&console.warn('In order for the "name" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";'),this.value=this.normalizeValue(this.value)||this.value,this.liveValue=this.value}get _calendarSelectionMode(){return"Single"}get _calendarTimestamp(){if(this.value&&this.dateValueUTC&&this._checkValueValidity(this.value)){const e=this.dateValueUTC.getTime();return _e(e)}return z(this._primaryCalendarType)}get _calendarSelectedDates(){return this.value&&this._checkValueValidity(this.value)?[this.value]:[]}_onkeydown(e){U(e)&&(e.preventDefault(),this.isOpen()?Y(e)||this._toggleAndFocusInput():this._toggleAndFocusInput()),this._getInput().isEqualNode(e.target)&&this.isOpen()&&(j(e)||G(e)||W(e)||J(e))&&this.closePicker(),!this.isOpen()&&(K(e)?this.FormSupport&&this.FormSupport.triggerFormSubmit(this):X(e)?(e.preventDefault(),this._modifyDateValue(1,"year")):Q(e)?(e.preventDefault(),this._modifyDateValue(1,"month")):Z(e)?(e.preventDefault(),this._modifyDateValue(1,"day")):ee(e)?(e.preventDefault(),this._modifyDateValue(-1,"year")):te(e)?(e.preventDefault(),this._modifyDateValue(-1,"month")):ie(e)&&(e.preventDefault(),this._modifyDateValue(-1,"day")))}_modifyDateValue(e,i,a){if(!this.dateValue)return;const o=B(x.fromLocalJSDate(this.dateValue),e,i,a,this._minDate,this._maxDate),l=this.formatValue(o.toUTCJSDate());this._updateValueAndFireEvents(l,!0,["change","value-changed"])}_updateValueAndFireEvents(e,i,a,o=!0){const l=this._checkValueValidity(e);l&&i&&(e=this.normalizeValue(e));let c=!0;this.liveValue=e;const h=this.value;o&&(this._getInput().value=e,this.value=e,this._updateValueState()),a.forEach(q=>{this.fireEvent(q,{value:e,valid:l},!0)||(c=!1)}),!c&&o&&(this._getInput().value=h,this.value=h,this._updateValueState())}_updateValueState(){const e=this._checkValueValidity(this.value);e?e&&this.valueState===m.Error&&(this.valueState=m.None):this.valueState=m.Error}_toggleAndFocusInput(){this.togglePicker(),this._getInput().focus()}_getInput(){return this.shadowRoot.querySelector("[ui5-input]")}_onInputSubmit(){}_onInputChange(e){this._updateValueAndFireEvents(e.target.value,!0,["change","value-changed"])}_onInputInput(e){this._updateValueAndFireEvents(e.target.value,!1,["input"],!1)}_checkValueValidity(e){return e===""?!0:this.isValid(e)&&this.isInValidRange(e)}_click(e){f()&&(this.responsivePopover.showAt(this),e.preventDefault())}isValid(e=""){return e===""?!0:!!this.getFormat().parse(e)}isInValidRange(e=""){if(e==="")return!0;const i=this._getCalendarDateFromString(e);return!i||!this._minDate||!this._maxDate?!1:i.valueOf()>=this._minDate.valueOf()&&i.valueOf()<=this._maxDate.valueOf()}normalizeValue(e){return e===""?e:this.getFormat().format(this.getFormat().parse(e,!0),!0)}get _displayFormat(){return this.getFormat().oFormatOptions.pattern}get _placeholder(){return this.placeholder!==void 0?this.placeholder:this._displayFormat}get _headerTitleText(){return _.i18nBundle.getText(oe)}get phone(){return f()}get showHeader(){return this.phone}get showFooter(){return this.phone}get accInfo(){return{ariaRoledescription:this.dateAriaDescription,ariaHasPopup:re.Grid,ariaAutoComplete:"none",ariaRequired:this.required,ariaLabel:L(this)}}get openIconTitle(){return _.i18nBundle.getText(se)}get openIconName(){return"appointment-2"}get dateAriaDescription(){return _.i18nBundle.getText(le)}get _shouldHideHeader(){return!1}get _ariaHidden(){return ne()}async _respPopover(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-responsive-popover]")}_canOpenPicker(){return!this.disabled&&!this.readonly}get _calendarPickersMode(){const i=this.getFormat().aFormatArray.map(a=>a.type.toLowerCase());return i.includes("day")?g.DAY_MONTH_YEAR:i.includes("month")||i.includes("monthstandalone")?g.MONTH_YEAR:g.YEAR}onSelectedDatesChange(e){e.preventDefault();const i=e.detail.values&&e.detail.values[0];this._updateValueAndFireEvents(i,!0,["change","value-changed"]),this.closePicker()}onHeaderShowMonthPress(){this._calendarCurrentPicker="month"}onHeaderShowYearPress(){this._calendarCurrentPicker="year"}formatValue(e){return this.getFormat().format(e)}closePicker(){this.responsivePopover.close()}async openPicker(){this._isPickerOpen=!0,this._calendarCurrentPicker="day",this.responsivePopover=await this._respPopover(),this.responsivePopover.showAt(this)}togglePicker(){this.isOpen()?this.closePicker():this._canOpenPicker()&&this.openPicker()}isOpen(){return!!this._isPickerOpen}get dateValue(){return this.liveValue?this.getFormat().parse(this.liveValue):this.getFormat().parse(this.value)}get dateValueUTC(){return this.liveValue?this.getFormat().parse(this.liveValue,!0):this.getFormat().parse(this.value)}get styles(){return{main:{width:"100%"}}}get type(){return ce.Text}};s([p()],r.prototype,"value",void 0);s([p({type:m,defaultValue:m.None})],r.prototype,"valueState",void 0);s([p({type:Boolean})],r.prototype,"required",void 0);s([p({type:Boolean})],r.prototype,"disabled",void 0);s([p({type:Boolean})],r.prototype,"readonly",void 0);s([p({defaultValue:void 0})],r.prototype,"placeholder",void 0);s([p()],r.prototype,"name",void 0);s([p({type:Boolean})],r.prototype,"hideWeekNumbers",void 0);s([p()],r.prototype,"accessibleName",void 0);s([p({defaultValue:""})],r.prototype,"accessibleNameRef",void 0);s([p({type:Boolean,noAttribute:!0})],r.prototype,"_isPickerOpen",void 0);s([p({type:Object})],r.prototype,"_respPopoverConfig",void 0);s([p({defaultValue:"day"})],r.prototype,"_calendarCurrentPicker",void 0);s([I({type:HTMLElement})],r.prototype,"valueStateMessage",void 0);s([I({type:HTMLElement})],r.prototype,"formSupport",void 0);r=_=s([M({tag:"ui5-date-picker",languageAware:!0,template:we,staticAreaTemplate:Pe,styles:Te,staticAreaStyles:[he,De],dependencies:[E,de,O,N,ue,pe]}),b("change",{detail:{value:{type:String},valid:{type:Boolean}}}),b("input",{detail:{value:{type:String},valid:{type:Boolean}}})],r);r.define();const gt=r;export{gt as default};
//# sourceMappingURL=DatePicker-25edcbf7.js.map
