import{j as o}from"./useIsomorphicLayoutEffect-DCJrFAVs.js";import{useMDXComponents as m}from"./index-D3szj05g.js";import{M as n,C as s,d as a,D as l,A as c}from"./index-BUc40Rkf.js";import"./index-aXNDQIP-.js";import{C as d}from"./ControlsWithNote-Bq5GnMAJ.js";import{D as h}from"./DocsHeader-BI9QP4T7.js";import{F as x}from"./CommandsAndQueries-DX67nFy5.js";import"./index-ClU-Tc1p.js";import"./WrappingType-CW8URInd.js";import{C as j,D as e}from"./ColorPalettePopover.stories-DKkwDpdW.js";import{S as C}from"./SubcomponentsSection-BVy4lpQe.js";import{C as i}from"./index-CuEnYiQ_.js";import"./iframe-ocS5gnjC.js";import"../sb-preview/runtime.js";import"./index-C3ZJCerc.js";import"./_baseForOwn-CS3BKc8p.js";import"./mapValues-DmWmqx7o.js";import"./_baseUniq-DGAWXpCf.js";import"./index-BRTKD46C.js";import"./index-DrFu-skq.js";import"./withWebComponent-Bw_l6Ewh.js";import"./utils-BHgxP_Sc.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-CyjtwURt.js";import"./decline-BnR7C84V.js";import"./Icon-Bjam5y2n.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-mCyQq_6q.js";import"./parameters-bundle.css-BFbT_feV.js";import"./i18n-defaults-Cz0fD7oZ.js";import"./information-DR3Ry5yc.js";import"./alert-CjjdhJ65.js";import"./class-map-DoF19r8m.js";import"./Button-Bn9nox5u.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-BuF9xM0k.js";import"./TagDesign-Dou_yO3g.js";import"./utils-CantLTAT.js";import"./main-CzLLrZqh.js";import"./index-Cs40neje.js";import"./Tag-oXDdtvF6.js";import"./sys-help-2-BRv5pQ3O.js";import"./index-Di_V9a9c.js";import"./Popover-ueRYOmZP.js";import"./PopupsCommon.css-T1OzgQOS.js";import"./getEffectiveScrollbarStyle-D1VPwmZI.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CV6FH9MC.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-Bys0Ab5G.js";import"./BrowserScrollbar.css-AwpGtRUX.js";import"./index-DoDNjErc.js";import"./Link-DaxkRKad.js";import"./chunk-HLWAVYOI-BpLbg0YS.js";import"./client-B23sEKGq.js";import"./copy-DLiPdfEP.js";import"./copy-D_DpjAH5.js";import"./index-PGreZEtb.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-waKyCe7Y.js";import"./index-6v2Oy41S.js";import"./I18nStore-CqpKwI0j.js";import"./GitHub-Mark-CULGv64g.js";import"./TableOfContent-BKq6i8LE.js";import"./index-C3bSxdrg.js";import"./Label-C8Y7h3Z-.js";import"./index-BNjPUlYK.js";import"./index-50ZoU7VT.js";import"./addCustomCSSWithScoping-ClhnucNU.js";import"./index-_WUtPQIN.js";import"./index-C5Ri76cu.js";import"./index-B3SeZbdu.js";import"./Avatar-BRGukaio.js";import"./employee-CWJksvD0.js";import"./ResponsivePopoverCommon.css-sHOieQOv.js";import"./Title-DlbwpOq2.js";import"./ResponsivePopover-BPe6UEFQ.js";import"./Dialog-C0sQq9aS.js";import"./ValueState-Bg0UWejw.js";import"./ItemNavigation-J0QfqElW.js";function p(r){const t={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...m(),...r.components};return o.jsxs(o.Fragment,{children:[o.jsx(n,{of:j}),`
`,o.jsx(h,{since:"0.20.0"}),`
`,o.jsx("br",{}),`
`,o.jsx(t.h2,{id:"example",children:"Example"}),`
`,o.jsx(s,{of:e}),`
`,o.jsx(t.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(d,{of:e}),`
`,o.jsx(t.h2,{id:"opening-colorpalettepopovers",children:"Opening ColorPalettePopovers"}),`
`,o.jsxs(t.p,{children:[o.jsx(t.code,{children:"ColorPalettePopover"}),"s can only be opened by attaching a ",o.jsx(t.code,{children:"ref"})," to the component and then call the corresponding ",o.jsx(t.strong,{children:o.jsx(t.code,{children:"showAt"})})," method. The method receives the target element - ",o.jsxs(t.em,{children:["on which the ",o.jsx(t.code,{children:"ColorPalettePopover"})," is to be opened"]})," - as parameter."]}),`
`,o.jsx(t.pre,{children:o.jsx(t.code,{className:"language-jsx",children:`const ColorPalettePopoverComponent = () => {
  const popoverRef = useRef();
  const onButtonClick = (e) => {
    popoverRef.current.showAt(e.target);
  };
  return (
    <>
      <Button onClick={onButtonClick}>Open ColorPalettePopover</Button>
      <ColorPalettePopover ref={popoverRef}>
        <ColorPaletteItem value="pink" />
        <ColorPaletteItem value="darkblue" />
      </ColorPalettePopover>
    </>
  );
};
`})}),`
`,o.jsx(a,{children:C}),`
`,o.jsx(t.h2,{id:"colorpaletteitem",children:"ColorPaletteItem"}),`
`,o.jsx(l,{of:i}),`
`,o.jsx(c,{of:i}),`
`,o.jsx(x,{})]})}function Uo(r={}){const{wrapper:t}={...m(),...r.components};return t?o.jsx(t,{...r,children:o.jsx(p,{...r})}):p(r)}export{Uo as default};
