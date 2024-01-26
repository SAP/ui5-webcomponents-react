import{_ as t}from"./iframe-u04uoXTu.js";import{I as o}from"./Icon-r6t1Zphl.js";import{w as a}from"./withWebComponent-22JjwLkL.js";const e=a("ui5-icon",["accessibleName","accessibleRole","design","name"],["interactive","showTooltip"],[],[],()=>t(()=>import("./Icon-r6t1Zphl.js").then(n=>n.b),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url));e.displayName="Icon";e.defaultProps={design:o.Default};try{e.displayName="Icon",e.__docgenInfo={description:`The \`Icon\` component represents an SVG icon. There are two main scenarios how the \`Icon\` component is used: as a purely decorative element,
or as an interactive element that can be focused and clicked.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Icon)`,displayName:"Icon",props:{accessibleName:{defaultValue:null,description:`Defines the text alternative of the component. If not provided a default text alternative will be set, if present.

**Note:** Every icon should have a text alternative in order to calculate its accessible name.`,name:"accessibleName",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:null,description:"Defines the accessibility role of the component.",name:"accessibleRole",required:!1,type:{name:"string"}},design:{defaultValue:{value:"IconDesign.Default"},description:"Defines the component semantic design.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"Neutral"'},{value:'"Contrast"'},{value:'"Critical"'},{value:'"Default"'},{value:'"Information"'},{value:'"Negative"'},{value:'"Neutral"'},{value:'"NonInteractive"'},{value:'"Positive"'},{value:'"Contrast"'},{value:'"Default"'},{value:'"NonInteractive"'}]}},interactive:{defaultValue:null,description:"Defines if the icon is interactive (focusable and pressable)",name:"interactive",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:`Defines the unique identifier (icon name) of the component.
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
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Icon-r6t1Zphl.js","./UI5Element-kBA_KQxG.js","./i18nBundle-7ihWi2Lo.js","./VersionInfo-quO5DfnC.js","./CustomElementsScopeUtils-QKoQ990a.js","./withWebComponent-22JjwLkL.js","./utils-3rf7SAGj.js","./index-OjgoNOWw.js","./jsx-runtime-DtaoT6pD.js","./useIsomorphicLayoutEffect-s31TYDr7.js","./Icons-jRef6OLh.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
