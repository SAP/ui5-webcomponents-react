import{j as o}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as n}from"./index-CcnH5Kt0.js";import{ae as m,af as s,ag as a,ai as l,ah as c}from"./index-Cenuqqrr.js";import"./index-CoHyeD13.js";import"./index-DMLrnUi8.js";import{C as d}from"./ControlsWithNote-h3H01Fxs.js";import{D as x}from"./DocsHeader-C4bS3SGM.js";import{F as u}from"./CommandsAndQueries-nDu7XMLL.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-P9BL2JTj.js";import{C as h,D as e}from"./ColorPalettePopover.stories-CbYmtroe.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-D40tQwTk.js";import"./iframe-BPfEen1d.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./withWebComponent-CatvTRGM.js";import"./utils-U7G133b4.js";import"./useIsomorphicLayoutEffect-Dm78g2BF.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18n-DEVDpFvK.js";import"./decline-CfTJOSOX.js";import"./Icon-DpVcsMQ1.js";import"./Keys-DoZifIQ_.js";import"./parameters-bundle.css-BOSi_lPd.js";import"./i18n-defaults-CzsryEvw.js";import"./information-DOBme6g4.js";import"./alert-Cst6Jx1-.js";import"./class-map-BxE82PvF.js";import"./Button-DaJIiUzx.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-CHzLKGx6.js";import"./i18n-defaults-NO4RLLYJ.js";import"./TagDesign-Dou_yO3g.js";import"./utils-IzbItKb-.js";import"./main-r7D-Vqmb.js";import"./index-BqxRpBZn.js";import"./Tag-Ba6Qizx6.js";import"./sys-help-2-B637x_Rq.js";import"./index-CJgdXAoE.js";import"./Popover-DC8nUXyl.js";import"./PopupsCommon.css-P4EDdSo7.js";import"./FocusableElements-B84gg-qr.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CHwfBtCV.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-D18U2KXK.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-KUKKq0uQ.js";import"./Link-tpPG7lbT.js";import"./chunk-NUUEMKO5-CpJ4TpxZ.js";import"./client-BzooOYO_.js";import"./copy-B31_7TOX.js";import"./copy-pDjV9mbZ.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DGRwmqGf.js";import"./TableOfContent-DBMEQ9W3.js";import"./index-BfO0kMVR.js";import"./I18nStore-CUp48qoB.js";import"./useStylesheet-DPBS0l4j.js";import"./index-GDTSF2Z6.js";import"./index-BhAgbKd_.js";import"./Label-B0tmzzu4.js";import"./index-r42d8n5r.js";import"./index-Df2RbfHi.js";import"./addCustomCSSWithScoping-CKBWDV-T.js";import"./index-Dj0P-9ga.js";import"./BusyIndicator-DOcNJFJt.js";import"./index-xDb7bEld.js";import"./index-DtEO3OH4.js";import"./Avatar-C4XDdmGY.js";import"./employee-DdBiHLUk.js";import"./ResponsivePopoverCommon.css-DxKDyA27.js";import"./ResponsivePopover-wTR1cEjk.js";import"./Dialog-Cmk_X7NG.js";import"./ValueState-Bg0UWejw.js";import"./ItemNavigation-CLFa-8Nr.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:h}),`
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
`,o.jsx(u,{})]})}function Uo(r={}){const{wrapper:t}={...n(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(i,{...r})}):i(r)}export{Uo as default};
