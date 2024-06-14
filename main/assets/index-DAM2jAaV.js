const __vite__fileDeps=["./ProgressIndicator-7Wnregxa.js","./UI5Element-ZIczsayz.js","./Boot-DBJWGo1y.js","./EventProvider-CVfkyUHo.js","./useIsomorphicLayoutEffect-J-vjyzBO.js","./index-DVqgc125.js","./CustomElementsScopeUtils-Di1jckr8.js","./withWebComponent-CZCh4Hye.js","./utils-xoLr7-0V.js","./ValueState-Bg0UWejw.js","./Integer-WDQzHAdZ.js","./AnimationMode-By1RdGot.js","./i18nBundle-Baemx9Ir.js","./Icon-bm18Wc8p.js","./event-Dq0fpeHi.js","./Icons-VTGLGKPM.js","./Device-RcFucVeJ.js","./Keys-B00bFMgT.js","./parameters-bundle.css-B_nLitlw.js","./i18n-defaults-BBSxky5H.js","./class-map-7Nty0QHu.js","./style-map-H4TARQHt.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as a}from"./iframe-CD3rruG0.js";import"./ProgressIndicator-7Wnregxa.js";import{w as n}from"./withWebComponent-CZCh4Hye.js";const e=n("ui5-progress-indicator",["accessibleName","displayValue","value","valueState"],["hideValue"],[],[],()=>a(()=>import("./ProgressIndicator-7Wnregxa.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]),import.meta.url));e.displayName="ProgressIndicator";try{e.displayName="ProgressIndicator",e.__docgenInfo={description:`Shows the progress of a process in a graphical way. To indicate the progress,
the inside of the component is filled with a color.

### Responsive Behavior
You can change the size of the Progress Indicator by changing its \`width\` or \`height\` CSS properties.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ProgressIndicator",props:{accessibleName:{defaultValue:null,description:`Defines the accessible ARIA name of the component.

**Note:** Available since [v1.16.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.16.0) of **@ui5/webcomponents**.`,name:"accessibleName",required:!1,type:{name:"string"}},displayValue:{defaultValue:{value:"null"},description:"Specifies the text value to be displayed in the bar.\n\n**Note:**\n\n- If there is no value provided or the value is empty, the default percentage value is shown.\n- If `hideValue` property is `true` both the `displayValue` and `value` property values are not shown.",name:"displayValue",required:!1,type:{name:"string"}},hideValue:{defaultValue:{value:"false"},description:"Defines whether the component value is shown.",name:"hideValue",required:!1,type:{name:"boolean"}},value:{defaultValue:{value:"0"},description:`Specifies the numerical value in percent for the length of the component.

**Note:**
If a value greater than 100 is provided, the percentValue is set to 100. In other cases of invalid value, percentValue is set to its default of 0.`,name:"value",required:!1,type:{name:"number"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"None"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{e.displayName="ProgressIndicator",e.__docgenInfo={description:`Shows the progress of a process in a graphical way. To indicate the progress,
the inside of the component is filled with a color.

### Responsive Behavior
You can change the size of the Progress Indicator by changing its \`width\` or \`height\` CSS properties.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ProgressIndicator",props:{accessibleName:{defaultValue:null,description:`Defines the accessible ARIA name of the component.

**Note:** Available since [v1.16.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.16.0) of **@ui5/webcomponents**.`,name:"accessibleName",required:!1,type:{name:"string"}},displayValue:{defaultValue:{value:"null"},description:"Specifies the text value to be displayed in the bar.\n\n**Note:**\n\n- If there is no value provided or the value is empty, the default percentage value is shown.\n- If `hideValue` property is `true` both the `displayValue` and `value` property values are not shown.",name:"displayValue",required:!1,type:{name:"string"}},hideValue:{defaultValue:{value:"false"},description:"Defines whether the component value is shown.",name:"hideValue",required:!1,type:{name:"boolean"}},value:{defaultValue:{value:"0"},description:`Specifies the numerical value in percent for the length of the component.

**Note:**
If a value greater than 100 is provided, the percentValue is set to 100. In other cases of invalid value, percentValue is set to its default of 0.`,name:"value",required:!1,type:{name:"number"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"None"'},{value:'"Positive"'},{value:'"Critical"'},{value:'"Negative"'},{value:'"Information"'},{value:'"None"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as P};
