import{j as o}from"./useIsomorphicLayoutEffect-dLBi2t77.js";import{useMDXComponents as m}from"./index-CcnH5Kt0.js";import{A as s}from"./ArgTypesWithNote-DZ6sD7Mn.js";import{C as a}from"./ControlsWithNote-BYJvhy0X.js";import{D as c}from"./DocsHeader-8echqDW0.js";import{F as u}from"./CommandsAndQueries-Dmj4MMOR.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-VVPV2V2E.js";import{ae as d,af as i,ag as h,ah as x}from"./index-B3QzLHf_.js";import{C as l,D as n,W as f}from"./Menu.stories-DRyByOpN.js";import{M as e}from"./index-CyavOSLL.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{e as M}from"./utils-XiK6YCAG.js";import"./index-DRfkeUYX.js";import"./withWebComponent-6t4MTiZ-.js";import"./utils-DNCbgL6O.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-BwSTHZvs.js";import"./decline-Chobtb_o.js";import"./Icon-CX51DRZ7.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-B1auRMLy.js";import"./parameters-bundle.css-P4kwt3kq.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-CqSTuHKy.js";import"./alert-B73TZsJE.js";import"./class-map-D9jLILSY.js";import"./Button-ein9a_YJ.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-sl2p4TZC.js";import"./TagDesign-Dou_yO3g.js";import"./index-sbqOYYIm.js";import"./index-Cm_tUheZ.js";import"./Tag-c1CyRsEh.js";import"./sys-help-2-7U7Pl5Aq.js";import"./index-vpkDktJu.js";import"./Popover-GyfEL2jk.js";import"./PopupsCommon.css-BGI8Fb7B.js";import"./getEffectiveScrollbarStyle-77nvIAYC.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BL_t98Y7.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-CAZGB3vF.js";import"./BrowserScrollbar.css-BVuR1u6R.js";import"./index-B0scv0mR.js";import"./Link-CUceCK4r.js";import"./chunk-HLWAVYOI-BkFLgnuG.js";import"./iframe-DlkLrGOd.js";import"../sb-preview/runtime.js";import"./client-BZNFO7bv.js";import"./copy-DHLQo4vt.js";import"./copy-CiUq4Sby.js";import"./index-DXbGRngL.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DKtOrKyD.js";import"./index-BJ8B3rVx.js";import"./I18nStore-BIJrl7SC.js";import"./GitHub-Mark-07DkmEp8.js";import"./TableOfContent-B7cg-o8h.js";import"./index-DW76Co1x.js";import"./Label-tm0HKFXd.js";import"./index-Byuai5Dz.js";import"./index-F_io_HrK.js";import"./addCustomCSSWithScoping-Cr3Tnfsf.js";import"./index-DJqlzZjw.js";import"./BusyIndicator-DZWv4Y44.js";import"./index-C73Y2rlh.js";import"./index-v2bCH09b.js";import"./Avatar-Dqp3bR5c.js";import"./employee-B_Kids1O.js";import"./_baseUniq-DGDOfdbw.js";import"./_getPrototype-B0L0C3AT.js";import"./index-CFFTH5x_.js";import"./index-DrFu-skq.js";import"./Menu-rBIgodxR.js";import"./slim-arrow-right-BMq-ffCT.js";import"./ResponsivePopover-Csck98zi.js";import"./Dialog-CivsYkRJ.js";import"./ValueState-Bg0UWejw.js";import"./List-Ca2e511E.js";import"./ItemNavigation-C_v-ZRVk.js";import"./isElementInView-CjfjvN8v.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-CNo07ETU.js";import"./CheckBox-DbyMg4AH.js";import"./accept-C_bZLOp6.js";import"./AriaHasPopup-BTjm9d28.js";import"./nav-back-_Qxd84YY.js";import"./ListItemCustom-CvRwbu04.js";import"./index-K5jZT26J.js";import"./main-BPTHlokf.js";function p(r){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:l}),`
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
`,o.jsx(u,{})]})}function ct(r={}){const{wrapper:t}={...m(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(p,{...r})}):p(r)}export{ct as default};
