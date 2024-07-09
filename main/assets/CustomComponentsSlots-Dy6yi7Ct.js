import{j as t}from"./useIsomorphicLayoutEffect-Cwmfti2R.js";import{useMDXComponents as e}from"./index-yodfxRVR.js";import"./chunk-HLWAVYOI-CVQ0litT.js";import{M as p}from"./index-BY1QQgZb.js";import{B as i}from"./index-DnWCb__X.js";import{B as s}from"./index-DhzYehnQ.js";import"./index-C_Z63DAS.js";import"./TagDesign-Dou_yO3g.js";import"./index-BQ1WsyJB.js";import"./index-BLtMylri.js";import"./withWebComponent-BbH_5MIb.js";import"./copy-D7XnXV4f.js";import"./Button-B86xSW8p.js";import{F as m}from"./CommandsAndQueries-CXPNLxw-.js";import"./WrappingType-CW8URInd.js";import"./iframe-CCdjJbb7.js";import"../sb-preview/runtime.js";import"./client-CM2XqZNc.js";import"./_baseForOwn-DusBTQ6O.js";import"./mapValues-DfqGXSk1.js";import"./_baseUniq-BpWYsmmS.js";import"./index-Cagd9BgA.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./ResizeHandler-OgbCZidP.js";import"./class-map-Cmqcr3Jy.js";import"./utils-BXNPXA0w.js";import"./if-defined-Pg2MF6OO.js";import"./parameters-bundle.css-BFbT_feV.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-CYrspCbQ.js";import"./decline-dJfPkrKK.js";import"./Icon-DgpDEY-g.js";import"./Keys-F_3Gvx0K.js";import"./i18n-defaults-eVMsPoDe.js";import"./information-Dpm8KApc.js";import"./alert-4iBM3OoX.js";import"./i18n-defaults-D_1KzAB5.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./index-DwEKreE0.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BB85D3ff.js";import"./Popover-By40N46R.js";import"./PopupsCommon.css-CUeoloLy.js";import"./getEffectiveScrollbarStyle-Cc8EMEwh.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-CndeHQ5H.js";import"./BrowserScrollbar.css-CgVpWCeO.js";import"./index-CONv12fc.js";import"./Label-B8i_ob21.js";import"./index-B7BjxTf3.js";import"./Link-D7pTqG-L.js";import"./index-EVApV1uw.js";import"./index-CleVCBXA.js";import"./I18nStore-B0a_FhwZ.js";import"./useIsomorphicId-8WwglsiH.js";import"./addCustomCSSWithScoping-BT5fwu99.js";import"./index-IayiN-mP.js";import"./index-DyvckQxz.js";import"./index-CfzFFulX.js";import"./Avatar-DddpDFgS.js";import"./employee-DSw1VZX4.js";import"./index-BNJbAmHv.js";const a=()=>t.jsx("div",{children:"Start"}),c=()=>t.jsx(s,{children:"Close"}),d=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(c,{}),children:t.jsx("div",{children:"Not a custom component"})}),l=n=>t.jsx("div",{slot:n.slot,children:"Start"}),h=n=>t.jsx(s,{slot:n.slot,children:"Close"}),u=()=>t.jsx(i,{startContent:t.jsx(l,{}),endContent:t.jsx(h,{}),children:t.jsx("div",{children:"Not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Handling Slots"}),`
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
`,t.jsx(m,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function It(n={}){const{wrapper:o}={...e(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(r,{...n})}):r(n)}export{It as default};
