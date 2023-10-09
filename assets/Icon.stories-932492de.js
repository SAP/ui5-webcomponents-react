import{M as a,C as l,e as u,b as d}from"./chunk-S4VUQJ4A-18b9dace.js";import{I as n}from"./index-836e5983.js";import"./employee-bd01b92f.js";import{A as h}from"./DomRefTable.module-48d43d66.js";import{D as b}from"./DocsHeader-f57f45a1.js";import{F as w}from"./Footer-ef3aa5f8.js";import{j as e}from"./jsx-runtime-d079401a.js";import"./index-f1f2c4b1.js";import{u as p}from"./index-59d6410c.js";import"./iframe-a4da9711.js";import"../sb-preview/runtime.js";import"./index-92d824d3.js";import"./index-c74c9f7f.js";import"./mapValues-57c90777.js";import"./_baseForOwn-2252ef3e.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./_getPrototype-73159a4c.js";import"./_baseUniq-61c59340.js";import"./index-356e4a49.js";import"./Icon-085ae741.js";import"./UI5Element-9ae3ac4a.js";import"./CustomElementsScopeUtils-a6667bf6.js";import"./withWebComponent-70ea33bf.js";import"./utils-eb830979.js";import"./useIsomorphicLayoutEffect-c49de97d.js";import"./Icons-aa504494.js";import"./react-jss.esm-2e5f50f2.js";import"./index-7ea8851a.js";import"./slot-76e48863.js";import"./decline-06bf09c2.js";import"./i18n-defaults-bdef1cce.js";import"./information-31cb56bb.js";import"./alert-f95f2d2e.js";import"./class-map-a35dc276.js";import"./Button-bda40b74.js";import"./AriaLabelHelper-43a261ec.js";import"./MarkedEvents-b83081e9.js";import"./i18n-defaults-edeeca68.js";import"./index-743fc8f1.js";import"./clsx-1229b3e0.js";import"./ThemingParameters-7e2e4e30.js";import"./addCustomCSSWithScoping-dff384db.js";import"./index-60a0e388.js";import"./Integer-f7f172c9.js";import"./index-9e291896.js";import"./Avatar-54e46144.js";import"./ResizeHandler-a1ba39c5.js";import"./index-bdfb6756.js";import"./index-bfd3bfd9.js";import"./Link-27f41eeb.js";import"./WrappingType-b81e595a.js";import"./index-12e0da73.js";import"./TableOfContent-aa34ba1a.js";import"./index-e265c25e.js";import"./Label-2351773c.js";import"./index-bc3c45f8.js";import"./index-09d66547.js";import"./Popover-f88acbeb.js";import"./PopupUtils-ebc1cf8a.js";import"./getActiveElement-bcae01ed.js";import"./PopupsCommon.css-afd5e311.js";import"./FocusableElements-ea9d71fb.js";import"./isElementHidden-01c07146.js";import"./MediaRange-25b98f31.js";import"./style-map-0570471d.js";import"./BrowserScrollbar.css-35e4e851.js";const g=`## Usage

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
`;function f(o={}){const{wrapper:i}=Object.assign({},p(),o.components);return i?e.jsx(i,{...o,children:e.jsx(s,{})}):s();function s(){const r=Object.assign({h2:"h2"},p(),o.components);return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"Data Display / Icon",component:n,args:{name:"employee"}}),`
`,e.jsx(b,{}),`
`,e.jsx("br",{}),`
`,e.jsx(r.h2,{id:"example",children:"Example"}),`
`,e.jsx(l,{children:e.jsx(u,{name:"Default",children:c=>e.jsx(n,{...c})})}),`
`,e.jsx(r.h2,{id:"properties",children:"Properties"}),`
`,e.jsx(h,{story:"Default"}),`
`,e.jsx(d,{children:g}),`
`,e.jsx(w,{})]})}}const m=o=>e.jsx(n,{...o});m.storyName="Default";m.parameters={storySource:{source:`args => {
  return <Icon {...args} />;
}`}};const t={title:"Data Display / Icon",component:n,args:{name:"employee"},tags:["stories-mdx"],includeStories:["defaultStory"]};t.parameters=t.parameters||{};t.parameters.docs={...t.parameters.docs||{},page:f};const Ce=["defaultStory"];export{Ce as __namedExportsOrder,t as default,m as defaultStory};
//# sourceMappingURL=Icon.stories-932492de.js.map
