import{j as t}from"./jsx-runtime-DtaoT6pD.js";import{C as m}from"./DomRefTable.module-rVGi012t.js";import{D as l}from"./DocsHeader-sc4weluW.js";import{F as p}from"./Footer-jfdx2u5v.js";import"./index-OjgoNOWw.js";import{M as a,C as c,b as d}from"./chunk-HLWAVYOI-UeCpg4wL.js";import{M as h,a as u}from"./index-visvyNcT.js";import{C as x,D as s}from"./IllustratedMessage.stories-wAAOloeE.js";import{I as j}from"./index-_p5T7reW.js";import{u as n}from"./index-RwE9nQVW.js";import"./react-jss.esm-AmlvxLhk.js";import"./index-S1zyQWjr.js";import"./clsx-2Jv0kmJG.js";import"./ThemingParameters-UghqSl-x.js";import"./addCustomCSSWithScoping-PxRYiixA.js";import"./UI5Element-51XrG2PJ.js";import"./CustomElementsScopeUtils-FvbtGFoH.js";import"./utils-CrDMzPRG.js";import"./index-WbINX23N.js";import"./iframe-_OlRtZJR.js";import"../sb-preview/runtime.js";import"./withWebComponent-ceo0jn6D.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./Icon-HNXZSIOG.js";import"./Icons-3pbvVZUr.js";import"./Integer-kog98579.js";import"./class-map-JXa0-u4l.js";import"./i18n-defaults-RBzcmDt8.js";import"./index-F2xDrKNT.js";import"./Avatar-hI9OSh5N.js";import"./ResizeHandler-9pqGT1BJ.js";import"./employee-QIf_hgHb.js";import"./alert-TGfQazfI.js";import"./index-06AsSkAh.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./index-pvnqkZ_E.js";import"./Link-DluRE2Z1.js";import"./MarkedEvents-aYv14vsS.js";import"./WrappingType-avPrqc94.js";import"./index-ZYxd7chN.js";import"./TableOfContent-bZnE1URh.js";import"./index-nNeIKPnb.js";import"./Label-z__cPwIf.js";import"./index-QYh6idnL.js";import"./index-2S6zoQWg.js";import"./Button-a5xMWTkk.js";import"./index-f2x4nzdX.js";import"./Popover-pPQH5XeW.js";import"./PopupUtils-JhQDb1QD.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-q9U65Wkb.js";import"./FocusableElements-W9IwOAGU.js";import"./isElementHidden-d3-Fo4V6.js";import"./decline-Q45dXYUl.js";import"./i18n-defaults-n2A5pq_J.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-uWW-8QIe.js";import"./BrowserScrollbar.css-HfEGARrw.js";import"./index--F0XPsCm.js";import"./mapValues-TkJEqHhn.js";import"./_baseForOwn-SiKZKQog.js";import"./_baseUniq-frCQiV_D.js";import"./index-PPLHz8o0.js";import"./information-WfdY8QHP.js";import"./IllustratedMessage-uGFDrDPa.js";import"./Title-QpYFGHiM.js";import"./i18n-defaults-meCbHC3L.js";import"./parameters-bundle.css-h8WFSBOu.js";const g=`## Structure

The IllustratedMessage consists of the following elements, which are displayed below each other in the following order:

- Illustration
- Title
- Subtitle
- Actions

## Usage

\`IllustratedMessage\` is meant to be used inside container component, for example a \`Card\`, a \`Dialog\` or a \`Page\`
`;function Xt(o={}){const{wrapper:i}=Object.assign({},n(),o.components);return i?t.jsx(i,Object.assign({},o,{children:t.jsx(r,{})})):r();function r(){const e=Object.assign({h2:"h2",code:"code",br:"br",p:"p",strong:"strong",pre:"pre"},n(),o.components);return t.jsxs(t.Fragment,{children:[t.jsx(a,{of:x}),`
`,t.jsx(l,{since:"0.18.0"}),`
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
`,t.jsx(p,{})]})}}export{Xt as default};
//# sourceMappingURL=IllustratedMessage-LIb_IxrZ.js.map
