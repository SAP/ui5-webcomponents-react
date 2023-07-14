## Usage

1\. **Get familiar with the icons collections.**  
Before displaying an icon, you need to explore the icons collections to find and import the desired icon.  
Currently there are 3 icons collection, available as 3 npm packages:

- <ui5-link target="_blank" href="https://www.npmjs.com/package/@ui5/webcomponents-icons">@ui5/webcomponents-icons</ui5-link> represents the "SAP-icons" collection and includes the following <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons">icons</ui5-link>.
- <ui5-link target="_blank" href="https://www.npmjs.com/package/@ui5/webcomponents-icons-tnt">@ui5/webcomponents-icons-tnt</ui5-link> represents the "tnt" collection and includes the following <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons-TNT">icons</ui5-link>.
- <ui5-link target="_blank" href="https://www.npmjs.com/package/@ui5/webcomponents-icons-business-suite">@ui5/webcomponents-icons-icons-business-suite</ui5-link> represents the "business-suite" collection and includes the following <ui5-link target="_blank" href="https://ui5.sap.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/BusinessSuiteInAppSymbols">icons</ui5-link>.

2\. **After exploring the icons collections, add one or more of the packages as dependencies to your project.**  
`npm i @ui5/webcomponents-icons`  
`npm i @ui5/webcomponents-icons-tnt`  
`npm i @ui5/webcomponents-icons-business-suite`

3\. **Then, import the desired icon**.  
`import "@ui5/{package_name}/dist/{icon_name}.js";`

**For Example**:  
For the standard "SAP-icons" icon collection, import an icon from the `@ui5/webcomponents-icons` package:  
`import "@ui5/webcomponents-icons/dist/employee.js";`

For the "tnt" (SAP Fiori Tools) icon collection, import an icon from the `@ui5/webcomponents-icons-tnt` package:  
`import "@ui5/webcomponents-icons-tnt/dist/antenna.js";`

For the "business-suite" (SAP Business Suite) icon collection, import an icon from the `@ui5/webcomponents-icons-business-suite` package:  
`import "@ui5/webcomponents-icons-business-suite/dist/ab-testing.js";`

4\. **Display the icon using the `Icon` web component.**  
Set the icon collection ("SAP-icons", "tnt" or "business-suite" - "SAP-icons" is the default icon collection and can be skipped)  
and the icon name to the `name` property.

`<Icon name="employee"></Icon>`  
`<Icon name="tnt/antenna"></Icon>`  
`<Icon name="business-suite/ab-testing"></Icon>`

## CSS Shadow Parts

<ui5-link target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part">CSS Shadow Parts</ui5-link> allow developers to style elements inside the Shadow DOM.  
The `Icon` exposes the following CSS Shadow Parts:

- root - Used to style the outermost wrapper of the `Icon`

## Keyboard Handling

- \[SPACE, ENTER, RETURN\] - Fires the `click` event if the `interactive` property is set to true.
- \[SHIFT\] - If \[SPACE\] or \[ENTER\],\[RETURN\] is pressed, pressing \[SHIFT\] releases the Icon without triggering the click event.
