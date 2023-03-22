import{j as e,a as o,F as m}from"./jsx-runtime-670450c2.js";import{M as a}from"./chunk-PCJTTTQV-e62404d4.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./DomRefTable.module-55b356de.js";import"./index-f1f749bf.js";import"./Import-33804abc.js";import{T as p}from"./TableOfContent-26b4b9bb.js";import{F as c}from"./Footer-c5c962fb.js";import{u as s}from"./index-4fb8b842.js";import{M as d}from"./index-17c50781.js";import"./iframe-11b6f620.js";import"../sb-preview/runtime.mjs";import"./react-18-ecd79c7b.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./react-jss.esm-e54d2f1d.js";import"./index-8ba7ce6e.js";import"./clsx.m-1229b3e0.js";import"./index-3ceac05a.js";import"./Label-ccc234fe.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-65cd39a0.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./Device-208919c6.js";import"./WrappingType-b81e595a.js";import"./class-map-95320e87.js";import"./index-26001d6d.js";import"./Link-018547e8.js";import"./Icon-7987c836.js";import"./Icons-fe6e657a.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-254d6b69.js";import"./index-2147f6ab.js";import"./Popover-224d761a.js";import"./slot-634e3e91.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-9873a291.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-1da6d0d2.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-cae0a379.js";import"./decline-6bd98a2e.js";import"./i18n-defaults-80781f7e.js";import"./information-b6c8ed8e.js";import"./Button-bc3a11a1.js";function we(r={}){const{wrapper:t}=Object.assign({},s(),r.components);return t?e(t,Object.assign({},r,{children:e(i,{})})):i();function i(){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code"},s(),r.components);return o(m,{children:[e(a,{title:"Setup"}),`
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
`,e(c,{})]})}}export{we as default};
//# sourceMappingURL=TestSetup-7403b544.js.map
