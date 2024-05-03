function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./StandardListItem-HxyuKE_F.js","./withWebComponent-LTFbYRvs.js","./utils-d3BcYjeO.js","./VersionInfo-ldzxTIVv.js","./index-OjgoNOWw.js","./CustomElementsScopeUtils-orabJqjR.js","./jsx-runtime-DtaoT6pD.js","./useIsomorphicLayoutEffect-s31TYDr7.js","./slot-HSrR9XJ-.js","./ValueState-zUcANXoY.js","./ListItem-WDqK2DXW.js","./MarkedEvents-aYv14vsS.js","./Keys-ZEuNsqmZ.js","./i18nBundle-j8vDD4VY.js","./Boot-vTaFuwdG.js","./event-lM5HanI-.js","./decline-j4MODHQ_.js","./Icons-Vbmmw7bO.js","./i18n-defaults-9hHjZPfp.js","./List-8miUKCwk.js","./UI5Element-9EXj3atz.js","./ResizeHandler-_qRzLmqT.js","./ItemNavigation-F0c19DRy.js","./getActiveElement-IIKAy3xo.js","./Integer-kog98579.js","./AriaLabelHelper-RbKlVwzD.js","./TabbableElements-L1VqloMt.js","./isElementHidden-d3-Fo4V6.js","./getEffectiveScrollbarStyle-Gz48PLeD.js","./debounce-8VpZswfd.js","./parameters-bundle.css-EKzfhWK3.js","./BusyIndicator-x3up_4gM.js","./Label-mY98SzPQ.js","./WrappingType-avPrqc94.js","./i18n-defaults-X1FTyPSK.js","./class-map-gjOVarQw.js","./style-map-tejh5TI3.js","./BrowserScrollbar.css-wlj1ktzG.js","./CheckBox-W7r2Z5M4.js","./accept-IjkrYMVs.js","./Icon-kyep1SqZ.js","./RadioButton-Rfuvm4gi.js","./Button-DcwyQdV9.js","./willShowContent-MSvI8sYo.js","./HasPopup-9BAMrqbD.js","./slim-arrow-right-w4AUPzoN.js","./Avatar-tUVXUHcz.js","./employee-EyN-jrGw.js","./alert--0SE21sY.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as n}from"./iframe-NvEupkM7.js";import"./StandardListItem-HxyuKE_F.js";import{w as i}from"./withWebComponent-LTFbYRvs.js";const e=i("ui5-li",["accessibleName","additionalText","additionalTextState","description","icon","image","tooltip","type"],["iconEnd","navigated","selected"],["deleteButton","imageContent"],["detail-click"],()=>n(()=>import("./StandardListItem-HxyuKE_F.js").then(t=>t.a),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48]),import.meta.url));e.displayName="StandardListItem";try{e.displayName="StandardListItem",e.__docgenInfo={description:"The `StandardListItem` represents the simplest type of item for a `List`.\n\nThis is a list item,\nproviding the most common use cases such as `text`,\n`image` and `icon`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)",displayName:"StandardListItem",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},deleteButton:{defaultValue:null,description:`Defines the delete button, displayed in "Delete" mode.
**Note:** While the slot allows custom buttons, to match
design guidelines, please use the \`Button\` component.
**Note:** When the slot is not present, a built-in delete button will be displayed.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="deleteButton"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"deleteButton",required:!1,type:{name:"UI5WCSlotsNode"}},imageContent:{defaultValue:null,description:`**Note:** While the slot allows option for setting custom avatar, to match the
design guidelines, please use the \`Avatar\` with it's default size - S.

**Note:** If bigger \`Avatar\` needs to be used, then the size of the
\`StandardListItem\` should be customized in order to fit.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="imageContent"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"imageContent",required:!1,type:{name:"UI5WCSlotsNode"}},onDetailClick:{defaultValue:null,description:"Fired when the user clicks on the detail button when type is `Detail`.",name:"onDetailClick",required:!1,type:{name:"(event: Ui5CustomEvent<StandardListItemDomRef, never>) => void"}},accessibleName:{defaultValue:null,description:`Defines the text alternative of the component.
Note: If not provided a default text alternative will be set, if present.`,name:"accessibleName",required:!1,type:{name:"string"}},additionalText:{defaultValue:null,description:"Defines the `additionalText`, displayed in the end of the list item.",name:"additionalText",required:!1,type:{name:"string"}},additionalTextState:{defaultValue:{value:'"None"'},description:'Defines the state of the `additionalText`.\n\nAvailable options are: `"None"` (by default), `"Success"`, `"Warning"`, `"Information"` and `"Error"`.',name:"additionalTextState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Warning"'},{value:'"None"'},{value:'"Error"'},{value:'"Success"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Error"'},{value:'"Information"'}]}},description:{defaultValue:null,description:"Defines the description displayed right under the item text, if such is present.",name:"description",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:`Defines the \`icon\` source URI.

**Note:**
SAP-icons font provides numerous built-in icons. To find all the available icons, see the
[Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"icon",required:!1,type:{name:"string"}},iconEnd:{defaultValue:{value:"false"},description:"Defines whether the `icon` should be displayed in the beginning of the list item or in the end.\n\n**Note:** If `image` is set, the `icon` would be displayed after the `image`.",name:"iconEnd",required:!1,type:{name:"boolean"}},image:{defaultValue:null,description:"Defines the `image` source URI.\n\n**Note:** The `image` would be displayed in the beginning of the list item.",name:"image",required:!1,type:{name:"string"}},navigated:{defaultValue:{value:"false"},description:"The navigated state of the list item.\nIf set to `true`, a navigation indicator is displayed at the end of the list item.",name:"navigated",required:!1,type:{name:"boolean"}},selected:{defaultValue:{value:"false"},description:"Defines the selected state of the `ListItem`.",name:"selected",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:"Defines the text of the tooltip that would be displayed for the list item.",name:"tooltip",required:!1,type:{name:"string"}},type:{defaultValue:{value:'"Active"'},description:"Defines the visual indication and behavior of the list items.\nAvailable options are `Active` (by default), `Inactive`, `Detail` and `Navigation`.\n\n**Note:** When set to `Active` or `Navigation`, the item will provide visual response upon press and hover,\nwhile with type `Inactive` and `Detail` - will not.",name:"type",required:!1,type:{name:"enum",value:[{value:'"Navigation"'},{value:'"Inactive"'},{value:'"Active"'},{value:'"Detail"'},{value:'"Navigation"'},{value:'"Inactive"'},{value:'"Active"'},{value:'"Detail"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as S};
