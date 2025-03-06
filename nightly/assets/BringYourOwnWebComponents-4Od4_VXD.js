import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as p}from"./index-zdXs1Etw.js";import{M as s}from"./index-CpGNECzN.js";import{M as n}from"./index-CAkjh_Z1.js";import"./index-WxLHCma3.js";import"./TagDesign-Ga50IS6u.js";import"./index-C--kS4iy.js";import"./index-DJcrgQOn.js";import{F as m}from"./CommandsAndQueries-Bdg6FVKK.js";import"./Button-9YaJ65nU.js";import"./jsx-runtime-cXES_1K3.js";import"./copy-QX2RrN3g.js";import{T as a}from"./TableOfContent-Bzt3eeAv.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-S4mYuCg5.js";import{L as t}from"./index-D9E0VNBI.js";import"./iframe-C64AJwPv.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Icon-DONP1ba8.js";import"./CustomElementsScope-BUTWMsdD.js";import"./Keys-B3oBAe0t.js";import"./parameters-bundle.css-DHLNbl9v.js";import"./decline-CR10Cnxn.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-DOS1yoWI.js";import"./information-Ddara7JM.js";import"./sys-enter-2-DQ5-UQTF.js";import"./sys-enter-2-ORskki8z.js";import"./i18n-defaults-BXUwkpCs.js";import"./index-B-pEBbkX.js";import"./preview-Dnc-HvWI.js";import"./DocsRenderer-CFRXHY34-C5bMWXRi.js";import"./react-18-CYWbi7Zg.js";import"./Popover-DfnLNPje.js";import"./PopupsCommon.css-D5HcBqqE.js";import"./FocusableElements-D4ksDlVA.js";import"./isElementHidden-B4HqmI2E.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DL3AhQCA.js";import"./MediaRange-Bnzt26Xb.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-NFRZjxLR.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-D-3zc5-n.js";import"./index-BRt6fJqY.js";import"./Label-C64tPyb_.js";import"./index-BfETvGUt.js";import"./index-BQUJqHPJ.js";import"./index-CP0Y_Y_X.js";import"./Text-4pUyEHNI.js";import"./willShowContent-CZcfsNXp.js";import"./Link-CCf5_SyF.js";import"./addCustomCSSWithScoping-QexqrevI.js";import"./index-DWg6TCN4.js";import"./BusyIndicator-Mc6uS3Ug.js";import"./index-DaB0Mse-.js";import"./index-BPRvxvn4.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-C5NYxbXs.js";import"./index-ivn0CwQ3.js";import"./I18nStore-B-rJ6v8Q.js";import"./Tooltips-BLn7sIp1.js";import"./EventProvider-ChtD9rRX.js";function i(r){const o={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Bring Your Own Web Components"}),`
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
