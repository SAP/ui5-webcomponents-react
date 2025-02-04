import{j as t}from"./useIsomorphicLayoutEffect-DxKEogMX.js";import{useMDXComponents as e}from"./index-3-_tf5dF.js";import"./chunk-HLWAVYOI-DWr2Fk3L.js";import{M as s}from"./index-BSAHFUXL.js";import{B as i}from"./index-ZZnroyO3.js";import{B as p}from"./index-Rbdud6do.js";import{F as m}from"./ProjectTemplate-Dm7554A_.js";import"./copy-BxM08Fv1.js";import"./index-BP8_t0zE.js";import"./iframe-BjMoupZq.js";import"../sb-preview/runtime.js";import"./client-Di-4O7We.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./UI5Element-CTUeyjn-.js";import"./Boot-HIcYreCJ.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScope-OuufJIgt.js";import"./withWebComponent-iwEMLCwM.js";import"./utils-BWz0JEZ6.js";import"./slot-Df15G--e.js";import"./ResizeHandler-DXT2JxMm.js";import"./class-map-BOjq1HnK.js";import"./parameters-bundle.css-DXx4cmlL.js";import"./Button-DH5lF6fZ.js";import"./event-CegLCnR0.js";import"./Keys-BgUkNma0.js";import"./AriaLabelHelper-CzOXVcye.js";import"./i18nBundle-DAKTKoOS.js";import"./MarkedEvents-BPv6Lv4o.js";import"./Icons-Cd2oYa75.js";import"./willShowContent-BOkh0bwj.js";import"./Tooltips-BagSeUK-.js";import"./Icon-snMa4zXw.js";import"./parameters-bundle.css-Dq8i2jqa.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-DI58k5rQ.js";import"./utils-DgeZdg6V.js";import"./main-HWtSBowW.js";import"./index-BBpaOH7t.js";import"./sys-help-2-Bb9UOdy0.js";import"./information-ByKCPUae.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-DgMNwF9A.js";import"./WrappingType-CW8URInd.js";import"./index-SvvSoH13.js";import"./Link-CS4JDN8g.js";import"./index-BtNKI908.js";import"./decline-2wLd8OXz.js";import"./index-BZUWesjH.js";import"./Popover-AhBPjl_E.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-BSU3X0q-.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-82AGaEWQ.js";import"./FocusableElements-j-RSUQUA.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-lexY8e40.js";import"./BrowserScrollbar.css-CW1dP_e5.js";import"./index-D32Kf0i8.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-CKNtzFUp.js";import"./index-CO4Ta_X3.js";import"./Label-4lKVr1TQ.js";import"./index-BHtFRKyY.js";import"./i18n-defaults-eAAV7luf.js";import"./I18nContext-RJHUyvz-.js";import"./index-BqUQYiOk.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./addCustomCSSWithScoping-BqDpVQ5B.js";import"./index-CHZ2gPzb.js";import"./index-BElfjaV9.js";import"./Avatar-BucQZ245.js";import"./employee-DOMuhFXQ.js";import"./index-BAE7Wj2f.js";const a=()=>t.jsx("div",{children:"Start"}),c=()=>t.jsx(p,{children:"Close"}),d=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(c,{}),children:t.jsx("div",{children:"Not a custom component"})}),l=r=>t.jsx("div",{slot:r.slot,children:"Start"}),h=r=>t.jsx(p,{slot:r.slot,children:"Close"}),u=()=>t.jsx(i,{startContent:t.jsx(l,{}),endContent:t.jsx(h,{}),children:t.jsx("div",{children:"Not a custom component"})});function n(r){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...r.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Handling Slots"}),`
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
`,t.jsx(m,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function qt(r={}){const{wrapper:o}={...e(),...r.components};return o?t.jsx(o,{...r,children:t.jsx(n,{...r})}):n(r)}export{qt as default};
