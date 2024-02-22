import{j as e}from"./jsx-runtime-DtaoT6pD.js";import"./chunk-HLWAVYOI-T7wD-V5p.js";import{M as s}from"./index-eMsa0Mn2.js";import{F as m}from"./ProjectTemplate-Mhpg5fWK.js";import"./index-OjgoNOWw.js";import"./index-QYh6idnL.js";import"./copy-rq9qK5qL.js";import{T as p}from"./TableOfContent-2ToWQ4FY.js";import{u as i}from"./index-RwE9nQVW.js";import{M as a}from"./index-3m3yemr6.js";import"./iframe-8tQ8Fn7b.js";import"../sb-preview/runtime.js";import"./react-18-1WT2dSvK.js";import"./_baseForOwn-a7AeJH13.js";import"./mapValues-_kP3xGjM.js";import"./_baseUniq-_JZHYp0e.js";import"./index-PPLHz8o0.js";import"./index-7I0hdIjK.js";import"./react-jss.esm-tmBtHfec.js";import"./index-iYv8HJTi.js";import"./clsx-Zbgk8kpT.js";import"./index-lTAnhJgx.js";import"./Label-z6oc8zzv.js";import"./UI5Element-oLeGfnU4.js";import"./Language-aesXCmkP.js";import"./VersionInfo-AzzP9wS2.js";import"./CustomElementsScopeUtils-IpwVqUeG.js";import"./withWebComponent--kEkWNJH.js";import"./utils-rNFQc6Ui.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./i18nBundle-YvxCnun_.js";import"./WrappingType-avPrqc94.js";import"./i18n-defaults-CQMo-g9a.js";import"./parameters-bundle.css-mPCp9TQx.js";import"./index-_KBVW3rD.js";import"./Button-ui6PL7pJ.js";import"./event-lM5HanI-.js";import"./slot-HSrR9XJ-.js";import"./Keys-ZEuNsqmZ.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./Icons-B0Lm9Xgp.js";import"./willShowContent-MSvI8sYo.js";import"./Icon-s-QlKO5-.js";import"./HasPopup-9BAMrqbD.js";import"./index-wYLeOdql.js";import"./Link-lWkth14S.js";import"./index-S_l07AmD.js";import"./Popover-RS8IZQFL.js";import"./Integer-kog98579.js";import"./PopupUtils-7MJMGT2m.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-umKiUwKH.js";import"./FocusableElements-o5zpB6FE.js";import"./isElementHidden-d3-Fo4V6.js";import"./getEffectiveScrollbarStyle-Gz48PLeD.js";import"./ResizeHandler-pk5_zz-J.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-5njKSr-C.js";import"./class-map-Y-YjCFqX.js";import"./BrowserScrollbar.css-nSPAj6kk.js";import"./index-YN01GDwL.js";import"./i18n-defaults-1NWI3C8K.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-z21dC6BM.js";import"./ModalsContext-T9gUbaXC.js";import"./CssSizeVariables-HFpqBBhk.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-0Qf_GZqW.js";import"./index-aj7Jfxu0.js";import"./index-Q_z_E1D_.js";import"./Avatar-sqKRaJp5.js";import"./employee-PrBJTXfy.js";import"./alert-xBUzpOmY.js";import"./index-r9ow_Vrx.js";import"./decline-KM5PgfOz.js";import"./i18n-defaults-SIMqfZL6.js";import"./information-phWr88nL.js";function qe(r={}){const{wrapper:n}=Object.assign({},i(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(t,{})})):t();function t(){const o=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code"},i(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Setup"}),`
`,e.jsx(p,{headingSelector:"h2"}),`
`,e.jsx(o.h1,{id:"cypress-test-setup",children:"Cypress Test Setup"}),`
`,e.jsxs(o.p,{children:["UI5 Web Components for React is using ",e.jsx(o.a,{href:"https://www.cypress.io/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Cypress"})," as preferred testing framework. There you have the options of testing components only or create End-to-End tests for your application."]}),`
`,e.jsx(o.h2,{id:"configuration",children:"Configuration"}),`
`,e.jsxs(o.p,{children:["When launching Cypress the first time you're guided through the setup, which then will create a ",e.jsx(o.a,{href:"https://docs.cypress.io/guides/references/configuration",target:"_blank",rel:"nofollow noopener noreferrer",children:"configuration file"})," for you. You can use any configuration you like, but since we're heavily relying on web-components, we recommend traversing the shadow DOM per default:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-js",children:`includeShadowDom: true
`})}),`
`,e.jsxs(o.p,{children:[e.jsx(o.a,{href:"https://docs.cypress.io/guides/component-testing/react/overview",target:"_blank",rel:"nofollow noopener noreferrer",children:"Here"})," you can find the Cypress Quickstart tutorial for React."]}),`
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
`,e.jsx(a,{hideCloseButton:!0,children:`This package is a work-in-progress and can be extended by you! If you feel like a command or query is missing, please
feel free to open a PR adding it to our library. Contributions are always welcome!`}),`
`,e.jsx(o.p,{children:"Since testing web components is sometimes not as straightforward as one would like it to be, we offer a package with a set of commands and queries to make it easier to interact with them:"}),`
`,e.jsx(o.p,{children:"Install:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-sh",children:`npm install @ui5/webcomponents-cypress-commands
`})}),`
`,e.jsxs(o.p,{children:["After the installation you can import it in your entry file (e.g. ",e.jsx(o.code,{children:"component.ts"}),"):"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-ts",children:`import '@ui5/webcomponents-cypress-commands';
`})}),`
`,e.jsx(o.p,{children:"Now you can use all commands and queries that are available in this package."}),`
`,e.jsx(m,{})]})}}export{qe as default};
