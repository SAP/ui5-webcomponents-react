import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as p}from"./index-zdXs1Etw.js";import{M as s}from"./index-o1C7E52r.js";import{M as n}from"./index-BSyUicdy.js";import"./index-CzSYMmQB.js";import"./TagDesign-Ga50IS6u.js";import"./index-C--kS4iy.js";import"./index-DJcrgQOn.js";import"./DocsRenderer-CFRXHY34-DU6ywN0k.js";import"./Button-ByA1SsYZ.js";import"./jsx-runtime-D97XV8sh.js";import"./copy-DTrJKJyj.js";import{F as m}from"./CommandsAndQueries-CSzQ_44E.js";import{T as a}from"./TableOfContent-Bzt3eeAv.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-BOwCdWYi.js";import{L as t}from"./index-DygVgSN6.js";import"./iframe-DsB57b17.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Icon-BCDdExWr.js";import"./ManagedStyles-BCO68z9u.js";import"./CustomElementsScope-DUj-UV8m.js";import"./Keys-DjLYsotv.js";import"./parameters-bundle.css-Ct2Rzfjz.js";import"./decline-B6jD48Ye.js";import"./i18n-defaults-DCrxyi3I.js";import"./information-DV2AGhUW.js";import"./information-B_fD0mel.js";import"./sys-enter-2-8yiHyFC4.js";import"./sys-enter-2-3FJ7denB.js";import"./i18n-defaults-CmQf_FFT.js";import"./withWebComponent-BfnST9Sw.js";import"./index-B-pEBbkX.js";import"./react-18-CYWbi7Zg.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-CYRaZPq9.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./EventProvider-ChtD9rRX.js";import"./Popover-RfvVyLvj.js";import"./PopupsCommon.css-CWTNNGZS.js";import"./FocusableElements-GjzXbghM.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-pRnz8BGg.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-tta-8L6d.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-D5Lehdk0.js";import"./index-BBE5vJrD.js";import"./Label-B_yE8MRJ.js";import"./index-Dno20kSL.js";import"./index-BtffljRr.js";import"./index-B5cMioGG.js";import"./Text-DVHHInte.js";import"./Link-DksYOIa5.js";import"./addCustomCSSWithScoping-CDsicyAT.js";import"./index-aJHEJiAx.js";import"./BusyIndicator-CjR-E_fs.js";import"./index-BsfhEIY9.js";import"./index-C0zzG69g.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-Boc3Tmse.js";import"./index-CImbSc_0.js";import"./I18nStore-SPUtoouk.js";function i(r){const o={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Bring Your Own Web Components"}),`
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
`,e.jsx(m,{})]})}function Me(r={}){const{wrapper:o}={...p(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(i,{...r})}):i(r)}export{Me as default};
