import{j as d,l as h,f,s as b,a as y,m as x,p as w,I as _,w as v}from"./withWebComponent-BS26LpJo.js";import{d as g}from"./slot-_4yKMUwC.js";import"./utils-4GUSeNxV.js";import{f as T}from"./i18nBundle-BUZJrdsA.js";import{t as I}from"./willShowContent-CZcfsNXp.js";import{a1 as N,a2 as S}from"./i18n-defaults-DyAOnJXW.js";import{s as O}from"./parameters-bundle.css-Bga-3Zi8.js";import{d as D}from"./useIsomorphicLayoutEffect-BErBnqdY.js";var u;(function(e){e.Off="Off",e.On="On"})(u||(u={}));const C=u;function M(e,t,n){return d`<span>${this._renderEmptyIndicator?R.call(this,e,t,n):q.call(this,e,t,n)}</span>`}function R(e,t,n){return d`<span class="empty-indicator" aria-hidden="true">${h(this._emptyIndicatorSymbol)}</span><span class="empty-indicator-aria-label">${h(this._emptyIndicatorAriaLabel)}</span>`}function q(e,t,n){return d`<slot></slot>`}f("@ui5/webcomponents-theming","sap_horizon",async()=>b);f("@ui5/webcomponents","sap_horizon",async()=>O);const E={packageName:"@ui5/webcomponents",fileName:"themes/Text.css.ts",content:`:host{display:inline-block;max-width:100%;font-size:var(--sapFontSize);font-family:var(--sapFontFamily);color:var(--sapTextColor);line-height:normal;white-space:pre-line;word-wrap:break-word;cursor:text}:host([max-lines]){display:-webkit-box;-webkit-line-clamp:var(--_ui5-v2-2-0_text_max_lines);line-clamp:var(--_ui5-v2-2-0_text_max_lines);-webkit-box-orient:vertical;overflow:hidden;white-space:normal}.empty-indicator-aria-label{position:absolute!important;clip:rect(1px,1px,1px,1px);user-select:none;left:0;top:0;font-size:0}
`};var c=function(e,t,n,r){var l=arguments.length,o=l<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var m=e.length-1;m>=0;m--)(p=e[m])&&(o=(l<3?p(o):l>3?p(t,n,o):p(t,n))||o);return l>3&&o&&Object.defineProperty(t,n,o),o},i;let a=i=class extends _{constructor(){super(...arguments),this.maxLines=1/0,this.emptyIndicatorMode="Off"}static async onDefine(){i.i18nBundle=await T("@ui5/webcomponents")}onBeforeRendering(){this.style.setProperty(D("--_ui5_text_max_lines"),`${this.maxLines}`)}get hasText(){return I(this.text)}get _renderEmptyIndicator(){return!this.hasText&&this.emptyIndicatorMode===C.On}get _emptyIndicatorAriaLabel(){return i.i18nBundle.getText(N)}get _emptyIndicatorSymbol(){return i.i18nBundle.getText(S)}};c([y({type:Number})],a.prototype,"maxLines",void 0);c([y()],a.prototype,"emptyIndicatorMode",void 0);c([g({type:Node,default:!0})],a.prototype,"text",void 0);a=i=c([x({tag:"ui5-text",renderer:w,template:M,styles:E})],a);a.define();const s=v("ui5-text",["emptyIndicatorMode","maxLines"],[],[],[]);s.displayName="Text";try{s.displayName="Text",s.__docgenInfo={description:`<h3>Overview</h3>

The \`Text\` component displays text that can be used in any content area of an application.

<h3>Usage</h3>

- Use the \`Text\` if you want to display text inside a form, table, or any other content area.
- Do not use the \`Text\` if you need to reference input type of components (use ui5-label).

<h3>Responsive behavior</h3>

The \`Text\` component is fully adaptive to all screen sizes.
By default, the text will wrap when the space is not enough.
In addition, the component supports truncation via the <code>max-lines</code> property,
by defining the number of lines the text should wrap before start truncating.

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/Text";</code>

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Text",props:{children:{defaultValue:null,description:"Defines the text of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},emptyIndicatorMode:{defaultValue:{value:'"Off"'},description:`Specifies if an empty indicator should be displayed when there is no text.

**Note:** Available since [v2.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.2.0) of **@ui5/webcomponents**.`,name:"emptyIndicatorMode",required:!1,type:{name:"enum",value:[{value:'"Off"'},{value:'"On"'},{value:'"Off"'},{value:'"On"'}]}},maxLines:{defaultValue:{value:"Infinity"},description:"Defines the number of lines the text should wrap before it truncates.",name:"maxLines",required:!1,type:{name:"number"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{s.displayName="Text",s.__docgenInfo={description:`<h3>Overview</h3>

The \`Text\` component displays text that can be used in any content area of an application.

<h3>Usage</h3>

- Use the \`Text\` if you want to display text inside a form, table, or any other content area.
- Do not use the \`Text\` if you need to reference input type of components (use ui5-label).

<h3>Responsive behavior</h3>

The \`Text\` component is fully adaptive to all screen sizes.
By default, the text will wrap when the space is not enough.
In addition, the component supports truncation via the <code>max-lines</code> property,
by defining the number of lines the text should wrap before start truncating.

<h3>ES6 Module Import</h3>

<code>import "@ui5/webcomponents/dist/Text";</code>

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Text",props:{children:{defaultValue:null,description:"Defines the text of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},emptyIndicatorMode:{defaultValue:{value:'"Off"'},description:`Specifies if an empty indicator should be displayed when there is no text.

**Note:** Available since [v2.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.2.0) of **@ui5/webcomponents**.`,name:"emptyIndicatorMode",required:!1,type:{name:"enum",value:[{value:'"Off"'},{value:'"On"'},{value:'"Off"'},{value:'"On"'}]}},maxLines:{defaultValue:{value:"Infinity"},description:"Defines the number of lines the text should wrap before it truncates.",name:"maxLines",required:!1,type:{name:"number"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{s as T};
