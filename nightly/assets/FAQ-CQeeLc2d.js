import{j as e}from"./iframe-C5HYk_w9.js";import{useMDXComponents as s}from"./index-NAtY6U9A.js";import{M as r}from"./blocks-C9zU_CnO.js";import"./Tag-B9SFZhnL.js";import{M as c}from"./index-DDk7xvH6.js";import"./copy-C5SWnutv.js";import{F as a}from"./CommandsAndQueries-D55ZIYIG.js";import{T as h}from"./TableOfContent-DsGDxpKI.js";import"./preload-helper-Dp1pzeXC.js";import"./information-CZ-iBUXB.js";import"./sys-enter-2-Dq_SL8zM.js";import"./alert-D8SJwSxQ.js";import"./index-LTyOz7tz.js";import"./index-G9j5f01x.js";import"./index-KbHDLtpi.js";import"./Link-B-N5NiBa.js";import"./addCustomCSSWithScoping-BFQWIBF3.js";import"./index-CFd9-fPm.js";import"./index-DSpr5FZx.js";import"./index-CO2rizW7.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-CfasPfI1.js";import"./index-BrZnxm7s.js";const l=""+new URL("sb-pkg-filter-DKWvA_r4.png",import.meta.url).href;function t(n){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong","ui5-link":"ui5-link",...s(),...n.components},i=o["ui5-link"];return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"FAQ"}),`
`,e.jsx(h,{}),`
`,e.jsx(o.h1,{id:"faq",children:"FAQ"}),`
`,e.jsx(c,{hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:["Please also take a look at the FAQ of"," ",e.jsx(i,{href:"https://sap.github.io/ui5-webcomponents/docs/FAQ/",children:"UI5 Web Components"}),"."]})}),`
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
`,e.jsxs(o.p,{children:["Additionally, Storybook supports filtering by tags, allowing you to filter by different ",e.jsx(o.code,{children:"ui5-webcomponents"})," packages as well:"]}),`
`,e.jsx("img",{src:l,alt:"Storybook Tag Filter",height:320}),`
`,e.jsx(o.h2,{id:"why-isnt-scoping-working",children:"Why isn't scoping working?"}),`
`,e.jsxs(o.p,{children:[`Starting from UI5 Web Components (for React) 2.0.0, the order of imports with regard to scoping and components matters.
Setting the scoping suffix must be done before importing any components, as they use the suffix at the top-level of the module - meaning when a component is imported, the suffix has to be known.
For this to work, calling the method should be done in a separate module (e.g. scoping-config.js) and this module should be imported before any components are imported.
You can find more information about this in the `,e.jsx(o.a,{href:"https://sap.github.io/ui5-webcomponents/docs/advanced/scoping/",rel:"nofollow",children:"UI5 Web Components documentation"}),"."]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-ts",children:`// scoping-config.js
import { setCustomElementsScopingSuffix } from '@ui5/webcomponents-base/dist/CustomElementsScope.js';
setCustomElementsScopingSuffix('demo');

// app main file, e.g index.js, main.tsx, etc.
import './scoping-config.js';
// now, all other component imports - the scoping config import must be the first import of the app
import { Button } from '@ui5/webcomponents-react';
// ...
`})}),`
`,e.jsx(a,{})]})}function B(n={}){const{wrapper:o}={...s(),...n.components};return o?e.jsx(o,{...n,children:e.jsx(t,{...n})}):t(n)}export{B as default};
