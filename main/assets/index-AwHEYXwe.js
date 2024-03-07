import{_ as n}from"./iframe-lvTVDQ9h.js";import"./List-XR6v1E83.js";import{w as o}from"./withWebComponent-WsMVk7rH.js";const e=o("ui5-list",["accessibleName","accessibleNameRef","accessibleRole","busyDelay","footerText","growing","headerText","mode","noDataText","separators"],["busy","indent"],["header"],["item-click","item-close","item-delete","item-toggle","load-more","selection-change"],()=>n(()=>import("./List-XR6v1E83.js").then(t=>t.e),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]),import.meta.url));e.displayName="List";try{e.displayName="List",e.__docgenInfo={description:'The `List` component allows displaying a list of items, advanced keyboard\nhandling support for navigating between items, and predefined modes to improve the development efficiency.\n\nThe `List` is a container for the available list items:\n\n- `StandardListItem`\n- `CustomListItem`\n- `GroupHeaderListItem`\n\nTo benefit from the built-in selection mechanism, you can use the available\nselection modes, such as\n`SingleSelect`, `MultiSelect` and `Delete`.\n\nAdditionally, the `List` provides header, footer, and customization for the list item separators.\n\n### Keyboard Handling\n\n#### Basic Navigation\nThe `List` provides advanced keyboard handling.\nWhen a list is focused the user can use the following keyboard\nshortcuts in order to perform a navigation:\n\n- [UP/DOWN] - Navigates up and down the items\n- [HOME] - Navigates to first item\n- [END] - Navigates to the last item\n\nThe user can use the following keyboard shortcuts to perform actions (such as select, delete),\nwhen the `mode` property is in use:\n\n- [SPACE] - Select an item (if `type` is \'Active\') when `mode` is selection\n- [DELETE] - Delete an item if `mode` property is `Delete`\n\n#### Fast Navigation\nThis component provides a build in fast navigation group which can be used via `F6 / Shift + F6` or ` Ctrl + Alt(Option) + Down /  Ctrl + Alt(Option) + Up`.\nIn order to use this functionality, you need to import the following module:\n`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`\n\n\n\n`import "@ui5/webcomponents/dist/StandardListItem.js";` (for `StandardListItem`)\n\n`import "@ui5/webcomponents/dist/CustomListItem.js";` (for `CustomListItem`)\n\n`import "@ui5/webcomponents/dist/GroupHeaderListItem.js";` (for `GroupHeaderListItem`)\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)',displayName:"List",props:{children:{defaultValue:null,description:"Defines the items of the component.\n\n**Note:** Use `StandardListItem`, `CustomListItem`, and `GroupHeaderListItem` for the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the component header.

**Note:** When \`header\` is set, the
\`headerText\` property is ignored.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},onItemClick:{defaultValue:null,description:"Fired when an item is activated, unless the item's `type` property\nis set to `Inactive`.",name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, ListItemClickEventDetail>) => void"}},onItemClose:{defaultValue:null,description:"Fired when the `Close` button of any item is clicked\n\n**Note:** This event is only applicable to list items that can be closed (such as notification list items),\nnot to be confused with `item-delete`.",name:"onItemClose",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, ListItemCloseEventDetail>) => void"}},onItemDelete:{defaultValue:null,description:"Fired when the Delete button of any item is pressed.\n\n**Note:** A Delete button is displayed on each item,\nwhen the component `mode` property is set to `Delete`.",name:"onItemDelete",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, ListItemDeleteEventDetail>) => void"}},onItemToggle:{defaultValue:null,description:"Fired when the `Toggle` button of any item is clicked.\n\n**Note:** This event is only applicable to list items that can be toggled (such as notification group list items).",name:"onItemToggle",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, ListItemToggleEventDetail>) => void"}},onLoadMore:{defaultValue:null,description:"Fired when the user scrolls to the bottom of the list.\n\n**Note:** The event is fired when the `growing='Scroll'` property is enabled.",name:"onLoadMore",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, never>) => void"}},onSelectionChange:{defaultValue:null,description:"Fired when selection is changed by user interaction\nin `SingleSelect`, `SingleSelectBegin`, `SingleSelectEnd` and `MultiSelect` modes.",name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, ListSelectionChangeEventDetail>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Defines the IDs of the elements that label the input.",name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"list"'},description:"Defines the accessible role of the component.",name:"accessibleRole",required:!1,type:{name:"string"}},busy:{defaultValue:{value:"false"},description:"Defines if the component would display a loading indicator over the list.",name:"busy",required:!1,type:{name:"boolean"}},busyDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the busy indicator will show up for this component.",name:"busyDelay",required:!1,type:{name:"number"}},footerText:{defaultValue:null,description:"Defines the footer text.",name:"footerText",required:!1,type:{name:"string"}},growing:{defaultValue:{value:'"None"'},description:'Defines whether the component will have growing capability either by pressing a `More` button,\nor via user scroll. In both cases `load-more` event is fired.\n\n**Restrictions:** `growing="Scroll"` is not supported for Internet Explorer,\non IE the component will fallback to `growing="Button"`.',name:"growing",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Button"'},{value:'"Button"'},{value:'"Scroll"'},{value:'"None"'},{value:'"Scroll"'}]}},headerText:{defaultValue:null,description:"Defines the component header text.\n\n**Note:** If `header` is set this property is ignored.",name:"headerText",required:!1,type:{name:"string"}},indent:{defaultValue:{value:"false"},description:"Determines whether the component is indented.",name:"indent",required:!1,type:{name:"boolean"}},mode:{defaultValue:{value:'"None"'},description:"Defines the mode of the component.",name:"mode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Delete"'},{value:'"SingleSelect"'},{value:'"MultiSelect"'},{value:'"None"'},{value:'"SingleSelect"'},{value:'"SingleSelectBegin"'},{value:'"SingleSelectEnd"'},{value:'"SingleSelectAuto"'},{value:'"MultiSelect"'},{value:'"Delete"'},{value:'"SingleSelectBegin"'},{value:'"SingleSelectEnd"'},{value:'"SingleSelectAuto"'}]}},noDataText:{defaultValue:null,description:"Defines the text that is displayed when the component contains no items.",name:"noDataText",required:!1,type:{name:"string"}},separators:{defaultValue:{value:'"All"'},description:"Defines the item separator style that is used.",name:"separators",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"All"'},{value:'"Inner"'},{value:'"None"'},{value:'"All"'},{value:'"Inner"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as L};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./List-XR6v1E83.js","./UI5Element-i6xEMhb-.js","./Boot-ZMdbUkXu.js","./VersionInfo-szri6OiK.js","./CustomElementsScopeUtils-E-jGiXBT.js","./withWebComponent-WsMVk7rH.js","./utils-TqRdq3Pf.js","./index-OjgoNOWw.js","./jsx-runtime-DtaoT6pD.js","./useIsomorphicLayoutEffect-s31TYDr7.js","./ResizeHandler-_spraO4D.js","./ItemNavigation-X-YJoWkI.js","./Keys-ZEuNsqmZ.js","./getActiveElement-IIKAy3xo.js","./event-lM5HanI-.js","./slot-HSrR9XJ-.js","./Integer-kog98579.js","./AriaLabelHelper-RbKlVwzD.js","./TabbableElements-L1VqloMt.js","./isElementHidden-d3-Fo4V6.js","./getEffectiveScrollbarStyle-Gz48PLeD.js","./i18nBundle-QOmUTBjc.js","./debounce-8VpZswfd.js","./parameters-bundle.css-I2VxmuZZ.js","./BusyIndicator-NGPCnEV1.js","./Label-6T3Q5KMo.js","./WrappingType-avPrqc94.js","./i18n-defaults-KFYnnpmz.js","./class-map-QoPRPm_o.js","./style-map-T1SBcBMD.js","./BrowserScrollbar.css-amc9gXm3.js","./CheckBox-_duEPl4_.js","./ValueState-zUcANXoY.js","./accept-KppFqdXn.js","./Icons-2Vjs2kvs.js","./Icon-ONjMh5dV.js","./RadioButton--r-pxyKg.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
