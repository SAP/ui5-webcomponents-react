import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as p}from"./index-DpYXPI8c.js";import{M as s}from"./index-CErxVghO.js";import{M as n}from"./index-BPgdWBHk.js";import"./index-B46ML-cU.js";import"./TagDesign-Ga50IS6u.js";import"./index-ChI72X44.js";import"./index-DnYn5RTv.js";import{F as m}from"./CommandsAndQueries-Ca10hYhb.js";import"./Button-BhJpItN3.js";import"./jsx-runtime-DITkwERB.js";import"./copy-BjWKS8Rq.js";import{T as a}from"./TableOfContent-DfYxHRnX.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-DKHf5Ic-.js";import{L as t}from"./index-C5x9Zqi4.js";import"./iframe-DaOsqgA1.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Icon-g4jJGwIi.js";import"./CustomElementsScope-CRlaEhjH.js";import"./Keys-B3oBAe0t.js";import"./parameters-bundle.css-DHLNbl9v.js";import"./decline-Bk6V92qv.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-B1L_xjDU.js";import"./information-BQmhacxY.js";import"./sys-enter-2-3Y2FtBDI.js";import"./sys-enter-2-DnGfeGAh.js";import"./i18n-defaults-BXUwkpCs.js";import"./index-BS9IDQLN.js";import"./preview-BIAm6YC9.js";import"./DocsRenderer-CFRXHY34-CIxklfQN.js";import"./react-18-B55prW7j.js";import"./Popover-C53QSKRD.js";import"./PopupsCommon.css-BG-751as.js";import"./FocusableElements-noNskoYV.js";import"./isElementHidden-B4HqmI2E.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Cex6U3jO.js";import"./MediaRange-Bnzt26Xb.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-BZHnAAif.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BYtqX5T7.js";import"./index-B_fY4UqP.js";import"./Label-Cw3xmdjW.js";import"./index-D5gqvCq0.js";import"./index-vVWMke_Z.js";import"./index-BZypq4CF.js";import"./Text-BBBHwYsI.js";import"./willShowContent-CZcfsNXp.js";import"./Link-C_1Qeegk.js";import"./addCustomCSSWithScoping-bWjUKP8X.js";import"./index-CbnmVlWA.js";import"./BusyIndicator-DTHwLaG3.js";import"./index-c5_gOmO2.js";import"./index-II2KQk7A.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DyHFsBXc.js";import"./index-BpP5KvHq.js";import"./I18nStore-BBWtp4Wg.js";import"./Tooltips-CtkDPpba.js";import"./EventProvider-ChtD9rRX.js";function i(r){const o={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Bring Your Own Web Components"}),`
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
