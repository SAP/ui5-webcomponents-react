import{j as t}from"./useIsomorphicLayoutEffect-Dhma_bjk.js";import{useMDXComponents as s}from"./index-CcnH5Kt0.js";import{ae as m,af as p}from"./index-B-1a6k0v.js";import{M as n,a as l}from"./index-CGD6y5QJ.js";import"./index-Bezg6zKD.js";import{C as a}from"./ControlsWithNote-zT1FoODD.js";import{D as c}from"./DocsHeader-DYqnjWNq.js";import{F as h}from"./CommandsAndQueries-OaNRawAu.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-ZqK5PCI6.js";import{C as d,D as r}from"./IllustratedMessage.stories-DnT3ft8a.js";import{I as x}from"./index-C5_Luqgt.js";import"./iframe-VZyvr0fH.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-DGDOfdbw.js";import"./_getPrototype-B0L0C3AT.js";import"./index-CFFTH5x_.js";import"./index-DrFu-skq.js";import"./withWebComponent-DUIvHLMA.js";import"./utils-CKNAmS37.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-DMA-_yLC.js";import"./decline-CHk4a2e7.js";import"./Icon-C44BwzQ8.js";import"./Keys-D1SxbTOd.js";import"./parameters-bundle.css-Bga-3Zi8.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-Sy77r2nJ.js";import"./alert-cQZYHoWK.js";import"./class-map-BJErPj2t.js";import"./Button-CxQnwzDr.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BzCnTBef.js";import"./i18n-defaults-DTxNk1Ll.js";import"./TagDesign-Dou_yO3g.js";import"./utils-C4M9Gqbc.js";import"./main-C6oD7XT2.js";import"./index-D8yCSEP8.js";import"./Tag-CPIJx4VG.js";import"./sys-help-2-Bvq59Jti.js";import"./index-WEA3P0fF.js";import"./Popover-BePXU9v3.js";import"./PopupsCommon.css-DBrv9Ok7.js";import"./FocusableElements-19hFFt5Q.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-ufE0tBOz.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-Bd8TDVwu.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-DI2d1WHF.js";import"./Link-CiJW-swg.js";import"./chunk-HLWAVYOI-BV8hTK1B.js";import"./client-BZNFO7bv.js";import"./copy-CYHXqHWb.js";import"./copy-pca8p_zU.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-CnYostSV.js";import"./TableOfContent-J0xBpY2P.js";import"./index-15JG8Y5_.js";import"./I18nStore-B2w4xK_s.js";import"./useStylesheet-DcbwKAeb.js";import"./index-3WD7if5i.js";import"./index-D_wOg0B-.js";import"./Label-BAMwsHnp.js";import"./index-CF8fMoC4.js";import"./index-9j-aR15A.js";import"./addCustomCSSWithScoping-BRJo9-6E.js";import"./index-DhepUemJ.js";import"./BusyIndicator-BGYa7yRK.js";import"./index-BNERneIU.js";import"./index-4YU2sHPi.js";import"./Avatar-C5E79jBl.js";import"./employee-DWCutjal.js";import"./IllustratedMessage-h2OoeW6w.js";import"./i18n-defaults-CMzKLht2.js";import"./parameters-bundle.css-By19-ehE.js";function e(i){const o={br:"br",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{of:d}),`
`,t.jsx(c,{since:"0.18.0"}),`
`,t.jsx("br",{}),`
`,t.jsx(o.h2,{id:"example",children:"Example"}),`
`,t.jsx(p,{of:r,story:{height:"300px"},layout:"fullscreen"}),`
`,t.jsx(o.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(a,{of:r}),`
`,t.jsx(o.h2,{id:"fully-customizable-title",children:"Fully customizable title"}),`
`,t.jsx(n,{design:l.Critical,hideCloseButton:!0,children:t.jsxs(t.Fragment,{children:["As the ",t.jsx(o.code,{children:"title"})," slot name collides with the standard HTML ",t.jsx(o.code,{children:"title"})," attribute, using the"," ",t.jsx(o.code,{children:"title"})," prop will not work. ",t.jsx(o.br,{}),"You must pass the ",t.jsx(o.code,{children:"title"})," slot as part of the components ",t.jsx(o.code,{children:"children"}),"."]})}),`
`,t.jsxs(o.p,{children:["In some cases you might need to fully customize the title element of the ",t.jsx(o.code,{children:"IllustratedMessage"}),`.
You can achieve this by using the `,t.jsx(o.code,{children:"title"})," slot."]}),`
`,t.jsxs(o.p,{children:[t.jsx(o.strong,{children:"Note:"})," Using this slot, the default title text of illustration and the value of ",t.jsx(o.code,{children:"titleText"})," property will be overwritten."]}),`
`,t.jsx(o.pre,{children:t.jsx(o.code,{className:"language-jsx",children:`<IllustratedMessage style={{ height: '400px' }}>
  <h5 slot="title">This is my fully customized title</h5>
</IllustratedMessage>
`})}),`
`,t.jsx(x,{style:{height:"400px"},children:t.jsx("h5",{slot:"title",children:"This is my fully customized title"})}),`
`,t.jsx(h,{})]})}function Wt(i={}){const{wrapper:o}={...s(),...i.components};return o?t.jsx(o,{...i,children:t.jsx(e,{...i})}):e(i)}export{Wt as default};
