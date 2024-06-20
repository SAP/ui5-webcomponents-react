import{j as o}from"./useIsomorphicLayoutEffect-CJg151Ok.js";import{useMDXComponents as p}from"./index-Bql5lgBm.js";import{M as e,C as n}from"./index-BPV5VOMo.js";import"./index-CZvp3XW2.js";import{C as s}from"./ControlsWithNote-De88Vg9D.js";import{D as a}from"./DocsHeader-Bjtkfa3W.js";import{F as c}from"./ProjectTemplate-DHa8Dpzs.js";import"./index-CP2MHerv.js";import"./WrappingType-CW8URInd.js";import{C as h,D as i}from"./Toast.stories-CafiA1gY.js";import"./iframe-GGPqKdIo.js";import"../sb-preview/runtime.js";import"./index-CUD6gg2y.js";import"./_baseForOwn-39ViRbo3.js";import"./mapValues-BafCeOy3.js";import"./_baseUniq-D4fCGXIX.js";import"./index-DBvbnR2h.js";import"./index-DrFu-skq.js";import"./UI5Element-D1gTBhJw.js";import"./Boot-CUKJMqeB.js";import"./EventProvider-CVfkyUHo.js";import"./CustomElementsScopeUtils-Br5bzw3_.js";import"./withWebComponent-BqYi3caL.js";import"./utils-BVRly08L.js";import"./slot--DoKcWSY.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-DqiJMVwP.js";import"./decline-24gJ_QVD.js";import"./Icons-DKhvPm64.js";import"./i18n-defaults-C2wY9l8t.js";import"./information-B_T0tfhv.js";import"./alert-CCqY5Vji.js";import"./class-map-CsNukgzr.js";import"./Icon-DybkHgDw.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";import"./parameters-bundle.css-B_nLitlw.js";import"./Button-DOCBygoe.js";import"./AriaLabelHelper-LMIEtYQL.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-C9rtXNtx.js";import"./TagDesign-B60Yj3Pp.js";import"./utils-DCTX_RUD.js";import"./main-J1meqccC.js";import"./index-DVQgoR3X.js";import"./Tag-DkuuXb2g.js";import"./sys-help-2-BIIHI8V5.js";import"./index-C3Pnpg1E.js";import"./Popover-CLYhCt6_.js";import"./Integer-WDQzHAdZ.js";import"./PopupsCommon.css-DS4aznhi.js";import"./FocusableElements-BqtokFct.js";import"./isElementHidden-B4HqmI2E.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Cj9P7VXu.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-Blizc8Vd.js";import"./BrowserScrollbar.css-CWM6CH73.js";import"./index-BEiqleH4.js";import"./Link-ZaeZ1ck_.js";import"./chunk-HLWAVYOI-Boga8wdQ.js";import"./client-CeotCdvV.js";import"./copy-CyR7DYXM.js";import"./copy-BR6xdeTx.js";import"./index-CBgVz2ct.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BYE0j0VN.js";import"./index-DymV_ww8.js";import"./i18n-defaults-DO_muapi.js";import"./I18nContext-BwNxpyJO.js";import"./index-C7ubApS_.js";import"./ModalsContext-CA2qjtQ6.js";import"./useIsomorphicId-BGiUoP5x.js";import"./GitHub-Mark-DCTbc_R1.js";import"./TableOfContent-u5p3Cw7B.js";import"./index-CA0BVAa0.js";import"./Label-BUCQCjYm.js";import"./index-CfeQC8c4.js";import"./addCustomCSSWithScoping-Cb1z8mH0.js";import"./index-CKlGhIW6.js";import"./index-Cdqk9Xdq.js";import"./index-CTjiTjyP.js";import"./Avatar-gXHHVTDv.js";import"./employee-CKaAdAd4.js";import"./index-lOp-n1_e.js";function m(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...p(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:h}),`
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
`,o.jsx(c,{})]})}function Go(r={}){const{wrapper:t}={...p(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(m,{...r})}):m(r)}export{Go as default};
