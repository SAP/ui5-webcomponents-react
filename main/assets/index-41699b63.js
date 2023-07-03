import{_ as t}from"./iframe-e3fb29ee.js";import"./CustomListItem-158d5ed7.js";import{w as n}from"./withWebComponent-d4224c1c.js";import{a as o}from"./ListItem-d1dee57e.js";const e=n("ui5-li-custom",["accessibleName","type"],["navigated","selected"],["deleteButton"],["detail-click"],()=>t(()=>import("./CustomListItem-158d5ed7.js"),["./CustomListItem-158d5ed7.js","./Icons-f64cf5a7.js","./UI5Element-3b11b083.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-d4224c1c.js","./utils-69f7a0e0.js","./index-ebeaab24.js","./jsx-runtime-5926aa06.js","./useIsomorphicLayoutEffect-38a48652.js","./ListItem-d1dee57e.js","./Integer-f7f172c9.js","./MarkedEvents-b83081e9.js","./Icon-9aa64f88.js","./slot-76e48863.js","./decline-5f59d729.js","./i18n-defaults-80781f7e.js","./ListItemBase-9b88c288.js","./ResizeHandler-13af62ac.js","./ItemNavigation-4baedd26.js","./AriaLabelHelper-43a261ec.js","./TabbableElements-8e49b367.js","./isElementHidden-01c07146.js","./debounce-9c2fb7dd.js","./BusyIndicator-9bf9c132.js","./Label-9108dd9e.js","./WrappingType-b81e595a.js","./i18n-defaults-f002f496.js","./class-map-18f572ce.js","./style-map-54298215.js","./BrowserScrollbar.css-cca56078.js","./RadioButton-c3da5c0b.js","./Device-99b8bbf4.js","./ValueState-2c5e5904.js","./CheckBox-4c6776c5.js","./accept-1b3f8b1f.js","./Button-86524f67.js","./HasPopup-47461347.js","./slim-arrow-right-82b1b6d3.js"],import.meta.url));e.displayName="CustomListItem";e.defaultProps={type:o.Active};try{e.displayName="CustomListItem",e.__docgenInfo={description:'A component to be used as custom list item within the `List` the same way as the standard `StandardListItem`. The component accepts arbitrary HTML content to allow full customization\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-List" target="_blank">UI5 Web Components Storybook</ui5-link>',displayName:"CustomListItem",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},deleteButton:{defaultValue:null,description:`Defines the delete button, displayed in "Delete" mode. **Note:** While the slot allows custom buttons, to match design guidelines, please use the \`Button\` component. **Note:** When the slot is not present, a built-in delete button will be displayed.

__Note:__ This prop will be rendered as [slot](https://www.w3schools.com/tags/tag_slot.asp) (\`slot="deleteButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"deleteButton",required:!1,type:{name:"UI5WCSlotsNode"}},onDetailClick:{defaultValue:null,description:"Fired when the user clicks on the detail button when type is `Detail`.",name:"onDetailClick",required:!1,type:{name:"(event: Ui5CustomEvent<CustomListItemDomRef, never>) => void"}},accessibleName:{defaultValue:null,description:"Defines the text alternative of the component. Note: If not provided a default text alternative will be set, if present.",name:"accessibleName",required:!1,type:{name:"string"}},navigated:{defaultValue:null,description:"The navigated state of the list item. If set to `true`, a navigation indicator is displayed at the end of the list item.",name:"navigated",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"ListItemType.Active"},description:"Defines the visual indication and behavior of the list items. Available options are `Active` (by default), `Inactive`, `Detail` and `Navigation`.\n\n**Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover, while with type `Inactive` and `Detail` - will not.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Inactive"'},{value:'"Active"'},{value:'"Detail"'},{value:'"Navigation"'},{value:'"Inactive"'},{value:'"Active"'},{value:'"Detail"'},{value:'"Navigation"'}]}},selected:{defaultValue:null,description:"Defines the selected state of the `ListItem`.",name:"selected",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as C};
//# sourceMappingURL=index-41699b63.js.map
