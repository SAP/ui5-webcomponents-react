import{j as t}from"./useIsomorphicLayoutEffect-CikWMOA2.js";import{useMDXComponents as e}from"./index-3-_tf5dF.js";import"./chunk-HLWAVYOI-BU4CCdq6.js";import{M as s}from"./index-DcWFvF_h.js";import{B as i}from"./index-kRP7hum4.js";import{B as p}from"./index-BgKVx_pr.js";import"./index-BP8_t0zE.js";import"./index-BxmsGmlx.js";import"./copy-DX9qIOqh.js";import{F as m}from"./ProjectTemplate-C1-UR95D.js";import"./iframe-C9XTG8i_.js";import"../sb-preview/runtime.js";import"./client-Di-4O7We.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./UI5Element-Dvkr4ftu.js";import"./Boot-BJoOGsKW.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScope-GSIIlBKM.js";import"./withWebComponent-BCCnzL34.js";import"./utils-Sfm-TJlC.js";import"./slot-Df15G--e.js";import"./ResizeHandler-DN6_bBb8.js";import"./class-map-D_mD7-LZ.js";import"./parameters-bundle.css-Cksxzu71.js";import"./Button-D4b8EzwK.js";import"./event-CegLCnR0.js";import"./Keys-BgUkNma0.js";import"./AriaLabelHelper-CzOXVcye.js";import"./i18nBundle-wW0MItbA.js";import"./MarkedEvents-BPv6Lv4o.js";import"./Icons-N9fhreAf.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-BjzhKVYQ.js";import"./parameters-bundle.css-DD3rGyNs.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-DXLPKTKT.js";import"./index-DTPepety.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BlsaS3Lf.js";import"./index-B3iId1s5.js";import"./Label-BC-N-dx-.js";import"./WrappingType-CW8URInd.js";import"./index-BdKsl_LN.js";import"./Link-o5XdlJUs.js";import"./index-DhVgKTjZ.js";import"./Popover-DzCK8UbC.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-BdT6tjAh.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-Cpy-U-T0.js";import"./FocusableElements-BZF2F5GS.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-DamJfpFo.js";import"./BrowserScrollbar.css-CDYHTzEN.js";import"./index-BhJWt8MY.js";import"./i18n-defaults-BFp98Yot.js";import"./I18nContext-RJHUyvz-.js";import"./index-n7qtibZV.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./addCustomCSSWithScoping-A9YHAMuM.js";import"./index-DeRdFyIC.js";import"./index-CxXKbxgT.js";import"./Avatar-BoCRIXPa.js";import"./employee-BxX8EC9G.js";import"./alert-Bk-rwgUA.js";import"./index-RwhM_fdm.js";import"./index-BHmnH1hQ.js";import"./decline-JmSfETii.js";import"./i18n-defaults-BdfZArTM.js";import"./information-BcSpE2Ne.js";const a=()=>t.jsx("div",{children:"Start"}),c=()=>t.jsx(p,{children:"Close"}),d=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(c,{}),children:t.jsx("div",{children:"Not a custom component"})}),l=n=>t.jsx("div",{slot:n.slot,children:"Start"}),h=n=>t.jsx(p,{slot:n.slot,children:"Close"}),u=()=>t.jsx(i,{startContent:t.jsx(l,{}),endContent:t.jsx(h,{}),children:t.jsx("div",{children:"Not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Handling Slots"}),`
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
