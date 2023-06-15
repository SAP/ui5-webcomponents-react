import{_ as t}from"./iframe-e0c5cf8c.js";import{a}from"./Icon-1927e688.js";import{w as o}from"./withWebComponent-7b9bd1ee.js";const e=o("ui5-icon",["accessibleName","accessibleRole","design","name"],["interactive","showTooltip"],[],[],()=>t(()=>import("./Icon-1927e688.js").then(n=>n.b),["./Icon-1927e688.js","./UI5Element-2e105c8a.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-7b9bd1ee.js","./utils-69f7a0e0.js","./index-ebeaab24.js","./jsx-runtime-5926aa06.js","./useIsomorphicLayoutEffect-38a48652.js","./Icons-fe8ad928.js"],import.meta.url));e.displayName="Icon";e.defaultProps={design:a.Default};try{e.displayName="Icon",e.__docgenInfo={description:`The \`Icon\` component represents an SVG icon. There are two main scenarios how the \`Icon\` component is used: as a purely decorative element,
or as an interactive element that can be focused and clicked.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Icon" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"Icon",props:{accessibleName:{defaultValue:null,description:`Defines the text alternative of the component. If not provided a default text alternative will be set, if present.

**Note:** Every icon should have a text alternative in order to calculate its accessible name.`,name:"accessibleName",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:null,description:"Defines the accessibility role of the component.",name:"accessibleRole",required:!1,type:{name:"string"}},design:{defaultValue:{value:"IconDesign.Default"},description:"Defines the component semantic design.\n\n**The available values are:**\n\n*   `Contrast`\n*   `Critical`\n*   `Default`\n*   `Information`\n*   `Negative`\n*   `Neutral`\n*   `NonInteractive`\n*   `Positive`",name:"design",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"Neutral"'},{value:'"Contrast"'},{value:'"Critical"'},{value:'"Default"'},{value:'"Information"'},{value:'"Negative"'},{value:'"Neutral"'},{value:'"NonInteractive"'},{value:'"Positive"'},{value:'"Contrast"'},{value:'"Default"'},{value:'"NonInteractive"'}]}},interactive:{defaultValue:null,description:"Defines if the icon is interactive (focusable and pressable)",name:"interactive",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:`Defines the unique identifier (icon name) of the component.
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
//# sourceMappingURL=index-428a1762.js.map
