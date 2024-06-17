import{j as e}from"./useIsomorphicLayoutEffect-CJg151Ok.js";import{useMDXComponents as t}from"./index-Bql5lgBm.js";import"./chunk-HLWAVYOI-5AW6xoa1.js";import{M as i}from"./index-BcesyvNo.js";import{M as s}from"./index-BrzlRZx6.js";import"./TagDesign-B60Yj3Pp.js";import"./index-CP2MHerv.js";import"./index-CUD6gg2y.js";import"./Boot-CUKJMqeB.js";import"./copy-BR6xdeTx.js";import"./Button-BJ75y3Nh.js";import{F as m}from"./ProjectTemplate-BXXfi1SO.js";import{T as p}from"./TableOfContent-CzIM5YyN.js";import"./WrappingType-CW8URInd.js";import"./iframe-Bpg9eTUf.js";import"../sb-preview/runtime.js";import"./client-CeotCdvV.js";import"./_baseForOwn-39ViRbo3.js";import"./mapValues-BafCeOy3.js";import"./_baseUniq-D4fCGXIX.js";import"./index-DBvbnR2h.js";import"./index-DrFu-skq.js";import"./UI5Element-D1gTBhJw.js";import"./CustomElementsScopeUtils-Br5bzw3_.js";import"./EventProvider-CVfkyUHo.js";import"./withWebComponent-BqYi3caL.js";import"./utils-BVRly08L.js";import"./slot--DoKcWSY.js";import"./event-Dq0fpeHi.js";import"./i18nBundle-DqiJMVwP.js";import"./decline-24gJ_QVD.js";import"./Icons-DKhvPm64.js";import"./i18n-defaults-C2wY9l8t.js";import"./information-B_T0tfhv.js";import"./alert-CCqY5Vji.js";import"./class-map-CsNukgzr.js";import"./Icon-DybkHgDw.js";import"./Device-RcFucVeJ.js";import"./Keys-B00bFMgT.js";import"./parameters-bundle.css-B_nLitlw.js";import"./i18n-defaults-DUapXIrq.js";import"./AriaLabelHelper-LMIEtYQL.js";import"./MarkedEvents-CAur0wxK.js";import"./willShowContent-CZcfsNXp.js";import"./index-CExtPKKn.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BYE0j0VN.js";import"./Popover-CLYhCt6_.js";import"./Integer-WDQzHAdZ.js";import"./PopupsCommon.css-DS4aznhi.js";import"./FocusableElements-BqtokFct.js";import"./isElementHidden-B4HqmI2E.js";import"./getEffectiveScrollbarStyle-BwuZEAK6.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-Cj9P7VXu.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-Blizc8Vd.js";import"./BrowserScrollbar.css-CWM6CH73.js";import"./index-CyzYONVb.js";import"./Label-aqqXsG4M.js";import"./index-c6D3qpy5.js";import"./index-2i_XbQjJ.js";import"./Link-D4QFbUsq.js";import"./index-CrJ5gNPa.js";import"./index-DymV_ww8.js";import"./i18n-defaults-DO_muapi.js";import"./I18nContext-BwNxpyJO.js";import"./index-C7ubApS_.js";import"./ModalsContext-CA2qjtQ6.js";import"./useIsomorphicId-BGiUoP5x.js";import"./addCustomCSSWithScoping-Cb1z8mH0.js";import"./index-DIV8pFHv.js";import"./index-CPlNFy0c.js";import"./index-DxZixt0G.js";import"./Avatar-BFwygaOl.js";import"./employee-CKaAdAd4.js";function r(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Setup"}),`
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
`,e.jsx(m,{})]})}function Re(n={}){const{wrapper:o}={...t(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(r,{...n})}):r(n)}export{Re as default};
