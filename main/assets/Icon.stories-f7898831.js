import{M as m,C as l,f as u,a as d}from"./chunk-PCJTTTQV-31ae8e4c.js";import{I as t}from"./index-b0b94480.js";import"./employee-0153a597.js";import{d as h}from"./DomRefTable.module-b85fee91.js";import{D as b}from"./DocsHeader-e044bad4.js";import{F as k}from"./Footer-3b2bf5d1.js";import{j as n}from"./jsx-runtime-b5ed1ca8.js";import"./index-64f120e9.js";import{u as p}from"./index-de4e61b4.js";import"./iframe-c1d752a3.js";import"../sb-preview/runtime.mjs";import"./react-18-1e96cd1b.js";import"./mapValues-30a52a16.js";import"./_baseForOwn-931ad773.js";import"./index-7bf58b0a.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-e1b46df2.js";import"./_baseUniq-5a3eb61c.js";import"./index-356e4a49.js";import"./Icon-46afc304.js";import"./UI5Element-e8adceda.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-d0e572fe.js";import"./utils-d29e59c7.js";import"./useIsomorphicLayoutEffect-4a8db993.js";import"./Icons-5b18f7d2.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-a429ae4e.js";import"./index-f8e6345f.js";import"./slot-76e48863.js";import"./decline-7cb41e3a.js";import"./i18n-defaults-80781f7e.js";import"./information-2c502181.js";import"./class-map-fc32fe45.js";import"./Button-3c41aad1.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./index-dc2ff79d.js";import"./clsx.m-1229b3e0.js";import"./index-d460da36.js";import"./ThemingParameters-f4b4144e.js";import"./Import-91a145b5.js";import"./TableOfContent-a2770df8.js";import"./index-c20b6a1a.js";import"./Link-20aa90b6.js";import"./WrappingType-b81e595a.js";import"./index-ffa295b2.js";import"./Label-51e2d33c.js";import"./index-4009fdee.js";import"./Popover-f0a3f494.js";import"./Integer-f7f172c9.js";import"./PopupUtils-6ec841a6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-2a26d007.js";import"./FocusableElements-5012f8d0.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-e40faf20.js";import"./ResizeHandler-9d370fcd.js";import"./MediaRange-25b98f31.js";import"./style-map-02d033ae.js";const g=`## Usage

1\\. **Get familiar with the icons collections.**  
Before displaying an icon, you need to explore the icons collections to find and import the desired icon.  
Currently there are 3 icons collection, available as 3 npm packages:

- <ui5-link target="_blank" href="https://www.npmjs.com/package/@ui5/webcomponents-icons" class="api-table-content-cell-link">@ui5/webcomponents-icons</ui5-link> represents the "SAP-icons" collection and includes the following <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons" class="api-table-content-cell-link">icons</ui5-link>.
- <ui5-link target="_blank" href="https://www.npmjs.com/package/@ui5/webcomponents-icons-tnt" class="api-table-content-cell-link">@ui5/webcomponents-icons-tnt</ui5-link> represents the "tnt" collection and includes the following <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons-TNT" class="api-table-content-cell-link">icons</ui5-link>.
- <ui5-link target="_blank" href="https://www.npmjs.com/package/@ui5/webcomponents-icons-business-suite" class="api-table-content-cell-link">@ui5/webcomponents-icons-icons-business-suite</ui5-link> represents the "business-suite" collection and includes the following <ui5-link target="_blank" href="https://ui5.sap.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/BusinessSuiteInAppSymbols" class="api-table-content-cell-link">icons</ui5-link>.

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

## Keyboard Handling

- \\[SPACE, ENTER, RETURN\\] - Fires the \`click\` event if the \`interactive\` property is set to true.
- \\[SHIFT\\] - If \\[SPACE\\] or \\[ENTER\\],\\[RETURN\\] is pressed, pressing \\[SHIFT\\] releases the Icon without triggering the click event.
`;function w(e={}){const{wrapper:i}=Object.assign({},p(),e.components);return i?n.jsx(i,{...e,children:n.jsx(s,{})}):s();function s(){const r=Object.assign({h2:"h2"},p(),e.components);return n.jsxs(n.Fragment,{children:[n.jsx(m,{title:"Data Display / Icon",component:t,args:{name:"employee"}}),`
`,n.jsx(b,{}),`
`,n.jsx("br",{}),`
`,n.jsx(r.h2,{id:"example",children:"Example"}),`
`,n.jsx(l,{children:n.jsx(u,{name:"Default",children:a=>n.jsx(t,{...a})})}),`
`,n.jsx(r.h2,{id:"properties",children:"Properties"}),`
`,n.jsx(h,{story:"Default"}),`
`,n.jsx(d,{children:g}),`
`,n.jsx(k,{})]})}}const c=e=>n.jsx(t,{...e});c.storyName="Default";c.parameters={storySource:{source:`args => {
  return <Icon {...args} />;
}`}};const o={title:"Data Display / Icon",component:t,args:{name:"employee"},tags:["stories-mdx"],includeStories:["defaultStory"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:w};const Fn=["defaultStory"];export{Fn as __namedExportsOrder,o as default,c as defaultStory};
//# sourceMappingURL=Icon.stories-f7898831.js.map
