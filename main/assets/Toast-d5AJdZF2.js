import{j as o}from"./jsx-runtime-DtaoT6pD.js";import{F as n}from"./ProjectTemplate-g4_oJfcI.js";import{C as s}from"./ControlsWithNote-5l-aHtk0.js";import{D as a}from"./DocsHeader-EIhx5G9d.js";import"./index-OjgoNOWw.js";import{M as c,b as h}from"./index-lBmMXBRL.js";import{C as d,D as p}from"./Toast.stories-EU3wBSV7.js";import{u as e}from"./index-RwE9nQVW.js";import"./react-jss.esm-tmBtHfec.js";import"./index-meZahiq7.js";import"./iframe-2XDoCofd.js";import"../sb-preview/runtime.js";import"./UI5Element-PDhTXJ0K.js";import"./Language-gwOe_M78.js";import"./VersionInfo-zmLW7G4m.js";import"./CustomElementsScopeUtils-StEZUlti.js";import"./withWebComponent-76pUbYpZ.js";import"./utils-axAaCEhS.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./event-lM5HanI-.js";import"./i18nBundle-kNlRgZSb.js";import"./decline-CAXtFmDv.js";import"./Icons-HU_OsjUX.js";import"./i18n-defaults-SIMqfZL6.js";import"./information-zrOk1lB0.js";import"./alert-KKDABsAn.js";import"./class-map-bhYzoXeo.js";import"./Icon-ddwK7i-Z.js";import"./Keys-ZEuNsqmZ.js";import"./parameters-bundle.css-mPCp9TQx.js";import"./Button-roBYNtMK.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./willShowContent-MSvI8sYo.js";import"./HasPopup-9BAMrqbD.js";import"./i18n-defaults-fXrRGy4a.js";import"./chunk-HLWAVYOI-dLK_cWne.js";import"./react-18-1WT2dSvK.js";import"./index-QYh6idnL.js";import"./index-6f3-3TZK.js";import"./clsx-Zbgk8kpT.js";import"./index-8eL0vHRz.js";import"./Label-FF9RWaAe.js";import"./WrappingType-avPrqc94.js";import"./index-eP3JKY0z.js";import"./index-iaiiRWjs.js";import"./Link-04aNnizE.js";import"./index-mAviODG6.js";import"./Popover-617eJuHR.js";import"./Integer-kog98579.js";import"./PopupUtils-cNe84Tf4.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-xdOKPs4T.js";import"./FocusableElements--oBMpjjl.js";import"./isElementHidden-d3-Fo4V6.js";import"./getEffectiveScrollbarStyle-Gz48PLeD.js";import"./ResizeHandler-dJr96v2O.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-hPGZuWy3.js";import"./BrowserScrollbar.css-SfEgvsVX.js";import"./index-lPldneR1.js";import"./i18n-defaults-ZVLl3Qs7.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-kqR30--a.js";import"./ModalsContext-T9gUbaXC.js";import"./CssSizeVariables-HFpqBBhk.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-OxCD80Mt.js";import"./index-AdGD2DQc.js";import"./index--dfLuTU_.js";import"./Avatar-Zr4UGbbl.js";import"./employee-_6wWdZWc.js";import"./index-3RC6UYxh.js";import"./utils-DIwrVD7e.js";import"./index-zzxpFpJQ.js";import"./sys-help-2-WpiGIDvZ.js";import"./copy-yGGaKiyA.js";import"./GitHub-Mark-JYujJlUX.js";import"./TableOfContent-7GBBFgSl.js";import"./_baseForOwn-a7AeJH13.js";import"./mapValues-_kP3xGjM.js";import"./_baseUniq-_JZHYp0e.js";import"./index-PPLHz8o0.js";import"./index-7I0hdIjK.js";import"./index-q_XMv_J5.js";function Ko(r={}){const{wrapper:i}=Object.assign({},e(),r.components);return i?o.jsx(i,Object.assign({},r,{children:o.jsx(m,{})})):m();function m(){const t=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre"},e(),r.components);return o.jsxs(o.Fragment,{children:[o.jsx(c,{of:d}),`
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
