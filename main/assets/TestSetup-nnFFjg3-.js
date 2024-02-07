import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{M as s}from"./chunk-HLWAVYOI-Dndr2xKl.js";import{F as m}from"./ProjectTemplate-N4ZdDcNE.js";import"./index-OjgoNOWw.js";import"./index-QYh6idnL.js";import{T as p}from"./TableOfContent-yuxnLcsh.js";import{u as i}from"./index-RwE9nQVW.js";import{M as a}from"./index-JbUlrMHF.js";import"./iframe-RV3TGIUV.js";import"../sb-preview/runtime.js";import"./react-18-1WT2dSvK.js";import"./_baseForOwn-z3VktcOy.js";import"./mapValues-Iyc0g4nJ.js";import"./_baseUniq-PeaQ4i79.js";import"./index-PPLHz8o0.js";import"./index-ru46B3pF.js";import"./react-jss.esm-tmBtHfec.js";import"./index-_9C7BQQF.js";import"./clsx-Zbgk8kpT.js";import"./index-_7MDuYo6.js";import"./Label-GIHgrMyy.js";import"./UI5Element-_cJDeK03.js";import"./i18nBundle-YDapVb1x.js";import"./VersionInfo-AzzP9wS2.js";import"./CustomElementsScopeUtils-IpwVqUeG.js";import"./withWebComponent--kEkWNJH.js";import"./utils-rNFQc6Ui.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./WrappingType-avPrqc94.js";import"./i18n-defaults-3YbdkqSs.js";import"./parameters-bundle.css-mPCp9TQx.js";import"./index-OfZTT18B.js";import"./Button-Q_btruTx.js";import"./event-lM5HanI-.js";import"./slot-HSrR9XJ-.js";import"./Keys-Mzj2D4aO.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./Icons-dG5I7pqk.js";import"./Icon-1HyKfQwB.js";import"./HasPopup-9BAMrqbD.js";import"./index-slV4Qz1M.js";import"./Link--uQmFIhM.js";import"./index-j3OIhMq7.js";import"./Popover-4Jmhfo0j.js";import"./Integer-kog98579.js";import"./PopupUtils-WqNPYdCF.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-U0zEo08F.js";import"./FocusableElements-YRGIpHeQ.js";import"./isElementHidden-d3-Fo4V6.js";import"./getEffectiveScrollbarStyle-Gz48PLeD.js";import"./ResizeHandler-xTi6PJ7P.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-5njKSr-C.js";import"./class-map-Y-YjCFqX.js";import"./BrowserScrollbar.css-OKoQbzr6.js";import"./index-G1ylA0vb.js";import"./i18n-defaults-a20Pyi7e.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-evY60Rnm.js";import"./ModalsContext-T9gUbaXC.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-fxF1oxJv.js";import"./index-PBdczHow.js";import"./index-GbEtIA3i.js";import"./Avatar-zEbB_F4h.js";import"./employee-2wNDT3_m.js";import"./alert-dnfYKYS3.js";import"./index-Up08Xn43.js";import"./decline-TrFDzgUZ.js";import"./i18n-defaults-iZnAAWr4.js";import"./information-hXM74YAc.js";function Re(r={}){const{wrapper:n}=Object.assign({},i(),r.components);return n?e.jsx(n,Object.assign({},r,{children:e.jsx(t,{})})):t();function t(){const o=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code"},i(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Setup"}),`
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
`,e.jsx(m,{})]})}}export{Re as default};
