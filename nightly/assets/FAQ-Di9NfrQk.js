import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./MessageStrip-CfLGPDZy.js";import{i,r as a}from"./react-BOKIvUzN.js";import{_ as o,d as s}from"./blocks-BotZtXPk.js";import{g as c,h as l,m as u,t as d,u as f}from"./components-oB2MmGM3.js";var p;function m(){return(m=e((()=>{p=new URL(`sb-pkg-filter-B5sbXu1N.png`,import.meta.url).href})))()}function h(e){let t={a:`a`,blockquote:`blockquote`,br:`br`,code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,strong:`strong`,"ui5-link":`ui5-link`,ul:`ul`,...i(),...e.components},n=t[`ui5-link`];return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(s,{title:`FAQ`}),`
`,(0,_.jsx)(c,{}),`
`,(0,_.jsx)(t.h1,{id:`faq`,children:`FAQ`}),`
`,(0,_.jsx)(r,{hideCloseButton:!0,children:(0,_.jsxs)(_.Fragment,{children:[`Please also take a look at the FAQ of`,` `,(0,_.jsx)(n,{href:`https://ui5.github.io/webcomponents/docs/FAQ/`,children:`UI5 Web Components`}),`.`]})}),`
`,(0,_.jsx)(`br`,{}),`
`,(0,_.jsx)(`br`,{}),`
`,(0,_.jsxs)(t.h2,{id:`where-can-i-find-all-compatible-versions-of-ui5webcomponents-and-ui5webcomponents-react`,children:[`Where Can I Find All Compatible Versions of `,(0,_.jsx)(t.code,{children:`@ui5/webcomponents`}),` and `,(0,_.jsx)(t.code,{children:`@ui5/webcomponents-react`}),`?`]}),`
`,(0,_.jsxs)(t.p,{children:[`All necessary `,(0,_.jsx)(t.code,{children:`@ui5/webcomponents`}),` packages are `,(0,_.jsx)(t.code,{children:`peerDependencies`}),` of `,(0,_.jsx)(t.code,{children:`@ui5/webcomponents-react`}),`, so if you're using npm v7 or later, then these dependencies should be auto installed when running `,(0,_.jsx)(t.code,{children:`npm install`}),`.
If you want to check which versions are compatible you can find a compatibility table `,(0,_.jsx)(t.a,{href:`?path=/docs/getting-started--docs#add-ui5webcomponents-react-to-an-existing-app`,children:`here`}),`.`]}),`
`,(0,_.jsx)(t.h2,{id:`what-are-abstract-ui5-web-components`,children:`What Are "abstract" UI5 Web Components?`}),`
`,(0,_.jsx)(t.p,{children:`Abstract UI5 Web Components are mainly there to pass props to the actual component inside the shadow root. Therefore, all attributes passed to the element, will have no effect on the actual component.`}),`
`,(0,_.jsx)(t.h3,{id:`example`,children:`Example`}),`
`,(0,_.jsxs)(t.p,{children:[`Rendering a `,(0,_.jsx)(t.code,{children:`ComboBoxItem`}),` with some custom HTML attributes...`]}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-jsx`,children:`<ComboBox>
  <ComboBoxItem text="ComboBoxItem1" title="Hello" style={{ backgroundColor: 'red' }} />
</ComboBox>
`})}),`
`,(0,_.jsx)(t.p,{children:`...will result in an element that looks like this:`}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-html`,children:`<ui5-cb-item
  text="ComboBoxItem1"
  title="Hello"
  style="background-color: red;"
  _ui5rt0=""
  _ui5host=""
  ui5-cb-item=""
></ui5-cb-item>
`})}),`
`,(0,_.jsxs)(t.p,{children:[`As you can see, both `,(0,_.jsx)(t.code,{children:`title`}),` and `,(0,_.jsx)(t.code,{children:`style`}),` are correctly applied, but since the item doesn't have children, nor a shadow root the attributes don't have an effect on the component.`]}),`
`,(0,_.jsx)(t.h2,{id:`how-can-i-style-elements-inside-the-shadow-root-of-a-web-component`,children:`How Can I Style Elements Inside the Shadow Root of a Web Component?`}),`
`,(0,_.jsxs)(t.p,{children:[`Styling elements inside the shadow root is only supported by leveraging the `,(0,_.jsxs)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/CSS/::part`,rel:`nofollow`,children:[(0,_.jsx)(t.code,{children:`::part`}),` pseudo-element`]}),`. You can find out more about this `,(0,_.jsx)(t.a,{href:`?path=/docs/knowledge-base-styling--docs#css-shadow-parts`,children:`here`}),`.`]}),`
`,(0,_.jsx)(t.h2,{id:`how-can-i-reuse-or-change-colors-fonts-etc-of-ui5-web-components-for-react`,children:`How Can I Reuse or Change Colors, Fonts, etc. of UI5 Web Components for React?`}),`
`,(0,_.jsxs)(t.p,{children:[`UI5 Web Components for React comes with a `,(0,_.jsx)(t.a,{href:`https://github.com/SAP/theming-base-content`,rel:`nofollow`,children:`publicly available`}),` set of CSS variables that ensure the same look and feel across applications. Changing these values is not recommended, if you still need to customize them, you can find out more about this `,(0,_.jsx)(t.a,{href:`?path=/docs/knowledge-base-styling--docs#styling-ui5-web-components-for-react-components`,children:`here`}),`.`]}),`
`,(0,_.jsxs)(t.p,{children:[`To reuse these styles, you can either use the CSS variable, or use our `,(0,_.jsx)(t.a,{href:`?path=/docs/knowledge-base-public-utils--docs#theming-parameters`,children:`Theming Parameters`}),`.`]}),`
`,(0,_.jsx)(t.h2,{id:`why-is-changing-the-theme-not-working`,children:`Why Is Changing the Theme Not Working?`}),`
`,(0,_.jsxs)(t.p,{children:[`You have to ensure to import the `,(0,_.jsx)(t.code,{children:`Assets`}),` with the different themes, otherwise only the default theme will be used.`]}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-ts`,children:`import '@ui5/webcomponents-react/dist/Assets';
`})}),`
`,(0,_.jsxs)(t.p,{children:[`Further information about theming can be found in our and the UI5 Web Components `,(0,_.jsx)(t.a,{href:`?path=/docs/getting-started--docs#theming`,children:`Theming documentation`}),`.`]}),`
`,(0,_.jsxs)(t.h2,{id:`how-can-i-distinguish-if-a-component-is-developed-in-the-ui5-webcomponents-or-ui5-webcomponents-react-repo`,children:[`How Can I Distinguish If a Component Is Developed in the `,(0,_.jsx)(t.code,{children:`ui5-webcomponents`}),` or `,(0,_.jsx)(t.code,{children:`ui5-webcomponents-react`}),` Repo?`]}),`
`,(0,_.jsxs)(t.p,{children:[`Each component developed by the UI5 Web Components team (`,(0,_.jsx)(t.a,{href:`https://github.com/UI5/webcomponents`,rel:`nofollow`,children:(0,_.jsx)(t.code,{children:`ui5-webcomponents`})}),`) that is wrapped by the UI5 Web Components for React (`,(0,_.jsx)(t.a,{href:`https://github.com/UI5/webcomponents-react`,rel:`nofollow`,children:(0,_.jsx)(t.code,{children:`ui5-webcomponents-react`})}),`) wrapper includes the following note in its component description:`]}),`
`,(0,_.jsxs)(t.blockquote,{children:[`
`,(0,_.jsxs)(t.p,{children:[(0,_.jsx)(t.strong,{children:`Note`}),`: This is a UI5 Web Component! `,(0,_.jsx)(t.a,{href:`https://github.com/UI5/webcomponents`,rel:`nofollow`,children:`Repository`}),` | `,(0,_.jsx)(t.a,{href:`https://ui5.github.io/webcomponents/`,rel:`nofollow`,children:`Documentation`})]}),`
`]}),`
`,(0,_.jsxs)(t.p,{children:[`If a component does not have this note, it is a React-only component provided exclusively by `,(0,_.jsx)(t.code,{children:`ui5-webcomponents-react`}),`.`]}),`
`,(0,_.jsxs)(t.p,{children:[`Additionally, Storybook supports filtering by tags, allowing you to filter by different `,(0,_.jsx)(t.code,{children:`ui5-webcomponents(-react)`}),` packages as well:`]}),`
`,(0,_.jsx)(`img`,{src:p,alt:`Storybook Tag Filter`,height:420}),`
`,(0,_.jsx)(t.h2,{id:`what-do-the-badges-in-the-side-navigation-mean`,children:`What Do the Badges in the Side Navigation Mean?`}),`
`,(0,_.jsxs)(t.ul,{children:[`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(u,{type:`custom`}),`: There are no global design or UX specifications for this component, or it deviates from them partially or fully. More details can be found in the component’s description.`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(u,{type:`experimental`}),`: The component or pattern is in an experimental state, meaning changes to its public API may occur without a major version update (`,(0,_.jsx)(t.code,{children:`v3.0.0`}),`).`]}),`
`,(0,_.jsxs)(t.li,{children:[(0,_.jsx)(u,{type:`deprecated`}),`: The component is deprecated and will be removed in the next major version update (`,(0,_.jsx)(t.code,{children:`v3.0.0`}),`). More details can be found in the component's description.`]}),`
`]}),`
`,(0,_.jsx)(t.h2,{id:`why-isnt-scoping-working`,children:`Why Isn't Scoping Working?`}),`
`,(0,_.jsxs)(t.p,{children:[`Starting from UI5 Web Components (for React) 2.0.0, the order of imports with regard to scoping and components matters.
Setting the scoping suffix must be done before importing any components, as they use the suffix at the top-level of the module - meaning when a component is imported, the suffix has to be known.
For this to work, calling the method should be done in a separate module (e.g. scoping-config.js) and this module should be imported before any components are imported.
You can find more information about this in the `,(0,_.jsx)(t.a,{href:`https://ui5.github.io/webcomponents/docs/advanced/scoping/`,rel:`nofollow`,children:`UI5 Web Components documentation`}),`.`]}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-ts`,children:`// scoping-config.js
import { setCustomElementsScopingSuffix } from '@ui5/webcomponents-base/dist/CustomElementsScope.js';
setCustomElementsScopingSuffix('demo');

// app main file, e.g index.js, main.tsx, etc.
import './scoping-config.js';
// now, all other component imports - the scoping config import must be the first import of the app
import { Button } from '@ui5/webcomponents-react/Button';
// ...
`})}),`
`,(0,_.jsx)(t.h2,{id:`why-use-direct-imports-via-package-export-maps`,children:`Why Use Direct Imports via Package Export Maps`}),`
`,(0,_.jsxs)(t.p,{children:[`Since `,(0,_.jsx)(t.a,{href:`https://github.com/UI5/webcomponents-react/releases/tag/v2.14.0`,rel:`nofollow`,children:`v2.14.0`}),`, `,(0,_.jsx)(t.code,{children:`ui5-webcomponents-react`}),` supports `,(0,_.jsx)(t.strong,{children:`export maps`}),` through the `,(0,_.jsx)(t.code,{children:`exports`}),` field in `,(0,_.jsx)(t.code,{children:`package.json`}),` (`,(0,_.jsx)(t.a,{href:`https://nodejs.org/api/packages.html#exports`,rel:`nofollow`,children:`documentation`}),`).`]}),`
`,(0,_.jsx)(t.p,{children:`Export maps allow you to import components directly from their package entry points instead of relying on deep file paths or the package root (barrel) files.
While most bundlers perform tree-shaking in production builds, so only the code you actually use is included, tree-shaking is often limited or disabled in development. If you import from the package root (a “barrel file”), all components and utilities exported from that root are included in the bundle, even those you don’t use.`}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-ts`,children:`// Root import (less optimal without tree-shaking)
import { Button, AnalyticalTable } from "@ui5/webcomponents-react";

// Direct import (recommended)
import { Button } from "@ui5/webcomponents-react/Button";
import { AnalyticalTable } from "@ui5/webcomponents-react/AnalyticalTable";
`})}),`
`,(0,_.jsx)(t.h3,{id:`codemod`,children:`Codemod`}),`
`,(0,_.jsxs)(t.p,{children:[`To migrate from root imports to direct imports, you can use the `,(0,_.jsx)(t.code,{children:`exports-map`}),` codemod from the `,(0,_.jsx)(t.a,{href:`https://github.com/UI5/webcomponents-react/blob/main/packages/cli/README.md`,rel:`nofollow`,children:`cli`}),` package.`]}),`
`,(0,_.jsx)(r,{hideCloseButton:!0,design:`Critical`,children:(0,_.jsxs)(_.Fragment,{children:[`The codemod is a best-effort attempt to help you migrate to direct imports. Please review the generated code thoroughly!`,(0,_.jsx)(t.br,{}),(0,_.jsx)(t.strong,{children:`Applying the codemod might break your code formatting, so please don't forget to run prettier and/or eslint after you've applied the codemod!`})]})}),`
`,(0,_.jsx)(t.pre,{children:(0,_.jsx)(t.code,{className:`language-shell`,children:`npx @ui5/webcomponents-react-cli codemod --transform export-maps \\
    --src ./path/to/src \\
    --typescript # only if you use TypeScript in your project, omit if you use JavaScript
`})}),`
`,(0,_.jsx)(f,{})]})}function g(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,_.jsx)(t,{...e,children:(0,_.jsx)(h,{...e})}):h(e)}var _;function v(){return(v=e((()=>{_=t(),a(),o(),d(),n(),m(),l()})))()}v();export{g as default};