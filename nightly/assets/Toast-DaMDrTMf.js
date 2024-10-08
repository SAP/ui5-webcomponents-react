import{j as o}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as m}from"./index-CcnH5Kt0.js";import{ae as n,af as e}from"./index-ikRyiDdl.js";import"./index-BBbw6PDx.js";import"./index-BMWi9f96.js";import{C as s}from"./ControlsWithNote-B_maslzq.js";import{D as a}from"./DocsHeader-CdBRhoFh.js";import{F as c}from"./CommandsAndQueries-BHJclapQ.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-CbLKT2ZM.js";import{C as h,D as i}from"./Toast.stories-BUJI9pY5.js";import"./iframe-Cr6jJkq5.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./withWebComponent-m_Fq5lNf.js";import"./utils-DzvJSare.js";import"./useIsomorphicLayoutEffect-Dm78g2BF.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18n-DEVDpFvK.js";import"./decline-C1nyYXx8.js";import"./Icon-CqlVqIII.js";import"./Keys-DoZifIQ_.js";import"./parameters-bundle.css-BOSi_lPd.js";import"./i18n-defaults-CzsryEvw.js";import"./information-BCemT9Q2.js";import"./alert-RTfmNTjg.js";import"./class-map-De2mf49U.js";import"./Button-CN-iJYg4.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-RVqvTAYx.js";import"./i18n-defaults-NO4RLLYJ.js";import"./TagDesign-Dou_yO3g.js";import"./utils-D8SU27q4.js";import"./main-r7D-Vqmb.js";import"./index-CU0BOneF.js";import"./Tag-DfB_qukv.js";import"./sys-help-2-TCPa0dFt.js";import"./index-DRQZYbIB.js";import"./Popover-CSyvOuD4.js";import"./PopupsCommon.css-C0UbsxGP.js";import"./FocusableElements-3aC5Xvwv.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DIO-YqVA.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-TzMr6uTh.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-Ci7P8uUK.js";import"./Link-BieF31O5.js";import"./chunk-NUUEMKO5-Bg6TYWyy.js";import"./client-BzooOYO_.js";import"./copy-Bps3bwPx.js";import"./copy-9aGvoyGQ.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DGRwmqGf.js";import"./TableOfContent-DBMEQ9W3.js";import"./index-CVTofKBC.js";import"./I18nStore-C2pCP-g5.js";import"./useStylesheet-DPBS0l4j.js";import"./index-atmFgQVQ.js";import"./index-CHC2M3KR.js";import"./Label-9bI6U8uT.js";import"./index-CzucBW9v.js";import"./index-Nq8WqOTU.js";import"./addCustomCSSWithScoping-D6Q9hDjm.js";import"./index-BHJpfsCV.js";import"./BusyIndicator-DyFdFCo7.js";import"./index-PL__NMMH.js";import"./index-CnaX4kM6.js";import"./Avatar-ClyMV4d2.js";import"./employee-q-Be_VIK.js";import"./index-3mEZxYhO.js";function p(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:h}),`
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
`,o.jsx(c,{})]})}function Po(r={}){const{wrapper:t}={...m(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(p,{...r})}):p(r)}export{Po as default};
