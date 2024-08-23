import{j as o}from"./useIsomorphicLayoutEffect-dLBi2t77.js";import{useMDXComponents as m}from"./index-CcnH5Kt0.js";import{A as s}from"./ArgTypesWithNote-X0iC0dBO.js";import{C as a}from"./ControlsWithNote-B36LYH5w.js";import{D as c}from"./DocsHeader-CJRr3iqV.js";import{F as u}from"./CommandsAndQueries-Dn1LQBEa.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-CE707q_n.js";import{ae as d,af as i,ag as h,ah as x}from"./index-BDpQswrF.js";import{C as l,D as n,W as f}from"./Menu.stories-daSS0hvS.js";import{M as e}from"./index-oyps9rK3.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{e as M}from"./utils-8MPsOdAE.js";import"./index-D-kNwQGo.js";import"./iframe-BnnVgAaS.js";import"../sb-preview/runtime.js";import"./withWebComponent-_WQ2NUTk.js";import"./utils-DNCbgL6O.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-Cey6jF2F.js";import"./decline-BO1MJY4p.js";import"./Icon-F4CTdRe4.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-B1auRMLy.js";import"./parameters-bundle.css-P4kwt3kq.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-T18VK69N.js";import"./alert-Cstw3ukw.js";import"./class-map-BevVk84l.js";import"./Button-B2giC9cI.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-QZuI92fE.js";import"./TagDesign-Dou_yO3g.js";import"./index-sbqOYYIm.js";import"./index-BOsgv6ri.js";import"./Tag-CyMlqXkf.js";import"./sys-help-2-Dka1TfNv.js";import"./index-C1FkI9G8.js";import"./Popover-BSoFyw8J.js";import"./PopupsCommon.css-CgymFC1Z.js";import"./getEffectiveScrollbarStyle-D0HAoBVS.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CdXdU0-i.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-BtPMqoOr.js";import"./BrowserScrollbar.css-DMtZWp5G.js";import"./index-DmY6wLrA.js";import"./Link-D7mI2b7i.js";import"./chunk-HLWAVYOI-CTUj0Wck.js";import"./client-BZNFO7bv.js";import"./copy-ITQxovDS.js";import"./copy-Dq9dQZCS.js";import"./index-DXbGRngL.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DKtOrKyD.js";import"./index-yNJmpRbB.js";import"./I18nStore-DtMIGu-N.js";import"./GitHub-Mark-07DkmEp8.js";import"./TableOfContent-CGtrISih.js";import"./index-B4c19w12.js";import"./Label-COQgloJF.js";import"./index-vVMuEgPM.js";import"./index-BbD_pEYf.js";import"./addCustomCSSWithScoping-C8yl6nHi.js";import"./index-B_blAssf.js";import"./BusyIndicator-C2GpyWwn.js";import"./index-BiiSfO0M.js";import"./index-BCI4iaiP.js";import"./Avatar-DDjIX45r.js";import"./employee-BW41J3Tc.js";import"./_baseUniq-DGDOfdbw.js";import"./_getPrototype-B0L0C3AT.js";import"./index-uexYa9xf.js";import"./index-DrFu-skq.js";import"./Menu-DmTGC6oa.js";import"./slim-arrow-right-D8Qeq0Vj.js";import"./ResponsivePopover-COAYQ03W.js";import"./Dialog-B6BucGWs.js";import"./ValueState-Bg0UWejw.js";import"./List-CSFnPxXa.js";import"./ItemNavigation-CQqeVVOg.js";import"./isElementInView-CjfjvN8v.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-B0Zfttmb.js";import"./CheckBox-DJ3qeSEk.js";import"./accept-Cz9082jw.js";import"./AriaHasPopup-BTjm9d28.js";import"./nav-back-B0X-iLb0.js";import"./ListItemCustom-DmbBIARG.js";import"./index-DW1LPOjY.js";import"./main-BPTHlokf.js";function p(r){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:l}),`
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
