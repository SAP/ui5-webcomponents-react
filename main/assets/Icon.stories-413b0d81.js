import{M as m,C as l,f as u,a as d}from"./chunk-PCJTTTQV-4ae10e69.js";import{I as t}from"./index-40a3e75e.js";import"./employee-0153a597.js";import{d as h}from"./DomRefTable.module-a2b6f51f.js";import{D as b}from"./DocsHeader-63d4f368.js";import{F as k}from"./Footer-e9e07b55.js";import{j as n}from"./jsx-runtime-ccada58e.js";import"./index-f1f749bf.js";import{u as p}from"./index-4fb8b842.js";import"./iframe-4723bbc5.js";import"../sb-preview/runtime.mjs";import"./react-18-718b9f73.js";import"./mapValues-2de54f78.js";import"./_baseForOwn-c7d9bea5.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-96c5f47c.js";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./inheritsLoose-93e09647.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./Icon-b04dccd7.js";import"./UI5Element-e8adceda.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-791919b7.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./Icons-5b18f7d2.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-2e28eff7.js";import"./index-0998c6eb.js";import"./slot-76e48863.js";import"./decline-7cb41e3a.js";import"./i18n-defaults-80781f7e.js";import"./information-2c502181.js";import"./class-map-dc0989fc.js";import"./Button-08c55dbf.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-254d6b69.js";import"./index-9bb0c7b4.js";import"./clsx.m-1229b3e0.js";import"./index-334d9c45.js";import"./ThemingParameters-f4b4144e.js";import"./Import-cbc02a31.js";import"./TableOfContent-c5f2387f.js";import"./index-3aa6c6b1.js";import"./Link-756c9448.js";import"./WrappingType-b81e595a.js";import"./index-be37d3aa.js";import"./Label-0e5fa470.js";import"./index-51c5b0ca.js";import"./Popover-a5930009.js";import"./Integer-f7f172c9.js";import"./PopupUtils-6ec841a6.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-4412d83b.js";import"./FocusableElements-5012f8d0.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-0dbd5acf.js";import"./ResizeHandler-9d370fcd.js";import"./MediaRange-25b98f31.js";import"./style-map-d22cbf2f.js";const g=`## Usage

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
}`}};const o={title:"Data Display / Icon",component:t,args:{name:"employee"},tags:["stories-mdx"],includeStories:["defaultStory"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:w};const Pn=["defaultStory"];export{Pn as __namedExportsOrder,o as default,c as defaultStory};
//# sourceMappingURL=Icon.stories-413b0d81.js.map
