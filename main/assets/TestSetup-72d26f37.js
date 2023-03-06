import{j as e,a as r,F as o}from"./jsx-runtime-670450c2.js";import"./chunk-G4YQS2SV-3a764711.js";import"./chunk-R4NKYYJA-96bb58e6.js";import{M as l}from"./index-fc65de3d.js";import"./DomRefTable.module-fb210060.js";import"./index-f1f749bf.js";import"./Import-8d74f27b.js";import{T as p}from"./TableOfContent-9c193c7f.js";import{F as d}from"./Footer-54fe8402.js";import{u as a}from"./index-4fb8b842.js";import{M as i,a as h}from"./index-cbce79a2.js";import"./iframe-51c9489d.js";import"../sb-preview/runtime.mjs";import"./react-18-2bb9dade.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./react-jss.esm-e54d2f1d.js";import"./index-b4aa831c.js";import"./clsx.m-1229b3e0.js";import"./Footer.module-c4f3b823.js";import"./index-224c0e2b.js";import"./Label-f9741f9c.js";import"./UI5Element-386cb3f6.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-34dd487e.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./class-map-60f59e95.js";import"./WrappingType-b81e595a.js";import"./index-e644fe70.js";import"./AriaLabelHelper-dee23f38.js";import"./MarkedEvents-0e37da6f.js";import"./Keys-50a1cb5a.js";import"./index-273db19e.js";import"./Popover-ff8f156e.js";import"./Integer-5fa4beea.js";import"./FocusableElements-13161f05.js";import"./getActiveElement-bcae01ed.js";import"./ResizeHandler-b3fcb37c.js";import"./MediaRange-25b98f31.js";import"./style-map-63946e4f.js";import"./decline-48ecb430.js";import"./Icons-03f19c25.js";import"./Button-981a9381.js";function he(n={}){const{wrapper:s}=Object.assign({},a(),n.components);return s?e(s,Object.assign({},n,{children:e(c,{})})):c();function c(){const t=Object.assign({h1:"h1",br:"br","ui5-link":"ui5-link",p:"p",code:"code",h2:"h2",pre:"pre",h3:"h3"},a(),n.components);return r(o,{children:[e(l,{title:"Test Setup"}),`
`,e(t.h1,{children:"Test Setup"}),`
`,e(i,{design:h.Warning,hideCloseButton:!0,children:r(o,{children:[" Testing with Jest is not supported anymore!",e(t.br,{})," We're currently working on updating this section by offering a better testing experience using"," ",e(t["ui5-link"],{href:"https://www.cypress.io/",target:"_blank",children:" Cypress"})," ."]})}),`
`,r(t.p,{children:["This guide is applicable if you are using a standard ",e(t.code,{children:"create-react-app"})," setup."]}),`
`,e(p,{}),`
`,e(t.h2,{children:"Transpile Modules"}),`
`,r(t.p,{children:[e(t.code,{children:"create-react-app"})," offers you to modify specific parts of the ",e(t.code,{children:"jest"})," config by adding ",e(t.code,{children:"jest"})," object to your ",e(t.code,{children:"package.json"}),`.
Here you need to tell `,e(t.code,{children:"jest"})," to transpile the UI5 Web Components as well as the ",e(t.code,{children:"lit-html"})," library:",e("br",{}),`
`,e(t.code,{children:"package.json:"})]}),`
`,e(t.pre,{children:e(t.code,{className:"language-json",children:`{
  "jest": {
    "transformIgnorePatterns": ["node_modules/(?!(@ui5|lit-html)).*\\\\.js$"]
  }
}
`})}),`
`,r(t.p,{children:["In case you are using our chart library ",e(t.code,{children:"@ui5/webcomponents-react-charts"})," as well, you'll have to add ",e(t.code,{children:"d3"})," and ",e(t.code,{children:"internmap"})," to the configuration:"]}),`
`,e(t.pre,{children:e(t.code,{className:"language-json",children:`{
  "jest": {
    "transformIgnorePatterns": ["node_modules/(?!(@ui5|lit-html|d3|internmap)).*\\\\.js$"]
  }
}
`})}),`
`,e(t.h2,{children:"Mocking"}),`
`,e(t.h3,{children:"Resize Observer"}),`
`,r(t.p,{children:["Since some components of UI5 Web Components and UI5 Web Components for React are based on the ",e(t.code,{children:"ResizeObserver"}),` API, you'll need to add a polyfill for it.
Our recommendation is the `,e(t.code,{children:"resize-observer-polyfill"})," package, you can install it by running ",e(t.code,{children:"npm install resize-observer-polyfill --save-dev"}),"."]}),`
`,e(t.h3,{children:"React.useId"}),`
`,r(t.p,{children:["If you want to test your app by creating snapshots, you may need to mock the ",e(t.code,{children:"useId"}),` hook offered by React since version 18.
This hook returns a unique id across all components, but as your snapshot should be stable you can't have it there.`]}),`
`,e(t.pre,{children:e(t.code,{className:"language-js",children:`jest.mock('react', () => {
  return { ...jest.requireActual('react'), useId: () => ':mocked' };
});
`})}),`
`,e(i,{hideCloseButton:!0,children:r(o,{children:[" Snapshot testing is a"," ",e(t["ui5-link"],{href:"https://kentcdodds.com/blog/effective-snapshot-testing",children:" controversial and complex topic"})," , but especially with web components it gets really tricky as the JSDOM doesn't support rendering the shadow-root out of the box. That's why we recommend to go without extensively using snapshots."]})}),`
`,e(t.h2,{children:"Jest Setup File"}),`
`,r(t.p,{children:[`All other prerequisites of the UI5 Web Components for React Library can be fulfilled by importing our jest setup file:
`,e(t.code,{children:"import '@ui5/webcomponents-react/jestSetup.js';"})]}),`
`,r(t.p,{children:["Therefore, create (or edit) your ",e(t.code,{children:"src/setupTests.js"})," file as follows:"]}),`
`,e(t.pre,{children:e(t.code,{className:"language-js",children:`import ResizeObserverPolyfill from 'resize-observer-polyfill';
import '@ui5/webcomponents-react/jestSetup.js';

window.ResizeObserver = ResizeObserverPolyfill;

jest.mock('react', () => {
  return { ...jest.requireActual('react'), useId: () => ':mocked' };
});
`})}),`
`,e(i,{hideCloseButton:!0,children:e(o,{children:" Please note that you must also wrap your components in the `ThemeProvider` component for testing, otherwise components with translations will probably not render."})}),`
`,r(t.p,{children:["Now you should be able to run your test by using ",e(t.code,{children:"npm run test"})," or ",e(t.code,{children:"yarn test"}),"."]}),`
`,e("div",{style:{height:"var(--_ui5_bar_base_height)"}}),`
`,e(d,{style:{position:"fixed",bottom:0,zIndex:2,maxHeight:"var(--_ui5_bar_base_height)"}})]})}}export{he as default};
//# sourceMappingURL=TestSetup-72d26f37.js.map
