import{j as e}from"./useIsomorphicLayoutEffect-CC_9R8NV.js";import{useMDXComponents as t}from"./index-3-_tf5dF.js";import"./chunk-HLWAVYOI-DOGZlFEp.js";import{M as i}from"./index-DCe9hKTd.js";import"./index-BP8_t0zE.js";import"./index-BxmsGmlx.js";import"./copy-C3s9MmBF.js";import{F as s}from"./ProjectTemplate-CnfFx7fc.js";import{T as m}from"./TableOfContent-3S1XAVFG.js";import{M as p}from"./index-0sOo1Jhc.js";import"./iframe-K9ZPOBS-.js";import"../sb-preview/runtime.js";import"./client-Di-4O7We.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./Boot--nQrAl1V.js";import"./EventProvider-B3ZIXKWe.js";import"./Icons-Bp1YSqwb.js";import"./i18nBundle-zzLYNekx.js";import"./index-CzPEDdfg.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BSPa2dAP.js";import"./index-DRuGOEJb.js";import"./Label-BsQWgLJi.js";import"./UI5Element-DYuDwSfb.js";import"./CustomElementsScope-muWBOMD2.js";import"./withWebComponent-BtiFbjTX.js";import"./utils-A9XecSn_.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-B_qME8Ot.js";import"./parameters-bundle.css-P3lSuE--.js";import"./index-Cqc2lMTm.js";import"./Button-CWBaZ7ro.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./Keys-BgUkNma0.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-D7AkHrnr.js";import"./HasPopup-Cecjtg2t.js";import"./index-lqfu6sXD.js";import"./Link-C6bYFqpr.js";import"./index-weJqy25G.js";import"./Popover-fF8jtMoy.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-BKIoEsVZ.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-CjoatB38.js";import"./FocusableElements-Duwi--Bv.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-CI3zUPmr.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-Cq34otsJ.js";import"./class-map-DRsidP3Z.js";import"./BrowserScrollbar.css-DtDsFaw-.js";import"./index-WspRYDV-.js";import"./i18n-defaults-BqW0kOHN.js";import"./I18nContext-RJHUyvz-.js";import"./index-Cqf388Vu.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./addCustomCSSWithScoping-BbKd266_.js";import"./index-DIKijyLT.js";import"./index-ClldIo8k.js";import"./Avatar-BS_WXaxR.js";import"./employee-CGxftPv4.js";import"./alert-GCtO51nh.js";import"./index-CXTSylkh.js";import"./decline-BAFEOGpp.js";import"./i18n-defaults-BdfZArTM.js";import"./information-C8CMIM2W.js";function r(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Setup"}),`
`,e.jsx(m,{headingSelector:"h2"}),`
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
`,e.jsx(p,{hideCloseButton:!0,children:`This package is a work-in-progress and can be extended by you! If you feel like a command or query is missing, please
feel free to open a PR adding it to our library. Contributions are always welcome!`}),`
`,e.jsx(o.p,{children:"Since testing web components is sometimes not as straightforward as one would like it to be, we offer a package with a set of commands and queries to make it easier to interact with them:"}),`
`,e.jsx(o.p,{children:"Install:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-sh",children:`npm install @ui5/webcomponents-cypress-commands
`})}),`
`,e.jsxs(o.p,{children:["After the installation you can import it in your entry file (e.g. ",e.jsx(o.code,{children:"component.ts"}),"):"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-ts",children:`import '@ui5/webcomponents-cypress-commands';
`})}),`
`,e.jsx(o.p,{children:"Now you can use all commands and queries that are available in this package."}),`
`,e.jsx(s,{})]})}function Ee(n={}){const{wrapper:o}={...t(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(r,{...n})}):r(n)}export{Ee as default};
