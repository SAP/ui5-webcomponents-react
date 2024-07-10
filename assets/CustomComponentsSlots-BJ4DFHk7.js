import{j as t}from"./useIsomorphicLayoutEffect-CC_9R8NV.js";import{useMDXComponents as e}from"./index-3-_tf5dF.js";import"./chunk-HLWAVYOI-DOGZlFEp.js";import{M as s}from"./index-DCe9hKTd.js";import{B as i}from"./index-BblI7IRs.js";import{B as p}from"./index-Cqc2lMTm.js";import"./index-BP8_t0zE.js";import"./index-BxmsGmlx.js";import"./copy-C3s9MmBF.js";import{F as m}from"./ProjectTemplate-CnfFx7fc.js";import"./iframe-K9ZPOBS-.js";import"../sb-preview/runtime.js";import"./client-Di-4O7We.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./UI5Element-DYuDwSfb.js";import"./Boot--nQrAl1V.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScope-muWBOMD2.js";import"./withWebComponent-BtiFbjTX.js";import"./utils-A9XecSn_.js";import"./slot-Df15G--e.js";import"./ResizeHandler-CI3zUPmr.js";import"./class-map-DRsidP3Z.js";import"./parameters-bundle.css-Dqt1YlDa.js";import"./Button-CWBaZ7ro.js";import"./event-CegLCnR0.js";import"./Keys-BgUkNma0.js";import"./AriaLabelHelper-CzOXVcye.js";import"./i18nBundle-zzLYNekx.js";import"./MarkedEvents-BPv6Lv4o.js";import"./Icons-Bp1YSqwb.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-D7AkHrnr.js";import"./parameters-bundle.css-P3lSuE--.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-B_qME8Ot.js";import"./index-CzPEDdfg.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BSPa2dAP.js";import"./index-DRuGOEJb.js";import"./Label-BsQWgLJi.js";import"./WrappingType-CW8URInd.js";import"./index-lqfu6sXD.js";import"./Link-C6bYFqpr.js";import"./index-weJqy25G.js";import"./Popover-fF8jtMoy.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-BKIoEsVZ.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-CjoatB38.js";import"./FocusableElements-Duwi--Bv.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-Cq34otsJ.js";import"./BrowserScrollbar.css-DtDsFaw-.js";import"./index-WspRYDV-.js";import"./i18n-defaults-BqW0kOHN.js";import"./I18nContext-RJHUyvz-.js";import"./index-Cqf388Vu.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./addCustomCSSWithScoping-BbKd266_.js";import"./index-DIKijyLT.js";import"./index-ClldIo8k.js";import"./Avatar-BS_WXaxR.js";import"./employee-CGxftPv4.js";import"./alert-GCtO51nh.js";import"./index-CXTSylkh.js";import"./index-0sOo1Jhc.js";import"./decline-BAFEOGpp.js";import"./i18n-defaults-BdfZArTM.js";import"./information-C8CMIM2W.js";const a=()=>t.jsx("div",{children:"Start"}),c=()=>t.jsx(p,{children:"Close"}),d=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(c,{}),children:t.jsx("div",{children:"Not a custom component"})}),l=n=>t.jsx("div",{slot:n.slot,children:"Start"}),h=n=>t.jsx(p,{slot:n.slot,children:"Close"}),u=()=>t.jsx(i,{startContent:t.jsx(l,{}),endContent:t.jsx(h,{}),children:t.jsx("div",{children:"Not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Handling Slots"}),`
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
`,t.jsx(m,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function _t(n={}){const{wrapper:o}={...e(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(r,{...n})}):r(n)}export{_t as default};
