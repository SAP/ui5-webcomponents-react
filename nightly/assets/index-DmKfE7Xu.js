import"./Link-CBPPqDB9.js";import{w as n}from"./jsx-runtime-CkEx_Gfk.js";const e=n("ui5-link",["accessibilityAttributes","accessibleDescription","accessibleName","accessibleNameRef","accessibleRole","design","endIcon","href","icon","interactiveAreaSize","target","tooltip","wrappingType"],["disabled"],[],["click"]);e.displayName="Link";try{e.displayName="Link",e.__docgenInfo={description:`The \`Link\` is a hyperlink component that is used to navigate to other
apps and web pages, or to trigger actions.
It is a clickable text element, visualized in such a way that it stands out
from the standard text.
On hover, it changes its style to an underlined text to provide additional feedback to the user.

### Usage

You can set the \`Link\` to be enabled or disabled.

To create a visual hierarchy in large lists of links, you can set the less important links as
\`Subtle\` or the more important ones as \`Emphasized\`,
by using the \`design\` property.

If the \`href\` property is set, the link behaves as the HTML
anchor tag (\`<a></a>\`) and opens the specified URL in the given target frame (\`target\` property).
To specify where the linked content is opened, you can use the \`target\` property.

### Responsive behavior

If there is not enough space, the text of the \`Link\` becomes truncated.
If the \`wrappingType\` property is set to \`"Normal"\`, the text is displayed
on several lines instead of being truncated.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Link",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClick:{defaultValue:null,description:`Fired when the component is triggered either with a mouse/tap
or by using the Enter key.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<LinkDomRef, LinkClickEventDetail>) => void"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:"Defines the additional accessibility attributes that will be applied to the component.\nThe following fields are supported:\n\n- **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.\nAccepts the following string values: `true` or `false`.\n\n- **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.\nAccepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.\n\n**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.",name:"accessibilityAttributes",required:!1,type:{name:"LinkAccessibilityAttributes"}},accessibleDescription:{defaultValue:{value:"undefined"},description:`Defines the accessible description of the component.

**Note:** Available since [v2.5.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.`,name:"accessibleDescription",required:!1,type:{name:"string"}},accessibleName:{defaultValue:{value:"undefined"},description:`Defines the accessible ARIA name of the component.

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the input",name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Link"'},description:`Defines the ARIA role of the component.

**Note:** Use the <code>LinkAccessibleRole.Button</code> role in cases when navigation is not expected to occur and the href property is not defined.

**Note:** Available since [v1.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.9.0) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Link"'},{value:'"Link"'},{value:'"Button"'}]}},design:{defaultValue:{value:'"Default"'},description:"Defines the component design.\n\n**Note:** Avaialble options are `Default`, `Subtle`, and `Emphasized`.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Emphasized"'},{value:'"Default"'},{value:'"Subtle"'},{value:'"Emphasized"'},{value:'"Subtle"'}]}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.

**Note:** When disabled, the click event cannot be triggered by the user.`,name:"disabled",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:{value:"undefined"},description:`Defines the icon, displayed as graphical element within the component after the link's text.
The SAP-icons font provides numerous options.

**Note:** Usage of icon-only link is not supported, the link must always have a text.

**Note:** We recommend using аn icon in the beginning or the end only, and with text.

See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"endIcon",required:!1,type:{name:"string"}},href:{defaultValue:{value:"undefined"},description:`Defines the component href.

**Note:** Standard hyperlink behavior is supported.`,name:"href",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"undefined"},description:`Defines the icon, displayed as graphical element within the component before the link's text.
The SAP-icons font provides numerous options.

**Note:** Usage of icon-only link is not supported, the link must always have a text.

**Note:** We recommend using аn icon in the beginning or the end only, and with text.

See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"icon",required:!1,type:{name:"string"}},interactiveAreaSize:{defaultValue:{value:'"Normal"'},description:`Defines the target area size of the link:
- **InteractiveAreaSize.Normal**: The default target area size.
- **InteractiveAreaSize.Large**: The target area size is enlarged to 24px in height.

**Note:**The property is designed to make links easier to activate and helps meet the WCAG 2.2 Target Size requirement. It is applicable only for the SAP Horizon themes.
**Note:**To improve <code>ui5-link</code>'s reliability and usability, it is recommended to use the <code>InteractiveAreaSize.Large</code> value in scenarios where the <code>ui5-link</code> component is placed inside another interactive component, such as a list item or a table cell.
Setting the <code>interactiveAreaSize</code> property to <code>InteractiveAreaSize.Large</code> increases the <code>ui5-link</code>'s invisible touch area. As a result, the user's intended one-time selection command is more likely to activate the desired <code>ui5-link</code>, with minimal chance of unintentionally activating the underlying component.

**Note:** Available since [v2.8.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.8.0) of **@ui5/webcomponents**.`,name:"interactiveAreaSize",required:!1,type:{name:"enum",value:[{value:'"Normal"'},{value:'"Normal"'},{value:'"Large"'},{value:'"Large"'}]}},target:{defaultValue:{value:"undefined"},description:"Defines the component target.\n\n**Notes:**\n\n- `_self`\n- `_top`\n- `_blank`\n- `_parent`\n- `_search`\n\n**This property must only be used when the `href` property is set.**",name:"target",required:!1,type:{name:"string"}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the tooltip of the component.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},wrappingType:{defaultValue:{value:'"Normal"'},description:`Defines how the text of a component will be displayed when there is not enough space.

**Note:** By default the text will wrap. If "None" is set - the text will truncate.`,name:"wrappingType",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Normal"'},{value:'"Normal"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{e.displayName="Link",e.__docgenInfo={description:`The \`Link\` is a hyperlink component that is used to navigate to other
apps and web pages, or to trigger actions.
It is a clickable text element, visualized in such a way that it stands out
from the standard text.
On hover, it changes its style to an underlined text to provide additional feedback to the user.

### Usage

You can set the \`Link\` to be enabled or disabled.

To create a visual hierarchy in large lists of links, you can set the less important links as
\`Subtle\` or the more important ones as \`Emphasized\`,
by using the \`design\` property.

If the \`href\` property is set, the link behaves as the HTML
anchor tag (\`<a></a>\`) and opens the specified URL in the given target frame (\`target\` property).
To specify where the linked content is opened, you can use the \`target\` property.

### Responsive behavior

If there is not enough space, the text of the \`Link\` becomes truncated.
If the \`wrappingType\` property is set to \`"Normal"\`, the text is displayed
on several lines instead of being truncated.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Link",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClick:{defaultValue:null,description:`Fired when the component is triggered either with a mouse/tap
or by using the Enter key.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

| cancelable | bubbles |
| :--------: | :-----: |
| ✅|✅|`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<LinkDomRef, LinkClickEventDetail>) => void"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:"Defines the additional accessibility attributes that will be applied to the component.\nThe following fields are supported:\n\n- **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.\nAccepts the following string values: `true` or `false`.\n\n- **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.\nAccepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.\n\n**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.",name:"accessibilityAttributes",required:!1,type:{name:"LinkAccessibilityAttributes"}},accessibleDescription:{defaultValue:{value:"undefined"},description:`Defines the accessible description of the component.

**Note:** Available since [v2.5.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.5.0) of **@ui5/webcomponents**.`,name:"accessibleDescription",required:!1,type:{name:"string"}},accessibleName:{defaultValue:{value:"undefined"},description:`Defines the accessible ARIA name of the component.

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Receives id(or many ids) of the elements that label the input",name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Link"'},description:`Defines the ARIA role of the component.

**Note:** Use the <code>LinkAccessibleRole.Button</code> role in cases when navigation is not expected to occur and the href property is not defined.

**Note:** Available since [v1.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.9.0) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Link"'},{value:'"Link"'},{value:'"Button"'}]}},design:{defaultValue:{value:'"Default"'},description:"Defines the component design.\n\n**Note:** Avaialble options are `Default`, `Subtle`, and `Emphasized`.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Emphasized"'},{value:'"Default"'},{value:'"Subtle"'},{value:'"Emphasized"'},{value:'"Subtle"'}]}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.

**Note:** When disabled, the click event cannot be triggered by the user.`,name:"disabled",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:{value:"undefined"},description:`Defines the icon, displayed as graphical element within the component after the link's text.
The SAP-icons font provides numerous options.

**Note:** Usage of icon-only link is not supported, the link must always have a text.

**Note:** We recommend using аn icon in the beginning or the end only, and with text.

See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"endIcon",required:!1,type:{name:"string"}},href:{defaultValue:{value:"undefined"},description:`Defines the component href.

**Note:** Standard hyperlink behavior is supported.`,name:"href",required:!1,type:{name:"string"}},icon:{defaultValue:{value:"undefined"},description:`Defines the icon, displayed as graphical element within the component before the link's text.
The SAP-icons font provides numerous options.

**Note:** Usage of icon-only link is not supported, the link must always have a text.

**Note:** We recommend using аn icon in the beginning or the end only, and with text.

See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"icon",required:!1,type:{name:"string"}},interactiveAreaSize:{defaultValue:{value:'"Normal"'},description:`Defines the target area size of the link:
- **InteractiveAreaSize.Normal**: The default target area size.
- **InteractiveAreaSize.Large**: The target area size is enlarged to 24px in height.

**Note:**The property is designed to make links easier to activate and helps meet the WCAG 2.2 Target Size requirement. It is applicable only for the SAP Horizon themes.
**Note:**To improve <code>ui5-link</code>'s reliability and usability, it is recommended to use the <code>InteractiveAreaSize.Large</code> value in scenarios where the <code>ui5-link</code> component is placed inside another interactive component, such as a list item or a table cell.
Setting the <code>interactiveAreaSize</code> property to <code>InteractiveAreaSize.Large</code> increases the <code>ui5-link</code>'s invisible touch area. As a result, the user's intended one-time selection command is more likely to activate the desired <code>ui5-link</code>, with minimal chance of unintentionally activating the underlying component.

**Note:** Available since [v2.8.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.8.0) of **@ui5/webcomponents**.`,name:"interactiveAreaSize",required:!1,type:{name:"enum",value:[{value:'"Normal"'},{value:'"Normal"'},{value:'"Large"'},{value:'"Large"'}]}},target:{defaultValue:{value:"undefined"},description:"Defines the component target.\n\n**Notes:**\n\n- `_self`\n- `_top`\n- `_blank`\n- `_parent`\n- `_search`\n\n**This property must only be used when the `href` property is set.**",name:"target",required:!1,type:{name:"string"}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the tooltip of the component.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},wrappingType:{defaultValue:{value:'"Normal"'},description:`Defines how the text of a component will be displayed when there is not enough space.

**Note:** By default the text will wrap. If "None" is set - the text will truncate.`,name:"wrappingType",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Normal"'},{value:'"Normal"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as L};
