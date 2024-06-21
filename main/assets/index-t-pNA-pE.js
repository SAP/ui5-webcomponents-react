const __vite__fileDeps=["./List-BqVnVLtz.js","./UI5Element-D1gTBhJw.js","./Boot-CUKJMqeB.js","./EventProvider-CVfkyUHo.js","./useIsomorphicLayoutEffect-CJg151Ok.js","./index-CP2MHerv.js","./CustomElementsScopeUtils-Br5bzw3_.js","./withWebComponent-BqYi3caL.js","./utils-BVRly08L.js","./ResizeHandler-Cj9P7VXu.js","./ItemNavigation-twDmSpa0.js","./Keys-B00bFMgT.js","./getActiveElement-kltGt_DR.js","./event-Dq0fpeHi.js","./slot--DoKcWSY.js","./Integer-WDQzHAdZ.js","./AriaLabelHelper-LMIEtYQL.js","./TabbableElements-BE9nZgBS.js","./isElementHidden-B4HqmI2E.js","./getEffectiveScrollbarStyle-BwuZEAK6.js","./i18nBundle-DqiJMVwP.js","./debounce-TTkz9ISH.js","./MarkedEvents-CAur0wxK.js","./parameters-bundle.css-B_nLitlw.js","./class-map-CsNukgzr.js","./BusyIndicator-26zPD-3p.js","./Device-RcFucVeJ.js","./Label-l1L6wisg.js","./WrappingType-CW8URInd.js","./i18n-defaults-BhCgZGmI.js","./style-map-Blizc8Vd.js","./BrowserScrollbar.css-CWM6CH73.js","./CheckBox-CWnLBxaQ.js","./ValueState-Bg0UWejw.js","./accept-Tej0xwW-.js","./Icons-DKhvPm64.js","./Icon-DybkHgDw.js","./RadioButton-CsWmL_ym.js","./FocusableElements-BqtokFct.js","./decline-BjJnkMLk.js","./i18n-defaults-Fz8map0O.js","./Button-B4JAmSK-.js","./willShowContent-CZcfsNXp.js","./slim-arrow-right-CFfSgiU2.js","./Avatar-uA8_6Xzm.js","./employee-CKaAdAd4.js","./alert-CCqY5Vji.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as o}from"./iframe-4Fxt_YRx.js";import"./List-BqVnVLtz.js";import{w as n}from"./withWebComponent-BqYi3caL.js";const e=n("ui5-li-group",["headerAccessibleName","headerText"],[],["header"],[],()=>o(()=>import("./List-BqVnVLtz.js").then(t=>t.n),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46]),import.meta.url));e.displayName="ListItemGroup";try{e.displayName="ListItemGroup",e.__docgenInfo={description:`The \`ListItemGroup\` is a special list item, used only to create groups of list items.

This is the item to use inside a \`List\`.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ListItemGroup",props:{children:{defaultValue:null,description:"Defines the items of the <code>ui5-li-group</code>.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the header of the component.

**Note:** Using this slot, the default header text of group and the value of \`headerText\` property will be overwritten.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},headerAccessibleName:{defaultValue:null,description:"Defines the accessible name of the header.",name:"headerAccessibleName",required:!1,type:{name:"string"}},headerText:{defaultValue:null,description:"Defines the header text of the <code>ui5-li-group</code>.",name:"headerText",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{e.displayName="ListItemGroup",e.__docgenInfo={description:`The \`ListItemGroup\` is a special list item, used only to create groups of list items.

This is the item to use inside a \`List\`.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"ListItemGroup",props:{children:{defaultValue:null,description:"Defines the items of the <code>ui5-li-group</code>.",name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},header:{defaultValue:null,description:`Defines the header of the component.

**Note:** Using this slot, the default header text of group and the value of \`headerText\` property will be overwritten.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="header"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/?path=/docs/knowledge-base-handling-slots--docs).`,name:"header",required:!1,type:{name:"UI5WCSlotsNode"}},headerAccessibleName:{defaultValue:null,description:"Defines the accessible name of the header.",name:"headerAccessibleName",required:!1,type:{name:"string"}},headerText:{defaultValue:null,description:"Defines the header text of the <code>ui5-li-group</code>.",name:"headerText",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as L};
