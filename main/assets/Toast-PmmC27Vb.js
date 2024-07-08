import{j as o}from"./useIsomorphicLayoutEffect-CpdNMtv3.js";import{useMDXComponents as p}from"./index-44b7z5bc.js";import{M as e,C as n}from"./index-7pZ3wkfl.js";import"./index-BCdWW2mU.js";import{C as s}from"./ControlsWithNote-31XHP6VP.js";import{D as a}from"./DocsHeader-DpXNmV2h.js";import{F as c}from"./CommandsAndQueries-CgRlJMj0.js";import"./index-DEe9W-hO.js";import"./WrappingType-CW8URInd.js";import{C as h,D as i}from"./Toast.stories-Dd3-ZhPd.js";import"./iframe-BAYgws2G.js";import"../sb-preview/runtime.js";import"./index-D6UH2S5y.js";import"./_baseForOwn-DVWQo5xw.js";import"./mapValues-DXlf5GIm.js";import"./_baseUniq-BqAhPu7p.js";import"./index-Ba91SQPT.js";import"./index-DrFu-skq.js";import"./UI5Element-B4CRQCUa.js";import"./CustomElementsScopeUtils-C6IqSY4u.js";import"./withWebComponent-BxrD_3pN.js";import"./utils-DgTsnvPN.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-NJJr-Wgh.js";import"./decline-OUaGDOWq.js";import"./Icons-CwMCtZ-T.js";import"./i18n-defaults-eVMsPoDe.js";import"./information-V1h4ty4Y.js";import"./alert-7wwKJW96.js";import"./class-map-CVq5yHuN.js";import"./if-defined-Cl7uVo8B.js";import"./Icon-p6ifn8PN.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";import"./parameters-bundle.css-DQGkr9pp.js";import"./Button-BL3VmI_G.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-vwvk3Exl.js";import"./TagDesign-Dou_yO3g.js";import"./utils-Dyx5IlB-.js";import"./main-gIccE3pA.js";import"./index-Bjr7ByFD.js";import"./Tag-2LXTzoR2.js";import"./sys-help-2-BIRNWtM-.js";import"./index-BgCJ2y14.js";import"./Popover-CPRmhj4r.js";import"./Integer-DgRYWdxf.js";import"./PopupsCommon.css-BJNgSyQc.js";import"./FocusableElements-bN8doqn4.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Bwj_klJ5.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-BoopDC9U.js";import"./BrowserScrollbar.css-88cLNDUy.js";import"./index-DnETfvJm.js";import"./Link-CGGRp2Qi.js";import"./chunk-HLWAVYOI-Dx9skNSO.js";import"./client-BEgA9EFc.js";import"./copy-DRlh-Vu-.js";import"./copy-CgbAc49M.js";import"./index-DnbfWVpq.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BlIIJPI8.js";import"./index-B5idhwOL.js";import"./I18nStore-DrHVTNpv.js";import"./ModalsContext-C4nEcU7T.js";import"./useIsomorphicId-CULvwDT0.js";import"./GitHub-Mark-W2HRRVtA.js";import"./TableOfContent-DgSOpBF2.js";import"./index-ChMriIxq.js";import"./Label-BqwA1t1q.js";import"./index-D-tz2bK5.js";import"./index-Bk5CjLvZ.js";import"./addCustomCSSWithScoping-rJxYyKkM.js";import"./index-DJx_yvBz.js";import"./index-CNpkIWKv.js";import"./index-C0C7em0n.js";import"./Avatar-DusLgr8x.js";import"./employee-CMmC12VS.js";import"./index-BCWsdJ4O.js";function m(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...p(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:h}),`
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
`,o.jsx(c,{})]})}function zo(r={}){const{wrapper:t}={...p(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(m,{...r})}):m(r)}export{zo as default};
