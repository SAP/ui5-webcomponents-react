import{_ as o}from"./iframe-_OlRtZJR.js";import"./CustomListItem-x1_rrGTq.js";import{w as n}from"./withWebComponent-ceo0jn6D.js";import{L as a}from"./ListItem-rKilMSpt.js";const e=n("ui5-li-custom",["accessibleName","type"],["navigated","selected"],["deleteButton"],["detail-click"],()=>o(()=>import("./CustomListItem-x1_rrGTq.js").then(t=>t.a),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37]),import.meta.url));e.displayName="CustomListItem";e.defaultProps={type:a.Active};try{e.displayName="CustomListItem",e.__docgenInfo={description:"A component to be used as custom list item within the `List` the same way as the standard `StandardListItem`. The component accepts arbitrary HTML content to allow full customization.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-List)",displayName:"CustomListItem",props:{children:{defaultValue:null,description:"Defines the content of the component.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},deleteButton:{defaultValue:null,description:`Defines the delete button, displayed in "Delete" mode. **Note:** While the slot allows custom buttons, to match design guidelines, please use the \`Button\` component. **Note:** When the slot is not present, a built-in delete button will be displayed.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="deleteButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"deleteButton",required:!1,type:{name:"UI5WCSlotsNode"}},onDetailClick:{defaultValue:null,description:"Fired when the user clicks on the detail button when type is `Detail`.",name:"onDetailClick",required:!1,type:{name:"(event: Ui5CustomEvent<CustomListItemDomRef, never>) => void"}},accessibleName:{defaultValue:null,description:"Defines the text alternative of the component. Note: If not provided a default text alternative will be set, if present.",name:"accessibleName",required:!1,type:{name:"string"}},navigated:{defaultValue:null,description:"The navigated state of the list item. If set to `true`, a navigation indicator is displayed at the end of the list item.",name:"navigated",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"ListItemType.Active"},description:"Defines the visual indication and behavior of the list items. Available options are `Active` (by default), `Inactive`, `Detail` and `Navigation`.\n\n**Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover, while with type `Inactive` and `Detail` - will not.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Inactive"'},{value:'"Active"'},{value:'"Detail"'},{value:'"Navigation"'},{value:'"Inactive"'},{value:'"Active"'},{value:'"Detail"'},{value:'"Navigation"'}]}},selected:{defaultValue:null,description:"Defines the selected state of the `ListItem`.",name:"selected",required:!1,type:{name:"boolean"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as C};
//# sourceMappingURL=index-O4bSbcpm.js.map
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./CustomListItem-x1_rrGTq.js","./Icons-3pbvVZUr.js","./UI5Element-51XrG2PJ.js","./CustomElementsScopeUtils-FvbtGFoH.js","./withWebComponent-ceo0jn6D.js","./utils-CrDMzPRG.js","./index-OjgoNOWw.js","./jsx-runtime-DtaoT6pD.js","./useIsomorphicLayoutEffect-s31TYDr7.js","./ListItem-rKilMSpt.js","./Integer-kog98579.js","./MarkedEvents-aYv14vsS.js","./Icon-HNXZSIOG.js","./slot-HSrR9XJ-.js","./decline-Q45dXYUl.js","./i18n-defaults-n2A5pq_J.js","./ListItemBase-_j3gRdH2.js","./ResizeHandler-9pqGT1BJ.js","./ItemNavigation-ETHVU2CC.js","./getActiveElement-IIKAy3xo.js","./AriaLabelHelper-RbKlVwzD.js","./TabbableElements-aYIPY3zp.js","./isElementHidden-d3-Fo4V6.js","./debounce-8VpZswfd.js","./BusyIndicator-6K1dNXem.js","./Label-z__cPwIf.js","./WrappingType-avPrqc94.js","./i18n-defaults-RBzcmDt8.js","./class-map-JXa0-u4l.js","./style-map-uWW-8QIe.js","./BrowserScrollbar.css-HfEGARrw.js","./RadioButton-m4J4aih-.js","./ValueState-zUcANXoY.js","./CheckBox-0IljwRo-.js","./accept-vW9BdDVG.js","./Button-a5xMWTkk.js","./HasPopup-9BAMrqbD.js","./slim-arrow-right-v6ItARyR.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}