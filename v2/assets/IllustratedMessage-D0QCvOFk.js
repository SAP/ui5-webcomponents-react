import{j as t}from"./useIsomorphicLayoutEffect-dLBi2t77.js";import{useMDXComponents as s}from"./index-CcnH5Kt0.js";import{ae as m,af as p}from"./index-CqYDsjHI.js";import{M as n,a as l}from"./index-BY3GWTH_.js";import"./index-DihmgXah.js";import{C as a}from"./ControlsWithNote-CRqV3VOv.js";import{D as c}from"./DocsHeader-B2WLpkC1.js";import{F as h}from"./CommandsAndQueries-X13g8ulN.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-B1kZn19T.js";import{C as d,D as r}from"./IllustratedMessage.stories-DdURXK-_.js";import{I as x}from"./index-BKbFBMgL.js";import"./iframe-BCHUfodF.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-DGDOfdbw.js";import"./_getPrototype-B0L0C3AT.js";import"./index-CFFTH5x_.js";import"./index-DrFu-skq.js";import"./withWebComponent-BI8vCDsY.js";import"./utils-D0srJWpX.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-BIWfHXaq.js";import"./decline-iyYkY03H.js";import"./Icon-DlPyRvVh.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-Cg9d3U_H.js";import"./parameters-bundle.css-P4kwt3kq.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-Co3fKK0V.js";import"./alert-CZQwJ3K-.js";import"./class-map-CxhdjMwf.js";import"./Button-CKJP0O-P.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./i18n-defaults-D-rFLjnS.js";import"./TagDesign-Dou_yO3g.js";import"./utils-MywUnkMv.js";import"./main-BPTHlokf.js";import"./index-BIFp705q.js";import"./Tag-BTK7fx1B.js";import"./sys-help-2-kZJAP_Ld.js";import"./index-bSr5Ece3.js";import"./Popover-DPDg_71u.js";import"./PopupsCommon.css-SPVvUYf3.js";import"./getEffectiveScrollbarStyle-D0XpELd9.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-B--7Aoo7.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-BbnETz47.js";import"./BrowserScrollbar.css-D66iWUQm.js";import"./index-B0KcZA3m.js";import"./Link-Dcjrw7gC.js";import"./chunk-HLWAVYOI-BXpQ934H.js";import"./client-BZNFO7bv.js";import"./copy-xOArzHwF.js";import"./copy-BN9qFed-.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-07DkmEp8.js";import"./TableOfContent-B7cg-o8h.js";import"./index-BAFWVqOr.js";import"./I18nStore-V3KeBWWJ.js";import"./useStylesheet-DKtOrKyD.js";import"./index-DXbGRngL.js";import"./index-CcQmYgD0.js";import"./Label-DiR341eU.js";import"./index-C9UgSQG9.js";import"./index-B4SaSvdi.js";import"./addCustomCSSWithScoping-BEazDlzU.js";import"./index-BQWKa7gA.js";import"./BusyIndicator-BnoGb-co.js";import"./index-4u-IcZfU.js";import"./index-CscaDHiu.js";import"./Avatar-C_o4ynlU.js";import"./employee-83ogZf--.js";import"./IllustratedMessage-BU0evGz0.js";import"./i18n-defaults-BCdZ8lmg.js";import"./parameters-bundle.css-D9P5Os1N.js";function e(i){const o={br:"br",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{of:d}),`
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
