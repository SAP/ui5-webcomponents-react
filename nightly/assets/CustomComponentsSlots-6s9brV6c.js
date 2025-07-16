import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as e}from"./index-B5Ip8tK9.js";import{F as p}from"./CommandsAndQueries-BeD7J8WM.js";import"./index-PZoHAA8T.js";import{B as i}from"./index-81t91Bfq.js";import{B as s}from"./index-C2cs6waD.js";import{M as m}from"./index-C_SKcqSz.js";import{M as c}from"./index-Bh0L8GxH.js";import"./Tag-B8Y5CAT_.js";import"./index-U0ga5oGA.js";import"./index-B8m469-U.js";import"./Button-DsiN4KEf.js";import"./jsx-runtime-2NO35c9p.js";import"./copy-C9kEgeiD.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-l18RNg85.js";import"./preview-Iav3-8tF.js";import"./iframe-DJ7xYQfh.js";import"./DocsRenderer-CFRXHY34-BoM9Ip9D.js";import"./react-18-SRpBHcoT.js";import"./index-BVR6w1bU.js";import"./Popover-DHgn1IwJ.js";import"./slot-_4yKMUwC.js";import"./PopupsCommon.css-1ftV5PB8.js";import"./event-strict-DgQLNDEV.js";import"./FocusableElements--dusX2Bm.js";import"./isElementHidden-gS67o0pl.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./CustomElementsScope-BZQ-yqK5.js";import"./Keys-CLf_QmYW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DGDOSiJK.js";import"./MediaRange-Bnzt26Xb.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./parameters-bundle.css-D0uTR4GL.js";import"./getEffectiveScrollbarStyle-zkSO3ShF.js";import"./index-C2w1dnoB.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DhspXHhi.js";import"./index-49bJeJce.js";import"./Label-DvK4qyHf.js";import"./i18n-CjR4HGlq.js";import"./i18n-defaults-Wx6G1HAa.js";import"./index-28AZPOp1.js";import"./Link-CIigJXcZ.js";import"./Icon-Dy5MqRQN.js";import"./index-39R8lAwY.js";import"./index-Z1IFI4-r.js";import"./Text-CWzAOMGb.js";import"./willShowContent-CZcfsNXp.js";import"./addCustomCSSWithScoping-BPwSVJcY.js";import"./index-B-i0fidp.js";import"./BusyIndicator-kBFPsFJK.js";import"./index-B61k-92l.js";import"./index-6SfSTYbY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DTc-n_gr.js";import"./index-BO1wru2W.js";import"./I18nStore-Bb3vbAIQ.js";import"./index-WWlNSEWj.js";import"./Bar-Dp3X3-Kq.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./decline-Cf8Y7eZn.js";import"./i18n-defaults-CmVK7_Fz.js";import"./information-CPeQ-J71.js";import"./information-DVtVmQQs.js";import"./sys-enter-2-DM7CihIf.js";import"./sys-enter-2-D_EhgDRM.js";import"./alert-B-6XnuHB.js";import"./sys-help-2-CQSD8GDX.js";import"./Tooltips-DqK_Zwt1.js";import"./EventProvider-ChtD9rRX.js";const a=()=>t.jsx("div",{children:"Start"}),d=()=>t.jsx(s,{children:"Close"}),l=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(d,{}),children:t.jsx("div",{children:"Not a custom component"})}),h=n=>t.jsx("div",{slot:n.slot,children:"Start"}),u=n=>t.jsx(s,{slot:n.slot,children:"Close"}),x=()=>t.jsx(i,{startContent:t.jsx(h,{}),endContent:t.jsx(u,{}),children:t.jsx("div",{children:"Not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Handling Slots"}),`
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
`,t.jsx(p,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function Xt(n={}){const{wrapper:o}={...e(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(r,{...n})}):r(n)}export{Xt as default};
