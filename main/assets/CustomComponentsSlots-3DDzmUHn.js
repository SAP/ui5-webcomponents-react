import{j as t}from"./useIsomorphicLayoutEffect-CpdNMtv3.js";import{useMDXComponents as e}from"./index-44b7z5bc.js";import"./chunk-HLWAVYOI-CfpPONyz.js";import{M as s}from"./index-zRBINZC7.js";import{B as i}from"./index-Ut2P68Il.js";import{B as p}from"./index-CfRqOtDL.js";import"./index-BreBeBR3.js";import"./TagDesign-Dou_yO3g.js";import"./index-DEe9W-hO.js";import"./index-D6UH2S5y.js";import"./Boot-CS6Wsrzl.js";import"./copy-CpBkh8z4.js";import"./Button-BDXX69rx.js";import{F as m}from"./ProjectTemplate-C0C0bMIR.js";import"./WrappingType-CW8URInd.js";import"./iframe-Cs5NG1TR.js";import"../sb-preview/runtime.js";import"./client-BEgA9EFc.js";import"./_baseForOwn-DVWQo5xw.js";import"./mapValues-DXlf5GIm.js";import"./_baseUniq-BqAhPu7p.js";import"./index-Ba91SQPT.js";import"./index-DrFu-skq.js";import"./UI5Element-GBezswur.js";import"./CustomElementsScopeUtils-CNP7-t5L.js";import"./EventProvider-CVfkyUHo.js";import"./withWebComponent-ystZv1Rq.js";import"./utils-DQyyc3O0.js";import"./slot-_4yKMUwC.js";import"./ResizeHandler-DDwTWVjk.js";import"./class-map-AxOwT-Dx.js";import"./parameters-bundle.css-DQGkr9pp.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-BRH4h-L2.js";import"./decline-DXuOh8V-.js";import"./Icons-DkFvE6sF.js";import"./i18n-defaults-CXs2tJOZ.js";import"./information-7KDHAkBn.js";import"./alert-CC8GYBM5.js";import"./Icon-DVdZH5Ds.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";import"./i18n-defaults-BHzefwI9.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./index-B6HtmUYb.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-B1i3sL0q.js";import"./Popover-D7imDdfT.js";import"./Integer-DgRYWdxf.js";import"./PopupsCommon.css-D0jBQZ8g.js";import"./FocusableElements-D2BM6TGM.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-BQrULRrw.js";import"./BrowserScrollbar.css-CyDwNnGM.js";import"./index-CGL4HbCV.js";import"./Label-B7GS_Fjb.js";import"./index-BtrziQbc.js";import"./Link-C0ufom_G.js";import"./index-C8tc5SKQ.js";import"./index-D455cKCd.js";import"./i18n-defaults-CnAElpi7.js";import"./I18nContext-qX06pm-v.js";import"./index-BXes3piD.js";import"./ModalsContext-C4nEcU7T.js";import"./useIsomorphicId-CULvwDT0.js";import"./addCustomCSSWithScoping-Cxt-Ii4P.js";import"./index-DjkMh85u.js";import"./index-ucq6uj3f.js";import"./index-XHpY4sXg.js";import"./Avatar-BLWqVh2K.js";import"./employee-RhZDCU51.js";const a=()=>t.jsx("div",{children:"Start"}),c=()=>t.jsx(p,{children:"Close"}),d=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(c,{}),children:t.jsx("div",{children:"Not a custom component"})}),l=n=>t.jsx("div",{slot:n.slot,children:"Start"}),h=n=>t.jsx(p,{slot:n.slot,children:"Close"}),u=()=>t.jsx(i,{startContent:t.jsx(l,{}),endContent:t.jsx(h,{}),children:t.jsx("div",{children:"Not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Handling Slots"}),`
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
