import{j as e}from"./jsx-runtime-d079401a.js";import{M as s}from"./chunk-HLWAVYOI-05ae2e7b.js";import"./DomRefTable.module-41cd53fb.js";import"./index-f1f2c4b1.js";import{T as a}from"./TableOfContent-9a046646.js";import{F as c}from"./Footer-0733a9b5.js";import{u as i}from"./index-59d6410c.js";import{M as p}from"./index-7220d957.js";import"./iframe-1a9ce72f.js";import"../sb-preview/runtime.js";import"./index-f82c8853.js";import"./index-c74c9f7f.js";import"./mapValues-6da481dc.js";import"./_baseForOwn-62af832b.js";import"./_baseUniq-27dbdc21.js";import"./index-356e4a49.js";import"./react-jss.esm-2e5f50f2.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-b7e0672b.js";import"./UI5Element-d089e658.js";import"./CustomElementsScopeUtils-90546106.js";import"./utils-85c0effb.js";import"./index-ae963902.js";import"./withWebComponent-f146e44d.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-dc979b51.js";import"./Icons-d115de21.js";import"./Integer-f7f172c9.js";import"./class-map-5b190712.js";import"./i18n-defaults-a1ecaff4.js";import"./index-05472e76.js";import"./Avatar-d6a8bd34.js";import"./ResizeHandler-36d5a74c.js";import"./employee-0930782f.js";import"./alert-fa33aca2.js";import"./index-d25f9e77.js";import"./AriaLabelHelper-43a261ec.js";import"./index-7a876526.js";import"./Link-0dce4afc.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./index-12e0da73.js";import"./index-9495b19e.js";import"./Label-025b0296.js";import"./index-a04b250c.js";import"./Button-f20bbbdf.js";import"./index-feb19509.js";import"./Popover-84fe14ea.js";import"./PopupUtils-caf3caee.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-070f9d59.js";import"./FocusableElements-320054f2.js";import"./isElementHidden-01c07146.js";import"./decline-a017ea5c.js";import"./i18n-defaults-bdef1cce.js";import"./MediaRange-25b98f31.js";import"./style-map-2f7624b7.js";import"./BrowserScrollbar.css-e63eefff.js";import"./information-ff75d6c3.js";function ge(t={}){const{wrapper:n}=Object.assign({},i(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(r,{})})):r();function r(){const o=Object.assign({h1:"h1","ui5-link":"ui5-link",h2:"h2",p:"p",a:"a",code:"code",h3:"h3",pre:"pre"},i(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"FAQ"}),`
`,e.jsx(a,{}),`
`,e.jsx(o.h1,{id:"faq",children:"FAQ"}),`
`,e.jsx(p,{hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:[" Please also take a look at the FAQ of"," ",e.jsx(o["ui5-link"],{href:"https://sap.github.io/ui5-webcomponents/playground/?path=/docs/docs-faq",children:" UI5 Web Components"})," ."]})}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h2,{id:"why-is-my-popover-or-dialog-not-rendered-correctly",children:"Why is my Popover or Dialog not rendered correctly?"}),`
`,e.jsxs(o.p,{children:[`Mounting popups, like the Popover, inside of components can lead to unwanted side-effects (wrong positioning, alignment, etc.), to prevent that we recommend either mounting it outside of the component, or mounting it with a React portal.
You can find out more about how we use portals `,e.jsx(o.a,{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-working-with-portals--docs",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),"."]}),`
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
`,e.jsx(o.h2,{id:"how-can-i-reuse-or-change-colors-fonts-etc-of-ui5-web-components-for-react",children:"How can I reuse or change colors, fonts, etc. of UI5 Web Components for React?"}),`
`,e.jsxs(o.p,{children:["UI5 Web Components for React comes with a ",e.jsx(o.a,{href:"https://github.com/SAP/theming-base-content",target:"_blank",rel:"nofollow noopener noreferrer",children:"publicly available"})," set of CSS variables that ensure the same look and feel across applications. Changing these values is not recommended, if you still need to customize them, you can find out more about this ",e.jsx(o.a,{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-styling--docs#styling-ui5-web-components-for-react-components",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),"."]}),`
`,e.jsxs(o.p,{children:["To reuse these styles, you can either use the CSS variable, or use our ",e.jsx(o.a,{href:"https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-public-utils--docs#theming-parameters",target:"_blank",rel:"nofollow noopener noreferrer",children:"Theming Parameters"}),"."]}),`
`,e.jsx(c,{})]})}}export{ge as default};
//# sourceMappingURL=FAQ-6fb99e7f.js.map
