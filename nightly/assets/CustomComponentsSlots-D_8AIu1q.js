import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as e}from"./index-Duvwo7dg.js";import{F as p}from"./CommandsAndQueries-C48bfVA9.js";import"./index-BeVZ985M.js";import{B as i}from"./index-D8VpsgN7.js";import{B as s}from"./index-BTImLLsO.js";import{M as m}from"./index-r_31mxfN.js";import{M as c}from"./index-N87cy000.js";import"./Tag-Ck-rQ93o.js";import"./index-CEr2UAyE.js";import"./index-7Z4Dhk6u.js";import"./Button-BAohpRXl.js";import"./jsx-runtime-xa789Fx-.js";import"./copy-Ce-W84Ka.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-BTb5jHlz.js";import"./preview-M5VYAgVN.js";import"./iframe-B_POwpwF.js";import"./DocsRenderer-CFRXHY34-Do6hYqM6.js";import"./client-2ALsBH8W.js";import"./index-BX0qWsV0.js";import"./Popover-DrPdnlD_.js";import"./slot-_4yKMUwC.js";import"./PopupsCommon.css-D_uQUn1t.js";import"./event-strict-DgQLNDEV.js";import"./FocusableElements-CinXTr6J.js";import"./isElementHidden-gS67o0pl.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./CustomElementsScope-CraI7z9b.js";import"./Keys-CLf_QmYW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-OXK24k1p.js";import"./MediaRange-Bnzt26Xb.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./parameters-bundle.css-D0uTR4GL.js";import"./getEffectiveScrollbarStyle-zkSO3ShF.js";import"./index-p-Ero6xF.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-Dh6tKsMV.js";import"./index-DspB395S.js";import"./Label-DvI9nTT8.js";import"./i18n-CjR4HGlq.js";import"./i18n-defaults-Wx6G1HAa.js";import"./index-BqqAHTof.js";import"./Link-DYEiCybJ.js";import"./Icon-BC8KE6RK.js";import"./index-DOeHcXKd.js";import"./index-g22nm93k.js";import"./Text-BhvqvgTY.js";import"./willShowContent-CZcfsNXp.js";import"./addCustomCSSWithScoping-Br5D2MMD.js";import"./index-CB6Dlc1E.js";import"./BusyIndicator-CP9fjQ10.js";import"./index-BUVDlgt4.js";import"./index-5xYsTlk-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-JpmbdEoa.js";import"./index-COqY4iNg.js";import"./I18nStore-Bx61vi8M.js";import"./index-CY4hIywU.js";import"./Bar-DSK09NO4.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./decline-BJJ7TY3L.js";import"./i18n-defaults-CmVK7_Fz.js";import"./information-jHKcowyE.js";import"./information-l0VFevGn.js";import"./sys-enter-2-vblLkH1D.js";import"./sys-enter-2-CUYL3AE0.js";import"./alert-CtWydQwI.js";import"./sys-help-2-QU1zRg7_.js";import"./Tooltips-CwjopbrF.js";import"./EventProvider-ChtD9rRX.js";const a=()=>t.jsx("div",{children:"Start"}),d=()=>t.jsx(s,{children:"Close"}),l=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(d,{}),children:t.jsx("div",{children:"Not a custom component"})}),h=n=>t.jsx("div",{slot:n.slot,children:"Start"}),u=n=>t.jsx(s,{slot:n.slot,children:"Close"}),x=()=>t.jsx(i,{startContent:t.jsx(h,{}),endContent:t.jsx(u,{}),children:t.jsx("div",{children:"Not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Handling Slots"}),`
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
