import{j as o}from"./useIsomorphicLayoutEffect-BDy32gDd.js";import{useMDXComponents as m}from"./index-D3szj05g.js";import{M as n,C as e}from"./index-Bnya9-WS.js";import"./index-b9H7mETQ.js";import{C as s}from"./ControlsWithNote-q-1Z8Eq7.js";import{D as c}from"./DocsHeader-BUKGPx3h.js";import{F as a}from"./CommandsAndQueries-DaOdDKjf.js";import"./index-ClU-Tc1p.js";import"./WrappingType-CW8URInd.js";import{C as d,D as p}from"./ResponsivePopover.stories-9_uOdWCf.js";import"./iframe-D7O9TNL9.js";import"../sb-preview/runtime.js";import"./index-C3ZJCerc.js";import"./_baseForOwn-CS3BKc8p.js";import"./mapValues-DmWmqx7o.js";import"./_baseUniq-DGAWXpCf.js";import"./index-BRTKD46C.js";import"./index-DrFu-skq.js";import"./withWebComponent-CPW0iYAf.js";import"./utils-B4B9qFe5.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-shm5Q6c6.js";import"./decline-P6ltvR0I.js";import"./Icon-BIxZr4TA.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-BCPYWAh1.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./i18n-defaults-CEQaAj6E.js";import"./information-B1l_cM6v.js";import"./alert-C2BbHj1C.js";import"./class-map-CQfLTfub.js";import"./Button-BsDFAdhY.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-DRoh8QZU.js";import"./TagDesign-Dou_yO3g.js";import"./utils-55U_Y24U.js";import"./main-BPTHlokf.js";import"./index-XWCTP897.js";import"./Tag-DtnL08Wh.js";import"./sys-help-2-BBmaRS7Q.js";import"./index-D8HKVn-f.js";import"./Popover-C804Stt9.js";import"./PopupsCommon.css-C-wswpgh.js";import"./getEffectiveScrollbarStyle-BsLHc2Qj.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-TnLd8hOy.js";import"./MediaRange-Bnzt26Xb.js";import"./Title-qjobRWCv.js";import"./style-map-Do0KrzH5.js";import"./BrowserScrollbar.css-Cvy61GCB.js";import"./index-DruMUwCD.js";import"./Link-B2-sZImF.js";import"./chunk-HLWAVYOI-3mxJtQ5J.js";import"./client-B23sEKGq.js";import"./copy-CGC9ELhw.js";import"./copy-alp5yJPT.js";import"./index-DG6x88aM.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-Dw38joME.js";import"./index-BeBqIGFU.js";import"./I18nStore-e1UZgw_b.js";import"./GitHub-Mark-9wNGlhWh.js";import"./TableOfContent-TpuerwNm.js";import"./index-CyvEbWFv.js";import"./Label-BcgafC0L.js";import"./index-CqbNPJrd.js";import"./index-Bv2tGU0H.js";import"./addCustomCSSWithScoping-BIehpVOD.js";import"./index-ifcawrXv.js";import"./BusyIndicator-C9Q0CDgp.js";import"./index--PBGpTV0.js";import"./index-DAcsa9UL.js";import"./Avatar-DrCFK53V.js";import"./employee-Bjf4oLVT.js";import"./index-Dr7lKfd0.js";import"./List-BIG_Eyud.js";import"./ItemNavigation-CIi6TzBH.js";import"./isElementInView-CjfjvN8v.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-8nT8kXhO.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-BL1miepq.js";import"./accept-B_wtZvcq.js";import"./slim-arrow-right-5rp1rFN9.js";import"./index-BXn8v7FQ.js";import"./index-Bm0I9Sev.js";import"./ResponsivePopover-CTTOCd1B.js";import"./Dialog-BhrO_1Jd.js";import"./settings-JKGpBVCp.js";function i(t){const r={code:"code",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:d}),`
`,o.jsx(c,{since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(r.h2,{id:"example",children:"Example"}),`
`,o.jsx(e,{of:p}),`
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
`,o.jsx(a,{})]})}function or(t={}){const{wrapper:r}={...m(),...t.components};return r?o.jsx(r,{...t,children:o.jsx(i,{...t})}):i(t)}export{or as default};
