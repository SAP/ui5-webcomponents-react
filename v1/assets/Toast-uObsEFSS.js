import{j as o}from"./useIsomorphicLayoutEffect-CikWMOA2.js";import{useMDXComponents as p}from"./index-3-_tf5dF.js";import{M as e,C as n}from"./index-Bl7TWBVf.js";import{C as s}from"./ControlsWithNote-Dj9S8lm1.js";import{D as a}from"./DocsHeader-7z4W_qzg.js";import{F as c}from"./ProjectTemplate-CYPcwjhG.js";import"./index-BP8_t0zE.js";import{C as h,D as i}from"./Toast.stories-DjRGWVT7.js";import"./iframe-JEi4AH9d.js";import"../sb-preview/runtime.js";import"./index-BxmsGmlx.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./utils-BP1pTFJu.js";import"./main-HWtSBowW.js";import"./index-C_LS0lXu.js";import"./UI5Element-Dvkr4ftu.js";import"./Boot-BJoOGsKW.js";import"./EventProvider-B3ZIXKWe.js";import"./CustomElementsScope-GSIIlBKM.js";import"./withWebComponent-BCCnzL34.js";import"./utils-Sfm-TJlC.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./i18nBundle-wW0MItbA.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-BjzhKVYQ.js";import"./Icons-N9fhreAf.js";import"./Keys-BgUkNma0.js";import"./parameters-bundle.css-DD3rGyNs.js";import"./sys-help-2-DI93tH_2.js";import"./information-BcSpE2Ne.js";import"./i18n-defaults-BdfZArTM.js";import"./alert-Bk-rwgUA.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-DXLPKTKT.js";import"./index-CslhzIoo.js";import"./decline-JmSfETii.js";import"./class-map-D_mD7-LZ.js";import"./Button-D4b8EzwK.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./HasPopup-Cecjtg2t.js";import"./index-BMaSsxn8.js";import"./Popover-DzCK8UbC.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-BdT6tjAh.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-Cpy-U-T0.js";import"./FocusableElements-BZF2F5GS.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DN6_bBb8.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-DamJfpFo.js";import"./BrowserScrollbar.css-CDYHTzEN.js";import"./index-CcJCG-zv.js";import"./Link-o5XdlJUs.js";import"./chunk-HLWAVYOI-Cew6tZUE.js";import"./client-Di-4O7We.js";import"./copy-DX9qIOqh.js";import"./index-BWZepj75.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BlsaS3Lf.js";import"./index-BhJWt8MY.js";import"./i18n-defaults-BFp98Yot.js";import"./I18nContext-RJHUyvz-.js";import"./index-ErD14NIt.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./GitHub-Mark-k88h76JY.js";import"./TableOfContent-DUbStGYz.js";import"./index-DY5Xa-Ss.js";import"./Label-BC-N-dx-.js";import"./index-8WsImpca.js";import"./addCustomCSSWithScoping-A9YHAMuM.js";import"./index-yLNX2byT.js";import"./index-CRaV5V3F.js";import"./Avatar-BoCRIXPa.js";import"./employee-BxX8EC9G.js";import"./index-BnJM2i-z.js";import"./index-Bk2x644j.js";function m(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...p(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(e,{of:h}),`
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
