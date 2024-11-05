import{j as o}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as m}from"./index-CcnH5Kt0.js";import{A as s}from"./ArgTypesWithNote-DRTJYAkp.js";import{C as a}from"./ControlsWithNote-BH4nV7BR.js";import{D as c}from"./DocsHeader-Cw5aZbCi.js";import{F as u}from"./CommandsAndQueries-C5C1DQU5.js";import"./index-DB33mWVs.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-acGyIFev.js";import{ae as d,af as i,ag as h,ai as x}from"./index-Cwzis2co.js";import{C as l,D as n,W as f}from"./Menu.stories-XJItJIDt.js";import{M as e}from"./index-BzmbhcPc.js";import{S as j}from"./SubcomponentsSection-BVy4lpQe.js";import{e as M}from"./utils-CFboYzau.js";import"./index-D9yJfDXX.js";import"./withWebComponent-v3aPz19k.js";import"./utils-BWMMwCMQ.js";import"./useIsomorphicLayoutEffect-yry-y2Q-.js";import"./slot-_4yKMUwC.js";import"./event-BX8i4Y_x.js";import"./i18n-DEVDpFvK.js";import"./decline-m373cvJP.js";import"./Icon-Bq3V4Dpj.js";import"./Keys-DoZifIQ_.js";import"./parameters-bundle.css-R51uC6BG.js";import"./i18n-defaults-neJWcM66.js";import"./information-BZEj3R5z.js";import"./alert-C_n2K4SQ.js";import"./class-map-CH6JYcvP.js";import"./Button-BOw4gYNT.js";import"./AriaLabelHelper-C5uDZewF.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BxgbG8pQ.js";import"./i18n-defaults-CMHHS2wK.js";import"./TagDesign-Dou_yO3g.js";import"./index-sbqOYYIm.js";import"./index-le1LDJU4.js";import"./Tag-C2md_B1U.js";import"./sys-help-2-SBEgXGVK.js";import"./index-ziIcWBHz.js";import"./Popover-DNjdezPs.js";import"./PopupsCommon.css-WLQXQ1BG.js";import"./FocusableElements-CvTAVvdZ.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-40ebLclU.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-D4Rgk784.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-CUAyzcJr.js";import"./Link-CaNG8aKk.js";import"./chunk-NUUEMKO5-ClEvVgvO.js";import"./iframe-DuItRAn-.js";import"../sb-preview/runtime.js";import"./client-BzooOYO_.js";import"./copy-D2YPqkc4.js";import"./copy-C9H6Zlih.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DGRwmqGf.js";import"./TableOfContent-TNI-4ed_.js";import"./index-CyA6ssbm.js";import"./I18nStore-C5VicRCB.js";import"./useStylesheet-BXpvj2j9.js";import"./index-DmoPyW9s.js";import"./index-D5soTVf3.js";import"./Label-DdUk4dNr.js";import"./index-DYGApiRr.js";import"./index-jVoXpPWr.js";import"./addCustomCSSWithScoping-BWTAHsoK.js";import"./index-X9t538J9.js";import"./BusyIndicator-FUNbKGLu.js";import"./index-CkXQ_HSf.js";import"./index-BRIQar7A.js";import"./Avatar-cCdUUE_c.js";import"./employee-CICz8oty.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./Menu-BWRsJ-vp.js";import"./slim-arrow-right-Dax12esc.js";import"./ResponsivePopover-DHTYZaBG.js";import"./Dialog-Bw4_TdOz.js";import"./ValueState-Bg0UWejw.js";import"./List-CVE8axbO.js";import"./ItemNavigation-Cpw3mMvK.js";import"./getNormalizedTarget-C4mxORXI.js";import"./debounce-TTkz9ISH.js";import"./TabbableElements-BJJu_CDc.js";import"./RadioButton-VoJW4GtG.js";import"./CheckBox-DKa-BKsy.js";import"./accept-BLyty2Fr.js";import"./AriaHasPopup-BTjm9d28.js";import"./nav-back-DgQ3nuRb.js";import"./ListItemCustom-S_X6ur0g.js";import"./index-DhSHIR6I.js";import"./main-Dcm2jhNK.js";function p(r){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(d,{of:l}),`
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
