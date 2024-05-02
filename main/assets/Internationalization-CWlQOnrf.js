import{j as e}from"./ManagedStyles-0Bwp9t5R.js";import{useMDXComponents as i}from"./index-3-_tf5dF.js";import"./chunk-HLWAVYOI-YvQeSuRM.js";import{M as a}from"./index-Cx3lmgDp.js";import"./index-BP8_t0zE.js";import"./index-BxmsGmlx.js";import"./copy-FfYDXqvA.js";import{F as d}from"./ProjectTemplate-BbjChwId.js";import{T as l}from"./TableOfContent-O5PHRpql.js";import{M as s,a as r}from"./index-CR9q8w4u.js";import"./iframe-xK-OiEIo.js";import"../sb-preview/runtime.js";import"./client-Di-4O7We.js";import"./_baseForOwn-B3hW39GE.js";import"./mapValues-COmDofVS.js";import"./_baseUniq-BbzeZuBs.js";import"./index-m7PT-roW.js";import"./index-DrFu-skq.js";import"./Boot-BtdVcW0c.js";import"./EventProvider-B3ZIXKWe.js";import"./Icons-DgaaT5sV.js";import"./i18nBundle-Dx46P1iz.js";import"./index-BNW1kIUY.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-DXQOMd9Q.js";import"./index-ChtTQ3kY.js";import"./Label-B0QBRtjK.js";import"./UI5Element-BfPpwo_k.js";import"./CustomElementsScopeUtils-CjWOyBed.js";import"./withWebComponent-DdLYI_QY.js";import"./utils-VXdlHuBA.js";import"./useIsomorphicLayoutEffect-CnI1knHw.js";import"./WrappingType-CW8URInd.js";import"./i18n-defaults-BFrvdQTW.js";import"./parameters-bundle.css-DjgCrOcY.js";import"./index-CuswsUCW.js";import"./Button-C4siPQ_G.js";import"./event-CegLCnR0.js";import"./slot-Df15G--e.js";import"./Keys-BgUkNma0.js";import"./AriaLabelHelper-CzOXVcye.js";import"./MarkedEvents-BPv6Lv4o.js";import"./willShowContent-BOkh0bwj.js";import"./Icon-CDo0XdyR.js";import"./HasPopup-Cecjtg2t.js";import"./index-BPPPA6dH.js";import"./Link-Ca8TnKXf.js";import"./index-C72VOqpl.js";import"./Popover-BRx0aMsU.js";import"./Integer-Dh6YzFpK.js";import"./PopupUtils-BDyegTwa.js";import"./getActiveElement-BL9Yqj8a.js";import"./PopupsCommon.css-BGWtnzwQ.js";import"./FocusableElements-FQMFYvMw.js";import"./isElementHidden-Bpu2V8BK.js";import"./getEffectiveScrollbarStyle-DWzHjL-d.js";import"./ResizeHandler-BxP3RYN1.js";import"./MediaRange-CQ-a3KRn.js";import"./style-map-BhswnH6I.js";import"./class-map-DwUNpVO-.js";import"./BrowserScrollbar.css-BmT0sFnr.js";import"./index-CCV2VZkT.js";import"./i18n-defaults-B3VmmZkh.js";import"./I18nContext-RJHUyvz-.js";import"./index-CIMqV4DH.js";import"./ThemingParameters-DOkJX3Ed.js";import"./ModalsContext-LNbsEfoS.js";import"./useIsomorphicId-D4u2wl0X.js";import"./addCustomCSSWithScoping-B4X1apx3.js";import"./index-Bpr9Ub4u.js";import"./index-kAy_PbTf.js";import"./Avatar-DDfgA5P5.js";import"./employee-Cmog-JUE.js";import"./alert-DaAYzDGJ.js";import"./index-CaoLvTqv.js";import"./decline-Bq4uAF5d.js";import"./i18n-defaults-BdfZArTM.js";import"./information-CIM5_BNu.js";function o(t){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Internationalization"}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h1,{id:"setup-internationalization-i18n",children:"Setup Internationalization (i18n)"}),`
`,e.jsxs(n.p,{children:[`UI5 Web Components (for React) aim to be feature rich and with a minimal code footprint at the same time.
In order to achieve this, most UI5 Web Components packages ship their assets as `,e.jsx(n.code,{children:".json"})," files while also providing a public module import for them."]}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["Prerequisite: This guide requires ",e.jsx(n.code,{children:"@ui5/webcomponents-react@^0.14.0"})," and ",e.jsx(n.code,{children:"@ui5/webcomponents@^1.0.0-rc.12"})," or newer."]})}),`
`,e.jsx(n.h2,{id:"make-your-app-translatable",children:"Make your App translatable"}),`
`,e.jsx(n.p,{children:"In order to make your app translatable into various languages, you need to import the following asset:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import '@ui5/webcomponents-react/dist/Assets';
`})}),`
`,e.jsxs(n.p,{children:["That's it! You can now test whether the translations work correctly by adding e.g. ",e.jsx(n.code,{children:"?sap-ui-language=de"})," to your URL for German translations."]}),`
`,e.jsx("br",{}),`
`,e.jsx("br",{}),`
`,e.jsx(n.h2,{id:"how-to-add-custom-translations",children:"How to add custom translations"}),`
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Please also read the ",e.jsx(n.a,{href:"https://sap.github.io/ui5-webcomponents/playground/?path=/docs/docs-advanced-configuration",rel:"nofollow",children:"general configuration"})," and ",e.jsx(n.a,{href:"https://sap.github.io/ui5-webcomponents/playground/?path=/docs/docs-advanced-using-i18n-for-apps",rel:"nofollow",children:"i18n documentation"})," of UI5 Web Components."]})}),`
`,e.jsx(s,{design:r.Information,hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:["When using custom translations, you have to enable the ",e.jsx(n.code,{children:"fetchDefaultLanguage"})," option for UI5 Web Components. If it is not set, your default language translations (english) will be missing. Learn more about it"," ",e.jsx(n.a,{href:"https://sap.github.io/ui5-webcomponents/playground/?path=/docs/docs-advanced-configuration--docs#fetchdefaultlanguage",target:"_blank",children:"here"}),"."]})}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["1. Start by creating some ",e.jsx(n.code,{children:"i18n"})," resources in a directory that can be served, for example:"]})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"File"}),e.jsx(n.th,{children:"Content"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"assets/messagebundle_de.properties"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"PLEASE_WAIT=Bitte warten"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"assets/messagebundle_fr.properties"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"PLEASE_WAIT=Patientez"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"assets/messagebundle_es.properties"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"PLEASE_WAIT=Espere"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"assets/messagebundle_en.properties"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"PLEASE_WAIT=Please wait"})})]})]})]}),`
`,e.jsx(s,{design:r.Information,hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:["If you used ",e.jsx(n.code,{children:"create-react-app"})," to create your React application, you can use the ",e.jsx(n.code,{children:"public"})," ","folder to store your resource files."]})}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["2. Register the ",e.jsx(n.code,{children:"i18n"})," assets"]})}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["For ",e.jsx(n.code,{children:".properties"})," files:"]})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { registerI18nLoader } from '@ui5/webcomponents-base/dist/asset-registries/i18n.js';
import parse from '@ui5/webcomponents-base/dist/PropertiesFileFormat.js';

registerI18nLoader('myApp', 'de', async () => {
  const props = await (await fetch('./assets/messagebundle_de.properties')).text();
  return parse(props); // this call is required for parsing the properties text
});
`})}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["For ",e.jsx(n.code,{children:".json"})," files:"]})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { registerI18nLoader } from '@ui5/webcomponents-base/dist/asset-registries/i18n.js';

registerI18nLoader('myApp', 'de', async () => {
  return await (await fetch('./assets/messagebundle_de.json')).json();
});
`})}),`
`,e.jsx(s,{design:r.Information,hideCloseButton:!0,children:"This is just asset registration, no data will be fetched at that point."}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"3. Use your translated texts in your components"})}),`
`,e.jsx(n.p,{children:"Add the following import statement to the component where you want to use translated texts:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { useI18nBundle } from '@ui5/webcomponents-react-base';
`})}),`
`,e.jsxs(n.p,{children:["Now, you can use the ",e.jsx(n.code,{children:"useI18nBundle"}),` hook in your functional components in order to access the i18nBundle and get your
translated texts from there.`]}),`
`,e.jsx(n.p,{children:"The hook has the following signature:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const i18nBundle = useI18nBundle(messageBundleId: string): I18nBundle;
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"i18nBundle"})," is offering one public method ",e.jsx(n.code,{children:"getText"})," which accepts a string as first parameter, followed by optional replacement parameters for your translation."]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`const MyTranslatedTextComponent = () => {
  const i18nBundle = useI18nBundle('myApp');

  return (
    <div>
      <span>{i18nBundle.getText('PLEASE_WAIT')}</span>
      <p>{i18nBundle.getText('ANOTHER_TEXT_TO_TRANSLATE')}</p>
    </div>
  );
};
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"4. Use texts with placeholder values"})}),`
`,e.jsxs(n.p,{children:["You can pass multiple additional values to ",e.jsx(n.code,{children:"getText"}),` for texts with placeholders.
In this case, the first parameter is the translation key, followed by an arbitrary number of parameters which should be inserted into the translation.`]}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Example:"})}),`
`,e.jsx(n.p,{children:"You have this text in your message bundle:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-properties",children:`CAROUSEL_DOT_TEXT=Item {0} of {1} displayed
`})}),`
`,e.jsx(n.p,{children:"Your hook call would now look like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const i18nBundle = useI18nBundle('myApp');
const carouselText = i18nBundle.getText('CAROUSEL_DOT_TEXT', 5, 20);
`})}),`
`,e.jsxs(n.p,{children:["This would resolve to this text:",e.jsx("br",{}),`
`,e.jsx(n.code,{children:"Item 5 of 20 displayed"})]}),`
`,e.jsx(n.h2,{id:"codesandbox-example",children:"CodeSandbox example"}),`
`,e.jsx(n.p,{children:"Here you can find a basic example that uses the internal translations and also implements custom translations:"}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://codesandbox.io/s/wcr-i18n-example-74fgbm?fontsize=14&hidenavigation=1&theme=dark",rel:"nofollow",children:e.jsx(n.img,{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit wcr-i18n-example"})})}),`
`,e.jsx(d,{})]})}function Ne(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{Ne as default};
