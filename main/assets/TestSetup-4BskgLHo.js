import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{M as s}from"./chunk-HLWAVYOI-WPudlgZU.js";import"./DomRefTable.module-qh4TB5pv.js";import"./index-OjgoNOWw.js";import{T as m}from"./TableOfContent-9fTMDxxS.js";import{F as p}from"./Footer-aUBXXPq2.js";import{u as i}from"./index-RwE9nQVW.js";import{M as a}from"./index-7OCPbIA1.js";import"./iframe-Ds7lpwBG.js";import"../sb-preview/runtime.js";import"./react-18-1WT2dSvK.js";import"./index-QYh6idnL.js";import"./_baseForOwn-UZJwRxDU.js";import"./mapValues-HzTlT2lF.js";import"./_baseUniq-JVyScZ-n.js";import"./index-PPLHz8o0.js";import"./index-UBYxvHMA.js";import"./react-jss.esm-tmBtHfec.js";import"./index-O1qeqEwP.js";import"./clsx-Zbgk8kpT.js";import"./i18n-defaults-PpubpVn0.js";import"./i18nBundle-1uTNzT_G.js";import"./VersionInfo-doEI4kCH.js";import"./I18nContext-VUOpdMoH.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./ThemingParameters-UghqSl-x.js";import"./index-Ad7wliO4.js";import"./UI5Element-N46uHiF6.js";import"./CustomElementsScopeUtils--FMJdKyV.js";import"./ModalsContext-0q87fkkd.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-SeojittA.js";import"./utils-7qe6Bov5.js";import"./index-YQlt53zR.js";import"./withWebComponent-m2csmhkT.js";import"./slot-HSrR9XJ-.js";import"./Icon-q2l1h21j.js";import"./Icons-JGtWxtgH.js";import"./Integer-kog98579.js";import"./class-map-lkLxloiQ.js";import"./i18n-defaults-Hnw7H5Tc.js";import"./index-eFucXfmk.js";import"./Avatar-3tdvLPxl.js";import"./ResizeHandler-pjwwRwdX.js";import"./employee-1rhW5wth.js";import"./alert-n6PTDijY.js";import"./index-MYn8Qkr3.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./index-MdLZ2Xb1.js";import"./Link-GBCkwT5X.js";import"./MarkedEvents-aYv14vsS.js";import"./WrappingType-avPrqc94.js";import"./index-ow_R__0g.js";import"./index-VSCHd-WJ.js";import"./Label-lanRvJLA.js";import"./index-Ywbdq6yx.js";import"./Button-5EpXIGtS.js";import"./index-hBjQiPGY.js";import"./Popover-QuSZvfFm.js";import"./PopupUtils-K8GVBVSe.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-T6pSPG1a.js";import"./FocusableElements-p1LB11Hl.js";import"./isElementHidden-d3-Fo4V6.js";import"./decline-tUGLActy.js";import"./i18n-defaults-CPLPRuO1.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-2OzZTNdj.js";import"./BrowserScrollbar.css-WTCBaVgb.js";import"./information-rXvvQTyd.js";function Se(n={}){const{wrapper:r}=Object.assign({},i(),n.components);return r?e.jsx(r,Object.assign({},n,{children:e.jsx(t,{})})):t();function t(){const o=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code"},i(),n.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Setup"}),`
`,e.jsx(m,{headingSelector:"h2"}),`
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
`,e.jsx(p,{})]})}}export{Se as default};
