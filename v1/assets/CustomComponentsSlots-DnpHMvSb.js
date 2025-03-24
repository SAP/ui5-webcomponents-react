import{j as t}from"./useIsomorphicLayoutEffect-CRjHBNH3.js";import{useMDXComponents as e}from"./index-3-_tf5dF.js";import"./chunk-HLWAVYOI-C-L-9zXM.js";import{M as s}from"./index-Do4DOBvv.js";import{B as i}from"./index-BEgmr4ji.js";import{B as p}from"./index-kotI-_Ni.js";import{F as m}from"./ProjectTemplate-CWCcbufP.js";import"./copy-CMUu1AT6.js";import"./index-BP8_t0zE.js";import"./iframe-Cx73w9cb.js";import"../sb-preview/runtime.js";import"./client-Di-4O7We.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./UI5Element-B2h7kErG.js";import"./Boot-C8BaHzi_.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScope-CE64eqAB.js";import"./withWebComponent-D63zXRZq.js";import"./utils-D8cetgVj.js";import"./slot-Df15G--e.js";import"./ResizeHandler-NsOSmMjZ.js";import"./class-map-BQhMMhlU.js";import"./parameters-bundle.css-BPpSQyrM.js";import"./Button-Bt2u8cP6.js";import"./event-CegLCnR0.js";import"./Keys-BgUkNma0.js";import"./AriaLabelHelper-CzOXVcye.js";import"./i18nBundle-kZ6-2cpn.js";import"./MarkedEvents-BPv6Lv4o.js";import"./Icons-YiE9tW4T.js";import"./willShowContent-BOkh0bwj.js";import"./Tooltips-C-7203Cu.js";import"./Icon-BU2Bb3zG.js";import"./parameters-bundle.css-_D3nLw4H.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-C_UMjLXx.js";import"./utils-yIHEXz0K.js";import"./main-HWtSBowW.js";import"./index-CvINSjlS.js";import"./sys-help-2-Bvno1uwq.js";import"./information-C8ax4bqa.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-k6AQLLnO.js";import"./WrappingType-CW8URInd.js";import"./index-CaInzjXs.js";import"./Link-DXfsQCHY.js";import"./index-D45hFeef.js";import"./decline-CokZCuO3.js";import"./index-BsI9-pkx.js";import"./Popover-D-vbAx4K.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-BojsCAVA.js";import"./getActiveElement-BL9Yqj8a.js";import"./getEffectiveScrollbarStyle-BIR1dSFp.js";import"./PopupsCommon.css-Uumup36k.js";import"./FocusableElements-vHT1UwsK.js";import"./isElementHidden-Bpu2V8BK.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-BqCgMbDz.js";import"./index-BNL24csN.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DfMTMFhn.js";import"./index-DPTY6Bnx.js";import"./Label-Cdlv07NW.js";import"./index-Cyo93O8-.js";import"./i18n-defaults-B3GLB-7B.js";import"./I18nContext-RJHUyvz-.js";import"./index-DW5hgAYR.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./addCustomCSSWithScoping-CO3cnNRp.js";import"./index-BR5vj5Lc.js";import"./index-BJc7RqP7.js";import"./Avatar-DvrVWNUR.js";import"./employee-CM2OuJvM.js";import"./index-GHyvsYju.js";const a=()=>t.jsx("div",{children:"Start"}),c=()=>t.jsx(p,{children:"Close"}),d=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(c,{}),children:t.jsx("div",{children:"Not a custom component"})}),l=r=>t.jsx("div",{slot:r.slot,children:"Start"}),h=r=>t.jsx(p,{slot:r.slot,children:"Close"}),u=()=>t.jsx(i,{startContent:t.jsx(l,{}),endContent:t.jsx(h,{}),children:t.jsx("div",{children:"Not a custom component"})});function n(r){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Handling Slots"}),`
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
`,t.jsx(m,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function Ut(r={}){const{wrapper:o}={...e(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(n,{...r})}):n(r)}export{Ut as default};
