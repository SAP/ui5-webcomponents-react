import{j as e}from"./useIsomorphicLayoutEffect-Dhma_bjk.js";import{useMDXComponents as p}from"./index-CcnH5Kt0.js";import{ae as s}from"./index-CUZO_9su.js";import{M as n}from"./index-CGD6y5QJ.js";import"./index-BKLLjRFE.js";import"./TagDesign-Dou_yO3g.js";import"./index-RYns6xqu.js";import"./index-sbqOYYIm.js";import"./chunk-HLWAVYOI-b95CzMTI.js";import"./withWebComponent-DUIvHLMA.js";import"./copy-pca8p_zU.js";import"./Button-CxQnwzDr.js";import{F as m}from"./CommandsAndQueries-D6K1FQGy.js";import{T as a}from"./TableOfContent-J0xBpY2P.js";import"./WrappingType-CW8URInd.js";import"./Title-ZqK5PCI6.js";import{L as t}from"./index-DI2d1WHF.js";import"./iframe-DHZ6TYn-.js";import"../sb-preview/runtime.js";import"./_baseUniq-DGDOfdbw.js";import"./_getPrototype-B0L0C3AT.js";import"./index-CFFTH5x_.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-DMA-_yLC.js";import"./utils-CKNAmS37.js";import"./decline-CHk4a2e7.js";import"./Icon-C44BwzQ8.js";import"./Keys-D1SxbTOd.js";import"./parameters-bundle.css-Bga-3Zi8.js";import"./i18n-defaults-CdZCUmzZ.js";import"./information-Sy77r2nJ.js";import"./alert-cQZYHoWK.js";import"./class-map-BJErPj2t.js";import"./i18n-defaults-DTxNk1Ll.js";import"./client-BZNFO7bv.js";import"./AriaLabelHelper-C5uDZewF.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-BzCnTBef.js";import"./Popover-BePXU9v3.js";import"./PopupsCommon.css-DBrv9Ok7.js";import"./FocusableElements-19hFFt5Q.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-ufE0tBOz.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-Bd8TDVwu.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-3WD7if5i.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DcbwKAeb.js";import"./index-D_wOg0B-.js";import"./Label-BAMwsHnp.js";import"./index-CF8fMoC4.js";import"./index-WEA3P0fF.js";import"./Link-CiJW-swg.js";import"./addCustomCSSWithScoping-BRJo9-6E.js";import"./index-DhepUemJ.js";import"./BusyIndicator-BGYa7yRK.js";import"./index-BNERneIU.js";import"./index-4YU2sHPi.js";import"./Avatar-C5E79jBl.js";import"./employee-DWCutjal.js";import"./index-Nf4awpnO.js";import"./I18nStore-B2w4xK_s.js";import"./index-9j-aR15A.js";function i(r){const o={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...p(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Bring Your Own Web Components"}),`
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
