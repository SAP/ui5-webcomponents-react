import{j as o}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as m}from"./index-CcnH5Kt0.js";import{ae as e,af as n}from"./index-sA7-Ssdj.js";import"./index-BBbw6PDx.js";import"./index-HYKJ__xI.js";import{C as s}from"./ControlsWithNote-BY0mOIMn.js";import{D as a}from"./DocsHeader-DKMf_es1.js";import{F as c}from"./CommandsAndQueries-CAAT9wfe.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-CbLKT2ZM.js";import{C as d,D as p}from"./ResponsivePopover.stories-DbSBsn6v.js";import"./iframe-B4C8rKYC.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./withWebComponent-m_Fq5lNf.js";import"./utils-DzvJSare.js";import"./useIsomorphicLayoutEffect-Dm78g2BF.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18n-DEVDpFvK.js";import"./decline-C1nyYXx8.js";import"./Icon-CqlVqIII.js";import"./Keys-DoZifIQ_.js";import"./parameters-bundle.css-BOSi_lPd.js";import"./i18n-defaults-CzsryEvw.js";import"./information-BCemT9Q2.js";import"./alert-RTfmNTjg.js";import"./class-map-De2mf49U.js";import"./Button-CN-iJYg4.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-RVqvTAYx.js";import"./i18n-defaults-NO4RLLYJ.js";import"./TagDesign-Dou_yO3g.js";import"./utils-CivWR93S.js";import"./main-r7D-Vqmb.js";import"./index-CU0BOneF.js";import"./Tag-DfB_qukv.js";import"./sys-help-2-TCPa0dFt.js";import"./index-C4nETofk.js";import"./Popover-CSyvOuD4.js";import"./PopupsCommon.css-C0UbsxGP.js";import"./FocusableElements-3aC5Xvwv.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DIO-YqVA.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-TzMr6uTh.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-Ci7P8uUK.js";import"./Link-BieF31O5.js";import"./chunk-NUUEMKO5-CaVPWOki.js";import"./client-BzooOYO_.js";import"./copy-Bps3bwPx.js";import"./copy-9aGvoyGQ.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DGRwmqGf.js";import"./TableOfContent-DB04WaQs.js";import"./index-DqpHxG4L.js";import"./I18nStore-C2pCP-g5.js";import"./useStylesheet-DPBS0l4j.js";import"./index-O71mrAzx.js";import"./index-CHC2M3KR.js";import"./Label-9bI6U8uT.js";import"./index-DaJvuRnK.js";import"./index-Nq8WqOTU.js";import"./addCustomCSSWithScoping-D6Q9hDjm.js";import"./index-BHJpfsCV.js";import"./BusyIndicator-DyFdFCo7.js";import"./index-PL__NMMH.js";import"./index-CnaX4kM6.js";import"./Avatar-ClyMV4d2.js";import"./employee-q-Be_VIK.js";import"./index-2LbIC8Ja.js";import"./List-CC3-RGLN.js";import"./ItemNavigation-Ch4M95JE.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-DWjfFT92.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-BnlECbaq.js";import"./accept-xt9cvT2l.js";import"./slim-arrow-right-B3gzPr_L.js";import"./index--RY_zqnf.js";import"./index-HinKIHT3.js";import"./ResponsivePopover-DDlqQ8qM.js";import"./Dialog-Ct0qHFap.js";import"./settings-DtXSXhKP.js";function i(t){const r={code:"code",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:d}),`
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
