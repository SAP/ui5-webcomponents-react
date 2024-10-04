import{j as t}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as s}from"./index-CcnH5Kt0.js";import{ae as m,af as p}from"./index-Doe8AxqR.js";import{M as n,a as l}from"./index-CoHyeD13.js";import"./index-hUAKbdJl.js";import{C as a}from"./ControlsWithNote-B8k2pokj.js";import{D as c}from"./DocsHeader-DDpKoVxp.js";import{F as h}from"./CommandsAndQueries-D_O5kD1Q.js";import"./index-RYns6xqu.js";import"./WrappingType-CW8URInd.js";import"./Title-P9BL2JTj.js";import{C as d,D as r}from"./IllustratedMessage.stories-ZNvjMwsX.js";import{I as x}from"./index-CdbWXEpc.js";import"./iframe-39tsIwRq.js";import"../sb-preview/runtime.js";import"./index-sbqOYYIm.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./withWebComponent-CatvTRGM.js";import"./utils-U7G133b4.js";import"./useIsomorphicLayoutEffect-Dm78g2BF.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18n-DEVDpFvK.js";import"./decline-CfTJOSOX.js";import"./Icon-DpVcsMQ1.js";import"./Keys-DoZifIQ_.js";import"./parameters-bundle.css-BOSi_lPd.js";import"./i18n-defaults-CzsryEvw.js";import"./information-DOBme6g4.js";import"./alert-Cst6Jx1-.js";import"./class-map-BxE82PvF.js";import"./Button-DaJIiUzx.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-CHzLKGx6.js";import"./i18n-defaults-NO4RLLYJ.js";import"./TagDesign-Dou_yO3g.js";import"./utils-3WN0uVvg.js";import"./main-r7D-Vqmb.js";import"./index-BqxRpBZn.js";import"./Tag-Ba6Qizx6.js";import"./sys-help-2-B637x_Rq.js";import"./index-CJgdXAoE.js";import"./Popover-DC8nUXyl.js";import"./PopupsCommon.css-P4EDdSo7.js";import"./FocusableElements-B84gg-qr.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-CHwfBtCV.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-D18U2KXK.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-KUKKq0uQ.js";import"./Link-tpPG7lbT.js";import"./chunk-NUUEMKO5-BiNW-S4l.js";import"./client-BzooOYO_.js";import"./copy-B31_7TOX.js";import"./copy-pDjV9mbZ.js";import"./clsx-B-dksMZM.js";import"./GitHub-Mark-DGRwmqGf.js";import"./TableOfContent-DBMEQ9W3.js";import"./index-DWBzBaZE.js";import"./I18nStore-CUp48qoB.js";import"./useStylesheet-DPBS0l4j.js";import"./index-msJh19EO.js";import"./index-BhAgbKd_.js";import"./Label-B0tmzzu4.js";import"./index-r42d8n5r.js";import"./index-Df2RbfHi.js";import"./addCustomCSSWithScoping-CKBWDV-T.js";import"./index-Dj0P-9ga.js";import"./BusyIndicator-DOcNJFJt.js";import"./index-xDb7bEld.js";import"./index-DtEO3OH4.js";import"./Avatar-C4XDdmGY.js";import"./employee-DdBiHLUk.js";import"./IllustratedMessage-KkAy2VKR.js";import"./i18n-defaults-CIg60XUX.js";import"./parameters-bundle.css-Cedhh-Gq.js";function e(i){const o={br:"br",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...i.components};return t.jsxs(t.Fragment,{children:[t.jsx(m,{of:d}),`
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
