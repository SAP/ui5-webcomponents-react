import{j as o}from"./useIsomorphicLayoutEffect-7J8kFyWS.js";import{useMDXComponents as n}from"./index-CcnH5Kt0.js";import{ae as m,af as s,ag as a,ah as l,ai as c}from"./index-DLTEi3_F.js";import"./index-C0gbcJ1P.js";import{C as d}from"./ControlsWithNote-Bj4pS2r6.js";import{D as x}from"./DocsHeader-ea_mMjjy.js";import{F as u}from"./CommandsAndQueries-BUghogff.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import{C as h,D as e}from"./ColorPalettePopover.stories-D6dL42YP.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-CJeydYVK.js";import"./iframe-nYZ7X8iE.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-BBslp21L.js";import"./_overArg-Der2MB70.js";import"./_baseAssignValue-PZ39NPQP.js";import"./_getPrototype-DY0Wt4dR.js";import"./index-uexYa9xf.js";import"./index-DrFu-skq.js";import"./withWebComponent-GNT2PXey.js";import"./utils-CcgiHsei.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-BqO_ndMU.js";import"./decline-Bc8xWa4t.js";import"./Icon-BhzwmwWz.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-B9dCEi48.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./i18n-defaults-CEQaAj6E.js";import"./information-CO9BdrhZ.js";import"./alert-DWttAQXl.js";import"./class-map-_G2Y84x0.js";import"./Button-Cvy14OjO.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-BaleIpCT.js";import"./TagDesign-Dou_yO3g.js";import"./utils-BudshB_u.js";import"./main-BPTHlokf.js";import"./index-Ccf0PhA3.js";import"./Tag-Dihe5M3w.js";import"./sys-help-2-CUJdqIsS.js";import"./index-DPmud4Gc.js";import"./Popover-BcjI4r72.js";import"./PopupsCommon.css-DE8Wza_j.js";import"./getEffectiveScrollbarStyle-UFcPsH0e.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-XK3zSnEF.js";import"./MediaRange-Bnzt26Xb.js";import"./Title-B2Pwek_1.js";import"./style-map-DYn2sBEk.js";import"./BrowserScrollbar.css-LN7L1p37.js";import"./index-BUs6Zh1-.js";import"./Link-YAV9tZDK.js";import"./chunk-HLWAVYOI-DtN6HVzD.js";import"./client-BZNFO7bv.js";import"./copy-DLqHYH0g.js";import"./copy-BGQQIC81.js";import"./index-CLe8_13Z.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BgRQTyXM.js";import"./index-DCYhXUzl.js";import"./I18nStore-CGmCejYo.js";import"./GitHub-Mark-CQnSG1yZ.js";import"./TableOfContent-B6vxzEs5.js";import"./index-Cn8P5wWd.js";import"./Label-emsTVYba.js";import"./index-kPamIMU2.js";import"./index-DZRFMbC7.js";import"./addCustomCSSWithScoping-BR-0f_u5.js";import"./index-Hx7nk4Dr.js";import"./BusyIndicator-BRwQ1wd3.js";import"./index-Cotdq9kj.js";import"./index-CYyWICrk.js";import"./Avatar-BNYvS_OM.js";import"./employee-DAkvclYj.js";import"./ResponsivePopoverCommon.css-Bxeaj0oY.js";import"./ResponsivePopover-CxQpx28n.js";import"./Dialog-DhoJQnEE.js";import"./ValueState-Bg0UWejw.js";import"./ItemNavigation-BwSWEgwf.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:h}),`
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
