import{j as t}from"./useIsomorphicLayoutEffect-wJjydpYF.js";import{useMDXComponents as e}from"./index-3-_tf5dF.js";import"./chunk-HLWAVYOI-BhPgKNEm.js";import{M as s}from"./index-BOtYbcUZ.js";import{B as i}from"./index-C2M3uOGX.js";import{B as p}from"./index-DjBMor7M.js";import"./index-BP8_t0zE.js";import"./index-BxmsGmlx.js";import"./copy-3Ib5ZJqq.js";import{F as m}from"./ProjectTemplate-BJ4ODymb.js";import"./iframe-vHI15z3o.js";import"../sb-preview/runtime.js";import"./client-Di-4O7We.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./UI5Element-DC8MZeOy.js";import"./Boot-DRGCpzpB.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScopeUtils-yz8rUzbr.js";import"./withWebComponent-CWrtEEjV.js";import"./utils-EaJipdFl.js";import"./slot-Df15G--e.js";import"./ResizeHandler-DEdNEOKg.js";import"./class-map-B9wLsnvZ.js";import"./parameters-bundle.css-B8uAP-oB.js";import"./Button-BrKU6WlN.js";import"./event-CegLCnR0.js";import"./Keys-BgUkNma0.js";import"./AriaLabelHelper-CzOXVcye.js";import"./i18nBundle-BdneKiEM.js";import"./MarkedEvents-BPv6Lv4o.js";import"./Icons-CG6FlOJ_.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-CmpPkOGs.js";import"./parameters-bundle.css-CtgfEhuk.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-DKt7VHOa.js";import"./index-C_9wAgRM.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DShc4-AB.js";import"./index-BNxusAvf.js";import"./Label-IIemeO1C.js";import"./WrappingType-CW8URInd.js";import"./index-ZqJt0VOX.js";import"./Link-Bsw9emR4.js";import"./index-rQr9Qr9N.js";import"./Popover-D2WBCDl9.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-C_R40Sx-.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-BVkg1U_d.js";import"./FocusableElements-CrwTZl4-.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-MmmenpP7.js";import"./BrowserScrollbar.css-cD_o1v9b.js";import"./index-6h8N-xs_.js";import"./i18n-defaults-DzvGxznN.js";import"./I18nContext-RJHUyvz-.js";import"./index-CSI8GtFb.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./addCustomCSSWithScoping-Bzep2v3d.js";import"./index-SsLcgvon.js";import"./index-Ny7AqSA9.js";import"./Avatar-CzFTtzk7.js";import"./employee-DAykk7OJ.js";import"./alert-BiuXmsCV.js";import"./index-CaGZdkl0.js";import"./index-DCLRzzh3.js";import"./decline--LpgiSgn.js";import"./i18n-defaults-BdfZArTM.js";import"./information-CWnHh7YX.js";const a=()=>t.jsx("div",{children:"Start"}),c=()=>t.jsx(p,{children:"Close"}),d=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(c,{}),children:t.jsx("div",{children:"I'm not a custom component"})}),l=n=>t.jsx("div",{slot:n.slot,children:"Start"}),h=n=>t.jsx(p,{slot:n.slot,children:"Close"}),u=()=>t.jsx(i,{startContent:t.jsx(l,{}),endContent:t.jsx(h,{}),children:t.jsx("div",{children:"I'm not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Handling Slots"}),`
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
