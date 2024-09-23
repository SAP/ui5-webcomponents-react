import{j as o}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as n}from"./index-CcnH5Kt0.js";import{ae as m,af as s,ag as a,ah as l,ai as c}from"./index-BSVF12K3.js";import"./index-fq-A78mQ.js";import"./index-DivLG0aG.js";import{C as d}from"./ControlsWithNote-DrK0M2Dw.js";import{D as x}from"./DocsHeader-MZV236To.js";import{F as u}from"./CommandsAndQueries-C30XEun7.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-XDMvnQZn.js";import{C as h,D as e}from"./ColorPalettePopover.stories-Nenav7Cm.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-DrReP0If.js";import"./iframe-DFiJm6Od.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./withWebComponent-CjthvP8A.js";import"./utils-GPKUbrfH.js";import"./useIsomorphicLayoutEffect-BErBnqdY.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-GWtZPJ2c.js";import"./decline-CmGSEmfo.js";import"./Icon-BiQiH9AZ.js";import"./Keys-D1SxbTOd.js";import"./parameters-bundle.css-Bga-3Zi8.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-OSvSoWlX.js";import"./alert-eD3USdjD.js";import"./class-map-DQ0L7MML.js";import"./Button-BBQ8R6D6.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BLqibUdf.js";import"./i18n-defaults-BotoAXl7.js";import"./TagDesign-Dou_yO3g.js";import"./utils-C8-8Yovp.js";import"./main-C6oD7XT2.js";import"./index-BAVmR9lv.js";import"./Tag-MIdNBUL-.js";import"./sys-help-2-DCOUH3lY.js";import"./index-BVNesCV8.js";import"./Popover-CTv0B5oi.js";import"./PopupsCommon.css-BCC2ARq6.js";import"./FocusableElements-Br0H5X9U.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-C_eCkGSS.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-nG21dhw_.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-C5CUzSoK.js";import"./Link-DZg2nJC9.js";import"./chunk-NUUEMKO5-CtE8_fph.js";import"./client-BzooOYO_.js";import"./copy-DL3IQ6be.js";import"./copy-1gorG9K6.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DGRwmqGf.js";import"./TableOfContent-bhM-b_eu.js";import"./index-lBjjPZPJ.js";import"./I18nStore-MR5G_kEB.js";import"./useStylesheet-LPUx0SP2.js";import"./index-BbZOpDmd.js";import"./index-Dns6Oz5_.js";import"./Label-CZSx-F1W.js";import"./index-DPG7W1kp.js";import"./index-BdA_tfl3.js";import"./addCustomCSSWithScoping-Da--1kqg.js";import"./index-BmvVf3i2.js";import"./BusyIndicator-CFbpjHZX.js";import"./index-p_JN0Moo.js";import"./index-C99ljWuN.js";import"./Avatar-Dvl2_7FY.js";import"./employee-LWQGcPo2.js";import"./ResponsivePopoverCommon.css-Qh3TzjNu.js";import"./ResponsivePopover-B-t0Cbra.js";import"./Dialog-C8nnmLS4.js";import"./ValueState-Bg0UWejw.js";import"./ItemNavigation-Ch7UfbYX.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:h}),`
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
