import{j as o}from"./useIsomorphicLayoutEffect-Dhma_bjk.js";import{useMDXComponents as n}from"./index-CcnH5Kt0.js";import{ae as m,af as s,ag as a,ah as l,ai as c}from"./index-DWdzs56n.js";import"./index-BXDvD5Ag.js";import"./index-DRZ5YHb2.js";import{C as d}from"./ControlsWithNote-B5PplksY.js";import{D as x}from"./DocsHeader-Bhhh1Pbe.js";import{F as u}from"./CommandsAndQueries-JRvLx9US.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-sU8Eh0Pe.js";import{C as h,D as e}from"./ColorPalettePopover.stories-DLLRvTJQ.js";import{S as f}from"./SubcomponentsSection-BVy4lpQe.js";import{C as p}from"./index-DOv0yrrN.js";import"./iframe-DaWDcjaD.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-DGDOfdbw.js";import"./_getPrototype-B0L0C3AT.js";import"./index-CFFTH5x_.js";import"./index-DrFu-skq.js";import"./withWebComponent-YgbOdVTg.js";import"./utils-C_Hfx9mc.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-CRmnyxU0.js";import"./decline-Di3Z0MBP.js";import"./Icon-DDA-V63S.js";import"./Keys-D1SxbTOd.js";import"./parameters-bundle.css-Bga-3Zi8.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-ExggBqKR.js";import"./alert-nKQG-ySE.js";import"./class-map-D12-v36h.js";import"./Button-CkiVa5Iu.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BUwKP62u.js";import"./i18n-defaults-PZPXNaBc.js";import"./TagDesign-Dou_yO3g.js";import"./utils-DjmPOo0b.js";import"./main-C6oD7XT2.js";import"./index-Cdmm4y_7.js";import"./Tag-gh5rEq7q.js";import"./sys-help-2-Dg0HLnT_.js";import"./index-C4dnCzjA.js";import"./Popover-COhsAIU7.js";import"./PopupsCommon.css-U0xQpWGd.js";import"./FocusableElements-BostZfMq.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-D085ltoF.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-HUTC8E5D.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-Dz1nSNRn.js";import"./Link-V-qm0Bxn.js";import"./chunk-HLWAVYOI-DFtKNqhv.js";import"./client-BZNFO7bv.js";import"./copy-C5P79WCS.js";import"./copy-BaVgvVlS.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-CnYostSV.js";import"./TableOfContent-J0xBpY2P.js";import"./index-CWTT1j6R.js";import"./I18nStore-5-32Wrgv.js";import"./useStylesheet-DcbwKAeb.js";import"./index-3WD7if5i.js";import"./index-DYtJKmyC.js";import"./Label-CPv3jFl2.js";import"./index-gHGG7lEc.js";import"./index-DIFmT50V.js";import"./addCustomCSSWithScoping-kPHcp3gn.js";import"./index-GP3fnmag.js";import"./BusyIndicator-DuGIcogQ.js";import"./index-CA4K8WmR.js";import"./index-CTeNKttK.js";import"./Avatar-DOs7P2bF.js";import"./employee-uQoQn_HB.js";import"./ResponsivePopoverCommon.css-DbB4vIHs.js";import"./ResponsivePopover-CMO3c_7J.js";import"./Dialog-_QHdeRl1.js";import"./ValueState-Bg0UWejw.js";import"./ItemNavigation-oOANHwJF.js";function i(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",...n(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:h}),`
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
