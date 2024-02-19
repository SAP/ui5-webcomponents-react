import{j as o}from"./jsx-runtime-DtaoT6pD.js";import{F as n}from"./ProjectTemplate-vvrrxwwo.js";import{C as s}from"./ControlsWithNote-q_wTWS6U.js";import{D as a}from"./DocsHeader-8ZjhUFpK.js";import"./index-OjgoNOWw.js";import{M as c,b as h}from"./index-FDawRrfL.js";import{C as d,D as p}from"./Toast.stories-t2xXouOW.js";import{u as e}from"./index-RwE9nQVW.js";import"./react-jss.esm-tmBtHfec.js";import"./index-IIsl4fZH.js";import"./iframe-JJ8U8ZEi.js";import"../sb-preview/runtime.js";import"./UI5Element-oLeGfnU4.js";import"./Language-aesXCmkP.js";import"./VersionInfo-AzzP9wS2.js";import"./CustomElementsScopeUtils-IpwVqUeG.js";import"./withWebComponent--kEkWNJH.js";import"./utils-rNFQc6Ui.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./event-lM5HanI-.js";import"./i18nBundle-YvxCnun_.js";import"./decline-KM5PgfOz.js";import"./Icons-B0Lm9Xgp.js";import"./i18n-defaults-SIMqfZL6.js";import"./information-phWr88nL.js";import"./alert-xBUzpOmY.js";import"./class-map-Y-YjCFqX.js";import"./Icon-s-QlKO5-.js";import"./Keys-ZEuNsqmZ.js";import"./parameters-bundle.css-mPCp9TQx.js";import"./Button-ui6PL7pJ.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./willShowContent-MSvI8sYo.js";import"./HasPopup-9BAMrqbD.js";import"./i18n-defaults-CQMo-g9a.js";import"./chunk-HLWAVYOI-2Fyj43Fd.js";import"./react-18-1WT2dSvK.js";import"./index-QYh6idnL.js";import"./index-i2bTG4Yy.js";import"./clsx-Zbgk8kpT.js";import"./index-t4EU0Vfa.js";import"./Label-z6oc8zzv.js";import"./WrappingType-avPrqc94.js";import"./index-k3tKYkpx.js";import"./index-hueAaFBn.js";import"./Link-lWkth14S.js";import"./index-JS48lZ5r.js";import"./Popover-RS8IZQFL.js";import"./Integer-kog98579.js";import"./PopupUtils-7MJMGT2m.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-umKiUwKH.js";import"./FocusableElements-o5zpB6FE.js";import"./isElementHidden-d3-Fo4V6.js";import"./getEffectiveScrollbarStyle-Gz48PLeD.js";import"./ResizeHandler-pk5_zz-J.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-5njKSr-C.js";import"./BrowserScrollbar.css-nSPAj6kk.js";import"./index-YN01GDwL.js";import"./i18n-defaults-1NWI3C8K.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-z21dC6BM.js";import"./ModalsContext-T9gUbaXC.js";import"./CssSizeVariables-HFpqBBhk.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-0Qf_GZqW.js";import"./index-gftLmJZS.js";import"./index-ZUj8_ir8.js";import"./Avatar-sqKRaJp5.js";import"./employee-PrBJTXfy.js";import"./index-rUsTL3Wn.js";import"./utils--DKBnLv8.js";import"./index-DTHfSWNg.js";import"./sys-help-2-KdHoR5uo.js";import"./copy-rq9qK5qL.js";import"./GitHub-Mark-JYujJlUX.js";import"./TableOfContent-q4c-zjdy.js";import"./_baseForOwn-a7AeJH13.js";import"./mapValues-_kP3xGjM.js";import"./_baseUniq-_JZHYp0e.js";import"./index-PPLHz8o0.js";import"./index-7I0hdIjK.js";import"./index-pnu29CdL.js";function Ko(r={}){const{wrapper:i}=Object.assign({},e(),r.components);return i?o.jsx(i,Object.assign({},r,{children:o.jsx(m,{})})):m();function m(){const t=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre"},e(),r.components);return o.jsxs(o.Fragment,{children:[o.jsx(c,{of:d}),`
`,o.jsx(a,{since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(h,{of:p}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(s,{of:p}),`
`,o.jsx(t.h2,{id:"show-a-toast",children:"Show a toast"}),`
`,o.jsxs(t.p,{children:["The ",o.jsx(t.code,{children:"Toast"}),` component has an imperative API for getting displayed. It will not be displayed just because it is part of the DOM.
In order to show the Toast, you have to get a reference to the `,o.jsx(t.code,{children:"Toast"})," DOM element and call the ",o.jsx(t.code,{children:"show"}),`-method.
You can either access the DOM element by using a React `,o.jsx(t.code,{children:"ref"})," or work with IDs."]}),`
`,o.jsx(t.p,{children:o.jsx(t.strong,{children:"Example"})}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-jsx",children:`export const MyComponentWithAToast() {
  const toast = useRef(null);

  const showToast = () => {
    toast.current.show();
  };
  return (
    <ThemeProvider>
      <Button onClick={showToast}>Show Toast</Button>
      <Toast ref={toast}>This is my Toast!</Toast>
    </ThemeProvider>
  );
}
`})}),`
`,o.jsx(n,{})]})}}export{Ko as default};
