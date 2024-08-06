import{j as t}from"./useIsomorphicLayoutEffect-DCJrFAVs.js";import{useMDXComponents as e}from"./index-D3szj05g.js";import"./chunk-HLWAVYOI-BT0LMQ_Z.js";import{M as p}from"./index-Bdi8YhVx.js";import{B as i}from"./index-DxWaYBGD.js";import{B as s}from"./index-NmxPYmSL.js";import"./index-evewZYN6.js";import"./TagDesign-Dou_yO3g.js";import"./index-ClU-Tc1p.js";import"./index-C3ZJCerc.js";import"./withWebComponent-Dj0CMfaz.js";import"./copy-eLLizoPG.js";import"./Button-LAxw2z5E.js";import{F as m}from"./CommandsAndQueries-Ck8HLIx5.js";import"./WrappingType-CW8URInd.js";import"./iframe-Cpwv2kZr.js";import"../sb-preview/runtime.js";import"./client-B23sEKGq.js";import"./_baseForOwn-CS3BKc8p.js";import"./mapValues-DmWmqx7o.js";import"./_baseUniq-DGAWXpCf.js";import"./index-BRTKD46C.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./ResizeHandler-CuRzO4ve.js";import"./class-map-DwAhupCS.js";import"./utils-B21VtmG1.js";import"./if-defined-B8mU3KX1.js";import"./parameters-bundle.css-BFbT_feV.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-vPfkXYRc.js";import"./decline-Dtt8f7gG.js";import"./Icon-8rAbDJhl.js";import"./Keys-F_3Gvx0K.js";import"./i18n-defaults-Cz0fD7oZ.js";import"./information-pNQtyMX0.js";import"./alert-D6VWtbrR.js";import"./i18n-defaults-BrbxGX_s.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./index-PGreZEtb.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-waKyCe7Y.js";import"./Popover-C3k48onv.js";import"./PopupsCommon.css-CL-yqmiO.js";import"./getEffectiveScrollbarStyle-CFKww5-v.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-CpZMqJvf.js";import"./BrowserScrollbar.css-C7k9hgHd.js";import"./index-CZOyK1t3.js";import"./Label-DYSmE5xX.js";import"./index-oMrLWbiO.js";import"./Link-B1bLgUAx.js";import"./index-lUF5OGIV.js";import"./index-BZAvLi5K.js";import"./I18nStore-D1uEcPVD.js";import"./addCustomCSSWithScoping-B01F51vr.js";import"./index-C_Lm8VTo.js";import"./index-Bu9ywWCe.js";import"./index-z--DETqp.js";import"./Avatar-CTO3QSeR.js";import"./employee-CIkKCEkx.js";import"./index-DxE19OZ0.js";const a=()=>t.jsx("div",{children:"Start"}),c=()=>t.jsx(s,{children:"Close"}),d=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(c,{}),children:t.jsx("div",{children:"Not a custom component"})}),l=n=>t.jsx("div",{slot:n.slot,children:"Start"}),h=n=>t.jsx(s,{slot:n.slot,children:"Close"}),u=()=>t.jsx(i,{startContent:t.jsx(l,{}),endContent:t.jsx(h,{}),children:t.jsx("div",{children:"Not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Handling Slots"}),`
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
`,t.jsx(m,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function Ft(n={}){const{wrapper:o}={...e(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(r,{...n})}):r(n)}export{Ft as default};
