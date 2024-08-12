const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ListItemCustom-Cfu0T5y_.js","./Keys-F_3Gvx0K.js","./withWebComponent-Bvd6GsxT.js","./utils-B91Jjtng.js","./index-CMKoANNR.js","./useIsomorphicLayoutEffect-DOdM5Kf8.js","./List-CH8w2THx.js","./ResizeHandler-DLtaLMaj.js","./ItemNavigation-vTMdqqKa.js","./getActiveElement-kltGt_DR.js","./event-Dq0fpeHi.js","./slot-_4yKMUwC.js","./AriaLabelHelper-C5uDZewF.js","./isElementInView-CjfjvN8v.js","./getEffectiveScrollbarStyle-B3XuleRv.js","./isElementHidden-B4HqmI2E.js","./isElementClickable-0ACQ4G_A.js","./i18nBundle-DyvSagx7.js","./debounce-TTkz9ISH.js","./class-map-izHjq-7_.js","./parameters-bundle.css-DJWIHzS2.js","./BusyIndicator-Cx-S6BZJ.js","./Label-CuT9KatJ.js","./i18n-defaults-CcfWlpG-.js","./if-defined-BJMHgp7g.js","./BrowserScrollbar.css-D0ty1KEr.js","./MarkedEvents-CAur0wxK.js","./decline-DI0qcVtv.js","./Icon-iJ5XkFd9.js","./i18n-defaults-CEQaAj6E.js","./TabbableElements-BJJu_CDc.js","./RadioButton-Chceev8u.js","./ValueState-Bg0UWejw.js","./CheckBox-B5ighiuc.js","./accept-0udhcfey.js","./Button-DFUJoV2f.js","./willShowContent-CZcfsNXp.js","./slim-arrow-right-C_o53qwA.js","./Avatar-DBJmGUf1.js","./employee-CB0X-WXT.js","./alert-XemOvmut.js"])))=>i.map(i=>d[i]);
import{_ as n}from"./iframe-XFzRcLla.js";import"./ListItemCustom-Cfu0T5y_.js";import{w as i}from"./withWebComponent-Bvd6GsxT.js";const e=i("ui5-li-custom",["accessibilityAttributes","accessibleName","highlight","tooltip","type"],["movable","navigated","selected"],["deleteButton"],["detail-click"],()=>n(()=>import("./ListItemCustom-Cfu0T5y_.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]),import.meta.url));e.displayName="ListItemCustom";try{e.displayName="ListItemCustom",e.__docgenInfo={description:`A component to be used as custom list item within the \`List\`
the same way as the standard \`ListItemStandard\`.

The component accepts arbitrary HTML content to allow full customization.

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ListItemCustom",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},deleteButton:{defaultValue:null,description:`Defines the delete button, displayed in "Delete" mode.
**Note:** While the slot allows custom buttons, to match
design guidelines, please use the \`Button\` component.
**Note:** When the slot is not present, a built-in delete button will be displayed.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="deleteButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.9.0) of **@ui5/webcomponents**.`,name:"deleteButton",required:!1,type:{name:"UI5WCSlotsNode"}},onDetailClick:{defaultValue:null,description:"Fired when the user clicks on the detail button when type is `Detail`.",name:"onDetailClick",required:!1,type:{name:"(event: Ui5CustomEvent<ListItemCustomDomRef, never>) => void"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:`Defines the additional accessibility attributes that will be applied to the component.
The following fields are supported:

- **ariaSetsize**: Defines the number of items in the current set  when not all items in the set are present in the DOM.
**Note:** The value is an integer reflecting the number of items in the complete set. If the size of the entire set is unknown, set \`-1\`.

	- **ariaPosinset**: Defines an element's number or position in the current set when not all items are present in the DOM.
	**Note:** The value is an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known.

**Note:** Available since [v1.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.`,name:"accessibilityAttributes",required:!1,type:{name:"ListItemAccessibilityAttributes"}},accessibleName:{defaultValue:{value:"undefined"},description:`Defines the text alternative of the component.

**Note**: If not provided a default text alternative will be set, if present.`,name:"accessibleName",required:!1,type:{name:"string"}},highlight:{defaultValue:{value:'"None"'},description:'Defines the highlight state of the list items.\nAvailable options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.\n\n**Note:** Available since [v1.24](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.24) of **@ui5/webcomponents**.',name:"highlight",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'}]}},movable:{defaultValue:{value:"false"},description:`Defines whether the item is movable.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"movable",required:!1,type:{name:"boolean"}},navigated:{defaultValue:{value:"false"},description:`The navigated state of the list item.
If set to \`true\`, a navigation indicator is displayed at the end of the list item.

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"navigated",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:"Defines the selected state of the component.",name:"selected",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the text of the tooltip that would be displayed for the list item.

**Note:** Available since [v1.23.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},type:{defaultValue:{value:'"Active"'},description:"Defines the visual indication and behavior of the list items.\nAvailable options are `Active` (by default), `Inactive`, `Detail` and `Navigation`.\n\n**Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover,\nwhile with type `Inactive` and `Detail` - will not.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Inactive"'},{value:'"Active"'},{value:'"Detail"'},{value:'"Navigation"'},{value:'"Inactive"'},{value:'"Active"'},{value:'"Detail"'},{value:'"Navigation"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{e.displayName="ListItemCustom",e.__docgenInfo={description:`A component to be used as custom list item within the \`List\`
the same way as the standard \`ListItemStandard\`.

The component accepts arbitrary HTML content to allow full customization.

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ListItemCustom",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},deleteButton:{defaultValue:null,description:`Defines the delete button, displayed in "Delete" mode.
**Note:** While the slot allows custom buttons, to match
design guidelines, please use the \`Button\` component.
**Note:** When the slot is not present, a built-in delete button will be displayed.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="deleteButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.9.0) of **@ui5/webcomponents**.`,name:"deleteButton",required:!1,type:{name:"UI5WCSlotsNode"}},onDetailClick:{defaultValue:null,description:"Fired when the user clicks on the detail button when type is `Detail`.",name:"onDetailClick",required:!1,type:{name:"(event: Ui5CustomEvent<ListItemCustomDomRef, never>) => void"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:`Defines the additional accessibility attributes that will be applied to the component.
The following fields are supported:

- **ariaSetsize**: Defines the number of items in the current set  when not all items in the set are present in the DOM.
**Note:** The value is an integer reflecting the number of items in the complete set. If the size of the entire set is unknown, set \`-1\`.

	- **ariaPosinset**: Defines an element's number or position in the current set when not all items are present in the DOM.
	**Note:** The value is an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known.

**Note:** Available since [v1.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.`,name:"accessibilityAttributes",required:!1,type:{name:"ListItemAccessibilityAttributes"}},accessibleName:{defaultValue:{value:"undefined"},description:`Defines the text alternative of the component.

**Note**: If not provided a default text alternative will be set, if present.`,name:"accessibleName",required:!1,type:{name:"string"}},highlight:{defaultValue:{value:'"None"'},description:'Defines the highlight state of the list items.\nAvailable options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.\n\n**Note:** Available since [v1.24](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.24) of **@ui5/webcomponents**.',name:"highlight",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'}]}},movable:{defaultValue:{value:"false"},description:`Defines whether the item is movable.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"movable",required:!1,type:{name:"boolean"}},navigated:{defaultValue:{value:"false"},description:`The navigated state of the list item.
If set to \`true\`, a navigation indicator is displayed at the end of the list item.

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"navigated",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:"Defines the selected state of the component.",name:"selected",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the text of the tooltip that would be displayed for the list item.

**Note:** Available since [v1.23.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},type:{defaultValue:{value:'"Active"'},description:"Defines the visual indication and behavior of the list items.\nAvailable options are `Active` (by default), `Inactive`, `Detail` and `Navigation`.\n\n**Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover,\nwhile with type `Inactive` and `Detail` - will not.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Inactive"'},{value:'"Active"'},{value:'"Detail"'},{value:'"Navigation"'},{value:'"Inactive"'},{value:'"Active"'},{value:'"Detail"'},{value:'"Navigation"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as L};
