const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Tag-BGV0RLgG.js","./withWebComponent--2-UXDGX.js","./utils-DLW1sA5D.js","./index-ClU-Tc1p.js","./useIsomorphicLayoutEffect-BDy32gDd.js","./event-Dq0fpeHi.js","./slot-_4yKMUwC.js","./i18nBundle-d4QydjzH.js","./willShowContent-CZcfsNXp.js","./Keys-F_3Gvx0K.js","./Icon-uF1AIezb.js","./if-defined-BflNsp1k.js","./parameters-bundle.css-DJWIHzS2.js","./sys-help-2-Ceay95o3.js","./information-DOrNCQ6l.js","./i18n-defaults-CEQaAj6E.js","./alert-RJboOX4N.js","./TagDesign-Dou_yO3g.js","./i18n-defaults-CY90T2oA.js"])))=>i.map(i=>d[i]);
import{_ as n}from"./iframe-B1DxKb9w.js";import"./Tag-BGV0RLgG.js";import{w as o}from"./withWebComponent--2-UXDGX.js";const e=o("ui5-tag",["colorScheme","design","size","wrappingType"],["hideStateIcon","interactive"],["icon"],["click"],()=>n(()=>import("./Tag-BGV0RLgG.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]),import.meta.url));e.displayName="Tag";try{e.displayName="Tag",e.__docgenInfo={description:`The \`Tag\` is a component which serves
the purpose to attract the user attention to some piece
of information (state, quantity, condition, etc.).
It can contain icon and text information, and its design can be chosen from specific design types.

### Usage Guidelines

- If the text is longer than the width of the component, it can wrap, or it can show ellipsis, depending on the \`wrappingType\` property.
- Colors can be semantic or not semantic.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Tag",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed in the component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="icon"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"icon",required:!1,type:{name:"UI5WCSlotsNode"}},onClick:{defaultValue:null,description:"Fired when the user clicks on an interactive tag.\n\n**Note:** The event will be fired if the `interactive` property is `true`\n\n**Note:** Available since [v1.22.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.22.0) of **@ui5/webcomponents**.",name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<TagDomRef, never>) => void"}},colorScheme:{defaultValue:{value:'"1"'},description:'Defines the color scheme of the component.\nThere are 10 predefined schemes.\nTo use one you can set a number from `"1"` to `"10"`. The `colorScheme` `"1"` will be set by default.',name:"colorScheme",required:!1,type:{name:"string"}},design:{defaultValue:{value:'"Neutral"'},description:`Defines the design type of the component.

**Note:** Available since [v1.22.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.22.0) of **@ui5/webcomponents**.`,name:"design",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"Neutral"'},{value:'"Set1"'},{value:'"Set2"'},{value:'"Neutral"'},{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"Set1"'},{value:'"Set2"'}]}},hideStateIcon:{defaultValue:{value:"false"},description:`Defines if the default state icon is shown.

**Note:** Available since [v1.22.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.22.0) of **@ui5/webcomponents**.`,name:"hideStateIcon",required:!1,type:{name:"boolean"}},interactive:{defaultValue:{value:"false"},description:`Defines if the component is interactive (focusable and pressable).

**Note:** Available since [v1.22.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.22.0) of **@ui5/webcomponents**.`,name:"interactive",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:'"S"'},description:`Defines predefined size of the component.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"size",required:!1,type:{name:"enum",value:[{value:'"S"'},{value:'"L"'},{value:'"S"'},{value:'"L"'}]}},wrappingType:{defaultValue:{value:'"Normal"'},description:`Defines how the text of a component will be displayed when there is not enough space.

**Note:** For option "Normal" the text will wrap and the
words will not be broken based on hyphenation.

**Note:** Available since [v1.22.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.22.0) of **@ui5/webcomponents**.`,name:"wrappingType",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Normal"'},{value:'"Normal"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{e.displayName="Tag",e.__docgenInfo={description:`The \`Tag\` is a component which serves
the purpose to attract the user attention to some piece
of information (state, quantity, condition, etc.).
It can contain icon and text information, and its design can be chosen from specific design types.

### Usage Guidelines

- If the text is longer than the width of the component, it can wrap, or it can show ellipsis, depending on the \`wrappingType\` property.
- Colors can be semantic or not semantic.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Tag",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},icon:{defaultValue:null,description:`Defines the icon to be displayed in the component.

__Note:__ The content of the prop will be rendered into a [&lt;slot&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot) by assigning the respective [slot](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/slot) attribute (\`slot="icon"\`).
Since you can't change the DOM order of slots when declaring them within a prop, it might prove beneficial to manually mount them as part of the component's children, especially when facing problems with the reading order of screen readers.

__Note:__ When passing a custom React component to this prop, you have to make sure your component reads the \`slot\` prop and appends it to the most outer element of your component.
Learn more about it [here](https://sap.github.io/ui5-webcomponents-react/v2/?path=/docs/knowledge-base-handling-slots--docs).`,name:"icon",required:!1,type:{name:"UI5WCSlotsNode"}},onClick:{defaultValue:null,description:"Fired when the user clicks on an interactive tag.\n\n**Note:** The event will be fired if the `interactive` property is `true`\n\n**Note:** Available since [v1.22.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.22.0) of **@ui5/webcomponents**.",name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<TagDomRef, never>) => void"}},colorScheme:{defaultValue:{value:'"1"'},description:'Defines the color scheme of the component.\nThere are 10 predefined schemes.\nTo use one you can set a number from `"1"` to `"10"`. The `colorScheme` `"1"` will be set by default.',name:"colorScheme",required:!1,type:{name:"string"}},design:{defaultValue:{value:'"Neutral"'},description:`Defines the design type of the component.

**Note:** Available since [v1.22.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.22.0) of **@ui5/webcomponents**.`,name:"design",required:!1,type:{name:"enum",value:[{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"Neutral"'},{value:'"Set1"'},{value:'"Set2"'},{value:'"Neutral"'},{value:'"Information"'},{value:'"Positive"'},{value:'"Negative"'},{value:'"Critical"'},{value:'"Set1"'},{value:'"Set2"'}]}},hideStateIcon:{defaultValue:{value:"false"},description:`Defines if the default state icon is shown.

**Note:** Available since [v1.22.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.22.0) of **@ui5/webcomponents**.`,name:"hideStateIcon",required:!1,type:{name:"boolean"}},interactive:{defaultValue:{value:"false"},description:`Defines if the component is interactive (focusable and pressable).

**Note:** Available since [v1.22.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.22.0) of **@ui5/webcomponents**.`,name:"interactive",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:'"S"'},description:`Defines predefined size of the component.

**Note:** Available since [v2.0.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0) of **@ui5/webcomponents**.`,name:"size",required:!1,type:{name:"enum",value:[{value:'"S"'},{value:'"L"'},{value:'"S"'},{value:'"L"'}]}},wrappingType:{defaultValue:{value:'"Normal"'},description:`Defines how the text of a component will be displayed when there is not enough space.

**Note:** For option "Normal" the text will wrap and the
words will not be broken based on hyphenation.

**Note:** Available since [v1.22.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.22.0) of **@ui5/webcomponents**.`,name:"wrappingType",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Normal"'},{value:'"Normal"'}]}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as T};
