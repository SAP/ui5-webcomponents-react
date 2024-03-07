import{j as t}from"./jsx-runtime-DtaoT6pD.js";import"./chunk-HLWAVYOI-DP7TsRBw.js";import{M as m}from"./index-j464sglR.js";import{B as s}from"./index-RGL69Ccb.js";import{B as p}from"./index-cT5HpiGU.js";import{F as a}from"./ProjectTemplate-qbLR_GCz.js";import"./index-OjgoNOWw.js";import"./index-QYh6idnL.js";import"./copy-GXCl5_6q.js";import{u as i}from"./index-RwE9nQVW.js";import"./iframe-lvTVDQ9h.js";import"../sb-preview/runtime.js";import"./react-18-1WT2dSvK.js";import"./_baseForOwn-a7AeJH13.js";import"./mapValues-_kP3xGjM.js";import"./_baseUniq-_JZHYp0e.js";import"./index-PPLHz8o0.js";import"./index-7I0hdIjK.js";import"./UI5Element-i6xEMhb-.js";import"./Boot-ZMdbUkXu.js";import"./VersionInfo-szri6OiK.js";import"./CustomElementsScopeUtils-E-jGiXBT.js";import"./withWebComponent-WsMVk7rH.js";import"./utils-TqRdq3Pf.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./ResizeHandler-_spraO4D.js";import"./class-map-QoPRPm_o.js";import"./parameters-bundle.css-zCRWVrjd.js";import"./Button-2HS1JCrT.js";import"./event-lM5HanI-.js";import"./Keys-ZEuNsqmZ.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./i18nBundle-QOmUTBjc.js";import"./MarkedEvents-aYv14vsS.js";import"./Icons-2Vjs2kvs.js";import"./willShowContent-MSvI8sYo.js";import"./Icon-ONjMh5dV.js";import"./parameters-bundle.css-I2VxmuZZ.js";import"./HasPopup-9BAMrqbD.js";import"./i18n-defaults-KFYnnpmz.js";import"./react-jss.esm-fzYOEaou.js";import"./theming.esm-g_6oAtQL.js";import"./index-gbwDuwvH.js";import"./decline-9_Y3Taaa.js";import"./i18n-defaults-SIMqfZL6.js";import"./information-5Caf1O3N.js";import"./alert-80rGR3Mk.js";import"./index-mlUqNAao.js";import"./clsx-Zbgk8kpT.js";import"./index-jdIcBaoB.js";import"./Label-6T3Q5KMo.js";import"./WrappingType-avPrqc94.js";import"./index-Xa57At0r.js";import"./Link-gyEWjMqm.js";import"./index-dP23692m.js";import"./Popover-AJDeb5lw.js";import"./Integer-kog98579.js";import"./PopupUtils--F87unyw.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-D70R2m1B.js";import"./FocusableElements--mw2hLMH.js";import"./isElementHidden-d3-Fo4V6.js";import"./getEffectiveScrollbarStyle-Gz48PLeD.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-T1SBcBMD.js";import"./BrowserScrollbar.css-amc9gXm3.js";import"./index-PT67_7v6.js";import"./i18n-defaults-EsDEVf23.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-6DfCcktU.js";import"./useStylesheet-XCSdJTxH.js";import"./ModalsContext-T9gUbaXC.js";import"./addCustomCSSWithScoping-4CvfEWOd.js";import"./index-NUaykFCm.js";import"./index-H6PC_dgE.js";import"./Avatar-JeSMkDk4.js";import"./employee-ld-8O_mW.js";import"./index-vhLKbz8Z.js";const c=()=>t.jsx("div",{children:"Start"}),d=()=>t.jsx(p,{children:"Close"}),l=()=>t.jsx(s,{startContent:t.jsx(c,{}),endContent:t.jsx(d,{}),children:t.jsx("div",{children:"I'm not a custom component"})}),h=n=>t.jsx("div",{slot:n.slot,children:"Start"}),u=n=>t.jsx(p,{slot:n.slot,children:"Close"}),x=()=>t.jsx(s,{startContent:t.jsx(h,{}),endContent:t.jsx(u,{}),children:t.jsx("div",{children:"I'm not a custom component"})});function zt(n={}){const{wrapper:r}=Object.assign({},i(),n.components);return r?t.jsx(r,Object.assign({},n,{children:t.jsx(e,{})})):e();function e(){const o=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},i(),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Handling Slots"}),`
`,t.jsx(o.h1,{id:"adding-custom-components-to-slots",children:"Adding custom components to slots"}),`
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
`,t.jsx(a,{style:{position:"fixed",bottom:0,zIndex:2}})]})}}export{zt as default};
