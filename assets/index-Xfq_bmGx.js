function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as f}from"./iframe-NvEupkM7.js";import{U as g}from"./UI5Element-9EXj3atz.js";import{a as _,l as v,s as y,p as w,c as C,f as S,w as F}from"./withWebComponent-LTFbYRvs.js";import{s as u}from"./slot-HSrR9XJ-.js";import{R as d}from"./ResizeHandler-_qRzLmqT.js";import{o as B}from"./class-map-gjOVarQw.js";import{r as b}from"./Boot-vTaFuwdG.js";import{s as R}from"./parameters-bundle.css--8JKw2Pt.js";var h;(function(t){t.Header="Header",t.Subheader="Subheader",t.Footer="Footer",t.FloatingFooter="FloatingFooter"})(h||(h={}));const m=h;function D(t,e,n){return _`<div class="${B(this.classes.root)}" aria-label="${v(this.accInfo.label)}" role="toolbar" part="bar"><div class="ui5-bar-content-container ui5-bar-startcontent-container"><slot name="startContent"></slot></div><div class="ui5-bar-content-container ui5-bar-midcontent-container"><slot></slot></div><div class="ui5-bar-content-container ui5-bar-endcontent-container"><slot name="endContent"></slot></div></div>`}b("@ui5/webcomponents-theming","sap_horizon",async()=>y);b("@ui5/webcomponents-fiori","sap_horizon",async()=>R);const N={packageName:"@ui5/webcomponents-fiori",fileName:"themes/Bar.css.ts",content:`:host{background-color:var(--sapPageHeader_Background);height:var(--_ui5-v1-23-1_bar_base_height);width:100%;box-shadow:var(--sapContent_HeaderShadow);display:block}.ui5-bar-root{display:flex;align-items:center;justify-content:space-between;height:inherit;width:inherit;background-color:inherit;box-shadow:inherit;border-radius:inherit}.ui5-bar-root .ui5-bar-startcontent-container{padding-inline-start:var(--_ui5-v1-23-1_bar-start-container-padding-start);display:flex;flex-direction:row;align-items:center;justify-content:flex-start}.ui5-bar-root .ui5-bar-content-container{min-width:calc(30% - calc(var(--_ui5-v1-23-1_bar-start-container-padding-start) + var(--_ui5-v1-23-1_bar-end-container-padding-end) + (2*var(--_ui5-v1-23-1_bar-mid-container-padding-start-end))))}.ui5-bar-root.ui5-bar-root-shrinked .ui5-bar-content-container{min-width:0px;overflow:hidden;height:100%}.ui5-bar-root .ui5-bar-endcontent-container{padding-inline-end:var(--_ui5-v1-23-1_bar-end-container-padding-end);display:flex;flex-direction:row;align-items:center;justify-content:flex-end}.ui5-bar-root .ui5-bar-midcontent-container{padding:0 var(--_ui5-v1-23-1_bar-mid-container-padding-start-end);display:flex;flex-direction:row;align-items:center;justify-content:center}:host([design="Footer"]){background-color:var(--sapPageFooter_Background);border-top:.0625rem solid var(--sapPageFooter_BorderColor);box-shadow:none}:host([design="Subheader"]){height:var(--_ui5-v1-23-1_bar_subheader_height)}:host([design="FloatingFooter"]){border-radius:var(--sapElement_BorderCornerRadius);background-color:var(--sapPageFooter_Background);box-shadow:var(--sapContent_Shadow1);border:none}::slotted(*){margin:0 .25rem}
`};var s=function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(l=t[c])&&(o=(i<3?l(o):i>3?l(e,n,o):l(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};let a=class extends g{get accInfo(){return{label:this.design}}constructor(){super(),this._handleResizeBound=this.handleResize.bind(this)}handleResize(){const e=this.getDomRef(),n=e.offsetWidth,r=Array.from(e.children).some(i=>i.offsetWidth>n/3);e.classList.toggle("ui5-bar-root-shrinked",r)}get classes(){return{root:{"ui5-bar-root":!0}}}onEnterDOM(){d.register(this,this._handleResizeBound),this.getDomRef().querySelectorAll(".ui5-bar-content-container").forEach(e=>{d.register(e,this._handleResizeBound)},this)}onExitDOM(){d.deregister(this,this._handleResizeBound),this.getDomRef().querySelectorAll(".ui5-bar-content-container").forEach(e=>{d.deregister(e,this._handleResizeBound)},this)}};s([w({type:m,defaultValue:m.Header})],a.prototype,"design",void 0);s([u({type:HTMLElement})],a.prototype,"startContent",void 0);s([u({type:HTMLElement,default:!0})],a.prototype,"middleContent",void 0);s([u({type:HTMLElement})],a.prototype,"endContent",void 0);a=s([C({tag:"ui5-bar",fastNavigation:!0,renderer:S,styles:N,template:D})],a);a.define();const x=a,H=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"})),p=F("ui5-bar",["design"],[],["endContent","startContent"],[],()=>f(()=>Promise.resolve().then(()=>H),void 0,import.meta.url));p.displayName="Bar";try{p.displayName="Bar",p.__docgenInfo={description:`The Bar is a container which is primarily used to hold titles, buttons and input elements
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
This component provides a build in fast navigation group which can be used via \`F6 / Shift + F6\` or \` Ctrl + Alt(Option) + Down /  Ctrl + Alt(Option) + Up\`.
In order to use this functionality, you need to import the following module:
\`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)`,displayName:"Bar",props:{children:{defaultValue:null,description:"Defines the content in the middle of the bar.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},endContent:{defaultValue:null,description:`Defines the content at the end of the bar.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="endContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"endContent",required:!1,type:{name:"UI5WCSlotsNode"}},startContent:{defaultValue:null,description:`Defines the content at the start of the bar.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="startContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"startContent",required:!1,type:{name:"UI5WCSlotsNode"}},design:{defaultValue:{value:'"Header"'},description:"Defines the component's design.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Header"'},{value:'"Subheader"'},{value:'"Footer"'},{value:'"FloatingFooter"'},{value:'"Header"'},{value:'"Subheader"'},{value:'"Footer"'},{value:'"FloatingFooter"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{p as B,m as a};
