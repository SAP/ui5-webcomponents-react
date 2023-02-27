import{j as t,a as r,F as s}from"./jsx-runtime-670450c2.js";import"./chunk-4XCFV5WA-7b93fc87.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{M as c}from"./index-4c1eaed3.js";import{B as a}from"./index-50f7b4c4.js";import{B as m}from"./index-59996dda.js";import"./DomRefTable.module-3d3cc401.js";import"./index-f1f749bf.js";import"./Import-c0095e75.js";import{F as d}from"./Footer-ae97b86f.js";import{u as p}from"./index-4fb8b842.js";import"./iframe-abee3a6a.js";import"../sb-preview/runtime.mjs";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./Bar-b4a14d85.js";import"./UI5Element-727d48d7.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-63dd52a0.js";import"./utils-ed90fb1b.js";import"./fastNavigation-ebf07f1c.js";import"./AriaLabelHelper-dee23f38.js";import"./ResizeHandler-c56abc92.js";import"./class-map-abcca105.js";import"./parameters-bundle.css-0c974f42.js";import"./Button-e1b15b5b.js";import"./MarkedEvents-f33713fa.js";import"./Keys-50a1cb5a.js";import"./Icons-5bcf1e3f.js";import"./react-jss.esm-e54d2f1d.js";import"./index-41bcce99.js";import"./decline-ff534003.js";import"./index-6923d62a.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-f4b4144e.js";import"./index-b411694d.js";import"./Label-6707bdfc.js";import"./WrappingType-b81e595a.js";import"./index-06a57b02.js";import"./Media-6b270b80.js";import"./MediaRange-25b98f31.js";import"./index-79349d08.js";import"./Popover-5336e3a5.js";import"./Integer-a72984d1.js";import"./FocusableElements-5a723910.js";import"./getActiveElement-bcae01ed.js";import"./style-map-7b3eb5df.js";const l=()=>t("div",{children:"Start"}),h=()=>t(m,{children:"Close"}),u=()=>t(a,{startContent:t(l,{}),endContent:t(h,{}),children:t("div",{children:"I'm not a custom component"})}),B=n=>t("div",{slot:n.slot,children:"Start"}),C=n=>t(m,{slot:n.slot,children:"Close"}),v=()=>t(a,{startContent:t(B,{}),endContent:t(C,{}),children:t("div",{children:"I'm not a custom component"})});function bt(n={}){const{wrapper:e}=Object.assign({},p(),n.components);return e?t(e,Object.assign({},n,{children:t(i,{})})):i();function i(){const o=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},p(),n.components);return r(s,{children:[t(c,{title:"Handling Slots"}),`
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
`,t(d,{style:{position:"fixed",bottom:0,zIndex:2,maxHeight:"var(--_ui5_bar_base_height)"}})]})}}export{bt as default};
//# sourceMappingURL=CustomComponentsSlots-a571a351.js.map
