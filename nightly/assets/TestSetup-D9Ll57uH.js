import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{t}from"./jsx-runtime-BdxMnOeJ.js";import{n,t as r}from"./MessageStrip-QEYtOLFz.js";import{i,r as a}from"./react-fLZJfuRT.js";import{_ as o,d as s}from"./blocks-BSPOX0ie.js";import{g as c,t as l,u}from"./components-BHJ_1NFA.js";function d(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...i(),...e.components};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s,{title:`Setup`}),`
`,(0,p.jsx)(c,{headingSelector:`h2`}),`
`,(0,p.jsx)(t.h1,{id:`cypress-test-setup`,children:`Cypress Test Setup`}),`
`,(0,p.jsxs)(t.p,{children:[`UI5 Web Components for React is using `,(0,p.jsx)(t.a,{href:`https://www.cypress.io/`,rel:`nofollow`,children:`Cypress`}),` as preferred testing framework. There you have the options of testing components only or create End-to-End tests for your application.`]}),`
`,(0,p.jsx)(t.h2,{id:`configuration`,children:`Configuration`}),`
`,(0,p.jsxs)(t.p,{children:[`When launching Cypress the first time you're guided through the setup, which then will create a `,(0,p.jsx)(t.a,{href:`https://docs.cypress.io/guides/references/configuration`,rel:`nofollow`,children:`configuration file`}),` for you. You can use any configuration you like, but since we're heavily relying on web-components, we recommend traversing the shadow DOM per default:`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-js`,children:`includeShadowDom: true
`})}),`
`,(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.a,{href:`https://docs.cypress.io/guides/component-testing/react/overview`,rel:`nofollow`,children:`Here`}),` you can find the Cypress Quickstart tutorial for React.`]}),`
`,(0,p.jsx)(t.h2,{id:`themeprovider`,children:`ThemeProvider`}),`
`,(0,p.jsxs)(t.p,{children:[`UI5 Web Components for React components have to be wrapped inside a `,(0,p.jsx)(t.code,{children:`ThemeProvider`}),`, depending on your test setup (especially for component-testing) it might prove beneficial creating a custom `,(0,p.jsx)(t.code,{children:`mount`}),` command, that includes the `,(0,p.jsx)(t.code,{children:`ThemeProvider`}),`.`]}),`
`,(0,p.jsx)(t.p,{children:`JavaScript:`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-js`,children:`/**
 * Cypress mount with ThemeProvider
 */
Cypress.Commands.add('mount', (component, options) => {
  return mount(<ThemeProvider>{component}</ThemeProvider>, options);
});
`})}),`
`,(0,p.jsx)(t.p,{children:`TypeScript declaration:`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-ts`,children:`declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Cypress mount with ThemeProvider
       */
      mount: typeof mount;
    }
  }
}
`})}),`
`,(0,p.jsxs)(t.p,{children:[`You can define the command for example in the `,(0,p.jsx)(t.code,{children:`commands.ts/js`}),` file:`]}),`
`,(0,p.jsxs)(`details`,{children:[(0,p.jsx)(`summary`,{children:`Example file`}),(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-tsx`,children:`import { mount } from 'cypress/react';
// if you are using Cypress v12 or v13, you need to import the mount command from 'cypress/react18'
// import { mount } from 'cypress/react18';
import { ThemeProvider } from '@ui5/webcomponents-react';

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Cypress mount with ThemeProvider
       */
      mount: typeof mount;
    }
  }
}

/**
 * Cypress mount with ThemeProvider
 */
Cypress.Commands.add('mount', (component, options) => {
  return mount(<ThemeProvider>{component}</ThemeProvider>, options);
});
`})})]}),`
`,(0,p.jsx)(t.h2,{id:`cypress-commands-package-for-ui5-webcomponents`,children:`Cypress Commands package for ui5-webcomponents`}),`
`,(0,p.jsx)(r,{hideCloseButton:!0,children:`This package is a work-in-progress and can be extended by you! If you feel like a command or query is missing, please
feel free to open a PR adding it to our library. Contributions are always welcome!`}),`
`,(0,p.jsx)(t.p,{children:`Since testing web components is sometimes not as straightforward as one would like it to be, we offer a package with a set of commands and queries to make it easier to interact with them:`}),`
`,(0,p.jsx)(t.p,{children:`Install:`}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-sh`,children:`npm install @ui5/webcomponents-cypress-commands
`})}),`
`,(0,p.jsxs)(t.p,{children:[`After the installation you can import it in your entry file (e.g. `,(0,p.jsx)(t.code,{children:`component.ts`}),`):`]}),`
`,(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:`language-ts`,children:`import '@ui5/webcomponents-cypress-commands';
`})}),`
`,(0,p.jsx)(t.p,{children:`Now you can use all commands and queries that are available in this package.`}),`
`,(0,p.jsx)(u,{})]})}function f(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,p.jsx)(t,{...e,children:(0,p.jsx)(d,{...e})}):d(e)}var p;function m(){return(m=e((()=>{p=t(),a(),o(),n(),l()})))()}m();export{f as default};