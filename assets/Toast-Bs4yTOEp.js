import{j as o}from"./useIsomorphicLayoutEffect-x3FS-xo7.js";import{useMDXComponents as p}from"./index-3-_tf5dF.js";import{M as e,C as n}from"./index-DxuOfQlo.js";import{C as s}from"./ControlsWithNote-CZJc6GdO.js";import{D as a}from"./DocsHeader-4Tnph7Tn.js";import{F as c}from"./ProjectTemplate-C8X93s0c.js";import"./index-BP8_t0zE.js";import{C as h,D as i}from"./Toast.stories-CQPexI6l.js";import"./iframe-BcfUQkuZ.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./utils-Br2NyzTh.js";import"./main-HWtSBowW.js";import"./index-BeHW3T8O.js";import"./UI5Element-SUktJcPg.js";import"./Boot-CclrjlB_.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScopeUtils-CSlIoILc.js";import"./withWebComponent-BgGNQpSI.js";import"./utils-BiMDJYwV.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-DaXqDOt3.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-C_A-NjlC.js";import"./Icons-Bft-hUnu.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css--Z5ctRmg.js";import"./sys-help-2-D4EtiAJW.js";import"./information-C5yxSOcR.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-ClVg17pq.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-1MXDhRqV.js";import"./index-DqXXZe2g.js";import"./decline-ubQgRYfe.js";import"./class-map-CeKKj88r.js";import"./Button-awfxS-u-.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./HasPopup-Cecjtg2t.js";import"./index-DkpNLt35.js";import"./Popover-DDKOmkxw.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-uPounuup.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-CWX1O2jP.js";import"./FocusableElements-i0omOcs_.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-Bwxc3Ll7.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-80OTj-RC.js";import"./BrowserScrollbar.css-7CdlaW1M.js";import"./index-C3ku0FIC.js";import"./Link-fwsdvAFJ.js";import"./chunk-HLWAVYOI-DE7Cd6yW.js";import"./client-Di-4O7We.js";import"./copy-CpRxx2mm.js";import"./index-BykYlwjP.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-NckrYtSC.js";import"./index-DOeO8XXJ.js";import"./i18n-defaults-Bdewnnuu.js";import"./I18nContext-RJHUyvz-.js";import"./index-C2xRLxKL.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./GitHub-Mark-BiaPdlPr.js";import"./TableOfContent-DEwwt8Fx.js";import"./index-DLdLI-Lw.js";import"./Label-DmN4xHd_.js";import"./index-BaLzQqsI.js";import"./addCustomCSSWithScoping-9LlgEVTF.js";import"./index-DpSkdN2-.js";import"./index-CiKDZMgT.js";import"./Avatar-BLe1VqxP.js";import"./employee-uGJRlzwB.js";import"./index-4leB1AGq.js";import"./index-Qd71Gd00.js";function m(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...p(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:h}),`
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
