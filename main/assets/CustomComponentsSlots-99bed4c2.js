import{j as t,a as r,F as s}from"./jsx-runtime-670450c2.js";import"./chunk-PCJTTTQV-e4b5f208.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{M as c}from"./index-4c6bc1d8.js";import{B as m}from"./index-656b71e2.js";import{B as a}from"./index-12eee4c1.js";import"./DomRefTable.module-796e5b92.js";import"./index-f1f749bf.js";import"./Import-6eff54b4.js";import{F as d}from"./Footer-c24922c1.js";import{u as p}from"./index-4fb8b842.js";import"./iframe-62981b78.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./Bar-2267974f.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./fastNavigation-8b41cdda.js";import"./AriaLabelHelper-c82262ef.js";import"./ResizeHandler-1fa8a094.js";import"./class-map-5d8e4b2b.js";import"./parameters-bundle.css-6b4a2ffb.js";import"./Button-b2f5d653.js";import"./i18n-defaults-ffd92f69.js";import"./Keys-3acbae73.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./Icon-ce854b74.js";import"./Icons-7b82f601.js";import"./react-jss.esm-fe4dc3ff.js";import"./index-a1d9006c.js";import"./decline-5eb6d937.js";import"./i18n-defaults-7dff8409.js";import"./information-0837f136.js";import"./index-cbb29537.js";import"./clsx.m-1229b3e0.js";import"./Footer.module-f90cad7d.js";import"./index-6328c9d9.js";import"./Link-4cf74d63.js";import"./WrappingType-b81e595a.js";import"./index-87d6c211.js";import"./Label-040efebd.js";import"./index-6454d6ca.js";import"./Popover-9656b900.js";import"./Integer-d9976c13.js";import"./PopupsCommon.css-ff32b102.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";const l=()=>t("div",{children:"Start"}),h=()=>t(a,{children:"Close"}),u=()=>t(m,{startContent:t(l,{}),endContent:t(h,{}),children:t("div",{children:"I'm not a custom component"})}),B=n=>t("div",{slot:n.slot,children:"Start"}),C=n=>t(a,{slot:n.slot,children:"Close"}),v=()=>t(m,{startContent:t(B,{}),endContent:t(C,{}),children:t("div",{children:"I'm not a custom component"})});function It(n={}){const{wrapper:e}=Object.assign({},p(),n.components);return e?t(e,Object.assign({},n,{children:t(i,{})})):i();function i(){const o=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},p(),n.components);return r(s,{children:[t(c,{title:"Handling Slots"}),`
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
`,t(d,{style:{position:"fixed",bottom:0,zIndex:2,maxHeight:"var(--_ui5_bar_base_height)"}})]})}}export{It as default};
//# sourceMappingURL=CustomComponentsSlots-99bed4c2.js.map
