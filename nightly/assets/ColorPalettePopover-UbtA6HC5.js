import{j as o}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as n}from"./index-CcnH5Kt0.js";import{ae as m,af as s,ag as a,ai as l,ah as c}from"./index-CwLT_yKB.js";import"./index-DTeI0hvp.js";import"./index-DCPgA9rQ.js";import{C as d}from"./ControlsWithNote-Cumhka6r.js";import{D as x}from"./DocsHeader-DzOKch0P.js";import{F as u}from"./CommandsAndQueries-BCo1Gmkv.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-CbLKT2ZM.js";import{C as h,D as e}from"./ColorPalettePopover.stories-DJpxUQyU.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-6FaWGWA4.js";import"./iframe-DZIFE-19.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./withWebComponent-m_Fq5lNf.js";import"./utils-DzvJSare.js";import"./useIsomorphicLayoutEffect-Dm78g2BF.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18n-DEVDpFvK.js";import"./decline-C1nyYXx8.js";import"./Icon-CqlVqIII.js";import"./Keys-DoZifIQ_.js";import"./parameters-bundle.css-BOSi_lPd.js";import"./i18n-defaults-CzsryEvw.js";import"./information-BCemT9Q2.js";import"./alert-RTfmNTjg.js";import"./class-map-De2mf49U.js";import"./Button-D-clZqqQ.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-RVqvTAYx.js";import"./i18n-defaults-BOjDFSS8.js";import"./TagDesign-Dou_yO3g.js";import"./utils-DIcqGu8y.js";import"./main-r7D-Vqmb.js";import"./index-D1wQpcsi.js";import"./Tag-C7VVIUe2.js";import"./sys-help-2-TCPa0dFt.js";import"./index-DRQZYbIB.js";import"./Popover-CSyvOuD4.js";import"./PopupsCommon.css-C0UbsxGP.js";import"./FocusableElements-3aC5Xvwv.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DIO-YqVA.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-TzMr6uTh.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-Cg3b7YA_.js";import"./Link-CHy7h4h1.js";import"./chunk-NUUEMKO5-DyRgu5Id.js";import"./client-BzooOYO_.js";import"./copy-Bps3bwPx.js";import"./copy-9aGvoyGQ.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DGRwmqGf.js";import"./TableOfContent-TNI-4ed_.js";import"./index-BQRlOSBE.js";import"./I18nStore-C2pCP-g5.js";import"./useStylesheet-DPBS0l4j.js";import"./index-DwKqG2yd.js";import"./index-BoCz3Ejb.js";import"./Label-CILeKjmV.js";import"./index-rZwgHNl0.js";import"./index-DlCwds3V.js";import"./addCustomCSSWithScoping-D6Q9hDjm.js";import"./index-BKGkUclu.js";import"./BusyIndicator-DiGmt9EG.js";import"./index-DQ1nU61M.js";import"./index-BVLWJSIa.js";import"./Avatar-DQMXMvsK.js";import"./employee-q-Be_VIK.js";import"./ResponsivePopoverCommon.css-rwRonswg.js";import"./ResponsivePopover-DTfvWiQf.js";import"./Dialog-w7klcLgB.js";import"./ValueState-Bg0UWejw.js";import"./ItemNavigation-Ch4M95JE.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:h}),`
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
