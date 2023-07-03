import{_ as w}from"./iframe-e3fb29ee.js";import{a as y,U as S,d as I}from"./UI5Element-3b11b083.js";import{e as a,l as r,s as u,a as C,b as T,p as b,c as N,d as E,w as k}from"./withWebComponent-d4224c1c.js";import{s as x}from"./slot-76e48863.js";import{I as B,e as M}from"./Icon-9aa64f88.js";import"./decline-5f59d729.js";import"./information-73174d4b.js";import{o as P}from"./class-map-18f572ce.js";import{a as $}from"./Button-86524f67.js";import{M as R,a as W,b as A,c as D,d as O,e as U}from"./i18n-defaults-f002f496.js";var g;(function(e){e.Information="Information",e.Positive="Positive",e.Negative="Negative",e.Warning="Warning"})(g||(g={}));const _=g;function V(e,t,n){return a`<div class="${P(this.classes.root)}" id="${r(this._id)}" role="note" aria-live="assertive" aria-labelledby="${r(this._id)}">${this.hideIcon?void 0:q.call(this,e,t,n)}<span class="ui5-hidden-text">${r(this.hiddenText)}</span><span class="ui5-message-strip-text"><slot></slot></span>${this.hideCloseButton?void 0:L.call(this,e,t,n)}</div>`}function q(e,t,n){return a`<div class="ui5-message-strip-icon-wrapper" aria-hidden="true">${this.iconProvided?F.call(this,e,t,n):G.call(this,e,t,n)}</div>`}function F(e,t,n){return a`<slot name="icon"></slot>`}function G(e,t,n){return n?a`<${u("ui5-icon",t,n)} name="${r(this.standardIconName)}" class="ui5-message-strip-icon"></${u("ui5-icon",t,n)}>`:a`<ui5-icon name="${r(this.standardIconName)}" class="ui5-message-strip-icon"></ui5-icon>`}function L(e,t,n){return n?a`<${u("ui5-button",t,n)} icon="decline" design="Transparent" class="ui5-message-strip-close-button" tooltip="${r(this._closeButtonText)}" @click=${this._closeClick}></${u("ui5-button",t,n)}>`:a`<ui5-button icon="decline" design="Transparent" class="ui5-message-strip-close-button" tooltip="${r(this._closeButtonText)}" @click=${this._closeClick}></ui5-button>`}y("@ui5/webcomponents-theming","sap_fiori_3",async()=>C);y("@ui5/webcomponents","sap_fiori_3",async()=>T);const z={packageName:"@ui5/webcomponents",fileName:"themes/MessageStrip.css",content:`.ui5-hidden-text {
	position: absolute;
	clip: rect(1px,1px,1px,1px);
	user-select: none;
	left: -1000px; /* ensure the invisible texts are never part of the viewport */
	top: -1000px;
	pointer-events: none;
	font-size: 0;
}

:host(:not([hidden])) {
	display: inline-block;
	width: 100%;
}

/** Root classes **/

.ui5-message-strip-root {
	width: 100%;
	height: 100%;
	display: flex;
	border-radius: var(--sapPopover_BorderCornerRadius);
	padding: var(--_ui5_message_strip_padding);
	border-width: var(--_ui5_message_strip_border_width);
	border-style: solid;
	box-sizing: border-box;
	position: relative;
}

.ui5-message-strip-root-hide-icon {
	padding-inline: var(--_ui5_message_strip_padding_inline_no_icon);
	padding-block: var(--_ui5_message_strip_padding_block_no_icon);
}

.ui5-message-strip-root-hide-close-button {
	padding-inline-end: 1rem;
}

.ui5-message-strip-root--info {
	background-color: var(--sapInformationBackground);
	border-color: var(--sapMessage_InformationBorderColor);
	color: var(--sapTextColor);
}

.ui5-message-strip-root--info .ui5-message-strip-icon {
	color: var(--sapInformativeElementColor);
}

.ui5-message-strip-root--positive {
	background-color: var(--sapSuccessBackground);
	border-color: var(--sapMessage_SuccessBorderColor);
}

.ui5-message-strip-root--positive .ui5-message-strip-icon {
	color: var(--sapPositiveElementColor);
}

.ui5-message-strip-root--negative {
	background-color: var(--sapErrorBackground);
	border-color: var(--sapMessage_ErrorBorderColor);
}

.ui5-message-strip-root--negative .ui5-message-strip-icon {
	color: var(--sapNegativeElementColor);
}

.ui5-message-strip-root--warning {
	background-color: var(--sapWarningBackground);
	border-color: var(--sapMessage_WarningBorderColor);
}

.ui5-message-strip-root--warning .ui5-message-strip-icon {
	color: var(--sapCriticalElementColor);
}

/** Icon wrapper **/

.ui5-message-strip-icon-wrapper {
	position: absolute;
	top: var(--_ui5_message_strip_icon_top);
	inset-inline-start: 0.75rem;
	box-sizing: border-box;
}

/** Text **/

.ui5-message-strip-text {
	width: 100%;
	color: var(--sapTextColor);
	line-height: 1.2;
	font-family: "72override", var(--sapFontFamily);
	font-size: var(--sapFontSize);
}

/** Close button - always in compact mode **/

.ui5-message-strip-close-button {
	width: 2rem;
	min-width: 2rem;
	height: 1.65rem;
	min-height: 1.65rem;
	position: absolute;
	top: var(--_ui5_message_strip_close_button_top);
	inset-inline-end: var(--_ui5_message_strip_close_button_right);
}`};var l=globalThis&&globalThis.__decorate||function(e,t,n,p){var c=arguments.length,o=c<3?t:p===null?p=Object.getOwnPropertyDescriptor(t,n):p,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,p);else for(var h=e.length-1;h>=0;h--)(d=e[h])&&(o=(c<3?d(o):c>3?d(t,n,o):d(t,n))||o);return c>3&&o&&Object.defineProperty(t,n,o),o},s,f;(function(e){e.Information="ui5-message-strip-root--info",e.Positive="ui5-message-strip-root--positive",e.Negative="ui5-message-strip-root--negative",e.Warning="ui5-message-strip-root--warning"})(f||(f={}));var v;(function(e){e.Information="information",e.Positive="sys-enter-2",e.Negative="error",e.Warning="alert"})(v||(v={}));let i=s=class extends S{_closeClick(){this.fireEvent("close")}static async onDefine(){s.i18nBundle=await I("@ui5/webcomponents")}static designAnnouncementMappings(){const t=n=>s.i18nBundle.getText(n);return{Information:t(A),Positive:t(D),Negative:t(O),Warning:t(U)}}get hiddenText(){return`${s.designAnnouncementMappings()[this.design]} ${this.hideCloseButton?"":this._closableText}`}get _closeButtonText(){return s.i18nBundle.getText(R)}get _closableText(){return s.i18nBundle.getText(W)}get classes(){return{root:{"ui5-message-strip-root":!0,"ui5-message-strip-root-hide-icon":this.hideIcon,"ui5-message-strip-root-hide-close-button":this.hideCloseButton,[this.designClasses]:!0}}}get iconProvided(){return this.icon.length>0}get standardIconName(){return v[this.design]}get designClasses(){return f[this.design]}};l([b({type:_,defaultValue:_.Information})],i.prototype,"design",void 0);l([b({type:Boolean})],i.prototype,"hideIcon",void 0);l([b({type:Boolean})],i.prototype,"hideCloseButton",void 0);l([x()],i.prototype,"icon",void 0);i=s=l([N({tag:"ui5-message-strip",languageAware:!0,renderer:E,template:V,styles:z,dependencies:[B,$]}),M("close")],i);i.define();const j=i,H=Object.freeze(Object.defineProperty({__proto__:null,default:j},Symbol.toStringTag,{value:"Module"})),m=k("ui5-message-strip",["design"],["hideCloseButton","hideIcon"],["icon"],["close"],()=>w(()=>Promise.resolve().then(()=>H),void 0,import.meta.url));m.displayName="MessageStrip";m.defaultProps={design:_.Information};try{m.displayName="MessageStrip",m.__docgenInfo={description:`The \`MessageStrip\` component enables the embedding of app-related messages. It displays 4 designs of messages, each with corresponding semantic color and icon: Information, Positive, Warning and Negative. Each message can have a Close button, so that it can be removed from the UI, if needed.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-MessageStrip" target="_blank">UI5 Web Components Storybook</ui5-link>`,displayName:"MessageStrip",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the content to be displayed as graphical element within the component.

**Note:** If no icon is given, the default icon for the component type will be used. The SAP-icons font provides numerous options.

See all the available icons in the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="icon"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"icon",required:!1,type:{name:"UI5WCSlotsNode"}},onClose:{defaultValue:null,description:"Fired when the close button is pressed either with a click/tap or by using the Enter or Space key.",name:"onClose",required:!1,type:{name:"(event: Ui5CustomEvent<MessageStripDomRef, never>) => void"}},design:{defaultValue:{value:"MessageStripDesign.Information"},description:'Defines the component type.\n\n**Note:** Available options are `"Information"`, `"Positive"`, `"Negative"`, and `"Warning"`.',name:"design",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Warning"'},{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Warning"'}]}},hideCloseButton:{defaultValue:null,description:"Defines whether the MessageStrip renders close button.",name:"hideCloseButton",required:!1,type:{name:"boolean"}},hideIcon:{defaultValue:null,description:"Defines whether the MessageStrip will show an icon in the beginning. You can directly provide an icon with the `icon` slot. Otherwise, the default icon for the type will be used.",name:"hideIcon",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{m as M,_ as a};
//# sourceMappingURL=index-7bd71341.js.map
