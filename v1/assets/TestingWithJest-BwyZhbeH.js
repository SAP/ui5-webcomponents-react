import{j as e}from"./useIsomorphicLayoutEffect-CikWMOA2.js";import{useMDXComponents as p}from"./index-3-_tf5dF.js";import"./chunk-HLWAVYOI-DEN1a90T.js";import{M as c}from"./index-DE8IS_N-.js";import"./index-BP8_t0zE.js";import"./index-BxmsGmlx.js";import"./copy-DX9qIOqh.js";import{F as a}from"./ProjectTemplate-xuc5aS59.js";import{T as l}from"./TableOfContent-B_FEQs_S.js";import{M as r,a as i}from"./index--kiS1WjX.js";import"./iframe-b_MTD6kD.js";import"../sb-preview/runtime.js";import"./client-Di-4O7We.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./Boot-BJoOGsKW.js";import"./EventProvider-B3ZIXKWe.js";import"./Icons-N9fhreAf.js";import"./i18nBundle-wW0MItbA.js";import"./index-DPQB4NWh.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-BlsaS3Lf.js";import"./index-ClRQd1jq.js";import"./Label-BC-N-dx-.js";import"./UI5Element-Dvkr4ftu.js";import"./CustomElementsScope-GSIIlBKM.js";import"./withWebComponent-BCCnzL34.js";import"./utils-Sfm-TJlC.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-DXLPKTKT.js";import"./parameters-bundle.css-DD3rGyNs.js";import"./index-Tv5zRnb9.js";import"./Button-D4b8EzwK.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./Keys-BgUkNma0.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-BjzhKVYQ.js";import"./HasPopup-Cecjtg2t.js";import"./index-DEm13LAu.js";import"./Link-o5XdlJUs.js";import"./index-B6_sBNuw.js";import"./Popover-DzCK8UbC.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-BdT6tjAh.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-Cpy-U-T0.js";import"./FocusableElements-BZF2F5GS.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-DN6_bBb8.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-DamJfpFo.js";import"./class-map-D_mD7-LZ.js";import"./BrowserScrollbar.css-CDYHTzEN.js";import"./index-BhJWt8MY.js";import"./i18n-defaults-BFp98Yot.js";import"./I18nContext-RJHUyvz-.js";import"./index-n7qtibZV.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./addCustomCSSWithScoping-A9YHAMuM.js";import"./index-DZUVD9mF.js";import"./index-CW6PWrfD.js";import"./Avatar-BoCRIXPa.js";import"./employee-BxX8EC9G.js";import"./alert-Bk-rwgUA.js";import"./index-z2wdtfMT.js";import"./decline-JmSfETii.js";import"./i18n-defaults-BdfZArTM.js";import"./information-BcSpE2Ne.js";function s(o){const t={a:"a",b:"b",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre","ui5-link":"ui5-link",...p(),...o.components},n=t["ui5-link"];return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"Testing with Jest"}),`
`,e.jsx(t.h1,{id:"testing-with-jest",children:"Testing with Jest"}),`
`,e.jsx(r,{design:i.Negative,hideCloseButton:!0,children:"This section of our documentation is not maintained anymore and may contain outdated information! It will be removed with our next major release (v2.0.0).",style:{marginBlockEnd:"0.5rem"}}),`
`,e.jsx(r,{design:i.Warning,hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(t.b,{children:"We don't recommend testing UI5 Web Components for React with Jest anymore!"}),e.jsx(t.br,{}),"Please use"," ",e.jsx(n,{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/testing-with-cypress-setup--docs",children:"Cypress"})," ","instead."]})}),`
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
`,e.jsx(r,{hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:["Snapshot testing is a"," ",e.jsx(n,{href:"https://kentcdodds.com/blog/effective-snapshot-testing",children:"controversial and complex topic"}),", but especially with web components it gets really tricky as the JSDOM doesn't support rendering the shadow-root out of the box. That's why we recommend to go without extensively using snapshots."]})}),`
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
`,e.jsx(a,{style:{position:"fixed",bottom:0,zIndex:2}})]})}function De(o={}){const{wrapper:t}={...p(),...o.components};return t?e.jsx(t,{...o,children:e.jsx(s,{...o})}):s(o)}export{De as default};
