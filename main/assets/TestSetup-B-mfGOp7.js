import{j as e}from"./useIsomorphicLayoutEffect-CZEdMYkS.js";import{useMDXComponents as t}from"./index-DcZOShwE.js";import"./chunk-HLWAVYOI-DT-o1I1W.js";import{M as i}from"./index-ZM-57o7g.js";import{M as s}from"./index-T89MH8VM.js";import"./TagDesign-B60Yj3Pp.js";import"./index-gJgmXzrm.js";import"./index-DjqRnomV.js";import"./Boot-Bi0-wsLc.js";import"./copy-CtgKK3fC.js";import"./Button-g4Bi3K-W.js";import{F as m}from"./ProjectTemplate-CVCMjdRb.js";import{T as p}from"./TableOfContent-D6dbLPi8.js";import"./WrappingType-CW8URInd.js";import"./iframe-Cdu6IyIp.js";import"../sb-preview/runtime.js";import"./client-DNfJn3vO.js";import"./_baseForOwn-CLRePLhI.js";import"./mapValues-B_fQXYuL.js";import"./_baseUniq-C22BvjpN.js";import"./index-DPb1xiaU.js";import"./index-DrFu-skq.js";import"./UI5Element-BSD7m3Nn.js";import"./CustomElementsScopeUtils-DQm3oQ75.js";import"./EventProvider-CVfkyUHo.js";import"./withWebComponent-DbBZwVV6.js";import"./utils-D-LpYKBL.js";import"./slot--DoKcWSY.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-D-vhNEte.js";import"./decline-CbvxqJl_.js";import"./Icons-DNVx3qDv.js";import"./i18n-defaults-C2wY9l8t.js";import"./information-BBm6bxfd.js";import"./alert-C_nh5Qt7.js";import"./class-map-CgjcvVes.js";import"./Icon-CxSx41s_.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";import"./parameters-bundle.css-B_nLitlw.js";import"./i18n-defaults-5yojRpQ-.js";import"./AriaLabelHelper-LMIEtYQL.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./index-BPwAjkf8.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-IiibRSM5.js";import"./Popover-XR-C8_HJ.js";import"./Integer-WDQzHAdZ.js";import"./PopupsCommon.css-BweN9FxF.js";import"./FocusableElements-PMYTkUzF.js";import"./isElementHidden-B4HqmI2E.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BZa0Uicw.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-D9IWnstk.js";import"./BrowserScrollbar.css-YdZmbuMe.js";import"./index-DFf4EEFj.js";import"./Label-fn3eGIhh.js";import"./index-Dp8IwEPL.js";import"./index-CBVsOu0_.js";import"./Link-COfapY2z.js";import"./index-BNTlSUiU.js";import"./index-CPNTbpoD.js";import"./i18n-defaults-DXj3O94t.js";import"./I18nContext-D8i4N15C.js";import"./index-D-IgYp8E.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-BWMWV5L6.js";import"./useIsomorphicId-BEB4eg8l.js";import"./addCustomCSSWithScoping-DAUcWKpH.js";import"./index-C1t_cci-.js";import"./index-EmuVuczB.js";import"./index-DLqSBOZb.js";import"./Avatar-C8BgJzhJ.js";import"./employee-CU0PuroF.js";function r(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Setup"}),`
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
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Example file"}),e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import { mount } from 'cypress/react18';
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
`,e.jsx(s,{hideCloseButton:!0,children:`This package is a work-in-progress and can be extended by you! If you feel like a command or query is missing, please
feel free to open a PR adding it to our library. Contributions are always welcome!`}),`
`,e.jsx(o.p,{children:"Since testing web components is sometimes not as straightforward as one would like it to be, we offer a package with a set of commands and queries to make it easier to interact with them:"}),`
`,e.jsx(o.p,{children:"Install:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-sh",children:`npm install @ui5/webcomponents-cypress-commands
`})}),`
`,e.jsxs(o.p,{children:["After the installation you can import it in your entry file (e.g. ",e.jsx(o.code,{children:"component.ts"}),"):"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-ts",children:`import '@ui5/webcomponents-cypress-commands';
`})}),`
`,e.jsx(o.p,{children:"Now you can use all commands and queries that are available in this package."}),`
`,e.jsx(m,{})]})}function Ee(n={}){const{wrapper:o}={...t(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(r,{...n})}):r(n)}export{Ee as default};
