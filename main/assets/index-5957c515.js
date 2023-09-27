import{_ as t}from"./iframe-8bbfbf88.js";import{I as o}from"./Icon-4b8e6c3e.js";import{w as a}from"./withWebComponent-40b4b429.js";const e=a("ui5-icon",["accessibleName","accessibleRole","design","name"],["interactive","showTooltip"],[],[],()=>t(()=>import("./Icon-4b8e6c3e.js").then(n=>n.b),["./Icon-4b8e6c3e.js","./UI5Element-fe43d284.js","./CustomElementsScopeUtils-7e643eaa.js","./withWebComponent-40b4b429.js","./utils-64df43e3.js","./index-f1f2c4b1.js","./jsx-runtime-d079401a.js","./useIsomorphicLayoutEffect-c49de97d.js","./Icons-1d0bcfc0.js"],import.meta.url));e.displayName="Icon";e.defaultProps={design:o.Default};try{e.displayName="Icon",e.__docgenInfo={description:`The \`Icon\` component represents an SVG icon. There are two main scenarios how the \`Icon\` component is used: as a purely decorative element,
or as an interactive element that can be focused and clicked.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Icon)`,displayName:"Icon",props:{accessibleName:{defaultValue:null,description:`Defines the text alternative of the component. If not provided a default text alternative will be set, if present.

**Note:** Every icon should have a text alternative in order to calculate its accessible name.`,name:"accessibleName",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:null,description:"Defines the accessibility role of the component.",name:"accessibleRole",required:!1,type:{name:"string"}},design:{defaultValue:{value:"IconDesign.Default"},description:"Defines the component semantic design.\n\n**The available values are:**\n\n*   `Contrast`\n*   `Critical`\n*   `Default`\n*   `Information`\n*   `Negative`\n*   `Neutral`\n*   `NonInteractive`\n*   `Positive`",name:"design",required:!1,type:{name:"enum",value:[{value:'"Critical"'},{value:'"Neutral"'},{value:'"Default"'},{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Contrast"'},{value:'"Critical"'},{value:'"Default"'},{value:'"Information"'},{value:'"Negative"'},{value:'"Neutral"'},{value:'"NonInteractive"'},{value:'"Positive"'},{value:'"Contrast"'},{value:'"NonInteractive"'}]}},interactive:{defaultValue:null,description:"Defines if the icon is interactive (focusable and pressable)",name:"interactive",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:`Defines the unique identifier (icon name) of the component.
To browse all available icons, see the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">SAP Icons</ui5-link>, <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons-TNT">SAP Fiori Tools</ui5-link> and <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">SAP Business Suite</ui5-link> collections.
Example:
\`name='add'\`, \`name='delete'\`, \`name='employee'\`.

**Note:** To use the SAP Fiori Tools icons, you need to set the \`tnt\` prefix in front of the icon's name.
Example:
\`name='tnt/antenna'\`, \`name='tnt/actor'\`, \`name='tnt/api'\`.

**Note:** To use the SAP Business Suite icons, you need to set the \`business-suite\` prefix in front of the icon's name.
Example:
\`name='business-suite/3d'\`, \`name='business-suite/1x2-grid-layout'\`, \`name='business-suite/4x4-grid-layout'\`.`,name:"name",required:!1,type:{name:"string"}},showTooltip:{defaultValue:null,description:"Defines whether the component should have a tooltip.\n\n**Note:** The tooltip text should be provided via the `accessible-name` property.",name:"showTooltip",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as I};
//# sourceMappingURL=index-5957c515.js.map
