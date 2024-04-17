import{j as e}from"./jsx-runtime-Du8NFWEI.js";import{useMDXComponents as p}from"./index-_byTH_QA.js";import"./chunk-HLWAVYOI-Bz1fZi_x.js";import{M as c}from"./index-BnP_YbbH.js";import{F as a}from"./ProjectTemplate-L3eTqxDI.js";import"./index-Dl6G-zuu.js";import"./index-D1_ZHIBm.js";import"./copy-Dz4oTMJU.js";import{T as l}from"./TableOfContent-Cf6Soyve.js";import{M as r,a as n}from"./index-CeDeJn-d.js";import"./iframe-BbSYM8fN.js";import"../sb-preview/runtime.js";import"./react-18-Bamk9FSf.js";import"./inheritsLoose-D8L2VVdp.js";import"./_baseForOwn-DFjKyXZi.js";import"./mapValues-BvzalXkB.js";import"./_baseUniq-DRxb5hvO.js";import"./index-DTQpHR-X.js";import"./index-DrFu-skq.js";import"./react-jss.esm-BLS6mvEP.js";import"./ThemingParameters-CmCBq50F.js";import"./index-BHmbdk3T.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-D5wp95d6.js";import"./ManagedStyles-DX5mlBXq.js";import"./index-DeKLBHQz.js";import"./Label-D6k6fzJu.js";import"./UI5Element-Lw3nTtTN.js";import"./Boot-B0Gt2ObV.js";import"./CustomElementsScopeUtils-CeSGtO6z.js";import"./withWebComponent-zM8JcmxY.js";import"./utils-syHHPmsO.js";import"./useIsomorphicLayoutEffect-gsbYElqV.js";import"./i18nBundle-Duvqe7kG.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-D1sujP0E.js";import"./parameters-bundle.css-DjgCrOcY.js";import"./index-C-y_0BYB.js";import"./Button-BFndOBlc.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./Keys-BgUkNma0.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./Icons-DfCrNAdQ.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-Dbo8BIv6.js";import"./HasPopup-Cecjtg2t.js";import"./index-BbgO-LLR.js";import"./Link-G_0GWmft.js";import"./index-BNbb8bCk.js";import"./Popover-B7UMWr5A.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-DmBeTAQh.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-BmjVxBVQ.js";import"./FocusableElements-4YGFH9ta.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-OFvM0oAF.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-CweQHFZo.js";import"./class-map-mIG3ftuK.js";import"./BrowserScrollbar.css-B3MoNUKh.js";import"./index-qBp3IRVS.js";import"./i18n-defaults-DkhM4WLz.js";import"./I18nContext-BcGksm2n.js";import"./index-BtGnoHIk.js";import"./ModalsContext-qaxSwC3j.js";import"./addCustomCSSWithScoping-de5_lUMj.js";import"./index-BpjGcfBn.js";import"./index-D78BdJ-X.js";import"./Avatar-CHcvLeex.js";import"./employee-C3y4a2zL.js";import"./alert-D4nm4k8k.js";import"./index-6uejwlRP.js";import"./decline-D5dgPGzi.js";import"./i18n-defaults-BdfZArTM.js";import"./information-BLcQOnlv.js";function s(o){const t={a:"a",b:"b",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre","ui5-link":"ui5-link",...p(),...o.components},i=t["ui5-link"];return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Testing with Jest"}),`
`,e.jsx(t.h1,{id:"testing-with-jest",children:"Testing with Jest"}),`
`,e.jsx(r,{design:n.Negative,hideCloseButton:!0,children:"This section of our documentation is not maintained anymore and may contain outdated information! It will be removed with our next major release (v2.0.0).",style:{marginBlockEnd:"0.5rem"}}),`
`,e.jsx(r,{design:n.Warning,hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(t.b,{children:"We don't recommend testing UI5 Web Components for React with Jest anymore!"}),e.jsx(t.br,{}),"Please use"," ",e.jsx(i,{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/testing-with-cypress-setup--docs",children:"Cypress"})," ","instead."]})}),`
`,e.jsxs(t.p,{children:["Due to the lack of custom elements support when using the JSDOM, resulting in cumbersome mocking and behavior that is not applicable when actually interacting with the components, we dropped the support for testing with Jest and moved on to ",e.jsx(t.a,{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/testing-with-cypress-setup--docs",rel:"nofollow",children:"Cypress"}),". This guide will still work, but we may remove the Jest setup file with our next major release."]}),`
`,e.jsx(t.hr,{}),`
`,e.jsxs(t.p,{children:["This guide is applicable if you are using a standard ",e.jsx(t.code,{children:"create-react-app"})," setup."]}),`
`,e.jsx(l,{}),`
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
`,e.jsx(r,{hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:["Snapshot testing is a"," ",e.jsx(i,{href:"https://kentcdodds.com/blog/effective-snapshot-testing",children:"controversial and complex topic"}),", but especially with web components it gets really tricky as the JSDOM doesn't support rendering the shadow-root out of the box. That's why we recommend to go without extensively using snapshots."]})}),`
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
`,e.jsx(r,{hideCloseButton:!0,children:e.jsx(e.Fragment,{children:"Please note that you must also wrap your components in the `ThemeProvider` component for testing, otherwise components with translations will probably not render."})}),`
`,e.jsxs(t.p,{children:["Now you should be able to run your test by using ",e.jsx(t.code,{children:"npm run test"})," or ",e.jsx(t.code,{children:"yarn test"}),"."]}),`
`,e.jsx(a,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function We(o={}){const{wrapper:t}={...p(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{We as default};
