import{_ as o}from"./iframe-f423d3f9.js";import{S as a}from"./SegmentedButton-bf7a39fa.js";import{w as i}from"./withWebComponent-884f99a7.js";const t=i("ui5-segmented-button",["accessibleName","mode"],[],[],["selection-change"],()=>o(()=>import("./SegmentedButton-bf7a39fa.js").then(e=>e.d),["./SegmentedButton-bf7a39fa.js","./UI5Element-a8445a25.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-884f99a7.js","./utils-69f7a0e0.js","./index-ebeaab24.js","./jsx-runtime-5926aa06.js","./useIsomorphicLayoutEffect-38a48652.js","./Icon-3e9cb840.js","./Icons-c55d12a5.js","./slot-76e48863.js","./ItemNavigation-cb92b87f.js","./getActiveElement-bcae01ed.js","./ResizeHandler-cea672cf.js","./i18n-defaults-fca59c5d.js","./Integer-f7f172c9.js","./ToggleButton-49eb273a.js","./Device-208919c6.js","./Button-f1768a08.js","./AriaLabelHelper-43a261ec.js","./MarkedEvents-b83081e9.js"],import.meta.url));t.displayName="SegmentedButton";t.defaultProps={mode:a.SingleSelect};try{t.displayName="SegmentedButton",t.__docgenInfo={description:`The \`SegmentedButton\` shows a group of items. When the user clicks or taps one of the items, it stays in a pressed state. It automatically resizes the items to fit proportionally within the component. When no width is set, the component uses the available width.

**Note:** There can be just one selected \`item\` at a time.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/SegmentedButton" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"SegmentedButton",props:{children:{defaultValue:null,description:"Defines the items of `SegmentedButton`.\n\n**Note:** Multiple items are allowed.\n\n**Note:** Use the `SegmentedButtonItem` for the intended design.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onSelectionChange:{defaultValue:null,description:"Fired when the selected item changes.",name:"onSelectionChange",required:!1,type:{name:"(event: Ui5CustomEvent<SegmentedButtonDomRef, { selectedItem: HTMLElement; selectedItems: HTMLElement[]; }>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},mode:{defaultValue:{value:"SegmentedButtonMode.SingleSelect"},description:`Defines the component selection mode.

**The available values are:**

*   \`SingleSelect\`
*   \`MultiSelect\``,name:"mode",required:!1,type:{name:"enum",value:[{value:'"SingleSelect"'},{value:'"MultiSelect"'},{value:'"SingleSelect"'},{value:'"MultiSelect"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const n=i("ui5-segmented-button-item",["accessibleName","accessibleNameRef","icon","tooltip"],["pressed","disabled"],[],["click"],()=>o(()=>import("./SegmentedButton-bf7a39fa.js").then(e=>e.c),["./SegmentedButton-bf7a39fa.js","./UI5Element-a8445a25.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-884f99a7.js","./utils-69f7a0e0.js","./index-ebeaab24.js","./jsx-runtime-5926aa06.js","./useIsomorphicLayoutEffect-38a48652.js","./Icon-3e9cb840.js","./Icons-c55d12a5.js","./slot-76e48863.js","./ItemNavigation-cb92b87f.js","./getActiveElement-bcae01ed.js","./ResizeHandler-cea672cf.js","./i18n-defaults-fca59c5d.js","./Integer-f7f172c9.js","./ToggleButton-49eb273a.js","./Device-208919c6.js","./Button-f1768a08.js","./AriaLabelHelper-43a261ec.js","./MarkedEvents-b83081e9.js"],import.meta.url));n.displayName="SegmentedButtonItem";try{n.displayName="SegmentedButtonItem",n.__docgenInfo={description:'Users can use the `SegmentedButtonItem` as part of a `SegmentedButton`.\n\nClicking or tapping on a `SegmentedButtonItem` changes its state to `pressed`. The item returns to its initial state when the user clicks or taps on it again. By applying additional custom CSS-styling classes, apps can give a different style to any `SegmentedButtonItem`.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/SegmentedButton" target="_blank">UI5 Web Components Playground</ui5-link>',displayName:"SegmentedButtonItem",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClick:{defaultValue:null,description:"Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.\n\n**Note:** The event will not be fired if the `disabled` property is set to `true`.",name:"onClick",required:!1,type:{name:"MouseEventHandler<SegmentedButtonItemDomRef>"}},pressed:{defaultValue:null,description:"Determines whether the component is displayed as pressed.",name:"pressed",required:!1,type:{name:"boolean"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:`Defines the icon, displayed as graphical element within the component. The SAP-icons font provides numerous options.

Example: See all the available icons within the <ui5-link target="_blank" href="https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html">Icon Explorer</ui5-link>.`,name:"icon",required:!1,type:{name:"string"}},tooltip:{defaultValue:null,description:`Defines the tooltip of the component.
**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.`,name:"tooltip",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{t as S,n as a};
//# sourceMappingURL=index-05f608d8.js.map
