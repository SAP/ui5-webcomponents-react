import{M,C as F,f as N,a as A}from"./chunk-PCJTTTQV-bdb84204.js";import{_ as O}from"./iframe-e0d9cefa.js";import{a as k,U as j,d as R,m as b}from"./UI5Element-2e105c8a.js";import{D as $,g as L}from"./Gregorian-efe5b1bf.js";import{e as h,l as i,s as l,a as x,b as C,p as m,c as B,d as U,w as H}from"./withWebComponent-7b9bd1ee.js";import{I as W,e as T}from"./Icon-1927e688.js";import{s as q}from"./slot-76e48863.js";import{V as g}from"./ValueState-2c5e5904.js";import{f as z}from"./LocaleData-0745c736.js";import{l as G,k as K,e as X,i as J,a as Q,_ as Y,V as Z,t as ee,$ as te,X as ie,u as ne}from"./Icons-fe8ad928.js";import{T as oe}from"./TimeSelection-e86aa508.js";import ae from"./ResponsivePopover-cca20b42.js";import{a as re}from"./Input-e10c5626.js";import{B as se}from"./Button-a741ea37.js";import{b9 as le,ba as ce,bs as ue}from"./i18n-defaults-2f9956dc.js";import{s as pe}from"./ResponsivePopoverCommon.css-67fc1c09.js";import{V as w}from"./ValueState-ab6838cc.js";import{e as de}from"./DomRefTable.module-93302388.js";import{D as he}from"./DocsHeader-b47ae444.js";import{F as me}from"./Footer-eadcd3fc.js";import{j as r}from"./jsx-runtime-5926aa06.js";import"./index-ebeaab24.js";import{D as fe}from"./DomRefTable-b9515d77.js";import{u as I}from"./index-bda0bad7.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"../sb-preview/runtime.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./Integer-f7f172c9.js";import"./Device-208919c6.js";import"./class-map-6a9bd920.js";import"./navigation-down-arrow-d7513ec1.js";import"./ScrollEnablement-4353003c.js";import"./animate-1a16ba20.js";import"./PopupUtils-2e0c5ac0.js";import"./getActiveElement-bcae01ed.js";import"./style-map-0c64293c.js";import"./Popover-898d0a68.js";import"./PopupsCommon.css-0f627f88.js";import"./FocusableElements-d8460590.js";import"./isElementHidden-01c07146.js";import"./AriaLabelHelper-43a261ec.js";import"./decline-76de6b04.js";import"./i18n-defaults-80781f7e.js";import"./ResizeHandler-267f9e5d.js";import"./MediaRange-25b98f31.js";import"./Dialog-335e5eae.js";import"./information-bc6b0940.js";import"./Title-4b970c0e.js";import"./WrappingType-b81e595a.js";import"./MarkedEvents-b83081e9.js";import"./Suggestions.css-0aeebfba.js";import"./ValueStateMessage.css-1932364a.js";import"./react-jss.esm-022ab528.js";import"./index-f332b857.js";import"./index-4c0ab015.js";import"./clsx.m-1229b3e0.js";import"./index-562e1433.js";import"./ThemingParameters-7e2e4e30.js";import"./TableOfContent-c92fbae7.js";import"./index-98860236.js";import"./Link-92895189.js";import"./index-387126a8.js";import"./Label-51e84534.js";import"./index-72f43835.js";function _e(o,e,t){return t?h`<div id="${i(this._id)}" class="ui5-time-picker-root"><${l("ui5-input",e,t)} id="${i(this._id)}-inner" value="${i(this.value)}" placeholder="${i(this._placeholder)}" ?disabled="${this.disabled}" ?readonly="${this.readonly}" value-state="${i(this.valueState)}" ._inputAccInfo="${i(this.accInfo)}" data-sap-focus-ref @click="${this._handleInputClick}" @ui5-change="${i(this._handleInputChange)}" @ui5-input="${i(this._handleInputLiveChange)}" class="ui5-time-picker-input" @keydown="${this._onkeydown}">${this.valueStateMessage.length?D.call(this,o,e,t):void 0}${this.readonly?void 0:V.call(this,o,e,t)}</${l("ui5-input",e,t)}></div>`:h`<div id="${i(this._id)}" class="ui5-time-picker-root"><ui5-input id="${i(this._id)}-inner" value="${i(this.value)}" placeholder="${i(this._placeholder)}" ?disabled="${this.disabled}" ?readonly="${this.readonly}" value-state="${i(this.valueState)}" ._inputAccInfo="${i(this.accInfo)}" data-sap-focus-ref @click="${this._handleInputClick}" @ui5-change="${i(this._handleInputChange)}" @ui5-input="${i(this._handleInputLiveChange)}" class="ui5-time-picker-input" @keydown="${this._onkeydown}">${this.valueStateMessage.length?D.call(this,o,e,t):void 0}${this.readonly?void 0:V.call(this,o,e,t)}</ui5-input></div>`}function D(o,e,t){return h`<slot name="valueStateMessage" slot="valueStateMessage"></slot>`}function V(o,e,t){return t?h`<${l("ui5-icon",e,t)} slot="icon" name="${i(this.openIconName)}" tabindex="-1" show-tooltip @click="${this.togglePicker}" input-icon ?pressed="${this._isPickerOpen}" class="ui5-time-picker-input-icon-button"></${l("ui5-icon",e,t)}>`:h`<ui5-icon slot="icon" name="${i(this.openIconName)}" tabindex="-1" show-tooltip @click="${this.togglePicker}" input-icon ?pressed="${this._isPickerOpen}" class="ui5-time-picker-input-icon-button"></ui5-icon>`}function ve(o,e,t){return t?h`<${l("ui5-responsive-popover",e,t)} id="${i(this._id)}-responsive-popover" class="ui5-time-picker-popover" placement-type="Bottom" horizontal-align="Left" allow-target-overlap _hide-header hide-arrow @ui5-after-close="${i(this.onResponsivePopoverAfterClose)}" @wheel="${this._handleWheel}" @keydown="${this._onkeydown}"><${l("ui5-time-selection",e,t)} id="${i(this._id)}-time-sel" value="${i(this._timeSelectionValue)}" format-pattern="${i(this._formatPattern)}" .hideHours="${i(this.hideHours)}" .hideMinutes="${i(this.hideMinutes)}" .hideSeconds="${i(this.hideSeconds)}" .minutesStep="${i(this.minutesStep)}" .secondsStep="${i(this.secondsStep)}" .maxHours="${i(this.maxHours)}" .maxMinutes="${i(this.maxMinutes)}" .maxSeconds="${i(this.maxSeconds)}" @ui5-change="${i(this.onTimeSelectionChange)}"></${l("ui5-time-selection",e,t)}><div slot="footer" class="ui5-time-picker-footer" @keydown=${this._onfooterkeydown}><${l("ui5-button",e,t)} id="submit" design="Emphasized" @click="${this.submitPickers}">${i(this.submitButtonLabel)}</${l("ui5-button",e,t)}><${l("ui5-button",e,t)} id="close" design="Transparent" @click="${this.closePicker}">${i(this.cancelButtonLabel)}</${l("ui5-button",e,t)}></div></${l("ui5-responsive-popover",e,t)}>`:h`<ui5-responsive-popover id="${i(this._id)}-responsive-popover" class="ui5-time-picker-popover" placement-type="Bottom" horizontal-align="Left" allow-target-overlap _hide-header hide-arrow @ui5-after-close="${i(this.onResponsivePopoverAfterClose)}" @wheel="${this._handleWheel}" @keydown="${this._onkeydown}"><ui5-time-selection id="${i(this._id)}-time-sel" value="${i(this._timeSelectionValue)}" format-pattern="${i(this._formatPattern)}" .hideHours="${i(this.hideHours)}" .hideMinutes="${i(this.hideMinutes)}" .hideSeconds="${i(this.hideSeconds)}" .minutesStep="${i(this.minutesStep)}" .secondsStep="${i(this.secondsStep)}" .maxHours="${i(this.maxHours)}" .maxMinutes="${i(this.maxMinutes)}" .maxSeconds="${i(this.maxSeconds)}" @ui5-change="${i(this.onTimeSelectionChange)}"></ui5-time-selection><div slot="footer" class="ui5-time-picker-footer" @keydown=${this._onfooterkeydown}><ui5-button id="submit" design="Emphasized" @click="${this.submitPickers}">${i(this.submitButtonLabel)}</ui5-button><ui5-button id="close" design="Transparent" @click="${this.closePicker}">${i(this.cancelButtonLabel)}</ui5-button></div></ui5-responsive-popover>`}k("@ui5/webcomponents-theming","sap_fiori_3",async()=>x);k("@ui5/webcomponents","sap_fiori_3",async()=>C);const ge={packageName:"@ui5/webcomponents",fileName:"themes/TimePicker.css",content:`:host {
	vertical-align: middle;
}
.ui5-hidden-text {
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
}
:host {
	min-width: calc(var(--_ui5_input_min_width) + var(--_ui5_input_icon_width));
	color: var(--sapField_TextColor);
	background-color: var(--sapField_Background);
	border-radius: var(--_ui5-time_picker_border_radius);
	margin: var(--_ui5_input_margin_top_bottom) 0;
}
:host([value-state="Error"]) {
	background-color: var(--sapField_InvalidBackground);
}
:host(:not([disabled]):hover) {
	background: var(--sapField_Hover_Background);
}
.ui5-time-picker-root {
	line-height: inherit;
	letter-spacing: inherit;
	word-spacing: inherit;
}
:host .ui5-time-picker-input {
	width: 100%;
	color: inherit;
	background-color: inherit;
	line-height: inherit;
	letter-spacing: inherit;
	word-spacing: inherit;
	margin: inherit;
}
.ui5-time-picker-input-icon-button {
	border-left: 0.0625rem solid transparent;
}
.ui5-time-picker-input-icon-button {
	border-left: 0.0625rem solid transparent;
}
.ui5-time-picker-input-icon-button:hover {
	cursor: pointer;
	border-left: var(--_ui5_time_picker_border);
	background: var(--sapButton_Hover_Background);
}
.ui5-time-picker-input-icon-button:active {
	background-color: var(--sapButton_Active_Background);
	color: var(--sapButton_Active_TextColor);
}
.ui5-time-picker-input-icon-button[pressed] {
	background-color: var(--sapButton_Active_Background);
	color: var(--sapButton_Active_TextColor);
}`};k("@ui5/webcomponents-theming","sap_fiori_3",async()=>x);k("@ui5/webcomponents","sap_fiori_3",async()=>C);const be={packageName:"@ui5/webcomponents",fileName:"themes/TimePickerPopover.css",content:`.ui5-time-picker-footer {
	height: fit-content;
	display: flex;
	justify-content: flex-end;
	width: 100%;
}

.ui5-time-picker-footer > [ui5-button] {
	margin: 1%;
	min-width: 20%;
}

.ui5-time-picker-popover::part(content) {
	padding: 0;
}
`};var f=globalThis&&globalThis.__decorate||function(o,e,t,n){var s=arguments.length,a=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,e,t,n);else for(var d=o.length-1;d>=0;d--)(c=o[d])&&(a=(s<3?c(a):s>3?c(e,t,a):c(e,t))||a);return s>3&&a&&Object.defineProperty(e,t,a),a},v;let u=v=class extends j{static async onDefine(){[v.i18nBundle]=await Promise.all([R("@ui5/webcomponents"),z(b().getLanguage(),b().getRegion(),b().getScript())])}constructor(){super()}get _placeholder(){}get _formatPattern(){}get _effectiveValue(){return this.value}get _timeSelectionValue(){return this.tempValue}onTimeSelectionChange(e){this.tempValue=e.detail.value}submitPickers(){this._updateValueAndFireEvents(this.tempValue,!0,["change","value-changed"]),this.closePicker()}onResponsivePopoverAfterClose(){this._isPickerOpen=!1}async _handleInputClick(){if(this._isPickerOpen)return;const e=await this._getInputField();e&&e.select()}_updateValueAndFireEvents(e,t,n){if(e===this.value)return;const s=this.isValid(e);e!==void 0&&s&&t&&(e=this.normalizeValue(e)),n.includes("input")||(this.value="",this.value=e),this.tempValue=e,this._updateValueState(),n.forEach(a=>{this.fireEvent(a,{value:e,valid:s})})}_updateValueState(){const e=this.isValid(this.value);e?e&&this.valueState===g.Error&&(this.valueState=g.None):this.valueState=g.Error}_handleInputChange(e){const t=e.target;this._updateValueAndFireEvents(t.value,!0,["change","value-changed"])}_handleInputLiveChange(e){const t=e.target;this._updateValueAndFireEvents(t.value,!1,["input"])}async closePicker(){(await this._getPopover()).close(),this._isPickerOpen=!1}async openPicker(){this.tempValue=this.value&&this.isValid(this.value)?this.value:this.getFormat().format(new Date),(await this._getPopover()).showAt(this),this._isPickerOpen=!0}togglePicker(){this.isOpen()?this.closePicker():this._canOpenPicker()&&this.openPicker()}isOpen(){return!!this._isPickerOpen}_canOpenPicker(){return!this.disabled&&!this.readonly}async _getPopover(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-responsive-popover]")}_getInput(){return this.shadowRoot.querySelector("[ui5-input]")}_getInputField(){const e=this._getInput();return e&&e.getInputDOMRef()}_onkeydown(e){G(e)&&(e.preventDefault(),this.togglePicker());const t=e.target;this._getInput().isEqualNode(t)&&this.isOpen()&&(K(e)||X(e)||J(e)||Q(e))&&this.closePicker(),!this.isOpen()&&(Y(e)?(e.preventDefault(),this._modifyValueBy(1,"second")):Z(e)?(e.preventDefault(),this._modifyValueBy(1,"minute")):ee(e)?(e.preventDefault(),this._modifyValueBy(1,"hour")):te(e)?(e.preventDefault(),this._modifyValueBy(-1,"second")):ie(e)?(e.preventDefault(),this._modifyValueBy(-1,"minute")):ne(e)&&(e.preventDefault(),this._modifyValueBy(-1,"hour")))}get _isPattern(){return this._formatPattern!=="medium"&&this._formatPattern!=="short"&&this._formatPattern!=="long"}getFormat(){let e;return this._isPattern?e=$.getDateInstance({pattern:this._formatPattern}):e=$.getDateInstance({style:this._formatPattern}),e}formatValue(e){return this.getFormat().format(e)}isValid(e){return e===""?!0:!!this.getFormat().parse(e)}normalizeValue(e){return e===""?e:this.getFormat().format(this.getFormat().parse(e))}_modifyValueBy(e,t){const n=this.getFormat().parse(this._effectiveValue);if(!n)return;t==="hour"?n.setHours(n.getHours()+e):t==="minute"?n.setMinutes(n.getMinutes()+e):t==="second"&&n.setSeconds(n.getSeconds()+e);const s=this.formatValue(n);this._updateValueAndFireEvents(s,!0,["change","value-changed"])}_handleWheel(e){e.preventDefault()}get submitButtonLabel(){return v.i18nBundle.getText(le)}get cancelButtonLabel(){return v.i18nBundle.getText(ce)}get openIconName(){return"time-entry-request"}};f([m({defaultValue:void 0})],u.prototype,"value",void 0);f([m({type:g,defaultValue:g.None})],u.prototype,"valueState",void 0);f([m({type:Boolean})],u.prototype,"disabled",void 0);f([m({type:Boolean})],u.prototype,"readonly",void 0);f([m({type:Boolean,noAttribute:!0})],u.prototype,"_isPickerOpen",void 0);f([q()],u.prototype,"valueStateMessage",void 0);u=v=f([B({languageAware:!0,renderer:U,template:_e,styles:ge,staticAreaTemplate:ve,staticAreaStyles:[pe,be],dependencies:[W,ae,oe,re,se]}),T("change",{detail:{value:{type:String},valid:{type:Boolean}}}),T("input",{detail:{value:{type:String},valid:{type:Boolean}}})],u);const ye=u;var S=globalThis&&globalThis.__decorate||function(o,e,t,n){var s=arguments.length,a=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,e,t,n);else for(var d=o.length-1;d>=0;d--)(c=o[d])&&(a=(s<3?c(a):s>3?c(e,t,a):c(e,t))||a);return s>3&&a&&Object.defineProperty(e,t,a),a},P;let _=P=class extends ye{get _formatPattern(){const e=!!this.formatPattern.match(/H/i),t=!this.formatPattern||!e,n=L(b());return t?n.getTimePattern("medium"):this.formatPattern}get _displayFormat(){return this.getFormat().oFormatOptions.pattern}get _placeholder(){return this.placeholder!==void 0?this.placeholder:this._displayFormat}get dateValue(){return this.getFormat().parse(this._effectiveValue)}get accInfo(){return{ariaRoledescription:this.dateAriaDescription,ariaHasPopup:"dialog",ariaAutoComplete:"none",ariaControls:`${this._id}-responsive-popover`}}get dateAriaDescription(){return P.i18nBundle.getText(ue)}};S([m({defaultValue:void 0})],_.prototype,"placeholder",void 0);S([m()],_.prototype,"formatPattern",void 0);_=P=S([B("ui5-time-picker")],_);_.define();const ke=_,Pe=Object.freeze(Object.defineProperty({__proto__:null,default:ke},Symbol.toStringTag,{value:"Module"})),p=H("ui5-time-picker",["formatPattern","placeholder","value","valueState"],["disabled","readonly"],["valueStateMessage"],["change","input"],()=>O(()=>Promise.resolve().then(()=>Pe),void 0,import.meta.url));p.displayName="TimePicker";p.defaultProps={valueState:w.None};try{p.displayName="TimePicker",p.__docgenInfo={description:'The `TimePicker` component provides an input field with assigned sliders which are opened on user action. The `TimePicker` allows users to select a localized time using touch, mouse, or keyboard input. It consists of two parts: the time input field and the sliders.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/TimePicker" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"TimePicker",props:{valueStateMessage:{defaultValue:null,description:"Defines the value state message that will be displayed as pop up under the `TimePicker`.\n\n**Note:** If not specified, a default text (in the respective language) will be displayed.\n**Note:** The `valueStateMessage` would be displayed, when the `TimePicker` is in `Information`, `Warning` or `Error` value state.\n\n__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot=\"valueStateMessage\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).",name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:'Fired when the input operation has finished by clicking the "OK" button or when the text in the input field has changed and the focus leaves the input field.\n\n__Note:__ This event is NOT the same as the native `onChange` [event of React](https://reactjs.org/docs/dom-elements.html#onchange). If you want to simulate that behavior, please use `onInput` instead.',name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<TimePickerDomRef, TimePickerBaseChangeInputEventDetail>) => void"}},onInput:{defaultValue:null,description:"Fired when the value of the `TimePicker` is changed at each key stroke.",name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<TimePickerDomRef, TimePickerBaseChangeInputEventDetail>) => void"}},formatPattern:{defaultValue:null,description:"Determines the format, displayed in the input field. Example: HH:mm:ss -> 11:42:35 hh:mm:ss a -> 2:23:15 PM mm:ss -> 12:04 (only minutes and seconds)",name:"formatPattern",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:`Defines a short hint, intended to aid the user with data entry when the component has no value.

**Note:** When no placeholder is set, the format pattern is displayed as a placeholder. Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.`,name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Determines whether the `TimePicker` is displayed as disabled.",name:"disabled",required:!1,type:{name:"boolean"}},readonly:{defaultValue:null,description:"Determines whether the `TimePicker` is displayed as readonly.",name:"readonly",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"Defines a formatted time value.",name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:"ValueState.None"},description:"Defines the value state of the `TimePicker`.\n\nAvailable options are:\n\n*   `None`\n*   `Error`\n*   `Warning`\n*   `Success`\n*   `Information`",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Warning"'},{value:'"None"'},{value:'"Error"'},{value:'"Success"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const we=`## Usage

The user can enter a time by:

- Using the sliders that are displayed in a popup
- Typing it in directly in the input field

When the user makes an entry and chooses the enter key, the sliders shows the corresponding time. When the user directly triggers the sliders display, the actual time is displayed. For the \`TimePicker\`

## Formatting

If a time is entered by typing it into the input field, it must fit to the used time format.

Supported format options are pattern-based on Unicode LDML Date Format notation. For more information, see <ui5-link target="_blank" href="http://unicode.org/reports/tr35/#Date_Field_Symbol_Table">UTS #35: Unicode Locale Data Markup Language</ui5-link>.

For example, if the \`format-pattern\` is "HH:mm:ss", a valid value string is "11:42:35" and the same is displayed in the input.

## Keyboard handling

\\[F4\\], \\[ALT\\]+\\[UP\\], \\[ALT\\]+\\[DOWN\\] Open/Close picker dialog and move focus to it.  
When closed:

- \\[PAGEUP\\] - Increments hours by 1. If 12 am is reached, increment hours to 1 pm and vice versa.
- \\[PAGEDOWN\\] - Decrements the corresponding field by 1. If 1 pm is reached, decrement hours to 12 am and vice versa.
- \\[SHIFT\\]+\\[PAGEUP\\] Increments minutes by 1.
- \\[SHIFT\\]+ \\[PAGEDOWN\\] Decrements minutes by 1.
- \\[SHIFT\\]+\\[CTRL\\]+\\[PAGEUP\\] Increments seconds by 1.
- \\[SHIFT\\]+\\[CTRL\\]+ \\[PAGEDOWN\\] Decrements seconds by 1.

When opened:

- \\[UP\\] If focus is on one of the selection lists: Select the value which is above the current value. If the first value is selected, select the last value in the list. Exception: AM/ PM List: stay on the first item.
- \\[DOWN\\] If focus is on one of the selection lists: Select the value which is below the current value. If the last value is selected, select the first value in the list. Exception: AM/ PM List: stay on the last item.
- \\[LEFT\\] If focus is on one of the selection lists: Move focus to the selection list which is left of the current selection list. If focus is at the first selection list, move focus to the last selection list.
- \\[RIGHT\\] If focus is on one of the selection lists: Move focus to the selection list which is right of the current selection list. When focus is at the last selection list, move focus to the first selection list.
- \\[PAGEUP\\] If focus is on one of the selection lists: Move focus to the first entry of this list.
- \\[PAGEDOWN\\] If focus is on one of the selection lists: Move focus to the last entry of this list.
`,Se=[{name:"dateValue",readonly:"true",visibility:"public",type:"Date",description:"Currently selected time represented as JavaScript Date instance"},{name:"closePicker",visibility:"public",description:"Closes the picker"},{name:"formatValue",visibility:"public",returnValue:{type:"string"},parameters:[{name:"date",type:"Date",optional:!1,description:"A Java Script date object to be formatted as string"}],description:"Formats a Java Script date object into a string representing a locale date and time according to the <code>formatPattern</code> property of the TimePicker instance"},{name:"isOpen",visibility:"public",returnValue:{type:"boolean"},description:"Checks if the picker is open"},{name:"isValid",visibility:"public",returnValue:{type:"boolean"},parameters:[{name:"value",type:"string",optional:!1,description:"The value to be tested against the current date format"}],description:`Checks if a value is valid against the current <code>formatPattern</code> value.

<br><br> <b>Note:</b> an empty string is considered as valid value.`},{name:"openPicker",visibility:"public",returnValue:{type:"Promise",description:"Resolves when the picker is open"},description:"Opens the picker."}];function $e(o={}){const{wrapper:e}=Object.assign({},I(),o.components);return e?r.jsx(e,{...o,children:r.jsx(t,{})}):t();function t(){const n=Object.assign({h2:"h2"},I(),o.components);return r.jsxs(r.Fragment,{children:[r.jsx(M,{title:"Inputs / TimePicker",component:p,argTypes:{valueStateMessage:{control:{disable:!0}}},args:{valueState:w.None}}),`
`,r.jsx(he,{since:"0.9.0"}),`
`,r.jsx("br",{}),`
`,r.jsx(n.h2,{id:"example",children:"Example"}),`
`,r.jsx(F,{children:r.jsx(N,{name:"Default",children:s=>r.jsx(p,{...s})})}),`
`,r.jsx(n.h2,{id:"properties",children:"Properties"}),`
`,r.jsx(de,{story:"Default"}),`
`,r.jsx(A,{children:we}),`
`,r.jsx(fe,{rows:Se}),`
`,r.jsx(me,{})]})}}const E=o=>r.jsx(p,{...o});E.storyName="Default";E.parameters={storySource:{source:`args => {
  return <TimePicker {...args} />;
}`}};const y={title:"Inputs / TimePicker",component:p,args:{valueState:w.None},argTypes:{valueStateMessage:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};y.parameters=y.parameters||{};y.parameters.docs={...y.parameters.docs||{},page:$e};const Xt=["defaultStory"];export{Xt as __namedExportsOrder,y as default,E as defaultStory};
//# sourceMappingURL=TimePicker.stories-be959e28.js.map
