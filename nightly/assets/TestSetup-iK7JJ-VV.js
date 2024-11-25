import{j as e}from"./jsx-runtime-D6fbYt3N.js";import{useMDXComponents as t}from"./index-DyCphG7h.js";import"./chunk-NUUEMKO5-YaTFvJlV.js";import{ae as i}from"./index-URQJwgp2.js";import"./index-CW0pURC6.js";import{M as s}from"./index-OrErW1tb.js";import"./TagDesign-Dou_yO3g.js";import"./index-DysCNOs_.js";import"./index-C4cLd1FO.js";import"./Button-CzXV-qq-.js";import"./withWebComponent-DpVKsRHi.js";import"./copy-BtTL6xAX.js";import{F as m}from"./CommandsAndQueries-BMRwZY9A.js";import{T as p}from"./TableOfContent-DRym89KV.js";import"./WrappingType-CW8URInd.js";import"./Title-DnczWaCy.js";import"./iframe-HfST3bJB.js";import"../sb-preview/runtime.js";import"./client-CqEfiX9M.js";import"./index-BcsOxL0D.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-BX8i4Y_x.js";import"./i18n-DEVDpFvK.js";import"./decline-Ch4ABsnB.js";import"./Icon-CrKv37md.js";import"./useIsomorphicLayoutEffect-F-N6bu_1.js";import"./Keys-DoZifIQ_.js";import"./utils-BMpfTDbr.js";import"./parameters-bundle.css-R51uC6BG.js";import"./i18n-defaults-neJWcM66.js";import"./information-D_LjlJHK.js";import"./alert-CiqdS0Ti.js";import"./class-map-CAgcI9af.js";import"./i18n-defaults-CMHHS2wK.js";import"./AriaLabelHelper-C5uDZewF.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-HqN2rB8b.js";import"./Popover-CxadHYVC.js";import"./PopupsCommon.css-Bu1W85h-.js";import"./FocusableElements-DpmShrVF.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-D2m47C26.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-Bigav4TG.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-VxGFz2Tr.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BAIsnduv.js";import"./index-kNlKigw5.js";import"./Label-D_ADNoJV.js";import"./index-DP-u0XOf.js";import"./index-cawFe0IV.js";import"./Link-CcG_uYXc.js";import"./index-x5zB9JtW.js";import"./index-CA4smrai.js";import"./addCustomCSSWithScoping-DYmOnLgW.js";import"./index-qKU3PnwJ.js";import"./BusyIndicator-B17L6t2M.js";import"./index-C6sMyakJ.js";import"./index-CHrZj7jK.js";import"./Avatar-CLqwzIQ4.js";import"./employee-CUDhI-YO.js";import"./index-DG836lmi.js";import"./I18nStore-CXxqSOxg.js";function r(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Setup"}),`
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
`,e.jsx(m,{})]})}function be(n={}){const{wrapper:o}={...t(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(r,{...n})}):r(n)}export{be as default};
