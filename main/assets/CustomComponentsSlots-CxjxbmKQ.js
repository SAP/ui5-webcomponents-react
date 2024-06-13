import{j as t}from"./useIsomorphicLayoutEffect-CZEdMYkS.js";import{useMDXComponents as e}from"./index-DcZOShwE.js";import"./chunk-HLWAVYOI-DT-o1I1W.js";import{M as s}from"./index-ZM-57o7g.js";import{B as i}from"./index-I-NZREiZ.js";import{B as p}from"./index-Dp8IwEPL.js";import"./index-T89MH8VM.js";import"./TagDesign-B60Yj3Pp.js";import"./index-gJgmXzrm.js";import"./index-DjqRnomV.js";import"./Boot-Bi0-wsLc.js";import"./copy-CtgKK3fC.js";import"./Button-g4Bi3K-W.js";import{F as m}from"./ProjectTemplate-CVCMjdRb.js";import"./WrappingType-CW8URInd.js";import"./iframe-Cdu6IyIp.js";import"../sb-preview/runtime.js";import"./client-DNfJn3vO.js";import"./_baseForOwn-CLRePLhI.js";import"./mapValues-B_fQXYuL.js";import"./_baseUniq-C22BvjpN.js";import"./index-DPb1xiaU.js";import"./index-DrFu-skq.js";import"./UI5Element-BSD7m3Nn.js";import"./CustomElementsScopeUtils-DQm3oQ75.js";import"./EventProvider-CVfkyUHo.js";import"./withWebComponent-DbBZwVV6.js";import"./utils-D-LpYKBL.js";import"./slot--DoKcWSY.js";import"./ResizeHandler-BZa0Uicw.js";import"./class-map-CgjcvVes.js";import"./parameters-bundle.css-B_nLitlw.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-D-vhNEte.js";import"./decline-CbvxqJl_.js";import"./Icons-DNVx3qDv.js";import"./i18n-defaults-C2wY9l8t.js";import"./information-BBm6bxfd.js";import"./alert-C_nh5Qt7.js";import"./Icon-CxSx41s_.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";import"./i18n-defaults-5yojRpQ-.js";import"./AriaLabelHelper-LMIEtYQL.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./index-BPwAjkf8.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-IiibRSM5.js";import"./Popover-XR-C8_HJ.js";import"./Integer-WDQzHAdZ.js";import"./PopupsCommon.css-BweN9FxF.js";import"./FocusableElements-PMYTkUzF.js";import"./isElementHidden-B4HqmI2E.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-D9IWnstk.js";import"./BrowserScrollbar.css-YdZmbuMe.js";import"./index-DFf4EEFj.js";import"./Label-fn3eGIhh.js";import"./index-CBVsOu0_.js";import"./Link-COfapY2z.js";import"./index-BNTlSUiU.js";import"./index-CPNTbpoD.js";import"./i18n-defaults-DXj3O94t.js";import"./I18nContext-D8i4N15C.js";import"./index-D-IgYp8E.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-BWMWV5L6.js";import"./useIsomorphicId-BEB4eg8l.js";import"./addCustomCSSWithScoping-DAUcWKpH.js";import"./index-C1t_cci-.js";import"./index-EmuVuczB.js";import"./index-DLqSBOZb.js";import"./Avatar-C8BgJzhJ.js";import"./employee-CU0PuroF.js";const a=()=>t.jsx("div",{children:"Start"}),c=()=>t.jsx(p,{children:"Close"}),d=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(c,{}),children:t.jsx("div",{children:"Not a custom component"})}),l=n=>t.jsx("div",{slot:n.slot,children:"Start"}),h=n=>t.jsx(p,{slot:n.slot,children:"Close"}),u=()=>t.jsx(i,{startContent:t.jsx(l,{}),endContent:t.jsx(h,{}),children:t.jsx("div",{children:"Not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Handling Slots"}),`
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
`,t.jsx(m,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function Wt(n={}){const{wrapper:o}={...e(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(r,{...n})}):r(n)}export{Wt as default};
