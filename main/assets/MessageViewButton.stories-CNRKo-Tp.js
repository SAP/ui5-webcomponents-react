import{j as e}from"./useIsomorphicLayoutEffect-Cwmfti2R.js";import{o}from"./ValueState-Bg0UWejw.js";import{T as l}from"./index-C2xxfhXS.js";import{F as c}from"./index-DwEKreE0.js";import{M as t}from"./index-BkFwC4FJ.js";const d={title:"Inputs / MessageViewButton",component:t,argTypes:{},args:{}},r={},s={render(){return e.jsxs(e.Fragment,{children:[e.jsx(l,{children:"These buttons are ordered by severity, from high to low."}),e.jsxs(c,{style:{gap:"1rem"},children:[e.jsx(t,{type:o.Negative}),e.jsx(t,{type:o.Critical}),e.jsx(t,{type:o.Positive}),e.jsx(t,{type:o.Information})]})]})}};var a,n,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(i=(n=r.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var p,m,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const x=["Default","Severities"],V=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Severities:s,__namedExportsOrder:x,default:d},Symbol.toStringTag,{value:"Module"}));export{V as C,r as D,s as S};
