import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as p}from"./index-BxVt_j7t.js";import{ae as s}from"./index-DQo0pq59.js";import{M as n}from"./index-DK8f7i65.js";import"./index-CcKj7SIX.js";import"./TagDesign-Dou_yO3g.js";import"./index-B7gF9TUu.js";import"./index-CE_NGgsP.js";import"./chunk-NUUEMKO5-CX77TZbI.js";import"./Button-D9IHaDB-.js";import"./withWebComponent-B0663feL.js";import"./copy-C_CjAe8T.js";import{F as m}from"./CommandsAndQueries-COG029Ob.js";import{T as a}from"./TableOfContent-DCqtbPc-.js";import"./WrappingType-CW8URInd.js";import"./Title-WNL10KUu.js";import{L as t}from"./index-gaVbNe_i.js";import"./iframe-D-Ltjgn6.js";import"../sb-preview/runtime.js";import"./index-DHaMx3uI.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-DEVDpFvK.js";import"./decline-Dufzc9Ae.js";import"./Icon-DBJtwtpU.js";import"./useIsomorphicLayoutEffect-DbLUS4-D.js";import"./Keys-CAuuEE_3.js";import"./utils-BHIgGaqO.js";import"./parameters-bundle.css-DlWxkghp.js";import"./i18n-defaults-neJWcM66.js";import"./information-CILnO36f.js";import"./alert-Z1fiX1-e.js";import"./class-map-C6tyMXoZ.js";import"./i18n-defaults-B_32hVC3.js";import"./client-DPlujwLe.js";import"./AccessibilityTextsHelper-Beeze-lh.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BP6vP6oY.js";import"./Popover-msUg67Np.js";import"./PopupsCommon.css-Dj0xrk9H.js";import"./FocusableElements-DTl1isII.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-xhBJDreD.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-uCTHCAWY.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-CumkkaaF.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BtUg4QTx.js";import"./index-D_YacHjR.js";import"./Label-BoojAdgE.js";import"./index-nKNYXUv1.js";import"./index-nTxbmOyz.js";import"./index-DdEMrDoq.js";import"./Text-UwjpUK4f.js";import"./Link-CpBj26Uf.js";import"./addCustomCSSWithScoping-DFGIdwgf.js";import"./index-dDGTlD2i.js";import"./BusyIndicator-12vkJL71.js";import"./index-BW6gfbnW.js";import"./index-WjQUaYT1.js";import"./Avatar-Z-ciJfNd.js";import"./employee-XwVnUoGs.js";import"./index-DbzBuXFC.js";import"./I18nStore-DX5SeKlm.js";function i(r){const o={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Bring Your Own Web Components"}),`
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
`,e.jsx(m,{})]})}function Ie(r={}){const{wrapper:o}={...p(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(i,{...r})}):i(r)}export{Ie as default};
