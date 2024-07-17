import{_ as m}from"./iframe-CwARS6gk.js";import{h as b,f as u,s as f,a as g,m as _,k as y,I as v,w}from"./withWebComponent-DykTwaBJ.js";import{d as p}from"./slot-_4yKMUwC.js";import{f as h}from"./ResizeHandler-CwA30WlK.js";import{o as C}from"./class-map-BBkLNtsu.js";import{l as S}from"./if-defined-Pg2MF6OO.js";import{s as N}from"./parameters-bundle.css-BFbT_feV.js";function D(a,e,t){return b`<div class="${C(this.classes.root)}" aria-label="${S(this.accInfo.label)}" role="toolbar" part="bar"><div class="ui5-bar-content-container ui5-bar-startcontent-container"><slot name="startContent"></slot></div><div class="ui5-bar-content-container ui5-bar-midcontent-container"><slot></slot></div><div class="ui5-bar-content-container ui5-bar-endcontent-container"><slot name="endContent"></slot></div></div>`}u("@ui5/webcomponents-theming","sap_horizon",async()=>f);u("@ui5/webcomponents","sap_horizon",async()=>N);const F={packageName:"@ui5/webcomponents",fileName:"themes/Bar.css.ts",content:`:host{background-color:var(--sapPageHeader_Background);height:var(--_ui5-v2-0-1_bar_base_height);width:100%;box-shadow:var(--sapContent_HeaderShadow);display:block}.ui5-bar-root{display:flex;align-items:center;justify-content:space-between;height:inherit;width:inherit;background-color:inherit;box-shadow:inherit;border-radius:inherit}.ui5-bar-root .ui5-bar-startcontent-container{padding-inline-start:var(--_ui5-v2-0-1_bar-start-container-padding-start);display:flex;flex-direction:row;align-items:center;justify-content:flex-start}.ui5-bar-root .ui5-bar-content-container{min-width:calc(30% - calc(var(--_ui5-v2-0-1_bar-start-container-padding-start) + var(--_ui5-v2-0-1_bar-end-container-padding-end) + (2*var(--_ui5-v2-0-1_bar-mid-container-padding-start-end))))}.ui5-bar-root.ui5-bar-root-shrinked .ui5-bar-content-container{min-width:0px;overflow:hidden;height:100%}.ui5-bar-root .ui5-bar-endcontent-container{padding-inline-end:var(--_ui5-v2-0-1_bar-end-container-padding-end);display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.ui5-bar-root .ui5-bar-midcontent-container{padding:0 var(--_ui5-v2-0-1_bar-mid-container-padding-start-end);display:flex;flex-direction:row;align-items:center;justify-content:center}:host([design="Footer"]){background-color:var(--sapPageFooter_Background);border-top:.0625rem solid var(--sapPageFooter_BorderColor);box-shadow:none}:host([design="Subheader"]){height:var(--_ui5-v2-0-1_bar_subheader_height);margin-top:var(--_ui5-v2-0-1_bar_subheader_margin-top)}:host([design="FloatingFooter"]){border-radius:var(--sapElement_BorderCornerRadius);background-color:var(--sapPageFooter_Background);box-shadow:var(--sapContent_Shadow1);border:none}::slotted(*){margin:0 .25rem}
`};var l=function(a,e,t,r){var i=arguments.length,n=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,d;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(a,e,t,r);else for(var c=a.length-1;c>=0;c--)(d=a[c])&&(n=(i<3?d(n):i>3?d(e,t,n):d(e,t))||n);return i>3&&n&&Object.defineProperty(e,t,n),n};let o=class extends v{get accInfo(){return{label:this.design}}constructor(){super(),this.design="Header",this._handleResizeBound=this.handleResize.bind(this)}handleResize(){const e=this.getDomRef(),t=e.offsetWidth,r=Array.from(e.children).some(i=>i.offsetWidth>t/3);e.classList.toggle("ui5-bar-root-shrinked",r)}get classes(){return{root:{"ui5-bar-root":!0}}}onEnterDOM(){h.register(this,this._handleResizeBound),this.getDomRef().querySelectorAll(".ui5-bar-content-container").forEach(e=>{h.register(e,this._handleResizeBound)},this)}onExitDOM(){h.deregister(this,this._handleResizeBound),this.getDomRef().querySelectorAll(".ui5-bar-content-container").forEach(e=>{h.deregister(e,this._handleResizeBound)},this)}};l([g()],o.prototype,"design",void 0);l([p({type:HTMLElement})],o.prototype,"startContent",void 0);l([p({type:HTMLElement,default:!0})],o.prototype,"middleContent",void 0);l([p({type:HTMLElement})],o.prototype,"endContent",void 0);o=l([_({tag:"ui5-bar",fastNavigation:!0,renderer:y,styles:F,template:D})],o);o.define();const B=o,T=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"})),s=w("ui5-bar",["design"],[],["endContent","startContent"],[],()=>m(()=>Promise.resolve().then(()=>T),void 0,import.meta.url));s.displayName="Bar";try{s.displayName="Bar",s.__docgenInfo={description:`The Bar is a container which is primarily used to hold titles, buttons and input elements
and its design and functionality is the basis for page headers and footers.
The component consists of three areas to hold its content - startContent slot, default slot and endContent slot.
It has the capability to center content, such as a title, while having other components on the left and right side.

### Usage
With the use of the design property, you can set the style of the Bar to appear designed like a Header, Subheader, Footer and FloatingFooter.

**Note:** Do not place a Bar inside another Bar or inside any bar-like component. Doing so may cause unpredictable behavior.

### Responsive Behavior
The default slot will be centered in the available space between the startContent and the endContent areas,
therefore it might not always be centered in the entire bar.

### Keyboard Handling

#### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:
\`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Bar",props:{children:{defaultValue:null,description:"Defines the content in the middle of the bar.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},endContent:{defaultValue:null,description:`Defines the content at the end of the bar.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="endContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"endContent",required:!1,type:{name:"UI5WCSlotsNode"}},startContent:{defaultValue:null,description:`Defines the content at the start of the bar.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="startContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"startContent",required:!1,type:{name:"UI5WCSlotsNode"}},design:{defaultValue:{value:'"Header"'},description:"Defines the component's design.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Header"'},{value:'"Subheader"'},{value:'"Footer"'},{value:'"FloatingFooter"'},{value:'"Header"'},{value:'"Subheader"'},{value:'"Footer"'},{value:'"FloatingFooter"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{s.displayName="Bar",s.__docgenInfo={description:`The Bar is a container which is primarily used to hold titles, buttons and input elements
and its design and functionality is the basis for page headers and footers.
The component consists of three areas to hold its content - startContent slot, default slot and endContent slot.
It has the capability to center content, such as a title, while having other components on the left and right side.

### Usage
With the use of the design property, you can set the style of the Bar to appear designed like a Header, Subheader, Footer and FloatingFooter.

**Note:** Do not place a Bar inside another Bar or inside any bar-like component. Doing so may cause unpredictable behavior.

### Responsive Behavior
The default slot will be centered in the available space between the startContent and the endContent areas,
therefore it might not always be centered in the entire bar.

### Keyboard Handling

#### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:
\`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Bar",props:{children:{defaultValue:null,description:"Defines the content in the middle of the bar.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},endContent:{defaultValue:null,description:`Defines the content at the end of the bar.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="endContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"endContent",required:!1,type:{name:"UI5WCSlotsNode"}},startContent:{defaultValue:null,description:`Defines the content at the start of the bar.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="startContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"startContent",required:!1,type:{name:"UI5WCSlotsNode"}},design:{defaultValue:{value:'"Header"'},description:"Defines the component's design.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Header"'},{value:'"Subheader"'},{value:'"Footer"'},{value:'"FloatingFooter"'},{value:'"Header"'},{value:'"Subheader"'},{value:'"Footer"'},{value:'"FloatingFooter"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{s as B};
