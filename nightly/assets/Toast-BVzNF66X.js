import{j as o}from"./useIsomorphicLayoutEffect-DCJrFAVs.js";import{useMDXComponents as m}from"./index-D3szj05g.js";import{M as p,C as n}from"./index-DuT2KoE2.js";import"./index-BpNi7ocy.js";import{C as s}from"./ControlsWithNote-DqQg15wD.js";import{D as a}from"./DocsHeader-BLvatQUS.js";import{F as c}from"./CommandsAndQueries-CoRcnZzs.js";import"./index-ClU-Tc1p.js";import"./WrappingType-CW8URInd.js";import{C as h,D as i}from"./Toast.stories-DloCODbN.js";import"./iframe-ZWGuvtYA.js";import"../sb-preview/runtime.js";import"./index-C3ZJCerc.js";import"./_baseForOwn-CS3BKc8p.js";import"./mapValues-DmWmqx7o.js";import"./_baseUniq-DGAWXpCf.js";import"./index-BRTKD46C.js";import"./index-DrFu-skq.js";import"./withWebComponent-Bw_l6Ewh.js";import"./utils-BHgxP_Sc.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-CyjtwURt.js";import"./decline-BnR7C84V.js";import"./Icon-Bjam5y2n.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-mCyQq_6q.js";import"./parameters-bundle.css-BFbT_feV.js";import"./i18n-defaults-Cz0fD7oZ.js";import"./information-DR3Ry5yc.js";import"./alert-CjjdhJ65.js";import"./class-map-DoF19r8m.js";import"./Button-Bn9nox5u.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-BuF9xM0k.js";import"./TagDesign-Dou_yO3g.js";import"./utils-QdjPpgjN.js";import"./main-CzLLrZqh.js";import"./index-DqrPH-RU.js";import"./Tag-oXDdtvF6.js";import"./sys-help-2-BRv5pQ3O.js";import"./index-CmpUjKyK.js";import"./Popover-ueRYOmZP.js";import"./PopupsCommon.css-T1OzgQOS.js";import"./getEffectiveScrollbarStyle-D1VPwmZI.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CV6FH9MC.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-Bys0Ab5G.js";import"./BrowserScrollbar.css-AwpGtRUX.js";import"./index-DQHUBJQm.js";import"./Link-DaxkRKad.js";import"./chunk-HLWAVYOI-tol9v0Vp.js";import"./client-B23sEKGq.js";import"./copy-DLiPdfEP.js";import"./copy-D_DpjAH5.js";import"./index-PGreZEtb.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-waKyCe7Y.js";import"./index-6v2Oy41S.js";import"./I18nStore-CqpKwI0j.js";import"./GitHub-Mark-CULGv64g.js";import"./TableOfContent-D7AfnOqM.js";import"./index-cb_1-UsB.js";import"./Label-C8Y7h3Z-.js";import"./index-BhDaFkLK.js";import"./index-MkKF04B_.js";import"./addCustomCSSWithScoping-ClhnucNU.js";import"./index-BhBXmkmt.js";import"./index-VDGBiTNb.js";import"./index-CwzkDLSR.js";import"./Avatar-BRGukaio.js";import"./employee-CWJksvD0.js";import"./index-D4SxIkvo.js";function e(r){const t={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(p,{of:h}),`
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
