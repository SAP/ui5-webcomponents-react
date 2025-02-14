import{j as e}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as p}from"./index-ChplMHeC.js";import{M as s}from"./index-DY3S6PvE.js";import{M as n}from"./index-yHjSyutL.js";import"./index-JfOs24Jg.js";import"./TagDesign-Dou_yO3g.js";import"./index-D23YZj_x.js";import"./index-DJ2M8xrO.js";import"./DocsRenderer-CFRXHY34-SZtjIwDB.js";import"./Button-DiEZky6d.js";import"./jsx-runtime--4q9epG_.js";import"./copy-CpGuQhie.js";import{F as m}from"./CommandsAndQueries-Ul6xrMIb.js";import{T as a}from"./TableOfContent-QtRkCFei.js";import"./WrappingType-CW8URInd.js";import"./Title-DXDOdGV-.js";import{L as t}from"./index-qDH2MiBo.js";import"./iframe-Dvw2qBcD.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-oG4QvOAt.js";import"./Icon-CqWzJ5OD.js";import"./CustomElementsScope-CyyomP-e.js";import"./Keys-Can65e7H.js";import"./parameters-bundle.css-Ct2Rzfjz.js";import"./decline-WqXclzji.js";import"./i18n-defaults-u2_1ijdO.js";import"./information-Cg0Ur4-J.js";import"./information-BgTcHNBm.js";import"./sys-enter-2-CpRj5F0h.js";import"./sys-enter-2-sAwqztpn.js";import"./i18n-defaults-B3xVhWeJ.js";import"./index-DkMQ0k7r.js";import"./client-lwzJIAjg.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-D7wkQClO.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./EventProvider-ChtD9rRX.js";import"./Popover-BM5bmFmi.js";import"./PopupsCommon.css-BST0NkVW.js";import"./FocusableElements-BH98Clrf.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Cy2YVXLr.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-CzWTYLl1.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-B1BKTlQ6.js";import"./index-Wfe8JoJe.js";import"./Label-5DArBtCG.js";import"./index-iR9PNDcN.js";import"./index-B1ltsArG.js";import"./index-PYuf3Agp.js";import"./Text-pu3koT6Q.js";import"./Link-D6TMlpbu.js";import"./addCustomCSSWithScoping-lI9D75_A.js";import"./index-BWkycj8K.js";import"./BusyIndicator-CYJz71Ps.js";import"./index-C-pEC8LU.js";import"./index-kg5gipTY.js";import"./AvatarSize-BceVhWoP.js";import"./employee-D8p98cWt.js";import"./index-Dnoo1JqY.js";import"./I18nStore-DM4coTEA.js";function i(r){const o={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Bring Your Own Web Components"}),`
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
