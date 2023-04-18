import{j as e,a as o,F as a}from"./jsx-runtime-670450c2.js";import{M as m}from"./chunk-PCJTTTQV-7b7adb6e.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./DomRefTable.module-0e24f9a7.js";import"./index-f1f749bf.js";import"./Import-4ed9abe0.js";import{T as p}from"./TableOfContent-a00a5a7f.js";import{F as c}from"./Footer-d1a79ade.js";import{u as s}from"./index-4fb8b842.js";import{M as d}from"./index-a066d069.js";import"./iframe-f1bb0d46.js";import"../sb-preview/runtime.mjs";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./react-jss.esm-2e28eff7.js";import"./index-44cc9c22.js";import"./clsx.m-1229b3e0.js";import"./index-e4a4649e.js";import"./Label-528b8168.js";import"./UI5Element-e8adceda.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./Device-208919c6.js";import"./WrappingType-b81e595a.js";import"./class-map-6d48ebd3.js";import"./index-d788d3c0.js";import"./Link-3b8926df.js";import"./Icon-27a81412.js";import"./Icons-5b18f7d2.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-254d6b69.js";import"./index-f0fd9c5f.js";import"./Popover-824d4d7c.js";import"./slot-76e48863.js";import"./Integer-f7f172c9.js";import"./PopupUtils-6ec841a6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-7f720278.js";import"./FocusableElements-5012f8d0.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-382f34a2.js";import"./ResizeHandler-9d370fcd.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";import"./decline-7cb41e3a.js";import"./i18n-defaults-80781f7e.js";import"./information-2c502181.js";import"./Button-fa05cadd.js";function we(r={}){const{wrapper:t}=Object.assign({},s(),r.components);return t?e(t,Object.assign({},r,{children:e(i,{})})):i();function i(){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code"},s(),r.components);return o(a,{children:[e(m,{title:"Setup"}),`
`,e(p,{headingSelector:"h2"}),`
`,e(n.h1,{id:"cypress-test-setup",children:"Cypress Test Setup"}),`
`,o(n.p,{children:["UI5 Web Components for React is using ",e(n.a,{href:"https://www.cypress.io/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Cypress"})," as preferred testing framework. There you have the options of testing components only or create End-to-End tests for your application."]}),`
`,e(n.h2,{id:"configuration",children:"Configuration"}),`
`,o(n.p,{children:["When launching Cypress the first time you're guided through the setup, which then will create a ",e(n.a,{href:"https://docs.cypress.io/guides/references/configuration",target:"_blank",rel:"nofollow noopener noreferrer",children:"configuration file"})," for you. You can use any configuration you like, but since we're heavily relying on web-components, we recommend traversing the shadow DOM per default:"]}),`
`,e(n.pre,{children:e(n.code,{className:"language-js",children:`includeShadowDom: true;
`})}),`
`,o(n.p,{children:[e(n.a,{href:"https://docs.cypress.io/guides/component-testing/react/quickstart",target:"_blank",rel:"nofollow noopener noreferrer",children:"Here"})," you can find the Cypress Quickstart tutorial for React."]}),`
`,e(n.h2,{id:"themeprovider",children:"ThemeProvider"}),`
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
`,e(n.h2,{id:"cypress-commands-package-for-ui5-webcomponents",children:"Cypress Commands package for ui5-webcomponents"}),`
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
`,e(c,{})]})}}export{we as default};
//# sourceMappingURL=TestSetup-0386be33.js.map
