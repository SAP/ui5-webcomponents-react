import{j as e}from"./jsx-runtime-5926aa06.js";import{M as s}from"./chunk-PCJTTTQV-be039c43.js";import"./DomRefTable.module-6fc3f6c1.js";import"./index-ebeaab24.js";import{T as m}from"./TableOfContent-73a309b5.js";import{F as p}from"./Footer-95a7b2ea.js";import{u as i}from"./index-bda0bad7.js";import{M as a}from"./index-f98ae8a9.js";import"./iframe-8496b8c4.js";import"../sb-preview/runtime.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./react-jss.esm-022ab528.js";import"./index-562e1433.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-aaf25c56.js";import"./UI5Element-b6f0d493.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./utils-69f7a0e0.js";import"./index-9dd629b3.js";import"./withWebComponent-7b9bd1ee.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-d703a0b9.js";import"./Icons-e2180d53.js";import"./Device-3f99aa96.js";import"./Integer-f7f172c9.js";import"./class-map-6a9bd920.js";import"./i18n-defaults-18f6652d.js";import"./index-7dd0177b.js";import"./Avatar-81a3aee4.js";import"./ResizeHandler-021ae412.js";import"./employee-dc1adeb6.js";import"./index-1a724277.js";import"./AriaLabelHelper-43a261ec.js";import"./index-63e72c7d.js";import"./Link-96b46196.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./index-b9e92427.js";import"./index-d76c64d8.js";import"./Label-4abbc3da.js";import"./index-9272cc33.js";import"./Popover-fafbd2ef.js";import"./PopupUtils-46fb16e4.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-47573c24.js";import"./FocusableElements-6ebe483a.js";import"./isElementHidden-01c07146.js";import"./decline-b90c4a5f.js";import"./i18n-defaults-80781f7e.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./information-33412b2a.js";import"./Button-dc6eb42e.js";function we(o={}){const{wrapper:r}=Object.assign({},i(),o.components);return r?e.jsx(r,Object.assign({},o,{children:e.jsx(t,{})})):t();function t(){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code"},i(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Setup"}),`
`,e.jsx(m,{headingSelector:"h2"}),`
`,e.jsx(n.h1,{id:"cypress-test-setup",children:"Cypress Test Setup"}),`
`,e.jsxs(n.p,{children:["UI5 Web Components for React is using ",e.jsx(n.a,{href:"https://www.cypress.io/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Cypress"})," as preferred testing framework. There you have the options of testing components only or create End-to-End tests for your application."]}),`
`,e.jsx(n.h2,{id:"configuration",children:"Configuration"}),`
`,e.jsxs(n.p,{children:["When launching Cypress the first time you're guided through the setup, which then will create a ",e.jsx(n.a,{href:"https://docs.cypress.io/guides/references/configuration",target:"_blank",rel:"nofollow noopener noreferrer",children:"configuration file"})," for you. You can use any configuration you like, but since we're heavily relying on web-components, we recommend traversing the shadow DOM per default:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`includeShadowDom: true;
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://docs.cypress.io/guides/component-testing/react/quickstart",target:"_blank",rel:"nofollow noopener noreferrer",children:"Here"})," you can find the Cypress Quickstart tutorial for React."]}),`
`,e.jsx(n.h2,{id:"themeprovider",children:"ThemeProvider"}),`
`,e.jsxs(n.p,{children:["UI5 Web Components for React components have to be wrapped inside a ",e.jsx(n.code,{children:"ThemeProvider"}),", depending on your test setup (especially for component-testing) it might prove beneficial creating a custom ",e.jsx(n.code,{children:"mount"})," command, that includes the ",e.jsx(n.code,{children:"ThemeProvider"}),"."]}),`
`,e.jsx(n.p,{children:"JavaScript:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`/**
 * Cypress mount with ThemeProvider
 */
Cypress.Commands.add('mount', (component, options) => {
  return mount(<ThemeProvider>{component}</ThemeProvider>, options);
});
`})}),`
`,e.jsx(n.p,{children:"TypeScript declaration:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`declare global {
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
`,e.jsxs(n.p,{children:["You can define the command for example in the ",e.jsx(n.code,{children:"commands.ts/js"})," file:"]}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Example file"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { mount } from 'cypress/react18';
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
`,e.jsx(n.h2,{id:"cypress-commands-package-for-ui5-webcomponents",children:"Cypress Commands package for ui5-webcomponents"}),`
`,e.jsx(a,{hideCloseButton:!0,children:`This package is a work-in-progress and can be extended by you! If you feel like a command or query is missing, please
feel free to open a PR adding it to our library. Contributions are always welcome!`}),`
`,e.jsx(n.p,{children:"Since testing web components is sometimes not as straightforward as one would like it to be, we offer a package with a set of commands and queries to make it easier to interact with them:"}),`
`,e.jsx(n.p,{children:"Install:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`npm install @ui5/webcomponents-cypress-commands
`})}),`
`,e.jsxs(n.p,{children:["After the installation you can import it in your entry file (e.g. ",e.jsx(n.code,{children:"component.ts"}),"):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@ui5/webcomponents-cypress-commands';
`})}),`
`,e.jsx(n.p,{children:"Now you can use all commands and queries that are available in this package."}),`
`,e.jsx(p,{})]})}}export{we as default};
//# sourceMappingURL=TestSetup-e3f2c731.js.map
