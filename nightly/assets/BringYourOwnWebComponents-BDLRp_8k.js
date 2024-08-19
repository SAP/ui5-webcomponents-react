import{j as e}from"./useIsomorphicLayoutEffect-DOdM5Kf8.js";import{useMDXComponents as p}from"./index-BrB9znxi.js";import{ae as s}from"./index-Bn8zN0Sq.js";import{M as n}from"./index-B2vAurCE.js";import"./TagDesign-Dou_yO3g.js";import"./index-CMKoANNR.js";import"./index-CJugYjqS.js";import"./chunk-HLWAVYOI-DPLa7-VG.js";import"./withWebComponent-jpg_vyBt.js";import"./copy-CSph0-JP.js";import"./Button-Cy3a2-vH.js";import{F as m}from"./CommandsAndQueries-CAnyFPkm.js";import{T as a}from"./TableOfContent-DYSF1A7E.js";import"./WrappingType-CW8URInd.js";import{L as t}from"./index-S_Fukng6.js";import"./iframe-CtsffICr.js";import"../sb-preview/runtime.js";import"./_baseUniq-qZQRvdR-.js";import"./_overArg-Mt7ZKpko.js";import"./_baseAssignValue-680W1HJy.js";import"./_getPrototype-CvhAe9S0.js";import"./index-uexYa9xf.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-DPK5r4a0.js";import"./utils-C0V6LSSR.js";import"./decline-Rp8-5Vp_.js";import"./Icon-B5H_Qdfl.js";import"./Keys-F_3Gvx0K.js";import"./if-defined-B9JyKzKH.js";import"./parameters-bundle.css-DJWIHzS2.js";import"./i18n-defaults-CEQaAj6E.js";import"./information-kkRN0naJ.js";import"./alert-Ddwvrqce.js";import"./class-map-q_nw4FEx.js";import"./i18n-defaults-Cg7KCFas.js";import"./client-DpDvupH-.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./index-DNwR1bnO.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BdPJGR6W.js";import"./Popover-CjvsUr2f.js";import"./PopupsCommon.css-B-WhbPRf.js";import"./getEffectiveScrollbarStyle-Evs_ZBOP.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Dgi63idk.js";import"./MediaRange-Bnzt26Xb.js";import"./Title-B_F0QOq3.js";import"./style-map-CGyh7Z7B.js";import"./BrowserScrollbar.css-BArmuj4M.js";import"./index-DARdDMho.js";import"./Label-4K9rAZXv.js";import"./index-BG-h_Kqf.js";import"./index-BGYPT_ul.js";import"./Link-BFdl-cjb.js";import"./index-BxQBxwRK.js";import"./I18nStore-B9ZCcbUP.js";import"./addCustomCSSWithScoping-C-29J_EE.js";import"./index-KsoA1c5h.js";import"./BusyIndicator-CE507Ogo.js";import"./index-BBTbE-GF.js";import"./index-ChnQk1Dh.js";import"./Avatar-TQEHR9dU.js";import"./employee-DEw0oR1K.js";import"./index-B2DesxhQ.js";function i(r){const o={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Bring Your Own Web Components"}),`
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
`,e.jsx(m,{})]})}function ve(r={}){const{wrapper:o}={...p(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(i,{...r})}):i(r)}export{ve as default};
