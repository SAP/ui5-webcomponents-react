import{j as b}from"./useIsomorphicLayoutEffect-Dhma_bjk.js";import{o as c}from"./ValueState-Bg0UWejw.js";import{B as P}from"./index-gHGG7lEc.js";import{j as d,l as s,k as m,f as q,s as B,a as p,m as L,p as R,I as H,w as W}from"./withWebComponent-YgbOdVTg.js";import{s as S}from"./event-Dq0fpeHi.js";import{d as z}from"./slot-_4yKMUwC.js";import{f as O}from"./i18nBundle-CRmnyxU0.js";import{s as j}from"./MarkedEvents-CAur0wxK.js";import{b as G,a as K}from"./Keys-D1SxbTOd.js";import{ak as J,al as Q,c as X,b as Y,V as Z,a as ee}from"./i18n-defaults-PZPXNaBc.js";import{a as te}from"./Input-ltHfrqFq.js";import{c as oe}from"./Popover-COhsAIU7.js";import{c as ae,I as ie}from"./Icon-DDA-V63S.js";import{o as w}from"./class-map-D12-v36h.js";import{s as F}from"./style-map-HUTC8E5D.js";import{s as ne}from"./parameters-bundle.css-Bga-3Zi8.js";import{s as se}from"./ResponsivePopoverCommon.css-DbB4vIHs.js";import{s as le}from"./ValueStateMessage.css-BJPkzP8W.js";function re(o,e,t){return t?d`<div class="ui5-file-uploader-root" @mouseover="${this._onmouseover}" @mouseout="${this._onmouseout}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click="${this._onclick}" @dragover="${this._ondrag}" @drop="${this._ondrop}"><div class="ui5-file-uploader-mask">${this.hideInput?void 0:N.call(this,o,e,t)}<slot></slot></div><input type="file" title="${s(this.titleText)}" accept="${s(this.accept)}" ?multiple="${this.multiple}" ?disabled="${this.disabled}" @change="${this._onChange}" aria-hidden="true" tabindex="-1"></div><${m("ui5-popover",e,t)} skip-registry-update prevent-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement="Bottom" horizontal-align="Start"><div slot="header" class="${w(this.classes.popoverValueState)}" style="${F(this.styles.popoverHeader)}">${this._valueStateMessageInputIcon?$.call(this,o,e,t):void 0}${this.shouldDisplayDefaultValueStateMessage?T.call(this,o,e,t):I.call(this,o,e,t)}</div></${m("ui5-popover",e,t)}> `:d`<div class="ui5-file-uploader-root" @mouseover="${this._onmouseover}" @mouseout="${this._onmouseout}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click="${this._onclick}" @dragover="${this._ondrag}" @drop="${this._ondrop}"><div class="ui5-file-uploader-mask">${this.hideInput?void 0:N.call(this,o,e,t)}<slot></slot></div><input type="file" title="${s(this.titleText)}" accept="${s(this.accept)}" ?multiple="${this.multiple}" ?disabled="${this.disabled}" @change="${this._onChange}" aria-hidden="true" tabindex="-1"></div><ui5-popover skip-registry-update prevent-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement="Bottom" horizontal-align="Start"><div slot="header" class="${w(this.classes.popoverValueState)}" style="${F(this.styles.popoverHeader)}">${this._valueStateMessageInputIcon?$.call(this,o,e,t):void 0}${this.shouldDisplayDefaultValueStateMessage?T.call(this,o,e,t):I.call(this,o,e,t)}</div></ui5-popover> `}function N(o,e,t){return t?d`<${m("ui5-input",e,t)} value="${s(this.value)}" value-state="${s(this.valueState)}" placeholder="${s(this.placeholder)}" ?disabled="${this.disabled}" tabindex="-1" class="ui5-file-uploader-input"></${m("ui5-input",e,t)}>`:d`<ui5-input value="${s(this.value)}" value-state="${s(this.valueState)}" placeholder="${s(this.placeholder)}" ?disabled="${this.disabled}" tabindex="-1" class="ui5-file-uploader-input"></ui5-input>`}function $(o,e,t){return t?d`<${m("ui5-icon",e,t)} class="ui5-input-value-state-message-icon" name="${s(this._valueStateMessageInputIcon)}"></${m("ui5-icon",e,t)}>`:d`<ui5-icon class="ui5-input-value-state-message-icon" name="${s(this._valueStateMessageInputIcon)}"></ui5-icon>`}function T(o,e,t){return d`${s(this.valueStateText)}`}function I(o,e,t){return d`${ae(this.valueStateMessageText,(a,i)=>a._id||i,(a,i)=>ue.call(this,o,e,t,a,i))}`}function ue(o,e,t,a,i){return d`${s(a)}`}q("@ui5/webcomponents-theming","sap_horizon",async()=>B);q("@ui5/webcomponents","sap_horizon",async()=>ne);const pe={packageName:"@ui5/webcomponents",fileName:"themes/FileUploader.css.ts",content:`:host{vertical-align:middle}:host{display:inline-block}.ui5-file-uploader-root{position:relative}.ui5-file-uploader-root input[type=file]{opacity:0;position:absolute;top:0;left:0;height:100%;width:100%;font-size:0}.ui5-file-uploader-root input[type=file]:not([disabled]){cursor:pointer}.ui5-file-uploader-mask{display:flex;align-items:center}.ui5-file-uploader-mask [ui5-input]{margin-right:.25rem}:host([value-state="None"]:not([disabled]):hover) [ui5-input],:host(:not([value-state]):not([disabled]):hover) [ui5-input]{border:var(--_ui5-v2-2-0_file_uploader_hover_border);background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_Shadow)}:host([value-state="Negative"]:not([disabled]):hover) [ui5-input]{background-color:var(--_ui5-v2-2-0_file_uploader_value_state_error_hover_background_color);box-shadow:var(--sapField_Hover_InvalidShadow)}:host([value-state="Critical"]:not([disabled]):hover) [ui5-input]{background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_WarningShadow)}:host([value-state="Positive"]:not([disabled]):hover) [ui5-input]{background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_SuccessShadow)}:host([value-state="Information"]:not([disabled]):hover) [ui5-input]{background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_InformationShadow)}:host(:not([disabled]):active) [ui5-button]{background-color:var(--sapButton_Active_Background);border-color:var(--sapButton_Active_BorderColor);color:var(--sapButton_Active_TextColor);text-shadow:none}
`};var l=function(o,e,t,a){var i=arguments.length,r=i<3?e:a===null?a=Object.getOwnPropertyDescriptor(e,t):a,y;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,t,a);else for(var _=o.length-1;_>=0;_--)(y=o[_])&&(r=(i<3?y(r):i>3?y(e,t,r):y(e,t))||r);return i>3&&r&&Object.defineProperty(e,t,r),r},u;const de=o=>o/1024/1024;let n=u=class extends H{constructor(){super(...arguments),this.hideInput=!1,this.disabled=!1,this.multiple=!1,this.value="",this.valueState="None",this.focused=!1}async formElementAnchor(){return this.getFocusDomRefAsync()}getFocusDomRef(){return this.content[0]}get formFormattedValue(){if(this.files&&this.name){const e=new FormData;for(let t=0;t<this.files.length;t++)e.append(this.name,this.files[t]);return e}return null}_onmouseover(){this.content.forEach(e=>{e.classList.add("ui5_hovered")})}_onmouseout(){this.content.forEach(e=>{e.classList.remove("ui5_hovered")})}_onclick(e){j(e)==="button"&&this._input.click()}_onkeydown(e){G(e)&&(this._input.click(),e.preventDefault())}_onkeyup(e){K(e)&&(this._input.click(),e.preventDefault())}_ondrag(e){e.preventDefault(),e.stopPropagation()}_ondrop(e){var i;e.preventDefault(),e.stopPropagation();const t=(i=e.dataTransfer)==null?void 0:i.files;if(!t)return;const a=this._validateFiles(t);!this.value&&!a.length||(this._input.files=a,this._updateValue(a),this.fireEvent("change",{files:a}))}_onfocusin(){this.focused=!0}_onfocusout(){this.focused=!1}get files(){return this._input?this._input.files:u._emptyFilesList}onAfterRendering(){this.value||(this._input.value=""),this.toggleValueStatePopover(this.shouldOpenValueStateMessagePopover)}_onChange(e){let t=e.target.files;t&&(t=this._validateFiles(t)),!(!this.value&&!(t!=null&&t.length))&&(this._updateValue(t),this.fireEvent("change",{files:t}))}_updateValue(e){this.value=Array.from(e||[]).reduce((t,a)=>`${t}"${a.name}" `,"")}_validateFiles(e){const t=this.maxFileSize?this._getExceededFiles(e):[];return t.length&&(this.fireEvent("file-size-exceed",{filesData:t}),e=new DataTransfer().files),e}_getExceededFiles(e){const t=Array.from(e),a=[];for(let i=0;i<t.length;i++){const r=de(t[i].size);r>this.maxFileSize&&a.push({fileName:t[i].name,fileSize:r})}return a}toggleValueStatePopover(e){e?this.openValueStatePopover():this.closeValueStatePopover()}openValueStatePopover(){const e=this._getPopover();e&&(e.opener=this,e.open=!0)}closeValueStatePopover(){const e=this._getPopover();e&&(e.open=!1)}_getPopover(){return this.shadowRoot.querySelector(".ui5-valuestatemessage-popover")}static get _emptyFilesList(){return this.emptyInput||(this.emptyInput=document.createElement("input"),this.emptyInput.type="file"),this.emptyInput.files}get browseText(){return u.i18nBundle.getText(J)}get titleText(){return u.i18nBundle.getText(Q)}get _input(){return this.shadowRoot.querySelector("input[type=file]")||this.querySelector("input[type=file][data-ui5-form-support]")}get valueStateTextMappings(){return{Positive:u.i18nBundle.getText(X),Information:u.i18nBundle.getText(Y),Negative:u.i18nBundle.getText(Z),Critical:u.i18nBundle.getText(ee)}}get valueStateText(){return this.valueStateTextMappings[this.valueState]}get hasValueState(){return this.valueState!==c.None}get hasValueStateText(){return this.hasValueState&&this.valueState!==c.Positive}get valueStateMessageText(){return this.getSlottedNodes("valueStateMessage").map(e=>e.cloneNode(!0))}get shouldDisplayDefaultValueStateMessage(){return!this.valueStateMessage.length&&this.hasValueStateText}get shouldOpenValueStateMessagePopover(){return this.focused&&this.hasValueStateText&&!this.hideInput}get _valueStateMessageInputIcon(){const e={Negative:"error",Critical:"alert",Positive:"sys-enter-2",Information:"information"};return this.valueState!==c.None?e[this.valueState]:""}get classes(){return{popoverValueState:{"ui5-valuestatemessage-root":!0,"ui5-valuestatemessage--success":this.valueState===c.Positive,"ui5-valuestatemessage--error":this.valueState===c.Negative,"ui5-valuestatemessage--warning":this.valueState===c.Critical,"ui5-valuestatemessage--information":this.valueState===c.Information}}}get styles(){return{popoverHeader:{width:`${this.ui5Input?this.ui5Input.offsetWidth:0}px`}}}get ui5Input(){return this.shadowRoot.querySelector(".ui5-file-uploader-input")}static async onDefine(){u.i18nBundle=await O("@ui5/webcomponents")}};l([p()],n.prototype,"accept",void 0);l([p({type:Boolean})],n.prototype,"hideInput",void 0);l([p({type:Boolean})],n.prototype,"disabled",void 0);l([p({type:Boolean})],n.prototype,"multiple",void 0);l([p()],n.prototype,"name",void 0);l([p()],n.prototype,"placeholder",void 0);l([p()],n.prototype,"value",void 0);l([p({type:Number})],n.prototype,"maxFileSize",void 0);l([p()],n.prototype,"valueState",void 0);l([p({type:Boolean})],n.prototype,"focused",void 0);l([z({type:HTMLElement,default:!0})],n.prototype,"content",void 0);l([z()],n.prototype,"valueStateMessage",void 0);n=u=l([L({tag:"ui5-file-uploader",languageAware:!0,formAssociated:!0,renderer:R,styles:[pe,se,le],template:re,dependencies:[te,oe,ie]}),S("change",{detail:{files:{type:FileList}}}),S("file-size-exceed",{detail:{filesData:{type:Array}}})],n);n.define();const h=W("ui5-file-uploader",["accept","maxFileSize","name","placeholder","value","valueState"],["disabled","hideInput","multiple"],["valueStateMessage"],["change","file-size-exceed"]);h.displayName="FileUploader";try{h.displayName="FileUploader",h.__docgenInfo={description:`The \`FileUploader\` opens a file explorer dialog and enables users to upload files.
The component consists of input field, but you can provide an HTML element by your choice
to trigger the file upload, by using the default slot.
Furthermore, you can set the property "hideInput" to "true" to hide the input field.

To get all selected files, you can simply use the read-only "files" property.
To restrict the types of files the user can select, you can use the "accept" property.

And, similar to all input based components, the FileUploader supports "valueState", "placeholder", "name", and "disabled" properties.

For the \`FileUploader\`


__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"FileUploader",props:{children:{defaultValue:null,description:`By default the component contains a single input field. With this slot you can pass any content that you wish to add. See the samples for more information.

**Note:** If no content is provided in this slot, the component will only consist of an input field and will not be interactable using the keyboard.
Also it is not recommended to use any non-interactable components, as it may lead to poor accessibility experience.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},valueStateMessage:{defaultValue:null,description:`Defines the value state message that will be displayed as pop up under the component.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The \`valueStateMessage\` would be displayed,
when the component is in \`Information\`, \`Critical\` or \`Negative\` value state.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="valueStateMessage"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:`Event is fired when the value of the file path has been changed.

**Note:** Keep in mind that because of the HTML input element of type file, the event is also fired in Chrome browser when the Cancel button of the uploads window is pressed.`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<FileUploaderDomRef, FileUploaderChangeEventDetail>) => void"}},onFileSizeExceed:{defaultValue:null,description:"Event is fired when the size of a file is above the `maxFileSize` property value.\n\n**Note:** Available since [v2.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.2.0) of **@ui5/webcomponents**.",name:"onFileSizeExceed",required:!1,type:{name:"(event: Ui5CustomEvent<FileUploaderDomRef, FileUploaderFileSizeExceedEventDetail>) => void"}},accept:{defaultValue:{value:"undefined"},description:"Comma-separated list of file types that the component should accept.\n\n**Note:** Please make sure you are adding the `.` in front on the file type, e.g. `.png` in case you want to accept png's only.",name:"accept",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is in disabled state.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},hideInput:{defaultValue:{value:"false"},description:'If set to "true", the input field of component will not be rendered. Only the default slot that is passed will be rendered.',name:"hideInput",required:!1,type:{name:"boolean"}},maxFileSize:{defaultValue:{value:"undefined"},description:`Defines the maximum file size in megabytes which prevents the upload if at least one file exceeds it.

**Note:** Available since [v2.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.2.0) of **@ui5/webcomponents**.`,name:"maxFileSize",required:!1,type:{name:"number"}},multiple:{defaultValue:{value:"false"},description:"Allows multiple files to be chosen.",name:"multiple",required:!1,type:{name:"boolean"}},name:{defaultValue:{value:"undefined"},description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.`,name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"undefined"},description:"Defines a short hint intended to aid the user with data entry when the component has no value.",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Defines the name/names of the file/files to upload.",name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"None"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{h.displayName="FileUploader",h.__docgenInfo={description:`The \`FileUploader\` opens a file explorer dialog and enables users to upload files.
The component consists of input field, but you can provide an HTML element by your choice
to trigger the file upload, by using the default slot.
Furthermore, you can set the property "hideInput" to "true" to hide the input field.

To get all selected files, you can simply use the read-only "files" property.
To restrict the types of files the user can select, you can use the "accept" property.

And, similar to all input based components, the FileUploader supports "valueState", "placeholder", "name", and "disabled" properties.

For the \`FileUploader\`


__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"FileUploader",props:{children:{defaultValue:null,description:`By default the component contains a single input field. With this slot you can pass any content that you wish to add. See the samples for more information.

**Note:** If no content is provided in this slot, the component will only consist of an input field and will not be interactable using the keyboard.
Also it is not recommended to use any non-interactable components, as it may lead to poor accessibility experience.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},valueStateMessage:{defaultValue:null,description:`Defines the value state message that will be displayed as pop up under the component.

**Note:** If not specified, a default text (in the respective language) will be displayed.

**Note:** The \`valueStateMessage\` would be displayed,
when the component is in \`Information\`, \`Critical\` or \`Negative\` value state.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="valueStateMessage"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:`Event is fired when the value of the file path has been changed.

**Note:** Keep in mind that because of the HTML input element of type file, the event is also fired in Chrome browser when the Cancel button of the uploads window is pressed.`,name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<FileUploaderDomRef, FileUploaderChangeEventDetail>) => void"}},onFileSizeExceed:{defaultValue:null,description:"Event is fired when the size of a file is above the `maxFileSize` property value.\n\n**Note:** Available since [v2.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.2.0) of **@ui5/webcomponents**.",name:"onFileSizeExceed",required:!1,type:{name:"(event: Ui5CustomEvent<FileUploaderDomRef, FileUploaderFileSizeExceedEventDetail>) => void"}},accept:{defaultValue:{value:"undefined"},description:"Comma-separated list of file types that the component should accept.\n\n**Note:** Please make sure you are adding the `.` in front on the file type, e.g. `.png` in case you want to accept png's only.",name:"accept",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is in disabled state.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},hideInput:{defaultValue:{value:"false"},description:'If set to "true", the input field of component will not be rendered. Only the default slot that is passed will be rendered.',name:"hideInput",required:!1,type:{name:"boolean"}},maxFileSize:{defaultValue:{value:"undefined"},description:`Defines the maximum file size in megabytes which prevents the upload if at least one file exceeds it.

**Note:** Available since [v2.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.2.0) of **@ui5/webcomponents**.`,name:"maxFileSize",required:!1,type:{name:"number"}},multiple:{defaultValue:{value:"false"},description:"Allows multiple files to be chosen.",name:"multiple",required:!1,type:{name:"boolean"}},name:{defaultValue:{value:"undefined"},description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.`,name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:"undefined"},description:"Defines a short hint intended to aid the user with data entry when the component has no value.",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Defines the name/names of the file/files to upload.",name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"None"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const ce={title:"Inputs / FileUploader",component:h,argTypes:{children:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{valueState:c.None},tags:["package:@ui5/webcomponents"]},f={},v={render(o){return b.jsx(h,{...o,children:b.jsx(P,{children:"Upload single file"})})}},g={render(o){return b.jsx(h,{...o,hideInput:!0,children:b.jsx(P,{children:"Upload single file"})})}};var x,D,V;f.parameters={...f.parameters,docs:{...(x=f.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(V=(D=f.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var U,k,E;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render(args) {
    return <FileUploader {...args}>
        <Button>Upload single file</Button>
      </FileUploader>;
  }
}`,...(E=(k=v.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var C,M,A;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render(args) {
    return <FileUploader {...args} hideInput>
        <Button>Upload single file</Button>
      </FileUploader>;
  }
}`,...(A=(M=g.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};const he=["Default","WithButton","WithHiddenInput"],Ee=Object.freeze(Object.defineProperty({__proto__:null,Default:f,WithButton:v,WithHiddenInput:g,__namedExportsOrder:he,default:ce},Symbol.toStringTag,{value:"Module"}));export{Ee as C,f as D,v as W,g as a};
