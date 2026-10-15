import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./Button-BTwEzhZQ.js";import{n as i,t as a}from"./Bar-O_SKRm_w.js";import{n as o,t as s}from"./MessageStrip-CXt7wSS7.js";import{i as c,r as l}from"./react-BOKIvUzN.js";import{_ as u,d}from"./blocks-Dgkncsvx.js";import{t as f,u as p}from"./components-CyHFkytd.js";var m,h,g,_,v,y,b;function x(){return(x=e((()=>{i(),n(),m=t(),h=()=>(0,m.jsx)(`div`,{children:`Start`}),g=()=>(0,m.jsx)(r,{children:`Close`}),_=()=>(0,m.jsx)(a,{startContent:(0,m.jsx)(h,{}),endContent:(0,m.jsx)(g,{}),children:(0,m.jsx)(`div`,{children:`Not a custom component`})}),v=e=>(0,m.jsx)(`div`,{slot:e.slot,children:`Start`}),y=e=>(0,m.jsx)(r,{slot:e.slot,children:`Close`}),b=()=>(0,m.jsx)(a,{startContent:(0,m.jsx)(v,{}),endContent:(0,m.jsx)(y,{}),children:(0,m.jsx)(`div`,{children:`Not a custom component`})})})))()}function S(e){let t={code:`code`,h1:`h1`,p:`p`,pre:`pre`,...c(),...e.components};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(d,{title:`Handling Slots`}),`
`,(0,w.jsx)(t.h1,{id:`adding-custom-react-components-to-slots`,children:`Adding custom React components to slots`}),`
`,(0,w.jsx)(s,{hideCloseButton:!0,children:`Using a custom React component still requires the expected web component(s) to be rendered.`}),`
`,(0,w.jsxs)(t.p,{children:[`With our wrapper we provide an easy way to consume the `,(0,w.jsx)(t.code,{children:`slots`}),` of the UI5 Web Components by attaching them to a `,(0,w.jsx)(t.code,{children:`prop`}),`.
In most cases you don't have to take anything into account, and the props can be used in a typical React way. However, there is an exception with custom components:`]}),`
`,(0,w.jsx)(t.pre,{children:(0,w.jsx)(t.code,{className:`language-jsx`,children:`const BarStart = () => {
  return <div>Start</div>;
};
const BarEnd = () => {
  return <Button>Close</Button>;
};
export const BarComponent = () => {
  return (
    <Bar startContent={<BarStart />} endContent={<BarEnd />}>
      <div>I'm not a custom component</div>
    </Bar>
  );
};
`})}),`
`,(0,w.jsxs)(t.p,{children:[`The `,(0,w.jsx)(t.code,{children:`BarComponent`}),` would compile to this:`]}),`
`,(0,w.jsx)(_,{}),`
`,(0,w.jsxs)(t.p,{children:[`As you can see, both custom components are not displayed in the right place.
Our wrapper does add the `,(0,w.jsx)(t.code,{children:`slot`}),` prop to the custom component, but the most outer HTML-Element/component (e.g. `,(0,w.jsx)(t.code,{children:`<div>Start</div>`}),`) does not accept it and therefore cannot use it.`]}),`
`,(0,w.jsxs)(t.p,{children:[`To fix this the `,(0,w.jsx)(t.code,{children:`slot`}),` prop must also be passed to the outer element of the component:`]}),`
`,(0,w.jsx)(t.pre,{children:(0,w.jsx)(t.code,{className:`language-jsx`,children:`const BarStart = (props) => {
  return <div slot={props.slot}>Start</div>;
};
const BarEnd = (props) => {
  return <Button slot={props.slot}>Close</Button>;
};
export const BarComponent = () => {
  return (
    <Bar startContent={<BarStart />} endContent={<BarEnd />}>
      <div>I'm not a custom component</div>
    </Bar>
  );
};
`})}),`
`,(0,w.jsxs)(t.p,{children:[`Now the `,(0,w.jsx)(t.code,{children:`BarComponent`}),` would compile to this:`]}),`
`,(0,w.jsx)(b,{}),`
`,(0,w.jsx)(p,{style:{position:`fixed`,bottom:0,zIndex:2}})]})}function C(e={}){let{wrapper:t}={...c(),...e.components};return t?(0,w.jsx)(t,{...e,children:(0,w.jsx)(S,{...e})}):S(e)}var w;function T(){return(T=e((()=>{w=t(),l(),u(),x(),f(),o()})))()}T();export{C as default};