import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{M as c}from"./chunk-HLWAVYOI-AVrFJhXr.js";import"./DomRefTable.module-o6yuYo37.js";import"./index-OjgoNOWw.js";import{T as p}from"./TableOfContent-uQHufoDq.js";import{F as l}from"./Footer-XV-MtIQH.js";import{u as i}from"./index-RwE9nQVW.js";import{M as r,a}from"./index-uNOeFshT.js";import"./iframe-ydSfD9o2.js";import"../sb-preview/runtime.js";import"./react-18-1WT2dSvK.js";import"./index-QYh6idnL.js";import"./_baseForOwn-UZJwRxDU.js";import"./mapValues-HzTlT2lF.js";import"./_baseUniq-JVyScZ-n.js";import"./index-PPLHz8o0.js";import"./index-UBYxvHMA.js";import"./react-jss.esm-tmBtHfec.js";import"./index-2_yHJzy3.js";import"./clsx-c3LcQGjR.js";import"./i18n-defaults-8YolVglE.js";import"./i18nBundle-ZoJ37UJR.js";import"./VersionInfo-LCCO4Ig5.js";import"./I18nContext-VUOpdMoH.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./ThemingParameters-UghqSl-x.js";import"./addCustomCSSWithScoping-B37rLD-H.js";import"./UI5Element-Jt3C0_FN.js";import"./CustomElementsScopeUtils-M7hMRmEH.js";import"./utils-KU8RGjGn.js";import"./index-1VJEMsRn.js";import"./withWebComponent-I1wSIv4y.js";import"./slot-HSrR9XJ-.js";import"./Icon-G6aW2FRW.js";import"./Icons-Nr5kgAbF.js";import"./Integer-kog98579.js";import"./class-map-CHDPODen.js";import"./i18n-defaults-zEJ36VRV.js";import"./index-FZYEGHQY.js";import"./Avatar-VKhV6EwI.js";import"./ResizeHandler-mTFvwsyT.js";import"./employee-9rldWxaE.js";import"./alert-7Etxrsap.js";import"./index-8Jns6cUb.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./index-ZaqRa_8Z.js";import"./Link-ipgrhFOm.js";import"./MarkedEvents-aYv14vsS.js";import"./WrappingType-avPrqc94.js";import"./index-5ETO3hDj.js";import"./index-0qQmuEa2.js";import"./Label-Xo_6xXB6.js";import"./index-fIdbs8ag.js";import"./Button-CV8gKi73.js";import"./index-V77GTBmc.js";import"./Popover-5ANP4Jn7.js";import"./PopupUtils-QCyiTOMI.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-NvRre6vc.js";import"./FocusableElements-sOHKyey_.js";import"./isElementHidden-d3-Fo4V6.js";import"./decline-4Ez_2Sev.js";import"./i18n-defaults-CPLPRuO1.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-xQ1SPtMO.js";import"./BrowserScrollbar.css-R_PDLCAQ.js";import"./information-bkjyqQzA.js";function Ie(o={}){const{wrapper:s}=Object.assign({},i(),o.components);return s?e.jsx(s,Object.assign({},o,{children:e.jsx(n,{})})):n();function n(){const t=Object.assign({h1:"h1",b:"b",br:"br","ui5-link":"ui5-link",p:"p",a:"a",hr:"hr",code:"code",h2:"h2",pre:"pre",h3:"h3"},i(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Testing with Jest"}),`
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
`,e.jsx(l,{style:{position:"fixed",bottom:0,zIndex:2}})]})}}export{Ie as default};
