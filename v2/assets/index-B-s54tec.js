const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./List-DVPfGYAo.js","./withWebComponent-DykTwaBJ.js","./utils-BXNPXA0w.js","./index-BQ1WsyJB.js","./useIsomorphicLayoutEffect-Cwmfti2R.js","./ResizeHandler-CwA30WlK.js","./ItemNavigation-CJ0Lvk1x.js","./Keys-F_3Gvx0K.js","./getActiveElement-kltGt_DR.js","./event-Dq0fpeHi.js","./slot-_4yKMUwC.js","./AriaLabelHelper-C5uDZewF.js","./isElementInView-CjfjvN8v.js","./getEffectiveScrollbarStyle-C7TfqF8H.js","./isElementHidden-B4HqmI2E.js","./isElementClickable-0ACQ4G_A.js","./i18nBundle-CEPDwMcb.js","./debounce-TTkz9ISH.js","./class-map-BBkLNtsu.js","./parameters-bundle.css-BFbT_feV.js","./BusyIndicator-Cc-m-tN-.js","./Label-Cn8Z-EZA.js","./i18n-defaults-Ddp6Qu_n.js","./if-defined-Pg2MF6OO.js","./style-map-CP3POd5N.js","./BrowserScrollbar.css-3d9vQOhG.js","./MarkedEvents-CAur0wxK.js","./decline-PQHY0vmQ.js","./Icon-C1aVUqaK.js","./i18n-defaults-4yB5uAXJ.js","./TabbableElements-BJJu_CDc.js","./RadioButton-fVFozh54.js","./ValueState-Bg0UWejw.js","./CheckBox-0-u6R5RF.js","./accept-068edCLR.js","./Button-gEiq340s.js","./willShowContent-CZcfsNXp.js","./slim-arrow-right-BYeS3U5E.js","./Avatar-CTYNbiCX.js","./employee-CVOZDo5u.js","./alert-B5x9ZRdn.js"])))=>i.map(i=>d[i]);
import{_ as n}from"./iframe-CwARS6gk.js";import"./List-DVPfGYAo.js";import{w as i}from"./withWebComponent-DykTwaBJ.js";const e=i("ui5-list",["accessibleName","accessibleNameRef","accessibleRole","footerText","growing","growingButtonText","headerText","loadingDelay","noDataText","selectionMode","separators"],["indent","loading"],["header"],["item-click","item-close","item-delete","item-toggle","load-more","move-over","move","selection-change"],()=>n(()=>import("./List-DVPfGYAo.js").then(t=>t.o),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]),import.meta.url));e.displayName="List";try{e.displayName="List",e.__docgenInfo={description:`The \`List\` component allows displaying a list of items, advanced keyboard
handling support for navigating between items, and predefined modes to improve the development efficiency.

The \`List\` is a container for the available list items:

- \`ListItemStandard\`
- \`ListItemCustom\`
- \`ListItemGroup\`

To benefit from the built-in selection mechanism, you can use the available
selection modes, such as
\`Single\`, \`Multiple\` and \`Delete\`.

Additionally, the \`List\` provides header, footer, and customization for the list item separators.

### Keyboard Handling

#### Basic Navigation
The \`List\` provides advanced keyboard handling.
When a list is focused the user can use the following keyboard
shortcuts in order to perform a navigation:

- [Up] or [Down] - Navigates up and down the items
- [Home] - Navigates to first item
- [End] - Navigates to the last item

The user can use the following keyboard shortcuts to perform actions (such as select, delete),
when the \`selectionMode\` property is in use:

- [Space] - Select an item (if \`type\` is 'Active') when \`selectionMode\` is selection
- [Delete] - Delete an item if \`selectionMode\` property is \`Delete\`

#### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:
\`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`



\`import "@ui5/webcomponents/dist/ListItemStandard.js";\` (for \`ListItemStandard\`)

\`import "@ui5/webcomponents/dist/ListItemCustom.js";\` (for \`ListItemCustom\`)

\`import "@ui5/webcomponents/dist/ListItemGroup.js";\` (for \`ListItemGroup\`)

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"List",props:{children:{defaultValue:null,description:"Defines the items of the component.\n\n**Note:** Use `ListItemStandard`, `ListItemCustom`, and `ListItemGroup` for the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the component header.

**Note:** When \`header\` is set, the
\`headerText\` property is ignored.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},onItemClick:{defaultValue:null,description:"Fired when an item is activated, unless the item's `type` property\nis set to `Inactive`.\n\n**Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.",name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, ListItemClickEventDetail>) => void"}},onItemClose:{defaultValue:null,description:"Fired when the `Close` button of any item is clicked\n\n**Note:** This event is only applicable to list items that can be closed (such as notification list items),\nnot to be confused with `item-delete`.",name:"onItemClose",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, ListItemCloseEventDetail>) => void"}},onItemDelete:{defaultValue:null,description:"Fired when the Delete button of any item is pressed.\n\n**Note:** A Delete button is displayed on each item,\nwhen the component `selectionMode` property is set to `Delete`.",name:"onItemDelete",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, ListItemDeleteEventDetail>) => void"}},onItemToggle:{defaultValue:null,description:"Fired when the `Toggle` button of any item is clicked.\n\n**Note:** This event is only applicable to list items that can be toggled (such as notification group list items).",name:"onItemToggle",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, ListItemToggleEventDetail>) => void"}},onLoadMore:{defaultValue:null,description:"Fired when the user scrolls to the bottom of the list.\n\n**Note:** The event is fired when the `growing='Scroll'` property is enabled.",name:"onLoadMore",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, never>) => void"}},onMove:{defaultValue:null,description:"Fired when a movable list item is dropped onto a drop target.\n\n**Note:** `move` event is fired only if there was a preceding `move-over` with prevented default action.\n\n**Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.",name:"onMove",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, ListMoveEventDetail>) => void"}},onMoveOver:{defaultValue:null,description:`Fired when a movable list item is moved over a potential drop target during a dragging operation.

If the new position is valid, prevent the default action of the event using \`preventDefault()\`.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"onMoveOver",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, ListMoveEventDetail>) => void"}},onSelectionChange:{defaultValue:null,description:"Fired when selection is changed by user interaction\nin `Single`, `SingleStart`, `SingleEnd` and `Multiple` selection modes.\n\n**Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.",name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, ListSelectionChangeEventDetail>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Defines the IDs of the elements that label the input.",name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"List"'},description:"Defines the accessible role of the component.",name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"Menu"'},{value:'"List"'},{value:'"Menu"'},{value:'"Tree"'},{value:'"ListBox"'},{value:'"List"'},{value:'"Tree"'},{value:'"ListBox"'}]}},footerText:{defaultValue:{value:"undefined"},description:"Defines the footer text.",name:"footerText",required:!1,type:{name:"string"}},growing:{defaultValue:{value:'"None"'},description:'Defines whether the component will have growing capability either by pressing a `More` button,\nor via user scroll. In both cases `load-more` event is fired.\n\n**Restrictions:** `growing="Scroll"` is not supported for Internet Explorer,\non IE the component will fallback to `growing="Button"`.',name:"growing",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Button"'},{value:'"Button"'},{value:'"Scroll"'},{value:'"None"'},{value:'"Scroll"'}]}},growingButtonText:{defaultValue:{value:"undefined"},description:`Defines the text that will be displayed inside the growing button.

**Note:** If not specified a built-in text will be displayed.

**Note:** This property takes effect if the \`growing\` property is set to the \`Button\`.

**Note:** Available since [v1.24](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.24) of **@ui5/webcomponents**.`,name:"growingButtonText",required:!1,type:{name:"string"}},headerText:{defaultValue:{value:"undefined"},description:"Defines the component header text.\n\n**Note:** If `header` is set this property is ignored.",name:"headerText",required:!1,type:{name:"string"}},indent:{defaultValue:{value:"false"},description:"Determines whether the component is indented.",name:"indent",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Defines if the component would display a loading indicator over the list.",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the loading indicator will show up for this component.",name:"loadingDelay",required:!1,type:{name:"number"}},noDataText:{defaultValue:{value:"undefined"},description:"Defines the text that is displayed when the component contains no items.",name:"noDataText",required:!1,type:{name:"string"}},selectionMode:{defaultValue:{value:'"None"'},description:"Defines the selection mode of the component.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Delete"'},{value:'"Single"'},{value:'"Multiple"'},{value:'"None"'},{value:'"Single"'},{value:'"SingleStart"'},{value:'"SingleEnd"'},{value:'"SingleAuto"'},{value:'"Multiple"'},{value:'"Delete"'},{value:'"SingleStart"'},{value:'"SingleEnd"'},{value:'"SingleAuto"'}]}},separators:{defaultValue:{value:'"All"'},description:"Defines the item separator style that is used.",name:"separators",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"All"'},{value:'"Inner"'},{value:'"None"'},{value:'"All"'},{value:'"Inner"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{e.displayName="List",e.__docgenInfo={description:`The \`List\` component allows displaying a list of items, advanced keyboard
handling support for navigating between items, and predefined modes to improve the development efficiency.

The \`List\` is a container for the available list items:

- \`ListItemStandard\`
- \`ListItemCustom\`
- \`ListItemGroup\`

To benefit from the built-in selection mechanism, you can use the available
selection modes, such as
\`Single\`, \`Multiple\` and \`Delete\`.

Additionally, the \`List\` provides header, footer, and customization for the list item separators.

### Keyboard Handling

#### Basic Navigation
The \`List\` provides advanced keyboard handling.
When a list is focused the user can use the following keyboard
shortcuts in order to perform a navigation:

- [Up] or [Down] - Navigates up and down the items
- [Home] - Navigates to first item
- [End] - Navigates to the last item

The user can use the following keyboard shortcuts to perform actions (such as select, delete),
when the \`selectionMode\` property is in use:

- [Space] - Select an item (if \`type\` is 'Active') when \`selectionMode\` is selection
- [Delete] - Delete an item if \`selectionMode\` property is \`Delete\`

#### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:
\`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"\`



\`import "@ui5/webcomponents/dist/ListItemStandard.js";\` (for \`ListItemStandard\`)

\`import "@ui5/webcomponents/dist/ListItemCustom.js";\` (for \`ListItemCustom\`)

\`import "@ui5/webcomponents/dist/ListItemGroup.js";\` (for \`ListItemGroup\`)

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"List",props:{children:{defaultValue:null,description:"Defines the items of the component.\n\n**Note:** Use `ListItemStandard`, `ListItemCustom`, and `ListItemGroup` for the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the component header.

**Note:** When \`header\` is set, the
\`headerText\` property is ignored.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},onItemClick:{defaultValue:null,description:"Fired when an item is activated, unless the item's `type` property\nis set to `Inactive`.\n\n**Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.",name:"onItemClick",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, ListItemClickEventDetail>) => void"}},onItemClose:{defaultValue:null,description:"Fired when the `Close` button of any item is clicked\n\n**Note:** This event is only applicable to list items that can be closed (such as notification list items),\nnot to be confused with `item-delete`.",name:"onItemClose",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, ListItemCloseEventDetail>) => void"}},onItemDelete:{defaultValue:null,description:"Fired when the Delete button of any item is pressed.\n\n**Note:** A Delete button is displayed on each item,\nwhen the component `selectionMode` property is set to `Delete`.",name:"onItemDelete",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, ListItemDeleteEventDetail>) => void"}},onItemToggle:{defaultValue:null,description:"Fired when the `Toggle` button of any item is clicked.\n\n**Note:** This event is only applicable to list items that can be toggled (such as notification group list items).",name:"onItemToggle",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, ListItemToggleEventDetail>) => void"}},onLoadMore:{defaultValue:null,description:"Fired when the user scrolls to the bottom of the list.\n\n**Note:** The event is fired when the `growing='Scroll'` property is enabled.",name:"onLoadMore",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, never>) => void"}},onMove:{defaultValue:null,description:"Fired when a movable list item is dropped onto a drop target.\n\n**Note:** `move` event is fired only if there was a preceding `move-over` with prevented default action.\n\n**Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.",name:"onMove",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, ListMoveEventDetail>) => void"}},onMoveOver:{defaultValue:null,description:`Fired when a movable list item is moved over a potential drop target during a dragging operation.

If the new position is valid, prevent the default action of the event using \`preventDefault()\`.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"onMoveOver",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, ListMoveEventDetail>) => void"}},onSelectionChange:{defaultValue:null,description:"Fired when selection is changed by user interaction\nin `Single`, `SingleStart`, `SingleEnd` and `Multiple` selection modes.\n\n**Note:** Call `event.preventDefault()` inside the handler of this event to prevent its default action/s.",name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<ListDomRef, ListSelectionChangeEventDetail>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:{value:"undefined"},description:"Defines the IDs of the elements that label the input.",name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"List"'},description:"Defines the accessible role of the component.",name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"Menu"'},{value:'"List"'},{value:'"Menu"'},{value:'"Tree"'},{value:'"ListBox"'},{value:'"List"'},{value:'"Tree"'},{value:'"ListBox"'}]}},footerText:{defaultValue:{value:"undefined"},description:"Defines the footer text.",name:"footerText",required:!1,type:{name:"string"}},growing:{defaultValue:{value:'"None"'},description:'Defines whether the component will have growing capability either by pressing a `More` button,\nor via user scroll. In both cases `load-more` event is fired.\n\n**Restrictions:** `growing="Scroll"` is not supported for Internet Explorer,\non IE the component will fallback to `growing="Button"`.',name:"growing",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Button"'},{value:'"Button"'},{value:'"Scroll"'},{value:'"None"'},{value:'"Scroll"'}]}},growingButtonText:{defaultValue:{value:"undefined"},description:`Defines the text that will be displayed inside the growing button.

**Note:** If not specified a built-in text will be displayed.

**Note:** This property takes effect if the \`growing\` property is set to the \`Button\`.

**Note:** Available since [v1.24](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.24) of **@ui5/webcomponents**.`,name:"growingButtonText",required:!1,type:{name:"string"}},headerText:{defaultValue:{value:"undefined"},description:"Defines the component header text.\n\n**Note:** If `header` is set this property is ignored.",name:"headerText",required:!1,type:{name:"string"}},indent:{defaultValue:{value:"false"},description:"Determines whether the component is indented.",name:"indent",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"Defines if the component would display a loading indicator over the list.",name:"loading",required:!1,type:{name:"boolean"}},loadingDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the loading indicator will show up for this component.",name:"loadingDelay",required:!1,type:{name:"number"}},noDataText:{defaultValue:{value:"undefined"},description:"Defines the text that is displayed when the component contains no items.",name:"noDataText",required:!1,type:{name:"string"}},selectionMode:{defaultValue:{value:'"None"'},description:"Defines the selection mode of the component.",name:"selectionMode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Delete"'},{value:'"Single"'},{value:'"Multiple"'},{value:'"None"'},{value:'"Single"'},{value:'"SingleStart"'},{value:'"SingleEnd"'},{value:'"SingleAuto"'},{value:'"Multiple"'},{value:'"Delete"'},{value:'"SingleStart"'},{value:'"SingleEnd"'},{value:'"SingleAuto"'}]}},separators:{defaultValue:{value:'"All"'},description:"Defines the item separator style that is used.",name:"separators",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"All"'},{value:'"Inner"'},{value:'"None"'},{value:'"All"'},{value:'"Inner"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as L};
