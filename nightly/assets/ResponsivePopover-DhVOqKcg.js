import{j as o}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as m}from"./index-CcnH5Kt0.js";import{ae as e,af as n}from"./index-Cu_yI9ze.js";import"./index-CYMmuDNo.js";import"./index-sWcDFia9.js";import{C as s}from"./ControlsWithNote-3vF6WU54.js";import{D as a}from"./DocsHeader-2q95XY8f.js";import{F as c}from"./CommandsAndQueries-D6LykKST.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-Bw4-azjR.js";import{C as d,D as p}from"./ResponsivePopover.stories-X_S82FK6.js";import"./iframe-BHU33PFr.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./withWebComponent-wFYtA7If.js";import"./utils-U7G133b4.js";import"./useIsomorphicLayoutEffect-Dm78g2BF.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18n-DEVDpFvK.js";import"./decline-C0oweRvl.js";import"./Icon-BcSHg7oQ.js";import"./Keys-DoZifIQ_.js";import"./parameters-bundle.css-BOSi_lPd.js";import"./i18n-defaults-CzsryEvw.js";import"./information-BGBEnzgc.js";import"./alert-2Fjq9UKP.js";import"./class-map-B9XgGk97.js";import"./Button-KM4-V0NS.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-Cyb-S5u3.js";import"./i18n-defaults-NO4RLLYJ.js";import"./TagDesign-Dou_yO3g.js";import"./utils-BXnbELXl.js";import"./main-r7D-Vqmb.js";import"./index-BzJgpzCi.js";import"./Tag-Bu1O2kVJ.js";import"./sys-help-2-W_np5NtH.js";import"./index-ax0weve5.js";import"./Popover-C5qlK_nP.js";import"./PopupsCommon.css-C_WF48EP.js";import"./FocusableElements-BIj5ki0J.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CTXj7VRO.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-BvbZz5j6.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-CDY2pqSn.js";import"./Link-0XT9hN4f.js";import"./chunk-NUUEMKO5-CqTAjZjN.js";import"./client-BzooOYO_.js";import"./copy-7GRBkhIV.js";import"./copy-lw60TSjb.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DGRwmqGf.js";import"./TableOfContent-DBMEQ9W3.js";import"./index-CR_6k5E2.js";import"./I18nStore-CIizPkd0.js";import"./useStylesheet-DPBS0l4j.js";import"./index-GDTSF2Z6.js";import"./index-BV7383_0.js";import"./Label-C5_omeHE.js";import"./index-DDTf4_9s.js";import"./index-B3JK_dxj.js";import"./addCustomCSSWithScoping-Dz0L6MFE.js";import"./index-BdtzyfaT.js";import"./BusyIndicator-Blb6RTs2.js";import"./index-DMEGOjSg.js";import"./index-CDIA3NMf.js";import"./Avatar-qMkK7jki.js";import"./employee-DAjWhiTf.js";import"./index-ChjR7iRb.js";import"./List-Dx4Hcm_o.js";import"./ItemNavigation-B3YJmLhv.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-BNPIs62B.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-HDy9tGTA.js";import"./accept-DWqszFD7.js";import"./slim-arrow-right-C_RUE-4M.js";import"./index-DsrOnGkn.js";import"./index-CxcX4JSe.js";import"./ResponsivePopover-Bg0lkHG9.js";import"./Dialog-CRbvIDTn.js";import"./settings-BEs4qKMT.js";function i(t){const r={code:"code",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:d}),`
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
