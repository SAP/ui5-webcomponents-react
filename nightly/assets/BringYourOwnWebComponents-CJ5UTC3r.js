import{j as e}from"./iframe-D5q1aMGI.js";import{useMDXComponents as a}from"./index-B6q-95ic.js";import{M as c}from"./blocks-VrnxRsTA.js";import"./Tag-DDiTsJ0v.js";import{M as t}from"./index-YdpDWp2e.js";import"./copy-BKgapaDk.js";import{F as i}from"./CommandsAndQueries-B7jUlW4q.js";import{T as p}from"./TableOfContent-CCvgAgpP.js";import{L as r}from"./index-DEUGWJD9.js";import"./preload-helper-Dp1pzeXC.js";import"./information-DvQXlJSA.js";import"./sys-enter-2-BD4KOzII.js";import"./alert-4vj1CvHm.js";import"./index-BCRNDJSO.js";import"./index-B87mq1Uz.js";import"./Link-CDAcJh87.js";import"./addCustomCSSWithScoping-Z_1KU2KU.js";import"./index-S9YU7LKi.js";import"./index-DBgGZpdq.js";import"./index-BFl6kxHT.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DLq1yiI3.js";import"./index-Bo48Ce9s.js";function s(o){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Bring Your Own Web Components"}),`
`,e.jsx(n.h1,{id:"bring-your-own-web-components",children:"Bring Your Own Web Components"}),`
`,e.jsx(p,{}),`
`,e.jsxs(n.p,{children:["If you have created a custom UI5 Web Components package, you will be able to create React component wrappers in your project by leveraging our ",e.jsx(n.a,{href:"http://npmjs.com/package/@ui5/webcomponents-react-cli",rel:"nofollow",children:"@ui5/webcomponents-react-cli"}),"."]}),`
`,e.jsx(t,{hideCloseButton:!0,design:"Critical",children:e.jsxs(e.Fragment,{children:["The UI5 Web Components for React CLI package is tailor-made for custom UI5 Web Components packages following"," ",e.jsx(r,{href:"https://sap.github.io/ui5-webcomponents/docs/development/",children:"this documentation"}),". ",e.jsx(n.br,{}),"You can not use it for creating React wrapper for arbitrary custom element libraries."]})}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"create-react-wrappers",children:"Create React Wrappers"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["This guide uses the name ",e.jsx(n.code,{children:"my-custom-webcomponents-package"})," for the custom UI5 Web Components package. ",e.jsx("br",{}),`
Please replace all occurrences with your real package name when following this guide.`]}),`
`]}),`
`,e.jsxs(n.p,{children:["First of all, install the ",e.jsx(n.code,{children:"@ui5/webcomponents-react-cli"})," package in your project:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`npm install @ui5/webcomponents-react-cli --save-dev

# if your package is based on UI5 Web Components V1, please install the V1 version of the CLI
npm install @ui5/webcomponents-react-cli@V1 --save-dev
`})}),`
`,e.jsx(n.p,{children:"Then, install your custom UI5 Web Components package:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-shell",children:`npm install my-custom-webcomponents-package --save
`})}),`
`,e.jsxs(n.p,{children:["Now, you can add a npm script to create your wrapper components.",e.jsx("br",{}),`
`,e.jsxs(n.em,{children:["We recommend ensuring that the target directory (specified by the ",e.jsx(n.code,{children:"--out"})," parameter) is empty."]})]}),`
`,e.jsx(t,{hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:["The UI5 Web Component for React CLI is not aware of any code style conventions you may be using in your project, so we recommend that you run tools such as ",e.jsx(r,{href:"https://prettier.io/",children:"prettier"})," and"," ",e.jsx(r,{href:"https://eslint.org/",children:"eslint"})," after creating the wrapper components if you are using them in your project."]})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-json",children:`{
  "//": "rest of your applications package.json",
  "scripts": {
    "//": "your other scripts",
    "create-webcomponent-wrappers": "ui5-wcr create-wrappers --packageName my-custom-webcomponents-package --out ./any/directory/in/your/project"
  }
}
`})}),`
`,e.jsx(i,{})]})}function N(o={}){const{wrapper:n}={...a(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{N as default};
