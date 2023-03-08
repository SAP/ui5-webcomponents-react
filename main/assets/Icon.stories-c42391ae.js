import{M as m,C as l,j as u,a as d}from"./index-88c0059d.js";import{I as t}from"./index-00edee50.js";import"./employee-98ce1b38.js";import{A as h}from"./DomRefTable.module-4b0de817.js";import{D as b}from"./DocsHeader-bf907adc.js";import{F as k}from"./Footer-42e52445.js";import{j as n,a as g,F as w}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{u as c}from"./index-4fb8b842.js";import"./iframe-a3c79c03.js";import"../sb-preview/runtime.mjs";import"./index-d475d2ea.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./index-96c5f47c.js";import"./_commonjsHelpers-042e6b4d.js";import"./inheritsLoose-93e09647.js";import"./_baseForOwn-c7d9bea5.js";import"./mapValues-2de54f78.js";import"./_getPrototype-bd05e126.js";import"./_baseUniq-51545746.js";import"./index-356e4a49.js";import"./index-61436d32.js";import"./Button-e27d9549.js";import"./UI5Element-427ec721.js";import"./CustomElementsScopeUtils-137da8c8.js";import"./withWebComponent-e4481254.js";import"./utils-ed90fb1b.js";import"./useIsomorphicLayoutEffect-a838da4a.js";import"./MarkedEvents-8627ed01.js";import"./AriaLabelHelper-c82262ef.js";import"./Keys-3acbae73.js";import"./Device-208919c6.js";import"./Icons-7b82f601.js";import"./chunk-QDOP3WTA-dad20212.js";import"./react-18-2bb9dade.js";import"./chunk-R4NKYYJA-96bb58e6.js";import"./react-jss.esm-fe4dc3ff.js";import"./index-b098efa4.js";import"./decline-0a03b0b0.js";import"./class-map-5d8e4b2b.js";import"./index-1d945bd3.js";import"./clsx.m-1229b3e0.js";import"./index-c7ba7a71.js";import"./ThemingParameters-f4b4144e.js";import"./Import-470fad02.js";import"./TableOfContent-b91641be.js";import"./index-7905948b.js";import"./WrappingType-b81e595a.js";import"./index-dc6110c4.js";import"./Label-040efebd.js";import"./Footer.module-c4f3b823.js";import"./index-8f1f3821.js";import"./Popover-cbbb060d.js";import"./Integer-d9976c13.js";import"./PopupsCommon.css-ab0735c6.js";import"./FocusableElements-c2f39514.js";import"./ResizeHandler-1fa8a094.js";import"./MediaRange-25b98f31.js";import"./style-map-77d201d2.js";const f=`## Usage

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
*   \\[SHIFT\\] - If \\[SPACE\\] or \\[ENTER\\],\\[RETURN\\] is pressed, pressing \\[SHIFT\\] releases the Icon without triggering the click event.`;function y(e={}){const{wrapper:i}=Object.assign({},c(),e.components);return i?n(i,{...e,children:n(s,{})}):s();function s(){const r=Object.assign({h2:"h2"},c(),e.components);return g(w,{children:[n(m,{title:"Data Display / Icon",component:t,args:{name:"employee"}}),`
`,n(b,{}),`
`,n("br",{}),`
`,n(r.h2,{children:"Example"}),`
`,n(l,{children:n(u,{name:"Default",children:a=>n(t,{...a})})}),`
`,n(r.h2,{children:"Properties"}),`
`,n(h,{story:"Default"}),`
`,n(d,{children:f}),`
`,n(k,{})]})}}const p=e=>n(t,{...e});p.storyName="Default";p.parameters={storySource:{source:`args => {
  return <Icon {...args} />;
}`}};const o={title:"Data Display / Icon",component:t,args:{name:"employee"},tags:["stories-mdx"],includeStories:["defaultStory"]};o.parameters=o.parameters||{};o.parameters.docs={...o.parameters.docs||{},page:y};const En=["defaultStory"];export{En as __namedExportsOrder,o as default,p as defaultStory};
//# sourceMappingURL=Icon.stories-c42391ae.js.map
