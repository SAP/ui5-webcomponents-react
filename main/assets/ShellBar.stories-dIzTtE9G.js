import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{S}from"./Person-o3Ccn4tW.js";import{a as _}from"./add-KXZ01tVz.js";import{s as b}from"./search-mSdVL96u.js";import{S as I}from"./index-WpQ1iDOI.js";import{S as u}from"./index-VZee3K3R.js";import{_ as v}from"./iframe-Lw9Evt3s.js";import{U as w}from"./UI5Element-66_7Xn_3.js";import{p as h,c as x,w as j}from"./withWebComponent-2sjwM42G.js";import{e as B}from"./Icon-Pjew2RCR.js";import{A as C}from"./index-jnaUnQ4S.js";import{I as D}from"./index-_70RASvO.js";import{I as E}from"./index-tyGgJ5Dg.js";var p=function(n,t,l,i){var s=arguments.length,o=s<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,l):i,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,t,l,i);else for(var d=n.length-1;d>=0;d--)(m=n[d])&&(o=(s<3?m(o):s>3?m(t,l,o):m(t,l))||o);return s>3&&o&&Object.defineProperty(t,l,o),o};let r=class extends w{get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}fireClickEvent(t){return this.fireEvent("click",{targetRef:t.target},!0)}};p([h()],r.prototype,"icon",void 0);p([h()],r.prototype,"text",void 0);p([h()],r.prototype,"count",void 0);r=p([x("ui5-shellbar-item"),B("click",{detail:{targetRef:{type:HTMLElement}}})],r);r.define();const P=r,T=Object.freeze(Object.defineProperty({__proto__:null,default:P},Symbol.toStringTag,{value:"Module"})),c=j("ui5-shellbar-item",["count","icon","text"],[],[],["click"],()=>v(()=>Promise.resolve().then(()=>T),void 0,import.meta.url));c.displayName="ShellBarItem";try{c.displayName="ShellBarItem",c.__docgenInfo={description:"The `ShellBarItem` represents a custom item, that might be added to the `ShellBar`.",displayName:"ShellBarItem",props:{onClick:{defaultValue:null,description:"Fired, when the item is pressed.",name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<ShellBarItemDomRef, ShellBarItemClickEventDetail>) => void"}},count:{defaultValue:null,description:"Defines the count displayed in the top-right corner.",name:"count",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"Defines the name of the item's icon.",name:"icon",required:!1,type:{name:"string"}},text:{defaultValue:null,description:`Defines the item text.

**Note:** The text is only displayed inside the overflow popover list view.`,name:"text",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const N={title:"Layouts & Floorplans / ShellBar",component:I,argTypes:{children:{control:{disable:!0}},logo:{control:{disable:!0}},menuItems:{control:{disable:!0}},profile:{control:{disable:!0}},searchField:{control:{disable:!0}},startButton:{control:{disable:!0}}},args:{logo:e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/assets/images/sap-logo-svg.svg",alt:"SAP Logo"}),profile:e.jsx(C,{children:e.jsx("img",{src:S})}),menuItems:e.jsxs(e.Fragment,{children:[e.jsx(u,{"data-key":"1",children:"Menu Item 1"}),e.jsx(u,{"data-key":"2",children:"Menu Item 2"}),e.jsx(u,{"data-key":"3",children:"Menu Item 3"})]}),searchField:e.jsx(D,{showClearIcon:!0,icon:e.jsx(E,{name:b,interactive:!0})}),notificationsCount:"10",primaryTitle:"Shell Bar",secondaryTitle:"Fiori 3 Shell Bar",showCoPilot:!0,showNotifications:!0,showProductSwitch:!0,children:e.jsx(c,{count:"3",text:"ShellBarItem",icon:_})}},a={};var f,y,g;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(g=(y=a.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const O=["Default"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:O,default:N},Symbol.toStringTag,{value:"Module"}));export{J as C,a as D,c as S};
//# sourceMappingURL=ShellBar.stories-dIzTtE9G.js.map
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}