import{_ as t}from"./iframe-WUzyVZLd.js";import"./Slider-dJ_DMOUF.js";import{w as n}from"./withWebComponent--kEkWNJH.js";const e=n("ui5-slider",["accessibleName","labelInterval","max","min","step","value"],["disabled","showTickmarks","showTooltip"],[],["change","input"],()=>t(()=>import("./Slider-dJ_DMOUF.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]),import.meta.url));e.displayName="Slider";try{e.displayName="Slider",e.__docgenInfo={description:`The Slider component represents a numerical range and a handle (grip). The purpose of the component is to enable visual selection of a value in a continuous numerical range by moving an adjustable handle.

### Structure

The most important properties of the Slider are:

*   min - The minimum value of the slider range.
*   max - The maximum value of the slider range.
*   value - The current value of the slider range.
*   step - Determines the increments in which the slider will move.
*   showTooltip - Determines if a tooltip should be displayed above the handle.
*   showTickmarks - Displays a visual divider between the step values.
*   labelInterval - Labels some or all of the tickmarks with their values.

### Usage

The most common use case is to select values on a continuous numerical scale (e.g. temperature, volume, etc. ).

### Responsive Behavior

The \`Slider\` component adjusts to the size of its parent container by recalculating and resizing the width of the control. You can move the slider handle in several different ways:

*   Drag and drop the handle to the desired value.
*   Click/tap on the range bar to move the handle to that location.

### Keyboard Handling

*   \`Left or Down Arrow\` - Moves the handle one step to the left, effectively decreasing the component's value by \`step\` amount;
*   \`Right or Up Arrow\` - Moves the handle one step to the right, effectively increasing the component's value by \`step\` amount;
*   \`Left or Down Arrow + Ctrl/Cmd\` - Moves the handle to the left with step equal to 1/10th of the entire range, effectively decreasing the component's value by 1/10th of the range;
*   \`Right or Up Arrow + Ctrl/Cmd\` - Moves the handle to the right with step equal to 1/10th of the entire range, effectively increasing the component's value by 1/10th of the range;
*   \`Plus\` - Same as \`Right or Up Arrow\`;
*   \`Minus\` - Same as \`Left or Down Arrow\`;
*   \`Home\` - Moves the handle to the beginning of the range;
*   \`End\` - Moves the handle to the end of the range;
*   \`Page Up\` - Same as \`Right or Up + Ctrl/Cmd\`;
*   \`Page Down\` - Same as \`Left or Down + Ctrl/Cmd\`;
*   \`Escape\` - Resets the value property after interaction, to the position prior the component's focusing;

__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/playground/)`,displayName:"Slider",props:{onChange:{defaultValue:null,description:"Fired when the value changes and the user has finished interacting with the slider.",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<SliderDomRef, never>) => void"}},onInput:{defaultValue:null,description:"Fired when the value changes due to user interaction that is not yet finished - during mouse/touch dragging.",name:"onInput",required:!1,type:{name:"(event: Ui5CustomEvent<SliderDomRef, never>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Defines whether the slider is in disabled state.",name:"disabled",required:!1,type:{name:"boolean"}},labelInterval:{defaultValue:{value:"0"},description:`Displays a label with a value on every N-th step.

**Note:** The step and tickmarks properties must be enabled. Example - if the step value is set to 2 and the label interval is also specified to 2 - then every second tickmark will be labelled, which means every 4th value number.`,name:"labelInterval",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"Defines the maximum value of the slider.",name:"max",required:!1,type:{name:"number"}},min:{defaultValue:{value:"0"},description:"Defines the minimum value of the slider.",name:"min",required:!1,type:{name:"number"}},showTickmarks:{defaultValue:{value:"false"},description:`Enables tickmarks visualization for each step.

**Note:** The step must be a positive number.`,name:"showTickmarks",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:{value:"false"},description:"Enables handle tooltip displaying the current value.",name:"showTooltip",required:!1,type:{name:"boolean"}},step:{defaultValue:{value:"1"},description:`Defines the size of the slider's selection intervals (e.g. min = 0, max = 10, step = 5 would result in possible selection of the values 0, 5, 10).

**Note:** If set to 0 the slider handle movement is disabled. When negative number or value other than a number, the component fallbacks to its default value.`,name:"step",required:!1,type:{name:"number"}},value:{defaultValue:{value:"0"},description:"Current value of the slider",name:"value",required:!1,type:{name:"number"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as S};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Slider-dJ_DMOUF.js","./withWebComponent--kEkWNJH.js","./utils-rNFQc6Ui.js","./VersionInfo-AzzP9wS2.js","./index-OjgoNOWw.js","./CustomElementsScopeUtils-IpwVqUeG.js","./jsx-runtime-DtaoT6pD.js","./useIsomorphicLayoutEffect-s31TYDr7.js","./Float-0fEWDOdp.js","./Integer-kog98579.js","./i18nBundle-YDapVb1x.js","./Keys-Mzj2D4aO.js","./SliderBase-qNVF4sPg.js","./UI5Element-_cJDeK03.js","./event-lM5HanI-.js","./ResizeHandler-xTi6PJ7P.js","./Icons-dG5I7pqk.js","./parameters-bundle.css-mPCp9TQx.js","./Icon-1HyKfQwB.js","./class-map-Y-YjCFqX.js","./style-map-5njKSr-C.js","./i18n-defaults-3YbdkqSs.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
