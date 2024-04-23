function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./ProgressIndicator-CDzI8ind.js","./UI5Element-9EXj3atz.js","./Boot-vTaFuwdG.js","./VersionInfo-ldzxTIVv.js","./CustomElementsScopeUtils-orabJqjR.js","./withWebComponent-LTFbYRvs.js","./utils-d3BcYjeO.js","./index-OjgoNOWw.js","./jsx-runtime-DtaoT6pD.js","./useIsomorphicLayoutEffect-s31TYDr7.js","./ValueState-zUcANXoY.js","./Integer-kog98579.js","./AnimationMode-rtntj-do.js","./i18nBundle-j8vDD4VY.js","./Icon-kyep1SqZ.js","./event-lM5HanI-.js","./Icons-Vbmmw7bO.js","./Keys-ZEuNsqmZ.js","./parameters-bundle.css-EKzfhWK3.js","./i18n-defaults-X1FTyPSK.js","./class-map-gjOVarQw.js","./style-map-tejh5TI3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./iframe-PMMZ518-.js";import"./ProgressIndicator-CDzI8ind.js";import{w as t}from"./withWebComponent-LTFbYRvs.js";const e=t("ui5-progress-indicator",["accessibleName","displayValue","value","valueState"],["disabled","hideValue"],[],[],()=>a(()=>import("./ProgressIndicator-CDzI8ind.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]),import.meta.url));e.displayName="ProgressIndicator";try{e.displayName="ProgressIndicator",e.__docgenInfo={description:`Shows the progress of a process in a graphical way. To indicate the progress,
the inside of the component is filled with a color.

### Responsive Behavior
You can change the size of the Progress Indicator by changing its \`width\` or \`height\` CSS properties.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)`,displayName:"ProgressIndicator",props:{accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Defines whether component is in disabled state.",name:"disabled",required:!1,type:{name:"boolean"}},displayValue:{defaultValue:{value:"null"},description:"Specifies the text value to be displayed in the bar.\n\n**Note:**\n\n- If there is no value provided or the value is empty, the default percentage value is shown.\n- If `hideValue` property is `true` both the `displayValue` and `value` property values are not shown.",name:"displayValue",required:!1,type:{name:"string"}},hideValue:{defaultValue:{value:"false"},description:"Defines whether the component value is shown.",name:"hideValue",required:!1,type:{name:"boolean"}},value:{defaultValue:{value:"0"},description:`Specifies the numerical value in percent for the length of the component.

**Note:**
If a value greater than 100 is provided, the percentValue is set to 100. In other cases of invalid value, percentValue is set to its default of 0.`,name:"value",required:!1,type:{name:"number"}},valueState:{defaultValue:{value:'"None"'},description:"Defines the value state of the component.",name:"valueState",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Warning"'},{value:'"None"'},{value:'"Error"'},{value:'"Success"'},{value:'"None"'},{value:'"Success"'},{value:'"Warning"'},{value:'"Error"'},{value:'"Information"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as P};
