import{j as o}from"./jsx-runtime-D6fbYt3N.js";import{useMDXComponents as e}from"./index-DyCphG7h.js";import{ae as n,af as m}from"./index-OozrRE0z.js";import"./index-DxMbJ7zz.js";import"./index-IFqchKzu.js";import{C as s}from"./ControlsWithNote-C-WbW101.js";import{D as a}from"./DocsHeader-BsFdKmM8.js";import{F as c}from"./CommandsAndQueries-C_UrhdLy.js";import"./index-DysCNOs_.js";import"./WrappingType-CW8URInd.js";import"./Title-CfsRC4A5.js";import{C as d,D as p}from"./ResponsivePopover.stories-C-fPdNXv.js";import"./iframe-CMhLiMAD.js";import"../sb-preview/runtime.js";import"./index-C4cLd1FO.js";import"./index-BcsOxL0D.js";import"./index-DrFu-skq.js";import"./withWebComponent-De1aKRdZ.js";import"./utils-D0KbkLTK.js";import"./useIsomorphicLayoutEffect-m1Y1SyRb.js";import"./slot-_4yKMUwC.js";import"./event-BX8i4Y_x.js";import"./i18n-DEVDpFvK.js";import"./decline-BQlFLB9d.js";import"./Icon-D5-_6Id1.js";import"./Keys-DoZifIQ_.js";import"./parameters-bundle.css-R51uC6BG.js";import"./i18n-defaults-neJWcM66.js";import"./information-jop4MMmq.js";import"./alert-DvgF7qhQ.js";import"./class-map-Bnbjx3OQ.js";import"./Button-KJt5TdaB.js";import"./AriaLabelHelper-C5uDZewF.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BtcFvs45.js";import"./i18n-defaults-CMHHS2wK.js";import"./TagDesign-Dou_yO3g.js";import"./utils-ClwSCWMl.js";import"./main-Dcm2jhNK.js";import"./index-Bt6HV_U8.js";import"./Tag-MITF22Wo.js";import"./sys-help-2-dTYFqJDl.js";import"./index-RaHuZLhN.js";import"./Popover-CjT0D3fA.js";import"./PopupsCommon.css-Bz-EF7PV.js";import"./FocusableElements-CRBMDNv2.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BehhMu6Y.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-D6VK90q7.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-ARMOpZ_f.js";import"./Link-Dgxh_lXY.js";import"./chunk-NUUEMKO5-Dwxw6vgG.js";import"./client-CqEfiX9M.js";import"./copy-DbIR3NTj.js";import"./copy-DL61w25d.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DLtQKbjK.js";import"./TableOfContent-DRym89KV.js";import"./index-C6X81IyJ.js";import"./I18nStore-QcXEI0Jp.js";import"./useStylesheet-9EPR2ucC.js";import"./index-c-ui4WSs.js";import"./index-D2qI6nMR.js";import"./Label-VsV_UpQE.js";import"./index-BwHAVSFf.js";import"./index-ZkmNu-JV.js";import"./addCustomCSSWithScoping-BPWKraku.js";import"./index-CIk6P_fC.js";import"./BusyIndicator-DW1-q5Ls.js";import"./index-CAmAWMmr.js";import"./index-D8X14Ybw.js";import"./Avatar-Kl9ImEjS.js";import"./employee-BzTDAMVi.js";import"./index-CDo61ns5.js";import"./List-Mg2AKiCN.js";import"./ItemNavigation-Dk_Ce4oG.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-B90yF_Xf.js";import"./ValueState-Bg0UWejw.js";import"./CheckBox-C-QwVRXb.js";import"./accept-PVFuYmDa.js";import"./slim-arrow-right-CU2OuNk9.js";import"./index-BBT4RNl7.js";import"./index-CedtYN8-.js";import"./ResponsivePopover-DwtnX3dS.js";import"./Dialog-DUHeHLP-.js";import"./settings-C3-ONh9r.js";function i(t){const r={code:"code",h2:"h2",p:"p",pre:"pre",...e(),...t.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:d}),`
`,o.jsx(a,{since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(r.h2,{id:"example",children:"Example"}),`
`,o.jsx(m,{of:p}),`
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
`,o.jsx(c,{})]})}function Zo(t={}){const{wrapper:r}={...e(),...t.components};return r?o.jsx(r,{...t,children:o.jsx(i,{...t})}):i(t)}export{Zo as default};
