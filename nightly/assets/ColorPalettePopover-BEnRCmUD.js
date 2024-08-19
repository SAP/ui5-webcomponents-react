import{j as o}from"./useIsomorphicLayoutEffect-DOdM5Kf8.js";import{useMDXComponents as n}from"./index-BrB9znxi.js";import{ae as m,af as s,ag as a,ah as l,ai as c}from"./index-CCCmMs9w.js";import"./index-Cs3iSmon.js";import{C as d}from"./ControlsWithNote-dV3ZVMUA.js";import{D as x}from"./DocsHeader-DZcg40Yt.js";import{F as u}from"./CommandsAndQueries-BZ1jUYqF.js";import"./index-CMKoANNR.js";import"./WrappingType-CW8URInd.js";import{C as h,D as e}from"./ColorPalettePopover.stories-BPFQrx6h.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-DyauqmtN.js";import"./iframe-D4nOB_re.js";import"../sb-preview/runtime.js";import"./index-CJugYjqS.js";import"./_baseUniq-qZQRvdR-.js";import"./_overArg-Mt7ZKpko.js";import"./_baseAssignValue-680W1HJy.js";import"./_getPrototype-CvhAe9S0.js";import"./index-uexYa9xf.js";import"./index-DrFu-skq.js";import"./withWebComponent-BbgN5sxI.js";import"./utils-B91Jjtng.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-CwTDKhhX.js";import"./decline-CRs0CuFn.js";import"./Icon-ClAYWRjo.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-BJMHgp7g.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./i18n-defaults-CEQaAj6E.js";import"./information-DxOUV61z.js";import"./alert-QN-C0-di.js";import"./class-map-DWnotN9Q.js";import"./Button-cuQy5RCN.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-jWmICHmQ.js";import"./TagDesign-Dou_yO3g.js";import"./utils-BmMAV2DN.js";import"./main-BPTHlokf.js";import"./index-i0kV4CdX.js";import"./Tag-DV5SP9Oh.js";import"./sys-help-2-Cu5M0nic.js";import"./index-BUWgkKs7.js";import"./Popover-CNg3OGLR.js";import"./PopupsCommon.css-F2oSnJih.js";import"./getEffectiveScrollbarStyle-BM2MSN9M.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DghOwUYf.js";import"./MediaRange-Bnzt26Xb.js";import"./Title-RCwOVsWq.js";import"./style-map-D73I43XI.js";import"./BrowserScrollbar.css-CNIKbe81.js";import"./index-C_6suU6y.js";import"./Link-DDy4Rfx-.js";import"./chunk-HLWAVYOI-C-pslaxs.js";import"./client-DpDvupH-.js";import"./copy-DTi-Y5PU.js";import"./copy-BYxOf-QH.js";import"./index-DNwR1bnO.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BdPJGR6W.js";import"./index-CGvbx4PR.js";import"./I18nStore-3tee64za.js";import"./GitHub-Mark-DCDQJZl8.js";import"./TableOfContent-DYSF1A7E.js";import"./index-CQUfU_qV.js";import"./Label-B16HW9k1.js";import"./index-DYdngNaX.js";import"./index-B-IrwayZ.js";import"./addCustomCSSWithScoping-CgCJVuIw.js";import"./index-BmKO-q3U.js";import"./BusyIndicator-DYwg6ta4.js";import"./index-DvqQRpoZ.js";import"./index-BW4f9_z6.js";import"./Avatar-Dkq5x8aO.js";import"./employee-bAM6jRYC.js";import"./ResponsivePopoverCommon.css-BBImfErP.js";import"./ResponsivePopover-rzM3qMVF.js";import"./Dialog-BvulQXwM.js";import"./ValueState-Bg0UWejw.js";import"./ItemNavigation-k4sy1HLj.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:h}),`
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
