import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as m}from"./index-DpYXPI8c.js";import{M as n,C as s}from"./index-DlL6FMAf.js";import"./index-BPgdWBHk.js";import"./index-DgUTxOsI.js";import{C as e}from"./ControlsWithNote-Cu8OZQDR.js";import{D as a}from"./DocsHeader-Cse3LmOJ.js";import{F as c}from"./CommandsAndQueries-B_lAiKwu.js";import"./index-ChI72X44.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-DKHf5Ic-.js";import{C as h,D as i}from"./Toast.stories-m9U5QF6G.js";import"./iframe-SXSzSTrC.js";import"./index-DnYn5RTv.js";import"./index-BS9IDQLN.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./jsx-runtime-DITkwERB.js";import"./CustomElementsScope-CRlaEhjH.js";import"./EventProvider-ChtD9rRX.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Button-BhJpItN3.js";import"./Keys-B3oBAe0t.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./Icon-g4jJGwIi.js";import"./parameters-bundle.css-DHLNbl9v.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-CtkDPpba.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./i18n-defaults-BXUwkpCs.js";import"./decline-Bk6V92qv.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-B1L_xjDU.js";import"./information-BQmhacxY.js";import"./sys-enter-2-3Y2FtBDI.js";import"./sys-enter-2-DnGfeGAh.js";import"./TagDesign-Ga50IS6u.js";import"./utils-DYolDXiB.js";import"./main-BZcY5MQX.js";import"./index-bxj-dcWC.js";import"./Tag-DJG7ubt1.js";import"./sys-help-2-WHz-04ii.js";import"./index-C5x9Zqi4.js";import"./Link-C_1Qeegk.js";import"./index-vVWMke_Z.js";import"./Popover-C53QSKRD.js";import"./PopupsCommon.css-BG-751as.js";import"./FocusableElements-noNskoYV.js";import"./isElementHidden-B4HqmI2E.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Cex6U3jO.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./copy-BcmnvuMK.js";import"./copy-BjWKS8Rq.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-k522kM_X.js";import"./TableOfContent-DfYxHRnX.js";import"./index-C9xUVuEA.js";import"./I18nStore-BBWtp4Wg.js";import"./useStylesheet-BYtqX5T7.js";import"./index-BZHnAAif.js";import"./index-B_fY4UqP.js";import"./Label-Cw3xmdjW.js";import"./index-D5gqvCq0.js";import"./index-BZypq4CF.js";import"./Text-BBBHwYsI.js";import"./preview-BOnI_xY4.js";import"./DocsRenderer-CFRXHY34-Ce2GYkKD.js";import"./react-18-B55prW7j.js";import"./addCustomCSSWithScoping-bWjUKP8X.js";import"./index-CbnmVlWA.js";import"./BusyIndicator-DTHwLaG3.js";import"./index-c5_gOmO2.js";import"./index-II2KQk7A.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DyHFsBXc.js";import"./index-CrOEKd76.js";function p(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:h}),`
`,o.jsx(a,{since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(s,{of:i}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(e,{of:i}),`
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
