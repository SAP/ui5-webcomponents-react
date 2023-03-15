import{j as e,a as o,F as r}from"./jsx-runtime-670450c2.js";import"./chunk-PCJTTTQV-aec21791.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{M as p}from"./index-dcb2fdd7.js";import"./DomRefTable.module-3b1179bb.js";import"./index-f1f749bf.js";import"./Import-ecc97f13.js";import{T as l}from"./TableOfContent-c7f275e0.js";import{F as d}from"./Footer-0268b038.js";import{u as a}from"./index-4fb8b842.js";import{M as i,a as h}from"./index-d23ab273.js";import"./iframe-29dff174.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./react-jss.esm-e54d2f1d.js";import"./index-b4aa831c.js";import"./clsx.m-1229b3e0.js";import"./Footer.module-f90cad7d.js";import"./index-6a74ac2a.js";import"./Link-6d546ee9.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./event-97133b94.js";import"./Keys-3acbae73.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./i18n-defaults-d66b3d5e.js";import"./index-37349a69.js";import"./Label-040efebd.js";import"./Device-208919c6.js";import"./class-map-5d8e4b2b.js";import"./index-283a2d35.js";import"./Popover-907d427e.js";import"./slot-634e3e91.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-7d9fbba1.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";import"./decline-f2b294b3.js";import"./Icons-7b82f601.js";import"./i18n-defaults-80781f7e.js";import"./information-50e1ad0f.js";import"./Icon-459702a7.js";import"./Button-04bad9a0.js";function Ce(n={}){const{wrapper:s}=Object.assign({},a(),n.components);return s?e(s,Object.assign({},n,{children:e(c,{})})):c();function c(){const t=Object.assign({h1:"h1",b:"b",br:"br","ui5-link":"ui5-link",p:"p",a:"a",hr:"hr",code:"code",h2:"h2",pre:"pre",h3:"h3"},a(),n.components);return o(r,{children:[e(p,{title:"Testing with Jest"}),`
`,e(t.h1,{children:"Testing with Jest"}),`
`,e(i,{design:h.Warning,hideCloseButton:!0,children:o(r,{children:[e(t.b,{children:"We don't recommend testing UI5 Web Components for React with Jest anymore!"}),e(t.br,{})," Please use"," ",e(t["ui5-link"],{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/testing-with-cypress-setup--docs",children:" Cypress"})," "," instead."]})}),`
`,o(t.p,{children:["Due to the lack of custom elements support when using the JSDOM, resulting in cumbersome mocking and behavior that is not applicable when actually interacting with the components, we dropped the support for testing with Jest and moved on to ",e(t.a,{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/testing-with-cypress-setup--docs",children:"Cypress"}),". This guide will still work, but we may remove the Jest setup file with our next major release."]}),`
`,e(t.hr,{}),`
`,o(t.p,{children:["This guide is applicable if you are using a standard ",e(t.code,{children:"create-react-app"})," setup."]}),`
`,e(l,{}),`
`,e(t.h2,{children:"Transpile Modules"}),`
`,o(t.p,{children:[e(t.code,{children:"create-react-app"})," offers you to modify specific parts of the ",e(t.code,{children:"jest"})," config by adding ",e(t.code,{children:"jest"})," object to your ",e(t.code,{children:"package.json"}),`.
Here you need to tell `,e(t.code,{children:"jest"})," to transpile the UI5 Web Components as well as the ",e(t.code,{children:"lit-html"})," library:",e("br",{}),`
`,e(t.code,{children:"package.json:"})]}),`
`,e(t.pre,{children:e(t.code,{className:"language-json",children:`{
  "jest": {
    "transformIgnorePatterns": ["node_modules/(?!(@ui5|lit-html)).*\\\\.js$"]
  }
}
`})}),`
`,o(t.p,{children:["In case you are using our chart library ",e(t.code,{children:"@ui5/webcomponents-react-charts"})," as well, you'll have to add ",e(t.code,{children:"d3"})," and ",e(t.code,{children:"internmap"})," to the configuration:"]}),`
`,e(t.pre,{children:e(t.code,{className:"language-json",children:`{
  "jest": {
    "transformIgnorePatterns": ["node_modules/(?!(@ui5|lit-html|d3|internmap)).*\\\\.js$"]
  }
}
`})}),`
`,e(t.h2,{children:"Mocking"}),`
`,e(t.h3,{children:"Resize Observer"}),`
`,o(t.p,{children:["Since some components of UI5 Web Components and UI5 Web Components for React are based on the ",e(t.code,{children:"ResizeObserver"}),` API, you'll need to add a polyfill for it.
Our recommendation is the `,e(t.code,{children:"resize-observer-polyfill"})," package, you can install it by running ",e(t.code,{children:"npm install resize-observer-polyfill --save-dev"}),"."]}),`
`,e(t.h3,{children:"React.useId"}),`
`,o(t.p,{children:["If you want to test your app by creating snapshots, you may need to mock the ",e(t.code,{children:"useId"}),` hook offered by React since version 18.
This hook returns a unique id across all components, but as your snapshot should be stable you can't have it there.`]}),`
`,e(t.pre,{children:e(t.code,{className:"language-js",children:`jest.mock('react', () => {
  return { ...jest.requireActual('react'), useId: () => ':mocked' };
});
`})}),`
`,e(i,{hideCloseButton:!0,children:o(r,{children:[" Snapshot testing is a"," ",e(t["ui5-link"],{href:"https://kentcdodds.com/blog/effective-snapshot-testing",children:" controversial and complex topic"})," , but especially with web components it gets really tricky as the JSDOM doesn't support rendering the shadow-root out of the box. That's why we recommend to go without extensively using snapshots."]})}),`
`,e(t.h2,{children:"Jest Setup File"}),`
`,o(t.p,{children:[`All other prerequisites of the UI5 Web Components for React Library can be fulfilled by importing our jest setup file:
`,e(t.code,{children:"import '@ui5/webcomponents-react/jestSetup.js';"})]}),`
`,o(t.p,{children:["Therefore, create (or edit) your ",e(t.code,{children:"src/setupTests.js"})," file as follows:"]}),`
`,e(t.pre,{children:e(t.code,{className:"language-js",children:`import ResizeObserverPolyfill from 'resize-observer-polyfill';
import '@ui5/webcomponents-react/jestSetup.js';

window.ResizeObserver = ResizeObserverPolyfill;

jest.mock('react', () => {
  return { ...jest.requireActual('react'), useId: () => ':mocked' };
});
`})}),`
`,e(i,{hideCloseButton:!0,children:e(r,{children:" Please note that you must also wrap your components in the `ThemeProvider` component for testing, otherwise components with translations will probably not render."})}),`
`,o(t.p,{children:["Now you should be able to run your test by using ",e(t.code,{children:"npm run test"})," or ",e(t.code,{children:"yarn test"}),"."]}),`
`,e("div",{style:{height:"var(--_ui5_bar_base_height)"}}),`
`,e(d,{style:{position:"fixed",bottom:0,zIndex:2,maxHeight:"var(--_ui5_bar_base_height)"}})]})}}export{Ce as default};
//# sourceMappingURL=TestingWithJest-c32cf66e.js.map
