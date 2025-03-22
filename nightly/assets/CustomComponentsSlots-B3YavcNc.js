import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as e}from"./index-DpYXPI8c.js";import{F as p}from"./CommandsAndQueries-CW1MEpc5.js";import"./index-DO9uR8_1.js";import{B as i}from"./index-CDw1cMwh.js";import{B as s}from"./index-D5gqvCq0.js";import{M as m}from"./index-BFNrp1s0.js";import{M as c}from"./index-BPgdWBHk.js";import"./TagDesign-Ga50IS6u.js";import"./index-ChI72X44.js";import"./index-DnYn5RTv.js";import"./Button-BhJpItN3.js";import"./jsx-runtime-DITkwERB.js";import"./copy-BjWKS8Rq.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-DKHf5Ic-.js";import"./preview-DY_fzwdD.js";import"./iframe-pzVTtieK.js";import"./DocsRenderer-CFRXHY34-C_vi3ORt.js";import"./react-18-B55prW7j.js";import"./index-BS9IDQLN.js";import"./Popover-C53QSKRD.js";import"./slot-_4yKMUwC.js";import"./PopupsCommon.css-BG-751as.js";import"./event-strict-DgQLNDEV.js";import"./FocusableElements-noNskoYV.js";import"./isElementHidden-B4HqmI2E.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./CustomElementsScope-CRlaEhjH.js";import"./Keys-B3oBAe0t.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Cex6U3jO.js";import"./MediaRange-Bnzt26Xb.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./parameters-bundle.css-DHLNbl9v.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-BvV6NyTG.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BYtqX5T7.js";import"./index-D3cwvX0i.js";import"./Label-Cw3xmdjW.js";import"./i18n-CjR4HGlq.js";import"./i18n-defaults-BXUwkpCs.js";import"./index-Bina6Rws.js";import"./Link-C_1Qeegk.js";import"./Icon-g4jJGwIi.js";import"./index-vVWMke_Z.js";import"./index-BZypq4CF.js";import"./Text-BBBHwYsI.js";import"./willShowContent-CZcfsNXp.js";import"./addCustomCSSWithScoping-bWjUKP8X.js";import"./index-CbnmVlWA.js";import"./BusyIndicator-DTHwLaG3.js";import"./index-c5_gOmO2.js";import"./index-II2KQk7A.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DyHFsBXc.js";import"./index-CHSraWsj.js";import"./I18nStore-BBWtp4Wg.js";import"./Bar-QzNt5kUn.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./decline-Bk6V92qv.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-B1L_xjDU.js";import"./information-BQmhacxY.js";import"./sys-enter-2-3Y2FtBDI.js";import"./sys-enter-2-DnGfeGAh.js";import"./Tooltips-CtkDPpba.js";import"./EventProvider-ChtD9rRX.js";const a=()=>t.jsx("div",{children:"Start"}),d=()=>t.jsx(s,{children:"Close"}),l=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(d,{}),children:t.jsx("div",{children:"Not a custom component"})}),h=n=>t.jsx("div",{slot:n.slot,children:"Start"}),u=n=>t.jsx(s,{slot:n.slot,children:"Close"}),x=()=>t.jsx(i,{startContent:t.jsx(h,{}),endContent:t.jsx(u,{}),children:t.jsx("div",{children:"Not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Handling Slots"}),`
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
