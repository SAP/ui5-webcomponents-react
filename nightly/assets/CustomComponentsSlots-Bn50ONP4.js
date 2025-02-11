import{j as t}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as e}from"./index-ChplMHeC.js";import"./DocsRenderer-CFRXHY34-Dj_zrGoR.js";import{M as p}from"./index-BgngL2Fx.js";import"./index-BqpbEQpv.js";import{B as i}from"./index-oOJ3w16E.js";import{B as s}from"./index-Dvk6KQni.js";import{M as m}from"./index-Bxqqfnvk.js";import"./TagDesign-Dou_yO3g.js";import"./index-D23YZj_x.js";import"./index-DJ2M8xrO.js";import"./Button-2px5KXGd.js";import"./withWebComponent-XJjz10u8.js";import"./copy-d7htsAK2.js";import{F as c}from"./CommandsAndQueries-CoJjlOqe.js";import"./WrappingType-CW8URInd.js";import"./Title-DPrdYQMV.js";import"./iframe-Bz427A0g.js";import"./client-lwzJIAjg.js";import"./index-DkMQ0k7r.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./Bar-DtQw1mD8.js";import"./slot-_4yKMUwC.js";import"./ResizeHandler-DyOJZiXp.js";import"./parameters-bundle.css-DSUsAvJy.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Icon-D3cRfWaZ.js";import"./useIsomorphicLayoutEffect-Bu4xop1x.js";import"./Keys-Can65e7H.js";import"./decline-DP6kMU1p.js";import"./i18n-defaults-CifGXSvE.js";import"./information-Bmgd6dpL.js";import"./information-8BjDCJTf.js";import"./sys-enter-2-BcpVUItX.js";import"./sys-enter-2-KjprDONg.js";import"./i18n-defaults-CjsTKlnu.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-CGW8Xrj5.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./utils-DyMdBfPm.js";import"./Popover-BMI_rbJM.js";import"./PopupsCommon.css-B7Lyl-LM.js";import"./FocusableElements-dXKcAzjx.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-DhLCN0Xl.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-bO_9Zfr-.js";import"./index-B2xVvqo6.js";import"./Label-VZeu70kx.js";import"./index-AZQF7cRn.js";import"./Link-BJ2ET1br.js";import"./index-DIZ1yifi.js";import"./index-CosszrBQ.js";import"./Text-yuhY-WXa.js";import"./addCustomCSSWithScoping-CBi_hReC.js";import"./index-C60mQ2wP.js";import"./index-BfJ8Dvmz.js";import"./BusyIndicator-3eE4S65a.js";import"./index-CjbB3fTU.js";import"./index-DCp58fk9.js";import"./AvatarSize-BceVhWoP.js";import"./employee-heX9Z6a9.js";import"./index-CgRbqk_5.js";import"./I18nStore-CWEJ68aw.js";const a=()=>t.jsx("div",{children:"Start"}),d=()=>t.jsx(s,{children:"Close"}),l=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(d,{}),children:t.jsx("div",{children:"Not a custom component"})}),h=n=>t.jsx("div",{slot:n.slot,children:"Start"}),u=n=>t.jsx(s,{slot:n.slot,children:"Close"}),x=()=>t.jsx(i,{startContent:t.jsx(h,{}),endContent:t.jsx(u,{}),children:t.jsx("div",{children:"Not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Handling Slots"}),`
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
`,t.jsx(c,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function Ht(n={}){const{wrapper:o}={...e(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(r,{...n})}):r(n)}export{Ht as default};
