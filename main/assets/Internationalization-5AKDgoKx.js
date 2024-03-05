import{j as e}from"./jsx-runtime-DtaoT6pD.js";import"./chunk-HLWAVYOI-qcr3Wnwf.js";import{M as d}from"./index-uzbnTl6B.js";import{F as l}from"./ProjectTemplate-fijXBkHk.js";import"./index-OjgoNOWw.js";import"./index-QYh6idnL.js";import"./copy-PqQY0mDn.js";import{T as c}from"./TableOfContent-m-3Y6ZqO.js";import{u as a}from"./index-RwE9nQVW.js";import{M as s,a as r}from"./index-ExDtWaFN.js";import"./iframe-1Zrcn8Ke.js";import"../sb-preview/runtime.js";import"./react-18-1WT2dSvK.js";import"./_baseForOwn-a7AeJH13.js";import"./mapValues-_kP3xGjM.js";import"./_baseUniq-_JZHYp0e.js";import"./index-PPLHz8o0.js";import"./index-7I0hdIjK.js";import"./react-jss.esm-fzYOEaou.js";import"./theming.esm-g_6oAtQL.js";import"./index-Qwyc25sK.js";import"./clsx-Zbgk8kpT.js";import"./index-x-7bG_XB.js";import"./Label-fARuFZ49.js";import"./UI5Element-ZYvPEp0D.js";import"./Language-JQ3LAQtE.js";import"./VersionInfo-zmLW7G4m.js";import"./CustomElementsScopeUtils-StEZUlti.js";import"./withWebComponent-c-uI2wMj.js";import"./utils-_oNUceU3.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./i18nBundle-1RfbKOQr.js";import"./WrappingType-avPrqc94.js";import"./i18n-defaults-5NJLMpyi.js";import"./parameters-bundle.css-mPCp9TQx.js";import"./index-3rIpJUwf.js";import"./Button-6A8kFSGe.js";import"./event-lM5HanI-.js";import"./slot-HSrR9XJ-.js";import"./Keys-ZEuNsqmZ.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./Icons-cAVhCySg.js";import"./willShowContent-MSvI8sYo.js";import"./Icon-7RzQfNaI.js";import"./HasPopup-9BAMrqbD.js";import"./index-jVWXid9M.js";import"./Link-HKW89dQ_.js";import"./index-70dYDNTt.js";import"./Popover-UsQMNwiB.js";import"./Integer-kog98579.js";import"./PopupUtils-ihEiSFJi.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-ITzmnbbD.js";import"./FocusableElements-vlqyWKZU.js";import"./isElementHidden-d3-Fo4V6.js";import"./getEffectiveScrollbarStyle-Gz48PLeD.js";import"./ResizeHandler-YURVNHbB.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-5XXpitLE.js";import"./class-map-kWxrnrVL.js";import"./BrowserScrollbar.css-za47fcqD.js";import"./index-SpQb4Cav.js";import"./i18n-defaults-8iJXv8tC.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-O-3hYuZs.js";import"./useStylesheet-2TpYMoe1.js";import"./ModalsContext-T9gUbaXC.js";import"./addCustomCSSWithScoping-tGNiKL_K.js";import"./index-VIqy8sFz.js";import"./index-0dHJYJ-X.js";import"./Avatar-W7sCbj87.js";import"./employee-LTkoba5Z.js";import"./alert-dBb1Jp03.js";import"./index-VKrM-rKr.js";import"./decline-U1O_cqCB.js";import"./i18n-defaults-SIMqfZL6.js";import"./information-QdD8C0Qh.js";function Oe(t={}){const{wrapper:o}=Object.assign({},a(),t.components);return o?e.jsx(o,Object.assign({},t,{children:e.jsx(i,{})})):i();function i(){const n=Object.assign({h1:"h1",p:"p",code:"code",strong:"strong",h2:"h2",pre:"pre",em:"em",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",img:"img"},a(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(d,{title:"Internationalization"}),`
`,e.jsx(c,{}),`
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
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Please also read the ",e.jsx(n.a,{href:"https://sap.github.io/ui5-webcomponents/playground/?path=/docs/docs-advanced-configuration",target:"_blank",rel:"nofollow noopener noreferrer",children:"general configuration"})," and ",e.jsx(n.a,{href:"https://sap.github.io/ui5-webcomponents/playground/?path=/docs/docs-advanced-using-i18n-for-apps",target:"_blank",rel:"nofollow noopener noreferrer",children:"i18n documentation"})," of UI5 Web Components."]})}),`
`,e.jsx(s,{design:r.Information,hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:[" When using custom translations, you have to enable the ",e.jsx(n.code,{children:"fetchDefaultLanguage"})," option for UI5 Web Components. If it is not set, your default language translations (english) will be missing. Learn more about it"," ",e.jsx(n.a,{href:"https://sap.github.io/ui5-webcomponents/playground/?path=/docs/docs-advanced-configuration--docs#fetchdefaultlanguage",target:"_blank",children:" here"})," ."]})}),`
`,e.jsx(n.p,{children:e.jsxs(n.strong,{children:["1. Start by creating some ",e.jsx(n.code,{children:"i18n"})," resources in a directory that can be served, for example:"]})}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"File"}),e.jsx(n.th,{children:"Content"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"assets/messagebundle_de.properties"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"PLEASE_WAIT=Bitte warten"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"assets/messagebundle_fr.properties"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"PLEASE_WAIT=Patientez"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"assets/messagebundle_es.properties"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"PLEASE_WAIT=Espere"})})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"assets/messagebundle_en.properties"})}),e.jsx(n.td,{children:e.jsx(n.code,{children:"PLEASE_WAIT=Please wait"})})]})]})]}),`
`,e.jsx(s,{design:r.Information,hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:[" If you used ",e.jsx(n.code,{children:"create-react-app"})," to create your React application, you can use the ",e.jsx(n.code,{children:"public"})," "," folder to store your resource files."]})}),`
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
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://codesandbox.io/s/wcr-i18n-example-74fgbm?fontsize=14&hidenavigation=1&theme=dark",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx(n.img,{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit wcr-i18n-example"})})}),`
`,e.jsx(l,{})]})}}export{Oe as default};
