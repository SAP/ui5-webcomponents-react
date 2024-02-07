import{j as o}from"./jsx-runtime-DtaoT6pD.js";import{F as n}from"./ProjectTemplate-HT6wxlOD.js";import{C as s}from"./ControlsWithNote-Bb7PfFMc.js";import{D as a}from"./DocsHeader-Sy57B1YH.js";import"./index-OjgoNOWw.js";import{M as c,C as h}from"./chunk-HLWAVYOI-SgRoAEdc.js";import{C as d,D as m}from"./Toast.stories-QcYE_nPU.js";import{u as p}from"./index-RwE9nQVW.js";import"./react-jss.esm-tmBtHfec.js";import"./index-N08exfS2.js";import"./iframe-WCsyoz4U.js";import"../sb-preview/runtime.js";import"./UI5Element-_cJDeK03.js";import"./i18nBundle-YDapVb1x.js";import"./VersionInfo-AzzP9wS2.js";import"./CustomElementsScopeUtils-IpwVqUeG.js";import"./withWebComponent--kEkWNJH.js";import"./utils-rNFQc6Ui.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./event-lM5HanI-.js";import"./decline-TrFDzgUZ.js";import"./Icons-dG5I7pqk.js";import"./i18n-defaults-iZnAAWr4.js";import"./information-hXM74YAc.js";import"./alert-dnfYKYS3.js";import"./class-map-Y-YjCFqX.js";import"./Icon-1HyKfQwB.js";import"./Keys-Mzj2D4aO.js";import"./parameters-bundle.css-mPCp9TQx.js";import"./Button-Q_btruTx.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./HasPopup-9BAMrqbD.js";import"./i18n-defaults-3YbdkqSs.js";import"./index-_9C7BQQF.js";import"./clsx-Zbgk8kpT.js";import"./index-QYh6idnL.js";import"./index-RecClf8N.js";import"./Label-GIHgrMyy.js";import"./WrappingType-avPrqc94.js";import"./index-MoD43Nhp.js";import"./index-MuqP7-Yl.js";import"./Link--uQmFIhM.js";import"./index-6RcXaRha.js";import"./Popover-4Jmhfo0j.js";import"./Integer-kog98579.js";import"./PopupUtils-WqNPYdCF.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-U0zEo08F.js";import"./FocusableElements-YRGIpHeQ.js";import"./isElementHidden-d3-Fo4V6.js";import"./getEffectiveScrollbarStyle-Gz48PLeD.js";import"./ResizeHandler-xTi6PJ7P.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-5njKSr-C.js";import"./BrowserScrollbar.css-OKoQbzr6.js";import"./index-G1ylA0vb.js";import"./i18n-defaults-a20Pyi7e.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-evY60Rnm.js";import"./ModalsContext-T9gUbaXC.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-fxF1oxJv.js";import"./index-1toH92X1.js";import"./index-mq0B_uer.js";import"./Avatar-zEbB_F4h.js";import"./employee-2wNDT3_m.js";import"./index-_UxwyL4l.js";import"./index-3bkpWOvG.js";import"./sys-help-2-GGRIgWu9.js";import"./TableOfContent-sbAQ4Cuc.js";import"./react-18-1WT2dSvK.js";import"./_baseForOwn-z3VktcOy.js";import"./mapValues-Iyc0g4nJ.js";import"./_baseUniq-PeaQ4i79.js";import"./index-PPLHz8o0.js";import"./index-ru46B3pF.js";import"./index-IFqy5IHm.js";function Lo(r={}){const{wrapper:i}=Object.assign({},p(),r.components);return i?o.jsx(i,Object.assign({},r,{children:o.jsx(e,{})})):e();function e(){const t=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre"},p(),r.components);return o.jsxs(o.Fragment,{children:[o.jsx(c,{of:d}),`
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
