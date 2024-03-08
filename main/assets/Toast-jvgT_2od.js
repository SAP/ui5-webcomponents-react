import{j as o}from"./jsx-runtime-DtaoT6pD.js";import{F as n}from"./ProjectTemplate-xaenlpVs.js";import{C as s}from"./ControlsWithNote-I-YVjMIC.js";import{D as a}from"./DocsHeader-mavhkw9a.js";import"./index-OjgoNOWw.js";import{M as c,b as h}from"./index-QVQ1uxUj.js";import{C as d,D as p}from"./Toast.stories-78YWs58I.js";import{u as e}from"./index-RwE9nQVW.js";import"./react-jss.esm-fzYOEaou.js";import"./theming.esm-g_6oAtQL.js";import"./index-RD480hMU.js";import"./iframe-rn21FmfG.js";import"../sb-preview/runtime.js";import"./UI5Element-9EXj3atz.js";import"./Boot-vTaFuwdG.js";import"./VersionInfo-ldzxTIVv.js";import"./CustomElementsScopeUtils-orabJqjR.js";import"./withWebComponent-LTFbYRvs.js";import"./utils-d3BcYjeO.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./event-lM5HanI-.js";import"./i18nBundle-j8vDD4VY.js";import"./decline-lKJ0r_rf.js";import"./Icons-Vbmmw7bO.js";import"./i18n-defaults-SIMqfZL6.js";import"./information-6yrGLmai.js";import"./alert--0SE21sY.js";import"./class-map-gjOVarQw.js";import"./Icon-kyep1SqZ.js";import"./Keys-ZEuNsqmZ.js";import"./parameters-bundle.css-EKzfhWK3.js";import"./Button-DcwyQdV9.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./willShowContent-MSvI8sYo.js";import"./HasPopup-9BAMrqbD.js";import"./i18n-defaults-X1FTyPSK.js";import"./chunk-HLWAVYOI-QE3PfFv0.js";import"./react-18-1WT2dSvK.js";import"./index-QYh6idnL.js";import"./index-mlUqNAao.js";import"./clsx-Zbgk8kpT.js";import"./index-puXoaw82.js";import"./Label-mY98SzPQ.js";import"./WrappingType-avPrqc94.js";import"./index-yjjPxP40.js";import"./index-GpujGHCh.js";import"./Link-9XR0tYIs.js";import"./index-riwI_eO_.js";import"./Popover-Yl5FRmf7.js";import"./Integer-kog98579.js";import"./PopupUtils-kUkkQSCb.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-xzQQME9v.js";import"./FocusableElements-xTkOlDEw.js";import"./isElementHidden-d3-Fo4V6.js";import"./getEffectiveScrollbarStyle-Gz48PLeD.js";import"./ResizeHandler-_qRzLmqT.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-tejh5TI3.js";import"./BrowserScrollbar.css-wlj1ktzG.js";import"./index-jXHhCG3a.js";import"./i18n-defaults-tj1r3f3s.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-EsRn4j4y.js";import"./useStylesheet-QHWPoMwQ.js";import"./ModalsContext-T9gUbaXC.js";import"./addCustomCSSWithScoping-ZfvsxM11.js";import"./index-nAfsYGRj.js";import"./index-aYXZb9-L.js";import"./Avatar-tUVXUHcz.js";import"./employee-EyN-jrGw.js";import"./index-nrJ7T13M.js";import"./utils-fDO_JOwz.js";import"./index-Mq1U_Ysc.js";import"./sys-help-2-QhGERdVJ.js";import"./copy-hCLuyOUN.js";import"./GitHub-Mark-JYujJlUX.js";import"./TableOfContent-7x9zFmhz.js";import"./_baseForOwn-a7AeJH13.js";import"./mapValues-_kP3xGjM.js";import"./_baseUniq-_JZHYp0e.js";import"./index-PPLHz8o0.js";import"./index-7I0hdIjK.js";import"./index-UsiKxpoN.js";function Jo(r={}){const{wrapper:i}=Object.assign({},e(),r.components);return i?o.jsx(i,Object.assign({},r,{children:o.jsx(m,{})})):m();function m(){const t=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre"},e(),r.components);return o.jsxs(o.Fragment,{children:[o.jsx(c,{of:d}),`
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
