import{j as e}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as t}from"./index-ChplMHeC.js";import"./DocsRenderer-CFRXHY34-L5ow0dGA.js";import{M as i}from"./index-CTpEm8C4.js";import"./index-DpG-041u.js";import{M as s}from"./index-CdHGgSNR.js";import"./TagDesign-Dou_yO3g.js";import"./index-D23YZj_x.js";import"./index-DJ2M8xrO.js";import"./Button-Bn6Q5CAy.js";import"./withWebComponent-DfVDXLfc.js";import"./copy-BzOp45rx.js";import{F as m}from"./CommandsAndQueries-B9mVomeO.js";import{T as p}from"./TableOfContent-QtRkCFei.js";import"./WrappingType-CW8URInd.js";import"./Title-D0oe8JHs.js";import"./iframe-JQuCPaIx.js";import"./client-lwzJIAjg.js";import"./index-DkMQ0k7r.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-DEVDpFvK.js";import"./Icon-DVzRT9Bg.js";import"./useIsomorphicLayoutEffect-Clyi7m9u.js";import"./Keys-Df3IBHp2.js";import"./parameters-bundle.css-BzaqQttB.js";import"./decline-BOQDYlzc.js";import"./i18n-defaults-CUGG7UPM.js";import"./information-CuCY0lV7.js";import"./information-Cak16zSA.js";import"./sys-enter-2-XqI4eejo.js";import"./sys-enter-2-Dcza6can.js";import"./i18n-defaults-Cyg2J0QB.js";import"./AccessibilityTextsHelper-CSnJP9TL.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-ifklPEaK.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./utils-C9_9ShpY.js";import"./Popover-D2H5tr2x.js";import"./PopupsCommon.css-BjjP0aIP.js";import"./FocusableElements-DmMpNXMH.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-J9tSIEDW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DlOwLzX7.js";import"./MediaRange-Bnzt26Xb.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-DlWYL6lf.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DNyxTWaC.js";import"./index-DVZh2p7o.js";import"./Label-C5k308Ss.js";import"./index-DaCk7tY-.js";import"./index-Dh-Pr-fK.js";import"./Link-C6yBf8L4.js";import"./index-DgTgpO-4.js";import"./index-DgufeG-1.js";import"./Text-BgOY5gTt.js";import"./addCustomCSSWithScoping-DJgtY14Y.js";import"./index-BQ73vKGB.js";import"./index-pRRfesa_.js";import"./BusyIndicator-DpBDtyrv.js";import"./index-C1yRVqRl.js";import"./index-DZyogJjo.js";import"./AvatarSize-BceVhWoP.js";import"./employee-Dre3WUSG.js";import"./index-B2fZlG60.js";import"./I18nStore-DzsPQ4Pu.js";function r(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Setup"}),`
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
`,e.jsx(m,{})]})}function Pe(n={}){const{wrapper:o}={...t(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(r,{...n})}):r(n)}export{Pe as default};
