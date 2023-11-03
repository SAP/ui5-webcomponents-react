import{j as e}from"./jsx-runtime-d079401a.js";import{S}from"./Person-b8d9c2f9.js";import{a as b}from"./add-a1a70e33.js";import{s as _}from"./search-027e3008.js";import{S as I}from"./index-ea12a046.js";import{S as d}from"./index-1f508b7a.js";import{_ as v}from"./iframe-3ab1de1e.js";import{U as w}from"./UI5Element-d089e658.js";import{p as h,c as x,w as j}from"./withWebComponent-f146e44d.js";import{e as B}from"./Icon-dc979b51.js";import{A as C}from"./index-cfe770fb.js";import{I as D}from"./index-b334e816.js";import{I as T}from"./index-c0aa9757.js";var p=globalThis&&globalThis.__decorate||function(l,t,n,i){var s=arguments.length,o=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,t,n,i);else for(var u=l.length-1;u>=0;u--)(m=l[u])&&(o=(s<3?m(o):s>3?m(t,n,o):m(t,n))||o);return s>3&&o&&Object.defineProperty(t,n,o),o};let r=class extends w{get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}fireClickEvent(t){return this.fireEvent("click",{targetRef:t.target},!0)}};p([h()],r.prototype,"icon",void 0);p([h()],r.prototype,"text",void 0);p([h()],r.prototype,"count",void 0);r=p([x("ui5-shellbar-item"),B("click",{detail:{targetRef:{type:HTMLElement}}})],r);r.define();const E=r,P=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"})),c=j("ui5-shellbar-item",["count","icon","text"],[],[],["click"],()=>v(()=>Promise.resolve().then(()=>P),void 0,import.meta.url));c.displayName="ShellBarItem";try{c.displayName="ShellBarItem",c.__docgenInfo={description:"The `ShellBarItem` represents a custom item, that might be added to the `ShellBar`.",displayName:"ShellBarItem",props:{onClick:{defaultValue:null,description:"Fired, when the item is pressed.",name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<ShellBarItemDomRef, ShellBarItemClickEventDetail>) => void"}},count:{defaultValue:null,description:"Defines the count displayed in the top-right corner.",name:"count",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"Defines the name of the item's icon.",name:"icon",required:!1,type:{name:"string"}},text:{defaultValue:null,description:`Defines the item text.

**Note:** The text is only displayed inside the overflow popover list view.`,name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const N={title:"Layouts & Floorplans / ShellBar",component:I,argTypes:{children:{control:{disable:!0}},logo:{control:{disable:!0}},menuItems:{control:{disable:!0}},profile:{control:{disable:!0}},searchField:{control:{disable:!0}},startButton:{control:{disable:!0}}},args:{logo:e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/sap-logo-svg.svg",alt:"SAP Logo"}),profile:e.jsx(C,{children:e.jsx("img",{src:S})}),menuItems:e.jsxs(e.Fragment,{children:[e.jsx(d,{"data-key":"1",children:"Menu Item 1"}),e.jsx(d,{"data-key":"2",children:"Menu Item 2"}),e.jsx(d,{"data-key":"3",children:"Menu Item 3"})]}),searchField:e.jsx(D,{showClearIcon:!0,icon:e.jsx(T,{name:_,interactive:!0})}),notificationsCount:"10",primaryTitle:"Shell Bar",secondaryTitle:"Fiori 3 Shell Bar",showCoPilot:!0,showNotifications:!0,showProductSwitch:!0,children:e.jsx(c,{count:"3",text:"ShellBarItem",icon:b})}},a={};var f,g,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const O=["Default"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:O,default:N},Symbol.toStringTag,{value:"Module"}));export{J as C,a as D,c as S};
//# sourceMappingURL=ShellBar.stories-8f2b29cf.js.map
