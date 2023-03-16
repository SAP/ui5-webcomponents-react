import{a as t,F as p,j as n}from"./jsx-runtime-670450c2.js";import"./DomRefTable.module-bc862f8f.js";import{M as f}from"./chunk-PCJTTTQV-b0cc9f0f.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./index-f1f749bf.js";import"./Import-dc90fd8a.js";import{T as g}from"./TableOfContent-1a9517f1.js";import{F as w}from"./Footer-7633878f.js";import{M as d}from"./index-8c3492f9.js";import{u as h}from"./index-4fb8b842.js";import{L as y}from"./index-cac2b592.js";import"./react-jss.esm-e54d2f1d.js";import"./inheritsLoose-93e09647.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-17b9c670.js";import"../sb-preview/runtime.mjs";import"./react-18-ecd79c7b.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./index-96c5f47c.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-8ba7ce6e.js";import"./clsx.m-1229b3e0.js";import"./index-47dedd52.js";import"./Label-ccc234fe.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-65cd39a0.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./Device-208919c6.js";import"./WrappingType-b81e595a.js";import"./class-map-95320e87.js";import"./index-51d46439.js";import"./Popover-224d761a.js";import"./slot-634e3e91.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-9873a291.js";import"./Icon-7987c836.js";import"./Icons-fe6e657a.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./AriaLabelHelper-43a261ec.js";import"./BrowserScrollbar.css-1da6d0d2.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-cae0a379.js";import"./decline-6bd98a2e.js";import"./i18n-defaults-80781f7e.js";import"./information-b6c8ed8e.js";import"./Button-bc3a11a1.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-254d6b69.js";import"./Link-018547e8.js";const m={"0.8.0":"0.4.0","0.9.0":"0.4.0","0.11.0":"0.4.0","0.12.0":"0.4.0","1.0.0-rc.1":"0.4.0","1.0.0-rc.2":"0.4.0","1.0.0-rc.5":"0.7.0","1.0.0-rc.6":"0.9.0","1.0.0-rc.7":"0.9.0","1.0.0-rc.8":"0.10.0","1.0.0-rc.9":"0.11.0","1.0.0-rc.10":"0.12.0","1.0.0-rc.11":"0.13.0","1.0.0-rc.12":"0.14.0","1.0.0-rc.13":"0.15.0","1.0.0-rc.14":"0.17.0","1.0.0-rc.15":"0.18.0","1.0.0-rc.16":"0.20.0","1.0.0":"0.20.0","1.1.0":"0.21.0","1.2.0":"0.22.0","1.3.0":"0.23.0","1.4.0":"0.25.0","1.5.0":"0.26.0","1.6.0":"0.27.0","1.7.1":"1.0.1","1.8.0":"1.1.0","1.9.0":"1.3.0","1.9.3":"1.7.0","1.10.3":"1.8.0","1.11.0":"1.10.0"},l=Object.values(m);function v(){return t(p,{children:[t(d,{hideCloseButton:!0,children:["In order to allow patching releases of UI5 Web Components by yourself, ",n("code",{children:"@ui5/webcomponents"})," and  ",n("code",{children:"@ui5/webcomponents-fiori"})," are peer dependencies of ",n("code",{children:"@ui5/webcomponents-react"}),". The following table gives an overview of the required peer dependencies per version:"]}),t("table",{children:[n("thead",{children:t("tr",{children:[t("th",{children:[n("code",{children:"@ui5/webcomponents-react"})," version"]}),t("th",{children:[n("code",{children:"@ui5/webcomponents"})," & ",n("code",{children:"@ui5/webcomponents-fiori"})," version"]})]})}),n("tbody",{children:Object.entries(m).map(([r,o])=>{if(o.startsWith("0"))return null;const i=l.findIndex(c=>c===o),e=l[i+1],u=parseInt(o.split(".")[0]),b=parseInt(o.split(".")[1]),s=[`~${o}`];if(e){let c=parseInt(e.split(".")[1]);for(let a=b+1;a<c;a++)s.push(`~${u}.${a}.0`)}return t("tr",{children:[n("td",{children:s.join(", ")}),t("td",{children:["~",r]})]},o)})})]})]})}function je(r={}){const{wrapper:o}=Object.assign({},h(),r.components);return o?n(o,Object.assign({},r,{children:n(i,{})})):i();function i(){const e=Object.assign({h1:"h1",p:"p",a:"a",img:"img",h2:"h2",ul:"ul",li:"li",strong:"strong",h3:"h3",h4:"h4",code:"code",pre:"pre"},h(),r.components);return t(p,{children:[n(f,{title:"Getting Started"}),`
`,n(e.h1,{children:"UI5 Web Components for React"}),`
`,t(e.p,{children:[n(e.a,{href:"https://github.com/SAP/ui5-webcomponents-react/actions?query=workflow:%22build%22",children:n(e.img,{src:"https://github.com/SAP/ui5-webcomponents-react/workflows/build/badge.svg",alt:""})}),`
`,n(e.a,{href:"https://coveralls.io/github/SAP/ui5-web",children:n(e.img,{src:"https://coveralls.io/repos/github/SAP/ui5-webcomponents-react/badge.svg",alt:""})}),`
`,n(e.a,{href:"https://ui5-slack-invite.cfapps.eu10.hana.ondemand.com/",children:n(e.img,{src:"https://badgen.net/badge/slack/Join%20OpenUI5%20Slack%20workspace/blue?icon=slack",alt:""})}),`
`,n(e.a,{href:"https://openui5.slack.com/archives/CSQEJ2J04",children:n(e.img,{src:"https://badgen.net/badge/slack/webcomponents-react/orange?icon=slack",alt:""})}),`
`,n(e.a,{href:"https://github.com/prettier/prettier",children:n(e.img,{src:"https://badgen.net/badge/code%20style/prettier?color=pink",alt:""})}),`
`,n(e.a,{href:"https://lernajs.io/",children:n(e.img,{src:"https://badgen.net/badge/maintained%20with/lerna?color=purple",alt:""})}),`
`,n(e.a,{href:"https://github.com/SAP/ui5-webcomponents-react/stargazers",children:n(e.img,{src:"https://badgen.net/github/stars/SAP/ui5-webcomponents-react?icon=github&color=black",alt:""})})]}),`
`,n(e.p,{children:n(e.a,{href:"https://github.com/SAP/ui5-webcomponents-react",children:"Open Github Project"})}),`
`,n(e.p,{children:`UI5 Web Components for React is a Fiori compliant React library built on top of the UI5 Web Components.
With the help of UI5 Web Components for React, you can use UI5 Web Components as if they were native React components.
In addition to that, UI5 Web Components for React is providing complex components and layouts on top of the UI5 Web Components.`}),`
`,n(g,{}),`
`,n(e.h2,{children:"Requirements"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[n(e.a,{href:"https://www.npmjs.com/package/react",children:"React"})," and ",n(e.a,{href:"https://www.npmjs.com/package/react-dom",children:"React-DOM"})," (",n(e.strong,{children:"16.14.0 or higher"}),")"]}),`
`,t(e.li,{children:[n(e.a,{href:"https://nodejs.org/",children:"Node.js"})," (",n(e.strong,{children:"version 14 or higher"})," ⚠️)"]}),`
`]}),`
`,n(e.h2,{children:"Getting Started"}),`
`,n(e.h3,{children:"Tutorial"}),`
`,t(e.p,{children:["You are new to UI5 Web Components for React and don't know where to start?",n("br",{}),`
Then take a look at our `,n(e.a,{href:"https://developers.sap.com/mission.react-spa.html",children:"Tutorial Mission"}),` at “SAP Developers”!
There you get a first glimpse at how easy it is to create an Application with UI5 Web Components for React.`,n("br",{}),`
In about an hour you will create a business dashboard from scratch and get familiar with some React basics in case you don't know them already.`]}),`
`,n(e.h3,{children:"Templates"}),`
`,n("br",{}),`
`,n(e.h4,{children:"Basic Template"}),`
`,t(e.p,{children:["You can create a new React app by using ",n(e.a,{href:"https://facebook.github.io/create-react-app/",children:"create-react-app"}),` with our template.
This template is installing all required dependencies for you and is setting up the `,n(e.code,{children:"App.js"})," file for you:"]}),`
`,n(e.pre,{children:n(e.code,{className:"language-sh",children:`npx create-react-app my-app --template @ui5/webcomponents-react
`})}),`
`,n(e.h4,{children:"Advanced Template"}),`
`,t(e.p,{children:["You can create a new React app by using ",n(e.a,{href:"https://facebook.github.io/create-react-app/",children:"create-react-app"}),` based on our seed.
This template delivers several out-of-the-box components, scripts and configurations.
For more info, check the `,n(e.a,{href:"https://github.com/SAP/ui5-webcomponents-react/tree/main/packages/cra-template-seed",children:"seed documentation"}),"."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-sh",children:`npx create-react-app my-app --template @ui5/webcomponents-react-seed
npm run start
`})}),`
`,n(e.h4,{children:"Community Templates"}),`
`,t(e.p,{children:[`Our community is starting to create templates for UI5 Web Components for React as well! 🎉
You can find the templates in a dedicated `,n(e.a,{href:"https://github.com/ui5-web-components-templates",children:"ui5-web-components-templates"})," organization.",n("br",{}),`
A huge "Thank You" goes to `,n(e.a,{href:"https://github.com/afuscella",children:"@afuscella"})," for kicking this off!"]}),`
`,t(e.h3,{children:["Add ",n(e.code,{children:"@ui5/webcomponents-react"})," to an existing app"]}),`
`,t(e.p,{children:["First of all, you need to add the ",n(e.code,{children:"@ui5/webcomponents-react"})," dependency to your project. Please also keep in mind installing the required peer dependencies:"]}),`
`,n(e.pre,{children:n(e.code,{className:"language-sh",children:`npm install @ui5/webcomponents @ui5/webcomponents-react @ui5/webcomponents-fiori
`})}),`
`,n(v,{}),`
`,t(e.p,{children:["In order to use ",n(e.code,{children:"@ui5/webcomponents-react"})," you have to wrap your application's root component into the ",n(e.code,{children:"ThemeProvider"}),".",n("br",{}),`
You will find this component most likely in `,n(e.code,{children:"src/index.js"}),":"]}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`import { ThemeProvider } from '@ui5/webcomponents-react';
...
const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
`})}),`
`,t(e.p,{children:["Then you are ready to use ",n(e.code,{children:"@ui5/webcomponents-react"})," and you can import the desired component(s) in your app:",n("br",{}),`
For example, to use the `,n(e.code,{children:"Button"})," component you need to import it:"]}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`import { Button } from '@ui5/webcomponents-react'; // loads ui5-button wrapped in a ui5-webcomponents-react component
`})}),`
`,n(e.p,{children:"Then, you can use the Button in your app:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-jsx",children:`<Button onClick={() => alert('Hello World!')}>Hello world!</Button>
`})}),`
`,n(e.h3,{children:"Theming"}),`
`,t(e.p,{children:["UI5 Web Components and UI5 Web Components for React are both coming with the ",n(e.code,{children:"sap_fiori_3"})," a.k.a. ",n(e.code,{children:"Quartz"})," and ",n(e.code,{children:"sap_horizon"})," Theme families built in."]}),`
`,n(d,{hideCloseButton:!0,children:t(p,{children:[" UI5 Web Components for React uses the theme configuration of UI5 Web Components. Please also have a look at their"," ",n(y,{href:"https://sap.github.io/ui5-webcomponents/playground/advanced/configuration/#theme",children:"documentation"}),"."]})}),`
`,n(e.p,{children:"In case you want to change your applications' theme, you have to import a couple of modules:"}),`
`,n(e.pre,{children:n(e.code,{className:"language-js",children:`import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme';
import '@ui5/webcomponents-react/dist/Assets';
`})}),`
`,t(e.p,{children:["You can now change the Theme by calling ",n(e.code,{children:"setTheme"})," with a string parameter of the new theme.",n("br",{}),`
Available Themes:`]}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[`
`,t(e.p,{children:[n(e.code,{children:"sap_fiori_3"})," (default)"]}),`
`]}),`
`,t(e.li,{children:[`
`,n(e.p,{children:n(e.code,{children:"sap_fiori_dark"})}),`
`]}),`
`,t(e.li,{children:[`
`,n(e.p,{children:n(e.code,{children:"sap_belize"})}),`
`]}),`
`,t(e.li,{children:[`
`,n(e.p,{children:n(e.code,{children:"sap_belize_hcb"})}),`
`]}),`
`,t(e.li,{children:[`
`,n(e.p,{children:n(e.code,{children:"sap_belize_hcw"})}),`
`]}),`
`,t(e.li,{children:[`
`,n(e.p,{children:n(e.code,{children:"sap_horizon"})}),`
`]}),`
`,t(e.li,{children:[`
`,n(e.p,{children:n(e.code,{children:"sap_horizon_dark"})}),`
`]}),`
`,t(e.li,{children:[`
`,n(e.p,{children:n(e.code,{children:"sap_horizon_hcb"})}),`
`]}),`
`,t(e.li,{children:[`
`,n(e.p,{children:n(e.code,{children:"sap_horizon_hcw"})}),`
`]}),`
`]}),`
`,n(e.h3,{children:"Configure Compact/Cozy setting"}),`
`,t(e.p,{children:["UI5 Web Components supports ",n(e.code,{children:"Compact"})," and ",n(e.code,{children:"Cozy"})," mode. It is set to ",n(e.code,{children:"Cozy"})," by default. To enable ",n(e.code,{children:"Compact"}),", provide the css class ",n(e.code,{children:"ui5-content-density-compact"})," to any of your HTML elements and it apply compact size to all of its children."]}),`
`,n(e.pre,{children:n(e.code,{className:"language-html",children:`<body class="ui5-content-density-compact">
  ...
</body>
`})}),`
`,n(e.h3,{children:"TypeScript"}),`
`,t(e.p,{children:["UI5 Web Components for React supports ",n(e.a,{href:"https://www.typescriptlang.org/",children:"TypeScript"}),", therefore we also provide type interfaces for event parameters, public methods of ",n(e.code,{children:"ui5-webcomponents"}),", and more."]}),`
`,t(e.p,{children:["You can find all available interfaces of the main package ",n(e.a,{href:"https://github.com/SAP/ui5-webcomponents-react/tree/main/packages/main/src/interfaces",children:"here"})," and for charts ",n(e.a,{href:"https://github.com/SAP/ui5-webcomponents-react/tree/main/packages/charts/src/interfaces",children:"here"}),"."]}),`
`,n("br",{}),`
`,t(e.p,{children:["Example - ",n(e.code,{children:"Popover"})," with ",n(e.code,{children:"Ref"})," type declaration:"]}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`import React, { MouseEvent, useRef } from 'react';
import { ThemeProvider, Button, Popover, PopoverDomRef } from '@ui5/webcomponents-react';

export default function App() {
  const popoverRef = useRef<PopoverDomRef>(null);
  const onClick = (e: MouseEvent<HTMLElement, MouseEvent>) => {
    popoverRef.current?.showAt(e.target);
  };

  return (
    <ThemeProvider>
      <Button onClick={onClick}>Open Popover</Button>
      <Popover ref={popoverRef}>Content</Popover>
    </ThemeProvider>
  );
}
`})}),`
`,n(e.h3,{children:"Feature Registration"}),`
`,t(e.p,{children:[n(e.code,{children:"@ui5/webcomponents"})," offers a variety of ",n(e.a,{href:"https://sap.github.io/ui5-webcomponents/playground/getting-started/using-features/",children:"feature (side-effect) imports"})," that are available with ",n(e.code,{children:"@ui5/webcomponents-react"}),` as well.
To use them you have to make sure they are imported before any other imports!`]}),`
`,n(e.h3,{children:"Support"}),`
`,t(e.p,{children:["Feel free to open issues or ask us directly in the ",n(e.a,{href:"https://openui5.slack.com/archives/CSQEJ2J04",children:n(e.code,{children:"#webcomponents-react"})}),` channel in the
`,n(e.a,{href:"https://ui5-slack-invite.cfapps.eu10.hana.ondemand.com/",children:"OpenUI5 Community Slack"}),".",n("br",{}),`
Please note that you have to join this slack workspace via `,n(e.a,{href:"https://ui5-slack-invite.cfapps.eu10.hana.ondemand.com/",children:"this link"})," if you are not part of it already."]}),`
`,n(w,{})]})}}export{je as default};
//# sourceMappingURL=Welcome-16cb097b.js.map
