import{j as t}from"./jsx-runtime-5926aa06.js";import{M as m}from"./chunk-PCJTTTQV-a21900e0.js";import{B as i}from"./index-57ee4ebb.js";import{B as p}from"./index-ab5e8020.js";import"./DomRefTable.module-7b7fd52b.js";import"./index-ebeaab24.js";import{F as a}from"./Footer-28a1b34c.js";import{u as s}from"./index-bda0bad7.js";import"./iframe-64774261.js";import"../sb-preview/runtime.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./Bar-5bc8533d.js";import"./UI5Element-78be0f3d.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d4224c1c.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./ResizeHandler-15c77712.js";import"./class-map-18f572ce.js";import"./parameters-bundle.css-f9dc8928.js";import"./Button-427cd4bb.js";import"./Icon-70a9e5b9.js";import"./Icons-26e87c01.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-99b8bbf4.js";import"./i18n-defaults-f002f496.js";import"./react-jss.esm-022ab528.js";import"./index-07e3c3e0.js";import"./decline-09ce3004.js";import"./i18n-defaults-80781f7e.js";import"./information-872f55da.js";import"./index-562e1433.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-3e959ad1.js";import"./index-7f06f571.js";import"./Integer-f7f172c9.js";import"./index-34cefc94.js";import"./Avatar-e1c9d8f0.js";import"./employee-1c1d2fc1.js";import"./index-55beff23.js";import"./index-703814e7.js";import"./Link-04c4a519.js";import"./WrappingType-b81e595a.js";import"./index-ea625d40.js";import"./index-0829c26d.js";import"./Label-263c93f2.js";import"./index-1d3cc15d.js";import"./Popover-a03c4c52.js";import"./PopupsCommon.css-1eb36bcf.js";import"./FocusableElements-53839075.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-54298215.js";import"./BrowserScrollbar.css-119d6915.js";const c=()=>t.jsx("div",{children:"Start"}),d=()=>t.jsx(p,{children:"Close"}),l=()=>t.jsx(i,{startContent:t.jsx(c,{}),endContent:t.jsx(d,{}),children:t.jsx("div",{children:"I'm not a custom component"})}),h=n=>t.jsx("div",{slot:n.slot,children:"Start"}),u=n=>t.jsx(p,{slot:n.slot,children:"Close"}),x=()=>t.jsx(i,{startContent:t.jsx(h,{}),endContent:t.jsx(u,{}),children:t.jsx("div",{children:"I'm not a custom component"})});function It(n={}){const{wrapper:r}=Object.assign({},s(),n.components);return r?t.jsx(r,Object.assign({},n,{children:t.jsx(e,{})})):e();function e(){const o=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},s(),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Handling Slots"}),`
`,t.jsx(o.h1,{id:"adding-custom-components-to-slots",children:"Adding custom components to slots"}),`
`,t.jsxs(o.p,{children:["With our wrapper we provide an easy way to consume the ",t.jsx(o.code,{children:"slots"})," of the UI5 Web Components by attaching them to a ",t.jsx(o.code,{children:"prop"}),`.
In most cases you don't have to take anything into account, and the props can be used in a typical React way. However, there is an exception with custom components:`]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const BarStart = () => {
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
`,t.jsxs(o.p,{children:["The ",t.jsx(o.code,{children:"BarComponent"})," would compile to this:"]}),`
`,t.jsx(l,{}),`
`,t.jsxs(o.p,{children:[`As you can see, both custom components are not displayed in the right place.
Our wrapper does add the `,t.jsx(o.code,{children:"slot"})," prop to the custom component, but the most outer HTML-Element/component (e.g. ",t.jsx(o.code,{children:"<div>Start</div>"}),") does not accept it and therefore cannot use it."]}),`
`,t.jsxs(o.p,{children:["To fix this the ",t.jsx(o.code,{children:"slot"})," prop must also be passed to the outer element of the component:"]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`const BarStart = (props) => {
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
`,t.jsxs(o.p,{children:["Now the ",t.jsx(o.code,{children:"BarComponent"})," would compile to this:"]}),`
`,t.jsx(x,{}),`
`,t.jsx("div",{style:{height:"var(--_ui5_bar_base_height)"}}),`
`,t.jsx(a,{style:{position:"fixed",bottom:0,zIndex:2,maxHeight:"var(--_ui5_bar_base_height)"}})]})}}export{It as default};
//# sourceMappingURL=CustomComponentsSlots-ab8bbf13.js.map
