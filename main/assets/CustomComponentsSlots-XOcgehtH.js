import{j as t}from"./jsx-runtime-DtaoT6pD.js";import"./chunk-HLWAVYOI-kleDb1Z3.js";import{M as m}from"./index-2zwLzvpF.js";import{B as s}from"./index--NYE3WHN.js";import{B as p}from"./index-aVQvg3DJ.js";import{F as a}from"./ProjectTemplate-fbHB9gyq.js";import"./index-OjgoNOWw.js";import"./index-QYh6idnL.js";import"./copy-rq9qK5qL.js";import{u as i}from"./index-RwE9nQVW.js";import"./iframe-jLc6NF62.js";import"../sb-preview/runtime.js";import"./react-18-1WT2dSvK.js";import"./_baseForOwn-a7AeJH13.js";import"./mapValues-_kP3xGjM.js";import"./_baseUniq-_JZHYp0e.js";import"./index-PPLHz8o0.js";import"./index-7I0hdIjK.js";import"./UI5Element-oLeGfnU4.js";import"./Language-aesXCmkP.js";import"./VersionInfo-AzzP9wS2.js";import"./CustomElementsScopeUtils-IpwVqUeG.js";import"./withWebComponent--kEkWNJH.js";import"./utils-rNFQc6Ui.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./ResizeHandler-pk5_zz-J.js";import"./class-map-Y-YjCFqX.js";import"./parameters-bundle.css-jS5Rgmp1.js";import"./Button-ui6PL7pJ.js";import"./event-lM5HanI-.js";import"./Keys-ZEuNsqmZ.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./i18nBundle-YvxCnun_.js";import"./MarkedEvents-aYv14vsS.js";import"./Icons-B0Lm9Xgp.js";import"./willShowContent-MSvI8sYo.js";import"./Icon-s-QlKO5-.js";import"./parameters-bundle.css-mPCp9TQx.js";import"./HasPopup-9BAMrqbD.js";import"./i18n-defaults-CQMo-g9a.js";import"./react-jss.esm-tmBtHfec.js";import"./index-RTQTWwRT.js";import"./decline-KM5PgfOz.js";import"./i18n-defaults-SIMqfZL6.js";import"./information-phWr88nL.js";import"./alert-xBUzpOmY.js";import"./index-6f3-3TZK.js";import"./clsx-Zbgk8kpT.js";import"./index-WcdrN-Ak.js";import"./Label-z6oc8zzv.js";import"./WrappingType-avPrqc94.js";import"./index-ppkoOlgU.js";import"./Link-lWkth14S.js";import"./index-BuNcU5jA.js";import"./Popover-RS8IZQFL.js";import"./Integer-kog98579.js";import"./PopupUtils-7MJMGT2m.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-umKiUwKH.js";import"./FocusableElements-o5zpB6FE.js";import"./isElementHidden-d3-Fo4V6.js";import"./getEffectiveScrollbarStyle-Gz48PLeD.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-5njKSr-C.js";import"./BrowserScrollbar.css-nSPAj6kk.js";import"./index-YN01GDwL.js";import"./i18n-defaults-1NWI3C8K.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-z21dC6BM.js";import"./ModalsContext-T9gUbaXC.js";import"./CssSizeVariables-HFpqBBhk.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-0Qf_GZqW.js";import"./index-fD3XnzoQ.js";import"./index-R9S3_JYB.js";import"./Avatar-sqKRaJp5.js";import"./employee-PrBJTXfy.js";import"./index-KT2IFA22.js";const c=()=>t.jsx("div",{children:"Start"}),d=()=>t.jsx(p,{children:"Close"}),l=()=>t.jsx(s,{startContent:t.jsx(c,{}),endContent:t.jsx(d,{}),children:t.jsx("div",{children:"I'm not a custom component"})}),h=n=>t.jsx("div",{slot:n.slot,children:"Start"}),u=n=>t.jsx(p,{slot:n.slot,children:"Close"}),x=()=>t.jsx(s,{startContent:t.jsx(h,{}),endContent:t.jsx(u,{}),children:t.jsx("div",{children:"I'm not a custom component"})});function Ut(n={}){const{wrapper:r}=Object.assign({},i(),n.components);return r?t.jsx(r,Object.assign({},n,{children:t.jsx(e,{})})):e();function e(){const o=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},i(),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Handling Slots"}),`
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
`,t.jsx(a,{style:{position:"fixed",bottom:0,zIndex:2}})]})}}export{Ut as default};
