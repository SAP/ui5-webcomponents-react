import{V as W}from"./ValueState-I_-hGNIb.js";import{_ as j}from"./iframe-79yzDAC3.js";import{d as G,g as P}from"./i18nBundle-YDapVb1x.js";import{D as V,g as K}from"./Gregorian-lvQnHooV.js";import{a as u,l as n,b as a,s as w,p as h,c as T,f as H,w as Z}from"./withWebComponent--kEkWNJH.js";import{h as Q,r as v,U as J,j as X}from"./UI5Element-_cJDeK03.js";import{e as A}from"./event-lM5HanI-.js";import{s as Y}from"./slot-HSrR9XJ-.js";import{V as b}from"./ValueState-zUcANXoY.js";import{f as ee}from"./LocaleData-MhxEtp-s.js";import{m as te,R as ie,H as ne,k as oe,l as se,K as re,L as ae,M as ue,o as pe,h as le,N as ce,q as he,j as de}from"./Keys-Mzj2D4aO.js";import{r as L}from"./Icons-dG5I7pqk.js";import{c as k,I as me}from"./Icon-1HyKfQwB.js";import{s as _e,c as ve}from"./Popover-4Jmhfo0j.js";import fe from"./ResponsivePopover-7rT711MV.js";import{a as x,I as ge}from"./Input-ZG-LxKhF.js";import{b as be}from"./Button-Q_btruTx.js";import{a as y,T as ye}from"./TimeSelectionClocks-zm16zy6s.js";import{I as Pe}from"./Integer-kog98579.js";import{S as Ie}from"./SegmentedButton-oE8m8fAs.js";import{bg as ke,bh as $e,bi as we,aP as Te,aQ as Se,bj as Ce}from"./i18n-defaults-3YbdkqSs.js";import{s as S}from"./parameters-bundle.css-mPCp9TQx.js";import{s as De}from"./ResponsivePopoverCommon.css-47kyCt3t.js";const Ve="time-entry-request",z="M416 272q0 16-16 16H224V144q0-16 16-16t16 16v112h144q16 0 16 16zM256 0q53 0 99.5 20T437 75t55 81.5 20 99.5q0 49-17.5 92.5T447 426t-71 56-88 28v-32q40-6 75.5-25.5t61-49T465 336t15-80q0-46-17.5-87t-48-71.5-71.5-48T256 32q-38 0-72.5 12T121 77.5t-49 51T41 192H8q11-41 34.5-76.5t56-61 72.5-40T256 0zM144 480q16 0 16 16 0 6-4.5 11t-11.5 5H16q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h128zm0-64q16 0 16 16 0 6-4.5 11t-11.5 5H16q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h128zm0-64q16 0 16 16 0 6-4.5 11t-11.5 5H16q-6 0-11-5t-5-11q0-7 5-11.5t11-4.5h128z",Ae=!1,Ne="SAP-icons-v4",Be="@ui5/webcomponents-icons";L(Ve,{pathData:z,ltr:Ae,collection:Ne,packageName:Be});const Ee="time-entry-request",U="M262 461q11 0 18.5 7t7.5 18-7.5 18.5T262 512h-6q-53 0-99.5-20T75 437t-55-81.5T0 256t20-99.5T75 75t81.5-55T256 0q44 0 84 14t73 39 56.5 59.5T503 188q2 5 2 6.5v3.5q0 11-7.5 18.5T479 224q-8 0-15.5-5.5T454 205q-9-34-27.5-62.5t-45-48.5T323 62.5 256 51q-42 0-79.5 16T111 111t-44 65.5T51 256t16 79.5 44 65.5 65.5 44 79.5 16h6zm0-365q11 0 18.5 7.5T288 122v131q0 8-5 15l-77 105q-8 11-20 11-11 0-18.5-7.5T160 358q0-7 5-15l72-98V122q0-11 7-18.5t18-7.5zm224 192q11 0 18.5 7.5T512 314t-7.5 18-18.5 7H378q-11 0-18.5-7t-7.5-18 7.5-18.5T378 288h108zm0 86q11 0 18.5 7.5T512 400t-7.5 18.5T486 426H378q-11 0-18.5-7.5T352 400t7.5-18.5T378 374h108zm0 87q11 0 18.5 7t7.5 18-7.5 18.5T486 512H378q-11 0-18.5-7.5T352 486t7.5-18 18.5-7h108z",Oe=!1,qe="SAP-icons-v5",Fe="@ui5/webcomponents-icons";L(Ee,{pathData:U,ltr:Oe,collection:qe,packageName:Fe});Q();function Me(s,e,t){return t?u`<div id="${n(this._id)}" class="ui5-time-picker-root"><${a("ui5-input",e,t)} id="${n(this._id)}-inner" value="${n(this.value)}" placeholder="${n(this._placeholder)}" ?disabled="${this.disabled}" ?readonly="${this.readonly}" value-state="${n(this.valueState)}" ._inputAccInfo="${n(this.accInfo)}" data-sap-focus-ref @click="${this._handleInputClick}" @ui5-change="${n(this._handleInputChange)}" @ui5-input="${n(this._handleInputLiveChange)}" @focusin="${this._onfocusin}" @input="${this._oninput}" class="ui5-time-picker-input" @keydown="${this._onkeydown}">${this.valueStateMessage.length?N.call(this,s,e,t):void 0}${this.readonly?void 0:B.call(this,s,e,t)}</${a("ui5-input",e,t)}></div>`:u`<div id="${n(this._id)}" class="ui5-time-picker-root"><ui5-input id="${n(this._id)}-inner" value="${n(this.value)}" placeholder="${n(this._placeholder)}" ?disabled="${this.disabled}" ?readonly="${this.readonly}" value-state="${n(this.valueState)}" ._inputAccInfo="${n(this.accInfo)}" data-sap-focus-ref @click="${this._handleInputClick}" @ui5-change="${n(this._handleInputChange)}" @ui5-input="${n(this._handleInputLiveChange)}" @focusin="${this._onfocusin}" @input="${this._oninput}" class="ui5-time-picker-input" @keydown="${this._onkeydown}">${this.valueStateMessage.length?N.call(this,s,e,t):void 0}${this.readonly?void 0:B.call(this,s,e,t)}</ui5-input></div>`}function N(s,e,t){return u`<slot name="valueStateMessage" slot="valueStateMessage"></slot>`}function B(s,e,t){return t?u`<${a("ui5-icon",e,t)} slot="icon" name="${n(this.openIconName)}" tabindex="-1" show-tooltip @click="${this.togglePicker}" input-icon ?pressed="${this._isPickerOpen}" class="ui5-time-picker-input-icon-button"></${a("ui5-icon",e,t)}>`:u`<ui5-icon slot="icon" name="${n(this.openIconName)}" tabindex="-1" show-tooltip @click="${this.togglePicker}" input-icon ?pressed="${this._isPickerOpen}" class="ui5-time-picker-input-icon-button"></ui5-icon>`}function Re(s,e,t){return t?u`<${a("ui5-responsive-popover",e,t)} id="${n(this._id)}-responsive-popover" class="ui5-time-picker-popover" placement-type="Bottom" horizontal-align="Left" allow-target-overlap _hide-header hide-arrow @ui5-after-open="${n(this.onResponsivePopoverAfterOpen)}" @ui5-after-close="${n(this.onResponsivePopoverAfterClose)}" @wheel="${this._handleWheel}" @keydown="${this._onkeydown}"><${a("ui5-time-selection-clocks",e,t)} id="${n(this._id)}-time-sel" value="${n(this._timeSelectionValue)}" format-pattern="${n(this._formatPattern)}" @ui5-change="${n(this.onTimeSelectionChange)}" @close-picker="${this.submitPickers}"></${a("ui5-time-selection-clocks",e,t)}><div slot="footer" class="ui5-time-picker-footer" @keydown=${this._onfooterkeydown}><${a("ui5-button",e,t)} id="submit" design="Emphasized" @click="${this.submitPickers}">${n(this.submitButtonLabel)}</${a("ui5-button",e,t)}><${a("ui5-button",e,t)} id="close" design="Transparent" @click="${this.closePicker}">${n(this.cancelButtonLabel)}</${a("ui5-button",e,t)}></div></${a("ui5-responsive-popover",e,t)}>${this._isPhone?E.call(this,s,e,t):void 0}`:u`<ui5-responsive-popover id="${n(this._id)}-responsive-popover" class="ui5-time-picker-popover" placement-type="Bottom" horizontal-align="Left" allow-target-overlap _hide-header hide-arrow @ui5-after-open="${n(this.onResponsivePopoverAfterOpen)}" @ui5-after-close="${n(this.onResponsivePopoverAfterClose)}" @wheel="${this._handleWheel}" @keydown="${this._onkeydown}"><ui5-time-selection-clocks id="${n(this._id)}-time-sel" value="${n(this._timeSelectionValue)}" format-pattern="${n(this._formatPattern)}" @ui5-change="${n(this.onTimeSelectionChange)}" @close-picker="${this.submitPickers}"></ui5-time-selection-clocks><div slot="footer" class="ui5-time-picker-footer" @keydown=${this._onfooterkeydown}><ui5-button id="submit" design="Emphasized" @click="${this.submitPickers}">${n(this.submitButtonLabel)}</ui5-button><ui5-button id="close" design="Transparent" @click="${this.closePicker}">${n(this.cancelButtonLabel)}</ui5-button></div></ui5-responsive-popover>${this._isPhone?E.call(this,s,e,t):void 0}`}function E(s,e,t){return t?u`<${a("ui5-popover",e,t)} id="${n(this._id)}-popover" class="ui5-time-picker-inputs-popover" placement-type="Bottom" horizontal-align="Left" allow-target-overlap _hide-header hide-arrow @ui5-after-open="${n(this.onInputsPopoverAfterOpen)}" @ui5-after-close="${n(this.onInputsPopoverAfterClose)}" @wheel="${this._handleWheel}" @keydown="${this._onkeydown}"><div class="popover-content"><${a("ui5-time-selection-inputs",e,t)} id="${n(this._id)}-time-sel-inputs" value="${n(this._timeSelectionValue)}" format-pattern="${n(this._formatPattern)}" @ui5-change="${n(this.onTimeSelectionChange)}" @close-inputs="${this.submitInputsPopover}"></${a("ui5-time-selection-inputs",e,t)}></div><div slot="footer" class="ui5-time-picker-footer" @keydown=${this._onfooterkeydown}><${a("ui5-button",e,t)} id="submitInputs" design="Emphasized" @click="${this.submitInputsPopover}">${n(this.submitButtonLabel)}</${a("ui5-button",e,t)}><${a("ui5-button",e,t)} id="closeInputs" design="Transparent" @click="${this.closeInputsPopover}">${n(this.cancelButtonLabel)}</${a("ui5-button",e,t)}></div></${a("ui5-popover",e,t)}>`:u`<ui5-popover id="${n(this._id)}-popover" class="ui5-time-picker-inputs-popover" placement-type="Bottom" horizontal-align="Left" allow-target-overlap _hide-header hide-arrow @ui5-after-open="${n(this.onInputsPopoverAfterOpen)}" @ui5-after-close="${n(this.onInputsPopoverAfterClose)}" @wheel="${this._handleWheel}" @keydown="${this._onkeydown}"><div class="popover-content"><ui5-time-selection-inputs id="${n(this._id)}-time-sel-inputs" value="${n(this._timeSelectionValue)}" format-pattern="${n(this._formatPattern)}" @ui5-change="${n(this.onTimeSelectionChange)}" @close-inputs="${this.submitInputsPopover}"></ui5-time-selection-inputs></div><div slot="footer" class="ui5-time-picker-footer" @keydown=${this._onfooterkeydown}><ui5-button id="submitInputs" design="Emphasized" @click="${this.submitInputsPopover}">${n(this.submitButtonLabel)}</ui5-button><ui5-button id="closeInputs" design="Transparent" @click="${this.closeInputsPopover}">${n(this.cancelButtonLabel)}</ui5-button></div></ui5-popover>`}function He(s,e,t){return u`<div class="ui5-time-selection-inputs" @keydown="${this._onkeydown}">${k(this._entities,(i,o)=>i._id||o,(i,o)=>Le.call(this,s,e,t,i,o))}${this._periods.length?xe.call(this,s,e,t):void 0}</div>`}function Le(s,e,t,i,o){return t?u`${i.hasSeparator?O.call(this,s,e,t,i,o):void 0}<${a("ui5-input",e,t)} id="${n(this._id)}_input_${n(i.entity)}" data-sap-input="${n(i.entity)}" type="${n(this._numberType)}" maxlength="2" autocomplete="off" pattern="[0-9]*" inputmode="numeric" class="ui5-time-selection-numeric-input" .value="${n(i.stringValue)}" .accessibleName="${n(i.label)}" ._nativeInputAttributes=${n(i.attributes)} @focusin=${this._onfocusin} @focusout=${this._onfocusout} @ui5-input=${n(this._oninput)}></${a("ui5-input",e,t)}>`:u`${i.hasSeparator?O.call(this,s,e,t,i,o):void 0}<ui5-input id="${n(this._id)}_input_${n(i.entity)}" data-sap-input="${n(i.entity)}" type="${n(this._numberType)}" maxlength="2" autocomplete="off" pattern="[0-9]*" inputmode="numeric" class="ui5-time-selection-numeric-input" .value="${n(i.stringValue)}" .accessibleName="${n(i.label)}" ._nativeInputAttributes=${n(i.attributes)} @focusin=${this._onfocusin} @focusout=${this._onfocusout} @ui5-input=${n(this._oninput)}></ui5-input>`}function O(s,e,t,i,o){return u`<span separator>:</span>`}function xe(s,e,t){return t?u`<span separator></span><${a("ui5-segmented-button",e,t)} id="${n(this._id)}_AmPm" @click=${this._periodChange}>${k(this._periods,(i,o)=>i._id||o,(i,o)=>q.call(this,s,e,t,i,o))}</${a("ui5-segmented-button",e,t)}>`:u`<span separator></span><ui5-segmented-button id="${n(this._id)}_AmPm" @click=${this._periodChange}>${k(this._periods,(i,o)=>i._id||o,(i,o)=>q.call(this,s,e,t,i,o))}</ui5-segmented-button>`}function q(s,e,t,i,o){return t?u`<${a("ui5-segmented-button-item",e,t)} ?pressed=${i.pressed}>${n(i.label)}</${a("ui5-segmented-button-item",e,t)}>`:u`<ui5-segmented-button-item ?pressed=${i.pressed}>${n(i.label)}</ui5-segmented-button-item>`}v("@ui5/webcomponents-theming","sap_horizon",async()=>w);v("@ui5/webcomponents","sap_horizon",async()=>S);const ze={packageName:"@ui5/webcomponents",fileName:"themes/TimeSelectionInputs.css.ts",content:`.ui5-time-selection-numeric-input{width:2.875rem;text-align:center}.ui5-time-selection-inputs{min-width:12.5rem;display:flex;justify-content:center;align-items:center}span[separator]{display:inline-block;min-width:.5rem;padding:0 .125rem;text-align:center;font-family:var(--sapFontFamily);font-size:var(--sapFontSize);color:var(--sapTextColor)}.ui5-hidden-text{display:none}
`};var C=function(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var l=s.length-1;l>=0;l--)(p=s[l])&&(r=(o<3?p(r):o>3?p(e,t,r):p(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r};let m=class extends y{get enterHoursLabel(){return y.i18nBundle.getText(ke)}get enterMinutesLabel(){return y.i18nBundle.getText($e)}get enterSecondsLabel(){return y.i18nBundle.getText(we)}get _numberType(){return ge.Number}get _isHoursInput(){const e=this._componentKey("hours");return this._componentMap[e]===this._activeIndex}get _is24HoursFormat(){return this.formatPattern.indexOf("HH")!==-1||this.formatPattern.indexOf("H")!==-1}onBeforeRendering(){this._createComponents()}_addNumericAttributes(){this._entities.forEach((e,t)=>{const i=this._inputComponent(t);if(i){const o=this._innerInput(i);o.setAttribute("autocomplete","off"),o.setAttribute("pattern","[0-9]*"),o.setAttribute("inputmode","numeric")}})}_inputComponent(e){var o;const t=typeof e=="string"?this._indexFromName(e):e,i=this._entities[t].entity;return i?(o=this.shadowRoot)==null?void 0:o.querySelector(`#${this._id}_input_${i}`):void 0}_innerInput(e){return e&&e.getInputDOMRefSync()}_createComponents(){let e;this._entities=[],this._periods=[],this._componentMap={hours:-1,minutes:-1,seconds:-1},this._hasHoursComponent&&(this._componentMap.hours=this._entities.length,e=parseInt(this._hours),this._entities.push({entity:"hours",label:this.enterHoursLabel,value:e,stringValue:this._editedInput===this._entities.length?this._editedInputValue:this._formatNumberToString(e,this._zeroPaddedHours),hasSeparator:this._entities.length>0,prependZero:this._zeroPaddedHours,attributes:{min:this._hoursConfiguration.minHour,max:this._hoursConfiguration.maxHour,step:1}})),this._hasMinutesComponent&&(this._componentMap.minutes=this._entities.length,e=parseInt(this._minutes),this._entities.push({entity:"minutes",label:this.enterMinutesLabel,value:e,stringValue:this._editedInput===this._entities.length?this._editedInputValue:this._formatNumberToString(e,!0),hasSeparator:this._entities.length>0,prependZero:!0,attributes:{min:0,max:59,step:1}})),this._hasSecondsComponent&&(this._componentMap.seconds=this._entities.length,e=parseInt(this._seconds),this._entities.push({entity:"seconds",label:this.enterSecondsLabel,value:e,stringValue:this._editedInput===this._entities.length?this._editedInputValue:this._formatNumberToString(e,!0),hasSeparator:this._entities.length>0,prependZero:!0,attributes:{min:0,max:59,step:1}})),this._createPeriodComponent()}_switchInput(e){e>=this._entities.length&&(e=0),this._inputComponent(e).focus()}_switchNextInput(e=!1){let t=this._activeIndex;const i=t;if(this._entities.length){do t++,t>=this._entities.length&&(t=e?0:this._entities.length-1);while(this._inputComponent(t).disabled&&t!==i&&(e||t<this._entities.length));t!==i&&!this._inputComponent(t).disabled&&this._switchInput(t)}}_formatNumberToString(e,t){return e<10&&t?`0${e}`:e.toString()}_onkeydown(e){if(this._activeIndex!==-1){if(te(e))this.fireEvent("close-inputs");else if(ie(e)&&this._entities[this._activeIndex]){const t=e.key,i=this._keyboardBuffer+t,o=parseInt(i);e.preventDefault(),this._resetCooldown(!0),o>this._entities[this._activeIndex].attributes.max?(this._inputChange(parseInt(this._keyboardBuffer)),this._switchNextInput(),this._keyboardBuffer=t,this._inputChange(parseInt(t)),this._resetCooldown(!0)):(this._keyboardBuffer=i,this._inputChange(parseInt(this._keyboardBuffer)),(this._keyboardBuffer.length===2||parseInt(`${this._keyboardBuffer}0`)>this._entities[this._activeIndex].attributes.max)&&(this._resetCooldown(this._keyboardBuffer.length!==2),this._keyboardBuffer="",this._switchNextInput()))}}}_inputChange(e){const t=this._formatNumberToString(e,this._entities[this._activeIndex].prependZero);if(this._activeIndex!==-1)switch(e=parseInt(t),this._entities[this._activeIndex].value=e,this._inputComponent(this._activeIndex).value=this._formatNumberToString(e,this._entities[this._activeIndex].prependZero),this._activeIndex){case this._componentMap.hours:this._hoursChange(e);break;case this._componentMap.minutes:this._minutesChange(e);break;case this._componentMap.seconds:this._secondsChange(e);break}}_onfocusin(e){const t=e.target,i=this._innerInput(t);this._editedInput=-1,i.select(),this._activeIndex=this._getIndexFromId(t.id)}_onfocusout(){let e=this._inputComponent(this._activeIndex).value===""?0:this._entities[this._activeIndex].value;this._editedInput=-1,this._isHoursInput&&!this._is24HoursFormat&&e===0&&(e=12),this._inputChange(e),this._activeIndex=-1}_oninput(){const e=this._inputComponent(this._activeIndex).value,t=e===""?0:parseInt(e);t!==this._entities[this._activeIndex].value&&(this._editedInput=this._activeIndex,this._editedInputValue=e,this._inputChange(t),this._keyboardBuffer=e)}};C([h({validator:Pe,defaultValue:-1})],m.prototype,"_editedInput",void 0);C([h()],m.prototype,"_editedInputValue",void 0);m=C([T({tag:"ui5-time-selection-inputs",renderer:H,styles:ze,template:He,dependencies:[x,Ie]})],m);m.define();const Ue=m;v("@ui5/webcomponents-theming","sap_horizon",async()=>w);v("@ui5/webcomponents","sap_horizon",async()=>S);const We={packageName:"@ui5/webcomponents",fileName:"themes/TimePicker.css.ts",content:`:host{vertical-align:middle}.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}[input-icon]{color:var(--_ui5-v1-22-0-rc-3_input_icon_color);cursor:pointer;outline:none;padding:var(--_ui5-v1-22-0-rc-3_input_icon_padding);border-inline-start:var(--_ui5-v1-22-0-rc-3_input_icon_border);min-width:1rem;min-height:1rem;border-radius:var(--_ui5-v1-22-0-rc-3_input_icon_border_radius)}[input-icon][pressed]{background:var(--_ui5-v1-22-0-rc-3_input_icon_pressed_bg);box-shadow:var(--_ui5-v1-22-0-rc-3_input_icon_box_shadow);border-inline-start:var(--_ui5-v1-22-0-rc-3_select_hover_icon_left_border);color:var(--_ui5-v1-22-0-rc-3_input_icon_pressed_color)}[input-icon]:active{background-color:var(--sapButton_Active_Background);box-shadow:var(--_ui5-v1-22-0-rc-3_input_icon_box_shadow);border-inline-start:var(--_ui5-v1-22-0-rc-3_select_hover_icon_left_border);color:var(--_ui5-v1-22-0-rc-3_input_icon_pressed_color)}[input-icon]:not([pressed]):not(:active):hover{background:var(--_ui5-v1-22-0-rc-3_input_icon_hover_bg);box-shadow:var(--_ui5-v1-22-0-rc-3_input_icon_box_shadow)}[input-icon]:hover{border-inline-start:var(--_ui5-v1-22-0-rc-3_select_hover_icon_left_border);box-shadow:var(--_ui5-v1-22-0-rc-3_input_icon_box_shadow)}:host(:not([hidden])){display:inline-block;line-height:normal;letter-spacing:normal;word-spacing:normal}:host{min-width:calc(var(--_ui5-v1-22-0-rc-3_input_min_width) + var(--_ui5-v1-22-0-rc-3_input_icon_width));color:var(--sapField_TextColor);background-color:var(--sapField_Background);border-radius:var(--_ui5-v1-22-0-rc-3-time_picker_border_radius);margin:var(--_ui5-v1-22-0-rc-3_input_margin_top_bottom) 0}:host([value-state="Error"]){background-color:var(--sapField_InvalidBackground)}:host(:not([disabled]):hover){background:var(--sapField_Hover_Background)}.ui5-time-picker-root{line-height:inherit;letter-spacing:inherit;word-spacing:inherit}:host .ui5-time-picker-input{width:100%;color:inherit;background-color:inherit;line-height:inherit;letter-spacing:inherit;word-spacing:inherit;margin:inherit}.ui5-time-picker-input-icon-button{border-left:.0625rem solid transparent}.ui5-time-picker-input-icon-button:hover{cursor:pointer;border-left:var(--_ui5-v1-22-0-rc-3_time_picker_border);background:var(--sapButton_Hover_Background)}.ui5-time-picker-input-icon-button:active,.ui5-time-picker-input-icon-button[pressed]{background-color:var(--sapButton_Active_Background);color:var(--sapButton_Active_TextColor)}
`};v("@ui5/webcomponents-theming","sap_horizon",async()=>w);v("@ui5/webcomponents","sap_horizon",async()=>S);const je={packageName:"@ui5/webcomponents",fileName:"themes/TimePickerPopover.css.ts",content:`.ui5-time-picker-popover{width:20rem}.ui5-time-picker-footer{height:fit-content;display:flex;justify-content:flex-end;width:100%}.ui5-time-picker-footer>[ui5-button]{margin:1%;min-width:20%}.ui5-time-picker-popover::part(content){padding:0}
`};var d=function(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var l=s.length-1;l>=0;l--)(p=s[l])&&(r=(o<3?p(r):o>3?p(e,t,r):p(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r},f;let c=f=class extends J{static async onDefine(){[f.i18nBundle]=await Promise.all([G("@ui5/webcomponents"),ee(P().getLanguage(),P().getRegion(),P().getScript())])}constructor(){super()}get _placeholder(){}get _formatPattern(){}get _effectiveValue(){return this.value}get _timeSelectionValue(){return this.tempValue}get _isPhone(){return X()}onTimeSelectionChange(e){this.tempValue=e.detail.value}async openPicker(){this.tempValue=this.value&&this.isValid(this.value)?this.value:this.getFormat().format(new Date),(await this._getPopover()).showAt(this)}async closePicker(){(await this._getPopover()).close(),this._isPickerOpen=!1}togglePicker(){this.isOpen()?this.closePicker():this._canOpenPicker()&&this.openPicker()}isOpen(){return!!this._isPickerOpen}submitPickers(){this._updateValueAndFireEvents(this.tempValue,!0,["change","value-changed"]),this.closePicker()}onResponsivePopoverAfterClose(){this._isPickerOpen=!1}async onResponsivePopoverAfterOpen(){this._isPickerOpen=!0,(await this._getPopover()).querySelector("[ui5-time-selection-clocks]")._focusFirstButton()}async openInputsPopover(){this.tempValue=this.value&&this.isValid(this.value)?this.value:this.getFormat().format(new Date),(await this._getInputsPopover()).showAt(this),this._isInputsPopoverOpen=!0}async closeInputsPopover(){(await this._getInputsPopover()).close()}toggleInputsPopover(){this.isInputsPopoverOpen()?this.closeInputsPopover():this._canOpenInputsPopover()&&this.openInputsPopover()}isInputsPopoverOpen(){return!!this._isInputsPopoverOpen}submitInputsPopover(){this._updateValueAndFireEvents(this.tempValue,!0,["change","value-changed"]),this.closeInputsPopover()}async onInputsPopoverAfterOpen(){(await this._getInputsPopover()).querySelector("[ui5-time-selection-inputs]")._addNumericAttributes()}onInputsPopoverAfterClose(){this._isInputsPopoverOpen=!1}async _handleInputClick(e){const t=e.target;if(this._isPickerOpen)return;this._isPhone&&t&&!t.hasAttribute("ui5-icon")&&this.toggleInputsPopover();const i=await this._getInputField();i&&i.select()}_updateValueAndFireEvents(e,t,i){if(e===this.value)return;const o=this.isValid(e);e!==void 0&&o&&t&&(e=this.normalizeValue(e)),i.includes("input")||(this.value="",this.value=e),this.tempValue=e,this._updateValueState(),i.forEach(r=>{this.fireEvent(r,{value:e,valid:o})})}_updateValueState(){const e=this.isValid(this.value);e?e&&this.valueState===b.Error&&(this.valueState=b.None):this.valueState=b.Error}_handleInputChange(e){const t=e.target;this._updateValueAndFireEvents(t.value,!0,["change","value-changed"])}_handleInputLiveChange(e){const t=e.target;this._updateValueAndFireEvents(t.value,!1,["input"])}_canOpenPicker(){return!this.disabled&&!this.readonly}_canOpenInputsPopover(){return!this.disabled&&this._isPhone}async _getPopover(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-responsive-popover]")}async _getInputsPopover(){return(await this.getStaticAreaItemDomRef()).querySelector("[ui5-popover]")}_getInput(){return this.shadowRoot.querySelector("[ui5-input]")}_getInputField(){const e=this._getInput();return e&&e.getInputDOMRef()}_onkeydown(e){this._isPhone&&!this.isInputsPopoverOpen()&&e.preventDefault(),ne(e)&&(e.preventDefault(),this.togglePicker());const t=e.target;this._getInput().isEqualNode(t)&&this.isOpen()&&(oe(e)||se(e)||re(e)||ae(e))&&this.closePicker(),!this.isOpen()&&(ue(e)?(e.preventDefault(),this._modifyValueBy(1,"second")):pe(e)?(e.preventDefault(),this._modifyValueBy(1,"minute")):le(e)?(e.preventDefault(),this._modifyValueBy(1,"hour")):ce(e)?(e.preventDefault(),this._modifyValueBy(-1,"second")):he(e)?(e.preventDefault(),this._modifyValueBy(-1,"minute")):de(e)&&(e.preventDefault(),this._modifyValueBy(-1,"hour")))}get _isPattern(){return this._formatPattern!=="medium"&&this._formatPattern!=="short"&&this._formatPattern!=="long"}getFormat(){let e;return this._isPattern?e=V.getDateInstance({pattern:this._formatPattern}):e=V.getDateInstance({style:this._formatPattern}),e}formatValue(e){return this.getFormat().format(e)}isValid(e){return e===""?!0:!!this.getFormat().parse(e)}normalizeValue(e){return e===""?e:this.getFormat().format(this.getFormat().parse(e))}_modifyValueBy(e,t){const i=this.getFormat().parse(this._effectiveValue);if(!i)return;t==="hour"?i.setHours(i.getHours()+e):t==="minute"?i.setMinutes(i.getMinutes()+e):t==="second"&&i.setSeconds(i.getSeconds()+e);const o=this.formatValue(i);this._updateValueAndFireEvents(o,!0,["change","value-changed"])}_handleWheel(e){e.preventDefault()}_hideMobileKeyboard(){this._getInput().readonly=!0,setTimeout(()=>{this._getInput().readonly=!1},0)}async _onfocusin(e){this._isPhone&&(this._hideMobileKeyboard(),this._isInputsPopoverOpen&&(await this._getInputsPopover()).applyFocus(),e.preventDefault())}_oninput(e){this._isPhone&&e.preventDefault()}get submitButtonLabel(){return f.i18nBundle.getText(Te)}get cancelButtonLabel(){return f.i18nBundle.getText(Se)}get openIconName(){return"time-entry-request"}};d([h({defaultValue:void 0})],c.prototype,"value",void 0);d([h({type:b,defaultValue:b.None})],c.prototype,"valueState",void 0);d([h({type:Boolean})],c.prototype,"disabled",void 0);d([h({type:Boolean})],c.prototype,"readonly",void 0);d([h({type:Boolean,noAttribute:!0})],c.prototype,"_isPickerOpen",void 0);d([h({type:Boolean,noAttribute:!0})],c.prototype,"_isInputsPopoverOpen",void 0);d([Y()],c.prototype,"valueStateMessage",void 0);c=f=d([T({languageAware:!0,renderer:H,template:Me,styles:We,staticAreaTemplate:Re,staticAreaStyles:[De,_e,je],dependencies:[me,ve,fe,ye,Ue,x,be]}),A("change",{detail:{value:{type:String},valid:{type:Boolean}}}),A("input",{detail:{value:{type:String},valid:{type:Boolean}}})],c);const Ge=c;var D=function(s,e,t,i){var o=arguments.length,r=o<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,e,t,i);else for(var l=s.length-1;l>=0;l--)(p=s[l])&&(r=(o<3?p(r):o>3?p(e,t,r):p(e,t))||r);return o>3&&r&&Object.defineProperty(e,t,r),r},$;let _=$=class extends Ge{onBeforeRendering(){this.value&&(this.value=this.normalizeValue(this.value)||this.value)}get _formatPattern(){const e=!!this.formatPattern.match(/H/i),t=!this.formatPattern||!e,i=K(P());return t?i.getTimePattern("medium"):this.formatPattern}get _displayFormat(){return this.getFormat().oFormatOptions.pattern}get _placeholder(){return this.placeholder!==void 0?this.placeholder:this._displayFormat}get dateValue(){return this.getFormat().parse(this._effectiveValue)}get accInfo(){return{ariaRoledescription:this.dateAriaDescription,ariaHasPopup:"dialog",ariaAutoComplete:"none",ariaControls:`${this._id}-responsive-popover`}}get dateAriaDescription(){return $.i18nBundle.getText(Ce)}};D([h({defaultValue:void 0})],_.prototype,"placeholder",void 0);D([h()],_.prototype,"formatPattern",void 0);_=$=D([T("ui5-time-picker")],_);_.define();const Ke=_,Ze=Object.freeze(Object.defineProperty({__proto__:null,default:Ke},Symbol.toStringTag,{value:"Module"})),I=Z("ui5-time-picker",["formatPattern","placeholder","value","valueState"],["disabled","readonly"],["valueStateMessage"],["change","input"],()=>j(()=>Promise.resolve().then(()=>Ze),void 0,import.meta.url));I.displayName="TimePicker";try{I.displayName="TimePicker",I.__docgenInfo={description:`The \`TimePicker\` component provides an input field with assigned clocks which are opened on user action. The \`TimePicker\` allows users to select a localized time using touch, mouse, or keyboard input. It consists of two parts: the time input field and the clocks.

### Usage

The user can enter a time by:

*   Using the clocks that are displayed in a popup
*   Typing it in directly in the input field



When the user makes an entry and chooses the enter key, the clocks show the corresponding time (hours, minutes and seconds separately). When the user directly triggers the clocks display, the actual time is displayed. For the \`TimePicker\`

### Formatting

If a time is entered by typing it into the input field, it must fit to the used time format.

Supported format options are pattern-based on Unicode LDML Date Format notation. For more information, see [UTS #35: Unicode Locale Data Markup Language](http://unicode.org/reports/tr35/#Date_Field_Symbol_Table).

For example, if the \`format-pattern\` is "HH:mm:ss", a valid value string is "11:42:35" and the same is displayed in the input.

### Keyboard handling

\\[F4\\], \\[ALT\\]+\\[UP\\], \\[ALT\\]+\\[DOWN\\] Open/Close picker dialog and move focus to it.
When closed:

*   \\[PAGEUP\\] - Increments hours by 1. If 12 am is reached, increment hours to 1 pm and vice versa.
*   \\[PAGEDOWN\\] - Decrements the corresponding field by 1. If 1 pm is reached, decrement hours to 12 am and vice versa.
*   \\[SHIFT\\]+\\[PAGEUP\\] - Increments minutes by 1.
*   \\[SHIFT\\]+\\[PAGEDOWN\\] - Decrements minutes by 1.
*   \\[SHIFT\\]+\\[CTRL\\]+\\[PAGEUP\\] - Increments seconds by 1.
*   \\[SHIFT\\]+\\[CTRL\\]+\\[PAGEDOWN\\] - Decrements seconds by 1.

When opened:

*   \\[PAGEUP\\] - Increments hours by 1. If 12 am is reached, increment hours to 1 pm and vice versa.
*   \\[PAGEDOWN\\] - Decrements the corresponding field by 1. If 1 pm is reached, decrement hours to 12 am and vice versa.
*   \\[SHIFT\\]+\\[PAGEUP\\] - Increments minutes by 1.
*   \\[SHIFT\\]+\\[PAGEDOWN\\] - Decrements minutes by 1.
*   \\[SHIFT\\]+\\[CTRL\\]+\\[PAGEUP\\] - Increments seconds by 1.
*   \\[SHIFT\\]+\\[CTRL\\]+\\[PAGEDOWN\\] - Decrements seconds by 1.
*   \\[A\\] or \\[P\\] - Selects AM or PM respectively.
*   \\[0\\]-\\[9\\] - Allows direct time selecting (hours/minutes/seconds).
*   \\[:\\] - Allows switching between hours/minutes/seconds clocks. If the last clock is displayed and \\[:\\] is pressed, the first clock is beind displayed.

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)`,displayName:"TimePicker",props:{valueStateMessage:{defaultValue:null,description:"Defines the value state message that will be displayed as pop up under the `TimePicker`.\n\n**Note:** If not specified, a default text (in the respective language) will be displayed.\n**Note:** The `valueStateMessage` would be displayed, when the `TimePicker` is in `Information`, `Warning` or `Error` value state.\n\n__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot=\"valueStateMessage\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).",name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:'Fired when the input operation has finished by clicking the "OK" button or when the text in the input field has changed and the focus leaves the input field.',name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<TimePickerDomRef, TimePickerBaseChangeInputEventDetail>) => void"}},onInput:{defaultValue:null,description:"Fired when the value of the `TimePicker` is changed at each key stroke.",name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<TimePickerDomRef, TimePickerBaseChangeInputEventDetail>) => void"}},disabled:{defaultValue:{value:"false"},description:"Determines whether the `TimePicker` is displayed as disabled.",name:"disabled",required:!1,type:{name:"boolean"}},formatPattern:{defaultValue:null,description:"Determines the format, displayed in the input field. Example: HH:mm:ss -> 11:42:35 hh:mm:ss a -> 2:23:15 PM mm:ss -> 12:04 (only minutes and seconds)",name:"formatPattern",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"undefined"},description:`Defines a short hint, intended to aid the user with data entry when the component has no value.

**Note:** When no placeholder is set, the format pattern is displayed as a placeholder. Passing an empty string as the value of this property will make the component appear empty - without placeholder or format pattern.`,name:"placeholder",required:!1,type:{name:"string"}},readonly:{defaultValue:{value:"false"},description:"Determines whether the `TimePicker` is displayed as readonly.",name:"readonly",required:!1,type:{name:"boolean"}},value:{defaultValue:{value:"undefined"},description:"Defines a formatted time value.",name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the `TimePicker`.\n\nAvailable options are:\n\n*   `None`\n*   `Error`\n*   `Warning`\n*   `Success`\n*   `Information`",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Warning"'},{value:'"None"'},{value:'"Error"'},{value:'"Success"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Error"'},{value:'"Information"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const Qe={title:"Inputs / TimePicker",component:I,argTypes:{valueStateMessage:{control:{disable:!0}}},args:{valueState:W.None},tags:["package:@ui5/webcomponents"]},g={};var F,M,R;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:"{}",...(R=(M=g.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};const Je=["Default"],$t=Object.freeze(Object.defineProperty({__proto__:null,Default:g,__namedExportsOrder:Je,default:Qe},Symbol.toStringTag,{value:"Module"}));export{$t as C,g as D};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
