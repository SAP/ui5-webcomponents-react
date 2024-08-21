import{j as o}from"./useIsomorphicLayoutEffect-7J8kFyWS.js";import{useMDXComponents as n}from"./index-CcnH5Kt0.js";import{ae as m,af as s,ag as a,ah as l,ai as c}from"./index-B-AngSPK.js";import"./index-Ch-3pTRx.js";import{C as d}from"./ControlsWithNote-CpOEJXkb.js";import{D as x}from"./DocsHeader-DYY-sRhn.js";import{F as u}from"./CommandsAndQueries-BSQYQ84a.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-CPfyDR0N.js";import{C as h,D as e}from"./ColorPalettePopover.stories-IY9osA3w.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-wWt_v4Ij.js";import"./iframe-X6OaFm5F.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-BBslp21L.js";import"./_overArg-Der2MB70.js";import"./_baseAssignValue-PZ39NPQP.js";import"./_getPrototype-DY0Wt4dR.js";import"./index-uexYa9xf.js";import"./index-DrFu-skq.js";import"./withWebComponent-BleJzMHW.js";import"./utils-CbJpFptd.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-KW-CiiAm.js";import"./decline-DaNSpODU.js";import"./Icon-cdsHodQj.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-BI-0aVN0.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-Bqpi1ZNd.js";import"./alert-Dp7xx3y-.js";import"./class-map-YSvXIJay.js";import"./Button-CzQBqyV3.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-BcJ5FyXk.js";import"./TagDesign-Dou_yO3g.js";import"./utils-DiipWok5.js";import"./main-BPTHlokf.js";import"./index-DExzD3yc.js";import"./Tag-slJw32D6.js";import"./sys-help-2-CqKkuKIb.js";import"./index-Cp80_wRL.js";import"./Popover-Ct8sSLXj.js";import"./PopupsCommon.css-CsQvfR_e.js";import"./getEffectiveScrollbarStyle-rfURrg3V.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BHDEwerY.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-d6w1xEQV.js";import"./BrowserScrollbar.css-BhKYIigu.js";import"./index-BXhdr5Bu.js";import"./Link-CBIZg36-.js";import"./chunk-HLWAVYOI-DiXkNbzq.js";import"./client-BZNFO7bv.js";import"./copy-DUwpd8zK.js";import"./copy-DTSjPlEM.js";import"./index-CLe8_13Z.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BgRQTyXM.js";import"./index-BOF0KrAg.js";import"./I18nStore-CNuzcpPo.js";import"./GitHub-Mark-CQnSG1yZ.js";import"./TableOfContent-B6vxzEs5.js";import"./index-DErfyCMe.js";import"./Label-T0qa9MPE.js";import"./index-DblZcT2P.js";import"./index-_qk-Qxu8.js";import"./addCustomCSSWithScoping-_XdCpGk6.js";import"./index-gsw8a_fJ.js";import"./BusyIndicator-BjQNe4BH.js";import"./index-prJb6WTu.js";import"./index-Cbf91Cs_.js";import"./Avatar-DNQIjfCz.js";import"./employee-DbTd0Cfn.js";import"./ResponsivePopoverCommon.css-BcvLNIQl.js";import"./ResponsivePopover-DSlqNgg-.js";import"./Dialog-3AY38fjT.js";import"./ValueState-Bg0UWejw.js";import"./ItemNavigation-BT3zz_9u.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:h}),`
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
