import{R as a,j as e}from"./iframe-B9d6tunA.js";import{C as t}from"./index-BunxPUB3.js";const c={title:"Inputs / CheckBox",component:t,argTypes:{},args:{valueState:a.None,text:"CheckBox"},tags:["package:@ui5/webcomponents"]},r={},o={name:"CheckBox States",render(l){return e.jsxs(e.Fragment,{children:[e.jsx(t,{text:"Error",valueState:a.Negative}),e.jsx(t,{text:"Warning",valueState:a.Critical}),e.jsx(t,{text:"Disabled",disabled:!0,checked:!0}),e.jsx(t,{text:"Readonly",readonly:!0,checked:!0}),e.jsx(t,{text:"Error disabled",disabled:!0,valueState:a.Negative,checked:!0}),e.jsx(t,{text:"Warning disabled ",disabled:!0,valueState:a.Critical,checked:!0}),e.jsx(t,{text:"Error readonly",readonly:!0,valueState:a.Negative,checked:!0}),e.jsx(t,{text:"Warning readonly",readonly:!0,valueState:a.Critical,checked:!0})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const s=["Default","CheckBoxStates"],i=Object.freeze(Object.defineProperty({__proto__:null,CheckBoxStates:o,Default:r,__namedExportsOrder:s,default:c},Symbol.toStringTag,{value:"Module"}));export{i as C,r as D,o as a};
