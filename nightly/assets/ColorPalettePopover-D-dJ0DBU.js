import{j as o}from"./useIsomorphicLayoutEffect-7J8kFyWS.js";import{useMDXComponents as n}from"./index-CcnH5Kt0.js";import{ae as m,af as s,ag as a,ah as l,ai as c}from"./index-DnJahra3.js";import"./index-D1tAZfwD.js";import{C as d}from"./ControlsWithNote-BTALbjub.js";import{D as x}from"./DocsHeader-67quuaR7.js";import{F as u}from"./CommandsAndQueries-DLlJazL4.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-CPfyDR0N.js";import{C as h,D as e}from"./ColorPalettePopover.stories-Cfp77EC0.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-Dpg-qGHY.js";import"./iframe-De-aRSOT.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-BBslp21L.js";import"./_overArg-Der2MB70.js";import"./_baseAssignValue-PZ39NPQP.js";import"./_getPrototype-DY0Wt4dR.js";import"./index-uexYa9xf.js";import"./index-DrFu-skq.js";import"./withWebComponent-BleJzMHW.js";import"./utils-CbJpFptd.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-KW-CiiAm.js";import"./decline-DaNSpODU.js";import"./Icon-cdsHodQj.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-BI-0aVN0.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-Bqpi1ZNd.js";import"./alert-Dp7xx3y-.js";import"./class-map-YSvXIJay.js";import"./Button-CzQBqyV3.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-BcJ5FyXk.js";import"./TagDesign-Dou_yO3g.js";import"./utils-Cc8noGdy.js";import"./main-BPTHlokf.js";import"./index-tTEL8J8N.js";import"./Tag-slJw32D6.js";import"./sys-help-2-CqKkuKIb.js";import"./index-BSR3rKnL.js";import"./Popover-Ct8sSLXj.js";import"./PopupsCommon.css-CsQvfR_e.js";import"./getEffectiveScrollbarStyle-rfURrg3V.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BHDEwerY.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-d6w1xEQV.js";import"./BrowserScrollbar.css-BhKYIigu.js";import"./index-Bulu4vm2.js";import"./Link-CBIZg36-.js";import"./chunk-HLWAVYOI-KXOmV4ED.js";import"./client-BZNFO7bv.js";import"./copy-DUwpd8zK.js";import"./copy-DTSjPlEM.js";import"./index-CLe8_13Z.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BgRQTyXM.js";import"./index-BOF0KrAg.js";import"./I18nStore-CNuzcpPo.js";import"./GitHub-Mark-CQnSG1yZ.js";import"./TableOfContent-B6vxzEs5.js";import"./index-jRYWOI_u.js";import"./Label-T0qa9MPE.js";import"./index-yd-Bj4Bt.js";import"./index-D8Fw-FFv.js";import"./addCustomCSSWithScoping-_XdCpGk6.js";import"./index-C6qmGTC-.js";import"./BusyIndicator-BjQNe4BH.js";import"./index-DgNNNqup.js";import"./index-dPI0dF3w.js";import"./Avatar-DNQIjfCz.js";import"./employee-DbTd0Cfn.js";import"./ResponsivePopoverCommon.css-BcvLNIQl.js";import"./ResponsivePopover-DSlqNgg-.js";import"./Dialog-3AY38fjT.js";import"./ValueState-Bg0UWejw.js";import"./ItemNavigation-BT3zz_9u.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:h}),`
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
