import{j as t}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as e}from"./index-DtGqrCZN.js";import"./chunk-HLWAVYOI-Dk4242Or.js";import{M as s}from"./index-CQTAO8tP.js";import{B as i}from"./index-DN7U1A9w.js";import{B as p}from"./index-BeutTfwK.js";import{F as m}from"./ProjectTemplate-C8PB08XF.js";import"./index-Cu9bd8lq.js";import"./index-Ckls47V4.js";import"./copy-ChpJf3sv.js";import"./iframe-B9ojHKoH.js";import"../sb-preview/runtime.js";import"./client-Cby6Sz3m.js";import"./inheritsLoose-D8L2VVdp.js";import"./_baseForOwn-CD7metVA.js";import"./mapValues-DbyeKAf9.js";import"./_baseUniq-Dmu8z6NP.js";import"./index-D-lniKcH.js";import"./index-DrFu-skq.js";import"./UI5Element-TZfj5eGG.js";import"./Boot-CiW9Yqx0.js";import"./VersionInfo-BESRVDo6.js";import"./CustomElementsScopeUtils-Brq83ayG.js";import"./withWebComponent-CmHHCrVX.js";import"./utils-CnhbIiu8.js";import"./useIsomorphicLayoutEffect-CDseMwwv.js";import"./slot-Df15G--e.js";import"./ResizeHandler-DDqpi34j.js";import"./class-map-CmJPAu_C.js";import"./parameters-bundle.css-BOgjeX8S.js";import"./Button-BzhOkI6c.js";import"./event-CegLCnR0.js";import"./Keys-BiUfzlGt.js";import"./AriaLabelHelper-CzOXVcye.js";import"./i18nBundle-C2WczoLt.js";import"./MarkedEvents-BPv6Lv4o.js";import"./Icons-Bz_R9SHk.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-xNvpL1oe.js";import"./parameters-bundle.css-B6zgRRib.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-weVOdquz.js";import"./react-jss.esm-BpNdaHSZ.js";import"./theming.esm-BaGMLphO.js";import"./index-kmDWEYkA.js";import"./decline-D6EEqVrc.js";import"./i18n-defaults-BdfZArTM.js";import"./information-DW1Al7d0.js";import"./alert-CXHMnQvw.js";import"./index-D9X0AKIp.js";import"./clsx-B-dksMZM.js";import"./index-ChJ4ay-7.js";import"./Label-ps0cWtHP.js";import"./WrappingType-CW8URInd.js";import"./index-DpnfAJj0.js";import"./Link-Ckf4Uxns.js";import"./index-BEu48q3i.js";import"./Popover-Jk90pyiT.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-FBsPN5sA.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-1-Fx8yKA.js";import"./FocusableElements-DLk5IaaK.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-DseTvTa6.js";import"./BrowserScrollbar.css-0WwBRmTe.js";import"./index-Clgb5PFv.js";import"./i18n-defaults-DcbMYOf3.js";import"./I18nContext-lEOM8vPx.js";import"./ThemingParameters--AGRs54p.js";import"./index-CvWpx1AF.js";import"./useStylesheet-CLZMRdPE.js";import"./ModalsContext-DDUwbLsf.js";import"./addCustomCSSWithScoping-CWznCzZ1.js";import"./index-DY4lAGWN.js";import"./index-B1NRCyGN.js";import"./Avatar-DrytwCNY.js";import"./employee-BRu8U1FM.js";import"./index--d4BYfBU.js";const a=()=>t.jsx("div",{children:"Start"}),c=()=>t.jsx(p,{children:"Close"}),d=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(c,{}),children:t.jsx("div",{children:"I'm not a custom component"})}),l=n=>t.jsx("div",{slot:n.slot,children:"Start"}),h=n=>t.jsx(p,{slot:n.slot,children:"Close"}),u=()=>t.jsx(i,{startContent:t.jsx(l,{}),endContent:t.jsx(h,{}),children:t.jsx("div",{children:"I'm not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Handling Slots"}),`
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
