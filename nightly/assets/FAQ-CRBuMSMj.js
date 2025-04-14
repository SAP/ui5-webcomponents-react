import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-B5Ip8tK9.js";import{F as r}from"./CommandsAndQueries-D0KftbZv.js";import{M as c}from"./index-NTTqdsbf.js";import{M as a}from"./index-Ultsg-G0.js";import"./index-1SrbjP-u.js";import"./TagDesign-Ga50IS6u.js";import"./index-U0ga5oGA.js";import"./index-B8m469-U.js";import"./Button-C3KIEZ_B.js";import"./jsx-runtime-BCizSm9J.js";import"./copy-BJ2RS-I5.js";import{T as h}from"./TableOfContent-BG9P-NK7.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-zAoAJako.js";import"./preview-DCcQx2DK.js";import"./iframe-Brcm8B1_.js";import"./DocsRenderer-CFRXHY34-CVGd8yCf.js";import"./react-18-SRpBHcoT.js";import"./index-BVR6w1bU.js";import"./Popover-ZaMaqrll.js";import"./slot-_4yKMUwC.js";import"./PopupsCommon.css-DkWsY6As.js";import"./event-strict-DgQLNDEV.js";import"./FocusableElements-BcTTx3-_.js";import"./isElementHidden-B4HqmI2E.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./CustomElementsScope-lRvT7iCm.js";import"./Keys-B3oBAe0t.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DMSxvinm.js";import"./MediaRange-Bnzt26Xb.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./parameters-bundle.css-BLEjIEH9.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-hbDzTvue.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-N7C2bzZq.js";import"./index-BT6O4HVG.js";import"./Label-efMMm_Yw.js";import"./i18n-CjR4HGlq.js";import"./i18n-defaults-B8cpOtV2.js";import"./index-DoqJBpXZ.js";import"./index-Cin_GHPy.js";import"./Link-DU2LYizk.js";import"./Icon-D8gJIGEW.js";import"./index-DogrUJhP.js";import"./index-BCr_l6cl.js";import"./Text-ahyk1WrN.js";import"./willShowContent-CZcfsNXp.js";import"./addCustomCSSWithScoping-BBYkOVIV.js";import"./index-CWu8VubW.js";import"./BusyIndicator-CXYqK0WZ.js";import"./index-GxH6uhPh.js";import"./index-D-WnL20f.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CIU74CR3.js";import"./index-DMZ77h6Y.js";import"./I18nStore-BqSUVB5y.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./decline-CO_yryFo.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-BiJmvry2.js";import"./information-BA_ST16a.js";import"./sys-enter-2-L9fob0bg.js";import"./sys-enter-2-C09nDPBO.js";import"./alert-BjJeIaiS.js";import"./Tooltips-DBnVRLcV.js";import"./EventProvider-ChtD9rRX.js";function n(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong","ui5-link":"ui5-link",...i(),...t.components},s=o["ui5-link"];return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"FAQ"}),`
`,e.jsx(h,{}),`
`,e.jsx(o.h1,{id:"faq",children:"FAQ"}),`
`,e.jsx(a,{hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:["Please also take a look at the FAQ of"," ",e.jsx(s,{href:"https://sap.github.io/ui5-webcomponents/playground/?path=/docs/docs-faq",children:"UI5 Web Components"}),"."]})}),`
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
`,e.jsxs(o.h2,{id:"how-can-i-distinguish-if-a-component-is-developed-in-the-ui5-webcomponents-or-ui5-webcomponents-react-repo",children:["How can I distinguish if a component is developed in the ",e.jsx(o.code,{children:"ui5-webcomponents"})," or ",e.jsx(o.code,{children:"ui5-webcomponents-react"})," repo?"]}),`
`,e.jsxs(o.p,{children:["Each component developed by the UI5 Web Components team (",e.jsx(o.a,{href:"https://github.com/SAP/ui5-webcomponents",rel:"nofollow",children:e.jsx(o.code,{children:"ui5-webcomponents"})}),") that is wrapped by the UI5 Web Components for React (",e.jsx(o.a,{href:"https://github.com/SAP/ui5-webcomponents-react",rel:"nofollow",children:e.jsx(o.code,{children:"ui5-webcomponents-react"})}),") wrapper includes the following note in its component description:"]}),`
`,e.jsxs(o.p,{children:[e.jsx(o.strong,{children:"Note"}),": This is a UI5 Web Component! ",e.jsx(o.a,{href:"https://github.com/SAP/ui5-webcomponents",rel:"nofollow",children:"Repository"})," | ",e.jsx(o.a,{href:"https://sap.github.io/ui5-webcomponents/",rel:"nofollow",children:"Documentation"})]}),`
`,e.jsxs(o.p,{children:["If a component does not have this note, it is a React-only component provided exclusively by ",e.jsx(o.code,{children:"ui5-webcomponents-react"}),"."]}),`
`,e.jsx(r,{})]})}function Se(t={}){const{wrapper:o}={...i(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{Se as default};
