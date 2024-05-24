import{j as e}from"./useIsomorphicLayoutEffect-wJjydpYF.js";import{useMDXComponents as t}from"./index-3-_tf5dF.js";import"./chunk-HLWAVYOI-x3X248OV.js";import{M as i}from"./index-Cp3SgDex.js";import"./index-BP8_t0zE.js";import"./index-BxmsGmlx.js";import"./copy-3Ib5ZJqq.js";import{F as s}from"./ProjectTemplate-DLRPxc5Y.js";import{T as m}from"./TableOfContent-h3LZCels.js";import{M as p}from"./index-CVyVDDRe.js";import"./iframe-DCtDS0JT.js";import"../sb-preview/runtime.js";import"./client-Di-4O7We.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./Boot-DRGCpzpB.js";import"./EventProvider-B3ZIXKWe.js";import"./Icons-CG6FlOJ_.js";import"./i18nBundle-BdneKiEM.js";import"./index-CVhCT1_x.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DShc4-AB.js";import"./index-CPv09YCc.js";import"./Label-IIemeO1C.js";import"./UI5Element-DC8MZeOy.js";import"./CustomElementsScopeUtils-yz8rUzbr.js";import"./withWebComponent-CWrtEEjV.js";import"./utils-EaJipdFl.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-DKt7VHOa.js";import"./parameters-bundle.css-CtgfEhuk.js";import"./index-ClX_3Fz2.js";import"./Button-BrKU6WlN.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./Keys-BgUkNma0.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-CmpPkOGs.js";import"./HasPopup-Cecjtg2t.js";import"./index-DIA_iDu8.js";import"./Link-Bsw9emR4.js";import"./index-BFZ01pPU.js";import"./Popover-D2WBCDl9.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-C_R40Sx-.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-BVkg1U_d.js";import"./FocusableElements-CrwTZl4-.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DEdNEOKg.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-MmmenpP7.js";import"./class-map-B9wLsnvZ.js";import"./BrowserScrollbar.css-cD_o1v9b.js";import"./index-6h8N-xs_.js";import"./i18n-defaults-DzvGxznN.js";import"./I18nContext-RJHUyvz-.js";import"./index-CSI8GtFb.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./addCustomCSSWithScoping-Bzep2v3d.js";import"./index-CBS9CWCt.js";import"./index-CmDmY3xx.js";import"./Avatar-CzFTtzk7.js";import"./employee-DAykk7OJ.js";import"./alert-BiuXmsCV.js";import"./index-B0SZxiF2.js";import"./decline--LpgiSgn.js";import"./i18n-defaults-BdfZArTM.js";import"./information-CWnHh7YX.js";function r(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Setup"}),`
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
