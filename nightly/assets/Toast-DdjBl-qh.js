import{j as o}from"./useIsomorphicLayoutEffect-dLBi2t77.js";import{useMDXComponents as m}from"./index-CcnH5Kt0.js";import{ae as n,af as e}from"./index-D_FWI6jn.js";import"./index-MBnYc5B8.js";import{C as s}from"./ControlsWithNote-Bu2rV-su.js";import{D as a}from"./DocsHeader-C21Q3Bu5.js";import{F as c}from"./CommandsAndQueries-TtazH8EI.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-CE707q_n.js";import{C as h,D as i}from"./Toast.stories-BXSGL_-Y.js";import"./iframe-GLV1doqT.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-DGDOfdbw.js";import"./_getPrototype-B0L0C3AT.js";import"./index-uexYa9xf.js";import"./index-DrFu-skq.js";import"./withWebComponent-_WQ2NUTk.js";import"./utils-DNCbgL6O.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-Cey6jF2F.js";import"./decline-BO1MJY4p.js";import"./Icon-F4CTdRe4.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-B1auRMLy.js";import"./parameters-bundle.css-P4kwt3kq.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-T18VK69N.js";import"./alert-Cstw3ukw.js";import"./class-map-BevVk84l.js";import"./Button-B2giC9cI.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-QZuI92fE.js";import"./TagDesign-Dou_yO3g.js";import"./utils-BNm__hqc.js";import"./main-BPTHlokf.js";import"./index-DcYl8puB.js";import"./Tag-CyMlqXkf.js";import"./sys-help-2-Dka1TfNv.js";import"./index-DRIfac2o.js";import"./Popover-BSoFyw8J.js";import"./PopupsCommon.css-CgymFC1Z.js";import"./getEffectiveScrollbarStyle-D0HAoBVS.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CdXdU0-i.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-BtPMqoOr.js";import"./BrowserScrollbar.css-DMtZWp5G.js";import"./index-BE5CGNgN.js";import"./Link-D7mI2b7i.js";import"./chunk-HLWAVYOI-CUB6LA96.js";import"./client-BZNFO7bv.js";import"./copy-ITQxovDS.js";import"./copy-Dq9dQZCS.js";import"./index-BOHkKvVj.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DKtOrKyD.js";import"./index-yNJmpRbB.js";import"./I18nStore-DtMIGu-N.js";import"./GitHub-Mark-07DkmEp8.js";import"./TableOfContent-CGtrISih.js";import"./index-BPhLdmb1.js";import"./Label-COQgloJF.js";import"./index-gIOD-t4c.js";import"./index-BNFT0sQ5.js";import"./addCustomCSSWithScoping-C8yl6nHi.js";import"./index-WjEfWpDF.js";import"./BusyIndicator-C2GpyWwn.js";import"./index-BxSir5KP.js";import"./index-DAwvdGm8.js";import"./Avatar-DDjIX45r.js";import"./employee-BW41J3Tc.js";import"./index-DQ8IkxiW.js";function p(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:h}),`
`,o.jsx(a,{since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(e,{of:i}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(s,{of:i}),`
`,o.jsx(t.h2,{id:"show-a-toast",children:"Show a toast"}),`
`,o.jsxs(t.p,{children:["You can open and close the ",o.jsx(t.code,{children:"Toaast"})," component in a declarative way using the ",o.jsx(t.code,{children:"open"})," prop."]}),`
`,o.jsx(t.p,{children:o.jsx(t.strong,{children:"Example"})}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-jsx",children:`export function MyComponentWithAToast() {
  const [showToast, setShowToast] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setShowToast(true);
        }}
      >
        Show Toast
      </Button>
      <Toast
        open={showToast}
        onClose={() => {
          setShowToast(false);
        }}
      >
        This is my Toast!
      </Toast>
    </>
  );
}
`})}),`
`,o.jsx(c,{})]})}function Lo(r={}){const{wrapper:t}={...m(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(p,{...r})}):p(r)}export{Lo as default};
