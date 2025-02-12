import{j as t}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as e}from"./index-ChplMHeC.js";import"./DocsRenderer-CFRXHY34-DBIv7lnu.js";import{M as p}from"./index-CdT5jJZZ.js";import"./index-BkQKeFEP.js";import{B as i}from"./index-Dr5-eCwd.js";import{B as s}from"./index-DZJWwrpE.js";import{M as m}from"./index-BWY3TFGt.js";import"./TagDesign-Dou_yO3g.js";import"./index-D23YZj_x.js";import"./index-DJ2M8xrO.js";import"./Button-ClmCy2Cm.js";import"./jsx-runtime-DJfzgo3Z.js";import"./copy-BHzTzCpZ.js";import{F as c}from"./CommandsAndQueries-BXf-dk22.js";import"./WrappingType-CW8URInd.js";import"./Title-BR0HRFMn.js";import"./iframe-DhiZQmNe.js";import"./client-lwzJIAjg.js";import"./index-DkMQ0k7r.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./Bar-mh4ClwPe.js";import"./slot-_4yKMUwC.js";import"./ResizeHandler-C0NcOxBw.js";import"./parameters-bundle.css-3_Pq1j61.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Icon-9zGTEZoy.js";import"./CustomElementsScope-Cnxnu_QK.js";import"./Keys-Can65e7H.js";import"./decline-CK9cTtHa.js";import"./i18n-defaults-CifGXSvE.js";import"./information-DJOHIqln.js";import"./information-ix6q05KE.js";import"./sys-enter-2-FqE9Jd9Z.js";import"./sys-enter-2-FVzsVtg3.js";import"./i18n-defaults-CjsTKlnu.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BdH9fu8C.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./EventProvider-ChtD9rRX.js";import"./Popover-ChT-u0ao.js";import"./PopupsCommon.css-_Z_CYCJm.js";import"./FocusableElements-BnnVWUNQ.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-CqnluFWg.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-D6kLlLz-.js";import"./index-BmN7WUzF.js";import"./Label-Cv3ZI2wV.js";import"./index-DhvWoo7_.js";import"./Link-BMGGPz7B.js";import"./index-Bfdb1dFM.js";import"./index-DSrRVUVn.js";import"./Text-Bdc-nFmb.js";import"./addCustomCSSWithScoping-e6wN0F3P.js";import"./index-BTrRnRp2.js";import"./BusyIndicator-D3N-k1mY.js";import"./index-Bur18C1c.js";import"./index-S7gxAvta.js";import"./AvatarSize-BceVhWoP.js";import"./employee-Bfg7DU9E.js";import"./index-D4qgphJw.js";import"./I18nStore-Ck_ZDoO_.js";const a=()=>t.jsx("div",{children:"Start"}),d=()=>t.jsx(s,{children:"Close"}),l=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(d,{}),children:t.jsx("div",{children:"Not a custom component"})}),h=n=>t.jsx("div",{slot:n.slot,children:"Start"}),u=n=>t.jsx(s,{slot:n.slot,children:"Close"}),x=()=>t.jsx(i,{startContent:t.jsx(h,{}),endContent:t.jsx(u,{}),children:t.jsx("div",{children:"Not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Handling Slots"}),`
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
`,t.jsx(c,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function Dt(n={}){const{wrapper:o}={...e(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(r,{...n})}):r(n)}export{Dt as default};
