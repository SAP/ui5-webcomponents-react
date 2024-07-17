import{_}from"./iframe-CwARS6gk.js";import{h as m,f as u,s as g,a as f,m as y,k as v,I as w,w as N}from"./withWebComponent-DykTwaBJ.js";import{d as b}from"./slot-_4yKMUwC.js";import{f as C}from"./i18nBundle-CEPDwMcb.js";import{v as T}from"./AriaLabelHelper-C5uDZewF.js";import{o as D}from"./class-map-BBkLNtsu.js";import{l as p}from"./if-defined-Pg2MF6OO.js";import{I as R}from"./Icon-C1aVUqaK.js";import{m as S,n as x}from"./i18n-defaults-Ddp6Qu_n.js";import{s as H}from"./parameters-bundle.css-BFbT_feV.js";function L(o,e,t){return m`<div class="${D(this.classes.root)}" role="region" aria-label="${p(this._getAriaLabel)}" part="root">${this._hasHeader?k.call(this,o,e,t):void 0}<div role="group" aria-label="${p(this._ariaCardContentLabel)}" part="content"><slot></slot></div></div>`}function k(o,e,t){return m`<div class="ui5-card-header-root"><slot name="header"></slot></div>`}u("@ui5/webcomponents-theming","sap_horizon",async()=>g);u("@ui5/webcomponents","sap_horizon",async()=>H);const q={packageName:"@ui5/webcomponents",fileName:"themes/Card.css.ts",content:`.ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host(:not([hidden])){display:inline-block;width:100%}.ui5-card-root{width:100%;height:100%;color:var(--sapGroup_TitleTextColor);background:var(--sapTile_Background);box-shadow:var(--_ui5-v2-0-1_card_box_shadow);border-radius:var(--_ui5-v2-0-1_card_border-radius);border:var(--_ui5-v2-0-1_card_border);overflow:hidden;font-family:"72override",var(--sapFontFamily);font-size:var(--sapFontSize);box-sizing:border-box}.ui5-card-root.ui5-card--interactive:hover{box-shadow:var(--_ui5-v2-0-1_card_hover_box_shadow)}.ui5-card-root.ui5-card--interactive:active{box-shadow:var(--_ui5-v2-0-1_card_box_shadow)}.ui5-card-root.ui5-card--nocontent{height:auto}.ui5-card-root.ui5-card--nocontent .ui5-card-header-root{border-bottom:none}.ui5-card--nocontent ::slotted([ui5-card-header]){--_ui5-v2-0-1_card_header_focus_bottom_radius: var(--_ui5-v2-0-1_card_header_focus_radius)}.ui5-card-root .ui5-card-header-root{border-bottom:var(--_ui5-v2-0-1_card_header_border)}
`};var s=function(o,e,t,d){var l=arguments.length,a=l<3?e:d===null?d=Object.getOwnPropertyDescriptor(e,t):d,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(o,e,t,d);else for(var h=o.length-1;h>=0;h--)(c=o[h])&&(a=(l<3?c(a):l>3?c(e,t,a):c(e,t))||a);return l>3&&a&&Object.defineProperty(e,t,a),a},r;let n=r=class extends w{get classes(){return{root:{"ui5-card-root":!0,"ui5-card--interactive":this._hasHeader&&this.header[0].interactive,"ui5-card--nocontent":!this.content.length}}}get _hasHeader(){return!!this.header.length}get _getAriaLabel(){const e=T(this),t=e?` ${e}`:"";return r.i18nBundle.getText(S)+t}get _ariaCardContentLabel(){return r.i18nBundle.getText(x)}static async onDefine(){r.i18nBundle=await C("@ui5/webcomponents")}};s([f()],n.prototype,"accessibleName",void 0);s([f()],n.prototype,"accessibleNameRef",void 0);s([b({type:HTMLElement,default:!0})],n.prototype,"content",void 0);s([b({type:HTMLElement,invalidateOnChildChange:!0})],n.prototype,"header",void 0);n=r=s([y({tag:"ui5-card",languageAware:!0,renderer:v,template:L,styles:q,dependencies:[R]})],n);n.define();const I=n,A=Object.freeze(Object.defineProperty({__proto__:null,default:I},Symbol.toStringTag,{value:"Module"})),i=N("ui5-card",["accessibleName","accessibleNameRef"],[],["header"],[],()=>_(()=>Promise.resolve().then(()=>A),void 0,import.meta.url));i.displayName="Card";try{i.displayName="Card",i.__docgenInfo={description:'The `Card` is a component that represents information in the form of a\ntile with separate header and content areas.\nThe content area of a `Card` can be arbitrary HTML content.\nThe header can be used through slot `header`. For which there is a `CardHeader` component to achieve the card look and feel.\n\nNote: We recommend the usage of `CardHeader` for the header slot, so advantage can be taken for keyboard handling, styling and accessibility.\n\n\n\n`import "@ui5/webcomponents/dist/CardHeader.js";` (for `CardHeader`)\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)',displayName:"Card",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the header of the component.

**Note:** Use \`CardHeader\` for the intended design.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible name of the component, which is used as the name of the card region and should be unique per card.\n\n**Note:** `accessibleName` should be always set, unless `accessibleNameRef` is set.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Defines the IDs of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{i.displayName="Card",i.__docgenInfo={description:'The `Card` is a component that represents information in the form of a\ntile with separate header and content areas.\nThe content area of a `Card` can be arbitrary HTML content.\nThe header can be used through slot `header`. For which there is a `CardHeader` component to achieve the card look and feel.\n\nNote: We recommend the usage of `CardHeader` for the header slot, so advantage can be taken for keyboard handling, styling and accessibility.\n\n\n\n`import "@ui5/webcomponents/dist/CardHeader.js";` (for `CardHeader`)\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)',displayName:"Card",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the header of the component.

**Note:** Use \`CardHeader\` for the intended design.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible name of the component, which is used as the name of the card region and should be unique per card.\n\n**Note:** `accessibleName` should be always set, unless `accessibleNameRef` is set.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Defines the IDs of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{i as C};
