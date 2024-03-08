import{_ as t}from"./iframe-rn21FmfG.js";import"./CheckBox-W7r2Z5M4.js";import{w as n}from"./withWebComponent-LTFbYRvs.js";const e=n("ui5-checkbox",["accessibleName","accessibleNameRef","name","text","valueState","wrappingType"],["checked","disabled","displayOnly","indeterminate","readonly","required"],[],["change"],()=>t(()=>import("./CheckBox-W7r2Z5M4.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]),import.meta.url));e.displayName="CheckBox";try{e.displayName="CheckBox",e.__docgenInfo={description:`Allows the user to set a binary value, such as true/false or yes/no for an item.

The \`CheckBox\` component consists of a box and a label that describes its purpose.
If it's checked, an indicator is displayed inside the box.
To check/uncheck the \`CheckBox\`, the user has to click or tap the square
box or its label.

The \`CheckBox\` component only has 2 states - checked and unchecked.
Clicking or tapping toggles the \`CheckBox\` between checked and unchecked state.

### Usage

You can define the checkbox text with via the \`text\` property. If the text exceeds the available width, it is truncated by default.
In case you prefer text to wrap, set the \`wrappingType\` property to "Normal".
The touchable area for toggling the \`CheckBox\` ends where the text ends.

You can disable the \`CheckBox\` by setting the \`disabled\` property to
\`true\`,
or use the \`CheckBox\` in read-only mode by setting the \`readonly\`
property to \`true\`.

### Keyboard Handling

The user can use the following keyboard shortcuts to toggle the checked state of the \`CheckBox\`.

- [SPACE, ENTER] - Toggles between different states: checked, not checked.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)`,displayName:"CheckBox",props:{onChange:{defaultValue:null,description:"Fired when the component checked state changes.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<CheckBoxDomRef, never>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the component",name:"accessibleNameRef",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"false"},description:`Defines if the component is checked.

**Note:** The property can be changed with user interaction,
either by cliking/tapping on the component, or by
pressing the Enter or Space key.`,name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},displayOnly:{defaultValue:{value:"false"},description:"Determines whether the `CheckBox` is in display only state.\n\nWhen set to `true`, the `CheckBox` is not interactive, not editable, not focusable\nand not in the tab chain. This setting is used for forms in review mode.\n\n**Note:** When the property `disabled` is set to `true` this property has no effect.",name:"displayOnly",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:{value:"false"},description:`Defines whether the component is displayed as partially checked.

**Note:** The indeterminate state can be set only programmatically and can’t be achieved by user
interaction and the resulting visual state depends on the values of the \`indeterminate\`
and \`checked\` properties:

-  If the component is checked and indeterminate, it will be displayed as partially checked
-  If the component is checked and it is not indeterminate, it will be displayed as checked
-  If the component is not checked, it will be displayed as not checked regardless value of the indeterminate attribute`,name:"indeterminate",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:`Determines the name with which the component will be submitted in an HTML form.

**Important:** For the \`name\` property to have effect, you must add the following import to your project:
\`import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";\`

**Note:** When set, a native \`input\` HTML element
will be created inside the component so that it can be submitted as
part of an HTML form. Do not use this property unless you need to submit a form.`,name:"name",required:!1,type:{name:"string"}},readonly:{defaultValue:{value:"false"},description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable,
but still provides visual feedback upon user interaction.`,name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Warning"'},{value:'"None"'},{value:'"Error"'},{value:'"Success"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Error"'},{value:'"Information"'}]}},wrappingType:{defaultValue:{value:'"None"'},description:`Defines whether the component text wraps when there is not enough space.

**Note:** for option "Normal" the text will wrap and the words will not be broken based on hyphenation.`,name:"wrappingType",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Normal"'},{value:'"Normal"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as C};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./CheckBox-W7r2Z5M4.js","./Boot-vTaFuwdG.js","./VersionInfo-ldzxTIVv.js","./UI5Element-9EXj3atz.js","./CustomElementsScopeUtils-orabJqjR.js","./withWebComponent-LTFbYRvs.js","./utils-d3BcYjeO.js","./index-OjgoNOWw.js","./jsx-runtime-DtaoT6pD.js","./useIsomorphicLayoutEffect-s31TYDr7.js","./slot-HSrR9XJ-.js","./event-lM5HanI-.js","./i18nBundle-j8vDD4VY.js","./ValueState-zUcANXoY.js","./AriaLabelHelper-RbKlVwzD.js","./Keys-ZEuNsqmZ.js","./accept-IjkrYMVs.js","./Icons-Vbmmw7bO.js","./Icon-kyep1SqZ.js","./parameters-bundle.css-EKzfhWK3.js","./Label-mY98SzPQ.js","./WrappingType-avPrqc94.js","./i18n-defaults-X1FTyPSK.js","./class-map-gjOVarQw.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
