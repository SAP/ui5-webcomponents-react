import{_ as n}from"./iframe-83b4d09c.js";import{L as a}from"./Link-8b80096c.js";import{w as i}from"./withWebComponent-884f99a7.js";const e=i("ui5-link",["accessibleName","accessibleNameRef","accessibleRole","design","href","target","wrappingType"],["disabled"],[],["click"],()=>n(()=>import("./Link-8b80096c.js").then(t=>t.b),["./Link-8b80096c.js","./UI5Element-a8445a25.js","./CustomElementsScopeUtils-137da8c8.js","./withWebComponent-884f99a7.js","./utils-69f7a0e0.js","./index-ebeaab24.js","./jsx-runtime-5926aa06.js","./useIsomorphicLayoutEffect-38a48652.js","./Icon-3e9cb840.js","./Icons-c55d12a5.js","./AriaLabelHelper-43a261ec.js","./MarkedEvents-b83081e9.js","./WrappingType-b81e595a.js","./i18n-defaults-fca59c5d.js"],import.meta.url));e.displayName="Link";e.defaultProps={accessibleRole:"link",design:a.Default};try{e.displayName="Link",e.__docgenInfo={description:`The \`Link\` is a hyperlink component that is used to navigate to other apps and web pages, or to trigger actions. It is a clickable text element, visualized in such a way that it stands out from the standard text. On hover, it changes its style to an underlined text to provide additional feedback to the user.

__Note:__ This component is a web component developed by the UI5 Web Components’ team.

<ui5-link href="https://sap.github.io/ui5-webcomponents/playground/components/Link" target="_blank">UI5 Web Components Playground</ui5-link>`,displayName:"Link",props:{children:{defaultValue:null,description:`Defines the text of the component.
**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.`,name:"children",required:!1,type:{name:"ReactNode | ReactNode[]"}},onClick:{defaultValue:null,description:"Fired when the component is triggered either with a mouse/tap or by using the Enter key.",name:"onClick",required:!1,type:{name:"(event: Ui5CustomEvent<LinkDomRef, LinkClickEventDetail>) => void"}},accessibleName:{defaultValue:null,description:"Defines the accessible ARIA name of the component.",name:"accessibleName",required:!1,type:{name:"string"}},accessibleNameRef:{defaultValue:null,description:"Receives id(or many ids) of the elements that label the input",name:"accessibleNameRef",required:!1,type:{name:"string"}},accessibleRole:{defaultValue:{value:"link"},description:'Defines the ARIA role of the component. **Note:** Use the "button" role in cases when navigation is not expected to occur and the href property is not defined.',name:"accessibleRole",required:!1,type:{name:"string"}},design:{defaultValue:{value:"LinkDesign.Default"},description:"Defines the component design.\n\n**Note:** Avaialble options are `Default`, `Subtle`, and `Emphasized`.",name:"design",required:!1,type:{name:"enum",value:[{value:'"Default"'},{value:'"Emphasized"'},{value:'"Default"'},{value:'"Subtle"'},{value:'"Emphasized"'},{value:'"Subtle"'}]}},disabled:{defaultValue:null,description:`Defines whether the component is disabled.

**Note:** When disabled, the click event cannot be triggered by the user.`,name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:`Defines the component href.

**Note:** Standard hyperlink behavior is supported.`,name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"Defines the component target.\n\n**Notes:**\n\n*   `_self`\n*   `_top`\n*   `_blank`\n*   `_parent`\n*   `_search`\n\n**This property must only be used when the `href` property is set.**",name:"target",required:!1,type:{name:"string"}},wrappingType:{defaultValue:null,description:"Defines how the text of a component will be displayed when there is not enough space. Available options are:\n\n*   `None` - The text will be truncated with an ellipsis.\n*   `Normal` - The text will wrap. The words will not be broken based on hyphenation.",name:"wrappingType",required:!1,type:{name:"enum",value:[{value:'"None"'},{value:'"None"'},{value:'"Normal"'},{value:'"Normal"'}]}},style:{defaultValue:null,description:`Element style which will be appended to the most outer element of a component.
Use this prop carefully, some css properties might break the component.`,name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:`CSS Class Name which will be appended to the most outer element of a component.
Use this prop carefully, overwriting CSS rules might break the component.`,name:"className",required:!1,type:{name:"string"}},waitForDefine:{defaultValue:null,description:`Defines whether the component should wait for the underlying custom element of the web component to be defined. This can be useful, for example, for using instance methods when mounting the component.

__Note:__ This adds a rendering cycle to your component.`,name:"waitForDefine",required:!1,type:{name:"boolean"}}}}}catch{}export{e as L};
//# sourceMappingURL=index-16057921.js.map
