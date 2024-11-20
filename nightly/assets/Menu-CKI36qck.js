import{j as o}from"./jsx-runtime-D6fbYt3N.js";import{useMDXComponents as m}from"./index-DyCphG7h.js";import{A as s}from"./ArgTypesWithNote-CzhpwGby.js";import{C as a}from"./ControlsWithNote-C-WbW101.js";import{D as c}from"./DocsHeader-BsFdKmM8.js";import{F as u}from"./CommandsAndQueries-C_UrhdLy.js";import"./index-IFqchKzu.js";import"./index-DysCNOs_.js";import"./WrappingType-CW8URInd.js";import"./Title-CfsRC4A5.js";import{ae as d,af as i,ag as h,ai as x}from"./index-OozrRE0z.js";import{C as l,D as n,W as f}from"./Menu.stories-DTqv7D6E.js";import{M as e}from"./index-d_jUUJsx.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{e as M}from"./utils-ClwSCWMl.js";import"./index-DxMbJ7zz.js";import"./withWebComponent-De1aKRdZ.js";import"./utils-D0KbkLTK.js";import"./useIsomorphicLayoutEffect-m1Y1SyRb.js";import"./slot-_4yKMUwC.js";import"./event-BX8i4Y_x.js";import"./i18n-DEVDpFvK.js";import"./decline-BQlFLB9d.js";import"./Icon-D5-_6Id1.js";import"./Keys-DoZifIQ_.js";import"./parameters-bundle.css-R51uC6BG.js";import"./i18n-defaults-neJWcM66.js";import"./information-jop4MMmq.js";import"./alert-DvgF7qhQ.js";import"./class-map-Bnbjx3OQ.js";import"./Button-KJt5TdaB.js";import"./AriaLabelHelper-C5uDZewF.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BtcFvs45.js";import"./i18n-defaults-CMHHS2wK.js";import"./TagDesign-Dou_yO3g.js";import"./index-C4cLd1FO.js";import"./index-Bt6HV_U8.js";import"./Tag-MITF22Wo.js";import"./sys-help-2-dTYFqJDl.js";import"./index-RaHuZLhN.js";import"./Popover-CjT0D3fA.js";import"./PopupsCommon.css-Bz-EF7PV.js";import"./FocusableElements-CRBMDNv2.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BehhMu6Y.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-D6VK90q7.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-ARMOpZ_f.js";import"./Link-Dgxh_lXY.js";import"./chunk-NUUEMKO5-Dwxw6vgG.js";import"./iframe-CMhLiMAD.js";import"../sb-preview/runtime.js";import"./client-CqEfiX9M.js";import"./copy-DbIR3NTj.js";import"./copy-DL61w25d.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DLtQKbjK.js";import"./TableOfContent-DRym89KV.js";import"./index-C6X81IyJ.js";import"./I18nStore-QcXEI0Jp.js";import"./useStylesheet-9EPR2ucC.js";import"./index-c-ui4WSs.js";import"./index-D2qI6nMR.js";import"./Label-VsV_UpQE.js";import"./index-BwHAVSFf.js";import"./index-ZkmNu-JV.js";import"./addCustomCSSWithScoping-BPWKraku.js";import"./index-CIk6P_fC.js";import"./BusyIndicator-DW1-q5Ls.js";import"./index-CAmAWMmr.js";import"./index-D8X14Ybw.js";import"./Avatar-Kl9ImEjS.js";import"./employee-BzTDAMVi.js";import"./index-BcsOxL0D.js";import"./index-DrFu-skq.js";import"./Menu-BrjyoePq.js";import"./slim-arrow-right-CU2OuNk9.js";import"./ResponsivePopover-DwtnX3dS.js";import"./Dialog-DUHeHLP-.js";import"./ValueState-Bg0UWejw.js";import"./List-Mg2AKiCN.js";import"./ItemNavigation-Dk_Ce4oG.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-B90yF_Xf.js";import"./CheckBox-C-QwVRXb.js";import"./accept-PVFuYmDa.js";import"./AriaHasPopup-BTjm9d28.js";import"./nav-back-KhphexEb.js";import"./ListItemCustom-BKfvTtdo.js";import"./index-BDnIOEnZ.js";import"./main-Dcm2jhNK.js";function p(r){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:l}),`
`,o.jsx(c,{since:"0.23.0"}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(i,{of:n}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(a,{of:n}),`
`,o.jsx(t.h2,{id:"opening-menus",children:"Opening Menus"}),`
`,o.jsxs(t.p,{children:["You can open and close the ",o.jsx(t.code,{children:"Menu"})," component in a declarative way using the ",o.jsx(t.code,{children:"open"})," and ",o.jsx(t.code,{children:"opener"})," prop."]}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-jsx",children:`const MyComponentWithMenu = () => {
  const buttonRef = useRef(null);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <>
      <Button
        ref={buttonRef}
        onClick={() => {
          setMenuIsOpen(true);
        }}
      >
        Open Action Sheet
      </Button>
      <Menu
        opener={buttonRef.current}
        open={menuIsOpen}
        onClose={() => {
          setMenuIsOpen(false);
        }}
      />
    </>
  );
};
`})}),`
`,o.jsx(t.h2,{id:"more-examples",children:"More examples"}),`
`,o.jsx(t.h3,{id:"menu-with-submenu",children:"Menu with Submenu"}),`
`,o.jsx(i,{of:f}),`
`,o.jsx(h,{children:j}),`
`,o.jsx(t.h2,{id:"menuitem",children:"MenuItem"}),`
`,o.jsx(x,{of:e}),`
`,o.jsx(s,{hideHTMLPropsNote:!0,exclude:M,of:e}),`
`,o.jsx(u,{})]})}function at(r={}){const{wrapper:t}={...m(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(p,{...r})}):p(r)}export{at as default};
