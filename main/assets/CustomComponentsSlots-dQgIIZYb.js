import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{M as m}from"./chunk-HLWAVYOI-Fsp-hxMS.js";import{B as i}from"./index-4ECxBjaV.js";import{B as p}from"./index-yQJZHkj2.js";import"./DomRefTable.module-V_iz5pw3.js";import"./index-OjgoNOWw.js";import{F as a}from"./Footer-eFiH6U5V.js";import{u as s}from"./index-RwE9nQVW.js";import"./iframe-Lw9Evt3s.js";import"../sb-preview/runtime.js";import"./index--F0XPsCm.js";import"./index-QYh6idnL.js";import"./mapValues-TkJEqHhn.js";import"./_baseForOwn-SiKZKQog.js";import"./_baseUniq-frCQiV_D.js";import"./index-PPLHz8o0.js";import"./Bar-NvnhBt_T.js";import"./UI5Element-66_7Xn_3.js";import"./i18nBundle-Q0g0h3jg.js";import"./VersionInfo-pP_ltRZs.js";import"./CustomElementsScopeUtils-EW5YHFd4.js";import"./withWebComponent-2sjwM42G.js";import"./utils-QJOW-WwB.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./ResizeHandler-hw9R1O21.js";import"./class-map--IQ_mtyb.js";import"./parameters-bundle.css-h8WFSBOu.js";import"./Button-mmkHl5a0.js";import"./Icon-Pjew2RCR.js";import"./Icons-nm0Q71Sx.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./i18n-defaults-RBzcmDt8.js";import"./react-jss.esm-AmlvxLhk.js";import"./index-9Rd_IMLD.js";import"./decline-qJ6wR11R.js";import"./i18n-defaults-n2A5pq_J.js";import"./information-ME8CmmmC.js";import"./alert-Ymv9FYbl.js";import"./index-qkhvCaCQ.js";import"./clsx-2Jv0kmJG.js";import"./i18n-defaults-iuWYBGeC.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./addCustomCSSWithScoping-57oB5XHU.js";import"./index-74gTEkhE.js";import"./Integer-kog98579.js";import"./index-jnaUnQ4S.js";import"./Avatar-AvAtElJx.js";import"./employee-AJKdaGgo.js";import"./index-FGcl4OpY.js";import"./index-ElgmpuNv.js";import"./Link-4yu6Lagp.js";import"./WrappingType-avPrqc94.js";import"./index-ZYxd7chN.js";import"./index-lbOevkjn.js";import"./Label-h0RP0plm.js";import"./index-mV7dNsSC.js";import"./Popover-9STvCKGK.js";import"./PopupUtils-yApLm5YW.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-dDtjLgUi.js";import"./FocusableElements-yzAVBk6R.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-Pb14hoiG.js";import"./BrowserScrollbar.css-F0Fjr-0B.js";const c=()=>t.jsx("div",{children:"Start"}),d=()=>t.jsx(p,{children:"Close"}),l=()=>t.jsx(i,{startContent:t.jsx(c,{}),endContent:t.jsx(d,{}),children:t.jsx("div",{children:"I'm not a custom component"})}),h=n=>t.jsx("div",{slot:n.slot,children:"Start"}),u=n=>t.jsx(p,{slot:n.slot,children:"Close"}),x=()=>t.jsx(i,{startContent:t.jsx(h,{}),endContent:t.jsx(u,{}),children:t.jsx("div",{children:"I'm not a custom component"})});function Ot(n={}){const{wrapper:r}=Object.assign({},s(),n.components);return r?t.jsx(r,Object.assign({},n,{children:t.jsx(e,{})})):e();function e(){const o=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre"},s(),n.components);return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Handling Slots"}),`
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
`,t.jsx(l,{}),`
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
`,t.jsx(x,{}),`
`,t.jsx(a,{style:{position:"fixed",bottom:0,zIndex:2}})]})}}export{Ot as default};
//# sourceMappingURL=CustomComponentsSlots-dQgIIZYb.js.map
