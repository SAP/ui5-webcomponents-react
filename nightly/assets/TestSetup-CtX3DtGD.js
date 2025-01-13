import{j as e}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as t}from"./index-B7tNCeqj.js";import"./chunk-NUUEMKO5-CHxf1sCs.js";import{ae as i}from"./index-DmHEPNWH.js";import"./index-zGYL4Tx7.js";import{M as s}from"./index-CF2XCfOa.js";import"./TagDesign-Dou_yO3g.js";import"./index-CjmQ2z5u.js";import"./index-bI5-aUrJ.js";import"./fiori-BEcr7J4N.js";import"./main-rGL2KZiJ.js";import"./Button-BBEhHqXq.js";import"./withWebComponent-DbOtF11K.js";import"./copy-ByaNPW9V.js";import{F as m}from"./CommandsAndQueries-Bz_DHfiR.js";import{T as p}from"./TableOfContent-BTksmC1d.js";import"./products-B8km3JGR.js";import"./WrappingType-CW8URInd.js";import"./Title-HEcUckFf.js";import"./iframe-ang8BRkv.js";import"../sb-preview/runtime.js";import"./client-CY4f97Aa.js";import"./index-DGl0hLba.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./slot-Df15G--e.js";import"./event-strict-C2lE4gn2.js";import"./i18n-BLQCbquq.js";import"./Icon-DnECHVzX.js";import"./useIsomorphicLayoutEffect-U1V4gMqc.js";import"./Keys-icCwrzTr.js";import"./parameters-bundle.css-BzaqQttB.js";import"./decline-Cvpxulmf.js";import"./i18n-defaults-CUGG7UPM.js";import"./information-Z-_GrMVK.js";import"./information-WFnUlRRI.js";import"./sys-enter-2-2B0zQ6hc.js";import"./sys-enter-2-BneCyVoJ.js";import"./i18n-defaults-Cyg2J0QB.js";import"./AccessibilityTextsHelper-DhVMExKx.js";import"./willShowContent-BOkh0bwj.js";import"./Tooltips-CxBV-rFR.js";import"./toLowercaseEnumValue-BQhMonSq.js";import"./utils-5ouIlTbN.js";import"./Popover-jpBWywBD.js";import"./PopupsCommon.css-C5goN-pn.js";import"./FocusableElements-DKyPTCYZ.js";import"./isElementHidden-Bpu2V8BK.js";import"./isElementClickable-C7H9UXMP.js";import"./getActiveElement-BL9Yqj8a.js";import"./ResizeHandler-y4ADtKuu.js";import"./MediaRange-CQ-a3KRn.js";import"./getEffectiveScrollbarStyle-DY0HYxPj.js";import"./index-BTIftX-2.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-CGem_MOm.js";import"./index-BCOROM5X.js";import"./Label-B_m68C-w.js";import"./index-Bq0c7Dpk.js";import"./index-DbDAMUse.js";import"./Link-CGflddfl.js";import"./index-DA9x0mSX.js";import"./index-mePJl18F.js";import"./Text-cV8jhUFL.js";import"./addCustomCSSWithScoping-DOW-YdFK.js";import"./index-MIUva8A9.js";import"./BusyIndicator-7GyohC3D.js";import"./index-DF8djFGP.js";import"./index-V1glf46E.js";import"./AvatarSize-BceVhWoP.js";import"./employee-DorkY_DY.js";import"./index-x3IZBQbM.js";import"./I18nStore-CG8U7JCg.js";function r(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Setup"}),`
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
`,e.jsx(m,{})]})}function Se(n={}){const{wrapper:o}={...t(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(r,{...n})}):r(n)}export{Se as default};
