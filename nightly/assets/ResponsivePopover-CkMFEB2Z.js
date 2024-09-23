import{j as o}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as m}from"./index-CcnH5Kt0.js";import{ae as e,af as n}from"./index-DrLtO5Rq.js";import"./index-D7Nv88Gg.js";import"./index-CokF5Zho.js";import{C as s}from"./ControlsWithNote-D1f7Vje7.js";import{D as a}from"./DocsHeader-CKQ5zb9L.js";import{F as c}from"./CommandsAndQueries-B4Ppx7kQ.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-CAqRFLM1.js";import{C as d,D as p}from"./ResponsivePopover.stories-D3xcMYgv.js";import"./iframe-BcGS6aus.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./withWebComponent-BS26LpJo.js";import"./utils-4GUSeNxV.js";import"./useIsomorphicLayoutEffect-BErBnqdY.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-BUZJrdsA.js";import"./decline-ChPQ5Vpc.js";import"./Icon-BwGmtu7y.js";import"./Keys-D1SxbTOd.js";import"./parameters-bundle.css-Bga-3Zi8.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-C_Bqjk9j.js";import"./alert-qaECYIyO.js";import"./class-map-CcXho7vk.js";import"./Button-BoqZ1Nk6.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BJ6YdIbZ.js";import"./i18n-defaults-DyAOnJXW.js";import"./TagDesign-Dou_yO3g.js";import"./utils-DMarSLuI.js";import"./main-C6oD7XT2.js";import"./index-CDPCSlUD.js";import"./Tag-C2WChDcP.js";import"./sys-help-2-KG0RzPfQ.js";import"./index-Je_4VAbv.js";import"./Popover-CC4eno7O.js";import"./PopupsCommon.css-D2k_TiiU.js";import"./FocusableElements-DE2dOMez.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CmgjED1E.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-DYOeniYq.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-B8rq_Cwn.js";import"./Link-DWmmrhq6.js";import"./chunk-NUUEMKO5-Csrc5wWa.js";import"./client-BzooOYO_.js";import"./copy-CLCnF9Ex.js";import"./copy-B8ijgEE_.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DGRwmqGf.js";import"./TableOfContent-bhM-b_eu.js";import"./index-d8G8mj0l.js";import"./I18nStore-ZvXQBe85.js";import"./useStylesheet-LPUx0SP2.js";import"./index-DE-YdAS_.js";import"./index-D5w6Jnaw.js";import"./Label-DeMESwab.js";import"./index-DOubndiy.js";import"./index-CHNB8-uH.js";import"./addCustomCSSWithScoping-nMrqEq1r.js";import"./index-DYrmYIPb.js";import"./BusyIndicator-DLv3RVXJ.js";import"./index-Z34fJdHI.js";import"./index-BNw2TIlH.js";import"./Avatar-D0wBket6.js";import"./employee-BnxYOghN.js";import"./index-B_IGV7Gn.js";import"./List-BLM_yTQc.js";import"./ItemNavigation-DY9WPMGj.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-roj2v4D7.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-Bh-hd90L.js";import"./accept-DENHAmCe.js";import"./slim-arrow-right-BNXaNlko.js";import"./index-6oNunCYn.js";import"./index-ze66iUFu.js";import"./ResponsivePopover-DRXUZ-Yn.js";import"./Dialog-zzL9k4HV.js";import"./settings-DVYQJHnP.js";function i(t){const r={code:"code",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:d}),`
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
