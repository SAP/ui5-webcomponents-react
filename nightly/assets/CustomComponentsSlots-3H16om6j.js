import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as e}from"./index-zdXs1Etw.js";import{F as p}from"./CommandsAndQueries-Bt_U1nrG.js";import"./index-DKh9xRXh.js";import{B as i}from"./index-DRtoD8Uq.js";import{B as s}from"./index-DmVWxwwF.js";import{M as m}from"./index-Dxwx1dKU.js";import{M as c}from"./index-Ckh4UXjO.js";import"./TagDesign-Ga50IS6u.js";import"./index-C--kS4iy.js";import"./index-DJcrgQOn.js";import"./Button-CDUAIOHY.js";import"./jsx-runtime-TYk6ziax.js";import"./copy-BIm13QSs.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-BZr7m-U9.js";import"./preview-Cb-rr16-.js";import"./iframe-DoZVV7fl.js";import"./DocsRenderer-CFRXHY34-CTd9-PxE.js";import"./react-18-DGA_MWY9.js";import"./index-B-pEBbkX.js";import"./Popover-CYWkC5M7.js";import"./slot-_4yKMUwC.js";import"./PopupsCommon.css-C4odaWdv.js";import"./event-strict-DgQLNDEV.js";import"./FocusableElements-B0h6XdH-.js";import"./isElementHidden-B4HqmI2E.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./CustomElementsScope-BUTWMsdD.js";import"./Keys-B3oBAe0t.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BhhEdsAZ.js";import"./MediaRange-Bnzt26Xb.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./parameters-bundle.css-DHLNbl9v.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-D8BvuigD.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-D-3zc5-n.js";import"./index-BxZpBR5v.js";import"./Label-CNIQ9f-B.js";import"./i18n-CjR4HGlq.js";import"./i18n-defaults-BXUwkpCs.js";import"./index-DG9f8b92.js";import"./Link-DJmP58JE.js";import"./Icon-CJfyoCyo.js";import"./index-C4AHKFdV.js";import"./index-DA4Nf3tz.js";import"./Text-BE7aNcNC.js";import"./willShowContent-CZcfsNXp.js";import"./addCustomCSSWithScoping-_tNs8Q2d.js";import"./index-CkLIGxQ0.js";import"./BusyIndicator-DRlXpx-R.js";import"./index-PdcYfHMq.js";import"./index-BGMpZMYY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCPNHV1H.js";import"./index-DFh5kwJx.js";import"./I18nStore-DdNtknPF.js";import"./Bar-Gdr2Jc9Z.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./decline-Ctf1iLC2.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-CaDfZmsc.js";import"./information-axph4kwY.js";import"./sys-enter-2-W20sQgrM.js";import"./sys-enter-2-Dj0rlhGw.js";import"./Tooltips-DGo6fNOA.js";import"./EventProvider-ChtD9rRX.js";const a=()=>t.jsx("div",{children:"Start"}),d=()=>t.jsx(s,{children:"Close"}),l=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(d,{}),children:t.jsx("div",{children:"Not a custom component"})}),h=n=>t.jsx("div",{slot:n.slot,children:"Start"}),u=n=>t.jsx(s,{slot:n.slot,children:"Close"}),x=()=>t.jsx(i,{startContent:t.jsx(h,{}),endContent:t.jsx(u,{}),children:t.jsx("div",{children:"Not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Handling Slots"}),`
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
