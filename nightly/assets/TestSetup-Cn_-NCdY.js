import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-B5Ip8tK9.js";import{F as i}from"./CommandsAndQueries-BrR3YQU-.js";import"./index-DZ-a8HEi.js";import{M as s}from"./index-DxRWphRT.js";import{M as m}from"./index-Ultsg-G0.js";import"./TagDesign-Ga50IS6u.js";import"./index-U0ga5oGA.js";import"./index-B8m469-U.js";import"./Button-C3KIEZ_B.js";import"./jsx-runtime-BCizSm9J.js";import"./copy-BJ2RS-I5.js";import{T as p}from"./TableOfContent-BG9P-NK7.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-zAoAJako.js";import"./preview-CzadHb5e.js";import"./iframe-DbR6BzI7.js";import"./DocsRenderer-CFRXHY34-Cl4VftLC.js";import"./react-18-SRpBHcoT.js";import"./index-BVR6w1bU.js";import"./Popover-ZaMaqrll.js";import"./slot-_4yKMUwC.js";import"./PopupsCommon.css-DkWsY6As.js";import"./event-strict-DgQLNDEV.js";import"./FocusableElements-BcTTx3-_.js";import"./isElementHidden-B4HqmI2E.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./CustomElementsScope-lRvT7iCm.js";import"./Keys-B3oBAe0t.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DMSxvinm.js";import"./MediaRange-Bnzt26Xb.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./parameters-bundle.css-BLEjIEH9.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-KM_ngbs2.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-N7C2bzZq.js";import"./index-Cvp8w3St.js";import"./Label-efMMm_Yw.js";import"./i18n-CjR4HGlq.js";import"./i18n-defaults-B8cpOtV2.js";import"./index-DoqJBpXZ.js";import"./index-BQnCm__z.js";import"./Link-DU2LYizk.js";import"./Icon-D8gJIGEW.js";import"./index-DogrUJhP.js";import"./index-BCr_l6cl.js";import"./Text-ahyk1WrN.js";import"./willShowContent-CZcfsNXp.js";import"./addCustomCSSWithScoping-BBYkOVIV.js";import"./index-CWu8VubW.js";import"./BusyIndicator-CXYqK0WZ.js";import"./index-GxH6uhPh.js";import"./index-D-WnL20f.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CIU74CR3.js";import"./index-B3S9X8vy.js";import"./I18nStore-BqSUVB5y.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./decline-CO_yryFo.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-BiJmvry2.js";import"./information-BA_ST16a.js";import"./sys-enter-2-L9fob0bg.js";import"./sys-enter-2-C09nDPBO.js";import"./alert-BjJeIaiS.js";import"./Tooltips-DBnVRLcV.js";import"./EventProvider-ChtD9rRX.js";function r(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Setup"}),`
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
