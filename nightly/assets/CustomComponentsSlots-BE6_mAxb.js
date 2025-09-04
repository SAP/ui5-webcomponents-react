import{j as t,B as r}from"./iframe-S1rR11cQ.js";import{useMDXComponents as s}from"./index-69KsrxW4.js";import{M as i}from"./blocks-C1kWdW5O.js";import{B as c}from"./index-WoXS5kwP.js";import"./Tag-Do4MK6Vd.js";import{M as a}from"./index-DjdMAx9G.js";import{F as p}from"./CommandsAndQueries-7fbj5dZq.js";import"./i18n-DSpjDgSK.js";import"./copy-DEUCxjzs.js";import"./preload-helper-D9Z9MdNV.js";import"./Bar-DdT6m2gE.js";import"./information-C758TG9J.js";import"./sys-enter-2-Bxoe1Z_o.js";import"./alert-DLQYOv1s.js";import"./index-qWGPhuwe.js";import"./index-0zwvIbNd.js";import"./index-FsTu0RwH.js";import"./Link-BTk9MhA4.js";import"./addCustomCSSWithScoping-B4lS8qF3.js";import"./index-BuHsyiL7.js";import"./index-PoS1N3ma.js";import"./index-R5oM6KDO.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Cn53W7lk.js";import"./index-BO-Ud12y.js";const d=()=>t.jsx("div",{children:"Start"}),m=()=>t.jsx(r,{children:"Close"}),l=()=>t.jsx(c,{startContent:t.jsx(d,{}),endContent:t.jsx(m,{}),children:t.jsx("div",{children:"Not a custom component"})}),h=o=>t.jsx("div",{slot:o.slot,children:"Start"}),u=o=>t.jsx(r,{slot:o.slot,children:"Close"}),x=()=>t.jsx(c,{startContent:t.jsx(h,{}),endContent:t.jsx(u,{}),children:t.jsx("div",{children:"Not a custom component"})});function e(o){const n={code:"code",h1:"h1",p:"p",pre:"pre",...s(),...o.components};return t.jsxs(t.Fragment,{children:[t.jsx(i,{title:"Handling Slots"}),`
`,t.jsx(n.h1,{id:"adding-custom-react-components-to-slots",children:"Adding custom React components to slots"}),`
`,t.jsx(a,{hideCloseButton:!0,children:"Using a custom React component still requires the expected web component(s) to be rendered."}),`
`,t.jsxs(n.p,{children:["With our wrapper we provide an easy way to consume the ",t.jsx(n.code,{children:"slots"})," of the UI5 Web Components by attaching them to a ",t.jsx(n.code,{children:"prop"}),`.
In most cases you don't have to take anything into account, and the props can be used in a typical React way. However, there is an exception with custom components:`]}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-jsx",children:`const BarStart = () => {
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
`,t.jsxs(n.p,{children:["The ",t.jsx(n.code,{children:"BarComponent"})," would compile to this:"]}),`
`,t.jsx(l,{}),`
`,t.jsxs(n.p,{children:[`As you can see, both custom components are not displayed in the right place.
Our wrapper does add the `,t.jsx(n.code,{children:"slot"})," prop to the custom component, but the most outer HTML-Element/component (e.g. ",t.jsx(n.code,{children:"<div>Start</div>"}),") does not accept it and therefore cannot use it."]}),`
`,t.jsxs(n.p,{children:["To fix this the ",t.jsx(n.code,{children:"slot"})," prop must also be passed to the outer element of the component:"]}),`
`,t.jsx(n.pre,{children:t.jsx(n.code,{className:"language-jsx",children:`const BarStart = (props) => {
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
`,t.jsxs(n.p,{children:["Now the ",t.jsx(n.code,{children:"BarComponent"})," would compile to this:"]}),`
`,t.jsx(x,{}),`
`,t.jsx(p,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function k(o={}){const{wrapper:n}={...s(),...o.components};return n?t.jsx(n,{...o,children:t.jsx(e,{...o})}):e(o)}export{k as default};
