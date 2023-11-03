import{_ as t}from"./iframe-d9777174.js";import"./Label-025b0296.js";import{w as n}from"./withWebComponent-f146e44d.js";const e=n("ui5-label",["for","wrappingType"],["required","showColon"],[],[],()=>t(()=>import("./Label-025b0296.js"),["./Label-025b0296.js","./UI5Element-d089e658.js","./CustomElementsScopeUtils-90546106.js","./withWebComponent-f146e44d.js","./utils-85c0effb.js","./index-f1f2c4b1.js","./jsx-runtime-d079401a.js","./useIsomorphicLayoutEffect-c49de97d.js","./WrappingType-b81e595a.js","./i18n-defaults-a1ecaff4.js"],import.meta.url));e.displayName="Label";try{e.displayName="Label",e.__docgenInfo={description:"The `Label` is a component used to represent a label for elements like input, textarea, select.\n\nThe `for` property of the `Label` must be the same as the id attribute of the related input element.\n\nScreen readers read out the label, when the user focuses the labelled control.\n\nThe `Label` appearance can be influenced by properties, such as `required` and `wrappingType`. The appearance of the Label can be configured in a limited way by using the design property. For a broader choice of designs, you can use custom styles.\n\n__Note:__ This component is a web component developed by the UI5 Web Components’ team.\n\n[UI5 Web Components Storybook](https://sap.github.io/ui5-webcomponents/playground/?path=/docs/main-Label)",displayName:"Label",props:{children:{defaultValue:null,description:`Defines the text of the component.
**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},for:{defaultValue:null,description:"Defines the labeled input by providing its ID.\n\n**Note:** Can be used with both `Input` and native input.",name:"for",required:!1,type:{name:"string"}},required:{defaultValue:null,description:"Defines whether an asterisk character is added to the component text.\n\n**Note:** Usually indicates that user input (bound with the `for` property) is required. In that case the `required property of the corresponding input should also be set.`",name:"required",required:!1,type:{name:"boolean"}},showColon:{defaultValue:null,description:`Defines whether colon is added to the component text.

**Note:** Usually used in forms.`,name:"showColon",required:!1,type:{name:"boolean"}},wrappingType:{defaultValue:null,description:`Defines how the text of a component will be displayed when there is not enough space.
**Note:** for option "Normal" the text will wrap and the words will not be broken based on hyphenation.`,name:"wrappingType",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Normal"'},{value:'"Normal"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as L};
//# sourceMappingURL=index-9e2b458d.js.map
