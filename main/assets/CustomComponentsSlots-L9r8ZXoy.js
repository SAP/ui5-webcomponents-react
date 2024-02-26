import{j as t}from"./jsx-runtime-DtaoT6pD.js";import"./chunk-HLWAVYOI-gdaS8Ahj.js";import{M as m}from"./index-FCx-ohCS.js";import{B as p}from"./index-JiLgUkXM.js";import{B as s}from"./index-H1OmHS7i.js";import{F as a}from"./ProjectTemplate-Qax3SV_z.js";import"./index-OjgoNOWw.js";import"./index-QYh6idnL.js";import"./copy-yGGaKiyA.js";import{u as i}from"./index-RwE9nQVW.js";import"./iframe-e3g82syF.js";import"../sb-preview/runtime.js";import"./react-18-1WT2dSvK.js";import"./_baseForOwn-a7AeJH13.js";import"./mapValues-_kP3xGjM.js";import"./_baseUniq-_JZHYp0e.js";import"./index-PPLHz8o0.js";import"./index-7I0hdIjK.js";import"./UI5Element-PDhTXJ0K.js";import"./Language-gwOe_M78.js";import"./VersionInfo-zmLW7G4m.js";import"./CustomElementsScopeUtils-StEZUlti.js";import"./withWebComponent-76pUbYpZ.js";import"./utils-axAaCEhS.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./ResizeHandler-dJr96v2O.js";import"./class-map-bhYzoXeo.js";import"./parameters-bundle.css-jS5Rgmp1.js";import"./Button-roBYNtMK.js";import"./event-lM5HanI-.js";import"./Keys-ZEuNsqmZ.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./i18nBundle-kNlRgZSb.js";import"./MarkedEvents-aYv14vsS.js";import"./Icons-HU_OsjUX.js";import"./willShowContent-MSvI8sYo.js";import"./Icon-ddwK7i-Z.js";import"./parameters-bundle.css-mPCp9TQx.js";import"./HasPopup-9BAMrqbD.js";import"./i18n-defaults-fXrRGy4a.js";import"./react-jss.esm-tmBtHfec.js";import"./index-6pfutzjZ.js";import"./decline-CAXtFmDv.js";import"./i18n-defaults-SIMqfZL6.js";import"./information-zrOk1lB0.js";import"./alert-KKDABsAn.js";import"./index-iYv8HJTi.js";import"./clsx-Zbgk8kpT.js";import"./index-0dmymJE1.js";import"./Label-FF9RWaAe.js";import"./WrappingType-avPrqc94.js";import"./index--kAzRQ7Z.js";import"./Link-04aNnizE.js";import"./index-BzgCSksV.js";import"./Popover-617eJuHR.js";import"./Integer-kog98579.js";import"./PopupUtils-cNe84Tf4.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-xdOKPs4T.js";import"./FocusableElements--oBMpjjl.js";import"./isElementHidden-d3-Fo4V6.js";import"./getEffectiveScrollbarStyle-Gz48PLeD.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-hPGZuWy3.js";import"./BrowserScrollbar.css-SfEgvsVX.js";import"./index-lPldneR1.js";import"./i18n-defaults-ZVLl3Qs7.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-jI3Y0f77.js";import"./StyleContext-9nyrn-qG.js";import"./ModalsContext-T9gUbaXC.js";import"./CssSizeVariables-HFpqBBhk.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-OxCD80Mt.js";import"./index-3nL6bmr7.js";import"./index-1xEB9FCY.js";import"./Avatar-Zr4UGbbl.js";import"./employee-_6wWdZWc.js";import"./index-Lz-zxcEr.js";const c=()=>t.jsx("div",{children:"Start"}),d=()=>t.jsx(s,{children:"Close"}),l=()=>t.jsx(p,{startContent:t.jsx(c,{}),endContent:t.jsx(d,{}),children:t.jsx("div",{children:"I'm not a custom component"})}),h=n=>t.jsx("div",{slot:n.slot,children:"Start"}),u=n=>t.jsx(s,{slot:n.slot,children:"Close"}),x=()=>t.jsx(p,{startContent:t.jsx(h,{}),endContent:t.jsx(u,{}),children:t.jsx("div",{children:"I'm not a custom component"})});function qt(n={}){const{wrapper:r}=Object.assign({},i(),n.components);return r?t.jsx(r,Object.assign({},n,{children:t.jsx(e,{})})):e();function e(){const o=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},i(),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Handling Slots"}),`
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
`,t.jsx(a,{style:{position:"fixed",bottom:0,zIndex:2}})]})}}export{qt as default};
