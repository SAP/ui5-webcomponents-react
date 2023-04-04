import{j as n,a as t,F as o}from"./jsx-runtime-670450c2.js";import{M as c}from"./chunk-PCJTTTQV-703aebb7.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./DomRefTable.module-7a0f3368.js";import"./index-f1f749bf.js";import"./Import-eb989cda.js";import{T as p}from"./TableOfContent-0ec14130.js";import{F as h}from"./Footer-7a087b1c.js";import{u as l}from"./index-4fb8b842.js";import{M as i,a as s}from"./index-805e79c6.js";import"./iframe-1d6fd4e8.js";import"../sb-preview/runtime.mjs";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./react-jss.esm-2e28eff7.js";import"./index-94bcf4c7.js";import"./clsx.m-1229b3e0.js";import"./index-1309330e.js";import"./Label-e3d88218.js";import"./UI5Element-d1d93200.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d280b5c2.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./Device-208919c6.js";import"./WrappingType-b81e595a.js";import"./class-map-6d48ebd3.js";import"./index-047f95db.js";import"./Link-706be030.js";import"./Icon-c8fd92f0.js";import"./Icons-efeb15d5.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-254d6b69.js";import"./index-c75ea0ec.js";import"./Popover-4088d87a.js";import"./slot-76e48863.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a92cb9f4.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-1644cafd.js";import"./FocusableElements-8859c874.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-ab5bee37.js";import"./ResizeHandler-f4ca1209.js";import"./MediaRange-25b98f31.js";import"./style-map-51d6dd91.js";import"./decline-41212cdc.js";import"./i18n-defaults-80781f7e.js";import"./information-859245b4.js";import"./Button-400e2491.js";function ye(r={}){const{wrapper:a}=Object.assign({},l(),r.components);return a?n(a,Object.assign({},r,{children:n(d,{})})):d();function d(){const e=Object.assign({h1:"h1",p:"p",code:"code",strong:"strong",h2:"h2",pre:"pre",em:"em",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",img:"img"},l(),r.components);return t(o,{children:[n(c,{title:"Internationalization"}),`
`,n(p,{}),`
`,n(e.h1,{id:"setup-internationalization-i18n",children:"Setup Internationalization (i18n)"}),`
`,t(e.p,{children:[`UI5 Web Components (for React) aim to be feature rich and with a minimal code footprint at the same time.
In order to achieve this, most UI5 Web Components packages ship their assets as `,n(e.code,{children:".json"})," files while also providing a public module import for them."]}),`
`,n(e.p,{children:t(e.strong,{children:["Prerequisite: This guide requires ",n(e.code,{children:"@ui5/webcomponents-react@^0.14.0"})," and ",n(e.code,{children:"@ui5/webcomponents@^1.0.0-rc.12"})," or newer."]})}),`
`,n(e.h2,{id:"make-your-app-translatable",children:"Make your App translatable"}),`
`,n(e.p,{children:"In order to make your app translatable into various languages, you need to import the following asset:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`import '@ui5/webcomponents-react/dist/Assets';
`})}),`
`,t(e.p,{children:["That's it! You can now test whether the translations work correctly by adding e.g. ",n(e.code,{children:"?sap-ui-language=de"})," to your URL for German translations."]}),`
`,n("br",{}),`
`,n("br",{}),`
`,n(e.h2,{id:"how-to-add-custom-translations",children:"How to add custom translations"}),`
`,n(e.p,{children:t(e.em,{children:["Please also read the ",n(e.a,{href:"https://sap.github.io/ui5-webcomponents/playground/advanced/configuration/",target:"_blank",rel:"nofollow noopener noreferrer",children:"general configuration"})," and ",n(e.a,{href:"https://sap.github.io/ui5-webcomponents/playground/advanced/using-i18n-for-apps/",target:"_blank",rel:"nofollow noopener noreferrer",children:"i18n documentation"})," of UI5 Web Components."]})}),`
`,n(i,{design:s.Information,hideCloseButton:!0,children:t(o,{children:[" When using custom translations, you have to enable the ",n(e.code,{children:"fetchDefaultLanguage"})," option for UI5 Web Components. If it is not set, your default language translations (english) will be missing. Learn more about it"," ",n(e.a,{href:"https://sap.github.io/ui5-webcomponents/playground/advanced/configuration/#fetchDefaultLanguage",target:"_blank",children:" here"})," ."]})}),`
`,n(e.p,{children:t(e.strong,{children:["1. Start by creating some ",n(e.code,{children:"i18n"})," resources in a directory that can be served, for example:"]})}),`
`,t(e.table,{children:[n(e.thead,{children:t(e.tr,{children:[n(e.th,{children:"File"}),n(e.th,{children:"Content"})]})}),t(e.tbody,{children:[t(e.tr,{children:[n(e.td,{children:n(e.code,{children:"assets/messagebundle_de.properties"})}),n(e.td,{children:n(e.code,{children:"PLEASE_WAIT=Bitte warten"})})]}),t(e.tr,{children:[n(e.td,{children:n(e.code,{children:"assets/messagebundle_fr.properties"})}),n(e.td,{children:n(e.code,{children:"PLEASE_WAIT=Patientez"})})]}),t(e.tr,{children:[n(e.td,{children:n(e.code,{children:"assets/messagebundle_es.properties"})}),n(e.td,{children:n(e.code,{children:"PLEASE_WAIT=Espere"})})]}),t(e.tr,{children:[n(e.td,{children:n(e.code,{children:"assets/messagebundle_en.properties"})}),n(e.td,{children:n(e.code,{children:"PLEASE_WAIT=Please wait"})})]})]})]}),`
`,n(i,{design:s.Information,hideCloseButton:!0,children:t(o,{children:[" If you used ",n(e.code,{children:"create-react-app"})," to create your React application, you can use the ",n(e.code,{children:"public"})," "," folder to store your resource files."]})}),`
`,n(e.p,{children:t(e.strong,{children:["2. Register the ",n(e.code,{children:"i18n"})," assets"]})}),`
`,n(e.p,{children:t(e.strong,{children:["For ",n(e.code,{children:".properties"})," files:"]})}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`import { registerI18nLoader } from '@ui5/webcomponents-base/dist/asset-registries/i18n.js';
import parse from '@ui5/webcomponents-base/dist/PropertiesFileFormat.js';

registerI18nLoader('myApp', 'de', async () => {
  const props = await (await fetch('./assets/messagebundle_de.properties')).text();
  return parse(props); // this call is required for parsing the properties text
});
`})}),`
`,n(e.p,{children:t(e.strong,{children:["For ",n(e.code,{children:".json"})," files:"]})}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`import { registerI18nLoader } from '@ui5/webcomponents-base/dist/asset-registries/i18n.js';

registerI18nLoader('myApp', 'de', async () => {
  return await (await fetch('./assets/messagebundle_de.json')).json();
});
`})}),`
`,n(i,{design:s.Information,hideCloseButton:!0,children:"This is just asset registration, no data will be fetched at that point."}),`
`,n(e.p,{children:n(e.strong,{children:"3. Use your translated texts in your components"})}),`
`,n(e.p,{children:"Add the following import statement to the component where you want to use translated texts:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`import { useI18nBundle } from '@ui5/webcomponents-react-base';
`})}),`
`,t(e.p,{children:["Now, you can use the ",n(e.code,{children:"useI18nBundle"}),` hook in your functional components in order to access the i18nBundle and get your
translated texts from there.`]}),`
`,n(e.p,{children:"The hook has the following signature:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-ts",children:`const i18nBundle = useI18nBundle(messageBundleId: string): I18nBundle;
`})}),`
`,t(e.p,{children:["The ",n(e.code,{children:"i18nBundle"})," is offering one public method ",n(e.code,{children:"getText"})," which accepts a string as first parameter, followed by optional replacement parameters for your translation."]}),`
`,n(e.p,{children:n(e.strong,{children:"Example:"})}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`const MyTranslatedTextComponent = () => {
  const i18nBundle = useI18nBundle('myApp');

  return (
    <div>
      <span>{i18nBundle.getText('PLEASE_WAIT')}</span>
      <p>{i18nBundle.getText('ANOTHER_TEXT_TO_TRANSLATE')}</p>
    </div>
  );
};
`})}),`
`,n(e.p,{children:n(e.strong,{children:"4. Use texts with placeholder values"})}),`
`,t(e.p,{children:["You can pass multiple additional values to ",n(e.code,{children:"getText"}),` for texts with placeholders.
In this case, the first parameter is the translation key, followed by an arbitrary number of parameters which should be inserted into the translation.`]}),`
`,n(e.p,{children:n(e.strong,{children:"Example:"})}),`
`,n(e.p,{children:"You have this text in your message bundle:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-properties",children:`CAROUSEL_DOT_TEXT=Item {0} of {1} displayed
`})}),`
`,n(e.p,{children:"Your hook call would now look like this:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`const i18nBundle = useI18nBundle('myApp');
const carouselText = i18nBundle.getText('CAROUSEL_DOT_TEXT', 5, 20);
`})}),`
`,t(e.p,{children:["This would resolve to this text:",n("br",{}),`
`,n(e.code,{children:"Item 5 of 20 displayed"})]}),`
`,n(e.h2,{id:"codesandbox-example",children:"CodeSandbox example"}),`
`,n(e.p,{children:"Here you can find a basic example that uses the internal translations and also implements custom translations:"}),`
`,n(e.p,{children:n(e.a,{href:"https://codesandbox.io/s/wcr-i18n-example-74fgbm?fontsize=14&hidenavigation=1&theme=dark",target:"_blank",rel:"nofollow noopener noreferrer",children:n(e.img,{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit wcr-i18n-example"})})}),`
`,n(h,{})]})}}export{ye as default};
//# sourceMappingURL=Internationalization-e35dde59.js.map
