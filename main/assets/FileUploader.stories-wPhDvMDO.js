import{j as _}from"./jsx-runtime-DtaoT6pD.js";import{V as P}from"./ValueState-I_-hGNIb.js";import{B as A}from"./index-V5rDfUAP.js";import{_ as W}from"./iframe-79yzDAC3.js";import{r as L,U as C}from"./UI5Element-_cJDeK03.js";import{a as r,b as h,l as i,s as H,p as d,c as R,f as O,w as q}from"./withWebComponent--kEkWNJH.js";import{e as j}from"./event-lM5HanI-.js";import{s as S}from"./slot-HSrR9XJ-.js";import{V as p}from"./ValueState-zUcANXoY.js";import{g as z}from"./VersionInfo-AzzP9wS2.js";import{d as G}from"./i18nBundle-YDapVb1x.js";import{g as K}from"./MarkedEvents-aYv14vsS.js";import{m as J,n as Q}from"./Keys-Mzj2D4aO.js";import{an as X,ao as Y,c as Z,b as ee,V as te,a as oe}from"./i18n-defaults-3YbdkqSs.js";import{a as ae}from"./Input-ZG-LxKhF.js";import{c as ne}from"./Popover-4Jmhfo0j.js";import{c as se,I as ie}from"./Icon-1HyKfQwB.js";import{o as w}from"./class-map-Y-YjCFqX.js";import{s as I}from"./style-map-5njKSr-C.js";import{s as re}from"./parameters-bundle.css-mPCp9TQx.js";import{s as le}from"./ResponsivePopoverCommon.css-47kyCt3t.js";import{s as ue}from"./ValueStateMessage.css-ffR2awM2.js";function pe(o,e,t){return r`<div class="ui5-file-uploader-root" @mouseover="${this._onmouseover}" @mouseout="${this._onmouseout}" @focusin="${this._onfocusin}" @focusout="${this._onfocusout}" @keydown="${this._onkeydown}" @keyup="${this._onkeyup}" @click="${this._onclick}"><div class="ui5-file-uploader-mask">${this.hideInput?void 0:de.call(this,o,e,t)}<slot></slot></div>${this._keepInputInShadowDOM?ce.call(this,o,e,t):he.call(this,o,e,t)}</div>`}function de(o,e,t){return t?r`<${h("ui5-input",e,t)} value="${i(this.value)}" value-state="${i(this.valueState)}" placeholder="${i(this.placeholder)}" ?disabled="${this.disabled}" tabindex="-1" class="ui5-file-uploader-input"></${h("ui5-input",e,t)}>`:r`<ui5-input value="${i(this.value)}" value-state="${i(this.valueState)}" placeholder="${i(this.placeholder)}" ?disabled="${this.disabled}" tabindex="-1" class="ui5-file-uploader-input"></ui5-input>`}function ce(o,e,t){return r`<input type="file" title="${i(this.titleText)}" accept="${i(this.accept)}" ?multiple="${this.multiple}" ?disabled="${this.disabled}" @change="${this._onChange}" aria-hidden="true" tabindex="-1">`}function he(o,e,t){return r`<slot name="formSupport"></slot>`}function me(o,e,t){return t?r`<${h("ui5-popover",e,t)} skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="Left"><div slot="header" class="${w(this.classes.popoverValueState)}" style="${I(this.styles.popoverHeader)}">${this._valueStateMessageInputIcon?F.call(this,o,e,t):void 0}${this.shouldDisplayDefaultValueStateMessage?$.call(this,o,e,t):T.call(this,o,e,t)}</div></${h("ui5-popover",e,t)}>`:r`<ui5-popover skip-registry-update _disable-initial-focus prevent-focus-restore hide-arrow class="ui5-valuestatemessage-popover" placement-type="Bottom" horizontal-align="Left"><div slot="header" class="${w(this.classes.popoverValueState)}" style="${I(this.styles.popoverHeader)}">${this._valueStateMessageInputIcon?F.call(this,o,e,t):void 0}${this.shouldDisplayDefaultValueStateMessage?$.call(this,o,e,t):T.call(this,o,e,t)}</div></ui5-popover>`}function F(o,e,t){return t?r`<${h("ui5-icon",e,t)} class="ui5-input-value-state-message-icon" name="${i(this._valueStateMessageInputIcon)}"></${h("ui5-icon",e,t)}>`:r`<ui5-icon class="ui5-input-value-state-message-icon" name="${i(this._valueStateMessageInputIcon)}"></ui5-icon>`}function $(o,e,t){return r`${i(this.valueStateText)}`}function T(o,e,t){return r`${se(this.valueStateMessageText,(n,u)=>n._id||u,(n,u)=>fe.call(this,o,e,t,n,u))}`}function fe(o,e,t,n,u){return r`${i(n)}`}L("@ui5/webcomponents-theming","sap_horizon",async()=>H);L("@ui5/webcomponents","sap_horizon",async()=>re);const ve={packageName:"@ui5/webcomponents",fileName:"themes/FileUploader.css.ts",content:`:host{vertical-align:middle}:host{display:inline-block}.ui5-file-uploader-root{position:relative}.ui5-file-uploader-root input[type=file]{opacity:0;position:absolute;top:0;left:0;height:100%;width:100%}.ui5-file-uploader-root input[type=file]:not([disabled]){cursor:pointer}.ui5-file-uploader-mask{display:flex;align-items:center}.ui5-file-uploader-mask [ui5-input]{margin-right:.25rem}:host([value-state="None"]:not([disabled]):hover) [ui5-input],:host(:not([value-state]):not([disabled]):hover) [ui5-input]{border:var(--_ui5-v1-22-0-rc-3_file_uploader_hover_border);background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_Shadow)}:host([value-state="Error"]:not([disabled]):hover) [ui5-input]{background-color:var(--_ui5-v1-22-0-rc-3_file_uploader_value_state_error_hover_background_color);box-shadow:var(--sapField_Hover_InvalidShadow)}:host([value-state="Warning"]:not([disabled]):hover) [ui5-input]{background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_WarningShadow)}:host([value-state="Success"]:not([disabled]):hover) [ui5-input]{background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_SuccessShadow)}:host([value-state="Information"]:not([disabled]):hover) [ui5-input]{background-color:var(--sapField_Hover_Background);box-shadow:var(--sapField_Hover_InformationShadow)}:host(:not([disabled]):active) [ui5-button]{background-color:var(--sapButton_Active_Background);border-color:var(--sapButton_Active_BorderColor);color:var(--sapButton_Active_TextColor);text-shadow:none}
`};var s=function(o,e,t,n){var u=arguments.length,c=u<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,y;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")c=Reflect.decorate(o,e,t,n);else for(var b=o.length-1;b>=0;b--)(y=o[b])&&(c=(u<3?y(c):u>3?y(e,t,c):y(e,t))||c);return u>3&&c&&Object.defineProperty(e,t,c),c},l;let a=l=class extends C{static get formAssociated(){return!0}constructor(){super(),this._internals=this.attachInternals&&this.attachInternals()}_onmouseover(){this.content.forEach(e=>{e.classList.add("ui5_hovered")})}_onmouseout(){this.content.forEach(e=>{e.classList.remove("ui5_hovered")})}_onclick(e){K(e)==="button"&&this._input.click()}_onkeydown(e){J(e)&&(this._input.click(),e.preventDefault())}_onkeyup(e){Q(e)&&(this._input.click(),e.preventDefault())}_onfocusin(){this.focused=!0}_onfocusout(){this.focused=!1}get files(){return this._input?this._input.files:l._emptyFilesList}onBeforeRendering(){this._enableFormSupport()}onAfterRendering(){this.value||(this._input.value=""),this.toggleValueStatePopover(this.shouldOpenValueStateMessagePopover)}_enableFormSupport(){const e=z("FormSupport");e?this._canUseNativeFormSupport?this._setFormValue():e.syncNativeFileInput(this,(t,n)=>{n.disabled=!!t.disabled},this._onChange.bind(this)):this.name&&console.warn('In order for the "name" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";')}_onChange(e){const t=e.target.files;this._updateValue(t),this.fireEvent("change",{files:t})}_updateValue(e){this.value=Array.from(e||[]).reduce((t,n)=>`${t}"${n.name}" `,"")}_setFormValue(){const e=new FormData;if(this.files)for(let t=0;t<this.files.length;t++)e.append(this.name,this.files[t]);this._internals.setFormValue(e)}toggleValueStatePopover(e){e?this.openValueStatePopover():this.closeValueStatePopover()}async openValueStatePopover(){const e=await this._getPopover();e&&e.showAt(this)}async closeValueStatePopover(){const e=await this._getPopover();e&&e.close()}async _getPopover(){return(await this.getStaticAreaItemDomRef()).querySelector(".ui5-valuestatemessage-popover")}static get _emptyFilesList(){return this.emptyInput||(this.emptyInput=document.createElement("input"),this.emptyInput.type="file"),this.emptyInput.files}get browseText(){return l.i18nBundle.getText(X)}get titleText(){return l.i18nBundle.getText(Y)}get _canUseNativeFormSupport(){return!!(this._internals&&this._internals.setFormValue)}get _keepInputInShadowDOM(){return this._canUseNativeFormSupport||!this.name}get _input(){return this.shadowRoot.querySelector("input[type=file]")||this.querySelector("input[type=file][data-ui5-form-support]")}get valueStateTextMappings(){return{Success:l.i18nBundle.getText(Z),Information:l.i18nBundle.getText(ee),Error:l.i18nBundle.getText(te),Warning:l.i18nBundle.getText(oe)}}get valueStateText(){return this.valueStateTextMappings[this.valueState]}get hasValueState(){return this.valueState!==p.None}get hasValueStateText(){return this.hasValueState&&this.valueState!==p.Success}get valueStateMessageText(){return this.getSlottedNodes("valueStateMessage").map(e=>e.cloneNode(!0))}get shouldDisplayDefaultValueStateMessage(){return!this.valueStateMessage.length&&this.hasValueStateText}get shouldOpenValueStateMessagePopover(){return this.focused&&this.hasValueStateText&&!this.hideInput}get _valueStateMessageInputIcon(){const e={Error:"error",Warning:"alert",Success:"sys-enter-2",Information:"information"};return this.valueState!==p.None?e[this.valueState]:""}get classes(){return{popoverValueState:{"ui5-valuestatemessage-root":!0,"ui5-valuestatemessage--success":this.valueState===p.Success,"ui5-valuestatemessage--error":this.valueState===p.Error,"ui5-valuestatemessage--warning":this.valueState===p.Warning,"ui5-valuestatemessage--information":this.valueState===p.Information}}}get styles(){return{popoverHeader:{width:`${this.ui5Input?this.ui5Input.offsetWidth:0}px`}}}get ui5Input(){return this.shadowRoot.querySelector(".ui5-file-uploader-input")}static async onDefine(){l.i18nBundle=await G("@ui5/webcomponents")}};s([d()],a.prototype,"accept",void 0);s([d({type:Boolean})],a.prototype,"hideInput",void 0);s([d({type:Boolean})],a.prototype,"disabled",void 0);s([d({type:Boolean})],a.prototype,"multiple",void 0);s([d()],a.prototype,"name",void 0);s([d()],a.prototype,"placeholder",void 0);s([d()],a.prototype,"value",void 0);s([d({type:p,defaultValue:p.None})],a.prototype,"valueState",void 0);s([d({type:Boolean})],a.prototype,"focused",void 0);s([S({type:HTMLElement,default:!0})],a.prototype,"content",void 0);s([S()],a.prototype,"valueStateMessage",void 0);s([S()],a.prototype,"formSupport",void 0);a=l=s([R({tag:"ui5-file-uploader",languageAware:!0,renderer:O,styles:ve,template:pe,staticAreaTemplate:me,staticAreaStyles:[le,ue],dependencies:[ae,ne,ie]}),j("change",{detail:{files:{type:FileList}}})],a);a.define();const ge=a,ye=Object.freeze(Object.defineProperty({__proto__:null,default:ge},Symbol.toStringTag,{value:"Module"})),m=q("ui5-file-uploader",["accept","name","placeholder","value","valueState"],["disabled","hideInput","multiple"],["valueStateMessage"],["change"],()=>W(()=>Promise.resolve().then(()=>ye),void 0,import.meta.url));m.displayName="FileUploader";try{m.displayName="FileUploader",m.__docgenInfo={description:'The `FileUploader` opens a file explorer dialog and enables users to upload files. The component consists of input field, but you can provide an HTML element by your choice to trigger the file upload, by using the default slot. Furthermore, you can set the property "hideInput" to "true" to hide the input field.\nTo get all selected files, you can simply use the read-only "files" property. To restrict the types of files the user can select, you can use the "accept" property.\nAnd, similar to all input based components, the FileUploader supports "valueState", "placeholder", "name", and "disabled" properties. For the `FileUploader`\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)',displayName:"FileUploader",props:{children:{defaultValue:null,description:`By default the component contains a single input field. With this slot you can pass any content that you wish to add. See the samples for more information.
**Note:** If no content is provided in this slot, the component will only consist of an input field and will not be interactable using the keyboard.
Also it is not recommended to use any non-interactable components, as it may lead to poor accessibility experience.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},valueStateMessage:{defaultValue:null,description:"Defines the value state message that will be displayed as pop up under the component.\n\n**Note:** If not specified, a default text (in the respective language) will be displayed.\n**Note:** The `valueStateMessage` would be displayed, when the component is in `Information`, `Warning` or `Error` value state.\n\n__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot=\"valueStateMessage\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).",name:"valueStateMessage",required:!1,type:{name:"UI5WCSlotsNode"}},onChange:{defaultValue:null,description:"Event is fired when the value of the file path has been changed. **Note:** Keep in mind that because of the HTML input element of type file, the event is also fired in Chrome browser when the Cancel button of the uploads window is pressed.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<FileUploaderDomRef, FileUploaderChangeEventDetail>) => void"}},accept:{defaultValue:null,description:"Comma-separated list of file types that the component should accept.\n\n**Note:** Please make sure you are adding the `.` in front on the file type, e.g. `.png` in case you want to accept png's only.",name:"accept",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is in disabled state.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},hideInput:{defaultValue:{value:"false"},description:'If set to "true", the input field of component will not be rendered. Only the default slot that is passed will be rendered.',name:"hideInput",required:!1,type:{name:"boolean"}},multiple:{defaultValue:{value:"false"},description:"Allows multiple files to be chosen.",name:"multiple",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:'Determines the name with which the component will be submitted in an HTML form.\n\n**Important:** For the `name` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`\n\n**Note:** When set, a native `input` HTML element will be created inside the component so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form.',name:"name",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"Defines a short hint intended to aid the user with data entry when the component has no value.",name:"placeholder",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Defines the name/names of the file/files to upload.",name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Warning"'},{value:'"None"'},{value:'"Error"'},{value:'"Success"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Error"'},{value:'"Information"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const _e={title:"Inputs / FileUploader",component:m,argTypes:{children:{control:{disable:!0}},valueStateMessage:{control:{disable:!0}}},args:{valueState:P.None},tags:["package:@ui5/webcomponents"]},f={},v={render(o){return _.jsx(m,{...o,children:_.jsx(A,{children:"Upload single file"})})}},g={render(o){return _.jsx(m,{...o,hideInput:!0,children:_.jsx(A,{children:"Upload single file"})})}};var V,k,U;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:"{}",...(U=(k=f.parameters)==null?void 0:k.docs)==null?void 0:U.source}}};var E,D,N;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render(args) {
    return <FileUploader {...args}>
        <Button>Upload single file</Button>
      </FileUploader>;
  }
}`,...(N=(D=v.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var M,B,x;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render(args) {
    return <FileUploader {...args} hideInput>
        <Button>Upload single file</Button>
      </FileUploader>;
  }
}`,...(x=(B=g.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};const be=["Default","WithButton","WithHiddenInput"],qe=Object.freeze(Object.defineProperty({__proto__:null,Default:f,WithButton:v,WithHiddenInput:g,__namedExportsOrder:be,default:_e},Symbol.toStringTag,{value:"Module"}));export{qe as C,f as D,v as W,g as a};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
