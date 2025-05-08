import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-B5Ip8tK9.js";import{F as i}from"./CommandsAndQueries-DzSt12AK.js";import"./index-CEt2twIL.js";import{M as s}from"./index-DwUkKJWs.js";import{M as m}from"./index-aiOo9W_a.js";import"./TagDesign-Ga50IS6u.js";import"./index-U0ga5oGA.js";import"./index-B8m469-U.js";import"./Button-DcNvBpEn.js";import"./jsx-runtime-CkEx_Gfk.js";import"./copy-DmqZtkbO.js";import{T as p}from"./TableOfContent-BG9P-NK7.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-xNG2nZLh.js";import"./preview-BjE1zPRx.js";import"./iframe-Dv0RgN8U.js";import"./DocsRenderer-CFRXHY34-71cAWd7y.js";import"./react-18-SRpBHcoT.js";import"./index-BVR6w1bU.js";import"./Popover-eNK7pDla.js";import"./slot-_4yKMUwC.js";import"./PopupsCommon.css-DXmEAn4P.js";import"./event-strict-DgQLNDEV.js";import"./FocusableElements-DDPXQQfz.js";import"./isElementHidden-B4HqmI2E.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./CustomElementsScope-CjZbIYTD.js";import"./Keys-B3oBAe0t.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DS2o_9u5.js";import"./MediaRange-Bnzt26Xb.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./parameters-bundle.css-Dkq9X0yL.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-BFqlvNkW.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DUe1LpVj.js";import"./index-DotsZLBN.js";import"./Label-BrFTKjrK.js";import"./i18n-CjR4HGlq.js";import"./i18n-defaults-B158X0Y5.js";import"./index-dNG4P2z4.js";import"./index-DmKfE7Xu.js";import"./Link-CBPPqDB9.js";import"./Icon-BexaehQh.js";import"./index-D_lPDdUa.js";import"./index-BxLcq94m.js";import"./Text-CNWDrMdn.js";import"./willShowContent-CZcfsNXp.js";import"./addCustomCSSWithScoping-B73Gg2hE.js";import"./index-CD5x5g4B.js";import"./BusyIndicator-vKEUjaWy.js";import"./index-8fyqcNlw.js";import"./index-DOaWR8S5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BtfkId0O.js";import"./index-B_YuR9Ux.js";import"./I18nStore-tbyxgrjv.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./decline-zF6-_htN.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-a8ApNaQO.js";import"./information-DmA-zxas.js";import"./sys-enter-2-DU2G_wE6.js";import"./sys-enter-2-CbaoLfaf.js";import"./alert-CeIMTDH_.js";import"./Tooltips-DOGhZSxR.js";import"./EventProvider-ChtD9rRX.js";function r(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Setup"}),`
`,e.jsx(p,{headingSelector:"h2"}),`
`,e.jsx(o.h1,{id:"cypress-test-setup",children:"Cypress Test Setup"}),`
`,e.jsxs(o.p,{children:["UI5 Web Components for React is using ",e.jsx(o.a,{href:"https://www.cypress.io/",rel:"nofollow",children:"Cypress"})," as preferred testing framework. There you have the options of testing components only or create End-to-End tests for your application."]}),`
`,e.jsx(o.h2,{id:"configuration",children:"Configuration"}),`
`,e.jsxs(o.p,{children:["When launching Cypress the first time you're guided through the setup, which then will create a ",e.jsx(o.a,{href:"https://docs.cypress.io/guides/references/configuration",rel:"nofollow",children:"configuration file"})," for you. You can use any configuration you like, but since we're heavily relying on web-components, we recommend traversing the shadow DOM per default:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`includeShadowDom: true
`})}),`
`,e.jsxs(o.p,{children:[e.jsx(o.a,{href:"https://docs.cypress.io/guides/component-testing/react/overview",rel:"nofollow",children:"Here"})," you can find the Cypress Quickstart tutorial for React."]}),`
`,e.jsx(o.h2,{id:"themeprovider",children:"ThemeProvider"}),`
`,e.jsxs(o.p,{children:["UI5 Web Components for React components have to be wrapped inside a ",e.jsx(o.code,{children:"ThemeProvider"}),", depending on your test setup (especially for component-testing) it might prove beneficial creating a custom ",e.jsx(o.code,{children:"mount"})," command, that includes the ",e.jsx(o.code,{children:"ThemeProvider"}),"."]}),`
`,e.jsx(o.p,{children:"JavaScript:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`/**
 * Cypress mount with ThemeProvider
 */
Cypress.Commands.add('mount', (component, options) => {
  return mount(<ThemeProvider>{component}</ThemeProvider>, options);
});
`})}),`
`,e.jsx(o.p,{children:"TypeScript declaration:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-ts",children:`declare global {
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
`,e.jsxs(o.p,{children:["You can define the command for example in the ",e.jsx(o.code,{children:"commands.ts/js"})," file:"]}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Example file"}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { mount } from 'cypress/react';
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
`,e.jsx(o.h2,{id:"cypress-commands-package-for-ui5-webcomponents",children:"Cypress Commands package for ui5-webcomponents"}),`
`,e.jsx(m,{hideCloseButton:!0,children:`This package is a work-in-progress and can be extended by you! If you feel like a command or query is missing, please
feel free to open a PR adding it to our library. Contributions are always welcome!`}),`
`,e.jsx(o.p,{children:"Since testing web components is sometimes not as straightforward as one would like it to be, we offer a package with a set of commands and queries to make it easier to interact with them:"}),`
`,e.jsx(o.p,{children:"Install:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-sh",children:`npm install @ui5/webcomponents-cypress-commands
`})}),`
`,e.jsxs(o.p,{children:["After the installation you can import it in your entry file (e.g. ",e.jsx(o.code,{children:"component.ts"}),"):"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-ts",children:`import '@ui5/webcomponents-cypress-commands';
`})}),`
`,e.jsx(o.p,{children:"Now you can use all commands and queries that are available in this package."}),`
`,e.jsx(i,{})]})}function Pe(n={}){const{wrapper:o}={...t(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(r,{...n})}):r(n)}export{Pe as default};
