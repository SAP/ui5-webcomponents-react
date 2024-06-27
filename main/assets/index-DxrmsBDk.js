const __vite__fileDeps=["./Link-C0ufom_G.js","./UI5Element-GBezswur.js","./Boot-CS6Wsrzl.js","./EventProvider-CVfkyUHo.js","./useIsomorphicLayoutEffect-CpdNMtv3.js","./index-DEe9W-hO.js","./CustomElementsScopeUtils-CNP7-t5L.js","./withWebComponent-ystZv1Rq.js","./utils-DQyyc3O0.js","./event-Dq0fpeHi.js","./Keys-B00bFMgT.js","./AriaLabelHelper-C5uDZewF.js","./i18nBundle-BRH4h-L2.js","./MarkedEvents-CAur0wxK.js","./WrappingType-CW8URInd.js","./i18n-defaults-BHzefwI9.js","./parameters-bundle.css-DQGkr9pp.js","./Icon-DVdZH5Ds.js","./Icons-DkFvE6sF.js","./Device-RcFucVeJ.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as n}from"./iframe-fPuZz_ze.js";import"./Link-C0ufom_G.js";import{w as i}from"./withWebComponent-ystZv1Rq.js";const e=i("ui5-link",["accessibilityAttributes","accessibleName","accessibleNameRef","accessibleRole","design","endIcon","href","icon","target","tooltip","wrappingType"],["disabled"],[],["click"],()=>n(()=>import("./Link-C0ufom_G.js").then(t=>t.c),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]),import.meta.url));e.displayName="Link";try{e.displayName="Link",e.__docgenInfo={description:`The \`Link\` is a hyperlink component that is used to navigate to other
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

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<LinkDomRef, LinkClickEventDetail>) => void"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:"Defines the additional accessibility attributes that will be applied to the component.\nThe following fields are supported:\n\n- **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.\nAccepts the following string values: `true` or `false`.\n\n- **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.\nAccepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.\n\n**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.",name:"accessibilityAttributes",required:!1,type:{name:"LinkAccessibilityAttributes"}},accessibleName:{defaultValue:null,description:`Defines the accessible ARIA name of the component.

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the input",name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"link"'},description:`Defines the ARIA role of the component.

**Note:** Use the <code>LinkAccessibleRole.Button</code> role in cases when navigation is not expected to occur and the href property is not defined.

**Note:** Available since [v1.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.9.0) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Link"'},{value:'"Link"'},{value:'"Button"'}]}},design:{defaultValue:{value:'"Default"'},description:"Defines the component design.\n\n**Note:** Avaialble options are `Default`, `Subtle`, and `Emphasized`.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Emphasized"'},{value:'"Default"'},{value:'"Subtle"'},{value:'"Emphasized"'},{value:'"Subtle"'}]}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.

**Note:** When disabled, the click event cannot be triggered by the user.`,name:"disabled",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:null,description:`Defines the icon, displayed as graphical element within the component after the link's text.
The SAP-icons font provides numerous options.

**Note:** Usage of icon-only link is not supported, the link must always have a text.

**Note:** We recommend using аn icon in the beginning or the end only, and with text.

See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"endIcon",required:!1,type:{name:"string"}},href:{defaultValue:null,description:`Defines the component href.

**Note:** Standard hyperlink behavior is supported.`,name:"href",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:`Defines the icon, displayed as graphical element within the component before the link's text.
The SAP-icons font provides numerous options.

**Note:** Usage of icon-only link is not supported, the link must always have a text.

**Note:** We recommend using аn icon in the beginning or the end only, and with text.

See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"icon",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"Defines the component target.\n\n**Notes:**\n\n- `_self`\n- `_top`\n- `_blank`\n- `_parent`\n- `_search`\n\n**This property must only be used when the `href` property is set.**",name:"target",required:!1,type:{name:"string"}},tooltip:{defaultValue:null,description:`Defines the tooltip of the component.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},wrappingType:{defaultValue:{value:'"Normal"'},description:`Defines how the text of a component will be displayed when there is not enough space.

**Note:** By default the text will wrap. If "None" is set - the text will truncate.`,name:"wrappingType",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Normal"'},{value:'"Normal"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

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

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<LinkDomRef, LinkClickEventDetail>) => void"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:"Defines the additional accessibility attributes that will be applied to the component.\nThe following fields are supported:\n\n- **expanded**: Indicates whether the button, or another grouping element it controls, is currently expanded or collapsed.\nAccepts the following string values: `true` or `false`.\n\n- **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.\nAccepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.\n\n**Note:** Available since [v1.1.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.1.0) of **@ui5/webcomponents**.",name:"accessibilityAttributes",required:!1,type:{name:"LinkAccessibilityAttributes"}},accessibleName:{defaultValue:null,description:`Defines the accessible ARIA name of the component.

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the input",name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"link"'},description:`Defines the ARIA role of the component.

**Note:** Use the <code>LinkAccessibleRole.Button</code> role in cases when navigation is not expected to occur and the href property is not defined.

**Note:** Available since [v1.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.9.0) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Link"'},{value:'"Link"'},{value:'"Button"'}]}},design:{defaultValue:{value:'"Default"'},description:"Defines the component design.\n\n**Note:** Avaialble options are `Default`, `Subtle`, and `Emphasized`.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Emphasized"'},{value:'"Default"'},{value:'"Subtle"'},{value:'"Emphasized"'},{value:'"Subtle"'}]}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.

**Note:** When disabled, the click event cannot be triggered by the user.`,name:"disabled",required:!1,type:{name:"boolean"}},endIcon:{defaultValue:null,description:`Defines the icon, displayed as graphical element within the component after the link's text.
The SAP-icons font provides numerous options.

**Note:** Usage of icon-only link is not supported, the link must always have a text.

**Note:** We recommend using аn icon in the beginning or the end only, and with text.

See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"endIcon",required:!1,type:{name:"string"}},href:{defaultValue:null,description:`Defines the component href.

**Note:** Standard hyperlink behavior is supported.`,name:"href",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:`Defines the icon, displayed as graphical element within the component before the link's text.
The SAP-icons font provides numerous options.

**Note:** Usage of icon-only link is not supported, the link must always have a text.

**Note:** We recommend using аn icon in the beginning or the end only, and with text.

See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"icon",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"Defines the component target.\n\n**Notes:**\n\n- `_self`\n- `_top`\n- `_blank`\n- `_parent`\n- `_search`\n\n**This property must only be used when the `href` property is set.**",name:"target",required:!1,type:{name:"string"}},tooltip:{defaultValue:null,description:`Defines the tooltip of the component.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},wrappingType:{defaultValue:{value:'"Normal"'},description:`Defines how the text of a component will be displayed when there is not enough space.

**Note:** By default the text will wrap. If "None" is set - the text will truncate.`,name:"wrappingType",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Normal"'},{value:'"Normal"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as L};
