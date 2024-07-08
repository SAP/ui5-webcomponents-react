const __vite__fileDeps=["./List-DAUCd9GG.js","./UI5Element-CpDKvy14.js","./CustomElementsScopeUtils-CUyxdJhU.js","./useIsomorphicLayoutEffect-kTr5k6y8.js","./index-BQ1WsyJB.js","./withWebComponent-BS5KmJ8y.js","./utils-BKwn1mod.js","./ResizeHandler-DrydYuxf.js","./ItemNavigation-B3IUttqO.js","./Keys-pFVWso__.js","./getActiveElement-kltGt_DR.js","./event-Dq0fpeHi.js","./slot-_4yKMUwC.js","./AriaLabelHelper-C5uDZewF.js","./isElementInView-CjfjvN8v.js","./getEffectiveScrollbarStyle-BwuZEAK6.js","./i18nBundle-BnWtnlV0.js","./debounce-TTkz9ISH.js","./class-map-C2xEFFE_.js","./parameters-bundle.css-BFbT_feV.js","./BusyIndicator-Cvlx0ISj.js","./Device-RcFucVeJ.js","./Label-q6_PzA5e.js","./i18n-defaults-CTWfTbaq.js","./if-defined-fOOg8zCW.js","./style-map-BYlmazPT.js","./BrowserScrollbar.css-BHkuoGam.js","./MarkedEvents-CAur0wxK.js","./FocusableElements-Bv7oiNdI.js","./isElementHidden-B4HqmI2E.js","./isElementClickable-0ACQ4G_A.js","./decline-U1USmITW.js","./Icons-CXhWYR-U.js","./i18n-defaults-eVMsPoDe.js","./TabbableElements-BJJu_CDc.js","./RadioButton-pij5LUus.js","./ValueState-Bg0UWejw.js","./CheckBox-5dqs80VY.js","./accept-Bh1zuBLx.js","./Icon-B_ypp_jl.js","./Button-BNnZDQ19.js","./willShowContent-CZcfsNXp.js","./slim-arrow-right-BcqVerrF.js","./Avatar-3swUBYi8.js","./employee-BYHCCK7_.js","./alert-CzwHodYh.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as o}from"./iframe-DB1c1wU1.js";import"./List-DAUCd9GG.js";import{w as n}from"./withWebComponent-BS5KmJ8y.js";const e=n("ui5-li-group",["headerAccessibleName","headerText"],[],["header"],[],()=>o(()=>import("./List-DAUCd9GG.js").then(t=>t.n),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45]),import.meta.url));e.displayName="ListItemGroup";try{e.displayName="ListItemGroup",e.__docgenInfo={description:`The \`ListItemGroup\` is a special list item, used only to create groups of list items.

This is the item to use inside a \`List\`.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ListItemGroup",props:{children:{defaultValue:null,description:"Defines the items of the <code>ui5-li-group</code>.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the header of the component.

**Note:** Using this slot, the default header text of group and the value of \`headerText\` property will be overwritten.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},headerAccessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible name of the header.",name:"headerAccessibleName",required:!1,type:{name:"string"}},headerText:{defaultValue:{value:"undefined"},description:"Defines the header text of the <code>ui5-li-group</code>.",name:"headerText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{e.displayName="ListItemGroup",e.__docgenInfo={description:`The \`ListItemGroup\` is a special list item, used only to create groups of list items.

This is the item to use inside a \`List\`.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ListItemGroup",props:{children:{defaultValue:null,description:"Defines the items of the <code>ui5-li-group</code>.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the header of the component.

**Note:** Using this slot, the default header text of group and the value of \`headerText\` property will be overwritten.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},headerAccessibleName:{defaultValue:{value:"undefined"},description:"Defines the accessible name of the header.",name:"headerAccessibleName",required:!1,type:{name:"string"}},headerText:{defaultValue:{value:"undefined"},description:"Defines the header text of the <code>ui5-li-group</code>.",name:"headerText",required:!1,type:{name:"string"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as L};
