import{j as o}from"./useIsomorphicLayoutEffect-CpdNMtv3.js";import{useMDXComponents as p}from"./index-44b7z5bc.js";import{M as e,C as n}from"./index-CmJjPAOA.js";import"./index-Byo0O861.js";import{C as s}from"./ControlsWithNote-BKHJPNdv.js";import{D as a}from"./DocsHeader-DSDEUnkH.js";import{F as c}from"./ProjectTemplate-KarP_Nxq.js";import"./index-DEe9W-hO.js";import"./WrappingType-CW8URInd.js";import{C as h,D as i}from"./Toast.stories-DMoldIEe.js";import"./iframe-CIt4l4Yv.js";import"../sb-preview/runtime.js";import"./index-D6UH2S5y.js";import"./_baseForOwn-DVWQo5xw.js";import"./mapValues-DXlf5GIm.js";import"./_baseUniq-BqAhPu7p.js";import"./index-Ba91SQPT.js";import"./index-DrFu-skq.js";import"./UI5Element-B4CRQCUa.js";import"./CustomElementsScopeUtils-C6IqSY4u.js";import"./withWebComponent-DVfwWPVB.js";import"./utils-CKbRNFS-.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-NJJr-Wgh.js";import"./decline-BWlX1wee.js";import"./Icons-CwMCtZ-T.js";import"./i18n-defaults-CXs2tJOZ.js";import"./information-Dhbw5K85.js";import"./alert-7wwKJW96.js";import"./class-map-nHH1vjEv.js";import"./if-defined-BG38O0o4.js";import"./Icon-R7_7gBpk.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";import"./parameters-bundle.css-DQGkr9pp.js";import"./Button-C_Cuoo5O.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-vwvk3Exl.js";import"./TagDesign-Dou_yO3g.js";import"./utils-DF6W8ZDg.js";import"./main-gIccE3pA.js";import"./index-CjOOgXoU.js";import"./Tag-j81rNQk_.js";import"./sys-help-2-BIRNWtM-.js";import"./index-DHLRt82k.js";import"./Popover-CA74kJve.js";import"./Integer-DgRYWdxf.js";import"./PopupsCommon.css-C85aKd3d.js";import"./FocusableElements-bN8doqn4.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Bwj_klJ5.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-Chhl6hRu.js";import"./BrowserScrollbar.css-Dn2WHWng.js";import"./index-BHt06Ab4.js";import"./Link-CjU86A1I.js";import"./chunk-HLWAVYOI-B-SJL0-i.js";import"./client-BEgA9EFc.js";import"./copy-DRlh-Vu-.js";import"./copy-CgbAc49M.js";import"./index-Bm6VDDxK.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-B1i3sL0q.js";import"./index-DNgsHEOA.js";import"./I18nContext-qX06pm-v.js";import"./ModalsContext-C4nEcU7T.js";import"./useIsomorphicId-CULvwDT0.js";import"./GitHub-Mark-W2HRRVtA.js";import"./TableOfContent-DTS97Btf.js";import"./index-WNeer-ff.js";import"./Label-BA6opWOJ.js";import"./index-c5hWOdh3.js";import"./index-CcxxEGoz.js";import"./addCustomCSSWithScoping-DtQWRUC7.js";import"./index-Cp-RISsl.js";import"./index-B6Me_YTu.js";import"./index-D8FlREqw.js";import"./Avatar-5-z1ijpg.js";import"./employee-CMmC12VS.js";import"./index-Co7bcWmB.js";function m(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...p(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:h}),`
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
