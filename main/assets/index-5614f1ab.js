import{_ as t}from"./iframe-e3fb29ee.js";import"./RadioButton-c3da5c0b.js";import{w as n}from"./withWebComponent-d4224c1c.js";import{V as o}from"./ValueState-ab6838cc.js";const e=n("ui5-radio-button",["accessibleName","accessibleNameRef","name","text","value","valueState","wrappingType"],["checked","disabled","readonly","required"],[],["change"],()=>t(()=>import("./RadioButton-c3da5c0b.js"),["./RadioButton-c3da5c0b.js","./Device-99b8bbf4.js","./CustomElementsScopeUtils-137da8c8.js","./UI5Element-3b11b083.js","./withWebComponent-d4224c1c.js","./utils-69f7a0e0.js","./index-ebeaab24.js","./jsx-runtime-5926aa06.js","./useIsomorphicLayoutEffect-38a48652.js","./slot-76e48863.js","./Icon-9aa64f88.js","./Icons-f64cf5a7.js","./ValueState-2c5e5904.js","./AriaLabelHelper-43a261ec.js","./Label-9108dd9e.js","./WrappingType-b81e595a.js","./i18n-defaults-f002f496.js","./class-map-18f572ce.js"],import.meta.url));e.displayName="RadioButton";e.defaultProps={valueState:o.None};try{e.displayName="RadioButton",e.__docgenInfo={description:'The `RadioButton` component enables users to select a single option from a set of options. When a `RadioButton` is selected by the user, the `onChange` event is fired. When a `RadioButton` that is within a group is selected, the one that was previously selected gets automatically deselected. You can group radio buttons by using the `name` property.\n**Note:** If `RadioButton` is not part of a group, it can be selected once, but can not be deselected back.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-RadioButton" target="_blank">UI5 Web Components Storybook</ui5-link>',displayName:"RadioButton",props:{onChange:{defaultValue:null,description:"Fired when the component checked state changes.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<RadioButtonDomRef, never>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Defines the IDs of the elements that label the component.",name:"accessibleNameRef",required:!1,type:{name:"string"}},checked:{defaultValue:null,description:`Defines whether the component is checked or not.

**Note:** The property value can be changed with user interaction, either by clicking/tapping on the component, or by using the Space or Enter key.`,name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:`Defines whether the component is disabled.

**Note:** A disabled component is completely noninteractive.`,name:"disabled",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:'Defines the name of the component. Radio buttons with the same `name` will form a radio button group.\n\n**Note:** The selection can be changed with `ARROW_UP/DOWN` and `ARROW_LEFT/RIGHT` keys between radio buttons in same group.\n\n**Note:** Only one radio button can be selected per group.\n\n**Important:** For the `name` property to have effect when submitting forms, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`\n\n**Note:** When set, a native `input` HTML element will be created inside the component so that it can be submitted as part of an HTML form.',name:"name",required:!1,type:{name:"string"}},readonly:{defaultValue:null,description:`Defines whether the component is read-only.

**Note:** A read-only component is not editable, but still provides visual feedback upon user interaction.`,name:"readonly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"Defines whether the component is required.",name:"required",required:!1,type:{name:"boolean"}},text:{defaultValue:null,description:"Defines the text of the component.",name:"text",required:!1,type:{name:"string"}},value:{defaultValue:null,description:'Defines the form value of the component. When a form with a radio button group is submitted, the group\'s value will be the value of the currently selected radio button.\n**Important:** For the `value` property to have effect, you must add the following import to your project: `import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`',name:"value",required:!1,type:{name:"string"}},valueState:{defaultValue:{value:"ValueState.None"},description:"Defines the value state of the component.\n\nAvailable options are:\n\n*   `None`\n*   `Error`\n*   `Warning`\n*   `Success`\n*   `Information`",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Error"'},{value:'"Information"'},{value:'"Warning"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'},{value:'"Success"'}]}},wrappingType:{defaultValue:null,description:`Defines whether the component text wraps when there is not enough space.

Available options are:

*   \`None\` - The text will be truncated with an ellipsis.
*   \`Normal\` - The text will wrap. The words will not be broken based on hyphenation.`,name:"wrappingType",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Normal"'},{value:'"Normal"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as R};
//# sourceMappingURL=index-5614f1ab.js.map
