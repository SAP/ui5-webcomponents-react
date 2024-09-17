import{j as o}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as n}from"./index-CcnH5Kt0.js";import{ae as m,af as s,ag as a,ah as l,ai as c}from"./index-DcaIyAIU.js";import"./index-DUhstqtS.js";import"./index-CwbMnpRq.js";import{C as d}from"./ControlsWithNote-CkDKh4fZ.js";import{D as x}from"./DocsHeader-BhPnD-Qr.js";import{F as u}from"./CommandsAndQueries-Yvcj9pB7.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-XDMvnQZn.js";import{C as h,D as e}from"./ColorPalettePopover.stories-C3vk8ysv.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-DxugeaQd.js";import"./iframe-D8On6EsC.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./withWebComponent-CjthvP8A.js";import"./utils-GPKUbrfH.js";import"./useIsomorphicLayoutEffect-BErBnqdY.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-GWtZPJ2c.js";import"./decline-CmGSEmfo.js";import"./Icon-BiQiH9AZ.js";import"./Keys-D1SxbTOd.js";import"./parameters-bundle.css-Bga-3Zi8.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-OSvSoWlX.js";import"./alert-eD3USdjD.js";import"./class-map-DQ0L7MML.js";import"./Button-BaZh887D.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BLqibUdf.js";import"./i18n-defaults-s9aeS2Z-.js";import"./TagDesign-Dou_yO3g.js";import"./utils-CXgwk7gS.js";import"./main-C6oD7XT2.js";import"./index-CMVhEEEP.js";import"./Tag-LXz9Qzaa.js";import"./sys-help-2-DCOUH3lY.js";import"./index-BVNesCV8.js";import"./Popover-CTv0B5oi.js";import"./PopupsCommon.css-BCC2ARq6.js";import"./FocusableElements-Br0H5X9U.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-C_eCkGSS.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-nG21dhw_.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-utr4MoWw.js";import"./Link-BrEhs14Q.js";import"./chunk-NUUEMKO5-BJlJeIos.js";import"./client-BzooOYO_.js";import"./copy-DL3IQ6be.js";import"./copy-1gorG9K6.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DGRwmqGf.js";import"./TableOfContent-bhM-b_eu.js";import"./index-f020l5lP.js";import"./I18nStore-MR5G_kEB.js";import"./useStylesheet-fdPvni4l.js";import"./index-DufQBMho.js";import"./index-BfKb0La0.js";import"./Label-BTdZQfry.js";import"./index-B5WnUF1s.js";import"./index-BW0ji45E.js";import"./addCustomCSSWithScoping-Da--1kqg.js";import"./index-BIzHEfW9.js";import"./BusyIndicator-CtYaHi5D.js";import"./index-Bm413cmF.js";import"./index-Dgv9Wh4L.js";import"./Avatar-DugjCxw4.js";import"./employee-LWQGcPo2.js";import"./ResponsivePopoverCommon.css-Qh3TzjNu.js";import"./ResponsivePopover-BQWeyngQ.js";import"./Dialog-B_xzyDcT.js";import"./ValueState-Bg0UWejw.js";import"./ItemNavigation-Ch7UfbYX.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:h}),`
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
