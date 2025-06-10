import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as e}from"./index-B5Ip8tK9.js";import{F as p}from"./CommandsAndQueries-D2wFa5cQ.js";import"./index-SPbYFsOa.js";import{B as i}from"./index-R8tTShKi.js";import{B as s}from"./index-CK7zNLqv.js";import{M as m}from"./index-QRJB2RmK.js";import{M as c}from"./index-BRThQ-zg.js";import"./Tag-BGp0HQg1.js";import"./index-U0ga5oGA.js";import"./index-B8m469-U.js";import"./Button-CddyUUJt.js";import"./jsx-runtime-CTdjW1dy.js";import"./copy-DVi57tol.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-JqJU4F4n.js";import"./preview-B16w6u79.js";import"./iframe-DjwMyPFe.js";import"./DocsRenderer-CFRXHY34-BZAdP8k5.js";import"./react-18-SRpBHcoT.js";import"./index-BVR6w1bU.js";import"./Popover-D3TB1XeJ.js";import"./slot-_4yKMUwC.js";import"./PopupsCommon.css-3rSjbG44.js";import"./event-strict-DgQLNDEV.js";import"./FocusableElements-Cvm20E5b.js";import"./isElementHidden-B4HqmI2E.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./CustomElementsScope-BI7irdrP.js";import"./Keys-BxH5KEHJ.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-B38a0cLW.js";import"./MediaRange-Bnzt26Xb.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./parameters-bundle.css-CKhNLE8L.js";import"./getEffectiveScrollbarStyle-zkSO3ShF.js";import"./index-D71WPoKU.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-4DYJndCZ.js";import"./index-BNsc4RDp.js";import"./Label-CxXPup1E.js";import"./i18n-CjR4HGlq.js";import"./i18n-defaults-Bwpyempw.js";import"./index-xR1I-Wi5.js";import"./Link-BvcafW2a.js";import"./Icon-Cq4WdPfD.js";import"./index-DuSPh-fE.js";import"./index-OzB7lNJQ.js";import"./Text-DZG3aMF7.js";import"./willShowContent-CZcfsNXp.js";import"./addCustomCSSWithScoping-B6DvbxXy.js";import"./index-DPnISxA_.js";import"./BusyIndicator-BKaUugOY.js";import"./index-CnTKSd9L.js";import"./index-Dj0HSimA.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-1lbVTklO.js";import"./index-R0bcenp3.js";import"./I18nStore-C5X80oUZ.js";import"./index-qPcauRtU.js";import"./Bar-DSDKCIcg.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./decline-CzIZ7Vnl.js";import"./i18n-defaults-CmVK7_Fz.js";import"./information-C85sdt-6.js";import"./information-CovZJhop.js";import"./sys-enter-2-LJy9JDcm.js";import"./sys-enter-2-CUlYw7x6.js";import"./alert-DKjZxuBr.js";import"./sys-help-2-CdqLSqXL.js";import"./Tooltips-CywStIph.js";import"./EventProvider-ChtD9rRX.js";const a=()=>t.jsx("div",{children:"Start"}),d=()=>t.jsx(s,{children:"Close"}),l=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(d,{}),children:t.jsx("div",{children:"Not a custom component"})}),h=n=>t.jsx("div",{slot:n.slot,children:"Start"}),u=n=>t.jsx(s,{slot:n.slot,children:"Close"}),x=()=>t.jsx(i,{startContent:t.jsx(h,{}),endContent:t.jsx(u,{}),children:t.jsx("div",{children:"Not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Handling Slots"}),`
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
