import{j as e}from"./useIsomorphicLayoutEffect-DCJrFAVs.js";import{i as _}from"./Person-Bk5r7PMP.js";import{a as b}from"./add-APQsH61h.js";import{s as S}from"./search-CFpcT0Su.js";import{S as v}from"./index-BYZLf8GG.js";import{_ as w}from"./iframe-ocS5gnjC.js";import{a as h,m as I,I as x,w as C}from"./withWebComponent-Bw_l6Ewh.js";import{s as D}from"./event-Dq0fpeHi.js";import{A as B}from"./index-B3SeZbdu.js";import{L as u}from"./index-Bh1bpvob.js";import{I as N}from"./index-DzAQfYON.js";import{I as j}from"./index-BCSAYPQa.js";var d=function(i,t,a,s){var m=arguments.length,n=m<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,a):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(i,t,a,s);else for(var p=i.length-1;p>=0;p--)(c=i[p])&&(n=(m<3?c(n):m>3?c(t,a,n):c(t,a))||n);return m>3&&n&&Object.defineProperty(t,a,n),n};let o=class extends x{get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}fireClickEvent(t){return this.fireEvent("click",{targetRef:t.target},!0)}};d([h()],o.prototype,"icon",void 0);d([h()],o.prototype,"text",void 0);d([h()],o.prototype,"count",void 0);o=d([I("ui5-shellbar-item"),D("click",{detail:{targetRef:{type:HTMLElement}}})],o);o.define();const T=o,V=Object.freeze(Object.defineProperty({__proto__:null,default:T},Symbol.toStringTag,{value:"Module"})),r=C("ui5-shellbar-item",["count","icon","text"],[],[],["click"],()=>w(()=>Promise.resolve().then(()=>V),void 0,import.meta.url));r.displayName="ShellBarItem";try{r.displayName="ShellBarItem",r.__docgenInfo={description:`The \`ShellBarItem\` represents a custom item, that
might be added to the \`ShellBar\`.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ShellBarItem",props:{onClick:{defaultValue:null,description:"Fired, when the item is pressed.\n\n**Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.",name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<ShellBarItemDomRef, ShellBarItemClickEventDetail>) => void"}},count:{defaultValue:{value:"undefined"},description:"Defines the count displayed in the top-right corner.",name:"count",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"undefined"},description:"Defines the name of the item's icon.",name:"icon",required:!1,type:{name:"string"}},text:{defaultValue:{value:"undefined"},description:`Defines the item text.

  **Note:** The text is only displayed inside the overflow popover list view.`,name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{r.displayName="ShellBarItem",r.__docgenInfo={description:`The \`ShellBarItem\` represents a custom item, that
might be added to the \`ShellBar\`.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ShellBarItem",props:{onClick:{defaultValue:null,description:"Fired, when the item is pressed.\n\n**Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.",name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<ShellBarItemDomRef, ShellBarItemClickEventDetail>) => void"}},count:{defaultValue:{value:"undefined"},description:"Defines the count displayed in the top-right corner.",name:"count",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"undefined"},description:"Defines the name of the item's icon.",name:"icon",required:!1,type:{name:"string"}},text:{defaultValue:{value:"undefined"},description:`Defines the item text.

  **Note:** The text is only displayed inside the overflow popover list view.`,name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const k={title:"Layouts & Floorplans / ShellBar",component:v,argTypes:{children:{control:{disable:!0}},logo:{control:{disable:!0}},menuItems:{control:{disable:!0}},profile:{control:{disable:!0}},searchField:{control:{disable:!0}},startButton:{control:{disable:!0}}},args:{logo:e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/sap-logo-svg.svg",alt:"SAP Logo"}),profile:e.jsx(B,{children:e.jsx("img",{src:_})}),menuItems:e.jsxs(e.Fragment,{children:[e.jsx(u,{"data-key":"1",children:"Menu Item 1"}),e.jsx(u,{"data-key":"2",children:"Menu Item 2"}),e.jsx(u,{"data-key":"3",children:"Menu Item 3"})]}),searchField:e.jsx(N,{showClearIcon:!0,icon:e.jsx(j,{name:S})}),notificationsCount:"10",primaryTitle:"Shell Bar",secondaryTitle:"Secondary Title",showNotifications:!0,showProductSwitch:!0,children:e.jsx(r,{count:"3",text:"ShellBarItem",icon:b})},tags:["package:@ui5/webcomponents-fiori"]},l={};var f,y,g;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(g=(y=l.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const q=["Default"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:l,__namedExportsOrder:q,default:k},Symbol.toStringTag,{value:"Module"}));export{G as C,l as D,r as S};
