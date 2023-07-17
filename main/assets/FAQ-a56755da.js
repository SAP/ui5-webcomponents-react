import{j as e}from"./jsx-runtime-5926aa06.js";import{M as s}from"./chunk-PCJTTTQV-a9e3658a.js";import"./DomRefTable.module-14c44f12.js";import"./index-ebeaab24.js";import{T as a}from"./TableOfContent-d0aaab26.js";import{F as p}from"./Footer-6ef542a8.js";import{u as i}from"./index-bda0bad7.js";import{M as c}from"./index-42ec113b.js";import"./iframe-7c494daf.js";import"../sb-preview/runtime.js";import"./react-18-95218780.js";import"./mapValues-f5a21168.js";import"./_baseForOwn-8b0cf1d5.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-20c8b51e.js";import"./_baseUniq-8051c65b.js";import"./index-356e4a49.js";import"./react-jss.esm-022ab528.js";import"./index-562e1433.js";import"./clsx.m-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-9af65fbe.js";import"./UI5Element-fb9ecf93.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./utils-69f7a0e0.js";import"./index-d843ee57.js";import"./withWebComponent-d4224c1c.js";import"./useIsomorphicLayoutEffect-38a48652.js";import"./slot-76e48863.js";import"./Icon-ef594e9f.js";import"./Icons-2c98f222.js";import"./Device-99b8bbf4.js";import"./Integer-f7f172c9.js";import"./class-map-18f572ce.js";import"./i18n-defaults-a58643fd.js";import"./index-a53c6ece.js";import"./Avatar-3c16d274.js";import"./ResizeHandler-36560530.js";import"./employee-f2f473ef.js";import"./index-3855522a.js";import"./AriaLabelHelper-43a261ec.js";import"./index-95e30611.js";import"./Link-057b3642.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./index-2c77de22.js";import"./index-c885d522.js";import"./Label-7f4aa83d.js";import"./index-1e6d36e9.js";import"./Button-4160b137.js";import"./index-5c82c908.js";import"./Popover-510446d9.js";import"./PopupsCommon.css-f7aa7df0.js";import"./FocusableElements-6f0cd02a.js";import"./isElementHidden-01c07146.js";import"./decline-3df8c953.js";import"./i18n-defaults-80781f7e.js";import"./MediaRange-25b98f31.js";import"./style-map-54298215.js";import"./BrowserScrollbar.css-0e9b1550.js";import"./information-451d615b.js";function ge(t={}){const{wrapper:n}=Object.assign({},i(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(r,{})})):r();function r(){const o=Object.assign({h1:"h1","ui5-link":"ui5-link",h2:"h2",p:"p",a:"a",code:"code",h3:"h3",pre:"pre"},i(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"FAQ"}),`
`,e.jsx(a,{}),`
`,e.jsx(o.h1,{id:"faq",children:"FAQ"}),`
`,e.jsx(c,{hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:[" Please also take a look at the FAQ of"," ",e.jsx(o["ui5-link"],{href:"https://sap.github.io/ui5-webcomponents/playground/?path=/docs/docs-faq",children:" UI5 Web Components"})," ."]})}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h2,{id:"why-is-my-popover-or-dialog-not-rendered-correctly",children:"Why is my Popover or Dialog not rendered correctly?"}),`
`,e.jsxs(o.p,{children:[`Mounting popups, like the Popover, inside of components can lead to unwanted side-effects (wrong positioning, alignment, etc.), to prevent that we recommend either mounting it outside of the component, or mounting it with a React portal.
You can find out more about how we use portals `,e.jsx(o.a,{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-working-with-portals",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),"."]}),`
`,e.jsxs(o.h2,{id:"where-can-i-find-all-compatible-versions-of-ui5webcomponents-and-ui5webcomponents-react",children:["Where can I find all compatible versions of ",e.jsx(o.code,{children:"@ui5/webcomponents"})," and ",e.jsx(o.code,{children:"@ui5/webcomponents-react"}),"?"]}),`
`,e.jsxs(o.p,{children:["All necessary ",e.jsx(o.code,{children:"@ui5/webcomponents"})," packages are ",e.jsx(o.code,{children:"peerDependencies"})," of ",e.jsx(o.code,{children:"@ui5/webcomponents-react"}),", so if you're using npm v7 or later, then these dependencies should be auto installed when running ",e.jsx(o.code,{children:"npm install"}),`.
If you want to check which versions are compatible you can find a compatibility table `,e.jsx(o.a,{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/getting-started--docs#add-ui5webcomponents-react-to-an-existing-app",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),"."]}),`
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
`,e.jsxs(o.p,{children:["Styling elements inside the shadow root is only supported by leveraging the ",e.jsxs(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/::part",target:"_blank",rel:"nofollow noopener noreferrer",children:[e.jsx(o.code,{children:"::part"})," pseudo-element"]}),". You can find out more about this ",e.jsx(o.a,{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-styling--docs#css-shadow-parts",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),"."]}),`
`,e.jsx(p,{})]})}}export{ge as default};
//# sourceMappingURL=FAQ-a56755da.js.map
