import{j as e,J as a,R as o}from"./iframe-Y9u60a80.js";import{F as n}from"./index-mYcBdhJ9.js";import{M as t}from"./index-CuIJo54x.js";const i={title:"Inputs / MessageViewButton",component:t,argTypes:{},args:{}},r={},s={render(){return e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"These buttons are ordered by severity, from high to low."}),e.jsxs(n,{style:{gap:"1rem"},children:[e.jsx(t,{type:o.Negative}),e.jsx(t,{type:o.Critical}),e.jsx(t,{type:o.Positive}),e.jsx(t,{type:o.Information})]})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render() {
    return <>
        <Text>These buttons are ordered by severity, from high to low.</Text>
        <FlexBox style={{
        gap: '1rem'
      }}>
          <MessageViewButton type={ValueState.Negative} />
          <MessageViewButton type={ValueState.Critical} />
          <MessageViewButton type={ValueState.Positive} />
          <MessageViewButton type={ValueState.Information} />
        </FlexBox>
      </>;
  }
}`,...s.parameters?.docs?.source}}};const p=["Default","Severities"],c=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Severities:s,__namedExportsOrder:p,default:i},Symbol.toStringTag,{value:"Module"}));export{c as C,r as D,s as S};
