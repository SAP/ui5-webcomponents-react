import{j as e}from"./useIsomorphicLayoutEffect-DCJrFAVs.js";import{o as a}from"./ValueState-Bg0UWejw.js";import{C as t}from"./index-4yFc0n3E.js";const u={title:"Inputs / CheckBox",component:t,argTypes:{},args:{valueState:a.None,text:"CheckBox"},tags:["package:@ui5/webcomponents"]},r={},o={name:"CheckBox States",render(h){return e.jsxs(e.Fragment,{children:[e.jsx(t,{text:"Error",valueState:a.Negative}),e.jsx(t,{text:"Warning",valueState:a.Critical}),e.jsx(t,{text:"Disabled",disabled:!0,checked:!0}),e.jsx(t,{text:"Readonly",readonly:!0,checked:!0}),e.jsx(t,{text:"Error disabled",disabled:!0,valueState:a.Negative,checked:!0}),e.jsx(t,{text:"Warning disabled ",disabled:!0,valueState:a.Critical,checked:!0}),e.jsx(t,{text:"Error readonly",readonly:!0,valueState:a.Negative,checked:!0}),e.jsx(t,{text:"Warning readonly",readonly:!0,valueState:a.Critical,checked:!0})]})}};var c,n,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var l,d,i;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'CheckBox States',
  render(args) {
    return <>
        <CheckBox text="Error" valueState={ValueState.Negative} />
        <CheckBox text="Warning" valueState={ValueState.Critical} />
        <CheckBox text="Disabled" disabled checked />
        <CheckBox text="Readonly" readonly checked />
        <CheckBox text="Error disabled" disabled valueState={ValueState.Negative} checked />
        <CheckBox text="Warning disabled " disabled valueState={ValueState.Critical} checked />
        <CheckBox text="Error readonly" readonly valueState={ValueState.Negative} checked />
        <CheckBox text="Warning readonly" readonly valueState={ValueState.Critical} checked />
      </>;
  }
}`,...(i=(d=o.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};const x=["Default","CheckBoxStates"],C=Object.freeze(Object.defineProperty({__proto__:null,CheckBoxStates:o,Default:r,__namedExportsOrder:x,default:u},Symbol.toStringTag,{value:"Module"}));export{C,r as D,o as a};
