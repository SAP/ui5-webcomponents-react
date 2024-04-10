import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{useMDXComponents as t}from"./index-_byTH_QA.js";import"./chunk-HLWAVYOI-DWPuA3aa.js";import{M as i}from"./index-8TfwAPIG.js";import{F as s}from"./ProjectTemplate-DJowqKqb.js";import"./index-Dl6G-zuu.js";import"./index-D1_ZHIBm.js";import"./copy-Dz4oTMJU.js";import{T as m}from"./TableOfContent-DBD4Bi4E.js";import{M as p}from"./index-CGo-kcfh.js";import"./iframe-CYagPyBf.js";import"../sb-preview/runtime.js";import"./react-18-Bamk9FSf.js";import"./inheritsLoose-D8L2VVdp.js";import"./_baseForOwn-DFjKyXZi.js";import"./mapValues-BvzalXkB.js";import"./_baseUniq-DRxb5hvO.js";import"./index-2V9fy1S2.js";import"./index-DrFu-skq.js";import"./react-jss.esm-BPPChJW9.js";import"./theming.esm-5daRW75o.js";import"./index-t2jtc2K4.js";import"./clsx-B-dksMZM.js";import"./index-C0Ndq8sy.js";import"./Label-CTVRjihb.js";import"./UI5Element-Lw3nTtTN.js";import"./Boot-B0Gt2ObV.js";import"./ManagedStyles-DX5mlBXq.js";import"./CustomElementsScopeUtils-CeSGtO6z.js";import"./withWebComponent-BF9ncEMl.js";import"./utils-D1_qxj0a.js";import"./useIsomorphicLayoutEffect-gsbYElqV.js";import"./i18nBundle-Duvqe7kG.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-D1sujP0E.js";import"./parameters-bundle.css-DjgCrOcY.js";import"./index-B0cEwVma.js";import"./Button-D13uYO2F.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./Keys-BgUkNma0.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./Icons-DfCrNAdQ.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-C20AIXTC.js";import"./HasPopup-Cecjtg2t.js";import"./index-BCVc-sct.js";import"./Link-B2j2s4Ih.js";import"./index-Cc1RJ5f9.js";import"./Popover-DXiCQ_F_.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-DmBeTAQh.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-C1DKTBbu.js";import"./FocusableElements-4YGFH9ta.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-OFvM0oAF.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-O1QwFldx.js";import"./class-map-DeOlvaAn.js";import"./BrowserScrollbar.css-BiclUngR.js";import"./index-BjS4ztKm.js";import"./i18n-defaults-GDPbxlcd.js";import"./I18nContext-BcGksm2n.js";import"./ThemingParameters--AGRs54p.js";import"./index-BPVTr8FI.js";import"./useStylesheet-D5wp95d6.js";import"./ModalsContext-qaxSwC3j.js";import"./addCustomCSSWithScoping-DAt1aefI.js";import"./index-PFOJyKcr.js";import"./index-BepD6NX9.js";import"./Avatar-BwXc-3ne.js";import"./employee-C3y4a2zL.js";import"./alert-D4nm4k8k.js";import"./index-DCZNXoiN.js";import"./decline-D5dgPGzi.js";import"./i18n-defaults-BdfZArTM.js";import"./information-BLcQOnlv.js";function n(r){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Setup"}),`
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
`,e.jsx(s,{})]})}function Fe(r={}){const{wrapper:o}={...t(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(n,{...r})}):n(r)}export{Fe as default};
