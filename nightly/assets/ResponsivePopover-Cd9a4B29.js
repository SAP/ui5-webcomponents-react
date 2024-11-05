import{j as o}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as e}from"./index-CcnH5Kt0.js";import{ae as m,af as n}from"./index-DF88Vfek.js";import"./index-D9yJfDXX.js";import"./index-CiCDi3h8.js";import{C as s}from"./ControlsWithNote-CXZY75qB.js";import{D as a}from"./DocsHeader-CXgpumkn.js";import{F as c}from"./CommandsAndQueries-fTvyWV95.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-acGyIFev.js";import{C as d,D as p}from"./ResponsivePopover.stories-BMowfjNA.js";import"./iframe-kRb-Lw1F.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./withWebComponent-v3aPz19k.js";import"./utils-BWMMwCMQ.js";import"./useIsomorphicLayoutEffect-yry-y2Q-.js";import"./slot-_4yKMUwC.js";import"./event-BX8i4Y_x.js";import"./i18n-DEVDpFvK.js";import"./decline-m373cvJP.js";import"./Icon-Bq3V4Dpj.js";import"./Keys-DoZifIQ_.js";import"./parameters-bundle.css-R51uC6BG.js";import"./i18n-defaults-neJWcM66.js";import"./information-BZEj3R5z.js";import"./alert-C_n2K4SQ.js";import"./class-map-CH6JYcvP.js";import"./Button-BOw4gYNT.js";import"./AriaLabelHelper-C5uDZewF.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BxgbG8pQ.js";import"./i18n-defaults-CMHHS2wK.js";import"./TagDesign-Dou_yO3g.js";import"./utils-7RSyx66T.js";import"./main-Dcm2jhNK.js";import"./index-le1LDJU4.js";import"./Tag-C2md_B1U.js";import"./sys-help-2-SBEgXGVK.js";import"./index-ziIcWBHz.js";import"./Popover-DNjdezPs.js";import"./PopupsCommon.css-WLQXQ1BG.js";import"./FocusableElements-CvTAVvdZ.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-40ebLclU.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-D4Rgk784.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-CUAyzcJr.js";import"./Link-CaNG8aKk.js";import"./chunk-NUUEMKO5-CiBeweD-.js";import"./client-BzooOYO_.js";import"./copy-D2YPqkc4.js";import"./copy-C9H6Zlih.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DGRwmqGf.js";import"./TableOfContent-TNI-4ed_.js";import"./index-CviwTqIE.js";import"./I18nStore-C5VicRCB.js";import"./useStylesheet-BXpvj2j9.js";import"./index-NsU9pK7A.js";import"./index-D5soTVf3.js";import"./Label-DdUk4dNr.js";import"./index-het569gt.js";import"./index-jVoXpPWr.js";import"./addCustomCSSWithScoping-BWTAHsoK.js";import"./index-X9t538J9.js";import"./BusyIndicator-FUNbKGLu.js";import"./index-CkXQ_HSf.js";import"./index-BRIQar7A.js";import"./Avatar-cCdUUE_c.js";import"./employee-CICz8oty.js";import"./index-DRT7K_eN.js";import"./List-CVE8axbO.js";import"./ItemNavigation-Cpw3mMvK.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-VoJW4GtG.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-DKa-BKsy.js";import"./accept-BLyty2Fr.js";import"./slim-arrow-right-Dax12esc.js";import"./index-CxdXzNHJ.js";import"./index-62aK2pp1.js";import"./ResponsivePopover-DHTYZaBG.js";import"./Dialog-Bw4_TdOz.js";import"./settings-CqtXcrqx.js";function i(t){const r={code:"code",h2:"h2",p:"p",pre:"pre",...e(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:d}),`
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
`,o.jsx(c,{})]})}function $o(t={}){const{wrapper:r}={...e(),...t.components};return r?o.jsx(r,{...t,children:o.jsx(i,{...t})}):i(t)}export{$o as default};
