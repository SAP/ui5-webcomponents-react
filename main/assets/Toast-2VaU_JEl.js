import{j as o}from"./jsx-runtime-DtaoT6pD.js";import{F as n}from"./ProjectTemplate-dZzm2W_I.js";import{C as s}from"./ControlsWithNote-H47eHGCy.js";import{D as a}from"./DocsHeader-iEUo6zKm.js";import"./index-OjgoNOWw.js";import{M as c,b as h}from"./index-qD7WQwId.js";import{C as d,D as p}from"./Toast.stories-aa6ZSAk4.js";import{u as e}from"./index-RwE9nQVW.js";import"./react-jss.esm-tmBtHfec.js";import"./index-iF5btqun.js";import"./iframe-za-lvryk.js";import"../sb-preview/runtime.js";import"./UI5Element-d7BKyERc.js";import"./Language-gwOe_M78.js";import"./VersionInfo-zmLW7G4m.js";import"./CustomElementsScopeUtils-StEZUlti.js";import"./withWebComponent-c-uI2wMj.js";import"./utils-_oNUceU3.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./event-lM5HanI-.js";import"./i18nBundle-kNlRgZSb.js";import"./decline-WQNFq9Fi.js";import"./Icons-Bde3sOsn.js";import"./i18n-defaults-SIMqfZL6.js";import"./information-2I5Ry-zV.js";import"./alert-NotaXBj3.js";import"./class-map-kWxrnrVL.js";import"./Icon-lAPI10Qw.js";import"./Keys-ZEuNsqmZ.js";import"./parameters-bundle.css-mPCp9TQx.js";import"./Button-ywDxCu8p.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./willShowContent-MSvI8sYo.js";import"./HasPopup-9BAMrqbD.js";import"./i18n-defaults-fXrRGy4a.js";import"./chunk-HLWAVYOI-WXmjjQ4M.js";import"./react-18-1WT2dSvK.js";import"./index-QYh6idnL.js";import"./index-6f3-3TZK.js";import"./clsx-Zbgk8kpT.js";import"./index-tQsmQy9q.js";import"./Label-T23s9s-4.js";import"./WrappingType-avPrqc94.js";import"./index-WbJYnAkm.js";import"./index-KsbEQ3H9.js";import"./Link-YZ4obMbX.js";import"./index-faHD0WdU.js";import"./Popover-AngQKyti.js";import"./Integer-kog98579.js";import"./PopupUtils-cNe84Tf4.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-OX3LG9lc.js";import"./FocusableElements-wiyFyaM0.js";import"./isElementHidden-d3-Fo4V6.js";import"./getEffectiveScrollbarStyle-Gz48PLeD.js";import"./ResizeHandler-iTCl5diO.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-5XXpitLE.js";import"./BrowserScrollbar.css-HwP8mBZS.js";import"./index-lwweRvrD.js";import"./i18n-defaults-nru-HZH8.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-9LQRDEyt.js";import"./StyleContext-9nyrn-qG.js";import"./ModalsContext-T9gUbaXC.js";import"./CssSizeVariables-HFpqBBhk.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-bUOmzhXF.js";import"./index-A8x1fqNf.js";import"./index-PKEA4E2_.js";import"./Avatar-W5DY45OX.js";import"./employee-638U4O_O.js";import"./index-TR38i7_W.js";import"./utils-xIcHYtB1.js";import"./index-5Sy_d2oC.js";import"./sys-help-2-pEGjeWPi.js";import"./copy-sn9oDqVN.js";import"./GitHub-Mark-JYujJlUX.js";import"./TableOfContent-dKjURGz0.js";import"./_baseForOwn-a7AeJH13.js";import"./mapValues-_kP3xGjM.js";import"./_baseUniq-_JZHYp0e.js";import"./index-PPLHz8o0.js";import"./index-7I0hdIjK.js";import"./index-0u3wR3-J.js";function Qo(r={}){const{wrapper:i}=Object.assign({},e(),r.components);return i?o.jsx(i,Object.assign({},r,{children:o.jsx(m,{})})):m();function m(){const t=Object.assign({h2:"h2",p:"p",code:"code",strong:"strong",pre:"pre"},e(),r.components);return o.jsxs(o.Fragment,{children:[o.jsx(c,{of:d}),`
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
`,o.jsx(n,{})]})}}export{Qo as default};
