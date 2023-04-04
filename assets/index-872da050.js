import{_ as t}from"./iframe-838ff653.js";import"./ProgressIndicator-24f23471.js";import{w as a}from"./withWebComponent-d280b5c2.js";import{V as n}from"./ValueState-ab6838cc.js";const e=a("ui5-progress-indicator",["displayValue","value","valueState"],["disabled","hideValue"],[],[],()=>t(()=>import("./ProgressIndicator-24f23471.js"),["./ProgressIndicator-24f23471.js","./UI5Element-d1d93200.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-d280b5c2.js","./utils-ed90fb1b.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./jsx-runtime-670450c2.js","./useIsomorphicLayoutEffect-a838da4a.js","./ValueState-2c5e5904.js","./Integer-f7f172c9.js","./AnimationMode-f0aa6496.js","./Icon-c8fd92f0.js","./Icons-efeb15d5.js","./i18n-defaults-254d6b69.js","./class-map-6d48ebd3.js","./style-map-51d6dd91.js"],import.meta.url));e.displayName="ProgressIndicator";e.defaultProps={value:0,valueState:n.None};try{e.displayName="ProgressIndicator",e.__docgenInfo={description:`Shows the progress of a process in a graphical way. To indicate the progress, the inside of the component is filled with a color.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/ProgressIndicator" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"ProgressIndicator",props:{disabled:{defaultValue:null,description:"Defines whether component is in disabled state.",name:"disabled",required:!1,type:{name:"boolean"}},displayValue:{defaultValue:null,description:"Specifies the text value to be displayed in the bar. **Note:**\n\n*   If there is no value provided or the value is empty, the default percentage value is shown.\n*   If `hideValue` property is `true` both the `displayValue` and `value` property values are not shown.",name:"displayValue",required:!1,type:{name:"string"}},hideValue:{defaultValue:null,description:"Defines whether the component value is shown.",name:"hideValue",required:!1,type:{name:"boolean"}},value:{defaultValue:{value:"0"},description:"Specifies the numerical value in percent for the length of the component. **Note:** If a value greater than 100 is provided, the percentValue is set to 100. In other cases of invalid value, percentValue is set to its default of 0.",name:"value",required:!1,type:{name:"number"}},valueState:{defaultValue:{value:"ValueState.None"},description:"Defines the value state of the component.\n\nAvailable options are:\n\n*   `None`\n*   `Error`\n*   `Warning`\n*   `Success`\n*   `Information`",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"Error"'},{value:'"Information"'},{value:'"Warning"'},{value:'"Success"'},{value:'"Error"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Information"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as P};
//# sourceMappingURL=index-872da050.js.map
