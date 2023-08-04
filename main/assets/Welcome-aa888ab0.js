import{j as e}from"./jsx-runtime-d079401a.js";import"./DomRefTable.module-9ac685dd.js";import{M as f}from"./chunk-S4VUQJ4A-6d08802c.js";import"./index-f1f2c4b1.js";import{T as b}from"./TableOfContent-e6df56ea.js";import{F as g}from"./Footer-f0a2f6c4.js";import{M as c}from"./index-2786978f.js";import{u as p}from"./index-59d6410c.js";import{L as w}from"./index-21666864.js";import"./react-jss.esm-c310038c.js";import"./inheritsLoose-93e09647.js";import"./index-47d0a85a.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-d9b40dee.js";import"./UI5Element-a4bd3d38.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./utils-626dc1bf.js";import"./index-bd8ef6b5.js";import"./iframe-ceb089af.js";import"../sb-preview/runtime.js";import"./withWebComponent-7d7e5133.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./slot-76e48863.js";import"./Icon-42236945.js";import"./Icons-74c917eb.js";import"./Device-6afa24d0.js";import"./Integer-f7f172c9.js";import"./class-map-0ab40ab9.js";import"./i18n-defaults-d5d083dd.js";import"./index-5d1777b8.js";import"./Avatar-6c09069b.js";import"./ResizeHandler-0af4416f.js";import"./employee-05c578de.js";import"./index-10018b27.js";import"./AriaLabelHelper-43a261ec.js";import"./Link-498d09c2.js";import"./MarkedEvents-b83081e9.js";import"./WrappingType-b81e595a.js";import"./index-92d824d3.js";import"./index-c74c9f7f.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./index-56b3d57c.js";import"./index-1bad2803.js";import"./Label-287c3220.js";import"./index-567a4a93.js";import"./Button-02dfef34.js";import"./index-cd3d12ab.js";import"./Popover-26ef4370.js";import"./PopupsCommon.css-f12c9479.js";import"./FocusableElements-66623361.js";import"./isElementHidden-01c07146.js";import"./decline-3cb804de.js";import"./i18n-defaults-2d2bf0b6.js";import"./MediaRange-25b98f31.js";import"./style-map-132a30d8.js";import"./BrowserScrollbar.css-309143b9.js";import"./information-dbbb1c9a.js";const d={"0.8.0":"0.4.0","0.9.0":"0.4.0","0.11.0":"0.4.0","0.12.0":"0.4.0","1.0.0-rc.1":"0.4.0","1.0.0-rc.2":"0.4.0","1.0.0-rc.5":"0.7.0","1.0.0-rc.6":"0.9.0","1.0.0-rc.7":"0.9.0","1.0.0-rc.8":"0.10.0","1.0.0-rc.9":"0.11.0","1.0.0-rc.10":"0.12.0","1.0.0-rc.11":"0.13.0","1.0.0-rc.12":"0.14.0","1.0.0-rc.13":"0.15.0","1.0.0-rc.14":"0.17.0","1.0.0-rc.15":"0.18.0","1.0.0-rc.16":"0.20.0","1.0.0":"0.20.0","1.1.0":"0.21.0","1.2.0":"0.22.0","1.3.0":"0.23.0","1.4.0":"0.25.0","1.5.0":"0.26.0","1.6.0":"0.27.0","1.7.1":"1.0.1","1.8.0":"1.1.0","1.9.0":"1.3.0","1.9.3":"1.7.0","1.10.3":"1.8.0","1.11.0":"1.10.0","1.12.0":"1.13.0","1.13.0":"1.15.0","1.14.0":"1.16.0","1.15.0":"1.17.0","1.16.0":"1.18.0"},h=Object.values(d);function y(){return e.jsxs(e.Fragment,{children:[e.jsxs(c,{hideCloseButton:!0,children:["In order to allow patching releases of UI5 Web Components by yourself, ",e.jsx("code",{children:"@ui5/webcomponents"})," and  ",e.jsx("code",{children:"@ui5/webcomponents-fiori"})," are peer dependencies of ",e.jsx("code",{children:"@ui5/webcomponents-react"}),". The following table gives an overview of the required peer dependencies per version:"]}),e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsxs("th",{children:[e.jsx("code",{children:"@ui5/webcomponents-react"})," version"]}),e.jsxs("th",{children:[e.jsx("code",{children:"@ui5/webcomponents"})," & ",e.jsx("code",{children:"@ui5/webcomponents-fiori"})," version"]})]})}),e.jsx("tbody",{children:Object.entries(d).map(([r,o],t,n)=>{const m=t+1===n.length;if(o.startsWith("0"))return null;const u=h.findIndex(s=>s===o),a=h[u+1],j=parseInt(o.split(".")[0]),x=parseInt(o.split(".")[1]),l=[`~${o}`];if(a){let s=parseInt(a.split(".")[1]);for(let i=x+1;i<s;i++)l.push(`~${j}.${i}.0`)}return e.jsxs("tr",{children:[e.jsxs("td",{children:[m?">= ":"",l.join(", ")]}),e.jsxs("td",{children:["~",r]})]},o)})})]})]})}function Ae(r={}){const{wrapper:o}=Object.assign({},p(),r.components);return o?e.jsx(o,Object.assign({},r,{children:e.jsx(t,{})})):t();function t(){const n=Object.assign({h1:"h1",p:"p",a:"a",img:"img",h2:"h2",ul:"ul",li:"li",strong:"strong",h3:"h3",code:"code",pre:"pre",h4:"h4"},p(),r.components);return e.jsxs(e.Fragment,{children:[e.jsx(f,{title:"Getting Started"}),`
`,e.jsx(n.h1,{id:"ui5-web-components-for-react",children:"UI5 Web Components for React"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.a,{href:"https://github.com/SAP/ui5-webcomponents-react/actions?query=workflow:%22build%22",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx(n.img,{src:"https://github.com/SAP/ui5-webcomponents-react/workflows/build/badge.svg",alt:""})}),`
`,e.jsx(n.a,{href:"https://coveralls.io/github/SAP/ui5-web",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx(n.img,{src:"https://coveralls.io/repos/github/SAP/ui5-webcomponents-react/badge.svg",alt:""})}),`
`,e.jsx(n.a,{href:"https://ui5-slack-invite.cfapps.eu10.hana.ondemand.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx(n.img,{src:"https://badgen.net/badge/slack/Join%20OpenUI5%20Slack%20workspace/blue?icon=slack",alt:""})}),`
`,e.jsx(n.a,{href:"https://openui5.slack.com/archives/CSQEJ2J04",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx(n.img,{src:"https://badgen.net/badge/slack/webcomponents-react/orange?icon=slack",alt:""})}),`
`,e.jsx(n.a,{href:"https://github.com/prettier/prettier",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx(n.img,{src:"https://badgen.net/badge/code%20style/prettier?color=pink",alt:""})}),`
`,e.jsx(n.a,{href:"https://lernajs.io/",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx(n.img,{src:"https://badgen.net/badge/maintained%20with/lerna?color=purple",alt:""})}),`
`,e.jsx(n.a,{href:"https://github.com/SAP/ui5-webcomponents-react/stargazers",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx(n.img,{src:"https://badgen.net/github/stars/SAP/ui5-webcomponents-react?icon=github&color=black",alt:""})})]}),`
`,e.jsx(n.p,{children:e.jsx(n.a,{href:"https://github.com/SAP/ui5-webcomponents-react",target:"_blank",rel:"nofollow noopener noreferrer",children:"Open Github Project"})}),`
`,e.jsx(n.p,{children:`UI5 Web Components for React is a Fiori compliant React library built on top of the UI5 Web Components.
With the help of UI5 Web Components for React, you can use UI5 Web Components as if they were native React components.
In addition to that, UI5 Web Components for React is providing complex components and layouts on top of the UI5 Web Components.`}),`
`,e.jsx(b,{}),`
`,e.jsx(n.h2,{id:"requirements",children:"Requirements"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://www.npmjs.com/package/react",target:"_blank",rel:"nofollow noopener noreferrer",children:"React"})," and ",e.jsx(n.a,{href:"https://www.npmjs.com/package/react-dom",target:"_blank",rel:"nofollow noopener noreferrer",children:"React-DOM"})," (",e.jsx(n.strong,{children:"16.14.0 or higher"}),")"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"https://nodejs.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Node.js"})," (",e.jsx(n.strong,{children:"LTS version"}),")"]}),`
`,e.jsxs(n.li,{children:["If you're using ",e.jsx(n.a,{href:"https://www.typescriptlang.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"TypeScript"})," we recommend version ",e.jsx(n.strong,{children:"4.7"})," or later."]}),`
`]}),`
`,e.jsx(n.h2,{id:"getting-started",children:"Getting Started"}),`
`,e.jsx(n.h3,{id:"tutorial",children:"Tutorial"}),`
`,e.jsxs(n.p,{children:["You are new to UI5 Web Components for React and don't know where to start?",e.jsx("br",{}),`
Then take a look at our `,e.jsx(n.a,{href:"https://developers.sap.com/mission.react-spa.html",target:"_blank",rel:"nofollow noopener noreferrer",children:"Tutorial Mission"}),` at “SAP Developers”!
There you get a first glimpse at how easy it is to create an Application with UI5 Web Components for React.`,e.jsx("br",{}),`
In about an hour you will create a business dashboard from scratch and get familiar with some React basics in case you don't know them already.`]}),`
`,e.jsx(n.h3,{id:"templates",children:"Templates"}),`
`,e.jsxs(n.p,{children:["You can find a curated list of project templates on our ",e.jsx(n.a,{href:"?path=/docs/project-templates--docs",children:"Project Templates page"}),"."]}),`
`,e.jsxs(n.h3,{id:"add-ui5webcomponents-react-to-an-existing-app",children:["Add ",e.jsx(n.code,{children:"@ui5/webcomponents-react"})," to an existing app"]}),`
`,e.jsxs(n.p,{children:["First of all, you need to add the ",e.jsx(n.code,{children:"@ui5/webcomponents-react"})," dependency to your project. Please also keep in mind installing the required peer dependencies:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-sh",children:`npm install @ui5/webcomponents @ui5/webcomponents-react @ui5/webcomponents-fiori
`})}),`
`,e.jsx(y,{}),`
`,e.jsx(c,{hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:[" Please note that if a ",e.jsx(n.code,{children:"@ui5/webcomponents"})," or ",e.jsx(n.code,{children:"@ui5/webcomponents-fiori"})," version doesn't start with a patch-version of 0 (e.g. ",e.jsx(n.code,{children:"~1.10.3"}),"), only the specified version is supported and the previous patch-versions will most likely not work with ",e.jsx(n.code,{children:"@ui5/webcomponents-react"}),"."]})}),`
`,e.jsxs(n.p,{children:["In order to use ",e.jsx(n.code,{children:"@ui5/webcomponents-react"})," you have to wrap your application's root component into the ",e.jsx(n.code,{children:"ThemeProvider"}),".",e.jsx("br",{}),`
You will find this component most likely in `,e.jsx(n.code,{children:"src/index.js"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { ThemeProvider } from '@ui5/webcomponents-react';
...
const root = createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
`})}),`
`,e.jsxs(n.p,{children:["Then you are ready to use ",e.jsx(n.code,{children:"@ui5/webcomponents-react"})," and you can import the desired component(s) in your app:",e.jsx("br",{}),`
For example, to use the `,e.jsx(n.code,{children:"Button"})," component you need to import it:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`import { Button } from '@ui5/webcomponents-react'; // loads ui5-button wrapped in a ui5-webcomponents-react component
`})}),`
`,e.jsx(n.p,{children:"Then, you can use the Button in your app:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`<Button onClick={() => alert('Hello World!')}>Hello world!</Button>
`})}),`
`,e.jsx(n.h3,{id:"theming",children:"Theming"}),`
`,e.jsxs(n.p,{children:["UI5 Web Components and UI5 Web Components for React are both coming with the ",e.jsx(n.code,{children:"sap_fiori_3"})," a.k.a. ",e.jsx(n.code,{children:"Quartz"})," and ",e.jsx(n.code,{children:"sap_horizon"})," Theme families built in."]}),`
`,e.jsx(c,{hideCloseButton:!0,children:e.jsxs(e.Fragment,{children:[" UI5 Web Components for React uses the theme configuration of UI5 Web Components. Please also have a look at their"," ",e.jsx(w,{href:"https://sap.github.io/ui5-webcomponents/playground/?path=/docs/docs-advanced-configuration--docs#theme",children:" documentation"})," ."]})}),`
`,e.jsx(n.p,{children:"In case you want to change your applications' theme, you have to import a couple of modules:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme';
import '@ui5/webcomponents-react/dist/Assets';
`})}),`
`,e.jsxs(n.p,{children:["You can now change the Theme by calling ",e.jsx(n.code,{children:"setTheme"})," with a string parameter of the new theme.",e.jsx("br",{}),`
Available Themes:`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"sap_fiori_3"})," (default)"]}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"sap_fiori_dark"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"sap_belize"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"sap_belize_hcb"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"sap_belize_hcw"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"sap_horizon"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"sap_horizon_dark"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"sap_horizon_hcb"})}),`
`]}),`
`,e.jsxs(n.li,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.code,{children:"sap_horizon_hcw"})}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"configure-compactcozy-setting",children:"Configure Compact/Cozy setting"}),`
`,e.jsxs(n.p,{children:["UI5 Web Components supports ",e.jsx(n.code,{children:"Compact"})," and ",e.jsx(n.code,{children:"Cozy"})," mode. It is set to ",e.jsx(n.code,{children:"Cozy"})," by default. To enable ",e.jsx(n.code,{children:"Compact"}),", provide the css class ",e.jsx(n.code,{children:"ui5-content-density-compact"})," to any of your HTML elements and it apply compact size to all of its children."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<body class="ui5-content-density-compact">
  ...
</body>
`})}),`
`,e.jsx(n.h3,{id:"typescript",children:"TypeScript"}),`
`,e.jsxs(n.p,{children:["UI5 Web Components for React supports ",e.jsx(n.a,{href:"https://www.typescriptlang.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"TypeScript"}),", therefore we also provide type interfaces for event parameters, public methods of ",e.jsx(n.code,{children:"ui5-webcomponents"}),", and more."]}),`
`,e.jsxs(n.p,{children:["You can find all available interfaces of the main package ",e.jsx(n.a,{href:"https://github.com/SAP/ui5-webcomponents-react/tree/main/packages/main/src/interfaces",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"})," and for charts ",e.jsx(n.a,{href:"https://github.com/SAP/ui5-webcomponents-react/tree/main/packages/charts/src/interfaces",target:"_blank",rel:"nofollow noopener noreferrer",children:"here"}),"."]}),`
`,e.jsx(n.h4,{id:"example",children:"Example"}),`
`,e.jsx(n.p,{children:"Small app with a popover opened by clicking a button including type declarations:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React, { useState, useRef } from 'react';
import type { ButtonPropTypes, PopoverDomRef, PopoverPropTypes } from '@ui5/webcomponents-react';
import { ThemeProvider, Button, Popover } from '@ui5/webcomponents-react';

export default function App() {
  const [open, setOpen] = useState<PopoverPropTypes['open']>(false);
  const popoverRef = useRef<PopoverDomRef>(null);

  const handleClick: ButtonPropTypes['onClick'] = (e) => {
    setOpen(true);
  };
  const handleAfterClose: PopoverPropTypes['onAfterClose'] = (e) => {
    setOpen(false);
  };

  return (
    <ThemeProvider>
      <Button id="opener" onClick={handleClick}>
        Open Popover
      </Button>
      <Popover ref={popoverRef} opener="opener" open={open} onAfterClose={handleAfterClose}>
        Content
      </Popover>
    </ThemeProvider>
  );
}
`})}),`
`,e.jsx(n.h3,{id:"feature-registration",children:"Feature Registration"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"@ui5/webcomponents"})," offers a variety of ",e.jsx(n.a,{href:"https://sap.github.io/ui5-webcomponents/playground/?path=/docs/docs-getting-started-using-features",target:"_blank",rel:"nofollow noopener noreferrer",children:"feature (side-effect) imports"})," that are available with ",e.jsx(n.code,{children:"@ui5/webcomponents-react"}),` as well.
To use them you have to make sure they are imported before any other imports!`]}),`
`,e.jsx(n.h3,{id:"support",children:"Support"}),`
`,e.jsxs(n.p,{children:["Feel free to open issues or ask us directly in the ",e.jsx(n.a,{href:"https://openui5.slack.com/archives/CSQEJ2J04",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx(n.code,{children:"#webcomponents-react"})}),` channel in the
`,e.jsx(n.a,{href:"https://ui5-slack-invite.cfapps.eu10.hana.ondemand.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"OpenUI5 Community Slack"}),".",e.jsx("br",{}),`
Please note that you have to join this slack workspace via `,e.jsx(n.a,{href:"https://ui5-slack-invite.cfapps.eu10.hana.ondemand.com/",target:"_blank",rel:"nofollow noopener noreferrer",children:"this link"})," if you are not part of it already."]}),`
`,e.jsx(g,{})]})}}export{Ae as default};
//# sourceMappingURL=Welcome-aa888ab0.js.map
