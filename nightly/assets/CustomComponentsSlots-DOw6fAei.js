import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as e}from"./index-zdXs1Etw.js";import{F as p}from"./CommandsAndQueries-CcL3MOh_.js";import"./index-DFtvjQHy.js";import{B as i}from"./index-BAxMs7BV.js";import{B as s}from"./index-BfETvGUt.js";import{M as m}from"./index-CGUuQ1vn.js";import{M as c}from"./index-GpSU3wm-.js";import"./TagDesign-Ga50IS6u.js";import"./index-C--kS4iy.js";import"./index-DJcrgQOn.js";import"./Button-9YaJ65nU.js";import"./jsx-runtime-cXES_1K3.js";import"./copy-QX2RrN3g.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-S4mYuCg5.js";import"./preview-DlMSKotJ.js";import"./iframe-74KyTcVa.js";import"./DocsRenderer-CFRXHY34-BjVQiQRd.js";import"./react-18-CYWbi7Zg.js";import"./index-B-pEBbkX.js";import"./Popover-DfnLNPje.js";import"./slot-_4yKMUwC.js";import"./PopupsCommon.css-D5HcBqqE.js";import"./event-strict-DgQLNDEV.js";import"./FocusableElements-D4ksDlVA.js";import"./isElementHidden-B4HqmI2E.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./CustomElementsScope-BUTWMsdD.js";import"./Keys-B3oBAe0t.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DL3AhQCA.js";import"./MediaRange-Bnzt26Xb.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./parameters-bundle.css-DHLNbl9v.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-JVGOCdcg.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-D-3zc5-n.js";import"./index-B25bcwfL.js";import"./Label-C64tPyb_.js";import"./i18n-CjR4HGlq.js";import"./i18n-defaults-BXUwkpCs.js";import"./index-DBc2u5x7.js";import"./Link-CCf5_SyF.js";import"./Icon-DONP1ba8.js";import"./index-BQUJqHPJ.js";import"./index-CP0Y_Y_X.js";import"./Text-4pUyEHNI.js";import"./willShowContent-CZcfsNXp.js";import"./addCustomCSSWithScoping-QexqrevI.js";import"./index-DWg6TCN4.js";import"./BusyIndicator-Mc6uS3Ug.js";import"./index-DaB0Mse-.js";import"./index-BPRvxvn4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C5NYxbXs.js";import"./index-BR7lw8xf.js";import"./I18nStore-B-rJ6v8Q.js";import"./Bar-CJxWL6f6.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./decline-CR10Cnxn.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-DOS1yoWI.js";import"./information-Ddara7JM.js";import"./sys-enter-2-DQ5-UQTF.js";import"./sys-enter-2-ORskki8z.js";import"./Tooltips-BLn7sIp1.js";import"./EventProvider-ChtD9rRX.js";const a=()=>t.jsx("div",{children:"Start"}),d=()=>t.jsx(s,{children:"Close"}),l=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(d,{}),children:t.jsx("div",{children:"Not a custom component"})}),h=n=>t.jsx("div",{slot:n.slot,children:"Start"}),u=n=>t.jsx(s,{slot:n.slot,children:"Close"}),x=()=>t.jsx(i,{startContent:t.jsx(h,{}),endContent:t.jsx(u,{}),children:t.jsx("div",{children:"Not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Handling Slots"}),`
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
