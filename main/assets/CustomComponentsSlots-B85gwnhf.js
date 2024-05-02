import{j as t}from"./ManagedStyles-0Bwp9t5R.js";import{useMDXComponents as e}from"./index-3-_tf5dF.js";import"./chunk-HLWAVYOI-ZGVYWRe2.js";import{M as s}from"./index-fP9D_OYW.js";import{B as i}from"./index--7VHa4fi.js";import{B as p}from"./index-HVmdC5H9.js";import"./index-BP8_t0zE.js";import"./index-BxmsGmlx.js";import"./copy-FfYDXqvA.js";import{F as m}from"./ProjectTemplate-CMSJO-TY.js";import"./iframe-BZr4znkx.js";import"../sb-preview/runtime.js";import"./client-Di-4O7We.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./UI5Element-BfPpwo_k.js";import"./Boot-BtdVcW0c.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScopeUtils-CjWOyBed.js";import"./withWebComponent-DdLYI_QY.js";import"./utils-VXdlHuBA.js";import"./useIsomorphicLayoutEffect-CnI1knHw.js";import"./slot-Df15G--e.js";import"./ResizeHandler-BxP3RYN1.js";import"./class-map-DwUNpVO-.js";import"./parameters-bundle.css-C7eXkTg2.js";import"./Button-C4siPQ_G.js";import"./event-CegLCnR0.js";import"./Keys-BgUkNma0.js";import"./AriaLabelHelper-CzOXVcye.js";import"./i18nBundle-Dx46P1iz.js";import"./MarkedEvents-BPv6Lv4o.js";import"./Icons-DgaaT5sV.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-CDo0XdyR.js";import"./parameters-bundle.css-DjgCrOcY.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-BFrvdQTW.js";import"./index-DAcMaLKF.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DXQOMd9Q.js";import"./index-3ZF5BeCh.js";import"./Label-B0QBRtjK.js";import"./WrappingType-CW8URInd.js";import"./index-WueiPBT8.js";import"./Link-Ca8TnKXf.js";import"./index-BZoSJu6a.js";import"./Popover-BRx0aMsU.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-BDyegTwa.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-BGWtnzwQ.js";import"./FocusableElements-FQMFYvMw.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-BhswnH6I.js";import"./BrowserScrollbar.css-BmT0sFnr.js";import"./index-CCV2VZkT.js";import"./i18n-defaults-B3VmmZkh.js";import"./I18nContext-RJHUyvz-.js";import"./index-CIMqV4DH.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./addCustomCSSWithScoping-B4X1apx3.js";import"./index-Cf9l3iR-.js";import"./index-CaRGmt1o.js";import"./Avatar-DDfgA5P5.js";import"./employee-Cmog-JUE.js";import"./alert-DaAYzDGJ.js";import"./index-BxJm1SAM.js";import"./index-CFvAJWI0.js";import"./decline-Bq4uAF5d.js";import"./i18n-defaults-BdfZArTM.js";import"./information-CIM5_BNu.js";const a=()=>t.jsx("div",{children:"Start"}),c=()=>t.jsx(p,{children:"Close"}),d=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(c,{}),children:t.jsx("div",{children:"I'm not a custom component"})}),l=n=>t.jsx("div",{slot:n.slot,children:"Start"}),h=n=>t.jsx(p,{slot:n.slot,children:"Close"}),u=()=>t.jsx(i,{startContent:t.jsx(l,{}),endContent:t.jsx(h,{}),children:t.jsx("div",{children:"I'm not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Handling Slots"}),`
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
`,t.jsx(m,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function kt(n={}){const{wrapper:o}={...e(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(r,{...n})}):r(n)}export{kt as default};
