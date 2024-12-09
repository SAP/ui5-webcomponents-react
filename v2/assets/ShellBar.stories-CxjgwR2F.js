import{j as e}from"./jsx-runtime-D6fbYt3N.js";import{i as g}from"./Person-Bk5r7PMP.js";import{a as S}from"./add-BOxZfmZK.js";import{s as v}from"./search-652kaC4c.js";import{S as _}from"./index-CT4Kw6wo.js";import{q as h,v as w,S as I,w as x}from"./withWebComponent-D2290JWW.js";import{l as C}from"./event-strict-DgQLNDEV.js";import{A as D}from"./index-VGStP4CR.js";import{L as p}from"./index-Bbs7wul1.js";import{I as B}from"./index-Dqq1ZbNz.js";import{I as N}from"./index-CVAN0NBX.js";var u=function(o,t,a,s){var m=arguments.length,n=m<3?t:s===null?s=Object.getOwnPropertyDescriptor(t,a):s,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(o,t,a,s);else for(var d=o.length-1;d>=0;d--)(c=o[d])&&(n=(m<3?c(n):m>3?c(t,a,n):c(t,a))||n);return m>3&&n&&Object.defineProperty(t,a,n),n};let i=class extends I{get stableDomRef(){return this.getAttribute("stable-dom-ref")||`${this._id}-stable-dom-ref`}fireClickEvent(t){return this.fireDecoratorEvent("click",{targetRef:t.target})}};u([h()],i.prototype,"icon",void 0);u([h()],i.prototype,"text",void 0);u([h()],i.prototype,"count",void 0);i=u([w("ui5-shellbar-item"),C("click",{bubbles:!0,cancelable:!0})],i);i.define();const r=x("ui5-shellbar-item",["count","icon","text"],[],[],["click"]);r.displayName="ShellBarItem";try{r.displayName="ShellBarItem",r.__docgenInfo={description:`The \`ShellBarItem\` represents a custom item, that
might be added to the \`ShellBar\`.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ShellBarItem",props:{onClick:{defaultValue:null,description:`Fired, when the item is pressed.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<ShellBarItemDomRef, ShellBarItemClickEventDetail>) => void"}},count:{defaultValue:{value:"undefined"},description:"Defines the count displayed in the top-right corner.",name:"count",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"undefined"},description:"Defines the name of the item's icon.",name:"icon",required:!1,type:{name:"string"}},text:{defaultValue:{value:"undefined"},description:`Defines the item text.

  **Note:** The text is only displayed inside the overflow popover list view.`,name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{r.displayName="ShellBarItem",r.__docgenInfo={description:`The \`ShellBarItem\` represents a custom item, that
might be added to the \`ShellBar\`.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ShellBarItem",props:{onClick:{defaultValue:null,description:`Fired, when the item is pressed.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<ShellBarItemDomRef, ShellBarItemClickEventDetail>) => void"}},count:{defaultValue:{value:"undefined"},description:"Defines the count displayed in the top-right corner.",name:"count",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"undefined"},description:"Defines the name of the item's icon.",name:"icon",required:!1,type:{name:"string"}},text:{defaultValue:{value:"undefined"},description:`Defines the item text.

  **Note:** The text is only displayed inside the overflow popover list view.`,name:"text",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const j={title:"Layouts & Floorplans / ShellBar",component:_,argTypes:{children:{control:{disable:!0}},logo:{control:{disable:!0}},menuItems:{control:{disable:!0}},profile:{control:{disable:!0}},searchField:{control:{disable:!0}},startButton:{control:{disable:!0}}},args:{logo:e.jsx("img",{src:"https://sap.github.io/ui5-webcomponents/images/sap-logo-svg.svg",alt:"SAP Logo"}),profile:e.jsx(D,{children:e.jsx("img",{src:g})}),menuItems:e.jsxs(e.Fragment,{children:[e.jsx(p,{"data-key":"1",children:"Menu Item 1"}),e.jsx(p,{"data-key":"2",children:"Menu Item 2"}),e.jsx(p,{"data-key":"3",children:"Menu Item 3"})]}),searchField:e.jsx(B,{showClearIcon:!0,icon:e.jsx(N,{name:v})}),notificationsCount:"10",primaryTitle:"Shell Bar",secondaryTitle:"Secondary Title",showNotifications:!0,showProductSwitch:!0,children:e.jsx(r,{count:"3",text:"ShellBarItem",icon:S})},tags:["package:@ui5/webcomponents-fiori"]},l={};var f,b,y;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(y=(b=l.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const q=["Default"],W=Object.freeze(Object.defineProperty({__proto__:null,Default:l,__namedExportsOrder:q,default:j},Symbol.toStringTag,{value:"Module"}));export{W as C,l as D,r as S};
