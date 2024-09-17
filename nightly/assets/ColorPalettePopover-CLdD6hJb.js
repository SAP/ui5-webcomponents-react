import{j as o}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as n}from"./index-CcnH5Kt0.js";import{ae as m,af as s,ag as a,ah as l,ai as c}from"./index-BRc5q4pE.js";import"./index-B6qjgXRU.js";import"./index-BdoYfwXe.js";import{C as d}from"./ControlsWithNote-Cy8rHk7M.js";import{D as x}from"./DocsHeader-S59uUqb6.js";import{F as u}from"./CommandsAndQueries-BKIVHbB5.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-CAqRFLM1.js";import{C as h,D as e}from"./ColorPalettePopover.stories-BL4EAPvo.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-BYmkVTSv.js";import"./iframe-D20Cv4bN.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./withWebComponent-BS26LpJo.js";import"./utils-4GUSeNxV.js";import"./useIsomorphicLayoutEffect-BErBnqdY.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-BUZJrdsA.js";import"./decline-ChPQ5Vpc.js";import"./Icon-BwGmtu7y.js";import"./Keys-D1SxbTOd.js";import"./parameters-bundle.css-Bga-3Zi8.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-C_Bqjk9j.js";import"./alert-qaECYIyO.js";import"./class-map-CcXho7vk.js";import"./Button-YKCVo3sO.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BJ6YdIbZ.js";import"./i18n-defaults-GANmd4m7.js";import"./TagDesign-Dou_yO3g.js";import"./utils-BppN9QAc.js";import"./main-C6oD7XT2.js";import"./index-B4AVHU7Z.js";import"./Tag-UOd3_PdA.js";import"./sys-help-2-KG0RzPfQ.js";import"./index-Je_4VAbv.js";import"./Popover-CC4eno7O.js";import"./PopupsCommon.css-D2k_TiiU.js";import"./FocusableElements-DE2dOMez.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CmgjED1E.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-DYOeniYq.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-C7NAfg9X.js";import"./Link-DM1dup6y.js";import"./chunk-NUUEMKO5-DRqsm4mp.js";import"./client-BzooOYO_.js";import"./copy-CLCnF9Ex.js";import"./copy-B8ijgEE_.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DGRwmqGf.js";import"./TableOfContent-bhM-b_eu.js";import"./index-LJg5O3PD.js";import"./I18nStore-ZvXQBe85.js";import"./useStylesheet-fdPvni4l.js";import"./index-BekckRX4.js";import"./index-DqrLvsQJ.js";import"./Label-CIfQAdSL.js";import"./index-l2PZWEC2.js";import"./index-CFexjE8g.js";import"./addCustomCSSWithScoping-nMrqEq1r.js";import"./index-C6aLG_v0.js";import"./BusyIndicator-DqlHMudg.js";import"./index-DrRRRjPp.js";import"./index-WZkkYmOx.js";import"./Avatar-FwB2Bc3j.js";import"./employee-BnxYOghN.js";import"./ResponsivePopoverCommon.css-BOr3WOvu.js";import"./ResponsivePopover-K4gl-LsB.js";import"./Dialog-z-Zd0ubb.js";import"./ValueState-Bg0UWejw.js";import"./ItemNavigation-DY9WPMGj.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:h}),`
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
