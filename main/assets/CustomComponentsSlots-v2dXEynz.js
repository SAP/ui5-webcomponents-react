import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{M as m}from"./chunk-HLWAVYOI-fCgENVyu.js";import{B as i}from"./index-JErf_zms.js";import{B as p}from"./index-icuMpOV1.js";import"./DomRefTable.module-xIunVzOb.js";import"./index-OjgoNOWw.js";import{F as a}from"./Footer-DG1-1e1F.js";import{u as s}from"./index-RwE9nQVW.js";import"./iframe-r1ZYdHqZ.js";import"../sb-preview/runtime.js";import"./react-18-1WT2dSvK.js";import"./index-QYh6idnL.js";import"./_baseForOwn-UZJwRxDU.js";import"./mapValues-HzTlT2lF.js";import"./_baseUniq-JVyScZ-n.js";import"./index-PPLHz8o0.js";import"./index-UBYxvHMA.js";import"./Bar-jrFjVZZ8.js";import"./UI5Element-Jt3C0_FN.js";import"./i18nBundle-ZoJ37UJR.js";import"./VersionInfo-LCCO4Ig5.js";import"./CustomElementsScopeUtils-M7hMRmEH.js";import"./withWebComponent-I1wSIv4y.js";import"./utils-KU8RGjGn.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./ResizeHandler-mTFvwsyT.js";import"./class-map-CHDPODen.js";import"./parameters-bundle.css-HXU4vJcG.js";import"./Button-CV8gKi73.js";import"./Icon-G6aW2FRW.js";import"./Icons-Nr5kgAbF.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./i18n-defaults-zEJ36VRV.js";import"./react-jss.esm-tmBtHfec.js";import"./index-T0w0hqKg.js";import"./decline-4Ez_2Sev.js";import"./i18n-defaults-CPLPRuO1.js";import"./information-bkjyqQzA.js";import"./alert-7Etxrsap.js";import"./index-2_yHJzy3.js";import"./clsx-c3LcQGjR.js";import"./i18n-defaults-8YolVglE.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./addCustomCSSWithScoping-B37rLD-H.js";import"./index-UMQi_GJe.js";import"./Integer-kog98579.js";import"./index-MQuKsQmH.js";import"./Avatar-VKhV6EwI.js";import"./employee-9rldWxaE.js";import"./index-ftZNTjwH.js";import"./index-6HcGW_uJ.js";import"./Link-ipgrhFOm.js";import"./WrappingType-avPrqc94.js";import"./index-XbOz6Cvl.js";import"./index-qsx4SYba.js";import"./Label-Xo_6xXB6.js";import"./index-R1HJ7JKI.js";import"./Popover-5ANP4Jn7.js";import"./PopupUtils-QCyiTOMI.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-NvRre6vc.js";import"./FocusableElements-sOHKyey_.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-xQ1SPtMO.js";import"./BrowserScrollbar.css-R_PDLCAQ.js";const c=()=>t.jsx("div",{children:"Start"}),d=()=>t.jsx(p,{children:"Close"}),l=()=>t.jsx(i,{startContent:t.jsx(c,{}),endContent:t.jsx(d,{}),children:t.jsx("div",{children:"I'm not a custom component"})}),h=n=>t.jsx("div",{slot:n.slot,children:"Start"}),u=n=>t.jsx(p,{slot:n.slot,children:"Close"}),x=()=>t.jsx(i,{startContent:t.jsx(h,{}),endContent:t.jsx(u,{}),children:t.jsx("div",{children:"I'm not a custom component"})});function Dt(n={}){const{wrapper:r}=Object.assign({},s(),n.components);return r?t.jsx(r,Object.assign({},n,{children:t.jsx(e,{})})):e();function e(){const o=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},s(),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Handling Slots"}),`
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
`,t.jsx(a,{style:{position:"fixed",bottom:0,zIndex:2}})]})}}export{Dt as default};
