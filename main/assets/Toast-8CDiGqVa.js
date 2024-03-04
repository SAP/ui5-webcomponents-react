import{j as o}from"./jsx-runtime-DtaoT6pD.js";import{F as n}from"./ProjectTemplate-rrbiNL7_.js";import{C as s}from"./ControlsWithNote-VS6Zuxu2.js";import{D as a}from"./DocsHeader-RNHo5hCr.js";import"./index-OjgoNOWw.js";import{M as c,b as h}from"./index-aWvWlMIq.js";import{C as d,D as p}from"./Toast.stories-0tjCHyb6.js";import{u as e}from"./index-RwE9nQVW.js";import"./react-jss.esm-fzYOEaou.js";import"./theming.esm-g_6oAtQL.js";import"./index-h7H1Pf9B.js";import"./iframe-loCX4_0P.js";import"../sb-preview/runtime.js";import"./UI5Element-ZYvPEp0D.js";import"./Language-JQ3LAQtE.js";import"./VersionInfo-zmLW7G4m.js";import"./CustomElementsScopeUtils-StEZUlti.js";import"./withWebComponent-c-uI2wMj.js";import"./utils-_oNUceU3.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./event-lM5HanI-.js";import"./i18nBundle-1RfbKOQr.js";import"./decline-U1O_cqCB.js";import"./Icons-cAVhCySg.js";import"./i18n-defaults-SIMqfZL6.js";import"./information-QdD8C0Qh.js";import"./alert-dBb1Jp03.js";import"./class-map-kWxrnrVL.js";import"./Icon-7RzQfNaI.js";import"./Keys-ZEuNsqmZ.js";import"./parameters-bundle.css-mPCp9TQx.js";import"./Button-6A8kFSGe.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./willShowContent-MSvI8sYo.js";import"./HasPopup-9BAMrqbD.js";import"./i18n-defaults-5NJLMpyi.js";import"./chunk-HLWAVYOI-9dsGEBDu.js";import"./react-18-1WT2dSvK.js";import"./index-QYh6idnL.js";import"./index-Qwyc25sK.js";import"./clsx-Zbgk8kpT.js";import"./index-36ryzg2t.js";import"./Label-fARuFZ49.js";import"./WrappingType-avPrqc94.js";import"./index-HV4MpP3V.js";import"./index-C3Bb5uiC.js";import"./Link-HKW89dQ_.js";import"./index-MHJFNesd.js";import"./Popover-UsQMNwiB.js";import"./Integer-kog98579.js";import"./PopupUtils-ihEiSFJi.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-ITzmnbbD.js";import"./FocusableElements-vlqyWKZU.js";import"./isElementHidden-d3-Fo4V6.js";import"./getEffectiveScrollbarStyle-Gz48PLeD.js";import"./ResizeHandler-YURVNHbB.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-5XXpitLE.js";import"./BrowserScrollbar.css-za47fcqD.js";import"./index-SpQb4Cav.js";import"./i18n-defaults-8iJXv8tC.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-O-3hYuZs.js";import"./useStylesheet-2TpYMoe1.js";import"./ModalsContext-T9gUbaXC.js";import"./addCustomCSSWithScoping-tGNiKL_K.js";import"./index-tjd9c1e1.js";import"./index-uTXgV0Z5.js";import"./Avatar-W7sCbj87.js";import"./employee-LTkoba5Z.js";import"./index-f4GGKb1z.js";import"./utils-xcqUW2SC.js";import"./index-gHPtKahQ.js";import"./sys-help-2-8ufeK3Od.js";import"./copy-PqQY0mDn.js";import"./GitHub-Mark-JYujJlUX.js";import"./TableOfContent-hY7FNnkA.js";import"./_baseForOwn-a7AeJH13.js";import"./mapValues-_kP3xGjM.js";import"./_baseUniq-_JZHYp0e.js";import"./index-PPLHz8o0.js";import"./index-7I0hdIjK.js";import"./index-tApxvXvw.js";function Jo(r={}){const{wrapper:i}=Object.assign({},e(),r.components);return i?o.jsx(i,Object.assign({},r,{children:o.jsx(m,{})})):m();function m(){const t=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre"},e(),r.components);return o.jsxs(o.Fragment,{children:[o.jsx(c,{of:d}),`
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
