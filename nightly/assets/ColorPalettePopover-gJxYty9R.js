import{j as o}from"./useIsomorphicLayoutEffect-7J8kFyWS.js";import{useMDXComponents as n}from"./index-CcnH5Kt0.js";import{ae as m,af as s,ag as a,ah as l,ai as c}from"./index-pii9qXca.js";import"./index-HLRYYcmq.js";import{C as d}from"./ControlsWithNote-BIoxRw0s.js";import{D as x}from"./DocsHeader-ET9l3YzX.js";import{F as u}from"./CommandsAndQueries-BOY9YJp_.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-DAmTHV6H.js";import{C as h,D as e}from"./ColorPalettePopover.stories-Cy5oeKlL.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-D3EYx9c7.js";import"./iframe-BGNhdigB.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-BBslp21L.js";import"./_overArg-Der2MB70.js";import"./_baseAssignValue-PZ39NPQP.js";import"./_getPrototype-DY0Wt4dR.js";import"./index-uexYa9xf.js";import"./index-DrFu-skq.js";import"./withWebComponent-C2_AfQVD.js";import"./utils-CbJpFptd.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-Cxw-KB99.js";import"./decline-3k_K2cqJ.js";import"./Icon-nbkyxQyS.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-BI-0aVN0.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-BAyVX-75.js";import"./alert-D2A6vIfJ.js";import"./class-map-DkiTMG92.js";import"./Button-CnsO6gkG.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-mDgxhJ6N.js";import"./TagDesign-Dou_yO3g.js";import"./utils-BwXYWp--.js";import"./main-BPTHlokf.js";import"./index-dX-ZV-td.js";import"./Tag-Do40S3QV.js";import"./sys-help-2-uDSJGuKN.js";import"./index-BNMO-hWF.js";import"./Popover-TU8_F6L9.js";import"./PopupsCommon.css-DXc2NW_3.js";import"./getEffectiveScrollbarStyle-bHZmu9jA.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CBt6Bnha.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-vO3z8-sf.js";import"./BrowserScrollbar.css-XToAwk-G.js";import"./index-EFxKl2Vd.js";import"./Link-COnH4Nhl.js";import"./chunk-HLWAVYOI-TS-PYtkE.js";import"./client-BZNFO7bv.js";import"./copy-DeaTwX5B.js";import"./copy-BtzzsDJe.js";import"./index-CLe8_13Z.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BgRQTyXM.js";import"./index-C1C4YxCs.js";import"./I18nStore-D2HJaIMp.js";import"./GitHub-Mark-CQnSG1yZ.js";import"./TableOfContent-B6vxzEs5.js";import"./index-DeTJ_hrm.js";import"./Label-DfCllKqR.js";import"./index-8kgK4RvL.js";import"./index-B8Mr0oby.js";import"./addCustomCSSWithScoping-Dwz0mgGv.js";import"./index-pQSR4aha.js";import"./BusyIndicator-Bgnc8Kc_.js";import"./index-CcT8O75w.js";import"./index-DgYOmyYl.js";import"./Avatar-DHfKIRqg.js";import"./employee-BmxHk7Xq.js";import"./ResponsivePopoverCommon.css-Cve_dN11.js";import"./ResponsivePopover-hRW9lz2Y.js";import"./Dialog-BNyUwsKF.js";import"./ValueState-Bg0UWejw.js";import"./ItemNavigation-CPd-t8Oq.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:h}),`
`,o.jsx(x,{since:"0.20.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(s,{of:e}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(d,{of:e}),`
`,o.jsx(t.h2,{id:"opening-colorpalettepopovers",children:"Opening ColorPalettePopovers"}),`
`,o.jsxs(t.p,{children:["You can open and close the ",o.jsx(t.code,{children:"ColorPalettePopover"})," component in a declarative way using the ",o.jsx(t.code,{children:"open"})," and ",o.jsx(t.code,{children:"opener"})," prop."]}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-jsx",children:`const ColorPalettePopoverComponent = () => {
  const [showPopover, setShowPopover] = useState(false);
  const buttonRef = useRef(null);
  const onButtonClick = (e) => {
    setShowPopover((prev) => !prev);
  };
  return (
    <>
      <Button ref={buttonRef} onClick={onButtonClick}>
        Open ColorPalettePopover
      </Button>
      <ColorPalettePopover open={showPopover} opener={buttonRef.current}>
        <ColorPaletteItem value="pink" />
        <ColorPaletteItem value="darkblue" />
      </ColorPalettePopover>
    </>
  );
};
`})}),`
`,o.jsx(a,{children:f}),`
`,o.jsx(t.h2,{id:"colorpaletteitem",children:"ColorPaletteItem"}),`
`,o.jsx(l,{of:p}),`
`,o.jsx(c,{of:p}),`
`,o.jsx(u,{})]})}function Vo(r={}){const{wrapper:t}={...n(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(i,{...r})}):i(r)}export{Vo as default};
