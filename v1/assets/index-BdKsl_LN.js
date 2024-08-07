const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Link-o5XdlJUs.js","./UI5Element-Dvkr4ftu.js","./Boot-BJoOGsKW.js","./EventProvider-B3ZIXKWe.js","./useIsomorphicLayoutEffect-CikWMOA2.js","./index-BP8_t0zE.js","./CustomElementsScope-GSIIlBKM.js","./withWebComponent-BCCnzL34.js","./utils-Sfm-TJlC.js","./event-CegLCnR0.js","./Keys-BgUkNma0.js","./AriaLabelHelper-CzOXVcye.js","./i18nBundle-wW0MItbA.js","./MarkedEvents-BPv6Lv4o.js","./WrappingType-CW8URInd.js","./HasPopup-Cecjtg2t.js","./i18n-defaults-DXLPKTKT.js","./parameters-bundle.css-DD3rGyNs.js"])))=>i.map(i=>d[i]);
import{_ as n}from"./iframe-C9XTG8i_.js";import"./Link-o5XdlJUs.js";import{w as a}from"./withWebComponent-BCCnzL34.js";const e=a("ui5-link",["accessibleName","accessibleNameRef","accessibleRole","design","href","target","wrappingType"],["disabled"],[],["click"],()=>n(()=>import("./Link-o5XdlJUs.js").then(t=>t.b),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]),import.meta.url));e.displayName="Link";try{e.displayName="Link",e.__docgenInfo={description:`The \`Link\` is a hyperlink component that is used to navigate to other
apps and web pages, or to trigger actions.
It is a clickable text element, visualized in such a way that it stands out
from the standard text.
On hover, it changes its style to an underlined text to provide additional feedback to the user.

### Usage

You can set the \`Link\` to be enabled or disabled.

To create a visual hierarchy in large lists of links, you can set the less important links as
\`Subtle\` or the more important ones as \`Emphasized\`,
by using the \`design\` property.

If the \`href\` property is set, the link behaves as the HTML
anchor tag (\`<a></a>\`) and opens the specified URL in the given target frame (\`target\` property).
To specify where the linked content is opened, you can use the \`target\` property.

### Responsive behavior

If there is not enough space, the text of the \`Link\` becomes truncated.
If the \`wrappingType\` property is set to \`"Normal"\`, the text is displayed
on several lines instead of being truncated.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Link",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClick:{defaultValue:null,description:`Fired when the component is triggered either with a mouse/tap
or by using the Enter key.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<LinkDomRef, LinkClickEventDetail>) => void"}},accessibleName:{defaultValue:null,description:`Defines the accessible ARIA name of the component.

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the input",name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"link"'},description:`Defines the ARIA role of the component.

**Note:** Use the "button" role in cases when navigation is not expected to occur and the href property is not defined.

**Note:** Available since [v1.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.9.0) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"string"}},design:{defaultValue:{value:'"Default"'},description:"Defines the component design.\n\n**Note:** Avaialble options are `Default`, `Subtle`, and `Emphasized`.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Emphasized"'},{value:'"Default"'},{value:'"Subtle"'},{value:'"Emphasized"'},{value:'"Subtle"'}]}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.

**Note:** When disabled, the click event cannot be triggered by the user.`,name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:`Defines the component href.

**Note:** Standard hyperlink behavior is supported.`,name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"Defines the component target.\n\n**Notes:**\n\n- `_self`\n- `_top`\n- `_blank`\n- `_parent`\n- `_search`\n\n**This property must only be used when the `href` property is set.**",name:"target",required:!1,type:{name:"string"}},wrappingType:{defaultValue:{value:'"None"'},description:`Defines how the text of a component will be displayed when there is not enough space.

**Note:** for option "Normal" the text will wrap and the words will not be broken based on hyphenation.`,name:"wrappingType",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Normal"'},{value:'"Normal"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}try{e.displayName="Link",e.__docgenInfo={description:`The \`Link\` is a hyperlink component that is used to navigate to other
apps and web pages, or to trigger actions.
It is a clickable text element, visualized in such a way that it stands out
from the standard text.
On hover, it changes its style to an underlined text to provide additional feedback to the user.

### Usage

You can set the \`Link\` to be enabled or disabled.

To create a visual hierarchy in large lists of links, you can set the less important links as
\`Subtle\` or the more important ones as \`Emphasized\`,
by using the \`design\` property.

If the \`href\` property is set, the link behaves as the HTML
anchor tag (\`<a></a>\`) and opens the specified URL in the given target frame (\`target\` property).
To specify where the linked content is opened, you can use the \`target\` property.

### Responsive behavior

If there is not enough space, the text of the \`Link\` becomes truncated.
If the \`wrappingType\` property is set to \`"Normal"\`, the text is displayed
on several lines instead of being truncated.



__Note__: This is a UI5 Web Component! [Repository](https://github.com/SAP/ui5-webcomponents) | [Documentation](https://sap.github.io/ui5-webcomponents/)`,displayName:"Link",props:{children:{defaultValue:null,description:`Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClick:{defaultValue:null,description:`Fired when the component is triggered either with a mouse/tap
or by using the Enter key.

**Note:** Call \`event.preventDefault()\` inside the handler of this event to prevent its default action/s.`,name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<LinkDomRef, LinkClickEventDetail>) => void"}},accessibleName:{defaultValue:null,description:`Defines the accessible ARIA name of the component.

**Note:** Available since [v1.2.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.2.0) of **@ui5/webcomponents**.`,name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the input",name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:'"link"'},description:`Defines the ARIA role of the component.

**Note:** Use the "button" role in cases when navigation is not expected to occur and the href property is not defined.

**Note:** Available since [v1.9.0](https://github.com/SAP/ui5-webcomponents/releases/tag/v1.9.0) of **@ui5/webcomponents**.`,name:"accessibleRole",required:!1,type:{name:"string"}},design:{defaultValue:{value:'"Default"'},description:"Defines the component design.\n\n**Note:** Avaialble options are `Default`, `Subtle`, and `Emphasized`.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Emphasized"'},{value:'"Default"'},{value:'"Subtle"'},{value:'"Emphasized"'},{value:'"Subtle"'}]}},disabled:{defaultValue:{value:"false"},description:`Defines whether the component is disabled.

**Note:** When disabled, the click event cannot be triggered by the user.`,name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:`Defines the component href.

**Note:** Standard hyperlink behavior is supported.`,name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"Defines the component target.\n\n**Notes:**\n\n- `_self`\n- `_top`\n- `_blank`\n- `_parent`\n- `_search`\n\n**This property must only be used when the `href` property is set.**",name:"target",required:!1,type:{name:"string"}},wrappingType:{defaultValue:{value:'"None"'},description:`Defines how the text of a component will be displayed when there is not enough space.

**Note:** for option "Normal" the text will wrap and the words will not be broken based on hyphenation.`,name:"wrappingType",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Normal"'},{value:'"Normal"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as L};
