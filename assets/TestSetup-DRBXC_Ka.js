import{j as e}from"./jsx-runtime-DoxjgJx5.js";import{useMDXComponents as t}from"./index-DtGqrCZN.js";import"./chunk-HLWAVYOI-Ck7AfsuC.js";import{M as i}from"./index-DI6VfJam.js";import{F as s}from"./ProjectTemplate-zZw9Vs6U.js";import"./index-Cu9bd8lq.js";import"./index-Ckls47V4.js";import"./copy-CM5pqsHd.js";import{T as m}from"./TableOfContent-D0HrRMLy.js";import{M as p}from"./index-CD3vby3i.js";import"./iframe-BwYX9Hla.js";import"../sb-preview/runtime.js";import"./react-18-CyVMVvrE.js";import"./inheritsLoose-D8L2VVdp.js";import"./_baseForOwn-CD7metVA.js";import"./mapValues-DbyeKAf9.js";import"./_baseUniq-Dmu8z6NP.js";import"./index-D-lniKcH.js";import"./index-DrFu-skq.js";import"./react-jss.esm-BpNdaHSZ.js";import"./theming.esm-BaGMLphO.js";import"./index-CrxHuApl.js";import"./clsx-B-dksMZM.js";import"./index-CCP14paK.js";import"./Label-BBrs9RjN.js";import"./UI5Element-DtnZiShc.js";import"./Boot-DwA_pgKp.js";import"./VersionInfo-Bnh5Htkx.js";import"./CustomElementsScopeUtils-BkU30VC6.js";import"./withWebComponent-B8IC4jtY.js";import"./utils-CiHlOjk7.js";import"./useIsomorphicLayoutEffect-CDseMwwv.js";import"./i18nBundle-CW3QmvUh.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-ByZSnYVg.js";import"./parameters-bundle.css-DjgCrOcY.js";import"./index-CyJY5mpX.js";import"./Button-CVOwl4eG.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./Keys-BgUkNma0.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./Icons-Dptlkq46.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-BSolOZRA.js";import"./HasPopup-Cecjtg2t.js";import"./index-CP4DwF4n.js";import"./Link-DlttXuw3.js";import"./index-Bu7HVzj5.js";import"./Popover-jLsmKY5f.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-DV-WEd1e.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-D4CwgKUt.js";import"./FocusableElements-D39FYWGM.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-CBU2dt4G.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-CtdHLryf.js";import"./class-map-m3fFtNZw.js";import"./BrowserScrollbar.css-Dc6KEEQV.js";import"./index-BO8bU_Iz.js";import"./i18n-defaults-k3KOTM4I.js";import"./I18nContext-lEOM8vPx.js";import"./ThemingParameters--AGRs54p.js";import"./index-CIus2qXS.js";import"./useStylesheet-BSfe7C-7.js";import"./ModalsContext-DDUwbLsf.js";import"./useIsomorphicId-CHfKDsSO.js";import"./addCustomCSSWithScoping-D1RPuXTz.js";import"./index-DPQTQdMk.js";import"./index-AfRP8CNA.js";import"./Avatar-BlVXo_BW.js";import"./employee-BdaP6Y8j.js";import"./alert-BU8JezYB.js";import"./index-BHAGY1XH.js";import"./decline-DqGOoHuM.js";import"./i18n-defaults-BdfZArTM.js";import"./information-CElEnJTC.js";function n(r){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Setup"}),`
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
`,e.jsx(s,{})]})}function We(r={}){const{wrapper:o}={...t(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(n,{...r})}):n(r)}export{We as default};
