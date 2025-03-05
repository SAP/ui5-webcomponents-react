import{j as o}from"./useIsomorphicLayoutEffect-CRjHBNH3.js";import{useMDXComponents as p}from"./index-3-_tf5dF.js";import{M as e,C as n}from"./index-y53uacrZ.js";import{C as s}from"./ControlsWithNote-OEC1vBhe.js";import{D as a}from"./DocsHeader-BCkZ_ILh.js";import{F as c}from"./ProjectTemplate-IbU-at1j.js";import"./index-BP8_t0zE.js";import{C as h,D as i}from"./Toast.stories-DdF18FRP.js";import"./iframe-CR0up_Yh.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./index-BvrWhPKo.js";import"./UI5Element-B2h7kErG.js";import"./Boot-C8BaHzi_.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScope-CE64eqAB.js";import"./withWebComponent-D63zXRZq.js";import"./utils-D8cetgVj.js";import"./slot-Df15G--e.js";import"./event-CegLCnR0.js";import"./i18nBundle-kZ6-2cpn.js";import"./decline-CokZCuO3.js";import"./Icons-YiE9tW4T.js";import"./i18n-defaults-BdfZArTM.js";import"./information-C8ax4bqa.js";import"./alert-k6AQLLnO.js";import"./class-map-BQhMMhlU.js";import"./Icon-BU2Bb3zG.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-_D3nLw4H.js";import"./Button-Bt2u8cP6.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./willShowContent-BOkh0bwj.js";import"./Tooltips-C-7203Cu.js";import"./HasPopup-Cecjtg2t.js";import"./i18n-defaults-C_UMjLXx.js";import"./chunk-HLWAVYOI-lGe2rtn5.js";import"./client-Di-4O7We.js";import"./copy-CMUu1AT6.js";import"./index-DBtBcav3.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DfMTMFhn.js";import"./index-Cyo93O8-.js";import"./i18n-defaults-B3GLB-7B.js";import"./I18nContext-RJHUyvz-.js";import"./index-DW5hgAYR.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./utils-GV3X1JHy.js";import"./main-HWtSBowW.js";import"./GitHub-Mark-DRcchtOx.js";import"./TableOfContent-7RRAQGxT.js";import"./index-uUsIfzfD.js";import"./Link-DXfsQCHY.js";import"./WrappingType-CW8URInd.js";import"./index-Cj1pZIKL.js";import"./Label-Cdlv07NW.js";import"./index-TQA7guYE.js";import"./index-D15fe23r.js";import"./sys-help-2-Bvno1uwq.js";import"./index-Dletu86Y.js";import"./Popover-D-vbAx4K.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-BojsCAVA.js";import"./getActiveElement-BL9Yqj8a.js";import"./getEffectiveScrollbarStyle-BIR1dSFp.js";import"./PopupsCommon.css-Uumup36k.js";import"./FocusableElements-vHT1UwsK.js";import"./isElementHidden-Bpu2V8BK.js";import"./ResizeHandler-NsOSmMjZ.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-BqCgMbDz.js";import"./addCustomCSSWithScoping-CO3cnNRp.js";import"./index-bSK0E_Ur.js";import"./index-C7N0fzvx.js";import"./Avatar-DvrVWNUR.js";import"./employee-CM2OuJvM.js";import"./index-D3X7zxMg.js";import"./index-D7i9MUs_.js";function m(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...p(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:h}),`
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
