import{j as o}from"./ManagedStyles-B3AuKgSD.js";import{useMDXComponents as p}from"./index-3-_tf5dF.js";import{M as e,C as n}from"./index-D6yMHXKH.js";import{C as s}from"./ControlsWithNote-DEt42rl-.js";import{D as a}from"./DocsHeader-C2I1ak24.js";import{F as c}from"./ProjectTemplate-BM2TcQq8.js";import"./index-BP8_t0zE.js";import{C as h,D as i}from"./Toast.stories-CLTt_EvL.js";import"./iframe-CmMrpWvX.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./utils-DcvN6C1-.js";import"./main-HWtSBowW.js";import"./index-oh9oHjhw.js";import"./UI5Element-BDMamLf2.js";import"./Boot-DOb84JFo.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScopeUtils-CyqSdClf.js";import"./withWebComponent-I_l1rtvY.js";import"./utils-BFMQrOqR.js";import"./useIsomorphicLayoutEffect-CnI1knHw.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-VOPn86Vc.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-1XL4agOH.js";import"./Icons-BEU0Gkqb.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-CG8awnKl.js";import"./sys-help-2-DvC0Pbzk.js";import"./information-BKTX2iJj.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-DA8J16Yf.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-YvCKXLrH.js";import"./index--iBHogUq.js";import"./decline-DIsY4YnD.js";import"./class-map-CdwQvt9Z.js";import"./Button-D3khXG03.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./HasPopup-Cecjtg2t.js";import"./index-DKJC3-tY.js";import"./Popover-CSBFzLfb.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-DrS11q-G.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-DprvSSUl.js";import"./FocusableElements-B5R4EUYo.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DS8KPGJE.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-DYE6pHfF.js";import"./BrowserScrollbar.css-jPLSLZ0L.js";import"./index-CiG57uGj.js";import"./Link-CcLSMxnp.js";import"./chunk-HLWAVYOI-Dd2Xf5mC.js";import"./client-Di-4O7We.js";import"./copy-C1-wxiKi.js";import"./index-pshheLiY.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-NUMS3nLe.js";import"./index-yohFIstM.js";import"./i18n-defaults-BbHxfVEE.js";import"./I18nContext-RJHUyvz-.js";import"./index-CGRQZsF8.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./GitHub-Mark-ZT-4UEle.js";import"./TableOfContent-B90tT-oo.js";import"./index-DtLJ1ven.js";import"./Label-MHQDFgLT.js";import"./index-CA_1ZyAw.js";import"./addCustomCSSWithScoping-D_wcte3H.js";import"./index-BtaAnyMo.js";import"./index-CTxqsmk_.js";import"./Avatar-BRbCD7Rv.js";import"./employee-Cmzn10U8.js";import"./index-CBdFl0hb.js";import"./index-B6UfUymp.js";function m(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...p(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:h}),`
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
