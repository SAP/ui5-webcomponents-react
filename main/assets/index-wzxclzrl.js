function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as w}from"./iframe-KtFHT45j.js";import{U as S}from"./UI5Element-9EXj3atz.js";import{a as r,l as a,b as m,s as I,p as b,c as C,f as N,w as T}from"./withWebComponent-LTFbYRvs.js";import{s as E}from"./slot-HSrR9XJ-.js";import{e as M}from"./event-lM5HanI-.js";import{b as x}from"./i18nBundle-j8vDD4VY.js";import"./decline-j4MODHQ_.js";import"./information-6141dtH3.js";import"./alert--0SE21sY.js";import{o as k}from"./class-map-gjOVarQw.js";import{I as P}from"./Icon-kyep1SqZ.js";import{b as B}from"./Button-DcwyQdV9.js";import{M as D,y as R,z as W,E as $,F as U,H as A}from"./i18n-defaults-X1FTyPSK.js";import{r as y}from"./Boot-vTaFuwdG.js";import{s as F}from"./parameters-bundle.css-EKzfhWK3.js";var g;(function(e){e.Information="Information",e.Positive="Positive",e.Negative="Negative",e.Warning="Warning"})(g||(g={}));const _=g;function O(e,t,o){return r`<div class="${k(this.classes.root)}" id="${a(this._id)}" role="note" aria-live="assertive" aria-labelledby="${a(this._id)}">${this.hideIcon?void 0:V.call(this,e,t,o)}<span class="ui5-hidden-text">${a(this.hiddenText)}</span><span class="ui5-message-strip-text"><slot></slot></span>${this.hideCloseButton?void 0:L.call(this,e,t,o)}</div>`}function V(e,t,o){return r`<div class="ui5-message-strip-icon-wrapper" aria-hidden="true">${this.iconProvided?q.call(this,e,t,o):z.call(this,e,t,o)}</div>`}function q(e,t,o){return r`<slot name="icon"></slot>`}function z(e,t,o){return o?r`<${m("ui5-icon",t,o)} name="${a(this.standardIconName)}" class="ui5-message-strip-icon"></${m("ui5-icon",t,o)}>`:r`<ui5-icon name="${a(this.standardIconName)}" class="ui5-message-strip-icon"></ui5-icon>`}function L(e,t,o){return o?r`<${m("ui5-button",t,o)} icon="decline" design="Transparent" class="ui5-message-strip-close-button" tooltip="${a(this._closeButtonText)}" @click=${this._closeClick}></${m("ui5-button",t,o)}>`:r`<ui5-button icon="decline" design="Transparent" class="ui5-message-strip-close-button" tooltip="${a(this._closeButtonText)}" @click=${this._closeClick}></ui5-button>`}y("@ui5/webcomponents-theming","sap_horizon",async()=>I);y("@ui5/webcomponents","sap_horizon",async()=>F);const H={packageName:"@ui5/webcomponents",fileName:"themes/MessageStrip.css.ts",content:`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block;width:100%}.ui5-message-strip-root{width:100%;height:100%;display:flex;border-radius:var(--sapPopover_BorderCornerRadius);padding:var(--_ui5-v1-23-1_message_strip_padding);border-width:var(--_ui5-v1-23-1_message_strip_border_width);border-style:solid;box-sizing:border-box;position:relative}.ui5-message-strip-root-hide-icon{padding-inline:var(--_ui5-v1-23-1_message_strip_padding_inline_no_icon);padding-block:var(--_ui5-v1-23-1_message_strip_padding_block_no_icon)}.ui5-message-strip-root-hide-close-button{padding-inline-end:1rem}.ui5-message-strip-root--info{background-color:var(--sapInformationBackground);border-color:var(--sapMessage_InformationBorderColor);color:var(--sapTextColor)}.ui5-message-strip-root--info .ui5-message-strip-icon{color:var(--sapInformativeElementColor)}.ui5-message-strip-root--positive{background-color:var(--sapSuccessBackground);border-color:var(--sapMessage_SuccessBorderColor)}.ui5-message-strip-root--positive .ui5-message-strip-icon{color:var(--sapPositiveElementColor)}.ui5-message-strip-root--negative{background-color:var(--sapErrorBackground);border-color:var(--sapMessage_ErrorBorderColor)}.ui5-message-strip-root--negative .ui5-message-strip-icon{color:var(--sapNegativeElementColor)}.ui5-message-strip-root--warning{background-color:var(--sapWarningBackground);border-color:var(--sapMessage_WarningBorderColor)}.ui5-message-strip-root--warning .ui5-message-strip-icon{color:var(--sapCriticalElementColor)}.ui5-message-strip-icon-wrapper{position:absolute;top:var(--_ui5-v1-23-1_message_strip_icon_top);inset-inline-start:.75rem;box-sizing:border-box}.ui5-message-strip-text{width:100%;color:var(--sapTextColor);line-height:1.2;font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize)}.ui5-message-strip-close-button{height:1.625rem;min-height:1.625rem;position:absolute;top:var(--_ui5-v1-23-1_message_strip_close_button_top);inset-inline-end:var(--_ui5-v1-23-1_message_strip_close_button_right)}
`};var p=function(e,t,o,c){var d=arguments.length,n=d<3?t:c===null?c=Object.getOwnPropertyDescriptor(t,o):c,u;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,o,c);else for(var h=e.length-1;h>=0;h--)(u=e[h])&&(n=(d<3?u(n):d>3?u(t,o,n):u(t,o))||n);return d>3&&n&&Object.defineProperty(t,o,n),n},s,f;(function(e){e.Information="ui5-message-strip-root--info",e.Positive="ui5-message-strip-root--positive",e.Negative="ui5-message-strip-root--negative",e.Warning="ui5-message-strip-root--warning"})(f||(f={}));var v;(function(e){e.Information="information",e.Positive="sys-enter-2",e.Negative="error",e.Warning="alert"})(v||(v={}));let i=s=class extends S{_closeClick(){this.fireEvent("close")}static async onDefine(){s.i18nBundle=await x("@ui5/webcomponents")}static designAnnouncementMappings(){const t=o=>s.i18nBundle.getText(o);return{Information:t(W),Positive:t($),Negative:t(U),Warning:t(A)}}get hiddenText(){return`${s.designAnnouncementMappings()[this.design]} ${this.hideCloseButton?"":this._closableText}`}get _closeButtonText(){return s.i18nBundle.getText(D)}get _closableText(){return s.i18nBundle.getText(R)}get classes(){return{root:{"ui5-message-strip-root":!0,"ui5-message-strip-root-hide-icon":this.hideIcon,"ui5-message-strip-root-hide-close-button":this.hideCloseButton,[this.designClasses]:!0}}}get iconProvided(){return this.icon.length>0}get standardIconName(){return v[this.design]}get designClasses(){return f[this.design]}};p([b({type:_,defaultValue:_.Information})],i.prototype,"design",void 0);p([b({type:Boolean})],i.prototype,"hideIcon",void 0);p([b({type:Boolean})],i.prototype,"hideCloseButton",void 0);p([E()],i.prototype,"icon",void 0);i=s=p([C({tag:"ui5-message-strip",languageAware:!0,renderer:N,template:O,styles:H,dependencies:[P,B]}),M("close")],i);i.define();const G=i,j=Object.freeze(Object.defineProperty({__proto__:null,default:G},Symbol.toStringTag,{value:"Module"})),l=T("ui5-message-strip",["design"],["hideCloseButton","hideIcon"],["icon"],["close"],()=>w(()=>Promise.resolve().then(()=>j),void 0,import.meta.url));l.displayName="MessageStrip";try{l.displayName="MessageStrip",l.__docgenInfo={description:`The \`MessageStrip\` component enables the embedding of app-related messages.
It displays 4 designs of messages, each with corresponding semantic color and icon: Information, Positive, Warning and Negative.
Each message can have a Close button, so that it can be removed from the UI, if needed.

### Usage

For the \`MessageStrip\` component, you can define whether it displays
an icon in the beginning and a close button. Moreover, its size and background
can be controlled with CSS.

### Keyboard Handling

#### Fast Navigation
This component provides a build in fast navigation group which can be used via \`F6 / Shift + F6\` or \` Ctrl + Alt(Option) + Down /  Ctrl + Alt(Option) + Up\`.
In order to use this functionality, you need to import the following module:
\`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)`,displayName:"MessageStrip",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the content to be displayed as graphical element within the component.

**Note:** If no icon is given, the default icon for the component type will be used.
The SAP-icons font provides numerous options.

See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="icon"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"icon",required:!1,type:{name:"UI5WCSlotsNode"}},onClose:{defaultValue:null,description:`Fired when the close button is pressed either with a
click/tap or by using the Enter or Space key.`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<MessageStripDomRef, never>) => void"}},design:{defaultValue:{value:'"Information"'},description:"Defines the component type.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Warning"'},{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Warning"'}]}},hideCloseButton:{defaultValue:{value:"false"},description:"Defines whether the MessageStrip renders close button.",name:"hideCloseButton",required:!1,type:{name:"boolean"}},hideIcon:{defaultValue:{value:"false"},description:"Defines whether the MessageStrip will show an icon in the beginning.\nYou can directly provide an icon with the `icon` slot. Otherwise, the default icon for the type will be used.",name:"hideIcon",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{l.displayName="MessageStrip",l.__docgenInfo={description:`The \`MessageStrip\` component enables the embedding of app-related messages.
It displays 4 designs of messages, each with corresponding semantic color and icon: Information, Positive, Warning and Negative.
Each message can have a Close button, so that it can be removed from the UI, if needed.

### Usage

For the \`MessageStrip\` component, you can define whether it displays
an icon in the beginning and a close button. Moreover, its size and background
can be controlled with CSS.

### Keyboard Handling

#### Fast Navigation
This component provides a build in fast navigation group which can be used via \`F6 / Shift + F6\` or \` Ctrl + Alt(Option) + Down /  Ctrl + Alt(Option) + Up\`.
In order to use this functionality, you need to import the following module:
\`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)`,displayName:"MessageStrip",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the content to be displayed as graphical element within the component.

**Note:** If no icon is given, the default icon for the component type will be used.
The SAP-icons font provides numerous options.

See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="icon"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"icon",required:!1,type:{name:"UI5WCSlotsNode"}},onClose:{defaultValue:null,description:`Fired when the close button is pressed either with a
click/tap or by using the Enter or Space key.`,name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<MessageStripDomRef, never>) => void"}},design:{defaultValue:{value:'"Information"'},description:"Defines the component type.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Warning"'},{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Warning"'}]}},hideCloseButton:{defaultValue:{value:"false"},description:"Defines whether the MessageStrip renders close button.",name:"hideCloseButton",required:!1,type:{name:"boolean"}},hideIcon:{defaultValue:{value:"false"},description:"Defines whether the MessageStrip will show an icon in the beginning.\nYou can directly provide an icon with the `icon` slot. Otherwise, the default icon for the type will be used.",name:"hideIcon",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{l as M,_ as a};
