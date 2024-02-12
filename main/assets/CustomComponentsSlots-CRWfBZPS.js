import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{M as m}from"./chunk-HLWAVYOI-TI0EeyFX.js";import{B as s}from"./index-W_ChQs9m.js";import{B as p}from"./index-3IBrtR0G.js";import{F as a}from"./ProjectTemplate-UBMe-mZG.js";import"./index-OjgoNOWw.js";import"./index-QYh6idnL.js";import{u as i}from"./index-RwE9nQVW.js";import"./iframe-IqeNtHcI.js";import"../sb-preview/runtime.js";import"./react-18-1WT2dSvK.js";import"./_baseForOwn-a7AeJH13.js";import"./mapValues-_kP3xGjM.js";import"./_baseUniq-_JZHYp0e.js";import"./index-PPLHz8o0.js";import"./index-7I0hdIjK.js";import"./UI5Element-J5BIXSmd.js";import"./i18nBundle-hBv5shGA.js";import"./VersionInfo-AzzP9wS2.js";import"./CustomElementsScopeUtils-IpwVqUeG.js";import"./withWebComponent--kEkWNJH.js";import"./utils-rNFQc6Ui.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./ResizeHandler-nsiBebAr.js";import"./class-map-Y-YjCFqX.js";import"./parameters-bundle.css-jS5Rgmp1.js";import"./Button-3dE37AvA.js";import"./event-lM5HanI-.js";import"./Keys-Mzj2D4aO.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./Icons-w8Ubykga.js";import"./Icon-9mGrp6sQ.js";import"./parameters-bundle.css-mPCp9TQx.js";import"./HasPopup-9BAMrqbD.js";import"./i18n-defaults-KF6OS2eD.js";import"./react-jss.esm-tmBtHfec.js";import"./index-vwIUCXTk.js";import"./decline-TLe42uKS.js";import"./i18n-defaults-iZnAAWr4.js";import"./information-mLcAhNUH.js";import"./alert-EvF5vfgw.js";import"./index-_9C7BQQF.js";import"./clsx-Zbgk8kpT.js";import"./index-Fc47nGfS.js";import"./Label-z2EGRvw-.js";import"./WrappingType-avPrqc94.js";import"./index-e73Il5d6.js";import"./Link-qPsX_s-9.js";import"./index-YJF5AoZ_.js";import"./Popover-_i-9Nlxt.js";import"./Integer-kog98579.js";import"./PopupUtils-vEkjvavX.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-mpuHIMki.js";import"./FocusableElements-yiWWnti0.js";import"./isElementHidden-d3-Fo4V6.js";import"./getEffectiveScrollbarStyle-Gz48PLeD.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-5njKSr-C.js";import"./BrowserScrollbar.css-f5JVpLjm.js";import"./index-I2ZSoiFx.js";import"./i18n-defaults-i_6r8m_B.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-cXf_ADaj.js";import"./ModalsContext-T9gUbaXC.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-QKBhLXCa.js";import"./index-gHq51Mfr.js";import"./index-FJvtTNFY.js";import"./Avatar-DMnS_15W.js";import"./employee-E8ifPoB6.js";import"./index-8V_7KnVa.js";const c=()=>t.jsx("div",{children:"Start"}),d=()=>t.jsx(p,{children:"Close"}),l=()=>t.jsx(s,{startContent:t.jsx(c,{}),endContent:t.jsx(d,{}),children:t.jsx("div",{children:"I'm not a custom component"})}),h=n=>t.jsx("div",{slot:n.slot,children:"Start"}),u=n=>t.jsx(p,{slot:n.slot,children:"Close"}),x=()=>t.jsx(s,{startContent:t.jsx(h,{}),endContent:t.jsx(u,{}),children:t.jsx("div",{children:"I'm not a custom component"})});function Wt(n={}){const{wrapper:r}=Object.assign({},i(),n.components);return r?t.jsx(r,Object.assign({},n,{children:t.jsx(e,{})})):e();function e(){const o=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},i(),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Handling Slots"}),`
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
`,t.jsx(a,{style:{position:"fixed",bottom:0,zIndex:2}})]})}}export{Wt as default};
