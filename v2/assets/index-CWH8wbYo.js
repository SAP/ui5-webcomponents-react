const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Menu-DiSIG2YH.js","./withWebComponent-Bw_l6Ewh.js","./utils-BHgxP_Sc.js","./index-ClU-Tc1p.js","./useIsomorphicLayoutEffect-DCJrFAVs.js","./slot-_4yKMUwC.js","./event-Dq0fpeHi.js","./Keys-F_3Gvx0K.js","./i18nBundle-CyjtwURt.js","./slim-arrow-right-pLsYwuE7.js","./Icon-Bjam5y2n.js","./if-defined-mCyQq_6q.js","./parameters-bundle.css-BFbT_feV.js","./Popover-ueRYOmZP.js","./PopupsCommon.css-T1OzgQOS.js","./getEffectiveScrollbarStyle-D1VPwmZI.js","./isElementHidden-B4HqmI2E.js","./isElementClickable-0ACQ4G_A.js","./AriaLabelHelper-C5uDZewF.js","./getActiveElement-kltGt_DR.js","./ResizeHandler-CV6FH9MC.js","./MediaRange-Bnzt26Xb.js","./style-map-Bys0Ab5G.js","./class-map-DoF19r8m.js","./BrowserScrollbar.css-AwpGtRUX.js","./ResponsivePopover-BPe6UEFQ.js","./i18n-defaults-BuF9xM0k.js","./Dialog-C0sQq9aS.js","./ValueState-Bg0UWejw.js","./information-DR3Ry5yc.js","./i18n-defaults-Cz0fD7oZ.js","./alert-CjjdhJ65.js","./Button-Bn9nox5u.js","./MarkedEvents-CAur0wxK.js","./willShowContent-CZcfsNXp.js","./Title-DlbwpOq2.js","./decline-BnR7C84V.js","./List-B4HlHID8.js","./ItemNavigation-J0QfqElW.js","./isElementInView-CjfjvN8v.js","./debounce-TTkz9ISH.js","./BusyIndicator-Cb_VVcAx.js","./Label-C8Y7h3Z-.js","./TabbableElements-BJJu_CDc.js","./RadioButton-B8Nc4uiK.js","./CheckBox-CXVjyirz.js","./accept-vjFjO2tl.js","./Avatar-BRGukaio.js","./employee-CWJksvD0.js","./AriaHasPopup-BTjm9d28.js","./ListItemCustom-DEUCDOAg.js"])))=>i.map(i=>d[i]);
import{_ as n}from"./iframe-ocS5gnjC.js";import"./Menu-DiSIG2YH.js";import{w as i}from"./withWebComponent-Bw_l6Ewh.js";const e=i("ui5-menu-item",["accessibilityAttributes","accessibleName","additionalText","highlight","icon","loadingDelay","text","tooltip","type"],["disabled","loading","navigated","selected"],["deleteButton","endContent"],["detail-click"],()=>n(()=>import("./Menu-DiSIG2YH.js").then(t=>t.a),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]),import.meta.url));e.displayName="MenuItem";try{e.displayName="MenuItem",e.__docgenInfo={description:"`MenuItem` is the item to use inside a `Menu`.\nAn arbitrary hierarchy structure can be represented by recursively nesting menu items.\n\n### Usage\n\n`MenuItem` represents a node in a `Menu`. The menu itself is rendered as a list,\nand each `MenuItem` is represented by a list item in that list. Therefore, you should only use\n`MenuItem` directly in your apps. The `ListItemStandard` list item is internal for the list, and not intended for public use.\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"MenuItem",props:{children:{defaultValue:null,description:"Defines the items of this component.\n\n**Note:** The slot can hold `MenuItem` and `MenuSeparator` items.\n\nIf there are items added to this slot, an arrow will be displayed at the end\nof the item in order to indicate that there are items added. In that case components added\nto `endContent` slot or `additionalText` content will not be displayed.\n\nThe priority of what will be displayed at the end of the menu item is as follows:\nsub-menu arrow (if there are items added in `items` slot) -> components added in `endContent` -> text set to `additionalText`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},deleteButton:{defaultValue:null,description:`Defines the delete button, displayed in "Delete" mode.
**Note:** While the slot allows custom buttons, to match
design guidelines, please use the \`Button\` component.
**Note:** When the slot is not present, a built-in delete button will be displayed.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="deleteButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.9.0) of **@ui5/webcomponents**.`,name:"deleteButton",required:!1,type:{name:"UI5WCSlotsNode"}},endContent:{defaultValue:null,description:"Defines the components that should be displayed at the end of the menu item.\n\n**Note:** It is highly recommended to slot only components of type `Button`,`Link`\nor `Icon` in order to preserve the intended design. If there are components added to this slot,\nand there is text set in `additionalText`, it will not be displayed. If there are items added to `items` slot,\nnether `additionalText` nor components added to this slot would be displayed.\n\nThe priority of what will be displayed at the end of the menu item is as follows:\nsub-menu arrow (if there are items added in `items` slot) -> components added in `endContent` -> text set to `additionalText`.\n\n__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot=\"endContent\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).\n\n**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.",name:"endContent",required:!1,type:{name:"UI5WCSlotsNode"}},onDetailClick:{defaultValue:null,description:"Fired when the user clicks on the detail button when type is `Detail`.",name:"onDetailClick",required:!1,type:{name:"(event: Ui5CustomEvent<MenuItemDomRef, never>) => void"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:`Defines the additional accessibility attributes that will be applied to the component.
The following fields are supported:

- **ariaSetsize**: Defines the number of items in the current set  when not all items in the set are present in the DOM.
**Note:** The value is an integer reflecting the number of items in the complete set. If the size of the entire set is unknown, set \`-1\`.

	- **ariaPosinset**: Defines an element's number or position in the current set when not all items are present in the DOM.
	**Note:** The value is an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known.

**Note:** Available since [v1.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.`,name:"accessibilityAttributes",required:!1,type:{name:"ListItemAccessibilityAttributes"}},accessibleName:{defaultValue:{value:"undefined"},description:`Defines the accessible ARIA name of the component.

**Note:** Available since [v1.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.7.0) of **@ui5/webcomponents**.`,name:"accessibleName",required:!1,type:{name:"string"}},additionalText:{defaultValue:{value:"undefined"},description:"Defines the `additionalText`, displayed in the end of the menu item.\n\n**Note:** The additional text will not be displayed if there are items added in `items` slot or there are\ncomponents added to `endContent` slot.\n\nThe priority of what will be displayed at the end of the menu item is as follows:\nsub-menu arrow (if there are items added in `items` slot) -> components added in `endContent` -> text set to `additionalText`.\n\n**Note:** Available since [v1.8.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.8.0) of **@ui5/webcomponents**.",name:"additionalText",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Defines whether `MenuItem` is in disabled state.\n\n**Note:** A disabled `MenuItem` is noninteractive.",name:"disabled",required:!1,type:{name:"boolean"}},highlight:{defaultValue:{value:'"None"'},description:'Defines the highlight state of the list items.\nAvailable options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.\n\n**Note:** Available since [v1.24](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.24) of **@ui5/webcomponents**.',name:"highlight",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'}]}},icon:{defaultValue:{value:"undefined"},description:`Defines the icon to be displayed as graphical element within the component.
The SAP-icons font provides numerous options.

**Example:**

See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"icon",required:!1,type:{name:"string"}},loading:{defaultValue:{value:"false"},description:"Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding ui5-menu popover.\n\n**Note:** If set to `true` a `BusyIndicator` component will be displayed into the related one to the current `MenuItem` sub-menu popover.\n\n**Note:** Available since [v1.13.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.13.0) of **@ui5/webcomponents**.",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:`Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding ui5-menu popover.

**Note:** Available since [v1.13.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.13.0) of **@ui5/webcomponents**.`,name:"loadingDelay",required:!1,type:{name:"number"}},navigated:{defaultValue:{value:"false"},description:`The navigated state of the list item.
If set to \`true\`, a navigation indicator is displayed at the end of the list item.

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"navigated",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:"Defines the selected state of the component.",name:"selected",required:!1,type:{name:"boolean"}},text:{defaultValue:{value:"undefined"},description:"Defines the text of the tree item.",name:"text",required:!1,type:{name:"string"}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the text of the tooltip for the menu item.

**Note:** Available since [v1.23.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},type:{defaultValue:{value:'"Active"'},description:"Defines the visual indication and behavior of the list items.\nAvailable options are `Active` (by default), `Inactive`, `Detail` and `Navigation`.\n\n**Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover,\nwhile with type `Inactive` and `Detail` - will not.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Navigation"'},{value:'"Inactive"'},{value:'"Active"'},{value:'"Detail"'},{value:'"Navigation"'},{value:'"Inactive"'},{value:'"Active"'},{value:'"Detail"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{e.displayName="MenuItem",e.__docgenInfo={description:"`MenuItem` is the item to use inside a `Menu`.\nAn arbitrary hierarchy structure can be represented by recursively nesting menu items.\n\n### Usage\n\n`MenuItem` represents a node in a `Menu`. The menu itself is rendered as a list,\nand each `MenuItem` is represented by a list item in that list. Therefore, you should only use\n`MenuItem` directly in your apps. The `ListItemStandard` list item is internal for the list, and not intended for public use.\n\n\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"MenuItem",props:{children:{defaultValue:null,description:"Defines the items of this component.\n\n**Note:** The slot can hold `MenuItem` and `MenuSeparator` items.\n\nIf there are items added to this slot, an arrow will be displayed at the end\nof the item in order to indicate that there are items added. In that case components added\nto `endContent` slot or `additionalText` content will not be displayed.\n\nThe priority of what will be displayed at the end of the menu item is as follows:\nsub-menu arrow (if there are items added in `items` slot) -> components added in `endContent` -> text set to `additionalText`.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},deleteButton:{defaultValue:null,description:`Defines the delete button, displayed in "Delete" mode.
**Note:** While the slot allows custom buttons, to match
design guidelines, please use the \`Button\` component.
**Note:** When the slot is not present, a built-in delete button will be displayed.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="deleteButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).

**Note:** Available since [v1.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.9.0) of **@ui5/webcomponents**.`,name:"deleteButton",required:!1,type:{name:"UI5WCSlotsNode"}},endContent:{defaultValue:null,description:"Defines the components that should be displayed at the end of the menu item.\n\n**Note:** It is highly recommended to slot only components of type `Button`,`Link`\nor `Icon` in order to preserve the intended design. If there are components added to this slot,\nand there is text set in `additionalText`, it will not be displayed. If there are items added to `items` slot,\nnether `additionalText` nor components added to this slot would be displayed.\n\nThe priority of what will be displayed at the end of the menu item is as follows:\nsub-menu arrow (if there are items added in `items` slot) -> components added in `endContent` -> text set to `additionalText`.\n\n__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (`slot=\"endContent\"`).\nSince you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.\n\n__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the `slot` prop and appends it to the most outer element of your component.\nLearn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).\n\n**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.",name:"endContent",required:!1,type:{name:"UI5WCSlotsNode"}},onDetailClick:{defaultValue:null,description:"Fired when the user clicks on the detail button when type is `Detail`.",name:"onDetailClick",required:!1,type:{name:"(event: Ui5CustomEvent<MenuItemDomRef, never>) => void"}},accessibilityAttributes:{defaultValue:{value:"{}"},description:`Defines the additional accessibility attributes that will be applied to the component.
The following fields are supported:

- **ariaSetsize**: Defines the number of items in the current set  when not all items in the set are present in the DOM.
**Note:** The value is an integer reflecting the number of items in the complete set. If the size of the entire set is unknown, set \`-1\`.

	- **ariaPosinset**: Defines an element's number or position in the current set when not all items are present in the DOM.
	**Note:** The value is an integer greater than or equal to 1, and less than or equal to the size of the set when that size is known.

**Note:** Available since [v1.15.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.15.0) of **@ui5/webcomponents**.`,name:"accessibilityAttributes",required:!1,type:{name:"ListItemAccessibilityAttributes"}},accessibleName:{defaultValue:{value:"undefined"},description:`Defines the accessible ARIA name of the component.

**Note:** Available since [v1.7.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.7.0) of **@ui5/webcomponents**.`,name:"accessibleName",required:!1,type:{name:"string"}},additionalText:{defaultValue:{value:"undefined"},description:"Defines the `additionalText`, displayed in the end of the menu item.\n\n**Note:** The additional text will not be displayed if there are items added in `items` slot or there are\ncomponents added to `endContent` slot.\n\nThe priority of what will be displayed at the end of the menu item is as follows:\nsub-menu arrow (if there are items added in `items` slot) -> components added in `endContent` -> text set to `additionalText`.\n\n**Note:** Available since [v1.8.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.8.0) of **@ui5/webcomponents**.",name:"additionalText",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Defines whether `MenuItem` is in disabled state.\n\n**Note:** A disabled `MenuItem` is noninteractive.",name:"disabled",required:!1,type:{name:"boolean"}},highlight:{defaultValue:{value:'"None"'},description:'Defines the highlight state of the list items.\nAvailable options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`.\n\n**Note:** Available since [v1.24](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.24) of **@ui5/webcomponents**.',name:"highlight",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'}]}},icon:{defaultValue:{value:"undefined"},description:`Defines the icon to be displayed as graphical element within the component.
The SAP-icons font provides numerous options.

**Example:**

See all the available icons in the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"icon",required:!1,type:{name:"string"}},loading:{defaultValue:{value:"false"},description:"Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding ui5-menu popover.\n\n**Note:** If set to `true` a `BusyIndicator` component will be displayed into the related one to the current `MenuItem` sub-menu popover.\n\n**Note:** Available since [v1.13.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.13.0) of **@ui5/webcomponents**.",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:`Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding ui5-menu popover.

**Note:** Available since [v1.13.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.13.0) of **@ui5/webcomponents**.`,name:"loadingDelay",required:!1,type:{name:"number"}},navigated:{defaultValue:{value:"false"},description:`The navigated state of the list item.
If set to \`true\`, a navigation indicator is displayed at the end of the list item.

**Note:** Available since [v1.10.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.10.0) of **@ui5/webcomponents**.`,name:"navigated",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:"Defines the selected state of the component.",name:"selected",required:!1,type:{name:"boolean"}},text:{defaultValue:{value:"undefined"},description:"Defines the text of the tree item.",name:"text",required:!1,type:{name:"string"}},tooltip:{defaultValue:{value:"undefined"},description:`Defines the text of the tooltip for the menu item.

**Note:** Available since [v1.23.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.23.0) of **@ui5/webcomponents**.`,name:"tooltip",required:!1,type:{name:"string"}},type:{defaultValue:{value:'"Active"'},description:"Defines the visual indication and behavior of the list items.\nAvailable options are `Active` (by default), `Inactive`, `Detail` and `Navigation`.\n\n**Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover,\nwhile with type `Inactive` and `Detail` - will not.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Navigation"'},{value:'"Inactive"'},{value:'"Active"'},{value:'"Detail"'},{value:'"Navigation"'},{value:'"Inactive"'},{value:'"Active"'},{value:'"Detail"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as M};
