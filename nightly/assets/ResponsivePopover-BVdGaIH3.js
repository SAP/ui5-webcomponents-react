import{j as o}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as m}from"./index-CcnH5Kt0.js";import{ae as e,af as n}from"./index-B0c7zXBl.js";import"./index-CWNpgAgp.js";import"./index-BhOUCmxs.js";import{C as s}from"./ControlsWithNote-DvP0B85M.js";import{D as a}from"./DocsHeader-BjjM2MiE.js";import{F as c}from"./CommandsAndQueries-mr3RTSxi.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-DRIb7dCb.js";import{C as d,D as p}from"./ResponsivePopover.stories-Bcfde28L.js";import"./iframe-UNUnnh18.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./withWebComponent-CBrmozIb.js";import"./utils-DzvJSare.js";import"./useIsomorphicLayoutEffect-Dm78g2BF.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18n-DEVDpFvK.js";import"./decline-G8JuKszz.js";import"./Icon-Babe3lNb.js";import"./Keys-DoZifIQ_.js";import"./parameters-bundle.css-BOSi_lPd.js";import"./i18n-defaults-CzsryEvw.js";import"./information-DxGaCl7C.js";import"./alert-DvJUOzHP.js";import"./class-map-AHFyjGyG.js";import"./Button-BQJgivV9.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-cv-4nGwj.js";import"./i18n-defaults-NO4RLLYJ.js";import"./TagDesign-Dou_yO3g.js";import"./utils-BBlUXS_q.js";import"./main-r7D-Vqmb.js";import"./index-CQvivwrc.js";import"./Tag-BQIFRBJg.js";import"./sys-help-2-BaATxjSF.js";import"./index-CsIMTQX-.js";import"./Popover-BcsvPu0A.js";import"./PopupsCommon.css-D29T90hQ.js";import"./FocusableElements-Di3gf8aJ.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-jJKP5Zvq.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-DE0Tc7Nn.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-BVjwHeu4.js";import"./Link-C9hNQ5a2.js";import"./chunk-NUUEMKO5-Dg2SVZ6b.js";import"./client-BzooOYO_.js";import"./copy-C6evqKWO.js";import"./copy-DU9gbUoW.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DGRwmqGf.js";import"./TableOfContent-DBMEQ9W3.js";import"./index-Fm8sVCyb.js";import"./I18nStore-CvBoH44U.js";import"./useStylesheet-DPBS0l4j.js";import"./index-GDTSF2Z6.js";import"./index-CCisTIRW.js";import"./Label-DyMppobl.js";import"./index-DO5b_HjU.js";import"./index-Clpx57uo.js";import"./addCustomCSSWithScoping-C23b4S6i.js";import"./index-BL8YXbRM.js";import"./BusyIndicator-DsVolhjz.js";import"./index-BO6WyhhL.js";import"./index-pSwmqRCk.js";import"./Avatar-Co3KYXN1.js";import"./employee-D2O7hYRc.js";import"./index-CWRdt4Ya.js";import"./List-CYL2dg9d.js";import"./ItemNavigation-eT-cJPdT.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-dgLOp33S.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-D8nfwBVp.js";import"./accept-CN1NljlK.js";import"./slim-arrow-right--3dMC0uI.js";import"./index-DNJmaBhN.js";import"./index-CQ6SpoFv.js";import"./ResponsivePopover-C14Kx61Y.js";import"./Dialog-DfoKJF0B.js";import"./settings-B6iKGAf7.js";function i(t){const r={code:"code",h2:"h2",p:"p",pre:"pre",...m(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:d}),`
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
