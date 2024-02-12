import{j as o}from"./jsx-runtime-DtaoT6pD.js";import{F as n}from"./ProjectTemplate-3G0S_6oc.js";import{C as s}from"./ControlsWithNote-qrRUf1-w.js";import{D as a}from"./DocsHeader-fjnvYqEC.js";import"./index-OjgoNOWw.js";import{M as c,C as h}from"./chunk-HLWAVYOI-LlT6VNpv.js";import{C as d,D as m}from"./Toast.stories-YNG2uWhe.js";import{u as p}from"./index-RwE9nQVW.js";import"./react-jss.esm-tmBtHfec.js";import"./index-cyTk__JO.js";import"./iframe-KUJzbspR.js";import"../sb-preview/runtime.js";import"./UI5Element-J5BIXSmd.js";import"./i18nBundle-hBv5shGA.js";import"./VersionInfo-AzzP9wS2.js";import"./CustomElementsScopeUtils-IpwVqUeG.js";import"./withWebComponent--kEkWNJH.js";import"./utils-rNFQc6Ui.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./event-lM5HanI-.js";import"./decline-TLe42uKS.js";import"./Icons-w8Ubykga.js";import"./i18n-defaults-iZnAAWr4.js";import"./information-mLcAhNUH.js";import"./alert-EvF5vfgw.js";import"./class-map-Y-YjCFqX.js";import"./Icon-9mGrp6sQ.js";import"./Keys-Mzj2D4aO.js";import"./parameters-bundle.css-mPCp9TQx.js";import"./Button-3dE37AvA.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./HasPopup-9BAMrqbD.js";import"./i18n-defaults-KF6OS2eD.js";import"./index-W62_3BtY.js";import"./clsx-Zbgk8kpT.js";import"./index-QYh6idnL.js";import"./index-cQAMLrg2.js";import"./Label-z2EGRvw-.js";import"./WrappingType-avPrqc94.js";import"./index-_HlTlQh5.js";import"./index-VbqqGkBQ.js";import"./Link-qPsX_s-9.js";import"./index-WpIsg02C.js";import"./Popover-_i-9Nlxt.js";import"./Integer-kog98579.js";import"./PopupUtils-vEkjvavX.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-mpuHIMki.js";import"./FocusableElements-yiWWnti0.js";import"./isElementHidden-d3-Fo4V6.js";import"./getEffectiveScrollbarStyle-Gz48PLeD.js";import"./ResizeHandler-nsiBebAr.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-5njKSr-C.js";import"./BrowserScrollbar.css-f5JVpLjm.js";import"./index-I2ZSoiFx.js";import"./i18n-defaults-i_6r8m_B.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-cXf_ADaj.js";import"./ModalsContext-T9gUbaXC.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-QKBhLXCa.js";import"./index-9SnBeFbB.js";import"./index-8Uj6lUKo.js";import"./Avatar-DMnS_15W.js";import"./employee-E8ifPoB6.js";import"./index-Fff8eCiy.js";import"./index-lfJylqBv.js";import"./sys-help-2-wmLSzyeg.js";import"./TableOfContent-sYmgJ9Ya.js";import"./react-18-1WT2dSvK.js";import"./_baseForOwn-a7AeJH13.js";import"./mapValues-_kP3xGjM.js";import"./_baseUniq-_JZHYp0e.js";import"./index-PPLHz8o0.js";import"./index-7I0hdIjK.js";import"./index-bE1e6G-z.js";function Lo(r={}){const{wrapper:i}=Object.assign({},p(),r.components);return i?o.jsx(i,Object.assign({},r,{children:o.jsx(e,{})})):e();function e(){const t=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre"},p(),r.components);return o.jsxs(o.Fragment,{children:[o.jsx(c,{of:d}),`
`,o.jsx(a,{since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(h,{of:m}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(s,{of:m}),`
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
`,o.jsx(n,{})]})}}export{Lo as default};
