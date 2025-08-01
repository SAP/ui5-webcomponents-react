import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-Duvwo7dg.js";import{F as r}from"./CommandsAndQueries-BKmPxuiJ.js";import{M as c}from"./index-DC4Zxx0i.js";import"./Tag-Ck-rQ93o.js";import"./index-BCOE9su8.js";import"./index-CEr2UAyE.js";import"./index-7Z4Dhk6u.js";import{M as a}from"./index-DOj1f8Lg.js";import"./Button-BAohpRXl.js";import"./jsx-runtime-xa789Fx-.js";import"./copy-Ce-W84Ka.js";import{T as p}from"./TableOfContent-ClPXL3dS.js";import"./WrappingType-BBpR8qCJ.js";import"./Title-BTb5jHlz.js";import"./preview-DqrgJKWC.js";import"./iframe-DYm7x9-2.js";import"./DocsRenderer-CFRXHY34-T6-8wtfp.js";import"./client-2ALsBH8W.js";import"./index-BX0qWsV0.js";import"./Popover-DrPdnlD_.js";import"./slot-_4yKMUwC.js";import"./PopupsCommon.css-D_uQUn1t.js";import"./event-strict-DgQLNDEV.js";import"./FocusableElements-CinXTr6J.js";import"./isElementHidden-gS67o0pl.js";import"./AccessibilityTextsHelper-4hgGqLyb.js";import"./CustomElementsScope-CraI7z9b.js";import"./Keys-CLf_QmYW.js";import"./getActiveElement-kltGt_DR.js";import"./ResizeHandler-OXK24k1p.js";import"./MediaRange-Bnzt26Xb.js";import"./toLowercaseEnumValue-C_8o5td_.js";import"./parameters-bundle.css-D0uTR4GL.js";import"./getEffectiveScrollbarStyle-zkSO3ShF.js";import"./index-CJO99m71.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-Dh6tKsMV.js";import"./index-w82VAi-S.js";import"./Label-DvI9nTT8.js";import"./i18n-CjR4HGlq.js";import"./i18n-defaults-Wx6G1HAa.js";import"./index-BTImLLsO.js";import"./index-BxoZEFEX.js";import"./Link-DYEiCybJ.js";import"./Icon-BC8KE6RK.js";import"./index-DOeHcXKd.js";import"./index-g22nm93k.js";import"./Text-BhvqvgTY.js";import"./willShowContent-CZcfsNXp.js";import"./addCustomCSSWithScoping-Br5D2MMD.js";import"./index-CB6Dlc1E.js";import"./BusyIndicator-CP9fjQ10.js";import"./index-BUVDlgt4.js";import"./index-5xYsTlk-.js";import"./AvatarSize-BtKTMFJ5.js";import"./employee-JpmbdEoa.js";import"./index-Cg9Z4-gG.js";import"./I18nStore-Bx61vi8M.js";import"./index-BfsxzUor.js";import"./index-CXQShRbs.js";import"./index-DrFu-skq.js";import"./sys-help-2-QU1zRg7_.js";import"./sys-enter-2-CUYL3AE0.js";import"./i18n-defaults-CmVK7_Fz.js";import"./information-l0VFevGn.js";import"./decline-BJJ7TY3L.js";import"./information-jHKcowyE.js";import"./sys-enter-2-vblLkH1D.js";import"./alert-CtWydQwI.js";import"./Tooltips-CwjopbrF.js";import"./EventProvider-ChtD9rRX.js";const m=""+new URL("sb-pkg-filter-DKWvA_r4.png",import.meta.url).href;function n(t){const o={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong","ui5-link":"ui5-link",...i(),...t.components},s=o["ui5-link"];return e.jsxs(e.Fragment,{children:[e.jsx(c,{title:"FAQ"}),`
`,e.jsx(p,{}),`
`,e.jsx(o.h1,{id:"faq",children:"FAQ"}),`
`,e.jsx(a,{hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:["Please also take a look at the FAQ of"," ",e.jsx(s,{href:"https://sap.github.io/ui5-webcomponents/docs/FAQ/",children:"UI5 Web Components"}),"."]})}),`
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
`,e.jsx("img",{src:m,alt:"Storybook Tag Filter",height:320}),`
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
`,e.jsx(r,{})]})}function Ue(t={}){const{wrapper:o}={...i(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{Ue as default};
