import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{M as s}from"./chunk-HLWAVYOI-psJj60ml.js";import"./DomRefTable.module-1teiQWGe.js";import"./index-OjgoNOWw.js";import{T as m}from"./TableOfContent-uZmr2UoK.js";import{F as p}from"./Footer-f0i2sv-0.js";import{u as i}from"./index-RwE9nQVW.js";import{M as a}from"./index--fFZoO1L.js";import"./iframe-S4JyMSMM.js";import"../sb-preview/runtime.js";import"./index-GL4gBoyB.js";import"./index-QYh6idnL.js";import"./mapValues-HzTlT2lF.js";import"./_baseForOwn-UZJwRxDU.js";import"./_baseUniq-JVyScZ-n.js";import"./index-PPLHz8o0.js";import"./react-jss.esm-AmlvxLhk.js";import"./index-yaLaEhii.js";import"./clsx-c3LcQGjR.js";import"./i18n-defaults-PmTGElot.js";import"./i18nBundle-Crssojm_.js";import"./VersionInfo-hBCHoyLi.js";import"./I18nContext-VUOpdMoH.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./ThemingParameters-UghqSl-x.js";import"./addCustomCSSWithScoping-cCePQQVr.js";import"./UI5Element-OBgzz0fv.js";import"./CustomElementsScopeUtils-kYmWas10.js";import"./utils-5CTKRvkw.js";import"./index-Vrh7cvSu.js";import"./withWebComponent-6ZcDnwha.js";import"./slot-HSrR9XJ-.js";import"./Icon-2m0rU9av.js";import"./Icons-zRUxeAje.js";import"./Integer-kog98579.js";import"./class-map-dxoND1Lf.js";import"./i18n-defaults-RBzcmDt8.js";import"./index-RDyNiobK.js";import"./Avatar-LWFiEvrj.js";import"./ResizeHandler-jV9qqcaG.js";import"./employee-DNZboz-g.js";import"./alert-SMfrQE5J.js";import"./index-JiwscGpR.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./index-FFmUsnk4.js";import"./Link-Gs09ax_S.js";import"./MarkedEvents-aYv14vsS.js";import"./WrappingType-avPrqc94.js";import"./index-FvozjNxD.js";import"./index-17AA29k7.js";import"./Label-bo0gz_aS.js";import"./index-070p_6Jf.js";import"./Button-UDaVhcBU.js";import"./index-xCjRCXU5.js";import"./Popover-SxOPU5wi.js";import"./PopupUtils-7oRQuqE1.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-dlrgNDf3.js";import"./FocusableElements-vmTxt0Po.js";import"./isElementHidden-d3-Fo4V6.js";import"./decline-P9scilyE.js";import"./i18n-defaults-n2A5pq_J.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-oXcF1--7.js";import"./BrowserScrollbar.css-gfEIeu7r.js";import"./information-eS-oBj3B.js";function Ce(o={}){const{wrapper:r}=Object.assign({},i(),o.components);return r?e.jsx(r,Object.assign({},o,{children:e.jsx(t,{})})):t();function t(){const n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code"},i(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Setup"}),`
`,e.jsx(m,{headingSelector:"h2"}),`
`,e.jsx(n.h1,{id:"cypress-test-setup",children:"Cypress Test Setup"}),`
`,e.jsxs(n.p,{children:["UI5 Web Components for React is using ",e.jsx(n.a,{href:"https://www.cypress.io/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Cypress"})," as preferred testing framework. There you have the options of testing components only or create End-to-End tests for your application."]}),`
`,e.jsx(n.h2,{id:"configuration",children:"Configuration"}),`
`,e.jsxs(n.p,{children:["When launching Cypress the first time you're guided through the setup, which then will create a ",e.jsx(n.a,{href:"https://docs.cypress.io/guides/references/configuration",target:"_blank",rel:"nofollow noopener noreferrer",children:"configuration file"})," for you. You can use any configuration you like, but since we're heavily relying on web-components, we recommend traversing the shadow DOM per default:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`includeShadowDom: true
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://docs.cypress.io/guides/component-testing/react/overview",target:"_blank",rel:"nofollow noopener noreferrer",children:"Here"})," you can find the Cypress Quickstart tutorial for React."]}),`
`,e.jsx(n.h2,{id:"themeprovider",children:"ThemeProvider"}),`
`,e.jsxs(n.p,{children:["UI5 Web Components for React components have to be wrapped inside a ",e.jsx(n.code,{children:"ThemeProvider"}),", depending on your test setup (especially for component-testing) it might prove beneficial creating a custom ",e.jsx(n.code,{children:"mount"})," command, that includes the ",e.jsx(n.code,{children:"ThemeProvider"}),"."]}),`
`,e.jsx(n.p,{children:"JavaScript:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`/**
 * Cypress mount with ThemeProvider
 */
Cypress.Commands.add('mount', (component, options) => {
  return mount(<ThemeProvider>{component}</ThemeProvider>, options);
});
`})}),`
`,e.jsx(n.p,{children:"TypeScript declaration:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`declare global {
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
`,e.jsxs(n.p,{children:["You can define the command for example in the ",e.jsx(n.code,{children:"commands.ts/js"})," file:"]}),`
`,e.jsxs("details",{children:[e.jsx("summary",{children:"Example file"}),e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { mount } from 'cypress/react18';
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
`,e.jsx(n.h2,{id:"cypress-commands-package-for-ui5-webcomponents",children:"Cypress Commands package for ui5-webcomponents"}),`
`,e.jsx(a,{hideCloseButton:!0,children:`This package is a work-in-progress and can be extended by you! If you feel like a command or query is missing, please
feel free to open a PR adding it to our library. Contributions are always welcome!`}),`
`,e.jsx(n.p,{children:"Since testing web components is sometimes not as straightforward as one would like it to be, we offer a package with a set of commands and queries to make it easier to interact with them:"}),`
`,e.jsx(n.p,{children:"Install:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`npm install @ui5/webcomponents-cypress-commands
`})}),`
`,e.jsxs(n.p,{children:["After the installation you can import it in your entry file (e.g. ",e.jsx(n.code,{children:"component.ts"}),"):"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`import '@ui5/webcomponents-cypress-commands';
`})}),`
`,e.jsx(n.p,{children:"Now you can use all commands and queries that are available in this package."}),`
`,e.jsx(p,{})]})}}export{Ce as default};
//# sourceMappingURL=TestSetup-vhECguCu.js.map
