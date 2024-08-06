import{j as o}from"./useIsomorphicLayoutEffect-DCJrFAVs.js";import{useMDXComponents as m}from"./index-D3szj05g.js";import{M as p,C as n}from"./index-BAmWtMDW.js";import"./index-C-bNuxbL.js";import{C as s}from"./ControlsWithNote-BPS_tqfa.js";import{D as a}from"./DocsHeader-EGAEduEv.js";import{F as c}from"./CommandsAndQueries-RpQuIxkZ.js";import"./index-ClU-Tc1p.js";import"./WrappingType-CW8URInd.js";import{C as h,D as i}from"./Toast.stories-2-1s57bK.js";import"./iframe-CNne69o2.js";import"../sb-preview/runtime.js";import"./index-C3ZJCerc.js";import"./_baseForOwn-CS3BKc8p.js";import"./mapValues-DmWmqx7o.js";import"./_baseUniq-DGAWXpCf.js";import"./index-BRTKD46C.js";import"./index-DrFu-skq.js";import"./withWebComponent-Dj0CMfaz.js";import"./utils-B21VtmG1.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-vPfkXYRc.js";import"./decline-Dtt8f7gG.js";import"./Icon-8rAbDJhl.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-B8mU3KX1.js";import"./parameters-bundle.css-BFbT_feV.js";import"./i18n-defaults-Cz0fD7oZ.js";import"./information-pNQtyMX0.js";import"./alert-D6VWtbrR.js";import"./class-map-DwAhupCS.js";import"./Button-LAxw2z5E.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-BrbxGX_s.js";import"./TagDesign-Dou_yO3g.js";import"./utils-OTswyn8Z.js";import"./main-CzLLrZqh.js";import"./index-GLIBtNTn.js";import"./Tag-DOc2KdyV.js";import"./sys-help-2-CBpcyxoA.js";import"./index-BHzxwIzJ.js";import"./Popover-C3k48onv.js";import"./PopupsCommon.css-CL-yqmiO.js";import"./getEffectiveScrollbarStyle-CFKww5-v.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CuRzO4ve.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-CpZMqJvf.js";import"./BrowserScrollbar.css-C7k9hgHd.js";import"./index-DxS1xq0o.js";import"./Link-B1bLgUAx.js";import"./chunk-HLWAVYOI-BxRKGeJD.js";import"./client-B23sEKGq.js";import"./copy-DzY-XerN.js";import"./copy-eLLizoPG.js";import"./index-PGreZEtb.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-waKyCe7Y.js";import"./index-BZAvLi5K.js";import"./I18nStore-D1uEcPVD.js";import"./GitHub-Mark-CULGv64g.js";import"./TableOfContent-C4-I3Rqo.js";import"./index-BC6Sa5OT.js";import"./Label-DYSmE5xX.js";import"./index-BiycBBmo.js";import"./index-BRRZ3ctB.js";import"./addCustomCSSWithScoping-B01F51vr.js";import"./index-aQF491Uq.js";import"./index-DfpOXlFZ.js";import"./index-BjXtP3F2.js";import"./Avatar-CTO3QSeR.js";import"./employee-CIkKCEkx.js";import"./index-CPaljs9n.js";function e(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:h}),`
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
`,o.jsx(c,{})]})}function Bo(r={}){const{wrapper:t}={...m(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(e,{...r})}):e(r)}export{Bo as default};
