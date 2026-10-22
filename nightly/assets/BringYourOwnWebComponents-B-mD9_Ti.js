import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./Link-IkTG6VAQ.js";import{n as i,t as a}from"./MessageStrip--bSGY2HF.js";import{i as o,r as s}from"./react-fLZJfuRT.js";import{_ as c,d as l}from"./blocks-BPGcS3i6.js";import{g as u,t as d,u as f}from"./components-D5niGC9g.js";function p(e){let t={a:`a`,blockquote:`blockquote`,br:`br`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...o(),...e.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(l,{title:`Bring Your Own Web Components`}),`
`,(0,h.jsx)(t.h1,{id:`bring-your-own-web-components`,children:`Bring Your Own Web Components`}),`
`,(0,h.jsx)(u,{}),`
`,(0,h.jsxs)(t.p,{children:[`If you have created a custom UI5 Web Components package, you will be able to create React component wrappers in your project by leveraging our `,(0,h.jsx)(t.a,{href:`http://npmjs.com/package/@ui5/webcomponents-react-cli`,rel:`nofollow`,children:`@ui5/webcomponents-react-cli`}),`.`]}),`
`,(0,h.jsx)(a,{hideCloseButton:!0,design:`Critical`,children:(0,h.jsxs)(h.Fragment,{children:[`The UI5 Web Components for React CLI package is tailor-made for custom UI5 Web Components packages following`,` `,(0,h.jsx)(r,{href:`https://ui5.github.io/webcomponents/docs/development/`,children:`this documentation`}),`. `,(0,h.jsx)(t.br,{}),`You can not use it for creating React wrapper for arbitrary custom element libraries.`]})}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsx)(t.h2,{id:`create-react-wrappers`,children:`Create React Wrappers`}),`
`,(0,h.jsxs)(t.blockquote,{children:[`
`,(0,h.jsxs)(t.p,{children:[`This guide uses the name `,(0,h.jsx)(t.code,{children:`my-custom-webcomponents-package`}),` for the custom UI5 Web Components package. `,(0,h.jsx)(`br`,{}),`
Please replace all occurrences with your real package name when following this guide.`]}),`
`]}),`
`,(0,h.jsxs)(t.p,{children:[`First of all, install the `,(0,h.jsx)(t.code,{children:`@ui5/webcomponents-react-cli`}),` package in your project:`]}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-shell`,children:`npm install @ui5/webcomponents-react-cli --save-dev

# if your package is based on UI5 Web Components V1, please install the V1 version of the CLI
npm install @ui5/webcomponents-react-cli@V1 --save-dev
`})}),`
`,(0,h.jsx)(t.p,{children:`Then, install your custom UI5 Web Components package:`}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-shell`,children:`npm install my-custom-webcomponents-package --save
`})}),`
`,(0,h.jsxs)(t.p,{children:[`Now, you can add a npm script to create your wrapper components.`,(0,h.jsx)(`br`,{}),`
`,(0,h.jsxs)(t.em,{children:[`We recommend ensuring that the target directory (specified by the `,(0,h.jsx)(t.code,{children:`--out`}),` parameter) is empty.`]})]}),`
`,(0,h.jsx)(a,{hideCloseButton:!0,children:(0,h.jsxs)(h.Fragment,{children:[`The UI5 Web Component for React CLI is not aware of any code style conventions you may be using in your project, so we recommend that you run tools such as `,(0,h.jsx)(r,{href:`https://prettier.io/`,children:`prettier`}),` and`,` `,(0,h.jsx)(r,{href:`https://eslint.org/`,children:`eslint`}),` after creating the wrapper components if you are using them in your project.`]})}),`
`,(0,h.jsx)(t.pre,{children:(0,h.jsx)(t.code,{className:`language-json`,children:`{
  "//": "rest of your applications package.json",
  "scripts": {
    "//": "your other scripts",
    "create-webcomponent-wrappers": "ui5-wcr create-wrappers --packageName my-custom-webcomponents-package --out ./any/directory/in/your/project"
  }
}
`})}),`
`,(0,h.jsx)(f,{})]})}function m(e={}){let{wrapper:t}={...o(),...e.components};return t?(0,h.jsx)(t,{...e,children:(0,h.jsx)(p,{...e})}):p(e)}var h;function g(){return(g=e((()=>{h=t(),s(),d(),c(),n(),i()})))()}g();export{m as default};