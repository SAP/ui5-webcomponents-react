import{M as a,C as l,f as u,b as d}from"./chunk-HLWAVYOI-poeFCzC6.js";import{I as t}from"./index-856BdxOC.js";import"./employee-MVCfoSat.js";import{b as h}from"./DomRefTable.module-LCEQ8y72.js";import{D as b}from"./DocsHeader-jzc3ed6M.js";import{F as w}from"./Footer-f8lMphd1.js";import{j as o}from"./jsx-runtime-DtaoT6pD.js";import"./index-OjgoNOWw.js";import{u as p}from"./index-RwE9nQVW.js";import"./iframe-zUd6EfWe.js";import"../sb-preview/runtime.js";import"./react-18-1WT2dSvK.js";import"./index-QYh6idnL.js";import"./_baseForOwn-UZJwRxDU.js";import"./mapValues-HzTlT2lF.js";import"./_baseUniq-JVyScZ-n.js";import"./index-PPLHz8o0.js";import"./index-UBYxvHMA.js";import"./Icon-Js7kozs_.js";import"./UI5Element-4kitL615.js";import"./i18nBundle-h5yKZf-0.js";import"./VersionInfo-yX_RFFR1.js";import"./CustomElementsScopeUtils-icazltFf.js";import"./withWebComponent-y_2h_qsG.js";import"./utils-jDGQm03y.js";import"./useIsomorphicLayoutEffect-s31TYDr7.js";import"./Icons-4dOk8XAM.js";import"./react-jss.esm-tmBtHfec.js";import"./index-HTRhRExZ.js";import"./slot-HSrR9XJ-.js";import"./decline-G6ZpYmOu.js";import"./i18n-defaults-CPLPRuO1.js";import"./information-8_EqQaO_.js";import"./alert-HOiYa7NP.js";import"./class-map-aNJl42Aw.js";import"./Button-pPgusm5x.js";import"./AriaLabelHelper-RbKlVwzD.js";import"./MarkedEvents-aYv14vsS.js";import"./i18n-defaults-9rb3FZ03.js";import"./index-z_kNdanE.js";import"./clsx-Zbgk8kpT.js";import"./i18n-defaults-EHbh3l3V.js";import"./I18nContext-VUOpdMoH.js";import"./ThemingParameters-UghqSl-x.js";import"./index-DWXxr99t.js";import"./ModalsContext-0q87fkkd.js";import"./CssSizeVariables-loCRUewX.js";import"./CustomVariables-jcpx1a4M.js";import"./GlobalStyleClasses-kWTEndz_.js";import"./addCustomCSSWithScoping-kI6DTjO7.js";import"./index-WylNBspF.js";import"./Integer-kog98579.js";import"./index-BV4XF5zv.js";import"./Avatar-ilP4dNAW.js";import"./ResizeHandler-_S6lmbp5.js";import"./index-r2OKd-mH.js";import"./index-iOXkcq6E.js";import"./Link-GTmnzkaf.js";import"./WrappingType-avPrqc94.js";import"./index-W62_3BtY.js";import"./TableOfContent-SZOIrrK8.js";import"./index-ogy0GIB4.js";import"./Label-HOoOa3vg.js";import"./index-1ychbQQo.js";import"./index-hzq5KzU9.js";import"./Popover-7MGo300E.js";import"./PopupUtils-9DzRw33t.js";import"./getActiveElement-IIKAy3xo.js";import"./PopupsCommon.css-kmG9UuxN.js";import"./FocusableElements-eRJsgpvJ.js";import"./isElementHidden-d3-Fo4V6.js";import"./MediaRange-sEMt71Ve.js";import"./style-map-cRo_ADDP.js";import"./BrowserScrollbar.css-IWLYYIFQ.js";const g=`## Usage

1\\. **Get familiar with the icons collections.**  
Before displaying an icon, you need to explore the icons collections to find and import the desired icon.  
Currently there are 3 icons collection, available as 3 npm packages:

- <ui5-link target="_blank" href="https://www.npmjs.com/package/@ui5/webcomponents-icons">@ui5/webcomponents-icons</ui5-link> represents the "SAP-icons" collection and includes the following <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons">icons</ui5-link>.
- <ui5-link target="_blank" href="https://www.npmjs.com/package/@ui5/webcomponents-icons-tnt">@ui5/webcomponents-icons-tnt</ui5-link> represents the "tnt" collection and includes the following <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons-TNT">icons</ui5-link>.
- <ui5-link target="_blank" href="https://www.npmjs.com/package/@ui5/webcomponents-icons-business-suite">@ui5/webcomponents-icons-icons-business-suite</ui5-link> represents the "business-suite" collection and includes the following <ui5-link target="_blank" href="https://ui5.sap.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/BusinessSuiteInAppSymbols">icons</ui5-link>.

2\\. **After exploring the icons collections, add one or more of the packages as dependencies to your project.**  
\`npm i @ui5/webcomponents-icons\`  
\`npm i @ui5/webcomponents-icons-tnt\`  
\`npm i @ui5/webcomponents-icons-business-suite\`

3\\. **Then, import the desired icon**.  
\`import "@ui5/{package_name}/dist/{icon_name}.js";\`

**For Example**:  
For the standard "SAP-icons" icon collection, import an icon from the \`@ui5/webcomponents-icons\` package:  
\`import "@ui5/webcomponents-icons/dist/employee.js";\`

For the "tnt" (SAP Fiori Tools) icon collection, import an icon from the \`@ui5/webcomponents-icons-tnt\` package:  
\`import "@ui5/webcomponents-icons-tnt/dist/antenna.js";\`

For the "business-suite" (SAP Business Suite) icon collection, import an icon from the \`@ui5/webcomponents-icons-business-suite\` package:  
\`import "@ui5/webcomponents-icons-business-suite/dist/ab-testing.js";\`

4\\. **Display the icon using the \`Icon\` web component.**  
Set the icon collection ("SAP-icons", "tnt" or "business-suite" - "SAP-icons" is the default icon collection and can be skipped)  
and the icon name to the \`name\` property.

\`<Icon name="employee"></Icon>\`  
\`<Icon name="tnt/antenna"></Icon>\`  
\`<Icon name="business-suite/ab-testing"></Icon>\`

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The \`Icon\` exposes the following CSS Shadow Parts:

- root - Used to style the outermost wrapper of the \`Icon\`

## Keyboard Handling

- \\[SPACE, ENTER, RETURN\\] - Fires the \`click\` event if the \`interactive\` property is set to true.
- \\[SHIFT\\] - If \\[SPACE\\] or \\[ENTER\\],\\[RETURN\\] is pressed, pressing \\[SHIFT\\] releases the Icon without triggering the click event.
`;function f(e={}){const{wrapper:i}=Object.assign({},p(),e.components);return i?o.jsx(i,{...e,children:o.jsx(s,{})}):s();function s(){const r=Object.assign({h2:"h2"},p(),e.components);return o.jsxs(o.Fragment,{children:[o.jsx(a,{title:"Data Display / Icon",component:t,args:{name:"employee"}}),`
`,o.jsx(b,{}),`
`,o.jsx("br",{}),`
`,o.jsx(r.h2,{id:"example",children:"Example"}),`
`,o.jsx(l,{children:o.jsx(u,{name:"Default",children:c=>o.jsx(t,{...c})})}),`
`,o.jsx(r.h2,{id:"properties",children:"Properties"}),`
`,o.jsx(h,{story:"Default"}),`
`,o.jsx(d,{children:g}),`
`,o.jsx(w,{})]})}}const m=e=>o.jsx(t,{...e});m.storyName="Default";m.parameters={storySource:{source:`args => {
  return <Icon {...args} />;
}`}};const n={title:"Data Display / Icon",component:t,args:{name:"employee"},tags:["stories-mdx"],includeStories:["defaultStory"]};n.parameters=n.parameters||{};n.parameters.docs={...n.parameters.docs||{},page:f};const Bo=["defaultStory"];export{Bo as __namedExportsOrder,n as default,m as defaultStory};
