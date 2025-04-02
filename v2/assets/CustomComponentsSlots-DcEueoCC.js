import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as e}from"./index-Ddg-oX0k.js";import{F as p}from"./CommandsAndQueries-BhYQ7K7Y.js";import"./index-DeGZRYgg.js";import{B as i}from"./index-BF3Z5uXD.js";import{B as s}from"./index-q_xBifsn.js";import{M as m}from"./index-CRMrsDvR.js";import{M as c}from"./index-CB2NJyj5.js";import"./TagDesign-Ga50IS6u.js";import"./index-Bi_W_Jd4.js";import"./index-C1S0AQHK.js";import"./Button-CVhFbCad.js";import"./jsx-runtime-ByLklLy6.js";import"./copy-BPa3OsAo.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-Dw2clFwJ.js";import"./preview-Xn0_GiF2.js";import"./iframe-aUcG8O2y.js";import"./DocsRenderer-CFRXHY34-BhytbgEL.js";import"./react-18-B98GjGe7.js";import"./index-C2EHZYIs.js";import"./Popover-BgaZr5c3.js";import"./slot-_4yKMUwC.js";import"./PopupsCommon.css-D4-KdmWM.js";import"./event-strict-DgQLNDEV.js";import"./FocusableElements-Bof-Jfi5.js";import"./isElementHidden-B4HqmI2E.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./CustomElementsScope-BJCkQSHf.js";import"./Keys-B3oBAe0t.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-D-iSdYn6.js";import"./MediaRange-Bnzt26Xb.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./parameters-bundle.css-DHLNbl9v.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-B1xYitIu.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-jv87nE5t.js";import"./index-CtYzPxrt.js";import"./Label-42unHoL8.js";import"./i18n-CjR4HGlq.js";import"./i18n-defaults-BXUwkpCs.js";import"./index-DZZKhZ35.js";import"./Link-7OPDvJp0.js";import"./Icon-CGby3L9v.js";import"./index-V9E_9yBg.js";import"./index-D1NZoOym.js";import"./Text-BYHe0rMB.js";import"./willShowContent-CZcfsNXp.js";import"./addCustomCSSWithScoping-CRaJDqw6.js";import"./index-sxpf8z2p.js";import"./BusyIndicator-cXtbXcMV.js";import"./index-D-QlfT-1.js";import"./index-BBw2fVoz.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DP6pBYCZ.js";import"./index-1X16Cq0M.js";import"./I18nStore-BuTcnDwi.js";import"./Bar-CdOkv2ub.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./decline-U8TXFXmv.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-CmvYYEtw.js";import"./information-DWKEhq3n.js";import"./sys-enter-2-DfvUZ16A.js";import"./sys-enter-2-DLBOjKNS.js";import"./Tooltips-CFLTQoOV.js";import"./EventProvider-ChtD9rRX.js";const a=()=>t.jsx("div",{children:"Start"}),d=()=>t.jsx(s,{children:"Close"}),l=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(d,{}),children:t.jsx("div",{children:"Not a custom component"})}),h=n=>t.jsx("div",{slot:n.slot,children:"Start"}),u=n=>t.jsx(s,{slot:n.slot,children:"Close"}),x=()=>t.jsx(i,{startContent:t.jsx(h,{}),endContent:t.jsx(u,{}),children:t.jsx("div",{children:"Not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Handling Slots"}),`
`,t.jsx(o.h1,{id:"adding-custom-react-components-to-slots",children:"Adding custom React components to slots"}),`
`,t.jsx(c,{hideCloseButton:!0,children:"Using a custom React component still requires the expected web component(s) to be rendered."}),`
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
`,t.jsx(p,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function Dt(n={}){const{wrapper:o}={...e(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(r,{...n})}):r(n)}export{Dt as default};
