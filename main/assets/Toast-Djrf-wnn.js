import{j as o}from"./useIsomorphicLayoutEffect-CpdNMtv3.js";import{useMDXComponents as p}from"./index-44b7z5bc.js";import{M as e,C as n}from"./index-B4TJEIgY.js";import"./index-LuLNju66.js";import{C as s}from"./ControlsWithNote-M0G9DxJI.js";import{D as a}from"./DocsHeader-DKGjphB5.js";import{F as c}from"./ProjectTemplate-CLtinoqp.js";import"./index-DEe9W-hO.js";import"./WrappingType-CW8URInd.js";import{C as h,D as i}from"./Toast.stories-CSfl4IPA.js";import"./iframe-C-zh5q8t.js";import"../sb-preview/runtime.js";import"./index-D6UH2S5y.js";import"./_baseForOwn-DVWQo5xw.js";import"./mapValues-DXlf5GIm.js";import"./_baseUniq-BqAhPu7p.js";import"./index-Ba91SQPT.js";import"./index-DrFu-skq.js";import"./UI5Element-GBezswur.js";import"./Boot-CS6Wsrzl.js";import"./EventProvider-CVfkyUHo.js";import"./CustomElementsScopeUtils-CNP7-t5L.js";import"./withWebComponent-ystZv1Rq.js";import"./utils-DQyyc3O0.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-BRH4h-L2.js";import"./decline-DXuOh8V-.js";import"./Icons-DkFvE6sF.js";import"./i18n-defaults-CXs2tJOZ.js";import"./information-7KDHAkBn.js";import"./alert-CC8GYBM5.js";import"./class-map-AxOwT-Dx.js";import"./Icon-DVdZH5Ds.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";import"./parameters-bundle.css-DQGkr9pp.js";import"./Button-BDXX69rx.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-BHzefwI9.js";import"./TagDesign-Dou_yO3g.js";import"./utils-DDWs46MV.js";import"./main-gIccE3pA.js";import"./index-DKEtODBn.js";import"./Tag-L9twqo1B.js";import"./sys-help-2-Bsa8Xj43.js";import"./index-woEZMAlh.js";import"./Popover-D7imDdfT.js";import"./Integer-DgRYWdxf.js";import"./PopupsCommon.css-D0jBQZ8g.js";import"./FocusableElements-D2BM6TGM.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DDwTWVjk.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-BQrULRrw.js";import"./BrowserScrollbar.css-CyDwNnGM.js";import"./index-DexbhTjs.js";import"./Link-C0ufom_G.js";import"./chunk-HLWAVYOI-BYiw5dBp.js";import"./client-BEgA9EFc.js";import"./copy-BlXZdPH6.js";import"./copy-CpBkh8z4.js";import"./index-B6HtmUYb.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-B1i3sL0q.js";import"./index-D455cKCd.js";import"./i18n-defaults-CnAElpi7.js";import"./I18nContext-qX06pm-v.js";import"./index-DucvDNQa.js";import"./ModalsContext-C4nEcU7T.js";import"./useIsomorphicId-CULvwDT0.js";import"./GitHub-Mark-W2HRRVtA.js";import"./TableOfContent-DmgsRN25.js";import"./index-CPUVJ5Mz.js";import"./Label-B7GS_Fjb.js";import"./index-BJLKZy-L.js";import"./addCustomCSSWithScoping-Cxt-Ii4P.js";import"./index-B60cVvq6.js";import"./index-MKQtZNd-.js";import"./index-CmmNuBv4.js";import"./Avatar-BLWqVh2K.js";import"./employee-RhZDCU51.js";import"./index-urrLQHKR.js";function m(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...p(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:h}),`
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
`,o.jsx(c,{})]})}function Jo(r={}){const{wrapper:t}={...p(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(m,{...r})}):m(r)}export{Jo as default};
