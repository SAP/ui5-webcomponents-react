import{j as t}from"./jsx-runtime-DtaoT6pD.js";import"./chunk-HLWAVYOI-QE3PfFv0.js";import{M as m}from"./index-QVQ1uxUj.js";import{B as s}from"./index-IK4GBsio.js";import{B as p}from"./index-yjjPxP40.js";import{F as a}from"./ProjectTemplate-xaenlpVs.js";import"./index-OjgoNOWw.js";import"./index-QYh6idnL.js";import"./copy-hCLuyOUN.js";import{u as i}from"./index-RwE9nQVW.js";import"./iframe-rn21FmfG.js";import"../sb-preview/runtime.js";import"./react-18-1WT2dSvK.js";import"./_baseForOwn-a7AeJH13.js";import"./mapValues-_kP3xGjM.js";import"./_baseUniq-_JZHYp0e.js";import"./index-PPLHz8o0.js";import"./index-7I0hdIjK.js";import"./UI5Element-9EXj3atz.js";import"./Boot-vTaFuwdG.js";import"./VersionInfo-ldzxTIVv.js";import"./CustomElementsScopeUtils-orabJqjR.js";import"./withWebComponent-LTFbYRvs.js";import"./utils-d3BcYjeO.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./ResizeHandler-_qRzLmqT.js";import"./class-map-gjOVarQw.js";import"./parameters-bundle.css--8JKw2Pt.js";import"./Button-DcwyQdV9.js";import"./event-lM5HanI-.js";import"./Keys-ZEuNsqmZ.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./i18nBundle-j8vDD4VY.js";import"./MarkedEvents-aYv14vsS.js";import"./Icons-Vbmmw7bO.js";import"./willShowContent-MSvI8sYo.js";import"./Icon-kyep1SqZ.js";import"./parameters-bundle.css-EKzfhWK3.js";import"./HasPopup-9BAMrqbD.js";import"./i18n-defaults-X1FTyPSK.js";import"./react-jss.esm-fzYOEaou.js";import"./theming.esm-g_6oAtQL.js";import"./index-RD480hMU.js";import"./decline-lKJ0r_rf.js";import"./i18n-defaults-SIMqfZL6.js";import"./information-6yrGLmai.js";import"./alert--0SE21sY.js";import"./index-mlUqNAao.js";import"./clsx-Zbgk8kpT.js";import"./index-puXoaw82.js";import"./Label-mY98SzPQ.js";import"./WrappingType-avPrqc94.js";import"./index-GpujGHCh.js";import"./Link-9XR0tYIs.js";import"./index-riwI_eO_.js";import"./Popover-Yl5FRmf7.js";import"./Integer-kog98579.js";import"./PopupUtils-kUkkQSCb.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-xzQQME9v.js";import"./FocusableElements-xTkOlDEw.js";import"./isElementHidden-d3-Fo4V6.js";import"./getEffectiveScrollbarStyle-Gz48PLeD.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-tejh5TI3.js";import"./BrowserScrollbar.css-wlj1ktzG.js";import"./index-jXHhCG3a.js";import"./i18n-defaults-tj1r3f3s.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-EsRn4j4y.js";import"./useStylesheet-QHWPoMwQ.js";import"./ModalsContext-T9gUbaXC.js";import"./addCustomCSSWithScoping-ZfvsxM11.js";import"./index-nAfsYGRj.js";import"./index-aYXZb9-L.js";import"./Avatar-tUVXUHcz.js";import"./employee-EyN-jrGw.js";import"./index-nrJ7T13M.js";const c=()=>t.jsx("div",{children:"Start"}),d=()=>t.jsx(p,{children:"Close"}),l=()=>t.jsx(s,{startContent:t.jsx(c,{}),endContent:t.jsx(d,{}),children:t.jsx("div",{children:"I'm not a custom component"})}),h=n=>t.jsx("div",{slot:n.slot,children:"Start"}),u=n=>t.jsx(p,{slot:n.slot,children:"Close"}),x=()=>t.jsx(s,{startContent:t.jsx(h,{}),endContent:t.jsx(u,{}),children:t.jsx("div",{children:"I'm not a custom component"})});function zt(n={}){const{wrapper:r}=Object.assign({},i(),n.components);return r?t.jsx(r,Object.assign({},n,{children:t.jsx(e,{})})):e();function e(){const o=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},i(),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Handling Slots"}),`
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
