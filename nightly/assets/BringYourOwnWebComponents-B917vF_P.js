import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as p}from"./index-B5Ip8tK9.js";import{M as s}from"./index-mpYuzhGm.js";import{M as n}from"./index-BgnWomVF.js";import"./index-O2IkRYlf.js";import"./TagDesign-Ga50IS6u.js";import"./index-U0ga5oGA.js";import"./index-B8m469-U.js";import{F as m}from"./CommandsAndQueries-C3sOnzIN.js";import"./Button-BlFaFbRM.js";import"./jsx-runtime-BhvuzFo7.js";import"./copy-bdWnQ-6t.js";import{T as a}from"./TableOfContent-lIiVb8Ys.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-MRVfrrA9.js";import{L as t}from"./index--i6RZyza.js";import"./iframe-DhtGNhdV.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Icon-C0UcZWk2.js";import"./CustomElementsScope-Bim9ocLE.js";import"./Keys-B3oBAe0t.js";import"./parameters-bundle.css-DHLNbl9v.js";import"./decline-DYSKo6LW.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-CnxOfLPM.js";import"./information-DbtMcSD6.js";import"./sys-enter-2-CTMCSnyQ.js";import"./sys-enter-2-Ciletl9c.js";import"./i18n-defaults-BXUwkpCs.js";import"./index-BVR6w1bU.js";import"./preview-bY4ekSqu.js";import"./DocsRenderer-CFRXHY34-DwiHAlrB.js";import"./react-18-SRpBHcoT.js";import"./Popover-CrUg6BDL.js";import"./PopupsCommon.css-CkrnA4gF.js";import"./FocusableElements-DCoyCYrA.js";import"./isElementHidden-B4HqmI2E.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-B16Uz3cm.js";import"./MediaRange-Bnzt26Xb.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-DoR-amcW.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BbE0XC0n.js";import"./index-faMqGfAS.js";import"./Label-Iv8Am_pm.js";import"./index-n4YNqY3D.js";import"./index-DgC-Wkyw.js";import"./index-j5LXKHzi.js";import"./Text-fxG8xjHY.js";import"./willShowContent-CZcfsNXp.js";import"./Link-BveVQiXd.js";import"./addCustomCSSWithScoping-Cgfw5Re6.js";import"./index-ThksJ1V-.js";import"./BusyIndicator-DQ6Oocfo.js";import"./index-CnihKeIw.js";import"./index-DDwnn4pC.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-ba84kQhl.js";import"./index-DFuXTc70.js";import"./I18nStore-BFRjgGfw.js";import"./Tooltips-v50zrNfc.js";import"./EventProvider-ChtD9rRX.js";function i(r){const o={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Bring Your Own Web Components"}),`
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
