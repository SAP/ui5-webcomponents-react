import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as e}from"./index-BxVt_j7t.js";import"./chunk-NUUEMKO5-CnxHGLB3.js";import{ae as p}from"./index-CLZGOB6R.js";import"./index-DLJU6rWM.js";import{B as s}from"./index-D7NmXKZZ.js";import{B as i}from"./index-Yz8_Wo9H.js";import{M as m}from"./index-C009Ii_l.js";import"./TagDesign-Dou_yO3g.js";import"./index-B7gF9TUu.js";import"./index-CE_NGgsP.js";import"./Button-C6xYvRbu.js";import"./withWebComponent-CEvNJu7C.js";import"./copy-C7Fphd8b.js";import{F as a}from"./CommandsAndQueries-BGNZD4F9.js";import"./WrappingType-CW8URInd.js";import"./Title-1rDkpSXf.js";import"./iframe-D43Q3l11.js";import"../sb-preview/runtime.js";import"./client-DPlujwLe.js";import"./index-DHaMx3uI.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./ResizeHandler-CJRte1-9.js";import"./class-map-CFjQlWtw.js";import"./utils-BPMdnTU-.js";import"./useIsomorphicLayoutEffect-BE7Iif4x.js";import"./parameters-bundle.css-DY1ryZJt.js";import"./event-strict-DgQLNDEV.js";import"./i18n-DEVDpFvK.js";import"./decline-D0Sq_J--.js";import"./Icon-Cf72TZgw.js";import"./Keys-CAuuEE_3.js";import"./i18n-defaults-neJWcM66.js";import"./information-Dy9R6tRZ.js";import"./alert-C1M-4Vvc.js";import"./i18n-defaults-DteWAmDn.js";import"./AccessibilityTextsHelper-Beeze-lh.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-XZ46U0Ql.js";import"./Popover-B0GOUfMQ.js";import"./PopupsCommon.css-BerD7w9b.js";import"./FocusableElements-DA0BaiCm.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-g8foa4rA.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-vaKWw58t.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DVp2Y5Uf.js";import"./index-CUd5UQ0Z.js";import"./Label-S_BgfXUY.js";import"./index-NbVlvM4j.js";import"./Link-2s4hefKa.js";import"./index-ClFOKzxg.js";import"./index-D8L7QTA6.js";import"./Text-CTrlD69_.js";import"./addCustomCSSWithScoping-B_vnxDyr.js";import"./index-BBLdTHsH.js";import"./BusyIndicator-CTFEFSn6.js";import"./index-7rUfxUBv.js";import"./index-D6lFKeEV.js";import"./Avatar-DMTAeY6x.js";import"./employee-B31iqtd8.js";import"./index-ChqC1qFt.js";import"./I18nStore-DnWKAes0.js";const c=()=>t.jsx("div",{children:"Start"}),d=()=>t.jsx(i,{children:"Close"}),l=()=>t.jsx(s,{startContent:t.jsx(c,{}),endContent:t.jsx(d,{}),children:t.jsx("div",{children:"Not a custom component"})}),h=n=>t.jsx("div",{slot:n.slot,children:"Start"}),u=n=>t.jsx(i,{slot:n.slot,children:"Close"}),x=()=>t.jsx(s,{startContent:t.jsx(h,{}),endContent:t.jsx(u,{}),children:t.jsx("div",{children:"Not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Handling Slots"}),`
`,t.jsx(o.h1,{id:"adding-custom-react-components-to-slots",children:"Adding custom React components to slots"}),`
`,t.jsx(m,{hideCloseButton:!0,children:"Using a custom React component still requires the expected web component(s) to be rendered."}),`
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
`,t.jsx(a,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function Nt(n={}){const{wrapper:o}={...e(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(r,{...n})}):r(n)}export{Nt as default};
