import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as e}from"./index-B5Ip8tK9.js";import{F as p}from"./CommandsAndQueries-Dnz_Hw6e.js";import"./index-DG4SW1Na.js";import{B as i}from"./index-BHCYO8YU.js";import{B as s}from"./index-Bd-rK44S.js";import{M as m}from"./index-DukfgG46.js";import{M as c}from"./index-BWKPikEH.js";import"./Tag-CFnuOVXp.js";import"./index-U0ga5oGA.js";import"./index-B8m469-U.js";import"./Button-Bjd4zYvH.js";import"./jsx-runtime-2URiGFD4.js";import"./copy-CiPkc0hO.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-BHqLOn3P.js";import"./preview-CXjsfKgV.js";import"./iframe-DwIyAsRF.js";import"./DocsRenderer-CFRXHY34-DiZSQ5cR.js";import"./react-18-SRpBHcoT.js";import"./index-BVR6w1bU.js";import"./Popover-C0YXxup5.js";import"./slot-_4yKMUwC.js";import"./PopupsCommon.css-Fn6w0Ixx.js";import"./event-strict-DgQLNDEV.js";import"./FocusableElements-CQV0UnrP.js";import"./isElementHidden-B4HqmI2E.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./CustomElementsScope-BI7irdrP.js";import"./Keys-CLyAIm0c.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DtxVwfCt.js";import"./MediaRange-Bnzt26Xb.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./parameters-bundle.css-CKhNLE8L.js";import"./getEffectiveScrollbarStyle-zkSO3ShF.js";import"./index-D71WPoKU.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-4DYJndCZ.js";import"./index-C4Jitp5p.js";import"./Label-XJ1zprNH.js";import"./i18n-CjR4HGlq.js";import"./i18n-defaults-D-4MAilP.js";import"./index-DQrDl5DZ.js";import"./Link-B2LlQwpl.js";import"./Icon-B0-3JSbm.js";import"./index-DVo4jJWd.js";import"./index-D3evOh0J.js";import"./Text-CA10hASc.js";import"./willShowContent-CZcfsNXp.js";import"./addCustomCSSWithScoping-CKnDw5_z.js";import"./index-YPb1U1C6.js";import"./BusyIndicator-DWZUs86e.js";import"./index-D4tId3DQ.js";import"./index-69BlU8QT.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CRL-E5Mm.js";import"./index-C9pVJkR7.js";import"./I18nStore-CIGTIwFZ.js";import"./index-BkMq5NNM.js";import"./Bar-DYZ6ujMm.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./decline-Dy3AHuu2.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-CT1WFsrs.js";import"./information-BNPlHszt.js";import"./sys-enter-2-Dn3JsYB_.js";import"./sys-enter-2-CVLhpz1T.js";import"./alert-DsnWREGh.js";import"./sys-help-2-D2pBj4rZ.js";import"./Tooltips-B60tbUjG.js";import"./EventProvider-ChtD9rRX.js";const a=()=>t.jsx("div",{children:"Start"}),d=()=>t.jsx(s,{children:"Close"}),l=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(d,{}),children:t.jsx("div",{children:"Not a custom component"})}),h=n=>t.jsx("div",{slot:n.slot,children:"Start"}),u=n=>t.jsx(s,{slot:n.slot,children:"Close"}),x=()=>t.jsx(i,{startContent:t.jsx(h,{}),endContent:t.jsx(u,{}),children:t.jsx("div",{children:"Not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Handling Slots"}),`
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
