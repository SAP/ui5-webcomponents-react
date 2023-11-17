import{_ as S}from"./iframe-Lw9Evt3s.js";import{r as y,U as w}from"./UI5Element-66_7Xn_3.js";import{b as a,l as r,d as u,s as I,a as C,p as b,c as T,f as E,w as N}from"./withWebComponent-2sjwM42G.js";import{s as x}from"./slot-HSrR9XJ-.js";import{a as M,e as k}from"./Icon-Pjew2RCR.js";import{d as B}from"./i18nBundle-Q0g0h3jg.js";import"./decline-qJ6wR11R.js";import"./information-ME8CmmmC.js";import"./alert-Ymv9FYbl.js";import{o as P}from"./class-map--IQ_mtyb.js";import{b as $}from"./Button-mmkHl5a0.js";import{M as R,z as W,E as A,F as D,H as O,I as U}from"./i18n-defaults-RBzcmDt8.js";var g;(function(e){e.Information="Information",e.Positive="Positive",e.Negative="Negative",e.Warning="Warning"})(g||(g={}));const f=g;function z(e,t,o){return a`<div class="${P(this.classes.root)}" id="${r(this._id)}" role="note" aria-live="assertive" aria-labelledby="${r(this._id)}">${this.hideIcon?void 0:V.call(this,e,t,o)}<span class="ui5-hidden-text">${r(this.hiddenText)}</span><span class="ui5-message-strip-text"><slot></slot></span>${this.hideCloseButton?void 0:F.call(this,e,t,o)}</div>`}function V(e,t,o){return a`<div class="ui5-message-strip-icon-wrapper" aria-hidden="true">${this.iconProvided?q.call(this,e,t,o):L.call(this,e,t,o)}</div>`}function q(e,t,o){return a`<slot name="icon"></slot>`}function L(e,t,o){return o?a`<${u("ui5-icon",t,o)} name="${r(this.standardIconName)}" class="ui5-message-strip-icon"></${u("ui5-icon",t,o)}>`:a`<ui5-icon name="${r(this.standardIconName)}" class="ui5-message-strip-icon"></ui5-icon>`}function F(e,t,o){return o?a`<${u("ui5-button",t,o)} icon="decline" design="Transparent" class="ui5-message-strip-close-button" tooltip="${r(this._closeButtonText)}" @click=${this._closeClick}></${u("ui5-button",t,o)}>`:a`<ui5-button icon="decline" design="Transparent" class="ui5-message-strip-close-button" tooltip="${r(this._closeButtonText)}" @click=${this._closeClick}></ui5-button>`}y("@ui5/webcomponents-theming","sap_horizon",async()=>I);y("@ui5/webcomponents","sap_horizon",async()=>C);const G={packageName:"@ui5/webcomponents",fileName:"themes/MessageStrip.css",content:'.ui5-hidden-text{clip:rect(1px,1px,1px,1px);font-size:0;left:-1000px;pointer-events:none;position:absolute;top:-1000px;user-select:none}:host(:not([hidden])){display:inline-block;width:100%}.ui5-message-strip-root{border-radius:var(--sapPopover_BorderCornerRadius);border-style:solid;border-width:var(--_ui5-v1-19-0_message_strip_border_width);box-sizing:border-box;display:flex;height:100%;padding:var(--_ui5-v1-19-0_message_strip_padding);position:relative;width:100%}.ui5-message-strip-root-hide-icon{padding-block:var(--_ui5-v1-19-0_message_strip_padding_block_no_icon);padding-inline:var(--_ui5-v1-19-0_message_strip_padding_inline_no_icon)}.ui5-message-strip-root-hide-close-button{padding-inline-end:1rem}.ui5-message-strip-root--info{background-color:var(--sapInformationBackground);border-color:var(--sapMessage_InformationBorderColor);color:var(--sapTextColor)}.ui5-message-strip-root--info .ui5-message-strip-icon{color:var(--sapInformativeElementColor)}.ui5-message-strip-root--positive{background-color:var(--sapSuccessBackground);border-color:var(--sapMessage_SuccessBorderColor)}.ui5-message-strip-root--positive .ui5-message-strip-icon{color:var(--sapPositiveElementColor)}.ui5-message-strip-root--negative{background-color:var(--sapErrorBackground);border-color:var(--sapMessage_ErrorBorderColor)}.ui5-message-strip-root--negative .ui5-message-strip-icon{color:var(--sapNegativeElementColor)}.ui5-message-strip-root--warning{background-color:var(--sapWarningBackground);border-color:var(--sapMessage_WarningBorderColor)}.ui5-message-strip-root--warning .ui5-message-strip-icon{color:var(--sapCriticalElementColor)}.ui5-message-strip-icon-wrapper{box-sizing:border-box;inset-inline-start:.75rem;position:absolute;top:var(--_ui5-v1-19-0_message_strip_icon_top)}.ui5-message-strip-text{color:var(--sapTextColor);font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);line-height:1.2;width:100%}.ui5-message-strip-close-button{height:1.625rem;inset-inline-end:var(--_ui5-v1-19-0_message_strip_close_button_right);min-height:1.625rem;position:absolute;top:var(--_ui5-v1-19-0_message_strip_close_button_top)}'};var l=function(e,t,o,p){var c=arguments.length,i=c<3?t:p===null?p=Object.getOwnPropertyDescriptor(t,o):p,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,o,p);else for(var h=e.length-1;h>=0;h--)(d=e[h])&&(i=(c<3?d(i):c>3?d(t,o,i):d(t,o))||i);return c>3&&i&&Object.defineProperty(t,o,i),i},s,v;(function(e){e.Information="ui5-message-strip-root--info",e.Positive="ui5-message-strip-root--positive",e.Negative="ui5-message-strip-root--negative",e.Warning="ui5-message-strip-root--warning"})(v||(v={}));var _;(function(e){e.Information="information",e.Positive="sys-enter-2",e.Negative="error",e.Warning="alert"})(_||(_={}));let n=s=class extends w{_closeClick(){this.fireEvent("close")}static async onDefine(){s.i18nBundle=await B("@ui5/webcomponents")}static designAnnouncementMappings(){const t=o=>s.i18nBundle.getText(o);return{Information:t(A),Positive:t(D),Negative:t(O),Warning:t(U)}}get hiddenText(){return`${s.designAnnouncementMappings()[this.design]} ${this.hideCloseButton?"":this._closableText}`}get _closeButtonText(){return s.i18nBundle.getText(R)}get _closableText(){return s.i18nBundle.getText(W)}get classes(){return{root:{"ui5-message-strip-root":!0,"ui5-message-strip-root-hide-icon":this.hideIcon,"ui5-message-strip-root-hide-close-button":this.hideCloseButton,[this.designClasses]:!0}}}get iconProvided(){return this.icon.length>0}get standardIconName(){return _[this.design]}get designClasses(){return v[this.design]}};l([b({type:f,defaultValue:f.Information})],n.prototype,"design",void 0);l([b({type:Boolean})],n.prototype,"hideIcon",void 0);l([b({type:Boolean})],n.prototype,"hideCloseButton",void 0);l([x()],n.prototype,"icon",void 0);n=s=l([T({tag:"ui5-message-strip",languageAware:!0,renderer:E,template:z,styles:G,dependencies:[M,$]}),k("close")],n);n.define();const j=n,H=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),m=N("ui5-message-strip",["design"],["hideCloseButton","hideIcon"],["icon"],["close"],()=>S(()=>Promise.resolve().then(()=>H),void 0,import.meta.url));m.displayName="MessageStrip";m.defaultProps={design:f.Information};try{m.displayName="MessageStrip",m.__docgenInfo={description:`The \`MessageStrip\` component enables the embedding of app-related messages. It displays 4 designs of messages, each with corresponding semantic color and icon: Information, Positive, Warning and Negative. Each message can have a Close button, so that it can be removed from the UI, if needed.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-MessageStrip)`,displayName:"MessageStrip",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the content to be displayed as graphical element within the component.

**Note:** If no icon is given, the default icon for the component type will be used. The SAP-icons font provides numerous options.

See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="icon"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"icon",required:!1,type:{name:"UI5WCSlotsNode"}},onClose:{defaultValue:null,description:"Fired when the close button is pressed either with a click/tap or by using the Enter or Space key.",name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<MessageStripDomRef, never>) => void"}},design:{defaultValue:{value:"MessageStripDesign.Information"},description:"Defines the component type.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Warning"'},{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Warning"'}]}},hideCloseButton:{defaultValue:null,description:"Defines whether the MessageStrip renders close button.",name:"hideCloseButton",required:!1,type:{name:"boolean"}},hideIcon:{defaultValue:null,description:"Defines whether the MessageStrip will show an icon in the beginning. You can directly provide an icon with the `icon` slot. Otherwise, the default icon for the type will be used.",name:"hideIcon",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{m as M,f as a};
//# sourceMappingURL=index-9Rd_IMLD.js.map
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}