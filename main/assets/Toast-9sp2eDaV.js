import{j as o}from"./ManagedStyles-B3AuKgSD.js";import{useMDXComponents as p}from"./index-3-_tf5dF.js";import{M as e,C as n}from"./index-pWOf6joK.js";import{C as s}from"./ControlsWithNote-DUfJUE-c.js";import{D as a}from"./DocsHeader-CD90m6dJ.js";import{F as c}from"./ProjectTemplate-CEB5z2Hs.js";import"./index-BP8_t0zE.js";import{C as h,D as i}from"./Toast.stories-BfJ8PIYF.js";import"./iframe-CWUtUPjE.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./utils-nqDhxpYS.js";import"./main-HWtSBowW.js";import"./index-Sj5hLr7Q.js";import"./UI5Element-BDMamLf2.js";import"./Boot-DOb84JFo.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScopeUtils-CyqSdClf.js";import"./withWebComponent-B6oBGWld.js";import"./utils-BFMQrOqR.js";import"./useIsomorphicLayoutEffect-CnI1knHw.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-VOPn86Vc.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-BO7pZwTn.js";import"./Icons-BEU0Gkqb.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-CG8awnKl.js";import"./sys-help-2-DvC0Pbzk.js";import"./information-BKTX2iJj.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-DA8J16Yf.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-YvCKXLrH.js";import"./index-Ct5EFdn1.js";import"./decline-DIsY4YnD.js";import"./class-map-k-XuEcbQ.js";import"./Button-BZkI_7BG.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./HasPopup-Cecjtg2t.js";import"./index-BivEB05y.js";import"./Popover-CIglqovv.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-DrS11q-G.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-CQ0KG_Or.js";import"./FocusableElements-B5R4EUYo.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DS8KPGJE.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-C_Zo2l27.js";import"./BrowserScrollbar.css-ljOou4G0.js";import"./index-CXEB9oaL.js";import"./Link-VbEG4eoi.js";import"./chunk-HLWAVYOI-CTSWu1_K.js";import"./client-Di-4O7We.js";import"./copy-C1-wxiKi.js";import"./index-DOzijD-M.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-NUMS3nLe.js";import"./index-xGquCu8c.js";import"./i18n-defaults-DlmaUOWU.js";import"./I18nContext-RJHUyvz-.js";import"./index-CGRQZsF8.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./GitHub-Mark-ZT-4UEle.js";import"./TableOfContent-aXB2p7Nt.js";import"./index-CAQ-6o2y.js";import"./Label-DpitxhM9.js";import"./index-Qz5X82ab.js";import"./addCustomCSSWithScoping-D_wcte3H.js";import"./index-dq2TLIqm.js";import"./index-EB8oSvD9.js";import"./Avatar-BGro6qG4.js";import"./employee-Cmzn10U8.js";import"./index-DFBrJEM2.js";import"./index-BuNWiO4W.js";function m(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...p(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:h}),`
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
