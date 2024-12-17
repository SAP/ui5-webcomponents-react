import{j as o}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as n}from"./index-BxVt_j7t.js";import{ae as m,af as s,ag as a,ai as l,ah as c}from"./index-rGos9XcC.js";import"./index-DK8f7i65.js";import"./index-JvrWzb8y.js";import{C as d}from"./ControlsWithNote-DqrWtbhT.js";import{D as x}from"./DocsHeader-4hvKdqol.js";import{F as u}from"./CommandsAndQueries-CsGrLSCv.js";import"./index-B7gF9TUu.js";import"./WrappingType-CW8URInd.js";import"./Title-WNL10KUu.js";import{C as h,D as e}from"./ColorPalettePopover.stories-DQKQHo0y.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-DUFbOhNN.js";import"./iframe-Cl-jtpk_.js";import"../sb-preview/runtime.js";import"./index-CE_NGgsP.js";import"./index-DHaMx3uI.js";import"./index-DrFu-skq.js";import"./withWebComponent-B0663feL.js";import"./utils-BHIgGaqO.js";import"./useIsomorphicLayoutEffect-DbLUS4-D.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-DEVDpFvK.js";import"./decline-Dufzc9Ae.js";import"./Icon-DBJtwtpU.js";import"./Keys-CAuuEE_3.js";import"./parameters-bundle.css-DlWxkghp.js";import"./i18n-defaults-neJWcM66.js";import"./information-CILnO36f.js";import"./alert-Z1fiX1-e.js";import"./class-map-C6tyMXoZ.js";import"./Button-D9IHaDB-.js";import"./AccessibilityTextsHelper-Beeze-lh.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BP6vP6oY.js";import"./i18n-defaults-B_32hVC3.js";import"./TagDesign-Dou_yO3g.js";import"./utils-CWsxv0g3.js";import"./main-BwlHOnYP.js";import"./index-DFb0YsWo.js";import"./Tag-BUVp9nj2.js";import"./sys-help-2-BiT1oqNK.js";import"./index-nTxbmOyz.js";import"./Popover-msUg67Np.js";import"./PopupsCommon.css-Dj0xrk9H.js";import"./FocusableElements-DTl1isII.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-xhBJDreD.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-uCTHCAWY.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-gaVbNe_i.js";import"./Link-CpBj26Uf.js";import"./chunk-NUUEMKO5-CfLPwov1.js";import"./client-DPlujwLe.js";import"./copy-BrFaHfmM.js";import"./copy-C_CjAe8T.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-D5efYGjp.js";import"./TableOfContent-DCqtbPc-.js";import"./index-DCTxv7zJ.js";import"./I18nStore-DX5SeKlm.js";import"./useStylesheet-BtUg4QTx.js";import"./index-CumkkaaF.js";import"./index-D_YacHjR.js";import"./Label-BoojAdgE.js";import"./index-nKNYXUv1.js";import"./index-DdEMrDoq.js";import"./Text-UwjpUK4f.js";import"./addCustomCSSWithScoping-DFGIdwgf.js";import"./index-dDGTlD2i.js";import"./BusyIndicator-12vkJL71.js";import"./index-BW6gfbnW.js";import"./index-WjQUaYT1.js";import"./Avatar-Z-ciJfNd.js";import"./employee-XwVnUoGs.js";import"./ResponsivePopoverCommon.css-22L8s3LE.js";import"./ResponsivePopover-D8WlT0Li.js";import"./Dialog-yekQTytQ.js";import"./ValueState-Bg0UWejw.js";import"./ItemNavigation-Dt_dQ_rr.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:h}),`
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
