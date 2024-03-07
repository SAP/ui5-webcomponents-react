import{_ as n}from"./iframe-lvTVDQ9h.js";import"./Button-2HS1JCrT.js";import{w as o}from"./withWebComponent-WsMVk7rH.js";const e=o("ui5-button",["accessibleName","accessibleNameRef","accessibleRole","design","icon","tooltip","type"],["disabled","iconEnd","submits"],[],["click"],()=>n(()=>import("./Button-2HS1JCrT.js").then(t=>t.c),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]),import.meta.url));e.displayName="Button";try{e.displayName="Button",e.__docgenInfo={description:`The \`Button\` component represents a simple push button.
It enables users to trigger actions by clicking or tapping the \`Button\`, or by pressing
certain keyboard keys, such as Enter.

### Usage

For the \`Button\` UI, you can define text, icon, or both. You can also specify
whether the text or the icon is displayed first.

You can choose from a set of predefined types that offer different
styling to correspond to the triggered action.

You can set the \`Button\` as enabled or disabled. An enabled
\`Button\` can be pressed by clicking or tapping it. The button changes
its style to provide visual feedback to the user that it is pressed or hovered over with
the mouse cursor. A disabled \`Button\` appears inactive and cannot be pressed.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)`,displayName:"Button",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClick:{defaultValue:null,description:"Fired when the component is activated either with a\nmouse/tap or by using the Enter or Space key.\n\n**Note:** The event will not be fired if the `disabled`\nproperty is set to `true`.",name:"onClick",required:!1,type:{name:"MouseEventHandler<ButtonDomRef>"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"Button"'},description:`Describes the accessibility role of the button.

**Note:** Use link role only with a press handler, which performs a navigation. In all other scenarios the default button semantics are recommended.`,name:"accessibleRole",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Link"'},{value:'"Button"'},{value:'"Link"'}]}},design:{defaultValue:{value:'"Default"'},description:"Defines the component design.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Default"'},{value:'"Transparent"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.
A disabled component can't be pressed or
focused, and it is not in the tab chain.`,name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:`Defines the icon, displayed as graphical element within the component.
The SAP-icons font provides numerous options.

Example:
See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"icon",required:!1,type:{name:"string"}},iconEnd:{defaultValue:{value:"false"},description:"Defines whether the icon should be displayed after the component text.",name:"iconEnd",required:!1,type:{name:"boolean"}},submits:{defaultValue:{value:"false"},description:'When set to `true`, the component will\nautomatically submit the nearest HTML form element on `press`.\n\n**Note:** For the `submits` property to have effect, you must add the following import to your project:\n`import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`\n@deprecated Set the "type" property to "Submit" to achieve the same result. The "submits" property is ignored if "type" is set to any value other than "Button".',name:"submits",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:`Defines the tooltip of the component.

**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.`,name:"tooltip",required:!1,type:{name:"string"}},type:{defaultValue:{value:'"Button"'},description:'Defines whether the button has special form-related functionality.\n\n**Note:** For the `type` property to have effect, you must add the following import to your project:\n`import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`',name:"type",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Button"'},{value:'"Submit"'},{value:'"Reset"'},{value:'"Submit"'},{value:'"Reset"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as B};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Button-2HS1JCrT.js","./UI5Element-i6xEMhb-.js","./Boot-ZMdbUkXu.js","./VersionInfo-szri6OiK.js","./CustomElementsScopeUtils-E-jGiXBT.js","./withWebComponent-WsMVk7rH.js","./utils-TqRdq3Pf.js","./index-OjgoNOWw.js","./jsx-runtime-DtaoT6pD.js","./useIsomorphicLayoutEffect-s31TYDr7.js","./event-lM5HanI-.js","./slot-HSrR9XJ-.js","./Keys-ZEuNsqmZ.js","./AriaLabelHelper-RbKlVwzD.js","./i18nBundle-QOmUTBjc.js","./MarkedEvents-aYv14vsS.js","./Icons-2Vjs2kvs.js","./willShowContent-MSvI8sYo.js","./Icon-ONjMh5dV.js","./parameters-bundle.css-I2VxmuZZ.js","./HasPopup-9BAMrqbD.js","./i18n-defaults-KFYnnpmz.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
