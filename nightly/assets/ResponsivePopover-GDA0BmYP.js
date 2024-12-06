import{j as o}from"./jsx-runtime-D6fbYt3N.js";import{useMDXComponents as e}from"./index-DyCphG7h.js";import{ae as m,af as n}from"./index-DJJuuTjh.js";import"./index-CGMQ867X.js";import"./index-4AWnfe5G.js";import{C as s}from"./ControlsWithNote-Dg9OPtkt.js";import{D as a}from"./DocsHeader-CynLgDDH.js";import{F as c}from"./CommandsAndQueries-scaoTnNC.js";import"./index-DysCNOs_.js";import"./WrappingType-CW8URInd.js";import"./Title-B_OApkG5.js";import{C as d,D as p}from"./ResponsivePopover.stories-gMzE0yi9.js";import"./iframe-BUDYU4Yz.js";import"../sb-preview/runtime.js";import"./index-C4cLd1FO.js";import"./index-BcsOxL0D.js";import"./index-DrFu-skq.js";import"./withWebComponent-D2290JWW.js";import"./utils-rQ0RHFcC.js";import"./useIsomorphicLayoutEffect-UXkgNLQC.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-DEVDpFvK.js";import"./decline-eE5kkR_d.js";import"./Icon-DNC_Q8W5.js";import"./Keys-CAuuEE_3.js";import"./parameters-bundle.css-DlWxkghp.js";import"./i18n-defaults-neJWcM66.js";import"./information-DiNgtIoE.js";import"./alert-C1PxT_zH.js";import"./class-map-BHSYgJ9u.js";import"./Button-B25Pr19o.js";import"./AccessibilityTextsHelper-Beeze-lh.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-Cvj6MDOu.js";import"./i18n-defaults-B_32hVC3.js";import"./TagDesign-Dou_yO3g.js";import"./utils-Dv4NFHG1.js";import"./main-BwlHOnYP.js";import"./index-BxMxvzK4.js";import"./Tag-Db0_Pjzi.js";import"./sys-help-2-CxYMJcq0.js";import"./index-x-kKtoec.js";import"./Popover-D4qFMFR_.js";import"./PopupsCommon.css-Ds9l5hmK.js";import"./FocusableElements-BUUEY9i6.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-h_-KGn42.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-CKH5i8-O.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-BihYjSJH.js";import"./Link-Bfcngofg.js";import"./chunk-NUUEMKO5-D2uxkT9c.js";import"./client-CqEfiX9M.js";import"./copy-B6jpU8Sl.js";import"./copy-ClT0iCqi.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DLtQKbjK.js";import"./TableOfContent-DRym89KV.js";import"./index-BJDgZ3Bh.js";import"./I18nStore-D-72hezK.js";import"./useStylesheet-DzoyRzuT.js";import"./index-gSd2kvlA.js";import"./index-CaG1LRe9.js";import"./Label-DljH_Hma.js";import"./index-DczEHKsk.js";import"./index-B56Kl_es.js";import"./Text-iUXAjx9E.js";import"./addCustomCSSWithScoping-DWJN-AXE.js";import"./index-C7mFJBZY.js";import"./BusyIndicator-DeXFd7cw.js";import"./index-ByfP8321.js";import"./index-VGStP4CR.js";import"./Avatar-CSh84RvD.js";import"./employee-kfgjySdt.js";import"./index-DJM4FGTD.js";import"./List-iVJpcOGI.js";import"./ItemNavigation-BFACp1PV.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-C2mR3o4F.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-DyUotHW-.js";import"./accept-dLMNjkw8.js";import"./slim-arrow-right-BHNRKwMo.js";import"./index-DWk0l7kn.js";import"./index-DFIkXerG.js";import"./ResponsivePopover-D-Js_a1v.js";import"./Dialog-DoCpeBDB.js";import"./settings-CKftnbjn.js";function i(t){const r={code:"code",h2:"h2",p:"p",pre:"pre",...e(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(m,{of:d}),`
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
