import{j as o}from"./useIsomorphicLayoutEffect-dLBi2t77.js";import{useMDXComponents as n}from"./index-CcnH5Kt0.js";import{ae as m,af as s,ag as a,ah as l,ai as c}from"./index-B3QzLHf_.js";import"./index-DRfkeUYX.js";import{C as d}from"./ControlsWithNote-BYJvhy0X.js";import{D as x}from"./DocsHeader-8echqDW0.js";import{F as u}from"./CommandsAndQueries-Dmj4MMOR.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-VVPV2V2E.js";import{C as h,D as e}from"./ColorPalettePopover.stories-Bbo4RGwg.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-u-Mv8ZK0.js";import"./iframe-DlkLrGOd.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-DGDOfdbw.js";import"./_getPrototype-B0L0C3AT.js";import"./index-CFFTH5x_.js";import"./index-DrFu-skq.js";import"./withWebComponent-6t4MTiZ-.js";import"./utils-DNCbgL6O.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-BwSTHZvs.js";import"./decline-Chobtb_o.js";import"./Icon-CX51DRZ7.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-B1auRMLy.js";import"./parameters-bundle.css-P4kwt3kq.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-CqSTuHKy.js";import"./alert-B73TZsJE.js";import"./class-map-D9jLILSY.js";import"./Button-ein9a_YJ.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-sl2p4TZC.js";import"./TagDesign-Dou_yO3g.js";import"./utils-XiK6YCAG.js";import"./main-BPTHlokf.js";import"./index-Cm_tUheZ.js";import"./Tag-c1CyRsEh.js";import"./sys-help-2-7U7Pl5Aq.js";import"./index-vpkDktJu.js";import"./Popover-GyfEL2jk.js";import"./PopupsCommon.css-BGI8Fb7B.js";import"./getEffectiveScrollbarStyle-77nvIAYC.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BL_t98Y7.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-CAZGB3vF.js";import"./BrowserScrollbar.css-BVuR1u6R.js";import"./index-B0scv0mR.js";import"./Link-CUceCK4r.js";import"./chunk-HLWAVYOI-BkFLgnuG.js";import"./client-BZNFO7bv.js";import"./copy-DHLQo4vt.js";import"./copy-CiUq4Sby.js";import"./index-DXbGRngL.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DKtOrKyD.js";import"./index-BJ8B3rVx.js";import"./I18nStore-BIJrl7SC.js";import"./GitHub-Mark-07DkmEp8.js";import"./TableOfContent-B7cg-o8h.js";import"./index-DW76Co1x.js";import"./Label-tm0HKFXd.js";import"./index-Byuai5Dz.js";import"./index-F_io_HrK.js";import"./addCustomCSSWithScoping-Cr3Tnfsf.js";import"./index-DJqlzZjw.js";import"./BusyIndicator-DZWv4Y44.js";import"./index-C73Y2rlh.js";import"./index-v2bCH09b.js";import"./Avatar-Dqp3bR5c.js";import"./employee-B_Kids1O.js";import"./ResponsivePopoverCommon.css-CTnWiAY0.js";import"./ResponsivePopover-Csck98zi.js";import"./Dialog-CivsYkRJ.js";import"./ValueState-Bg0UWejw.js";import"./ItemNavigation-C_v-ZRVk.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:h}),`
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
`,o.jsx(u,{})]})}function Qo(r={}){const{wrapper:t}={...n(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(i,{...r})}):i(r)}export{Qo as default};
