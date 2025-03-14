import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-zdXs1Etw.js";import{F as s}from"./CommandsAndQueries-DjEU860a.js";import{M as a}from"./index-Cn8r-7X1.js";import{M as c}from"./index-Ckh4UXjO.js";import"./index-Cwiz2zdk.js";import"./TagDesign-Ga50IS6u.js";import"./index-C--kS4iy.js";import"./index-DJcrgQOn.js";import"./Button-CDUAIOHY.js";import"./jsx-runtime-TYk6ziax.js";import"./copy-BIm13QSs.js";import{T as m}from"./TableOfContent-Bzt3eeAv.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-BZr7m-U9.js";import"./preview-wiC8mDrZ.js";import"./iframe-DL0iwgHo.js";import"./DocsRenderer-CFRXHY34-B0U33Lo7.js";import"./react-18-DGA_MWY9.js";import"./index-B-pEBbkX.js";import"./Popover-CYWkC5M7.js";import"./slot-_4yKMUwC.js";import"./PopupsCommon.css-C4odaWdv.js";import"./event-strict-DgQLNDEV.js";import"./FocusableElements-B0h6XdH-.js";import"./isElementHidden-B4HqmI2E.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./CustomElementsScope-BUTWMsdD.js";import"./Keys-B3oBAe0t.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-BhhEdsAZ.js";import"./MediaRange-Bnzt26Xb.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./parameters-bundle.css-DHLNbl9v.js";import"./getEffectiveScrollbarStyle-C9nZ6DfS.js";import"./index-D8BvuigD.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-D-3zc5-n.js";import"./index-BpkLtvLS.js";import"./Label-CNIQ9f-B.js";import"./i18n-CjR4HGlq.js";import"./i18n-defaults-BXUwkpCs.js";import"./index-DmVWxwwF.js";import"./index-C48eapQO.js";import"./Link-DJmP58JE.js";import"./Icon-CJfyoCyo.js";import"./index-C4AHKFdV.js";import"./index-DA4Nf3tz.js";import"./Text-BE7aNcNC.js";import"./willShowContent-CZcfsNXp.js";import"./addCustomCSSWithScoping-_tNs8Q2d.js";import"./index-CkLIGxQ0.js";import"./BusyIndicator-DRlXpx-R.js";import"./index-PdcYfHMq.js";import"./index-BGMpZMYY.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-DCPNHV1H.js";import"./index-CuViXtRA.js";import"./I18nStore-DdNtknPF.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./decline-Ctf1iLC2.js";import"./i18n-defaults-BJtDw6Mf.js";import"./information-CaDfZmsc.js";import"./information-axph4kwY.js";import"./sys-enter-2-W20sQgrM.js";import"./sys-enter-2-Dj0rlhGw.js";import"./Tooltips-DGo6fNOA.js";import"./EventProvider-ChtD9rRX.js";function n(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre","ui5-link":"ui5-link",...i(),...t.components},r=o["ui5-link"];return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"FAQ"}),`
`,e.jsx(m,{}),`
`,e.jsx(o.h1,{id:"faq",children:"FAQ"}),`
`,e.jsx(c,{hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:["Please also take a look at the FAQ of"," ",e.jsx(r,{href:"https://sap.github.io/ui5-webcomponents/playground/?path=/docs/docs-faq",children:"UI5 Web Components"}),"."]})}),`
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
`,e.jsx(s,{})]})}function Ie(t={}){const{wrapper:o}={...i(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{Ie as default};
