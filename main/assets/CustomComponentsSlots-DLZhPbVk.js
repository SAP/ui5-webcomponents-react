import{j as t}from"./useIsomorphicLayoutEffect-VT0hzFUo.js";import{useMDXComponents as e}from"./index-3-_tf5dF.js";import"./chunk-HLWAVYOI-CiWTaJ_E.js";import{M as s}from"./index-BIqf6soy.js";import{B as i}from"./index-usF0AQVf.js";import{B as p}from"./index-BKcuWX8s.js";import"./index-BP8_t0zE.js";import"./index-BxmsGmlx.js";import"./copy-AJFuNtDX.js";import{F as m}from"./ProjectTemplate-B4l8AKli.js";import"./iframe-BycDgneP.js";import"../sb-preview/runtime.js";import"./client-Di-4O7We.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./UI5Element-DwbFyBon.js";import"./Boot-BVnGU0ip.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScopeUtils-B2x3tIsm.js";import"./withWebComponent-DvmwIdUK.js";import"./utils-neMnggoA.js";import"./slot-Df15G--e.js";import"./ResizeHandler-DPru0u-P.js";import"./class-map-CS8eahb3.js";import"./parameters-bundle.css-2LjyHCki.js";import"./Button-BsmQPuS3.js";import"./event-CegLCnR0.js";import"./Keys-BgUkNma0.js";import"./AriaLabelHelper-CzOXVcye.js";import"./i18nBundle-DbWkXQeQ.js";import"./MarkedEvents-BPv6Lv4o.js";import"./Icons-DyBGPyMo.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-_9Cp-e0V.js";import"./parameters-bundle.css-kZpvVQc-.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-CqU3c0Xc.js";import"./index-Dp6KfAFn.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DovReOaw.js";import"./index-LDlb5l8_.js";import"./Label-8bLCWgMU.js";import"./WrappingType-CW8URInd.js";import"./index-Shu32ZBa.js";import"./Link-DIcSBYfZ.js";import"./index-FSCM6XVG.js";import"./Popover-ComfN-sG.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-CoIIx-oA.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-BspShIhm.js";import"./FocusableElements-DEjr2b5c.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-RUCW1mQv.js";import"./BrowserScrollbar.css-BTaDXFx1.js";import"./index-CNIrU-iy.js";import"./i18n-defaults-DgugUEvt.js";import"./I18nContext-RJHUyvz-.js";import"./index-CL_5mZ89.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./addCustomCSSWithScoping-VI82Stk0.js";import"./index-90ImzwMD.js";import"./index-FVArVguH.js";import"./Avatar-Czn1NGIX.js";import"./employee-wCGkTOTe.js";import"./alert-CJTybc-z.js";import"./index-DEnfJwyE.js";import"./index-SmN-FiiR.js";import"./decline-CHA057wR.js";import"./i18n-defaults-BdfZArTM.js";import"./information-5jLlktsT.js";const a=()=>t.jsx("div",{children:"Start"}),c=()=>t.jsx(p,{children:"Close"}),d=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(c,{}),children:t.jsx("div",{children:"Not a custom component"})}),l=n=>t.jsx("div",{slot:n.slot,children:"Start"}),h=n=>t.jsx(p,{slot:n.slot,children:"Close"}),u=()=>t.jsx(i,{startContent:t.jsx(l,{}),endContent:t.jsx(h,{}),children:t.jsx("div",{children:"Not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Handling Slots"}),`
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
