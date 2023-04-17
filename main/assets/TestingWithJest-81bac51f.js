import{j as e,a as o,F as r}from"./jsx-runtime-670450c2.js";import{M as l}from"./chunk-PCJTTTQV-85950e5e.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./DomRefTable.module-a487768c.js";import"./index-f1f749bf.js";import"./Import-143507c2.js";import{T as p}from"./TableOfContent-8455af98.js";import{F as d}from"./Footer-f3014ccf.js";import{u as c}from"./index-4fb8b842.js";import{M as i,a as h}from"./index-2fd925d5.js";import"./iframe-2365d727.js";import"../sb-preview/runtime.mjs";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./react-jss.esm-2e28eff7.js";import"./index-44cc9c22.js";import"./clsx.m-1229b3e0.js";import"./index-090c6017.js";import"./Label-528b8168.js";import"./UI5Element-e8adceda.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./Device-208919c6.js";import"./WrappingType-b81e595a.js";import"./class-map-6d48ebd3.js";import"./index-c6c27411.js";import"./Link-3b8926df.js";import"./Icon-27a81412.js";import"./Icons-5b18f7d2.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-254d6b69.js";import"./index-a6f92a4c.js";import"./Popover-824d4d7c.js";import"./slot-76e48863.js";import"./Integer-f7f172c9.js";import"./PopupUtils-6ec841a6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-7f720278.js";import"./FocusableElements-5012f8d0.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-382f34a2.js";import"./ResizeHandler-9d370fcd.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";import"./decline-7cb41e3a.js";import"./i18n-defaults-80781f7e.js";import"./information-2c502181.js";import"./Button-fa05cadd.js";function we(n={}){const{wrapper:s}=Object.assign({},c(),n.components);return s?e(s,Object.assign({},n,{children:e(a,{})})):a();function a(){const t=Object.assign({h1:"h1",b:"b",br:"br","ui5-link":"ui5-link",p:"p",a:"a",hr:"hr",code:"code",h2:"h2",pre:"pre",h3:"h3"},c(),n.components);return o(r,{children:[e(l,{title:"Testing with Jest"}),`
`,e(t.h1,{id:"testing-with-jest",children:"Testing with Jest"}),`
`,e(i,{design:h.Warning,hideCloseButton:!0,children:o(r,{children:[e(t.b,{children:"We don't recommend testing UI5 Web Components for React with Jest anymore!"}),e(t.br,{})," Please use"," ",e(t["ui5-link"],{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/testing-with-cypress-setup--docs",children:" Cypress"})," "," instead."]})}),`
`,o(t.p,{children:["Due to the lack of custom elements support when using the JSDOM, resulting in cumbersome mocking and behavior that is not applicable when actually interacting with the components, we dropped the support for testing with Jest and moved on to ",e(t.a,{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/testing-with-cypress-setup--docs",target:"_blank",rel:"nofollow noopener noreferrer",children:"Cypress"}),". This guide will still work, but we may remove the Jest setup file with our next major release."]}),`
`,e(t.hr,{}),`
`,o(t.p,{children:["This guide is applicable if you are using a standard ",e(t.code,{children:"create-react-app"})," setup."]}),`
`,e(p,{}),`
`,e(t.h2,{id:"transpile-modules",children:"Transpile Modules"}),`
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
`,e(t.h2,{id:"mocking",children:"Mocking"}),`
`,e(t.h3,{id:"resize-observer",children:"Resize Observer"}),`
`,o(t.p,{children:["Since some components of UI5 Web Components and UI5 Web Components for React are based on the ",e(t.code,{children:"ResizeObserver"}),` API, you'll need to add a polyfill for it.
Our recommendation is the `,e(t.code,{children:"resize-observer-polyfill"})," package, you can install it by running ",e(t.code,{children:"npm install resize-observer-polyfill --save-dev"}),"."]}),`
`,e(t.h3,{id:"reactuseid",children:"React.useId"}),`
`,o(t.p,{children:["If you want to test your app by creating snapshots, you may need to mock the ",e(t.code,{children:"useId"}),` hook offered by React since version 18.
This hook returns a unique id across all components, but as your snapshot should be stable you can't have it there.`]}),`
`,e(t.pre,{children:e(t.code,{className:"language-js",children:`jest.mock('react', () => {
  return { ...jest.requireActual('react'), useId: () => ':mocked' };
});
`})}),`
`,e(i,{hideCloseButton:!0,children:o(r,{children:[" Snapshot testing is a"," ",e(t["ui5-link"],{href:"https://kentcdodds.com/blog/effective-snapshot-testing",children:" controversial and complex topic"})," , but especially with web components it gets really tricky as the JSDOM doesn't support rendering the shadow-root out of the box. That's why we recommend to go without extensively using snapshots."]})}),`
`,e(t.h2,{id:"jest-setup-file",children:"Jest Setup File"}),`
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
`,e(d,{style:{position:"fixed",bottom:0,zIndex:2,maxHeight:"var(--_ui5_bar_base_height)"}})]})}}export{we as default};
//# sourceMappingURL=TestingWithJest-81bac51f.js.map
