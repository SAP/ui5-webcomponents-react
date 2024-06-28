import{j as t}from"./useIsomorphicLayoutEffect-x3FS-xo7.js";import{useMDXComponents as e}from"./index-3-_tf5dF.js";import"./chunk-HLWAVYOI-DE7Cd6yW.js";import{M as s}from"./index-DxuOfQlo.js";import{B as i}from"./index-CW4dA2oP.js";import{B as p}from"./index-BaLzQqsI.js";import"./index-BP8_t0zE.js";import"./index-BxmsGmlx.js";import"./copy-CpRxx2mm.js";import{F as m}from"./ProjectTemplate-C8X93s0c.js";import"./iframe-BcfUQkuZ.js";import"../sb-preview/runtime.js";import"./client-Di-4O7We.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./UI5Element-SUktJcPg.js";import"./Boot-CclrjlB_.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScopeUtils-CSlIoILc.js";import"./withWebComponent-BgGNQpSI.js";import"./utils-BiMDJYwV.js";import"./slot-Df15G--e.js";import"./ResizeHandler-Bwxc3Ll7.js";import"./class-map-CeKKj88r.js";import"./parameters-bundle.css-Cyr_NsFV.js";import"./Button-awfxS-u-.js";import"./event-CegLCnR0.js";import"./Keys-BgUkNma0.js";import"./AriaLabelHelper-CzOXVcye.js";import"./i18nBundle-DaXqDOt3.js";import"./MarkedEvents-BPv6Lv4o.js";import"./Icons-Bft-hUnu.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-C_A-NjlC.js";import"./parameters-bundle.css--Z5ctRmg.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-1MXDhRqV.js";import"./index-BykYlwjP.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-NckrYtSC.js";import"./index-DLdLI-Lw.js";import"./Label-DmN4xHd_.js";import"./WrappingType-CW8URInd.js";import"./index-C3ku0FIC.js";import"./Link-fwsdvAFJ.js";import"./index-DkpNLt35.js";import"./Popover-DDKOmkxw.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-uPounuup.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-CWX1O2jP.js";import"./FocusableElements-i0omOcs_.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-80OTj-RC.js";import"./BrowserScrollbar.css-7CdlaW1M.js";import"./index-DOeO8XXJ.js";import"./i18n-defaults-Bdewnnuu.js";import"./I18nContext-RJHUyvz-.js";import"./index-C2xRLxKL.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./addCustomCSSWithScoping-9LlgEVTF.js";import"./index-DpSkdN2-.js";import"./index-CiKDZMgT.js";import"./Avatar-BLe1VqxP.js";import"./employee-uGJRlzwB.js";import"./alert-ClVg17pq.js";import"./index-4leB1AGq.js";import"./index-DqXXZe2g.js";import"./decline-ubQgRYfe.js";import"./i18n-defaults-BdfZArTM.js";import"./information-C5yxSOcR.js";const a=()=>t.jsx("div",{children:"Start"}),c=()=>t.jsx(p,{children:"Close"}),d=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(c,{}),children:t.jsx("div",{children:"Not a custom component"})}),l=n=>t.jsx("div",{slot:n.slot,children:"Start"}),h=n=>t.jsx(p,{slot:n.slot,children:"Close"}),u=()=>t.jsx(i,{startContent:t.jsx(l,{}),endContent:t.jsx(h,{}),children:t.jsx("div",{children:"Not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Handling Slots"}),`
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
