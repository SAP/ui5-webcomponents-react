import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{M as c}from"./chunk-HLWAVYOI-ZbmTEaZG.js";import"./DomRefTable.module-osJUUuwu.js";import"./index-OjgoNOWw.js";import{T as p}from"./TableOfContent-kHO-OwM8.js";import{F as l}from"./Footer-JlkMYINF.js";import{u as i}from"./index-RwE9nQVW.js";import{M as r,a}from"./index-aHbKPPxv.js";import"./iframe-jchv5qTD.js";import"../sb-preview/runtime.js";import"./index-GL4gBoyB.js";import"./index-QYh6idnL.js";import"./mapValues-HzTlT2lF.js";import"./_baseForOwn-UZJwRxDU.js";import"./_baseUniq-JVyScZ-n.js";import"./index-PPLHz8o0.js";import"./react-jss.esm-tmBtHfec.js";import"./index-A5agBEX2.js";import"./clsx-c3LcQGjR.js";import"./i18n-defaults-cIbBWf4j.js";import"./i18nBundle-Crssojm_.js";import"./VersionInfo-hBCHoyLi.js";import"./I18nContext-VUOpdMoH.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./ThemingParameters-UghqSl-x.js";import"./addCustomCSSWithScoping-_6wxL5DG.js";import"./UI5Element-Y0uzLFOr.js";import"./CustomElementsScopeUtils-5j4ES8UU.js";import"./utils-NoXYr8Q_.js";import"./index-ruD9ZfJe.js";import"./withWebComponent-l-jCeTa1.js";import"./slot-HSrR9XJ-.js";import"./Icon-bdsWWJur.js";import"./Icons-WRZ8WMWs.js";import"./Integer-kog98579.js";import"./class-map-kmjzTHDs.js";import"./i18n-defaults-RBzcmDt8.js";import"./index-goZr7xRR.js";import"./Avatar-iPKVYLtK.js";import"./ResizeHandler-YlQCt_sN.js";import"./employee-fYGGLuhG.js";import"./alert-hH0G14f_.js";import"./index-9CMlSoRi.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./index-bLEfxp2b.js";import"./Link-tRmLKUhK.js";import"./MarkedEvents-aYv14vsS.js";import"./WrappingType-avPrqc94.js";import"./index-q8oiNN3v.js";import"./index-g486jw9l.js";import"./Label-ZVCbnRu4.js";import"./index-qHJaysKz.js";import"./Button-2q6zbrjb.js";import"./index-VPX749Yg.js";import"./Popover-F3UgQy3P.js";import"./PopupUtils-7oRQuqE1.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-QWf1zPQp.js";import"./FocusableElements-SaTJsZH1.js";import"./isElementHidden-d3-Fo4V6.js";import"./decline-tcMkvtbY.js";import"./i18n-defaults-n2A5pq_J.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-IagzN5gT.js";import"./BrowserScrollbar.css-aoBbOOT0.js";import"./information-bLrgXyhK.js";function ve(o={}){const{wrapper:s}=Object.assign({},i(),o.components);return s?e.jsx(s,Object.assign({},o,{children:e.jsx(n,{})})):n();function n(){const t=Object.assign({h1:"h1",b:"b",br:"br","ui5-link":"ui5-link",p:"p",a:"a",hr:"hr",code:"code",h2:"h2",pre:"pre",h3:"h3"},i(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Testing with Jest"}),`
`,e.jsx(t.h1,{id:"testing-with-jest",children:"Testing with Jest"}),`
`,e.jsx(r,{design:a.Warning,hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(t.b,{children:"We don't recommend testing UI5 Web Components for React with Jest anymore!"}),e.jsx(t.br,{})," Please use"," ",e.jsx(t["ui5-link"],{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/testing-with-cypress-setup--docs",children:" Cypress"})," "," instead."]})}),`
`,e.jsxs(t.p,{children:["Due to the lack of custom elements support when using the JSDOM, resulting in cumbersome mocking and behavior that is not applicable when actually interacting with the components, we dropped the support for testing with Jest and moved on to ",e.jsx(t.a,{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/testing-with-cypress-setup--docs",target:"_blank",rel:"nofollow noopener noreferrer",children:"Cypress"}),". This guide will still work, but we may remove the Jest setup file with our next major release."]}),`
`,e.jsx(t.hr,{}),`
`,e.jsxs(t.p,{children:["This guide is applicable if you are using a standard ",e.jsx(t.code,{children:"create-react-app"})," setup."]}),`
`,e.jsx(p,{}),`
`,e.jsx(t.h2,{id:"transpile-modules",children:"Transpile Modules"}),`
`,e.jsxs(t.p,{children:[e.jsx(t.code,{children:"create-react-app"})," offers you to modify specific parts of the ",e.jsx(t.code,{children:"jest"})," config by adding ",e.jsx(t.code,{children:"jest"})," object to your ",e.jsx(t.code,{children:"package.json"}),`.
Here you need to tell `,e.jsx(t.code,{children:"jest"})," to transpile the UI5 Web Components as well as the ",e.jsx(t.code,{children:"lit-html"})," library:",e.jsx("br",{}),`
`,e.jsx(t.code,{children:"package.json:"})]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-json",children:`{
  "jest": {
    "transformIgnorePatterns": ["node_modules/(?!(@ui5|lit-html)).*\\\\.js$"]
  }
}
`})}),`
`,e.jsxs(t.p,{children:["In case you are using our chart library ",e.jsx(t.code,{children:"@ui5/webcomponents-react-charts"})," as well, you'll have to add ",e.jsx(t.code,{children:"d3"})," and ",e.jsx(t.code,{children:"internmap"})," to the configuration:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-json",children:`{
  "jest": {
    "transformIgnorePatterns": ["node_modules/(?!(@ui5|lit-html|d3|internmap)).*\\\\.js$"]
  }
}
`})}),`
`,e.jsx(t.h2,{id:"mocking",children:"Mocking"}),`
`,e.jsx(t.h3,{id:"resize-observer",children:"Resize Observer"}),`
`,e.jsxs(t.p,{children:["Since some components of UI5 Web Components and UI5 Web Components for React are based on the ",e.jsx(t.code,{children:"ResizeObserver"}),` API, you'll need to add a polyfill for it.
Our recommendation is the `,e.jsx(t.code,{children:"resize-observer-polyfill"})," package, you can install it by running ",e.jsx(t.code,{children:"npm install resize-observer-polyfill --save-dev"}),"."]}),`
`,e.jsx(t.h3,{id:"reactuseid",children:"React.useId"}),`
`,e.jsxs(t.p,{children:["If you want to test your app by creating snapshots, you may need to mock the ",e.jsx(t.code,{children:"useId"}),` hook offered by React since version 18.
This hook returns a unique id across all components, but as your snapshot should be stable you can't have it there.`]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`jest.mock('react', () => {
  return { ...jest.requireActual('react'), useId: () => ':mocked' };
});
`})}),`
`,e.jsx(r,{hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:[" Snapshot testing is a"," ",e.jsx(t["ui5-link"],{href:"https://kentcdodds.com/blog/effective-snapshot-testing",children:" controversial and complex topic"})," , but especially with web components it gets really tricky as the JSDOM doesn't support rendering the shadow-root out of the box. That's why we recommend to go without extensively using snapshots."]})}),`
`,e.jsx(t.h2,{id:"jest-setup-file",children:"Jest Setup File"}),`
`,e.jsxs(t.p,{children:[`All other prerequisites of the UI5 Web Components for React Library can be fulfilled by importing our jest setup file:
`,e.jsx(t.code,{children:"import '@ui5/webcomponents-react/jestSetup.js';"})]}),`
`,e.jsxs(t.p,{children:["Therefore, create (or edit) your ",e.jsx(t.code,{children:"src/setupTests.js"})," file as follows:"]}),`
`,e.jsx(t.pre,{children:e.jsx(t.code,{className:"language-js",children:`import ResizeObserverPolyfill from 'resize-observer-polyfill';
import '@ui5/webcomponents-react/jestSetup.js';

window.ResizeObserver = ResizeObserverPolyfill;

jest.mock('react', () => {
  return { ...jest.requireActual('react'), useId: () => ':mocked' };
});
`})}),`
`,e.jsx(r,{hideCloseButton:!0,children:e.jsx(e.Fragment,{children:" Please note that you must also wrap your components in the `ThemeProvider` component for testing, otherwise components with translations will probably not render."})}),`
`,e.jsxs(t.p,{children:["Now you should be able to run your test by using ",e.jsx(t.code,{children:"npm run test"})," or ",e.jsx(t.code,{children:"yarn test"}),"."]}),`
`,e.jsx(l,{style:{position:"fixed",bottom:0,zIndex:2}})]})}}export{ve as default};
//# sourceMappingURL=TestingWithJest-AvLFcsgm.js.map
