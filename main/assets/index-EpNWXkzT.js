const __vite__fileDeps=["./Avatar-BLWqVh2K.js","./UI5Element-GBezswur.js","./Boot-CS6Wsrzl.js","./EventProvider-CVfkyUHo.js","./useIsomorphicLayoutEffect-CpdNMtv3.js","./index-DEe9W-hO.js","./CustomElementsScopeUtils-CNP7-t5L.js","./withWebComponent-ystZv1Rq.js","./utils-DQyyc3O0.js","./slot-_4yKMUwC.js","./event-Dq0fpeHi.js","./i18nBundle-BRH4h-L2.js","./ResizeHandler-DDwTWVjk.js","./Keys-B00bFMgT.js","./Device-RcFucVeJ.js","./i18n-defaults-BHzefwI9.js","./parameters-bundle.css-DQGkr9pp.js","./Icon-DVdZH5Ds.js","./Icons-DkFvE6sF.js","./employee-RhZDCU51.js","./alert-CC8GYBM5.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as n}from"./iframe-B5w2X3Ic.js";import"./Avatar-BLWqVh2K.js";import{w as a}from"./withWebComponent-ystZv1Rq.js";const e=a("ui5-avatar",["accessibilityAttributes","accessibleName","colorScheme","fallbackIcon","icon","initials","shape","size"],["disabled","interactive"],["badge"],[],()=>n(()=>import("./Avatar-BLWqVh2K.js").then(t=>t.d),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),import.meta.url));e.displayName="Avatar";try{e.displayName="Avatar",e.__docgenInfo={description:`An image-like component that has different display options for representing images and icons
in different shapes and sizes, depending on the use case.

The shape can be circular or square. There are several predefined sizes, as well as an option to
set a custom size.

### Keyboard Handling

- [Space] / [Enter] or [Return] - Fires the \`click\` event if the \`interactive\` property is set to true.
- [Shift] - If [Space] is pressed, pressing [Shift] releases the component without triggering the click event.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Avatar",props:{badge:{defaultValue:null,description:`Defines the optional badge that will be used for visual affordance.

**Note:** While the slot allows for custom badges, to achieve
the Fiori design, you can use the \`Tag\` with \`Icon\`
in the corresponding \`icon\` slot, without text nodes.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="badge"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.7.0) of **@ui5/webcomponents**.`,name:"badge",required:!1,type:{name:"UI5WCSlotsNode"}},children:{defaultValue:null,description:"Receives the desired `<img>` tag\n\n**Note:** If you experience flickering of the provided image, you can hide the component until it is being defined with the following CSS:",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:"Defines the additional accessibility attributes that will be applied to the component.\nThe following field is supported:\n\n- **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.\nAccepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.\n\n**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.",name:"accessibilityAttributes",required:!1,type:{name:"AvatarAccessibilityAttributes"}},accessibleName:{defaultValue:null,description:`Defines the text alternative of the component.
If not provided a default text alternative will be set, if present.`,name:"accessibleName",required:!1,type:{name:"string"}},colorScheme:{defaultValue:{value:'"Accent6"'},description:"Defines the background color of the desired image.",name:"colorScheme",required:!1,type:{name:"enum",value:[{value:'"Accent1"'},{value:'"Accent2"'},{value:'"Accent3"'},{value:'"Accent4"'},{value:'"Accent5"'},{value:'"Accent6"'},{value:'"Accent7"'},{value:'"Accent8"'},{value:'"Accent9"'},{value:'"Accent10"'},{value:'"Placeholder"'},{value:'"Accent1"'},{value:'"Accent2"'},{value:'"Accent3"'},{value:'"Accent4"'},{value:'"Accent5"'},{value:'"Accent6"'},{value:'"Accent7"'},{value:'"Accent8"'},{value:'"Accent9"'},{value:'"Accent10"'},{value:'"Placeholder"'}]}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.
A disabled component can't be pressed or
focused, and it is not in the tab chain.`,name:"disabled",required:!1,type:{name:"boolean"}},fallbackIcon:{defaultValue:null,description:`Defines the name of the fallback icon, which should be displayed in the following cases:

	- If the initials are not valid (more than 3 letters, unsupported languages or empty initials).
	- If there are three initials and they do not fit in the shape (e.g. WWW for some of the sizes).
	- If the image src is wrong.

**Note:** If not set, a default fallback icon "employee" is displayed.

**Note:** You should import the desired icon first, then use its name as "fallback-icon".

\`import "@ui5/webcomponents-icons/dist/{icon_name}.js"\`

\`<Avatar fallback-icon="alert">\`

See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"fallbackIcon",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:`Defines the name of the UI5 Icon, that will be displayed.

**Note:** If \`image\` slot is provided, the property will be ignored.

**Note:** You should import the desired icon first, then use its name as "icon".

\`import "@ui5/webcomponents-icons/dist/{icon_name}.js"\`

\`<Avatar icon="employee">\`

**Note:** If no icon or an empty one is provided, by default the "employee" icon should be displayed.

See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"icon",required:!1,type:{name:"string"}},initials:{defaultValue:null,description:`Defines the displayed initials.

Up to three Latin letters can be displayed as initials.`,name:"initials",required:!1,type:{name:"string"}},interactive:{defaultValue:{value:"false"},description:"Defines if the avatar is interactive (focusable and pressable).\n\n**Note:** This property won't have effect if the `disabled`\nproperty is set to `true`.",name:"interactive",required:!1,type:{name:"boolean"}},shape:{defaultValue:{value:'"Circle"'},description:"Defines the shape of the component.",name:"shape",required:!1,type:{name:"enum",value:[{value:'"Circle"'},{value:'"Square"'},{value:'"Circle"'},{value:'"Square"'}]}},size:{defaultValue:{value:'"S"'},description:"Defines predefined size of the component.",name:"size",required:!1,type:{name:"enum",value:[{value:'"XS"'},{value:'"S"'},{value:'"M"'},{value:'"L"'},{value:'"XL"'},{value:'"XS"'},{value:'"S"'},{value:'"M"'},{value:'"L"'},{value:'"XL"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{e.displayName="Avatar",e.__docgenInfo={description:`An image-like component that has different display options for representing images and icons
in different shapes and sizes, depending on the use case.

The shape can be circular or square. There are several predefined sizes, as well as an option to
set a custom size.

### Keyboard Handling

- [Space] / [Enter] or [Return] - Fires the \`click\` event if the \`interactive\` property is set to true.
- [Shift] - If [Space] is pressed, pressing [Shift] releases the component without triggering the click event.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Avatar",props:{badge:{defaultValue:null,description:`Defines the optional badge that will be used for visual affordance.

**Note:** While the slot allows for custom badges, to achieve
the Fiori design, you can use the \`Tag\` with \`Icon\`
in the corresponding \`icon\` slot, without text nodes.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="badge"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.7.0) of **@ui5/webcomponents**.`,name:"badge",required:!1,type:{name:"UI5WCSlotsNode"}},children:{defaultValue:null,description:"Receives the desired `<img>` tag\n\n**Note:** If you experience flickering of the provided image, you can hide the component until it is being defined with the following CSS:",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:"Defines the additional accessibility attributes that will be applied to the component.\nThe following field is supported:\n\n- **hasPopup**: Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the button.\nAccepts the following string values: `dialog`, `grid`, `listbox`, `menu` or `tree`.\n\n**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.",name:"accessibilityAttributes",required:!1,type:{name:"AvatarAccessibilityAttributes"}},accessibleName:{defaultValue:null,description:`Defines the text alternative of the component.
If not provided a default text alternative will be set, if present.`,name:"accessibleName",required:!1,type:{name:"string"}},colorScheme:{defaultValue:{value:'"Accent6"'},description:"Defines the background color of the desired image.",name:"colorScheme",required:!1,type:{name:"enum",value:[{value:'"Accent1"'},{value:'"Accent2"'},{value:'"Accent3"'},{value:'"Accent4"'},{value:'"Accent5"'},{value:'"Accent6"'},{value:'"Accent7"'},{value:'"Accent8"'},{value:'"Accent9"'},{value:'"Accent10"'},{value:'"Placeholder"'},{value:'"Accent1"'},{value:'"Accent2"'},{value:'"Accent3"'},{value:'"Accent4"'},{value:'"Accent5"'},{value:'"Accent6"'},{value:'"Accent7"'},{value:'"Accent8"'},{value:'"Accent9"'},{value:'"Accent10"'},{value:'"Placeholder"'}]}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.
A disabled component can't be pressed or
focused, and it is not in the tab chain.`,name:"disabled",required:!1,type:{name:"boolean"}},fallbackIcon:{defaultValue:null,description:`Defines the name of the fallback icon, which should be displayed in the following cases:

	- If the initials are not valid (more than 3 letters, unsupported languages or empty initials).
	- If there are three initials and they do not fit in the shape (e.g. WWW for some of the sizes).
	- If the image src is wrong.

**Note:** If not set, a default fallback icon "employee" is displayed.

**Note:** You should import the desired icon first, then use its name as "fallback-icon".

\`import "@ui5/webcomponents-icons/dist/{icon_name}.js"\`

\`<Avatar fallback-icon="alert">\`

See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"fallbackIcon",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:`Defines the name of the UI5 Icon, that will be displayed.

**Note:** If \`image\` slot is provided, the property will be ignored.

**Note:** You should import the desired icon first, then use its name as "icon".

\`import "@ui5/webcomponents-icons/dist/{icon_name}.js"\`

\`<Avatar icon="employee">\`

**Note:** If no icon or an empty one is provided, by default the "employee" icon should be displayed.

See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"icon",required:!1,type:{name:"string"}},initials:{defaultValue:null,description:`Defines the displayed initials.

Up to three Latin letters can be displayed as initials.`,name:"initials",required:!1,type:{name:"string"}},interactive:{defaultValue:{value:"false"},description:"Defines if the avatar is interactive (focusable and pressable).\n\n**Note:** This property won't have effect if the `disabled`\nproperty is set to `true`.",name:"interactive",required:!1,type:{name:"boolean"}},shape:{defaultValue:{value:'"Circle"'},description:"Defines the shape of the component.",name:"shape",required:!1,type:{name:"enum",value:[{value:'"Circle"'},{value:'"Square"'},{value:'"Circle"'},{value:'"Square"'}]}},size:{defaultValue:{value:'"S"'},description:"Defines predefined size of the component.",name:"size",required:!1,type:{name:"enum",value:[{value:'"XS"'},{value:'"S"'},{value:'"M"'},{value:'"L"'},{value:'"XL"'},{value:'"XS"'},{value:'"S"'},{value:'"M"'},{value:'"L"'},{value:'"XL"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as A};
