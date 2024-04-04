import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{useMDXComponents as e}from"./index-_byTH_QA.js";import"./chunk-HLWAVYOI-D_lbESS3.js";import{M as s}from"./index-DlvU7JkR.js";import{B as i}from"./index-Bu6U7E4k.js";import{B as p}from"./index-CQE2WSJR.js";import{F as m}from"./ProjectTemplate-DJdE26-Z.js";import"./index-Dl6G-zuu.js";import"./index-D1_ZHIBm.js";import"./copy-ChpJf3sv.js";import"./iframe-aoKFBcy-.js";import"../sb-preview/runtime.js";import"./react-18-Bamk9FSf.js";import"./inheritsLoose-D8L2VVdp.js";import"./_baseForOwn-DFjKyXZi.js";import"./mapValues-BvzalXkB.js";import"./_baseUniq-DRxb5hvO.js";import"./index-2V9fy1S2.js";import"./index-DrFu-skq.js";import"./UI5Element-TZfj5eGG.js";import"./Boot-CiW9Yqx0.js";import"./VersionInfo-BESRVDo6.js";import"./CustomElementsScopeUtils-Brq83ayG.js";import"./withWebComponent-WdPEUVG_.js";import"./utils-B7AYZOSV.js";import"./useIsomorphicLayoutEffect-gsbYElqV.js";import"./slot-Df15G--e.js";import"./ResizeHandler-DDqpi34j.js";import"./class-map-DdS6yb0u.js";import"./parameters-bundle.css-BOgjeX8S.js";import"./Button-D5VmNntQ.js";import"./event-CegLCnR0.js";import"./Keys-BiUfzlGt.js";import"./AriaLabelHelper-CzOXVcye.js";import"./i18nBundle-C2WczoLt.js";import"./MarkedEvents-BPv6Lv4o.js";import"./Icons-Bz_R9SHk.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-CItvJRAI.js";import"./parameters-bundle.css-B6zgRRib.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-weVOdquz.js";import"./react-jss.esm-BPPChJW9.js";import"./theming.esm-5daRW75o.js";import"./index-BEogAxus.js";import"./decline-D6EEqVrc.js";import"./i18n-defaults-BdfZArTM.js";import"./information-DW1Al7d0.js";import"./alert-CXHMnQvw.js";import"./index-loc45roa.js";import"./clsx-B-dksMZM.js";import"./index-DaRmuT3k.js";import"./Label-Cuq9lQQu.js";import"./WrappingType-CW8URInd.js";import"./index-YgL8IrBJ.js";import"./Link-ShECJtRl.js";import"./index-CqQR8_Yl.js";import"./Popover-BZGRcTIp.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-FBsPN5sA.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-o-m9Y-i7.js";import"./FocusableElements-DLk5IaaK.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-CSZX4I-3.js";import"./BrowserScrollbar.css-ByCTonOa.js";import"./index-CYjHeYtF.js";import"./i18n-defaults-FgEXIKeH.js";import"./I18nContext-BcGksm2n.js";import"./ThemingParameters--AGRs54p.js";import"./index-DvBQI2Vb.js";import"./useStylesheet-Cs3TLZWO.js";import"./ModalsContext-qaxSwC3j.js";import"./addCustomCSSWithScoping-CohoEJjR.js";import"./index-DXpHqzG4.js";import"./index-CrQT923E.js";import"./Avatar-BCyNq7eW.js";import"./employee-BRu8U1FM.js";import"./index-CC_AR8Lc.js";const a=()=>t.jsx("div",{children:"Start"}),c=()=>t.jsx(p,{children:"Close"}),d=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(c,{}),children:t.jsx("div",{children:"I'm not a custom component"})}),l=n=>t.jsx("div",{slot:n.slot,children:"Start"}),h=n=>t.jsx(p,{slot:n.slot,children:"Close"}),u=()=>t.jsx(i,{startContent:t.jsx(l,{}),endContent:t.jsx(h,{}),children:t.jsx("div",{children:"I'm not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Handling Slots"}),`
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
`,t.jsx(d,{}),`
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
`,t.jsx(u,{}),`
`,t.jsx(m,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function Ot(n={}){const{wrapper:o}={...e(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(r,{...n})}):r(n)}export{Ot as default};
