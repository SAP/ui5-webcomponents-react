import{j as o}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as m}from"./index-CcnH5Kt0.js";import{ae as e,af as n}from"./index-DoFBY4cW.js";import"./index-CoHyeD13.js";import"./index-BcYDZPKS.js";import{C as s}from"./ControlsWithNote-BXAFCO_L.js";import{D as a}from"./DocsHeader-D-LOD_5a.js";import{F as c}from"./CommandsAndQueries-BfNojQLK.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-P9BL2JTj.js";import{C as d,D as p}from"./ResponsivePopover.stories-BWEdSAPR.js";import"./iframe-CQsfR4Dh.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./withWebComponent-CatvTRGM.js";import"./utils-U7G133b4.js";import"./useIsomorphicLayoutEffect-Dm78g2BF.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18n-DEVDpFvK.js";import"./decline-CfTJOSOX.js";import"./Icon-DpVcsMQ1.js";import"./Keys-DoZifIQ_.js";import"./parameters-bundle.css-BOSi_lPd.js";import"./i18n-defaults-CzsryEvw.js";import"./information-DOBme6g4.js";import"./alert-Cst6Jx1-.js";import"./class-map-BxE82PvF.js";import"./Button-DaJIiUzx.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-CHzLKGx6.js";import"./i18n-defaults-NO4RLLYJ.js";import"./TagDesign-Dou_yO3g.js";import"./utils-BXjuxqxL.js";import"./main-r7D-Vqmb.js";import"./index-BqxRpBZn.js";import"./Tag-Ba6Qizx6.js";import"./sys-help-2-B637x_Rq.js";import"./index-CJgdXAoE.js";import"./Popover-DC8nUXyl.js";import"./PopupsCommon.css-P4EDdSo7.js";import"./FocusableElements-B84gg-qr.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CHwfBtCV.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-D18U2KXK.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-KUKKq0uQ.js";import"./Link-tpPG7lbT.js";import"./chunk-NUUEMKO5-syhc_htH.js";import"./client-BzooOYO_.js";import"./copy-B31_7TOX.js";import"./copy-pDjV9mbZ.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DGRwmqGf.js";import"./TableOfContent-DBMEQ9W3.js";import"./index-D6Orflnx.js";import"./I18nStore-CUp48qoB.js";import"./useStylesheet-DPBS0l4j.js";import"./index-GDTSF2Z6.js";import"./index-BhAgbKd_.js";import"./Label-B0tmzzu4.js";import"./index-r42d8n5r.js";import"./index-Df2RbfHi.js";import"./addCustomCSSWithScoping-CKBWDV-T.js";import"./index-Dj0P-9ga.js";import"./BusyIndicator-DOcNJFJt.js";import"./index-xDb7bEld.js";import"./index-DtEO3OH4.js";import"./Avatar-C4XDdmGY.js";import"./employee-DdBiHLUk.js";import"./index-BD7_KHT4.js";import"./List-B5lGAYlp.js";import"./ItemNavigation-CLFa-8Nr.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-BQ7ELbTZ.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-DMm2l2EU.js";import"./accept-FUlt0iqq.js";import"./slim-arrow-right-DTsIPnFB.js";import"./index-D00fg7y_.js";import"./index-CDOw9ovz.js";import"./ResponsivePopover-wTR1cEjk.js";import"./Dialog-Cmk_X7NG.js";import"./settings-DXj8Fhq7.js";function i(t){const r={code:"code",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:d}),`
`,o.jsx(a,{since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(r.h2,{id:"example",children:"Example"}),`
`,o.jsx(n,{of:p}),`
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
`,o.jsx(c,{})]})}function or(t={}){const{wrapper:r}={...m(),...t.components};return r?o.jsx(r,{...t,children:o.jsx(i,{...t})}):i(t)}export{or as default};
