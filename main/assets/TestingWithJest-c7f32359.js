import{j as e}from"./jsx-runtime-5926aa06.js";import{M as a}from"./chunk-PCJTTTQV-994f0cbc.js";import"./DomRefTable.module-ad47dab3.js";import"./index-ebeaab24.js";import{T as c}from"./TableOfContent-c76a74b2.js";import{F as l}from"./Footer-f528fa13.js";import{u as i}from"./index-bda0bad7.js";import{M as o,a as p}from"./index-e3b2ee5c.js";import"./iframe-1f7bc337.js";import"../sb-preview/runtime.js";import"./react-18-3d03c2cf.js";import"./mapValues-0a776dd9.js";import"./_baseForOwn-800a0312.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-593546d2.js";import"./_baseUniq-4c215180.js";import"./index-356e4a49.js";import"./react-jss.esm-022ab528.js";import"./index-4c0ab015.js";import"./clsx.m-1229b3e0.js";import"./index-ddd6f982.js";import"./Label-94e3ba9d.js";import"./UI5Element-533070c8.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-7b9bd1ee.js";import"./utils-69f7a0e0.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./WrappingType-b81e595a.js";import"./i18n-defaults-2f9956dc.js";import"./index-73c8b848.js";import"./Link-08f0fbaf.js";import"./Icon-2e16c08b.js";import"./Icons-67fab4b0.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./index-e9ea925e.js";import"./Popover-167ff704.js";import"./slot-76e48863.js";import"./Integer-f7f172c9.js";import"./Device-208919c6.js";import"./PopupUtils-ba2b770f.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-97917f6d.js";import"./FocusableElements-eec123c0.js";import"./isElementHidden-01c07146.js";import"./decline-1d33941a.js";import"./i18n-defaults-80781f7e.js";import"./ResizeHandler-aaf74c24.js";import"./MediaRange-25b98f31.js";import"./style-map-0c64293c.js";import"./class-map-6a9bd920.js";import"./information-e88b206d.js";import"./Button-21e98691.js";function me(s={}){const{wrapper:r}=Object.assign({},i(),s.components);return r?e.jsx(r,Object.assign({},s,{children:e.jsx(n,{})})):n();function n(){const t=Object.assign({h1:"h1",b:"b",br:"br","ui5-link":"ui5-link",p:"p",a:"a",hr:"hr",code:"code",h2:"h2",pre:"pre",h3:"h3"},i(),s.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Testing with Jest"}),`
`,e.jsx(t.h1,{id:"testing-with-jest",children:"Testing with Jest"}),`
`,e.jsx(o,{design:p.Warning,hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(t.b,{children:"We don't recommend testing UI5 Web Components for React with Jest anymore!"}),e.jsx(t.br,{})," Please use"," ",e.jsx(t["ui5-link"],{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/testing-with-cypress-setup--docs",children:" Cypress"})," "," instead."]})}),`
`,e.jsxs(t.p,{children:["Due to the lack of custom elements support when using the JSDOM, resulting in cumbersome mocking and behavior that is not applicable when actually interacting with the components, we dropped the support for testing with Jest and moved on to ",e.jsx(t.a,{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/testing-with-cypress-setup--docs",target:"_blank",rel:"nofollow noopener noreferrer",children:"Cypress"}),". This guide will still work, but we may remove the Jest setup file with our next major release."]}),`
`,e.jsx(t.hr,{}),`
`,e.jsxs(t.p,{children:["This guide is applicable if you are using a standard ",e.jsx(t.code,{children:"create-react-app"})," setup."]}),`
`,e.jsx(c,{}),`
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
`,e.jsx(o,{hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:[" Snapshot testing is a"," ",e.jsx(t["ui5-link"],{href:"https://kentcdodds.com/blog/effective-snapshot-testing",children:" controversial and complex topic"})," , but especially with web components it gets really tricky as the JSDOM doesn't support rendering the shadow-root out of the box. That's why we recommend to go without extensively using snapshots."]})}),`
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
`,e.jsx(o,{hideCloseButton:!0,children:e.jsx(e.Fragment,{children:" Please note that you must also wrap your components in the `ThemeProvider` component for testing, otherwise components with translations will probably not render."})}),`
`,e.jsxs(t.p,{children:["Now you should be able to run your test by using ",e.jsx(t.code,{children:"npm run test"})," or ",e.jsx(t.code,{children:"yarn test"}),"."]}),`
`,e.jsx("div",{style:{height:"var(--_ui5_bar_base_height)"}}),`
`,e.jsx(l,{style:{position:"fixed",bottom:0,zIndex:2,maxHeight:"var(--_ui5_bar_base_height)"}})]})}}export{me as default};
//# sourceMappingURL=TestingWithJest-c7f32359.js.map
