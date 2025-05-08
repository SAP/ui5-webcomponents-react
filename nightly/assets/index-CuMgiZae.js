import"./ToolbarButton-EPSeOMC_.js";import{w as o}from"./jsx-runtime-CkEx_Gfk.js";const e=o("ui5-toolbar",["accessibleName","accessibleNameRef","alignContent","design"],[],[],[]);e.displayName="Toolbar";try{e.displayName="Toolbar",e.__docgenInfo={description:`The \`Toolbar\` component is used to create a horizontal layout with items.
The items can be overflowing in a popover, when the space is not enough to show all of them.

### Keyboard Handling
The \`Toolbar\` provides advanced keyboard handling.

- The control is not interactive, but can contain of interactive elements
- [Tab] - iterates through elements



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Toolbar",props:{children:{defaultValue:null,description:"Defines the items of the component.\n\n  **Note:** Currently only `ToolbarButton`, `ToolbarSelect`, `ToolbarSeparator` and `ToolbarSpacer` are allowed here.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the input.",name:"accessibleNameRef",required:!1,type:{name:"string"}},alignContent:{defaultValue:{value:'"End"'},description:"Indicated the direction in which the Toolbar items will be aligned.",name:"alignContent",required:!1,type:{name:"enum",value:[{value:'"Start"'},{value:'"End"'},{value:'"Start"'},{value:'"End"'}]}},design:{defaultValue:{value:'"Solid"'},description:`Defines the toolbar design.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"design",required:!1,type:{name:"enum",value:[{value:'"Transparent"'},{value:'"Solid"'},{value:'"Solid"'},{value:'"Transparent"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{e.displayName="Toolbar",e.__docgenInfo={description:`The \`Toolbar\` component is used to create a horizontal layout with items.
The items can be overflowing in a popover, when the space is not enough to show all of them.

### Keyboard Handling
The \`Toolbar\` provides advanced keyboard handling.

- The control is not interactive, but can contain of interactive elements
- [Tab] - iterates through elements



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Toolbar",props:{children:{defaultValue:null,description:"Defines the items of the component.\n\n  **Note:** Currently only `ToolbarButton`, `ToolbarSelect`, `ToolbarSeparator` and `ToolbarSpacer` are allowed here.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the input.",name:"accessibleNameRef",required:!1,type:{name:"string"}},alignContent:{defaultValue:{value:'"End"'},description:"Indicated the direction in which the Toolbar items will be aligned.",name:"alignContent",required:!1,type:{name:"enum",value:[{value:'"Start"'},{value:'"End"'},{value:'"Start"'},{value:'"End"'}]}},design:{defaultValue:{value:'"Solid"'},description:`Defines the toolbar design.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"design",required:!1,type:{name:"enum",value:[{value:'"Transparent"'},{value:'"Solid"'},{value:'"Solid"'},{value:'"Transparent"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const t=o("ui5-toolbar-button",["accessibilityAttributes","accessibleName","accessibleNameRef","design","endIcon","icon","overflowPriority","text","tooltip","width"],["disabled","preventOverflowClosing"],[],["click"]);t.displayName="ToolbarButton";try{t.displayName="ToolbarButton",t.__docgenInfo={description:`The \`ToolbarButton\` represents an abstract action,
used in the \`Toolbar\`.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ToolbarButton",props:{onClick:{defaultValue:null,description:`Fired when the component is activated either with a
mouse/tap or by using the Enter or Space key.

**Note:** The event will not be fired if the \`disabled\`
property is set to \`true\`.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<ToolbarButtonDomRef, never>) => void"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:"Defines the additional accessibility attributes that will be applied to the component.\n\nThe following fields are supported:\n\n- **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.\nAccepts the following string values: `true` or `false`\n\n- **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.\nAccepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.\n\n- **controls**: Identifies the element (or elements) whose contents or presence are controlled by the button element.\nAccepts a lowercase string value.",name:"accessibilityAttributes",required:!1,type:{name:"ButtonAccessibilityAttributes"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},design:{defaultValue:{value:'"Default"'},description:"Defines the action design.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Default"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},disabled:{defaultValue:{value:"false"},description:`Defines if the action is disabled.

**Note:** a disabled action can't be pressed or focused, and it is not in the tab chain.`,name:"disabled",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:{value:"undefined"},description:"Defines the icon, displayed as graphical element within the component after the button text.\n\n**Note:** It is highly recommended to use `endIcon` property only together with `icon` and/or `text` properties.\nUsage of `endIcon` only should be avoided.\n\nThe SAP-icons font provides numerous options.\n\nExample:\nSee all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).",name:"endIcon",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"undefined"},description:`Defines the \`icon\` source URI.

**Note:** SAP-icons font provides numerous buil-in icons. To find all the available icons, see the
[Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"icon",required:!1,type:{name:"string"}},overflowPriority:{defaultValue:{value:'"Default"'},description:`Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.`,name:"overflowPriority",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'}]}},preventOverflowClosing:{defaultValue:{value:"false"},description:`Defines if the toolbar overflow popup should close upon intereaction with the item.
It will close by default.`,name:"preventOverflowClosing",required:!1,type:{name:"boolean"}},text:{defaultValue:{value:"undefined"},description:"Button text",name:"text",required:!1,type:{name:"string"}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the tooltip of the component.

**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.`,name:"tooltip",required:!1,type:{name:"string"}},width:{defaultValue:{value:"undefined"},description:`Defines the width of the button.

**Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.`,name:"width",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{t.displayName="ToolbarButton",t.__docgenInfo={description:`The \`ToolbarButton\` represents an abstract action,
used in the \`Toolbar\`.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ToolbarButton",props:{onClick:{defaultValue:null,description:`Fired when the component is activated either with a
mouse/tap or by using the Enter or Space key.

**Note:** The event will not be fired if the \`disabled\`
property is set to \`true\`.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<ToolbarButtonDomRef, never>) => void"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:"Defines the additional accessibility attributes that will be applied to the component.\n\nThe following fields are supported:\n\n- **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.\nAccepts the following string values: `true` or `false`\n\n- **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.\nAccepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.\n\n- **controls**: Identifies the element (or elements) whose contents or presence are controlled by the button element.\nAccepts a lowercase string value.",name:"accessibilityAttributes",required:!1,type:{name:"ButtonAccessibilityAttributes"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},design:{defaultValue:{value:'"Default"'},description:"Defines the action design.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Default"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},disabled:{defaultValue:{value:"false"},description:`Defines if the action is disabled.

**Note:** a disabled action can't be pressed or focused, and it is not in the tab chain.`,name:"disabled",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:{value:"undefined"},description:"Defines the icon, displayed as graphical element within the component after the button text.\n\n**Note:** It is highly recommended to use `endIcon` property only together with `icon` and/or `text` properties.\nUsage of `endIcon` only should be avoided.\n\nThe SAP-icons font provides numerous options.\n\nExample:\nSee all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).",name:"endIcon",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"undefined"},description:`Defines the \`icon\` source URI.

**Note:** SAP-icons font provides numerous buil-in icons. To find all the available icons, see the
[Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"icon",required:!1,type:{name:"string"}},overflowPriority:{defaultValue:{value:'"Default"'},description:`Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set,
the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it.`,name:"overflowPriority",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Default"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'},{value:'"NeverOverflow"'},{value:'"AlwaysOverflow"'}]}},preventOverflowClosing:{defaultValue:{value:"false"},description:`Defines if the toolbar overflow popup should close upon intereaction with the item.
It will close by default.`,name:"preventOverflowClosing",required:!1,type:{name:"boolean"}},text:{defaultValue:{value:"undefined"},description:"Button text",name:"text",required:!1,type:{name:"string"}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the tooltip of the component.

**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.`,name:"tooltip",required:!1,type:{name:"string"}},width:{defaultValue:{value:"undefined"},description:`Defines the width of the button.

**Note:** all CSS sizes are supported - 'percentage', 'px', 'rem', 'auto', etc.`,name:"width",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{t as T,e as a};
