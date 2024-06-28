import{j as e}from"./useIsomorphicLayoutEffect-x3FS-xo7.js";import{useMDXComponents as t}from"./index-3-_tf5dF.js";import"./chunk-HLWAVYOI-DE7Cd6yW.js";import{M as i}from"./index-DxuOfQlo.js";import"./index-BP8_t0zE.js";import"./index-BxmsGmlx.js";import"./copy-CpRxx2mm.js";import{F as s}from"./ProjectTemplate-C8X93s0c.js";import{T as m}from"./TableOfContent-DEwwt8Fx.js";import{M as p}from"./index-DqXXZe2g.js";import"./iframe-BcfUQkuZ.js";import"../sb-preview/runtime.js";import"./client-Di-4O7We.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./Boot-CclrjlB_.js";import"./EventProvider-B3ZIXKWe.js";import"./Icons-Bft-hUnu.js";import"./i18nBundle-DaXqDOt3.js";import"./index-BykYlwjP.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-NckrYtSC.js";import"./index-DLdLI-Lw.js";import"./Label-DmN4xHd_.js";import"./UI5Element-SUktJcPg.js";import"./CustomElementsScopeUtils-CSlIoILc.js";import"./withWebComponent-BgGNQpSI.js";import"./utils-BiMDJYwV.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-1MXDhRqV.js";import"./parameters-bundle.css--Z5ctRmg.js";import"./index-BaLzQqsI.js";import"./Button-awfxS-u-.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./Keys-BgUkNma0.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-C_A-NjlC.js";import"./HasPopup-Cecjtg2t.js";import"./index-C3ku0FIC.js";import"./Link-fwsdvAFJ.js";import"./index-DkpNLt35.js";import"./Popover-DDKOmkxw.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-uPounuup.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-CWX1O2jP.js";import"./FocusableElements-i0omOcs_.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-Bwxc3Ll7.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-80OTj-RC.js";import"./class-map-CeKKj88r.js";import"./BrowserScrollbar.css-7CdlaW1M.js";import"./index-DOeO8XXJ.js";import"./i18n-defaults-Bdewnnuu.js";import"./I18nContext-RJHUyvz-.js";import"./index-C2xRLxKL.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./addCustomCSSWithScoping-9LlgEVTF.js";import"./index-DpSkdN2-.js";import"./index-CiKDZMgT.js";import"./Avatar-BLe1VqxP.js";import"./employee-uGJRlzwB.js";import"./alert-ClVg17pq.js";import"./index-4leB1AGq.js";import"./decline-ubQgRYfe.js";import"./i18n-defaults-BdfZArTM.js";import"./information-C5yxSOcR.js";function r(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Setup"}),`
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
