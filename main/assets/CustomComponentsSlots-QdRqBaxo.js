import{j as t}from"./useIsomorphicLayoutEffect-5feXxxyy.js";import{useMDXComponents as e}from"./index-Bql5lgBm.js";import"./chunk-HLWAVYOI-DLdp9wUh.js";import{M as s}from"./index-CsCZcsQQ.js";import{B as i}from"./index-Bkk0YbFF.js";import{B as p}from"./index-L3euZylw.js";import"./index-wN63MRZN.js";import"./TagDesign-Dou_yO3g.js";import"./index-CP2MHerv.js";import"./index-CUD6gg2y.js";import"./Boot-Bc3-yGxv.js";import"./copy-Bux_XWOJ.js";import"./Button-CO6Cy06z.js";import{F as m}from"./ProjectTemplate-fzvqOk-3.js";import"./WrappingType-CW8URInd.js";import"./iframe-oTKygqMc.js";import"../sb-preview/runtime.js";import"./client-CeotCdvV.js";import"./_baseForOwn-39ViRbo3.js";import"./mapValues-BafCeOy3.js";import"./_baseUniq-D4fCGXIX.js";import"./index-DBvbnR2h.js";import"./index-DrFu-skq.js";import"./UI5Element-DFWAHaHd.js";import"./CustomElementsScopeUtils-u88Ac6A7.js";import"./EventProvider-CVfkyUHo.js";import"./withWebComponent-ah_drTxp.js";import"./utils-CGfXuD-n.js";import"./slot-_4yKMUwC.js";import"./ResizeHandler-C9Gw3xFv.js";import"./class-map-CSNjIC4y.js";import"./parameters-bundle.css-DQGkr9pp.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-X-a5Hvm9.js";import"./decline-DOPX1W-e.js";import"./Icons-o-g_t4X3.js";import"./i18n-defaults-CXs2tJOZ.js";import"./information-D2w0wkAo.js";import"./alert-RYmCrbKT.js";import"./Icon-CDJWObqH.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";import"./i18n-defaults-DUjPXQIq.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./index-B5D3uFwJ.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DIoLZaP8.js";import"./Popover-C8kXaV3G.js";import"./Integer-DgRYWdxf.js";import"./PopupsCommon.css-DMExQBIY.js";import"./FocusableElements-T7dKq3am.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-P64ToWDx.js";import"./BrowserScrollbar.css-Br9LgvKH.js";import"./index-ek2IBS1H.js";import"./Label-BevGptB9.js";import"./index-CW2oycRq.js";import"./Link-CXA-r5WN.js";import"./index-SA3W-EXU.js";import"./index-DJHd8BMW.js";import"./i18n-defaults-BCHmAjec.js";import"./I18nContext-BwNxpyJO.js";import"./index-89I0sryf.js";import"./ModalsContext-CA2qjtQ6.js";import"./useIsomorphicId-BGiUoP5x.js";import"./addCustomCSSWithScoping-DKVM2fpC.js";import"./index-BtqRsBh8.js";import"./index-BhS2E4rY.js";import"./index-B6fgfJdu.js";import"./Avatar-CBU7GVET.js";import"./employee-CzaM-cwk.js";const a=()=>t.jsx("div",{children:"Start"}),c=()=>t.jsx(p,{children:"Close"}),d=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(c,{}),children:t.jsx("div",{children:"Not a custom component"})}),l=n=>t.jsx("div",{slot:n.slot,children:"Start"}),h=n=>t.jsx(p,{slot:n.slot,children:"Close"}),u=()=>t.jsx(i,{startContent:t.jsx(l,{}),endContent:t.jsx(h,{}),children:t.jsx("div",{children:"Not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Handling Slots"}),`
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
