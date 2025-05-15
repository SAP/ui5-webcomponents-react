import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-B5Ip8tK9.js";import{F as r}from"./CommandsAndQueries-C0ukrITq.js";import{M as c}from"./index-Dp_B-5Iz.js";import{M as a}from"./index-aiOo9W_a.js";import"./index-DXQLGL0Z.js";import"./TagDesign-Ga50IS6u.js";import"./index-U0ga5oGA.js";import"./index-B8m469-U.js";import"./Button-DcNvBpEn.js";import"./jsx-runtime-CkEx_Gfk.js";import"./copy-DmqZtkbO.js";import{T as h}from"./TableOfContent-BG9P-NK7.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-xNG2nZLh.js";import"./preview-CDhMbuFd.js";import"./iframe-CEc11bYv.js";import"./DocsRenderer-CFRXHY34-Bs9l4ogk.js";import"./react-18-SRpBHcoT.js";import"./index-BVR6w1bU.js";import"./Popover-eNK7pDla.js";import"./slot-_4yKMUwC.js";import"./PopupsCommon.css-DXmEAn4P.js";import"./event-strict-DgQLNDEV.js";import"./FocusableElements-DDPXQQfz.js";import"./isElementHidden-B4HqmI2E.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./CustomElementsScope-CjZbIYTD.js";import"./Keys-B3oBAe0t.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-DS2o_9u5.js";import"./MediaRange-Bnzt26Xb.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./parameters-bundle.css-Dkq9X0yL.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-BFqlvNkW.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DUe1LpVj.js";import"./index-Bjofktik.js";import"./Label-BrFTKjrK.js";import"./i18n-CjR4HGlq.js";import"./i18n-defaults-B158X0Y5.js";import"./index-dNG4P2z4.js";import"./index-D9S9JAEE.js";import"./Link-CBPPqDB9.js";import"./Icon-BexaehQh.js";import"./index-D_lPDdUa.js";import"./index-BxLcq94m.js";import"./Text-CNWDrMdn.js";import"./willShowContent-CZcfsNXp.js";import"./addCustomCSSWithScoping-B73Gg2hE.js";import"./index-CD5x5g4B.js";import"./BusyIndicator-vKEUjaWy.js";import"./index-8fyqcNlw.js";import"./index-DOaWR8S5.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-BtfkId0O.js";import"./index-B1V08Qk5.js";import"./I18nStore-tbyxgrjv.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./decline-zF6-_htN.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-a8ApNaQO.js";import"./information-DmA-zxas.js";import"./sys-enter-2-DU2G_wE6.js";import"./sys-enter-2-CbaoLfaf.js";import"./alert-CeIMTDH_.js";import"./Tooltips-DOGhZSxR.js";import"./EventProvider-ChtD9rRX.js";function n(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong","ui5-link":"ui5-link",...i(),...t.components},s=o["ui5-link"];return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"FAQ"}),`
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
