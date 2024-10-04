import{j as o}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as m}from"./index-CcnH5Kt0.js";import{A as s}from"./ArgTypesWithNote-2ftS2V-v.js";import{C as a}from"./ControlsWithNote-DvP0B85M.js";import{D as c}from"./DocsHeader-BjjM2MiE.js";import{F as u}from"./CommandsAndQueries-mr3RTSxi.js";import"./index-BhOUCmxs.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-DRIb7dCb.js";import{ae as d,af as i,ag as h,ai as x}from"./index-B0c7zXBl.js";import{C as l,D as n,W as f}from"./Menu.stories-C55sLmoG.js";import{M as e}from"./index-BtREqXXN.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{e as M}from"./utils-BBlUXS_q.js";import"./index-CWNpgAgp.js";import"./withWebComponent-CBrmozIb.js";import"./utils-DzvJSare.js";import"./useIsomorphicLayoutEffect-Dm78g2BF.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18n-DEVDpFvK.js";import"./decline-G8JuKszz.js";import"./Icon-Babe3lNb.js";import"./Keys-DoZifIQ_.js";import"./parameters-bundle.css-BOSi_lPd.js";import"./i18n-defaults-CzsryEvw.js";import"./information-DxGaCl7C.js";import"./alert-DvJUOzHP.js";import"./class-map-AHFyjGyG.js";import"./Button-BQJgivV9.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-cv-4nGwj.js";import"./i18n-defaults-NO4RLLYJ.js";import"./TagDesign-Dou_yO3g.js";import"./index-sbqOYYIm.js";import"./index-CQvivwrc.js";import"./Tag-BQIFRBJg.js";import"./sys-help-2-BaATxjSF.js";import"./index-CsIMTQX-.js";import"./Popover-BcsvPu0A.js";import"./PopupsCommon.css-D29T90hQ.js";import"./FocusableElements-Di3gf8aJ.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-jJKP5Zvq.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-DE0Tc7Nn.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-BVjwHeu4.js";import"./Link-C9hNQ5a2.js";import"./chunk-NUUEMKO5-Dg2SVZ6b.js";import"./iframe-UNUnnh18.js";import"../sb-preview/runtime.js";import"./client-BzooOYO_.js";import"./copy-C6evqKWO.js";import"./copy-DU9gbUoW.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DGRwmqGf.js";import"./TableOfContent-DBMEQ9W3.js";import"./index-Fm8sVCyb.js";import"./I18nStore-CvBoH44U.js";import"./useStylesheet-DPBS0l4j.js";import"./index-GDTSF2Z6.js";import"./index-CCisTIRW.js";import"./Label-DyMppobl.js";import"./index-DO5b_HjU.js";import"./index-Clpx57uo.js";import"./addCustomCSSWithScoping-C23b4S6i.js";import"./index-BL8YXbRM.js";import"./BusyIndicator-DsVolhjz.js";import"./index-BO6WyhhL.js";import"./index-pSwmqRCk.js";import"./Avatar-Co3KYXN1.js";import"./employee-D2O7hYRc.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./Menu-Rnx2T2xi.js";import"./slim-arrow-right--3dMC0uI.js";import"./ResponsivePopover-C14Kx61Y.js";import"./Dialog-DfoKJF0B.js";import"./ValueState-Bg0UWejw.js";import"./List-CYL2dg9d.js";import"./ItemNavigation-eT-cJPdT.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-dgLOp33S.js";import"./CheckBox-D8nfwBVp.js";import"./accept-CN1NljlK.js";import"./AriaHasPopup-BTjm9d28.js";import"./nav-back-C40XmhQg.js";import"./ListItemCustom-DaBOJrID.js";import"./index-CCOM7397.js";import"./main-r7D-Vqmb.js";function p(r){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:l}),`
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
`,o.jsx(u,{})]})}function ut(r={}){const{wrapper:t}={...m(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(p,{...r})}):p(r)}export{ut as default};
