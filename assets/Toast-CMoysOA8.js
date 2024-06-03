import{j as o}from"./useIsomorphicLayoutEffect-VT0hzFUo.js";import{useMDXComponents as p}from"./index-3-_tf5dF.js";import{M as e,C as n}from"./index-DxBmVfnv.js";import{C as s}from"./ControlsWithNote-DEYdAOut.js";import{D as a}from"./DocsHeader-gRsu2NYg.js";import{F as c}from"./ProjectTemplate-Dlpw2too.js";import"./index-BP8_t0zE.js";import{C as h,D as i}from"./Toast.stories-CuSgWI7J.js";import"./iframe-Bi5CJLAF.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./utils-B4n7HIj-.js";import"./main-HWtSBowW.js";import"./index-DsUyuu21.js";import"./UI5Element-DwbFyBon.js";import"./Boot-BVnGU0ip.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScopeUtils-B2x3tIsm.js";import"./withWebComponent-DvmwIdUK.js";import"./utils-neMnggoA.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-DbWkXQeQ.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-_9Cp-e0V.js";import"./Icons-DyBGPyMo.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-kZpvVQc-.js";import"./sys-help-2-pwK9_awn.js";import"./information-5jLlktsT.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-CJTybc-z.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-CqU3c0Xc.js";import"./index-DeIt49yu.js";import"./decline-CHA057wR.js";import"./class-map-CS8eahb3.js";import"./Button-BsmQPuS3.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./HasPopup-Cecjtg2t.js";import"./index-wND43-Q5.js";import"./Popover-ComfN-sG.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-CoIIx-oA.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-BspShIhm.js";import"./FocusableElements-DEjr2b5c.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DPru0u-P.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-RUCW1mQv.js";import"./BrowserScrollbar.css-BTaDXFx1.js";import"./index-DHjjGk5h.js";import"./Link-DIcSBYfZ.js";import"./chunk-HLWAVYOI-BB4QnP_j.js";import"./client-Di-4O7We.js";import"./copy-AJFuNtDX.js";import"./index-DCILwikw.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DovReOaw.js";import"./index-CNIrU-iy.js";import"./i18n-defaults-DgugUEvt.js";import"./I18nContext-RJHUyvz-.js";import"./index-CL_5mZ89.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./GitHub-Mark-Dk-S7sqj.js";import"./TableOfContent-Cr_Xz0Vy.js";import"./index-C6uO-9MZ.js";import"./Label-8bLCWgMU.js";import"./index-BP8OuW_R.js";import"./addCustomCSSWithScoping-VI82Stk0.js";import"./index-2Irrv9mx.js";import"./index-XFvdLsnM.js";import"./Avatar-Czn1NGIX.js";import"./employee-wCGkTOTe.js";import"./index-B6q0wbg9.js";import"./index--ZbRY0k8.js";function m(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...p(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:h}),`
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
