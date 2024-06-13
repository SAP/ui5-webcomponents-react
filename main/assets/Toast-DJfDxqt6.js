import{j as o}from"./useIsomorphicLayoutEffect-J-vjyzBO.js";import{useMDXComponents as p}from"./index-Bpj30qF7.js";import{M as e,C as n}from"./index-Cot4uUB_.js";import"./index-DQ_4AJ4r.js";import{C as s}from"./ControlsWithNote-CPwKghhi.js";import{D as a}from"./DocsHeader-B8rrev83.js";import{F as c}from"./ProjectTemplate-WKHI2xP1.js";import"./index-DVqgc125.js";import"./WrappingType-CW8URInd.js";import{C as h,D as i}from"./Toast.stories-D5QDUTLe.js";import"./iframe-EcgWEy1g.js";import"../sb-preview/runtime.js";import"./index-oytpl9VN.js";import"./_baseForOwn-czysEfXW.js";import"./mapValues-DJmJhyxk.js";import"./_baseUniq-fADs2fxN.js";import"./index-MwrKYwMg.js";import"./index-DrFu-skq.js";import"./UI5Element-ZIczsayz.js";import"./Boot-DBJWGo1y.js";import"./EventProvider-CVfkyUHo.js";import"./CustomElementsScopeUtils-Di1jckr8.js";import"./withWebComponent-CZCh4Hye.js";import"./utils-xoLr7-0V.js";import"./slot--DoKcWSY.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-Baemx9Ir.js";import"./decline-iFbg0EvE.js";import"./Icons-VTGLGKPM.js";import"./i18n-defaults-C2wY9l8t.js";import"./information-DBr1nnf3.js";import"./alert-CRLi12vy.js";import"./class-map-7Nty0QHu.js";import"./Icon-bm18Wc8p.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";import"./parameters-bundle.css-B_nLitlw.js";import"./Button-B3obxaDo.js";import"./AriaLabelHelper-LMIEtYQL.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-BBSxky5H.js";import"./TagDesign-B60Yj3Pp.js";import"./utils-DsAEAkwW.js";import"./main-J1meqccC.js";import"./index-DeTmYi93.js";import"./Tag-BT5Mvbr4.js";import"./sys-help-2-2Us62-4y.js";import"./index-JeajOS1N.js";import"./Popover-CiDK1VtS.js";import"./Integer-WDQzHAdZ.js";import"./PopupsCommon.css-BU4M9Cwb.js";import"./FocusableElements-xn9p5spb.js";import"./isElementHidden-B4HqmI2E.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-D26-bsEk.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-H4TARQHt.js";import"./BrowserScrollbar.css-DkjKirWP.js";import"./index-DkdU7oTj.js";import"./Link-CM0QSx8V.js";import"./chunk-HLWAVYOI-DoCCFjMG.js";import"./client-5PD-IPQ1.js";import"./copy-Cmf2rNBH.js";import"./copy-e7WxF_om.js";import"./index-B_zaPyDm.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DGwRvl1X.js";import"./index-CUZZ9nZS.js";import"./i18n-defaults-CNyODxfy.js";import"./I18nContext-BrA05J-F.js";import"./index-HPMelgu7.js";import"./ModalsContext-DrY1dyul.js";import"./useIsomorphicId-B7SE6ZVh.js";import"./GitHub-Mark-BB1PBR_N.js";import"./TableOfContent-CxTF4JCB.js";import"./index-Dpt97Sm8.js";import"./Label-BcDuAK9i.js";import"./index-Ds-hu2eP.js";import"./addCustomCSSWithScoping-D0vrnlbk.js";import"./index-DObFMA3e.js";import"./index-Bl4l9gBB.js";import"./index-BezptTZp.js";import"./Avatar-BQsj5wMZ.js";import"./employee-DN6CdZzr.js";import"./index-8OXs1WBa.js";function m(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...p(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:h}),`
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
