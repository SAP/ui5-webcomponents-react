import{j as e}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as i}from"./index-B7tNCeqj.js";import"./chunk-NUUEMKO5-D8-Imk10.js";import{ae as s}from"./index-CbffTEkO.js";import{M as a}from"./index-CF2XCfOa.js";import"./index-DiB79koX.js";import"./TagDesign-Dou_yO3g.js";import"./index-CjmQ2z5u.js";import"./index-bI5-aUrJ.js";import"./fiori-BEcr7J4N.js";import"./main-rGL2KZiJ.js";import"./Button-BBEhHqXq.js";import"./withWebComponent-DbOtF11K.js";import"./copy-ByaNPW9V.js";import{F as c}from"./CommandsAndQueries-CeHMMpVP.js";import{T as m}from"./TableOfContent-BTksmC1d.js";import"./products-B8km3JGR.js";import"./WrappingType-CW8URInd.js";import"./Title-HEcUckFf.js";import"./iframe-CydcNvlO.js";import"../sb-preview/runtime.js";import"./client-CY4f97Aa.js";import"./index-DGl0hLba.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./slot-Df15G--e.js";import"./event-strict-C2lE4gn2.js";import"./i18n-BLQCbquq.js";import"./Icon-DnECHVzX.js";import"./useIsomorphicLayoutEffect-U1V4gMqc.js";import"./Keys-icCwrzTr.js";import"./parameters-bundle.css-BzaqQttB.js";import"./decline-Cvpxulmf.js";import"./i18n-defaults-CUGG7UPM.js";import"./information-Z-_GrMVK.js";import"./information-WFnUlRRI.js";import"./sys-enter-2-2B0zQ6hc.js";import"./sys-enter-2-BneCyVoJ.js";import"./i18n-defaults-Cyg2J0QB.js";import"./AccessibilityTextsHelper-DhVMExKx.js";import"./willShowContent-BOkh0bwj.js";import"./Tooltips-CxBV-rFR.js";import"./toLowercaseEnumValue-BQhMonSq.js";import"./utils-5ouIlTbN.js";import"./Popover-jpBWywBD.js";import"./PopupsCommon.css-C5goN-pn.js";import"./FocusableElements-DKyPTCYZ.js";import"./isElementHidden-Bpu2V8BK.js";import"./isElementClickable-C7H9UXMP.js";import"./getActiveElement-BL9Yqj8a.js";import"./ResizeHandler-y4ADtKuu.js";import"./MediaRange-CQ-a3KRn.js";import"./getEffectiveScrollbarStyle-DY0HYxPj.js";import"./index-BTIftX-2.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-CGem_MOm.js";import"./index-BCOROM5X.js";import"./Label-B_m68C-w.js";import"./index-2Ui_B0oh.js";import"./index-DbDAMUse.js";import"./Link-CGflddfl.js";import"./index-DA9x0mSX.js";import"./index-mePJl18F.js";import"./Text-cV8jhUFL.js";import"./addCustomCSSWithScoping-DOW-YdFK.js";import"./index-MIUva8A9.js";import"./BusyIndicator-7GyohC3D.js";import"./index-DF8djFGP.js";import"./index-V1glf46E.js";import"./AvatarSize-BceVhWoP.js";import"./employee-DorkY_DY.js";import"./index-BFMt8SGQ.js";import"./I18nStore-CG8U7JCg.js";function n(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre","ui5-link":"ui5-link",...i(),...t.components},r=o["ui5-link"];return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"FAQ"}),`
`,e.jsx(m,{}),`
`,e.jsx(o.h1,{id:"faq",children:"FAQ"}),`
`,e.jsx(a,{hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:["Please also take a look at the FAQ of"," ",e.jsx(r,{href:"https://sap.github.io/ui5-webcomponents/playground/?path=/docs/docs-faq",children:"UI5 Web Components"}),"."]})}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsxs(o.h2,{id:"where-can-i-find-all-compatible-versions-of-ui5webcomponents-and-ui5webcomponents-react",children:["Where can I find all compatible versions of ",e.jsx(o.code,{children:"@ui5/webcomponents"})," and ",e.jsx(o.code,{children:"@ui5/webcomponents-react"}),"?"]}),`
`,e.jsxs(o.p,{children:["All necessary ",e.jsx(o.code,{children:"@ui5/webcomponents"})," packages are ",e.jsx(o.code,{children:"peerDependencies"})," of ",e.jsx(o.code,{children:"@ui5/webcomponents-react"}),", so if you're using npm v7 or later, then these dependencies should be auto installed when running ",e.jsx(o.code,{children:"npm install"}),`.
If you want to check which versions are compatible you can find a compatibility table `,e.jsx(o.a,{href:"?path=/docs/getting-started--docs#add-ui5webcomponents-react-to-an-existing-app",children:"here"}),"."]}),`
`,e.jsx(o.h2,{id:"what-are-abstract-ui5-web-components",children:'What are "abstract" UI5 Web Components?'}),`
`,e.jsx(o.p,{children:"Abstract UI5 Web Components are mainly there to pass props to the actual component inside the shadow root. Therefore, all attributes passed to the element, will have no effect on the actual component."}),`
`,e.jsx(o.h3,{id:"example",children:"Example"}),`
`,e.jsxs(o.p,{children:["Rendering a ",e.jsx(o.code,{children:"ComboBoxItem"})," with some custom HTML attributes..."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-jsx",children:`<ComboBox>
  <ComboBoxItem text="ComboBoxItem1" title="Hello" style={{ backgroundColor: 'red' }} />
</ComboBox>
`})}),`
`,e.jsx(o.p,{children:"...will result in an element that looks like this:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-html",children:`<ui5-cb-item
  text="ComboBoxItem1"
  title="Hello"
  style="background-color: red;"
  _ui5rt0=""
  _ui5host=""
  ui5-cb-item=""
></ui5-cb-item>
`})}),`
`,e.jsxs(o.p,{children:["As you can see, both ",e.jsx(o.code,{children:"title"})," and ",e.jsx(o.code,{children:"style"})," are correctly applied, but since the item doesn't have children, nor a shadow root the attributes don't have an effect on the component."]}),`
`,e.jsx(o.h2,{id:"how-can-i-style-elements-inside-the-shadow-root-of-a-web-component",children:"How can I style elements inside the shadow root of a web component?"}),`
`,e.jsxs(o.p,{children:["Styling elements inside the shadow root is only supported by leveraging the ",e.jsxs(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/::part",rel:"nofollow",children:[e.jsx(o.code,{children:"::part"})," pseudo-element"]}),". You can find out more about this ",e.jsx(o.a,{href:"?path=/docs/knowledge-base-styling--docs#css-shadow-parts",children:"here"}),"."]}),`
`,e.jsx(o.h2,{id:"how-can-i-reuse-or-change-colors-fonts-etc-of-ui5-web-components-for-react",children:"How can I reuse or change colors, fonts, etc. of UI5 Web Components for React?"}),`
`,e.jsxs(o.p,{children:["UI5 Web Components for React comes with a ",e.jsx(o.a,{href:"https://github.com/SAP/theming-base-content",rel:"nofollow",children:"publicly available"})," set of CSS variables that ensure the same look and feel across applications. Changing these values is not recommended, if you still need to customize them, you can find out more about this ",e.jsx(o.a,{href:"?path=/docs/knowledge-base-styling--docs#styling-ui5-web-components-for-react-components",children:"here"}),"."]}),`
`,e.jsxs(o.p,{children:["To reuse these styles, you can either use the CSS variable, or use our ",e.jsx(o.a,{href:"?path=/docs/knowledge-base-public-utils--docs#theming-parameters",children:"Theming Parameters"}),"."]}),`
`,e.jsx(o.h2,{id:"why-is-changing-the-theme-not-working",children:"Why is changing the theme not working?"}),`
`,e.jsxs(o.p,{children:["You have to ensure to import the ",e.jsx(o.code,{children:"Assets"})," with the different themes, otherwise only the default theme will be used."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-ts",children:`import '@ui5/webcomponents-react/dist/Assets';
`})}),`
`,e.jsxs(o.p,{children:["Further information about theming can be found in our and the UI5 Web Components ",e.jsx(o.a,{href:"?path=/docs/getting-started--docs#theming",children:"Theming documentation"}),"."]}),`
`,e.jsx(c,{})]})}function Fe(t={}){const{wrapper:o}={...i(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{Fe as default};
