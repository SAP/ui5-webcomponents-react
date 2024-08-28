import{j as e}from"./useIsomorphicLayoutEffect-dLBi2t77.js";import{useMDXComponents as p}from"./index-CcnH5Kt0.js";import{ae as s}from"./index-DmLT14xl.js";import{M as n}from"./index-BY3GWTH_.js";import"./index-E4vxyXwy.js";import"./TagDesign-Dou_yO3g.js";import"./index-RYns6xqu.js";import"./index-sbqOYYIm.js";import"./chunk-HLWAVYOI-BLT38w0U.js";import"./withWebComponent-BI8vCDsY.js";import"./copy-BN9qFed-.js";import"./Button-CKJP0O-P.js";import{F as m}from"./CommandsAndQueries-Be9fbZCB.js";import{T as a}from"./TableOfContent-B7cg-o8h.js";import"./WrappingType-CW8URInd.js";import"./Title-B1kZn19T.js";import{L as t}from"./index-B0KcZA3m.js";import"./iframe-D1XqO1sz.js";import"../sb-preview/runtime.js";import"./_baseUniq-DGDOfdbw.js";import"./_getPrototype-B0L0C3AT.js";import"./index-CFFTH5x_.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-BIWfHXaq.js";import"./utils-D0srJWpX.js";import"./decline-iyYkY03H.js";import"./Icon-DlPyRvVh.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-Cg9d3U_H.js";import"./parameters-bundle.css-P4kwt3kq.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-Co3fKK0V.js";import"./alert-CZQwJ3K-.js";import"./class-map-CxhdjMwf.js";import"./i18n-defaults-D-rFLjnS.js";import"./client-BZNFO7bv.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Popover-DPDg_71u.js";import"./PopupsCommon.css-SPVvUYf3.js";import"./getEffectiveScrollbarStyle-D0XpELd9.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-B--7Aoo7.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-BbnETz47.js";import"./BrowserScrollbar.css-D66iWUQm.js";import"./index-DXbGRngL.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DKtOrKyD.js";import"./index-CcQmYgD0.js";import"./Label-DiR341eU.js";import"./index-LwfcJDto.js";import"./index-bSr5Ece3.js";import"./Link-Dcjrw7gC.js";import"./addCustomCSSWithScoping-BEazDlzU.js";import"./index-BQWKa7gA.js";import"./BusyIndicator-BnoGb-co.js";import"./index-4u-IcZfU.js";import"./index-CscaDHiu.js";import"./Avatar-C_o4ynlU.js";import"./employee-83ogZf--.js";import"./index-CmU84iFA.js";import"./I18nStore-V3KeBWWJ.js";import"./index-B4SaSvdi.js";function i(r){const o={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Bring Your Own Web Components"}),`
`,e.jsx(o.h1,{id:"bring-your-own-web-components",children:"Bring Your Own Web Components"}),`
`,e.jsx(a,{}),`
`,e.jsxs(o.p,{children:["If you have created a custom UI5 Web Components package, you will be able to create React component wrappers in your project by leveraging our ",e.jsx(o.a,{href:"http://npmjs.com/package/@ui5/webcomponents-react-cli",rel:"nofollow",children:"@ui5/webcomponents-react-cli"}),"."]}),`
`,e.jsx(n,{hideCloseButton:!0,design:"Critical",children:e.jsxs(e.Fragment,{children:["The UI5 Web Components for React CLI package is tailor-made for custom UI5 Web Components packages following"," ",e.jsx(t,{href:"https://sap.github.io/ui5-webcomponents/docs/development/",children:"this documentation"}),". ",e.jsx(o.br,{}),"You can not use it for creating React wrapper for arbitrary custom element libraries."]})}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h2,{id:"create-react-wrappers",children:"Create React Wrappers"}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:["This guide uses the name ",e.jsx(o.code,{children:"my-custom-webcomponents-package"})," for the custom UI5 Web Components package. ",e.jsx("br",{}),`
Please replace all occurrences with your real package name when following this guide.`]}),`
`]}),`
`,e.jsxs(o.p,{children:["First of all, install the ",e.jsx(o.code,{children:"@ui5/webcomponents-react-cli"})," package in your project:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-shell",children:`npm install @ui5/webcomponents-react-cli --save-dev

# if your package is based on UI5 Web Components V1, please install the V1 version of the CLI
npm install @ui5/webcomponents-react-cli@V1 --save-dev
`})}),`
`,e.jsx(o.p,{children:"Then, install your custom UI5 Web Components package:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-shell",children:`npm install my-custom-webcomponents-package --save
`})}),`
`,e.jsxs(o.p,{children:["Now, you can add a npm script to create your wrapper components.",e.jsx("br",{}),`
`,e.jsxs(o.em,{children:["We recommend ensuring that the target directory (specified by the ",e.jsx(o.code,{children:"--out"})," parameter) is empty."]})]}),`
`,e.jsx(n,{hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:["The UI5 Web Component for React CLI is not aware of any code style conventions you may be using in your project, so we recommend that you run tools such as ",e.jsx(t,{href:"https://prettier.io/",children:"prettier"})," and"," ",e.jsx(t,{href:"https://eslint.org/",children:"eslint"})," after creating the wrapper components if you are using them in your project."]})}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-json",children:`{
  "//": "rest of your applications package.json",
  "scripts": {
    "//": "your other scripts",
    "create-webcomponent-wrappers": "ui5-wcr create-wrappers --packageName my-custom-webcomponents-package --out ./any/directory/in/your/project"
  }
}
`})}),`
`,e.jsx(m,{})]})}function We(r={}){const{wrapper:o}={...p(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(i,{...r})}):i(r)}export{We as default};
