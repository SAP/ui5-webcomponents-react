import{j as o}from"./useIsomorphicLayoutEffect-puIvDQED.js";import{useMDXComponents as p}from"./index-3-_tf5dF.js";import{M as e,C as n}from"./index-DIniDsn5.js";import{C as s}from"./ControlsWithNote-Brc3yboS.js";import{D as a}from"./DocsHeader-Bh2a8HQo.js";import{F as c}from"./ProjectTemplate-D74FFvHJ.js";import"./index-BP8_t0zE.js";import{C as h,D as i}from"./Toast.stories-3XGqkQYB.js";import"./iframe-CbMf_dr9.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./utils-CiSg51o-.js";import"./main-HWtSBowW.js";import"./index-BBLVEt0-.js";import"./UI5Element-C8JZhjZA.js";import"./Boot-CehKKsjw.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScopeUtils-B6a-Hnn9.js";import"./withWebComponent-CpdHtqwM.js";import"./utils-B2Z4xp5G.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-DoewWk5r.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-BXh46edA.js";import"./Icons-CCqbOxoD.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-CG8awnKl.js";import"./sys-help-2-DkaQFi6V.js";import"./information-BGWhutS_.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-B59OKHU0.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-cA9sdirt.js";import"./index-WrO60kLb.js";import"./decline-fWbovNdr.js";import"./class-map-BSt0RHbu.js";import"./Button-wye3yEeO.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./HasPopup-Cecjtg2t.js";import"./index-_E8oRYVg.js";import"./Popover-yDBvz9_Q.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-DvcyIhsp.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-CxnKdQ3r.js";import"./FocusableElements-ZkSzzhJd.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DFUfYtDU.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-CrxzMbdj.js";import"./BrowserScrollbar.css-VZcIES4c.js";import"./index-BdqrCqNc.js";import"./Link-D5wE9fp4.js";import"./chunk-HLWAVYOI-CBQ7EWqk.js";import"./client-Di-4O7We.js";import"./copy-BzdHwFnn.js";import"./index-MmFI5CwB.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BNgyBdxY.js";import"./index-Dt_WWgmT.js";import"./i18n-defaults-BRjckM2F.js";import"./I18nContext-RJHUyvz-.js";import"./index-Wey6YoSP.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./GitHub-Mark-DRK6K2v5.js";import"./TableOfContent-uyEGhVmT.js";import"./index-BzTSbSc_.js";import"./Label-ehI9yDjT.js";import"./index-D8HmXKCh.js";import"./addCustomCSSWithScoping-DbtDFkfr.js";import"./index-BrGvCbwy.js";import"./index-C0QXQ70M.js";import"./Avatar-DFzTuyBm.js";import"./employee-BTeWQfSq.js";import"./index-DY-Ikll1.js";import"./index-B4Wjb6Hn.js";function m(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...p(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:h}),`
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
