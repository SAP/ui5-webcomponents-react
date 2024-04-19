import{j as t}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as e}from"./index-DtGqrCZN.js";import"./chunk-HLWAVYOI-Ck7AfsuC.js";import{M as s}from"./index-DI6VfJam.js";import{B as i}from"./index-accsHBA6.js";import{B as p}from"./index-CyJY5mpX.js";import{F as m}from"./ProjectTemplate-zZw9Vs6U.js";import"./index-Cu9bd8lq.js";import"./index-Ckls47V4.js";import"./copy-CM5pqsHd.js";import"./iframe-BwYX9Hla.js";import"../sb-preview/runtime.js";import"./react-18-CyVMVvrE.js";import"./inheritsLoose-D8L2VVdp.js";import"./_baseForOwn-CD7metVA.js";import"./mapValues-DbyeKAf9.js";import"./_baseUniq-Dmu8z6NP.js";import"./index-D-lniKcH.js";import"./index-DrFu-skq.js";import"./UI5Element-DtnZiShc.js";import"./Boot-DwA_pgKp.js";import"./VersionInfo-Bnh5Htkx.js";import"./CustomElementsScopeUtils-BkU30VC6.js";import"./withWebComponent-B8IC4jtY.js";import"./utils-CiHlOjk7.js";import"./useIsomorphicLayoutEffect-CDseMwwv.js";import"./slot-Df15G--e.js";import"./ResizeHandler-CBU2dt4G.js";import"./class-map-m3fFtNZw.js";import"./parameters-bundle.css-C7eXkTg2.js";import"./Button-CVOwl4eG.js";import"./event-CegLCnR0.js";import"./Keys-BgUkNma0.js";import"./AriaLabelHelper-CzOXVcye.js";import"./i18nBundle-CW3QmvUh.js";import"./MarkedEvents-BPv6Lv4o.js";import"./Icons-Dptlkq46.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-BSolOZRA.js";import"./parameters-bundle.css-DjgCrOcY.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-ByZSnYVg.js";import"./react-jss.esm-BpNdaHSZ.js";import"./theming.esm-BaGMLphO.js";import"./index-CD3vby3i.js";import"./decline-DqGOoHuM.js";import"./i18n-defaults-BdfZArTM.js";import"./information-CElEnJTC.js";import"./alert-BU8JezYB.js";import"./index-CrxHuApl.js";import"./clsx-B-dksMZM.js";import"./index-CCP14paK.js";import"./Label-BBrs9RjN.js";import"./WrappingType-CW8URInd.js";import"./index-CP4DwF4n.js";import"./Link-DlttXuw3.js";import"./index-Bu7HVzj5.js";import"./Popover-jLsmKY5f.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-DV-WEd1e.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-D4CwgKUt.js";import"./FocusableElements-D39FYWGM.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-CtdHLryf.js";import"./BrowserScrollbar.css-Dc6KEEQV.js";import"./index-BO8bU_Iz.js";import"./i18n-defaults-k3KOTM4I.js";import"./I18nContext-lEOM8vPx.js";import"./ThemingParameters--AGRs54p.js";import"./index-CIus2qXS.js";import"./useStylesheet-BSfe7C-7.js";import"./ModalsContext-DDUwbLsf.js";import"./useIsomorphicId-CHfKDsSO.js";import"./addCustomCSSWithScoping-D1RPuXTz.js";import"./index-DPQTQdMk.js";import"./index-AfRP8CNA.js";import"./Avatar-BlVXo_BW.js";import"./employee-BdaP6Y8j.js";import"./index-BHAGY1XH.js";const a=()=>t.jsx("div",{children:"Start"}),c=()=>t.jsx(p,{children:"Close"}),d=()=>t.jsx(i,{startContent:t.jsx(a,{}),endContent:t.jsx(c,{}),children:t.jsx("div",{children:"I'm not a custom component"})}),l=n=>t.jsx("div",{slot:n.slot,children:"Start"}),h=n=>t.jsx(p,{slot:n.slot,children:"Close"}),u=()=>t.jsx(i,{startContent:t.jsx(l,{}),endContent:t.jsx(h,{}),children:t.jsx("div",{children:"I'm not a custom component"})});function r(n){const o={code:"code",h1:"h1",p:"p",pre:"pre",...e(),...n.components};return t.jsxs(t.Fragment,{children:[t.jsx(s,{title:"Handling Slots"}),`
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
`,t.jsx(m,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function Ut(n={}){const{wrapper:o}={...e(),...n.components};return o?t.jsx(o,{...n,children:t.jsx(r,{...n})}):r(n)}export{Ut as default};
