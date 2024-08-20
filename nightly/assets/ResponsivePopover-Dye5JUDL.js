import{j as o}from"./useIsomorphicLayoutEffect-7J8kFyWS.js";import{useMDXComponents as m}from"./index-CcnH5Kt0.js";import{ae as e,af as n}from"./index-DsYE5LlH.js";import"./index-CO4_7TXz.js";import{C as s}from"./ControlsWithNote-BHvKZpKg.js";import{D as a}from"./DocsHeader-jAZp3Tyl.js";import{F as c}from"./CommandsAndQueries-BlTB2ci5.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import{C as d,D as p}from"./ResponsivePopover.stories-Cujm4ET-.js";import"./iframe-DGcBUOTI.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-BBslp21L.js";import"./_overArg-Der2MB70.js";import"./_baseAssignValue-PZ39NPQP.js";import"./_getPrototype-DY0Wt4dR.js";import"./index-uexYa9xf.js";import"./index-DrFu-skq.js";import"./withWebComponent-GNT2PXey.js";import"./utils-CcgiHsei.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-BqO_ndMU.js";import"./decline-Bc8xWa4t.js";import"./Icon-BhzwmwWz.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-B9dCEi48.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./i18n-defaults-CEQaAj6E.js";import"./information-CO9BdrhZ.js";import"./alert-DWttAQXl.js";import"./class-map-_G2Y84x0.js";import"./Button-Cvy14OjO.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-BaleIpCT.js";import"./TagDesign-Dou_yO3g.js";import"./utils-DyD_0XZ9.js";import"./main-BPTHlokf.js";import"./index-mdLalBz2.js";import"./Tag-Dihe5M3w.js";import"./sys-help-2-CUJdqIsS.js";import"./index-DiHsoOcO.js";import"./Popover-BcjI4r72.js";import"./PopupsCommon.css-DE8Wza_j.js";import"./getEffectiveScrollbarStyle-UFcPsH0e.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-XK3zSnEF.js";import"./MediaRange-Bnzt26Xb.js";import"./Title-B2Pwek_1.js";import"./style-map-DYn2sBEk.js";import"./BrowserScrollbar.css-LN7L1p37.js";import"./index-IjatMvrW.js";import"./Link-YAV9tZDK.js";import"./chunk-HLWAVYOI-DHGK86hW.js";import"./client-BZNFO7bv.js";import"./copy-DLqHYH0g.js";import"./copy-BGQQIC81.js";import"./index-CLe8_13Z.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BgRQTyXM.js";import"./index-DCYhXUzl.js";import"./I18nStore-CGmCejYo.js";import"./GitHub-Mark-CQnSG1yZ.js";import"./TableOfContent-B6vxzEs5.js";import"./index-DQzubAWX.js";import"./Label-emsTVYba.js";import"./index-BvY5MRof.js";import"./index-BBTqeCHT.js";import"./addCustomCSSWithScoping-BR-0f_u5.js";import"./index-C4jXmarR.js";import"./BusyIndicator-BRwQ1wd3.js";import"./index-BeIL9wEW.js";import"./index-BMxFxNmh.js";import"./Avatar-BNYvS_OM.js";import"./employee-DAkvclYj.js";import"./index-De97y4i2.js";import"./List-CfQVFNo9.js";import"./ItemNavigation-BwSWEgwf.js";import"./isElementInView-CjfjvN8v.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-BV3cTl0-.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-BTLn07Vz.js";import"./accept-B-hwLd1L.js";import"./slim-arrow-right-Dx8ng0oy.js";import"./index-DvrDVJEr.js";import"./index-CoCV520e.js";import"./ResponsivePopover-CxQpx28n.js";import"./Dialog-DhoJQnEE.js";import"./settings-CF_DhK_O.js";function i(t){const r={code:"code",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:d}),`
`,o.jsx(a,{since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(r.h2,{id:"example",children:"Example"}),`
`,o.jsx(n,{of:p}),`
`,o.jsx(r.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(s,{of:p}),`
`,o.jsx(r.h2,{id:"opening-responsivepopovers",children:"Opening ResponsivePopovers"}),`
`,o.jsxs(r.p,{children:["You can open and close the ",o.jsx(r.code,{children:"ResponsivePopover"})," component in a declarative way using the ",o.jsx(r.code,{children:"open"})," and ",o.jsx(r.code,{children:"opener"})," prop."]}),`
`,o.jsx(r.pre,{children:o.jsx(r.code,{className:"language-jsx",children:`const MyComponentWithPopover = () => {
  const btnRef = useRef(null);
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  return (
    <>
      <Button
        ref={btnRef}
        onClick={() => {
          setPopoverIsOpen(true);
        }}
      >
        Open Popover
      </Button>
      <ResponsivePopover
        opener={btnRef.current}
        open={popoverIsOpen}
        onClose={() => {
          setPopoverIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,o.jsx(c,{})]})}function rr(t={}){const{wrapper:r}={...m(),...t.components};return r?o.jsx(r,{...t,children:o.jsx(i,{...t})}):i(t)}export{rr as default};
