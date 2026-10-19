import{n as e}from"./rolldown-runtime-C0FnF6B9.js";import{n as t}from"./Icon-xsFI9tdw.js";import{n,t as r}from"./withWebComponent-CQvqGaAL.js";var i;function a(){return(a=e((()=>{t(),r(),i=n(`ui5-icon`,[`accessibleName`,`design`,`mode`,`name`],[`showTooltip`],[`fontIcon`],[`click`]),i.displayName=`Icon`;try{i.displayName=`Icon`,i.__docgenInfo={description:`The \`Icon\` component represents an SVG icon.
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
- [@ui5/webcomponents-icons-business-suite](https://www.npmjs.com/package/@ui5/webcomponents-icons-business-suite) represents the "business-suite" collection and includes the following
[icons](https://ui5.sap.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/BusinessSuiteInAppSymbols).

2. **After exploring the icons collections, add one or more of the packages as dependencies to your project.**

\`npm i`,displayName:`Icon`,filePath:`/home/runner/work/webcomponents-react/webcomponents-react/packages/main/dist/webComponents/Icon/index.d.ts`,methods:[],props:{fontIcon:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Icon/index.d.ts`,name:`IconPropTypes`}],description:`Defines the font icon to be used as an icon.
Intended for font-based icon libraries where
the application loads the font and provides a slotted element with the unicode character.
When this slot is used, the component renders a \`<span>\` instead of an \`<svg>\`.
Accessibility is fully delegated to the application — set \`accessible-name\` and \`mode\` explicitly.

**Note:** To control the glyph size, set \`font-size\` on the \`Icon\` host element.

**Example:**
\`\`\`html
<Icon mode="Image" accessible-name="Home">
  <i class="fa fa-home" slot="fontIcon"></i>
</Icon>
\`\`\`

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="fontIcon"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://ui5.github.io/webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v2.23.0](https://github.com/UI5/webcomponents/releases/tag/v2.23.0) of **@ui5/webcomponents**.

__Supported Node Type/s:__ \`Array<HTMLElement>\``,name:`fontIcon`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Icon/index.d.ts`,name:`IconPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`UI5WCSlotsNode`,value:[{value:`bigint`},{value:`false`},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`Promise<AwaitedReactNode>`,description:`Represents the completion of an asynchronous operation`,fullComment:`Represents the completion of an asynchronous operation`,tags:{}},{value:`Iterable<ReducedReactNode>`,description:``,fullComment:``,tags:{}},{value:`ReactElement<unknown, string | JSXElementConstructor<any>>`,description:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.`,fullComment:`Represents a JSX element.

Where {@link ReactNode} represents everything that can be rendered, \`ReactElement\`
only represents JSX.
@template P The type of the props object
@template T The type of the component or tag
@example \`\`\`tsx
const element: ReactElement = <div />;
\`\`\``,tags:{template:`P The type of the props object
T The type of the component or tag`,example:"```tsx\nconst element: ReactElement = <div />;\n```"}},{value:`InternalUI5WCSlotsNode[]`,description:``,fullComment:``,tags:{}}]}},onClick:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Icon/index.d.ts`,name:`IconPropTypes`}],description:`Fired when the component is activated by mouse/touch, keyboard (Enter or Space),
or screen reader virtual cursor activation.

**Note:** The event will not be fired if the \`mode\` property is set to \`Decorative\` or \`Image\`.

**Note:** Available since [v2.11.0](https://github.com/UI5/webcomponents/releases/tag/v2.11.0) of **@ui5/webcomponents**.

| cancelable | bubbles |
| :--------: | :-----: |
| ❌|✅|`,name:`onClick`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Icon/index.d.ts`,name:`IconPropTypes`},required:!1,tags:{},type:{name:`(event: Ui5CustomEvent<IconDomRef, never>) => void`}},accessibleName:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Icon/index.d.ts`,name:`IconAttributes`}],description:`Defines the text alternative of the component.
If not provided a default text alternative will be set, if present.

**Note:** Every icon should have a text alternative in order to
calculate its accessible name.`,name:`accessibleName`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Icon/index.d.ts`,name:`IconAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},design:{defaultValue:{value:`"Default"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Icon/index.d.ts`,name:`IconAttributes`}],description:`Defines the component semantic design.

**Note:** Available since [v1.9.2](https://github.com/UI5/webcomponents/releases/tag/v1.9.2) of **@ui5/webcomponents**.`,name:`design`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Icon/index.d.ts`,name:`IconAttributes`},required:!1,tags:{default:`"Default"`},type:{name:`enum`,raw:`"Critical" | "Neutral" | "Default" | "Positive" | "Negative" | "Information" | IconDesign | "Contrast" | "NonInteractive"`,value:[{value:`"Critical"`},{value:`"Neutral"`},{value:`"Default"`},{value:`"Positive"`},{value:`"Negative"`},{value:`"Information"`},{value:`"Contrast"`,description:`Contrast design`,fullComment:`Contrast design
@public`,tags:{public:``}},{value:`"Critical"`,description:`Critical design`,fullComment:`Critical design
@public`,tags:{public:``}},{value:`"Default"`,description:`Default design (brand design)`,fullComment:`Default design (brand design)
@public`,tags:{public:``}},{value:`"Information"`,description:`info type`,fullComment:`info type
@public`,tags:{public:``}},{value:`"Negative"`,description:`Negative design`,fullComment:`Negative design
@public`,tags:{public:``}},{value:`"Neutral"`,description:`Neutral design`,fullComment:`Neutral design
@public`,tags:{public:``}},{value:`"NonInteractive"`,description:`Design that indicates an icon which isn't interactive`,fullComment:`Design that indicates an icon which isn't interactive
@public`,tags:{public:``}},{value:`"Positive"`,description:`Positive design`,fullComment:`Positive design
@public`,tags:{public:``}},{value:`"Contrast"`},{value:`"NonInteractive"`}]}},mode:{defaultValue:{value:`"Decorative"`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Icon/index.d.ts`,name:`IconAttributes`}],description:`Defines the mode of the component.

**Note:** Available since [v2.0.0](https://github.com/UI5/webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:`mode`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Icon/index.d.ts`,name:`IconAttributes`},required:!1,tags:{default:`"Decorative"`},type:{name:`enum`,raw:`"Interactive" | IconMode | "Image" | "Decorative"`,value:[{value:`"Interactive"`},{value:`"Image"`,description:`Image mode (by default).
Configures the component to internally render role="img".`,fullComment:`Image mode (by default).
Configures the component to internally render role="img".
@public`,tags:{public:``}},{value:`"Decorative"`,description:`Decorative mode.
Configures the component to internally render role="presentation" and aria-hidden="true",
making it purely decorative without semantic content or interactivity.`,fullComment:`Decorative mode.
Configures the component to internally render role="presentation" and aria-hidden="true",
making it purely decorative without semantic content or interactivity.
@public`,tags:{public:``}},{value:`"Interactive"`,description:`Interactive mode.
Configures the component to internally render role="button".
This mode also supports focus and press handling to enhance interactivity.`,fullComment:`Interactive mode.
Configures the component to internally render role="button".
This mode also supports focus and press handling to enhance interactivity.
@public`,tags:{public:``}},{value:`"Image"`},{value:`"Decorative"`}]}},name:{defaultValue:{value:`undefined`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Icon/index.d.ts`,name:`IconAttributes`}],description:"Defines the unique identifier (icon name) of the component.\n\nTo browse all available icons, see the\n[SAP Icons](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html),\n[SAP Fiori Tools](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html#/overview/SAP-icons-TNT) and\n[SAP Business Suite](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html)\n\nExample:\n`name='add'`, `name='delete'`, `name='employee'`.\n\n**Note:** To use the SAP Fiori Tools icons,\nyou need to set the `tnt` prefix in front of the icon's name.\n\nExample:\n`name='tnt/antenna'`, `name='tnt/actor'`, `name='tnt/api'`.\n\n**Note:** To use the SAP Business Suite icons,\nyou need to set the `business-suite` prefix in front of the icon's name.\n\nExample:\n`name='business-suite/3d'`, `name='business-suite/1x2-grid-layout'`, `name='business-suite/4x4-grid-layout'`.",name:`name`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Icon/index.d.ts`,name:`IconAttributes`},required:!1,tags:{default:`undefined`},type:{name:`string`}},showTooltip:{defaultValue:{value:`false`},declarations:[{fileName:`webcomponents-react/packages/main/dist/webComponents/Icon/index.d.ts`,name:`IconAttributes`}],description:`Defines whether the component should have a tooltip.

**Note:** The tooltip text should be provided via the \`accessible-name\` property.`,name:`showTooltip`,parent:{fileName:`webcomponents-react/packages/main/dist/webComponents/Icon/index.d.ts`,name:`IconAttributes`},required:!1,tags:{default:`false`},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}},className:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:`className`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`string`}},style:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`}],description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:`style`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/types/CommonProps.d.ts`,name:`CommonProps`},required:!1,tags:{},type:{name:`CSSProperties`}},waitForDefine:{defaultValue:null,declarations:[{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`}],description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:`waitForDefine`,parent:{fileName:`webcomponents-react/packages/base/dist/internal/wrapper/withWebComponent.d.ts`,name:`WithWebComponentPropTypes`},required:!1,tags:{},type:{name:`enum`,raw:`boolean`,value:[{value:`false`},{value:`true`}]}}},tags:{ui5:`/webcomponents-icons\`
\`npm i @ui5/webcomponents-icons-tnt\`
\`npm i @ui5/webcomponents-icons-business-suite\`

3. **Then, import the desired icon**.

\`import "@ui5/\\{package_name\\}/dist/\\{icon_name\\}.js";\`

**For Example**:

For the standard "SAP-icons" icon collection, import an icon from the \`@ui5/webcomponents-icons\` package:

\`import "@ui5/webcomponents-icons/dist/employee.js";\`

For the "tnt" (SAP Fiori Tools) icon collection, import an icon from the \`@ui5/webcomponents-icons-tnt\` package:

\`import "@ui5/webcomponents-icons-tnt/dist/antenna.js";\`

For the "business-suite" (SAP Business Suite) icon collection, import an icon from the \`@ui5/webcomponents-icons-business-suite\` package:

\`import "@ui5/webcomponents-icons-business-suite/dist/ab-testing.js";\`

4. **Display the icon using the \`Icon\` web component.**
Set the icon collection ("SAP-icons", "tnt" or "business-suite" - "SAP-icons" is the default icon collection and can be skipped)
and the icon name to the \`name\` property.

\`<Icon name="employee"></Icon>\`
\`<Icon name="tnt/antenna"></Icon>\`
\`<Icon name="business-suite/ab-testing"></Icon>\`

### Keyboard Handling

- [Space] / [Enter] or [Return] - Fires the \`click\` event if the \`mode\` property is set to \`Interactive\`.



__Note:__ This is a UI5 Web Component! [Icon UI5 Web Component Documentation](https://ui5.github.io/webcomponents/components/Icon) | [Repository](https://github.com/UI5/webcomponents)`}}}catch{}})))()}export{a as n,i as t};