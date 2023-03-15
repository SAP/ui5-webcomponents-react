import{M as m,C as l,j as u,a as d}from"./index-49618b97.js";import{I as e}from"./index-d02a4daf.js";import"./employee-98ce1b38.js";import{b as h}from"./DomRefTable.module-2da7eb0a.js";import{D as b}from"./DocsHeader-3ff410d3.js";import{F as k}from"./Footer-83036597.js";import{j as n,a as g,F as w}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{u as p}from"./index-4fb8b842.js";import"./iframe-a99cb4e5.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./Icon-459702a7.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./event-97133b94.js";import"./Icons-7b82f601.js";import"./Keys-3acbae73.js";import"./chunk-PCJTTTQV-f0effd63.js";import"./react-18-2bb9dade.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-e54d2f1d.js";import"./index-879476fc.js";import"./slot-634e3e91.js";import"./decline-f2b294b3.js";import"./i18n-defaults-80781f7e.js";import"./information-50e1ad0f.js";import"./class-map-5d8e4b2b.js";import"./Button-04bad9a0.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./Device-208919c6.js";import"./i18n-defaults-d66b3d5e.js";import"./index-026b5b0e.js";import"./clsx.m-1229b3e0.js";import"./index-2eaff221.js";import"./ThemingParameters-f4b4144e.js";import"./Import-ab6f8cb5.js";import"./TableOfContent-fe8f4dae.js";import"./index-421a7837.js";import"./Link-6d546ee9.js";import"./WrappingType-b81e595a.js";import"./index-2a30bde4.js";import"./Label-040efebd.js";import"./Footer.module-f90cad7d.js";import"./index-57d61853.js";import"./Popover-907d427e.js";import"./Integer-f7f172c9.js";import"./PopupUtils-a2e37749.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-7d9fbba1.js";import"./FocusableElements-7e25663e.js";import"./isElementHidden-01c07146.js";import"./BrowserScrollbar.css-615afd63.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";const f=`## Usage

1\\. **Get familiar with the icons collections.**  
Before displaying an icon, you need to explore the icons collections to find and import the desired icon.  
Currently there are 3 icons collection, available as 3 npm packages:  

*   <ui5-link target="_blank" href="https://www.npmjs.com/package/@ui5/webcomponents-icons" class="api-table-content-cell-link">@ui5/webcomponents-icons</ui5-link> represents the "SAP-icons" collection and includes the following <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons" class="api-table-content-cell-link">icons</ui5-link>.
*   <ui5-link target="_blank" href="https://www.npmjs.com/package/@ui5/webcomponents-icons-tnt" class="api-table-content-cell-link">@ui5/webcomponents-icons-tnt</ui5-link> represents the "tnt" collection and includes the following <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons-TNT" class="api-table-content-cell-link">icons</ui5-link>.
*   <ui5-link target="_blank" href="https://www.npmjs.com/package/@ui5/webcomponents-icons-business-suite" class="api-table-content-cell-link">@ui5/webcomponents-icons-icons-business-suite</ui5-link> represents the "business-suite" collection and includes the following <ui5-link target="_blank" href="https://ui5.sap.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/BusinessSuiteInAppSymbols" class="api-table-content-cell-link">icons</ui5-link>.

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

*   \\[SPACE, ENTER, RETURN\\] - Fires the \`click\` event if the \`interactive\` property is set to true.
*   \\[SHIFT\\] - If \\[SPACE\\] or \\[ENTER\\],\\[RETURN\\] is pressed, pressing \\[SHIFT\\] releases the Icon without triggering the click event.`;function y(t={}){const{wrapper:i}=Object.assign({},p(),t.components);return i?n(i,{...t,children:n(s,{})}):s();function s(){const r=Object.assign({h2:"h2"},p(),t.components);return g(w,{children:[n(m,{title:"Data Display / Icon",component:e,args:{name:"employee"}}),`
`,n(b,{}),`
`,n("br",{}),`
`,n(r.h2,{children:"Example"}),`
`,n(l,{children:n(u,{name:"Default",children:a=>n(e,{...a})})}),`
`,n(r.h2,{children:"Properties"}),`
`,n(h,{story:"Default"}),`
`,n(d,{children:f}),`
`,n(k,{})]})}}const c=t=>n(e,{...t});c.storyName="Default";c.parameters={storySource:{source:`args => {
  return <Icon {...args} />;
}`}};const o={title:"Data Display / Icon",component:e,args:{name:"employee"},tags:["stories-mdx"],includeStories:["defaultStory"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:y};const Bn=["defaultStory"];export{Bn as __namedExportsOrder,o as default,c as defaultStory};
//# sourceMappingURL=Icon.stories-e37a02a7.js.map
