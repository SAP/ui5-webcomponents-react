import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{useMDXComponents as e}from"./index-_byTH_QA.js";import"./chunk-HLWAVYOI-DTcAjMu8.js";import{M as s}from"./index-DiRKeNXc.js";import{B as i}from"./index-BwLFc8Lp.js";import{B as p}from"./index-DgHTwzYa.js";import{F as m}from"./ProjectTemplate-CCsPVUx5.js";import"./index-Dl6G-zuu.js";import"./index-D1_ZHIBm.js";import"./copy-CM5pqsHd.js";import"./iframe-B2aeQtEw.js";import"../sb-preview/runtime.js";import"./react-18-Bamk9FSf.js";import"./inheritsLoose-D8L2VVdp.js";import"./_baseForOwn-DFjKyXZi.js";import"./mapValues-BvzalXkB.js";import"./_baseUniq-DRxb5hvO.js";import"./index-2V9fy1S2.js";import"./index-DrFu-skq.js";import"./UI5Element-DtnZiShc.js";import"./Boot-DwA_pgKp.js";import"./VersionInfo-Bnh5Htkx.js";import"./CustomElementsScopeUtils-BkU30VC6.js";import"./withWebComponent-DRPzk8yN.js";import"./utils-BopS74sX.js";import"./useIsomorphicLayoutEffect-gsbYElqV.js";import"./slot-Df15G--e.js";import"./ResizeHandler-CBU2dt4G.js";import"./class-map-DOxVO0GK.js";import"./parameters-bundle.css-C7eXkTg2.js";import"./Button-L0N45cMZ.js";import"./event-CegLCnR0.js";import"./Keys-BgUkNma0.js";import"./AriaLabelHelper-CzOXVcye.js";import"./i18nBundle-CW3QmvUh.js";import"./MarkedEvents-BPv6Lv4o.js";import"./Icons-Dptlkq46.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-DvcRDrqS.js";import"./parameters-bundle.css-DjgCrOcY.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-ByZSnYVg.js";import"./react-jss.esm-BPPChJW9.js";import"./theming.esm-5daRW75o.js";import"./index-Cq5VDksa.js";import"./decline-DqGOoHuM.js";import"./i18n-defaults-BdfZArTM.js";import"./information-CElEnJTC.js";import"./alert-BU8JezYB.js";import"./index-BaWk7_wq.js";import"./clsx-B-dksMZM.js";import"./index-usMxjt4O.js";import"./Label-BgNHvv84.js";import"./WrappingType-CW8URInd.js";import"./index-dfJtckTT.js";import"./Link-RzzTDKIU.js";import"./index-CGPhwl42.js";import"./Popover-DmSynMj1.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-DV-WEd1e.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-BPk9bxJK.js";import"./FocusableElements-D39FYWGM.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-COTFu3zX.js";import"./BrowserScrollbar.css-BtosXvtb.js";import"./index-C3N6u2gC.js";import"./i18n-defaults-BV9KeZ-W.js";import"./I18nContext-BcGksm2n.js";import"./ThemingParameters--AGRs54p.js";import"./index-CiTIhke1.js";import"./useStylesheet-BNfFiS2u.js";import"./ModalsContext-qaxSwC3j.js";import"./addCustomCSSWithScoping-BngKgOcf.js";import"./index-BCHZm4VN.js";import"./index-BaPqUybm.js";import"./Avatar-BX5t-LjK.js";import"./employee-BdaP6Y8j.js";import"./index-CkSLuv7W.js";const a=()=>t.jsx("div",{children:"Start"}),c=()=>t.jsx(p,{children:"Close"}),d=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(c,{}),children:t.jsx("div",{children:"I'm not a custom component"})}),l=n=>t.jsx("div",{slot:n.slot,children:"Start"}),h=n=>t.jsx(p,{slot:n.slot,children:"Close"}),u=()=>t.jsx(i,{startContent:t.jsx(l,{}),endContent:t.jsx(h,{}),children:t.jsx("div",{children:"I'm not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Handling Slots"}),`
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
