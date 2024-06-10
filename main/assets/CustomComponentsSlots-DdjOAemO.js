import{j as t}from"./useIsomorphicLayoutEffect-Cdhcir-A.js";import{useMDXComponents as e}from"./index-DcZOShwE.js";import"./chunk-HLWAVYOI-HRRk2TRS.js";import{M as s}from"./index-DlfyUcNP.js";import{B as i}from"./index-CLf1LoNn.js";import{B as p}from"./index-D5IdN3i0.js";import"./index-gJgmXzrm.js";import"./index-DjqRnomV.js";import"./copy-DwYLhAbQ.js";import{F as m}from"./ProjectTemplate-L_D0cOGV.js";import"./iframe-CKAhA9_x.js";import"../sb-preview/runtime.js";import"./client-DNfJn3vO.js";import"./_baseForOwn-CLRePLhI.js";import"./mapValues-B_fQXYuL.js";import"./_baseUniq-C22BvjpN.js";import"./index-DPb1xiaU.js";import"./index-DrFu-skq.js";import"./UI5Element-CzMfQqnP.js";import"./Boot-DutchAmg.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScopeUtils-HfHyyjXv.js";import"./withWebComponent-B-q4dpqR.js";import"./utils-CzTHXoYc.js";import"./slot-Df15G--e.js";import"./ResizeHandler-DQKG4dIE.js";import"./class-map-D3G_ubmA.js";import"./parameters-bundle.css-2LjyHCki.js";import"./Button-BzKON9jh.js";import"./event-CegLCnR0.js";import"./Keys-BgUkNma0.js";import"./AriaLabelHelper-CzOXVcye.js";import"./i18nBundle-C7Xi0JmF.js";import"./MarkedEvents-BPv6Lv4o.js";import"./Icons-DOypJ1ey.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-Czk9o4-x.js";import"./parameters-bundle.css-kZpvVQc-.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-iTMd0Np9.js";import"./index-D9zrd22s.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BapCJMzX.js";import"./index-DMi1B-w1.js";import"./Label-COhM1iHW.js";import"./WrappingType-CW8URInd.js";import"./index-sWNdkNCn.js";import"./Link-BpvJx02W.js";import"./index-BXF1Ug5z.js";import"./Popover-CgEuE7bG.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-_doHq5C_.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-3JkkzoGu.js";import"./FocusableElements-CGV1dSWU.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-5kI6_gZF.js";import"./BrowserScrollbar.css-opuuJdpl.js";import"./index-BJXBoxs7.js";import"./i18n-defaults-BFgjw7fK.js";import"./I18nContext-D8i4N15C.js";import"./index-CqL1iFrm.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-BWMWV5L6.js";import"./useIsomorphicId-BEB4eg8l.js";import"./addCustomCSSWithScoping-E64gwvMe.js";import"./index-D5w_QVRj.js";import"./index-DydjIXv_.js";import"./Avatar-B4OEebUt.js";import"./employee-B43YsEH_.js";import"./alert-Cx3mJvyk.js";import"./index-B8l07-6v.js";import"./index-Dg3JKqdl.js";import"./decline-DCttDR6b.js";import"./i18n-defaults-BdfZArTM.js";import"./information-Bz3ag37N.js";const a=()=>t.jsx("div",{children:"Start"}),c=()=>t.jsx(p,{children:"Close"}),d=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(c,{}),children:t.jsx("div",{children:"Not a custom component"})}),l=n=>t.jsx("div",{slot:n.slot,children:"Start"}),h=n=>t.jsx(p,{slot:n.slot,children:"Close"}),u=()=>t.jsx(i,{startContent:t.jsx(l,{}),endContent:t.jsx(h,{}),children:t.jsx("div",{children:"Not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Handling Slots"}),`
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
