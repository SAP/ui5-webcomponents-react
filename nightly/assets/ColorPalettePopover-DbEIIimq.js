import{j as o}from"./useIsomorphicLayoutEffect-BDy32gDd.js";import{useMDXComponents as n}from"./index-D3szj05g.js";import{M as m,C as s,d as a,D as l,A as c}from"./index-Dlz_Wzib.js";import"./index-cjlUsKK-.js";import{C as d}from"./ControlsWithNote-DnfjiwlG.js";import{D as x}from"./DocsHeader-BwadOHW0.js";import{F as u}from"./CommandsAndQueries-CwfMviIg.js";import"./index-ClU-Tc1p.js";import"./WrappingType-CW8URInd.js";import{C as h,D as e}from"./ColorPalettePopover.stories-C3atJNQl.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-DVV_T-tB.js";import"./iframe-B1zmHljn.js";import"../sb-preview/runtime.js";import"./index-C3ZJCerc.js";import"./_baseForOwn-CS3BKc8p.js";import"./mapValues-DmWmqx7o.js";import"./_baseUniq-DGAWXpCf.js";import"./index-BRTKD46C.js";import"./index-DrFu-skq.js";import"./withWebComponent-CPW0iYAf.js";import"./utils-B4B9qFe5.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-shm5Q6c6.js";import"./decline-P6ltvR0I.js";import"./Icon-BIxZr4TA.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-BCPYWAh1.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./i18n-defaults-CEQaAj6E.js";import"./information-B1l_cM6v.js";import"./alert-C2BbHj1C.js";import"./class-map-CQfLTfub.js";import"./Button-BsDFAdhY.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-DRoh8QZU.js";import"./TagDesign-Dou_yO3g.js";import"./utils-DlhPNGQp.js";import"./main-BPTHlokf.js";import"./index-BPyIa6zv.js";import"./Tag-DtnL08Wh.js";import"./sys-help-2-BBmaRS7Q.js";import"./index-CHEx1pJ9.js";import"./Popover-C804Stt9.js";import"./PopupsCommon.css-C-wswpgh.js";import"./getEffectiveScrollbarStyle-BsLHc2Qj.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-TnLd8hOy.js";import"./MediaRange-Bnzt26Xb.js";import"./Title-qjobRWCv.js";import"./style-map-Do0KrzH5.js";import"./BrowserScrollbar.css-Cvy61GCB.js";import"./index-i4hrat4m.js";import"./Link-B2-sZImF.js";import"./chunk-HLWAVYOI-Dx6g1kZN.js";import"./client-B23sEKGq.js";import"./copy-CGC9ELhw.js";import"./copy-alp5yJPT.js";import"./index-DG6x88aM.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-Dw38joME.js";import"./index-BeBqIGFU.js";import"./I18nStore-e1UZgw_b.js";import"./GitHub-Mark-9wNGlhWh.js";import"./TableOfContent-CJdNn1mr.js";import"./index-CKRl-9n8.js";import"./Label-BcgafC0L.js";import"./index-CyB39y4H.js";import"./index-3gCwk5si.js";import"./addCustomCSSWithScoping-BIehpVOD.js";import"./index-DrIYeJA9.js";import"./BusyIndicator-C9Q0CDgp.js";import"./index-8K5FtpFb.js";import"./index-CR76ks3I.js";import"./Avatar-DrCFK53V.js";import"./employee-Bjf4oLVT.js";import"./ResponsivePopoverCommon.css-CFRW5sF9.js";import"./ResponsivePopover-CTTOCd1B.js";import"./Dialog-BhrO_1Jd.js";import"./ValueState-Bg0UWejw.js";import"./ItemNavigation-CIi6TzBH.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:h}),`
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
`,o.jsx(a,{children:j}),`
`,o.jsx(t.h2,{id:"colorpaletteitem",children:"ColorPaletteItem"}),`
`,o.jsx(l,{of:p}),`
`,o.jsx(c,{of:p}),`
`,o.jsx(u,{})]})}function Uo(r={}){const{wrapper:t}={...n(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(i,{...r})}):i(r)}export{Uo as default};
