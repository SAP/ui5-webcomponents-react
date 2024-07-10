import{j as o}from"./useIsomorphicLayoutEffect-Cwmfti2R.js";import{useMDXComponents as m}from"./index-yodfxRVR.js";import{M as p,C as n}from"./index-DLpmNMBq.js";import"./index-iF75BPvd.js";import{C as s}from"./ControlsWithNote-C7T0Ogbg.js";import{D as a}from"./DocsHeader-Ciax7uFa.js";import{F as c}from"./CommandsAndQueries-VyRp7VSS.js";import"./index-BQ1WsyJB.js";import"./WrappingType-CW8URInd.js";import{C as h,D as i}from"./Toast.stories-BkTFa6bz.js";import"./iframe-B846S1SF.js";import"../sb-preview/runtime.js";import"./index-BLtMylri.js";import"./_baseForOwn-DusBTQ6O.js";import"./mapValues-DfqGXSk1.js";import"./_baseUniq-BpWYsmmS.js";import"./index-Cagd9BgA.js";import"./index-DrFu-skq.js";import"./withWebComponent-BbH_5MIb.js";import"./utils-BXNPXA0w.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-CYrspCbQ.js";import"./decline-dJfPkrKK.js";import"./Icon-DgpDEY-g.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-Pg2MF6OO.js";import"./parameters-bundle.css-BFbT_feV.js";import"./i18n-defaults-eVMsPoDe.js";import"./information-Dpm8KApc.js";import"./alert-4iBM3OoX.js";import"./class-map-Cmqcr3Jy.js";import"./Button-B86xSW8p.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-D_1KzAB5.js";import"./TagDesign-Dou_yO3g.js";import"./utils-CB5OXg3M.js";import"./main-CzLLrZqh.js";import"./index-RYJwNzbN.js";import"./Tag-Bcq38jV6.js";import"./sys-help-2-CpwrGADB.js";import"./index-nmoQEt9s.js";import"./Popover-By40N46R.js";import"./PopupsCommon.css-CUeoloLy.js";import"./getEffectiveScrollbarStyle-Cc8EMEwh.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-OgbCZidP.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-CndeHQ5H.js";import"./BrowserScrollbar.css-CgVpWCeO.js";import"./index-Drj77YO4.js";import"./Link-D7pTqG-L.js";import"./chunk-HLWAVYOI-CTRemlx-.js";import"./client-CM2XqZNc.js";import"./copy-Bk4HvEED.js";import"./copy-D7XnXV4f.js";import"./index-DwEKreE0.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BB85D3ff.js";import"./index-CHSXWHaD.js";import"./I18nStore-B0a_FhwZ.js";import"./useIsomorphicId-8WwglsiH.js";import"./GitHub-Mark-08X1RYCA.js";import"./TableOfContent-ot8xOzAQ.js";import"./index-CSjawjb8.js";import"./Label-B8i_ob21.js";import"./index-D1nu7uR-.js";import"./index-C4m8BtnC.js";import"./addCustomCSSWithScoping-BT5fwu99.js";import"./index-CU9rpgmS.js";import"./index-BxNOKD0b.js";import"./index-DyFEPi5R.js";import"./Avatar-DddpDFgS.js";import"./employee-DSw1VZX4.js";import"./index-BPo5M3uS.js";function e(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:h}),`
`,o.jsx(a,{since:"0.9.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(n,{of:i}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(s,{of:i}),`
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
`,o.jsx(c,{})]})}function No(r={}){const{wrapper:t}={...m(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(e,{...r})}):e(r)}export{No as default};
