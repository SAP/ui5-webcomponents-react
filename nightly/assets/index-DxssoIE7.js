import{f as g,c as i,d as _,s as r,p as f,m as w,a4 as N,aQ as C,w as S}from"./iframe-BGSq42U4.js";import{p as v,d as m,a as y,v as b}from"./i18n-DCXZOGva.js";import{d as x}from"./parameters-bundle.css-MDhRcvbE.js";var c;(function(t){t.Auto="Auto",t.Collapsed="Collapsed",t.Expanded="Expanded"})(c||(c={}));function L(){return g("div",{class:"ui5-nl-root",children:[i("header",{class:"ui5-nl-header",children:i("slot",{name:"header"})}),g("section",{class:"ui5-nl-section",children:[i("aside",{class:"ui5-nl-aside",children:i("slot",{name:"sideContent"})}),i("div",{class:"ui5-nl-content",children:i("slot",{})})]})]})}v("@ui5/webcomponents-theming","sap_horizon",async()=>_);v("@ui5/webcomponents-fiori","sap_horizon",async()=>x);const T=`:host(:not([hidden])){position:absolute;inset:0;display:block;background:var(--sapBackgroundColor);box-sizing:border-box;overflow:hidden}.ui5-nl-root{width:100%;height:100%;display:flex;flex-direction:column;box-sizing:border-box}.ui5-nl-header{z-index:3}.ui5-nl-section{display:flex;flex:1;min-height:0;position:relative}.ui5-nl-aside{transition:transform .3s;z-index:2}:host([is-phone]) .ui5-nl-aside{position:absolute;top:0;left:0;bottom:0;width:100%}:host([is-phone]) ::slotted([ui5-side-navigation][slot="sideContent"]){width:100%;box-shadow:none}.ui5-nl-content{flex:1;min-width:0;overflow:auto}:host([side-collapsed][is-phone]) .ui5-nl-aside{transform:translate(-100%)}:host([side-collapsed][is-phone]) :dir(rtl) .ui5-nl-aside{transform:translate(100%)}:host([has-side-navigation]) ::slotted([ui5-shellbar][slot="header"]){padding-inline:.875rem 1rem}
`;var n=function(t,o,s,d){var p=arguments.length,a=p<3?o:d===null?d=Object.getOwnPropertyDescriptor(o,s):d,h;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(t,o,s,d);else for(var u=t.length-1;u>=0;u--)(h=t[u])&&(a=(p<3?h(a):p>3?h(o,s,a):h(o,s))||a);return p>3&&a&&Object.defineProperty(o,s,a),a};let e=class extends C{constructor(){super(...arguments),this._defaultSideCollapsed=m()||y()&&!b(),this.mode="Auto",this.sideCollapsed=this._defaultSideCollapsed,this.hasSideNavigation=!1,this.isPhone=m(),this.isTablet=y()&&!b()}isSideCollapsed(){return this.calcSideCollapsed(),this.sideCollapsed}onBeforeRendering(){if(this.calcSideCollapsed(),m())return;const o=this.sideContent[0];this.hasSideNavigation=!!o,o&&(o.collapsed=this.isSideCollapsed())}calcSideCollapsed(){this.mode===c.Auto?this.sideCollapsed=this._defaultSideCollapsed:this.sideCollapsed=this.mode===c.Collapsed}};n([r()],e.prototype,"mode",void 0);n([r({type:Boolean})],e.prototype,"sideCollapsed",void 0);n([r({type:Boolean})],e.prototype,"hasSideNavigation",void 0);n([r({type:Boolean})],e.prototype,"isPhone",void 0);n([r({type:Boolean})],e.prototype,"isTablet",void 0);n([f()],e.prototype,"header",void 0);n([f()],e.prototype,"sideContent",void 0);n([f({type:HTMLElement,default:!0})],e.prototype,"content",void 0);e=n([w({tag:"ui5-navigation-layout",languageAware:!0,renderer:N,styles:[T],template:L})],e);e.define();const l=S("ui5-navigation-layout",["mode"],[],["header","sideContent"],[]);l.displayName="NavigationLayout";try{l.displayName="NavigationLayout",l.__docgenInfo={description:`The \`NavigationLayout\` is a container component that can be used to
create a layout with a header, a side navigation and a content area.

### Usage

Use the \`NavigationLayout\` to create whole screen of an application with vertical navigation.

### Responsive Behavior

On desktop and tablet devices, the side navigation is visible
by default and can be expanded or collapsed using the \`mode\` property.
On phone devices, the side navigation is hidden by default and can
be displayed using the \`mode\` property.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"NavigationLayout",props:{children:{defaultValue:null,description:"Defines the content.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the header.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},sideContent:{defaultValue:null,description:`Defines the side content.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="sideContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"sideContent",required:!1,type:{name:"UI5WCSlotsNode"}},mode:{defaultValue:{value:'"Auto"'},description:"Specifies the navigation layout mode.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"Auto"'},{value:'"Auto"'},{value:'"Collapsed"'},{value:'"Expanded"'},{value:'"Collapsed"'},{value:'"Expanded"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{l.displayName="NavigationLayout",l.__docgenInfo={description:`The \`NavigationLayout\` is a container component that can be used to
create a layout with a header, a side navigation and a content area.

### Usage

Use the \`NavigationLayout\` to create whole screen of an application with vertical navigation.

### Responsive Behavior

On desktop and tablet devices, the side navigation is visible
by default and can be expanded or collapsed using the \`mode\` property.
On phone devices, the side navigation is hidden by default and can
be displayed using the \`mode\` property.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"NavigationLayout",props:{children:{defaultValue:null,description:"Defines the content.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the header.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},sideContent:{defaultValue:null,description:`Defines the side content.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="sideContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"sideContent",required:!1,type:{name:"UI5WCSlotsNode"}},mode:{defaultValue:{value:'"Auto"'},description:"Specifies the navigation layout mode.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"Auto"'},{value:'"Auto"'},{value:'"Collapsed"'},{value:'"Expanded"'},{value:'"Collapsed"'},{value:'"Expanded"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{c as N,l as a};
