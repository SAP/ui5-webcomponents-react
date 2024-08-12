import{j as o}from"./useIsomorphicLayoutEffect-DOdM5Kf8.js";import{useMDXComponents as n}from"./index-BrB9znxi.js";import{ae as m,af as s,ag as a,ah as l,ai as c}from"./index-CZlzwiku.js";import"./index-UfcKm4n3.js";import{C as d}from"./ControlsWithNote-CoBn-mUI.js";import{D as x}from"./DocsHeader-Dj_FC2hR.js";import{F as u}from"./CommandsAndQueries-CsMBvn1G.js";import"./index-CMKoANNR.js";import"./WrappingType-CW8URInd.js";import{C as h,D as e}from"./ColorPalettePopover.stories-B7W_bz8e.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-DEtLmST7.js";import"./iframe-B502sJNi.js";import"../sb-preview/runtime.js";import"./index-CJugYjqS.js";import"./_baseUniq-qZQRvdR-.js";import"./_overArg-Mt7ZKpko.js";import"./_baseAssignValue-680W1HJy.js";import"./_getPrototype-CvhAe9S0.js";import"./index-uexYa9xf.js";import"./index-DrFu-skq.js";import"./withWebComponent-Bvd6GsxT.js";import"./utils-B91Jjtng.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-DyvSagx7.js";import"./decline-DI0qcVtv.js";import"./Icon-iJ5XkFd9.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-BJMHgp7g.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./i18n-defaults-CEQaAj6E.js";import"./information-B954FDjj.js";import"./alert-XemOvmut.js";import"./class-map-izHjq-7_.js";import"./Button-DFUJoV2f.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-CcfWlpG-.js";import"./TagDesign-Dou_yO3g.js";import"./utils-BGO-Vq55.js";import"./main-BPTHlokf.js";import"./index-BSuksK_k.js";import"./Tag-BfVSSKMv.js";import"./sys-help-2-DL9x_pH7.js";import"./index-IG76PqK2.js";import"./Popover-BQ0u1cZY.js";import"./PopupsCommon.css-DYqWK7NT.js";import"./getEffectiveScrollbarStyle-B3XuleRv.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DLtaLMaj.js";import"./MediaRange-Bnzt26Xb.js";import"./Title-CLsYVLHg.js";import"./style-map-CJSYxNSP.js";import"./BrowserScrollbar.css-D0ty1KEr.js";import"./index-BHxJBuqK.js";import"./Link-DSM5xQ_2.js";import"./chunk-HLWAVYOI-BHQE9SOF.js";import"./client-DpDvupH-.js";import"./copy-0vVSQk-U.js";import"./copy-BHpcHI8d.js";import"./index-DNwR1bnO.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BdPJGR6W.js";import"./index-Ch5aExGr.js";import"./I18nStore-qPt-PKca.js";import"./GitHub-Mark-DCDQJZl8.js";import"./TableOfContent-DYSF1A7E.js";import"./index-Cz64CBrc.js";import"./Label-CuT9KatJ.js";import"./index-nm84gW6I.js";import"./index-BFHEdEFO.js";import"./addCustomCSSWithScoping-BIONmqoK.js";import"./index-D6jAMfNt.js";import"./BusyIndicator-Cx-S6BZJ.js";import"./index-DpfMcmSx.js";import"./index-CIT2LMF7.js";import"./Avatar-DBJmGUf1.js";import"./employee-CB0X-WXT.js";import"./ResponsivePopoverCommon.css-Z-38ofjd.js";import"./ResponsivePopover-CQe21ayh.js";import"./Dialog-ChhXL7p5.js";import"./ValueState-Bg0UWejw.js";import"./ItemNavigation-vTMdqqKa.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:h}),`
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
