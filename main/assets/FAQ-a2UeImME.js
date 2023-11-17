import{j as e}from"./jsx-runtime-DtaoT6pD.js";import{M as s}from"./chunk-HLWAVYOI-aRY61EAZ.js";import"./DomRefTable.module-KFV4vTNP.js";import"./index-OjgoNOWw.js";import{T as a}from"./TableOfContent-CFEEopUN.js";import{F as c}from"./Footer-5HE-tmQI.js";import{u as i}from"./index-RwE9nQVW.js";import{M as p}from"./index-hjlCGKub.js";import"./iframe-jFRpQ-99.js";import"../sb-preview/runtime.js";import"./index--F0XPsCm.js";import"./index-QYh6idnL.js";import"./mapValues-TkJEqHhn.js";import"./_baseForOwn-SiKZKQog.js";import"./_baseUniq-frCQiV_D.js";import"./index-PPLHz8o0.js";import"./react-jss.esm-AmlvxLhk.js";import"./index-S1zyQWjr.js";import"./clsx-2Jv0kmJG.js";import"./ThemingParameters-UghqSl-x.js";import"./addCustomCSSWithScoping-PxRYiixA.js";import"./UI5Element-51XrG2PJ.js";import"./CustomElementsScopeUtils-FvbtGFoH.js";import"./utils-CrDMzPRG.js";import"./index-oLSBYiL3.js";import"./withWebComponent-ceo0jn6D.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./slot-HSrR9XJ-.js";import"./Icon-HNXZSIOG.js";import"./Icons-3pbvVZUr.js";import"./Integer-kog98579.js";import"./class-map-JXa0-u4l.js";import"./i18n-defaults-RBzcmDt8.js";import"./index-OgyC61Zv.js";import"./Avatar-hI9OSh5N.js";import"./ResizeHandler-9pqGT1BJ.js";import"./employee-QIf_hgHb.js";import"./alert-TGfQazfI.js";import"./index-2LFs6KZP.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./index-web1D2Sd.js";import"./Link-DluRE2Z1.js";import"./MarkedEvents-aYv14vsS.js";import"./WrappingType-avPrqc94.js";import"./index-ZYxd7chN.js";import"./index-5G9NmmK_.js";import"./Label-z__cPwIf.js";import"./index-Nq0B0t7P.js";import"./Button-a5xMWTkk.js";import"./index-BVOpDmmc.js";import"./Popover-pPQH5XeW.js";import"./PopupUtils-JhQDb1QD.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-q9U65Wkb.js";import"./FocusableElements-W9IwOAGU.js";import"./isElementHidden-d3-Fo4V6.js";import"./decline-Q45dXYUl.js";import"./i18n-defaults-n2A5pq_J.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-uWW-8QIe.js";import"./BrowserScrollbar.css-HfEGARrw.js";import"./information-WfdY8QHP.js";function ge(t={}){const{wrapper:n}=Object.assign({},i(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(r,{})})):r();function r(){const o=Object.assign({h1:"h1","ui5-link":"ui5-link",h2:"h2",p:"p",a:"a",code:"code",h3:"h3",pre:"pre"},i(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"FAQ"}),`
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
//# sourceMappingURL=FAQ-a2UeImME.js.map
