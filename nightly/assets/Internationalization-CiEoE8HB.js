import{j as e}from"./jsx-runtime-CLpGMVip.js";import{useMDXComponents as i}from"./index-B7tNCeqj.js";import"./chunk-NUUEMKO5-DqXQITXT.js";import{ae as a}from"./index-BMcWAAzV.js";import{M as s,a as r}from"./index-C1n754Ql.js";import"./index-iX07oNKf.js";import"./TagDesign-Dou_yO3g.js";import"./index-CjmQ2z5u.js";import"./index-bI5-aUrJ.js";import"./fiori-BEcr7J4N.js";import"./main-rGL2KZiJ.js";import"./Button-D2qpVKd_.js";import"./withWebComponent-BAC46Qgl.js";import"./copy-0ABXfWaL.js";import{F as d}from"./CommandsAndQueries-Bc7fxP2Q.js";import{T as l}from"./TableOfContent-BTksmC1d.js";import"./products-B8km3JGR.js";import"./WrappingType-CW8URInd.js";import"./Title-Dvor2iJZ.js";import"./iframe-Ct_SlnJB.js";import"../sb-preview/runtime.js";import"./client-CY4f97Aa.js";import"./index-DGl0hLba.js";import"./index-NOh9rqHv.js";import"./index-ogSvIofg.js";import"./slot-Df15G--e.js";import"./event-strict-C2lE4gn2.js";import"./i18n-BLQCbquq.js";import"./Icon-KwQmOmwG.js";import"./useIsomorphicLayoutEffect-BrM9ZQ9f.js";import"./Keys-icCwrzTr.js";import"./parameters-bundle.css-BzaqQttB.js";import"./decline-Cvlv1555.js";import"./i18n-defaults-CUGG7UPM.js";import"./information-DXlV02Fk.js";import"./information-xqs3OhY3.js";import"./sys-enter-2-CSX9nspg.js";import"./sys-enter-2-DbnliBdY.js";import"./i18n-defaults-Cyg2J0QB.js";import"./AccessibilityTextsHelper-DhVMExKx.js";import"./willShowContent-BOkh0bwj.js";import"./Tooltips-PdAMeIDX.js";import"./toLowercaseEnumValue-BQhMonSq.js";import"./utils-DHWaO16c.js";import"./Popover-D3Aa3r1P.js";import"./PopupsCommon.css-BjVEqPfo.js";import"./FocusableElements-CWhrFN4y.js";import"./isElementHidden-Bpu2V8BK.js";import"./isElementClickable-C7H9UXMP.js";import"./getActiveElement-BL9Yqj8a.js";import"./ResizeHandler-DZGQLi_B.js";import"./MediaRange-CQ-a3KRn.js";import"./getEffectiveScrollbarStyle-DY0HYxPj.js";import"./index-Bz1xVcti.js";import"./clsx-B-dksMZM.js";import"./useStylesheet-HR5-WzWz.js";import"./index-CBHUUcbt.js";import"./Label-CEj5rW2N.js";import"./index-H87Uqpad.js";import"./index-Dga5kidR.js";import"./Link-D-9JsuZq.js";import"./index-DyiqWDN1.js";import"./index-f_HIS5b8.js";import"./Text-CKbp8M25.js";import"./addCustomCSSWithScoping-CrhCyCCs.js";import"./index-BYWKQNiy.js";import"./index-BJBRTTXf.js";import"./BusyIndicator-CLoFvcyK.js";import"./index-CFz6ke_V.js";import"./index-yEmNeK-_.js";import"./AvatarSize-BceVhWoP.js";import"./employee-BdFbn1ih.js";import"./index-ClljthAu.js";import"./I18nStore-ZZUdxPPL.js";function o(t){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Internationalization"}),`
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
`,e.jsx(n.p,{children:e.jsxs(n.em,{children:["Please also read the ",e.jsx(n.a,{href:"https://sap.github.io/ui5-webcomponents/docs/advanced/configuration/",rel:"nofollow",children:"general configuration"})," and ",e.jsx(n.a,{href:"https://sap.github.io/ui5-webcomponents/docs/advanced/using-i18n-for-apps/",rel:"nofollow",children:"i18n documentation"})," of UI5 Web Components."]})}),`
`,e.jsx(s,{design:r.Information,hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:["When using custom translations, you have to enable the ",e.jsx(n.code,{children:"fetchDefaultLanguage"})," option for UI5 Web Components. If it is not set, your default language translations (english) will be missing. Learn more about it"," ",e.jsx(n.a,{href:"https://sap.github.io/ui5-webcomponents/docs/advanced/configuration/#fetchDefaultLanguage",target:"_blank",children:"here"}),"."]})}),`
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
`,e.jsx(d,{})]})}function Ce(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{Ce as default};
