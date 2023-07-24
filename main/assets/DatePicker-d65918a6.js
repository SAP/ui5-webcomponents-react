import{b as u,d,l as t,s as V,a as T,p,c as E}from"./withWebComponent-99b005ba.js";import{s as I}from"./slot-76e48863.js";import{c as y,a as M,e as b}from"./Icon-31253496.js";import{g as O}from"./CustomElementsScopeUtils-137da8c8.js";import{c as H,d as N,D as R,g as z,m as B,a as x,b as g}from"./Calendar-c84c4c31.js";import{V as _}from"./ValueState-2c5e5904.js";import{g as L}from"./AriaLabelHelper-43a261ec.js";import{r as q,T as U,P as Y,m as j,n as W,V as G,W as J,l as K,X,o as Q,h as Z,Y as ee,q as te,j as ie}from"./Icons-234bf59e.js";import{i as f,b as ne}from"./Device-6afa24d0.js";import{m as ae,r as v}from"./UI5Element-11982a12.js";import"./decline-c1cc2557.js";import{H as re}from"./HasPopup-47461347.js";import{a2 as oe,aE as se,aF as le}from"./i18n-defaults-1a83921e.js";import{b as pe}from"./Button-0b5fe0db.js";import de from"./ResponsivePopover-8e47438f.js";import{a as ue,I as he}from"./Input-91cde929.js";import{s as $}from"./style-map-56038137.js";import"./Gregorian-efb6dee1.js";import{s as ce}from"./ResponsivePopoverCommon.css-c96ec8b5.js";import"./utils-626dc1bf.js";import"./index-f1f2c4b1.js";import"./jsx-runtime-d079401a.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./Integer-f7f172c9.js";import"./LocaleData-b0a005ad.js";import"./slim-arrow-left-496e4002.js";import"./slim-arrow-right-c0f59065.js";import"./class-map-b4d8f3b0.js";import"./i18n-defaults-837f5aed.js";import"./MarkedEvents-b83081e9.js";import"./Popover-f3103b78.js";import"./PopupsCommon.css-552c6676.js";import"./FocusableElements-708d1a4e.js";import"./isElementHidden-01c07146.js";import"./ResizeHandler-9ebe913c.js";import"./MediaRange-25b98f31.js";import"./BrowserScrollbar.css-527f9f64.js";import"./Dialog-8bf45a3e.js";import"./information-2644a02f.js";import"./Title-3276c542.js";import"./WrappingType-b81e595a.js";import"./Suggestions.css-a2899748.js";import"./ValueStateMessage.css-e53cdf31.js";const me=n=>(n||(n=new Date().getTime()),(n-n%(24*60*60*1e3))/1e3),_e="appointment-2",F="M32 481V65q0-14 9.5-23T64 33h64V1h32v32h192V1h32v32h64q14 0 23 9t9 23v416q0 14-9 23t-23 9H64q-13 0-22.5-9T32 481zm416 0V129H64v352h384zM256 193q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zM128 321q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm256-128q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm0 128q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zm-128 0q14 0 23 9t9 23-9 23-23 9-23-9-9-23 9-23 23-9zM96 225q0-14 9-23t23-9 23 9 9 23-9 23-23 9-23-9-9-23zM384 97V65h-32v32h32zM128 65v32h32V65h-32z",ve=!1,ge="SAP-icons-v4",fe="@ui5/webcomponents-icons";q(_e,{pathData:F,ltr:ve,collection:ge,packageName:fe});const ye="appointment-2",C="M409.5 52q32 0 54.5 22t22.5 54v307q0 32-22.5 54t-54.5 22h-307q-32 0-54-22t-22-54V128q0-32 22-54t54-22h52V26q0-11 7-18.5t18-7.5T198 7.5t7.5 18.5v26h102V26q0-11 7-18.5t18-7.5q12 0 19 7.5t7 18.5v26h51zm-307 51q-25 0-25 25v77h358v-77q0-11-7.5-18t-18.5-7h-51v25q0 11-7 18.5t-19 7.5q-11 0-18-7.5t-7-18.5v-25h-102v25q0 11-7.5 18.5t-18.5 7.5-18-7.5-7-18.5v-25h-52zm307 357q11 0 18.5-7t7.5-18V256h-358v179q0 25 25 25h307zm-153-166q16 0 27 11t11 28q0 16-11 27t-27 11-27.5-11-11.5-27q0-17 11.5-28t27.5-11zm102 0q16 0 27 11t11 28q0 16-11 27t-27 11-27-11-11-27q0-17 11-28t27-11zm-204 0q16 0 27 11t11 28q0 16-11 27t-27 11q-17 0-28-11t-11-27q0-17 11-28t28-11z",be=!1,$e="SAP-icons-v5",ke="@ui5/webcomponents-icons";q(ye,{pathData:C,ltr:be,collection:$e,packageName:ke});ae();function we(n,e,i){return i?u`<div class="ui5-date-picker-root" style="${$(this.styles.main)}"><${d("ui5-input",e,i)} id="${t(this._id)}-inner" class="ui5-date-picker-input" placeholder="${t(this._placeholder)}" type="${t(this.type)}" value="${t(this.value)}" ?disabled="${this.disabled}" ?required="${this.required}" ?readonly="${this.readonly}" value-state="${t(this.valueState)}" data-sap-focus-ref ._inputAccInfo ="${t(this.accInfo)}" @ui5-change="${t(this._onInputChange)}" @ui5-input="${t(this._onInputInput)}" @ui5-submit="${t(this._onInputSubmit)}" @keydown="${this._onkeydown}">${this.valueStateMessage.length?k.call(this,n,e,i):void 0}${this.readonly?void 0:w.call(this,n,e,i)}</${d("ui5-input",e,i)}><slot name="formSupport"></slot></div>`:u`<div class="ui5-date-picker-root" style="${$(this.styles.main)}"><ui5-input id="${t(this._id)}-inner" class="ui5-date-picker-input" placeholder="${t(this._placeholder)}" type="${t(this.type)}" value="${t(this.value)}" ?disabled="${this.disabled}" ?required="${this.required}" ?readonly="${this.readonly}" value-state="${t(this.valueState)}" data-sap-focus-ref ._inputAccInfo ="${t(this.accInfo)}" @ui5-change="${t(this._onInputChange)}" @ui5-input="${t(this._onInputInput)}" @ui5-submit="${t(this._onInputSubmit)}" @keydown="${this._onkeydown}">${this.valueStateMessage.length?k.call(this,n,e,i):void 0}${this.readonly?void 0:w.call(this,n,e,i)}</ui5-input><slot name="formSupport"></slot></div>`}function k(n,e,i){return u`<slot name="valueStateMessage" slot="valueStateMessage"></slot>`}function w(n,e,i){return i?u`<${d("ui5-icon",e,i)} slot="icon" name="${t(this.openIconName)}" tabindex="-1" accessible-name="${t(this.openIconTitle)}" accessible-role="button" aria-hidden="${t(this._ariaHidden)}" show-tooltip @click="${this.togglePicker}" input-icon ?pressed="${this._isPickerOpen}"></${d("ui5-icon",e,i)}>`:u`<ui5-icon slot="icon" name="${t(this.openIconName)}" tabindex="-1" accessible-name="${t(this.openIconTitle)}" accessible-role="button" aria-hidden="${t(this._ariaHidden)}" show-tooltip @click="${this.togglePicker}" input-icon ?pressed="${this._isPickerOpen}"></ui5-icon>`}function Pe(n,e,i){return i?u`<${d("ui5-responsive-popover",e,i)} id="${t(this._id)}-responsive-popover" allow-target-overlap placement-type="Bottom" horizontal-align="Left" hide-arrow ?_hide-header=${t(this._shouldHideHeader)} @keydown="${this._onkeydown}" @ui5-after-close="${t(this.onResponsivePopoverAfterClose)}">${this.showHeader?P.call(this,n,e,i):void 0}<${d("ui5-calendar",e,i)} id="${t(this._id)}-calendar" primary-calendar-type="${t(this._primaryCalendarType)}" secondary-calendar-type="${t(this.secondaryCalendarType)}" format-pattern="${t(this._formatPattern)}" timestamp="${t(this._calendarTimestamp)}" .selectionMode="${t(this._calendarSelectionMode)}" .minDate="${t(this.minDate)}" .maxDate="${t(this.maxDate)}" @ui5-selected-dates-change="${t(this.onSelectedDatesChange)}" @ui5-show-month-press="${t(this.onHeaderShowMonthPress)}" @ui5-show-year-press="${t(this.onHeaderShowYearPress)}" ?hide-week-numbers="${this.hideWeekNumbers}" ._currentPicker="${t(this._calendarCurrentPicker)}" ._pickersMode="${t(this._calendarPickersMode)}">${y(this._calendarSelectedDates,(a,o)=>a._id||o,(a,o)=>D.call(this,n,e,i,a,o))}</${d("ui5-calendar",e,i)}>${this.showFooter?S.call(this,n,e,i):void 0}</${d("ui5-responsive-popover",e,i)}> `:u`<ui5-responsive-popover id="${t(this._id)}-responsive-popover" allow-target-overlap placement-type="Bottom" horizontal-align="Left" hide-arrow ?_hide-header=${t(this._shouldHideHeader)} @keydown="${this._onkeydown}" @ui5-after-close="${t(this.onResponsivePopoverAfterClose)}">${this.showHeader?P.call(this,n,e,i):void 0}<ui5-calendar id="${t(this._id)}-calendar" primary-calendar-type="${t(this._primaryCalendarType)}" secondary-calendar-type="${t(this.secondaryCalendarType)}" format-pattern="${t(this._formatPattern)}" timestamp="${t(this._calendarTimestamp)}" .selectionMode="${t(this._calendarSelectionMode)}" .minDate="${t(this.minDate)}" .maxDate="${t(this.maxDate)}" @ui5-selected-dates-change="${t(this.onSelectedDatesChange)}" @ui5-show-month-press="${t(this.onHeaderShowMonthPress)}" @ui5-show-year-press="${t(this.onHeaderShowYearPress)}" ?hide-week-numbers="${this.hideWeekNumbers}" ._currentPicker="${t(this._calendarCurrentPicker)}" ._pickersMode="${t(this._calendarPickersMode)}">${y(this._calendarSelectedDates,(a,o)=>a._id||o,(a,o)=>D.call(this,n,e,i,a,o))}</ui5-calendar>${this.showFooter?S.call(this,n,e,i):void 0}</ui5-responsive-popover> `}function P(n,e,i){return i?u`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${t(this._headerTitleText)}</span><${d("ui5-button",e,i)} class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this.closePicker}"></${d("ui5-button",e,i)}></div></div>`:u`<div slot="header" class="ui5-responsive-popover-header"><div class="row"><span>${t(this._headerTitleText)}</span><ui5-button class="ui5-responsive-popover-close-btn" icon="decline" design="Transparent" @click="${this.closePicker}"></ui5-button></div></div>`}function D(n,e,i,a,o){return i?u`<${d("ui5-date",e,i)} value="${t(a)}"></${d("ui5-date",e,i)}>`:u`<ui5-date value="${t(a)}"></ui5-date>`}function S(n,e,i){return u``}v("@ui5/webcomponents-theming","sap_fiori_3",async()=>V);v("@ui5/webcomponents","sap_fiori_3",async()=>T);const De={packageName:"@ui5/webcomponents",fileName:"themes/DatePicker.css",content:`.ui5-hidden-text {
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
`};v("@ui5/webcomponents-theming","sap_fiori_3",async()=>V);v("@ui5/webcomponents","sap_fiori_3",async()=>T);const Se={packageName:"@ui5/webcomponents",fileName:"themes/DatePickerPopover.css",content:`[ui5-calendar] {
	width: 100%;
	display: flex;
	justify-content: center;
}

[ui5-responsive-popover]::part(content) {
    padding: 0;
}
`};var s=globalThis&&globalThis.__decorate||function(n,e,i,a){var o=arguments.length,l=o<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,i):a,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")l=Reflect.decorate(n,e,i,a);else for(var c=n.length-1;c>=0;c--)(h=n[c])&&(l=(o<3?h(l):o>3?h(e,i,l):h(e,i))||l);return o>3&&l&&Object.defineProperty(e,i,l),l},m;let r=m=class extends R{onResponsivePopoverAfterClose(){var e;this._isPickerOpen=!1,f()?this.blur():(e=this._getInput())==null||e.focus()}onBeforeRendering(){this.FormSupport=O("FormSupport"),["minDate","maxDate"].forEach(e=>{const i=this[e];this.isValid(i)||console.warn(`Invalid value for property "${e}": ${i} is not compatible with the configured format pattern: "${this._displayFormat}"`)}),this.FormSupport?this.FormSupport.syncNativeHiddenInput(this):this.name&&console.warn('In order for the "name" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";'),this.value=this.normalizeValue(this.value)||this.value,this.liveValue=this.value}get _calendarSelectionMode(){return"Single"}get _calendarTimestamp(){if(this.value&&this.dateValueUTC&&this._checkValueValidity(this.value)){const e=this.dateValueUTC.getTime();return me(e)}return z(this._primaryCalendarType)}get _calendarSelectedDates(){return this.value&&this._checkValueValidity(this.value)?[this.value]:[]}_onkeydown(e){U(e)&&(e.preventDefault(),this.isOpen()?Y(e)||this._toggleAndFocusInput():this._toggleAndFocusInput()),this._getInput().isEqualNode(e.target)&&this.isOpen()&&(j(e)||W(e)||G(e)||J(e))&&this.closePicker(),!this.isOpen()&&(K(e)?this.FormSupport&&this.FormSupport.triggerFormSubmit(this):X(e)?(e.preventDefault(),this._modifyDateValue(1,"year")):Q(e)?(e.preventDefault(),this._modifyDateValue(1,"month")):Z(e)?(e.preventDefault(),this._modifyDateValue(1,"day")):ee(e)?(e.preventDefault(),this._modifyDateValue(-1,"year")):te(e)?(e.preventDefault(),this._modifyDateValue(-1,"month")):ie(e)&&(e.preventDefault(),this._modifyDateValue(-1,"day")))}_modifyDateValue(e,i,a){if(!this.dateValue)return;const o=B(x.fromLocalJSDate(this.dateValue),e,i,a,this._minDate,this._maxDate),l=this.formatValue(o.toUTCJSDate());this._updateValueAndFireEvents(l,!0,["change","value-changed"])}_updateValueAndFireEvents(e,i,a,o=!0){const l=this._checkValueValidity(e);l&&i&&(e=this.normalizeValue(e));let h=!0;this.liveValue=e;const c=this.value;o&&(this._getInput().value=e,this.value=e,this._updateValueState()),a.forEach(A=>{this.fireEvent(A,{value:e,valid:l},!0)||(h=!1)}),!h&&o&&(this._getInput().value=c,this.value=c,this._updateValueState())}_updateValueState(){const e=this._checkValueValidity(this.value);e?e&&this.valueState===_.Error&&(this.valueState=_.None):this.valueState=_.Error}_toggleAndFocusInput(){this.togglePicker(),this._getInput().focus()}_getInput(){return this.shadowRoot.querySelector("[ui5-input]")}_onInputSubmit(){}_onInputChange(e){this._updateValueAndFireEvents(e.target.value,!0,["change","value-changed"])}_onInputInput(e){this._updateValueAndFireEvents(e.target.value,!1,["input"],!1)}_checkValueValidity(e){return e===""?!0:this.isValid(e)&&this.isInValidRange(e)}_click(e){f()&&(this.responsivePopover.showAt(this),e.preventDefault())}isValid(e=""){return e===""?!0:!!this.getFormat().parse(e)}isInValidRange(e=""){if(e==="")return!0;const i=this._getCalendarDateFromString(e);return!i||!this._minDate||!this._maxDate?!1:i.valueOf()>=this._minDate.valueOf()&&i.valueOf()<=this._maxDate.valueOf()}normalizeValue(e){return e===""?e:this.getFormat().format(this.getFormat().parse(e,!0),!0)}get _displayFormat(){return this.getFormat().oFormatOptions.pattern}get _placeholder(){return this.placeholder!==void 0?this.placeholder:this._displayFormat}get _headerTitleText(){return m.i18nBundle.getText(oe)}get phone(){return f()}get showHeader(){return this.phone}get showFooter(){return this.phone}get accInfo(){return{ariaRoledescription:this.dateAriaDescription,ariaHasPopup:re.Grid,ariaAutoComplete:"none",ariaRequired:this.required,ariaLabel:L(this)}}get openIconTitle(){return m.i18nBundle.getText(se)}get openIconName(){return"appointment-2"}get dateAriaDescription(){return m.i18nBundle.getText(le)}get _shouldHideHeader(){return!1}get _ariaHidden(){return ne()}async _respPopover(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-responsive-popover]")}_canOpenPicker(){return!this.disabled&&!this.readonly}get _calendarPickersMode(){const i=this.getFormat().aFormatArray.map(a=>a.type.toLowerCase());return i.includes("day")?g.DAY_MONTH_YEAR:i.includes("month")||i.includes("monthstandalone")?g.MONTH_YEAR:g.YEAR}onSelectedDatesChange(e){e.preventDefault();const i=e.detail.values&&e.detail.values[0];this._updateValueAndFireEvents(i,!0,["change","value-changed"]),this.closePicker()}onHeaderShowMonthPress(){this._calendarCurrentPicker="month"}onHeaderShowYearPress(){this._calendarCurrentPicker="year"}formatValue(e){return this.getFormat().format(e)}closePicker(){this.responsivePopover.close()}async openPicker(){this._isPickerOpen=!0,this._calendarCurrentPicker="day",this.responsivePopover=await this._respPopover(),this.responsivePopover.showAt(this)}togglePicker(){this.isOpen()?this.closePicker():this._canOpenPicker()&&this.openPicker()}isOpen(){return!!this._isPickerOpen}get dateValue(){return this.liveValue?this.getFormat().parse(this.liveValue):this.getFormat().parse(this.value)}get dateValueUTC(){return this.liveValue?this.getFormat().parse(this.liveValue,!0):this.getFormat().parse(this.value)}get styles(){return{main:{width:"100%"}}}get type(){return he.Text}};s([p()],r.prototype,"value",void 0);s([p({type:_,defaultValue:_.None})],r.prototype,"valueState",void 0);s([p({type:Boolean})],r.prototype,"required",void 0);s([p({type:Boolean})],r.prototype,"disabled",void 0);s([p({type:Boolean})],r.prototype,"readonly",void 0);s([p({defaultValue:void 0})],r.prototype,"placeholder",void 0);s([p()],r.prototype,"name",void 0);s([p({type:Boolean})],r.prototype,"hideWeekNumbers",void 0);s([p()],r.prototype,"accessibleName",void 0);s([p({defaultValue:""})],r.prototype,"accessibleNameRef",void 0);s([p({type:Boolean,noAttribute:!0})],r.prototype,"_isPickerOpen",void 0);s([p({type:Object})],r.prototype,"_respPopoverConfig",void 0);s([p({defaultValue:"day"})],r.prototype,"_calendarCurrentPicker",void 0);s([I({type:HTMLElement})],r.prototype,"valueStateMessage",void 0);s([I({type:HTMLElement})],r.prototype,"formSupport",void 0);r=m=s([E({tag:"ui5-date-picker",languageAware:!0,template:we,staticAreaTemplate:Pe,styles:De,staticAreaStyles:[ce,Se],dependencies:[M,de,H,N,ue,pe]}),b("change",{detail:{value:{type:String},valid:{type:Boolean}}}),b("input",{detail:{value:{type:String},valid:{type:Boolean}}})],r);r.define();const gt=r;export{gt as default};
//# sourceMappingURL=DatePicker-d65918a6.js.map
