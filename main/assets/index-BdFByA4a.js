const __vite__fileDeps=["./Icon-Clr9g2fS.js","./UI5Element-C4mSOhNA.js","./Boot-Biwz_Caq.js","./EventProvider-B3ZIXKWe.js","./ManagedStyles-DBz9b8_7.js","./index-Cu9bd8lq.js","./CustomElementsScopeUtils-48ratPWk.js","./withWebComponent-C_dYwLuv.js","./utils--_sL0meP.js","./useIsomorphicLayoutEffect-CDseMwwv.js","./event-CegLCnR0.js","./Icons-DjI__-3J.js","./i18nBundle-Dr6PGakp.js","./Keys-BgUkNma0.js","./parameters-bundle.css-DjgCrOcY.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as t}from"./iframe-BTzs4m4E.js";import"./Icon-Clr9g2fS.js";import{w as o}from"./withWebComponent-C_dYwLuv.js";const e=o("ui5-icon",["accessibleName","accessibleRole","design","name"],["interactive","showTooltip"],[],[],()=>t(()=>import("./Icon-Clr9g2fS.js").then(n=>n.a),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]),import.meta.url));e.displayName="Icon";try{e.displayName="Icon",e.__docgenInfo={description:`The \`Icon\` component represents an SVG icon.
There are two main scenarios how the \`Icon\` component is used:
as a purely decorative element,
or as an interactive element that can be focused and clicked.

### Usage

1. **Get familiar with the icons collections.**

Before displaying an icon, you need to explore the icons collections to find and import the desired icon.

Currently there are 3 icons collection, available as 3 npm packages:

- [@ui5/webcomponents-icons](https://www.npmjs.com/package/@ui5/webcomponents-icons) represents the "SAP-icons" collection and includes the following
[icons](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons).
- [@ui5/webcomponents-icons-tnt](https://www.npmjs.com/package/@ui5/webcomponents-icons-tnt) represents the "tnt" collection and includes the following
[icons](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons-TNT).
- [@ui5/webcomponents-icons-icons-business-suite](https://www.npmjs.com/package/@ui5/webcomponents-icons-business-suite) represents the "business-suite" collection and includes the following
[icons](https://ui5.sap.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/BusinessSuiteInAppSymbols).

2. **After exploring the icons collections, add one or more of the packages as dependencies to your project.**

\`npm i`,displayName:"Icon",props:{accessibleName:{defaultValue:null,description:`Defines the text alternative of the component.
If not provided a default text alternative will be set, if present.

**Note:** Every icon should have a text alternative in order to
calculate its accessible name.`,name:"accessibleName",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:null,description:`Defines the accessibility role of the component.

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"string"}},design:{defaultValue:{value:'"Default"'},description:`Defines the component semantic design.

**Note:** Available since [v1.9.2](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.9.2) of **@ui5/webcomponents**.`,name:"design",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"Neutral"'},{value:'"Default"'},{value:'"Contrast"'},{value:'"Critical"'},{value:'"Default"'},{value:'"Information"'},{value:'"Negative"'},{value:'"Neutral"'},{value:'"NonInteractive"'},{value:'"Positive"'},{value:'"Contrast"'},{value:'"NonInteractive"'}]}},interactive:{defaultValue:{value:"false"},description:"Defines if the icon is interactive (focusable and pressable)",name:"interactive",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Defines the unique identifier (icon name) of the component.\n\nTo browse all available icons, see the\n[SAP Icons](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html),\n[SAP Fiori Tools](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons-TNT) and\n[SAP Business Suite](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html)\n\nExample:\n`name='add'`, `name='delete'`, `name='employee'`.\n\n**Note:** To use the SAP Fiori Tools icons,\nyou need to set the `tnt` prefix in front of the icon's name.\n\nExample:\n`name='tnt/antenna'`, `name='tnt/actor'`, `name='tnt/api'`.\n\n**Note:** To use the SAP Business Suite icons,\nyou need to set the `business-suite` prefix in front of the icon's name.\n\nExample:\n`name='business-suite/3d'`, `name='business-suite/1x2-grid-layout'`, `name='business-suite/4x4-grid-layout'`.",name:"name",required:!1,type:{name:"string"}},showTooltip:{defaultValue:{value:"false"},description:"Defines whether the component should have a tooltip.\n\n**Note:** The tooltip text should be provided via the `accessible-name` property.",name:"showTooltip",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{e.displayName="Icon",e.__docgenInfo={description:`The \`Icon\` component represents an SVG icon.
There are two main scenarios how the \`Icon\` component is used:
as a purely decorative element,
or as an interactive element that can be focused and clicked.

### Usage

1. **Get familiar with the icons collections.**

Before displaying an icon, you need to explore the icons collections to find and import the desired icon.

Currently there are 3 icons collection, available as 3 npm packages:

- [@ui5/webcomponents-icons](https://www.npmjs.com/package/@ui5/webcomponents-icons) represents the "SAP-icons" collection and includes the following
[icons](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons).
- [@ui5/webcomponents-icons-tnt](https://www.npmjs.com/package/@ui5/webcomponents-icons-tnt) represents the "tnt" collection and includes the following
[icons](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons-TNT).
- [@ui5/webcomponents-icons-icons-business-suite](https://www.npmjs.com/package/@ui5/webcomponents-icons-business-suite) represents the "business-suite" collection and includes the following
[icons](https://ui5.sap.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/BusinessSuiteInAppSymbols).

2. **After exploring the icons collections, add one or more of the packages as dependencies to your project.**

\`npm i`,displayName:"Icon",props:{accessibleName:{defaultValue:null,description:`Defines the text alternative of the component.
If not provided a default text alternative will be set, if present.

**Note:** Every icon should have a text alternative in order to
calculate its accessible name.`,name:"accessibleName",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:null,description:`Defines the accessibility role of the component.

**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"string"}},design:{defaultValue:{value:'"Default"'},description:`Defines the component semantic design.

**Note:** Available since [v1.9.2](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.9.2) of **@ui5/webcomponents**.`,name:"design",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"Neutral"'},{value:'"Default"'},{value:'"Contrast"'},{value:'"Critical"'},{value:'"Default"'},{value:'"Information"'},{value:'"Negative"'},{value:'"Neutral"'},{value:'"NonInteractive"'},{value:'"Positive"'},{value:'"Contrast"'},{value:'"NonInteractive"'}]}},interactive:{defaultValue:{value:"false"},description:"Defines if the icon is interactive (focusable and pressable)",name:"interactive",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"Defines the unique identifier (icon name) of the component.\n\nTo browse all available icons, see the\n[SAP Icons](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html),\n[SAP Fiori Tools](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons-TNT) and\n[SAP Business Suite](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html)\n\nExample:\n`name='add'`, `name='delete'`, `name='employee'`.\n\n**Note:** To use the SAP Fiori Tools icons,\nyou need to set the `tnt` prefix in front of the icon's name.\n\nExample:\n`name='tnt/antenna'`, `name='tnt/actor'`, `name='tnt/api'`.\n\n**Note:** To use the SAP Business Suite icons,\nyou need to set the `business-suite` prefix in front of the icon's name.\n\nExample:\n`name='business-suite/3d'`, `name='business-suite/1x2-grid-layout'`, `name='business-suite/4x4-grid-layout'`.",name:"name",required:!1,type:{name:"string"}},showTooltip:{defaultValue:{value:"false"},description:"Defines whether the component should have a tooltip.\n\n**Note:** The tooltip text should be provided via the `accessible-name` property.",name:"showTooltip",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as I};
