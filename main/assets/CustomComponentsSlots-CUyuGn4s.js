import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{useMDXComponents as e}from"./index-_byTH_QA.js";import"./chunk-HLWAVYOI-3jvcESn-.js";import{M as s}from"./index-DyI6OBOZ.js";import{B as i}from"./index-BeleNB-C.js";import{B as p}from"./index-CE7AdKSW.js";import{F as m}from"./ProjectTemplate-B--HZpa5.js";import"./index-Dl6G-zuu.js";import"./index-D1_ZHIBm.js";import"./copy-Dz4oTMJU.js";import"./iframe-BIUQ0r0D.js";import"../sb-preview/runtime.js";import"./react-18-Bamk9FSf.js";import"./inheritsLoose-D8L2VVdp.js";import"./_baseForOwn-DFjKyXZi.js";import"./mapValues-BvzalXkB.js";import"./_baseUniq-DRxb5hvO.js";import"./index-2V9fy1S2.js";import"./index-DrFu-skq.js";import"./UI5Element-Lw3nTtTN.js";import"./Boot-B0Gt2ObV.js";import"./ManagedStyles-DX5mlBXq.js";import"./CustomElementsScopeUtils-CeSGtO6z.js";import"./withWebComponent-BF9ncEMl.js";import"./utils-D1_qxj0a.js";import"./useIsomorphicLayoutEffect-gsbYElqV.js";import"./slot-Df15G--e.js";import"./ResizeHandler-OFvM0oAF.js";import"./class-map-DeOlvaAn.js";import"./parameters-bundle.css-C7eXkTg2.js";import"./Button-D13uYO2F.js";import"./event-CegLCnR0.js";import"./Keys-BgUkNma0.js";import"./AriaLabelHelper-CzOXVcye.js";import"./i18nBundle-Duvqe7kG.js";import"./MarkedEvents-BPv6Lv4o.js";import"./Icons-DfCrNAdQ.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-C20AIXTC.js";import"./parameters-bundle.css-DjgCrOcY.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-D1sujP0E.js";import"./react-jss.esm-BPPChJW9.js";import"./theming.esm-5daRW75o.js";import"./index-CtT3-eLj.js";import"./decline-TOiDlE0p.js";import"./i18n-defaults-CFK4Zk7G.js";import"./information-ooFgY1vE.js";import"./alert-D4nm4k8k.js";import"./index-t2jtc2K4.js";import"./clsx-B-dksMZM.js";import"./index-OiPwIZ5Z.js";import"./Label-CTVRjihb.js";import"./WrappingType-CW8URInd.js";import"./index-wm9D4y3J.js";import"./Link-B2j2s4Ih.js";import"./index-BAwLInaw.js";import"./Popover-DXiCQ_F_.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-DmBeTAQh.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-C1DKTBbu.js";import"./FocusableElements-4YGFH9ta.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-O1QwFldx.js";import"./BrowserScrollbar.css-BiclUngR.js";import"./index-BjS4ztKm.js";import"./i18n-defaults-GDPbxlcd.js";import"./I18nContext-BcGksm2n.js";import"./ThemingParameters--AGRs54p.js";import"./index-BPVTr8FI.js";import"./useStylesheet-D5wp95d6.js";import"./ModalsContext-qaxSwC3j.js";import"./addCustomCSSWithScoping-DAt1aefI.js";import"./index-BZINycrT.js";import"./index-B20No_h_.js";import"./Avatar-BwXc-3ne.js";import"./employee-C3y4a2zL.js";import"./index-Dr1iVuuO.js";const a=()=>t.jsx("div",{children:"Start"}),c=()=>t.jsx(p,{children:"Close"}),d=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(c,{}),children:t.jsx("div",{children:"I'm not a custom component"})}),l=n=>t.jsx("div",{slot:n.slot,children:"Start"}),h=n=>t.jsx(p,{slot:n.slot,children:"Close"}),u=()=>t.jsx(i,{startContent:t.jsx(l,{}),endContent:t.jsx(h,{}),children:t.jsx("div",{children:"I'm not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Handling Slots"}),`
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
`,t.jsx(d,{}),`
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
`,t.jsx(u,{}),`
`,t.jsx(m,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function Ot(n={}){const{wrapper:o}={...e(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(r,{...n})}):r(n)}export{Ot as default};
