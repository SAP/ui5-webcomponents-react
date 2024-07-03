import{j as t}from"./useIsomorphicLayoutEffect-CpdNMtv3.js";import{useMDXComponents as e}from"./index-44b7z5bc.js";import"./chunk-HLWAVYOI-DUiaRd9B.js";import{M as p}from"./index-BPVzfWpq.js";import{B as i}from"./index-DRTJGicW.js";import{B as s}from"./index-C427ACzF.js";import"./index-Bu1I-jDW.js";import"./TagDesign-Dou_yO3g.js";import"./index-DEe9W-hO.js";import"./index-D6UH2S5y.js";import"./UI5Element-B4CRQCUa.js";import"./copy-CgbAc49M.js";import"./Button-C_Cuoo5O.js";import{F as m}from"./ProjectTemplate-vqG4BdDR.js";import"./WrappingType-CW8URInd.js";import"./iframe-DAXIi7DQ.js";import"../sb-preview/runtime.js";import"./client-BEgA9EFc.js";import"./_baseForOwn-DVWQo5xw.js";import"./mapValues-DXlf5GIm.js";import"./_baseUniq-BqAhPu7p.js";import"./index-Ba91SQPT.js";import"./index-DrFu-skq.js";import"./withWebComponent-DVfwWPVB.js";import"./utils-CKbRNFS-.js";import"./CustomElementsScopeUtils-C6IqSY4u.js";import"./slot-_4yKMUwC.js";import"./ResizeHandler-Bwj_klJ5.js";import"./class-map-nHH1vjEv.js";import"./if-defined-BG38O0o4.js";import"./parameters-bundle.css-DQGkr9pp.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-NJJr-Wgh.js";import"./decline-BWlX1wee.js";import"./Icons-CwMCtZ-T.js";import"./i18n-defaults-CXs2tJOZ.js";import"./information-Dhbw5K85.js";import"./alert-7wwKJW96.js";import"./Icon-R7_7gBpk.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";import"./i18n-defaults-vwvk3Exl.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./index-Dj6pWtDJ.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BlIIJPI8.js";import"./Popover-CA74kJve.js";import"./Integer-DgRYWdxf.js";import"./PopupsCommon.css-C85aKd3d.js";import"./FocusableElements-bN8doqn4.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-Chhl6hRu.js";import"./BrowserScrollbar.css-Dn2WHWng.js";import"./index-Dj7Fmc_o.js";import"./Label-BA6opWOJ.js";import"./index-D9ZwZnq2.js";import"./Link-CjU86A1I.js";import"./index-DGGRLSFG.js";import"./index-B5idhwOL.js";import"./I18nStore-DrHVTNpv.js";import"./ModalsContext-C4nEcU7T.js";import"./useIsomorphicId-CULvwDT0.js";import"./addCustomCSSWithScoping-DtQWRUC7.js";import"./index-WBNsDXkd.js";import"./index-CsBOppq5.js";import"./index-BPqo3CGX.js";import"./Avatar-5-z1ijpg.js";import"./employee-CMmC12VS.js";import"./index-BbfdFwdS.js";const a=()=>t.jsx("div",{children:"Start"}),c=()=>t.jsx(s,{children:"Close"}),d=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(c,{}),children:t.jsx("div",{children:"Not a custom component"})}),l=n=>t.jsx("div",{slot:n.slot,children:"Start"}),h=n=>t.jsx(s,{slot:n.slot,children:"Close"}),u=()=>t.jsx(i,{startContent:t.jsx(l,{}),endContent:t.jsx(h,{}),children:t.jsx("div",{children:"Not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Handling Slots"}),`
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
`,t.jsx(m,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function Lt(n={}){const{wrapper:o}={...e(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(r,{...n})}):r(n)}export{Lt as default};
