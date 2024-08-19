import{j as t}from"./useIsomorphicLayoutEffect-DOdM5Kf8.js";import{useMDXComponents as e}from"./index-BrB9znxi.js";import"./chunk-HLWAVYOI-BVuMpOZH.js";import{ae as p}from"./index-Dj55yAE_.js";import{B as i}from"./index-S7asjJ7Z.js";import{B as s}from"./index-DSuKgQ5a.js";import"./index-DsQzPF0V.js";import"./TagDesign-Dou_yO3g.js";import"./index-CMKoANNR.js";import"./index-CJugYjqS.js";import"./withWebComponent-BbgN5sxI.js";import"./copy-BYxOf-QH.js";import"./Button-cuQy5RCN.js";import{F as m}from"./CommandsAndQueries-D8ZxOXoQ.js";import"./WrappingType-CW8URInd.js";import"./iframe-B2H21ULc.js";import"../sb-preview/runtime.js";import"./client-DpDvupH-.js";import"./_baseUniq-qZQRvdR-.js";import"./_overArg-Mt7ZKpko.js";import"./_baseAssignValue-680W1HJy.js";import"./_getPrototype-CvhAe9S0.js";import"./index-uexYa9xf.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./ResizeHandler-DghOwUYf.js";import"./class-map-DWnotN9Q.js";import"./utils-B91Jjtng.js";import"./if-defined-BJMHgp7g.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-CwTDKhhX.js";import"./decline-CRs0CuFn.js";import"./Icon-ClAYWRjo.js";import"./Keys-F_3Gvx0K.js";import"./i18n-defaults-CEQaAj6E.js";import"./information-DxOUV61z.js";import"./alert-QN-C0-di.js";import"./i18n-defaults-jWmICHmQ.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./index-DNwR1bnO.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BdPJGR6W.js";import"./Popover-CNg3OGLR.js";import"./PopupsCommon.css-F2oSnJih.js";import"./getEffectiveScrollbarStyle-BM2MSN9M.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./MediaRange-Bnzt26Xb.js";import"./Title-RCwOVsWq.js";import"./style-map-D73I43XI.js";import"./BrowserScrollbar.css-CNIKbe81.js";import"./index-CTsi4uQY.js";import"./Label-B16HW9k1.js";import"./index-BqbhDUVa.js";import"./Link-DDy4Rfx-.js";import"./index-5sCFwZnk.js";import"./index-CGvbx4PR.js";import"./I18nStore-3tee64za.js";import"./addCustomCSSWithScoping-CgCJVuIw.js";import"./index-ByNuaVji.js";import"./BusyIndicator-DYwg6ta4.js";import"./index-BXJSmV2K.js";import"./index-C1AGseFA.js";import"./Avatar-Dkq5x8aO.js";import"./employee-bAM6jRYC.js";import"./index-D8td3AVt.js";const a=()=>t.jsx("div",{children:"Start"}),c=()=>t.jsx(s,{children:"Close"}),d=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(c,{}),children:t.jsx("div",{children:"Not a custom component"})}),l=n=>t.jsx("div",{slot:n.slot,children:"Start"}),h=n=>t.jsx(s,{slot:n.slot,children:"Close"}),u=()=>t.jsx(i,{startContent:t.jsx(l,{}),endContent:t.jsx(h,{}),children:t.jsx("div",{children:"Not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(p,{title:"Handling Slots"}),`
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
`,t.jsx(m,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function Dt(n={}){const{wrapper:o}={...e(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(r,{...n})}):r(n)}export{Dt as default};
