import{j as e}from"./useIsomorphicLayoutEffect-VT0hzFUo.js";import{useMDXComponents as t}from"./index-3-_tf5dF.js";import"./chunk-HLWAVYOI-DL2Ngrpb.js";import{M as i}from"./index-Cj6Pagzz.js";import"./index-BP8_t0zE.js";import"./index-BxmsGmlx.js";import"./copy-AJFuNtDX.js";import{F as s}from"./ProjectTemplate-BQCcVCHn.js";import{T as m}from"./TableOfContent-DUlOGHuy.js";import{M as p}from"./index-Cx-HDCOF.js";import"./iframe-Cedw0EV9.js";import"../sb-preview/runtime.js";import"./client-Di-4O7We.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./Boot-BVnGU0ip.js";import"./EventProvider-B3ZIXKWe.js";import"./Icons-DyBGPyMo.js";import"./i18nBundle-DbWkXQeQ.js";import"./index-Dp6KfAFn.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DovReOaw.js";import"./index-yUjXPaKm.js";import"./Label-8bLCWgMU.js";import"./UI5Element-DwbFyBon.js";import"./CustomElementsScopeUtils-B2x3tIsm.js";import"./withWebComponent-DvmwIdUK.js";import"./utils-neMnggoA.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-CqU3c0Xc.js";import"./parameters-bundle.css-kZpvVQc-.js";import"./index-DsOYnaoG.js";import"./Button-BsmQPuS3.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./Keys-BgUkNma0.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-_9Cp-e0V.js";import"./HasPopup-Cecjtg2t.js";import"./index-CDCZBM7X.js";import"./Link-DIcSBYfZ.js";import"./index-iA7BovOs.js";import"./Popover-ComfN-sG.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-CoIIx-oA.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-BspShIhm.js";import"./FocusableElements-DEjr2b5c.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DPru0u-P.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-RUCW1mQv.js";import"./class-map-CS8eahb3.js";import"./BrowserScrollbar.css-BTaDXFx1.js";import"./index-CNIrU-iy.js";import"./i18n-defaults-DgugUEvt.js";import"./I18nContext-RJHUyvz-.js";import"./index-CL_5mZ89.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./addCustomCSSWithScoping-VI82Stk0.js";import"./index-D8SZmpiB.js";import"./index-BXSHzXpc.js";import"./Avatar-Czn1NGIX.js";import"./employee-wCGkTOTe.js";import"./alert-CJTybc-z.js";import"./index-O_TuwMmf.js";import"./decline-CHA057wR.js";import"./i18n-defaults-BdfZArTM.js";import"./information-5jLlktsT.js";function r(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Setup"}),`
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
