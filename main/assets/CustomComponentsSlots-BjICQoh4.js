import{j as t}from"./useIsomorphicLayoutEffect-puIvDQED.js";import{useMDXComponents as e}from"./index-3-_tf5dF.js";import"./chunk-HLWAVYOI-9PMZGvom.js";import{M as s}from"./index-DBu3Flxc.js";import{B as i}from"./index-Du4f5gMk.js";import{B as p}from"./index-Caqrmj9a.js";import"./index-BP8_t0zE.js";import"./index-BxmsGmlx.js";import"./copy-BzdHwFnn.js";import{F as m}from"./ProjectTemplate-CPEiuaXu.js";import"./iframe-DSrtQXFV.js";import"../sb-preview/runtime.js";import"./client-Di-4O7We.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./UI5Element-C8JZhjZA.js";import"./Boot-CehKKsjw.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScopeUtils-B6a-Hnn9.js";import"./withWebComponent-CpdHtqwM.js";import"./utils-B2Z4xp5G.js";import"./slot-Df15G--e.js";import"./ResizeHandler-DFUfYtDU.js";import"./class-map-BSt0RHbu.js";import"./parameters-bundle.css-D-LV_LNe.js";import"./Button-wye3yEeO.js";import"./event-CegLCnR0.js";import"./Keys-BgUkNma0.js";import"./AriaLabelHelper-CzOXVcye.js";import"./i18nBundle-DoewWk5r.js";import"./MarkedEvents-BPv6Lv4o.js";import"./Icons-CCqbOxoD.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-BXh46edA.js";import"./parameters-bundle.css-CG8awnKl.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-cA9sdirt.js";import"./index-BN5l8ygQ.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BNgyBdxY.js";import"./index-BVE7w_BZ.js";import"./Label-ehI9yDjT.js";import"./WrappingType-CW8URInd.js";import"./index-wLExbs0i.js";import"./Link-D5wE9fp4.js";import"./index-DFCslxTk.js";import"./Popover-yDBvz9_Q.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-DvcyIhsp.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-CxnKdQ3r.js";import"./FocusableElements-ZkSzzhJd.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-CrxzMbdj.js";import"./BrowserScrollbar.css-VZcIES4c.js";import"./index-Dt_WWgmT.js";import"./i18n-defaults-BRjckM2F.js";import"./I18nContext-RJHUyvz-.js";import"./index-Wey6YoSP.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./addCustomCSSWithScoping-DbtDFkfr.js";import"./index-ChMN2oMF.js";import"./index-BY_Uwh3g.js";import"./Avatar-DFzTuyBm.js";import"./employee-BTeWQfSq.js";import"./alert-B59OKHU0.js";import"./index-DA4cuX_8.js";import"./index-CeQdwYY0.js";import"./decline-fWbovNdr.js";import"./i18n-defaults-BdfZArTM.js";import"./information-BGWhutS_.js";const a=()=>t.jsx("div",{children:"Start"}),c=()=>t.jsx(p,{children:"Close"}),d=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(c,{}),children:t.jsx("div",{children:"I'm not a custom component"})}),l=n=>t.jsx("div",{slot:n.slot,children:"Start"}),h=n=>t.jsx(p,{slot:n.slot,children:"Close"}),u=()=>t.jsx(i,{startContent:t.jsx(l,{}),endContent:t.jsx(h,{}),children:t.jsx("div",{children:"I'm not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Handling Slots"}),`
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
