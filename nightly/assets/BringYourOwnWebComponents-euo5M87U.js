import{j as e}from"./jsx-runtime-DEdD30eg.js";import{useMDXComponents as p}from"./index-CcnH5Kt0.js";import{ae as s}from"./index-B0c7zXBl.js";import{M as n}from"./index-CWNpgAgp.js";import"./index-BhOUCmxs.js";import"./TagDesign-Dou_yO3g.js";import"./index-RYns6xqu.js";import"./index-sbqOYYIm.js";import"./chunk-NUUEMKO5-Dg2SVZ6b.js";import"./withWebComponent-CBrmozIb.js";import"./copy-DU9gbUoW.js";import"./Button-BQJgivV9.js";import{F as m}from"./CommandsAndQueries-mr3RTSxi.js";import{T as a}from"./TableOfContent-DBMEQ9W3.js";import"./WrappingType-CW8URInd.js";import"./Title-DRIb7dCb.js";import{L as t}from"./index-BVjwHeu4.js";import"./iframe-UNUnnh18.js";import"../sb-preview/runtime.js";import"./_baseUniq-18efwtne.js";import"./index-ar2LJKLv.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18n-DEVDpFvK.js";import"./decline-G8JuKszz.js";import"./Icon-Babe3lNb.js";import"./useIsomorphicLayoutEffect-Dm78g2BF.js";import"./Keys-DoZifIQ_.js";import"./utils-DzvJSare.js";import"./parameters-bundle.css-BOSi_lPd.js";import"./i18n-defaults-CzsryEvw.js";import"./information-DxGaCl7C.js";import"./alert-DvJUOzHP.js";import"./class-map-AHFyjGyG.js";import"./i18n-defaults-NO4RLLYJ.js";import"./client-BzooOYO_.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-cv-4nGwj.js";import"./Popover-BcsvPu0A.js";import"./PopupsCommon.css-D29T90hQ.js";import"./FocusableElements-Di3gf8aJ.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-jJKP5Zvq.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-DE0Tc7Nn.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-GDTSF2Z6.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DPBS0l4j.js";import"./index-CCisTIRW.js";import"./Label-DyMppobl.js";import"./index-DO5b_HjU.js";import"./index-CsIMTQX-.js";import"./index-Clpx57uo.js";import"./Link-C9hNQ5a2.js";import"./addCustomCSSWithScoping-C23b4S6i.js";import"./index-BL8YXbRM.js";import"./BusyIndicator-DsVolhjz.js";import"./index-BO6WyhhL.js";import"./index-pSwmqRCk.js";import"./Avatar-Co3KYXN1.js";import"./employee-D2O7hYRc.js";import"./index-Fm8sVCyb.js";import"./I18nStore-CvBoH44U.js";function i(r){const o={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Bring Your Own Web Components"}),`
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
