import{j as t}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as e}from"./index-BxVt_j7t.js";import"./chunk-NUUEMKO5-BzgR-c-V.js";import{ae as p}from"./index-BxUvZM0C.js";import"./index-a_xTzTQ5.js";import{B as i}from"./index-EXktoL7B.js";import{B as s}from"./index-BTnNaaMX.js";import{M as m}from"./index-Ds-D_dgM.js";import"./TagDesign-Dou_yO3g.js";import"./index-B7gF9TUu.js";import"./index-CE_NGgsP.js";import"./Button-W0cWTBMa.js";import"./withWebComponent-CT6sGXpP.js";import"./copy-CJontbyU.js";import{F as a}from"./CommandsAndQueries-DY10MhyY.js";import"./WrappingType-CW8URInd.js";import"./Title-Cg15KVE0.js";import"./iframe-B61IxWAS.js";import"../sb-preview/runtime.js";import"./client-DPlujwLe.js";import"./index-DHaMx3uI.js";import"./index-DrFu-skq.js";import"./Bar-BLnU6FrV.js";import"./slot-_4yKMUwC.js";import"./ResizeHandler-BMwFvnQB.js";import"./parameters-bundle.css-BzaqQttB.js";import"./event-strict-DgQLNDEV.js";import"./i18n-DEVDpFvK.js";import"./Icon-Bi16vwdR.js";import"./useIsomorphicLayoutEffect-CPnToY9g.js";import"./Keys-D3vKxxqj.js";import"./decline-DUPuUXel.js";import"./i18n-defaults-CUGG7UPM.js";import"./information-CS9fXslf.js";import"./information-BsqVeb3I.js";import"./sys-enter-2-CVBeUzlC.js";import"./sys-enter-2-CkrUrPs2.js";import"./i18n-defaults-Do22Zz-4.js";import"./AccessibilityTextsHelper-Beeze-lh.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-vhX1-CiW.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./utils-B6HmSsR9.js";import"./Popover-DvifCVMh.js";import"./PopupsCommon.css-DbrNyYP7.js";import"./FocusableElements-BL5Nu5KZ.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-vkiV4B2u.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-Dh9nQNvU.js";import"./index-DLhgh7pX.js";import"./Label-DxVZab8w.js";import"./index-BdmnTn09.js";import"./Link-D_K-FEuO.js";import"./index-BnqhWvMZ.js";import"./index-tU3gglsM.js";import"./Text-DlA3cMIs.js";import"./addCustomCSSWithScoping-DS2p-yck.js";import"./index-DZ9AgWRI.js";import"./BusyIndicator-DZaR2rPi.js";import"./index-DuEzSjuU.js";import"./index-DFjoDZxe.js";import"./AvatarSize-BceVhWoP.js";import"./employee-JxeorwAe.js";import"./index-BAv0nFaT.js";import"./I18nStore-CxkIikp_.js";const c=()=>t.jsx("div",{children:"Start"}),d=()=>t.jsx(s,{children:"Close"}),l=()=>t.jsx(i,{startContent:t.jsx(c,{}),endContent:t.jsx(d,{}),children:t.jsx("div",{children:"Not a custom component"})}),h=n=>t.jsx("div",{slot:n.slot,children:"Start"}),u=n=>t.jsx(s,{slot:n.slot,children:"Close"}),x=()=>t.jsx(i,{startContent:t.jsx(h,{}),endContent:t.jsx(u,{}),children:t.jsx("div",{children:"Not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Handling Slots"}),`
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
`,t.jsx(a,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function Dt(n={}){const{wrapper:o}={...e(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(r,{...n})}):r(n)}export{Dt as default};
