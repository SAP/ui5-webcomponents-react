import{j as o}from"./useIsomorphicLayoutEffect-Cwmfti2R.js";import{useMDXComponents as m}from"./index-yodfxRVR.js";import{M as n,C as s,d as a,D as l,A as c}from"./index-Br8W9g0z.js";import"./index-Ffnbl-fU.js";import{C as d}from"./ControlsWithNote-DaBjeYCa.js";import{D as h}from"./DocsHeader-BIYEER_7.js";import{F as x}from"./CommandsAndQueries-PASLqDpe.js";import"./index-BQ1WsyJB.js";import"./WrappingType-CW8URInd.js";import{C as j,D as e}from"./ColorPalettePopover.stories-DS68qtUh.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import{C as i}from"./index-Ck-FDFZ5.js";import"./iframe-BpY2Rvzk.js";import"../sb-preview/runtime.js";import"./index-BLtMylri.js";import"./_baseForOwn-DusBTQ6O.js";import"./mapValues-DfqGXSk1.js";import"./_baseUniq-BpWYsmmS.js";import"./index-Cagd9BgA.js";import"./index-DrFu-skq.js";import"./withWebComponent-DykTwaBJ.js";import"./utils-BXNPXA0w.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-CEPDwMcb.js";import"./decline-PQHY0vmQ.js";import"./Icon-C1aVUqaK.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-Pg2MF6OO.js";import"./parameters-bundle.css-BFbT_feV.js";import"./i18n-defaults-4yB5uAXJ.js";import"./information-s0rUc520.js";import"./alert-B5x9ZRdn.js";import"./class-map-BBkLNtsu.js";import"./Button-gEiq340s.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-Ddp6Qu_n.js";import"./TagDesign-Dou_yO3g.js";import"./utils-D893lBC6.js";import"./main-CzLLrZqh.js";import"./index-Co1HV2Td.js";import"./Tag-BkeKwJ-5.js";import"./sys-help-2-CnqpxX4c.js";import"./index-D24NvnwD.js";import"./Popover-xb-dB4fv.js";import"./PopupsCommon.css-BS0HwvId.js";import"./getEffectiveScrollbarStyle-C7TfqF8H.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CwA30WlK.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-CP3POd5N.js";import"./BrowserScrollbar.css-3d9vQOhG.js";import"./index-BJhXJzcI.js";import"./Link-DvVq2Sbg.js";import"./chunk-HLWAVYOI-B6Evhad3.js";import"./client-CM2XqZNc.js";import"./copy-CR8fi4tI.js";import"./copy-CIslHIHM.js";import"./index-Did8UXWE.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BB85D3ff.js";import"./index-BsDgV4lW.js";import"./I18nStore-DkMZE6H0.js";import"./useIsomorphicId-8WwglsiH.js";import"./GitHub-Mark-08X1RYCA.js";import"./TableOfContent-9pCB6xvZ.js";import"./index-DrZ-ulj2.js";import"./Label-Cn8Z-EZA.js";import"./index-Dvd-FLXD.js";import"./index-CNvmpCvS.js";import"./addCustomCSSWithScoping-CP2Nptdn.js";import"./index-3nvLRMwr.js";import"./index-9UIksY1P.js";import"./index-D1dQXJdH.js";import"./Avatar-CTYNbiCX.js";import"./employee-CVOZDo5u.js";import"./ResponsivePopoverCommon.css-DS0Jh9QN.js";import"./Title-B8CZCSNg.js";import"./ResponsivePopover-C8JyzrPV.js";import"./Dialog-KG2OBlTm.js";import"./ValueState-Bg0UWejw.js";import"./ItemNavigation-CJ0Lvk1x.js";function p(r){const t={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:j}),`
`,o.jsx(h,{since:"0.20.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(s,{of:e}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(d,{of:e}),`
`,o.jsx(t.h2,{id:"opening-colorpalettepopovers",children:"Opening ColorPalettePopovers"}),`
`,o.jsxs(t.p,{children:[o.jsx(t.code,{children:"ColorPalettePopover"}),"s can only be opened by attaching a ",o.jsx(t.code,{children:"ref"})," to the component and then call the corresponding ",o.jsx(t.strong,{children:o.jsx(t.code,{children:"showAt"})})," method. The method receives the target element - ",o.jsxs(t.em,{children:["on which the ",o.jsx(t.code,{children:"ColorPalettePopover"})," is to be opened"]})," - as parameter."]}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-jsx",children:`const ColorPalettePopoverComponent = () => {
  const popoverRef = useRef();
  const onButtonClick = (e) => {
    popoverRef.current.showAt(e.target);
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open ColorPalettePopover</Button>
      <ColorPalettePopover ref={popoverRef}>
        <ColorPaletteItem value="pink" />
        <ColorPaletteItem value="darkblue" />
      </ColorPalettePopover>
    </>
  );
};
`})}),`
`,o.jsx(a,{children:C}),`
`,o.jsx(t.h2,{id:"colorpaletteitem",children:"ColorPaletteItem"}),`
`,o.jsx(l,{of:i}),`
`,o.jsx(c,{of:i}),`
`,o.jsx(x,{})]})}function Vo(r={}){const{wrapper:t}={...m(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(p,{...r})}):p(r)}export{Vo as default};
