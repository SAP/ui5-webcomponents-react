import{j as t,a as r,F as s}from"./jsx-runtime-670450c2.js";import"./chunk-G4YQS2SV-de0e1524.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{M as c}from"./index-4c7efcb4.js";import{B as m}from"./index-789b1194.js";import{B as a}from"./index-d6e34175.js";import"./DomRefTable.module-b93912f7.js";import"./index-f1f749bf.js";import"./Import-2e9cfc1a.js";import{F as d}from"./Footer-511979fe.js";import{u as p}from"./index-4fb8b842.js";import"./iframe-cb792102.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./Bar-2272abff.js";import"./UI5Element-386cb3f6.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-34dd487e.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./fastNavigation-ebf07f1c.js";import"./AriaLabelHelper-dee23f38.js";import"./ResizeHandler-b3fcb37c.js";import"./class-map-60f59e95.js";import"./parameters-bundle.css-0c974f42.js";import"./Button-981a9381.js";import"./MarkedEvents-0e37da6f.js";import"./Keys-50a1cb5a.js";import"./Icons-03f19c25.js";import"./react-jss.esm-e54d2f1d.js";import"./index-b668c6ba.js";import"./decline-48ecb430.js";import"./index-7ac1a15f.js";import"./clsx.m-1229b3e0.js";import"./Footer.module-c4f3b823.js";import"./index-d42d1006.js";import"./Label-f9741f9c.js";import"./WrappingType-b81e595a.js";import"./index-4b713bb6.js";import"./index-fe59f05e.js";import"./Popover-ff8f156e.js";import"./Integer-5fa4beea.js";import"./FocusableElements-13161f05.js";import"./getActiveElement-bcae01ed.js";import"./MediaRange-25b98f31.js";import"./style-map-63946e4f.js";const l=()=>t("div",{children:"Start"}),h=()=>t(a,{children:"Close"}),u=()=>t(m,{startContent:t(l,{}),endContent:t(h,{}),children:t("div",{children:"I'm not a custom component"})}),B=n=>t("div",{slot:n.slot,children:"Start"}),C=n=>t(a,{slot:n.slot,children:"Close"}),v=()=>t(m,{startContent:t(B,{}),endContent:t(C,{}),children:t("div",{children:"I'm not a custom component"})});function ft(n={}){const{wrapper:e}=Object.assign({},p(),n.components);return e?t(e,Object.assign({},n,{children:t(i,{})})):i();function i(){const o=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},p(),n.components);return r(s,{children:[t(c,{title:"Handling Slots"}),`
`,t(o.h1,{children:"Adding custom components to slots"}),`
`,r(o.p,{children:["With our wrapper we provide an easy way to consume the ",t(o.code,{children:"slots"})," of the UI5 Web Components by attaching them to a ",t(o.code,{children:"prop"}),`.
In most cases you don't have to take anything into account, and the props can be used in a typical React way. However, there is an exception with custom components:`]}),`
`,t(o.pre,{children:t(o.code,{className:"language-jsx",children:`const BarStart = () => {
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
`,r(o.p,{children:["The ",t(o.code,{children:"BarComponent"})," would compile to this:"]}),`
`,t(u,{}),`
`,r(o.p,{children:[`As you can see, both custom components are not displayed.
Our wrapper does add the `,t(o.code,{children:"slot"})," prop to the custom component, but the most outer HTML-Element/component (e.g. ",t(o.code,{children:"<div>Start</div>"}),") does not accept it and therefore cannot use it."]}),`
`,r(o.p,{children:["To fix this the ",t(o.code,{children:"slot"})," prop must also be passed to the outer element of the component:"]}),`
`,t(o.pre,{children:t(o.code,{className:"language-jsx",children:`const BarStart = (props) => {
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
`,r(o.p,{children:["Now the ",t(o.code,{children:"BarComponent"})," would compile to this:"]}),`
`,t(v,{}),`
`,t("div",{style:{height:"var(--_ui5_bar_base_height)"}}),`
`,t(d,{style:{position:"fixed",bottom:0,zIndex:2,maxHeight:"var(--_ui5_bar_base_height)"}})]})}}export{ft as default};
//# sourceMappingURL=CustomComponentsSlots-ead46fdb.js.map
