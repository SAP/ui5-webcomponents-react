import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{C as m}from"./DomRefTable.module-V_iz5pw3.js";import{D as p}from"./DocsHeader-HlAwRvXd.js";import{F as l}from"./Footer-eFiH6U5V.js";import"./index-OjgoNOWw.js";import{M as a,C as c,b as d}from"./chunk-HLWAVYOI-Fsp-hxMS.js";import{M as h,a as u}from"./index-9Rd_IMLD.js";import{C as x,D as s}from"./IllustratedMessage.stories-mFp5CCTR.js";import{I as j}from"./index-4sQKLkG8.js";import{u as n}from"./index-RwE9nQVW.js";import"./react-jss.esm-AmlvxLhk.js";import"./index-qkhvCaCQ.js";import"./clsx-2Jv0kmJG.js";import"./i18n-defaults-iuWYBGeC.js";import"./i18nBundle-Q0g0h3jg.js";import"./VersionInfo-pP_ltRZs.js";import"./I18nContext-VUOpdMoH.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./ThemingParameters-UghqSl-x.js";import"./addCustomCSSWithScoping-57oB5XHU.js";import"./UI5Element-66_7Xn_3.js";import"./CustomElementsScopeUtils-EW5YHFd4.js";import"./utils-QJOW-WwB.js";import"./index-74gTEkhE.js";import"./iframe-Lw9Evt3s.js";import"../sb-preview/runtime.js";import"./withWebComponent-2sjwM42G.js";import"./slot-HSrR9XJ-.js";import"./Icon-Pjew2RCR.js";import"./Icons-nm0Q71Sx.js";import"./Integer-kog98579.js";import"./class-map--IQ_mtyb.js";import"./i18n-defaults-RBzcmDt8.js";import"./index-jnaUnQ4S.js";import"./Avatar-AvAtElJx.js";import"./ResizeHandler-hw9R1O21.js";import"./employee-AJKdaGgo.js";import"./alert-Ymv9FYbl.js";import"./index-FGcl4OpY.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./index-ElgmpuNv.js";import"./Link-4yu6Lagp.js";import"./MarkedEvents-aYv14vsS.js";import"./WrappingType-avPrqc94.js";import"./index-ZYxd7chN.js";import"./TableOfContent-E9FhblW9.js";import"./index-lbOevkjn.js";import"./Label-h0RP0plm.js";import"./index-QYh6idnL.js";import"./index-yQJZHkj2.js";import"./Button-mmkHl5a0.js";import"./index-mV7dNsSC.js";import"./Popover-9STvCKGK.js";import"./PopupUtils-yApLm5YW.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-dDtjLgUi.js";import"./FocusableElements-yzAVBk6R.js";import"./isElementHidden-d3-Fo4V6.js";import"./decline-qJ6wR11R.js";import"./i18n-defaults-n2A5pq_J.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-Pb14hoiG.js";import"./BrowserScrollbar.css-F0Fjr-0B.js";import"./index--F0XPsCm.js";import"./mapValues-TkJEqHhn.js";import"./_baseForOwn-SiKZKQog.js";import"./_baseUniq-frCQiV_D.js";import"./index-PPLHz8o0.js";import"./information-ME8CmmmC.js";import"./IllustratedMessage-zeQwvLHc.js";import"./Title-kFJuFDOq.js";import"./i18n-defaults-meCbHC3L.js";import"./parameters-bundle.css-h8WFSBOu.js";const g=`## Structure

The IllustratedMessage consists of the following elements, which are displayed below each other in the following order:

- Illustration
- Title
- Subtitle
- Actions

## Usage

\`IllustratedMessage\` is meant to be used inside container component, for example a \`Card\`, a \`Dialog\` or a \`Page\`
`;function Ht(o={}){const{wrapper:i}=Object.assign({},n(),o.components);return i?t.jsx(i,Object.assign({},o,{children:t.jsx(r,{})})):r();function r(){const e=Object.assign({h2:"h2",code:"code",br:"br",p:"p",strong:"strong",pre:"pre"},n(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:x}),`
`,t.jsx(p,{since:"0.18.0"}),`
`,t.jsx("br",{}),`
`,t.jsx(e.h2,{id:"example",children:"Example"}),`
`,t.jsx(c,{of:s,story:{height:"300px"},layout:"fullscreen"}),`
`,t.jsx(e.h2,{id:"properties",children:"Properties"}),`
`,t.jsx(m,{of:s}),`
`,t.jsx(d,{children:g}),`
`,t.jsx(e.h2,{id:"fully-customizable-title",children:"Fully customizable title"}),`
`,t.jsx(h,{design:u.Warning,hideCloseButton:!0,children:t.jsxs(t.Fragment,{children:[" As the ",t.jsx(e.code,{children:"title"})," slot name collides with the standard HTML ",t.jsx(e.code,{children:"title"})," attribute, using the"," ",t.jsx(e.code,{children:"title"})," prop will not work. ",t.jsx(e.br,{})," You must pass the ",t.jsx(e.code,{children:"title"})," slot as part of the components ",t.jsx(e.code,{children:"children"}),"."]})}),`
`,t.jsxs(e.p,{children:["In some cases you might need to fully customize the title element of the ",t.jsx(e.code,{children:"IllustratedMessage"}),`.
You can achieve this by using the `,t.jsx(e.code,{children:"title"})," slot."]}),`
`,t.jsxs(e.p,{children:[t.jsx(e.strong,{children:"Note:"})," Using this slot, the default title text of illustration and the value of ",t.jsx(e.code,{children:"titleText"})," property will be overwritten."]}),`
`,t.jsx(e.pre,{children:t.jsx(e.code,{className:"language-jsx",children:`<IllustratedMessage style={{ height: '400px' }}>
  <h5 slot="title">This is my fully customized title</h5>
</IllustratedMessage>
`})}),`
`,t.jsx(j,{style:{height:"400px"},children:t.jsx("h5",{slot:"title",children:"This is my fully customized title"})}),`
`,t.jsx(l,{})]})}}export{Ht as default};
//# sourceMappingURL=IllustratedMessage-3zIBlU6t.js.map
