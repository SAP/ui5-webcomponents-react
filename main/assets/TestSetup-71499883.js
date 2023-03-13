import{j as e,a as o,F as m}from"./jsx-runtime-670450c2.js";import"./chunk-PCJTTTQV-06356942.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{M as a}from"./index-a5b0d48e.js";import"./DomRefTable.module-662c659b.js";import"./index-f1f749bf.js";import"./Import-f72dcf1d.js";import{T as p}from"./TableOfContent-0cf236d1.js";import{F as c}from"./Footer-37bd1cd1.js";import{u as s}from"./index-4fb8b842.js";import{M as d}from"./index-14f444b1.js";import"./iframe-2f6fe1a8.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./react-jss.esm-fe4dc3ff.js";import"./index-1d945bd3.js";import"./clsx.m-1229b3e0.js";import"./Footer.module-f90cad7d.js";import"./index-e369c219.js";import"./Link-d055a21d.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./i18n-defaults-da1c0a37.js";import"./Keys-3acbae73.js";import"./AriaLabelHelper-c82262ef.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./index-fdd37487.js";import"./Label-040efebd.js";import"./Device-208919c6.js";import"./class-map-5d8e4b2b.js";import"./index-31d0fe2b.js";import"./Popover-e2d049c9.js";import"./Integer-d9976c13.js";import"./PopupsCommon.css-c7334d05.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./decline-5eb6d937.js";import"./Icons-7b82f601.js";import"./i18n-defaults-7dff8409.js";import"./information-0837f136.js";import"./Icon-a9b28f0c.js";import"./Button-8d5b0cb6.js";function Ce(r={}){const{wrapper:t}=Object.assign({},s(),r.components);return t?e(t,Object.assign({},r,{children:e(i,{})})):i();function i(){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code"},s(),r.components);return o(m,{children:[e(a,{title:"Setup"}),`
`,e(p,{headingSelector:"h2"}),`
`,e(n.h1,{children:"Cypress Test Setup"}),`
`,o(n.p,{children:["UI5 Web Components for React is using ",e(n.a,{href:"https://www.cypress.io/",children:"Cypress"})," as preferred testing framework. There you have the options of testing components only or create End-to-End tests for your application."]}),`
`,e(n.h2,{children:"Configuration"}),`
`,o(n.p,{children:["When launching Cypress the first time you're guided through the setup, which then will create a ",e(n.a,{href:"https://docs.cypress.io/guides/references/configuration",children:"configuration file"})," for you. You can use any configuration you like, but since we're heavily relying on web-components, we recommend traversing the shadow DOM per default:"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`includeShadowDom: true;
`})}),`
`,o(n.p,{children:[e(n.a,{href:"https://docs.cypress.io/guides/component-testing/react/quickstart",children:"Here"})," you can find the Cypress Quickstart tutorial for React."]}),`
`,e(n.h2,{children:"ThemeProvider"}),`
`,o(n.p,{children:["UI5 Web Components for React components have to be wrapped inside a ",e(n.code,{children:"ThemeProvider"}),", depending on your test setup (especially for component-testing) it might prove beneficial creating a custom ",e(n.code,{children:"mount"})," command, that includes the ",e(n.code,{children:"ThemeProvider"}),"."]}),`
`,e(n.p,{children:"JavaScript:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`/**
 * Cypress mount with ThemeProvider
 */
Cypress.Commands.add('mount', (component, options) => {
  return mount(<ThemeProvider>{component}</ThemeProvider>, options);
});
`})}),`
`,e(n.p,{children:"TypeScript declaration:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-ts",children:`declare global {
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
`,o(n.p,{children:["You can define the command for example in the ",e(n.code,{children:"commands.ts/js"})," file:"]}),`
`,o("details",{children:[e("summary",{children:"Example file"}),e(n.pre,{children:e(n.code,{className:"language-tsx",children:`import { mount } from 'cypress/react18';
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
`,e(n.h2,{children:"Cypress Commands package for ui5-webcomponents"}),`
`,e(d,{hideCloseButton:!0,children:`This package is a work-in-progress and can be extended by you! If you feel like a command or query is missing, please
feel free to open a PR adding it to our library. Contributions are always welcome!`}),`
`,e(n.p,{children:"Since testing web components is sometimes not as straightforward as one would like it to be, we offer a package with a set of commands and queries to make it easier to interact with them:"}),`
`,e(n.p,{children:"Install:"}),`
`,e(n.pre,{children:e(n.code,{className:"language-sh",children:`npm install @ui5/webcomponents-cypress-commands
`})}),`
`,o(n.p,{children:["After the installation you can import it in your entry file (e.g. ",e(n.code,{children:"component.ts"}),"):"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-ts",children:`import '@ui5/webcomponents-cypress-commands';
`})}),`
`,e(n.p,{children:"Now you can use all commands and queries that are available in this package."}),`
`,e(c,{})]})}}export{Ce as default};
//# sourceMappingURL=TestSetup-71499883.js.map
