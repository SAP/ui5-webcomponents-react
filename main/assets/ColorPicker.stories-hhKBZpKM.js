const __vite__fileDeps=["./ColorPicker-_FDJx8J_.js","./withWebComponent-DykTwaBJ.js","./utils-BXNPXA0w.js","./index-BQ1WsyJB.js","./useIsomorphicLayoutEffect-Cwmfti2R.js","./event-Dq0fpeHi.js","./Keys-F_3Gvx0K.js","./i18nBundle-CEPDwMcb.js","./style-map-CP3POd5N.js","./if-defined-Pg2MF6OO.js","./Input-CAPIE7hW.js","./slot-_4yKMUwC.js","./ResizeHandler-CwA30WlK.js","./ValueState-Bg0UWejw.js","./AriaLabelHelper-C5uDZewF.js","./getActiveElement-kltGt_DR.js","./decline-PQHY0vmQ.js","./Icon-C1aVUqaK.js","./parameters-bundle.css-BFbT_feV.js","./i18n-defaults-4yB5uAXJ.js","./information-s0rUc520.js","./alert-B5x9ZRdn.js","./Popover-xb-dB4fv.js","./PopupsCommon.css-BS0HwvId.js","./getEffectiveScrollbarStyle-C7TfqF8H.js","./isElementHidden-B4HqmI2E.js","./isElementClickable-0ACQ4G_A.js","./MediaRange-Bnzt26Xb.js","./class-map-BBkLNtsu.js","./BrowserScrollbar.css-3d9vQOhG.js","./i18n-defaults-Ddp6Qu_n.js","./ResponsivePopoverCommon.css-DS0Jh9QN.js","./ValueStateMessage.css-BJp4jLqs.js","./ResponsivePopover-C8JyzrPV.js","./Dialog-KG2OBlTm.js","./Button-gEiq340s.js","./MarkedEvents-CAur0wxK.js","./willShowContent-CZcfsNXp.js","./Title-B8CZCSNg.js","./Slider-Dpmiolpk.js","./SliderBase-DIv3ofX_.js","./Label-Cn8Z-EZA.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as i}from"./iframe-Du1sszHP.js";import"./ColorPicker-_FDJx8J_.js";import{w as a}from"./withWebComponent-DykTwaBJ.js";const e=a("ui5-color-picker",["name","value"],[],[],["change"],()=>i(()=>import("./ColorPicker-_FDJx8J_.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41]),import.meta.url));e.displayName="ColorPicker";try{e.displayName="ColorPicker",e.__docgenInfo={description:`The \`ColorPicker\` allows users to choose any color and provides different input options for selecting colors.

### Usage

#### When to use
Use the color picker if:

-  users need to select any color freely.

#### When not to use

-  Users need to select one color from a predefined set of colors. Use the ColorPalette component instead.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ColorPicker",props:{onChange:{defaultValue:null,description:"Fired when the the selected color is changed",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPickerDomRef, never>) => void"}},name:{defaultValue:{value:"undefined"},description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"name",required:!1,type:{name:"string"}},value:{defaultValue:{value:'"rgba(255,255,255,1)"'},description:`Defines the currently selected color of the component.

**Note**: use HEX, RGB, RGBA, HSV formats or a CSS color name when modifying this property.`,name:"value",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{e.displayName="ColorPicker",e.__docgenInfo={description:`The \`ColorPicker\` allows users to choose any color and provides different input options for selecting colors.

### Usage

#### When to use
Use the color picker if:

-  users need to select any color freely.

#### When not to use

-  Users need to select one color from a predefined set of colors. Use the ColorPalette component instead.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ColorPicker",props:{onChange:{defaultValue:null,description:"Fired when the the selected color is changed",name:"onChange",required:!1,type:{name:"(event: Ui5CustomEvent<ColorPickerDomRef, never>) => void"}},name:{defaultValue:{value:"undefined"},description:`Determines the name by which the component will be identified upon submission in an HTML form.

**Note:** This property is only applicable within the context of an HTML Form element.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"name",required:!1,type:{name:"string"}},value:{defaultValue:{value:'"rgba(255,255,255,1)"'},description:`Defines the currently selected color of the component.

**Note**: use HEX, RGB, RGBA, HSV formats or a CSS color name when modifying this property.`,name:"value",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}const l={title:"Inputs / ColorPicker",component:e,argTypes:{},args:{},tags:["package:@ui5/webcomponents"]},o={};var n,t,r;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(r=(t=o.parameters)==null?void 0:t.docs)==null?void 0:r.source}}};const c=["Default"],d=Object.freeze(Object.defineProperty({__proto__:null,Default:o,__namedExportsOrder:c,default:l},Symbol.toStringTag,{value:"Module"}));export{d as C,o as D};
