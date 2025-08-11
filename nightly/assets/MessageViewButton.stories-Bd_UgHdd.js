import{j as e,J as m,R as o}from"./iframe-DvixYE7k.js";import{F as c}from"./index-YgXxfA7L.js";import{M as t}from"./index-BXL2m1nq.js";const d={title:"Inputs / MessageViewButton",component:t,argTypes:{},args:{}},r={},s={render(){return e.jsxs(e.Fragment,{children:[e.jsx(m,{children:"These buttons are ordered by severity, from high to low."}),e.jsxs(c,{style:{gap:"1rem"},children:[e.jsx(t,{type:o.Negative}),e.jsx(t,{type:o.Critical}),e.jsx(t,{type:o.Positive}),e.jsx(t,{type:o.Information})]})]})}};var a,n,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var p,u,l;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(u=s.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const x=["Default","Severities"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Severities:s,__namedExportsOrder:x,default:d},Symbol.toStringTag,{value:"Module"}));export{S as C,r as D,s as S};
