import{j as o}from"./useIsomorphicLayoutEffect-BDy32gDd.js";import{useMDXComponents as n}from"./index-D3szj05g.js";import{M as m,C as s,d as a,D as l,A as c}from"./index--P03AD5X.js";import"./index-CxAkQ-Er.js";import{C as d}from"./ControlsWithNote-DCQjh2AU.js";import{D as x}from"./DocsHeader-CZhBYOsw.js";import{F as u}from"./CommandsAndQueries-DVkWNvqe.js";import"./index-ClU-Tc1p.js";import"./WrappingType-CW8URInd.js";import{C as h,D as e}from"./ColorPalettePopover.stories-ChaWg6CW.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-CKqbEiRz.js";import"./iframe-B1DxKb9w.js";import"../sb-preview/runtime.js";import"./index-C3ZJCerc.js";import"./_baseForOwn-CS3BKc8p.js";import"./mapValues-DmWmqx7o.js";import"./_baseUniq-DGAWXpCf.js";import"./index-BRTKD46C.js";import"./index-DrFu-skq.js";import"./withWebComponent--2-UXDGX.js";import"./utils-DLW1sA5D.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-d4QydjzH.js";import"./decline-D1QcXBrl.js";import"./Icon-uF1AIezb.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-BflNsp1k.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./i18n-defaults-CEQaAj6E.js";import"./information-DOrNCQ6l.js";import"./alert-RJboOX4N.js";import"./class-map-Oct9Grst.js";import"./Button-BSGOQMBD.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-CY90T2oA.js";import"./TagDesign-Dou_yO3g.js";import"./utils-uZOR3WbA.js";import"./main-BPTHlokf.js";import"./index-DF5Vbbt3.js";import"./Tag-BGV0RLgG.js";import"./sys-help-2-Ceay95o3.js";import"./index-viyGTy6F.js";import"./Popover-CQErUPF9.js";import"./PopupsCommon.css-C72k6bm-.js";import"./getEffectiveScrollbarStyle-Br73qKwi.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-rKzABZ14.js";import"./MediaRange-Bnzt26Xb.js";import"./Title-BuvIaMNd.js";import"./style-map-_S7pHwug.js";import"./BrowserScrollbar.css-BWLGETwt.js";import"./index-D5CWNA2_.js";import"./Link-Mzj3wSV5.js";import"./chunk-HLWAVYOI-jEDWWNb4.js";import"./client-B23sEKGq.js";import"./copy-C5fIvxWD.js";import"./copy-9e4iEp3h.js";import"./index-DG6x88aM.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-Dw38joME.js";import"./index-BHWkBf9r.js";import"./I18nStore-DDVmdcy1.js";import"./GitHub-Mark-9wNGlhWh.js";import"./TableOfContent-BZUc_VeO.js";import"./index-BnAkacAy.js";import"./Label-BByfo__S.js";import"./index-DN82RYtU.js";import"./index-CsKhyL2z.js";import"./addCustomCSSWithScoping-BAXItpVh.js";import"./index-CEdIKZfe.js";import"./BusyIndicator-B3EKab9f.js";import"./index-KPOzo7bK.js";import"./index-D9MjL_nD.js";import"./Avatar-CILPVfd6.js";import"./employee-WB48gXgq.js";import"./ResponsivePopoverCommon.css-C8pzrqWe.js";import"./ResponsivePopover-Bv43Ogqj.js";import"./Dialog-C6Kr1IQZ.js";import"./ValueState-Bg0UWejw.js";import"./ItemNavigation-Dx6wFulK.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:h}),`
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
