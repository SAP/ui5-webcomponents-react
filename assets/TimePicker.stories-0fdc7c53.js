import{M as B,C as E,f as A,a as O}from"./chunk-PCJTTTQV-6266691d.js";import{_ as R}from"./iframe-838ff653.js";import{a as k,U as L,d as U,m as b}from"./UI5Element-d1d93200.js";import{D as S,g as H}from"./Gregorian-6dbeb61b.js";import{e as m,l as i,s as l,a as C,b as F,p as h,c as M,d as W,w as j}from"./withWebComponent-d280b5c2.js";import{I as q,e as T}from"./Icon-c8fd92f0.js";import{s as z}from"./slot-76e48863.js";import{V as g}from"./ValueState-2c5e5904.js";import{f as G}from"./LocaleData-2c683b59.js";import{l as K,k as X,e as J,i as Q,a as Y,_ as Z,V as x,t as ee,$ as te,X as ie,u as ne}from"./Icons-efeb15d5.js";import{T as oe}from"./TimeSelection-6b4baf44.js";import ae from"./ResponsivePopover-f45885b9.js";import{a as re}from"./Input-63631743.js";import{B as se}from"./Button-400e2491.js";import{b3 as le,b4 as ue,bm as pe}from"./i18n-defaults-254d6b69.js";import{s as de}from"./ResponsivePopoverCommon.css-82b1f3cc.js";import{V as w}from"./ValueState-ab6838cc.js";import{d as ce}from"./DomRefTable.module-70e5e95a.js";import{D as me}from"./DocsHeader-da84dd86.js";import{F as he}from"./Footer-3a63cda6.js";import{j as s,a as fe,F as _e}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{D as ve}from"./DomRefTable-811576d2.js";import{u as I}from"./index-4fb8b842.js";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"../sb-preview/runtime.mjs";import"./CustomElementsScopeUtils-137da8c8.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./Integer-f7f172c9.js";import"./Device-208919c6.js";import"./class-map-6d48ebd3.js";import"./navigation-down-arrow-29d16da0.js";import"./ScrollEnablement-4353003c.js";import"./animate-1a16ba20.js";import"./PopupUtils-a92cb9f4.js";import"./getActiveElement-bcae01ed.js";import"./style-map-51d6dd91.js";import"./Popover-4088d87a.js";import"./PopupsCommon.css-1644cafd.js";import"./FocusableElements-8859c874.js";import"./isElementHidden-01c07146.js";import"./AriaLabelHelper-43a261ec.js";import"./BrowserScrollbar.css-ab5bee37.js";import"./ResizeHandler-f4ca1209.js";import"./MediaRange-25b98f31.js";import"./Dialog-c83d8172.js";import"./information-859245b4.js";import"./i18n-defaults-80781f7e.js";import"./Title-6041704e.js";import"./WrappingType-b81e595a.js";import"./decline-41212cdc.js";import"./MarkedEvents-b83081e9.js";import"./Suggestions.css-a2aab2ea.js";import"./ValueStateMessage.css-194378a0.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./index-9ec12ec9.js";import"./index-2bd17005.js";import"./clsx.m-1229b3e0.js";import"./index-479d8097.js";import"./ThemingParameters-f4b4144e.js";import"./Import-d2673faa.js";import"./TableOfContent-9ada2504.js";import"./index-62c74678.js";import"./Link-706be030.js";import"./index-45285c2f.js";import"./Label-e3d88218.js";import"./index-5da71a6d.js";const ge=(t,e,n)=>n?m`<div id="${i(t._id)}" class="ui5-time-picker-root"><${l("ui5-input",e,n)} id="${i(t._id)}-inner" value="${i(t.value)}" placeholder="${i(t._placeholder)}" ?disabled="${t.disabled}" ?readonly="${t.readonly}" value-state="${i(t.valueState)}" ._inputAccInfo="${i(t.accInfo)}" data-sap-focus-ref @click="${t._handleInputClick}" @ui5-change="${i(t._handleInputChange)}" @ui5-input="${i(t._handleInputLiveChange)}" class="ui5-time-picker-input" @keydown="${t._onkeydown}">${t.valueStateMessage.length?D():void 0}${t.readonly?void 0:V(t,e,n)}</${l("ui5-input",e,n)}></div>`:m`<div id="${i(t._id)}" class="ui5-time-picker-root"><ui5-input id="${i(t._id)}-inner" value="${i(t.value)}" placeholder="${i(t._placeholder)}" ?disabled="${t.disabled}" ?readonly="${t.readonly}" value-state="${i(t.valueState)}" ._inputAccInfo="${i(t.accInfo)}" data-sap-focus-ref @click="${t._handleInputClick}" @ui5-change="${i(t._handleInputChange)}" @ui5-input="${i(t._handleInputLiveChange)}" class="ui5-time-picker-input" @keydown="${t._onkeydown}">${t.valueStateMessage.length?D():void 0}${t.readonly?void 0:V(t,e,n)}</ui5-input></div>`,D=(t,e,n)=>m`<slot name="valueStateMessage" slot="valueStateMessage"></slot>`,V=(t,e,n)=>n?m`<${l("ui5-icon",e,n)} slot="icon" name="${i(t.openIconName)}" tabindex="-1" show-tooltip @click="${t.togglePicker}" input-icon ?pressed="${t._isPickerOpen}" class="ui5-time-picker-input-icon-button"></${l("ui5-icon",e,n)}>`:m`<ui5-icon slot="icon" name="${i(t.openIconName)}" tabindex="-1" show-tooltip @click="${t.togglePicker}" input-icon ?pressed="${t._isPickerOpen}" class="ui5-time-picker-input-icon-button"></ui5-icon>`,be=(t,e,n)=>n?m`<${l("ui5-responsive-popover",e,n)} id="${i(t._id)}-responsive-popover" class="ui5-time-picker-popover" placement-type="Bottom" horizontal-align="Left" allow-target-overlap _hide-header hide-arrow @ui5-after-close="${i(t.onResponsivePopoverAfterClose)}" @wheel="${t._handleWheel}" @keydown="${t._onkeydown}"><${l("ui5-time-selection",e,n)} id="${i(t._id)}-time-sel" value="${i(t._timeSelectionValue)}" format-pattern="${i(t._formatPattern)}" .hideHours="${i(t.hideHours)}" .hideMinutes="${i(t.hideMinutes)}" .hideSeconds="${i(t.hideSeconds)}" .minutesStep="${i(t.minutesStep)}" .secondsStep="${i(t.secondsStep)}" .maxHours="${i(t.maxHours)}" .maxMinutes="${i(t.maxMinutes)}" .maxSeconds="${i(t.maxSeconds)}" @ui5-change="${i(t.onTimeSelectionChange)}"></${l("ui5-time-selection",e,n)}><div slot="footer" class="ui5-time-picker-footer" @keydown=${t._onfooterkeydown}><${l("ui5-button",e,n)} id="submit" design="Emphasized" @click="${t.submitPickers}">${i(t.submitButtonLabel)}</${l("ui5-button",e,n)}><${l("ui5-button",e,n)} id="close" design="Transparent" @click="${t.closePicker}">${i(t.cancelButtonLabel)}</${l("ui5-button",e,n)}></div></${l("ui5-responsive-popover",e,n)}>`:m`<ui5-responsive-popover id="${i(t._id)}-responsive-popover" class="ui5-time-picker-popover" placement-type="Bottom" horizontal-align="Left" allow-target-overlap _hide-header hide-arrow @ui5-after-close="${i(t.onResponsivePopoverAfterClose)}" @wheel="${t._handleWheel}" @keydown="${t._onkeydown}"><ui5-time-selection id="${i(t._id)}-time-sel" value="${i(t._timeSelectionValue)}" format-pattern="${i(t._formatPattern)}" .hideHours="${i(t.hideHours)}" .hideMinutes="${i(t.hideMinutes)}" .hideSeconds="${i(t.hideSeconds)}" .minutesStep="${i(t.minutesStep)}" .secondsStep="${i(t.secondsStep)}" .maxHours="${i(t.maxHours)}" .maxMinutes="${i(t.maxMinutes)}" .maxSeconds="${i(t.maxSeconds)}" @ui5-change="${i(t.onTimeSelectionChange)}"></ui5-time-selection><div slot="footer" class="ui5-time-picker-footer" @keydown=${t._onfooterkeydown}><ui5-button id="submit" design="Emphasized" @click="${t.submitPickers}">${i(t.submitButtonLabel)}</ui5-button><ui5-button id="close" design="Transparent" @click="${t.closePicker}">${i(t.cancelButtonLabel)}</ui5-button></div></ui5-responsive-popover>`;k("@ui5/webcomponents-theming","sap_fiori_3",async()=>C);k("@ui5/webcomponents","sap_fiori_3",async()=>F);const ye={packageName:"@ui5/webcomponents",fileName:"themes/TimePicker.css.ts",content:".ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}[input-icon]{color:var(--_ui5_input_icon_color);cursor:pointer;outline:none;padding:var(--_ui5_input_icon_padding);border-inline-start:var(--_ui5_input_icon_border);min-width:1rem;min-height:1rem;border-radius:var(--_ui5_input_icon_border_radius)}[input-icon][pressed]{background:var(--_ui5_input_icon_pressed_bg);box-shadow:var(--_ui5_input_icon_box_shadow);border-inline-start:var(--_ui5_select_hover_icon_left_border);color:var(--_ui5_input_icon_pressed_color)}[input-icon]:active{background-color:var(--sapButton_Active_Background);box-shadow:var(--_ui5_input_icon_box_shadow);border-inline-start:var(--_ui5_select_hover_icon_left_border);color:var(--_ui5_input_icon_pressed_color)}[input-icon]:not([pressed]):not(:active):hover{background:var(--_ui5_input_icon_hover_bg);box-shadow:var(--_ui5_input_icon_box_shadow)}[input-icon]:hover{border-inline-start:var(--_ui5_select_hover_icon_left_border);box-shadow:var(--_ui5_input_icon_box_shadow)}:host(:not([hidden])){display:inline-block;line-height:normal;letter-spacing:normal;word-spacing:normal}:host{min-width:calc(var(--_ui5_input_min_width) + var(--_ui5_input_icon_width));color:var(--sapField_TextColor);background-color:var(--sapField_Background);border-radius:var(--_ui5-time_picker_border_radius)}:host([value-state=Error]){background-color:var(--sapField_InvalidBackground)}:host(:not([disabled]):hover){background:var(--sapField_Hover_Background)}.ui5-time-picker-root{line-height:inherit;letter-spacing:inherit;word-spacing:inherit}:host .ui5-time-picker-input{width:100%;color:inherit;background-color:inherit;line-height:inherit;letter-spacing:inherit;word-spacing:inherit}.ui5-time-picker-input-icon-button{border-left:.0625rem solid transparent}.ui5-time-picker-input-icon-button:hover{cursor:pointer;border-left:var(--_ui5_time_picker_border);background:var(--sapButton_Hover_Background)}.ui5-time-picker-input-icon-button:active{background-color:var(--sapButton_Active_Background);color:var(--sapButton_Active_TextColor)}.ui5-time-picker-input-icon-button[pressed]{background-color:var(--sapButton_Active_Background);color:var(--sapButton_Active_TextColor)}"};k("@ui5/webcomponents-theming","sap_fiori_3",async()=>C);k("@ui5/webcomponents","sap_fiori_3",async()=>F);const ke={packageName:"@ui5/webcomponents",fileName:"themes/TimePickerPopover.css.ts",content:".ui5-time-picker-footer{height:fit-content;display:flex;justify-content:flex-end;width:100%}.ui5-time-picker-footer>[ui5-button]{margin:1%;min-width:20%}.ui5-time-picker-popover::part(content){padding:0}"};var f=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,a=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(u=t[c])&&(a=(r<3?u(a):r>3?u(e,n,a):u(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},v;let p=v=class extends L{static async onDefine(){[v.i18nBundle]=await Promise.all([U("@ui5/webcomponents"),G(b().getLanguage(),b().getRegion(),b().getScript())])}constructor(){super()}get _placeholder(){}get _formatPattern(){}get _effectiveValue(){return this.value}get _timeSelectionValue(){return this.tempValue}onTimeSelectionChange(e){this.tempValue=e.detail.value}submitPickers(){this._updateValueAndFireEvents(this.tempValue,!0,["change","value-changed"]),this.closePicker()}onResponsivePopoverAfterClose(){this._isPickerOpen=!1}async _handleInputClick(){if(this._isPickerOpen)return;const e=await this._getInputField();e&&e.select()}_updateValueAndFireEvents(e,n,o){if(e===this.value)return;const r=this.isValid(e);e!==void 0&&r&&n&&(e=this.normalizeValue(e)),o.includes("input")||(this.value="",this.value=e),this.tempValue=e,this._updateValueState(),o.forEach(a=>{this.fireEvent(a,{value:e,valid:r})})}_updateValueState(){const e=this.isValid(this.value);e?e&&this.valueState===g.Error&&(this.valueState=g.None):this.valueState=g.Error}_handleInputChange(e){const n=e.target;this._updateValueAndFireEvents(n.value,!0,["change","value-changed"])}_handleInputLiveChange(e){const n=e.target;this._updateValueAndFireEvents(n.value,!1,["input"])}async closePicker(){(await this._getPopover()).close(),this._isPickerOpen=!1}async openPicker(){this.tempValue=this.value&&this.isValid(this.value)?this.value:this.getFormat().format(new Date),(await this._getPopover()).showAt(this),this._isPickerOpen=!0}togglePicker(){this.isOpen()?this.closePicker():this._canOpenPicker()&&this.openPicker()}isOpen(){return!!this._isPickerOpen}_canOpenPicker(){return!this.disabled&&!this.readonly}async _getPopover(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-responsive-popover]")}_getInput(){return this.shadowRoot.querySelector("[ui5-input]")}_getInputField(){const e=this._getInput();return e&&e.getInputDOMRef()}_onkeydown(e){K(e)&&(e.preventDefault(),this.togglePicker());const n=e.target;this._getInput().isEqualNode(n)&&this.isOpen()&&(X(e)||J(e)||Q(e)||Y(e))&&this.closePicker(),!this.isOpen()&&(Z(e)?(e.preventDefault(),this._modifyValueBy(1,"second")):x(e)?(e.preventDefault(),this._modifyValueBy(1,"minute")):ee(e)?(e.preventDefault(),this._modifyValueBy(1,"hour")):te(e)?(e.preventDefault(),this._modifyValueBy(-1,"second")):ie(e)?(e.preventDefault(),this._modifyValueBy(-1,"minute")):ne(e)&&(e.preventDefault(),this._modifyValueBy(-1,"hour")))}get _isPattern(){return this._formatPattern!=="medium"&&this._formatPattern!=="short"&&this._formatPattern!=="long"}getFormat(){let e;return this._isPattern?e=S.getDateInstance({pattern:this._formatPattern}):e=S.getDateInstance({style:this._formatPattern}),e}formatValue(e){return this.getFormat().format(e)}isValid(e){return e===""?!0:!!this.getFormat().parse(e,void 0,void 0)}normalizeValue(e){return e===""?e:this.getFormat().format(this.getFormat().parse(e,void 0,void 0))}_modifyValueBy(e,n){const o=this.getFormat().parse(this._effectiveValue,void 0,void 0);if(!o)return;n==="hour"?o.setHours(o.getHours()+e):n==="minute"?o.setMinutes(o.getMinutes()+e):n==="second"&&o.setSeconds(o.getSeconds()+e);const r=this.formatValue(o);this._updateValueAndFireEvents(r,!0,["change","value-changed"])}_handleWheel(e){e.preventDefault()}get submitButtonLabel(){return v.i18nBundle.getText(le)}get cancelButtonLabel(){return v.i18nBundle.getText(ue)}get openIconName(){return"time-entry-request"}};f([h({defaultValue:void 0})],p.prototype,"value",void 0);f([h({type:g,defaultValue:g.None})],p.prototype,"valueState",void 0);f([h({type:Boolean})],p.prototype,"disabled",void 0);f([h({type:Boolean})],p.prototype,"readonly",void 0);f([h({type:Boolean,noAttribute:!0})],p.prototype,"_isPickerOpen",void 0);f([z()],p.prototype,"valueStateMessage",void 0);p=v=f([M({languageAware:!0,renderer:W,template:ge,styles:ye,staticAreaTemplate:be,staticAreaStyles:[de,ke],dependencies:[q,ae,oe,re,se]}),T("change",{detail:{value:{type:String},valid:{type:Boolean}}}),T("input",{detail:{value:{type:String},valid:{type:Boolean}}})],p);const Pe=p;var $=globalThis&&globalThis.__decorate||function(t,e,n,o){var r=arguments.length,a=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(u=t[c])&&(a=(r<3?u(a):r>3?u(e,n,a):u(e,n))||a);return r>3&&a&&Object.defineProperty(e,n,a),a},P;let _=P=class extends Pe{get _formatPattern(){const e=!!this.formatPattern.match(/H/i),n=!this.formatPattern||!e,o=H(b());return n?o.getTimePattern("medium"):this.formatPattern}get _displayFormat(){return this.getFormat().oFormatOptions.pattern}get _placeholder(){return this.placeholder!==void 0?this.placeholder:this._displayFormat}get dateValue(){return this.getFormat().parse(this._effectiveValue,void 0,void 0)}get accInfo(){return{ariaRoledescription:this.dateAriaDescription,ariaHasPopup:"dialog",ariaAutoComplete:"none",ariaControls:`${this._id}-responsive-popover`}}get dateAriaDescription(){return P.i18nBundle.getText(pe)}};$([h({defaultValue:void 0})],_.prototype,"placeholder",void 0);$([h()],_.prototype,"formatPattern",void 0);_=P=$([M("ui5-time-picker")],_);_.define();const we=_,$e=Object.freeze(Object.defineProperty({__proto__:null,default:we},Symbol.toStringTag,{value:"Module"})),d=j("ui5-time-picker",["formatPattern","placeholder","value","valueState"],["disabled","readonly"],["valueStateMessage"],["change","input"],()=>R(()=>Promise.resolve().then(()=>$e),void 0,import.meta.url));d.displayName="TimePicker";d.defaultProps={valueState:w.None};try{d.displayName="TimePicker",d.__docgenInfo={description:'The `TimePicker` component provides an input field with assigned sliders which are opened on user action. The `TimePicker` allows users to select a localized time using touch, mouse, or keyboard input. It consists of two parts: the time input field and the sliders.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/TimePicker" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"TimePicker",props:{valueStateMessage:{defaultValue:null,description:"Defines the value state message that will be displayed as pop up under the `TimePicker`.\n\n**Note:** If not specified, a default text (in the respective language) will be displayed.\n**Note:** The `valueStateMessage` would be displayed, when the `TimePicker` is in `Information`, `Warning` or `Error` value state.\n\n__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (`slot=\"valueStateMessage\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--page).",name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:'Fired when the input operation has finished by clicking the "OK" button or when the text in the input field has changed and the focus leaves the input field.\n\n__Note:__ This event is NOT the same as the native `onChange` [event of React](https://reactjs.org/docs/dom-elements.html#onchange). If you want to simulate that behavior, please use `onInput` instead.',name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<TimePickerDomRef, { value: string; valid: boolean; }>) => void"}},onInput:{defaultValue:null,description:"Fired when the value of the `TimePicker` is changed at each key stroke.",name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<TimePickerDomRef, { value: string; valid: boolean; }>) => void"}},formatPattern:{defaultValue:null,description:"Determines the format, displayed in the input field. Example: HH:mm:ss -> 11:42:35 hh:mm:ss a -> 2:23:15 PM mm:ss -> 12:04 (only minutes and seconds)",name:"formatPattern",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:`Defines a short hint, intended to aid the user with data entry when the component has no value.

**Note:** When no placeholder is set, the format pattern is displayed as a placeholder. Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.`,name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Determines whether the `TimePicker` is displayed as disabled.",name:"disabled",required:!1,type:{name:"boolean"}},readonly:{defaultValue:null,description:"Determines whether the `TimePicker` is displayed as readonly.",name:"readonly",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"Defines a formatted time value.",name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:"ValueState.None"},description:"Defines the value state of the `TimePicker`.\n\nAvailable options are:\n\n*   `None`\n*   `Error`\n*   `Warning`\n*   `Success`\n*   `Information`",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Error"'},{value:'"Information"'},{value:'"Warning"'},{value:'"Success"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const Se=`## Usage

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
`,Te=[{name:"dateValue",readonly:"true",visibility:"public",type:"Date",description:"Currently selected time represented as JavaScript Date instance"},{name:"closePicker",visibility:"public",description:"Closes the picker"},{name:"formatValue",visibility:"public",returnValue:{type:"string"},parameters:[{name:"date",type:"Date",optional:!1,description:"A Java Script date object to be formatted as string"}],description:"Formats a Java Script date object into a string representing a locale date and time according to the <code>formatPattern</code> property of the TimePicker instance"},{name:"isOpen",visibility:"public",returnValue:{type:"boolean"},description:"Checks if the picker is open"},{name:"isValid",visibility:"public",returnValue:{type:"boolean"},parameters:[{name:"value",type:"string",optional:!1,description:"The value to be tested against the current date format"}],description:`Checks if a value is valid against the current <code>formatPattern</code> value.

<br><br> <b>Note:</b> an empty string is considered as valid value.`},{name:"openPicker",visibility:"public",returnValue:{type:"Promise",description:"Resolves when the picker is open"},description:"Opens the picker."}];function Ie(t={}){const{wrapper:e}=Object.assign({},I(),t.components);return e?s(e,{...t,children:s(n,{})}):n();function n(){const o=Object.assign({h2:"h2"},I(),t.components);return fe(_e,{children:[s(B,{title:"Inputs / TimePicker",component:d,argTypes:{valueStateMessage:{control:{disable:!0}}},args:{valueState:w.None}}),`
`,s(me,{since:"0.9.0"}),`
`,s("br",{}),`
`,s(o.h2,{id:"example",children:"Example"}),`
`,s(E,{children:s(A,{name:"Default",children:r=>s(d,{...r})})}),`
`,s(o.h2,{id:"properties",children:"Properties"}),`
`,s(ce,{story:"Default"}),`
`,s(O,{children:Se}),`
`,s(ve,{rows:Te}),`
`,s(he,{})]})}}const N=t=>s(d,{...t});N.storyName="Default";N.parameters={storySource:{source:`args => {
  return <TimePicker {...args} />;
}`}};const y={title:"Inputs / TimePicker",component:d,args:{valueState:w.None},argTypes:{valueStateMessage:{control:{disable:!0}}},tags:["stories-mdx"],includeStories:["defaultStory"]};y.parameters=y.parameters||{};y.parameters.docs={...y.parameters.docs||{},page:Ie};const ti=["defaultStory"];export{ti as __namedExportsOrder,y as default,N as defaultStory};
//# sourceMappingURL=TimePicker.stories-0fdc7c53.js.map
