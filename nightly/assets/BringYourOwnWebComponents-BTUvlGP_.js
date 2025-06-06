import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as p}from"./index-B5Ip8tK9.js";import{M as s}from"./index-BFcJ8caL.js";import{M as n}from"./index-8msv1YOk.js";import"./index-DccF1NVj.js";import"./Tag-BGp0HQg1.js";import"./index-U0ga5oGA.js";import"./index-B8m469-U.js";import{F as m}from"./CommandsAndQueries-Boi2_aR-.js";import"./Button-CddyUUJt.js";import"./jsx-runtime-CTdjW1dy.js";import"./copy-DVi57tol.js";import{T as a}from"./TableOfContent-BG9P-NK7.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-JqJU4F4n.js";import{L as t}from"./index-xR1I-Wi5.js";import"./iframe-L-Ox0b5C.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-CjR4HGlq.js";import"./Icon-Cq4WdPfD.js";import"./CustomElementsScope-BI7irdrP.js";import"./Keys-BxH5KEHJ.js";import"./parameters-bundle.css-CKhNLE8L.js";import"./decline-CzIZ7Vnl.js";import"./i18n-defaults-CmVK7_Fz.js";import"./information-C85sdt-6.js";import"./information-CovZJhop.js";import"./sys-enter-2-LJy9JDcm.js";import"./sys-enter-2-CUlYw7x6.js";import"./alert-DKjZxuBr.js";import"./i18n-defaults-Bwpyempw.js";import"./willShowContent-CZcfsNXp.js";import"./sys-help-2-CdqLSqXL.js";import"./index-BVR6w1bU.js";import"./preview-BNpk7lw5.js";import"./DocsRenderer-CFRXHY34-CVHliqA1.js";import"./react-18-SRpBHcoT.js";import"./Popover-D3TB1XeJ.js";import"./PopupsCommon.css-3rSjbG44.js";import"./FocusableElements-Cvm20E5b.js";import"./isElementHidden-B4HqmI2E.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-B38a0cLW.js";import"./MediaRange-Bnzt26Xb.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./getEffectiveScrollbarStyle-zkSO3ShF.js";import"./index-D71WPoKU.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-4DYJndCZ.js";import"./index-BNsc4RDp.js";import"./Label-CxXPup1E.js";import"./index-CK7zNLqv.js";import"./index-DuSPh-fE.js";import"./index-OzB7lNJQ.js";import"./Text-DZG3aMF7.js";import"./Link-BvcafW2a.js";import"./addCustomCSSWithScoping-B6DvbxXy.js";import"./index-DPnISxA_.js";import"./BusyIndicator-BKaUugOY.js";import"./index-CnTKSd9L.js";import"./index-Dj0HSimA.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-1lbVTklO.js";import"./index-DF9J17Qw.js";import"./I18nStore-C5X80oUZ.js";import"./index-DjYHlBL_.js";import"./Tooltips-CywStIph.js";import"./EventProvider-ChtD9rRX.js";function i(r){const o={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Bring Your Own Web Components"}),`
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
`,e.jsx(m,{})]})}function Ue(r={}){const{wrapper:o}={...p(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(i,{...r})}):i(r)}export{Ue as default};
