const __vite__fileDeps=["./TableRow-CXVq3Iy2.js","./UI5Element-D1gTBhJw.js","./Boot-CUKJMqeB.js","./EventProvider-CVfkyUHo.js","./useIsomorphicLayoutEffect-CJg151Ok.js","./index-CP2MHerv.js","./CustomElementsScopeUtils-Br5bzw3_.js","./withWebComponent-BqYi3caL.js","./utils-BVRly08L.js","./event-Dq0fpeHi.js","./slot--DoKcWSY.js","./ResizeHandler-Cj9P7VXu.js","./ItemNavigation-twDmSpa0.js","./Keys-B00bFMgT.js","./getActiveElement-kltGt_DR.js","./Integer-WDQzHAdZ.js","./TabbableElements-BE9nZgBS.js","./isElementHidden-B4HqmI2E.js","./AriaLabelHelper-LMIEtYQL.js","./i18nBundle-DqiJMVwP.js","./debounce-TTkz9ISH.js","./BusyIndicator-DqvbalXs.js","./Device-RcFucVeJ.js","./Label-aqqXsG4M.js","./WrappingType-CW8URInd.js","./i18n-defaults-DUapXIrq.js","./parameters-bundle.css-B_nLitlw.js","./class-map-CsNukgzr.js","./CheckBox-BLD4vbO-.js","./ValueState-Bg0UWejw.js","./accept-Tej0xwW-.js","./Icons-DKhvPm64.js","./Icon-DybkHgDw.js","./style-map-Blizc8Vd.js","./MarkedEvents-CAur0wxK.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{j as e}from"./useIsomorphicLayoutEffect-CJg151Ok.js";import{T}from"./TableRow-CXVq3Iy2.js";import{r as S}from"./index-CP2MHerv.js";import{_ as c}from"./iframe-Bpg9eTUf.js";import{w as p}from"./withWebComponent-BqYi3caL.js";const t=p("ui5-table-cell",[],[],[],[],()=>c(()=>import("./TableRow-CXVq3Iy2.js").then(n=>n.d),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]),import.meta.url));t.displayName="TableCell";try{t.displayName="TableCell",t.__docgenInfo={description:"The `TableCell` component defines the structure of the data in a single `Table` cell.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"TableCell",props:{children:{defaultValue:null,description:"Specifies the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{t.displayName="TableCell",t.__docgenInfo={description:"The `TableCell` component defines the structure of the data in a single `Table` cell.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"TableCell",props:{children:{defaultValue:null,description:"Specifies the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const o=p("ui5-table-column",["minWidth","popinDisplay","popinText"],["demandPopin"],[],[],()=>c(()=>import("./TableRow-CXVq3Iy2.js").then(n=>n.e),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]),import.meta.url));o.displayName="TableColumn";try{o.displayName="TableColumn",o.__docgenInfo={description:"The `TableColumn` component allows to define column specific properties that are applied\nwhen rendering the `Table` component.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"TableColumn",props:{children:{defaultValue:null,description:"Defines the content of the column header",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},demandPopin:{defaultValue:{value:"false"},description:"According to your `minWidth` settings, the component can be hidden\nin different screen sizes.\n\nSetting this property to `true`, shows this column as pop-in instead of hiding it.",name:"demandPopin",required:!1,type:{name:"boolean"}},minWidth:{defaultValue:{value:"Infinity"},description:"Defines the minimum table width required to display this column. By default it is always displayed.\n\nThe responsive behavior of the `Table` is determined by this property. As an example, by setting\n`minWidth` property to `400` sets the minimum width to 400 pixels, and	shows this column on tablet (and desktop) but hides it on mobile.\n\nFor further responsive design options, see `demandPopin` property.",name:"minWidth",required:!1,type:{name:"number"}},popinDisplay:{defaultValue:{value:'"Block"'},description:`Defines how the popin row is displayed.

**The available values are:**

- \`Block\`
- \`Inline\``,name:"popinDisplay",required:!1,type:{name:"enum",value:[{value:'"Block"'},{value:'"Inline"'},{value:'"Block"'},{value:'"Inline"'}]}},popinText:{defaultValue:null,description:"The text for the column when it pops in.",name:"popinText",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{o.displayName="TableColumn",o.__docgenInfo={description:"The `TableColumn` component allows to define column specific properties that are applied\nwhen rendering the `Table` component.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"TableColumn",props:{children:{defaultValue:null,description:"Defines the content of the column header",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},demandPopin:{defaultValue:{value:"false"},description:"According to your `minWidth` settings, the component can be hidden\nin different screen sizes.\n\nSetting this property to `true`, shows this column as pop-in instead of hiding it.",name:"demandPopin",required:!1,type:{name:"boolean"}},minWidth:{defaultValue:{value:"Infinity"},description:"Defines the minimum table width required to display this column. By default it is always displayed.\n\nThe responsive behavior of the `Table` is determined by this property. As an example, by setting\n`minWidth` property to `400` sets the minimum width to 400 pixels, and	shows this column on tablet (and desktop) but hides it on mobile.\n\nFor further responsive design options, see `demandPopin` property.",name:"minWidth",required:!1,type:{name:"number"}},popinDisplay:{defaultValue:{value:'"Block"'},description:`Defines how the popin row is displayed.

**The available values are:**

- \`Block\`
- \`Inline\``,name:"popinDisplay",required:!1,type:{name:"enum",value:[{value:'"Block"'},{value:'"Inline"'},{value:'"Block"'},{value:'"Inline"'}]}},popinText:{defaultValue:null,description:"The text for the column when it pops in.",name:"popinText",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const i=p("ui5-table-row",["type"],["navigated","selected"],[],[],()=>c(()=>import("./TableRow-CXVq3Iy2.js").then(n=>n.f),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]),import.meta.url));i.displayName="TableRow";try{i.displayName="TableRow",i.__docgenInfo={description:"The `TableRow` component represents a row in the `Table`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"TableRow",props:{children:{defaultValue:null,description:"Defines the cells of the component.\n\n**Note:** Use `TableCell` for the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},navigated:{defaultValue:{value:"false"},description:`Indicates if the table row is navigated.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.`,name:"navigated",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:`Defines the row's selected state.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.`,name:"selected",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:'"Inactive"'},description:`Defines the visual indication and behavior of the component.

**Note:** When set to \`Active\`, the item will provide visual response upon press,
while with type \`Inactive\`-will not.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"Inactive"'},{value:'"Active"'},{value:'"Inactive"'},{value:'"Active"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{i.displayName="TableRow",i.__docgenInfo={description:"The `TableRow` component represents a row in the `Table`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)",displayName:"TableRow",props:{children:{defaultValue:null,description:"Defines the cells of the component.\n\n**Note:** Use `TableCell` for the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},navigated:{defaultValue:{value:"false"},description:`Indicates if the table row is navigated.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.`,name:"navigated",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:`Defines the row's selected state.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.`,name:"selected",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:'"Inactive"'},description:`Defines the visual indication and behavior of the component.

**Note:** When set to \`Active\`, the item will provide visual response upon press,
while with type \`Inactive\`-will not.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.`,name:"type",required:!1,type:{name:"enum",value:[{value:'"Inactive"'},{value:'"Active"'},{value:'"Inactive"'},{value:'"Active"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const a=p("ui5-table",["accessibleName","accessibleNameRef","busyDelay","growing","growingButtonSubtext","growingButtonText","mode","noDataText"],["busy","hideNoData","stickyColumnHeader"],["columns"],["load-more","popin-change","row-click","selection-change"],()=>c(()=>import("./TableRow-CXVq3Iy2.js").then(n=>n.c),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]),import.meta.url));a.displayName="Table";try{a.displayName="Table",a.__docgenInfo={description:'The `Table` component provides a set of sophisticated and convenient functions for responsive table design.\nIt provides a comprehensive set of features for displaying and dealing with vast amounts of data.\n\nTo render the `Table` properly, the order of the `columns` should match with the\norder of the item `cells` in the `rows`.\n\nDesktop and tablet devices are supported.\nOn tablets, special consideration should be given to the number of visible columns\nand rows due to the limited performance of some devices.\n\n### Selection\nTo benefit from the selection mechanism of `Table` component, you can use the available selection modes:\n`SingleSelect` and `MultiSelect`.\n\nIn additition to the used mode, you can also specify the `TableRow` type choosing between\n`Active` or `Inactive`.\n\nIn `SingleSelect` mode, you can select both an `Active` and `Inactive` row via mouse or\nby pressing the `Space` or `Enter` keys.\n\nIn `MultiSelect` mode, you can select both an `Active` and `Inactive` row by pressing the\n`Space` key when a row is on focus or via mouse click over the selection checkbox of the row.\nIn order to select all the available rows at once, you can use the selection checkbox presented in the table\'s header.\n\n**Note:** Currently, when a column is shown as a pop-in, the visual indication for selection is not presented over it.\n\n### Keyboard Handling\n\n#### Fast Navigation\nThis component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].\nIn order to use this functionality, you need to import the following module:\n`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`\n\nFurthermore, you can interact with `Table` via the following keys.\n\n- [F7] - If focus is on an interactive control inside an item, moves focus to the corresponding item.\n- [Ctrl]+[A] - Selects all items, if MultiSelect mode is enabled.\n- [Home]/[End] - Focuses the first/last item.\n- [Page Up]/[Page Down] - Moves focus up/down by page size (20 items by default).\n- [Alt]+[Down]/[Up] - Switches focus between header, last focused item, and More button (if applies) in either direction.\n- [Shift]+[Down]/[Up] - Selects the next/previous item in a MultiSelect table, if the current item is selected (Range selection). Otherwise, deselects them (Range deselection).\n- [Shift]+[Home]/[End] - Range selection to the first/last item of the List.\n- [Ctrl]+[Home]/[End] - Same behavior as HOME & END.\n\n### ES6 Module Import\n\n- `import "@ui5/webcomponents-compat/dist/Table.js";`\n- `import "@ui5/webcomponents-compat/dist/TableColumn.js";` (`TableColumn`)\n- `import "@ui5/webcomponents-compat/dist/TableRow.js";` (`TableRow`)\n- `import "@ui5/webcomponents-compat/dist/TableGroupRow.js";` (`TableGroupRow`)\n- `import "@ui5/webcomponents-compat/dist/TableCell.js";` (`TableCell`)\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)',displayName:"Table",props:{children:{defaultValue:null,description:"Defines the component rows.\n\n**Note:** Use `TableRow` for the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},columns:{defaultValue:null,description:`Defines the configuration for the columns of the component.

**Note:** Use \`TableColumn\` for the intended design.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="columns"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"columns",required:!1,type:{name:"UI5WCSlotsNode"}},onLoadMore:{defaultValue:null,description:"Fired when the user presses the `More` button or scrolls to the table's end.\n\n**Note:** The event will be fired if `growing` is set to `Button` or `Scroll`.\n\n**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.",name:"onLoadMore",required:!1,type:{name:"(event: Ui5CustomEvent<TableDomRef, never>) => void"}},onPopinChange:{defaultValue:null,description:"Fired when `TableColumn` is shown as a pop-in instead of hiding it.\n\n**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.",name:"onPopinChange",required:!1,type:{name:"(event: Ui5CustomEvent<TableDomRef, TablePopinChangeEventDetail>) => void"}},onRowClick:{defaultValue:null,description:"Fired when a row in `Active` mode is clicked or `Enter` key is pressed.",name:"onRowClick",required:!1,type:{name:"(event: Ui5CustomEvent<TableDomRef, TableRowClickEventDetail>) => void"}},onSelectionChange:{defaultValue:null,description:"Fired when selection is changed by user interaction\nin `SingleSelect` and `MultiSelect` modes.\n\n**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.",name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<TableDomRef, TableSelectionChangeEventDetail>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:`Defines the accessible ARIA name of the component.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.`,name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:`Receives id(or many ids) of the elements that label the component.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},busy:{defaultValue:{value:"false"},description:`Defines if the table is in busy state.

In this state the component's opacity is reduced
and busy indicator is displayed at the bottom of the table.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.`,name:"busy",required:!1,type:{name:"boolean"}},busyDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the busy indicator will show up for this component.",name:"busyDelay",required:!1,type:{name:"number"}},growing:{defaultValue:{value:'"None"'},description:'Defines whether the table will have growing capability either by pressing a `More` button,\nor via user scroll. In both cases `load-more` event is fired.\n\nAvailable options:\n\n`Button` - Shows a `More` button at the bottom of the table, pressing of which triggers the `load-more` event.\n\n`Scroll` - The `load-more` event is triggered when the user scrolls to the bottom of the table;\n\n`None` (default) - The growing is off.\n\n**Restrictions:** `growing="Scroll"` is not supported for Internet Explorer,\nand the component will fallback to `growing="Button"`.\n\n**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.',name:"growing",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Button"'},{value:'"Button"'},{value:'"Scroll"'},{value:'"None"'},{value:'"Scroll"'}]}},growingButtonSubtext:{defaultValue:null,description:"Defines the subtext that will be displayed under the `growingButtonText`.\n\n**Note:** This property takes effect if `growing` is set to `Button`.\n\n**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.",name:"growingButtonSubtext",required:!1,type:{name:"string"}},growingButtonText:{defaultValue:null,description:`Defines the text that will be displayed inside the growing button at the bottom of the table,
meant for loading more rows upon press.

**Note:** If not specified a built-in text will be displayed.

**Note:** This property takes effect if \`growing\` is set to \`Button\`.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.`,name:"growingButtonText",required:!1,type:{name:"string"}},hideNoData:{defaultValue:{value:"false"},description:"Defines if the value of `noDataText` will be diplayed when there is no rows present in the table.\n\n**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.",name:"hideNoData",required:!1,type:{name:"boolean"}},mode:{defaultValue:{value:'"None"'},description:`Defines the mode of the component.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.`,name:"mode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"SingleSelect"'},{value:'"MultiSelect"'},{value:'"SingleSelect"'},{value:'"MultiSelect"'}]}},noDataText:{defaultValue:null,description:"Defines the text that will be displayed when there is no data and `hideNoData` is not present.",name:"noDataText",required:!1,type:{name:"string"}},stickyColumnHeader:{defaultValue:{value:"false"},description:`Determines whether the column headers remain fixed at the top of the page during
vertical scrolling as long as the Web Component is in the viewport.

**Restrictions:**

- Browsers that do not support this feature:

- Internet Explorer
- Microsoft Edge lower than version 41 (EdgeHTML 16)
- Mozilla Firefox lower than version 59

- Scrolling behavior:

- If the Web Component is placed in layout containers that have the \`overflow: hidden\`
or \`overflow: auto\` style definition, this can
prevent the sticky elements of the Web Component from becoming fixed at the top of the viewport.`,name:"stickyColumnHeader",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{a.displayName="Table",a.__docgenInfo={description:'The `Table` component provides a set of sophisticated and convenient functions for responsive table design.\nIt provides a comprehensive set of features for displaying and dealing with vast amounts of data.\n\nTo render the `Table` properly, the order of the `columns` should match with the\norder of the item `cells` in the `rows`.\n\nDesktop and tablet devices are supported.\nOn tablets, special consideration should be given to the number of visible columns\nand rows due to the limited performance of some devices.\n\n### Selection\nTo benefit from the selection mechanism of `Table` component, you can use the available selection modes:\n`SingleSelect` and `MultiSelect`.\n\nIn additition to the used mode, you can also specify the `TableRow` type choosing between\n`Active` or `Inactive`.\n\nIn `SingleSelect` mode, you can select both an `Active` and `Inactive` row via mouse or\nby pressing the `Space` or `Enter` keys.\n\nIn `MultiSelect` mode, you can select both an `Active` and `Inactive` row by pressing the\n`Space` key when a row is on focus or via mouse click over the selection checkbox of the row.\nIn order to select all the available rows at once, you can use the selection checkbox presented in the table\'s header.\n\n**Note:** Currently, when a column is shown as a pop-in, the visual indication for selection is not presented over it.\n\n### Keyboard Handling\n\n#### Fast Navigation\nThis component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].\nIn order to use this functionality, you need to import the following module:\n`import "@ui5/webcomponents-base/dist/features/F6Navigation.js"`\n\nFurthermore, you can interact with `Table` via the following keys.\n\n- [F7] - If focus is on an interactive control inside an item, moves focus to the corresponding item.\n- [Ctrl]+[A] - Selects all items, if MultiSelect mode is enabled.\n- [Home]/[End] - Focuses the first/last item.\n- [Page Up]/[Page Down] - Moves focus up/down by page size (20 items by default).\n- [Alt]+[Down]/[Up] - Switches focus between header, last focused item, and More button (if applies) in either direction.\n- [Shift]+[Down]/[Up] - Selects the next/previous item in a MultiSelect table, if the current item is selected (Range selection). Otherwise, deselects them (Range deselection).\n- [Shift]+[Home]/[End] - Range selection to the first/last item of the List.\n- [Ctrl]+[Home]/[End] - Same behavior as HOME & END.\n\n### ES6 Module Import\n\n- `import "@ui5/webcomponents-compat/dist/Table.js";`\n- `import "@ui5/webcomponents-compat/dist/TableColumn.js";` (`TableColumn`)\n- `import "@ui5/webcomponents-compat/dist/TableRow.js";` (`TableRow`)\n- `import "@ui5/webcomponents-compat/dist/TableGroupRow.js";` (`TableGroupRow`)\n- `import "@ui5/webcomponents-compat/dist/TableCell.js";` (`TableCell`)\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)',displayName:"Table",props:{children:{defaultValue:null,description:"Defines the component rows.\n\n**Note:** Use `TableRow` for the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},columns:{defaultValue:null,description:`Defines the configuration for the columns of the component.

**Note:** Use \`TableColumn\` for the intended design.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="columns"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"columns",required:!1,type:{name:"UI5WCSlotsNode"}},onLoadMore:{defaultValue:null,description:"Fired when the user presses the `More` button or scrolls to the table's end.\n\n**Note:** The event will be fired if `growing` is set to `Button` or `Scroll`.\n\n**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.",name:"onLoadMore",required:!1,type:{name:"(event: Ui5CustomEvent<TableDomRef, never>) => void"}},onPopinChange:{defaultValue:null,description:"Fired when `TableColumn` is shown as a pop-in instead of hiding it.\n\n**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.",name:"onPopinChange",required:!1,type:{name:"(event: Ui5CustomEvent<TableDomRef, TablePopinChangeEventDetail>) => void"}},onRowClick:{defaultValue:null,description:"Fired when a row in `Active` mode is clicked or `Enter` key is pressed.",name:"onRowClick",required:!1,type:{name:"(event: Ui5CustomEvent<TableDomRef, TableRowClickEventDetail>) => void"}},onSelectionChange:{defaultValue:null,description:"Fired when selection is changed by user interaction\nin `SingleSelect` and `MultiSelect` modes.\n\n**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.",name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<TableDomRef, TableSelectionChangeEventDetail>) => void"}},accessibleName:{defaultValue:{value:"undefined"},description:`Defines the accessible ARIA name of the component.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.`,name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:`Receives id(or many ids) of the elements that label the component.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.`,name:"accessibleNameRef",required:!1,type:{name:"string"}},busy:{defaultValue:{value:"false"},description:`Defines if the table is in busy state.

In this state the component's opacity is reduced
and busy indicator is displayed at the bottom of the table.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.`,name:"busy",required:!1,type:{name:"boolean"}},busyDelay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the busy indicator will show up for this component.",name:"busyDelay",required:!1,type:{name:"number"}},growing:{defaultValue:{value:'"None"'},description:'Defines whether the table will have growing capability either by pressing a `More` button,\nor via user scroll. In both cases `load-more` event is fired.\n\nAvailable options:\n\n`Button` - Shows a `More` button at the bottom of the table, pressing of which triggers the `load-more` event.\n\n`Scroll` - The `load-more` event is triggered when the user scrolls to the bottom of the table;\n\n`None` (default) - The growing is off.\n\n**Restrictions:** `growing="Scroll"` is not supported for Internet Explorer,\nand the component will fallback to `growing="Button"`.\n\n**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.',name:"growing",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Button"'},{value:'"Button"'},{value:'"Scroll"'},{value:'"None"'},{value:'"Scroll"'}]}},growingButtonSubtext:{defaultValue:null,description:"Defines the subtext that will be displayed under the `growingButtonText`.\n\n**Note:** This property takes effect if `growing` is set to `Button`.\n\n**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.",name:"growingButtonSubtext",required:!1,type:{name:"string"}},growingButtonText:{defaultValue:null,description:`Defines the text that will be displayed inside the growing button at the bottom of the table,
meant for loading more rows upon press.

**Note:** If not specified a built-in text will be displayed.

**Note:** This property takes effect if \`growing\` is set to \`Button\`.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.`,name:"growingButtonText",required:!1,type:{name:"string"}},hideNoData:{defaultValue:{value:"false"},description:"Defines if the value of `noDataText` will be diplayed when there is no rows present in the table.\n\n**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.",name:"hideNoData",required:!1,type:{name:"boolean"}},mode:{defaultValue:{value:'"None"'},description:`Defines the mode of the component.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents-compat**.`,name:"mode",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"SingleSelect"'},{value:'"MultiSelect"'},{value:'"SingleSelect"'},{value:'"MultiSelect"'}]}},noDataText:{defaultValue:null,description:"Defines the text that will be displayed when there is no data and `hideNoData` is not present.",name:"noDataText",required:!1,type:{name:"string"}},stickyColumnHeader:{defaultValue:{value:"false"},description:`Determines whether the column headers remain fixed at the top of the page during
vertical scrolling as long as the Web Component is in the viewport.

**Restrictions:**

- Browsers that do not support this feature:

- Internet Explorer
- Microsoft Edge lower than version 41 (EdgeHTML 16)
- Mozilla Firefox lower than version 59

- Scrolling behavior:

- If the Web Component is placed in layout containers that have the \`overflow: hidden\`
or \`overflow: auto\` style definition, this can
prevent the sticky elements of the Web Component from becoming fixed at the top of the viewport.`,name:"stickyColumnHeader",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const _={title:"Table",component:a,argTypes:{columns:{control:{disable:!0}},children:{control:{disable:!0}}},args:{},tags:["package:@ui5/webcomponents-compat"]},l={render:n=>e.jsxs(a,{...n,columns:e.jsxs(e.Fragment,{children:[e.jsx(o,{style:{width:"12rem"},children:e.jsx("span",{children:"Product"})}),e.jsx(o,{minWidth:800,popinText:"Supplier",children:e.jsx("span",{children:"Supplier"})}),e.jsx(o,{minWidth:600,popinText:"Dimensions",demandPopin:!0,children:e.jsx("span",{children:"Dimensions"})}),e.jsx(o,{minWidth:600,popinText:"Weight",demandPopin:!0,children:e.jsx("span",{children:"Weight"})}),e.jsx(o,{children:e.jsx("span",{children:"Price"})})]}),children:[e.jsxs(i,{children:[e.jsx(t,{children:e.jsx("span",{children:"Notebook Basic"})}),e.jsx(t,{children:e.jsx("span",{children:"Very Best Screens"})}),e.jsx(t,{children:e.jsx("span",{children:"30 x 18 x 3cm"})}),e.jsx(t,{children:e.jsx("span",{children:"4.2KG"})}),e.jsx(t,{children:e.jsx("span",{children:"956EUR"})})]}),e.jsxs(i,{children:[e.jsx(t,{children:e.jsx("span",{children:"Notebook Basic 17HT-1001"})}),e.jsx(t,{children:e.jsx("span",{children:"Very Best Screens"})}),e.jsx(t,{children:e.jsx("span",{children:"29 x 17 x 3.1cm"})}),e.jsx(t,{children:e.jsx("span",{children:"4.5KG"})}),e.jsx(t,{children:e.jsx("span",{children:"1249EUR"})})]})]})},r={render:()=>{const n=s=>new Array(25).fill("").map((C,u)=>e.jsxs(i,{children:[e.jsx(t,{children:e.jsx("span",{children:u+s})}),e.jsx(t,{children:e.jsx("span",{children:"Placeholder"})})]},`${u+s}-row`)),[g,v]=S.useState(n(1)),y=()=>{v(s=>[...s,...n(s.length+1)])};return e.jsx("div",{style:{height:"250px",overflow:"auto"},children:e.jsx(a,{onLoadMore:y,growing:T.Scroll,columns:e.jsxs(e.Fragment,{children:[e.jsx(o,{children:e.jsx("span",{children:"Column 1"})}),e.jsx(o,{children:e.jsx("span",{children:"Column 2"})})]}),children:g})})}};var m,d,h;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    return <Table {...args} columns={<>
            <TableColumn style={{
        width: '12rem'
      }}>
              <span>Product</span>
            </TableColumn>
            <TableColumn minWidth={800} popinText="Supplier">
              <span>Supplier</span>
            </TableColumn>
            <TableColumn minWidth={600} popinText="Dimensions" demandPopin>
              <span>Dimensions</span>
            </TableColumn>
            <TableColumn minWidth={600} popinText="Weight" demandPopin>
              <span>Weight</span>
            </TableColumn>
            <TableColumn>
              <span>Price</span>
            </TableColumn>
          </>}>
        <TableRow>
          <TableCell>
            <span>Notebook Basic</span>
          </TableCell>
          <TableCell>
            <span>Very Best Screens</span>
          </TableCell>
          <TableCell>
            <span>30 x 18 x 3cm</span>
          </TableCell>
          <TableCell>
            <span>4.2KG</span>
          </TableCell>
          <TableCell>
            <span>956EUR</span>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <span>Notebook Basic 17HT-1001</span>
          </TableCell>
          <TableCell>
            <span>Very Best Screens</span>
          </TableCell>
          <TableCell>
            <span>29 x 17 x 3.1cm</span>
          </TableCell>
          <TableCell>
            <span>4.5KG</span>
          </TableCell>
          <TableCell>
            <span>1249EUR</span>
          </TableCell>
        </TableRow>
      </Table>;
  }
}`,...(h=(d=l.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var b,f,w;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const createRows = indexOffset => {
      return new Array(25).fill('').map((_, index) => <TableRow key={\`\${index + indexOffset}-row\`}>
          <TableCell>
            <span>{index + indexOffset}</span>
          </TableCell>
          <TableCell>
            <span>Placeholder</span>
          </TableCell>
        </TableRow>);
    };
    const [rows, setRows] = useState(createRows(1));
    const onLoadMore = () => {
      setRows(prev => [...prev, ...createRows(prev.length + 1)]);
    };
    return <div style={{
      height: '250px',
      overflow: 'auto'
    }}>
        <Table onLoadMore={onLoadMore} growing={TableGrowingMode.Scroll} columns={<>
              <TableColumn>
                <span>Column 1</span>
              </TableColumn>
              <TableColumn>
                <span>Column 2</span>
              </TableColumn>
            </>}>
          {rows}
        </Table>
      </div>;
  }
}`,...(w=(f=r.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};const N=["Default","GrowingTable"],q=Object.freeze(Object.defineProperty({__proto__:null,Default:l,GrowingTable:r,__namedExportsOrder:N,default:_},Symbol.toStringTag,{value:"Module"}));export{q as C,l as D,r as G,o as T,i as a,t as b};
