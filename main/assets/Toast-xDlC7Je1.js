import{j as o}from"./jsx-runtime-DtaoT6pD.js";import{F as n}from"./ProjectTemplate-qbLR_GCz.js";import{C as s}from"./ControlsWithNote-pJsVsakK.js";import{D as a}from"./DocsHeader-xlakKj2X.js";import"./index-OjgoNOWw.js";import{M as c,b as h}from"./index-j464sglR.js";import{C as d,D as p}from"./Toast.stories-hvzfIkNK.js";import{u as e}from"./index-RwE9nQVW.js";import"./react-jss.esm-fzYOEaou.js";import"./theming.esm-g_6oAtQL.js";import"./index-gbwDuwvH.js";import"./iframe-lvTVDQ9h.js";import"../sb-preview/runtime.js";import"./UI5Element-i6xEMhb-.js";import"./Boot-ZMdbUkXu.js";import"./VersionInfo-szri6OiK.js";import"./CustomElementsScopeUtils-E-jGiXBT.js";import"./withWebComponent-WsMVk7rH.js";import"./utils-TqRdq3Pf.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./event-lM5HanI-.js";import"./i18nBundle-QOmUTBjc.js";import"./decline-9_Y3Taaa.js";import"./Icons-2Vjs2kvs.js";import"./i18n-defaults-SIMqfZL6.js";import"./information-5Caf1O3N.js";import"./alert-80rGR3Mk.js";import"./class-map-QoPRPm_o.js";import"./Icon-ONjMh5dV.js";import"./Keys-ZEuNsqmZ.js";import"./parameters-bundle.css-I2VxmuZZ.js";import"./Button-2HS1JCrT.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./willShowContent-MSvI8sYo.js";import"./HasPopup-9BAMrqbD.js";import"./i18n-defaults-KFYnnpmz.js";import"./chunk-HLWAVYOI-DP7TsRBw.js";import"./react-18-1WT2dSvK.js";import"./index-QYh6idnL.js";import"./index-mlUqNAao.js";import"./clsx-Zbgk8kpT.js";import"./index-jdIcBaoB.js";import"./Label-6T3Q5KMo.js";import"./WrappingType-avPrqc94.js";import"./index-cT5HpiGU.js";import"./index-Xa57At0r.js";import"./Link-gyEWjMqm.js";import"./index-dP23692m.js";import"./Popover-AJDeb5lw.js";import"./Integer-kog98579.js";import"./PopupUtils--F87unyw.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-D70R2m1B.js";import"./FocusableElements--mw2hLMH.js";import"./isElementHidden-d3-Fo4V6.js";import"./getEffectiveScrollbarStyle-Gz48PLeD.js";import"./ResizeHandler-_spraO4D.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-T1SBcBMD.js";import"./BrowserScrollbar.css-amc9gXm3.js";import"./index-PT67_7v6.js";import"./i18n-defaults-EsDEVf23.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-6DfCcktU.js";import"./useStylesheet-XCSdJTxH.js";import"./ModalsContext-T9gUbaXC.js";import"./addCustomCSSWithScoping-4CvfEWOd.js";import"./index-NUaykFCm.js";import"./index-H6PC_dgE.js";import"./Avatar-JeSMkDk4.js";import"./employee-ld-8O_mW.js";import"./index-vhLKbz8Z.js";import"./utils-VqKQ_frK.js";import"./index-AmH08eER.js";import"./sys-help-2-qc_mQq4z.js";import"./copy-GXCl5_6q.js";import"./GitHub-Mark-JYujJlUX.js";import"./TableOfContent-y65RKmKK.js";import"./_baseForOwn-a7AeJH13.js";import"./mapValues-_kP3xGjM.js";import"./_baseUniq-_JZHYp0e.js";import"./index-PPLHz8o0.js";import"./index-7I0hdIjK.js";import"./index-oICTcBgz.js";function Jo(r={}){const{wrapper:i}=Object.assign({},e(),r.components);return i?o.jsx(i,Object.assign({},r,{children:o.jsx(m,{})})):m();function m(){const t=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre"},e(),r.components);return o.jsxs(o.Fragment,{children:[o.jsx(c,{of:d}),`
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
`,o.jsx(n,{})]})}}export{Jo as default};
