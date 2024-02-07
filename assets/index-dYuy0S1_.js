import{_ as t}from"./iframe-WUzyVZLd.js";import"./ToggleButton-zLjFvx8g.js";import{w as n}from"./withWebComponent--kEkWNJH.js";const e=n("ui5-toggle-button",["accessibleName","accessibleNameRef","design","icon","tooltip","type"],["disabled","iconEnd","pressed","submits"],[],["click"],()=>t(()=>import("./ToggleButton-zLjFvx8g.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]),import.meta.url));e.displayName="ToggleButton";try{e.displayName="ToggleButton",e.__docgenInfo={description:"The `ToggleButton` component is an enhanced `Button` that can be toggled between pressed and normal states. Users can use the `ToggleButton` as a switch to turn a setting on or off. It can also be used to represent an independent choice similar to a check box.\n\nClicking or tapping on a `ToggleButton` changes its state to `pressed`. The button returns to its initial state when the user clicks or taps on it again. By applying additional custom CSS-styling classes, apps can give a different style to any `ToggleButton`.\n\n__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)",displayName:"ToggleButton",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClick:{defaultValue:null,description:"Fired when the component is activated either with a mouse/tap or by using the Enter or Space key.\n\n**Note:** The event will not be fired if the `disabled` property is set to `true`.",name:"onClick",required:!1,type:{name:"MouseEventHandler<ToggleButtonDomRef>"}},accessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},design:{defaultValue:{value:'"Default"'},description:"Defines the component design.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Default"'},{value:'"Default"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Transparent"'},{value:'"Emphasized"'},{value:'"Attention"'},{value:'"Emphasized"'},{value:'"Attention"'}]}},disabled:{defaultValue:{value:"false"},description:"Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain.",name:"disabled",required:!1,type:{name:"boolean"}},icon:{defaultValue:null,description:`Defines the icon, displayed as graphical element within the component. The SAP-icons font provides numerous options.

Example: See all the available icons within the [Icon Explorer](https://sdk.openui5.org/test-resources/sap/m/demokit/iconExplorer/webapp/index.html).`,name:"icon",required:!1,type:{name:"string"}},iconEnd:{defaultValue:{value:"false"},description:"Defines whether the icon should be displayed after the component text.",name:"iconEnd",required:!1,type:{name:"boolean"}},pressed:{defaultValue:{value:"false"},description:"Determines whether the component is displayed as pressed.",name:"pressed",required:!1,type:{name:"boolean"}},submits:{defaultValue:{value:"false"},description:'When set to `true`, the component will automatically submit the nearest HTML form element on `press`.\n\n**Note:** For the `submits` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`\n@deprecated Set the "type" property to "Submit" to achieve the same result. The "submits" property is ignored if "type" is set to any value other than "Button".',name:"submits",required:!1,type:{name:"boolean"}},tooltip:{defaultValue:null,description:`Defines the tooltip of the component.
**Note:** A tooltip attribute should be provided for icon-only buttons, in order to represent their exact meaning/function.`,name:"tooltip",required:!1,type:{name:"string"}},type:{defaultValue:{value:'"Button"'},description:'Defines whether the button has special form-related functionality.\n\n**Note:** For the `type` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`',name:"type",required:!1,type:{name:"enum",value:[{value:'"Button"'},{value:'"Submit"'},{value:'"Reset"'},{value:'"Button"'},{value:'"Submit"'},{value:'"Reset"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as T};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./ToggleButton-zLjFvx8g.js","./withWebComponent--kEkWNJH.js","./utils-rNFQc6Ui.js","./VersionInfo-AzzP9wS2.js","./index-OjgoNOWw.js","./CustomElementsScopeUtils-IpwVqUeG.js","./jsx-runtime-DtaoT6pD.js","./useIsomorphicLayoutEffect-s31TYDr7.js","./Keys-Mzj2D4aO.js","./UI5Element-_cJDeK03.js","./i18nBundle-YDapVb1x.js","./Button-Q_btruTx.js","./event-lM5HanI-.js","./slot-HSrR9XJ-.js","./AriaLabelHelper-RbKlVwzD.js","./MarkedEvents-aYv14vsS.js","./Icons-dG5I7pqk.js","./Icon-1HyKfQwB.js","./parameters-bundle.css-mPCp9TQx.js","./HasPopup-9BAMrqbD.js","./i18n-defaults-3YbdkqSs.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
