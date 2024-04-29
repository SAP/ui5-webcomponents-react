import{j as t}from"./ManagedStyles-DBz9b8_7.js";import{useMDXComponents as e}from"./index-DtGqrCZN.js";import"./chunk-HLWAVYOI-DPg6L8Zx.js";import{M as s}from"./index-CEpObSqI.js";import{B as i}from"./index-JlxHfix_.js";import{B as p}from"./index-BtRM9l8o.js";import"./index-Cu9bd8lq.js";import"./index-Ckls47V4.js";import"./copy-Cu_ZU0U0.js";import{F as m}from"./ProjectTemplate-dv80dj8j.js";import"./iframe-B9GR-I9j.js";import"../sb-preview/runtime.js";import"./react-18-CyVMVvrE.js";import"./_baseForOwn-CD7metVA.js";import"./mapValues-DbyeKAf9.js";import"./_baseUniq-Dmu8z6NP.js";import"./index-CtAXm0b8.js";import"./index-DrFu-skq.js";import"./UI5Element-C4mSOhNA.js";import"./Boot-Biwz_Caq.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScopeUtils-48ratPWk.js";import"./withWebComponent-C_dYwLuv.js";import"./utils--_sL0meP.js";import"./useIsomorphicLayoutEffect-CDseMwwv.js";import"./slot-Df15G--e.js";import"./ResizeHandler-DG5rdHnC.js";import"./class-map-Cfio9s54.js";import"./parameters-bundle.css-C7eXkTg2.js";import"./Button-BAj8jTq4.js";import"./event-CegLCnR0.js";import"./Keys-BgUkNma0.js";import"./AriaLabelHelper-CzOXVcye.js";import"./i18nBundle-Dr6PGakp.js";import"./MarkedEvents-BPv6Lv4o.js";import"./Icons-DjI__-3J.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-Clr9g2fS.js";import"./parameters-bundle.css-DjgCrOcY.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-DyNPhf0P.js";import"./index-gKp4owBv.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-Emr_nFue.js";import"./index-CMdMrG6D.js";import"./Label-CkBRSGa0.js";import"./WrappingType-CW8URInd.js";import"./index-BWo-XmWZ.js";import"./Link-CMvBWZzp.js";import"./index-Di51Jz6p.js";import"./Popover-DNMeFD1A.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-ApBaW5cX.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-1I1Br736.js";import"./FocusableElements-BYZ07gKz.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-DouRFD4_.js";import"./BrowserScrollbar.css-rLpJ_tAN.js";import"./index-DkTfA-Yk.js";import"./i18n-defaults-DVTRFCa9.js";import"./I18nContext-lEOM8vPx.js";import"./index-BQBt-Rpa.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-DDUwbLsf.js";import"./useIsomorphicId-CHfKDsSO.js";import"./addCustomCSSWithScoping-BxGdOQ6d.js";import"./index-fIqe_XJe.js";import"./index-C5Kk-HCv.js";import"./Avatar-DrQd1eyL.js";import"./employee-BUX20iaG.js";import"./alert-BU0AsmHE.js";import"./index-Dv0ybGmn.js";import"./index-CUc3BWkV.js";import"./decline-b84495rg.js";import"./i18n-defaults-BdfZArTM.js";import"./information-_3DJs868.js";const a=()=>t.jsx("div",{children:"Start"}),c=()=>t.jsx(p,{children:"Close"}),d=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(c,{}),children:t.jsx("div",{children:"I'm not a custom component"})}),l=n=>t.jsx("div",{slot:n.slot,children:"Start"}),h=n=>t.jsx(p,{slot:n.slot,children:"Close"}),u=()=>t.jsx(i,{startContent:t.jsx(l,{}),endContent:t.jsx(h,{}),children:t.jsx("div",{children:"I'm not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Handling Slots"}),`
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
