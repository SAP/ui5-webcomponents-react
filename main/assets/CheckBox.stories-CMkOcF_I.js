import{j as e}from"./useIsomorphicLayoutEffect-VT0hzFUo.js";import{C as t}from"./index-CD4KWXnY.js";import{V as r}from"./ValueState-gQDshf3o.js";const x={title:"Inputs / CheckBox",component:t,argTypes:{},args:{valueState:r.None,text:"CheckBox"},tags:["package:@ui5/webcomponents"]},a={},o={name:"CheckBox States",render(S){return e.jsxs(e.Fragment,{children:[e.jsx(t,{text:"Error",valueState:r.Error}),e.jsx(t,{text:"Warning",valueState:r.Warning}),e.jsx(t,{text:"Disabled",disabled:!0,checked:!0}),e.jsx(t,{text:"Readonly",readonly:!0,checked:!0}),e.jsx(t,{text:"Error disabled",disabled:!0,valueState:r.Error,checked:!0}),e.jsx(t,{text:"Warning disabled ",disabled:!0,valueState:r.Warning,checked:!0}),e.jsx(t,{text:"Error readonly",readonly:!0,valueState:r.Error,checked:!0}),e.jsx(t,{text:"Warning readonly",readonly:!0,valueState:r.Warning,checked:!0})]})}};var n,s,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(s=a.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};var d,l,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'CheckBox States',
  render(args) {
    return <>
        <CheckBox text="Error" valueState={ValueState.Error} />
        <CheckBox text="Warning" valueState={ValueState.Warning} />
        <CheckBox text="Disabled" disabled checked />
        <CheckBox text="Readonly" readonly checked />
        <CheckBox text="Error disabled" disabled valueState={ValueState.Error} checked />
        <CheckBox text="Warning disabled " disabled valueState={ValueState.Warning} checked />
        <CheckBox text="Error readonly" readonly valueState={ValueState.Error} checked />
        <CheckBox text="Warning readonly" readonly valueState={ValueState.Warning} checked />
      </>;
  }
}`,...(u=(l=o.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const i=["Default","CheckBoxStates"],g=Object.freeze(Object.defineProperty({__proto__:null,CheckBoxStates:o,Default:a,__namedExportsOrder:i,default:x},Symbol.toStringTag,{value:"Module"}));export{g as C,a as D,o as a};
