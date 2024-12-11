import{j as e}from"./jsx-runtime-D6fbYt3N.js";import{useMDXComponents as i}from"./index-DyCphG7h.js";import"./chunk-NUUEMKO5-B-K8mTca.js";import{ae as s}from"./index-Bremk5mU.js";import{M as a}from"./index-Dv5mXzg4.js";import"./index-B8wNORBP.js";import"./TagDesign-Dou_yO3g.js";import"./index-DysCNOs_.js";import"./index-C4cLd1FO.js";import"./Button-B25Pr19o.js";import"./withWebComponent-D2290JWW.js";import"./copy-ClT0iCqi.js";import{F as c}from"./CommandsAndQueries-DTrR65FZ.js";import{T as m}from"./TableOfContent-DRym89KV.js";import"./WrappingType-CW8URInd.js";import"./Title-B_OApkG5.js";import"./iframe-D_nBdiud.js";import"../sb-preview/runtime.js";import"./client-CqEfiX9M.js";import"./index-BcsOxL0D.js";import"./index-DrFu-skq.js";import"./slot-_4yKMUwC.js";import"./event-strict-DgQLNDEV.js";import"./i18n-DEVDpFvK.js";import"./decline-eE5kkR_d.js";import"./Icon-DNC_Q8W5.js";import"./useIsomorphicLayoutEffect-UXkgNLQC.js";import"./Keys-CAuuEE_3.js";import"./utils-rQ0RHFcC.js";import"./parameters-bundle.css-DlWxkghp.js";import"./i18n-defaults-neJWcM66.js";import"./information-DiNgtIoE.js";import"./alert-C1PxT_zH.js";import"./class-map-BHSYgJ9u.js";import"./i18n-defaults-B_32hVC3.js";import"./AccessibilityTextsHelper-Beeze-lh.js";import"./willShowContent-CZcfsNXp.js";import"./Tooltips-Cvj6MDOu.js";import"./Popover-D4qFMFR_.js";import"./PopupsCommon.css-Ds9l5hmK.js";import"./FocusableElements-BUUEY9i6.js";import"./isElementHidden-B4HqmI2E.js";import"./isElementClickable-0ACQ4G_A.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-h_-KGn42.js";import"./MediaRange-Bnzt26Xb.js";import"./style-map-CKH5i8-O.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-BtwtDsaz.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DzoyRzuT.js";import"./index-CaG1LRe9.js";import"./Label-DljH_Hma.js";import"./index-Cz-1v5Av.js";import"./index-BihYjSJH.js";import"./Link-Bfcngofg.js";import"./index-x-kKtoec.js";import"./index-B56Kl_es.js";import"./Text-iUXAjx9E.js";import"./addCustomCSSWithScoping-DWJN-AXE.js";import"./index-C7mFJBZY.js";import"./BusyIndicator-DeXFd7cw.js";import"./index-ByfP8321.js";import"./index-VGStP4CR.js";import"./Avatar-CSh84RvD.js";import"./employee-kfgjySdt.js";import"./index-rN_CBgXC.js";import"./I18nStore-D-72hezK.js";function n(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre","ui5-link":"ui5-link",...i(),...t.components},r=o["ui5-link"];return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"FAQ"}),`
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
`,e.jsx(c,{})]})}function ve(t={}){const{wrapper:o}={...i(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{ve as default};
