import{j as e,a as y,F as _}from"./jsx-runtime-670450c2.js";import{i as S}from"./Person-4ad4078c.js";import{a as I}from"./add-cc26eba8.js";import{s as w}from"./search-5a20b926.js";import{S as v}from"./index-18b5c07f.js";import{A as B}from"./index-f0af68b7.js";import{_ as C}from"./iframe-1d6fd4e8.js";import{U as D}from"./UI5Element-d1d93200.js";import{p as h,c as T,w as x}from"./withWebComponent-d280b5c2.js";import{e as P}from"./Icon-c8fd92f0.js";import{S as d}from"./index-b0120643.js";import{I as j}from"./index-8b57cb34.js";import{I as k}from"./index-0d933165.js";var p=globalThis&&globalThis.__decorate||function(n,t,a,i){var s=arguments.length,o=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,a):i,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,t,a,i);else for(var u=n.length-1;u>=0;u--)(m=n[u])&&(o=(s<3?m(o):s>3?m(t,a,o):m(t,a))||o);return s>3&&o&&Object.defineProperty(t,a,o),o};let r=class extends D{get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}fireClickEvent(t){return this.fireEvent("click",{targetRef:t.target},!0)}};p([h()],r.prototype,"icon",void 0);p([h()],r.prototype,"text",void 0);p([h()],r.prototype,"count",void 0);r=p([T("ui5-shellbar-item"),P("click",{detail:{targetRef:{type:HTMLElement}}})],r);r.define();const E=r,F=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"})),c=x("ui5-shellbar-item",["count","icon","text"],[],[],["click"],()=>C(()=>Promise.resolve().then(()=>F),void 0,import.meta.url));c.displayName="ShellBarItem";try{c.displayName="ShellBarItem",c.__docgenInfo={description:'The `ShellBarItem` represents a custom item, that might be added to the `ShellBar`.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ShellBar" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"ShellBarItem",props:{onClick:{defaultValue:null,description:"Fired, when the item is pressed.",name:"onClick",required:!1,type:{name:"MouseEventHandler<ShellBarItemDomRef>"}},count:{defaultValue:null,description:"Defines the count displayed in the top-right corner.",name:"count",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"Defines the name of the item's icon.",name:"icon",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"Defines the item text.",name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const N={title:"Layouts & Floorplans / ShellBar",component:v,argTypes:{children:{control:{disable:!0}},logo:{control:{disable:!0}},menuItems:{control:{disable:!0}},profile:{control:{disable:!0}},searchField:{control:{disable:!0}},startButton:{control:{disable:!0}}},args:{logo:e("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/sap-logo-svg.svg",alt:"SAP Logo"}),profile:e(B,{children:e("img",{src:S})}),menuItems:y(_,{children:[e(d,{"data-key":"1",children:"Menu Item 1"}),e(d,{"data-key":"2",children:"Menu Item 2"}),e(d,{"data-key":"3",children:"Menu Item 3"})]}),searchField:e(j,{showClearIcon:!0,icon:e(k,{name:w,interactive:!0})}),notificationsCount:"10",primaryTitle:"Shell Bar",secondaryTitle:"Fiori 3 Shell Bar",showCoPilot:!0,showNotifications:!0,showProductSwitch:!0,children:e(c,{count:"3",text:"ShellBarItem",icon:I})}},l={};var f,g,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(b=(g=l.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const O=["Default"],Q=Object.freeze(Object.defineProperty({__proto__:null,Default:l,__namedExportsOrder:O,default:N},Symbol.toStringTag,{value:"Module"}));export{Q as C,l as D,c as S};
//# sourceMappingURL=ShellBar.stories-b27e20e3.js.map
