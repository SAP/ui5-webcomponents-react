const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BusyIndicator-3fgnP-Yx.js","./UI5Element-CTUeyjn-.js","./Boot-HIcYreCJ.js","./EventProvider-B3ZIXKWe.js","./useIsomorphicLayoutEffect-DxKEogMX.js","./index-BP8_t0zE.js","./CustomElementsScope-OuufJIgt.js","./withWebComponent-iwEMLCwM.js","./utils-BWz0JEZ6.js","./i18nBundle-DAKTKoOS.js","./Keys-BgUkNma0.js","./Integer-Dh6YzFpK.js","./Label-CLIt97QH.js","./WrappingType-CW8URInd.js","./i18n-defaults-bByU6Tgp.js","./parameters-bundle.css-Dq8i2jqa.js","./class-map-BOjq1HnK.js"])))=>i.map(i=>d[i]);
import{_ as n}from"./iframe-CvChxwBn.js";import"./BusyIndicator-3fgnP-Yx.js";import{w as o}from"./withWebComponent-iwEMLCwM.js";const e=o("ui5-busy-indicator",["delay","size","text","textPlacement"],["active"],[],[],()=>n(()=>import("./BusyIndicator-3fgnP-Yx.js").then(t=>t.b),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]),import.meta.url));e.displayName="BusyIndicator";try{e.displayName="BusyIndicator",e.__docgenInfo={description:`The \`BusyIndicator\` signals that some operation is going on and that the
user must wait. It does not block the current UI screen so other operations could be triggered in parallel.
It displays 3 dots and each dot expands and shrinks at a different rate, resulting in a cascading flow of animation.

### Usage
For the \`BusyIndicator\` you can define the size, the text and whether it is shown or hidden.
In order to hide it, use the "active" property.

In order to show busy state over an HTML element, simply nest the HTML element in a \`BusyIndicator\` instance.

**Note:** Since \`BusyIndicator\` has \`display: inline-block;\` by default and no width of its own,
whenever you need to wrap a block-level element, you should set \`display: block\` to the busy indicator as well.

#### When to use:

- The user needs to be able to cancel the operation.
- Only part of the application or a particular component is affected.

#### When not to use:

- The operation takes less than one second.
- You need to block the screen and prevent the user from starting another activity.
- Do not show multiple busy indicators at once.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"BusyIndicator",props:{children:{defaultValue:null,description:"Determines the content over which the component will appear.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},active:{defaultValue:{value:"false"},description:"Defines if the busy indicator is visible on the screen. By default it is not.",name:"active",required:!1,type:{name:"boolean"}},delay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the busy indicator will be visible on the screen.",name:"delay",required:!1,type:{name:"number"}},size:{defaultValue:{value:'"Medium"'},description:"Defines the size of the component.",name:"size",required:!1,type:{name:"enum",value:[{value:'"Small"'},{value:'"Medium"'},{value:'"Large"'},{value:'"Small"'},{value:'"Medium"'},{value:'"Large"'}]}},text:{defaultValue:null,description:"Defines text to be displayed below the component. It can be used to inform the user of the current operation.",name:"text",required:!1,type:{name:"string"}},textPlacement:{defaultValue:{value:'"Bottom"'},description:"Defines the placement of the text.",name:"textPlacement",required:!1,type:{name:"enum",value:[{value:'"Top"'},{value:'"Bottom"'},{value:'"Top"'},{value:'"Bottom"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{e.displayName="BusyIndicator",e.__docgenInfo={description:`The \`BusyIndicator\` signals that some operation is going on and that the
user must wait. It does not block the current UI screen so other operations could be triggered in parallel.
It displays 3 dots and each dot expands and shrinks at a different rate, resulting in a cascading flow of animation.

### Usage
For the \`BusyIndicator\` you can define the size, the text and whether it is shown or hidden.
In order to hide it, use the "active" property.

In order to show busy state over an HTML element, simply nest the HTML element in a \`BusyIndicator\` instance.

**Note:** Since \`BusyIndicator\` has \`display: inline-block;\` by default and no width of its own,
whenever you need to wrap a block-level element, you should set \`display: block\` to the busy indicator as well.

#### When to use:

- The user needs to be able to cancel the operation.
- Only part of the application or a particular component is affected.

#### When not to use:

- The operation takes less than one second.
- You need to block the screen and prevent the user from starting another activity.
- Do not show multiple busy indicators at once.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"BusyIndicator",props:{children:{defaultValue:null,description:"Determines the content over which the component will appear.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},active:{defaultValue:{value:"false"},description:"Defines if the busy indicator is visible on the screen. By default it is not.",name:"active",required:!1,type:{name:"boolean"}},delay:{defaultValue:{value:"1000"},description:"Defines the delay in milliseconds, after which the busy indicator will be visible on the screen.",name:"delay",required:!1,type:{name:"number"}},size:{defaultValue:{value:'"Medium"'},description:"Defines the size of the component.",name:"size",required:!1,type:{name:"enum",value:[{value:'"Small"'},{value:'"Medium"'},{value:'"Large"'},{value:'"Small"'},{value:'"Medium"'},{value:'"Large"'}]}},text:{defaultValue:null,description:"Defines text to be displayed below the component. It can be used to inform the user of the current operation.",name:"text",required:!1,type:{name:"string"}},textPlacement:{defaultValue:{value:'"Bottom"'},description:"Defines the placement of the text.",name:"textPlacement",required:!1,type:{name:"enum",value:[{value:'"Top"'},{value:'"Bottom"'},{value:'"Top"'},{value:'"Bottom"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as B};
